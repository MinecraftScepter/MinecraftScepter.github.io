(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"30+C":function(t,a,e){"use strict";var r=e("wx14"),o=e("Ff2n"),n=e("q1tI"),i=e.n(n),c=(e("17x9"),e("iuhU")),s=e("kKAo"),l=e("H2TA"),u=i.a.forwardRef(function(t,a){var e=t.classes,n=t.className,l=t.raised,u=void 0!==l&&l,d=Object(o.a)(t,["classes","className","raised"]);return i.a.createElement(s.a,Object(r.a)({className:Object(c.a)(e.root,n),elevation:u?8:1,ref:a},d))});a.a=Object(l.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(u)},DgMe:function(t,a,e){"use strict";e.r(a);var r=e("q1tI"),o=e.n(r),n=e("hlFM"),i=e("30+C"),c=e("oa/T"),s=e("5CWz"),l=e("wx14"),u=e("Ff2n"),d=(e("17x9"),e("iuhU")),m=e("H2TA"),p=e("NqtD");function f(t){var a,e,r;return a=t,e=0,r=1,t=(Math.min(Math.max(e,a),r)-e)/(r-e),t=(t-=1)*t*t+1}var g=o.a.forwardRef(function(t,a){var e,r=t.classes,n=t.className,i=t.color,c=void 0===i?"primary":i,s=t.disableShrink,m=void 0!==s&&s,g=t.size,b=void 0===g?40:g,h=t.style,v=t.thickness,k=void 0===v?3.6:v,w=t.value,x=void 0===w?0:w,y=t.variant,C=void 0===y?"indeterminate":y,N=Object(u.a)(t,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),j={},D={},O={};if("determinate"===C||"static"===C){var T=2*Math.PI*((44-k)/2);j.strokeDasharray=T.toFixed(3),O["aria-valuenow"]=Math.round(x),"static"===C?(j.strokeDashoffset="".concat(((100-x)/100*T).toFixed(3),"px"),D.transform="rotate(-90deg)"):(j.strokeDashoffset="".concat((e=(100-x)/100,e*e*T).toFixed(3),"px"),D.transform="rotate(".concat((270*f(x/70)).toFixed(3),"deg)"))}return o.a.createElement("div",Object(l.a)({className:Object(d.a)(r.root,n,"inherit"!==c&&r["color".concat(Object(p.a)(c))],{indeterminate:r.indeterminate,static:r.static}[C]),style:Object(l.a)({width:b,height:b},D,{},h),ref:a,role:"progressbar"},O,N),o.a.createElement("svg",{className:r.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},o.a.createElement("circle",{className:Object(d.a)(r.circle,m&&r.circleDisableShrink,{indeterminate:r.circleIndeterminate,static:r.circleStatic}[C]),style:j,cx:44,cy:44,r:(44-k)/2,fill:"none",strokeWidth:k})))}),b=Object(m.a)(function(t){return{root:{display:"inline-block"},static:{transition:t.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:t.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}},{name:"MuiCircularProgress",flip:!1})(g),h=e("tRbT"),v=e("ofer"),k=e("R/WZ"),w=e("Ji2X"),x=e("cB7a"),y=e("Map4");e.d(a,"default",function(){return j});var C=o.a.createElement,N=Object(k.a)(function(t){return{icon:{marginRight:t.spacing(2)},heroContent:{backgroundColor:t.palette.background.paper,padding:t.spacing(8,0,6)},heroButtons:{marginTop:t.spacing(4)},cardGrid:{paddingTop:t.spacing(8),paddingBottom:t.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:t.palette.background.paper,padding:t.spacing(6)},videoWrapper:{position:"relative",paddingBottom:"56.25%",paddingTop:25,backgroundColor:"#000000aa","& iframe":{position:"absolute",top:0,left:0,width:"100%",height:"100%"}}}});function j(){var t=N({});return C(o.a.Fragment,null,C(s.a,null),C(x.a,{tabIndex:0}),C("main",null,C(T,{classes:t})),C(y.a,null))}var D=[{title:"\u8edf\u9ad4\u4ecb\u7d39",subtitle:"\u5e36\u4f60\u7565\u904e\u6240\u6709\u529f\u80fd\u7684\u610f\u7fa9\uff0c\u8b93\u4f60\u77e5\u9053\u539f\u4f86\u958b\u670d\u8981\u6ce8\u610f\u7684\uff0c\u90fd\u5e6b\u4f60\u6e96\u5099\u597d\u4e86\uff01",url:"https://www.youtube.com/embed/zcT7KYsxPJI",backgroundColor:"lightgoldenrodyellow",color:"#000000"},,{title:"\u4e00\u9375\u5b89\u88dd",subtitle:"\u5229\u7528\u5e78\u904b\u65b9\u584a\uff0c\u5e36\u4f60\u4e86\u89e3\u6a21\u7d44\u4f3a\u670d\u5668\u958b\u670d\uff0c\u539f\u4f86\u9019\u9ebc\u7c21\u55ae\uff01",url:"https://www.youtube.com/embed/SnSE_lr5Gpw",backgroundColor:"plum",color:"#000000"},,{title:"\u5b89\u88dd\u5305\u88fd\u4f5c",subtitle:"\u60f3\u4e86\u89e3\u600e\u9ebc\u88fd\u4f5c\u5b89\u88dd\u5305\u55ce\uff1f\u5c31\u770b\u9019\u90e8\u5f71\u7247\uff0c\u5f9e\u88fd\u4f5c -> \u4e0a\u50b3 -> \u6e2c\u8a66\uff0c\u5e36\u4f60\u8d70\u4e00\u904d\u3002",url:"https://www.youtube.com/embed/E9auOMjV3qg",backgroundColor:"lightgreen",color:"#000000"}],O=[{title:"\u5f9e\u7121\u5230\u6709",subtitle:"\u7406\u8ad6\u57fa\u790e\u5f9e\u300c\u96f6\u300d\u5b78\u8d77\uff0c\u767d\u624b\u958b\u555f\u4e00\u500b\u591a\u4eba\u4f3a\u670d\u5668\uff01",url:"https://www.youtube.com/embed/7Pp2UeKL5I4",backgroundColor:"lightskyblue",color:"#000000"},,{title:"Forge\u4f3a\u670d\u5668",subtitle:"\u60f3\u73a9\u6a21\u7d44\uff0c\u7528 Forge \u5c31\u5c0d\u4e86\uff01\u5f9e\u4e0b\u8f09\u3001\u5b89\u88dd\u3001\u6e2c\u8a66\uff0c\u8dd1\u4e00\u904d\u5168\u76e4\u4e86\u89e3\u3002",url:"https://www.youtube.com/embed/9TE5gg8QqK0",backgroundColor:"aliceblue",color:"#000000"},,];function T(t){var a=t.classes;return C(w.a,{className:a.cardGrid,maxWidth:"md"},C(v.a,{variant:"h4",gutterBottom:!0,style:{paddingBottom:16}},"\u73fe\u4ee3\u5316\u958b\u670d\u6559\u5b78 (\u5275\u4e16\u795e\u6b0a\u6756)"),C(h.a,{container:!0,spacing:4},D.map(function(t){return C(h.a,{item:!0,key:t.title,xs:12,sm:12,md:12},C(i.a,{className:a.card},C("div",{className:a.videoWrapper},C(F,{url:t.url})),C(c.a,{className:a.cardContent,style:{backgroundColor:t.backgroundColor,color:t.color}},C(v.a,{gutterBottom:!0,variant:"h5",component:"h2"},"".concat(t.title)),C(v.a,null,"".concat(t.subtitle)))))})),C(n.a,{mt:16}),C(v.a,{variant:"h4",gutterBottom:!0,style:{paddingBottom:16}},"\u50b3\u7d71\u958b\u670d\u6559\u5b78"),C(h.a,{container:!0,spacing:4},O.map(function(t){return C(h.a,{item:!0,key:t.title,xs:12,sm:12,md:12},C(i.a,{className:a.card},C("div",{className:a.videoWrapper},C(F,{url:t.url})),C(c.a,{className:a.cardContent,style:{backgroundColor:t.backgroundColor,color:t.color}},C(v.a,{gutterBottom:!0,variant:"h5",component:"h2"},"".concat(t.title)),C(v.a,null,"".concat(t.subtitle)))))})))}var B=Object(k.a)(function(t){return{circular:{position:"absolute !important",left:"calc(50% - 60px) !important",top:"calc(50% - 60px) !important",color:"antiquewhite"}}});function F(t){var a=t.url,e=B({}),n=Object(r.useState)(!1),i=n[0],c=n[1];return C(o.a.Fragment,null,C("iframe",{src:a,frameBorder:"0",onLoad:function(t){return c(!0)},allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),!i&&C(b,{classes:{root:e.circular},size:120}))}},GRCD:function(t,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorials",function(){return e("DgMe")}])},"oa/T":function(t,a,e){"use strict";var r=e("wx14"),o=e("Ff2n"),n=e("q1tI"),i=e.n(n),c=(e("17x9"),e("iuhU")),s=e("H2TA"),l=i.a.forwardRef(function(t,a){var e=t.classes,n=t.className,s=t.component,l=void 0===s?"div":s,u=Object(o.a)(t,["classes","className","component"]);return i.a.createElement(l,Object(r.a)({className:Object(c.a)(e.root,n),ref:a},u))});a.a=Object(s.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)}},[["GRCD",1,0]]]);