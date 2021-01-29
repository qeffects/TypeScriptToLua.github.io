(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{185:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},275:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n.n(r),i=n(276),o=n.n(i);function c({children:e}){const t=a.a.Children.count(e);if(2!==t)throw new Error(`Invalid SideBySide children count: ${t}`);const[n,r]=a.a.Children.toArray(e);return a.a.createElement("div",{className:o.a.sideBySide},n,r)}},276:function(e,t,n){e.exports={sideBySide:"sideBySide_2tt-"}},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=(n(0),n(185));n(275);const i={title:"Language extensions"},o={unversionedId:"advanced/language-extensions",id:"advanced/language-extensions",isDocsHomePage:!1,title:"Language extensions",description:"TypeScriptToLua provides several extensions to the TypeScript language in the form of types and helper functions. To use these language extensions, add the types to your tsconfig.json:",source:"@site/docs/advanced/language-extensions.md",slug:"/advanced/language-extensions",permalink:"/docs/advanced/language-extensions",editUrl:"https://github.com/TypeScriptToLua/TypeScriptToLua.github.io/edit/source/docs/advanced/language-extensions.md",version:"current",sidebar:"docs",previous:{title:"Compiler Annotations",permalink:"/docs/advanced/compiler-annotations"},next:{title:"Overview",permalink:"/docs/api/overview"}},c=[{value:"MultiReturn Type",id:"multireturn-type",children:[{value:"$multi",id:"multi",children:[]}]}],l={toc:c};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"TypeScriptToLua provides several extensions to the TypeScript language in the form of types and helper functions. To use these language extensions, add the types to your ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "compilerOptions": {\n        ...\n        "types": ["typescript-to-lua/language-extensions"],\n        ...\n    },\n}\n')),Object(a.b)("h2",{id:"multireturn-type"},"MultiReturn Type"),Object(a.b)("p",null,"This language extension allows typing of Lua functions that return multiple values. For example, consider Lua's ",Object(a.b)("inlineCode",{parentName:"p"},"string.find"),", it returns two indices: the start of the found substring and the end of the found substring. In TypeScript, functions can only return one value so a special type is needed to indicate to tstl there are multiple return values. This is the ",Object(a.b)("inlineCode",{parentName:"p"},"MultiReturn<>")," type."),Object(a.b)("p",null,"It allows us to declare ",Object(a.b)("inlineCode",{parentName:"p"},"string.find")," like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:"title=stringfind.ts",title:"stringfind.ts"}),'declare namespace string {\n  export function find(haystack: string, needle: string): MultiReturn<[number, number]>;\n}\n\nconst [start, end] = string.find("Hello, world!", "world");\n')),Object(a.b)("p",null,"Translating into:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-lua",metastring:"title=stringfind.lua",title:"stringfind.lua"}),'start, ____end = string.find("Hello, world!", "world")\n')),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Prefer MultiReturn over the similar ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/advanced/compiler-annotations#tuplereturn"}),"@tupleReturn annotation"),". MultiReturn can do anything tupleReturn can, with the added benefit of being able to distinguish between actual tuple tables and multiple return values in the type system."))),Object(a.b)("h3",{id:"multi"},"\\$multi"),Object(a.b)("p",null,"In order to create a function that returns multiple values it needs to return a ",Object(a.b)("inlineCode",{parentName:"p"},"MultiReturn<>")," type. This is where the ",Object(a.b)("inlineCode",{parentName:"p"},"$multi")," function comes in. Calling ",Object(a.b)("inlineCode",{parentName:"p"},"$multi")," in a return statement will create an instance of the ",Object(a.b)("inlineCode",{parentName:"p"},"MultiReturn<>")," type:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:"title=multi.ts",title:"multi.ts"}),'function myFunc(): MultiReturn<[string, number]> {\n  return $multi("foo", 4);\n}\n\nconst [foo, four] = myFunc();\n')),Object(a.b)("p",null,"Translates into:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-lua",metastring:"title=multi.lua",title:"multi.lua"}),'function myFunc(self)\n    return "foo", 4\nend\nfoo, four = myFunc(nil)\n')))}s.isMDXComponent=!0}}]);