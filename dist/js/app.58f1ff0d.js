(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-1da59d1d":"0a2e7acd","chunk-2c17040e":"b750f947","chunk-01259d98":"e5be6032","chunk-2b7b61ce":"6fcb748f","chunk-2e173ae6":"4d67973f","chunk-65ca6025":"1c2927dd","chunk-79ef7ecb":"4ad4e2b0"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-1da59d1d":1,"chunk-2c17040e":1,"chunk-01259d98":1,"chunk-2b7b61ce":1,"chunk-2e173ae6":1,"chunk-65ca6025":1,"chunk-79ef7ecb":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1da59d1d":"b4814cee","chunk-2c17040e":"18880ced","chunk-01259d98":"c7b0c3e2","chunk-2b7b61ce":"1000af10","chunk-2e173ae6":"6cf49ad7","chunk-65ca6025":"6e93315d","chunk-79ef7ecb":"1c64ec05"}[e]+".css",c=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===r||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("9085")},"0914":function(e,t,n){"use strict";n("7aa1")},"0e68":function(e,t,n){},"31b6":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"nav"}},[e._t("default")],2)},a=[],c={name:"tabBar"},o=c,i=(n("876b"),n("2877")),u=Object(i["a"])(o,r,a,!1,null,null,null);t["a"]=u.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Detail"}},[n("router-view")],1),n("main-tab-bar")],1)},c=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tab-bar",[n("tab-bei-item",{attrs:{path:"/home"},scopedSlots:e._u([{key:"item-icon",fn:function(){return[n("i",{staticClass:"iconfont"},[e._v("")])]},proxy:!0},{key:"item-text",fn:function(){return[n("div",[e._v("首页")])]},proxy:!0}])}),n("tab-bei-item",{attrs:{path:"/categore"},scopedSlots:e._u([{key:"item-icon",fn:function(){return[n("i",{staticClass:"iconfont"},[e._v("")])]},proxy:!0},{key:"item-text",fn:function(){return[n("div",[e._v("分类")])]},proxy:!0}])}),n("tab-bei-item",{attrs:{path:"/shopcar"},scopedSlots:e._u([{key:"item-icon",fn:function(){return[n("i",{staticClass:"iconfont"},[e._v("")])]},proxy:!0},{key:"item-text",fn:function(){return[n("div",[e._v("购物车")])]},proxy:!0}])}),n("tab-bei-item",{attrs:{path:"/profile"},scopedSlots:e._u([{key:"item-icon",fn:function(){return[n("i",{staticClass:"iconfont"},[e._v("")])]},proxy:!0},{key:"item-text",fn:function(){return[n("div",[e._v("我的")])]},proxy:!0}])})],1)},i=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tab-item",on:{click:e.ItemClick}},[n("div",{style:e.activeStyle},[e._t("item-icon")],2),n("div",{style:e.activeStyle},[e._t("item-text")],2)])},s=[],l=(n("ac1f"),n("5319"),{name:"TabBeiItem",props:{path:String,activeColor:{type:String,default:"red"}},data:function(){return{}},computed:{Isactive:function(){return this.$route.path==this.path},activeStyle:function(){return this.Isactive?{color:this.activeColor}:{}}},methods:{ItemClick:function(){this.$router.replace(this.path).catch((function(e){return e}))}}}),d=l,f=(n("ca4f"),n("2877")),h=Object(f["a"])(d,u,s,!1,null,null,null),p=h.exports,m=n("31b6"),b={name:"MainTabBar",components:{tabBar:m["a"],tabBeiItem:p}},v=b,y=(n("0914"),Object(f["a"])(v,o,i,!1,null,null,null)),k=y.exports,g={name:"App",components:{MainTabBar:k}},_=g,w=(n("034f"),Object(f["a"])(_,a,c,!1,null,null,null)),x=w.exports,S=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),C=function(){return Promise.all([n.e("chunk-1da59d1d"),n.e("chunk-2c17040e"),n.e("chunk-2e173ae6")]).then(n.bind(null,"1c62"))},O=function(){return Promise.all([n.e("chunk-1da59d1d"),n.e("chunk-2c17040e"),n.e("chunk-2b7b61ce")]).then(n.bind(null,"2b2a"))},j=function(){return n.e("chunk-79ef7ecb").then(n.bind(null,"afd6"))},P=function(){return Promise.all([n.e("chunk-1da59d1d"),n.e("chunk-65ca6025")]).then(n.bind(null,"0adf"))},E=function(){return Promise.all([n.e("chunk-1da59d1d"),n.e("chunk-2c17040e"),n.e("chunk-01259d98")]).then(n.bind(null,"6ab7"))};r["default"].use(S["a"]);var T,$=[{path:"",redirect:"/home"},{path:"/home",name:"Home",component:C},{path:"/categore",name:"CateGory",component:O},{path:"/profile",name:"ProFile",component:j},{path:"/shopcar",name:"ShopCar",component:P},{path:"/detail/:iid",name:"Detail",component:E}],L=new S["a"]({routes:$,mode:"history"}),B=L,A=(n("f5df1"),n("7212")),I=n.n(A),M=(n("bbe3"),n("2f62")),N=n("ade3"),D="add_count",q="add_to_cart",F=(T={},Object(N["a"])(T,D,(function(e,t){t.count++})),Object(N["a"])(T,q,(function(e,t){t.count=1,t.checked=!0,e.carList.push(t)})),T),H=(n("7db0"),{addCart:function(e,t){return new Promise((function(n,r){var a=e.state.carList.find((function(e){return e.iid===t.iid}));a?(e.commit(D,a),n("当前的商品数量+1")):(e.commit(q,t),n("添加到购物车成功"))}))}}),J={cartLength:function(e){return e.carList.length}};r["default"].use(M["a"]);var G=new M["a"].Store({state:{carList:[]},mutations:F,actions:H,getters:J}),K=G,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"toast"},[n("div",[e._v(e._s(e.message))])])},z=[],Q={name:"Toast",data:function(){return{message:"",isShow:!1}},methods:{show:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"输入显示文字参数",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200;this.message=t,this.isShow=!0,setTimeout((function(){e.isShow=!1,e.message=""}),n)}}},R=Q,V=(n("be94"),Object(f["a"])(R,U,z,!1,null,"b1d2b862",null)),W=V.exports,X={install:function(e){var t=e.extend(W),n=new t;n.$mount(document.createElement("div")),document.body.appendChild(n.$el),e.prototype.$toast=n}},Y=X,Z=n("fe3c"),ee=n.n(Z),te=n("caf9"),ne=n("6d3b"),re=n("8343"),ae=n("5dc8"),ce=n("e36a"),oe=n("d17a");r["default"].use(te["a"],{loading:n("bc5e")}),r["default"].use(I.a),ne["a"].use([re["a"],ae["a"],ce["a"],oe["a"]]),r["default"].use(Y),r["default"].prototype.$bus=new r["default"],r["default"].config.productionTip=!1,ee.a.attach(document.body),new r["default"]({router:B,render:function(e){return e(x)},store:K}).$mount("#app")},"7aa1":function(e,t,n){},"876b":function(e,t,n){"use strict";n("0e68")},9085:function(e,t,n){},"9eba":function(e,t,n){},bc5e:function(e,t,n){e.exports=n.p+"img/placeholder.48bcea0d.png"},be94:function(e,t,n){"use strict";n("9eba")},ca4f:function(e,t,n){"use strict";n("dba3")},dba3:function(e,t,n){}});
//# sourceMappingURL=app.58f1ff0d.js.map