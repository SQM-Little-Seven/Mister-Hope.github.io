(window.webpackJsonp=window.webpackJsonp||[]).push([[592],{1478:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"网络服务器相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络服务器相关"}},[s._v("#")]),s._v(" 网络服务器相关")]),s._v(" "),t("h2",{attrs:{id:"ftp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ftp"}},[s._v("#")]),s._v(" ftp")]),s._v(" "),t("h3",{attrs:{id:"vsftpd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vsftpd"}},[s._v("#")]),s._v(" vsftpd")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("安装")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" vsftpd "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ftp")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/vsftpd.conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("至少要更改:")]),s._v(" "),t("div",{staticClass:"language-ini line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("write_enable")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("YES")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("utf8_filesystem")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("YES")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[s._v("#")]),s._v(" Nginx")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("安装")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Nginx 默认安装在 "),t("code",[s._v("/etc/nginx")]),s._v(" 目录下")])]),s._v(" "),t("li",[t("p",[s._v("配置")]),s._v(" "),t("p",[s._v("配置文件为 "),t("code",[s._v("nginx.conf")]),s._v("。")]),s._v(" "),t("p",[s._v("默认站点配置文件在 "),t("code",[s._v("/etc/nginx/sites-available/default")])]),s._v(" "),t("p",[s._v("为了使得 Nginx 能使用 PHP，需要配置")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),s._v(" \\"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("php$ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("var"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置给 socks 应该可行，还在研究中")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fastcgi_pass")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fastcgi_index")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("php"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fastcgi_param")]),s._v("  SCRIPT_FILENAME  "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$document_root")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$fastcgi_script_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),s._v("        fastcgi_params"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"php"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#php"}},[s._v("#")]),s._v(" PHP")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Apache")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" php\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Ngnix")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" php-fpm\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# MySQL")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" php-mysql\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[s._v("#")]),s._v(" MySQL")]),s._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://dev.mysql.com/get/mysql-apt-config_0.8.14-1_all.deb\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dpkg -i mysql-apt-config_0.8.14-1_all.deb\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("配置版本(一般是 5.7)后安装")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-server\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("之后重启，完成配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysql restart\nmysql -u root -p\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"nmp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nmp"}},[s._v("#")]),s._v(" NMP")]),s._v(" "),t("p",[s._v("需要对 Nginx 的配置文件进行修改: 主要改动的目标是把 Nginx 代理端口转发给 php-fpm。")]),s._v(" "),t("p",[s._v("首先配置 index:")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("php "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("需要注意的是，Nginx 将端口转发给 php 默认的 9000 端口。而通过 apt-get 安装的 php 默认使用本地 sock 文件通信，需要对 php 的配置进行修改。要修改的文件位于: "),t("code",[s._v("/etc/php/7.2/fpm/pool.d/www.conf")]),s._v("，将")]),s._v(" "),t("div",{staticClass:"language-ini line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("listen")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" /run/php/php7.0-fpm.sock")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("改成:")]),s._v(" "),t("div",{staticClass:"language-ini line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("listen")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" 127.0.0.1:9000")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("如果报了 permission limitted 的错误，说明 php 没法访问 html 文件夹，修改配置的 html 文件夹权限即可。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);