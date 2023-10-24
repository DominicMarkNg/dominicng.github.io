"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8075],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},v=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),v=r,d=p["".concat(s,".").concat(v)]||p[v]||f[v]||n;return a?i.createElement(d,l(l({ref:t},c),{},{components:a})):i.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=v;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<n;u++)l[u]=a[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}v.displayName="MDXCreateElement"},2033:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var i=a(7462),r=(a(7294),a(3905));const n={Title:"Partial Derivatives",sidebar_position:1},l=void 0,o={unversionedId:"Calculus/Multivariable Calculus/Partial Derivatives",id:"Calculus/Multivariable Calculus/Partial Derivatives",title:"Partial Derivatives",description:"Partial Derivatives: Formal Definition",source:"@site/docs/Calculus/Multivariable Calculus/Partial Derivatives.md",sourceDirName:"Calculus/Multivariable Calculus",slug:"/Calculus/Multivariable Calculus/Partial Derivatives",permalink:"/docs/Calculus/Multivariable Calculus/Partial Derivatives",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Calculus/Multivariable Calculus/Partial Derivatives.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{Title:"Partial Derivatives",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Discrete Random Variables: Quantitative Insights into Random Phenomena",permalink:"/docs/Probability/Discrete Random Variables"},next:{title:"Gradient",permalink:"/docs/Calculus/Multivariable Calculus/Gradient"}},s={},u=[{value:"Partial Derivatives: Formal Definition",id:"partial-derivatives-formal-definition",level:3},{value:"Notation",id:"notation",level:3},{value:"Multivariate Functions",id:"multivariate-functions",level:3},{value:"Figures to add later...",id:"figures-to-add-later",level:3}],c={toc:u},p="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"partial-derivatives-formal-definition"},"Partial Derivatives: Formal Definition"),(0,r.kt)("p",null,"Given a function ","("," f: \\mathbb{R}^n \\rightarrow \\mathbb{R} ",")",", the partial derivative of ","("," f ",")"," with respect to the ","("," i^{th} ",")"," variable ","("," x_i ",")"," is defined as:"),(0,r.kt)("p",null,"[","\n\\frac{\\partial f}{\\partial x",(0,r.kt)("em",{parentName:"p"},"i} = \\lim"),"{{\\Delta x_i \\to 0}} \\frac{f(x_1, \\ldots, x_i + \\Delta x_i, \\ldots, x_n) - f(x_1, \\ldots, x_i, \\ldots, x_n)}{\\Delta x_i}\n","]"),(0,r.kt)("p",null,"provided the limit exists. Here, ","("," \\Delta x_i ",")"," is a small change in the ","("," i^{th} ",")"," variable while keeping all other variables constant."),(0,r.kt)("h3",{id:"notation"},"Notation"),(0,r.kt)("p",null,"The partial derivative of ","("," f ",")"," with respect to ","("," x",(0,r.kt)("em",{parentName:"p"},"i ",")"," is commonly denoted by ","("," \\frac{\\partial f}{\\partial x_i} ",")"," or ","("," f"),"{x_i} ",")",". When ","("," f ",")"," is a function of more than two variables, the notation becomes particularly useful to specify which variable we are differentiating with respect to."),(0,r.kt)("h3",{id:"multivariate-functions"},"Multivariate Functions"),(0,r.kt)("p",null,"For functions ","("," f: \\mathbb{R}^n \\rightarrow \\mathbb{R}^m ",")"," where ","("," m > 1 ",")",", the partial derivatives can be organized into the Jacobian matrix:"),(0,r.kt)("p",null,"[","\n\\mathbf{J} = \\begin{pmatrix}\n\\frac{\\partial f_1}{\\partial x_1} & \\cdots & \\frac{\\partial f_1}{\\partial x_n} ","\\","\n\\vdots & \\ddots & \\vdots ","\\","\n\\frac{\\partial f_m}{\\partial x_1} & \\cdots & \\frac{\\partial f_m}{\\partial x_n}\n\\end{pmatrix}\n","]"),(0,r.kt)("h3",{id:"figures-to-add-later"},"Figures to add later..."),(0,r.kt)("p",null,"A potential figure illustrating partial derivatives could involve a 3D plot of a function ","("," f(x, y) ",")",". The figure could show tangent planes corresponding to the partial derivatives ","("," \\frac{\\partial f}{\\partial x} ",")"," and ","("," \\frac{\\partial f}{\\partial y} ",")"," at a specific point. These planes would illustrate how the function changes when you vary only one variable while keeping the other constant."))}f.isMDXComponent=!0}}]);