(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{607:function(e,t,r){var content=r(700);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("2e107364",content,!0,{sourceMap:!1})},699:function(e,t,r){"use strict";var n=r(607);r.n(n).a},700:function(e,t,r){(t=r(10)(!1)).push([e.i,".slide-fade-enter-active,.slide-fade-leave-active{transition:all .4s ease}.slide-fade-enter,.slide-fade-leave-to{transform:translateX(50px);opacity:0}",""]),e.exports=t},757:function(e,t,r){"use strict";r.r(t);r(12),r(8),r(6),r(3),r(9),r(51);var n=r(16),c=r(2),o=r(95);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={components:{Feed:function(){return r.e(0).then(r.bind(null,760))}},computed:f({},Object(o.c)({articles:"articles/articles"})),fetch:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,e.params,t.next=3,r.dispatch("articles/getArticles",{offset:0,count:6,reset:!0});case 3:return t.next=5,r.dispatch("layout/setPageTitle","LIFESTYLE MANIACS");case 5:case"end":return t.stop()}}),t)})))()},methods:f(f({},Object(o.b)(["articles/getArticles"])),{},{onLoadMore:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("articles/getArticles",{offset:e.articles.length,count:e.articles.length+6});case 2:case"end":return t.stop()}}),t)})))()}}),transition:{name:"slide-fade"}},O=(r(699),r(79)),component=Object(O.a)(d,(function(){var e=this.$createElement;return(this._self._c||e)("feed",{attrs:{articles:this.articles},on:{loadMore:this.onLoadMore}})}),[],!1,null,null,null);t.default=component.exports}}]);