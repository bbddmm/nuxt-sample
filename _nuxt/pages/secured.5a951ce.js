(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{201:function(e,t,r){"use strict";r.r(t);r(15);var n=r(2),c=r(56),o={asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.redirect,t.prev=1,t.next=4,c.a.get("/private");case 4:return n=t.sent,data=n.data,t.abrupt("return",{greeting:data.data.message});case 9:return t.prev=9,t.t0=t.catch(1),alert(t.t0.response.data.message),t.abrupt("return",r("/login"));case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()},head:function(){return{title:"Secured"}},middleware:["auth","token"]},l=r(22),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},[r("div",{staticClass:"grid-container"},[r("div",{staticClass:"grid-x grid-padding-x"},[r("div",{staticClass:"large-12 cell"},[r("h1",[e._v("Super secured page")]),e._v(" "),r("p",[e._v("If you try to access this URL not connected, you will see the error page telling your that you are not connected.")]),e._v(" "),r("p",[e._v("Message from secured API: "+e._s(e.greeting))]),e._v(" "),r("p",[e._v(" "+e._s(e.$store.state))]),e._v(" "),r("NuxtLink",{attrs:{to:"/login"}},[e._v("\n          Back to the login page\n        ")])],1)])])])}),[],!1,null,null,null);t.default=component.exports}}]);