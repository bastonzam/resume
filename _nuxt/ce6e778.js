(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{405:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return v}));var o=r(406),n=r(0),c=Object(n.h)("v-card__actions"),l=Object(n.h)("v-card__subtitle"),d=Object(n.h)("v-card__text"),v=Object(n.h)("v-card__title");o.a},406:function(t,e,r){"use strict";r(9),r(8),r(10),r(12),r(7),r(13);var o=r(2),n=(r(21),r(186),r(408),r(188)),c=r(410),l=r(84),d=r(5);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,n.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n.a.options.computed.classes.call(this))},styles:function(){var style=f({},n.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},408:function(t,e,r){var content=r(409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("e23b7040",content,!0,{sourceMap:!1})},409:function(t,e,r){var o=r(14)(!1);o.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=o},465:function(t,e,r){"use strict";r.r(e);r(7);var o={data:function(){return{isDark:!1,items:[{color:"#01999D",src:"https://i.ibb.co/5YKChJs/20292898-1240532989409434-330607457384079060-n-2.png",title:"GitHub",name:"bastonzam"},{color:"#01999D",src:"https://i.ibb.co/p0bXFdH/26220691-2453428464882695-162313541230933688-o.jpg",title:"Facebook",name:"Nadthaphon Changchai"},{color:"#01999D",src:"https://i.ibb.co/0V27rtL/126958541-3424758317749700-9204153798471885330-n.jpg",title:"Instagram",name:"bastonzam"}]}},methods:{gotoSpecificPage:function(title){"GitHub"==title?window.open("https://github.com/bastonzam","_blank"):"Facebook"==title?window.open("https://web.facebook.com/Nadhapon/","_blank"):"Instagram"==title&&window.open("https://www.instagram.com/bastonzam/","_blank")},sendMail:function(){var link="mailto:nadthaphonc@gmail.com?cc=bbbgin22@gmail.com&subject="+encodeURIComponent("We need you to join us")+"&body="+encodeURIComponent("Hi, Mr.Nadthaphon Changchai");window.location.href=link}},watch:{"$vuetify.theme.dark":function(t){t?this.items.forEach((function(t){return t.color="#FFD100"})):this.items.forEach((function(t){return t.color="#01999D"}))}}},n=r(70),c=r(87),l=r.n(c),d=r(181),v=r(406),f=r(405),h=(r(8),r(10),r(12),r(13),r(2)),m=(r(21),r(9),r(32),r(61),r(414),r(20),r(49),r(415),r(416),r(417),r(418),r(419),r(420),r(421),r(422),r(423),r(424),r(425),r(426),r(427),r(52),r(38),r(64),r(267),r(1)),_=r(83),x=r(0);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O=["sm","md","lg","xl"],j=O.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),k=O.reduce((function(t,e){return t["offset"+Object(x.w)(e)]={type:[String,Number],default:null},t}),{}),C=O.reduce((function(t,e){return t["order"+Object(x.w)(e)]={type:[String,Number],default:null},t}),{}),P={col:Object.keys(j),offset:Object.keys(k),order:Object.keys(C)};function S(t,e,r){var o=t;if(null!=r&&!1!==r){if(e){var n=e.replace(t,"");o+="-".concat(n)}return"col"!==t||""!==r&&!0!==r?(o+="-".concat(r)).toLowerCase():o.toLowerCase()}}var D=new Map,E=m.a.extend({name:"v-col",functional:!0,props:w(w(w(w({cols:{type:[Boolean,String,Number],default:!1}},j),{},{offset:{type:[String,Number],default:null}},k),{},{order:{type:[String,Number],default:null}},C),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,n=(e.parent,"");for(var c in r)n+=String(r[c]);var l=D.get(n);return l||function(){var t,e;for(e in l=[],P)P[e].forEach((function(t){var o=r[t],n=S(e,t,o);n&&l.push(n)}));var o=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!o||!r.cols},Object(h.a)(t,"col-".concat(r.cols),r.cols),Object(h.a)(t,"offset-".concat(r.offset),r.offset),Object(h.a)(t,"order-".concat(r.order),r.order),Object(h.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),D.set(n,l)}(),t(r.tag,Object(_.a)(data,{class:l}),o)}}),N=r(403),V=r(149),z=r(457),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{attrs:{dense:""}},[t._l(t.items,(function(e,i){return r("v-col",{key:i,attrs:{cols:"12"}},[r("v-card",{attrs:{color:e.color,dark:""}},[r("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[r("div",[r("v-card-title",{staticClass:"text-h5",style:t.$vuetify.theme.dark?"color:#000":"color:#fff",domProps:{textContent:t._s(e.title)}}),t._v(" "),r("v-card-subtitle",{style:t.$vuetify.theme.dark?"color:#000":"color:#fff",domProps:{textContent:t._s(e.name)}})],1),t._v(" "),r("v-avatar",{staticClass:"ma-3",attrs:{size:"125"}},[r("v-img",{staticStyle:{cursor:"pointer"},attrs:{alt:e.name,src:e.src},on:{click:function(r){return t.gotoSpecificPage(e.title)}}})],1)],1)])],1)})),t._v(" "),r("v-col",[r("v-card",[r("v-card-text",[t._v("\n          Mobile:  "),r("a",{style:t.$vuetify.theme.dark?"color:#ababab":"color:#717171",attrs:{href:"tel:+66811028375"}},[t._v("+668 1102 8375")]),t._v(" | Email  : "),r("span",{staticStyle:{cursor:"pointer","text-decoration":"underline"},on:{click:function(e){return t.sendMail()}}},[t._v("\n          nadthaphonc@gmail.com")])])],1)],1)],2)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAvatar:d.a,VCard:v.a,VCardSubtitle:f.b,VCardText:f.c,VCardTitle:f.d,VCol:E,VContainer:N.a,VImg:V.a,VRow:z.a})}}]);