(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t(require("Vuex"),require("VueRouter"),require("Vue")):"function"===typeof define&&define.amd?define(["Vuex","VueRouter","Vue"],t):"object"===typeof exports?exports["tenant-app"]=t(require("Vuex"),require("VueRouter"),require("Vue")):e["tenant-app"]=t(e["Vuex"],e["VueRouter"],e["Vue"])})(window,(function(e,t,n){return function(e){function t(t){for(var r,u,i=t[0],s=t[1],l=t[2],c=0,f=[];c<i.length;c++)u=i[c],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return i.p+"static/js/"+({about:"about"}[e]||e)+"."+{about:"8f5cb6e2"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var l=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="//192.168.11.222:3102/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp_tenant"]=window["webpackJsonp_tenant"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=l;return a.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){e.exports=n("56d7")},2395:function(e,t,n){},"23f4":function(e,t,n){},5143:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",(function(){return S})),n.d(t,"mount",(function(){return T})),n.d(t,"unmount",(function(){return W}));n("96cf");var r=n("1da1"),o=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("8bbf")),a=n.n(o),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"tenant"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home2")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},i=[],s=(n("7c55"),n("2877")),l={},c=Object(s["a"])(l,u,i,!1,null,null,null),p=c.exports,f=n("6389"),v=n.n(f),h=(n("d3b7"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("div",[e._v(" 收到"+e._s(e.$store.state.tenant)+"应用的广播:"+e._s(e.$store.state.tenantLogin))]),r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"Enter something..."}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)}),g=[],_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),e._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[e._v("pwa")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],m={name:"HelloWorld",props:{msg:String}},b=m,w=(n("c68d"),Object(s["a"])(b,_,d,!1,null,"11efa9dc",null)),y=w.exports,j={name:"Home",components:{HelloWorld:y},methods:{callParentChange:function(){this.$pager.next({from:"tenant",sign:"wzy2",data:"主应用哟"})}},mounted:function(){this.callParentChange()}},k=j,x=Object(s["a"])(k,h,g,!1,null,null,null),E=x.exports;a.a.use(v.a);var O=[{path:"/",name:"Home",component:E},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],P=O,V=n("5880"),R=n.n(V),$=n("e297"),C=n.n($);a.a.use(R.a);var L=new R.a.Store({state:{tenantLogin:"",tenant:""},mutations:{save:function(e,t){C.a.prefix="lockr",C.a.set("tenantLogin",t),e.tenantLogin=t},get:function(e){C.a.prefix="lockr",e.tenantLogin=C.a.get("tenantLogin")},savetenant:function(e,t){C.a.prefix="lockr",C.a.set("tenant",t),e.tenant=t},gettenant:function(e){C.a.prefix="lockr",e.tenant=C.a.get("tenant")}},actions:{},modules:{}});n("83f4"),n("5143"),n("23f4");a.a.config.productionTip=!1;var N=null,A=null;function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.container;N=new v.a({base:window.__POWERED_BY_QIANKUN__?"/tenant":"/",mode:"history",routes:P}),A=new a.a({router:N,store:L,render:function(e){return e(p)}}).$mount(t?t.querySelector("#tenant"):"#tenant")}function S(e){return q.apply(this,arguments)}function q(){return q=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("[vue] vue app bootstraped"),n=t.pager,n.subscribe((function(e){console.log("监听到子应用".concat(e.from,"发来消息："),e),L.commit("save",e.data),L.commit("savetenant",e.from)})),a.a.prototype.$pager=n;case 4:case"end":return e.stop()}}),e)}))),q.apply(this,arguments)}function T(e){return H.apply(this,arguments)}function H(){return H=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("[vue] props from main framework",t,t.pager),I(t);case 2:case"end":return e.stop()}}),e)}))),H.apply(this,arguments)}function W(){return B.apply(this,arguments)}function B(){return B=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:A.$destroy(),A=null,N=null;case 3:case"end":return e.stop()}}),e)}))),B.apply(this,arguments)}window.__POWERED_BY_QIANKUN__||I()},5880:function(t,n){t.exports=e},6389:function(e,n){e.exports=t},"76d2":function(e,t,n){},"7c55":function(e,t,n){"use strict";var r=n("2395"),o=n.n(r);o.a},"83f4":function(e,t,n){window.__POWERED_BY_QIANKUN__&&(n.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)},"8bbf":function(e,t){e.exports=n},c68d:function(e,t,n){"use strict";var r=n("76d2"),o=n.n(r);o.a},cf05:function(e,t,n){e.exports=n.p+"static/img/logo.82b9c7a5.png"}})}));
//# sourceMappingURL=app.461d493f.js.map