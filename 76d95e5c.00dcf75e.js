(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{170:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(8),a=(t(0),t(268)),l={id:"logging",title:"Logging",sidebar_label:"Logging"},i={unversionedId:"tutorial/logging",id:"version-0.11/tutorial/logging",isDocsHomePage:!1,title:"Logging",description:"People often do not use Python logging due to the setup cost.",source:"@site/versioned_docs/version-0.11/tutorial/9_logging.md",slug:"/tutorial/logging",permalink:"/docs/0.11/tutorial/logging",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/tutorial/9_logging.md",version:"0.11",lastUpdatedBy:"Max Ehrlich",lastUpdatedAt:1613156749,sidebar_label:"Logging",sidebar:"version-0.11/docs",previous:{title:"Output/Working directory",permalink:"/docs/0.11/tutorial/working_directory"},next:{title:"Debugging",permalink:"/docs/0.11/tutorial/debugging"}},c=[],g={toc:c};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},g,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"People often do not use Python logging due to the setup cost.\nHydra solves that by configuring the Python logging for you."),Object(a.b)("p",null,"By default Hydra logs at the INFO level to both console and a file."),Object(a.b)("p",null,"Example of logging with Hydra:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'import logging\n\n# A logger for this file\nlog = logging.getLogger(__name__)\n\n@hydra.main()\ndef my_app(_cfg):\n    log.info("Info level message")\n    log.debug("Debug level message")\n\n$ python my_app.py\n[2019-06-27 00:52:46,653][__main__][INFO] - Info level message\n\n')),Object(a.b)("p",null,"You can enable DEBUG level logging from the command line  by overriding ",Object(a.b)("inlineCode",{parentName:"p"},"hydra.verbose"),"."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"hydra.verbose")," can be a Boolean, a String or a List:\nExamples:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"hydra.verbose=true")," : Set ",Object(a.b)("strong",{parentName:"li"},"all")," loggers log level to ",Object(a.b)("inlineCode",{parentName:"li"},"DEBUG")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"hydra.verbose=__main__")," : Set the ",Object(a.b)("inlineCode",{parentName:"li"},"__main__")," logger log level to ",Object(a.b)("inlineCode",{parentName:"li"},"DEBUG")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"hydra.verbose=[__main__,hydra]"),": Set the log levels of the loggers ",Object(a.b)("inlineCode",{parentName:"li"},"__main__")," and hydra log to ",Object(a.b)("inlineCode",{parentName:"li"},"DEBUG"))),Object(a.b)("p",null,"Example output:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"$ python my_app.py hydra.verbose=[__main__,hydra]\n[2019-09-29 13:06:00,880] - Installed Hydra Plugins\n[2019-09-29 13:06:00,880] - ***********************\n...\n[2019-09-29 13:06:00,896][__main__][INFO] - Info level message\n[2019-09-29 13:06:00,896][__main__][DEBUG] - Debug level message\n")),Object(a.b)("p",null,"Logging can be ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.11/configure_hydra/logging"}),"customized"),"."))}p.isMDXComponent=!0},268:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var g=o.a.createContext({}),p=function(e){var n=o.a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=p(e.components);return o.a.createElement(g.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},s=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,g=c(e,["components","mdxType","originalType","parentName"]),b=p(t),s=r,d=b["".concat(l,".").concat(s)]||b[s]||u[s]||a;return t?o.a.createElement(d,i(i({ref:n},g),{},{components:t})):o.a.createElement(d,i({ref:n},g))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=s;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var g=2;g<a;g++)l[g]=t[g];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);