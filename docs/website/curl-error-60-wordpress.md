---
title: wp网站：cURL error 60报错，wordpress网站无法更新或者删除主题和插件的问题
link: https://www.dulizhanseo.com/curl-error-60-wordpress
description: 本文解决了WordPress中因cURL error 60 (Peer's Certificate issuer is not recognized) 导致的无法更新或删除主题/插件的问题。主要原因是SSL证书验证失败。提供了两种解决方案：临时禁用SSL验证（通过在wp-config.php添加代码）和更安全的修复方法（如更新CA根证书、手动更新cURL证书、检查服务器时间、调试cURL），并以Appnode后台为例演示了临时禁用SSL验证的具体操作步骤。
---

### 一、问题描述 {#issue-description-curl-error-60}

在 WordPress 安装失败时遇到`cURL error 60: Peer's Certificate issuer is not recognized`报错，这通常会导致无法更新或者添加删除主题和插件。这个错误主要是由于 SSL 证书验证问题引起的。这可能是因为缺少或配置错误的证书文件 (CA 根证书)。当 WordPress 尝试通过 cURL 进行网络请求时，无法验证 SSL 证书的合法性，从而产生错误。
![WordPress后台更新或安装时出现cURL error 60报错截图1](https://cos.files.maozhishi.com/小书匠/1733742986407.png)![WordPress后台更新或安装时出现cURL error 60报错截图2](https://cos.files.maozhishi.com/小书匠/1733742986408.png)

---

### 二、解决方案 {#solutions-curl-error-60}

#### A 暂时禁用 SSL 验证（不推荐长期使用） {#temporarily-disable-ssl-verification}

这是一种简单粗暴的方法，基本能解决**99%**的问题。可以临时禁用 SSL 验证（但这可能会引发安全风险）。

1.  在 `wp-config.php` 文件中添加以下代码：

```plain
add_filter('https_ssl_verify', '__return_false');
add_filter('https_local_ssl_verify', '__return_false');
```

2.  **安装完成后，建议删除这些代码。**

#### B 具体操作方法 {#specific-operation-steps}

以appnode控制面板为例.

##### 1.登录控制面板找到网站文件夹 {#login-control-panel-find-folder}

网站管理&gt;文件
![AppNode控制面板 - 网站管理列表，点击“文件”](https://cos.files.maozhishi.com/小书匠/1733742986409.png)

##### 2.找到wp-config.php文件 {#find-wp-config-php-file}

路径：`www > wp-config.php`
![AppNode文件管理器 - 导航到网站根目录www](https://cos.files.maozhishi.com/小书匠/1733742986410.png)
进入www文件夹
![AppNode文件管理器 - 找到wp-config.php文件](https://cos.files.maozhishi.com/小书匠/1733742986411.png)

##### 3.打开wp-config.php文件，添加代码 {#edit-wp-config-add-code}

编辑文件，在底部复制插入以下代码并保存
`add_filter('https_ssl_verify', '__return_false');`
`add_filter('https_local_ssl_verify', '__return_false');`
![编辑wp-config.php文件界面](https://cos.files.maozhishi.com/小书匠/1733742986412.png)
![在wp-config.php文件底部添加禁用SSL验证的代码并保存](https://cos.files.maozhishi.com/小书匠/1733742986417.png)

##### 4.打开wordpress后台，再次更新系统文件 {#update-wordpress-files-again}

![返回WordPress后台，尝试重新更新](https://cos.files.maozhishi.com/小书匠/1733742986425.png)
等待几十秒即可正常更新。
![WordPress更新成功提示](https://cos.files.maozhishi.com/小书匠/1733742986430.png)
正常更新后，删除代码即可，不会再影响后续更新。。。

---

### 三、附录：也可以参考以下几个解决方案 {#appendix-other-solutions}

自行操作研究，就不详解了。

#### 1. 确认服务器的 CA 根证书是否最新 {#check-ca-root-certificates}

检查服务器是否安装了最新的 CA 根证书包。

##### 对于 Ubuntu/Debian: {#for-ubuntu-debian}

```plain
sudo apt update
sudo apt install --reinstall ca-certificates
```

##### 对于 CentOS/RHEL: {#for-centos-rhel}

```plain
sudo yum reinstall ca-certificates
sudo update-ca-trust force-enable
```

---

#### 2. 手动更新 cURL 的 CA 证书 {#manually-update-curl-ca-certificate}

1.  下载最新的 CA 证书包：
    - 从 CURL 官方证书页面 下载最新的 `cacert.pem` 文件。

```plain
curl -O https://curl.se/ca/cacert.pem
```

2.  将证书放到合适的目录，例如 `/etc/ssl/certs/cacert.pem`。
3.  配置 PHP 使用更新的证书： 在 PHP 配置文件（通常是 `php.ini`）中添加或修改以下行：

```plain
curl.cainfo = "/etc/ssl/certs/cacert.pem"
openssl.cafile = "/etc/ssl/certs/cacert.pem"
```

4.  重启 Web 服务器：

```plain
sudo systemctl restart apache2    # 对于 Apache
sudo systemctl restart nginx      # 对于 Nginx
```

---

#### 3. 检查服务器时间 {#check-server-time}

服务器时间错误也可能导致 SSL 验证失败。确保系统时间和时区正确。

##### 同步服务器时间： {#sync-server-time}

```plain
sudo timedatectl set-ntp true
```

---

#### 4. 调试 cURL 的问题 {#debug-curl-issues}

可以通过命令行调试 cURL，检查具体错误：

```plain
curl -v https://downloads.wordpress.org
```

查看输出是否仍然提示证书错误。

---

如果问题尚未解决，可以添加下面微信，加入我们的群聊学习更多建站技巧

<p style="text-align: center;"><img src="https://cos.files.maozhishi.com/public/attachments/lfx/1669111684413.png" width="198" alt="联系夏日么么茶的二维码" /></p>
<p style="text-align: center;"><strong>更多免费建站技巧</strong></p>
<p style="text-align: center;"><strong>扫码联系夏日么么茶</strong></p>
