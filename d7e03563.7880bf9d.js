(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(7),a=(n(0),n(167)),i={id:"logging",title:"Customizing logging",sidebar_label:"Customizing logging"},l={unversionedId:"configure_hydra/logging",id:"configure_hydra/logging",isDocsHomePage:!1,title:"Customizing logging",description:"Hydra is configuring Python standard logging library with the dictConfig method. You can learn more about it here.",source:"@site/docs/configure_hydra/logging.md",permalink:"/docs/next/configure_hydra/logging",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/configure_hydra/logging.md",version:"next",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1588553703,sidebar_label:"Customizing logging",sidebar:"docs",previous:{title:"job",permalink:"/docs/next/configure_hydra/job"},next:{title:"Customizing working directory pattern",permalink:"/docs/next/configure_hydra/workdir"}},c=[],g={rightToc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Hydra is configuring Python standard logging library with the dictConfig method. You can learn more about it ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.python.org/3/howto/logging.html"}),"here"),".\nThere are two logging configurations, one for Hydra itself and one for the executed jobs."),Object(a.b)("p",null,"This example demonstrates how to customize the logging behavior of your Hydra app, by making the following changes\nto the default logging behavior:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Outputs only to stdout (no log file)"),Object(a.b)("li",{parentName:"ul"},"Output a simpler log line pattern")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"config.yaml"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  job_logging:\n    formatters:\n      simple:\n        format: '[%(levelname)s] - %(message)s'\n    root:\n      handlers: [console]\n")),Object(a.b)("p",null,"This is what the the default logging looks like:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"$ python main.py\n[2019-09-26 18:58:05,477][__main__][INFO] - Info level message\n")),Object(a.b)("p",null,"And this simplified logging looks like:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ python main.py\n[INFO] - Info level message\n")))}u.isMDXComponent=!0},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g=o.a.createContext({}),u=function(e){var t=o.a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(g.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,g=c(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,d=s["".concat(i,".").concat(b)]||s[b]||p[b]||a;return n?o.a.createElement(d,l(l({ref:t},g),{},{components:n})):o.a.createElement(d,l({ref:t},g))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var g=2;g<a;g++)i[g]=n[g];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);