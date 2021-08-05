(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[894],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6840:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>o,metadata:()=>i,toc:()=>l,default:()=>u});var a=n(22122),r=(n(67294),n(3905));const o={title:"External Lua Code"},i={unversionedId:"external-lua-code",id:"external-lua-code",isDocsHomePage:!1,title:"External Lua Code",description:"As of 0.40.0, tstl supports module resolution for libraries, which means you can use and create npm packages containing .lua files. You can also include Lua source files directly into your source code.",source:"@site/docs/external-lua-code.md",sourceDirName:".",slug:"/external-lua-code",permalink:"/docs/external-lua-code",editUrl:"https://github.com/TypeScriptToLua/TypeScriptToLua.github.io/edit/source/docs/external-lua-code.md",version:"current",frontMatter:{title:"External Lua Code"},sidebar:"docs",previous:{title:"The Self Parameter",permalink:"/docs/the-self-parameter"},next:{title:"Publishing Modules",permalink:"/docs/publishing-modules"}},l=[{value:"Adding Lua files to your project sources",id:"adding-lua-files-to-your-project-sources",children:[]},{value:"Importing a Lua module that only exports an array",id:"importing-a-lua-module-that-only-exports-an-array",children:[]},{value:"Using NPM packages",id:"using-npm-packages",children:[]}],s={toc:l};function u({components:e,...t}){return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As of ",(0,r.kt)("inlineCode",{parentName:"p"},"0.40.0"),", tstl supports module resolution for libraries, which means you can ",(0,r.kt)("em",{parentName:"p"},"use")," and ",(0,r.kt)("em",{parentName:"p"},"create")," npm packages containing ",(0,r.kt)("inlineCode",{parentName:"p"},".lua")," files. You can also include Lua source files directly into your source code."),(0,r.kt)("h2",{id:"adding-lua-files-to-your-project-sources"},"Adding Lua files to your project sources"),(0,r.kt)("p",null,"You can simply add a Lua file as part of your project sources if you add ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced/writing-declarations"},"a declaration file")," with the same name. You can then simply import the Lua code in your TypeScript."),(0,r.kt)("p",null,"Your project should look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"project/\n\u251c\u2500\u2500 main.ts\n\u251c\u2500\u2500 someLua.lua\n\u251c\u2500\u2500 someLua.d.ts\n\u2514\u2500\u2500 tsconfig.json\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=main.ts",title:"main.ts"},'import { foo, bar } from "./someLua";\n\nfoo();\nbar();\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=someLua.lua",title:"someLua.lua"},'local someLua = {}\n\nfunction someLua:foo()\n  print("hello")\nend\n\nfunction someLua:bar()\n  print("world")\nend\n\nreturn someLua\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=someLua.d.ts",title:"someLua.d.ts"},"export function foo(): void;\nexport function bar(): void;\n")),(0,r.kt)("h2",{id:"importing-a-lua-module-that-only-exports-an-array"},"Importing a Lua module that only exports an array"),(0,r.kt)("p",null,"Building on the previous section, you might want also want to import a Lua file that only exports an array. For example, something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=things.lua",title:"things.lua"},"return {\n    {\n        foo = 123,\n        bar = 456,\n    },\n    {\n        foo = 789,\n        bar = 987,\n    },\n}\n")),(0,r.kt)("p",null,"Writing a definitions file for this is tricky, since the Lua file has no named imports and no default export. Here, you have to use ",(0,r.kt)("inlineCode",{parentName:"p"},"export =")," syntax, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=things.d.ts",title:"things.d.ts"},"interface Thing {\n  foo: number;\n  bar: number;\n}\n\ndeclare const things: Thing[];\nexport = things;\n")),(0,r.kt)("p",null,"Then, in your TypeScript code, you can import it like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=main.ts",title:"main.ts"},'import * as things from "./module";\n\nprint(things[0].foo); // Prints "123"\n')),(0,r.kt)("p",null,"For more information about this export syntax, see ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require"},"the official TypeScript documentation"),"."),(0,r.kt)("h2",{id:"using-npm-packages"},"Using NPM packages"),(0,r.kt)("p",null,"To use a Lua package, install it via npm and use it as you would for any regular npm package in TypeScript. If the package does not include its own ",(0,r.kt)("inlineCode",{parentName:"p"},".d.ts")," declaration files, you can create your own by adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"<package name>.d.ts")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced/writing-declarations"},"declaration file")," to your source files."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Including TS or JS files from npm packages is currently NOT supported."))))}u.isMDXComponent=!0}}]);