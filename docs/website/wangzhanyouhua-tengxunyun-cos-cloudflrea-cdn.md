---
title: 服务器空间小？网站打开卡顿？为你的网站提个速
link: https://www.dulizhanseo.com/wangzhanyouhua-tengxunyun-cos-cloudflrea-cdn
description: 利用第三方对象存储（腾讯云对象存储COS服务）和全球加速（cloudflare代理）服务，解决网站访问卡顿、服务器小等问题，成本低至0元。
---

> 本文主要针对部分小伙伴服务器空间小，打开网站速度的问题
>
> 通过腾讯云的cos有效释放你服务器空间，通过cloudflare的加速，让你的文件（图片/视频）在全球访问无阻。
>
> **注意：设置之前，请务必进行备份！！！**

![网站通过腾讯云COS存储和Cloudflare CDN加速的架构示意图](https://cos.files.maozhishi.com/public/attachments/lfx/1664645568634.jpg)

## 一、云端存储配置 

### 1.1、COS官网 

腾讯云对象存储cos：**[点此进入](https://laifa.xin/txy-cos)**

我们进入腾讯云官网，你可以查看cos相关的规则，cos针对香港以及海外区域是免费 5G的存储，对于很多做网站的小伙伴来说，已经完全满足需求。

我们进入腾讯cos的官网后，点击“立即使用”，开始进入控制台（**注意：如果是未注册的小伙伴，会要求你注册实名**）

![腾讯云控制台概览页面](https://cos.files.maozhishi.com/public/attachments/lfx/1664645568648.jpg)

<!-- -->

**勾选协议，并确认开通**

<!-- -->

![腾讯云对象存储COS服务开通协议确认](https://cos.files.maozhishi.com/public/attachments/lfx/1664645568699.jpg)

---

**新用户是有资源赠送的，不过 基本是鸡肋，直接无视就好**

---

![腾讯云新用户COS资源包赠送提示](https://cos.files.maozhishi.com/public/attachments/lfx/1664645568649.jpg)

---

**点击 “进入控制台”，进入COS控制台**

---

![点击进入对象存储COS控制台](https://cos.files.maozhishi.com/public/attachments/lfx/1664645568636.jpg)

### 1.2、创建存储桶 

---

**点击 “创建存储桶”，进入创建流程**
存储桶，你可以理解为存放文件的空间

---

![在COS控制台点击创建存储桶按钮](https://cos.files.maozhishi.com/public/attachments/lfx/1664645568650.jpg)

---

**地域：选择中国香港（⭐）**

**名称**：可以随意设置，这里我设置的是xunpan

**访问权限**：务必选择“公有读私有写”（意思是没权限的只能看 ，如果你想上传文件，那么必须要有权限才行。）

---

![创建存储桶配置：选择地域（中国香港）、命名、设置访问权限为公有读私有写](https://cos.files.maozhishi.com/public/attachments/lfx/1664645568732.jpg)

---

**高级可选设置：使用默认的设置即可，无需进行任何修改**

---

![创建存储桶高级可选设置，保持默认](https://cos.files.maozhishi.com/public/attachments/lfx/1664645568654.jpg)

---

**确认配置信息**

---

![确认存储桶配置信息](https://cos.files.maozhishi.com/public/attachments/lfx/1664645568668.jpg)

---

**确认后自动跳文件列表，此时的列表为空。**
**我们点击 “概览”，查看存储桶的信息**

---

![存储桶创建成功后文件列表为空，点击概览查看信息](https://cos.files.maozhishi.com/public/attachments/lfx/1664645568683.jpg)

---

**查看COS存储桶“基本信息（名称和地域）”和“域名信息（访问域名）”，务必 保存好这三个信息，我们在后续是用到的。**

---

```
存储桶名称：xunpan-130****856
所属地域：香港 （中国）（ap-hongkong）
访问域名：https://xunpan-130****856.cos.ap-hongkong.myqcloud.com
```

![存储桶概览显示基本信息和访问域名](https://cos.files.maozhishi.com/public/attachments/lfx/1664645568744.jpg)

### 1.3、创建访问权限 

为了保证我们网站能正常上传文件到cos，那么我们必须生成对应的全选

我们上文在创建存储桶的时候，已经限制了权限为私有写，那么我们必须赋予网站写入的权限。

我们进入权限设置入口 ：<a href="https://console.cloud.tencent.com/cam/capi">https://console.cloud.tencent.com/cam/capi</a>

![腾讯云访问管理（CAM）控制台的API密钥管理页面](https://cos.files.maozhishi.com/public/attachments/lfx/1664645568715.jpg)

---

点击“新建密钥”，开始创建网站的访问专用密钥。

---

![点击新建密钥按钮创建访问密钥](https://cos.files.maozhishi.com/public/attachments/lfx/1664645568740.jpg)

---

创建好的密钥，默认是不显示secretkey，我们需要点击显示

---

![新创建的API密钥，SecretKey默认隐藏](https://cos.files.maozhishi.com/public/attachments/lfx/1664645568741.jpg)

---

**点击后要求我们使用微信进行扫码验证**

---

![显示SecretKey所需的微信扫码安全验证](https://cos.files.maozhishi.com/public/attachments/lfx/1664645568742.jpg)

---

验证后，可以看到`APPID/``SecretId/SecretKey `等信息，请务必保存好
**务必不要让他人知道！**

---

![显示完整的APPID、SecretId和SecretKey信息](https://cos.files.maozhishi.com/public/attachments/lfx/1664645568743.jpg)

---

以上的三个信息，我们用文本单独保存备用。

---

```
APPID:1304194856
SecretId: AKIDS****p8D3e2B6mbEk******UGn5IH3a
SecretKey: LSM3****cy85nGVWJrB****kodEcon
```

## 二、配置加速 

由于我们是使用cloudflare进行全球加速的，那么我们需要分配一个单独的子域名进行加速。

我们网站的域名是xunpan.wang ，我们专门分配一个加速域名txy.xunpan.wang用于文件以及图片的访问。

### 2.1、添加“自定义源站域名” 

---

首先，要进入cos存储桶的设置中，找到“自定义源站域名”，点击添加域名

---

![COS存储桶域名管理设置，添加自定义CDN加速域名](https://cos.files.maozhishi.com/public/attachments/lfx/1664645568758.jpg)

---

输入用于访问的域名txy.xunpan.wang，并点击保存

---

![输入自定义源站域名txy.xunpan.wang并保存](https://cos.files.maozhishi.com/public/attachments/lfx/1664645568822.jpg)

### 2.2、添加域名解析记录 

添加后，并不是能直接访问的，我们还需要添加解析记录，同时为了解决“全球加速”问题和https访问问题，那么我们在解析时候，要注意：

1.  务必要使用cloudlfare进行；
2.  添加解析记录时，要在xunpan.wang这个域名下，千万别搞错咯；
3.  域名解析记录类型是CNAME；
4.  域名解析的名称的txy（我们要添加的是txy.xunpan.wang，所以此处应该是写txy）；
5.  目标：我们在cos存储桶设置自定义源站域名时，有个cname，就是这个内容，当然这个值和存储桶的访问域名也是一致的；
6.  代理状态：务必要开启代理状态。

![在Cloudflare中为txy添加CNAME解析记录指向COS域名，并开启代理](https://cos.files.maozhishi.com/public/attachments/lfx/1664645568652.jpg)

### 2.3、文件访问测试 

通过上文，我们如何确定我们是配置成功了呢？

- 手动上传一个文件到存储桶；
- 通过加速域名txy.xunpan.wang去访问这个文件，看是否能访问成功。

---

我们进入存储桶的文件列表，上传一个名为xzz.zip的文件到存储桶。

---

![在COS存储桶文件列表上传测试文件xzz.zip](https://cos.files.maozhishi.com/public/attachments/lfx/1664645568653.jpg)

---

**这是已经上传成功了，我们在列表中，选择“xzz.zip”这个文件，并点击详情。**

---

![文件上传成功，点击详情查看文件信息](https://cos.files.maozhishi.com/public/attachments/lfx/1664645568733.jpg)

---

在详情中，选择“自定义源站域名”和我们上文添加的加速域名txy.xunpan.wang
复制下方的“对象地址”，并贴入地址栏进行下载测试

---

![文件详情中复制使用自定义加速域名的对象地址进行测试](https://cos.files.maozhishi.com/public/attachments/lfx/1664645568823.jpg)

---

我们可以看到，这个文件是可以正常下载的，这说明我们的配置是没问题的。

---

![浏览器成功通过加速域名下载测试文件，验证配置成功](https://cos.files.maozhishi.com/public/attachments/lfx/1664645568824.jpg)

## 三、网站后台配置 

### 3.1、安装插件 

进入网站后台安装插件页面，搜索并安装“Sync QCloud COS”

- 路径：插件 &gt;&gt; 安装插件
- 搜索：Sync QCloud COS

![在WordPress后台搜索并安装“Sync QCloud COS”插件](https://cos.files.maozhishi.com/public/attachments/lfx/1664645568825.jpg)

### 3.2、腾讯云COS设置 

启用了“Sync QCloud COS”以后，我们 进入插件进行设置。

1.  存储桶名称：`xunpan-130****856`
2.  存储桶低于：中国香港
3.  APP ID：`1304194856` （上文1.3中生成的appid）
4.  SecretID：`AKIDS****p8D3e2B6mbEk******UGn5IH3a`（上文1.3中生成）
5.  SecretKey：`LSM3****cy85nGVWJrB****kodEcon`（上文1.3中生成）
6.  本地文件夹：建议用“.”(英文的点)
7.  URL前缀：https://txy.xunpan.wang （分配的域名是txy.xunpan.wang，同时支持https访问，所以此处是https://txy.xunpan.wang，注意结尾不能是“/”）

![Sync QCloud COS插件设置页面上半部分](https://cos.files.maozhishi.com/public/attachments/lfx/1664645568826.jpg)

**填写内容的示意图如下图**
**参照进行设置即可**

![填写Sync QCloud COS插件配置信息示例](https://cos.files.maozhishi.com/public/attachments/lfx/1664645568827.jpg)

---

**为了节省本地存储空间，建议进行以下两个设置**
①、勾选“**不在本地保留备份**”
②、**自动重命名文件**：选择“时间戳+随机数”

---

![Sync QCloud COS插件设置页面下半部分，配置本地备份和文件重命名规则](https://cos.files.maozhishi.com/public/attachments/lfx/1664645568828.jpg)

**复制下述链接到浏览器测试打开情况**
[https://txy.xunpan.wang/2022/10/1664621852620.webp](https://txy.xunpan.wang/2022/10/1664621852620.webp)

## 四、相关问题 

### 4.1、原数据未转移，导致图片显示异常 

<!-- 注意：原标题编号为3.1，根据上下文调整为5.1 -->

诸多小伙伴反馈：按照本文设置后，图片不显示了
这是由于：**已有的静态文件没有转移到腾讯云COS导致，我们需要手动进行转移**

---

#### A：问题特征 

有小伙伴反馈，参照以上教程操作后，网站图片都挂掉了
![网站前端图片显示异常，出现占位符](https://cos.files.maozhishi.com/wp-content/uploads/1665465016263.png)

具体情况见下图
![图片无法显示的具体情况及使用了加速域名的图片URL](https://cos.files.maozhishi.com/wp-content/uploads/1665464953273.png)

后台媒体库中的诸多图片也是不显示的

![WordPress后台媒体库图片缩略图无法显示](https://cos.files.maozhishi.com/wp-content/uploads/1665465235341.png)

**我们随意点开几个图片，可以看到对应的链接，我们去cos中查找，发现文件并不存在**
![媒体库图片详情显示COS路径，但文件实际未上传至COS](https://cos.files.maozhishi.com/wp-content/uploads/1665465413650.png)

#### B：问题定位 

我们可以看到这个域名并不是和网站域名一致，而是我们之前新配置的专门用于图片加速的域名。

之前图片不显示可能是由于图片还在服务器中，并未同步到COS导致，那么我们需要手动把服务器的文件下载并上传到腾讯云COS中。

注意：静态文件是存储在网站根目录的`/wp-content/uploads` 文件夹下，那么我们也需要进入服务器找到网站对应的文件夹，整个打包转移到COS中

#### C：下载文件 

**我们需要下载需转移的文件（`/wp-content/uploads` 文件夹）**
我们进入appnode后台，找到对应网站的文件目录，点击“文件”即可进入文件管理界面
![AppNode后台文件管理器，网站根目录](https://cos.files.maozhishi.com/wp-content/uploads/1665465601926.png)
www是该网站的根目录，点击www进入![进入网站根目录下的www文件夹](https://cos.files.maozhishi.com/wp-content/uploads/1665465674746.png)

我们在根目录下，找到“wp-content”文件夹，我们在文件夹下可以看到uploads文件夹
我们勾选uploads文件夹，并在左上方的“批量操作”下点选“压缩”操作
**注意：为什么要压缩？**
由于文件夹内文件较多，我们通过压缩可以节省操作时间以及防止遗漏
![找到wp-content下的uploads文件夹，准备压缩](https://cos.files.maozhishi.com/wp-content/uploads/1665465941825.png)

在弹出的弹窗中，我们选择zip压缩格式，直接点击“确定”开始进行压缩
![选择ZIP格式进行压缩](https://cos.files.maozhishi.com/wp-content/uploads/1665466244977.png)

压缩中的界面如下

![文件压缩进行中](https://cos.files.maozhishi.com/wp-content/uploads/1665466282366.png)

压缩完成后，我们找到uploads.zip压缩包
勾选uploads.zip压缩包，并在左上角的“批量操作”中点击“更多&gt;&gt;”,选择下载
这样就可以把uploads.zip压缩包下载到本地
![压缩完成，选中uploads.zip文件准备下载](https://cos.files.maozhishi.com/wp-content/uploads/1665466503329.png)

#### D.解决问题（文件存储于cos根目录） 

**由于我们上文教程中设置的文件夹是根目录，意思是文件传到cos是传到cos最上一级中**
**那么uploads文件夹中的文件内容也要传到cos 的根目录**
**（重点标记）**
![插件设置本地文件夹为“.”，表示文件存储于COS根目录](https://cos.files.maozhishi.com/wp-content/uploads/1665485142014.png)

我们在本地解压uploads压缩包，把uploads文件夹中的内容上传到cos根目录
此处我们直接全选文件夹内的内容，然后拖拽上传到COS根目录
![将本地uploads文件夹内容拖拽上传到COS存储桶根目录](https://cos.files.maozhishi.com/wp-content/uploads/1665485190065.png)

####

我们可以看到上传的速度还是蛮快的

![腾讯云COS文件上传进度](https://cos.files.maozhishi.com/wp-content/uploads/1665485274747.png)

很快几百个文件上传完成，我们可以看到根目录已经有这些文件了

![COS存储桶根目录显示已上传的文件和文件夹](https://cos.files.maozhishi.com/wp-content/uploads/1665485336238.png)

#### F.测试访问 

<!-- 注意：原标题编号为D，逻辑上应在E之后，调整为F -->

这时我们去媒体库可以看到图片已经是可以正常访问了

![WordPress后台媒体库图片恢复正常显示](https://cos.files.maozhishi.com/wp-content/uploads/1665485394258.png)

#### E.补充说明（文件存储于COS非根目录） 

<!-- 注意：原标题编号为E，逻辑上调整到F之前 -->

如下图，文件存储于腾讯云cos的wp-content/uploads文件夹下，那么我们上传服务器上uploads文件夹内的文件位置也要相应调整
![插件设置本地文件夹为“wp-content/uploads”，表示文件存储于COS对应路径](https://cos.files.maozhishi.com/wp-content/uploads/1665488653564.png)

如下图，把下载到本地的uploads.zip压缩包解压成文件夹的形式
登录腾讯云后台，进入存储桶的“文件列表”
由于uploads是在wp-content文件夹下，那么我们需要在存储桶根目录下找到wp-content文件夹
如果wp-content文件夹不存在，请手动创建一个（没任何同步操作是不存在的，有同步操作会自动生成）
在wp-content文件夹下，我们上传本地的uploads文件夹（**建议直接拖拽uploads文件夹直接上传**）
![将本地uploads文件夹拖拽上传到COS存储桶的wp-content文件夹内](https://cos.files.maozhishi.com/wp-content/uploads/1665467170254.png)

在存储桶的右上角我们是可以看到上传的进度的，速度非常快。

![腾讯云COS右上角显示上传任务进度](https://cos.files.maozhishi.com/wp-content/uploads/1665467225218.png)

点击任务进度，可以看到执行的详情
![腾讯云COS上传任务列表详情](https://cos.files.maozhishi.com/wp-content/uploads/1665467249023.png)

完成上传后，我们进入打开网站后者进入媒体库，看之前的图片是否能正常显示，理论上是不会存在问题的
**如有问题，请大家在文末留言**

![上传到COS非根目录后，WordPress媒体库图片正常显示](https://cos.files.maozhishi.com/wp-content/uploads/1665467633172.png)

![文章末尾提供的联系或支持二维码](https://cos.files.maozhishi.com/public/attachments/lfx/1664645568829.jpg)
