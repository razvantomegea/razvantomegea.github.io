(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{553:function(t,e,r){var content=r(614);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("224be9e6",content,!0,{sourceMap:!1})},613:function(t,e,r){"use strict";var n=r(553);r.n(n).a},614:function(t,e,r){(e=r(11)(!1)).push([t.i,".v-card__text .v-chip[data-v-f9579802]{margin:0 6px 0 0}.v-card__text .description[data-v-f9579802]{padding:24px 0 0}@media screen and (max-width:599px){.v-list-item__subtitle[data-v-f9579802],.v-list-item__title[data-v-f9579802]{white-space:normal!important}}",""]),t.exports=e},632:function(t,e,r){"use strict";r.r(e);r(34);var n={name:"FeedCard",props:{article:{type:Object,default:function(){}}},computed:{categories:function(){return(this.article.categories||"").split(",").map((function(t){return t.trim().toLowerCase()}))},readingTime:function(){var t=JSON.stringify(this.article.markdown),e=t?t.split(" ").length:0;return Math.ceil(e/250)}},methods:{onReadMore:function(){this.$emit("read")}}},c=(r(613),r(71)),o=r(102),l=r.n(o),v=r(177),d=r(132),m=r(179),f=r(526),_=r(168),h=r(83),x=r(134),V=r(178),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{nativeOn:{click:function(e){return t.onReadMore(e)}}},[r("v-list-item",[r("v-list-item-avatar",{attrs:{color:"grey"}},[r("v-img",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/lifestyle-maniacs.appspot.com/o/images%2Fmain.jpg?alt=media&token=0757cba8-093f-4285-8611-9bcc473fc2d5"}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"headline"},[t._v("\n        "+t._s(t.article.title)+"\n      ")]),t._v(" "),r("v-list-item-subtitle",[t._v("\n        by "+t._s(t.article.author)+" · "+t._s(t.readingTime)+" min read\n      ")])],1)],1),t._v(" "),r("v-img",{attrs:{src:t.article.image,height:"200px"}}),t._v(" "),r("v-card-text",[t._l(t.categories,(function(e){return r("v-chip",{key:e,attrs:{to:"/categories/"+e,router:"",exact:"",color:"lime"}},[t._v("\n      "+t._s(e)+"\n    ")])})),t._v(" "),r("p",{staticClass:"description"},[t._v("\n      "+t._s(t.article.description)+"\n    ")])],2),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{text:"",color:"primary"},on:{click:t.onReadMore}},[t._v("\n      READ MORE\n    ")])],1)],1)}),[],!1,null,"f9579802",null);e.default=component.exports;l()(component,{VBtn:v.a,VCard:d.a,VCardActions:m.a,VCardText:m.b,VChip:f.a,VImg:_.a,VListItem:h.a,VListItemAvatar:x.a,VListItemContent:V.a,VListItemSubtitle:V.b,VListItemTitle:V.c})}}]);