(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{416:function(s,t,a){"use strict";a.r(t);var e=a(45),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"페이지-생성하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#페이지-생성하기"}},[s._v("#")]),s._v(" 페이지 생성하기")]),s._v(" "),a("p",[s._v("Vuesion CLI 를 사용하여 페이지를 생성할 수 있습니다.\n"),a("code",[s._v("npm run generate")]),s._v(" 명령어를 사용하여 인터렉티브하게 페이지 생성이 가능합니다.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" vuesion generate\n\n? "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("PLOP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Please choose a generator. \n  Simple Component - Add a single "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" component \n❯ Page - Add a new page \n  Vuex Module - Add a new page \n  Interface - Add a new interface and fixtures \n")])])]),a("p",[a("code",[s._v("Page")]),s._v(" 선택 후 "),a("code",[s._v("Enter")]),s._v(" 를 누릅니다.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" vuesion generate\n\n? "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("PLOP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Please choose a generator. Page - Add a new page\n? What should it be called? \n")])])]),a("p",[s._v("이후 라우트와 페이지 컴포넌트의 이름을 입력합니다.")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("이름에 경로 정보가 포함될 수 있습니다.")]),s._v(" "),a("p",[a("code",[s._v("foo/bar/baz")]),s._v(" 와 같은 형태로 경로 정보를 포함할 수 있습니다."),a("br"),s._v("\n단, 페이지 이름은 "),a("code",[s._v("user/_id")]),s._v(" 와 같이 항상 단수 형태를 가져야 합니다.")])]),s._v(" "),a("p",[a("code",[s._v("Foo")]),s._v(" 라고 입력한 뒤 "),a("code",[s._v("Enter")]),s._v(" 누르면, 아래와 같은 화면이 출력됩니다.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" vuesion generate\n\n? "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("PLOP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Please choose a generator. Page - Add a new page\n? What should it be called? Foo\n✔  ++ /Users/johanneswerner/Projects/vuesion/vuesion/src/pages/foo.vue\n✔  ++ /Users/johanneswerner/Projects/vuesion/vuesion/src/pages/foo.spec.ts\n")])])]),a("p",[s._v("생성된 페이지는 "),a("code",[s._v("./src/pages/foo.vue")]),s._v(" 에 위치합니다.\n페이지 생성기는 "),a("code",[s._v("./src/pages/foo.spec.ts")]),s._v(" 으로 테스트 파일도 함께 생성합니다.")]),s._v(" "),a("h2",{attrs:{id:"검증하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#검증하기"}},[s._v("#")]),s._v(" 검증하기")]),s._v(" "),a("p",[a("code",[s._v("./src/pages/foo.vue")]),s._v(" 파일을 열어 인증 미들웨어를 비활성화합니다.")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("defineComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'FooPage'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  auth"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n")])])]),a("p",[a("a",{attrs:{href:"http://localhost:3000/foo",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:3000/foo"),a("OutboundLink")],1),s._v(" 으로 이동하면 새로운 페이지를 확인할 수 있습니다.")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("모든 것이 정상 작동하나요?")]),s._v(" "),a("p",[s._v("다른 무언가에 간섭하지 않았는지 확인하려면 "),a("code",[s._v("npm test")]),s._v(" 을 실행하세요.")])]),s._v(" "),a("h2",{attrs:{id:"설정하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설정하기"}},[s._v("#")]),s._v(" 설정하기")]),s._v(" "),a("p",[s._v("페이지 생성 경로나, 다른 참조 설정 등을 변경하려면 "),a("code",[s._v("./.vuesion/config.json")]),s._v(" 파일의 "),a("code",[s._v("generators")]),s._v(" 섹션을 수정하세요.")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"generators"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"blueprintDirectory"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./.vuesion/generators"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// handlebar templates")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"outputDirectory"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// source directory")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stateFile"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src/interfaces/IState.ts"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// interface file for vuex-modules")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);