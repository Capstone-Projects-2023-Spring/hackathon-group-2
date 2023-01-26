"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[1936],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,y=p["".concat(o,".").concat(m)]||p[m]||d[m]||c;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8578:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const c={},i=void 0,s={unversionedId:"system-architecture/classdiagram",id:"system-architecture/classdiagram",title:"classdiagram",description:"",source:"@site/docs/system-architecture/classdiagram.md",sourceDirName:"system-architecture",slug:"/system-architecture/classdiagram",permalink:"/hackathon-group-2/docs/system-architecture/classdiagram",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/hackathon-group-2/edit/main/documentation/docs/system-architecture/classdiagram.md",tags:[],version:"current",lastUpdatedBy:"Katrina Janeczko",frontMatter:{},sidebar:"docsSidebar",previous:{title:"design",permalink:"/hackathon-group-2/docs/system-architecture/design"},next:{title:"sequencediagram",permalink:"/hackathon-group-2/docs/system-architecture/sequencediagram"}},o={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("mermaid",{value:'classDiagram\n    web <|-- converter\n    web <|-- api\n    class api{\n        +String BEARER_KEY\n        +query_api(path: String, headers: Dictionary): int, tuple\n        +get_user(): int, tuple\n        +get_syllabi(): int, tuple\n        +get_syllabus(s_id: int): int, tuple\n    }\n    class converter{\n        +createCalendar(events)\n        +createICSFile(calendar)\n    }\n    class web{\n        +cached(f, ttl=60)\n        +expensive()\n        +_f()\n        +filterDate(x, d1, d2)\n        +date(value, format="%Y-%m-%d")\n        +index()\n        +syllabus_detail(syl_id)\n        +download_ics(syl_id)\n        +main()\n        +Flask app\n    }'}))}p.isMDXComponent=!0}}]);