(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{515:function(e,t,r){var content=r(538);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(12).default)("0e5f74c6",content,!0,{sourceMap:!1})},537:function(e,t,r){"use strict";var n=r(515);r.n(n).a},538:function(e,t,r){(e.exports=r(11)(!1)).push([e.i,".slide-fade-enter-active,.slide-fade-leave-active{transition:all .4s ease}.slide-fade-enter,.slide-fade-leave-to{transform:translateX(50px);opacity:0}",""])},628:function(e,t,r){"use strict";r.r(t);r(10),r(8),r(4),r(3),r(7),r(61);var n=r(18),c=r(2),o=r(123);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var f,d={components:{Feed:function(){return Promise.all([r.e(0),r.e(1)]).then(r.bind(null,633))}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(source,!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(source).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)({articles:"articles/articles"})),fetch:(f=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.params,e.next=3,r.dispatch("articles/getArticles",n.category);case 3:return e.next=5,r.dispatch("layout/setPageTitle",n.category.toUpperCase());case 5:case"end":return e.stop()}}),e)}))),function(e){return f.apply(this,arguments)}),transition:{name:"slide-fade"}},O=(r(537),r(60)),component=Object(O.a)(d,(function(){var e=this.$createElement;return(this._self._c||e)("feed",{attrs:{articles:this.articles}})}),[],!1,null,null,null);t.default=component.exports}}]);