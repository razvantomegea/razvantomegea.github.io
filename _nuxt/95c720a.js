(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{636:function(t,e,n){var content=n(699);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("2ec324e8",content,!0,{sourceMap:!1})},697:function(t,e,n){t.exports=n.p+"img/main.4c0da36.jpg"},698:function(t,e,n){"use strict";var r=n(636);n.n(r).a},699:function(t,e,n){(e=n(10)(!1)).push([t.i,".v-card__text .v-chip[data-v-3a4ec559]{margin:0 6px 0 0}.v-card__text .description[data-v-3a4ec559]{padding:24px 0 0}.v-list-item__subtitle[data-v-3a4ec559],.v-list-item__title[data-v-3a4ec559]{white-space:normal!important}",""]),t.exports=e},716:function(t,e,n){"use strict";n.r(e);n(32);var r={name:"FeedCard",props:{article:{type:Object,default:function(){}}},computed:{categories:function(){return(this.article.categories||"").split(",").map((function(t){return t.trim().toLowerCase()}))},readingTime:function(){var t=JSON.stringify(this.article.markdown),e=t?t.split(" ").length:0;return Math.ceil(e/250)}},methods:{onReadMore:function(){this.$emit("read")}}},c=(n(698),n(71)),o=n(103),l=n.n(o),v=n(181),d=n(134),m=n(182),_=n(556),f=n(171),h=n(84),x=n(136),V=n(183),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{nativeOn:{click:function(e){return t.onReadMore(e)}}},[r("v-list-item",[r("v-list-item-avatar",{attrs:{color:"grey"}},[r("v-img",{attrs:{src:n(697)}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"headline"},[t._v("\n        "+t._s(t.article.title)+"\n      ")]),t._v(" "),r("v-list-item-subtitle",[t._v("\n        by "+t._s(t.article.author)+" · "+t._s(t.readingTime)+" min read\n      ")])],1)],1),t._v(" "),r("v-img",{attrs:{src:n(570)("./"+t.article.id+"/_main.jpg"),height:"200px"}}),t._v(" "),r("v-card-text",[t._l(t.categories,(function(e){return r("v-chip",{key:e,attrs:{to:"/categories/"+e,router:"",exact:"",color:"lime"}},[t._v("\n      "+t._s(e)+"\n    ")])})),t._v(" "),r("p",{staticClass:"description"},[t._v("\n      "+t._s(t.article.description)+"\n    ")])],2),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{text:"",color:"primary"},on:{click:t.onReadMore}},[t._v("\n      READ MORE\n    ")])],1)],1)}),[],!1,null,"3a4ec559",null);e.default=component.exports;l()(component,{VBtn:v.a,VCard:d.a,VCardActions:m.a,VCardText:m.b,VChip:_.a,VImg:f.a,VListItem:h.a,VListItemAvatar:x.a,VListItemContent:V.a,VListItemSubtitle:V.b,VListItemTitle:V.c})}}]);