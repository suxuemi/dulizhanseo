---
title: 建站工具推荐-三分钟免费搞定网站加速
link: https://www.dulizhanseo.com/wordpress-memcache
description: 本教程指导用户如何在AppNode后台安装和配置Memcache及其PHP扩展（pecl-memcached），并通过上传特定文件到WordPress网站目录来启用对象缓存，从而显著提升网站加载速度。教程包含详细步骤、截图和常见问题排查方法。
---

> **很多人觉得网站打开速度慢，第一次打开需要好几秒才出现页面，并且google测速不理想，我们可以通过安装缓存插件让你的网站打开更快。**

**==注意：开始之前一定要做好备份！！！以便出问题随时恢复！==**

进入appnode后台，点击网址，找到备份，点击：立即备份
![AppNode后台网站备份界面，点击“立即备份”](https://cos.files.maozhishi.com/小书匠/1702359632343.png)

### 一、安装与开启Memcache {#section-1-install-enable-memcache}

打开appnode后台，左侧软件管家，所有软件里搜索Memcache，点击一键安装

![AppNode软件管家搜索Memcache界面](https://cos.files.maozhishi.com/小书匠/1702359632344.png)

选择上面的appnode提供方，点击立即安装

![AppNode选择Memcache安装来源并点击“立即安装”](https://cos.files.maozhishi.com/小书匠/1702359632345.png)

当提示更新成功，操作完成。成功安装memcache服务器！即可关闭右上方窗口

![AppNode Memcache安装成功提示](https://cos.files.maozhishi.com/小书匠/1702359632346.png)

在下面界面点击右侧“打开”

![AppNode已安装软件列表，点击Memcache右侧的“打开”](https://cos.files.maozhishi.com/小书匠/1702359632347.png)

勾选守护自启，并且启动

![AppNode Memcache设置界面，勾选“守护自启”并点击“启动”](https://cos.files.maozhishi.com/小书匠/1702359632348.png)

无需点击保存

![AppNode Memcache启动成功状态](https://cos.files.maozhishi.com/小书匠/1702359632349.png)

### 二、 PHP扩展pecl-memcached {#section-2-php-extension-pecl-memcached}

返回网站管理--组件管理--设置PHP

![AppNode网站管理 -> 组件管理 -> PHP设置入口](https://cos.files.maozhishi.com/小书匠/1702359632350.png)

进入设置，左侧的安装和卸载 点击扩展管理

![AppNode PHP设置界面，点击“扩展管理”](https://cos.files.maozhishi.com/小书匠/1702359632351.png)

在搜索框里搜“==pecl-memcached==”要带有d结尾的，切记。

![AppNode PHP扩展管理搜索“pecl-memcached”](https://cos.files.maozhishi.com/小书匠/1702359632352.png)

点击：立即安装 自动安装，直至提示更新成功，操作完成！即可关闭窗口

![AppNode安装pecl-memcached扩展成功提示](https://cos.files.maozhishi.com/小书匠/1702359632353.png)

### 三、安装插件 {#section-3-install-plugin}

返回网站管理，打开文件

==安装包免费获取==，请联系文章末尾的客服。

![AppNode网站管理 -> 文件管理器入口](https://cos.files.maozhishi.com/小书匠/1702359632354.png)

进入 `www` > `wp-content` > `上传` 文件选择本地文件
![AppNode文件管理器导航至wp-content目录并点击上传](https://cos.files.maozhishi.com/小书匠/1702359632355.png)

![AppNode文件上传界面](https://cos.files.maozhishi.com/小书匠/1702359632356.png)

选择下列两个文件 (`advanced-cache.php` 和 `object-cache.php`)。

![本地文件选择对话框，选中两个PHP文件](https://cos.files.maozhishi.com/小书匠/1702359632357.png)

点击：开始上传

![AppNode文件上传界面点击“开始上传”](https://cos.files.maozhishi.com/小书匠/1702359632358.png)

提示已上传，关闭窗口。

再选择进入 ==plugins== 文件夹，上传文件 (`litespeed-cache.zip`)
![AppNode文件管理器导航至plugins目录](https://cos.files.maozhishi.com/小书匠/1702359632359.png)
![AppNode文件管理器上传litespeed-cache.zip文件](https://cos.files.maozhishi.com/小书匠/1702359632360.png)

返回 ==www== 文件夹，点击打开 ==wp-config.php==

![AppNode文件管理器导航至www目录并选中wp-config.php](https://cos.files.maozhishi.com/小书匠/1702359632363.png)

复制下面代码

```plain
define('WP_CACHE', true);
```

点击编辑，添加到第79行（或其他合适位置，通常在`/* That's all, stop editing! Happy publishing. */`之前），再保存
![编辑wp-config.php文件，添加WP_CACHE定义并保存](https://cos.files.maozhishi.com/小书匠/1702359632364.png)

### 四、重启生效 {#section-4-restart-services}

再次返回，网站管理--组件管理--重启php和nginx

![AppNode网站管理 -> 组件管理，重启PHP和Nginx服务](https://cos.files.maozhishi.com/小书匠/1702359632410.png)

注：wordpress网站后台的无需启用，亦可直接删除。
强化扩展里有两个插件 (LiteSpeed Cache 和 WP Optimize)
![WordPress后台插件列表截图，显示LiteSpeed Cache和WP Optimize](https://cos.files.maozhishi.com/小书匠/1702359632419.png)

### 五、常见问题 {#section-5-common-issues}

此站点遇到了致命错误。

![WordPress致命错误提示页面](https://cos.files.maozhishi.com/小书匠/1702359632420.png)

1.  检查Memcache 服务有没开启
2.  检查pecl-memcached 有没安装
3.  检查 PHP 有没重启生效。
    ![检查AppNode Memcache服务状态](https://cos.files.maozhishi.com/小书匠/1702359632421.png)
    ![检查AppNode PHP扩展pecl-memcached是否安装](https://cos.files.maozhishi.com/小书匠/1702359632422.png)

---

<p style="text-align: center;">加入社群一起互助建站，分享你的踩坑经历。</p>
<p style="text-align: center;"><img src="https://cos.files.maozhishi.com/public/attachments/lfx/1670844224159.png" width="198" alt="加入社群交流二维码" /></p>
<p style="text-align: center;"><strong>更多免费建站技巧</strong></p>
<p style="text-align: center;"><strong>扫码联系夏日么么茶</strong></p>
