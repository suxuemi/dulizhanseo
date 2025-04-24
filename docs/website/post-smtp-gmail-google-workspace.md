---
title: Post Smtp的Gmail/Google Workspace设置方法
link: https://www.dulizhanseo.com/post-smtp-gmail-google-workspace
description: 本教程详细介绍了如何在WordPress网站中使用Post SMTP插件配置Gmail或Google Workspace邮箱作为发信服务。由于Post SMTP更新后对163、88邮箱支持不佳，本指南提供了通过Google Cloud Console创建项目、启用Gmail API、配置OAuth同意屏幕、创建凭据（客户端ID和密钥），并在Post SMTP插件中完成授权和设置的全过程，以确保邮件正常发送。
---

> 最近post smtp更新版本，新版本163和88邮箱的发信服务器都不能正常使用，如果是腾讯和263企业邮箱按照我们的老教程操作可以正常使用，选择other smtp 配置即可。本章节主要讲解如何绑定gmail邮箱的设置方法。

## **安装和激活 Post SMTP 插件** {#install-activate-post-smtp-plugin}

下面是使用 Post SMTP 设置 Gmail/Google Workspace 的所有步骤。
转到“**发布 SMTP”仪表板**，然后单击“**启动向导**”。如果是新安装的插件，则会跳出下面界面。

## **邮箱设置** {#mailbox-settings}

