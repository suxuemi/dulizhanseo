---
title: 小白建站最佳搭档（一）：文档编辑与管理神器-语雀
link: https://www.dulizhanseo.com/best-partner-for-websites-1-document-editing-management-artifact-yuque
description: 日常办公学习经常遇到：产品或文章多，让文档管理非常困难，需要编辑文档上传多个图片时，能否批量上传？写文档适，能否实现截图粘贴上传云端？这样就避免保存本地，能否让网站的图床显示为自己的域名？能否让客户访问我的图片也是嗖嗖的？
---

## 我们建站经常遇到以下几个问题： 

- 产品或文章多，本地文档太多，**能否让文档管理更有条理？**
- 编辑文档上传多个图片时，需要挨个选择上传，**能否批量上传？**
- 截图要先保存到电脑，然后才能插入，**能否粘贴上传？**
- 能否把图片存到自己可控的地方？**用自己的存储空间和域名**
- 最重要的是：**能否白P存储和加速？**

> 接下来，我们介绍以下工具：

- 语雀：文档编辑管理工具，支持图片批量上传工具
- 小书匠：图片批量转存工具，同样支持粘贴上传图片
- 腾讯云COS：图片云端存储空间
- cloudflare：域名解析与全球加速，可加速图片与文件访问：

> 首先，我们来看下语雀。官网：[https://www.yuque.com/](https://www.yuque.com/)
> 语雀有以下特色：
>
> - 编辑格式丰富
> - 支持图片粘贴上传
> - 支持图片批量上传
> - 支持文档结构管理
> - 可以多人协同编辑
> - 可以转换html代码，兼容wordpress发布；
>
> 建议大家使用桌面端：[https://www.yuque.com/install/desktop](https://www.yuque.com/install/desktop)

## 1.1、知识库 

作为外贸人，我们每天要面对各种文档，以建站为例，我们要不断更新各种文档，如果用word在本地进行管理，那么会产生很多文档，大量的文档也会当你管理更加困难，这里我们以询盘网为例，我们创建一个简单的文档管理知识库。
询盘网预计规划以下模块：

- 网站营销（website marketing）
  - 极速建站（website）
  - 搜索优化（seo）
  - 搜索广告（sem）
- 邮件营销（email marketing）
- 社媒营销（social media）
- 工具分享（tool sharing）

### 新建知识库 

进入“我的知识库”:[https://www.yuque.com/dashboard/my_books](https://www.yuque.com/dashboard/my_books) (未注册请先注册)
![语雀“我的知识库”页面，点击新建知识库按钮](https://cos.files.maozhishi.com/public/attachments/lfx/1665480892841.png)

### 设置知识库 

输入知识库名称，设置仅自己可见即可，如果你想所有人都可以看到，那么你可以选择其他权限。
![新建语雀知识库弹窗，输入名称并设置权限](https://cos.files.maozhishi.com/public/attachments/lfx/1665480892834.png)

## 1.2、目录设置 

新建的知识库是一个空白的，这时候我们可以点击右上角的“目录管理”，进行目录相关的设置
![空白语雀知识库，点击右上角“目录管理”](https://cos.files.maozhishi.com/public/attachments/lfx/1665480892838.png)
参照我们预定好的结构：

- 网站营销（website marketing）
  - 极速建站（website）
  - 搜索优化（seo）
  - 搜索广告（sem）
- 邮件营销（email marketing）
- 社媒营销（social media）
- 工具分享（tool sharing）
  - Chrome/Edge
  - Wordpress
  - Windows
  - Android
  - iOS

首先我们点击右上角新建分组，创建一个名为`网站营销（website marketing）`的分组
![语雀目录管理界面，点击“新建分组”](https://cos.files.maozhishi.com/public/attachments/lfx/1665480892842.png)
输入分组名`网站营销（website marketing）`，并回车确定
![输入分组名称并确认](https://cos.files.maozhishi.com/public/attachments/lfx/1665480892836.png)
参照创建了以下4个一级分组，可以拖动进行排序
![创建的四个一级分组目录](https://cos.files.maozhishi.com/public/attachments/lfx/1665480892837.png)
接下来，我们创建二级分组
![创建二级分组示例](https://cos.files.maozhishi.com/public/attachments/lfx/1665480892839.png)
最终我们创建了如下的目录
![最终创建完成的多级目录结构](https://cos.files.maozhishi.com/public/attachments/lfx/1665480892840.png)
我们返回知识库界面看到是这样的
![返回知识库界面，显示已创建的目录结构](https://cos.files.maozhishi.com/public/attachments/lfx/1665480892851.png)

## 1.3、权限分享 

我们点击右上角"新建"旁的三个点的图标，在下拉中我们选择“权限”
![语雀知识库右上角菜单，选择“权限”设置](https://cos.files.maozhishi.com/public/attachments/lfx/1665480892843.png)
点击右上角的“添加”，我们可以相关的权限设置，把链接发给同事，同事即可加入进行协作。
![语雀知识库权限设置，添加成员进行协作](https://cos.files.maozhishi.com/public/attachments/lfx/1665480892844.png)

## 1.4、文档编辑 

如果我们需要在“工具分享”下的“Windows”目录中，点击“+”，选择“新建文档”
![在指定目录下点击“+”号，选择“新建文档”](https://cos.files.maozhishi.com/public/attachments/lfx/1665480892854.png)
默认编辑界面是这样，我们可以看到语雀编辑栏有很多工具。
![语雀文档编辑器界面及工具栏](https://cos.files.maozhishi.com/public/attachments/lfx/1665480892852.png)

## 1.5、上传图片 

我们重点来讲下图片是如何上传到语雀，你可以在工具栏选择本地图片上传，也可以直接复制本地图片粘贴上传。

### 选图上传+多图上传 

我们点击编辑界面左上方的加号（+），在下拉中选择图片，在弹出的文件选择器中，我们可以选择要上传的图片，注意：摁住ctrl是可以选择多张图片的（如果是语雀客户端编辑，是可以直接选择多张图片，无需摁住ctrl）
![语雀编辑器插入菜单，选择“图片”进行上传](https://cos.files.maozhishi.com/public/attachments/lfx/1665480892845.png)
这是上传后的效果
![语雀编辑器中已上传的图片](https://cos.files.maozhishi.com/public/attachments/lfx/1665480892853.png)

### 粘贴上传 

我们在实际编辑过程中，我们经常要截图，如果能截图后，在编辑时直接粘贴上传，那么就会非常方便。我们可以通过ctrl+v进行粘贴，也可以通过
![语雀编辑器支持直接粘贴图片上传](https://cos.files.maozhishi.com/public/attachments/lfx/1665480892846.png)
粘贴后，我们就可以看到如下图的效果。
![粘贴上传图片后的效果](https://cos.files.maozhishi.com/public/attachments/lfx/1665480892848.png)

## 1.6、文章大纲 

> 我们在编辑时，可以在右侧预览到文档的大纲，这样可以让我们梳理文档时，更有条理性。

![语雀编辑器右侧显示的文档大纲](https://cos.files.maozhishi.com/public/attachments/lfx/1665480892847.png)

> 你正在看的这篇文章就是在语雀中编辑的，给大家截图看下，大家看是不是很直观。

![本文在语雀编辑器中的编辑界面及大纲示例](https://cos.files.maozhishi.com/public/attachments/lfx/1665480892850.png)

## 1.7、查看源码（html） 

> wordpress编辑文章可以以html的格式，同样，语雀也是可以生成html代码的，编写好的语雀文章以html代码的形式粘贴到wordpress即可（注意：语雀开启了图片防盗链，如果你文章中有图片，还需要进行图片转移操作，请查看下一章节）

### 获取链接 

> 此处要注意，文章一定要先发布(点击右上角的更新或者发布按钮)

![语雀编辑器右上角的“发布”或“更新”按钮](https://cos.files.maozhishi.com/public/attachments/lfx/1665480892849.png)

> 不点击发布或更新，有可能会出现这样一个提示

![未发布文档无法获取公开链接的提示](https://cos.files.maozhishi.com/public/attachments/lfx/1665480893062.png)

> 我们可以获取到这篇文章的链接如下图

```xml
https://www.yuque.com/qiudiss/ai9u05/tnmuw0
```

> 如果你用的语雀客户端，可以右击文章名，复制链接，然后粘贴到浏览器

![语雀客户端右键菜单复制文档链接](https://cos.files.maozhishi.com/public/attachments/lfx/1665480893063.png)

> 我们去浏览器中打开这个链接，正常打开页面是这样

![在浏览器中打开语雀文档链接的页面](https://cos.files.maozhishi.com/public/attachments/lfx/1665480893098.png)

> 我们在链接尾部添加参数，原本的链接是这样,我们在尾部添加"/html",即可预览html格式

```xml
https://www.yuque.com/qiudiss/ai9u05/tnmuw0
```

> 添加后是这样

```xml
https://www.yuque.com/qiudiss/ai9u05/tnmuw0/html
```

> 我们来预览下格式，这就是文档的html代码形式

![在浏览器中预览语雀文档的HTML源码格式](https://cos.files.maozhishi.com/public/attachments/lfx/1665480893064.png)

### 保存代码（html） 

我们先保存下html代码备用

```xml
<h1>图片与文字编辑演示</h1>
<div class="lake-content" typography="classic">
  <p id="u25f0a192" class="ne-p"><br></p>
  <h2 id="hcjke"><span class="ne-text">这是文字测试</span></h2>
  <p id="ua8243eab" class="ne-p"><span class="ne-text">和你编辑word基本无差</span></p>
  <p id="u812a524c" class="ne-p"><span class="ne-text"></span></p>
  <h2 id="iKNAs"><span class="ne-text">图片上传测试（选择图片）</span></h2>
  <p id="u32e7176b" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2022/jpeg/209822/1665477615834-f43521c7-ab11-4ae9-aed9-b0327af82a70.jpeg" width="362" id="u27637dbb" class="ne-image"><img src="https://cdn.nlark.com/yuque/0/2022/png/209822/1665477615821-1f068219-759e-4f47-9323-915f27b91eee.png" width="330" id="ued2b9533" class="ne-image"></p>
  <p id="u32ee41ec" class="ne-p"><br></p>
  <h2 id="c4ZVA"><span class="ne-text">图片上传测试（粘贴上传）</span></h2>
  <p id="ubfab63e4" class="ne-p"><img src="https://cos.files.maozhishi.com/public/attachments/lfx/1665480892853.png" width="1095" id="wyWfZ" class="ne-image"></p>
</div>
```

### 测试预览 

语雀的图片是不允许站外引用的，所以，如果你直接复制代码带你网站编辑，你会发现图片是无法打开的。

> 我们wordpress后台编辑器文本编辑的模式下，粘贴入文章html代码

![在WordPress后台编辑器（文本模式）粘贴HTML代码](https://cos.files.maozhishi.com/public/attachments/lfx/1665480893065.png)

> 我们点击“可视化”进行预览，然后我们发现图片是打不开的，这是由于语雀开启了防盗链，所以在你的网站是无法引用语雀的图片链接

![WordPress后台编辑器（可视化模式）预览，语雀图片因防盗链无法显示](https://cos.files.maozhishi.com/public/attachments/lfx/1665480893068.png)
这里我们就需要图床批量转移的功能，我们需要利用小书匠和腾讯云cos以及cloudflare去实现，这三者分别起着以下作用：
**腾讯云cos**：存储你的图片
**cloudflare**：域名解析以及全球极速访问
**小书匠**：批量转移语雀上的图片到腾讯云cos
