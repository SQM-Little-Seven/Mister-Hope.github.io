(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{1452:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"命令提示符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令提示符"}},[s._v("#")]),s._v(" 命令提示符")]),s._v(" "),t("p",[s._v("登录系统后，第一眼看到的内容是:")]),s._v(" "),t("div",{staticClass:"language-shell-session line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell-session"}},[t("code",[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[s._v("[root@localhost ~]")]),t("span",{pre:!0,attrs:{class:"token output"}},[s._v("#\n")])])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这就是 Linux 系统的命令提示符。那么，这个提示符的含义是什么呢?")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("[]")]),s._v(": 这是提示符的分隔符号，没有特殊含义。")]),s._v(" "),t("li",[t("code",[s._v("root")]),s._v(": 显示的是当前的登录用户，笔者现在使用的是 root 用户登录。")]),s._v(" "),t("li",[t("code",[s._v("@")]),s._v(": 分隔符号，没有特殊含义。")]),s._v(" "),t("li",[t("code",[s._v("localhost")]),s._v(": 当前系统的简写主机名(完整主机名是 "),t("code",[s._v("localhost.localdomain")]),s._v(")。")]),s._v(" "),t("li",[t("code",[s._v("~")]),s._v(": 代表用户当前所在的目录，此例中用户当前所在的目录是家目录。")]),s._v(" "),t("li",[t("code",[s._v("#")]),s._v(": 命令提示符，Linux 用这个符号标识登录的用户权限等级。如果是超级用户，提示符就是 "),t("code",[s._v("#")]),s._v("；如果是普通用户，提示符就是 "),t("code",[s._v("$")]),s._v("。")])]),s._v(" "),t("p",[s._v("家目录(又称主目录)是什么? Linux 系统是纯字符界面，用户登录后，要有一个初始登录的位置，这个初始登录位置就称为用户的家:\n超级用户的家目录: "),t("code",[s._v("/root")]),s._v("。\n普通用户的家目录: "),t("code",[s._v("/home/用户名")]),s._v("。")]),s._v(" "),t("p",[s._v("用户在自己的家目录中拥有完整权限，所以我们也建议操作实验可以放在家目录中进行。我们切换一下用户所在目录，看看有什么效果。")]),s._v(" "),t("div",{staticClass:"language-shell-session line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell-session"}},[t("code",[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[s._v("[root@localhost ~]")]),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("#")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token info punctuation"}},[s._v("[root@localhost local]")]),t("span",{pre:!0,attrs:{class:"token output"}},[s._v("#\n")])])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("仔细看，如果切换用户所在目录，那么命令提示符中的会变成用户当前所在目录的最后一个目录(不显示完整的所在目录 "),t("code",[s._v("/usr/loca")]),s._v("l，只显示最后一个目录 "),t("code",[s._v("local")]),s._v(")。")]),s._v(" "),t("h2",{attrs:{id:"命令的基本格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令的基本格式"}},[s._v("#")]),s._v(" 命令的基本格式")]),s._v(" "),t("p",[s._v("接下来看看 Linux 命令的基本格式:")]),s._v(" "),t("div",{staticClass:"language-shell-session line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell-session"}},[t("code",[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[s._v("[root@localhost ~]")]),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("#")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[s._v("命令"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("参数"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("命令格式中的 "),t("code",[s._v("[]")]),s._v(" 代表可选项，也就是有些命令可以不写选项或参数，也能执行。那么，我们就用 Linux 中最常见的 "),t("code",[s._v("ls")]),s._v(" 命令来解释一下命令的格式(有关 "),t("code",[s._v("ls")]),s._v(" 命令的具体用法，后续章节会详细介绍)。如果按照命令的分类，那么 "),t("code",[s._v("ls")]),s._v(" 命令应该属于目录操作命令。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\nanaconda-ks.cfg install.log install.log.syslog\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",[t("li",[t("p",[s._v("选项的作用")]),s._v(" "),t("p",[s._v("选项的作用是调整命令功能。如果没有选项，那么命令只能执行最基本的功能；而一旦有选项，则可以显示更加丰富的数据。")]),s._v(" "),t("p",[s._v("Linux 的选项又分为短格式选项("),t("code",[s._v("-l")]),s._v(")和长格式选项(-"),t("code",[s._v("-all")]),s._v(")。短格式选项是英文的简写，用一个减号调用，例如:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls -l")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("而长格式选项是英文完整单词，一般用两个减号调用，例如:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls --all")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("一般情况下，短格式选项是长格式选项的缩写，也就是一个短格式选项会有对应的长格式选项。当然也有例外，比如 "),t("code",[s._v("ls")]),s._v(" 命令的短格式选项 "),t("code",[s._v("-l")]),s._v(" 就没有对应的长格式选项。所以具体的命令选项可以通过后面我们要学习的帮助命令来进行査询。")])]),s._v(" "),t("li",[t("p",[s._v("参数的作用")]),s._v(" "),t("p",[s._v("参数是命令的操作对象，一般文件、目录、用户和进程等可以作为参数被命令操作。例如:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls -l anaconda-ks.cfg")]),s._v("\n-rw-------.1 root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1207")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 月 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":18 anaconda-ks.cfg\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("但是为什么一开始 "),t("code",[s._v("ls")]),s._v(" 命令可以省略参数? 那是因为有默认参数。命令一般都需要加入参数，用于指定命令操作的对象是谁。如果可以省略参数，则一般都有默认参数。例如:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\nanaconda-ks.cfg install.log install.log.syslog\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("这个 "),t("code",[s._v("ls")]),s._v(" 命令后面没有指定参数，默认参数是当前所在位置，所以会显示当前目录下的文件名。")])])]),s._v(" "),t("p",[s._v("总结一下: "),t("strong",[s._v("命令的选项用于调整命令功能，而命令的参数是这个命令的操作对象。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);