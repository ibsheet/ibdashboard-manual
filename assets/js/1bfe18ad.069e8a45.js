"use strict";(self.webpackChunkibdashboard_guide=self.webpackChunkibdashboard_guide||[]).push([[3037],{8453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>l});var s=n(6540);const d={},r=s.createContext(d);function a(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),s.createElement(r.Provider,{value:i},e.children)}},9496:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"\uac00\uc774\ub4dc/\ub300\uc2dc\ubcf4\ub4dc/API/serialize","title":"serialize","description":"\ud30c\ub77c\ubbf8\ud130","source":"@site/docs/2. \uac00\uc774\ub4dc/1. \ub300\uc2dc\ubcf4\ub4dc/3. API/3. serialize.md","sourceDirName":"2. \uac00\uc774\ub4dc/1. \ub300\uc2dc\ubcf4\ub4dc/3. API","slug":"/\uac00\uc774\ub4dc/\ub300\uc2dc\ubcf4\ub4dc/API/serialize","permalink":"/ibdashboard-manual/docs/\uac00\uc774\ub4dc/\ub300\uc2dc\ubcf4\ub4dc/API/serialize","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"\ubc15\uc885\uad8c","lastUpdatedAt":1744356138000,"sidebarPosition":3,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"deserialize","permalink":"/ibdashboard-manual/docs/\uac00\uc774\ub4dc/\ub300\uc2dc\ubcf4\ub4dc/Static API/deserialize"},"next":{"title":"addWidget","permalink":"/ibdashboard-manual/docs/\uac00\uc774\ub4dc/\ub300\uc2dc\ubcf4\ub4dc/API/addWidget"}}');var d=n(4848),r=n(8453);const a={},l="serialize",t={},o=[{value:"\ud30c\ub77c\ubbf8\ud130",id:"\ud30c\ub77c\ubbf8\ud130",level:2},{value:"\ubc18\ud658\uac12",id:"\ubc18\ud658\uac12",level:2},{value:"\uc124\uba85",id:"\uc124\uba85",level:2},{value:"\uc0ac\uc6a9 \uc608\uc81c",id:"\uc0ac\uc6a9-\uc608\uc81c",level:2},{value:"\uad00\ub828 API",id:"\uad00\ub828-api",level:2},{value:"\ucc38\uace0 \uc0ac\ud56d",id:"\ucc38\uace0-\uc0ac\ud56d",level:2}];function c(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.header,{children:(0,d.jsx)(i.h1,{id:"serialize",children:"serialize"})}),"\n",(0,d.jsx)(i.h2,{id:"\ud30c\ub77c\ubbf8\ud130",children:"\ud30c\ub77c\ubbf8\ud130"}),"\n",(0,d.jsx)(i.p,{children:"\uc5c6\uc74c"}),"\n",(0,d.jsx)(i.h2,{id:"\ubc18\ud658\uac12",children:"\ubc18\ud658\uac12"}),"\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.code,{children:"string"})," - IBDashboard\uc758 \ud604\uc7ac \ubaa8\ub4e0 \uc815\ubcf4\ub97c string \ud615\ud0dc\ub85c \ubc18\ud658"]}),"\n",(0,d.jsx)(i.h2,{id:"\uc124\uba85",children:"\uc124\uba85"}),"\n",(0,d.jsx)(i.p,{children:"IBDashboard\uc758 \ud604\uc7ac \ubaa8\ub4e0 \uc124\uc815 \uc815\ubcf4\ub97c string \ud615\ud0dc\ub85c \uc9c1\ub82c\ud654\ud558\uc5ec \ubc18\ud658\ud569\ub2c8\ub2e4."}),"\n",(0,d.jsx)(i.h2,{id:"\uc0ac\uc6a9-\uc608\uc81c",children:"\uc0ac\uc6a9 \uc608\uc81c"}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-javascript",children:'// \ud604\uc7ac \ub300\uc2dc\ubcf4\ub4dc \uc0c1\ud0dc\ub97c \uc9c1\ub82c\ud654\ud558\uc5ec \uc800\uc7a5\nconst dashboardState = dashboard.serialize();\n\n// \ub85c\uceec \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \uc800\uc7a5\nwindow.localStorage.setItem("dashboard-state", dashboardState);\n'})}),"\n",(0,d.jsx)(i.h2,{id:"\uad00\ub828-api",children:"\uad00\ub828 API"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"deserialize()"}),": \uc9c1\ub82c\ud654\ub41c \ubb38\uc790\uc5f4\uc5d0\uc11c \ub300\uc2dc\ubcf4\ub4dc\ub97c \ubcf5\uc6d0"]}),"\n"]}),"\n",(0,d.jsx)(i.h2,{id:"\ucc38\uace0-\uc0ac\ud56d",children:"\ucc38\uace0 \uc0ac\ud56d"}),"\n",(0,d.jsx)(i.admonition,{type:"tip",children:(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:"\ub300\uc2dc\ubcf4\ub4dc\uc758 \ubaa8\ub4e0 \uc0c1\ud0dc(\ub808\uc774\uc544\uc6c3, \uc704\uc82f \uc124\uc815 \ub4f1)\ub97c JSON \ubb38\uc790\uc5f4\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4."}),"\n",(0,d.jsxs)(i.li,{children:["\uc800\uc7a5\ub41c \uc0c1\ud0dc\ub294 \ub098\uc911\uc5d0 ",(0,d.jsx)(i.code,{children:"deserialize()"})," \uc815\uc801 \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubcf5\uc6d0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,d.jsx)(i.li,{children:"\ubd88\ud544\uc694\ud55c \ub0b4\ubd80 \uc18d\uc131\ub4e4\uc740 \uc9c1\ub82c\ud654 \uacfc\uc815\uc5d0\uc11c \uc81c\uac70\ub429\ub2c8\ub2e4."}),"\n",(0,d.jsx)(i.li,{children:"\ub9f5 \uc704\uc82f\uc758 \uacbd\uc6b0 \ud604\uc7ac \uc704\uce58\uc640 \ud655\ub300/\ucd95\uc18c \uc218\uc900\uacfc \uac19\uc740 \ucd94\uac00 \uc0c1\ud0dc\uac00 \uc800\uc7a5\ub429\ub2c8\ub2e4."}),"\n"]})})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,d.jsx)(i,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}}}]);