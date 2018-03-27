<?php
namespace main\app\model\issue;

use main\app\model\CacheModel;

/**
 *  问题类型方案子项1:M 关系的字段方案模型
 */
class IssueTypeSchemeItemsModel extends CacheModel
{
    public $prefix = 'issue_';

    public $table = 'type_scheme_data';

    const   DATA_KEY = 'issue_type_scheme_data/';

    public $fields = '*';


    public $master_id = '';

    /**
     * 用于实现单例模式
     * @var self
     */
    protected static $_instance;


    public function __construct($master_id = '', $persistent = false)
    {
        parent::__construct($master_id, $persistent);

        $this->uid = $master_id;
    }

    /**
     * 创建一个自身的单例对象
     * @param string $master_id
     * @param bool $persistent
     * @throws PDOException
     * @return self
     */
    public static function getInstance($master_id = '', $persistent = false)
    {
        $index = $master_id . strval(intval($persistent));
        if (!isset(self::$_instance[$index]) || !is_object(self::$_instance[$index])) {
            self::$_instance[$index] = new self($master_id, $persistent);
        }
        return self::$_instance[$index];
    }


    public function getItemsBySchemeId($scheme_id)
    {
        return  $this->getRows('*', ['scheme_id'=>$scheme_id ]);
    }


    public function deleteBySchemeId($scheme_id)
    {
        $conditions = [];
        $conditions['scheme_id'] = intval($scheme_id);
        return  $this->delete($conditions);
    }
}
