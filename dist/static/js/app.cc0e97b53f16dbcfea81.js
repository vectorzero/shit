webpackJsonp([1],{100:function(t,e,i){function n(t){i(96)}var a=i(30)(i(76),i(101),n,"data-v-22d75295",null);t.exports=a.exports},101:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("div",{staticClass:"articleDiv"},[i("h3",[t._v("Article")]),t._v(" "),i("h4",[t._v(t._s(t.title)+" --- "+t._s(t.author))]),t._v(" "),i("div",{on:{click:function(e){t.dialogVisible=!0}}},[t._v(t._s(t.digest)+"...")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.changeArticle}},[t._v("换一篇")])],1),t._v(" "),i("div",{staticClass:"article"},[i("el-dialog",{attrs:{title:t.title,visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("h4",[t._v("作者："+t._s(t.author))]),t._v(" "),i("p",{domProps:{innerHTML:t._s(t.article)}}),t._v(" "),i("span",{staticClass:"dialog-footer",slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("关  闭")])],1)])],1)])},staticRenderFns:[]}},102:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]}},32:function(t,e,i){"use strict";var n=i(2),a=i(103),o=i(100),l=i.n(o);n.default.use(a.a),e.a=new a.a({routes:[{path:"/",name:"Hello",component:l.a}]})},34:function(t,e){},35:function(t,e,i){function n(t){i(97)}var a=i(30)(i(75),i(102),n,null,null);t.exports=a.exports},75:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},76:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{author:"",digest:"",title:"",article:"",dialogVisible:!1,catList:[]}},methods:{getShit:function(){var t=this;this.$http.get("http://localhost:3000/api").then(function(e){e.data.hello.forEach(function(e){t.catList.push(e)})}).catch(function(t){console.log(t)})},getArticle:function(){var t=this;this.$http.get("/article/random?dev=1").then(function(e){t.article=e.data.data.content,t.title=e.data.data.title,t.author=e.data.data.author,t.digest=e.data.data.digest})},changeArticle:function(){this.getArticle()}},mounted:function(){this.getArticle()}}},77:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(2),a=i(35),o=i.n(a),l=i(32),c=i(31),s=i.n(c),r=i(33),u=i.n(r),d=i(34);i.n(d);n.default.config.productionTip=!1,n.default.use(u.a),n.default.prototype.$http=s.a,new n.default({el:"#app",router:l.a,template:"<App/>",components:{App:o.a}})},96:function(t,e){},97:function(t,e){}},[77]);
//# sourceMappingURL=app.cc0e97b53f16dbcfea81.js.map