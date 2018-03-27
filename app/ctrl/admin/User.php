<?php

namespace main\app\ctrl\admin;

use main\app\classes\UserAuth;
use main\app\classes\Permission;
use main\app\classes\UserLogic;
use main\app\ctrl\BaseAdminCtrl;
use main\app\model\project\ProjectModel;
use main\app\model\project\ProjectRoleModel;
use main\app\model\user\UserGroupModel;
use main\app\model\user\UserModel;
use main\app\model\user\GroupModel;
use main\app\model\user\UserProjectRoleModel;

/**
 * 系统管理的用户模块
 */
class User extends BaseAdminCtrl
{

    static public $page_sizes = [10, 20, 50, 100];


    public function index()
    {

        $data = [];
        $data['title'] = 'Users';
        $data['nav_links_active'] = 'user';
        $data['left_nav_active'] = 'user';
        $this->render('gitlab/admin/users.php', $data);
    }

    public function issue()
    {

        $data = [];
        $data['title'] = 'Users';
        $this->render('gitlab/admin/main.php', $data);
    }

    public function filter($uid = 0, $username = '', $group_id = 0,
                           $status = '', $order_by = 'uid', $sort = 'desc',
                           $page = 1, $page_size = 20)
    {
        $page_size = intval($page_size);
        if (!in_array($page_size, self::$page_sizes)) {
            $page_size = self::$page_sizes[1];
        }
        $uid = intval($uid);
        $group_id = intval($group_id);
        $username = trimStr($username);
        $status = intval($status);

        $userLogic = new UserLogic();
        $fields = "U.uid as k,U.uid as uid,username,display_name,email,avatar,
        create_time,last_login_time,status,is_system,login_counter";
        list($users, $total, $groups) = $userLogic->filter(
            $fields, $uid,
            $username, $group_id,
            $status, $order_by,
            $sort, $page,
            $page_size
        );

        $data['groups'] = array_values($groups);
        $data['total'] = $total;
        $data['pages'] = ceil($total / $page_size);
        $data['page_size'] = $page_size;
        $data['page'] = $page;
        $data['users'] = array_values($users);
        $this->ajaxSuccess('', $data);

    }

    public function user_project_role($uid)
    {
        $uid = (int)$uid;
        $data = [];
        $data['uid'] = $uid;

        $data['title'] = 'Edit user project role';
        $this->render('gitlab/admin/user_project_role.php', $data);

        $this->ajaxSuccess('ok', $data);
    }

    public function user_project_role_fetch($uid)
    {
        $uid = (int)$uid;
        $userProjectRoleModel = new UserProjectRoleModel($uid);
        $user_project_roles = $userProjectRoleModel->getUserRoles($uid);

        $user_project_roles_ids = [];
        foreach ($user_project_roles as $v) {
            $user_project_roles_ids[$v['project_id'] . '@' . $v['project_role_id']] = $v;
        }
        $projectModel = new ProjectModel();
        $projects = $projectModel->getAll();
        $projectRoleModel = new ProjectRoleModel();
        $roles = $projectRoleModel->getAll();
        $ps = [];
        foreach ($projects as $p) {
            $tmp = [];
            $tmp['id'] = $p['id'];
            $tmp['name'] = $p['name'];
            foreach ($roles as $role) {
                $index = $p['id'] . '@' . $role['id'];
                $tmp[$index] = isset($user_project_roles_ids[$index]);
            }
            $ps [] = $tmp;
        }
        unset($projects);

        $data['user_project_roles_ids'] = $user_project_roles_ids;
        $data['projects'] = $ps;
        $data['roles'] = $roles;

        $this->ajaxSuccess('ok', $data);
    }


    /**
     * 某一用户的权限
     * @param $uid
     * @param $project_id
     * @return array
     */
    public function permission($uid, $project_id)
    {
        $permissionLogic = new Permission();
        return $permissionLogic->getUserHaveProjectPermissions($uid, $project_id);
    }

    /**
     * 某一用户的项目角色
     * @param $uid
     * @return array
     */
    public function project_roles($uid)
    {
        $permissionLogic = new Permission();
        return $permissionLogic->getUserProjectRoles($uid);
    }


