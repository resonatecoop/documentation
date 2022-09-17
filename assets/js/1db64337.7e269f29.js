"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[372],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(a),d=r,u=m["".concat(p,".").concat(d)]||m[d]||h[d]||n;return a?o.createElement(u,s(s({ref:t},c),{},{components:a})):o.createElement(u,s({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<n;l++)s[l]=a[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6777:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var o=a(7462),r=(a(7294),a(3905));const n={sidebar_position:1},s="Overview",i={unversionedId:"overview",id:"overview",title:"Overview",description:"A high level overview of the Resonate tech stack. The What does a professional DSP look like page provides a tentative roadmap of our long-term goals. To gain a better understanding of our immediate goals and tasks, check out our Public Product Backlog.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/docs/overview",draft:!1,editUrl:"https://github.com/resonatecoop/documentation/edit/main/docs/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Active Development",permalink:"/docs/category/active-development"}},p={},l=[{value:"Active Development",id:"active-development",level:3},{value:"Legacy Assets on Live Servers",id:"legacy-assets-on-live-servers",level:3}],c={toc:l};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"A high level overview of the Resonate tech stack. The ",(0,r.kt)("a",{parentName:"p",href:"https://community.resonate.coop/t/resonate-what-does-a-professional-dsp-look-like/2837"},"What does a professional DSP look like")," page provides a tentative roadmap of our long-term goals. To gain a better understanding of our immediate goals and tasks, check out our ",(0,r.kt)("a",{parentName:"p",href:"https://mattermost.resonate.coop/plugins/focalboard/workspace/gr3aqjbmw3d7fp3wukfw7hhppr/shared/bzkz3bnxxsbny3doh9aqhqy8cth/vzfpkzytdq3rkfjjwzagshoyrho?r=kwx8xtyxwcpmqsnh67iz8x74p7a"},"Public Product Backlog"),"."),(0,r.kt)("p",null,"In September of 2022, Resonate ",(0,r.kt)("a",{parentName:"p",href:"https://community.resonate.coop/t/dev-decisions-log/3136"},"set a new goal"),": to create a functional development environment and to ",(0,r.kt)("a",{parentName:"p",href:"https://mattermost.resonate.coop/boards/workspace/gr3aqjbmw3d7fp3wukfw7hhppr/bzkz3bnxxsbny3doh9aqhqy8cth/vzfpkzytdq3rkfjjwzagshoyrho/cnxsmedm3p7n8mff6dbda8q5i5y"},"simplify the entire tech stack"),". This is to prepare Resonate to meet the needs of the ",(0,r.kt)("a",{parentName:"p",href:"https://mattermost.resonate.coop/boards/workspace/gr3aqjbmw3d7fp3wukfw7hhppr/bzkz3bnxxsbny3doh9aqhqy8cth/vzfpkzytdq3rkfjjwzagshoyrho/ce533e4ndgjnxxr9xgjri3e9x6y"},"DSP Product Development Plan"),"."),(0,r.kt)("p",null,"As a result, the assets that are currently on our live servers should be considered a prototype. These legacy assets are more or less considered to be in Maintenance Mode as we consolidate the server API into one repository: ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/resonatecoop/api"},"api")),". Initially, we'll move all legacy JavaScript microservices into this consolidated repository, following that, the server assets written in Go (namely ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/resonatecoop/id"},"id"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/resonatecoop/user-api"},"user-api")),") will be incorporated/adopted as well."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The goal"),": a consolidated back-end API\xa0one Docker command to spin up the whole back-end, in a shippable package. We want to ship to one container and we want to have it be easy to install, plug and play. This will in tandem helping us further grow our open source ecosystem, speed up development for the long-term, and facilitate onboarding of new dev contributors."),(0,r.kt)("h3",{id:"active-development"},"Active Development"),(0,r.kt)("p",null,"Resonate's API is undergoing a consolidation phase, pulling in functionality from multiple legacy repositories into one, the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/resonatecoop/api"},"api")),". The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/resonatecoop/api"},"api"))," repository is experimental, and under very active development - expect things to change rapidly. The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/resonatecoop/beam"},"beam"))," app (an Electron app written in TypeScript/React) can be run in the web browser, and will eventually replace the live web player. As we develop and build out ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/resonatecoop/api"},"api")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/resonatecoop/beam"},"beam"))," will be the go-to front-end client for testing. Because we aim to build an open-source ",(0,r.kt)("a",{parentName:"p",href:"https://community.resonate.coop/t/resonate-what-does-a-professional-dsp-look-like/2837"},"Accounting Engine")," with automatic reporting with digestion of ",(0,r.kt)("a",{parentName:"p",href:"https://mattermost.resonate.coop/boards/workspace/gr3aqjbmw3d7fp3wukfw7hhppr/bzkz3bnxxsbny3doh9aqhqy8cth/vzfpkzytdq3rkfjjwzagshoyrho/ccp8xbk8jsjg83xcs6qaauydw6y"},"DDEX Electronic Release Notification Message Suite Standard (ERN)")," data, the current focus is primarily on the back-end."),(0,r.kt)("p",null,"That being said, some of this work can occur in parallel. For volunteers looking to get their toes wet or to tackle a quick issue, helping out with our actively maintained front-end clients (",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/resonatecoop/beam"},"beam"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/resonatecoop/mobile"},"mobile")),") would be massively helpful. Check out the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/beam/projects/1"},"Beam Project Board")," or the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/mobile/projects/1"},"Mobile Project Board")," to get a better idea of prioritization. If you're a volunteer feeling rather ambitious, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/orgs/resonatecoop/projects/11"},"API Project Board")," for an idea of issue/task prioritization for the back-end."),(0,r.kt)("p",null,"See something in this documentation that could be improved or is out-of-date? Click the ",(0,r.kt)("strong",{parentName:"p"},"Edit this page")," button at the bottom of any page on this website to submit a correction/improvement, or alternatively create an issue on the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/resonatecoop/documentation"},"documentation"))," repository."),(0,r.kt)("h3",{id:"legacy-assets-on-live-servers"},"Legacy Assets on Live Servers"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/resonatecoop/id"},"Resonate ID Server")),' - a golang server that acts as our "authentication" portal. It\'s primarily used to provide login and authentication for client apps, which includes the ',(0,r.kt)("inlineCode",{parentName:"p"},"stream")," app (though this version isn't live for Resonate yet), the ",(0,r.kt)("inlineCode",{parentName:"p"},"dashboard"),", and, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"beam"),", which is a third party app."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/resonatecoop/user-api"},"Resonate User API"))," - this is primarily a database that stores all the user information and has some user management methods and functionality associated with it. It also is a golang server."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/resonatecoop/tracks-api"},"Tracks API"))," - a thin nodejs sequelize API that provides access to the tracks database, serving streaming information, etc."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/resonatecoop/stream"},"Stream")," & ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/resonatecoop/dashboard"},"Dashboard"))," - These are two different webapps. The ",(0,r.kt)("inlineCode",{parentName:"p"},"stream")," app is a choo based javascript app that allows streaming, while the ",(0,r.kt)("inlineCode",{parentName:"p"},"dashboard")," app allows track management and upload. The ",(0,r.kt)("inlineCode",{parentName:"p"},"dashboard")," API also contains some code that is partially duplicated with ",(0,r.kt)("inlineCode",{parentName:"p"},"tracks-api")," mentioned above, so there are plans to merge those."),(0,r.kt)("p",null,"There are also some smaller services that handle uploading of files (audio and images) and some other things as well."),(0,r.kt)("p",null,"This can all run on one server (it needs to!) with access to distinct databases on that server. There can be subdomains for the top level domain, that will be needed in this situation (for example, but no guarantee: ",(0,r.kt)("inlineCode",{parentName:"p"},"id.<domain>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"api.<domain>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"stream.<domain>"),"."),(0,r.kt)("p",null,"All of these use docker for container management, and are spun up and restarted using docker."))}h.isMDXComponent=!0}}]);