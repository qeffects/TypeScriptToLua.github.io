(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{185:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,m=p["".concat(r,".").concat(u)]||p[u]||d[u]||c;return n?o.a.createElement(m,i(i({ref:t},b),{},{components:n})):o.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,r=new Array(c);r[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var b=2;b<c;b++)r[b]=n[b];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},275:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),o=n.n(a),c=n(276),r=n.n(c);function i({children:e}){const t=o.a.Children.count(e);if(2!==t)throw new Error(`Invalid SideBySide children count: ${t}`);const[n,a]=o.a.Children.toArray(e);return o.a.createElement("div",{className:r.a.sideBySide},n,a)}},276:function(e,t,n){e.exports={sideBySide:"sideBySide_2tt-"}},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),o=(n(0),n(185)),c=n(275);const r={title:"The Self Parameter"},i={unversionedId:"the-self-parameter",id:"the-self-parameter",isDocsHomePage:!1,title:"The Self Parameter",description:"Why is it there by default",source:"@site/docs/the-self-parameter.md",slug:"/the-self-parameter",permalink:"/docs/the-self-parameter",editUrl:"https://github.com/TypeScriptToLua/TypeScriptToLua.github.io/edit/source/docs/the-self-parameter.md",version:"current",sidebar:"docs",previous:{title:"Caveats",permalink:"/docs/caveats"},next:{title:"Editor Support",permalink:"/docs/editor-support"}},l=[{value:"Why is it there by default",id:"why-is-it-there-by-default",children:[]},{value:"Removing it",id:"removing-it",children:[{value:"<code>this: void</code>",id:"this-void",children:[]},{value:"<code>@noSelf</code>",id:"noself",children:[]},{value:"<code>@noSelfInFile</code>",id:"noselfinfile",children:[]},{value:"<code>noImplicitSelf</code>",id:"noimplicitself",children:[]}]},{value:"Assignment Errors",id:"assignment-errors",children:[{value:"Overloads",id:"overloads",children:[]}]}],b={toc:l};function s({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"why-is-it-there-by-default"},"Why is it there by default"),Object(o.b)("p",null,"All functions, by default, have a ",Object(o.b)("inlineCode",{parentName:"p"},"self")," parameter to preserve JavaScript behaviour."),Object(o.b)("p",null,"Telling TypeScript not to allow ",Object(o.b)("inlineCode",{parentName:"p"},"this")," to be used will eliminate that parameter from its containing context."),Object(o.b)("p",null,"Other workarounds are available for removing this too."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Disabling this self parameter should mainly be done when writing declarations for Lua interop purposes.")),Object(o.b)("h2",{id:"removing-it"},"Removing it"),Object(o.b)("h3",{id:"this-void"},Object(o.b)("inlineCode",{parentName:"h3"},"this: void")),Object(o.b)("p",null,"This is a type-safe solution usable whenever describing something callable."),Object(o.b)("p",null,"This tells TypeScript that ",Object(o.b)("inlineCode",{parentName:"p"},"this")," cannot be used in the context of this function."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"this: void")," results in no ",Object(o.b)("inlineCode",{parentName:"p"},"self")," parameter to be generated."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)(c.a,{mdxType:"SideBySide"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'declare function f(this: void, arg: string): void;\nf("foo");\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'f("foo")\n'))),Object(o.b)("p",null,"Also useful if you have class methods which should be called with a dot ",Object(o.b)("inlineCode",{parentName:"p"},".")," instead of a colon ",Object(o.b)("inlineCode",{parentName:"p"},":"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)(c.a,{mdxType:"SideBySide"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'declare class Class {\n  colon(arg: string): void;\n  dot(this: void, arg: string): void;\n}\n\nconst c = new Class();\nc.colon("foo");\nc.dot("foo");\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'local c = __TS__New(Class)\nc:colon("foo")\nc.dot("foo")\n'))),Object(o.b)("p",null,"Common Lua libraries use callback functions that don't have a ",Object(o.b)("inlineCode",{parentName:"p"},"self")," parameter so make sure this is reflected in their declaration."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)(c.a,{mdxType:"SideBySide"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"type Callback = (\n  this: void,\n  arg: string\n) => void;\n\ndeclare function useCallback(\n  this: void,\n  callback: Callback\n): void;\n\nuseCallback(arg => {\n  console.log(arg);\n});\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"useCallback(function(arg)\n  print(arg)\nend)\n"))),Object(o.b)("h3",{id:"noself"},Object(o.b)("inlineCode",{parentName:"h3"},"@noSelf")),Object(o.b)("p",null,"If you wish to specify that all functions in a class, interface or namespace should not have a context parameter, you can use the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/advanced/compiler-annotations#noself"}),Object(o.b)("inlineCode",{parentName:"a"},"@noSelf"))," annotation."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)(c.a,{mdxType:"SideBySide"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'/** @noSelf **/\ndeclare namespace Namespace {\n  function foo(arg: string): void;\n}\n\nNamespace.foo("foo");\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'Namespace.foo("foo")\n'))),Object(o.b)("p",null,"You can override ",Object(o.b)("inlineCode",{parentName:"p"},"@noSelf")," on a per-function basis by specifying a ",Object(o.b)("inlineCode",{parentName:"p"},"this")," parameter."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)(c.a,{mdxType:"SideBySide"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'/** @noSelf **/\ndeclare namespace Namespace {\n  function foo(this: any, arg: string): void;\n}\n\nNamespace.foo("foo");\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'Namespace:foo("foo")\n'))),Object(o.b)("h3",{id:"noselfinfile"},Object(o.b)("inlineCode",{parentName:"h3"},"@noSelfInFile")),Object(o.b)("p",null,"If you want to specify that all functions in a file should have no context, you can use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/advanced/compiler-annotations#noselfinfile"}),Object(o.b)("inlineCode",{parentName:"a"},"@noSelfInFile"))," at the top of the file."),Object(o.b)("p",null,"For more information on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/advanced/compiler-annotations#noself"}),Object(o.b)("inlineCode",{parentName:"a"},"@noSelf"))," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/advanced/compiler-annotations#noselfinfile"}),Object(o.b)("inlineCode",{parentName:"a"},"@noSelfInFile")),", please refer to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./advanced/compiler-annotations"}),"Compiler Annotations"),"."),Object(o.b)("h3",{id:"noimplicitself"},Object(o.b)("inlineCode",{parentName:"h3"},"noImplicitSelf")),Object(o.b)("p",null,"Use this option if you do not want implemented functions to have a self parameter."),Object(o.b)("p",null,"Ambient functions (functions described, not implemented) as well as classes and interfaces ignore this option."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Use this with ",Object(o.b)("inlineCode",{parentName:"p"},"strict")," or ",Object(o.b)("inlineCode",{parentName:"p"},"noImplicitThis"),' to ensure you don\'t use an "implicit this" type in your code.'))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"When enabled, if ",Object(o.b)("inlineCode",{parentName:"em"},"this")," has a type other than an implicit ",Object(o.b)("inlineCode",{parentName:"em"},"any"),", a ",Object(o.b)("inlineCode",{parentName:"em"},"self")," parameter will be added for its containing function.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:"title=tsconfig.json",title:"tsconfig.json"}),'{\n  "tstl": {\n    "noImplicitSelf": true\n  }\n}\n')),Object(o.b)(c.a,{mdxType:"SideBySide"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"function f() {}\nfunction f2(this: any) {}\nconst a = () => {};\nclass C {\n  method() {}\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"function f() end\nfunction f2(self) end\nlocal a = function() end\n\nlocal C = __TS__Class()\nfunction C:method(self) end -- still has self\n"))),Object(o.b)("h2",{id:"assignment-errors"},"Assignment Errors"),Object(o.b)("p",null,"See the two types below."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"type NoContext = (this: void) => void;\ntype UseContext = () => void;\n")),Object(o.b)("p",null,"TypeScript sees ",Object(o.b)("inlineCode",{parentName:"p"},"NoContext")," to be assignable to ",Object(o.b)("inlineCode",{parentName:"p"},"UseContext"),"."),Object(o.b)("p",null,"TypeScriptToLua does not."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"declare function useCallback(cb: (this: void, arg: string) => void);\n// cb's type: (this: void, arg: string) => void\n\nfunction callback(arg: string) {}\n// callback's type: (arg: string) => void (implicit any)\n\nuseCallback(callback);\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u274c ",Object(o.b)("strong",{parentName:"p"},"Error:")," Unable to convert function with a 'this' parameter to function with no 'this'. To fix, wrap in an arrow function, or declare with 'this: void'.")),Object(o.b)("p",null,"This throws an error because ",Object(o.b)("inlineCode",{parentName:"p"},"callback's type")," is not assignable to ",Object(o.b)("inlineCode",{parentName:"p"},"cb's type")," since the latter has an implicit any type which changes how the function should be called."),Object(o.b)("p",null,"To fix this, an arrow function can be used."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)(c.a,{mdxType:"SideBySide"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"useCallback((arg) => callback(arg));\n// argument type: (this: void, arg: string) => void\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"useCallback(function(arg)\n  return callback(nil, arg)\nend)\n"))),Object(o.b)("p",null,"TypeScript says the arrow function has no context due to the parameter's signature making TypeScriptToLua accept the parameter."),Object(o.b)("h3",{id:"overloads"},"Overloads"),Object(o.b)("p",null,"A similar error occurs if a function is overloaded and the call signature differs between how to use context:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"declare function useCallback(f: () => {}): void;\n\ndeclare function callback(this: void, s: string, n: number): void;\ndeclare function callback(s: string);\n\nuseCallback(callback);\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u274c ",Object(o.b)("strong",{parentName:"p"},"Error:")," Unsupported assignment of function with different overloaded types for 'this'. Overloads should all have the same type for 'this'.")),Object(o.b)("p",null,"It's best practice to avoid overloads with different context types."))}s.isMDXComponent=!0}}]);