    public function update_user_project_role($uid, $params)
    {
        $uid = intval($uid);

        $uid = (int)$uid;
        $userProjectRoleModel = new UserProjectRoleModel($uid);

        if (empty($params)) {
            $this->ajaxFailed('param_is_empty');
        }
        $userProjectRoleModel->deleteByUid($uid);
        foreach ($params as $key => $param) {
            list($project_id, $role_id) = explode('@', $key);
            $project_id = (int)$project_id;
            $role_id = (int)$role_id;
            if (!empty($project_id) && !empty($role_id)) {
                try {
                    $userProjectRoleModel->insertRole($uid, $project_id, $role_id);
                } catch (\Exception $e) {
                    var_dump($e->getMessage());
                }

            }
        }
        $this->ajaxSuccess('ok');
    }

    public function disable($uid)
    {
        if (empty($uid)) {
            $this->ajaxFailed('no_uid');
        }
        $user_info = [];
        $userModel = UserModel::getInstance();
        $user_info['status'] = UserModel::STATUS_DELETED;
        $userModel->uid = intval($_REQUEST['uid']);
        $userModel->updateUser($user_info);
        $this->ajaxSuccess('success');
    }

    /**
     * 获取单个用户信息
     * @param string $token
     * @param string $openid
     * @return object
     */
    public function get($uid)
    {
        $uid = (int)$uid;
        $userModel = UserModel::getInstance($uid);

        $userModel->uid = $uid;
        $user = $userModel->getUser();
        if (isset($user['password'])) {
            unset($user['password']);
        }
        if (!isset($user['uid'])) {
            $this->ajaxFailed('param_is_empty');
        }

        if (strpos($user['avatar'], 'http://') === false) {
            if (empty($user['avatar'])) {
                $user['avatar'] = PUBLIC_URL . 'assets/images/portrait/default_user.png';
            }
            $user['avatar'] = PUBLIC_URL . $user['avatar'];
        }
        $this->ajaxSuccess('ok', (object)$user);
    }

    public function gets()
    {
        $userLogic = new UserLogic();
        $users = $userLogic->getAllNormalUser();
        $this->ajaxSuccess('ok', $users);
    }

    public function user_group($uid)
    {
        $uid = (int)$uid;
        $data = [];
        $userGroupModel = new UserGroupModel();
        $data['user_groups'] = $userGroupModel->getGroupsByUid($uid);
        $groupModel = new GroupModel();
        $data['groups'] = $groupModel->getAll(false);
        $this->ajaxSuccess('ok', $data);
    }

    public function updateUserGroup($uid, $params)
    {
        $uid = intval($uid);
        $groups = $params['groups'];
        if (!is_array($groups)) {
            $this->ajaxFailed('param_is_error');
        }
        $userLogic = new UserLogic();
        list($ret, $msg) = $userLogic->updateUserGroup($uid, $groups);
        if ($ret) {
            $this->ajaxSuccess($msg);
        }
        $this->ajaxFailed($msg);
    }

    /**
     * 添加用户
     * @param $params
     * @throws
     */
    public function add($params)
    {
        $error_msg = [];
        if (empty($params)) {
            $error_msg['tip'] = 'param_is_empty';
        }
        if (!isset($params['password']) || empty($params['password'])) {
            $error_msg['field']['password'] = 'password_is_empty';
        }
        if (!isset($params['username']) || empty($params['username'])) {
            $error_msg['field']['username'] = 'username_is_empty';
        }
        if (!isset($params['email']) || empty($params['email'])) {
            $error_msg['field']['email'] = 'email_is_empty';
        }
        if (!isset($params['display_name']) || empty($params['display_name'])) {
            $error_msg['field']['display_name'] = 'display_name_is_empty';
        }

        if (!empty($error_msg)) {
            $this->ajaxFailed($error_msg, [], 600);
        }

        $username = $params['username'];
        $display_name = $params['display_name'];
        $password = $params['password'];
        $email = $params['email'];
        $disabled = isset($params['disable']) ? true : false;
        $user_info = [];
        $user_info['email'] = str_replace(' ', '', $email);
        $user_info['username'] = $username;
        $user_info['display_name'] = $display_name;
        $user_info['password'] = UserAuth::createPassword($password);
        $user_info['create_time'] = time();
        if ($disabled) {
            $user_info['status'] = UserModel::STATUS_DISABLED;
        }

        $userModel = UserModel::getInstance();
        $user = $userModel->getByEmail($user_info['email']);
        if (isset($user['email'])) {
            $this->ajaxFailed('email_exists');
        }

        $userModel = UserModel::getInstance();
        $user = $userModel->getByUsername($user_info['username']);
        if (isset($user['username'])) {
            $this->ajaxFailed('username_exists');
        }

        $ret = $userModel->addUser($user_info);
        if ($ret && !empty($userModel->db->getLastInsId())) {
            $this->ajaxSuccess('ok');
        } else {
            $this->ajaxFailed('server_error_add_failed');
        }

    }

