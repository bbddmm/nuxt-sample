(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{202:function(t,e,r){"use strict";r.r(e);r(15);var n=r(2),c={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axiosTypicode,n=t.error,console.log("$axiosTypicode.defaults.baseURL = ",r.defaults.baseURL),e.prev=2,e.next=5,r.get("/users");case 5:return c=e.sent,l=c.data,e.abrupt("return",{users:l});case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",n({statusCode:404,message:e.t0.message}));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))()},head:function(){return{title:"Users"}}},l=r(22),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"grid-container"},[r("div",{staticClass:"grid-x grid-padding-x"},[r("div",{staticClass:"small-12 cell"},[r("ul",{staticClass:"align-center menu vertical"},t._l(t.users,(function(e){return r("li",{key:e.id},[r("nuxt-link",{attrs:{to:"/users/"+e.id}},[t._v("\n                "+t._s(e.name)+"\n              ")])],1)})),0)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"grid-container"},[e("div",{staticClass:"grid-x grid-padding-x"},[e("div",{staticClass:"small-12 cell"},[e("h1",{staticClass:"text-center"},[this._v("Users")])])])])])}],!1,null,null,null);e.default=component.exports}}]);