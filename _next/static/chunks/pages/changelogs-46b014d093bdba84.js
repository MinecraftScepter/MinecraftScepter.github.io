(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[545],{8456:function(e,r,t){"use strict";t.d(r,{Z:function(){return S}});var n=t(3366),o=t(7462),a=t(7294),i=t(6010),s=t(7192),c=t(917),l=t(8216),u=t(7623),h=t(1496),p=t(8979);function f(e){return(0,p.Z)("MuiCircularProgress",e)}(0,t(6087).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var d=t(5893);const m=["className","color","disableShrink","size","style","thickness","value","variant"];let x,g,b,j,Z=e=>e;const v=44,y=(0,c.F4)(x||(x=Z`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),k=(0,c.F4)(g||(g=Z`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),w=(0,h.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,l.Z)(t.color)}`]]}})((({ownerState:e,theme:r})=>(0,o.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:r.palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,c.iv)(b||(b=Z`
      animation: ${0} 1.4s linear infinite;
    `),y))),C=(0,h.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),O=(0,h.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,l.Z)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((({ownerState:e,theme:r})=>(0,o.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,c.iv)(j||(j=Z`
      animation: ${0} 1.4s ease-in-out infinite;
    `),k)));var S=a.forwardRef((function(e,r){const t=(0,u.Z)({props:e,name:"MuiCircularProgress"}),{className:a,color:c="primary",disableShrink:h=!1,size:p=40,style:x,thickness:g=3.6,value:b=0,variant:j="indeterminate"}=t,Z=(0,n.Z)(t,m),y=(0,o.Z)({},t,{color:c,disableShrink:h,size:p,thickness:g,value:b,variant:j}),k=(e=>{const{classes:r,variant:t,color:n,disableShrink:o}=e,a={root:["root",t,`color${(0,l.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,l.Z)(t)}`,o&&"circleDisableShrink"]};return(0,s.Z)(a,f,r)})(y),S={},P={},N={};if("determinate"===j){const e=2*Math.PI*((v-g)/2);S.strokeDasharray=e.toFixed(3),N["aria-valuenow"]=Math.round(b),S.strokeDashoffset=`${((100-b)/100*e).toFixed(3)}px`,P.transform="rotate(-90deg)"}return(0,d.jsx)(w,(0,o.Z)({className:(0,i.Z)(k.root,a),style:(0,o.Z)({width:p,height:p},P,x),ownerState:y,ref:r,role:"progressbar"},N,Z,{children:(0,d.jsx)(C,{className:k.svg,ownerState:y,viewBox:"22 22 44 44",children:(0,d.jsx)(O,{className:k.circle,style:S,ownerState:y,cx:v,cy:v,r:(v-g)/2,fill:"none",strokeWidth:g})})}))}))},5463:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return b}});var n=t(2640),o=t(8456),a=t(7948),i=t(6720),s=t(4699),c=t(1969),l=t(3610),u=t(9008),h=t(7294),p=t(569),f=t.n(p),d=t(9655),m=t(9226),x=t(5893);function g(e){var r=e.url,t=h.useState(""),a=(0,n.Z)(t,2),i=a[0],s=a[1];return h.useEffect((function(){f().get(r).then((function(e){s(e.text)}))})),(0,x.jsx)(h.Fragment,{children:""==i?(0,x.jsx)(o.Z,{size:120}):(0,x.jsx)(d.D,{children:i})})}function b(){var e="English"===(0,l.$f)().common.language;return(0,x.jsxs)("div",{style:{backgroundColor:"#f2f2f2"},children:[(0,x.jsx)(i.ZP,{}),(0,x.jsx)(u.default,{children:(0,x.jsx)("link",{href:"/css/github.css",rel:"stylesheet"})}),(0,x.jsx)(c.Z,{tabIndex:3}),(0,x.jsxs)("main",{children:[(0,x.jsx)(a.Z,{maxWidth:"lg",className:"markdown-body",sx:{backgroundColor:"#ffffff",borderRadius:2},style:{marginTop:24,marginBottom:24,paddingTop:16,paddingBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"},children:(0,x.jsx)(g,{url:e?"https://raw.githubusercontent.com/MinecraftCube/MinecraftCubeDesktop/version_info/enUS/RELEASE_NOTES.md":"https://raw.githubusercontent.com/MinecraftCube/MinecraftCubeDesktop/version_info/zhTW/RELEASE_NOTES.md"})}),(0,x.jsx)(m.Z,{height:16}),(0,x.jsx)(a.Z,{maxWidth:"lg",className:"markdown-body",sx:{backgroundColor:"#ffffff",borderRadius:2},style:{marginTop:24,marginBottom:24,paddingTop:16,paddingBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"},children:(0,x.jsx)(g,{url:e?"https://raw.githubusercontent.com/Tokenyet/MinecraftScepterVersioner/master/content-en.md":"https://raw.githubusercontent.com/Tokenyet/MinecraftScepterVersioner/master/content.md"})})]}),(0,x.jsx)(s.Z,{style:{backgroundColor:"#f2f2f2"}})]})}},4699:function(e,r,t){"use strict";t.d(r,{Z:function(){return p}});t(7294);var n,o=t(3610),a=t(1163),i=t(5861),s=t(3321),c=t(7390),l=t(8377),u=t(5893);function h(){var e=(0,o.$f)();return(0,u.jsxs)(i.Z,{variant:"body2",color:"textSecondary",align:"center",children:[e.footer.copy_right,(0,u.jsx)(c.C,{color:"inherit",href:"https://material-ui.com/",children:e.footer.minecraft_scepter})," ",(new Date).getFullYear(),"."]})}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.style,t=(0,a.useRouter)(),c=(0,o.$f)(),p=function(e){e==n.tw?window.location.replace(t.basePath+"?lang=zhTW"):window.location.replace(t.basePath+"?lang=en")};return(0,u.jsxs)(l.Z,{component:"footer",sx:function(e){return{backgroundColor:e.palette.background.paper,padding:e.spacing(6),marginTop:"auto"}},style:r,children:[(0,u.jsx)(i.Z,{variant:"h6",align:"center",gutterBottom:!0,children:c.footer.title}),(0,u.jsx)(i.Z,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:c.footer.subtitle}),(0,u.jsx)(h,{}),(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,u.jsx)(i.Z,{variant:"caption",children:"LANGUAGE SWITCH(\u8a9e\u8a00\u5207\u63db)"}),(0,u.jsxs)("div",{children:[(0,u.jsx)(s.Z,{onClick:function(e){return p(n.tw)},children:(0,u.jsx)(i.Z,{variant:"caption",children:"\u4e2d\u6587"})}),(0,u.jsx)(s.Z,{onClick:function(e){return p(n.en)},children:(0,u.jsx)(i.Z,{variant:"caption",children:"ENG"})})]})]})]})}!function(e){e[e.en=0]="en",e[e.tw=1]="tw"}(n||(n={}))},1969:function(e,r,t){"use strict";t.d(r,{Z:function(){return E}});var n=t(2640),o=t(9499),a=t(7294),i=t(9956),s=t(1975),c=t(9606),l=t(1500),u=t(721),h=t(117),p=t(7976),f=t(3610),d=t(4815),m=t(852),x=t(1073),g=t(5316),b=t(3381),j=t(431),Z=t(4799),v=t(2293),y=t(155),k=t(9226),w=t(5861),C=t(7390),O=t(5893);function S(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function P(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?S(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var N=function(e){var r;return(0,O.jsx)(d.Z,P(P({sx:(r={},(0,o.Z)(r,"".concat(m.Z.indicator),{display:"flex",justifyContent:"center",backgroundColor:"transparent","& > div":{maxWidth:40,width:"100%",backgroundColor:"#635ee7"}}),(0,o.Z)(r,"& .".concat(x.Z.selected),{color:"yellow !important"}),r)},e),{},{TabIndicatorProps:{children:(0,O.jsx)("div",{})}}))},D=function(e){return(0,O.jsx)(g.Z,P({sx:function(e){return{minWidth:"auto",textTransform:"none",color:"#ffffff",fontWeight:e.typography.fontWeightRegular,fontSize:e.typography.pxToRem(15),marginRight:e.spacing(1),"&:focus":{color:"yellow"}}},disableRipple:!0},e))};function E(e){var r=(0,f.$f)(),t=a.useState(null),d=(0,n.Z)(t,2),m=d[0],x=d[1],g=a.useState(null),S=(0,n.Z)(g,2),P=S[0],E=S[1],M=a.useState(!(e.tabIndex<0)&&e.tabIndex),_=(0,n.Z)(M,2),R=_[0],T=_[1],z=Boolean(m),$=Boolean(P),W=function(){E(null)},A=function(){x(null),W()},B=(0,O.jsxs)(b.Z,{anchorEl:m,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:z,onClose:A,children:[(0,O.jsx)(j.Z,{onClick:A,children:"Profile"}),(0,O.jsx)(j.Z,{onClick:A,children:"My account"})]}),I="primary-search-account-menu-mobile",F=(0,O.jsxs)(b.Z,{anchorEl:P,anchorOrigin:{vertical:"top",horizontal:"right"},id:I,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:$,onClose:W,children:[(0,O.jsxs)(j.Z,{component:C.C,href:"/tutorials",children:[(0,O.jsx)(Z.Z,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:(0,O.jsx)(i.Z,{})}),(0,O.jsx)("p",{children:r.header.tutorial})]}),(0,O.jsxs)(j.Z,{component:C.C,href:"/installers",children:[(0,O.jsx)(Z.Z,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:(0,O.jsx)(s.Z,{})}),(0,O.jsx)("p",{children:r.header.suggested})]}),(0,O.jsxs)(j.Z,{component:C.C,href:"/faq",children:[(0,O.jsx)(Z.Z,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:(0,O.jsx)(c.Z,{})}),(0,O.jsx)("p",{children:r.header.faq})]}),(0,O.jsxs)(j.Z,{component:C.C,href:"/changelogs",children:[(0,O.jsx)(Z.Z,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:(0,O.jsx)(l.Z,{})}),(0,O.jsx)("p",{children:r.header.changelog})]}),(0,O.jsxs)(j.Z,{component:C.C,href:"/sponsors",children:[(0,O.jsx)(Z.Z,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:(0,O.jsx)(u.Z,{})}),(0,O.jsx)("p",{children:r.header.sponsor})]}),(0,O.jsxs)(j.Z,{component:C.C,href:"/about",children:[(0,O.jsx)(Z.Z,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:(0,O.jsx)(h.Z,{})}),(0,O.jsx)("p",{children:r.header.about})]})]});return(0,O.jsxs)(v.Z,{position:"relative",children:[(0,O.jsxs)(y.Z,{children:[(0,O.jsx)("img",{src:"/images/header/logo.png",style:{marginRight:16,width:48,height:48}}),(0,O.jsx)(C.C,{"aria-label":"tutorial for minecraft scepter",variant:"h6",href:"/",style:{color:"white"},children:r.header.title_logo}),(0,O.jsx)(k.Z,{sx:{flexGrow:1}}),(0,O.jsxs)(k.Z,{component:"nav",sx:function(e){return(0,o.Z)({display:"none"},e.breakpoints.up("md"),{display:"flex"})},children:[(0,O.jsxs)(N,{value:R,onChange:function(e,r){T(r)},"aria-label":"styled tabs example",children:[(0,O.jsx)(D,{label:r.header.tutorial,component:C.C,href:"/tutorials"}),(0,O.jsx)(D,{label:r.header.suggested,component:C.C,href:"/installers"}),(0,O.jsx)(D,{label:r.header.faq,component:C.C,href:"/faq"}),(0,O.jsx)(D,{label:r.header.changelog,component:C.C,href:"/changelogs"}),(0,O.jsx)(D,{label:r.header.sponsor,component:C.C,href:"/sponsors"}),(0,O.jsx)(D,{label:r.header.about,component:C.C,href:"/about"}),(0,O.jsx)(Z.Z,{LinkComponent:C.C,target:"_blank",href:"https://github.com/MinecraftCube/MinecraftCubeDesktop",children:(0,O.jsx)(k.Z,{width:32,height:32,component:"img",src:"/images/header/github64white.png"})})]}),(0,O.jsx)(w.Z,{sx:function(e){return{padding:e.spacing(3)}}})]}),(0,O.jsxs)(k.Z,{component:"nav",sx:function(e){return(0,o.Z)({display:"flex"},e.breakpoints.up("md"),{display:"none"})},children:[(0,O.jsx)(Z.Z,{"aria-label":"show more","aria-controls":I,"aria-haspopup":"true",onClick:function(e){console.log("clicked!"),function(e){console.log("open menu"),E(e.currentTarget),console.log("open menu")}(e),console.log("clicked!")},color:"inherit",children:(0,O.jsx)(p.Z,{})}),(0,O.jsx)(Z.Z,{component:C.C,target:"_blank",href:"https://github.com/MinecraftCube/MinecraftCubeDesktop",children:(0,O.jsx)(k.Z,{width:32,height:32,component:"img",src:"/images/header/github64white.png"})})]})]}),F,B]})}},7390:function(e,r,t){"use strict";var n=t(9499),o=t(4730),a=t(7294),i=t(6010),s=t(1163),c=t(1664),l=t(122),u=t(1496),h=t(5893),p=["to","linkAs","replace","scroll","shallow","prefetch","locale"],f=["activeClassName","as","className","href","linkAs","locale","noLinkStyle","prefetch","replace","role","scroll","shallow"];function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var x=(0,u.ZP)("a")({}),g=a.forwardRef((function(e,r){var t=e.to,n=e.linkAs,a=e.replace,i=e.scroll,s=e.shallow,l=e.prefetch,u=e.locale,f=(0,o.Z)(e,p);return(0,h.jsx)(c.default,{href:t,prefetch:l,as:n,replace:a,scroll:i,shallow:s,passHref:!0,locale:u,children:(0,h.jsx)(x,m({ref:r},f))})})),b=a.forwardRef((function(e,r){var t=e.activeClassName,a=void 0===t?"active":t,c=e.as,u=e.className,p=e.href,d=e.linkAs,b=e.locale,j=e.noLinkStyle,Z=e.prefetch,v=e.replace,y=(e.role,e.scroll),k=e.shallow,w=(0,o.Z)(e,f),C=(0,s.useRouter)(),O="string"===typeof p?p:p.pathname,S=(0,i.Z)(u,(0,n.Z)({},a,C.pathname===O&&a));if("string"===typeof p&&(0===p.indexOf("http")||0===p.indexOf("mailto:")))return j?(0,h.jsx)(x,m({className:S,href:p,ref:r},w)):(0,h.jsx)(l.Z,m({className:S,href:p,ref:r},w));var P={to:p,linkAs:d||c,replace:v,scroll:y,shallow:k,prefetch:Z,locale:b};return j?(0,h.jsx)(g,m(m({className:S,ref:r},P),w)):(0,h.jsx)(l.Z,m(m({component:g,className:S,ref:r},P),w))}));r.C=b},4204:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelogs",function(){return t(5463)}])},4654:function(){},3695:function(){}},function(e){e.O(0,[682,158,569,655,774,888,179],(function(){return r=4204,e(e.s=r);var r}));var r=e.O();_N_E=r}]);