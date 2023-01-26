"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[4195],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||l;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8140:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var a=n(7294),r=n(6010),l=n(9960),o=n(2263),i=n(782),c=n(7462),s=n(3905);const p={toc:[{value:"Mary, Katrina, Nathaniel, Christine, Harrison",id:"mary-katrina-nathaniel-christine-harrison",level:2}]};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,c.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"ics-file-generator"},"ICS File Generator"),(0,s.kt)("h2",{id:"mary-katrina-nathaniel-christine-harrison"},"Mary, Katrina, Nathaniel, Christine, Harrison"),(0,s.kt)("p",null,"This project allows a user to keep track of deadlines for a specific class. By accessing the web application, the user can select a course and see future and past events with the date and a description of the event. They can also download a .ics file (iCalendar) to import all important events into their Google or Outlook calendar."),(0,s.kt)("p",null,'To access the class and sequence diagrams, select "Documentation" and then "System Architecture", and select the appropriate page.'),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Instructions For Use")),(0,s.kt)("p",null,"One must first have the following libraries installed on their machine:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"ics"),(0,s.kt)("li",{parentName:"ul"},"api"),(0,s.kt)("li",{parentName:"ul"},"flask")),(0,s.kt)("p",null,"To install, use the following terminal command:"),(0,s.kt)("p",null,"pip3 install ","[name]"),(0,s.kt)("p",null,"Clone the repository and first run api.py. Then run web.py, and access ",(0,s.kt)("a",{parentName:"p",href:"http://127.0.0.1:5000"},"http://127.0.0.1:5000")," on your web browser. You now have access to the Syllabus Explorer."),(0,s.kt)("p",null,"From the homepage, you can select the course for which you want to see due dates. Once you've selected the course, you'll see a page with the current date and time, as well as past and future events in the course. Scrolling through the tables will allow you to see all events in the semester."),(0,s.kt)("p",null,"At the top of the course page, you'll see three links."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Download ICS"),(0,s.kt)("p",{parentName:"li"},"By clicking this link, a .ics will be downloaded to your machine. This file is compatible with both Google and Outlook calendar apps.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Google Calendar"),(0,s.kt)("p",{parentName:"li"},"By clicking this link, you will be redirected to Google Calendar, where you can import the .ics file to automatically be added to your calendar.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Outlook Calendar"),(0,s.kt)("p",{parentName:"li"},"By clicking this link, you will be redirected to Microsoft Calendar, where you can import the .ics file to automatically be added to your calendar."))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Adding ics file to Google Calendar")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},'To add the ics file to your Google Calendar, after clicking the link, select the plus sign next to "Other Calendars" on the lower left side of the page.')),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/65423598/213352264-2f0c2af9-aef2-42ef-9e18-80ab0294984c.png",alt:"image"})),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},'Next, select the "import" option from the dropdown menu.'),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/65423598/213352399-ec2ee19d-cbba-4701-9694-f3d95c833d3a.png",alt:"image"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Select the .ics file from the appropriate location on your computer, and select import. Your calendar should now populate with the events from the file!"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Adding ics file to Outlook Calendar")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},'To add the ics file to your Outlook Calendar, after clicking the link, select the "Add Calendar" button on the lower left side of the page.')),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/65423598/213353236-dc7a438b-4a29-4516-9426-051f5209bb4c.png",alt:"image"})),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},'Next, select the "Upload from file" option in the pop up window.')),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/65423598/213353362-edce9a75-2c06-4f15-9dcc-61866458c28e.png",alt:"image"})),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Select browse, and choose the .ics file from the appropriate location on your computer. Select import, and your calendar will now be populated with the events from the file.")))}function m(){return a.createElement("div",{className:"container",style:{marginTop:"50px",marginBottom:"100px"}},a.createElement(u,null))}u.isMDXComponent=!0;const h="heroBanner_qdFl",d="buttons_AeoN";function f(){const{siteConfig:e}=(0,o.Z)();return a.createElement("header",{className:(0,r.Z)("hero hero--primary",h)},a.createElement("div",{className:"container"},a.createElement("h1",{className:"hero__title"},e.title),a.createElement("p",{className:"hero__subtitle"},e.tagline),a.createElement("div",{className:d},a.createElement(l.Z,{className:"button button--secondary button--lg",to:"/tutorial/intro"},"Docusaurus Tutorial - 5min \u23f1\ufe0f"))))}function k(){const{siteConfig:e}=(0,o.Z)();return a.createElement(i.Z,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />"},a.createElement(f,null),a.createElement("main",null,a.createElement(m,null)))}}}]);