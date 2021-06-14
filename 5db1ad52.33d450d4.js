(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{185:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),c=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||a;return n?i.a.createElement(m,s(s({ref:t},l),{},{components:n})):i.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),i=(n(0),n(185));const a={title:"Plugins"},o={unversionedId:"api/plugins",id:"api/plugins",isDocsHomePage:!1,title:"Plugins",description:"TypeScriptToLua supports plugins - an interface that allows to customize transpilation behavior.",source:"@site/docs/api/plugins.md",slug:"/api/plugins",permalink:"/docs/api/plugins",editUrl:"https://github.com/TypeScriptToLua/TypeScriptToLua.github.io/edit/source/docs/api/plugins.md",version:"current",sidebar:"docs",previous:{title:"Overview",permalink:"/docs/api/overview"},next:{title:"Printer",permalink:"/docs/api/printer"}},s=[{value:"API",id:"api",children:[{value:"<code>visitors</code>",id:"visitors",children:[]},{value:"<code>printer</code>",id:"printer",children:[]}]}],p={toc:s};function l({components:e,...t}){return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"TypeScriptToLua supports plugins - an interface that allows to customize transpilation behavior."),Object(i.b)("p",null,"To add a plugin you have to add it under ",Object(i.b)("inlineCode",{parentName:"p"},"tstl.luaPlugins")," option in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/configuration"}),"configuration file"),"."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:"title=tsconfig.json",title:"tsconfig.json"}),'{\n  "tstl": {\n    "luaPlugins": [\n      // Plugin is a JavaScript module exporting an object\n      { "name": "./plugin1.js" },\n      // TypeScriptToLua can load plugins written in TypeScript using `ts-node`\n      { "name": "./plugin2.ts" },\n      // Plugins can be published to npm\n      { "name": "tstl-plugin-3" }\n    ]\n  }\n}\n')),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("h3",{id:"visitors"},Object(i.b)("inlineCode",{parentName:"h3"},"visitors")),Object(i.b)("p",null,"Internally, to process ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://basarat.gitbook.io/typescript/overview/ast"}),"Abstract Syntax Tree")," of a TypeScript program, TypeScriptToLua implements the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Visitor_pattern"}),"visitor pattern"),". Visitor is a function, called with a processed node and transformation context, and returning a Lua AST node. Plugins can inject their own visitors using ",Object(i.b)("inlineCode",{parentName:"p"},"visitors")," property, overriding standard transformation behavior."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import * as ts from "typescript";\nimport * as tstl from "typescript-to-lua";\n\nconst plugin: tstl.Plugin = {\n  // `visitors` is a record where keys are TypeScript node syntax kinds\n  visitors: {\n    // Visitor can be a function that returns Lua AST node\n    [ts.SyntaxKind.ReturnStatement]: () => tstl.createReturnStatement([tstl.createBooleanLiteral(true)]),\n  },\n};\n\nexport default plugin;\n')),Object(i.b)("p",null,"Example 2:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import * as ts from "typescript";\nimport * as tstl from "typescript-to-lua";\n\nconst plugin: tstl.Plugin = {\n  visitors: {\n    // Visit string literals, if original transformer returns a string literal, change the string to "bar" instead\n    [ts.SyntaxKind.StringLiteral]: (node, context) => {\n      // `context` exposes `superTransform*` methods, that can be used to call either the visitor provided by previous\n      // plugin, or a standard TypeScriptToLua visitor\n      const result = context.superTransformExpression(node);\n\n      // Standard visitor for ts.StringLiteral always returns tstl.StringLiteral node\n      if (tstl.isStringLiteral(result)) {\n        result.value = "bar";\n      }\n\n      return result;\n    },\n  },\n};\n\nexport default plugin;\n')),Object(i.b)("h3",{id:"printer"},Object(i.b)("inlineCode",{parentName:"h3"},"printer")),Object(i.b)("p",null,"Printer is a function that overrides standard implementation of Lua AST printer. It receives some information about the file and transformed Lua AST. See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/printer"}),"Printer")," page for more information."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import * as tstl from "typescript-to-lua";\n\nclass CustomLuaPrinter extends tstl.LuaPrinter {}\n\nconst plugin: tstl.Plugin = {\n  printer: (program, emitHost, fileName, block, luaLibFeatures) =>\n    new CustomLuaPrinter(program.getCompilerOptions(), emitHost, fileName).print(block, luaLibFeatures),\n};\n\nexport default plugin;\n')))}l.isMDXComponent=!0}}]);