(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[39],{5965:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return oe}});var r=n(29),a=n(2640),i=n(7794),o=n.n(i),c=n(2287),s=n(4054),u=n(315),l=n(431),p=n(9661),d=n(9226),f=n(3321),h=n(6242),m=n(7948),v=n(6720),y=n(6886),x=n(5861),w=n(3845),Z=n(2777),b=n(2262),g=n(5959),j=n(3553),k=n(7247),O=n(9499),P=n(7294),S=n(3935),C=n(5893);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,O.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,k.Z)(e);if(t){var a=(0,k.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,j.Z)(this,n)}}var R=function(e){(0,g.Z)(n,e);var t=T(n);function n(e){var r;return(0,Z.Z)(this,n),(r=t.call(this,e)).state={isSdkReady:!1},r}return(0,b.Z)(n,[{key:"componentDidMount",value:function(){void 0!==window&&void 0===window.paypal?this.addPaypalSdk():void 0!==window&&void 0!==window.paypal&&this.props.onButtonReady&&this.props.onButtonReady()}},{key:"createOrder",value:function(e,t){var n=this.props,r=n.currency,a=n.options,i=n.amount,o=n.shippingPreference;return t.order.create({purchase_units:[{amount:{currency_code:r||(a&&a.currency?a.currency:"USD"),value:i.toString()}}],application_context:{shipping_preference:o}})}},{key:"onApprove",value:function(e,t){var n=this;return t.order.capture().then((function(t){if(n.props.onSuccess)return n.props.onSuccess(t,e)})).catch((function(e){if(n.props.catchError)return n.props.catchError(e)}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.amount,r=t.onSuccess,a=t.createOrder,i=t.createSubscription,o=t.onApprove,c=t.style;if(!this.state.isSdkReady&&void 0===window.paypal)return null;var s=window.paypal.Buttons.driver("react",{React:P,ReactDOM:S}),u=n&&!a?function(t,n){return e.createOrder(t,n)}:function(e,t){return a(e,t)};return(0,C.jsx)(s,_(_({},this.props),{},{createOrder:i?void 0:u,createSubscription:i,onApprove:r?function(t,n){return e.onApprove(t,n)}:function(e,t){return o(e,t)},style:c}))}},{key:"addPaypalSdk",value:function(){var e,t,r=this,i=this.props,o=i.options,c=i.onButtonReady,s=(e=_(_({},n.defaultProps.options),o),t=function(e){return e.split(/(?=[A-Z])/).join("-").toLowerCase()},Object.entries(e).reduce((function(e,n){var r=(0,a.Z)(n,2),i=r[0],o=r[1];return e.push("".concat(t(i),"=").concat(o)),e}),[]).join("&")),u=document.createElement("script");u.type="text/javascript",u.src="https://www.paypal.com/sdk/js?".concat(s),u.async=!0,u.onload=function(){r.setState({isSdkReady:!0}),c&&c()},u.onerror=function(){throw new Error("Paypal SDK could not be loaded.")},document.body.appendChild(u)}}]),n}(P.Component);(0,O.Z)(R,"defaultProps",{style:{},options:{clientId:"sb",currency:"USD",disableFunding:"credit,card"},shippingPreference:"GET_FROM_FILE"});var V=n(732),D=n(7390),L=n(3610);var I=n(4730),M=n(8271),W=["observedValue","observedChanged","value","onChange"];function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var N=function(e){var t=e.observedValue,n=e.observedChanged,r=(e.value,e.onChange,(0,I.Z)(e,W)),i=P.useState(t),o=(0,a.Z)(i,2),c=o[0],s=o[1];return P.useEffect((function(){c!==t&&n(c)}),[c]),P.useEffect((function(){c!==t&&s(t)}),[t]),(0,C.jsx)(M.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){(0,O.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({value:c,onChange:function(e){s(e.currentTarget.value)}},r))},Y=n(2118),B=n(6496),F=n(6690),U=n(8607),z=n(7994),q=n(1047);function G(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,k.Z)(e);if(t){var a=(0,k.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,j.Z)(this,n)}}var $=function e(){(0,Z.Z)(this,e)},K=function(e){(0,g.Z)(n,e);var t=G(n);function n(e){var r;return(0,Z.Z)(this,n),(r=t.call(this)).email=e,r}return n}($),Q=function(e){(0,g.Z)(n,e);var t=G(n);function n(e){var r;return(0,Z.Z)(this,n),(r=t.call(this)).name=e,r}return n}($),X=function(e){(0,g.Z)(n,e);var t=G(n);function n(e){var r;return(0,Z.Z)(this,n),(r=t.call(this)).currency=e,r}return n}($),H=function(e){(0,g.Z)(n,e);var t=G(n);function n(e){var r;return(0,Z.Z)(this,n),(r=t.call(this)).price=e,r}return n}($),J=function(e){(0,g.Z)(n,e);var t=G(n);function n(e){var r;return(0,Z.Z)(this,n),(r=t.call(this)).title=e,r}return n}($),ee=function(e){(0,g.Z)(n,e);var t=G(n);function n(e){var r;return(0,Z.Z)(this,n),(r=t.call(this)).comment=e,r}return n}($),te=function(e){(0,g.Z)(n,e);var t=G(n);function n(e){var r;return(0,Z.Z)(this,n),(r=t.call(this)).window=e,r}return n}($),ne=function(e){(0,g.Z)(n,e);var t=G(n);function n(e,r){var a;return(0,Z.Z)(this,n),(a=t.call(this)).window=e,a.orderId=r,a}return n}($);var re=function(){function e(t,n,r,a,i,o,c,s){(0,Z.Z)(this,e),this.isEmailValid=t,this.isPriceValid=n,this.email=r,this.name=a,this.currency=i,this.price=o,this.title=c,this.comment=s,this.isEmailValid=t,this.isPriceValid=n,this.email=r,this.name=a,this.currency=i,this.price=o,this.title=c,this.comment=s}return(0,b.Z)(e,[{key:"isFormValid",get:function(){return""!==this.email&&("usd"===this.currency.toLowerCase()?this.price>=1:this.price>=30)}},{key:"copyWith",value:function(t){var n=t.isEmailValid,r=t.isPriceValid,a=t.email,i=t.name,o=t.currency,c=t.price,s=t.title,u=t.comment;return new e(null!=n?n:this.isEmailValid,null!=r?r:this.isPriceValid,null!=a?a:this.email,null!=i?i:this.name,null!=o?o:this.currency,null!=c?c:this.price,null!=s?s:this.title,null!=u?u:this.comment)}}],[{key:"empty",value:function(){return new e(!0,!0,"","","TWD",0,"","")}}]),e}(),ae=function(e){(0,g.Z)(n,e);var t=G(n);function n(){return(0,Z.Z)(this,n),t.call(this,re.empty())}return(0,b.Z)(n,[{key:"mapEventToState",value:function(e){var t=this;return(0,Y.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e instanceof K)){n.next=4;break}return n.delegateYield((0,U.Z)((0,F.Z)(t._mapModifyEmailEventToState(e)),B.Z),"t0",2);case 2:case 6:case 10:case 14:case 18:case 22:case 26:n.next=30;break;case 4:if(!(e instanceof Q)){n.next=8;break}return n.delegateYield((0,U.Z)((0,F.Z)(t._mapModifyNameEventToState(e)),B.Z),"t1",6);case 8:if(!(e instanceof H)){n.next=12;break}return n.delegateYield((0,U.Z)((0,F.Z)(t._mapModifyPriceEventToState(e)),B.Z),"t2",10);case 12:if(!(e instanceof J)){n.next=16;break}return n.delegateYield((0,U.Z)((0,F.Z)(t._mapModifyTitleEventToState(e)),B.Z),"t3",14);case 16:if(!(e instanceof ee)){n.next=20;break}return n.delegateYield((0,U.Z)((0,F.Z)(t._mapModifyCommentEventToState(e)),B.Z),"t4",18);case 20:if(!(e instanceof X)){n.next=24;break}return n.delegateYield((0,U.Z)((0,F.Z)(t._mapModifyCurrencyEventToState(e)),B.Z),"t5",22);case 24:if(!(e instanceof te)){n.next=28;break}return n.delegateYield((0,U.Z)((0,F.Z)(t._mapSubmitEventToState(e)),B.Z),"t6",26);case 28:if(!(e instanceof ne)){n.next=30;break}return n.delegateYield((0,U.Z)((0,F.Z)(t._mapSubmitPaypalEventToState(e)),B.Z),"t7",30);case 30:case"end":return n.stop()}}),n)})))()}},{key:"_mapModifyEmailEventToState",value:function(e){var t=this;return(0,Y.Z)(o().mark((function n(){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.state,n.next=3,r.copyWith({isEmailValid:(a=e.email,!/(\.{2}|-{2}|_{2})/.test(a)&&/^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test(a)),email:e.email});case 3:case"end":return n.stop()}var a}),n)})))()}},{key:"_mapModifyNameEventToState",value:function(e){var t=this;return(0,Y.Z)(o().mark((function n(){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.state,n.next=3,r.copyWith({name:e.name});case 3:case"end":return n.stop()}}),n)})))()}},{key:"_mapModifyPriceEventToState",value:function(e){var t=this;return(0,Y.Z)(o().mark((function n(){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.state,n.next=3,r.copyWith({isPriceValid:"usd"===r.currency.toLowerCase()?e.price>=1:e.price>=30,price:e.price});case 3:case"end":return n.stop()}}),n)})))()}},{key:"_mapModifyTitleEventToState",value:function(e){var t=this;return(0,Y.Z)(o().mark((function n(){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.state,n.next=3,r.copyWith({title:e.title});case 3:case"end":return n.stop()}}),n)})))()}},{key:"_mapModifyCommentEventToState",value:function(e){var t=this;return(0,Y.Z)(o().mark((function n(){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.state,n.next=3,r.copyWith({comment:e.comment});case 3:case"end":return n.stop()}}),n)})))()}},{key:"_mapModifyCurrencyEventToState",value:function(e){var t=this;return(0,Y.Z)(o().mark((function n(){var r,a,i,c;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.state,a=r.currency,i=e.currency,a!=i){n.next=5;break}return n.abrupt("return");case 5:return c=r.price,"usd"==a.toLowerCase()&&"twd"==i.toLowerCase()&&(c*=30),"twd"==a.toLowerCase()&&"usd"==i.toLowerCase()&&(c/=30),n.next=10,r.copyWith({currency:e.currency,price:Number(c.toFixed(2)),isPriceValid:"usd"===i.toLowerCase()?c>=1:c>=30});case 10:case"end":return n.stop()}}),n)})))()}},{key:"_mapSubmitEventToState",value:function(e){var t=this;return(0,Y.Z)(o().mark((function n(){var r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.state,n.next=3,(0,B.Z)(q.Z.getRedirectUrl({title:r.title,comment:r.comment,email:r.email,name:r.name,price:"usd"===r.currency.toLowerCase()?30*r.price:r.price}));case 3:a=n.sent,console.log(e.window),console.log(a),e.window.location.href=a;case 7:case"end":return n.stop()}}),n)})))()}},{key:"_mapSubmitPaypalEventToState",value:function(e){var t=this;return(0,Y.Z)(o().mark((function n(){var r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.state,n.next=3,(0,B.Z)(q.Z.postPaypalCheckout({title:r.title,comment:r.comment,email:r.email,name:r.name,price:"usd"===r.currency.toLowerCase()?30*r.price:r.price,orderId:e.orderId}));case 3:a=n.sent,console.log(a);case 5:case"end":return n.stop()}}),n)})))()}}]),n}(z.T1);function ie(){var e=(0,L.$f)();return(0,C.jsxs)(x.Z,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",(0,C.jsx)(D.C,{color:"inherit",href:"minecraftscepter.github.io/",children:e.header.title_logo})," ",(new Date).getFullYear(),"."]})}function oe(){var e=function(e){var t=(0,P.useState)(e)[0],n=(0,P.useState)(e.state),r=n[0],a=n[1];return(0,P.useEffect)((function(){var e=t.listen((function(e){a(e)}));return function(){e.unsubscribe()}}),[]),[r,t]}(new ae),t=(0,a.Z)(e,2),n=t[0],i=t[1],Z=(0,L.$f)();return(0,C.jsxs)(m.Z,{component:"main",maxWidth:"xs",children:[(0,C.jsx)(v.ZP,{}),(0,C.jsx)(c.Z,{styles:{body:{backgroundColor:"#fafad2"}}}),(0,C.jsxs)(h.Z,{sx:function(e){return{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"white",padding:32,borderRadius:16,boxShadow:"0px 5px 5px -3px rgba(255, 90, 90, 0.2), 0px 8px 10px 1px rgba(255, 82, 0, 0.14), 0px 3px 14px 2px rgba(251, 255, 0, 0.12)"}},elevation:8,children:[(0,C.jsx)(p.Z,{sx:function(e){return{margin:e.spacing(1),backgroundColor:e.palette.secondary.main}},children:(0,C.jsx)(w.Z,{})}),(0,C.jsx)(x.Z,{component:"h1",variant:"h5",children:Z.donation.donation_basic}),(0,C.jsxs)(d.Z,{component:"form",sx:function(e){return{width:"100%",marginTop:e.spacing(3)}},noValidate:!0,children:[(0,C.jsxs)(y.ZP,{container:!0,spacing:2,children:[(0,C.jsx)(y.ZP,{item:!0,xs:12,children:(0,C.jsx)(N,{label:"Email",variant:"outlined",id:"email",name:"email",observedValue:n.email,error:!n.isEmailValid,helperText:n.isEmailValid?"":"".concat(Z.donation.email_wrong),observedChanged:function(e){i.add(new K(e))},fullWidth:!0,autoComplete:"email",required:!0,inputProps:{maxLength:100}})}),(0,C.jsx)(y.ZP,{item:!0,xs:12,children:(0,C.jsx)(N,{label:Z.donation.player_name,variant:"outlined",id:"fullname",name:"fullname",fullWidth:!0,autoComplete:"fullname",inputProps:{maxLength:20},observedValue:n.name,observedChanged:function(e){i.add(new Q(e))}})}),(0,C.jsxs)(y.ZP,{item:!0,xs:12,children:[(0,C.jsx)(N,{style:{maxWidth:"70%"},label:Z.donation.donation_money,type:"number",variant:"outlined",required:!0,InputLabelProps:{shrink:!0},inputProps:{maxLength:20},observedValue:n.price.toString(),error:!n.isPriceValid,helperText:n.isPriceValid?"":"".concat(Z.donation.money_wrong),observedChanged:function(e){i.add(new H(parseInt(e)))}}),(0,C.jsx)(s.Z,{required:!0,variant:"outlined",children:(0,C.jsx)(d.Z,{style:{width:16}})}),(0,C.jsx)(s.Z,{required:!0,variant:"outlined",children:(0,C.jsxs)(u.Z,{value:n.currency.toUpperCase(),onChange:function(e){i.add(new X(e.target.value))},children:[(0,C.jsx)(l.Z,{value:"TWD",children:"TWD"}),(0,C.jsx)(l.Z,{value:"USD",children:"USD"})]})})]}),(0,C.jsx)(y.ZP,{item:!0,xs:12,children:(0,C.jsx)(N,{label:Z.donation.improve_or_feature,variant:"outlined",fullWidth:!0,multiline:!0,rows:"2",inputProps:{maxLength:200},observedValue:n.title,observedChanged:function(e){i.add(new J(e))}})}),(0,C.jsx)(y.ZP,{item:!0,xs:12,children:(0,C.jsx)(N,{id:"filled-multiline-static",label:Z.donation.anything,fullWidth:!0,multiline:!0,rows:"4",variant:"outlined",inputProps:{maxLength:200},observedValue:n.comment,observedChanged:function(e){i.add(new ee(e))}})}),(0,C.jsx)(y.ZP,{item:!0,xs:12})]}),(0,C.jsx)(f.Z,{disabled:!n.isFormValid,type:"submit",fullWidth:!0,variant:"contained",color:"primary",sx:function(e){return{margin:e.spacing(3,0,2)}},onClick:function(e){e.preventDefault(),i.add(new te(window))},children:Z.donation.donate}),(0,C.jsx)("div",{style:{pointerEvents:n.isFormValid?"auto":"none",mixBlendMode:n.isFormValid?"inherit":"luminosity"},children:(0,C.jsx)(R,{amount:"usd"==n.currency?n.price.toString():(n.price/30).toFixed(2),onSuccess:function(){var e=(0,r.Z)(o().mark((function e(t,n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.add(new ne(window,n.orderID)),alert("Transaction completed by "+t.payer.name.given_name);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),options:{clientId:V.Z.paypalClientId}})}),(0,C.jsx)(x.Z,{variant:"caption",children:Z.donation.notice})]})]}),(0,C.jsx)(d.Z,{style:{margin:16},children:(0,C.jsx)(ie,{})})]})}},732:function(e,t){"use strict";var n={helperApi:"https://minecraft-scepter-helper.vercel.app/api",paypalClientId:"AVBLAWMT-DrOt8SYmKDSfF3imTyO-9qu-9d1BsgpdS6aAQ1cVQnOuywR3AGYYMu-zJTggbp-IbxZijGs"};t.Z=n},7390:function(e,t,n){"use strict";var r=n(9499),a=n(4730),i=n(7294),o=n(6010),c=n(1163),s=n(1664),u=n(122),l=n(1496),p=n(5893),d=["to","linkAs","replace","scroll","shallow","prefetch","locale"],f=["activeClassName","as","className","href","linkAs","locale","noLinkStyle","prefetch","replace","role","scroll","shallow"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=(0,l.ZP)("a")({}),y=i.forwardRef((function(e,t){var n=e.to,r=e.linkAs,i=e.replace,o=e.scroll,c=e.shallow,u=e.prefetch,l=e.locale,f=(0,a.Z)(e,d);return(0,p.jsx)(s.default,{href:n,prefetch:u,as:r,replace:i,scroll:o,shallow:c,passHref:!0,locale:l,children:(0,p.jsx)(v,m({ref:t},f))})})),x=i.forwardRef((function(e,t){var n=e.activeClassName,i=void 0===n?"active":n,s=e.as,l=e.className,d=e.href,h=e.linkAs,x=e.locale,w=e.noLinkStyle,Z=e.prefetch,b=e.replace,g=(e.role,e.scroll),j=e.shallow,k=(0,a.Z)(e,f),O=(0,c.useRouter)(),P="string"===typeof d?d:d.pathname,S=(0,o.Z)(l,(0,r.Z)({},i,O.pathname===P&&i));if("string"===typeof d&&(0===d.indexOf("http")||0===d.indexOf("mailto:")))return w?(0,p.jsx)(v,m({className:S,href:d,ref:t},k)):(0,p.jsx)(u.Z,m({className:S,href:d,ref:t},k));var C={to:d,linkAs:h||s,replace:b,scroll:g,shallow:j,prefetch:Z,locale:x};return w?(0,p.jsx)(y,m(m({className:S,ref:t},C),k)):(0,p.jsx)(u.Z,m(m({component:y,className:S,ref:t},C),k))}));t.C=x},1047:function(e,t,n){"use strict";var r=n(29),a=n(2777),i=n(2262),o=n(7794),c=n.n(o),s=n(569),u=n.n(s),l=n(732).Z.helperApi,p=function(){function e(){(0,a.Z)(this,e)}return(0,i.Z)(e,null,[{key:"getRedirectUrl",value:function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a,i,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.title,r=t.comment,a=t.email,i=t.name,o=t.price,e.abrupt("return",l+"/donations?email=".concat(encodeURIComponent(a),"&name=").concat(encodeURIComponent(i),"&price=").concat(o,"&title=").concat(encodeURIComponent(n),"&comment=").concat(encodeURIComponent(r)));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"postPaypalCheckout",value:function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a,i,o,s,p;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.title,r=t.comment,a=t.email,i=t.name,o=t.price,s=t.orderId,e.next=3,u().post(l+"/donations/paypal").send({title:n,email:a,name:i,comment:r,price:o,orderId:s});case 3:return p=e.sent,e.abrupt("return",p.body);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getTop",value:function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:0,e.next=3,u().get(l+"/donations/top").query({page:t});case 3:return n=e.sent,e.abrupt("return",n.body);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getLatest",value:function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:0,e.next=3,u().get(l+"/donations/latest").query({page:t});case 3:return n=e.sent,e.abrupt("return",n.body);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}();t.Z=p},972:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/donation",function(){return n(5965)}])},4654:function(){},3695:function(){}},function(e){e.O(0,[682,657,569,698,774,888,179],(function(){return t=972,e(e.s=t);var t}));var t=e.O();_N_E=t}]);