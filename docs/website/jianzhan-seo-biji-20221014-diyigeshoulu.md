---
title: 建站笔记-2022/10/14-第一个收录
link: https://www.dulizhanseo.com/jianzhan-seo-biji-20221014-diyigeshoulu
description: 摸鱼笔记第二篇。今天是2022年10月14日，开启收录第3天，有了第一个收录，但是没设置摘要，显示略微奇怪。。
---

## 一、第一个收录 {#first-indexing}

10月12日，开启了收录《[建站笔记-2022/10/12-开启收录与统计](https://www.dulizhanseo.com/jianzhan-seo-biji-20221012/)》

```xml
site:xunpan.wang
```

site了下，发现网站居然有收录了。
![谷歌搜索site:xunpan.wang显示已有1条收录](https://cos.files.maozhishi.com/public/attachments/lfx/1665750347632.png)
但是发现个奇葩的问题，网站地图sitemap居然还是“无法获取”的状态
![Google Search Console站点地图状态仍显示“无法获取”](https://cos.files.maozhishi.com/public/attachments/lfx/1665750347640.png)
可能是由于找个域名是老域名，之前提交过网站地图，一直是404状态，所以这次反应有点迟缓，我们等下周一继续看。
如果网站地图一直不正常，就准备不提交sitemap了，让爬虫自己爬吧。

## 二、有个小问题 {#a-small-issue}

从搜索引擎这来看，元描述好奇怪，这是由于我没有设置元描述（摘要）导致。
`note:下次更新文章，顺便写个摘要，最起码让文章展示的好看点。`
![谷歌搜索结果页面显示文章摘要内容不理想](https://cos.files.maozhishi.com/public/attachments/lfx/1665750347631.png)
这里我们编辑个简短摘要：

```xml
日常办公学习经常遇到：产品或文章多，让文档管理非常困难，需要编辑文档上传多个图片时，能否批量上传？写文档适，能否实现截图粘贴上传云端？这样就避免保存本地，能否让网站的图床显示为自己的域名？能否让客户访问我的图片也是嗖嗖的？
```

![WordPress后台文章编辑页面，在摘要（Excerpt）框中输入元描述](https://cos.files.maozhishi.com/public/attachments/lfx/1665750347641.png)
网站前台的信息已经实时改变了，但是谷歌的可能要等等。
![网站前端源代码中已更新的meta description标签](https://cos.files.maozhishi.com/public/attachments/lfx/1665750347645.png)

继续更新ing...
