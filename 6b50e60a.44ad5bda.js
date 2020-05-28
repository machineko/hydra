(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(1),a=n(9),r=(n(0),n(233)),o={id:"terminology",title:"Terminology"},c={id:"terminology",title:"Terminology",description:"## Overview",source:"@site/docs/terminology.md",permalink:"/docs/next/terminology",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/terminology.md",version:"next",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1590695246,sidebar:"Docs",previous:{title:"Getting started",permalink:"/docs/next/intro"},next:{title:"Tutorials intro",permalink:"/docs/next/tutorials/intro"}},l=[{value:"Overview",id:"overview",children:[{value:"Config",id:"config",children:[]},{value:"Primary Config",id:"primary-config",children:[]},{value:"Config Node",id:"config-node",children:[]},{value:"Config File",id:"config-file",children:[]},{value:"Structured Config",id:"structured-config",children:[]},{value:"Config Search Path:",id:"config-search-path",children:[]},{value:"Config Group",id:"config-group",children:[]},{value:"Config Group Option",id:"config-group-option",children:[]},{value:"Defaults List",id:"defaults-list",children:[]},{value:"Package",id:"package",children:[]}]},{value:"Examples",id:"examples",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"This page describes some of the common concepts in Hydra.\nIt does not contain a comprehensive description of each item, nor is it a usage guide.",Object(r.b)("br",{parentName:"p"}),"\n","Most concepts here are described in much more details throughout the documentation."),Object(r.b)("h3",{id:"config"},"Config"),Object(r.b)("p",null,"A config is an entity containing user configuration, composed of Config Nodes.\nConfigs are always converted to OmegaConf DictConfig or ListConfig objects."),Object(r.b)("h3",{id:"primary-config"},"Primary Config"),Object(r.b)("p",null,"The config named in ",Object(r.b)("inlineCode",{parentName:"p"},"@hydra.main()")," or in ",Object(r.b)("inlineCode",{parentName:"p"},"hydra.experimental.compose()"),"."),Object(r.b)("h3",{id:"config-node"},"Config Node"),Object(r.b)("p",null,"Alternative names: Node"),Object(r.b)("p",null,"A node in the config, can be a parent container or a leaf value."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Containers can be DictConfig and ListConfig (representing a dictionary and a list)"),Object(r.b)("li",{parentName:"ul"},"Leaf values can represent supported primitive types, such as ",Object(r.b)("inlineCode",{parentName:"li"},"int"),", ",Object(r.b)("inlineCode",{parentName:"li"},"float"),", ",Object(r.b)("inlineCode",{parentName:"li"},"bool"),", ",Object(r.b)("inlineCode",{parentName:"li"},"enum")," and ",Object(r.b)("inlineCode",{parentName:"li"},"str"),".")),Object(r.b)("p",null,"A DictConfig node can have an underlying Structured Config type that is used for runtime mutation validation."),Object(r.b)("h3",{id:"config-file"},"Config File"),Object(r.b)("p",null,"A YAML file"),Object(r.b)("h3",{id:"structured-config"},"Structured Config"),Object(r.b)("p",null,"A dataclass or an instance of a dataclass that is used to construct a config.",Object(r.b)("br",{parentName:"p"}),"\n","The constructed config object is using the underlying type for runtime type validation.",Object(r.b)("br",{parentName:"p"}),"\n","Duck typing (The usage of the underlying type for type annotation) enables static type checking of the config."),Object(r.b)("h3",{id:"config-search-path"},"Config Search Path:"),Object(r.b)("p",null,"Alternative names: Search Path"),Object(r.b)("p",null,"The Config Search Path is a list of virtual paths that is searched in order to find configs.",Object(r.b)("br",{parentName:"p"}),"\n","Conceptually, this is similar to the Python PYTHONPATH or the Java CLASSPATH.",Object(r.b)("br",{parentName:"p"}),"\n","When a config searched in the config search path, the first matching config is used.\nEach config search path element has a schema prefix such as file:// or pkg:// that is corresponding to a ConfigSourcePlugin."),Object(r.b)("h3",{id:"config-group"},"Config Group"),Object(r.b)("p",null,"Alternative names: Group"),Object(r.b)("p",null,"A config group is a logical directory in the Config Search Path. The Config Group options are the union of all the configs in that\ndirectory across the Config Search Path.\nConfig Groups can be hierarchical and in that case the path elements are separated by a forward slash ('/')\nregardless of the operating system."),Object(r.b)("h3",{id:"config-group-option"},"Config Group Option"),Object(r.b)("p",null,"Alternative names: Option"),Object(r.b)("p",null,"One of the configs in a Config Group."),Object(r.b)("h3",{id:"defaults-list"},"Defaults List"),Object(r.b)("p",null,"Alternative names: Defaults"),Object(r.b)("p",null,"A special list in the Primary Config. The Defaults List contains composition instructions Hydra is using when creating the\nfinal config object.\nThe defaults list is removed from the final config object. "),Object(r.b)("h3",{id:"package"},"Package"),Object(r.b)("p",null,"A package is the parent lineage of a node. You also think of it as the path of the node in the config object.\nThe package of a Config can be overridden via the command line or via the defaults list."),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="foo/oompa/loompa.yaml"',title:'"foo/oompa/loompa.yaml"'}),"a:\n  b:\n    c: 10\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Config Group: foo/oompa"),Object(r.b)("li",{parentName:"ul"},"Config Group Option: loompa"),Object(r.b)("li",{parentName:"ul"},"Package: a.b"),Object(r.b)("li",{parentName:"ul"},"Node: examples nodes: ",Object(r.b)("inlineCode",{parentName:"li"},"c:10"),", ",Object(r.b)("inlineCode",{parentName:"li"},"b: {c: 10}")," and ",Object(r.b)("inlineCode",{parentName:"li"},"a: {b: {c: 10}}")),Object(r.b)("li",{parentName:"ul"},"Structured Config:")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"@dataclass\nclass User:\n  name: str = MISSING\n  age: int = MISSING\n\n# The real type of cfg is DictConfig but we can ducktype it \n# as User to get static type safety\ncfg: User = OmegaConf.structured(User)\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Defaults List:")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'}),"defaults:\n  - db: mysql\n")))}p.isMDXComponent=!0},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=i,d=u["".concat(o,".").concat(f)]||u[f]||b[f]||r;return n?a.a.createElement(d,c({ref:t},s,{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);