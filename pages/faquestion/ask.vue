<template>
<div class="main_global_bg">
<div class="container">
    <div class="ask_content" id="newQuestion">
    <div class="row">
        <div class="column">
            <div class="ui breadcrumb red_breadcrumb">
                <a class="section" href="https://www.oschina.net/question">开源问答</a>
                <span class="glyphicon glyphicon glyphicon-menu-right" aria-hidden="true"></span>
                <div class="active section">我要提问</div>
            </div>
        </div>
    </div>
    <div class="tablet mobile only row">
        <div class="column"><div class="ui warning small message">
    <h4 class="header">提问和发帖必读</h4>
    <ol class="list">
        <li>技术无关问题请勿在此发布</li>
        <li>提问有人回答后不允许修改和删除</li>
        <li>请勿在此发布招聘信息，<a href="https://www.oschina.net/job">我要招聘</a></li>
        <li>请勿在此发布活动信息，<a href="https://www.oschina.net/event">我要发布活动</a></li>
        <li>更多信息请查阅 &nbsp;<a href="https://www.oschina.net/question/2918182_2262855" target="_blank">新版社区规范</a></li>
    </ol>
</div>
</div>
    </div>
    <div class="row">
        <div class="twelve wide computer sixteen wide tablet column">
            
            <form class="ui new-question form">
                <input type="hidden" name="user_code" value="IMqpO8mgcnPOwUeaVbRFT5zlfSFKllVq4AFnIACu">
                <input type="hidden" name="userId" value="2825958">
                <input type="hidden" name="id" value="">
                <input type="hidden" name="askUserId" value="0">
                <input type="hidden" name="tag" value="">
                <input type="hidden" name="tag_type" value="">
                <div class="field">
                    <label>选择版块</label>
                    <input type="hidden" name="catalog" value="1">
                    <div class="ui five item pointing menu catalog">
                        <a class="item active" data-value="1" title="技术问答"><i class="help circle icon"></i><span>技术问答</span></a>
                        <a class="item" data-value="100" title="职业生涯"><i class="student icon"></i><span>职业生涯</span></a>
                        <a class="item" data-value="2" title="技术分享"><i class="share alternate icon"></i><span>技术分享</span></a>
                        <a class="item" data-value="3" title="IT大杂烩"><i class="users icon"></i><span>IT大杂烩</span></a>
                        <a class="item" data-value="4" title="站务/建议"><i class="call icon"></i><span>站务/建议</span></a>
                    </div>
                </div>
                <div class="required field">
                    <label>标题</label>
                    <div class="ui input focus">
                        <input type="text" name="subject" placeholder="您有什么技术问题，请在此输入" value="">
                    </div>
                </div>
                <div class="field">
                    <a href="https://www.oschina.net/question/12_21851" target="_blank">什么样的问题在OSC算是一个好问题？</a>
                </div>
                <div class="field">
                    <label>软件</label>
                    <div class="ui fluid multiple search selection dropdown project-name">
                        <input type="hidden" name="prj" value="">
                        <input type="text" class="search" tabindex="0"><span class="sizer"></span>
                        <div class="default text">准确的关联开源软件，可让更多专家看到这个问题 (最多5个)</div>
                        <div class="menu" tabindex="-1">
                                                                                </div>
                    </div>
                </div>
                                
                <div class="required field">
                                                                                    <label>描述（请对问题进行详细描述：如软件运行环境、详细错误、异常信息等）</label>
                    <textarea name="body" class="ckeditor body-textarea" style="visibility: hidden; display: none;"></textarea><div id="cke_body" class="cke_1 cke cke_reset cke_chrome cke_editor_body cke_ltr cke_browser_webkit" dir="ltr" lang="zh-cn" role="application" aria-labelledby="cke_body_arialbl"><span id="cke_body_arialbl" class="cke_voice_label">所见即所得编辑器, body</span><div class="cke_inner cke_reset" role="presentation"><span id="cke_1_top" class="cke_top cke_reset_all" role="presentation" style="height: auto; user-select: none;"><span id="cke_9" class="cke_voice_label">工具栏</span><span id="cke_1_toolbox" class="cke_toolbox" role="group" aria-labelledby="cke_9" onmousedown="return false;"><span id="cke_11" class="cke_toolbar" aria-labelledby="cke_11_label" role="toolbar"><span id="cke_11_label" class="cke_voice_label">基本格式</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_12" class="cke_button cke_button__bold cke_button_off" href="javascript:void('加粗')" title="加粗 (Ctrl+B)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_12_label" aria-describedby="cke_12_description" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(2,event);" onfocus="return CKEDITOR.tools.callFunction(3,event);" onclick="CKEDITOR.tools.callFunction(4,this);return false;"><span class="cke_button_icon cke_button__bold_icon" style="background-image:url('https://static.oschina.net/new-osc/js/utils/plugins/ckeditor/plugins/icons.png?t=20200113');background-position:0 -24px;background-size:auto;">&nbsp;</span><span id="cke_12_label" class="cke_button_label cke_button__bold_label" aria-hidden="false">加粗</span><span id="cke_12_description" class="cke_button_label" aria-hidden="false">快捷键 Ctrl+B</span></a><a id="cke_13" class="cke_button cke_button__italic cke_button_off" href="javascript:void('倾斜')" title="倾斜 (Ctrl+I)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_13_label" aria-describedby="cke_13_description" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(5,event);" onfocus="return CKEDITOR.tools.callFunction(6,event);" onclick="CKEDITOR.tools.callFunction(7,this);return false;"><span class="cke_button_icon cke_button__italic_icon" style="background-image:url('https://static.oschina.net/new-osc/js/utils/plugins/ckeditor/plugins/icons.png?t=20200113');background-position:0 -48px;background-size:auto;">&nbsp;</span><span id="cke_13_label" class="cke_button_label cke_button__italic_label" aria-hidden="false">倾斜</span><span id="cke_13_description" class="cke_button_label" aria-hidden="false">快捷键 Ctrl+I</span></a><a id="cke_14" class="cke_button cke_button__underline cke_button_off" href="javascript:void('下划线')" title="下划线 (Ctrl+U)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_14_label" aria-describedby="cke_14_description" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(8,event);" onfocus="return CKEDITOR.tools.callFunction(9,event);" onclick="CKEDITOR.tools.callFunction(10,this);return false;"><span class="cke_button_icon cke_button__underline_icon" style="background-image:url('https://static.oschina.net/new-osc/js/utils/plugins/ckeditor/plugins/icons.png?t=20200113');background-position:0 -144px;background-size:auto;">&nbsp;</span><span id="cke_14_label" class="cke_button_label cke_button__underline_label" aria-hidden="false">下划线</span><span id="cke_14_description" class="cke_button_label" aria-hidden="false">快捷键 Ctrl+U</span></a><a id="cke_15" class="cke_button cke_button__strike cke_button_off" href="javascript:void('删除线')" title="删除线" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_15_label" aria-describedby="cke_15_description" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(11,event);" onfocus="return CKEDITOR.tools.callFunction(12,event);" onclick="CKEDITOR.tools.callFunction(13,this);return false;"><span class="cke_button_icon cke_button__strike_icon" style="background-image:url('https://static.oschina.net/new-osc/js/utils/plugins/ckeditor/plugins/icons.png?t=20200113');background-position:0 -72px;background-size:auto;">&nbsp;</span><span id="cke_15_label" class="cke_button_label cke_button__strike_label" aria-hidden="false">删除线</span><span id="cke_15_description" class="cke_button_label" aria-hidden="false"></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_16" class="cke_toolbar" aria-labelledby="cke_16_label" role="toolbar"><span id="cke_16_label" class="cke_voice_label">链接</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_17" class="cke_button cke_button__link cke_button_off" href="javascript:void('插入/编辑超链接')" title="插入/编辑超链接 (Ctrl+L)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_17_label" aria-describedby="cke_17_description" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(14,event);" onfocus="return CKEDITOR.tools.callFunction(15,event);" onclick="CKEDITOR.tools.callFunction(16,this);return false;"><span class="cke_button_icon cke_button__link_icon" style="background-image:url('https://static.oschina.net/new-osc/js/utils/plugins/ckeditor/plugins/icons.png?t=20200113');background-position:0 -528px;background-size:auto;">&nbsp;</span><span id="cke_17_label" class="cke_button_label cke_button__link_label" aria-hidden="false">插入/编辑超链接</span><span id="cke_17_description" class="cke_button_label" aria-hidden="false">快捷键 Ctrl+L</span></a><a id="cke_18" class="cke_button cke_button__unlink cke_button_disabled " href="javascript:void('取消超链接')" title="取消超链接" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_18_label" aria-describedby="cke_18_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(17,event);" onfocus="return CKEDITOR.tools.callFunction(18,event);" onclick="CKEDITOR.tools.callFunction(19,this);return false;"><span class="cke_button_icon cke_button__unlink_icon" style="background-image:url('https://static.oschina.net/new-osc/js/utils/plugins/ckeditor/plugins/icons.png?t=20200113');background-position:0 -552px;background-size:auto;">&nbsp;</span><span id="cke_18_label" class="cke_button_label cke_button__unlink_label" aria-hidden="false">取消超链接</span><span id="cke_18_description" class="cke_button_label" aria-hidden="false"></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_19" class="cke_toolbar" aria-labelledby="cke_19_label" role="toolbar"><span id="cke_19_label" class="cke_voice_label">插入</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_20" class="cke_button cke_button__image cke_button_off" href="javascript:void('图像')" title="图像" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_20_label" aria-describedby="cke_20_description" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(20,event);" onfocus="return CKEDITOR.tools.callFunction(21,event);" onclick="CKEDITOR.tools.callFunction(22,this);return false;"><span class="cke_button_icon cke_button__image_icon" style="background-image:url('https://static.oschina.net/new-osc/js/utils/plugins/ckeditor/plugins/icons.png?t=20200113');background-position:0 -360px;background-size:auto;">&nbsp;</span><span id="cke_20_label" class="cke_button_label cke_button__image_label" aria-hidden="false">图像</span><span id="cke_20_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_21" class="cke_button cke_button__table cke_button_off" href="javascript:void('表格')" title="表格" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_21_label" aria-describedby="cke_21_description" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(23,event);" onfocus="return CKEDITOR.tools.callFunction(24,event);" onclick="CKEDITOR.tools.callFunction(25,this);return false;"><span class="cke_button_icon cke_button__table_icon" style="background-image:url('https://static.oschina.net/new-osc/js/utils/plugins/ckeditor/plugins/icons.png?t=20200113');background-position:0 -912px;background-size:auto;">&nbsp;</span><span id="cke_21_label" class="cke_button_label cke_button__table_label" aria-hidden="false">表格</span><span id="cke_21_description" class="cke_button_label" aria-hidden="false"></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_22" class="cke_toolbar" aria-labelledby="cke_22_label" role="toolbar"><span id="cke_22_label" class="cke_voice_label">颜色</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_23" class="cke_button cke_button__textcolor cke_button_off" href="javascript:void('文本颜色')" title="文本颜色" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_23_label" aria-describedby="cke_23_description" aria-haspopup="true" onkeydown="return CKEDITOR.tools.callFunction(26,event);" onfocus="return CKEDITOR.tools.callFunction(27,event);" onclick="CKEDITOR.tools.callFunction(28,this);return false;"><span class="cke_button_icon cke_button__textcolor_icon" style="background-image:url('https://static.oschina.net/new-osc/js/utils/plugins/ckeditor/plugins/icons.png?t=20200113');background-position:0 -1128px;background-size:auto;">&nbsp;</span><span id="cke_23_label" class="cke_button_label cke_button__textcolor_label" aria-hidden="false">文本颜色</span><span id="cke_23_description" class="cke_button_label" aria-hidden="false"></span><span class="cke_button_arrow"></span></a><a id="cke_24" class="cke_button cke_button__bgcolor cke_button_off" href="javascript:void('背景颜色')" title="背景颜色" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_24_label" aria-describedby="cke_24_description" aria-haspopup="true" onkeydown="return CKEDITOR.tools.callFunction(29,event);" onfocus="return CKEDITOR.tools.callFunction(30,event);" onclick="CKEDITOR.tools.callFunction(31,this);return false;"><span class="cke_button_icon cke_button__bgcolor_icon" style="background-image:url('https://static.oschina.net/new-osc/js/utils/plugins/ckeditor/plugins/icons.png?t=20200113');background-position:0 -1104px;background-size:auto;">&nbsp;</span><span id="cke_24_label" class="cke_button_label cke_button__bgcolor_label" aria-hidden="false">背景颜色</span><span id="cke_24_description" class="cke_button_label" aria-hidden="false"></span><span class="cke_button_arrow"></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_25" class="cke_toolbar" aria-labelledby="cke_25_label" role="toolbar"><span id="cke_25_label" class="cke_voice_label">段落</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_26" class="cke_button cke_button__numberedlist cke_button_off" href="javascript:void('编号列表')" title="编号列表" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_26_label" aria-describedby="cke_26_description" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(32,event);" onfocus="return CKEDITOR.tools.callFunction(33,event);" onclick="CKEDITOR.tools.callFunction(34,this);return false;"><span class="cke_button_icon cke_button__numberedlist_icon" style="background-image:url('https://static.oschina.net/new-osc/js/utils/plugins/ckeditor/plugins/icons.png?t=20200113');background-position:0 -648px;background-size:auto;">&nbsp;</span><span id="cke_26_label" class="cke_button_label cke_button__numberedlist_label" aria-hidden="false">编号列表</span><span id="cke_26_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_27" class="cke_button cke_button__bulletedlist cke_button_off" href="javascript:void('项目列表')" title="项目列表" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_27_label" aria-describedby="cke_27_description" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(35,event);" onfocus="return CKEDITOR.tools.callFunction(36,event);" onclick="CKEDITOR.tools.callFunction(37,this);return false;"><span class="cke_button_icon cke_button__bulletedlist_icon" style="background-image:url('https://static.oschina.net/new-osc/js/utils/plugins/ckeditor/plugins/icons.png?t=20200113');background-position:0 -600px;background-size:auto;">&nbsp;</span><span id="cke_27_label" class="cke_button_label cke_button__bulletedlist_label" aria-hidden="false">项目列表</span><span id="cke_27_description" class="cke_button_label" aria-hidden="false"></span></a><span class="cke_toolbar_separator" role="separator"></span><a id="cke_28" class="cke_button cke_button__justifyleft cke_button_on" href="javascript:void('左对齐')" title="左对齐" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_28_label" aria-describedby="cke_28_description" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(38,event);" onfocus="return CKEDITOR.tools.callFunction(39,event);" onclick="CKEDITOR.tools.callFunction(40,this);return false;" aria-pressed="true"><span class="cke_button_icon cke_button__justifyleft_icon" style="background-image:url('https://static.oschina.net/new-osc/js/utils/plugins/ckeditor/plugins/icons.png?t=20200113');background-position:0 -1200px;background-size:auto;">&nbsp;</span><span id="cke_28_label" class="cke_button_label cke_button__justifyleft_label" aria-hidden="false">左对齐</span><span id="cke_28_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_29" class="cke_button cke_button__justifycenter cke_button_off" href="javascript:void('居中')" title="居中" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_29_label" aria-describedby="cke_29_description" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(41,event);" onfocus="return CKEDITOR.tools.callFunction(42,event);" onclick="CKEDITOR.tools.callFunction(43,this);return false;"><span class="cke_button_icon cke_button__justifycenter_icon" style="background-image:url('https://static.oschina.net/new-osc/js/utils/plugins/ckeditor/plugins/icons.png?t=20200113');background-position:0 -1176px;background-size:auto;">&nbsp;</span><span id="cke_29_label" class="cke_button_label cke_button__justifycenter_label" aria-hidden="false">居中</span><span id="cke_29_description" class="cke_button_label" aria-hidden="false"></span></a><span class="cke_toolbar_separator" role="separator"></span><a id="cke_30" class="cke_button cke_button__blockquote cke_button_off" href="javascript:void('块引用')" title="块引用" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_30_label" aria-describedby="cke_30_description" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(44,event);" onfocus="return CKEDITOR.tools.callFunction(45,event);" onclick="CKEDITOR.tools.callFunction(46,this);return false;"><span class="cke_button_icon cke_button__blockquote_icon" style="background-image:url('https://static.oschina.net/new-osc/js/utils/plugins/ckeditor/plugins/icons.png?t=20200113');background-position:0 -168px;background-size:auto;">&nbsp;</span><span id="cke_30_label" class="cke_button_label cke_button__blockquote_label" aria-hidden="false">块引用</span><span id="cke_30_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_31" class="cke_button cke_button__codesnippet cke_button_off" href="javascript:void('插入代码段')" title="插入代码段" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_31_label" aria-describedby="cke_31_description" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(47,event);" onfocus="return CKEDITOR.tools.callFunction(48,event);" onclick="CKEDITOR.tools.callFunction(49,this);return false;"><span class="cke_button_icon cke_button__codesnippet_icon" style="background-image:url('https://static.oschina.net/new-osc/js/utils/plugins/ckeditor/plugins/icons.png?t=20200113');background-position:0 -1056px;background-size:auto;">&nbsp;</span><span id="cke_31_label" class="cke_button_label cke_button__codesnippet_label" aria-hidden="false">插入代码段</span><span id="cke_31_description" class="cke_button_label" aria-hidden="false"></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_32" class="cke_toolbar" aria-labelledby="cke_32_label" role="toolbar"><span id="cke_32_label" class="cke_voice_label">样式</span><span class="cke_toolbar_start"></span><span id="cke_10" class="cke_combo cke_combo__format cke_combo_off" role="presentation"><span id="cke_10_label" class="cke_combo_label">格式</span><a class="cke_combo_button" title="格式" tabindex="-1" href="javascript:void('格式')" hidefocus="true" role="button" aria-labelledby="cke_10_label" aria-haspopup="true" onkeydown="return CKEDITOR.tools.callFunction(51,event,this);" onfocus="return CKEDITOR.tools.callFunction(52,event);" onclick="CKEDITOR.tools.callFunction(50,this);return false;"><span id="cke_10_text" class="cke_combo_text">普通</span><span class="cke_combo_open"><span class="cke_combo_arrow"></span></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_33" class="cke_toolbar cke_toolbar_last" aria-labelledby="cke_33_label" role="toolbar"><span id="cke_33_label" class="cke_voice_label">工具</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_34" class="cke_button cke_button__source cke_button_off" href="javascript:void('源码')" title="源码" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_34_label" aria-describedby="cke_34_description" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(53,event);" onfocus="return CKEDITOR.tools.callFunction(54,event);" onclick="CKEDITOR.tools.callFunction(55,this);return false;"><span class="cke_button_icon cke_button__source_icon" style="background-image:url('https://static.oschina.net/new-osc/js/utils/plugins/ckeditor/plugins/icons.png?t=20200113');background-position:0 -840px;background-size:auto;">&nbsp;</span><span id="cke_34_label" class="cke_button_label cke_button__source_label" aria-hidden="false">源码</span><span id="cke_34_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_35" class="cke_button cke_button__maximize cke_button_off" href="javascript:void('全屏')" title="全屏" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_35_label" aria-describedby="cke_35_description" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(56,event);" onfocus="return CKEDITOR.tools.callFunction(57,event);" onclick="CKEDITOR.tools.callFunction(58,this);return false;"><span class="cke_button_icon cke_button__maximize_icon" style="background-image:url('https://static.oschina.net/new-osc/js/utils/plugins/ckeditor/plugins/icons.png?t=20200113');background-position:0 -672px;background-size:auto;">&nbsp;</span><span id="cke_35_label" class="cke_button_label cke_button__maximize_label" aria-hidden="false">全屏</span><span id="cke_35_description" class="cke_button_label" aria-hidden="false"></span></a></span><span class="cke_toolbar_end"></span></span></span></span><div id="cke_1_contents" class="cke_contents cke_reset" role="presentation" style="height: 350px;"><span id="cke_40" class="cke_voice_label">按 ALT+0 获得帮助</span><iframe src="" frameborder="0" class="cke_wysiwyg_frame cke_reset" style="width: 100%; height: 100%;" title="所见即所得编辑器, body" aria-describedby="cke_40" tabindex="0" allowtransparency="true"></iframe></div><span id="cke_1_bottom" class="cke_bottom cke_reset_all" role="presentation" style="user-select: none;"><span id="cke_1_resizer" class="cke_resizer cke_resizer_vertical cke_resizer_ltr" title="拖拽以改变大小" onmousedown="CKEDITOR.tools.callFunction(0, event)">◢</span><span id="cke_1_path_label" class="cke_voice_label">元素路径</span><span id="cke_1_path" class="cke_path" role="group" aria-labelledby="cke_1_path_label"><a id="cke_elementspath_6_1" href="javascript:void('body')" tabindex="-1" class="cke_path_item" title="body 元素" hidefocus="true" onkeydown="return CKEDITOR.tools.callFunction(60,1, event );" onclick="CKEDITOR.tools.callFunction(59,1); return false;" role="button" aria-label="body 元素">body</a><a id="cke_elementspath_6_0" href="javascript:void('p')" tabindex="-1" class="cke_path_item" title="p 元素" hidefocus="true" onkeydown="return CKEDITOR.tools.callFunction(60,0, event );" onclick="CKEDITOR.tools.callFunction(59,0); return false;" role="button" aria-label="p 元素">p</a><span class="cke_path_empty">&nbsp;</span></span></span></div></div>
                </div>
                <div class="field">
                    <div class="ui checkbox">
                        <input type="hidden" name="notifyMethod" value="0">
                                                                                                                                            <input type="checkbox" name="notifyMethod" value="1" class="hidden" tabindex="0">
                            <label>有人回答时邮件通知我 (957963898@qq.com) <a href="https://my.oschina.net/redskt/admin/mail-settings" target="_blank">更改提醒邮箱？</a></label>
                                            </div>
                </div>
                <div class="field">
                    <div class="ui checkbox">
                        <input type="hidden" name="closeAnswer" value="0">
                        <input type="checkbox" name="closeAnswer" value="1" class="hidden" tabindex="0">
                        <label>此帖不允许评论</label>
                    </div>
                </div>
                                                <div class="ui positive mini message osc hidden"></div>
                <div class="ui negative mini message osc hidden"></div>
                <button class="ui primary large button" type="submit">发布问题</button>
                <div class="ui hidden divider"></div>
            </form>
        </div>
        <div class="four wide computer only column"><div class="ui warning small message">
    <h4 class="header">提问和发帖必读</h4>
    <ol class="list">
        <li>技术无关问题请勿在此发布</li>
        <li>提问有人回答后不允许修改和删除</li>
        <li>请勿在此发布招聘信息，<a href="https://www.oschina.net/job">我要招聘</a></li>
        <li>请勿在此发布活动信息，<a href="https://www.oschina.net/event">我要发布活动</a></li>
        <li>更多信息请查阅 &nbsp;<a href="https://www.oschina.net/question/2918182_2262855" target="_blank">新版社区规范</a></li>
    </ol>
</div>
</div>
    </div>
</div>
</div>
</div>
</template>


<style>

.ask_content {
    background: #fff;
    padding: 0 10px;
    margin-top: 10px;
}

.ui.breadcrumb .section {
    display: inline-block;
    margin: 0;
    padding: 0;
}

.ask_content .red_breadcrumb {
    font-size: 14px;
    padding: 12px 25px;
    background-color:transparent;
}

.ui.form .field {
    clear: both;
    margin: 0 0 1em;
}

.ui.form .field>label {
    display: block;
    margin: 0 0 .28571429rem 0;
    color: rgba(0,0,0,.87);
    font-size: .92857143em;
    font-weight: 700;
    text-transform: none;
}

.ui.breadcrumb .active.section {
    font-weight: 700;
    color: rgba(0,0,0,.87);
}


</style>