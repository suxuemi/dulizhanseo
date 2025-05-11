---
title: blocksy模版导入显示：can't import starter site
link: https://www.dulizhanseo.com/blocksy-cant-import-starter-site
description: 本文解决了在导入Blocksy模板时出现“Can't Import Starter Site”错误的问题。通过调整Appnode后台PHP设置（增大上传文件和POST提交大小限制、延长PHP执行时间）以及修改PHP全局源文件（增加执行时间），并禁用除Blocksy Companion外的所有插件，最终成功导入模板。
---

> 当我们有时导入blocksy模板时，偶尔会遇到如下提醒：Can't Import Starter Site 无法导入入门网站，点击按钮更多信息，他会给你更多的建议。
> 具体怎么操作往下看。
> ![Blocksy导入模板时报错“Can't Import Starter Site”](https://cos.files.maozhishi.com/小书匠/1701943822425.png)

## 一、进入设置 

打开你的appnode后台，如下图。
![登录AppNode控制面板后台](https://cos.files.maozhishi.com/小书匠/1701943822430.png)

### A、修改大小限制 

找到具体的网站，进入右侧的设置，点击PHP。
把“上传文件大小”和“post 提交数据大小限制”，都改成 30mb
![AppNode网站PHP设置 - 修改上传文件和POST大小限制为30MB](https://cos.files.maozhishi.com/小书匠/1701943822431.png)

### B、修改执行时间 

在PHP进程中，把“php程序最长执行时间限制”从 60 秒修改为 600 秒
![AppNode网站PHP设置 - 修改PHP程序最长执行时间为600秒](https://cos.files.maozhishi.com/小书匠/1701943822432.png)

### C、 重载服务生效 

保存配置之后，重载服务。
![AppNode服务管理 - 重载服务使配置生效](https://cos.files.maozhishi.com/小书匠/1701943822433.png)

## 二、修改 PHP 全局源文 

A.返回右侧的网站管理，找到组件管理，点击设置
参照下图，进入 php 设置
![AppNode后台 - 进入组件管理找到PHP组件并点击设置](https://cos.files.maozhishi.com/小书匠/1701943822434.png)
B.进入全局源文，点击编辑
![AppNode PHP组件设置 - 点击“全局源文”进行编辑](https://cos.files.maozhishi.com/小书匠/1701943822435.png)
C.找到 398 行，把 60 改成 600 即可。
![编辑PHP全局源文件(php.ini)，将max_execution_time从60改为600](https://cos.files.maozhishi.com/小书匠/1701943822436.png)
D.保存后，php 文件更新
![保存修改后的PHP全局源文件](https://cos.files.maozhishi.com/小书匠/1701943822437.png)

## 三、重新导入网站模板 

A、返回wordpress网站后台，禁用后台所有已安装插件【Blocksy Companion (Premium)除外】![WordPress后台插件列表 - 禁用除Blocksy Companion外的所有插件](https://cos.files.maozhishi.com/小书匠/1701943822438.png)
B、再次导入即可。
![重新尝试导入Blocksy模板，显示导入成功](https://cos.files.maozhishi.com/小书匠/1701943822439.png)

---

<p style="text-align: center;"><img src="https://cos.files.maozhishi.com/public/attachments/lfx/1669111684413.png" width="198" alt="联系夏日么么茶的二维码" /></p>
<p style="text-align: center;"><strong>更多免费建站技巧</strong></p>
<p style="text-align: center;"><strong>扫码联系夏日么么茶</strong></p>
