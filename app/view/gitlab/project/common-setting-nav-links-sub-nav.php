
<div class="scrolling-tabs-container sub-nav-scroll">
    <div class="fade-left">
        <i class="fa fa-angle-left"></i>
    </div>
    <div class="fade-right">
        <i class="fa fa-angle-right"></i>
    </div>

    <div class="nav-links sub-nav scrolling-tabs is-initialized">
        <ul class="container-fluid">
            <li class="<? if($sub_nav_active=='basic_info') echo 'active';?>">
                <a title="General" href="/project/setting?project_id=<?=$get_projectid?>&skey=<?=$get_skey?>">
                    <span>基本信息</span>
                </a></li>
            <li class="<? if($sub_nav_active=='issue_type') echo 'active';?>">
                <a title="问题类型" href="/project/setting/issue_type?project_id=<?=$get_projectid?>&skey=<?=$get_skey?>"><span>问题类型</span>
                </a>
            </li>
            <li class="<? if($sub_nav_active=='version') echo 'active';?>">
                <a title="版本" href="/project/setting/version?project_id=<?=$get_projectid?>&skey=<?=$get_skey?>"><span>版本</span>
                </a>
            </li>
            <li class="<? if($sub_nav_active=='module') echo 'active';?>">
                <a title="模块" href="/project/setting/module?project_id=<?=$get_projectid?>&skey=<?=$get_skey?>"><span>模块</span>
                </a>
            </li>
            <li class="<? if($sub_nav_active=='permission') echo 'active';?>">
                <a title="权限" href="/project/setting/permission?project_id=<?=$get_projectid?>&skey=<?=$get_skey?>"><span>权限</span>
                </a>
            </li>
            <li class="<? if($sub_nav_active=='project_role') echo 'active';?>">
                <a title="项目角色" href="/project/setting/project_role?project_id=<?=$get_projectid?>&skey=<?=$get_skey?>"><span>项目角色</span>
                </a>
            </li>
        </ul>
    </div>
</div>
