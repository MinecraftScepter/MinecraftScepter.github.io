(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"/EDR":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("23aj")}])},"23aj":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return _}));var o=t("wx14"),r=t("rePB"),n=t("q1tI"),i=t.n(n),c=t("Z3vd"),l=t("hlFM"),d=t("30+C"),s=t("oa/T"),p=t("Ie8z"),b=t("5CWz"),u=t("tRbT"),m=t("ofer"),h=t("R/WZ"),g=t("Ji2X"),f=(t("hlie"),t("m8hH")),y=t("cB7a"),v=t("Map4"),x=t("JyfM"),O=i.a.createElement;function k(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function j(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?k(Object(t),!0).forEach((function(a){Object(r.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var w=Object(h.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:Object(r.a)({backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},e.breakpoints.down("sm"),{padding:e.spacing(2,0,4,4)}),heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)},imageFit:{objectFit:"contain",width:"100%",marginBottom:48}}}));function C(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).classes,a=Object(x.b)();return O("div",{className:e.heroContent},O(g.a,{maxWidth:"md"},O("img",{className:e.imageFit,src:a.home.application})),O(g.a,{maxWidth:"sm"},O(m.a,{variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},a.home.title),O(m.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},a.home.subtitle),O("div",{className:e.heroButtons},O(u.a,{container:!0,spacing:2,justify:"center"},O(u.a,{item:!0},O(c.a,Object(o.a)({variant:"contained",color:"primary",component:f.a},{href:"/changelogs"}),O(l.a,{style:{color:"#fafad2"}},a.home.download))),O(u.a,{item:!0},O(c.a,{variant:"outlined",color:"primary"},O(l.a,Object(o.a)({fontWeight:"fontWeightBold",component:f.a},{href:"/tutorials"}),a.home.more)))))))}function S(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).classes,a=Object(x.b)(),t=[{title:a.home.feature_a_title,subtitle:a.home.feature_a_subtitle,url:a.home.feature_a_link,backgroundColor:"lightpink",color:"#000000"},,{title:a.home.feature_b_title,subtitle:a.home.feature_b_subtitle,url:a.home.feature_b_link,backgroundColor:"lightgoldenrodyellow",color:"#000000"},,{title:a.home.feature_c_title,subtitle:a.home.feature_c_subtitle,url:a.home.feature_c_link,backgroundColor:"lightgreen",color:"#000000"},,{title:a.home.feature_d_title,subtitle:a.home.feature_d_subtitle,url:a.home.feature_d_link,backgroundColor:"lightskyblue",color:"#000000"},,{title:a.home.feature_e_title,subtitle:a.home.feature_e_subtitle,url:a.home.feature_e_link,backgroundColor:"aliceblue",color:"#000000"},,{title:a.home.feature_f_title,subtitle:a.home.feature_f_subtitle,url:a.home.feature_f_link,backgroundColor:"plum",color:"#000000"},,];return O(g.a,{className:e.cardGrid,maxWidth:"md"},O(u.a,{container:!0,spacing:4},t.map((function(a){return O(u.a,{item:!0,key:a.title,xs:12,sm:6,md:4},O(d.a,{className:e.card},O(p.a,{className:e.cardMedia,image:"".concat(a.url),title:"".concat(a.title)}),O(s.a,{className:e.cardContent,style:{backgroundColor:a.backgroundColor,color:a.color}},O(m.a,{gutterBottom:!0,variant:"h5",component:"h2"},"".concat(a.title)),O(m.a,null,"".concat(a.subtitle)))))}))))}function _(){var e=w({});return O(i.a.Fragment,null,O(b.a,null),O(y.a,{tabIndex:-1}),O("main",null,O(C,{classes:j({},e)}),O(S,{classes:j({},e)})),O(v.a,null))}},"30+C":function(e,a,t){"use strict";var o=t("wx14"),r=t("Ff2n"),n=t("q1tI"),i=(t("17x9"),t("iuhU")),c=t("kKAo"),l=t("H2TA"),d=n.forwardRef((function(e,a){var t=e.classes,l=e.className,d=e.raised,s=void 0!==d&&d,p=Object(r.a)(e,["classes","className","raised"]);return n.createElement(c.a,Object(o.a)({className:Object(i.a)(t.root,l),elevation:s?8:1,ref:a},p))}));a.a=Object(l.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(d)},Ie8z:function(e,a,t){"use strict";var o=t("wx14"),r=t("Ff2n"),n=t("q1tI"),i=(t("17x9"),t("iuhU")),c=t("H2TA"),l=["video","audio","picture","iframe","img"],d=n.forwardRef((function(e,a){var t=e.children,c=e.classes,d=e.className,s=e.component,p=void 0===s?"div":s,b=e.image,u=e.src,m=e.style,h=Object(r.a)(e,["children","classes","className","component","image","src","style"]),g=-1!==l.indexOf(p),f=!g&&b?Object(o.a)({backgroundImage:'url("'.concat(b,'")')},m):m;return n.createElement(p,Object(o.a)({className:Object(i.a)(c.root,d,g&&c.media,-1!=="picture img".indexOf(p)&&c.img),ref:a,style:f,src:g?b||u:void 0},h),t)}));a.a=Object(c.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(d)},Z3vd:function(e,a,t){"use strict";var o=t("Ff2n"),r=t("wx14"),n=t("q1tI"),i=(t("17x9"),t("iuhU")),c=t("H2TA"),l=t("ye/S"),d=t("VD++"),s=t("NqtD"),p=n.forwardRef((function(e,a){var t=e.children,c=e.classes,l=e.className,p=e.color,b=void 0===p?"default":p,u=e.component,m=void 0===u?"button":u,h=e.disabled,g=void 0!==h&&h,f=e.disableElevation,y=void 0!==f&&f,v=e.disableFocusRipple,x=void 0!==v&&v,O=e.endIcon,k=e.focusVisibleClassName,j=e.fullWidth,w=void 0!==j&&j,C=e.size,S=void 0===C?"medium":C,_=e.startIcon,z=e.type,N=void 0===z?"button":z,R=e.variant,T=void 0===R?"text":R,I=Object(o.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),E=_&&n.createElement("span",{className:Object(i.a)(c.startIcon,c["iconSize".concat(Object(s.a)(S))])},_),P=O&&n.createElement("span",{className:Object(i.a)(c.endIcon,c["iconSize".concat(Object(s.a)(S))])},O);return n.createElement(d.a,Object(r.a)({className:Object(i.a)(c.root,c[T],l,"inherit"===b?c.colorInherit:"default"!==b&&c["".concat(T).concat(Object(s.a)(b))],"medium"!==S&&[c["".concat(T,"Size").concat(Object(s.a)(S))],c["size".concat(Object(s.a)(S))]],y&&c.disableElevation,g&&c.disabled,w&&c.fullWidth),component:m,disabled:g,focusRipple:!x,focusVisibleClassName:Object(i.a)(c.focusVisible,k),ref:a,type:N},I),n.createElement("span",{className:c.label},E,t,P))}));a.a=Object(c.a)((function(e){return{root:Object(r.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(l.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(l.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(l.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(l.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(l.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(l.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(l.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(p)},"oa/T":function(e,a,t){"use strict";var o=t("wx14"),r=t("Ff2n"),n=t("q1tI"),i=(t("17x9"),t("iuhU")),c=t("H2TA"),l=n.forwardRef((function(e,a){var t=e.classes,c=e.className,l=e.component,d=void 0===l?"div":l,s=Object(r.a)(e,["classes","className","component"]);return n.createElement(d,Object(o.a)({className:Object(i.a)(t.root,c),ref:a},s))}));a.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)}},[["/EDR",0,2,1,3,4,6,5]]]);