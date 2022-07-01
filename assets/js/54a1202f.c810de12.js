"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[313],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1495:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={sidebar_position:4,title:"ID Server"},p=void 0,s={unversionedId:"basics/id",id:"basics/id",title:"ID Server",description:"Explore the id server repository...",source:"@site/docs/basics/id.md",sourceDirName:"basics",slug:"/basics/id",permalink:"/docs/basics/id",draft:!1,editUrl:"https://github.com/resonatecoop/id/edit/develop/README.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"ID Server"},sidebar:"tutorialSidebar",previous:{title:"Website",permalink:"/docs/basics/website"},next:{title:"User API",permalink:"/docs/basics/user-api"}},u={},c=[{value:"Setup",id:"setup",level:2},{value:"Config Store",id:"config-store",level:3},{value:"Data Store",id:"data-store",level:3},{value:"User API",id:"user-api",level:4},{value:"Compile",id:"compile",level:3},{value:"Run",id:"run",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Develop",id:"develop",level:2}],d={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Explore the ",(0,a.kt)("code",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/id"},"id"))," server repository..."),(0,a.kt)("h1",{id:"resonate-id"},"Resonate ID"),(0,a.kt)("p",null,"Resonate's ID server is a Go OAuth2 Server based on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RichardKnop/go-oauth2-server"},"RichardKnop/go-oauth2-server"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#setup"},"Setup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#run"},"Run")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#deploy"},"Deploy"))),(0,a.kt)("p",null,"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"docs/oauth2.md"},"OAuth 2.0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"docs/environment.md"},"Environment")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"docs/docker.md"},"Docker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"docs/plugins.md"},"Plugins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"docs/tests.md"},"Tests"))),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"There are three setup tasks when working with the ID server"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Setup the config store"),(0,a.kt)("li",{parentName:"ol"},"Setup the data stores"),(0,a.kt)("li",{parentName:"ol"},"Compile the server")),(0,a.kt)("h3",{id:"config-store"},"Config Store"),(0,a.kt)("p",null,"The ID server uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/etcd-io/etcd"},"etcd")," as a config store."),(0,a.kt)("p",null,"Install etcd (if needed, and platform specific) and run it"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brew install etcd\netcd\n")),(0,a.kt)("p",null,"Load the sample config and verify it"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'etcdctl put /config/go_oauth2_server.json "$(cat ./config.sample.json)"\netcdctl get /config/go_oauth2_server.json\n')),(0,a.kt)("h3",{id:"data-store"},"Data Store"),(0,a.kt)("p",null,"At some point, we will be merging both the ID server and User API repos. Until then, the ID server needs a direct database connection to the User API."),(0,a.kt)("p",null,"Using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/user-api-client"},"resonatecoop/user-api-client"),", the ID server can also make RESTful requests to the User API."),(0,a.kt)("h4",{id:"user-api"},"User API"),(0,a.kt)("p",null,"(How to setup the User API locally, check out ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/user-api"},"user-api")," github repository)"),(0,a.kt)("h3",{id:"compile"},"Compile"),(0,a.kt)("p",null,"To compile the server run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go install .\n")),(0,a.kt)("h2",{id:"run"},"Run"),(0,a.kt)("p",null,"Run the server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go-oauth2-server runserver\n")),(0,a.kt)("h2",{id:"deploy"},"Deploy"),(0,a.kt)("p",null,"(How to deploy to staging and production using ",(0,a.kt)("a",{parentName:"p",href:"docs/docker.md"},"docker"),")"),(0,a.kt)("h2",{id:"develop"},"Develop"),(0,a.kt)("p",null,"Add a git hook for proper formatting"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./add_gofmt_hook.sh\n")))}m.isMDXComponent=!0}}]);