    /**
     * 更新用户资料
     * @param $uid
     * @param $params
     */
    public function update($uid, $params)
    {

        $error_msg = [];
        if (empty($params)) {
            $error_msg['tip'] = 'param_is_empty';
        }
        if (isset($params['password']) && empty($params['password'])) {
            $error_msg['field']['password'] = 'password_is_empty';
        }

        if (isset($params['email']) && empty($params['email'])) {
            $error_msg['field']['email'] = 'email_is_empty';
        }
        if (isset($params['display_name']) && empty($params['display_name'])) {
            $error_msg['field']['display_name'] = 'display_name_is_empty';
        }
        if (!empty($error_msg)) {
            $this->ajaxFailed($error_msg, [], 600);
        }

        $uid = (int)$uid;

        $info = [];
        if (isset($params['email'])) {
            $info['email'] = str_replace(' ', '', $params['email']);
        }
        if (isset($params['display_name'])) {
            $info['display_name'] = $params['display_name'];
        }
        if (isset($params['disable'])) {
            $info['status'] = UserModel::STATUS_DISABLED;
        } else {
            $info['status'] = UserModel::STATUS_NORMAL;
        }

        $userModel = UserModel::getInstance();
        $user = $userModel->getByEmail($info['email']);
        if (isset($user['email']) && $user['uid'] != $uid) {
            $this->ajaxFailed('email_exists');
        }

        $userModel = UserModel::getInstance();
        $userModel->uid = $uid;
        $userModel->updateUser($info);

        $this->ajaxSuccess('ok');

    }

    /**
     * 删除用户
     */
    public function delete($uid)
    {

        if (empty($uid)) {
            $this->ajaxFailed('no_uid');
        }
        // @todo 判断有关联问题，或者管理员不能删除
        $userModel = UserModel::getInstance();
        $ret = $userModel->deleteById($uid);
        if (!$ret) {
            $this->ajaxFailed('delete_failed');
        } else {
            $this->ajaxSuccess('success');
        }

    }

    /**
     * 批量删除帐户
     */
    public function batchDisable()
    {

        if (empty($_REQUEST['checkbox_id']) || !isset($_REQUEST['checkbox_id'])) {

            $this->ajaxFailed('no_request_uid');
        }

        $userModel = UserModel::getInstance();
        foreach ($_REQUEST['checkbox_id'] as $uid) {

            $userModel->uid = intval($uid);
            $user_info = [];
            $user_info['status'] = UserModel::STATUS_DISABLED;
            $ret = $userModel->updateUser($user_info);
            if (!$ret) {
                $this->ajaxFailed('server_error_update_failed');
            }
        }
        $this->ajaxSuccess('success');

    }

    /**
     * 批量恢复帐户
     */
    public function batchRecovery()
    {

        if (empty($_REQUEST['checkbox_id']) || !isset($_REQUEST['checkbox_id'])) {

            $this->ajaxFailed('no_request_id');
        }

        $userModel = UserModel::getInstance();

        foreach ($_REQUEST['checkbox_id'] as $id) {
            $userModel->uid = intval($id);
            $user_info = [];
            $user_info['status'] = UserModel::STATUS_NORMAL;
            $userModel->updateUser($user_info);
        }
        $this->ajaxSuccess('success');

    }
}