(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{542:function(e,t,r){var content=r(599);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(12).default)("2e107364",content,!0,{sourceMap:!1})},598:function(e,t,r){"use strict";var n=r(542);r.n(n).a},599:function(e,t,r){(t=r(11)(!1)).push([e.i,".slide-fade-enter-active,.slide-fade-leave-active{transition:all .4s ease}.slide-fade-enter,.slide-fade-leave-to{transform:translateX(50px);opacity:0}",""]),e.exports=t},660:function(e,t,r){"use strict";r.r(t);r(10),r(8),r(6),r(3),r(9),r(63);var n=r(15),c=r(2),o=r(87);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var f={components:{Feed:function(){return Promise.all([r.e(0),r.e(1)]).then(r.bind(null,664))}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)({articles:"articles/articles"})),fetch:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,e.params,t.next=3,r.dispatch("articles/getArticles");case 3:return t.next=5,r.dispatch("layout/setPageTitle","LIFESTYLE MANIACS");case 5:case"end":return t.stop()}}),t)})))()},transition:{name:"slide-fade"}},d=(r(598),r(71)),component=Object(d.a)(f,(function(){var e=this.$createElement;return(this._self._c||e)("feed",{attrs:{articles:this.articles}})}),[],!1,null,null,null);t.default=component.exports}}]);