弹出一个窗口，其中包含不同的**邮件服务**。从连接标签页中选择 **Gmail API**。
![Post SMTP 设置向导 - 选择邮件服务类型为Gmail API](https://cos.files.maozhishi.com/小书匠/1700649814149.png)
转到 **Google Cloud Console** 以获取身份验证字段（客户端 ID 和客户端**密钥）。**

## **在你的 Google 帐号中创建网络应用** {#create-web-app-in-google-account}

登录您的 Google 帐户并在新选项卡/窗口中打开您的 [Google Cloud Console](https://console.cloud.google.com/home/dashboard)。

## **创建或选择项目** {#create-or-select-project}

### 1、在创建 Web 应用之前，必须选择一个项目。您可以选择一个已经存在的或创建一个新的。为此，请从仪表板顶部的工具栏中选择项目下拉列表。 {#select-project-dropdown}

![Google Cloud Console 顶部工具栏 - 选择项目下拉菜单](https://cos.files.maozhishi.com/小书匠/1700649814150.png)

### 2、您可以从弹出窗口的列表中选择一个现有项目，或单击右上角的“新建项目”。 {#select-existing-or-new-project}

![Google Cloud Console 选择项目弹窗 - 选择现有项目或新建项目](https://cos.files.maozhishi.com/小书匠/1700649814151.png)
如果使用现有项目，请继续执行下一步。

### 3、要开始一个新项目，请在提供的字段中键入项目名称，然后从“位置”字段的下拉菜单中选择您的组织。然后单击“创建”按钮。 {#create-new-project-details}

![Google Cloud Console 新建项目页面 - 输入项目名称和组织](https://cos.files.maozhishi.com/小书匠/1700649814152.png)

### 4、你将在通知弹出窗口中看到新创建的项目 {#new-project-notification}

![Google Cloud Console 新建项目成功通知](https://cos.files.maozhishi.com/小书匠/1700649814153.png)

## **启用 Gmail API** {#enable-gmail-api}

### 1、项目的以下步骤是启用 Gmail API。转到 [Google Cloud Console](https://console.cloud.google.com/home/dashboard) 的侧边栏，然后选择 API 和服务 » 库。 {#navigate-to-library}

![Google Cloud Console 左侧导航栏 - 选择 API 和服务 > 库](https://cos.files.maozhishi.com/小书匠/1700649814154.png)

### 2、在搜索栏中输入 Gmail API。要继续，点击 Gmail API。 {#search-and-select-gmail-api}

![Google Cloud API 库 - 搜索并选择 Gmail API](https://cos.files.maozhishi.com/小书匠/1700649814155.png)

### 3、要启用 Gmail API，单击页面上的“启用”按钮。 {#enable-gmail-api-button}

![Gmail API 页面 - 点击“启用”按钮](https://cos.files.maozhishi.com/小书匠/1700649814156.png)

### 4、转到 Google Cloud Console 边栏中 API 和服务下的 OAuth 同意屏幕 {#navigate-to-oauth-consent-screen}

![Google Cloud Console 左侧导航栏 - 选择 API 和服务 > OAuth 同意屏幕](https://cos.files.maozhishi.com/小书匠/1700649814157.png)

### 5、单击“外部”。您将看到一个标题为“应用程序信息”的屏幕。 {#select-external-user-type}

![OAuth 同意屏幕 - 选择用户类型为“外部”](https://cos.files.maozhishi.com/小书匠/1700649814158.png)
单击--创建

**配置 OAuth 同意屏幕** {#configure-oauth-consent-screen}

![OAuth 同意屏幕配置 - 填写应用信息](https://cos.files.maozhishi.com/小书匠/1700649814167.png)
范围”页面。向下滚动页面到末尾，单击**“保存并继续**”。

## **配置作用域** {#configure-scopes}

范围”页面。向下滚动页面到末尾，单击**“保存并继续**”。

![OAuth 同意屏幕配置 - 范围设置页面，直接保存并继续](https://cos.files.maozhishi.com/小书匠/1700649814168.png)

## **查看和编辑“摘要”页上的设置** {#review-edit-summary-settings}

看到名为**“摘要**”的最后一页。您可以编辑设置或单击“返回仪表板”以返回。
![OAuth 同意屏幕配置 - 摘要页面，点击返回仪表板](https://cos.files.maozhishi.com/小书匠/1700649814169.png)
![OAuth 同意屏幕仪表板](https://cos.files.maozhishi.com/小书匠/1700649814170.png)

## **将发布状态从“测试”更新为“生产”** {#update-publishing-status-to-production}

您将在仪表板上的“测试”标题下看到“发布应用程序”按钮。单击**“发布应用程序”，**将出现一个弹出窗口。单击“确认”，以便为拥有 Google 帐户的任何用户发布和启用该应用。
![OAuth 同意屏幕仪表板 - 点击“发布应用”按钮](https://cos.files.maozhishi.com/小书匠/1700649814171.png)
![确认发布应用弹窗](https://cos.files.maozhishi.com/小书匠/1700649814172.png)

## **创建应用程序的凭据** {#create-application-credentials}

首先，单击仪表板侧边菜单栏上的“凭据”按钮。
![Google Cloud Console 左侧导航栏 - 选择“凭据”](https://cos.files.maozhishi.com/小书匠/1700649814173.png)
单击**“创建凭据**”，然后从下拉菜单中选择“**OAuth 客户端 ID**”。
![凭据页面 - 点击“创建凭据”并选择“OAuth 客户端 ID”](https://cos.files.maozhishi.com/小书匠/1700649814174.png)

## **创建 OAuth 客户端 ID** {#create-oauth-client-id}

从**“应用程序类型**”字段的下拉列表中选择“**Web 应用程序**”。
![创建 OAuth 客户端 ID - 选择应用程序类型为“Web 应用程序”](https://cos.files.maozhishi.com/小书匠/1700649814175.png)
必填字段，名称为

- **授权的 JavaScript 来源**
- **授权重定向 URL。**

![创建 OAuth 客户端 ID - 需要填写的授权来源和重定向 URL](https://cos.files.maozhishi.com/小书匠/1700649814176.png)
**返回网站后台插件**，导航到打开**“发布 SMTP\*\*** **设置向导”的**选项卡**。
现在复制**授权的 JavaScript 源和授权的重定向 URL**
![Post SMTP 设置向导 - 复制授权来源和重定向 URL](https://cos.files.maozhishi.com/小书匠/1700649814255.png)
**返回 Google Cloud Console，**将授权的 JavaScript 源和授权的重定向网址粘贴到必填字段中。
![Google Cloud Console - 粘贴授权来源和重定向 URL](https://cos.files.maozhishi.com/小书匠/1700649814271.png)
单击** “创建**”按钮继续。
将看到一个弹出窗口，其中包含**“客户端密钥**”和“**客户端 ID”;复制**该窗口，然后
![OAuth 客户端已创建弹窗 - 显示客户端 ID 和客户端密钥](https://cos.files.maozhishi.com/小书匠/1700649814272.png)返回到打开“发布SMTP”的选项卡，并将其粘贴到“**发布SMTP**”设置向导中，然后单击“**下一步”和“完成”。\*\*
![Post SMTP 设置向导 - 粘贴客户端 ID 和客户端密钥](https://cos.files.maozhishi.com/小书匠/1700649814273.png)

## **授予您的网站 Google / Gmail 权限** {#grant-google-gmail-permission}

将在**“发布 SMTP”仪表板**上的“操作”选项卡下看到“Connect to Gmail API”。
单击此按钮，将出现一个新窗口。
![Post SMTP 仪表板 - 点击“Connect to Gmail API”](https://cos.files.maozhishi.com/小书匠/1700649814274.png)
因此，将出现一个 **Google 登录**页面。若要开始配置 **Post** **SMTP**，请登录到将使用的帐户。输入您的电子邮件和密码。
注意：如果提示连接不安全，直接忽略，点击边上高级连接，继续。
![Google 账户登录页面](https://cos.files.maozhishi.com/小书匠/1700649814275.png)
![Google 授权页面 - 允许 Post SMTP 访问 Gmail](https://cos.files.maozhishi.com/小书匠/1700649814276.png)
你将被重定向到**“发布 SMTP”仪表板**。单击“**操作”选项卡**中的“**授予谷歌许可”**
![Post SMTP 仪表板 - 点击“授予谷歌许可”](https://cos.files.maozhishi.com/小书匠/1700649814277.png)
点击“Connect to Gmail API”
![再次点击“Connect to Gmail API”确认连接](https://cos.files.maozhishi.com/小书匠/1700649814278.png)
提示成功。
如果显示红色字体：看下面
不要问：不要问：
如果不成功，就多试几次！！！！！！！！！
保存并继续
![Post SMTP 授权成功提示](https://cos.files.maozhishi.com/小书匠/1700649814279.png)
![Post SMTP 设置完成，可以发送测试邮件](https://cos.files.maozhishi.com/小书匠/1700649814280.png)
完美收官！！！！
设置稍稍有点麻烦，但已是保姆级别，多多实操两次就好。

---

<p style="text-align: center;">加入社群一起互助建站，分享你的踩坑经历。</p>
<p style="text-align: center;"><img src="https://cos.files.maozhishi.com/public/attachments/lfx/1670844224159.png" width="198" alt="加入社群交流二维码" /></p>
<p style="text-align: center;"><strong>更多免费建站技巧</strong></p>
<p style="text-align: center;"><strong>扫码联系夏日么么茶</strong></p>
