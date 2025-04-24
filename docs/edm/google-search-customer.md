---
title: 谷歌搜索客户常用语法
description: 本文介绍了6个常用的谷歌搜索基础语法（intitle, inurl, intext, "", AND, site），并通过实例（如搜索Google Workspace相关页面、使用site:linkedin.com限定搜索）演示了如何组合运用这些语法来更精准地查找信息或潜在客户。
---

permalink: /google-search-customer

> 谷歌语法千千万，常用的也就本文的6个，掌握本文这6个语法，足够你开发全球市场使用。

![谷歌搜索框示意图](https://cos.files.maozhishi.com/public/attachments/lfx/1665509408998.png)

## 一、基础语法 {#basic-syntax}

### 1.1、intitle：网页标题包含 {#intitle-page-title-contains}

我们以Google Workspace为例进行说明：[https://workspace.google.com/](https://workspace.google.com/)
![Google Workspace官网首页截图](https://cos.files.maozhishi.com/public/attachments/lfx/1665509408999.png)
我们可以看到这个页面的官网title为：`Google Workspace | Business Apps & Collaboration Tools`
那么在谷歌中，我们用以下这个公式进行搜索就能精准定位到。

```xml
intitle:"Google Workspace"
```

![谷歌搜索 intitle:"Google Workspace" 的结果页面](https://cos.files.maozhishi.com/public/attachments/lfx/1665509409122.png)
同样，我们也可以提取title中“|”后的部分，结合语法进行搜索测试

```xml
intitle:"Business Apps & Collaboration Tools"
```

![谷歌搜索 intitle:"Business Apps & Collaboration Tools" 的结果页面](https://cos.files.maozhishi.com/public/attachments/lfx/1665509409131.png)

### 1.2、inurl：网页链接包含 {#inurl-page-url-contains}

我们以Google workspace的价格页面为例进行说明，价格页面： [https://workspace.google.com/pricing.html](https://workspace.google.com/pricing.html)
![Google Workspace价格页面截图](https://cos.files.maozhishi.com/public/attachments/lfx/1665509409123.png)
我们提取两个信息：网页title和网页网址（url）：
网页title：`Google Workspace (formerly G Suite): Pricing plans`
网址（url）：[`https://workspace.google.com/pricing.html`](https://workspace.google.com/pricing.html)
网页title中包含：`Workspace` 同时 网页（url）中包含：`pricing` ，我们以此可以写出以下公式：

```xml
intitle:Workspace AND inurl:pricing
```

> 通过这个公式，我们精准定位到Google Workspace的价格（`pricing`）页面，我们来看下谷歌搜索的实际结果。

![谷歌搜索 intitle:Workspace AND inurl:pricing 的结果页面](https://cos.files.maozhishi.com/public/attachments/lfx/1665509409128.png)

### 1.3、intext：网页页面包含 {#intext-page-content-contains}

我们同样以Google workspace的价格页面为例进，页面： [https://workspace.google.com/pricing.html](https://workspace.google.com/pricing.html)
![Google Workspace价格页面内容截图，包含文字"Choose your edition"](https://cos.files.maozhishi.com/public/attachments/lfx/1665509409130.png)
我们提取两个信息：网页title（intitle）和页面内容（intext）：

- 网页title（intitle）：`Google Workspace (formerly G Suite): Pricing plans`
- 页面内容（intext）：`Choose your edition. Try it free of charge for 14 days.`

网页title（intitle）中包含：`Workspace` 同时页面内容（intext）中包含：`Choose your edition` ，我们以此总结出以下公式：

```xml
intitle:Workspace AND intext:"Choose your edition"
```

通过这个公式，我们非常精准定位到Google Workspace的价格（`pricing`）页面。关于`"Choose your edition"`中双引号引用，我们在下一个语法就讲。
![谷歌搜索 intitle:Workspace AND intext:"Choose your edition" 的结果页面](https://cos.files.maozhishi.com/public/attachments/lfx/1665509409129.png)

### 1.4、""：严格匹配词组 {#double-quotes-exact-phrase-match}

`""` 英文的双引号，严格匹配一组词 ，以为`"Choose your edition"`为例

- **加了双引号**：只匹配`Choose your edition`
- **~~不加双引号~~**：不仅匹配`Choose your edition`，也匹配`your Choose edition`、`Choose edition your`、`your edition Choose`、`edition Choose your`、`edition your Choose`等组合，也就是说，只要`标题`/`网址`/`正文`3个元素中任意出现`your`/ `edition` /`Choose`这3个词，这个页面就会被关联，搜索结果被放大无数倍，导致搜索出来的结果非常不精准。

**注意：如果是1个单词，加与不加双引号是无差的，只有两个及以上单词，有无双引号的结果才会天差地别！**

> 我们以为led lighting为例，不加双引号 搜索结果是`39300万`条

![谷歌搜索 led lighting (无引号) 的结果数量巨大](https://cos.files.maozhishi.com/public/attachments/lfx/1665509409124.png)

> 加了双引号后，用`"led lighting"`搜索的结果为`3290万`条，**两者结果相差了接近10倍**。

![谷歌搜索 "led lighting" (有引号) 的结果数量显著减少](https://cos.files.maozhishi.com/public/attachments/lfx/1665509409125.png)

### 1.5、AND：同时符合多条件 {#and-multiple-conditions}

`AND`用中文表达就是`且`的意思，

- `A AND B`：搜索出来的结果既要符合有A又要有B。
- `高挑 AND 身材 AND 女生`：搜索出来的结果中，必须要同时出现`高挑`/`身材`/`女生`3个关键词，只要`标题`/`网址`/`正文`中任意包含上述3个关键词即可。

### 1.6、site：仅搜某网站 {#site-search-specific-site}

我们以领英（linkedin.com）为例，我们只想通过谷歌搜索领英的内容，那么语法是

```xml
site:linkedin.com
```

我们想搜索领英上“led lighting”相关的内容

```xml
site:linkedin.com "led lighting"
```

实际搜索到约`51万条`相关信息
![谷歌搜索 site:linkedin.com "led lighting" 的结果页面](https://cos.files.maozhishi.com/public/attachments/lfx/1665509409132.png)
我们再更近一步，我们想搜索领英上标题中带“led lighting”相关的页面，这里我们用到intitle语法

```xml
site:linkedin.com intitle:"led lighting"
```

这里我们仅仅搜索到`1.23万条`记录
![谷歌搜索 site:linkedin.com intitle:"led lighting" 的结果页面](https://cos.files.maozhishi.com/public/attachments/lfx/1665509409126.png)
在这基础上再进一步，我们想搜索领英上标题中带“led lighting”且页面内容有“shenzhen”字样相关的页面，这里我们用到intitle语法，我们这里用到AND以及intext语法

```xml
site:linkedin.com intitle:"led lighting" AND intext:shenzhen
```

这个搜索结果有`3080条`，说明深圳led lighting相关的企业在全球占据了相当大的比重。
![谷歌搜索 site:linkedin.com intitle:"led lighting" AND intext:shenzhen 的结果页面](https://cos.files.maozhishi.com/public/attachments/lfx/1665509409127.png)

## 二、综合应用 {#comprehensive-application}
