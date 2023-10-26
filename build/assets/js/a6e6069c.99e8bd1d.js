"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6748],{3905:(a,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>h});var s=t(7294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,s)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,s,n=function(a,e){if(null==a)return{};var t,s,n={},m=Object.keys(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var l=s.createContext({}),o=function(a){var e=s.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},i=function(a){var e=o(a.components);return s.createElement(l.Provider,{value:e},a.children)},N="mdxType",c={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},k=s.forwardRef((function(a,e){var t=a.components,n=a.mdxType,m=a.originalType,l=a.parentName,i=p(a,["components","mdxType","originalType","parentName"]),N=o(t),k=n,h=N["".concat(l,".").concat(k)]||N[k]||c[k]||m;return t?s.createElement(h,r(r({ref:e},i),{},{components:t})):s.createElement(h,r({ref:e},i))}));function h(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var m=t.length,r=new Array(m);r[0]=k;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p[N]="string"==typeof a?a:n,r[1]=p;for(var o=2;o<m;o++)r[o]=t[o];return s.createElement.apply(null,r)}return s.createElement.apply(null,t)}k.displayName="MDXCreateElement"},5071:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>m,metadata:()=>p,toc:()=>o});var s=t(7462),n=(t(7294),t(3905));const m={title:"Unveiling the Power of Convolutional Neural Networks",sidebar_position:1},r=void 0,p={unversionedId:"Neural Networks/Convolutional Neural Networks/Introduction",id:"Neural Networks/Convolutional Neural Networks/Introduction",title:"Unveiling the Power of Convolutional Neural Networks",description:"Convolutional Neural Networks (CNNs) are a class of deep learning models particularly adept at processing grid-like data, such as images. Their biological inspiration stems from the visual cortex's mechanism of identifying different patterns and structures in the visual field. This design facilitates the learning of hierarchical features from the data, making CNNs a cornerstone in various computer vision applications.",source:"@site/docs/Neural Networks/Convolutional Neural Networks/Introduction.md",sourceDirName:"Neural Networks/Convolutional Neural Networks",slug:"/Neural Networks/Convolutional Neural Networks/Introduction",permalink:"/docs/Neural Networks/Convolutional Neural Networks/Introduction",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Neural Networks/Convolutional Neural Networks/Introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Unveiling the Power of Convolutional Neural Networks",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Unveiling the Dynamics of Recurrent Neural Networks",permalink:"/docs/Neural Networks/Recurrent Neural Networks/Introduction"},next:{title:"Navigating the Landscape of Graph Neural Networks",permalink:"/docs/Neural Networks/Graph Neural Networks/Introduction"}},l={},o=[],i={toc:o},N="wrapper";function c(a){let{components:e,...t}=a;return(0,n.kt)(N,(0,s.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Convolutional Neural Networks (CNNs) are a class of deep learning models particularly adept at processing grid-like data, such as images. Their biological inspiration stems from the visual cortex's mechanism of identifying different patterns and structures in the visual field. This design facilitates the learning of hierarchical features from the data, making CNNs a cornerstone in various computer vision applications."),(0,n.kt)("p",null,"The basic structure of a CNN comprises several layers, each contributing to the eventual understanding and representation of the input data:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Convolutional Layer:")," This layer applies convolution operations to the input, passing the result to the next layer. The convolution operation is defined by:",(0,n.kt)("div",{parentName:"li",className:"math math-display"},(0,n.kt)("span",{parentName:"div",className:"katex-display"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mtext",{parentName:"mrow"},"output"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("mi",{parentName:"mrow"},"y"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("munderover",{parentName:"mrow"},(0,n.kt)("mo",{parentName:"munderover"},"\u2211"),(0,n.kt)("mrow",{parentName:"munderover"},(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u221e")),(0,n.kt)("mi",{parentName:"munderover",mathvariant:"normal"},"\u221e")),(0,n.kt)("munderover",{parentName:"mrow"},(0,n.kt)("mo",{parentName:"munderover"},"\u2211"),(0,n.kt)("mrow",{parentName:"munderover"},(0,n.kt)("mi",{parentName:"mrow"},"j"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u221e")),(0,n.kt)("mi",{parentName:"munderover",mathvariant:"normal"},"\u221e")),(0,n.kt)("mtext",{parentName:"mrow"},"input"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("mi",{parentName:"mrow"},"j"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,n.kt)("mtext",{parentName:"mrow"},"kernel"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("mi",{parentName:"mrow"},"y"),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mi",{parentName:"mrow"},"j"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\text{output}(x,y) = \\sum_{i=-\\infty}^\\infty \\sum_{j=-\\infty}^\\infty \\text{input}(i,j) \\cdot \\text{kernel}(x-i, y-j)")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord"},"output")),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"3.0652em",verticalAlign:"-1.4138em"}}),(0,n.kt)("span",{parentName:"span",className:"mop op-limits"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.6514em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-1.8723em",marginLeft:"0em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,n.kt)("span",{parentName:"span",className:"mrel mtight"},"="),(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"\u221e")))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,n.kt)("span",{parentName:"span"},(0,n.kt)("span",{parentName:"span",className:"mop op-symbol large-op"},"\u2211"))),(0,n.kt)("span",{parentName:"span",style:{top:"-4.3em",marginLeft:"0em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"\u221e")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.336em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mop op-limits"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.6514em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-1.8723em",marginLeft:"0em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05724em"}},"j"),(0,n.kt)("span",{parentName:"span",className:"mrel mtight"},"="),(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"\u221e")))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,n.kt)("span",{parentName:"span"},(0,n.kt)("span",{parentName:"span",className:"mop op-symbol large-op"},"\u2211"))),(0,n.kt)("span",{parentName:"span",style:{top:"-4.3em",marginLeft:"0em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"\u221e")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.4138em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord"},"input")),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord"},"kernel")),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"ReLU Layer:")," Rectified Linear Unit (ReLU) is a type of activation function that is used to add non-linearity to the network. It's defined as:",(0,n.kt)("div",{parentName:"li",className:"math math-display"},(0,n.kt)("span",{parentName:"div",className:"katex-display"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"f"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mi",{parentName:"mrow"},"max"),(0,n.kt)("mo",{parentName:"mrow"},"\u2061"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mn",{parentName:"mrow"},"0"),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f(x) = \\max(0, x)")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mop"},"max"),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord"},"0"),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Pooling Layer:")," Pooling helps in reducing the spatial dimensions of the input and in turn, the computational complexity."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Fully Connected Layer:")," In this layer, the input from all neurons from the previous layer is connected to each neuron.")),(0,n.kt)("p",null,"The training of a CNN involves the backpropagation algorithm, a method used for minimizing the error in the network's predictions. The gradient of the loss function with respect to the network parameters is computed and used to update the weights."),(0,n.kt)("div",{className:"math math-display"},(0,n.kt)("span",{parentName:"div",className:"katex-display"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2202"),(0,n.kt)("mtext",{parentName:"mrow"},"Loss")),(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2202"),(0,n.kt)("mi",{parentName:"mrow"},"w"))),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("munder",{parentName:"mrow"},(0,n.kt)("mo",{parentName:"munder"},"\u2211"),(0,n.kt)("mrow",{parentName:"munder"},(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("mi",{parentName:"mrow"},"y"))),(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mo",{parentName:"mrow",fence:"true"},"("),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2202"),(0,n.kt)("mtext",{parentName:"mrow"},"Loss")),(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2202"),(0,n.kt)("mtext",{parentName:"mrow"},"output"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("mi",{parentName:"mrow"},"y"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"))),(0,n.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2202"),(0,n.kt)("mtext",{parentName:"mrow"},"output"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("mi",{parentName:"mrow"},"y"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2202"),(0,n.kt)("mi",{parentName:"mrow"},"w"))),(0,n.kt)("mo",{parentName:"mrow",fence:"true"},")"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\frac{\\partial \\text{Loss}}{\\partial w} = \\sum_{x,y} \\left( \\frac{\\partial \\text{Loss}}{\\partial \\text{output}(x,y)} \\cdot \\frac{\\partial \\text{output}(x,y)}{\\partial w} \\right)")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"2.0574em",verticalAlign:"-0.686em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.3714em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.05556em"}},"\u2202"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.05556em"}},"\u2202"),(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord"},"Loss"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"2.8361em",verticalAlign:"-1.3861em"}}),(0,n.kt)("span",{parentName:"span",className:"mop op-limits"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.05em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-1.9em",marginLeft:"0em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x"),(0,n.kt)("span",{parentName:"span",className:"mpunct mtight"},","),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"y")))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,n.kt)("span",{parentName:"span"},(0,n.kt)("span",{parentName:"span",className:"mop op-symbol large-op"},"\u2211")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.3861em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"minner"},(0,n.kt)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},(0,n.kt)("span",{parentName:"span",className:"delimsizing size3"},"(")),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.3714em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.05556em"}},"\u2202"),(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord"},"output")),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.05556em"}},"\u2202"),(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord"},"Loss"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.936em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.427em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.05556em"}},"\u2202"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.05556em"}},"\u2202"),(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord"},"output")),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,n.kt)("span",{parentName:"span",className:"mclose delimcenter",style:{top:"0em"}},(0,n.kt)("span",{parentName:"span",className:"delimsizing size3"},")")))))))),(0,n.kt)("p",null,"Several architectures have emerged over the years, each with its unique strengths and contributions to the field of computer vision. Notable architectures include AlexNet, VGG, GoogLeNet, ResNet, and Squeeze-and-Excitation Networks (SENets), all of which have pushed the boundaries in terms of network depth and performance on various vision tasks."),(0,n.kt)("p",null,"CNNs are not just confined to image data; they have also found utility in natural language processing tasks. For instance, TextCNN employs convolutional layers to detect patterns in sequences of text, showcasing the versatility of CNNs."),(0,n.kt)("p",null,"Applications of CNNs are widespread and have been pivotal in advancements in areas like content-based image retrieval, object localization, object detection, video classification, and many others."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Put in figure depicting the architecture of a CNN, with alternating convolutional, ReLU, and pooling layers leading to fully connected layers, alongside illustrations of the backpropagation process through these layers, would provide an intuitive understanding of how CNNs operate and learn to represent hierarchical features from the input data.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"More to come soon!")))}c.isMDXComponent=!0}}]);