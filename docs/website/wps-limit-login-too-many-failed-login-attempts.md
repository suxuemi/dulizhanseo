---
title: 开启WPS Hide Login和WPS Limit Login后，频繁出现Too many failed login attempts提醒
link: https://www.dulizhanseo.com/wps-limit-login-too-many-failed-login-attempts
description: 解决网站没获取到访客真实IP，导致WPS Limit Login误判后台被攻击的问题。
---

当我们在wordpress后台开启了WPS Limit Login后，我们的邮箱中经常收到如下图的登录限制提醒，这是由于：

1.我们使用了CDN加速，网站获取到的ip都是加速节点的ip。

2.搜索引擎爬虫或者你本人访问后台，请求的ip都是加速的IP，导致插件误判是遇到攻击，尤其是CDN回源时，会遍历所有的资源，更容易导致误判；

3.所以解决的办法是让网站获取到访客的真实ip。

解决方案参见：[如何获取网站访客的真实IP？](https://www.dulizhanseo.com/get-real-ip-website-visitor/)

**邮箱收到一堆诸如此类的邮件**
![邮箱收到大量关于“Too many failed login attempts”的邮件提醒](https://cos.files.maozhishi.com/wp-content/uploads/1664702336413.webp)

**正文会给出访问的ip**

![邮件正文显示因登录尝试失败而被锁定的IP地址](https://cos.files.maozhishi.com/wp-content/uploads/1664702415496.webp)

**查询IP：[172.71.98.29](https://www.baidu.com/s?wd=172.71.98.29) （可以点击此处直接查询）**
我们可以看到这个ip是归属cloudflare，这是cloudflare回源的节点
接下来参照《[如何获取网站访客的真实IP？](https://www.dulizhanseo.com/get-real-ip-website-visitor/)》，获取访客的真实IP
![百度查询IP地址172.71.98.29，显示归属于Cloudflare](https://cos.files.maozhishi.com/wp-content/uploads/1664708298207.webp)
