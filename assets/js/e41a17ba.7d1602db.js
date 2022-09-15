"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[690],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=l.createContext({}),u=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||r;return a?l.createElement(k,o(o({ref:t},c),{},{components:a})):l.createElement(k,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<r;u++)o[u]=a[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2759:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var l=a(7462),n=(a(7294),a(3905));const r={sidebar_position:9,title:"Upload"},o=void 0,i={unversionedId:"legacy/upload",id:"legacy/upload",title:"Upload",description:"Explore the upload repository...",source:"@site/docs/legacy/upload.md",sourceDirName:"legacy",slug:"/legacy/upload",permalink:"/docs/legacy/upload",draft:!1,editUrl:"https://github.com/resonatecoop/upload/edit/main/README.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Upload"},sidebar:"tutorialSidebar",previous:{title:"Search",permalink:"/docs/legacy/search"},next:{title:"Audio Process Queue",permalink:"/docs/legacy/audio-process-queue"}},p={},u=[{value:"What you&#39;ll need",id:"what-youll-need",level:2},{value:"Installation",id:"installation",level:2},{value:"Build (babel)",id:"build-babel",level:2},{value:"Env",id:"env",level:2},{value:"Development",id:"development",level:2},{value:"Docker",id:"docker",level:2},{value:"Test",id:"test",level:2},{value:"Limits",id:"limits",level:2},{value:"See also",id:"see-also",level:2}],c={toc:u};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Explore the ",(0,n.kt)("code",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/upload"},"upload"))," repository..."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83d\udee0 ",(0,n.kt)("strong",{parentName:"p"},"Status: Maintenance Mode | Stable")),(0,n.kt)("p",{parentName:"blockquote"},"This project is currently in ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Maintenance_mode"},"maintenance mode")," - users should feel free to continue to use this app and expect bug fixes, but not expect many additional features.")),(0,n.kt)("h1",{id:"upload-tool"},"Upload Tool"),(0,n.kt)("p",null,"Upload files to backblaze, process audio..."),(0,n.kt)("h2",{id:"what-youll-need"},"What you'll need"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Node.js (12.x)"),(0,n.kt)("li",{parentName:"ul"},"Mysql"),(0,n.kt)("li",{parentName:"ul"},"Redis (for queue system jobs)"),(0,n.kt)("li",{parentName:"ul"},"Backlblaze account"),(0,n.kt)("li",{parentName:"ul"},"Email account for sending/receiving email notifications (this should be optional / long running jobs or delayed)")),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"npm install\n")),(0,n.kt)("h2",{id:"build-babel"},"Build (babel)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build\n")),(0,n.kt)("h2",{id:"env"},"Env"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cp .env.example .env\n")),(0,n.kt)("h2",{id:"development"},"Development"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"npm run dev\n")),(0,n.kt)("h2",{id:"docker"},"Docker"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose up -d upload\n")),(0,n.kt)("h2",{id:"test"},"Test"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"npm test\n")),(0,n.kt)("h2",{id:"limits"},"Limits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2000 MB.")),(0,n.kt)("h2",{id:"see-also"},"See also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://backblaze.com"},"backblaze")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yakovkhalinsky/backblaze-b2"},"backblaze-b2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/OptimalBits/bull"},"bull")," Queue system"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/taskforcesh/taskforce-connector"},"taskforce-connector"))))}s.isMDXComponent=!0}}]);