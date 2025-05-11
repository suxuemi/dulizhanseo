---
title: 小白建站最佳搭档（二）：图片批量转存与粘贴上传神器-小书匠
link: https://www.dulizhanseo.com/best-partner-for-websites-2-image-batch-dump-and-paste-upload-artifact-little-booksmith
description: 本教程介绍如何使用小书匠结合腾讯云COS和Cloudflare，实现将语雀等平台上的图片链接批量转换并存储到自己的图床，解决图片防盗链问题，方便WordPress网站内容编辑。
---

> **写文章时，如果有几十张图片要上传，那会非常麻烦，通过本文，让你轻松实现图片批量上传与转移问题。**

> 在前文，我们 介绍过语雀可以帮助我们进行便捷的文章/产品管理，同样，语雀可以实现粘贴上传图片，以及批量上传图片，非常快捷，**但图片会被转存为语雀的链接**，语雀的链接是有防盗链的，在你的网站上，图片就会无法正常显示，这时，我们就需要借助小书匠帮助你把图片的链接转换为你自己域名的链接。
>
> 本文我们带大家来了解下腾讯云cos（存储图片）/cloudflare（全球加速访问）/小书匠（批量转存图片），我们借助小书匠的“图床转换”功能，快速把图片从语雀转换成到自己的存储空间（腾讯云cos），并通过自己的域名进行加速访问（cloudflare代理加速）。

## 一、图床参数获取 

