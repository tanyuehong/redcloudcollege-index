<template>
<div class="main_global_bg">
<div class="container">
<div class="wrap how2ask main_content_bg">
                    <h1 class="h2k-title">关于如何提问</h1>
                    <h3 class="h2k-strong">先搜索，再提问</h3>
                    <p>你提问前有在 Google、百度或者我们的 <a href="https://segmentfault.com/search">搜索栏</a> 先行搜索过吗？使用搜索（引擎），能更快地帮你找到答案。即使没找到，在看了相关或者类似的问题之后，你的提问会更准确。</p>
                    <form action="/search">
                        <div class="row pb20">
                            <div class="col-sm-6 col-xs-8">
                                <input class="form-control h2k-search" type="text" name="q" value="" required="" placeholder="输入关键字搜索" autocomplete="off">
                            </div>
                            <div class="col-sm-2 col-xs-4">
                                <button type="submit" class="btn btn-primary btn-block">搜索</button>
                            </div>
                        </div>
                    </form>
                    <div id="titleSuggest" class="panel hidden widget-suggest panel-default">
                        <div class="panel-body">
                            <p>
                                <strong>这些问题可能有你需要的答案</strong>
                                <button type="button" class="widget-suggest__close btn btn-default btn-xs">关闭提示</button>
                            </p>
                            <ul id="qList" class="list-unstyled widget-suggest__list">
                            </ul>
                        </div>
                    </div>
                    <div class="row mt40">
                        <div class="col-sm-6">
                            <h3 class="h2k-strong">尽量清楚、详细地描述问题</h3>
                            <ul class="list-unstyled">
                                <li class="mb5 hook hook-primary">
                                    编程技术、软件算法、开发工具相关
                                </li>
                                <li class="mb5 hook hook-primary purclearfix">
                                    <div class="pull-left" style="margin-left:28px; margin-top:-22px;">
                                        <strong>标题</strong> 清晰明了，<strong>内容</strong> 包含必要的操作环境、截图和代码、期望结果与实际结果
                                    </div>
                                </li>
                                <li class="mb5 hook hook-primary">
                                    善用 <a href="/markdown">编辑器</a> 排版你的问题，提高可读性
                                </li>
                                <li class="hook hook-primary">
                                    准确地使用多个 <strong>标签</strong> 标记你的问题
                                </li>
                            </ul>
                        </div>

                        <div class="col-sm-6">
                            <h3 class="h2k-strong">不适合发布的</h3>
                            <ul class="list-unstyled">
                                <li class="mb5 hook hook-danger">你自己没有尝试找过答案</li>
                                <li class="mb5 hook hook-danger">征询产品、服务推荐 </li>
                                <li class="mb5 hook hook-danger">软件程序评比投票，没有结论的观点讨论</li>
                                <li class="hook hook-danger">任何与编程开发无关问题</li>
                            </ul>
                        </div>
                    </div>
                    <h3 class="h2k-strong">保持求知欲</h3>
                    <p>或许最后得到的答案并不是你最想要的，但深思熟虑过的问题依旧可能会让你有其他方面的收获。每个人的成长都是一步步来的，所以，Keep an open mind。</p>
                    <div class="mt40 border-top">
                        <div class="text-center mt40 mb40">
                                                            <a href="/ask?freshman=1" class="btn btn-primary btn-lg">我已知晓，继续提问</a>
                                                    </div>
                    </div>
                </div>
</div>
</div>

</template>

<style scoped>
.wrap {
    padding-bottom: 30px;
    padding-left: 60px;
    padding-right: 60px;
    margin-top: 30px;
    margin-bottom: 30px;
    position: relative;
}
.how2ask .h2k-title {
    font-size: 24px;
    color: #D0021B;
    border: none;
    text-align: center;
    padding-top: 50px;
    margin-bottom: 40px;
    padding-bottom: 0;
}
.how2ask .h2k-strong {
    font-size: 18px;
}

.how2ask p {
    margin: 1.5em 0;
    font-size: 14px;
}

.how2ask .list-unstyled {
    padding-left: 0;
    font-size: 14px;
}

.how2ask .hook.hook-primary:before {
    color: #008E59;
}

.how2ask .hook:before {
    content: "\2714";
    margin-right: 16px;
    float: left;
    color: red;
}
.how2ask ul {
    margin: 1.5em 0;
    margin-left: 3em;
    padding-left: 0px;
}

</style>>