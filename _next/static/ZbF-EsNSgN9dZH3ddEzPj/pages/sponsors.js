(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"3vis":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sponsors",function(){return a("th2Z")}])},iae6:function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),i=a("q1tI"),o=(a("17x9"),a("iuhU")),c=a("H2TA"),s=a("NqtD");function l(e){var t,a,n;return t=e,a=0,n=1,e=(Math.min(Math.max(a,t),n)-a)/(n-a),e=(e-=1)*e*e+1}var d=i.forwardRef((function(e,t){var a,c=e.classes,d=e.className,p=e.color,u=void 0===p?"primary":p,g=e.disableShrink,f=void 0!==g&&g,h=e.size,b=void 0===h?40:h,m=e.style,v=e.thickness,y=void 0===v?3.6:v,x=e.value,j=void 0===x?0:x,O=e.variant,k=void 0===O?"indeterminate":O,w=Object(r.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),N={},T={},C={};if("determinate"===k||"static"===k){var E=2*Math.PI*((44-y)/2);N.strokeDasharray=E.toFixed(3),C["aria-valuenow"]=Math.round(j),"static"===k?(N.strokeDashoffset="".concat(((100-j)/100*E).toFixed(3),"px"),T.transform="rotate(-90deg)"):(N.strokeDashoffset="".concat((a=(100-j)/100,a*a*E).toFixed(3),"px"),T.transform="rotate(".concat((270*l(j/70)).toFixed(3),"deg)"))}return i.createElement("div",Object(n.a)({className:Object(o.a)(c.root,d,"inherit"!==u&&c["color".concat(Object(s.a)(u))],{indeterminate:c.indeterminate,static:c.static}[k]),style:Object(n.a)({width:b,height:b},T,{},m),ref:t,role:"progressbar"},C,w),i.createElement("svg",{className:c.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},i.createElement("circle",{className:Object(o.a)(c.circle,f&&c.circleDisableShrink,{indeterminate:c.circleIndeterminate,static:c.circleStatic}[k]),style:N,cx:44,cy:44,r:(44-y)/2,fill:"none",strokeWidth:y})))}));t.a=Object(c.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(d)},th2Z:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return me}));var n=a("q1tI"),r=a.n(n),i=a("5CWz"),o=a("Ji2X"),c=a("hlFM"),s=a("ofer"),l=a("tRbT"),d=a("iae6"),p=a("30+C"),u=a("wx14"),g=a("Ff2n"),f=(a("17x9"),a("iuhU")),h=a("H2TA"),b=a("ye/S"),m=n.forwardRef((function(e,t){var a=e.absolute,r=void 0!==a&&a,i=e.classes,o=e.className,c=e.component,s=void 0===c?"hr":c,l=e.flexItem,d=void 0!==l&&l,p=e.light,h=void 0!==p&&p,b=e.orientation,m=void 0===b?"horizontal":b,v=e.role,y=void 0===v?"hr"!==s?"separator":void 0:v,x=e.variant,j=void 0===x?"fullWidth":x,O=Object(g.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return n.createElement(s,Object(u.a)({className:Object(f.a)(i.root,o,"fullWidth"!==j&&i[j],r&&i.absolute,d&&i.flexItem,h&&i.light,"vertical"===m&&i.vertical),role:y,ref:t},O))})),v=Object(h.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(b.b)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(m),y=n.forwardRef((function(e,t){var a=e.classes,r=e.className,i=e.component,o=void 0===i?"div":i,c=Object(g.a)(e,["classes","className","component"]);return n.createElement(o,Object(u.a)({ref:t,className:Object(f.a)(a.root,r)},c))})),x=Object(h.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(y);var j=n.createContext(),O=n.forwardRef((function(e,t){var a=e.classes,r=e.className,i=e.component,o=void 0===i?"table":i,c=e.padding,s=void 0===c?"default":c,l=e.size,d=void 0===l?"medium":l,p=e.stickyHeader,h=void 0!==p&&p,b=Object(g.a)(e,["classes","className","component","padding","size","stickyHeader"]),m=n.useMemo((function(){return{padding:s,size:d,stickyHeader:h}}),[s,d,h]);return n.createElement(j.Provider,{value:m},n.createElement(o,Object(u.a)({ref:t,className:Object(f.a)(a.root,r,h&&a.stickyHeader)},b)))})),k=Object(h.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(u.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(O);var w=n.createContext(),N={variant:"head"},T=n.forwardRef((function(e,t){var a=e.classes,r=e.className,i=e.component,o=void 0===i?"thead":i,c=Object(g.a)(e,["classes","className","component"]);return n.createElement(w.Provider,{value:N},n.createElement(o,Object(u.a)({className:Object(f.a)(a.root,r),ref:t},c)))})),C=Object(h.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(T),E=n.forwardRef((function(e,t){var a=e.classes,r=e.className,i=e.component,o=void 0===i?"tr":i,c=e.hover,s=void 0!==c&&c,l=e.selected,d=void 0!==l&&l,p=Object(g.a)(e,["classes","className","component","hover","selected"]),h=n.useContext(w);return n.createElement(o,Object(u.a)({ref:t,className:Object(f.a)(a.root,r,h&&{head:a.head,footer:a.footer}[h.variant],s&&a.hover,d&&a.selected)},p))})),L=Object(h.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected,&$selected:hover":{backgroundColor:Object(b.b)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(E),S=a("NqtD"),P=n.forwardRef((function(e,t){var a,r=e.align,i=void 0===r?"inherit":r,o=e.classes,c=e.className,s=e.component,l=e.padding,d=e.scope,p=e.size,h=e.sortDirection,b=e.variant,m=Object(g.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),v=n.useContext(j),y=n.useContext(w);a=s||(y&&"head"===y.variant?"th":"td");var x=d;!x&&y&&"head"===y.variant&&(x="col");var O=l||(v&&v.padding?v.padding:"default"),k=p||(v&&v.size?v.size:"medium"),N=b||y&&y.variant,T=null;return h&&(T="asc"===h?"ascending":"descending"),n.createElement(a,Object(u.a)({ref:t,className:Object(f.a)(o.root,o[N],c,"inherit"!==i&&o["align".concat(Object(S.a)(i))],"default"!==O&&o["padding".concat(Object(S.a)(O))],"medium"!==k&&o["size".concat(Object(S.a)(k))],"head"===N&&v&&v.stickyHeader&&o.stickyHeader),"aria-sort":T,scope:x},m))})),R=Object(h.a)((function(e){return{root:Object(u.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(b.d)(Object(b.b)(e.palette.divider,1),.88):Object(b.a)(Object(b.b)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0px 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(P),M={variant:"body"},V=n.forwardRef((function(e,t){var a=e.classes,r=e.className,i=e.component,o=void 0===i?"tbody":i,c=Object(g.a)(e,["classes","className","component"]);return n.createElement(w.Provider,{value:M},n.createElement(o,Object(u.a)({className:Object(f.a)(a.root,r),ref:t},c)))})),D=Object(h.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(V),W=a("PsDL"),z=a("HR5l");function H(e,t){var a=r.a.memo(r.a.forwardRef((function(t,a){return r.a.createElement(z.a,Object(u.a)({ref:a},t),e)})));return a.muiName=z.a.muiName,a}var _,I=H(r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{d:"M14 7l-5 5 5 5V7z"}),r.a.createElement("path",{fill:"none",d:"M24 0v24H0V0h24z"}))),A=H(r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{d:"M10 17l5-5-5-5v10z"}),r.a.createElement("path",{fill:"none",d:"M0 24V0h24v24H0z"}))),F=a("R/WZ"),B=a("cB7a"),G=a("Map4"),J=a("JyfM"),$=a("o0o1"),q=a.n($),U=a("vuIU"),X=a("md7G"),Z=a("foSv"),Y=a("JX7q"),K=a("Ji7U"),Q=a("rePB"),ee=a("1OyB"),te=a("iGi1"),ae=a("16gb"),ne=a("Zova"),re=a("Cypo"),ie=a("6jkG"),oe=a("6/NU"),ce=function e(){Object(ee.a)(this,e)};!function(e){e[e.Top=0]="Top",e[e.Latest=1]="Latest"}(_||(_={}));var se=function(e){function t(e){var a;return Object(ee.a)(this,t),a=Object(X.a)(this,Object(Z.a)(t).call(this)),Object(Q.a)(Object(Y.a)(a),"type",void 0),a.type=e,a}return Object(K.a)(t,e),t}(ce),le=function(e){function t(){return Object(ee.a)(this,t),Object(X.a)(this,Object(Z.a)(t).apply(this,arguments))}return Object(K.a)(t,e),t}(ce),de=function(e){function t(){return Object(ee.a)(this,t),Object(X.a)(this,Object(Z.a)(t).apply(this,arguments))}return Object(K.a)(t,e),t}(ce),pe=function(){function e(t,a,n,r,i){Object(ee.a)(this,e),this.isNextValid=t,this.isPrevValid=a,this.isLoading=n,this.page=r,this.datas=i}return Object(U.a)(e,[{key:"copyWith",value:function(t){var a=t.isNextValid,n=t.isPrevValid,r=t.isLoading,i=t.page,o=t.datas;return new e(null!=a?a:this.isNextValid,null!=n?n:this.isPrevValid,null!=r?r:this.isLoading,null!=i?i:this.page,null!=o?o:this.datas)}}],[{key:"empty",value:function(){return new e(!0,!1,!1,0,[])}}]),e}(),ue=function(e){function t(){var e,a;Object(ee.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a=Object(X.a)(this,(e=Object(Z.a)(t)).call.apply(e,[this].concat(r))),Object(Q.a)(Object(Y.a)(a),"type",void 0),a}return Object(K.a)(t,e),Object(U.a)(t,[{key:"initialState",value:function(){return pe.empty()}},{key:"mapEventToState",value:function(e){var t=this;return Object(te.a)(q.a.mark((function a(){return q.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(e instanceof se)){a.next=5;break}return t.type=e.type,a.delegateYield(Object(re.a)(Object(ne.a)(t._mapPageStartEventToState(e)),ae.a),"t0",3);case 3:a.next=11;break;case 5:if(!(e instanceof le)){a.next=9;break}return a.delegateYield(Object(re.a)(Object(ne.a)(t._mapNextPageEventToState(e)),ae.a),"t1",7);case 7:a.next=11;break;case 9:if(!(e instanceof de)){a.next=11;break}return a.delegateYield(Object(re.a)(Object(ne.a)(t._mapPreviousPageEventToState(e)),ae.a),"t2",11);case 11:case"end":return a.stop()}}),a)})))()}},{key:"_mapPageStartEventToState",value:function(e){var t=this;return Object(te.a)(q.a.mark((function e(){var a,n,r;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.currentState,e.next=3,a.copyWith({isLoading:!0});case 3:if(t.type!=_.Top){e.next=9;break}return e.next=6,Object(ae.a)(oe.a.getTop(0));case 6:return n=e.sent,e.next=9,a.copyWith({isLoading:!1,isPrevValid:!1,isNextValid:10==n.length,page:0,datas:n});case 9:if(t.type!=_.Latest){e.next=15;break}return e.next=12,Object(ae.a)(oe.a.getLatest(0));case 12:return r=e.sent,e.next=15,a.copyWith({isLoading:!1,isPrevValid:!1,isNextValid:10==r.length,page:0,datas:r});case 15:case"end":return e.stop()}}),e)})))()}},{key:"_mapNextPageEventToState",value:function(e){var t=this;return Object(te.a)(q.a.mark((function e(){var a,n,r,i,o;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.currentState,e.next=3,a.copyWith({isLoading:!0});case 3:if(t.type!=_.Top){e.next=10;break}return e.next=6,Object(ae.a)(oe.a.getTop(a.page+1));case 6:return n=e.sent,r=0==n.length?a.page:a.page+1,e.next=10,a.copyWith({isLoading:!1,isPrevValid:0!==r,isNextValid:10==n.length,page:r,datas:n});case 10:if(t.type!=_.Latest){e.next=17;break}return e.next=13,Object(ae.a)(oe.a.getLatest(a.page+1));case 13:return i=e.sent,o=0==i.length?a.page:a.page+1,e.next=17,a.copyWith({isLoading:!1,isPrevValid:0!==o,isNextValid:10==i.length,page:o,datas:i});case 17:case"end":return e.stop()}}),e)})))()}},{key:"_mapPreviousPageEventToState",value:function(e){var t=this;return Object(te.a)(q.a.mark((function e(){var a,n,r;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.currentState,e.next=3,a.copyWith({isLoading:!0});case 3:if(t.type!=_.Top){e.next=9;break}return e.next=6,Object(ae.a)(oe.a.getTop(Math.max(0,a.page-1)));case 6:return n=e.sent,e.next=9,a.copyWith({isLoading:!1,isPrevValid:a.page-1>0,isNextValid:!0,page:Math.max(0,a.page-1),datas:n});case 9:if(t.type!=_.Latest){e.next=15;break}return e.next=12,Object(ae.a)(oe.a.getLatest(Math.max(0,a.page-1)));case 12:return r=e.sent,e.next=15,a.copyWith({isLoading:!1,isPrevValid:a.page-1>0,isNextValid:!0,page:Math.max(0,a.page-1),datas:r});case 15:case"end":return e.stop()}}),e)})))()}}]),t}(ie.a),ge=a("Kfyr"),fe=a("GZrG"),he=r.a.createElement,be=Object(F.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}}));function me(){be({});var e=Object(J.b)();return he(r.a.Fragment,null,he(i.a,null),he(B.a,{tabIndex:2}),he("main",null,he(o.a,{style:{paddingTop:16}},he(c.a,{style:{borderBottom:"2px solid"}},he(s.a,{variant:"h4"},e.sponsor.donators)),he(c.a,{height:16}),he(l.a,{container:!0,spacing:2,style:{paddingLeft:16,paddingRight:16}},he(l.a,{item:!0,sm:6},he(ve,null)),he(l.a,{item:!0,sm:6},he(ye,null))))),he(G.a,{style:void 0}))}function ve(){var e=Object(ge.a)(new ue),t=Object(J.b)();return r.a.useEffect((function(){e.dispatch(new se(_.Top))})),he(fe.a,{bloc:e,builder:function(a){if(a.isLoading)return he(d.a,null);var n=a.datas;return he(p.a,{elevation:8,style:{padding:8}},he(s.a,null,"\ud83c\udfc6",t.sponsor.top_donation),he(v,null),he(c.a,{height:16}),he(x,null,he(k,{style:{borderTopLeftRadius:16,borderTopRightRadius:16,overflow:"hidden"}},he(C,{style:{backgroundColor:"rgb(139,115,108)",outlineColor:"beige",outlineStyle:"outset"}},he(L,null,he(R,{style:{fontWeight:"bold",color:"rgb(255,244,119)"}},t.sponsor.donator),he(R,{style:{fontWeight:"bold",color:"rgb(255,244,119)"},align:"right"},t.sponsor.moeny))),he(D,{style:{color:"rgb(97,63,0)"}},n.map((function(e,t){return he(L,{style:{backgroundColor:"#ffffc7"}},he(R,null,0==a.page?0==t?"\ud83d\udc51".concat(e.names[e.names.length-1]):1==t?"\u2b50\ufe0f".concat(e.names[e.names.length-1]):2==t?"\ud83d\ude80".concat(e.names[e.names.length-1]):"".concat(e.names[e.names.length-1]):"".concat(e.names[e.names.length-1])),he(R,{align:"right"},"TWD ",e.total))})))),he("div",{style:{float:"right"}},he("span",null,he(W.a,{disabled:!a.isPrevValid,onClick:function(t){return e.dispatch(new de)}},he(I,null)),he(W.a,{disabled:!a.isNextValid,onClick:function(t){return e.dispatch(new le)}},he(A,null))))))}})}function ye(){var e=Object(ge.a)(new ue),t=Object(J.b)();return r.a.useEffect((function(){e.dispatch(new se(_.Latest))})),he(fe.a,{bloc:e,builder:function(a){if(a.isLoading)return he(d.a,null);var n=a.datas;return he(p.a,{elevation:8,style:{padding:8}},he(s.a,null,"\ud83c\udd95",t.sponsor.new_donation),he(v,null),he(c.a,{height:16}),he(x,null,he(k,{style:{borderTopLeftRadius:16,borderTopRightRadius:16,overflow:"hidden"}},he(C,{style:{backgroundColor:"rgb(139,115,108)",outlineColor:"beige",outlineStyle:"outset"}},he(L,null,he(R,{style:{fontWeight:"bold",color:"rgb(255,244,119)"}},t.sponsor.donator),he(R,{style:{fontWeight:"bold",color:"rgb(255,244,119)"},align:"right"},t.sponsor.moeny))),he(D,{style:{color:"rgb(97,63,0)"}},n.map((function(e,t){return he(L,{style:{backgroundColor:"#ffffc7"}},he(R,null,"".concat(e.name)),he(R,{align:"right"},"TWD ",e.price))})))),he("div",{style:{float:"right"}},he("span",null,he(W.a,{disabled:!a.isPrevValid,onClick:function(t){return e.dispatch(new de)}},he(I,null)),he(W.a,{disabled:!a.isNextValid,onClick:function(t){return e.dispatch(new le)}},he(A,null))))))}})}}},[["3vis",0,2,8,1,3,4,5,6,7,10]]]);