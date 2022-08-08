"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[372],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6777:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},p="Overview",c={unversionedId:"overview",id:"overview",title:"Overview",description:"A high level overview of the Resonate tech stack.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/docs/overview",draft:!1,editUrl:"https://github.com/resonatecoop/documentation/edit/main/docs/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Tutorial - Basics",permalink:"/docs/category/tutorial---basics"}},l={},u=[{value:"Caveats",id:"caveats",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"A high level overview of the Resonate tech stack."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'Note: this is an "ideal" version of the stack. See the section "caveats" at the bottom for more explanation.')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/resonatecoop/id"},"Resonate ID Server")),' - a golang server that acts as our "authentication" portal. It\'s primarily used to provide login and authentication for client apps, which includes the ',(0,o.kt)("inlineCode",{parentName:"p"},"stream")," app (though this version isn't live for Resonate yet), the ",(0,o.kt)("inlineCode",{parentName:"p"},"dashboard"),", and, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"beam"),", which is a third party app."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/resonatecoop/user-api"},"Resonate User API"))," - this is primarily a database that stores all the user information and has some user management methods and functionality associated with it. It also is a golang server."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/resonatecoop/tracks-api"},"Tracks API"))," - a thin nodejs sequelize API that provides access to the tracks database, serving streaming information, etc."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/resonatecoop/stream"},"Stream")," & ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/resonatecoop/dashboard"},"Dashboard"))," - These are two different webapps. The ",(0,o.kt)("inlineCode",{parentName:"p"},"stream")," app is a choo based javascript app that allows streaming, while the ",(0,o.kt)("inlineCode",{parentName:"p"},"dashboard")," app allows track management and upload. The ",(0,o.kt)("inlineCode",{parentName:"p"},"dashboard")," API also contains some code that is partially duplicated with ",(0,o.kt)("inlineCode",{parentName:"p"},"tracks-api")," mentioned above, so there are plans to merge those."),(0,o.kt)("p",null,"There are also some smaller services that handle uploading of files (audio and images) and some other things as well."),(0,o.kt)("p",null,"This can all run on one server (it needs to!) with access to distinct databases on that server. There can be subdomains for the top level domain, that will be needed in this situation (for example, but no guarantee: ",(0,o.kt)("inlineCode",{parentName:"p"},"id.<domain>"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"api.<domain>"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"stream.<domain>"),"."),(0,o.kt)("p",null,"All of these use docker for container management, and are spun up and restarted using docker."),(0,o.kt)("h2",{id:"caveats"},"Caveats"),(0,o.kt)("p",null,"Resonate is currently in the middle of a transition from using WordPress as user management software."))}m.isMDXComponent=!0}}]);