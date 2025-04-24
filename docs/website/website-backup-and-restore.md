---
title: wp建站自动备份云端与一键数据还原-让新手也能无忧建站！
link: https://www.dulizhanseo.com/website-backup-and-restore
description: 本文介绍了WordPress网站自动备份到云端（腾讯云COS）并实现一键数据还原的方法，旨在帮助新手解决数据丢失和页面错乱问题，确保网站安全，轻松操作。
---

> ✨ ~建站经常遇到这个问题~ ✨
> 😭**编辑好久的内容被误删了**😭
> 😭不知道修改了啥，页面错乱了😭
>
> ---
>
> ✨ 本文简单介绍以下三部分 ✨
> 🔥 ① 网站自动备份 ① 🔥
> 每日自动备份，再也不怕网站出问题
> 🔥 ② 数据云端备份 ② 🔥
> 备份到云端，节省服务器空间，也更安全！
> 🔥 ③ 一键快速还原 ③ 🔥
> 一键还原数据，小白也能轻松操作

## 一、网站备份设置 {#website-backup-settings}

### 1.1.网站设置 {#accessing-website-settings}

进入appnode（网站管理工具），登录后进入“网站管理”页面，进入对应网站的设置

![AppNode网站管理页面，点击网站设置图标](https://cos.files.maozhishi.com/wp-content/uploads/1665319984501.png)

### 1.2.立即备份 {#manual-backup}

进在设置中，进入“备份”标签，在“备份文件”下，可以进行**立即备份**操作
注意：立即备份是手动操作，为了保证能及时备份网站数据，我们建议开启“**定时备份**”
![AppNode网站备份设置，点击“立即备份”按钮](https://cos.files.maozhishi.com/wp-content/uploads/1665320270579.png)

### 1.3.定时备份 {#scheduled-backup}

在“备份文件”的下方，就是我们需要是“定时备份”
进入“定时备份”，勾选“启用定时备份”，并点击“添加备份规则”
![AppNode定时备份设置，启用并添加备份规则](https://cos.files.maozhishi.com/wp-content/uploads/1665320438578.png)

设置定时备份
推荐规则：每日备份两次，**凌晨4点**和**下午4点**两次备份。
如下图，我们点击确定即可完成规则的创建。
**注意：如果你空间足够，一天三次四次备份都可以。**

![设置定时备份规则为每日凌晨4点和下午4点](https://cos.files.maozhishi.com/wp-content/uploads/1665320556722.png)

注意：最后要部署下环境（界面会有提醒）
点击“立即部署”，appnode会自动部署完成。
![AppNode提示需要部署环境使备份设置生效](https://cos.files.maozhishi.com/wp-content/uploads/1665320716881.png)

## 二、数据备份云端 {#cloud-backup}

> 网站备份数据存储在服务器本地，可能会造成两个后果:
>
> 1.占用本地空间，尤其是备份频繁的情况下，可能会导致占用大量的本地空间；
>
> 2.如果服务器被封，网站数据也会随之丢失。
>
> **把数据备份到云端，一方面可以释放本地的空间，另外可以解决本地数据异常的状况。**

### 2.1、云端存储设置 {#cloud-storage-configuration-cos}

本文已经腾讯云的cos对象存储为例。参照《[服务器空间小？网站打开卡顿？为你的网站提个速](https://www.dulizhanseo.com/wangzhanyouhua-tengxunyun-cos-cloudflrea-cdn/)》中的《1.2、创建存储桶》和《1.3、创建访问权限》 ，获取存储资源的cos**存储桶名称/地域/SecretId/SecretKey**。

### 2.2、添加远程存储 {#add-remote-storage}

A、我们进入appnode 的桌面，并点击“备份管理”

![AppNode桌面，点击“备份管理”图标](https://cos.files.maozhishi.com/wp-content/uploads/1665321671242.png)

B、“添加远程存储”
我们在备份管理界面，点击“远程存储管理”，点击“添加远程存储”，在弹窗的窗口，我们选择“云存储”，
我们点击“腾讯云对象村粗”，接下来是输入腾讯云对象存储的配置信息。
注意：地域、存储桶名称，secretid和secretkey要好在腾讯云后台的一致，建议是使用“香港”区域。
配置建议：备份文件保留天数设置在90-180天即可，上传速度要把kb/s改成mb/s，备份路径参照写即可。
![AppNode添加远程存储，选择腾讯云COS并进行配置](https://cos.files.maozhishi.com/wp-content/uploads/1665322430278.png)

出现下图，说明远程存储已经添加成功
![AppNode远程存储管理列表显示已成功添加腾讯云COS](https://cos.files.maozhishi.com/wp-content/uploads/1665322815129.png)

### 2.3、云端备份设置 {#configure-cloud-backup}

我们要把本地备份的**文件转移到云端（腾讯云COS），并释放本地的空间**。
如下图，我们在“应用备份设置”中可以看待，文件是保存10天。
我们点击“设置”进入相关设置界面。

![AppNode应用备份设置，查看本地保留策略并点击设置](https://cos.files.maozhishi.com/wp-content/uploads/1665322924369.png)

在弹出的窗口，我们勾选“同时将备份文件复制到远程存储”
勾选后会出现远程存储的选择，我们选择刚添加的腾讯云对象存储
由于文件已经备份到云端，那么本地保留时间可以短一点，此处我设置的是保留3天
![启用备份文件复制到远程存储，选择腾讯云COS，设置本地保留3天](https://cos.files.maozhishi.com/wp-content/uploads/1665322994525.png)

### 2.4、云端备份测试 {#test-cloud-backup}

我们进入网站的备份界面，点击“立即备份”，具体过程略过，备份完成后，我们可以看到，在备份文件列表中，除了本地有备份文件，远程也有备份。
![AppNode备份文件列表显示本地备份和已上传到云端的远程备份](https://cos.files.maozhishi.com/wp-content/uploads/1665323402125.png)

## 三、一键还原网站 {#one-click-website-restore}

当你的网站损坏，或者数据异常，你可以找到出问题之前的备份文件进行还原。
在备份文件列表页面，点击要还原文件下的“还原”
![AppNode备份文件列表，点击备份文件后的“还原”按钮](https://cos.files.maozhishi.com/wp-content/uploads/1665323632982.png)

在弹出的窗口中，直接点击确定即可
![AppNode网站还原确认窗口，点击确定](https://cos.files.maozhishi.com/wp-content/uploads/1665323852980.png)

输入OK进行确认，并点击“开始还原”以确认还原操作。
![AppNode网站还原最终确认，输入OK并点击开始还原](https://cos.files.maozhishi.com/wp-content/uploads/1665323730506.png)

在下图这个界面稍等片刻，**切勿直接关闭！！！**
![AppNode网站还原过程日志窗口](https://cos.files.maozhishi.com/wp-content/uploads/1665323756301.png)

点击“开始部署”完成网站数据的还原操作
![AppNode网站还原完成后提示需要部署环境](https://cos.files.maozhishi.com/wp-content/uploads/1665323773211.png)

<p style="text-align: center;">加入社群一起互助建站，分享你的踩坑经历。</p>
<p style="text-align: center;"><img src="https://cos.files.maozhishi.com/public/attachments/lfx/1670844224159.png" width="198" alt="加入社群交流二维码" /></p>
<p style="text-align: center;"><strong>更多免费建站技巧</strong></p>
<p style="text-align: center;"><strong>扫码联系夏日么么茶</strong></p>
