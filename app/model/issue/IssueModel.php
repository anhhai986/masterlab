<?php

namespace main\app\model\issue;

use main\app\model\CacheModel;

/**
 *  自定义字段排列方案
 */
class IssueModel extends CacheModel
{
    public $prefix = 'issue_';

    public $table = 'main';

    public $fields = '*';

    public $project_id = '';

    const   DATA_KEY = 'issue_main';


    /**
     * 用于实现单例模式
     * @var self
     */
    protected static $_instance;

    /**
     * 创建一个自身的单例对象
     * @param bool $persistent
     * @throws PDOException
     * @return self
     */
    public static function getInstance($persistent = false)
    {
        if (!isset(self::$_instance[intval($persistent)]) || !is_object(self::$_instance[intval($persistent)])) {
            self::$_instance[intval($persistent)] = new self($persistent);
        }
        return self::$_instance[intval($persistent)];
    }

    public function getById($id)
    {
        return $this->getRowById($id);
    }


    public function getItemsByProjectId($project_id)
    {
        return $this->getRows('*', ['project_id' => $project_id]);
    }

    public function insertItem($info)
    {
        return $this->insert($info);
    }

    public function updateItemId($id, $info)
    {
        return $this->updateById($id, $info);
    }

    public function deleteById($id)
    {
        return $this->deleteById($id);
    }

}