图床参数主要是腾讯云cos对象存储和cloudflare绑定的加速域名，这篇我们不做重复讲，大家借鉴《[服务器空间小？网站打开卡顿？为你的网站提个速](https://laifa.xin/xp52-txy-cf)》（查看一和二两章即可），请大家在电脑上打开查看。

- 第一章节《云端存储配置》：获取 `存储桶名称`、`所属地域`、`SecretId`、`SecretKey` 等4个信息
- 第二章节《配置加速》：获取“`自定义源站域名`”
- 有了以上这些信息以后，我们就可以在小书匠中进行配置。

![腾讯云COS和Cloudflare配置相关参数示意图](https://cos.files.maozhishi.com/public/attachments/lfx/1665494675528.png)

## 二、软件下载安装 

支持Windows和osx（苹果系统），请大家选择自己系统对应的版本进行安装。

> 下载链接：

Win64位版本：[https://dd.laifa.xin/xsj-win64.zip](https://dd.laifa.xin/xsj-win64.zip) （内存大于4g的Windows系统一般下载这个版本）
Win32位版本：[https://dd.laifa.xin/xsj-win32.zip](https://dd.laifa.xin/xsj-win32.zip)
osxarm版本：[https://dd.laifa.xin/xsj-osxarm.zip](https://dd.laifa.xin/xsj-osxarm.zip) Mac M1/M2 机器的用户下载这个版本
osx64版本：[https://dd.laifa.xin/xsj-osx64.zip](https://dd.laifa.xin/xsj-osx64.zip) Mac M1/M2 机器以外的用户请下载这个版本

Mac M1/M2 机器的用户，请下载 osxarm 版本，如果发现不能启动，可以尝试执行下面的命令

```xml
cd /Users/suziwen/Downloads/Story-writer-osxarm
xattr -cr ./Story-writter.app
```

安装过程略过。

## 三、快速配置图床 

> 我们演示的是配置接入 ==腾讯云cos存储桶== 作为**==图片存储空间==**，同时通过**==加速域名进行图片访问==**
> 存储桶与加速域名参数获取参照《[服务器空间小？网站打开卡顿？为你的网站提个速](https://laifa.xin/xp52-txy-cf)》，我们需要获取：`存储桶名称`、`所属地域`、`SecretId`、`SecretKey`、`自定义源站域名` 等5个参数信息。

### 3.1、进入绑定设置 

> 找到左上角的小书匠标识 点击

![小书匠主界面左上角Logo按钮](https://cos.files.maozhishi.com/public/attachments/lfx/1665494675182.png)

> 进入界面-点击左侧的绑定按钮

![小书匠设置界面左侧“绑定”菜单](https://cos.files.maozhishi.com/public/attachments/lfx/1665494675529.png)

> 在绑定界面下方的图床服务中找到：腾讯云对象存储

![小书匠绑定设置界面，找到“腾讯云对象存储”选项](https://cos.files.maozhishi.com/public/attachments/lfx/1665494675184.png)

### 3.2、设置图床参数 

> 在弹出的窗口中，填入存储桶数据。
> 具体存储桶与域名参数获取参照《[服务器空间小？网站打开卡顿？为你的网站提个速](https://laifa.xin/xp52-txy-cf)》我们需要获取：`存储桶名称`、`所属地域`、`SecretId`、`SecretKey`、`自定义源站域名` 等5个参数信息，然后对照下图进行填写，请注意：1.**自定义名称**：随意写，这个就是给你自己看的；2.**SecretId**：这个对应我们在腾讯云中获取的 `SecretId` 3.**SecretKey**：这个对应我们在腾讯云中获取 `SecretKey`

![小书匠腾讯云COS绑定设置窗口（上半部分：名称、SecretId、SecretKey）](https://cos.files.maozhishi.com/public/attachments/lfx/1665494675526.png)

> **4.空间名称（Bucket Name）**：对应腾讯云cos `存储桶名称` 5.**地域**：存储桶所在的位置：对应腾讯云cos `存储桶所属地域`

![小书匠腾讯云COS绑定设置窗口（地域选择）](https://cos.files.maozhishi.com/public/attachments/lfx/1665494675455.png)

> 6.**文件名称规则**：这个规则默认，也可以自定修改，注意：==**要以/开头，同时一定要保留{{filename}}**== 7.**图片URL前缀**：我们分配的加速访问域名是 `txy.xunpan.wang`，那么我们此处填写的是 `https://txy.xunpan.wang/` (==http或https开头，以/结尾==)

![小书匠腾讯云COS绑定设置窗口（下半部分：空间名称、地域、文件规则、URL前缀）](https://cos.files.maozhishi.com/public/attachments/lfx/1665494675457.png)

> 最终我们按照下图进行图床绑定的设置。

![小书匠腾讯云COS绑定设置完整填写示例](https://cos.files.maozhishi.com/public/attachments/lfx/1665494675530.png)

填写完成后，勾选刚增加的图床，设为默认，并点击确认完成配置

![小书匠绑定设置界面，勾选新增的腾讯云COS图床并设为默认](https://cos.files.maozhishi.com/public/attachments/lfx/1665494675523.png)

> 点击黑色区域，返回小书匠编辑页面

![小书匠设置界面返回编辑器按钮](https://cos.files.maozhishi.com/public/attachments/lfx/1665494675531.png)

### 3.3、修改编辑配置 

> 由于默认编辑是 `立即预览` (所见即所得)模式，对于我们需要纯文本编辑来讲，并不利于我们进行编辑，所以我们要关闭掉。
> 参照下图，点击编辑器中间部分的齿轮图标。

![小书匠编辑器中间设置按钮（齿轮图标）](https://cos.files.maozhishi.com/public/attachments/lfx/1665494675524.png)

> 此处默认是勾选了“立时预览（所见即所得）”，那么我们取消勾选即可。

![小书匠编辑器设置，取消勾选“立时预览（所见即所得）”](https://cos.files.maozhishi.com/public/attachments/lfx/1665494675525.png)

> 取消后的界面如下图，使得界面变成纯文本形式，便于我们编辑

![小书匠编辑器取消“立时预览”后的纯文本编辑界面](https://cos.files.maozhishi.com/public/attachments/lfx/1665494675173.png)

## 四、图床替换说明 

### 4.1、新建编辑文档 

> 点击右上角的“新建”，即可快速创建一个文档。

![小书匠编辑器右上角“新建”按钮](https://cos.files.maozhishi.com/public/attachments/lfx/1665494675459.png)

### 4.2、清空默认内容 

> 小书匠会生成默认内容，我们需要进行清空操作，ctrl+a全选，同时用删除键一键删除所有内容。

![小书匠新建文档后的默认内容](https://cos.files.maozhishi.com/public/attachments/lfx/1665494675497.png)

### 4.3、批量转换图片 

> 如何一键把文档中所有的图片从转移转移到自己的图床中？我们以下文这篇文章为例

```plain
https://www.yuque.com/ab8gg6/cix7s7/asuswi
```

> 我们在语雀中打开是这个样子

![语雀文章示例页面截图](https://cos.files.maozhishi.com/public/attachments/lfx/1665494675532.png)

> 我们在链接后接上`/html`,变成下文这个链接，然后打开。

```plain
https://www.yuque.com/ab8gg6/cix7s7/asuswi/html
```

> 如下图，这样我们就获取了这篇文章的纯html版本

![语雀文章HTML版本页面截图](https://cos.files.maozhishi.com/public/attachments/lfx/1665494675499.png)

> 在此处，我们贴出html版本的代码

```html
<h1>1.2、开启通知</h1>
<div class="lake-content" typography="classic">
  <h2 id="ItYWt"><span class="ne-text">一、浏览器通知</span></h2>
  <div class="ne-quote">
    <p id="uee37fe04" class="ne-p">
      <span class="ne-text">很多小伙伴希望及时收到</span
      ><span class="ne-text" style="text-decoration: underline">新邮件</span
      ><span class="ne-text">或</span
      ><span class="ne-text" style="text-decoration: underline">新追踪</span
      ><span class="ne-text"
        >的提醒，那么大家打开通知即可（chrome或者edge浏览器）</span
      >
    </p>
  </div>
  <p id="ud5b0c29f" class="ne-p"><br /></p>
  <h3 id="PuWg4"><span class="ne-text">1.1、Edge浏览器-Windows系统</span></h3>
  <div class="ne-quote">
    <p id="ubde4508c" class="ne-p">
      <span class="ne-text"
        >打开来发信后，点击域名左边图标，弹出窗口处点击【允许】</span
      >
    </p>
  </div>
  <p id="ue16ddd3d" class="ne-p">
    <img
      src="https://cdn.nlark.com/yuque/0/2022/png/32542901/1663928234986-12dc158f-da3d-4028-8093-92bbf6e6178c.png"
      width="576.4151254554132"
      id="uac9aecdf"
      class="ne-image"
    />
  </p>
  <p id="u1690ef08" class="ne-p"><br /></p>
  <h3 id="QAbdR"><span class="ne-text">1.2、Edge浏览器-OSX系统</span></h3>
  <p id="u1eedb5c0" class="ne-p"><span class="ne-text"></span></p>
  <div class="ne-quote">
    <p id="u36482ba7" class="ne-p">
      <span class="ne-text"
        >mac系统edge浏览器，参照下图“允许此网站发送通知”</span
      >
    </p>
  </div>
  <p id="u7dd43500" class="ne-p">
    <img
      src="https://cdn.nlark.com/yuque/0/2021/png/209822/1629109557874-62b1d832-b491-4df3-bed8-3756415d3b15.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_24%2Ctext_bGFpZmF4aW4uY29t%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10"
      width="848"
      id="u02ce1621"
      class="ne-image"
    />
  </p>
  <h3 id="avvmT"><span class="ne-text">1.3、Safri浏览器-OSX系统</span></h3>
  <p id="u3ef975aa" class="ne-p"><br /></p>
  <div class="ne-quote">
    <p id="u9a565ad6" class="ne-p">
      <span class="ne-text">mac系统safri浏览器，参照下图，点击允许即可</span>
    </p>
  </div>
  <p id="uf7458a1a" class="ne-p">
    <img
      src="https://cdn.nlark.com/yuque/0/2022/jpeg/32542901/1663929478949-9f538987-3bd4-4262-80bd-45ad63945d1d.jpeg"
      width="707.5472080058264"
      id="ucf150d72"
      class="ne-image"
    />
  </p>
  <p id="u10f24b2c" class="ne-p"><br /></p>
  <h2 id="pBdhA"><span class="ne-text">二、新消息通知</span></h2>
  <p id="u7525c9eb" class="ne-p"><br /></p>
  <h3 id="Mr61n"><span class="ne-text">2.1、新邮件-Windows系统</span></h3>
  <div class="ne-quote">
    <p id="uf5b8967b" class="ne-p">
      <span class="ne-text">Windows系统，新邮件通知</span>
    </p>
  </div>
  <p id="uf40a6320" class="ne-p">
    <img
      src="https://cdn.nlark.com/yuque/0/2022/jpeg/32542901/1663929491073-34228a53-4504-4d50-a1e9-9400c7fe6c51.jpeg"
      width="434.90568385424797"
      id="u5c048aaa"
      class="ne-image"
    />
  </p>
  <p id="u86fefa6c" class="ne-p"><br /></p>
  <h3 id="L0xmc"><span class="ne-text">2.2、新阅读-Windows系统</span></h3>
  <div class="ne-quote">
    <p id="u5886be4a" class="ne-p">
      <span class="ne-text">Windows系统，新阅读通知</span>
    </p>
  </div>
  <p id="u44c836b8" class="ne-p">
    <img
      src="https://cdn.nlark.com/yuque/0/2022/jpeg/32542901/1663929495067-22129ed0-a5a9-4e98-a2cd-9b87ccd0cb74.jpeg"
      width="379.24530349112297"
      id="u0119a8f9"
      class="ne-image"
    />
  </p>
  <p id="ud1ac9f14" class="ne-p"><br /></p>
  <h3 id="e9aXm"><span class="ne-text">2.3、通知汇总-Windows系统</span></h3>
  <div class="ne-quote">
    <p id="u27590583" class="ne-p">
      <span class="ne-text">Windows系统，新消息通知</span>
    </p>
  </div>
  <p id="ue80fd9ae" class="ne-p">
    <img
      src="https://cdn.nlark.com/yuque/0/2022/jpeg/32542901/1663929498931-b8acbe4d-a402-4e28-a104-cb9c920557b6.jpeg"
      width="325.47171568268016"
      id="u7ca10e02"
      class="ne-image"
    />
  </p>
  <p id="ud65b988e" class="ne-p"><br /></p>
  <h3 id="TYM2P"><span class="ne-text">2.4、新邮件-OSX系统</span></h3>
  <div class="ne-quote">
    <p id="u7476731e" class="ne-p">
      <span class="ne-text">Mac系统，新邮件通知</span>
    </p>
  </div>
  <p id="u0ab05c1e" class="ne-p">
    <img
      src="https://cdn.nlark.com/yuque/0/2022/jpeg/32542901/1663929506098-b9ea4f27-1365-444f-9862-1268074d4abe.jpeg"
      width="741.5094739901061"
      id="u31f95ba4"
      class="ne-image"
    />
  </p>
  <p id="u50d48e32" class="ne-p"><span class="ne-text"></span></p>
  <p id="u0501982f" class="ne-p"><br /></p>
  <h2 id="mHYm6"><span class="ne-text">三、通知白名单（邮件）</span></h2>
  <div class="ne-quote">
    <p id="u7813687d" class="ne-p">
      <span class="ne-text"
        >来发信收到客户询盘，会通过邮件进行通知，通知邮箱一般为：</span
      ><strong><span class="ne-text">***@laifa.xin</span></strong>
    </p>
    <p id="ue5feab58" class="ne-p">
      <span class="ne-text"
        >为确保大家能收到邮件，请把我们的邮箱添加到你邮箱的白名单。</span
      >
    </p>
    <p id="u2a0ed52b" class="ne-p">
      <span class="ne-text"
        >本文以腾讯企业邮箱和阿里企业邮箱为例，其他邮箱可参照设置。</span
      >
    </p>
  </div>
  <p id="uc81e326d" class="ne-p"><span class="ne-text"></span></p>
  <h3 id="Wh7QG"><span class="ne-text">3.1、腾讯企业邮箱</span></h3>
  <p id="u94820fe4" class="ne-p">
    <img
      src="https://cdn.nlark.com/yuque/0/2021/png/209822/1621217477808-c46811ad-f6e7-451d-ac90-aceaf1b71daa.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_22%2Ctext_bGFpZmF4aW4uY29t%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10"
      width="763"
      id="u86bb802b"
      class="ne-image"
    />
  </p>
  <p id="u23c2e15a" class="ne-p"><span class="ne-text">添加域名</span></p>
  <p id="u3ab90d8c" class="ne-p">
    <img
      src="https://cdn.nlark.com/yuque/0/2021/png/209822/1621217536224-c8c17a91-8a06-4aff-830b-7f0a401b3a04.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_17%2Ctext_bGFpZmF4aW4uY29t%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10"
      width="596"
      id="ub9e499f3"
      class="ne-image"
    />
  </p>
  <p id="u0cbb57c1" class="ne-p"><span class="ne-text">添加成功</span></p>
  <p id="u04ede83c" class="ne-p">
    <img
      src="https://cdn.nlark.com/yuque/0/2021/png/209822/1621217556719-b25a7339-206d-4c8b-87db-0db017b21c91.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_18%2Ctext_bGFpZmF4aW4uY29t%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10"
      width="648"
      id="ueb1e0ac9"
      class="ne-image"
    />
  </p>
  <p id="uce5c5370" class="ne-p"><br /></p>
  <h3 id="neicU"><span class="ne-text">3.2、阿里企业邮箱</span></h3>
  <p id="u54f1661b" class="ne-p">
    <span class="ne-text"
      >进入企业邮箱的网页上，点击“邮箱设置”，进入“反垃圾 &gt;&gt; 白名单”</span
    >
  </p>
  <p id="u05b1425c" class="ne-p">
    <img
      src="https://cdn.nlark.com/yuque/0/2021/png/209822/1621217662257-852a9061-20c6-42ed-a651-a2bfbdf26e3d.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_25%2Ctext_bGFpZmF4aW4uY29t%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10"
      width="878"
      id="u8c1f2932"
      class="ne-image"
    />
  </p>
  <p id="u1ff67fb8" class="ne-p">
    <span class="ne-text">输入域名，并点击“添加白名单”，注意，此处要带@</span>
  </p>
  <p id="uf4f0a738" class="ne-p">
    <img
      src="https://cdn.nlark.com/yuque/0/2021/png/209822/1621217809158-84d2e64a-693b-4f2e-baa9-9f7514a6ccf5.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_16%2Ctext_bGFpZmF4aW4uY29t%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10"
      width="546"
      id="u8c8fb102"
      class="ne-image"
    />
  </p>
  <p id="u32b4370b" class="ne-p">
    <span class="ne-text">为了安全起见，大家可以把以下几个都添加进白名单</span>
  </p>
  <pre data-language="plain" id="sPseu" class="ne-codeblock language-plain">
*@laifa.xin
@laifa.xin
reg@laifa.xin
notice@laifa.xin</pre
  >
  <p id="udf1f38f1" class="ne-p"><span class="ne-text">最终如下：</span></p>
  <p id="u82cb56a9" class="ne-p">
    <img
      src="https://cdn.nlark.com/yuque/0/2021/png/209822/1621217916093-f925fc77-6026-4a47-8b8d-c8ee716827e3.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_15%2Ctext_bGFpZmF4aW4uY29t%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10"
      width="520"
      id="u0d567b5e"
      class="ne-image"
    />
  </p>
  <p id="u12ef7d76" class="ne-p"><br /></p>
  <p id="u26ef9e3c" class="ne-p"><span class="ne-text"></span></p>
  <p id="u05753c45" class="ne-p"><span class="ne-text"></span></p>
</div>
```

> 我们把这个代码放到wordpress后台（注意：要在编辑器是文本的模式下进行粘贴）

![WordPress后台编辑器文本模式粘贴HTML代码](https://cos.files.maozhishi.com/public/attachments/lfx/1665494675500.png)

> 然后我们点击右上方的“文本”旁的 “可视化”，我们发现图片无法正常显示。（**==这是未转换图床的情况下的测试==**）

![WordPress后台编辑器可视化模式下图片无法显示（未转换图床）](https://cos.files.maozhishi.com/public/attachments/lfx/1665494675501.png)

> 这时候我们就需要小书匠进行图床转换，我们复制语雀的代码 直接粘贴到小书匠，我们可以看到如下图

![将语雀HTML代码粘贴到小书匠编辑器](https://cos.files.maozhishi.com/public/attachments/lfx/1665494675512.png)

> 这时，我们需要打开编辑工具栏，我们点击顶部“另存为”按钮旁的“切换页签模式”，这样就出现了我们想要的编辑工具

![小书匠顶部“切换页签模式”按钮](https://cos.files.maozhishi.com/public/attachments/lfx/1665494675783.png)

> 找到“**图床转移**”按钮，点击弹出功能窗口

![小书匠编辑器工具栏中的“图床转移”按钮](https://cos.files.maozhishi.com/public/attachments/lfx/1665494675785.png)

> 选择要转换图床地址的图片，同时我们要选择要存储的目标，然后点击转换

![小书匠“图床转移”对话框，选择图片和目标图床（腾讯云COS）并点击转换](https://cos.files.maozhishi.com/public/attachments/lfx/1665494675784.png)

> 查看转换后的新地址，并点击确定完成图床替换工作

![小书匠“图床转移”结果预览，显示新图片地址并点击确定](https://cos.files.maozhishi.com/public/attachments/lfx/1665494675786.png)

> 我们可以看到正文的图片链接域名已经换成你自己的了

![小书匠编辑器中图片链接已成功替换为自定义域名](https://cos.files.maozhishi.com/public/attachments/lfx/1665494675843.png)

> 这时候，我们就可以把已经替换图片链接后的新html代码粘贴到wordpress后台的编辑器中(==**图片已经转移到你自己的图床中**==)

![将经过小书匠图床转换后的HTML代码粘贴回WordPress编辑器](https://cos.files.maozhishi.com/public/attachments/lfx/1665494675787.png)

> 我们进入可视化进行预览，这时，图片已经可以正常显示

![WordPress后台编辑器可视化模式下图片成功显示（已转换图床）](https://cos.files.maozhishi.com/public/attachments/lfx/1665494675838.png)

到此，我们借用小书匠进行批量图床转移的工作已经完成，可能讲起来比较复杂，但是实际操作会很简单。
==**注意：转换图床后的代码要注意保存到语雀中，便于后续的再次利用。**==
