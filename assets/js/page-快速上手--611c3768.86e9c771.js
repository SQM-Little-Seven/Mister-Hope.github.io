(window.webpackJsonp=window.webpackJsonp||[]).push([[398],{1263:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Vuex 是 Vue 官方出品的状态管理组件，是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。")]),t._v(" "),a("p",[t._v("我们可以从下面一个简单的状态管理案例开始。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// state")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// view")]),t._v("\n  template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<div>{{ count }}</div>")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// actions")]),t._v("\n  methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("p",[t._v("这个状态自管理应用包含以下几个部分:")]),t._v(" "),a("ul",[a("li",[t._v("state: 驱动应用的数据源；")]),t._v(" "),a("li",[t._v("view: 以声明方式将 state 映射到视图；")]),t._v(" "),a("li",[t._v("actions: 响应在 view 上的用户输入导致的状态变化。")])]),t._v(" "),a("p",[t._v("以下是一个表示“单向数据流”理念的简单示意:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://vuex.vuejs.org/flow.png",alt:"图片"}})]),t._v(" "),a("p",[t._v("但是，当我们的应用遇到"),a("strong",[t._v("多个组件共享状态")]),t._v("时，单向数据流的简洁性很容易被破坏:")]),t._v(" "),a("ul",[a("li",[t._v("多个视图依赖于同一状态。")]),t._v(" "),a("li",[t._v("来自不同视图的行为需要变更同一状态。")])]),t._v(" "),a("p",[t._v("此时，我们就需要进行复杂的组件通信，这在开发中很不方便。")]),t._v(" "),a("p",[a("strong",[t._v("所以此时")]),t._v("，我们就需要 "),a("strong",[t._v("Vuex")]),t._v("!")]),t._v(" "),a("h2",{attrs:{id:"vuex-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex-介绍"}},[t._v("#")]),t._v(" Vuex 介绍")]),t._v(" "),a("p",[t._v("每一个 Vuex 应用的核心就是 "),a("code",[t._v("store")]),t._v(" (仓库)。“store”基本上就是一个容器，它包含着您的应用中大部分的状态 ("),a("code",[t._v("state")]),t._v(")。Vuex 和单纯的全局对象有以下两点不同:")]),t._v(" "),a("p",[t._v("Vuex 的状态存储是响应式的。当 Vue 组件从 "),a("code",[t._v("store")]),t._v(" 中读取状态的时候，若 "),a("code",[t._v("store")]),t._v(" 中的状态发生变化，那么相应的组件也会相应地得到高效更新。")]),t._v(" "),a("p",[t._v("您不能直接改变 "),a("code",[t._v("store")]),t._v(" 中的状态。改变 "),a("code",[t._v("store")]),t._v(" 中的状态的唯一途径就是显式地提交 (commit) "),a("code",[t._v("mutation")]),t._v("。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。")]),t._v(" "),a("h3",{attrs:{id:"最简单的-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最简单的-store"}},[t._v("#")]),t._v(" 最简单的 Store")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Vuex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mutations"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("p",[t._v("现在，可以通过 "),a("code",[t._v("store.state")]),t._v(" 来获取状态对象，以及通过 "),a("code",[t._v("store.commit")]),t._v(" 方法触发状态变更:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"increment"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> 1")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("此时，任何使用了 "),a("code",[t._v("store.state.count")]),t._v(" 的组件都会得到对应的更新。")]),t._v(" "),a("p",[t._v("通过提交 mutation 的方式，而非直接改变 "),a("code",[t._v("store.state.count")]),t._v("，是因为我们想要更明确地追踪到状态的变化。这个简单的约定能够让您的意图更加明显，这样您在阅读代码的时候能更容易地解读应用内部的状态改变。")]),t._v(" "),a("h3",{attrs:{id:"vuex-的意义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex-的意义"}},[t._v("#")]),t._v(" Vuex 的意义")]),t._v(" "),a("p",[t._v("在引入 Vuex 之后，Vuex 会被全局挂载，这意味着访问任何一个组件的 "),a("code",[t._v("this.$store")]),t._v(" 都会指向同一个——我们引入的 Vuex。")]),t._v(" "),a("p",[t._v("也就是说，我们可以在所有组件内使用 "),a("code",[t._v("this.$store.state")]),t._v(" 来共享同一份数据，并在数据发生改变的时候得到更新。")]),t._v(" "),a("div",{staticClass:"custom-block info"},[a("p",{staticClass:"custom-block-title"},[t._v("相关信息")]),t._v(" "),a("p",[t._v("在 setup 中，需要使用 useStore 函数来获取 store 对象。")])]),t._v(" "),a("p",[t._v("任何时候，提交一个 "),a("code",[t._v("mutation")]),t._v(" 到 Vuex，会触发这份共享数据的变更，并通知全局的任何一个使用了变更数据的组件进行变更。")]),t._v(" "),a("p",[t._v("所以说 Vuex 通过在全局范围内的所有组件引入，使得全局共享了同一份数据，全局的任何组件都可以更新这份数据，同时一旦数据发生更新，全局任意使用了更新数据的组件也会立即的到更新通知并完成自身更新。")]),t._v(" "),a("p",[t._v("这份数据 (state) 就成为状态，而 Vuex 自身就成为了一个状态树。通过这种方式，全局的状态统一、状态共享与通信变得十分简单。")]),t._v(" "),a("h3",{attrs:{id:"state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[t._v("#")]),t._v(" State")]),t._v(" "),a("p",[t._v("State 即是全局共享的那一份数据。")]),t._v(" "),a("p",[t._v("每个使用了 State 组件一般只使用了全局 State 的少量数据，而且对其他部分的数据结构并不知情。")]),t._v(" "),a("p",[t._v("由于状态被全局共享，为了整个应用的稳定考虑，那么就不可能允许任何一个组件随意改变这个状态，否则一旦删除或改变了一些被其他组件使用的状态，就可能会造成其他组件异常。所以 State 是一份响应式的只读属性。")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("直接改变 state 是严厉禁止的!!!!")])]),t._v(" "),a("h3",{attrs:{id:"mutation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mutation"}},[t._v("#")]),t._v(" Mutation")]),t._v(" "),a("p",[t._v("因为上面的安全缘故，State 被设置只读，那么最安全的方式就是预先设置好一系列改变方式，来有条理、安全地改变 State 的数据。")]),t._v(" "),a("p",[t._v("Mutation 就是这样是设置的。所有 Mutation 都是一个函数，可以给这个函数传递参数。当组件想要改变状态时，他们需要通过 "),a("code",[t._v("store.commit(<mutation函数名>, <参数>)")]),t._v(" 的方式，来触发对应的 Mutation 函数，在 Mutation 函数执行的过程中，按照预先设置好的方法改变 State。")]),t._v(" "),a("p",[t._v("所以总之，Mutation 就是一系列设置好的函数，每个函数是一个改变 State 的方式，组件想要改变 State 状态的时候，就调用这些方法。这样就达到了，既可以让组件改变状态，又阻止了组件随意改变状态，保障了整颗状态树的稳定性。")]),t._v(" "),a("h3",{attrs:{id:"更多"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多"}},[t._v("#")]),t._v(" 更多")]),t._v(" "),a("p",[t._v("在 Vuex 中，还设置了 "),a("code",[t._v("Getter")]),t._v(" 和 "),a("code",[t._v("Action")]),t._v(" 两种概念。")]),t._v(" "),a("h4",{attrs:{id:"getter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getter"}},[t._v("#")]),t._v(" Getter")]),t._v(" "),a("p",[t._v("Getter 是 State 的派生。")]),t._v(" "),a("p",[t._v("有时候我们不是直接使用 State 中的数据，而是需要从 "),a("code",[t._v("store")]),t._v(" 中的 "),a("code",[t._v("state")]),t._v(" 中派生出一些状态，也就是对 State 的数据进行一些处理再使用。")]),t._v(" "),a("p",[t._v("如果有多个组件需要用到此属性，我们要么复制这个函数，或者抽取到一个共享函数然后在多处导入它——无论哪种方式都不是很理想。")]),t._v(" "),a("p",[t._v("所以 Vuex 允许我们在 "),a("code",[t._v("store")]),t._v(" 中定义 “"),a("code",[t._v("getter")]),t._v("” (可以认为是 "),a("code",[t._v("store")]),t._v(" 的计算属性)。就像计算属性一样，"),a("code",[t._v("getter")]),t._v(" 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。")]),t._v(" "),a("h4",{attrs:{id:"action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[t._v("#")]),t._v(" Action")]),t._v(" "),a("p",[t._v("有些时候，我们可能会需要连续改变 state，这就意味着我们要接连触发多个 mutation，但是如果 mutation 是异步的(比如包含了网络操作)，组件就不知道何时 mutation 会执行完进行 state 的改变，这个时候 "),a("code",[t._v("Action")]),t._v(" 就被设计出来。")]),t._v(" "),a("p",[t._v("Action 类似于 "),a("code",[t._v("mutation")]),t._v("，不同在于:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Action 提交的是 "),a("code",[t._v("mutation")]),t._v("，而不是直接变更状态。")])]),t._v(" "),a("li",[a("p",[t._v("Action 可以包含任意异步操作。")])])]),t._v(" "),a("p",[t._v("所以，这样组件只需要调用 "),a("code",[t._v("Action")]),t._v("，把多次提交 "),a("code",[t._v("mutation")]),t._v(" 的任务交给 Action，这样就完成了复杂 "),a("code",[t._v("mutation")]),t._v(" 的提交。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("更多详细的东西大家还是要看文档!")]),t._v(" "),a("h2",{attrs:{id:"vuex-模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex-模块化"}},[t._v("#")]),t._v(" Vuex 模块化")]),t._v(" "),a("p",[t._v("可以想象，随着整个网站架构的变大，网页数的扩张，状态树将会越来越庞大，可能有数十上百个 state 子项和同等数量级的 mutation。")]),t._v(" "),a("p",[t._v("所以自然，Vuex 也支持模块化。")]),t._v(" "),a("p",[t._v("每个子 vuex 包含了自身完整的 "),a("code",[t._v("state")]),t._v("、"),a("code",[t._v("mutation")]),t._v(" 与 "),a("code",[t._v("action")]),t._v("，通过主 Vuex 的 "),a("code",[t._v("module")]),t._v(" 属性引入，在使用时会把对应的项目注入自身的对应部分。")]),t._v(" "),a("h2",{attrs:{id:"vuex-案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex-案例"}},[t._v("#")]),t._v(" Vuex 案例")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/code/vue/vuex/demo.html"}},[t._v("点击此处")])],1)]),t._v(" "),a("h2",{attrs:{id:"文档地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档地址"}},[t._v("#")]),t._v(" 文档地址")]),t._v(" "),a("p",[t._v("文档地址: "),a("a",{attrs:{href:"https://vuex.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex 教程"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);