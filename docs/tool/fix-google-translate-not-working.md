---
title: Google Chrome谷歌浏览器“自动网页翻译”功能无法使用的三个解决方案
link: https://www.dulizhanseo.com/fix-google-translate-not-working
description: 本文提供了解决谷歌Chrome浏览器内置的“自动网页翻译”功能失效的三种方案：修改hosts文件（无需代理）、使用Microsoft Edge浏览器、以及安装“划词翻译”插件（强烈推荐）。
---

> 2022 年 9 月 28 日起，「谷歌翻译中国版」和「谷歌地图中国版」退出了中国市场，关停的不仅是网页服务，依赖其服务的相关功能也受到牵连，以谷歌翻译为例，具体表现为 https://translate.google.cn 打开后会显示 translate.google.com.hk，不再是真正的谷歌翻译网站。
>
> 作为使用率最高的浏览器之一：Google Chrome 谷歌浏览器，其内置的“自动网页翻译”功能直接无法使用，使得无数外贸人在浏览外文网站或查阅资料时非常不便！如果你办公、学习都常要用到翻译功能，那么我们一起来看看怎样解决你的翻译难题吧……

## 方案一：修改 hosts（无需T子） 

**如果你对谷歌浏览器内置的“自动网页翻译”功能情有独钟，推荐使用这个方案。（如果你不介意换浏览器，可选择方案2，如果你仅仅是需要一个翻译功能，可以使用方案3）**

因为无需T子。如果你不会用T子（或者不知道“T子”指的是什么），那么你只能用这个方案。

在电脑的 hosts 文件里加入下面一行文本即可解决此问题。修改 hosts 文件的方式请自行谷歌 / 百度，关键词：[修改 hosts](https://www.baidu.com/s?wd=%E4%BF%AE%E6%94%B9%20hosts)、[修改 hosts 没有权限](https://www.baidu.com/s?wd=%E4%BF%AE%E6%94%B9%20hosts%20%E6%B2%A1%E6%9C%89%E6%9D%83%E9%99%90)

```
180.163.151.162 translate.googleapis.com
```

## 方案二：edge浏览器（简单直接） 

[Microsoft Edge浏览器](https://www.microsoft.com/zh-cn/edge) ：[https://www.microsoft.com/zh-cn/edge](https://www.microsoft.com/zh-cn/edge)

该浏览器是微软在chrome内核上oem的版本，支持全平台，内置微软翻译api，支持网页翻译，还有更多实用功能，大家自行挖掘。

**使用说明**：浏览网页时，选择要翻译的文字，右击选择“将所选内容转换为中文”

![Edge浏览器选中文字后右键菜单选择翻译功能](https://cos.files.maozhishi.com/wp-content/uploads/1665121937773.webp)

如果没有“将所选内容转化为中文”选项，那么请进入浏览器语言设置页面进行简单设置：复制这个路径进入  `edge://settings/languages` ，参照下图，将简体中文设为默认语言，并开启“让我选择翻译不是我所阅读的语言的页面”

![Edge浏览器语言设置页面，启用翻译功能](https://cos.files.maozhishi.com/wp-content/uploads/1665122218031.webp)

注意：因为翻译就没有原文对照了，相对来说还是有点不方便，如果你想原本和译文对照，那么请看第三个方案：利用插件进行翻译。

## 方案三：划词翻译（强烈推荐） 

[划词翻译 (hcfy.app)](https://hcfy.app/) ：[https://hcfy.app/](https://hcfy.app/)

插件安装入口：[谷歌浏览器入口](https://chrome.google.com/webstore/detail/%E5%88%92%E8%AF%8D%E7%BF%BB%E8%AF%91/ikhdkkncnoglghljlkmcimlnlhkeamad) [edge浏览器入口](https://microsoftedge.microsoft.com/addons/detail/%E5%88%92%E8%AF%8D%E7%BF%BB%E8%AF%91/oikmahiipjniocckomdccmplodldodja)

特色：支持多个翻译源，支持Google chrome浏览器/Microsoft Edge浏览器360极速/QQ浏览器/百度浏览器等主流chrome内核浏览器，同时也支持Mozilla Firefox 浏览器和 Safari 浏览器（更多安装教程见[《安装划词翻译 | 划词翻译 (hcfy.app)》](https://hcfy.app/docs/install)）。

安装并启用后，当我们选择文字，在文字的前后会出现一个翻译小图标

![选中网页文字后出现的“划词翻译”小图标](https://cos.files.maozhishi.com/wp-content/uploads/1665122832109.webp)

我们建议看到deepl和必应词典是能正常翻译的，腾讯和百度是需要设置才可以。

![“划词翻译”弹窗显示不同翻译源的结果](https://cos.files.maozhishi.com/wp-content/uploads/1665122907537.webp)

我们把百度和腾讯给关闭，点击齿轮状的图标，取消百度和腾讯的勾选即可

![“划词翻译”设置界面，取消勾选百度和腾讯翻译源](https://cos.files.maozhishi.com/wp-content/uploads/1665123007699.webp)

这个插件支持的翻译接口很多，更多功能请自行挖掘。
