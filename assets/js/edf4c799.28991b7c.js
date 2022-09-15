"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[279],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5043:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:8,title:"Search"},l=void 0,i={unversionedId:"legacy/search",id:"legacy/search",title:"Search",description:"Explore the search repository...",source:"@site/docs/legacy/search.md",sourceDirName:"legacy",slug:"/legacy/search",permalink:"/docs/legacy/search",draft:!1,editUrl:"https://github.com/resonatecoop/search/edit/development/README.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Search"},sidebar:"tutorialSidebar",previous:{title:"Verifiable Credentials",permalink:"/docs/legacy/verifiable-credentials"},next:{title:"Upload",permalink:"/docs/legacy/upload"}},c={},s=[{value:"Stack",id:"stack",level:2},{value:"Models",id:"models",level:2},{value:"Sync data",id:"sync-data",level:2},{value:"Query",id:"query",level:2},{value:"Flow",id:"flow",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Explore the ",(0,a.kt)("code",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/search"},"search"))," repository..."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83d\udee0 ",(0,a.kt)("strong",{parentName:"p"},"Status: Maintenance Mode | Stable")),(0,a.kt)("p",{parentName:"blockquote"},"This project is currently in ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Maintenance_mode"},"maintenance mode")," - users should feel free to continue to use this app and expect bug fixes, but not expect many additional features.")),(0,a.kt)("h1",{id:"resonate-search-demo"},"Resonate Search Demo"),(0,a.kt)("h2",{id:"stack"},"Stack"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mongodb with mongoose and mongoosastic"),(0,a.kt)("li",{parentName:"ul"},"Elasticsearch"),(0,a.kt)("li",{parentName:"ul"},"Koajs")),(0,a.kt)("h2",{id:"models"},"Models"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Track"),(0,a.kt)("li",{parentName:"ul"},"Profile"),(0,a.kt)("li",{parentName:"ul"},"Release")),(0,a.kt)("h2",{id:"sync-data"},"Sync data"),(0,a.kt)("p",null,"To save/update data into elasticsearch, the following script needs to be ran"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"babel-node -r ./node_modules/dotenv-safe/config ./src/scripts/migrate run\n")),(0,a.kt)("p",null,"It's configured to connect to our wordpress db which also have a table for tracks."),(0,a.kt)("h2",{id:"query"},"Query"),(0,a.kt)("p",null,"With no minimum query length, fuzzy query is possible. The results will be merged and sorted by score."),(0,a.kt)("p",null,"Use the 'kind' field to identify the model (track|artist|label|band)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "kind": "track",\n    "title": "capitalism crashed",\n    "display_artist": "AGF",\n    "album": "capitalism crashed",\n    "tags": ["experimental"]\n  }\n]\n')),(0,a.kt)("h2",{id:"flow"},"Flow"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-flow"},"st=>start: Search API\ne=>end: Return error\nquery=>operation: Query\ncond=>condition: Invalid query?\nio=>inputoutput: catch error...\npara=>parallel: Search tracks and profiles\nresponse=>end: Return merged results sorted by score\n\nst->query->cond\ncond(no)->para\ncond(yes)->io->e\npara(path1, bottom)->response(right)\npara(path2, top)\n")))}u.isMDXComponent=!0}}]);