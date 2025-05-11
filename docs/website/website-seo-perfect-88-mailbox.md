---
title: 网站发信邮箱设置（一）88邮箱
link: https://www.dulizhanseo.com/website-seo-perfect-88-mailbox
description: 本文以88.com邮箱为例，详细介绍了如何在WordPress网站中配置发信邮箱，用于处理会员注册和询盘邮件发送。教程包括注册88邮箱、获取SMTP专用密码、在Post SMTP插件中设置发信邮箱及服务器参数，并提供了测试方法和常见问题解答（如服务器端口开启）。
---

> 邮箱主要用于会员注册以及询盘的发送，以前我们会推荐外贸人使用mailgun服务发送邮件，但mailgun规则改变，可能会导致在后续成本昂贵，本篇以88.com的邮箱配置为例来配置你网站的发信邮箱，在后续我们会陆续给大家提供更多的网站发信邮箱设置教程。

开始之前，建议大家：1.关闭wordpress的新用户注册，以免被攻击；2.安装插件：post smtp（这是一个邮件发送插件）

## 一.注册邮箱 

> 88.com注册入口：[https://www.88.com/register/](https://www.88.com/register/)

![88.com邮箱注册页面](https://cos.files.maozhishi.com/public/attachments/lfx/1665328342913.png)

> 注册成功

![88.com邮箱注册成功提示](https://cos.files.maozhishi.com/public/attachments/lfx/1665328342869.png)

> 进入页面

![88.com邮箱收件箱界面](https://cos.files.maozhishi.com/public/attachments/lfx/1665328342916.png)

## 二.获取专用密码 

> 88邮箱用smtp发信，需要先获取专用密码才可，我们先点击“客户端设置”进入界面

![88邮箱设置菜单，点击“客户端设置”](https://cos.files.maozhishi.com/public/attachments/lfx/1665328342872.png)

> 记得开启smtp，同时点击下方的“新建专用密码”

![88邮箱客户端设置页面，开启SMTP并点击“新建专用密码”](https://cos.files.maozhishi.com/public/attachments/lfx/1665328342874.png)

> 验证手机并获取专用密码，名称可以随便写

![88邮箱新建专用密码弹窗，需要手机验证](https://cos.files.maozhishi.com/public/attachments/lfx/1665328342875.png)

> 点击确定后，出现专用密码

![88邮箱生成专用密码成功提示](https://cos.files.maozhishi.com/public/attachments/lfx/1665328342905.png)
梳理下，发信邮箱/专用密码/发信服务器如下图
![88邮箱SMTP设置所需信息：邮箱地址、专用密码、SMTP服务器地址](https://cos.files.maozhishi.com/public/attachments/lfx/1665328342914.png)

## 三.发信邮箱设置 

我们进入woedpress后台，在post smtp中设置发信邮箱，点击：star the wizard开始设置
![Post SMTP插件仪表盘，点击“Start the Wizard”开始设置](https://cos.files.maozhishi.com/public/attachments/lfx/1665328342915.png)

> 输入发信邮箱：我们上文刚注册的发信邮箱

![Post SMTP设置向导第一步：输入发信邮箱地址和名称](https://cos.files.maozhishi.com/public/attachments/lfx/1665328342906.png)
设置发信服务器：我们使用的是88邮箱，所以要设置88邮箱的smtp发信服务器
![Post SMTP设置向导第二步：输入SMTP服务器地址（smtp.88.com）](https://cos.files.maozhishi.com/public/attachments/lfx/1665328342908.png)

> 选择发信服务器端口，88邮箱的发信服务器端口是465

![Post SMTP设置向导第三步：选择SMTP端口和加密方式（465/SSL）](https://cos.files.maozhishi.com/public/attachments/lfx/1665328342909.png)

> 为什么是465而不是25？很多服务器为了防止被滥发邮件，是封禁了25端口的，所以我们在配置发信邮箱时，一般不选择25端口，至于为什么88邮箱我们选择465，请看下图，这个是88邮箱官网的配置说明

![88邮箱官网关于SMTP服务器设置的说明，推荐使用SSL加密端口465](https://cos.files.maozhishi.com/public/attachments/lfx/1665328342907.png)

> 发信验证账号，此处我们输入上文注册的发信邮箱和我们生成的专用密码。。

![Post SMTP设置向导第四步：输入SMTP用户名（邮箱地址）和密码（专用密码）](https://cos.files.maozhishi.com/public/attachments/lfx/1665328342980.png)

> 这一步，直接选择email下一步即可

![Post SMTP设置向导第五步：选择通知方式（Email）](https://cos.files.maozhishi.com/public/attachments/lfx/1665328342910.png)

> 直接点finish完成邮箱配置

![Post SMTP设置向导完成页面，点击“Finish”](https://cos.files.maozhishi.com/public/attachments/lfx/1665328342982.png)

## 四.测试发信邮箱 

> 我们要测试邮箱是否添加成功，在插件首页，我们点击send a test email开始测试

![Post SMTP插件仪表盘，点击“Send a Test Email”进行测试](https://cos.files.maozhishi.com/public/attachments/lfx/1665328342911.png)

> 输入接收邮件的邮箱

![Post SMTP发送测试邮件弹窗，输入收件人邮箱地址](https://cos.files.maozhishi.com/public/attachments/lfx/1665328342912.png)

> 测试成功：出现success说明邮箱测试成功，这样的邮箱是可以正常发送询盘的。

![Post SMTP发送测试邮件成功提示](https://cos.files.maozhishi.com/public/attachments/lfx/1665328342983.png)

> 邮箱已经收到测试邮件

![收件箱中收到来自Post SMTP的测试邮件](https://cos.files.maozhishi.com/public/attachments/lfx/1665328342981.png)

## 五.常见问题 

### 怎么开启端口？ 

> 国内的服务商一般只开通80/443等常见端口，465/587等端口是关闭的，我们一般需要在服务商的后台进行开启，以腾讯云为例，我们进去服务器管理界面，我们进入防火前辈，放行465端口。

![腾讯云服务器防火墙规则设置页面，添加入站规则放行TCP端口465](https://cos.files.maozhishi.com/public/attachments/lfx/1665328343101.png)

> 出现这个，说明465端口已经被放行

![腾讯云防火墙规则列表，显示已成功添加放行465端口的规则](https://cos.files.maozhishi.com/public/attachments/lfx/1665328343102.png)

<p style="text-align: center;">加入社群一起互助建站，分享你的踩坑经历。</p>
<p style="text-align: center;"><img src="https://cos.files.maozhishi.com/public/attachments/lfx/1670844224159.png" width="198" alt="加入社群交流二维码" /></p>
<p style="text-align: center;"><strong>更多免费建站技巧</strong></p>
<p style="text-align: center;"><strong>扫码联系夏日么么茶</strong></p>
