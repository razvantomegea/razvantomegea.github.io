(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{545:function(t,e,r){var content=r(569);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("57820884",content,!0,{sourceMap:!1})},568:function(t,e,r){"use strict";var n=r(545);r.n(n).a},569:function(t,e,r){(e=r(11)(!1)).push([t.i,'.slide-fade-enter-active,.slide-fade-leave-active{transition:all .4s ease}.slide-fade-enter,.slide-fade-leave-to{transform:translateX(50px);opacity:0}.article__content{font-size:1.1rem;padding:0 27%}h1{margin:1rem 0}h2,h3,h4,h5,h6{margin:2rem 0 1rem}h2{font-family:"Roboto",sans-serif!important;font-weight:500;letter-spacing:.0073529412em!important;line-height:2.5rem}.cover{margin:2rem 0 1rem;text-align:center}.social-content{display:flex;flex-flow:row wrap;margin:0 0 24px}.markdown{line-height:1.7;margin-bottom:2rem}.markdown h1{font-family:"Roboto",sans-serif!important;font-weight:500!important;letter-spacing:.0073529412em!important;line-height:2.5rem!important;margin:2rem 0 1rem!important}.subtitle-1,.subtitle-2{margin:0!important}blockquote{font-size:1.2rem;font-style:italic;font-weight:300;padding:16px 0 16px 24px}tbody tr td,thead tr:last-child th{border-bottom:1px solid rgba(0,0,0,.12);padding:8px 16px;text-align:center}@media screen and (max-width:1299px){.article__content{padding:0 20%}}@media screen and (max-width:1099px){.article__content{padding:0 15%}}@media screen and (max-width:899px){.article__content{padding:0 10%}}@media screen and (max-width:599px){.article__content{font-size:1rem;padding:0 4%}.cover,h1{margin:.5rem 0}.markdown h1,.markdown h2{line-height:2rem;letter-spacing:normal!important}.v-application h1.display-2{font-size:2.25rem!important;line-height:2.65rem!important}blockquote{font-size:1.1rem;padding:16px 0 16px 24px}}',""]),t.exports=e},628:function(t,e,r){"use strict";r.r(e);r(10),r(8),r(6),r(3),r(9),r(246),r(63);var n=r(15),o=(r(34),r(2)),c=r(87);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={components:{VueMarkdown:function(){return Promise.resolve().then(r.t.bind(null,240,7))}},computed:d(d({},Object(c.c)({article:"articles/article"})),{},{image:function(){return this.article.image},link:function(){return"https://www.lifestylemanicas.com/".concat(this.article.id)},pageTitle:function(){return"".concat(this.article.title," - ").concat(this.article.author)},readingTime:function(){var t=JSON.stringify(this.article.markdown).split(" ").length;return Math.ceil(t/250)}}),fetch:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.params,e.next=3,r.dispatch("articles/readArticle",n.slug);case 3:return e.next=5,r.dispatch("layout/setPageTitle",r.state.articles.article.title);case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.pageTitle,meta:[{name:"author",content:this.article.author},{name:"description",property:"og:description",content:this.article.description,hid:"description"},{property:"og:title",content:this.pageTitle},{property:"og:image",content:this.image},{property:"og:url",content:this.link},{name:"twitter:description",content:this.article.description},{name:"twitter:image",content:this.image},{name:"twitter:url",content:this.link},{name:"twitter:card",content:this.image}],link:[this.link]}},transition:{name:"slide-fade"}},h=(r(568),r(71)),f=r(102),v=r.n(f),w=r(524),_=r(168),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("div",{staticClass:"article__content"},[r("div",[r("h1",{staticClass:"display-2 font-weight-light"},[t._v("\n        "+t._s(t.article.title)+"\n      ")]),t._v(" "),r("p",{staticClass:"subtitle-2"},[t._v("\n        by "+t._s(t.article.author)+"\n      ")]),t._v(" "),r("span",{staticClass:"body-2"},[t._v(" Created on "+t._s(t.article.createdOn)+" ")]),t._v(" "),r("p",{staticClass:"caption"},[t._v("\n        "+t._s(t.readingTime)+" min read\n      ")]),t._v(" "),r("no-ssr",[r("div",{staticClass:"cover"},[r("v-img",{staticClass:"my-5",attrs:{src:t.image,alt:"Blog picture",width:"100%",height:"500px","aspect-ratio":"1",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}}),t._v(" "),t.article.imageCredit&&t.article.imageCreditUrl?r("a",{staticClass:"caption text-center",attrs:{href:t.article.imageCreditUrl,target:"_blank"}},[t._v(t._s(t.article.imageCredit))]):t._e()],1)])],1),t._v(" "),r("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-8860757451999775","data-ad-slot":"9868956518"}}),t._v(" "),r("div",{staticClass:"markdown"},[r("vue-markdown",[t._v(t._s(t.article.markdown))])],1),t._v(" "),r("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-8860757451999775","data-ad-slot":"9868956518"}}),t._v(" "),r("Disqus")],1)])}),[],!1,null,null,null);e.default=component.exports;v()(component,{VContainer:w.a,VImg:_.a})}}]);