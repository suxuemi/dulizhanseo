---
title: 托管在cloudflare的域名，如何添加阿里企业邮箱解析记录？
link: https://www.dulizhanseo.com/add-alibaba-email-resolution-to-cloudflare
description: 本文介绍了当域名托管在Cloudflare后，如何添加阿里企业邮箱所需的MX解析记录，以解决企业邮箱无法正常收发邮件的问题。通过在Cloudflare后台正确添加两条MX记录并设置优先级，可以恢复阿里企业邮箱的正常使用。
---

> 很多建站的小伙伴把域名托管在cloudflare网站后，发现域名绑定的企业邮箱不能正常的收发邮件，我们需要把原本的解析记录在cloudflare里重新解析即可，教程以阿里邮箱为例。

进入阿里企业邮箱后台，发现提示“<u>域名未验证，暂时不能收发邮件</u>”，这是由于：域名未能正常添加MX解析记录导致。

![阿里企业邮箱后台提示“域名未验证”](https://cos.files.maozhishi.com/xp/xz1666583439068.png)

## 找到域名 {#find-domain}

进入cloudflare后台，找到需要添加解析记录的域名。

![Cloudflare后台域名列表截图](https://cos.files.maozhishi.com/xp/xz1666583439069.png)

## 添加记录 {#add-records}

添加mx解析记录，由于添加的是一级域名，所以，name写的是`@`,type选择`MX`，mail server 写我们要添加的阿里云服务器记录，阿里云企业邮箱我们需要添加两个解析记录

```plain
mxn.mxchina.com （优先级：5）
mxw.mxchina.com （优先级：10）
```

![Cloudflare添加MX记录界面](https://cos.files.maozhishi.com/xp/xz1666583439070.png)

添加完，如下图：
注意：优先级一定要对应上

![Cloudflare DNS记录列表，显示已添加的两条阿里邮箱MX记录](https://cos.files.maozhishi.com/xp/xz1666583439071.png)

## 检查解析是否生效 {#check-resolution}

我们返回阿里云后台，点击“检查域名”，检测成功会出现以下提示“域名验证成功，可以正常收发邮件”

如果检查还是失败，可以等几分钟再尝试，如果一直不可以，那么你要检查解析记录是否添加正确。

![阿里企业邮箱后台显示“域名验证成功”](https://cos.files.maozhishi.com/xp/xz1666583439072.png)

---

<p style="text-align: center;"><img src="https://cos.files.maozhishi.com/xp/xz1666583439074.png" width="189" alt="联系夏日么么茶的二维码" /></p>
<p style="text-align: center;"><strong>更多免费建站技巧</strong></p>
<p style="text-align: center;"><strong>扫码联系夏日么么茶</strong></p>
```
