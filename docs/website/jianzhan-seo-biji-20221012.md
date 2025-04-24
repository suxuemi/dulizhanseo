---
title: 建站笔记-2022/10/12-开启收录与统计
link: https://www.dulizhanseo.com/jianzhan-seo-biji-20221012
description: 本文记录了2022年10月12日为询盘网（xunpan.wang）开启搜索引擎收录和添加网站统计功能的步骤，包括关联Google Search Console、梳理文章别名、开放搜索引擎索引、生成并提交sitemap，以及添加百度统计和Google Analytics。
---

> 今天是2022年10月12日，由于网站没开启收录。谷歌site语法查询xunpan.wang的收录数为0，今天先给网站开启收录和统计。

![谷歌搜索site:xunpan.wang显示无收录](https://cos.files.maozhishi.com/wp-content/uploads/1665556285969.png)

我们今天要完成以下的工作：

1.关联Google Search Console

2.开启搜索引擎索引（开启收录）

3.给Google Search Console提交网站地图

4.新增统计：百度统计 + Google Analytics

## 一、关联Google Search Console {#associate-google-search-console}

点击进入谷歌搜索页面的提示进入，也可以点击这个链接进入：[https://search.google.com/search-console](https://search.google.com/search-console) （需要个Google账号）

![Google Search Console 欢迎页面](https://cos.files.maozhishi.com/wp-content/uploads/1665557449133.png)

因为我已经添加了其他资源，所以我们要点击左上角去添加资源

![Google Search Console 左上角添加资源下拉菜单](https://cos.files.maozhishi.com/wp-content/uploads/1665557843574.png)

此处选择的是网域

![Google Search Console 添加资源类型选择“网域”](https://cos.files.maozhishi.com/wp-content/uploads/1665557886470.png)

因为之前已经做了域名解析，所以此处是直接完成的状态

![Google Search Console 网域所有权已自动验证成功](https://cos.files.maozhishi.com/wp-content/uploads/1665557953303.png)

## 二、梳理别名 {#organize-slugs}

开启收录之前，我们要梳理文章以及文章分类和标签，检查别名是否存在问题，比如中文,我们要统一改成英文数字组合的形式

![WordPress后台文章列表，检查和修改文章别名（URL slug）](https://cos.files.maozhishi.com/wp-content/uploads/1665558885584.png)

这是我们梳理后的

![WordPress后台文章列表，文章别名已统一为英文数字组合](https://cos.files.maozhishi.com/wp-content/uploads/1665559940481.png)

## 三、开放收录 {#enable-indexing}

> 参照下图，“对搜索引擎的可见性”，我们取消勾选“建议搜索引擎不索引本站点”

![WordPress后台阅读设置，取消勾选“建议搜索引擎不索引本站点”](https://cos.files.maozhishi.com/wp-content/uploads/1665560091013.png)

## 四、生成sitemap {#generate-sitemap}

我们进入seo菜单下的“xml -html sitemap”，先点击save change，生成sitemap地图。

![WordPress后台SEOPress插件的XML/HTML站点地图设置，点击保存生成](https://cos.files.maozhishi.com/wp-content/uploads/1665560257495.png)

这样我们就生成了网站地图，我们可以打开进行查看：[XML Sitemaps (xunpan.wang)](https://www.dulizhanseo.com/sitemaps.xml)

![浏览器中查看生成的XML站点地图内容](https://cos.files.maozhishi.com/wp-content/uploads/1665560440801.png)

## 五、提交网站地图 {#submit-sitemap}

我们要把网站地图提交到Google Search Console，我们进入Google Search Console下的“站点地图”界面，贴入我们的网站地图网址并提交。

![Google Search Console 站点地图提交界面](https://cos.files.maozhishi.com/wp-content/uploads/1665560602476.png)

这时已经提交成功，状态显示“无法获取”，可以无视，24小时内会更新

说明：由于这个网站之前关联了谷歌，然后一直没建站，然后谷歌抓取状态是“无法获取”，出现这个问题的话，一般有内容的话，24小时就能恢复。

![Google Search Console 站点地图提交成功，但状态显示“无法获取”](https://cos.files.maozhishi.com/wp-content/uploads/1665560660137.png)

不管以上问题了，明天再来看看啥情况。接下来我们开始添加谷歌统计和百度统计

## 六、添加谷歌统计（Google Analytics） {#add-google-analytics}

Google Analytics：[https://analytics.google.com/analytics/](https://analytics.google.com/analytics/)

我登陆后，点击右下角的“管理”，然后点击“创建媒体资源”

![Google Analytics 管理界面，点击“创建媒体资源”](https://cos.files.maozhishi.com/wp-content/uploads/1665562009756.png)

在弹出的页面，输入资源名称，然后直接点击下一步。

![Google Analytics 创建媒体资源第一步：设置媒体资源名称](https://cos.files.maozhishi.com/wp-content/uploads/1665562240657.png)

企业信息这块可以随意设置，这个没啥作用的。

![Google Analytics 创建媒体资源第二步：填写企业信息](https://cos.files.maozhishi.com/wp-content/uploads/1665562327558.png)

创建好以后，我们在弹出的页面，选择“网站”

![Google Analytics 创建媒体资源第三步：选择平台为“网站”](https://cos.files.maozhishi.com/wp-content/uploads/1665562426800.png)

我们输入网址时，http协议要与你网站的一致吗，比如你网站是https的，那你要选择https，同样的，这个地方是网站域名也要与默认的

![Google Analytics 设置数据流：输入网站网址和数据流名称](https://cos.files.maozhishi.com/wp-content/uploads/1665562698345.png)

> 点击“创建数据流”后，我们获取到衡量ID：“G-D7CTY7MNCG”，这个ID是GA4

![Google Analytics 网站数据流详情，获取衡量ID (GA4)](https://cos.files.maozhishi.com/wp-content/uploads/1665562799752.png)

> 我们进入网站后台，找到seo下的Analytics，勾选“Enable Google Analytics tracking (Global Site Tag: gtag.js)”，并在“Enter your measurement ID (GA4)”内输入上图获取的衡量ID，一定要点击下方的save change

![WordPress后台SEOPress插件的Analytics设置，输入GA4衡量ID并保存](https://cos.files.maozhishi.com/wp-content/uploads/1665562886126.png)

> 找几个小伙伴帮你点击下网站，等个几分钟就可以在统计的首页看到数据了。

![Google Analytics 首页显示已有数据](https://cos.files.maozhishi.com/wp-content/uploads/1665563684803.png)

我们进入报告，可以看到网站实时的访问情况。

![Google Analytics 实时报告显示当前网站访问情况](https://cos.files.maozhishi.com/wp-content/uploads/1665568032086.png)
