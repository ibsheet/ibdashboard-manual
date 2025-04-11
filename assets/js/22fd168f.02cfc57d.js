"use strict";(self.webpackChunkibdashboard_guide=self.webpackChunkibdashboard_guide||[]).push([[9530],{3374:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});const l=JSON.parse('{"id":"\uac00\uc774\ub4dc/\ub300\uc2dc\ubcf4\ub4dc/\uc18d\uc131/level","title":"level","description":"\ud0c0\uc785","source":"@site/docs/2. \uac00\uc774\ub4dc/1. \ub300\uc2dc\ubcf4\ub4dc/1. \uc18d\uc131/1. level.md","sourceDirName":"2. \uac00\uc774\ub4dc/1. \ub300\uc2dc\ubcf4\ub4dc/1. \uc18d\uc131","slug":"/\uac00\uc774\ub4dc/\ub300\uc2dc\ubcf4\ub4dc/\uc18d\uc131/level","permalink":"/ibdashboard-manual/docs/\uac00\uc774\ub4dc/\ub300\uc2dc\ubcf4\ub4dc/\uc18d\uc131/level","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"\ub300\uc2dc\ubcf4\ub4dc \uc0dd\uc131 \uac00\uc774\ub4dc","permalink":"/ibdashboard-manual/docs/\uac00\uc774\ub4dc/\ub300\uc2dc\ubcf4\ub4dc/\ub300\uc2dc\ubcf4\ub4dc \uc0dd\uc131 \uac00\uc774\ub4dc"},"next":{"title":"margin","permalink":"/ibdashboard-manual/docs/\uac00\uc774\ub4dc/\ub300\uc2dc\ubcf4\ub4dc/\uc18d\uc131/margin"}}');var d=r(4848),t=r(8453);const i={},o="level",s={},a=[{value:"\ud0c0\uc785",id:"\ud0c0\uc785",level:2},{value:"\uae30\ubcf8\uac12",id:"\uae30\ubcf8\uac12",level:2},{value:"\uc124\uba85",id:"\uc124\uba85",level:2},{value:"\uc0ac\uc6a9 \uc608\uc81c",id:"\uc0ac\uc6a9-\uc608\uc81c",level:2},{value:"\ucc38\uace0 \uc0ac\ud56d",id:"\ucc38\uace0-\uc0ac\ud56d",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"level",children:"level"})}),"\n",(0,d.jsx)(n.h2,{id:"\ud0c0\uc785",children:"\ud0c0\uc785"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"number"})}),"\n",(0,d.jsx)(n.h2,{id:"\uae30\ubcf8\uac12",children:"\uae30\ubcf8\uac12"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"0"})}),"\n",(0,d.jsx)(n.h2,{id:"\uc124\uba85",children:"\uc124\uba85"}),"\n",(0,d.jsx)(n.p,{children:"\ub300\uc2dc\ubcf4\ub4dc\uc758 \uc0ac\uc6a9\uc790 \uad8c\ud55c\uc744 \uc124\uc815\ud569\ub2c8\ub2e4."}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"0"}),": \uac1c\ubc1c\uc790\ubaa8\ub4dc (editor \ucc3d o, \uc0ac\uc774\ub4dc\ubc14 o)"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"1"}),": \ud3b8\uc9d1\ubaa8\ub4dc (editor \ucc3d x, \uc0ac\uc774\ub4dc\ubc14 o)"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"2"}),": \ubdf0\ubaa8\ub4dc (editor \ucc3d x, \uc0ac\uc774\ub4dc\ubc14 x, \uc704\uc82f \ud3b8\uc9d1 \ubd88\uac00\ub2a5)"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\uc0ac\uc6a9-\uc608\uc81c",children:"\uc0ac\uc6a9 \uc608\uc81c"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-javascript",children:'document.addEventListener(\'DOMContentLoaded\', function () {\r\n  let opt = window.localStorage.getItem("dashboard_data"); // \uae30\uc874 \uc815\ubcf4\uac00 \uc788\ub294\uc9c0 \ud655\uc778\r\n \r\n  if (opt == null) {\r\n    IBDashboard.create(document.getElementById("dashboard_data"), {\r\n      options: {\r\n        level: 0 // \uac1c\ubc1c\uc790 \ubaa8\ub4dc\ub85c \uc124\uc815\r\n      },\r\n      ...\r\n    });\r\n  } else {\r\n    opt = JSON.parse(opt);\r\n    opt.options.level = 0; // \uc800\uc7a5\ub41c \uc124\uc815\uc5d0\uc11c level \uac12\uc744 \uac1c\ubc1c\uc790 \ubaa8\ub4dc\ub85c \ubcc0\uacbd\r\n    IBDashboard.create(document.getElementById("dashboard_data"), opt);\r\n  }\r\n});\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\ucc38\uace0-\uc0ac\ud56d",children:"\ucc38\uace0 \uc0ac\ud56d"}),"\n",(0,d.jsx)(n.admonition,{type:"tip",children:(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\ub300\uc2dc\ubcf4\ub4dc\ub97c \ucd08\uae30\ud654\ud558\uac70\ub098 \uc5c5\ub370\uc774\ud2b8\ud560 \ub54c level \uc18d\uc131\uc744 \ubcc0\uacbd\ud558\uc5ec \uc0ac\uc6a9\uc790 \uad8c\ud55c\uc744 \ub3d9\uc801\uc73c\ub85c \uc870\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,d.jsx)(n.li,{children:"\uc800\uc7a5\ub41c \uc124\uc815\uc744 \ub85c\ub4dc\ud560 \ub54c level \uac12\uc744 \uba85\uc2dc\uc801\uc73c\ub85c \uc124\uc815\ud558\uba74 \uae30\uc874 \uc124\uc815\uc744 \ub36e\uc5b4\uc4f8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n"]})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var l=r(6540);const d={},t=l.createContext(d);function i(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);