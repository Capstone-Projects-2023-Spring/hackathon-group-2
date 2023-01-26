"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[3738],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,y=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(y,o(o({ref:t},l),{},{components:r})):n.createElement(y,o({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7066:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={},o=void 0,s={unversionedId:"system-architecture/sequencediagram",id:"system-architecture/sequencediagram",title:"sequencediagram",description:"Sequence Diagram",source:"@site/docs/system-architecture/sequencediagram.md",sourceDirName:"system-architecture",slug:"/system-architecture/sequencediagram",permalink:"/hackathon-group-2/docs/system-architecture/sequencediagram",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/hackathon-group-2/edit/main/documentation/docs/system-architecture/sequencediagram.md",tags:[],version:"current",lastUpdatedBy:"Christine Cho",frontMatter:{},sidebar:"docsSidebar",previous:{title:"classdiagram",permalink:"/hackathon-group-2/docs/system-architecture/classdiagram"},next:{title:"API Specification",permalink:"/hackathon-group-2/docs/category/api-specification"}},c={},u=[],l={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sequence Diagram")),(0,a.kt)("mermaid",{value:'sequenceDiagram\nactor Person\nautonumber\nPerson->>Website: Request site index\nWebsite->>IanAPI: get_syllabi()\nIanAPI->>Website: Return all syllabi\nWebsite->>Person: Render site index\nPerson->>Website: Click a link to a syllabus ID 1\nWebsite->>IanAPI: get_syllabus(1)\nIanAPI->>Website: Return syllabus\nWebsite->>Person: Render syllabus page\nPerson->>Website: Click "Download ICS"\nWebsite->>IanAPI: get_syllabus(1)\nIanAPI->>Website: Return syllabus ID 1\nWebsite->>Person: createCalendar()\n'}))}p.isMDXComponent=!0}}]);