---
title: wp建站登陆后台-建立数据库连接时出错
link: https://www.dulizhanseo.com/error-establishing-a-database-connection
description: 本文介绍了解决WordPress网站出现“建立数据库连接时出错”问题的方法。该问题通常由服务器硬盘空间不足引起，特别是过多的网站备份。文章提供了通过登录AppNode后台，检查硬盘使用情况，并删除多余备份文件的详细步骤。
---

> ## 问题描述： {#problem-description}
>
> 建立数据库连接时出错（Error establishing a database connection）
>
> ![WordPress 建立数据库连接时出错的错误截图](https://cos.files.maozhishi.com/小书匠/1672718068810.png)
>
> 打开网站出现以上错误，通常是因为网站的备份太多，服务器硬盘满了，数据库连接出现错误，我们只需删除多余的网站备份即可。

## 一.登录appnode后台 {#login-appnode-backend}

### 1.1 查看系统信息 {#check-system-information}

先打开登录appnode后台（例如：`http://43.153.xxx.xxx:5291/` ）查看硬盘情况。

![AppNode 后台系统信息概览，显示硬盘使用情况](https://cos.files.maozhishi.com/小书匠/1672718068811.png)

### 1.2 硬盘基本已满 {#disk-almost-full}

如果如下图显示，我们就需要及时清理硬盘，删除多余的备份文件。

![AppNode 后台显示硬盘已满的截图](https://cos.files.maozhishi.com/小书匠/1672718068812.png)

## 二、找到网站备份文件 {#find-website-backup-files}

### 2.1 点击网站，进入网站的设置 {#click-website-enter-settings}

![AppNode 后台网站管理界面，点击进入特定网站设置](https://cos.files.maozhishi.com/小书匠/1672718068813.png)

### 2.2 打开备份界面，查看备份文件 {#open-backup-interface-view-files}

![AppNode 网站设置中的备份管理界面](https://cos.files.maozhishi.com/小书匠/1672718068814.png)

### 2.3 删除备份文件 {#delete-backup-files}

点击删除即可

![AppNode 网站备份文件列表及删除按钮](https://cos.files.maozhishi.com/小书匠/1672718068815.png)

---

<p style="text-align: center;"><img src="https://cos.files.maozhishi.com/小书匠/1672718068819.png" width="198" alt="联系夏日么么茶的二维码" /></p>
<p style="text-align: center;"><strong>更多免费建站技巧</strong></p>
<p style="text-align: center;"><strong>扫码联系夏日么么茶</strong></p>
```
