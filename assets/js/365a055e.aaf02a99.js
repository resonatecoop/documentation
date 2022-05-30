"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[158],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9055:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:6},s=void 0,p={unversionedId:"basics/verifiable-credentials",id:"basics/verifiable-credentials",title:"verifiable-credentials",description:"Explore the Verifiable Credentials Reference Implementation in the verifiable-credentials repository...",source:"@site/docs/basics/verifiable-credentials.md",sourceDirName:"basics",slug:"/basics/verifiable-credentials",permalink:"/docs/docs/basics/verifiable-credentials",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"user-api-client",permalink:"/docs/docs/basics/user-api-client"},next:{title:"Congratulations!",permalink:"/docs/docs/basics/congratulations"}},c={},u=[{value:"Resonate Verifiable Credentials",id:"resonate-verifiable-credentials",level:2},{value:"Use Case",id:"use-case",level:3},{value:"Running the implementation",id:"running-the-implementation",level:3},{value:"Application",id:"application",level:4},{value:"VC Layer API",id:"vc-layer-api",level:4},{value:"VC User API",id:"vc-user-api",level:4},{value:"Service",id:"service",level:4},{value:"Using the implementation",id:"using-the-implementation",level:3},{value:"License",id:"license",level:3}],d={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Explore the Verifiable Credentials Reference Implementation in the ",(0,a.kt)("code",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/verifiable-credentials"},"verifiable-credentials"))," repository..."),(0,a.kt)("h2",{id:"resonate-verifiable-credentials"},"Resonate Verifiable Credentials"),(0,a.kt)("p",null,"This is Resonate's reference implementation of the ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/"},"Verifiable Credentials Data Model"),' ("VC"). It is intended to explain the theory of our implementation (our "VC Architecture") and provide a working example.'),(0,a.kt)("p",null,"There are four layers to the implementation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Application (vc-app). This is a reference implementation for how Resonate Applications, particularly our player, will interact with the VC Architecture. It is a Node.js (Express) app. An example of a production application in this layer is the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/user-api"},"Resonate Player"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"VC Layer (vc-layer-api). This is a dummy VC layer API provided by ",(0,a.kt)("a",{parentName:"p",href:"https://verifiablecredentials.info/"},"Verifiable Credentials Ltd"),", containing dummy endpoints performing the following functions:"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Issuer"),(0,a.kt)("li",{parentName:"ul"},"Holder"),(0,a.kt)("li",{parentName:"ul"},"Verifier")),(0,a.kt)("p",null,"For definitions of these concepts, and descriptions of how they work together, please see the ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/"},"Verifiable Credentials Data Model"),"."),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"User API (vc-user-api). This is a reference implementation for how the Resonate User API will interact with the VC Architecture. It is a Node.js app. The production ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/user-api"},"User API")," is also open source, albeit currently being overhauled (the published repository will soon be significantly updated, including the production version of this reference) ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Service (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paviliondev/discourse-verifiable-credentials"},"discourse-verifiable-credentials"),"). This is a reference implementation for how the Resonate VC Architecture will be used by services, both inside and outside the Resonate ecosystem. It is an open source ",(0,a.kt)("a",{parentName:"p",href:"https://discourse.org"},"Discourse")," Plugin that generically implements the VC Verification, with a specific implementation of Resonate's VC implementation."))),(0,a.kt)("h3",{id:"use-case"},"Use Case"),(0,a.kt)("p",null,"The reference implementation contains a complete and working example of the reference use case:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Verifying whether a person has paid for content produced by, or performances conducted by, an artist.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Granting access to restricted content and engagement based on the verification."))),(0,a.kt)("p",null,"A few things to note about this use case:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The granting of the credential can occur at various places in the Resonate ecosystem, and / or via Resonate partner organisations.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Any service, whether controlled by Resonate or not, can use credentials produced by the Resonate VC Architecture.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Resonate Verifiable Credentials contain metadata that can be further for more granular or varied access depending on the relevant resource policy of the Service."))),(0,a.kt)("h3",{id:"running-the-implementation"},"Running the implementation"),(0,a.kt)("p",null,"To see the reference implementation in action you need to run all four layers. Open a new terminal for each and leave it running"),(0,a.kt)("h4",{id:"application"},"Application"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"## From this repositories' base directory\ncd vc-app\nnpm install\nnpm start\n")),(0,a.kt)("h4",{id:"vc-layer-api"},"VC Layer API"),(0,a.kt)("p",null,'The instructions on how to set this up are in the document "Installing_the_Dummy_Verifiable_Credentials_Layer.docx", see "Installation Instructions". Once you have your dummy wallet in your home directory, the ',(0,a.kt)("inlineCode",{parentName:"p"},"node-red"),' server running, and the "DummyVCLayer.json" installed leave this server running.'),(0,a.kt)("p",null,"Make sure you run ",(0,a.kt)("inlineCode",{parentName:"p"},"node-red")," in the same directory where your ",(0,a.kt)("inlineCode",{parentName:"p"},"VCredentials.json")," file is located."),(0,a.kt)("h4",{id:"vc-user-api"},"VC User API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"## From this repositories' base directory\ncd vc-user-api\nnpm install\nnode app.js\n")),(0,a.kt)("h4",{id:"service"},"Service"),(0,a.kt)("p",null,"Set up Discourse locally following the relevant guide in ",(0,a.kt)("a",{parentName:"p",href:"https://meta.discourse.org/tag/dev-install"},"this list"),", then move the discourse-verifiable-credentials folder in your local Discourse ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," folder."),(0,a.kt)("p",null,"Before you start the server, create yourself an admin user, if you haven't already"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rake admin:create\n")),(0,a.kt)("p",null,"Restart the server, then create a session with the admin user by going to\n",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/session/YOUR_USERNAME/become")," (change YOUR_USERNAME to the username of the admin user you created)."),(0,a.kt)("p",null,"You should now be logged into your local discourse as an admin user."),(0,a.kt)("h3",{id:"using-the-implementation"},"Using the implementation"),(0,a.kt)("p",null,"Once you have the implementation running locally (see above; you should have four seperate apps running), you can use the implementation like so"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'In the Application you should see a Player UI with a "Purchase" action. Purchasing an Album is one way a credential can be obtained in the Resonate ecosystem. Click the "Purchase button". Once the album is purchased the Application interacts with the VC Layer to issue the relevant credential.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Then go over to your local Discourse instance running the discourse-verifiable-credentials plugin. As an admin, create a group for the artist who made the Album and set the "Membership > Access" permissions to "Allow users to send membership requests to group owners"')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Open an incognito window and create a new (non-admin) user account by signing up normally, then navigate to the page of the group you created in 2. You should see a "Verify Credential" button beneath the group description.'))),(0,a.kt)("p",null,'When you click the "Verify Credential" button the Discourse Plugin will use the VC Layer (both the Holder\'s wallet and the Verifier) to verify that the user has the relevant credential, and add them to the group if they do.'),(0,a.kt)("h3",{id:"license"},"License"),(0,a.kt)("p",null,"This reference implementation has been prepared by ",(0,a.kt)("a",{parentName:"p",href:"https://thepavilion.io"},"Pavilion")," on behalf of Resonate. It includes software provided by ",(0,a.kt)("a",{parentName:"p",href:"https://verifiablecredentials.info/"},"Verifiable Credentials Ltd")," and ",(0,a.kt)("a",{parentName:"p",href:"https://thepavilion.io"},"Pavilion Community Ltd")," in the form of git submodules. Those submodules remain the property of their creators. The remainder of the repository is the property of Resonate and is licensed under the GNU GPL v2."))}h.isMDXComponent=!0}}]);