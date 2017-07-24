webpackJsonp([1],{115:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(2),a=i(74),l=i.n(a),s=i(71),r=i(70),o=i.n(r),u=i(72),c=i.n(u),d=i(73);i.n(d);n.default.config.productionTip=!1,n.default.use(c.a),n.default.prototype.$http=o.a,new n.default({el:"#app",router:s.a,template:"<App/>",components:{App:l.a}})},116:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(69),a=i.n(n),l=i(49),s=i(126);e.default={name:"cell",components:{InlineDesc:a.a},props:i.i(s.a)(),beforeMount:function(){this.hasTitleSlot=!!this.$slots.title},computed:{valueClass:function(){return{"vux-cell-primary":"content"===this.primary||"left"===this.valueAlign,"vux-cell-align-left":"left"===this.valueAlign,"vux-cell-arrow-transition":!!this.arrowDirection,"vux-cell-arrow-up":"up"===this.arrowDirection,"vux-cell-arrow-down":"down"===this.arrowDirection}},labelClass:function(){return{"vux-cell-justify":"justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign}}},methods:{getLabelStyles:function(){return{width:this.$parent.labelWidth||this.$parent.$parent.labelWidth,textAlign:this.$parent.labelAlign||this.$parent.$parent.labelAlign,marginRight:this.$parent.labelMarginRight||this.$parent.$parent.labelMarginRight}},onClick:function(){!this.disabled&&i.i(l.a)(this.link,this.$router)}},data:function(){return{hasTitleSlot:!1}}}},117:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"group-title"}},118:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"group",props:{title:String,titleColor:String,labelWidth:String,labelAlign:String,labelMarginRight:String,gutter:[String,Number]}}},119:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"inline-desc"}},120:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(50),a=i.n(n),l=i(75),s=i.n(l),r=i(128),o=function(t,e){var i=s()(e,function(e){return e.key===t});return i?i.value:t};e.default={name:"selector",mixins:[r.a],created:function(){void 0!==this.value&&(this.currentValue=this.value)},computed:{fixIos:function(){return!this.placeholder&&a()("undefined"===this.value||""===this.value)&&this.isIOS&&this.title},color:function(){return this.showPlaceholder?"#A9A9A9":""},processOptions:function(){return this.options.length&&{}.hasOwnProperty.call(this.options[0],"key")?this.options:this.options.map(function(t){return{key:t,value:t}})},showPlaceholder:function(){return!(void 0!==this.value&&""!==this.value||!this.placeholder)},labelClass:function(){return{"vux-cell-justify":"justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign}}},filters:{findByKey:o},watch:{value:function(t){this.currentValue=t},currentValue:function(t){this.$emit("input",t),this.$emit("on-change",t)}},props:{title:String,direction:String,options:{type:Array,required:!0},name:String,placeholder:String,readonly:Boolean,value:[Boolean,String,Number,Object]},data:function(){return{currentValue:"",isIOS:/iPad|iPhone|iPod/.test(window.navigator.userAgent)}}}},121:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(49);e.default={name:"x-button",props:{type:{default:"default"},disabled:Boolean,mini:Boolean,plain:Boolean,text:String,actionType:String,showLoading:Boolean,link:String},methods:{onClick:function(){!this.disabled&&i.i(n.a)(this.link,this.$router)}},computed:{classes:function(){return[{"weui-btn_disabled":this.disabled,"weui-btn_mini":this.mini},"weui-btn_"+this.type,this.plain?"weui-btn_plain-"+this.type:"",this.showLoading?"weui-btn_loading":""]}}}},122:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0}},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide")}},methods:{onTouchMove:function(t){!this.scroll&&t.preventDefault()},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1))}}}},123:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(69),a=i.n(n);e.default={name:"x-switch",components:{InlineDesc:a.a},computed:{labelStyle:function(){var t=/<\/?[^>]*>/.test(this.title);return{display:"block",width:Math.min(t?5:this.title.length+1,14)+"em"}}},methods:{onClick:function(){this.$emit("on-click",!this.currentValue,this.currentValue)}},props:{title:{type:String,required:!0},disabled:Boolean,value:{type:Boolean,default:!1},inlineDesc:[String,Boolean,Number],preventDefault:Boolean},data:function(){return{currentValue:this.value}},watch:{currentValue:function(t){this.$emit("input",t),this.$emit("on-change",t)},value:function(t){this.currentValue=t}}}},124:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},125:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(208),a=i.n(n),l=i(207),s=i.n(l),r=i(205),o=i.n(r),u=i(209),c=i.n(u),d=i(206),h=i.n(d),v=i(204),f=i.n(v),p=i(203),_=i.n(p),g=i(127);e.default={name:"hello",data:function(){return{author:"",digest:"",title:"",article:"",dialogVisible:!1,catList:[],show:!1,cityName:"",weather:"",plainList:["佛山","广州","深圳","汕头"],value1:"佛山"}},directives:{TransferDom:g.a},components:{XDialog:a.a,XButton:s.a,Group:o.a,XSwitch:c.a,Selector:h.a,GroupTitle:f.a,Cell:_.a},methods:{getShit:function(){var t=this;this.$http.get("http://localhost:3000/api").then(function(e){e.data.hello.forEach(function(e){t.catList.push(e)})}).catch(function(t){console.log(t)})},getArticle:function(){var t=this;this.$http.get("https://interface.meiriyiwen.com/article/random?dev=1").then(function(e){t.article=e.data.data.content,t.title=e.data.data.title,t.author=e.data.data.author,t.digest=e.data.data.digest})},getWeather:function(t){console.log(t);var e=this;this.$http.get("http://tj.nineton.cn/Heart/index/all?city="+t).then(function(t){e.weather=t.data.weather[0].future[0].text,e.cityName=t.data.weather[0].city_name})},changeArticle:function(){this.getArticle()},onChange:function(t){switch(t){case"佛山":this.getWeather("CHGD070000");break;case"广州":this.getWeather("CHGD000000");break;case"深圳":this.getWeather("CHGD050000");break;case"汕头":this.getWeather("CHGD040000");break;default:this.getWeather("CHGD070000")}}},mounted:function(){this.getArticle(),this.getWeather(this.value1)}}},178:function(t,e){},179:function(t,e){},180:function(t,e){},181:function(t,e){},182:function(t,e){},183:function(t,e){},184:function(t,e){},185:function(t,e){},186:function(t,e){},187:function(t,e){},191:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("group",[i("selector",{attrs:{title:"城市",options:t.plainList},on:{"on-change":t.onChange},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1),t._v(" "),i("group",[i("cell",{attrs:{title:""}},[i("span",[t._v(t._s(t.weather))]),t._v(" "),"雷阵雨/多云"===t.weather?i("span",[i("svg",{staticClass:"icon"},[i("use",{attrs:{"xlink:href":"#icon-baofengyu"}})]),t._v(" "),i("svg",{staticClass:"icon"},[i("use",{attrs:{"xlink:href":"#icon-duoyun"}})])]):t._e(),t._v(" "),"阵雨/多云"===t.weather?i("span",[i("svg",{staticClass:"icon"},[i("use",{attrs:{"xlink:href":"#icon-baofengyu"}})]),t._v(" "),i("svg",{staticClass:"icon"},[i("use",{attrs:{"xlink:href":"#icon-duoyun"}})])]):t._e(),t._v(" "),"雷阵雨/雷阵雨"===t.weather?i("span",[i("svg",{staticClass:"icon"},[i("use",{attrs:{"xlink:href":"#icon-baofengyu"}})])]):t._e(),t._v(" "),"多云/多云"===t.weather?i("span",[i("svg",{staticClass:"icon"},[i("use",{attrs:{"xlink:href":"#icon-duoyun"}})])]):t._e(),t._v(" "),"小雨/小雨"===t.weather?i("span",[i("svg",{staticClass:"icon"},[i("use",{attrs:{"xlink:href":"#icon-yu"}})])]):t._e()])],1),t._v(" "),i("group",[i("x-switch",{attrs:{title:t.title,"inline-desc":t.author},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1),t._v(" "),i("group",[i("x-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.getArticle()}}},[t._v("换一篇")])],1),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("x-dialog",{staticClass:"dialog-demo",attrs:{"hide-on-blur":""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("div",{staticClass:"content"},[i("p",{staticClass:"dialog-title"},[t._v(t._s(t.title))]),t._v(" "),i("p",[t._v(t._s(t.author))]),t._v(" "),i("p",{staticClass:"article",domProps:{innerHTML:t._s(t.article)}})]),t._v(" "),i("div",{on:{click:function(e){t.show=!1}}},[i("span",{staticClass:"vux-close"})])])],1)],1)},staticRenderFns:[]}},192:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"weui-btn",class:t.classes,attrs:{disabled:t.disabled,type:t.actionType},on:{click:t.onClick}},[t.showLoading?i("i",{staticClass:"weui-loading"}):t._e(),t._v(" "),t._t("default",[t._v(t._s(t.text))])],2)},staticRenderFns:[]}},193:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-cell",class:{"vux-tap-active":t.isLink||!!t.link,"weui-cell_access":t.isLink||!!t.link,"vux-cell-no-border-intent":!t.borderIntent,"vux-cell-disabled":t.disabled},on:{click:t.onClick}},[i("div",{staticClass:"weui-cell__hd"},[t._t("icon")],2),t._v(" "),i("div",{staticClass:"vux-cell-bd",class:{"vux-cell-primary":"title"===t.primary&&"left"!==t.valueAlign}},[i("p",[t.title||t.hasTitleSlot?i("label",{staticClass:"vux-label",class:t.labelClass,style:t.getLabelStyles()},[t._t("title",[t._v(t._s(t.title))])],2):t._e(),t._v(" "),t._t("after-title")],2),t._v(" "),i("inline-desc",[t._t("inline-desc",[t._v(t._s(t.inlineDesc))])],2)],1),t._v(" "),i("div",{staticClass:"weui-cell__ft",class:t.valueClass},[t._t("value"),t._v(" "),t._t("default",[t._v(t._s(t.value))]),t._v(" "),t.isLoading?i("i",{staticClass:"weui-loading"}):t._e()],2),t._v(" "),t._t("child")],2)},staticRenderFns:[]}},194:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"vux-label-desc"},[t._t("default")],2)},staticRenderFns:[]}},195:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"weui-cells__title"},[t._t("default")],2)},staticRenderFns:[]}},196:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-x-switch weui-cell weui-cell_switch"},[i("div",{staticClass:"weui-cell__bd"},[i("label",{staticClass:"weui-label",style:t.labelStyle,domProps:{innerHTML:t._s(t.title)}}),t._v(" "),t.inlineDesc?i("inline-desc",[t._v(t._s(t.inlineDesc))]):t._e()],1),t._v(" "),i("div",{staticClass:"weui-cell__ft"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-switch",attrs:{type:"checkbox",disabled:t.disabled},domProps:{checked:Array.isArray(t.currentValue)?t._i(t.currentValue,null)>-1:t.currentValue},on:{__c:function(e){var i=t.currentValue,n=e.target,a=!!n.checked;if(Array.isArray(i)){var l=t._i(i,null);n.checked?l<0&&(t.currentValue=i.concat(null)):l>-1&&(t.currentValue=i.slice(0,l).concat(i.slice(l+1)))}else t.currentValue=a}}}),t._v(" "),t.preventDefault?i("div",{staticClass:"vux-x-switch-overlay",on:{click:t.onClick}}):t._e()])])},staticRenderFns:[]}},197:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-selector weui-cell",class:{"weui-cell_select":!t.readonly,"weui-cell_select-after":t.title}},[t.title?i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label",class:t.labelClass,style:{width:t.$parent.labelWidth,textAlign:t.$parent.labelAlign,marginRight:t.$parent.labelMarginRight},attrs:{for:"vux-selector-"+t.uuid}},[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.readonly?i("div",{staticClass:"weui-cell__ft vux-selector-readonly"},[t._v("\n    "+t._s(t._f("findByKey")(t.value,t.processOptions))+"\n  ")]):i("div",{staticClass:"weui-cell__bd"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-select",staticStyle:{color:"red"},style:{direction:t.direction,color:t.color},attrs:{id:"vux-selector-"+t.uuid,ddd:t.color,name:t.name},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.currentValue=e.target.multiple?i:i[0]}}},[t.showPlaceholder?i("option",{attrs:{value:""},domProps:{selected:void 0===t.value&&t.placeholder}},[t._v(t._s(t.placeholder))]):t._e(),t._v(" "),t.fixIos?i("option",{attrs:{disabled:""}}):t._e(),t._v(" "),t._l(t.processOptions,function(e){return i("option",{domProps:{value:e.key}},[t._v(t._s(e.value))])})],2)])])},staticRenderFns:[]}},198:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]}},199:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-x-dialog",on:{touchmove:t.onTouchMove}},[i("transition",{attrs:{name:t.maskTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",on:{click:t.hide}})]),t._v(" "),i("transition",{attrs:{name:t.dialogTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},staticRenderFns:[]}},200:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.title?i("div",{staticClass:"weui-cells__title",style:{color:t.titleColor},domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t._t("title"),t._v(" "),i("div",{staticClass:"weui-cells",class:{"vux-no-group-title":!t.title},style:{marginTop:"number"==typeof t.gutter?t.gutter+"px":t.gutter}},[t._t("after-title"),t._v(" "),t._t("default")],2)],2)},staticRenderFns:[]}},203:function(t,e,i){function n(t){i(180)}var a=i(4)(i(116),i(193),n,null,null);t.exports=a.exports},204:function(t,e,i){function n(t){i(182)}var a=i(4)(i(117),i(195),n,null,null);t.exports=a.exports},205:function(t,e,i){function n(t){i(187)}var a=i(4)(i(118),i(200),n,null,null);t.exports=a.exports},206:function(t,e,i){function n(t){i(184)}var a=i(4)(i(120),i(197),n,null,null);t.exports=a.exports},207:function(t,e,i){function n(t){i(179)}var a=i(4)(i(121),i(192),n,null,null);t.exports=a.exports},208:function(t,e,i){function n(t){i(186)}var a=i(4)(i(122),i(199),n,null,null);t.exports=a.exports},209:function(t,e,i){function n(t){i(183)}var a=i(4)(i(123),i(196),n,null,null);t.exports=a.exports},210:function(t,e,i){function n(t){i(178)}var a=i(4)(i(125),i(191),n,"data-v-22d75295",null);t.exports=a.exports},69:function(t,e,i){function n(t){i(181)}var a=i(4)(i(119),i(194),n,null,null);t.exports=a.exports},71:function(t,e,i){"use strict";var n=i(2),a=i(201),l=i(210),s=i.n(l);n.default.use(a.a),e.a=new a.a({routes:[{path:"/",name:"Hello",component:s.a}]})},73:function(t,e){},74:function(t,e,i){function n(t){i(185)}var a=i(4)(i(124),i(198),n,null,null);t.exports=a.exports}},[115]);
//# sourceMappingURL=app.6187c05c972ad7598750.js.map