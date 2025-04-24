---
title: 开启WPS Hide Login和WPS Limit Login后，登录后台出现403 Forbidden
link: https://www.dulizhanseo.com/wps-hide-login-wps-limit-login-403-fordden
description: 本文介绍了解决在WordPress后台启用WPS Hide Login和WPS Limit Login插件后，登录时出现403 Forbidden错误的方法。通过问题定位和AppNode后台操作，指导用户修改插件文件夹名称以禁用插件，并重载服务，最终恢复后台登录。
---

## 一、问题描述 {#problem-description}

> 当我们在wordpress后台安装了插件开启WPS Hide Login和WPS Limit Login后，再次登录后台网站出现提示：403 Forbidden（具体见下图）

![WordPress后台登录时出现403 Forbidden错误页面截图](https://cos.files.maozhishi.com/public/attachments/lfx/1665411976217.png)

## 二、问题定位 {#problem-location}

通过上图，我们可以得到以下信息：

1.  由于界面上出现了nginx/1.18.0,且没有cloudflare的相关提示，那么我们基本可以判断，问题是网站本身导致，和cloudflare加速是无关的；
2.  403是拒绝访问的意思，那么最大的可能是appnode或者的网站本身进行了拦截，而我们本身并没有在appnode中进行任何的设置，那么我们可以初步判断是wordpress搭建的网站出现了问题；
3.  唯一能导致出现403访问拒绝报错的，只有插件相关，那么结合我们之前安装的wordpress插件，可以判断问题可能是由于WPS Limit Login(限制登录)导致，那么我们需要关闭掉这个插件，同时为了更简单，我们把WPS Hide Login（修改后台登录路径用）也给关闭掉。
4.  我们已经无法进入wordpress后台，我们该如何关闭插件呢？我们只能通过ftp或者appnode访问服务器文件目录，删除或者修改插件文件目录的名称，让插件失效即可。本文演示的是使用appnode进行插件关闭的操作。

## 三、具体操作 {#specific-operations}

> 插件目录一般位于网站文件根目录`/wp-content/plugins/`下，这里我们通过appnode进入这个目录并找到对应插件文件夹进行修改

### 3.1、登录appnode {#login-appnode}

- 登录appnode后台点击网站后面的 文件 按钮

![AppNode后台网站列表，点击文件按钮](https://cos.files.maozhishi.com/public/attachments/lfx/1665411976277.png)

### 3.2、进入文件目录 {#enter-file-directory}

- 进入文件夹后，找到最下面的 www文件夹（www的保存网站文件的根目录）

![AppNode文件管理器，进入www文件夹](https://cos.files.maozhishi.com/public/attachments/lfx/1665411976274.png)

- 点击www文件夹 我们进入以下路径

```less
/www/wp-content/plugins/
```

> 现在我们就已经进入到了插件文件夹，找到wps hide login和wps limit login修改掉文件夹的名称。可以在文件夹后面添加个数字，这样就可以使已经启用的插件解除启用，回到未启用状态。

![AppNode文件管理器，进入 /www/wp-content/plugins/ 目录](https://cos.files.maozhishi.com/public/attachments/lfx/1665411976275.png)

### 3.3、修改文件名称 {#modify-file-name}

- 修改时鼠标点到这一行，会出现下面图标

![AppNode文件管理器，选中插件文件夹后出现的图标行](https://cos.files.maozhishi.com/public/attachments/lfx/1665411976025.png)

- 点击图标就可以修改文件夹名称

![AppNode文件管理器，修改插件文件夹名称的弹窗](https://cos.files.maozhishi.com/public/attachments/lfx/1665411976207.png)

### 3.4、重载服务 {#reload-service}

> 文件名称修改完成，并不是立刻就能登录后台，还要进行重要的一步，重载服务。

- 返回运行环境界面，点击 服务 按钮。

![AppNode后台，进入运行环境的服务管理界面](https://cos.files.maozhishi.com/public/attachments/lfx/1665411976215.png)

- 点击重载服务

![AppNode服务管理界面，点击重载服务按钮](https://cos.files.maozhishi.com/public/attachments/lfx/1665411976216.png)

### 3.5、重新登录网站后台 {#relogin-website-backend}

- 然后我们用原始的网址路径进入网站后台 /wp-admin/结尾

```less
https: //｛你网站域名｝/wp-admin/;;
```

![WordPress后台登录页面，显示已恢复正常](https://cos.files.maozhishi.com/public/attachments/lfx/1665411976276.png)

- 再进入插件列表页面，这时可以看到启用的插件重新变成未启用状态。

![WordPress后台插件列表，显示问题插件已变为未启用状态](https://cos.files.maozhishi.com/public/attachments/lfx/1665411976278.png)

### 3.6、删除后下载重新配置 {#delete-reinstall-reconfigure}

- 因为插件已经配置过，如果你启用的话，可能还会导致403问题，那么我们建议你删除后重新安装

![WordPress插件列表，点击删除插件按钮](https://cos.files.maozhishi.com/public/attachments/lfx/1665411976272.png)

---

<p style="text-align: center;"><img src="https://cos.files.maozhishi.com/public/attachments/lfx/1665411976273.png" width="244" alt="联系夏日么么茶的二维码" /></p>
<p style="text-align: center;"><strong>进入免费建站学习群</strong></p>
<p style="text-align: center;"><strong>扫码联系夏日么么茶</strong></p>
```
