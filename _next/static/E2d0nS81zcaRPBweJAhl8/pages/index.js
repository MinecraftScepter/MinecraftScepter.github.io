(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/EDR":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("23aj")}])},"23aj":function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return _});var o=t("zrwo"),r=t("kOwS"),n=t("vYYK"),i=t("q1tI"),c=t.n(i),l=t("Z3vd"),d=t("hlFM"),s=t("30+C"),p=t("oa/T"),u=t("Ie8z"),m=t("5CWz"),b=t("tRbT"),h=t("ofer"),g=t("R/WZ"),f=t("Ji2X"),y=(t("hlie"),t("m8hH")),v=t("cB7a"),x=t("Map4"),k=t("JyfM"),O=c.a.createElement;var C=Object(g.a)(function(e){return{icon:{marginRight:e.spacing(2)},heroContent:Object(n.a)({backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},e.breakpoints.down("sm"),{padding:e.spacing(2,0,4,4)}),heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)},imageFit:{objectFit:"contain",width:"100%",marginBottom:48}}});function j(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).classes,a=Object(k.b)();return O("div",{className:e.heroContent},O(f.a,{maxWidth:"md"},O("img",{className:e.imageFit,src:a.home.application})),O(f.a,{maxWidth:"sm"},O(h.a,{variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},a.home.title),O(h.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},a.home.subtitle),O("div",{className:e.heroButtons},O(b.a,{container:!0,spacing:2,justify:"center"},O(b.a,{item:!0},O(l.a,Object(r.a)({variant:"contained",color:"primary",component:y.a},{href:"/changelogs"}),O(d.a,{style:{color:"#fafad2"}},a.home.download))),O(b.a,{item:!0},O(l.a,{variant:"outlined",color:"primary"},O(d.a,Object(r.a)({fontWeight:"fontWeightBold",component:y.a},{href:"/tutorials"}),a.home.more)))))))}function w(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).classes,a=Object(k.b)(),t=[{title:a.home.feature_a_title,subtitle:a.home.feature_a_subtitle,url:a.home.feature_a_link,backgroundColor:"lightpink",color:"#000000"},,{title:a.home.feature_b_title,subtitle:a.home.feature_b_subtitle,url:a.home.feature_b_link,backgroundColor:"lightgoldenrodyellow",color:"#000000"},,{title:a.home.feature_c_title,subtitle:a.home.feature_c_subtitle,url:a.home.feature_c_link,backgroundColor:"lightgreen",color:"#000000"},,{title:a.home.feature_d_title,subtitle:a.home.feature_d_subtitle,url:a.home.feature_d_link,backgroundColor:"lightskyblue",color:"#000000"},,{title:a.home.feature_e_title,subtitle:a.home.feature_e_subtitle,url:a.home.feature_e_link,backgroundColor:"aliceblue",color:"#000000"},,{title:a.home.feature_f_title,subtitle:a.home.feature_f_subtitle,url:a.home.feature_f_link,backgroundColor:"plum",color:"#000000"},,];return O(f.a,{className:e.cardGrid,maxWidth:"md"},O(b.a,{container:!0,spacing:4},t.map(function(a){return O(b.a,{item:!0,key:a.title,xs:12,sm:6,md:4},O(s.a,{className:e.card},O(u.a,{className:e.cardMedia,image:"".concat(a.url),title:"".concat(a.title)}),O(p.a,{className:e.cardContent,style:{backgroundColor:a.backgroundColor,color:a.color}},O(h.a,{gutterBottom:!0,variant:"h5",component:"h2"},"".concat(a.title)),O(h.a,null,"".concat(a.subtitle)))))})))}function _(){var e=C({});return O(c.a.Fragment,null,O(m.a,null),O(v.a,{tabIndex:-1}),O("main",null,O(j,{classes:Object(o.a)({},e)}),O(w,{classes:Object(o.a)({},e)})),O(x.a,null))}},"30+C":function(e,a,t){"use strict";var o=t("wx14"),r=t("Ff2n"),n=t("q1tI"),i=t.n(n),c=(t("17x9"),t("iuhU")),l=t("kKAo"),d=t("H2TA"),s=i.a.forwardRef(function(e,a){var t=e.classes,n=e.className,d=e.raised,s=void 0!==d&&d,p=Object(r.a)(e,["classes","className","raised"]);return i.a.createElement(l.a,Object(o.a)({className:Object(c.a)(t.root,n),elevation:s?8:1,ref:a},p))});a.a=Object(d.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},Ie8z:function(e,a,t){"use strict";var o=t("wx14"),r=t("Ff2n"),n=t("q1tI"),i=t.n(n),c=(t("17x9"),t("iuhU")),l=t("H2TA"),d=["video","audio","picture","iframe","img"],s=i.a.forwardRef(function(e,a){var t=e.children,n=e.classes,l=e.className,s=e.component,p=void 0===s?"div":s,u=e.image,m=e.src,b=e.style,h=Object(r.a)(e,["children","classes","className","component","image","src","style"]);var g=-1!==d.indexOf(p),f=!g&&u?Object(o.a)({backgroundImage:'url("'.concat(u,'")')},b):b;return i.a.createElement(p,Object(o.a)({className:Object(c.a)(n.root,l,g&&n.media,-1!=="picture img".indexOf(p)&&n.img),ref:a,style:f,src:g?u||m:void 0},h),t)});a.a=Object(l.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(s)},Z3vd:function(e,a,t){"use strict";var o=t("Ff2n"),r=t("wx14"),n=t("q1tI"),i=t.n(n),c=(t("17x9"),t("iuhU")),l=t("H2TA"),d=t("ye/S"),s=t("VD++"),p=t("NqtD"),u=i.a.forwardRef(function(e,a){var t=e.children,n=e.classes,l=e.className,d=e.color,u=void 0===d?"default":d,m=e.component,b=void 0===m?"button":m,h=e.disabled,g=void 0!==h&&h,f=e.disableFocusRipple,y=void 0!==f&&f,v=e.endIcon,x=e.focusVisibleClassName,k=e.fullWidth,O=void 0!==k&&k,C=e.size,j=void 0===C?"medium":C,w=e.startIcon,_=e.type,S=void 0===_?"button":_,z=e.variant,N=void 0===z?"text":z,R=Object(o.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),T=w&&i.a.createElement("span",{className:Object(c.a)(n.startIcon,n["iconSize".concat(Object(p.a)(j))])},w),I=v&&i.a.createElement("span",{className:Object(c.a)(n.endIcon,n["iconSize".concat(Object(p.a)(j))])},v);return i.a.createElement(s.a,Object(r.a)({className:Object(c.a)(n.root,n[N],l,"inherit"===u?n.colorInherit:"default"!==u&&n["".concat(N).concat(Object(p.a)(u))],"medium"!==j&&[n["".concat(N,"Size").concat(Object(p.a)(j))],n["size".concat(Object(p.a)(j))]],g&&n.disabled,O&&n.fullWidth),component:b,disabled:g,focusRipple:!y,focusVisibleClassName:Object(c.a)(n.focusVisible,x),ref:a,type:S},R),i.a.createElement("span",{className:n.label},T,t,I))});a.a=Object(l.a)(function(e){return{root:Object(r.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(d.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(d.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(d.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(d.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(d.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(d.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(d.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4},endIcon:{display:"inherit",marginRight:-4,marginLeft:8},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}},{name:"MuiButton"})(u)},"oa/T":function(e,a,t){"use strict";var o=t("wx14"),r=t("Ff2n"),n=t("q1tI"),i=t.n(n),c=(t("17x9"),t("iuhU")),l=t("H2TA"),d=i.a.forwardRef(function(e,a){var t=e.classes,n=e.className,l=e.component,d=void 0===l?"div":l,s=Object(r.a)(e,["classes","className","component"]);return i.a.createElement(d,Object(o.a)({className:Object(c.a)(t.root,n),ref:a},s))});a.a=Object(l.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(d)},zrwo:function(e,a,t){"use strict";t.d(a,"a",function(){return s});var o=t("Jo+v"),r=t.n(o),n=t("4mXO"),i=t.n(n),c=t("pLtp"),l=t.n(c),d=t("vYYK");function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},o=l()(t);"function"===typeof i.a&&(o=o.concat(i()(t).filter(function(e){return r()(t,e).enumerable}))),o.forEach(function(a){Object(d.a)(e,a,t[a])})}return e}}},[["/EDR",1,0]]]);