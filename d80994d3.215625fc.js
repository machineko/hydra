(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{210:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return u})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return l}));var n=t(2),o=t(7),a=(t(0),t(247)),i={id:"workdir",title:"Customizing working directory pattern",sidebar_label:"Customizing working directory pattern"},u={unversionedId:"configure_hydra/workdir",id:"version-0.11/configure_hydra/workdir",isDocsHomePage:!1,title:"Customizing working directory pattern",description:"Run output directory grouped by day:",source:"@site/versioned_docs/version-0.11/configure_hydra/workdir.md",slug:"/configure_hydra/workdir",permalink:"/docs/0.11/configure_hydra/workdir",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/configure_hydra/workdir.md",version:"0.11",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1608843024,sidebar_label:"Customizing working directory pattern",sidebar:"version-0.11/docs",previous:{title:"Customizing logging",permalink:"/docs/0.11/configure_hydra/logging"},next:{title:"Customizing Application's help",permalink:"/docs/0.11/configure_hydra/app_help"}},c=[{value:"Configuring hydra.job.override_dirname",id:"configuring-hydrajoboverride_dirname",children:[]},{value:"Customizing outputs with substitution through the CLI",id:"customizing-outputs-with-substitution-through-the-cli",children:[]}],d={rightToc:c};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},d,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Run output directory grouped by day:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  run:\n    dir: ./outputs/${now:%Y-%m-%d}/${now:%H-%M-%S}\n")),Object(a.b)("p",null,"Sweep sub directory contains the the job number and the override parameters for the job instance:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  sweep:\n    subdir: ${hydra.job.num}_${hydra.job.num}_${hydra.job.override_dirname}\n")),Object(a.b)("p",null,"Run output directory grouped by job name:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  run:\n    dir: outputs/${hydra.job.name}/${now:%Y-%m-%d_%H-%M-%S}\n")),Object(a.b)("p",null,"Run output directory can contain user configuration variables:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  run:\n    dir: outputs/${now:%Y-%m-%d_%H-%M-%S}/opt:${optimizer.type}\n\n")),Object(a.b)("p",null,"Run output directory can contain override parameters for the job"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  run:\n    dir: output/${hydra.job.override_dirname}\n")),Object(a.b)("h3",{id:"configuring-hydrajoboverride_dirname"},"Configuring hydra.job.override_dirname"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"hydra.job.override_dirname")," can be configured via hydra.job.config.override_dirname.\nYou can exclude keys such as ",Object(a.b)("inlineCode",{parentName:"p"},"random_seed")," or change the separator used to construct override_dirname."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  job:\n    config:\n      # configuration for the ${hydra.job.override_dirname} runtime variable\n      override_dirname:\n        kv_sep: '='\n        item_sep: ','\n        exclude_keys: []\n")),Object(a.b)("h3",{id:"customizing-outputs-with-substitution-through-the-cli"},"Customizing outputs with substitution through the CLI"),Object(a.b)("p",null,"Outputs can also be configured through the CLI, like any other configuration."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"python train.py model.nb_layers=3 hydra.run.dir=3_layers")),Object(a.b)("p",null,"This feature can become really powerful to write multiruns without boilerplate using substitution."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"python train.py --multirun model.nb_layers=1,2,3,5 hydra.sweep.dir=multiruns/layers_effect hydra.sweep.subdir=\\","$","{model.nb_layers}")),Object(a.b)("p",null,"With bash, be careful to escape the $ symbol. Otherwise, bash will try to resolve the substitution, instead of passing it to Hydra."))}l.isMDXComponent=!0},247:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),l=function(e){var r=o.a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},b=function(e){var r=l(e.components);return o.a.createElement(d.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},p=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=l(t),p=n,m=b["".concat(i,".").concat(p)]||b[p]||s[p]||a;return t?o.a.createElement(m,u(u({ref:r},d),{},{components:t})):o.a.createElement(m,u({ref:r},d))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=p;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var d=2;d<a;d++)i[d]=t[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);