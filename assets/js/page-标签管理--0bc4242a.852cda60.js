(window.webpackJsonp=window.webpackJsonp||[]).push([[464],{1630:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"为什么要有-tag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有-tag"}},[s._v("#")]),s._v(" 为什么要有 tag")]),s._v(" "),t("p",[s._v("发布一个版本时，我们通常先在版本库中打一个标签 ("),t("code",[s._v("tag")]),s._v(")，这样，就唯一确定了打标签时刻的版本。将来无论什么时候，取某个标签的版本，就是把那个打标签的时刻的历史版本取出来。所以，标签也是版本库的一个快照。")]),s._v(" "),t("p",[s._v("Git 的标签虽然是版本库的快照，但其实它就是指向某个 "),t("code",[s._v("commit")]),s._v(" 的指针(跟分支很像对不对? 但是分支可以移动，标签不能移动)，所以，创建和删除标签都是瞬间完成的。")]),s._v(" "),t("p",[s._v("Git 有 "),t("code",[s._v("commit")]),s._v("，为什么还要引入 "),t("code",[s._v("tag")]),s._v("?")]),s._v(" "),t("p",[s._v("“请把上周一的那个版本打包发布，"),t("code",[s._v("commit")]),s._v(" 号是 6a5819e...”")]),s._v(" "),t("p",[s._v("“一串乱七八糟的数字不好找! ”")]),s._v(" "),t("p",[s._v("如果换一个办法:")]),s._v(" "),t("p",[s._v("“请把上周一的那个版本打包发布，版本号是 "),t("code",[s._v("v1.2")]),s._v("”")]),s._v(" "),t("p",[s._v("“好的，按照 "),t("code",[s._v("tag v1.2")]),s._v(" 查找 "),t("code",[s._v("commit")]),s._v(" 就行! ”")]),s._v(" "),t("p",[s._v("所以，"),t("code",[s._v("tag")]),s._v(" 就是一个让人容易记住的有意义的名字，它跟某个 "),t("code",[s._v("commit")]),s._v(" 绑在一起。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("推荐的标签规范是以小写字母 "),t("code",[s._v("v")]),s._v(" 开头，后接 "),t("code",[s._v("x.x")]),s._v(" 或 "),t("code",[s._v("x.x.x")]),s._v(" 等若干位版本号。")])]),s._v(" "),t("h2",{attrs:{id:"创建轻量标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建轻量标签"}},[s._v("#")]),s._v(" 创建轻量标签")]),s._v(" "),t("p",[s._v("在 Git 中打标签非常简单，首先，切换到需要打标签的分支上:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch\n* dev\n  master\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout master\nSwitched to branch "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'master'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("然后，敲命令 "),t("code",[s._v("git tag <name>")]),s._v(" 就可以打一个新标签:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag v1.0\n-- no output --\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("可以用命令 "),t("code",[s._v("git tag")]),s._v(" 查看所有标签:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag\nv1.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("默认标签是打在最新提交的 "),t("code",[s._v("commit")]),s._v(" 上的。有时候，如果忘了打标签，比如，现在已经是周五了，但应该在周一打的标签没有打，怎么办?")]),s._v(" "),t("p",[s._v("方法是找到历史提交的 "),t("code",[s._v("commit id")]),s._v("，然后打上就可以了:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --pretty"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oneline --abbrev-commit\n12a631b "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master, tag: v1.0, origin/master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" merged bug fix "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v("\n4c805e2 fix bug "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v("\ne1e9c68 merge with no-ff\nf52c633 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" merge\ncf810e4 conflict fixed\n5dc6824 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" simple\n14096d0 AND simple\nb17d20e branch "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\nd46f35e remove test.txt\nb84166e "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" test.txt\n519219b "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tracks changes\ne43a48b understand how stage works\n1094adb append GPL\ne475afc "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" distributed\neaadf4e wrote a readme "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("比方说要对 "),t("code",[s._v("add merge")]),s._v(" 这次提交打标签，它对应的 "),t("code",[s._v("commit id")]),s._v(" 是 "),t("code",[s._v("f52c633")]),s._v("，敲入命令:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag v0.9 f52c633\n--no output --\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("再用命令 "),t("code",[s._v("git tag")]),s._v(" 查看标签:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag\nv0.9\nv1.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("注意，标签不是按时间顺序列出，而是按字母排序的。可以用 "),t("code",[s._v("git show <tagname>")]),s._v(" 查看标签信息:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show v0.9\ncommit f52c63349bc3c1593499807e5c8e972b82c8f286 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tag: v0.9"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nAuthor: Michael Liao "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("askxuefeng@gmail.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Fri May "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":56:54 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v(" +0800\n\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" merge\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" --git a/readme.txt b/readme.txt\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("可以看到，"),t("code",[s._v("v0.9")]),s._v(" 确实打在 "),t("code",[s._v("add merge")]),s._v(" 这次提交上。")]),s._v(" "),t("h2",{attrs:{id:"附注标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#附注标签"}},[s._v("#")]),s._v(" 附注标签")]),s._v(" "),t("p",[s._v("Git 还可以创建带有说明的标签，用 "),t("code",[s._v("-a")]),s._v(" 指定标签名，"),t("code",[s._v("-m")]),s._v(" 指定说明文字:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -a v0.1 -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version 0.1 released"')]),s._v(" 1094adb\n--no output --\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("用命令 "),t("code",[s._v("git show <tagname>")]),s._v(" 可以看到说明文字:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show v0.1\ntag v0.1\nTagger: Michael Liao "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("askxuefeng@gmail.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Fri May "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":48:43 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v(" +0800\n\nversion "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v(" released\n\ncommit 1094adb7b9b3807259d8cb349e7df1d4d6477073 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tag: v0.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nAuthor: Michael Liao "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("askxuefeng@gmail.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Fri May "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":06:15 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v(" +0800\n\n    append GPL\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" --git a/readme.txt b/readme.txt\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("标签总是和某个 commit 挂钩。如果这个 commit 既出现在 master 分支，又出现在 dev 分支，那么在这两个分支上都可以看到这个标签。")])]),s._v(" "),t("h3",{attrs:{id:"添加小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加小结"}},[s._v("#")]),s._v(" 添加小结")]),s._v(" "),t("p",[s._v("命令 "),t("code",[s._v("git tag <tagname>")]),s._v(" 用于新建一个标签，默认为 "),t("code",[s._v("HEAD")]),s._v("，也可以指定一个 "),t("code",[s._v("commit id")]),s._v("；")]),s._v(" "),t("p",[s._v("命令 "),t("code",[s._v('git tag -a <tagname> -m "blablabla..."')]),s._v(" 可以指定标签信息；")]),s._v(" "),t("p",[s._v("命令 "),t("code",[s._v("git tag")]),s._v(" 可以查看所有标签。")]),s._v(" "),t("h2",{attrs:{id:"操作标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作标签"}},[s._v("#")]),s._v(" 操作标签")]),s._v(" "),t("p",[s._v("如果标签打错了，也可以删除:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -d v0.1\nDeleted tag "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'v0.1'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("was f15b0dd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("因为创建的标签都只存储在本地，不会自动推送到远程。所以，打错的标签可以在本地安全删除。")]),s._v(" "),t("p",[s._v("如果要推送某个标签到远程，使用命令 "),t("code",[s._v("git push origin <tagname>")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin v1.0\nTotal "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", reused "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nTo github.com:Hope-Studio/learngit.git\n * "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("new tag"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("         v1.0 -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" v1.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("或者，一次性推送全部尚未推送到远程的本地标签:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --tags\nTotal "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", reused "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nTo github.com:Hope-Studio/learngit.git\n * "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("new tag"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("         v0.9 -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" v0.9\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("如果标签已经推送到远程，要删除远程标签就麻烦一点，先从本地删除:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -d v0.9\nDeleted tag "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'v0.9'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("was f52c633"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("然后，从远程删除。删除命令也是 push，但是格式如下:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin :refs/tags/v0.9\nTo github.com:Hope-Studio/learngit.git\n - "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("deleted"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("         v0.9\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("要看看是否真的从远程库删除了标签，可以登陆 GitHub 查看。")]),s._v(" "),t("h3",{attrs:{id:"管理标签小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#管理标签小结"}},[s._v("#")]),s._v(" 管理标签小结")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("命令 "),t("code",[s._v("git push origin <tagname>")]),s._v(" 可以推送一个本地标签；")])]),s._v(" "),t("li",[t("p",[s._v("命令 "),t("code",[s._v("git push origin --tags")]),s._v(" 可以推送全部未推送过的本地标签；")])]),s._v(" "),t("li",[t("p",[s._v("命令 "),t("code",[s._v("git tag -d <tagname>")]),s._v(" 可以删除一个本地标签；")])]),s._v(" "),t("li",[t("p",[s._v("命令 "),t("code",[s._v("git push origin :refs/tags/<tagname>")]),s._v(" 可以删除一个远程标签。")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);