"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[7349],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1,description:"What should be in this section."},a="Design Document - Part II API",c={unversionedId:"api-specification/design-api-intro",id:"api-specification/design-api-intro",title:"Design Document - Part II API",description:"What should be in this section.",source:"@site/docs/api-specification/design-api-intro.md",sourceDirName:"api-specification",slug:"/api-specification/design-api-intro",permalink:"/hackathon-group-2/docs/api-specification/design-api-intro",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/hackathon-group-2/edit/main/documentation/docs/api-specification/design-api-intro.md",tags:[],version:"current",lastUpdatedBy:"mgclay",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"What should be in this section."},sidebar:"docsSidebar",previous:{title:"API Specification",permalink:"/hackathon-group-2/docs/category/api-specification"},next:{title:"API 1 - Swagger Petstore",permalink:"/hackathon-group-2/docs/api-specification/openapi-spec"}},s={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"design-document---part-ii-api"},"Design Document - Part II API"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Purpose")),(0,o.kt)("p",null,"This Design Document gives the complete design of the software implementation. This information should be in structured comments (e.g. Javadoc) in the source files. We encourage the use of a documentation generation tool to generate a draft of your API that you can augment to include the following details."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Requirements")),(0,o.kt)("p",null,"In addition to the general documentation requirements the Design Document - Part II API will contain:"),(0,o.kt)("p",null,"General review of the software architecture for each module specified in Design Document - Part I Architecture. Please include your class diagram as an important reference."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For each class define the data fields, methods.")),(0,o.kt)("p",null,"The purpose of the class."),(0,o.kt)("p",null,"The purpose of each data field."),(0,o.kt)("p",null,"The purpose of each method"),(0,o.kt)("p",null,"Pre-conditions if any."),(0,o.kt)("p",null,"Post-conditions if any."),(0,o.kt)("p",null,"Parameters and data types"),(0,o.kt)("p",null,"Return value and output variables"),(0,o.kt)("p",null,"Exceptions thrown","*"," (PLEASE see note below for details)."),(0,o.kt)("p",null,"An example of an auto-generated and then augmented API specification is here (",(0,o.kt)("a",{parentName:"p",href:"https://templeu.instructure.com/courses/106563/files/16928898?wrap=1",title:"Fiscal Design Document 2_API.docx"},"Fiscal Design Document 2","_","API.docx")," )"),(0,o.kt)("p",null,"This group developed their API documentation by hand (",(0,o.kt)("a",{parentName:"p",href:"https://templeu.instructure.com/courses/106563/files/16928899?wrap=1",title:"Design Document Part 2 API-1_MovieMatch.docx"},"Design Document Part 2 API-1","_","MovieMatch.docx")," )"),(0,o.kt)("p",null,"*",'At the top level, or where appropriate, all exceptions should be caught and an error message that is meaningful to the user generated. It is not OK to say ("xxxx has encountered a problem and will now close (OK?)". Error messages and recovery procedures should be documented in the User\u2019s Manual.'))}u.isMDXComponent=!0}}]);