(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{308:function(e,r,t){"use strict";t(133);var n=t(134);r.a=Object(n.a)("flex")},309:function(e,r,t){"use strict";t(133);var n=t(134);r.a=Object(n.a)("layout")},311:function(e,r,t){"use strict";t.r(r);t(67);var n=t(16),o={data:function(){return{formError:null,formName:"",formPassword:""}},methods:{login:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$store.dispatch("login",{name:e.formName,password:e.formPassword});case 3:e.formName="",e.formPassword="",e.formError=null,r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),e.formError=r.t0.message;case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},logout:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$store.dispatch("logout");case 3:r.next=8;break;case 5:r.prev=5,r.t0=r.catch(0),e.formError=r.t0.message;case 8:case"end":return r.stop()}}),r,null,[[0,5]])})))()}}},m=t(69),c=t(103),l=t.n(c),v=t(308),f=t(309),component=Object(m.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[t("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[e.$store.state.authUser?t("div",[e._v("\n        Hello "+e._s(e.$store.state.authUser.name)+"!\n        "),t("img",{attrs:{src:e.$store.state.authUser.image}}),e._v(" "),t("pre",[e._v("I am the secret content, I am shown only when the user is connected.")]),e._v(" "),t("p",[t("i",[e._v("You can also refresh this page, you'll still be connected!")])]),e._v(" "),t("button",{on:{click:e.logout}},[e._v("\n          Logout\n        ")])]):t("form",{on:{submit:function(r){return r.preventDefault(),e.login(r)}}},[e.formError?t("p",{staticClass:"error"},[e._v("\n          "+e._s(e.formError)+"\n        ")]):e._e(),e._v(" "),t("p",[t("i",[e._v("To login, use "),t("b",[e._v("demo")]),e._v(" as name and "),t("b",[e._v("demo")]),e._v(" as\n            password.")])]),e._v(" "),t("p",[e._v("\n          Name: "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.formName,expression:"formName"}],attrs:{type:"text",name:"name"},domProps:{value:e.formName},on:{input:function(r){r.target.composing||(e.formName=r.target.value)}}})]),e._v(" "),t("p",[e._v("\n          Password:\n          "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.formPassword,expression:"formPassword"}],attrs:{type:"password",name:"password"},domProps:{value:e.formPassword},on:{input:function(r){r.target.composing||(e.formPassword=r.target.value)}}})]),e._v(" "),t("button",{attrs:{type:"submit"}},[e._v("\n          Login\n        ")])]),e._v(" "),t("p",[t("NuxtLink",{attrs:{to:"/secret"}},[e._v("\n          Super secret page\n        ")])],1)])],1)}),[],!1,null,null,null);r.default=component.exports;l()(component,{VFlex:v.a,VLayout:f.a})}}]);