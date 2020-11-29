(window.webpackJsonp=window.webpackJsonp||[]).push([[571],{1476:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"管理工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#管理工具"}},[s._v("#")]),s._v(" 管理工具")]),s._v(" "),a("h2",{attrs:{id:"apt-get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apt-get"}},[s._v("#")]),s._v(" apt-get")]),s._v(" "),a("p",[a("code",[s._v("apt-get")]),s._v(" 命令默认的源在国内访问很慢，可以考虑换源。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("获取软件包更新:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("更新软件包:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("其他命令"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn1"}},[s._v("[1]")]),a("a",{staticClass:"footnote-anchor",attrs:{id:"fnref1"}})])])])]),s._v(" "),a("h2",{attrs:{id:"snap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snap"}},[s._v("#")]),s._v(" Snap")]),s._v(" "),a("p",[s._v("已经预装。")]),s._v(" "),a("p",[s._v("在中国大陆不建议使用 Snap")]),s._v(" "),a("hr",{staticClass:"footnotes-sep"}),s._v(" "),a("section",{staticClass:"footnotes"},[a("ol",{staticClass:"footnotes-list"},[a("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[a("p",[s._v("其他命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-cache")]),s._v(" search "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ------(package 搜索包)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-cache")]),s._v(" show "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#------(package 获取包的相关信息，如说明、大小、版本等)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ------(package 安装包)sudo apt-get install # -----(package - - reinstall 重新安装包)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" -f "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# -----(强制安装?#"-f = --fix-missing"当是修复安装吧...)')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" remove "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#-----(package 删除包)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" remove - - purge "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ------(package 删除包，包括删除配置文件等)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" autoremove --purge "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ----(package 删除包及其依赖的软件包+配置文件等(只对6.10有效，强烈推荐))")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#------更新源")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" upgrade "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#------更新已安装的包")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" dist-upgrade "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ---------升级系统")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" dselect-upgrade "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#------使用 dselect 升级")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-cache")]),s._v(" depends "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#-------(package 了解使用依赖)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-cache")]),s._v(" rdepends "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ------(package 了解某个具体的依赖?#当是查看该包被哪些包依赖吧...)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" build-dep "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ------(package 安装相关的编译环境)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#------(package 下载该包的源代码)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" clean "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" autoclean "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --------清理下载文件的存档 && 只清理过时的包")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" check "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#-------检查是否有损坏的依赖")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br")])]),s._v(" "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[s._v("↩︎")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);