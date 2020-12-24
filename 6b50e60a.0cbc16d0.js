(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(7),r=(n(0),n(247)),c={id:"terminology",title:"Terminology"},o={unversionedId:"terminology",id:"terminology",isDocsHomePage:!1,title:"Terminology",description:"Overview",source:"@site/docs/terminology.md",slug:"/terminology",permalink:"/docs/next/terminology",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/terminology.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1608843024,sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/next/intro"},next:{title:"Tutorials intro",permalink:"/docs/next/tutorials/intro"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Input Configs",id:"input-configs",children:[{value:"Primary Config",id:"primary-config",children:[]},{value:"Structured Config",id:"structured-config",children:[]},{value:"Defaults List",id:"defaults-list",children:[]},{value:"Config Group",id:"config-group",children:[]},{value:"Config Group Option",id:"config-group-option",children:[]},{value:"Config Node",id:"config-node",children:[]},{value:"Package",id:"package",children:[]},{value:"Package directive",id:"package-directive",children:[]},{value:"Example",id:"example",children:[]}]},{value:"Output Config Object",id:"output-config-object",children:[]},{value:"Misc",id:"misc",children:[{value:"Config Search Path",id:"config-search-path",children:[]},{value:"Plugins",id:"plugins",children:[]}]}],p={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"This page describes some of the common concepts in Hydra.\nMost of the concepts are described in much more details throughout the documentation."),Object(r.b)("h2",{id:"input-configs"},"Input Configs"),Object(r.b)("p",null,"Input configs are used to construct the config object used by the application.",Object(r.b)("br",{parentName:"p"}),"\n","Supported input configs are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Config Files (",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://yaml.org/"}),"YAML")," files)"),Object(r.b)("li",{parentName:"ul"},"Command line arguments"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#structured-config"}),"Structured Configs")," (Python ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/dataclasses.html"}),"@dataclasses"),")")),Object(r.b)("h3",{id:"primary-config"},"Primary Config"),Object(r.b)("p",null,"The input config named in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/tutorials/basic/your_first_app/simple_cli"}),Object(r.b)("inlineCode",{parentName:"a"},"@hydra.main()"))," or in\nthe ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/experimental/compose_api"}),Object(r.b)("inlineCode",{parentName:"a"},"Compose API")),".  "),Object(r.b)("h3",{id:"structured-config"},"Structured Config"),Object(r.b)("p",null,"A @dataclass or an instance of a @dataclass that is used to construct a config. These enable both runtime and static type checking."),Object(r.b)("p",null,"There are two primary patterns for using Structured configs:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"As an ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#input-configs"}),"Input Config"),"."),Object(r.b)("li",{parentName:"ul"},"As a schema validating Config Files and command line arguments.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="Example:"',title:'"Example:"'}),"@dataclass\nclass User:\n  name: str = MISSING\n  age: int = MISSING\n")),Object(r.b)("h3",{id:"defaults-list"},"Defaults List"),Object(r.b)("p",null,"A list in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#input-configs"}),"input Config")," that instructs Hydra how to build the config.\nThe list is typically composed of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#config-group-option"}),"Config Group Options"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Example: config.yaml"',title:'"Example:','config.yaml"':!0}),"defaults:\n  - db: mysql\n  - schema: school\n")),Object(r.b)("h3",{id:"config-group"},"Config Group"),Object(r.b)("p",null,"A Config Group is a mutually exclusive set of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#config-group-option"}),"Config Group Options"),".\nConfig Groups can be hierarchical and in that case the path elements are separated by a forward slash ('/')\nregardless of the operating system."),Object(r.b)("h3",{id:"config-group-option"},"Config Group Option"),Object(r.b)("p",null,"One of the configs in a Config Group."),Object(r.b)("h3",{id:"config-node"},"Config Node"),Object(r.b)("p",null,"A Config Node is either a ",Object(r.b)("inlineCode",{parentName:"p"},"Value Node")," (a primitive type), or a ",Object(r.b)("inlineCode",{parentName:"p"},"Container Node"),".  A ",Object(r.b)("inlineCode",{parentName:"p"},"Container Node")," is a list or dictionary of ",Object(r.b)("inlineCode",{parentName:"p"},"Value Nodes"),"."),Object(r.b)("h3",{id:"package"},"Package"),Object(r.b)("p",null,"A Package is the path of the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#config-node"}),"Config Node")," in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#output-config-object"}),"Config Object"),". "),Object(r.b)("h3",{id:"package-directive"},"Package directive"),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/advanced/overriding_packages"}),"Package Directive")," specifies the root ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#package"}),"Package")," of an ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#input-configs"}),"Config File")),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Input config: mi6/agent/james_bond.yaml"',title:'"Input',"config:":!0,'mi6/agent/james_bond.yaml"':!0}),"# @package _group_\ncodename: '007'\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Resulting config"',title:'"Resulting','config"':!0}),"mi6:\n    agent:\n        codename: '007'\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#config-group"}),"Config Group"),": mi6/agent"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#config-group-option"}),"Config Group Option"),": james_bond  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#config-node"}),"Container Nodes"),": ",Object(r.b)("inlineCode",{parentName:"li"},"{codename: '007'}"),", ","\xa0",". . . ","\xa0",",",Object(r.b)("inlineCode",{parentName:"li"},"{mi6: {agent: {codename: '007'}}}")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#config-node"}),"Value Node"),": '007'"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#package"}),"Packages")," ",Object(r.b)("inlineCode",{parentName:"li"},"<empty>"),", ",Object(r.b)("inlineCode",{parentName:"li"},"mi6"),", ",Object(r.b)("inlineCode",{parentName:"li"},"mi6.agent"),", ",Object(r.b)("inlineCode",{parentName:"li"},"mi6.agent.codename")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#package-directive"}),"Package directive")," : ",Object(r.b)("inlineCode",{parentName:"li"},"@package _group_"),", which expands to ",Object(r.b)("inlineCode",{parentName:"li"},"mi6.agent"))),Object(r.b)("h2",{id:"output-config-object"},"Output Config Object"),Object(r.b)("p",null,"The config for the application. It is a dictionary of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#config-node"}),"Config Nodes")," generated from the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#input-configs"}),"Input Configs"),"."),Object(r.b)("h2",{id:"misc"},"Misc"),Object(r.b)("h3",{id:"config-search-path"},"Config Search Path"),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/advanced/search_path"}),"Config Search Path")," is a list of paths that are searched in order to find configs. It is similar to\nthe Python ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.python.org/3/using/cmdline.html#envvar-PYTHONPATH"}),"PYTHONPATH"),"."),Object(r.b)("h3",{id:"plugins"},"Plugins"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/advanced/plugins"}),"Plugins")," extend Hydra's capabilities. Some examples are Launcher and Sweeper."))}b.isMDXComponent=!0},247:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||r;return n?i.a.createElement(m,o(o({ref:t},p),{},{components:n})):i.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var p=2;p<r;p++)c[p]=n[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);