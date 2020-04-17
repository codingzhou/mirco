(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t(require("Vuex"),require("VueRouter"),require("Vue")):"function"===typeof define&&define.amd?define(["Vuex","VueRouter","Vue"],t):"object"===typeof exports?exports["disaster-app"]=t(require("Vuex"),require("VueRouter"),require("Vue")):e["disaster-app"]=t(e["Vuex"],e["VueRouter"],e["Vue"])})(window,(function(e,t,r){return function(e){function t(t){for(var n,s,i=t[0],u=t[1],c=t[2],l=0,f=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function s(e){return i.p+"static/js/"+({about:"about"}[e]||e)+"."+{about:"3b3b123e"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var c=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",c.name="ChunkLoadError",c.type=n,c.request=a,r[1](c)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="//localhost:3103/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp_disaster"]=window["webpackJsonp_disaster"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=c;return a.push([0,"chunk-vendors"]),r()}({0:function(e,t,r){e.exports=r("56d7")},2395:function(e,t,r){},"23f4":function(e,t,r){},5143:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t),r.d(t,"bootstrap",(function(){return I})),r.d(t,"mount",(function(){return H})),r.d(t,"unmount",(function(){return B}));r("96cf");var n=r("1da1"),o=(r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("8bbf")),a=r.n(o),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"disaster"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),r("router-view")],1)},i=[],u=(r("7c55"),r("2877")),c={},l=Object(u["a"])(c,s,i,!1,null,null,null),p=l.exports,f=r("9483");Object(f["a"])("".concat("//localhost:3103/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var v=r("6389"),d=r.n(v),h=(r("d3b7"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",[e._v(" 收到"+e._s(e.$store.state.disaster)+"应用的广播:"+e._s(e.$store.state.disasterLogin))]),n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"Enter something..."}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)}),g=[],_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},m=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[e._v("pwa")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],b={name:"HelloWorld",props:{msg:String}},w=b,k=(r("c68d"),Object(u["a"])(w,_,m,!1,null,"11efa9dc",null)),y=k.exports,j={name:"Home",components:{HelloWorld:y},methods:{callParentChange:function(){this.$pager.next({from:"disaster",sign:"wzy4",data:"地灾哟"})}},mounted:function(){this.callParentChange()}},x=j,E=(r("cccb"),Object(u["a"])(x,h,g,!1,null,null,null)),O=E.exports;a.a.use(d.a);var P=[{path:"/",name:"Home",component:O},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],V=P,C=r("5880"),N=r.n(C),R=r("e297"),$=r.n(R);a.a.use(N.a);var A=new N.a.Store({state:{disasterLogin:"",disaster:""},mutations:{save:function(e,t){$.a.prefix="lockr",$.a.set("disasterLogin",t),e.disasterLogin=t},get:function(e){$.a.prefix="lockr",e.disasterLogin=$.a.get("disasterLogin")},savedisaster:function(e,t){$.a.prefix="lockr",$.a.set("disaster",t),e.disaster=t},getdisaster:function(e){$.a.prefix="lockr",e.disaster=$.a.get("disaster")}},actions:{},modules:{}});r("83f4"),r("5143"),r("23f4");a.a.config.productionTip=!1;var L=null,S=null;function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.container;L=new d.a({base:window.__POWERED_BY_QIANKUN__?"/disaster":"/",mode:"history",routes:V}),S=new a.a({router:L,store:A,render:function(e){return e(p)}}).$mount(t?t.querySelector("#disaster"):"#disaster")}function I(e){return T.apply(this,arguments)}function T(){return T=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("[vue] vue app bootstraped"),r=t.pager,r.subscribe((function(e){console.log("监听到子应用".concat(e.from,"发来消息："),e),A.commit("save",e.data),A.commit("savedisaster",e.from)})),a.a.prototype.$pager=r;case 4:case"end":return e.stop()}}),e)}))),T.apply(this,arguments)}function H(e){return W.apply(this,arguments)}function W(){return W=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("[vue] props from main framework",t),q(t);case 2:case"end":return e.stop()}}),e)}))),W.apply(this,arguments)}function B(){return D.apply(this,arguments)}function D(){return D=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:S.$destroy(),S=null,L=null;case 3:case"end":return e.stop()}}),e)}))),D.apply(this,arguments)}window.__POWERED_BY_QIANKUN__||q()},5880:function(t,r){t.exports=e},"5ced":function(e,t,r){},6389:function(e,r){e.exports=t},"76d2":function(e,t,r){},"7c55":function(e,t,r){"use strict";var n=r("2395"),o=r.n(n);o.a},"83f4":function(e,t,r){window.__POWERED_BY_QIANKUN__&&(r.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)},"8bbf":function(e,t){e.exports=r},c68d:function(e,t,r){"use strict";var n=r("76d2"),o=r.n(n);o.a},cccb:function(e,t,r){"use strict";var n=r("5ced"),o=r.n(n);o.a},cf05:function(e,t,r){e.exports=r.p+"static/img/logo.82b9c7a5.png"}})}));
//# sourceMappingURL=app.d4285124.js.map