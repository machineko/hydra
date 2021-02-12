(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{200:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),i=(n(0),n(268)),a={id:"testing",title:"Testing",sidebar_label:"Testing"},s={unversionedId:"development/testing",id:"development/testing",isDocsHomePage:!1,title:"Testing",description:"Hydra uses a test automation tool called nox to manage tests, linting, code coverage, etc.",source:"@site/docs/development/testing.md",slug:"/development/testing",permalink:"/docs/next/development/testing",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/development/testing.md",version:"current",lastUpdatedBy:"Max Ehrlich",lastUpdatedAt:1613156749,sidebar_label:"Testing",sidebar:"docs",previous:{title:"Overview",permalink:"/docs/next/development/overview"},next:{title:"Style Guide",permalink:"/docs/next/development/style_guide"}},l=[{value:"With pytest",id:"with-pytest",children:[]},{value:"With nox",id:"with-nox",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Hydra uses a test automation tool called ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/theacodes/nox"}),"nox")," to manage tests, linting, code coverage, etc.\n",Object(i.b)("inlineCode",{parentName:"p"},"nox")," will run all the configured sessions. You can see the full list of nox sessions with ",Object(i.b)("inlineCode",{parentName:"p"},"nox -l")," and run specific sessions\nwith ",Object(i.b)("inlineCode",{parentName:"p"},"nox -s NAME")," (you may need to quote the session name in some cases)"),Object(i.b)("h2",{id:"with-pytest"},"With pytest"),Object(i.b)("p",null,"Run ",Object(i.b)("inlineCode",{parentName:"p"},"pytest")," at the repository root to run all the Hydra core tests.\nTo run the tests of individual plugins, use ",Object(i.b)("inlineCode",{parentName:"p"},"pytest plugins/NAME"),"."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"NOTE")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Some plugins support fewer versions of Python than the Hydra core."))),Object(i.b)("h2",{id:"with-nox"},"With nox"),Object(i.b)("p",null,"See ",Object(i.b)("inlineCode",{parentName:"p"},"nox -l"),". a few examples:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"nox -s test_core")," will test Hydra core on all supported Python versions"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'nox -s "test_core-3.6(pip install)"')," : Test on Python 3.6 with ",Object(i.b)("inlineCode",{parentName:"li"},"pip install")," as installation method"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'nox -s "test_plugins-3.8(pip install -e)"')," : Test plugins on Python 3.8 with ",Object(i.b)("inlineCode",{parentName:"li"},"pip install -e")," as installation method")))}p.isMDXComponent=!0},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(a,".").concat(u)]||d[u]||b[u]||i;return n?o.a.createElement(m,s(s({ref:t},c),{},{components:n})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);