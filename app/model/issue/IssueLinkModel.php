<?php

namespace main\app\model\issue;

use main\app\model\CacheModel;

/**
 *  问题链接模型
 */
class IssueLinkModel extends CacheModel
{
    public $prefix = 'issue_';

    public $table = 'link';

    public $fields = '*';

    public $issue_id = '';

    const   DATA_KEY = 'issue_link';

    /**
     * 用于实现单例模式
     * @var self
     */
    protected static $_instance;


    public function __construct($issue_id = '', $persistent = false)
    {
        parent::__construct($issue_id, $persistent);

        $this->issue_id = $issue_id;

    }

    /**
     * 创建一个自身的单例对象
     * @param string $issue_id
     * @param bool $persistent
     * @throws PDOException
     * @return self
     */
    public static function getInstance($issue_id = '', $persistent = false)
    {
        $index = $issue_id . strval(intval($persistent));
        if (!isset(self::$_instance[$index]) || !is_object(self::$_instance[$index])) {

            self::$_instance[$index] = new self($issue_id, $persistent);
        }
        return self::$_instance[$index];
    }

    public function getItemsByIssueId($issue_id)
    {
        return $this->getRows('*', ['issue_id' => $issue_id]);

    }

    public function insertItem($issue_id, $info)
    {
        $info['issue_id'] = $issue_id;
        return $this->insert($info);
    }

    public function updateItemByIssueId($issue_id, $info)
    {
        $conditions['issue_id'] = $issue_id;
        return $this->update($info, $conditions);
    }

    public function deleteByIssueId($issue_id)
    {
        $conditions = [];
        $conditions['issue_id'] = $issue_id;
        return $this->delete($conditions);
    }

}