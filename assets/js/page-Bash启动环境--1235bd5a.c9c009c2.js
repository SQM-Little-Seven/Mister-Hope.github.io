(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1448:function(s,a,e){"use strict";e.r(a);var n=e(1),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"session"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#session"}},[s._v("#")]),s._v(" Session")]),s._v(" "),e("p",[s._v("用户每次使用 Shell，都会开启一个与 Shell 的 Session(对话)。")]),s._v(" "),e("p",[s._v("Session 有两种类型: 登录 Session 和非登录 Session，也可以叫做 login shell 和 non-login shell。")]),s._v(" "),e("h3",{attrs:{id:"登录-session"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#登录-session"}},[s._v("#")]),s._v(" 登录 Session")]),s._v(" "),e("p",[s._v("登录 Session 是用户登录系统以后，系统为用户开启的原始 Session，通常需要用户输入用户名和密码进行登录。")]),s._v(" "),e("p",[s._v("登录 Session 一般进行整个系统环境的初始化，启动的初始化脚本依次如下。")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("/etc/profile")]),s._v(": 所有用户的全局配置脚本。")]),s._v(" "),e("li",[e("code",[s._v("/etc/profile.d")]),s._v("目录里面所有 "),e("code",[s._v(".sh")]),s._v(" 文件")]),s._v(" "),e("li",[e("code",[s._v("~/.bash_profile")]),s._v(": 用户的个人配置脚本。如果该脚本存在，则执行完就不再往下执行。")]),s._v(" "),e("li",[e("code",[s._v("~/.bash_login")]),s._v(": 如果 "),e("code",[s._v("~/.bash_profile")]),s._v(" 没找到，则尝试执行这个脚本(C shell 的初始化脚本)。如果该脚本存在，则执行完就不再往下执行。")]),s._v(" "),e("li",[e("code",[s._v("~/.profile")]),s._v(": 如果"),e("code",[s._v("~/.bash_profile")]),s._v(" 和 "),e("code",[s._v("~/.bash_login")]),s._v(" 都没找到，则尝试读取这个脚本(Bourne shell 和 Korn shell 的初始化脚本)。")])]),s._v(" "),e("p",[s._v("Linux 发行版更新的时候，会更新 "),e("code",[s._v("/etc")]),s._v(" 里面的文件，比如 "),e("code",[s._v("/etc/profile")]),s._v("，因此不要直接修改这个文件。如果想修改所有用户的登陆环境，就在 "),e("code",[s._v("/etc/profile.d")]),s._v(" 目录里面新建 "),e("code",[s._v(".sh")]),s._v(" 脚本。")]),s._v(" "),e("p",[s._v("如果想修改您个人的登录环境，一般是写在 "),e("code",[s._v("~/.bash_profile")]),s._v(" 里面。下面是一个典型的 "),e("code",[s._v(".bash_profile")]),s._v(" 文件。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# .bash_profile")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/sbin:/usr/sbin:/bin:/usr/bin:/usr/local/bin\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/bin\n\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("SHELL")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/bin/bash\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MANPATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/man:/usr/X11/man\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("EDITOR")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/bin/vi\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PS1")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\h:\\w\\$ '")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PS2")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'> '")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -f ~/.bashrc "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" ~/.bashrc\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" EDITOR\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("p",[s._v("可以看到，这个脚本定义了一些最基本的环境变量，然后执行了 "),e("code",[s._v("~/.bashrc")]),s._v("。")]),s._v(" "),e("p",[e("code",[s._v("bash")]),s._v(" 命令的 "),e("code",[s._v("--login")]),s._v(" 参数，会强制执行登录 Session 会执行的脚本。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" --login\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("code",[s._v("bash")]),s._v(" 命令的 "),e("code",[s._v("--noprofile")]),s._v(" 参数，会跳过上面这些 Profile 脚本。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" --noprofile\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"非登录-session"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#非登录-session"}},[s._v("#")]),s._v(" 非登录 Session")]),s._v(" "),e("p",[s._v("非登录 Session 是用户进入系统以后，手动新建的 Session，这时不会进行环境初始化。比如，在命令行执行 "),e("code",[s._v("bash")]),s._v(" 命令，就会新建一个非登录 Session。")]),s._v(" "),e("p",[s._v("非登录 Session 的初始化脚本依次如下。")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("/etc/bash.bashrc")]),s._v(": 对全体用户有效。")]),s._v(" "),e("li",[e("code",[s._v("~/.bashrc")]),s._v(": 仅对当前用户有效。")])]),s._v(" "),e("p",[s._v("对用户来说，"),e("code",[s._v("~/.bashrc")]),s._v(" 通常是最重要的脚本。非登录 Session 默认会执行它，而登陆 Session 一般也会通过调用执行它。由于每次执行 Bash 脚本，都会新建一个非登录 Session，所以 "),e("code",[s._v("~/.bashrc")]),s._v(" 也是每次执行脚本都会执行的。")]),s._v(" "),e("p",[e("code",[s._v("bash")]),s._v(" 命令的 "),e("code",[s._v("--norc")]),s._v(" 参数，可以禁止在非登录 Session 执行 "),e("code",[s._v("~/.bashrc")]),s._v(" 脚本。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" --norc\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("code",[s._v("bash")]),s._v(" 命令的 "),e("code",[s._v("--rcfile")]),s._v(" 参数，指定另一个脚本代替 "),e("code",[s._v(".bashrc")]),s._v("。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" --rcfile testrc\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"bash-logout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bash-logout"}},[s._v("#")]),s._v(" .bash_logout")]),s._v(" "),e("p",[e("code",[s._v("~/.bash_logout")]),s._v(" 脚本在每次退出 Session 时执行，通常用来做一些清理工作和记录工作，比如删除临时文件，记录用户在本次 Session 花费的时间。")]),s._v(" "),e("p",[s._v("如果没有退出时要执行的命令，这个文件也可以不存在。")]),s._v(" "),e("h2",{attrs:{id:"启动选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动选项"}},[s._v("#")]),s._v(" 启动选项")]),s._v(" "),e("p",[s._v("为了方便 Debug，有时在启动 Bash 的时候，可以加上启动参数。")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("-n")]),s._v(": 不运行脚本，只检查是否有语法错误。")]),s._v(" "),e("li",[e("code",[s._v("-v")]),s._v(": 输出每一行语句运行结果前，会先输出该行语句。")]),s._v(" "),e("li",[e("code",[s._v("-x")]),s._v(": 每一个命令处理完以后，先输出该命令，再进行下一个命令的处理。")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -n scriptname\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -v scriptname\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -x scriptname\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"键盘绑定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#键盘绑定"}},[s._v("#")]),s._v(" 键盘绑定")]),s._v(" "),e("p",[s._v("Bash 允许用户定义自己的快捷键。全局的键盘绑定文件默认为 "),e("code",[s._v("/etc/inputrc")]),s._v("，您可以在主目录创建自己的键盘绑定文件 "),e("code",[s._v(".inputrc")]),s._v(" 文件。如果定义了这个文件，需要在其中加入下面这行，保证全局绑定不会被遗漏。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$include")]),s._v(" /etc/inputrc\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("code",[s._v(".inputrc")]),s._v(" 文件里面的快捷键，可以像这样定义，"),e("code",[s._v('"\\C-t":"pwd\\n"')]),s._v(" 表示将 "),e("code",[s._v("Ctrl + t")]),s._v(" 绑定为运行 "),e("code",[s._v("pwd")]),s._v(" 命令。")])])}),[],!1,null,null,null);a.default=t.exports}}]);