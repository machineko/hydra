(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(7),o=(n(0),n(247)),i={id:"schema",title:"Structured config schema"},c={unversionedId:"tutorials/structured_config/schema",id:"tutorials/structured_config/schema",isDocsHomePage:!1,title:"Structured config schema",description:"Example",source:"@site/docs/tutorials/structured_config/5_schema.md",slug:"/tutorials/structured_config/schema",permalink:"/docs/next/tutorials/structured_config/schema",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/structured_config/5_schema.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1608843024,sidebar:"docs",previous:{title:"Defaults List",permalink:"/docs/next/tutorials/structured_config/defaults"},next:{title:"Static schema with many configs",permalink:"/docs/next/tutorials/structured_config/static_schema"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/examples/tutorials/structured_configs/5_structured_config_schema/"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example-informational",alt:"Example"})))),Object(o.b)("p",null,"We have seen how to use Structured Configs as configuration, but they can also be used as a schema (i.e. validating configuration files)."),Object(o.b)("p",null,"When Hydra loads a config file, it looks in the ",Object(o.b)("inlineCode",{parentName:"p"},"ConfigStore")," for a Structured Config with a matching name and group.\nIf found, it is used as the schema for the newly loaded config."),Object(o.b)("p",null,"This page shows how to validate ",Object(o.b)("inlineCode",{parentName:"p"},"db/mysql.yaml")," and ",Object(o.b)("inlineCode",{parentName:"p"},"db/postgresql.yaml")," files against a pre-defined schema."),Object(o.b)("p",null,"Given the config directory structure:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"conf/\n\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 db\n    \u251c\u2500\u2500 mysql.yaml\n    \u2514\u2500\u2500 postgresql.yaml\n")),Object(o.b)("p",null,"We can add Structured Configs for ",Object(o.b)("inlineCode",{parentName:"p"},"mysql.yaml")," and ",Object(o.b)("inlineCode",{parentName:"p"},"postgresql.yaml"),", providing a schema for validating them."),Object(o.b)("p",null,"The Structured Configs below are stored as ",Object(o.b)("inlineCode",{parentName:"p"},"db/mysql")," and ",Object(o.b)("inlineCode",{parentName:"p"},"db/postgresql"),". They will be used as schema\nwhen we load their corresponding config files."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:'title="my_app.py"',title:'"my_app.py"'}),'@dataclass\nclass DBConfig:\n    driver: str = MISSING\n    host: str = "localhost"\n    port: int = MISSING\n\n\n@dataclass\nclass MySQLConfig(DBConfig):\n    driver: str = "mysql"\n    port: int = 3306\n    user: str = MISSING\n    password: str = MISSING\n\n@dataclass\nclass PostGreSQLConfig(DBConfig):\n    driver: str = "postgresql"\n    user: str = MISSING\n    port: int = 5432\n    password: str = MISSING\n    timeout: int = 10\n\n@dataclass\nclass Config:\n    # Note the lack of defaults list here.\n    # In this example it comes from config.yaml\n    db: DBConfig = MISSING\n\ncs = ConfigStore.instance()\ncs.store(name="config", node=Config)\ncs.store(group="db", name="mysql", node=MySQLConfig)\ncs.store(group="db", name="postgresql", node=PostGreSQLConfig)\n\n# The config name matches both \'config.yaml\' under the conf directory\n# and \'config\' stored in the ConfigStore.\n# config.yaml will compose in db: mysql by default (per the defaults list),\n# and it will be validated against the schema from the Config class\n@hydra.main(config_path="conf", config_name="config")\ndef my_app(cfg: Config) -> None:\n    print(OmegaConf.to_yaml(cfg))\n')),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"db/mysql.yaml")," and ",Object(o.b)("inlineCode",{parentName:"p"},"db/postgresql.yaml")," are loaded, the corresponding configs from the ",Object(o.b)("inlineCode",{parentName:"p"},"ConfigStore")," are used automatically.\nThis can be used to validate that both the configuration files (",Object(o.b)("inlineCode",{parentName:"p"},"mysql.yaml")," and ",Object(o.b)("inlineCode",{parentName:"p"},"postgresql.yaml"),") and the command line overrides are conforming to the schema. "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ python my_app.py db.port=fail\nError merging override db.port=fail\nValue 'fail' could not be converted to Integer\n        full_key: db.port\n        reference_type=Optional[MySQLConfig]\n        object_type=MySQLConfig\n")),Object(o.b)("p",null,"Unlike the example in the previous page, the Defaults List here is ",Object(o.b)("inlineCode",{parentName:"p"},"config.yaml")," and ",Object(o.b)("strong",{parentName:"p"},"not")," in the ",Object(o.b)("inlineCode",{parentName:"p"},"Config")," class."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'}),"defaults:\n  - db: mysql\n")))}p.isMDXComponent=!0},247:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);