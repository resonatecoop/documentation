"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[694],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3578:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),l=["components"],i={sidebar_position:1,title:"Beam"},p=void 0,s={unversionedId:"ecosystem/beam",id:"ecosystem/beam",title:"Beam",description:"Explore the beam desktop app repository...",source:"@site/docs/ecosystem/beam.md",sourceDirName:"ecosystem",slug:"/ecosystem/beam",permalink:"/docs/ecosystem/beam",draft:!1,editUrl:"https://github.com/simonv3/beam/edit/main/README.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Beam"},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Ecosystem",permalink:"/docs/category/tutorial---ecosystem"},next:{title:"Mobile",permalink:"/docs/ecosystem/mobile"}},c={},u=[{value:"Development",id:"development",level:2},{value:"Logging in.",id:"logging-in",level:3},{value:"Production build",id:"production-build",level:3},{value:"Tests",id:"tests",level:3},{value:"Electron",id:"electron",level:2},{value:"Preparing a release",id:"preparing-a-release",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Explore the ",(0,o.kt)("code",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/simonv3/beam"},"beam"))," desktop app repository..."),(0,o.kt)("h1",{id:"beam"},"Beam"),(0,o.kt)("p",null,"This is a music player that uses Resonate's API."),(0,o.kt)("p",null,"This project was bootstrapped with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app"},"Create React App"),"."),(0,o.kt)("p",null,"View the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/simonv3/beam/projects/1"},"project board")," where work is tracked for this repository."),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("p",null,"Install yarn if you don't yet have it on your machine by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx install yarn\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:simonv3/beam.git\ncd beam\nyarn install\nyarn start\n")),(0,o.kt)("p",null,"Runs the app in the development mode.\\\nOpen ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080")," to view it in the browser."),(0,o.kt)("p",null,"The page will reload if you make edits.\\\nYou will also see any lint errors in the console."),(0,o.kt)("h3",{id:"logging-in"},"Logging in."),(0,o.kt)("p",null,"By default, most of the app will work without logging in, but if you want to log in you'll need a ",(0,o.kt)("inlineCode",{parentName:"p"},"client_secret"),". Logging in will let you play complete songs, manage your playlists, etc."),(0,o.kt)("p",null,"First, create a local .env file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cp .env .env.local\n")),(0,o.kt)("p",null,"Then, you'll need to set ",(0,o.kt)("inlineCode",{parentName:"p"},"REACT_APP_CLIENT_SECRET")," to be the client \\\nsecret for your client app. If you're working on beam directly, \\\nyou can message ",(0,o.kt)("a",{parentName:"p",href:"https://community.resonate.is/u/psi/summary"},"Si")," \\\nto get a client secret."),(0,o.kt)("h3",{id:"production-build"},"Production build"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build\n")),(0,o.kt)("p",null,"You can then run that locally with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn serve\n")),(0,o.kt)("h3",{id:"tests"},"Tests"),(0,o.kt)("p",null,"for unit tests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn test\n")),(0,o.kt)("p",null,"for cypress tests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn cypress:open\n")),(0,o.kt)("h2",{id:"electron"},"Electron"),(0,o.kt)("p",null,"Set up using ",(0,o.kt)("a",{parentName:"p",href:"https://mmazzarolo.com/blog/2021-08-12-building-an-electron-application-using-create-react-app/"},"this blog post")),(0,o.kt)("p",null,"To try it locally do:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn electron:start\n")),(0,o.kt)("p",null,"To build it for your system:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn electron:package:<linux|mac|windows>\n")),(0,o.kt)("h2",{id:"preparing-a-release"},"Preparing a release"),(0,o.kt)("p",null,"In a distinct commit that ",(0,o.kt)("em",{parentName:"p"},"just")," bumps the version."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Edit the package.json with the new version ",(0,o.kt)("inlineCode",{parentName:"li"},"vx.x.x"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"git commit -am vx.x.x")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"git tag vx.x.x")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"git push && git push --tags"))))}d.isMDXComponent=!0}}]);