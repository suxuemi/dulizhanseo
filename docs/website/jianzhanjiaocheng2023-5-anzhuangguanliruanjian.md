---
title: 2023最新建站教程⑤安装管理软件
link: https://www.dulizhanseo.com/jianzhanjiaocheng2023-5-anzhuangguanliruanjian
description: 本教程指导用户如何在服务器上安装AppNode管理软件，提供安装代码、视频/文字教程链接，并解答安装及登录过程中可能遇到的问题（如授权失败、空白页、加载慢）。
---

我们连上服务器后，安装服务器管理软件

文字教程见： Appnode代码与安装：[https://laifa.xin/appnode](https://laifa.xin/appnode)

这个是安装 appnode 的代码

```less
INSTALL_AGENT=1 INSTALL_APPS=sitemgr INIT_SWAPFILE=1 INSTALL_PKGS='nginx-stable,php74,mysql56' bash -c "$(curl -sS http://dl.appnode.com/install.sh)"
```

参照下图，贴入代码发送开始安装

![在SSH终端粘贴AppNode安装代码并准备执行](https://cos.files.maozhishi.com/public/attachments/xsj/2023-11-12-1699793694893.png)

具体教程扫码观看视频，==**出现下文这个界面说明安装成功。**==

![AppNode安装成功界面，显示登录地址、账号和密码](https://cos.files.maozhishi.com/public/attachments/xsj/2023-11-12-1699793694890.png)

## 一、教程 

### 1.1、 视频 

详细教程，微信扫码观看。

![观看AppNode安装视频教程的二维码](https://cos.files.maozhishi.com/public/attachments/xsj/2023-11-12-1699793694894.png)

### 1.2、 文字 

字教程见： Appnode代码与安装：[https://laifa.xin/appnode](https://laifa.xin/appnode)

## 二、问题 

### 2.1、登录出现：服务器内部错误：授权检测失败 

> 登录后出现如下图的提示

![AppNode登录后显示“服务器内部错误：授权检测失败！”的错误提示](https://cos.files.maozhishi.com/public/attachments/xsj/2023-11-12-1699793694895.png)

> 这是由于处于安全考虑，appnode 增加了认证导致

解决方案：[https://www.dulizhanseo.com/appnode-authorization-detection-failure-solution](https://www.dulizhanseo.com/appnode-authorization-detection-failure-solution)

==**需要免费序列号，也可以扫码联系我们获取**==

### 2.2、出现空白 

> 首次打开，出现空白，这种情况多刷新几次即可。

![首次登录AppNode时可能出现的空白页面截图](https://cos.files.maozhishi.com/public/attachments/xsj/2023-11-12-1699793694896.png)

### 2.3、正在加载 UI 资源 

在这个界面时间过长，首次登入，出现这种问题概率较大，多刷新。

![AppNode长时间卡在“正在加载 UI 资源...”的界面截图](https://cos.files.maozhishi.com/public/attachments/xsj/2023-11-12-1699793694897.png)

<p style="text-align: center;">以上操作如果存在问题，可以联系我</p>
<p style="text-align: center;"><img src="https://cos.files.maozhishi.com/public/attachments/xsj/2023-11-12-1699770009656.png" width="298" alt="加入社群交流二维码" /></p>
