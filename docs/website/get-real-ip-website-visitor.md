---
title: 如何获取网站访客的真实IP？
link: https://www.dulizhanseo.com/get-real-ip-website-visitor
description: CDN加速时，由于CDN的机制问题，导致网站获取到的ip是CDN的代理节点，造成我们获取的IP都是错误的信息，我们通过设置HTTP_X_FORWARDED_FOR，可准确获取访客的真实IP。
---

> 我们使用cloudflare以及其他的CDN加速时，由于CDN的机制问题，导致网站获取到的ip是CDN的代理节点，造成我们获取的IP都是错误的信息，我们通过以下设置，可以绕过代理CDN，准确获取访客的真实IP。

>

> 原理：CDN回源访问网站时，会带上HTTP_X_FORWARDED_FOR字段，这个字段是访客的真实IP信息。

## 一、获取IP代码 {#get-ip-code}

>

> 我们需要在“wp-config.php”中贴入以下代码

>

```less

/** 绕过 CDN 代理IP获取客户真实IP地址。 */

if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))

{

$list = explode(',',$_SERVER['HTTP_X_FORWARDED_FOR']);

$_SERVER['REMOTE_ADDR'] = $list[0];

}

```

## 二、找到wp-config.php {#find-wp-config-php}

>

> 我们是用appnode建站，所以我们进入appnode后台，点击要设置的网站，点击后方“文件”，如果你是用其他的程序管理服务器，那么要找到对应根目录下的文件

>

![AppNode网站管理列表，点击网站后的“文件”按钮](https://cos.files.maozhishi.com/public/attachments/lfx/1664696614117.png)

>

> 点击www进入目录

>

![AppNode文件管理器，进入www根目录](https://cos.files.maozhishi.com/public/attachments/lfx/1664696614121.png)

>

> 点击文件“wp-config.php”进入编辑

>

![AppNode文件管理器，点击编辑wp-config.php文件](https://cos.files.maozhishi.com/public/attachments/lfx/1664696614122.png)

## 三、贴入代码 {#paste-code}

>

> 拖到最下方，双击进行编辑，贴入我们开头的代码，然后点击保存

>

![在wp-config.php文件末尾粘贴获取真实IP的代码并保存](https://cos.files.maozhishi.com/public/attachments/lfx/1664696614169.png)

>

> 这个地方我们再贴一次代码

>

```less

/** 绕过 CDN 代理IP获取客户真实IP地址。 */

if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))

{

$list = explode(',',$_SERVER['HTTP_X_FORWARDED_FOR']);

$_SERVER['REMOTE_ADDR'] = $list[0];

}

```

## 四、再次部署 {#redeploy-environment}

为了保证生效，建议对网站环境进行二次部署，进入appnode，找到对应的网站，在设置中点击“部署”

**注意：如果你不是用appnode，那么可以进服务器后台，直接重启服务器。**

![AppNode网站设置，点击“部署”按钮使配置生效](https://cos.files.maozhishi.com/wp-content/uploads/1664707986694.webp)

点击“开始部署”，让新的配置生效

![AppNode网站部署确认，点击“开始部署”](https://cos.files.maozhishi.com/wp-content/uploads/1664707884061.webp)

>

>

> ## 五、访问测试（非必要） {#access-test-optional}

>

> 现在网站就能获取到真实的访客ip（插件：IP Blacklist Cloud ，如果没装这个插件，可以无视这个步骤）

>

![IP Blacklist Cloud插件显示获取到的访客IP地址](https://cos.files.maozhishi.com/public/attachments/lfx/1664696614164.png)

>

> 贴入百度查询下，的确是真实的ip

>

![百度搜索验证获取到的IP地址为真实访客IP](https://cos.files.maozhishi.com/public/attachments/lfx/1664696614165.png)
