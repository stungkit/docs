(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{435:function(t,s,a){"use strict";a.r(s);var e=a(45),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"запуск-приложения"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#запуск-приложения"}},[t._v("#")]),t._v(" Запуск приложения")]),t._v(" "),a("p",[t._v("Что бы убедится, что все работает, выполните команду: "),a("code",[t._v("npm run dev")]),t._v(".")]),t._v(" "),a("p",[t._v("Откроется загрузочный экран Nuxt.js "),a("a",{attrs:{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:3000"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"режим-разработки-и-горячая-перезагрузка-hot-reload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#режим-разработки-и-горячая-перезагрузка-hot-reload"}},[t._v("#")]),t._v(" Режим разработки и горячая перезагрузка (Hot reload)")]),t._v(" "),a("p",[t._v("Ваше приложение работает в режиме разработки, это означает что Webpack следит за изменениями файлов.")]),t._v(" "),a("p",[t._v("Каждый файл в папке "),a("code",[t._v("./src")]),t._v(" будет автоматически загружен, таким образом не требуется перезапускать сервер в процессе разработки.")]),t._v(" "),a("p",[t._v("Режим горячей перезагрузки (Hot Reload) - это удобный инструмент для продуктивной разработки.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Интернационализация i18n")]),t._v(" "),a("p",[t._v("Файлы с переводами в папке "),a("code",[t._v("./i18n")]),t._v(" не подгружаются автоматически; что бы увидеть изменения необходимо перезапустить браузер.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Storybook")]),t._v(" "),a("p",[t._v("Рекомендуется использовать Storybook для разработки компонентов.\nStorybook помогает быстрее увидеть визуальные изменения компонента.")]),t._v(" "),a("p",[t._v("Для запуска Storybook используйте команду "),a("code",[t._v("npm run storybook:dev")])])]),t._v(" "),a("h2",{attrs:{id:"изменения-порта-сервера"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#изменения-порта-сервера"}},[t._v("#")]),t._v(" Изменения порта сервера")]),t._v(" "),a("p",[t._v("Приложение использует по-умолчанию порт "),a("code",[t._v("3000")]),t._v(", Установка нового значения в переменную окружения "),a("code",[t._v("PORT")]),t._v(" позволяет\nпереопределить это значение.\nНапример, "),a("code",[t._v("npm run dev -- --port 8080")]),t._v(" для разработки, или "),a("code",[t._v("PORT=8080 npm start")]),t._v(" для production-режима.")]),t._v(" "),a("h2",{attrs:{id:"запуск-приложения-в-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#запуск-приложения-в-docker"}},[t._v("#")]),t._v(" Запуск приложения в Docker")]),t._v(" "),a("p",[t._v("Приложение может быть запущено в образе Docker.")]),t._v(" "),a("p",[t._v("Для сборки образа используйте команду:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run ci "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" docker build -t "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuesion:latest"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),a("p",[t._v("После окончания сборки, контейнер можно запустить следующей командой:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker run -it --name vuesion -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3001")]),t._v(":3000 vuesion:latest\n")])])]),a("p",[t._v("Дождитесь следующего сообщения:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("   ╭────────────────────────────────────────╮\n   │                                        │\n   │   Nuxt @ v2.15.2                       │\n   │                                        │\n   │   ▸ Environment: production            │\n   │   ▸ Rendering:   server-side           │\n   │   ▸ Target:      server                │\n   │                                        │\n   │   Memory usage: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v(" MB "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RSS: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("181")]),t._v(" MB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   │\n   │                                        │\n   │   Listening: http://172.17.0.2:3000/   │\n   │                                        │\n   ╰────────────────────────────────────────╯\n")])])]),a("p",[t._v("Docker запустится на порту "),a("strong",[t._v("3001")]),t._v(", таким образом можно одновременно запустить Docker и локальный сервер.")]),t._v(" "),a("p",[t._v("Что бы проверить что все заработало, откройте в браузере "),a("a",{attrs:{href:"http://localhost:3001",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:3001"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);s.default=r.exports}}]);