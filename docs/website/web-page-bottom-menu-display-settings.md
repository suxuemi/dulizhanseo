---
title: wp建站 页眉底部菜单显示不正常修改方法
link: https://www.dulizhanseo.com/web-page-bottom-menu-display-settings
description: 本文解决了WordPress网站页眉和底部菜单在实际预览时显示异常，但在自定义编辑界面正常的问题。通过开发者工具定位到是由于某个CSS文件（如/blocksy/css/global.css）加载失败（404错误）导致，并提供了通过Appnode后台找到并重新上传缺失文件到对应存储桶（如腾讯云COS）的修复步骤。
---

## 一、问题描述 

> **wordpress建站页面底部以及菜单显示异常：**
>
> - 在“自定义”功能里进行编辑时，页面显示正常；
> - 打开网站首页，页面顶部导航和底部显示就是异常。

> “自定义”功能区编辑是正常

![WordPress自定义界面预览，页眉和底部菜单显示正常](https://cos.files.maozhishi.com/public/attachments/lfx/1669711216561.png)

> 前台预览显示异常

![网站前台实际预览，页眉和底部菜单样式错乱](https://cos.files.maozhishi.com/public/attachments/lfx/1669711216562.png)

## 二、问题定位 

> 页面显示异常，一般是由于页面的css或者js文件等加载异常导致，所以我们只需要找到导致页面异常的未加载成功的文件即可。

### 2.1、打开开发人员工具 

按F12键，或在网页上右击，并选择“检查”
![浏览器右键菜单，选择“检查”打开开发者工具](https://cos.files.maozhishi.com/public/attachments/lfx/1669711216564.png)

> 进入“网页”选项标签页

![浏览器开发者工具，切换到“网络(Network)”标签页](https://cos.files.maozhishi.com/public/attachments/lfx/1669711216565.png)

### 2.2、重载问题页面 

> 刷新问题页面，在“网络”选项标签页，可以看到重新加载元素，200标识加载成功，404标识未加载成功。

![刷新页面后，开发者工具网络标签页显示资源加载情况](https://cos.files.maozhishi.com/public/attachments/lfx/1669711216566.png)

### 2.3、定位异常文件（404） 

我们在列表中可以看到一个加载异常的文件，状态显示为：404
![开发者工具网络标签页，筛选或找到状态为404的资源](https://cos.files.maozhishi.com/public/attachments/lfx/1669711216567.png)

### 2.4、获取文件路径 

> 点击对应文件，我们可以看到文件的加载链接

![点击404资源，查看其完整的URL路径](https://cos.files.maozhishi.com/public/attachments/lfx/1669711216568.png)

> **我们可以看到这个文件是通过域名txy.xxx.com进行加载的（使用了第三方的存储，所以显示的不是www），初步可以判断：可能是由于存储桶中没有这个css文件导致。**

### 2.5、检验相关问题文件 

> 进入存储桶搜索相关的文件或者文件夹

![登录对象存储控制台（如腾讯云COS），搜索缺失的文件路径](https://cos.files.maozhishi.com/public/attachments/lfx/1669711216569.png)

> 文件不存在，基本判定是这个文件缺失造成，我们就需要添加进去。

## 三、问题修复 

去appnode服务器找到原始目录，再替换掉腾讯云存储桶的缺失文件即可。
![问题修复流程示意图：从服务器找到原始文件上传到COS](https://cos.files.maozhishi.com/public/attachments/lfx/1669711216570.png)

### 3.1、找到缺失文件 

> 打开appnode后台找到网站文件选项：下载缺失文件

![登录AppNode后台，进入网站文件管理](https://cos.files.maozhishi.com/public/attachments/lfx/1669711216571.png)

### 3.2、找到对应文件地址 

```xml
www/blocksy/css/global.css
```

![AppNode文件管理器，导航到缺失文件的原始路径（例如/www/wp-content/themes/blocksy/css/）](https://cos.files.maozhishi.com/public/attachments/lfx/1669711216572.png)

### 3.3、点击下载 

![在AppNode文件管理器中选中缺失的文件（global.css）并点击下载](https://cos.files.maozhishi.com/public/attachments/lfx/1669711216573.png)

### 3.4、登录腾讯云存储桶 

> 打开存储桶列表，找到网站相对应的存储桶

![登录腾讯云COS控制台，进入对应的存储桶](https://cos.files.maozhishi.com/public/attachments/lfx/1669711216578.png)

### 3.5、搜索或者创建对应的文件夹 

> 当找不到文件夹时，我们就需要创建对应名称的文件夹

```xml
www/blocksy/css/global.css
```

![在COS存储桶中，根据缺失文件的路径搜索或创建对应的文件夹结构](https://cos.files.maozhishi.com/public/attachments/lfx/1669711216579.png)

> 创建“css”文件夹

![COS存储桶中创建文件夹步骤1](https://cos.files.maozhishi.com/public/attachments/lfx/1669711216580.png)
![COS存储桶中创建文件夹步骤2](https://cos.files.maozhishi.com/public/attachments/lfx/1669711216581.png)
![COS存储桶中创建文件夹步骤3](https://cos.files.maozhishi.com/public/attachments/lfx/1669711216582.png)

### 3.6、上传下载好的文件 

![将从服务器下载的缺失文件上传到COS存储桶对应的文件夹中](https://cos.files.maozhishi.com/public/attachments/lfx/1669711216583.png)

## 四、刷新问题界面 

刷新后，页面可正常显示。
![刷新网站前端页面，页眉和底部菜单恢复正常显示](https://cos.files.maozhishi.com/public/attachments/lfx/1669711216584.png)

---

<p style="text-align: center;">加入社群一起互助建站，分享你的踩坑经历。</p>
<p style="text-align: center;"><img src="https://cos.files.maozhishi.com/public/attachments/lfx/1670844224159.png" width="198" alt="加入社群交流二维码" /></p>
<p style="text-align: center;"><strong>更多免费建站技巧</strong></p>
<p style="text-align: center;"><strong>扫码联系夏日么么茶</strong></p>
