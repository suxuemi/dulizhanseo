---
title: 安装网站时网页显示不全及ssl证书设置方法。
link: https://www.dulizhanseo.com/wordpress-ssl
description: 本文解决了新安装WordPress网站通过HTTPS访问时页面显示不全的问题，通常由SSL证书配置不当引起。文中详细介绍了如何在Cloudflare生成源证书，并在AppNode后台手动导入该证书以正确启用HTTPS，从而确保网站完整显示。
---

> 如下图所示，刚安装的wordpress后台，以及前端页面网站显示不全。
>
> ![WordPress后台显示不全示例](https://cos.files.maozhishi.com/小书匠/1702014708150.png)
>
> ![WordPress前端页面显示不全示例](https://cos.files.maozhishi.com/小书匠/1702014708154.png)

> 检查网站网址为：`https://www.xxxx.com/`，去掉s ，`http://www.xxxx.com/`又能正常显示。说明我们没有正确安装ssl证书，但是网站又强制打开以`https`为开头的网址。我们只需要正确配置好ssl证书即可。

## 登录Cloudflare域名管理界面 {#login-cloudflare}

### 1.进入域名管理界面，创建源证书 {#create-origin-certificate}

![Cloudflare域名管理界面，选择SSL/TLS -> 源服务器 -> 创建证书](https://cos.files.maozhishi.com/小书匠/1702014708155.png)

![Cloudflare创建源证书选项确认](https://cos.files.maozhishi.com/小书匠/1702014708156.png)

### 2.复制源证书和私钥 {#copy-certificate-key}

![Cloudflare复制生成的源证书和私钥文本](https://cos.files.maozhishi.com/小书匠/1702014708157.png)

## 登录AppNode后台 {#login-appnode}

### 1.打开网站设置 {#open-website-settings}

找到显示有问题的网站

![AppNode网站管理列表，选择目标网站](https://cos.files.maozhishi.com/小书匠/1702014708160.png)

### 2.打开手动导入证书 {#manual-certificate-import}

打开https设置， 启用并且手动配置导入证书

![AppNode网站设置，进入HTTPS配置页面](https://cos.files.maozhishi.com/小书匠/1702014708161.png)

![AppNode HTTPS设置，选择“手动配置”并点击“导入证书”](https://cos.files.maozhishi.com/小书匠/1702014708162.png)

### 3.完成导入，保存配置并且重载服务 {#complete-import-save-reload}

![AppNode手动导入证书界面，粘贴源证书和私钥后保存并重载服务](https://cos.files.maozhishi.com/小书匠/1702014708163.png)

## 再次打开网址，即可看到完整页面 {#verify-fix}

这也是网站的cloudflare的ssl证书设置方法。

---

<p style="text-align: center;">加入社群一起互助建站，分享你的踩坑经历。</p>
<p style="text-align: center;"><img src="https://cos.files.maozhishi.com/public/attachments/lfx/1670844224159.png" width="198" alt="加入社群交流二维码" /></p>
<p style="text-align: center;"><strong>更多免费建站技巧</strong></p>
<p style="text-align: center;"><strong>扫码联系夏日么么茶</strong></p>
