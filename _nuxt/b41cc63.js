(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{610:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return o.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,o=(n=r(719))&&n.__esModule?n:{default:n};function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===f(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=l;t.len=function(e){return Array.isArray(e)?e.length:"object"===f(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,o.default)({type:e},(function(e){return!l(e)||t.test(e)}))}},698:function(e,t,r){var content=r(742);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("38423489",content,!0,{sourceMap:!1})},717:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return A.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return C.default}}),t.helpers=void 0;var o=D(r(718)),f=D(r(721)),l=D(r(722)),c=D(r(723)),d=D(r(724)),v=D(r(725)),m=D(r(726)),y=D(r(727)),h=D(r(728)),_=D(r(729)),w=D(r(730)),P=D(r(731)),j=D(r(732)),O=D(r(733)),x=D(r(734)),M=D(r(735)),S=D(r(736)),$=D(r(737)),k=D(r(738)),A=D(r(739)),C=D(r(740)),z=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=V();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in e)if(Object.prototype.hasOwnProperty.call(e,f)){var desc=o?Object.getOwnPropertyDescriptor(e,f):null;desc&&(desc.get||desc.set)?Object.defineProperty(r,f,desc):r[f]=e[f]}r.default=e,t&&t.set(e,r);return r}(r(610));function V(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return V=function(){return e},e}function D(e){return e&&e.__esModule?e:{default:e}}t.helpers=z},718:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(610).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},719:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(720).withParams:r(260).withParams;t.default=n}).call(this,r(258))},720:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},o=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=o}).call(this,r(58))},721:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(610).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},722:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(610).regex)("numeric",/^[0-9]*$/);t.default=n},723:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(610);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},724:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(610).regex)("email",/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/);t.default=n},725:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(610),o=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(f)}));t.default=o;var f=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},726:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(610);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},727:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(610);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},728:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(610);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},729:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(610),o=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=o},730:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(610);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},731:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(610);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},732:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(610);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},733:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(610).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},734:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(610);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},735:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(610);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},736:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(610);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},737:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(610);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},738:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(610);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},739:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(610).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(610).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},741:function(e,t,r){"use strict";var n=r(698);r.n(n).a},742:function(e,t,r){(t=r(10)(!1)).push([e.i,".v-footer .v-card[data-v-d986ca1c]{width:100%}",""]),e.exports=t},773:function(e,t,r){"use strict";r.r(t);var n=r(717),o={name:"TheFooter",data:function(){return{socialLinks:[{icon:"mdi-size-m",url:"https://razvantomegea.medium.com"},{icon:"mdi-youtube",url:"https://www.youtube.com/channel/UCMoX9rDaUsnU8INNmohBnTQ"},{icon:"mdi-instagram",url:"https://instagram.com/razvantomegea"},{icon:"mdi-twitter",url:"https://twitter.com/razvantomegea"},{icon:"mdi-facebook",url:"https://facebook.com/lifestylemaniacs"},{icon:"mdi-telegram",url:"https://t.me/joinchat/0SAVTusAzAU2MTM0"},{icon:"mdi-patreon",url:"https://www.patreon.com/bePatron?u=13326130"}],email:""}},computed:{emailErrors:function(){var e=[];return this.$v.email.$dirty?(this.$v.email.required||e.push("E-mail is required"),this.$v.email.email||e.push("Must be valid e-mail"),e):e}},validations:{email:{required:n.required,email:n.email}},methods:{onClear:function(){this.$v.$reset(),this.email=""},onSubmit:function(){this.$v.$touch(),this.$v.$invalid||this.$refs.registerForm.submit()}}},f=(r(741),r(79)),l=r(112),c=r.n(l),d=r(191),v=r(144),m=r(52),y=r(592),h=r(590),_=r(591),w=r(179),P=r(594),component=Object(f.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-footer",{attrs:{padless:""}},[r("v-card",{staticClass:"primary darken-1 white--text text-center",attrs:{flat:"",tile:""}},[r("v-card-text",{staticClass:"white--text px-10"},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{staticClass:"px-10"},[r("h3",{staticClass:"my-5"},[e._v("\n            Who am I?\n          ")]),e._v(" "),r("p",[e._v("I write Health & Fitness, Food & Cooking, Finance, Social, and Self-development articles inspired from my personal life with the purpose of helping people improve their lives.")])])],1)],1),e._v(" "),r("v-divider",{attrs:{dark:""}}),e._v(" "),r("v-card-text",e._l(e.socialLinks,(function(link){return r("v-btn",{key:link.url,staticClass:"mx-4 white--text",attrs:{href:link.url,icon:"",target:"_blank"}},[r("v-icon",{attrs:{size:"24px"}},[e._v("\n          "+e._s(link.icon)+"\n        ")])],1)})),1),e._v(" "),r("v-divider",{attrs:{dark:""}}),e._v(" "),r("v-card-text",[r("v-btn",{staticClass:"mx-4 white--text",attrs:{href:"https://www.termsfeed.com/live/808cc0da-90b3-46e5-93f4-373f15459b21",target:"_blank",text:""}},[e._v("\n        Terms & Conditions\n      ")]),e._v(" "),r("v-btn",{staticClass:"mx-4 white--text",attrs:{href:"https://www.termsfeed.com/live/3dd79fca-6af6-4e01-b618-d3a2368e7362",target:"_blank",text:""}},[e._v("\n        Privacy Policy\n      ")]),e._v(" "),r("v-btn",{staticClass:"mx-4 white--text",attrs:{href:"https://www.termsfeed.com/live/b6a57eb5-3993-4410-9950-5ccf7164b73b",target:"_blank",text:""}},[e._v("\n        Disclaimer\n      ")]),e._v(" "),r("v-btn",{staticClass:"mx-4 white--text",attrs:{href:"https://www.termsfeed.com/live/4ebe66ac-98c0-4913-8132-955dda85fe13",target:"_blank",text:""}},[e._v("\n        Cookies policy\n      ")])],1),e._v(" "),r("v-card-text",{staticClass:"primary darken-2 white--text"},[e._v("\n      © 2019-"+e._s((new Date).getFullYear())+" Lifestyle Maniacs. All rights reserved. Web app designed and coded by Razvan Tomegea using Nuxt.js.\n      "),r("v-btn",{attrs:{absolute:"",fab:"",top:"",right:"",color:"lime"},on:{click:function(t){return e.$vuetify.goTo(0)}}},[r("v-icon",[e._v("mdi-chevron-up")])],1)],1)],1)],1)}),[],!1,null,"d986ca1c",null);t.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardText:m.b,VDivider:y.a,VFlex:h.a,VFooter:_.a,VIcon:w.a,VLayout:P.a})}}]);