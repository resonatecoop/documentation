"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[774],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4441:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:2,title:"Stream"},l=void 0,i={unversionedId:"legacy/stream",id:"legacy/stream",title:"Stream",description:"Explore the monorepo for the web player, the stream repository...",source:"@site/docs/legacy/stream.md",sourceDirName:"legacy",slug:"/legacy/stream",permalink:"/docs/legacy/stream",draft:!1,editUrl:"https://github.com/resonatecoop/stream/edit/development/README.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Stream"},sidebar:"tutorialSidebar",previous:{title:"Website",permalink:"/docs/legacy/website"},next:{title:"ID Server",permalink:"/docs/legacy/id"}},p={},s=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Quickstart",id:"quickstart",level:3},{value:"Testing on Mobile: Using HTTPS",id:"testing-on-mobile-using-https",level:3},{value:"Nginx",id:"nginx",level:4},{value:"Generating a Custom Certificate",id:"generating-a-custom-certificate",level:4},{value:"Update your Hosts file",id:"update-your-hosts-file",level:4},{value:"Update on your .env file",id:"update-on-your-env-file",level:4},{value:"Run the app!",id:"run-the-app",level:4},{value:"Development",id:"development",level:2},{value:"API",id:"api",level:3},{value:"Other Commands",id:"other-commands",level:3},{value:"Add a package",id:"add-a-package",level:3},{value:"Add a dev dependency",id:"add-a-dev-dependency",level:3},{value:"Build",id:"build",level:3},{value:"Testing",id:"testing",level:2},{value:"Commands",id:"commands",level:2},{value:"Code style",id:"code-style",level:2},{value:"Maintainers",id:"maintainers",level:2},{value:"See Also",id:"see-also",level:2}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Explore the monorepo for the web player, the ",(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/stream"},"stream"))," repository..."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udee0 ",(0,r.kt)("strong",{parentName:"p"},"Status: Maintenance Mode | Stable")),(0,r.kt)("p",{parentName:"blockquote"},"This project is currently in ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Maintenance_mode"},"maintenance mode")," - users should feel free to continue to use this app and expect bug fixes, but not expect many additional features.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("h1",{align:"center"}),(0,r.kt)("strong",null,"Play fair.")),(0,r.kt)("br",null),(0,r.kt)("div",{align:"center"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"https://resonate.coop"},"Website"),(0,r.kt)("span",null," | "),(0,r.kt)("a",{href:"https://www.twitter.com/resonatecoop/"},"Twitter"),(0,r.kt)("span",null," | "),(0,r.kt)("a",{href:"https://github.com/resonatecoop/stream2own/blob/master/CONTRIBUTING.md"},"Contributing"),(0,r.kt)("span",null," | "),(0,r.kt)("a",{href:"https://community.resonate.coop/t/dev-volunteers-needed-to-build-the-resonate-ecosystem/2262"},"Developer Guide"),(0,r.kt)("span",null," | "),(0,r.kt)("a",{href:"https://docs.resonate.coop"},"Resonate Docs"))),(0,r.kt)("br",null),(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://standardjs.com"},(0,r.kt)("img",{src:"https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square",alt:"Standard"}))),(0,r.kt)("p",null,"Resonate is an open-source music streaming service run by a cooperative of artists and software developers."),(0,r.kt)("p",null,"If you want to know what we're building or want to get more involved, head over to the Platform category on our ",(0,r.kt)("a",{parentName:"p",href:"https://community.resonate.is/c/platform/l/latest?board=default"},"forum")," or read the ",(0,r.kt)("a",{parentName:"p",href:"https://community.resonate.coop/t/dev-volunteers-needed-to-build-the-resonate-ecosystem/2262"},"Developer Guide")," in our ",(0,r.kt)("a",{parentName:"p",href:"https://community.resonate.coop/docs"},"Resonate Handbook"),"."),(0,r.kt)("p",null,"If you're looking for a good first task, feel encouraged to take on an un-assigned ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/stream/issues"},"'help wanted' issues"),"."),(0,r.kt)("p",null,"Are you building something using the Resonate ",(0,r.kt)("a",{parentName:"p",href:"#api"},"API")," and would like to request a change? Resonate welcomes #proposals in the ",(0,r.kt)("a",{parentName:"p",href:"https://community.resonate.coop/c/66"},"Co-Operation section of the forum"),"."),(0,r.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#development"},"Development")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#api"},"API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#testing"},"Testing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#commands"},"Commands")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#code-style"},"Code style")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#contributors"},"Contributors")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#see-also"},"See Also"))),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"quickstart"},"Quickstart"),(0,r.kt)("p",null,"Quick-n-dirty instructions to get the player up and running on your computer using http and pointing to the existing production API (see ",(0,r.kt)("a",{parentName:"p",href:"#api"},"API")," to learn more about the API).\nAssumes the latest version of ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"node.js"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Stuck? Make an issue on Github! Curious about the roadmap? Ask in the ",(0,r.kt)("a",{parentName:"em",href:"https://community.resonate.coop/t/development-team/1724"},"forum")),"."),(0,r.kt)("p",null,"Clone the repo and ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," into it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git@github.com:resonatecoop/stream.git\ncd stream\n")),(0,r.kt)("p",null,"Install dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install\n")),(0,r.kt)("p",null,"Create your env file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cp beta/.env.example beta/.env\n")),(0,r.kt)("p",null,"Run the app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm run dev\n")),(0,r.kt)("p",null,"You should see the app running at http://localhost:8080."),(0,r.kt)("p",null,"Try logging in at http://localhost:8080/login."),(0,r.kt)("p",null,"You can run the app at a different port using the command below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm run dev -- --port 8089\n")),(0,r.kt)("p",null,"The embed app (optional)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm run dev:embed\n")),(0,r.kt)("h3",{id:"testing-on-mobile-using-https"},"Testing on Mobile: Using HTTPS"),(0,r.kt)("p",null,"HTTPS is required to test PWAs on mobile. ",(0,r.kt)("a",{parentName:"p",href:"https://web.dev/install-criteria/"},"Read more about Progressive Web Apps"),"."),(0,r.kt)("h4",{id:"nginx"},"Nginx"),(0,r.kt)("p",null,"You can find a reference ",(0,r.kt)("a",{parentName:"p",href:"/docs/nginx/beta.resonate.localhost.conf"},"nginx configuration")," file in the docs.\nNote that the reference is not a complete ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx.conf")," file, it should fit within your existing configuration or be wrapped in a http block directive:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http {\n  server {\n  }\n}\n")),(0,r.kt)("p",null,"In the example ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx.conf"),", note the lines referring to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ssl_certificate_key")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"ssl_certificate_key"),"."),(0,r.kt)("h4",{id:"generating-a-custom-certificate"},"Generating a Custom Certificate"),(0,r.kt)("p",null,"You can generate a custom certificate using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FiloSottile/mkcert"},"mkcert")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"beta.resonate.localhost"),". ",(0,r.kt)("em",{parentName:"p"},"This origin is whitelisted in our CORS config"),"."),(0,r.kt)("p",null,"Generate the certificate (",(0,r.kt)("inlineCode",{parentName:"p"},"cert.pem"),") and key (",(0,r.kt)("inlineCode",{parentName:"p"},"key.pem"),") for ",(0,r.kt)("inlineCode",{parentName:"p"},"beta.resonate.localhost"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"mkcert -key-file key.pem -cert-file cert.pem beta.resonate.localhost\n")),(0,r.kt)("p",null,"In your nginx.conf file, update the ",(0,r.kt)("inlineCode",{parentName:"p"},"ssl_certificate_key")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"ssl_certificate_key")," to refer to your new key and certificate files."),(0,r.kt)("h4",{id:"update-your-hosts-file"},"Update your Hosts file"),(0,r.kt)("p",null,"Update your hosts file to include:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"127.0.0.1       beta.resonate.localhost\n")),(0,r.kt)("h4",{id:"update-on-your-env-file"},"Update on your .env file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"APP_DOMAIN=beta.resonate.localhost\nAPP_HOST=https://beta.resonate.localhost\n")),(0,r.kt)("h4",{id:"run-the-app"},"Run the app!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm run dev\n")),(0,r.kt)("p",null,"You should now see the player running on ",(0,r.kt)("a",{parentName:"p",href:"https://beta.resonate.localhost"},"https://beta.resonate.localhost")," or"),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("h3",{id:"api"},"API"),(0,r.kt)("p",null,"If you want to build on the API for personal use, consider checking the ",(0,r.kt)("a",{parentName:"p",href:"https://community.resonate.coop/c/platform/52"},"backlog in our community forum"),".\nThe Tracks API repo is currently private, but you may ask for access in the forum."),(0,r.kt)("p",null,"The Swagger API documentation is currently in flux and split across the ",(0,r.kt)("a",{parentName:"p",href:"https://api.resonate.coop/v2/docs"},"Resonate Search API")," (see the top right corner for the different services) and ",(0,r.kt)("a",{parentName:"p",href:"https://api.resonate.ninja/#/"},"Resonate Service Documentation: User"),"."),(0,r.kt)("h3",{id:"other-commands"},"Other Commands"),(0,r.kt)("h3",{id:"add-a-package"},"Add a package"),(0,r.kt)("p",null,"Installing one of the monorepo packages into one of the other ones is as easy as this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'npm install @resonate/button --workspace "beta"\n')),(0,r.kt)("p",null,"This installs ",(0,r.kt)("inlineCode",{parentName:"p"},"@resonate/button")," into the ",(0,r.kt)("inlineCode",{parentName:"p"},"beta")," package."),(0,r.kt)("h3",{id:"add-a-dev-dependency"},"Add a dev dependency"),(0,r.kt)("p",null,"Here's how you would add gulp so that it can be used in any package in this repo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -D gulp\n")),(0,r.kt)("h3",{id:"build"},"Build"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build\n")),(0,r.kt)("p",null,"To compile a specific package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'npm run build --workspace "@resonate/rangeslider"\n')),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("p",null,"Run all tests (lint, dependency-check)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm test\n")),(0,r.kt)("p",null,"Test a specific component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'npm run test --workspace "@resonate/player-component"\n')),(0,r.kt)("p",null,"A package can have browser tests (tape-run)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'npm run test:browser --workspace "@resonate/api-factory-generator"\n')),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$ npm run dev")),(0,r.kt)("td",{parentName:"tr",align:null},"Start beta app development server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$ npm test")),(0,r.kt)("td",{parentName:"tr",align:null},"Lint, validate deps & run dependency-check for all packages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$ npm run build")),(0,r.kt)("td",{parentName:"tr",align:null},"Compile all beta app files into ",(0,r.kt)("inlineCode",{parentName:"td"},"beta/dist/"))))),(0,r.kt)("h2",{id:"code-style"},"Code style"),(0,r.kt)("p",null,"We use ",(0,r.kt)("a",{parentName:"p",href:"https://eslint.org/"},"eslint")," together with the ",(0,r.kt)("a",{parentName:"p",href:"https://standardjs.com/"},"standard")," config as a linter and javascript style guide.\nMake sure to add appropriate plugin for your editor, unless it is already supported out-of-box.\nIt can also be handy to install the ",(0,r.kt)("a",{parentName:"p",href:"https://pre-commit.com/"},"pre-commit hook")," (see ",(0,r.kt)("inlineCode",{parentName:"p"},".pre-commit-config.yaml"),") to automatically apply the standard style."),(0,r.kt)("h2",{id:"maintainers"},"Maintainers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Augustin Godiscal ",(0,r.kt)("a",{parentName:"li",href:"mailto:auggod@resonate.is"},"auggod@resonate.is")),(0,r.kt)("li",{parentName:"ul"},"Marie ",(0,r.kt)("a",{parentName:"li",href:"mailto:marie@resonate.is"},"marie@resonate.is"))),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/choojs/choo"},"choo")," - sturdy 4kb frontend framework"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/choojs/nanohtml"},"nanohtml")," - HTML template strings for the Browser with support for Server Side Rendering in Node.\nstrings"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/choojs/nanocomponent"},"nanocomponent")," - create performant HTML components"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tachyons-css/tachyons"},"tachyons")," - functional CSS for\nhumans")))}c.isMDXComponent=!0}}]);