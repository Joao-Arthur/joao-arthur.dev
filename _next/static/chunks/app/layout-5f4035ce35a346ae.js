(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1236:function(e,t,r){Promise.resolve().then(r.t.bind(r,4693,23)),Promise.resolve().then(r.t.bind(r,9627,23)),Promise.resolve().then(r.bind(r,9204)),Promise.resolve().then(r.t.bind(r,1400,23))},9204:function(e,t,r){"use strict";r.d(t,{Header:function(){return b}});var n=r(5559),o=r(6763),s=r(9984),i=r(1401),l=r(1422),c=r.n(l),a=r(9627),u=r.n(a);let f={ControlledButton:function(e){let{children:t,pressed:r}=e;return(0,n.jsx)("button",{className:c()("flex items-center justify-center","rounded-3xl",r?u().pressed:u().unpressed),disabled:r,children:t})},Button:function(e){let{children:t,onClick:r}=e;return(0,n.jsx)("button",{className:c()("flex items-center justify-center","rounded-3xl","bg-prm-700",u().button),onClick:r,children:t})}};var d=r(1102),p=r.n(d);function m(e){let{active:t,href:r,title:o}=e;return t?(0,n.jsx)(f.ControlledButton,{pressed:!0,children:(0,n.jsx)("div",{className:"w-24 h-12 flex justify-center items-center",children:(0,n.jsx)("h2",{className:"text-rose-200",children:o})})},"header-".concat(o.toLocaleLowerCase())):(0,n.jsx)(p(),{href:r,children:(0,n.jsx)(f.ControlledButton,{pressed:!1,children:(0,n.jsx)("div",{className:"w-24 h-12 flex justify-center items-center",children:(0,n.jsx)("h2",{className:"text-rose-200",children:o})})},"header-".concat(o.toLocaleLowerCase()))})}function b(){let e=(0,s.usePathname)(),[t,r]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{r(window.document.body.classList.contains("dark"))},[]),(0,n.jsxs)("div",{className:"w-full flex flex-col",children:[(0,n.jsx)("div",{className:c()("w-full h-20","flex justify-center items-center","bg-prm-50 dark:bg-prm-20"),children:(0,n.jsxs)("div",{className:"flex items-center w-full px-5",children:[(0,n.jsxs)("div",{className:"flex grow gap-x-5",children:[(0,n.jsx)(m,{active:"/"===e,href:"/",title:"About"}),(0,n.jsx)(m,{active:e.startsWith("/portfolio"),href:"/portfolio",title:"Portfolio"}),(0,n.jsx)(m,{active:e.startsWith("/blog"),href:"/blog",title:"Blog"})]}),(0,n.jsxs)("div",{className:"flex flex-row gap-x-5",children:[e.includes("/post/")?(0,n.jsx)(f.Button,{onClick:()=>{window.history.back()},children:(0,n.jsx)(i.x_l,{size:24,className:"w-14 h-14 p-5",color:"#fecdd3"})}):null,(0,n.jsx)(f.Button,{onClick:()=>{window.document.body.classList.contains("dark")?(window.document.body.classList.remove("dark"),r(!1)):(window.document.body.classList.add("dark"),r(!0))},children:t?(0,n.jsx)(i.UYB,{size:24,className:"w-14 h-14 p-5",color:"#fecdd3"}):(0,n.jsx)(i.UiM,{size:24,className:"w-14 h-14 p-5",color:"#fecdd3"})})]})]})}),(0,n.jsx)("div",{className:"w-full h-3 bg-prm-40 dark:bg-prm-15"})]})}},1400:function(){},9627:function(e){e.exports={button:"layout_button__qE9fV",card:"layout_card__GtUoP",unpressed:"layout_unpressed__soji7",pressed:"layout_pressed__TnKdc"}},4693:function(e){e.exports={style:{fontFamily:"'__Ubuntu_a42e44', '__Ubuntu_Fallback_a42e44'",fontWeight:400,fontStyle:"normal"},className:"__className_a42e44"}},1422:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=s(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=s(t,r));return t}(r)))}return e}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0!==(r=(function(){return o}).apply(t,[]))&&(e.exports=r)}()},2542:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(6763),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=n.createContext&&n.createContext(o),i=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(f,l({attr:a({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,a({key:r},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var r,{attr:o,size:s,title:c}=e,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,i),f=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==s?n.createElement(s.Consumer,null,e=>t(e)):t(o)}}},function(e){e.O(0,[573,188,102,192,221,744],function(){return e(e.s=1236)}),_N_E=e.O()}]);