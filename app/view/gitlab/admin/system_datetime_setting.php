<!DOCTYPE html>
<html class="" lang="en">
<head  >

    <? require_once VIEW_PATH.'gitlab/common/header/include.php';?>
    <script src="<?=ROOT_URL?>dev/js/admin/setting.js" type="text/javascript" charset="utf-8"></script>
    <script src="<?=ROOT_URL?>dev/lib/handlebars-v4.0.10.js" type="text/javascript" charset="utf-8"></script>

</head>
<body class="" data-group="" data-page="projects:issues:index" data-project="xphp">
<? require_once VIEW_PATH.'gitlab/common/body/script.php';?>


<header class="navbar navbar-gitlab with-horizontal-nav">
    <a class="sr-only gl-accessibility" href="#content-body" tabindex="1">Skip to content</a>
    <div class="container-fluid">
        <? require_once VIEW_PATH.'gitlab/common/body/header-content.php';?>
    </div>
</header>
<script>
    var findFileURL = "/ismond/xphp/find_file/master";
</script>
<div class="page-with-sidebar">
    <? require_once VIEW_PATH.'gitlab/admin/common-page-nav-admin.php';?>
    <div class="content-wrapper page-with-layout-nav page-with-sub-nav">
        <div class="alert-wrapper">

            <div class="flash-container flash-container-page">
            </div>

        </div>
        <div class="container-fluid ">

            <div class="content" id="content-body">

                <?php include VIEW_PATH.'gitlab/admin/common_system_left_nav.php';?>
                <div class="row prepend-top-default" style="margin-left: 160px">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <strong>日期/时间格式</strong><span> 关于时间日期格式的文档可在线查看</span>
                            <form class="form-inline member-search-form" action="#" accept-charset="UTF-8" method="get">

                                <div class="form-group">

                                    <a class="hidden-xs hidden-sm btn btn-grouped issuable-edit" data-target="#modal-edit_datetime" data-toggle="modal" href="#modal-edit_datetime">
                                        <i class="fa fa-edit"></i> 修改
                                    </a>
                                </div>
                            </form>
                        </div>

                        <div class="panel-body">
                            <div class="table-holder">
                                <table class="table ci-table">
                                    <tbody id="tbody_id">
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="modal" id="modal-edit_datetime">
                <form class="js-quick-submit js-upload-blob-form form-horizontal"
                      action="<?=ROOT_URL?>admin/system/basic_setting_update"
                      accept-charset="UTF-8"
                      method="post">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <a class="close" data-dismiss="modal" href="#">×</a>
                                <h3 class="modal-header-title">修改时间格式</h3>
                            </div>
                            <div class="modal-body">
                                <div id="form_id">

                                </div>

                                <div class="form-actions">

                                </div>
                                <button name="submit" type="button" class="btn btn-save" id="submit-all">保存</button>
                                <a class="btn btn-cancel" data-dismiss="modal" href="#">取消</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>


<script type="text/html"  id="datetime_settings_tpl">
    {{#settings}}
    <tr class="commit">
        <td>
            <div class="branch-commit">
                <strong>
                    {{title}}:
                </strong>
            </div>
        </td>
        <td> {{text}} <br> {{description}}</td>
        <td> </td>
    </tr>
    {{/settings}}
</script>
<script type="text/html"  id="datetime_settings_form_tpl">
    {{#settings}}
    <div class="form-group">
        <label class="control-label" for="date_format">{{title}}:</label>
        <div class="col-sm-5">
            <div class="form-group">
                {{#if_eq form_input_type 'text'}}
                    <input type="text" class="form-control" name="params[{{_key}}]" id="id_{{_key}}"  value="{{_value}}" />
                {{/if_eq}}
                {{#if_eq form_input_type 'radio'}}
                    {{#each form_optional_value }}
                        <label style=" font-weight: 200;  ">
                            <input type="radio" value="{{@index}}" checked="checked" name="params[{{../_key}}]" id="id_{{../_key}}">
                            {{this}}
                        </label>
                    {{/each}}
                {{/if_eq}}
            </div>
        </div>
    </div>
    {{/settings}}

</script>


<script type="text/javascript">

    $(function() {
        fetchSetting('/admin/system/setting_fetch','datetime','datetime_settings_tpl','tbody_id');
        fetchSetting('/admin/system/setting_fetch','datetime','datetime_settings_form_tpl', 'form_id');

    });

</script>


</body>
</html>


</div>