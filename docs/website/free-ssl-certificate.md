---
title: 如何申请免费的SSL证书
link: https://www.dulizhanseo.com/free-ssl-certificate
description: 本文介绍获取免费SSL证书的两种主要方法：通过Cloudflare（推荐，提供长达15年证书）或腾讯云（适用于域名DNS无法修改的情况）。详细步骤指导如何在腾讯云申请、验证（DNS验证）并下载免费SSL证书，以及如何在服务器（以阿里云为例）配置并强制开启HTTPS。
---

> 网站安装ssl证书，网站的URL会以`https://`开头，例：`https://www.123.com`简单来说https就是加密数据传输，通俗的说就是安全连接。再不安装SSL证书的情况下，网站显示：`http://www.123.com`，浏览器会提示你网站链接不安全。

## 如何为网站获取免费的ssl证书？ 

首选使用域名网站**cloudflare**：[https://laifa.xin/ym](https://laifa.xin/ym)，域名托管上去，即可免费申请获得**超15年的ssl证书（这时间是真TM香）。**至于怎么把别的地方注册的域名托管到cloudflare，可以点击[这里](https://mp.weixin.qq.com/s/SfiK0VtLUDbcdv7wdJa-kw)查看。

<span style="color: #c75c00; font-size: 12px;">但这里不得不说有的小伙伴域名不是自己注册，别的建站公司或者企业邮公司帮你注册的域名，他们不乐意随便的更改域名DNS服务器。（简单点：这域名的控制权在他们手里，以后想自己开发客户，或者卖给你的同行都可以，建议你自己新注册域名，不要让外人代劳）。</span>

如果出现以上情况，域名又不能随意放弃，我们只能另寻他法：在阿里或者腾讯上申请免费的ssl证书。我们以腾讯为例。

## 一、注册登录腾讯账号。 

登录网址：[https://laifa.xin/txy](https://laifa.xin/txy) 。微信扫码登录

![腾讯云登录页面，提示使用微信扫码登录](https://cos.files.maozhishi.com/小书匠/1690963654242.png)

## 二、申请SSL证书 

### 1.进入ssl证书界面 

![腾讯云控制台界面，导航栏指向SSL证书选项](https://cos.files.maozhishi.com/小书匠/1690963654243.png)

### 2.进入：我的证书。 

![腾讯云SSL证书管理界面，显示“我的证书”选项卡](https://cos.files.maozhishi.com/小书匠/1690963654244.png)

### 3.申请ssl证书 

#### a.我的证书--免费证书--申请免费证书。 

![腾讯云“我的证书”页面，点击“免费证书”并选择“申请免费证书”按钮](https://cos.files.maozhishi.com/小书匠/1690963654245.png)

#### b.选择右侧申请免费证书 

![腾讯云证书申请页面，确认选择免费DV SSL证书并点击申请](https://cos.files.maozhishi.com/小书匠/1690963654246.png)

#### c.添加绑定域名，选择dns验证 

![腾讯云SSL证书申请表单，填写域名信息并选择DNS验证方式](https://cos.files.maozhishi.com/小书匠/1690963654247.png)

#### d.打开域名管理后台，解析文件。 

域名在哪买，就去哪里？或者托管到哪？就在那解析。（下图是阿里云）

![阿里云域名解析设置界面，展示如何添加TXT记录进行DNS验证](https://cos.files.maozhishi.com/小书匠/1690963654248.png)

#### e.验证通过，点击提交申请。返回列表 

![腾讯云SSL证书申请页面，显示DNS验证通过，点击“提交申请”](https://cos.files.maozhishi.com/小书匠/1690963654254.png)

#### f.等待一分钟，签发完成，下载ssl证书文件 

![腾讯云“我的证书”列表，显示证书已签发，点击“下载”按钮](https://cos.files.maozhishi.com/小书匠/1690963654255.png)

选择其中一个文件下载。

![腾讯云SSL证书下载弹窗，选择适用于Nginx服务器的证书文件进行下载](https://cos.files.maozhishi.com/小书匠/1690963654256.png)

#### g.打开下载文件 

一般都会让你输入公钥，密钥。双击选择文本打开，或者右击编辑。

![文件管理器截图，显示下载的SSL证书压缩包内容，包含.key和.pem文件](https://cos.files.maozhishi.com/小书匠/1690963654257.png)

## 三、配置ssl证书。 

### 1.找到网站配置HTTPS的入口（阿里云为例），上传文件。 

![阿里云虚拟主机管理后台，找到HTTPS设置入口，准备上传证书文件](https://cos.files.maozhishi.com/小书匠/1690963654258.png)

### 2.打开强制跳转https 

![阿里云虚拟主机HTTPS设置，开启“强制HTTPS”选项](https://cos.files.maozhishi.com/小书匠/1690963654259.png)

最后两个步骤，使用的服务器不同，方法也不同,需要自己找下入口。

---

<p style="text-align: center;"><img src="https://cos.files.maozhishi.com/public/attachments/lfx/1669111684413.png" width="198" alt="联系夏日么么茶的二维码" /></p>
<p style="text-align: center;"><strong>更多免费建站技巧</strong></p>
<p style="text-align: center;"><strong>扫码联系夏日么么茶</strong></p>
