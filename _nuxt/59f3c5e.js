(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{405:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return l})),r.d(e,"d",(function(){return v}));var o=r(406),n=r(0),c=Object(n.h)("v-card__actions"),d=Object(n.h)("v-card__subtitle"),l=Object(n.h)("v-card__text"),v=Object(n.h)("v-card__title");o.a},406:function(t,e,r){"use strict";r(9),r(8),r(10),r(12),r(7),r(13);var o=r(2),n=(r(21),r(186),r(408),r(188)),c=r(410),d=r(84),l=r(5);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(l.a)(c.a,d.a,n.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},d.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n.a.options.computed.classes.call(this))},styles:function(){var style=h({},n.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},408:function(t,e,r){var content=r(409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("e23b7040",content,!0,{sourceMap:!1})},409:function(t,e,r){var o=r(14)(!1);o.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=o},431:function(t,e,r){var content=r(432);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("7132a15d",content,!0,{sourceMap:!1})},432:function(t,e,r){var o=r(14)(!1);o.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=o},464:function(t,e,r){"use strict";r.r(e);r(20),r(49),r(52),r(268);var o={data:function(){return{coverDark:"https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1834&q=80",show:!0,coverImg:"https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",info:[{title:"Personal data",info:{name:"Nadthaphon",lastname:"Changchai",age:(new Date).getFullYear()-1997,gender:"Male"}}]}},methods:{downloadItem:function(){fetch("resume/file/cv.pdf").then((function(t){t.blob().then((function(t){var e=window.URL.createObjectURL(t),r=document.createElement("a");r.href=e,r.download="resume.pdf",r.click()}))}))}}},n=r(70),c=r(87),d=r.n(c),l=r(181),v=r(263),h=r(406),f=r(405),x=r(403),m=(r(9),r(8),r(10),r(12),r(7),r(13),r(2));r(431);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=r(34).a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:w({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:w({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}}),O=r(187),k=r(178),j=r(149),V=r(179),P=r(111),D=r(77),C=r(98),B=r(457),I=r(400),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{attrs:{justify:"space-around"}},[r("v-card",{attrs:{width:"100%"}},[r("v-img",{attrs:{height:"290px",src:t.$vuetify.theme.dark?t.coverDark:t.coverImg}},[r("v-card-title",{staticClass:"white--text mt-8",attrs:{color:"primary"}},[r("v-avatar",{attrs:{size:"200"}},[r("img",{attrs:{alt:"user",src:"https://i.ibb.co/p0bXFdH/26220691-2453428464882695-162313541230933688-o.jpg"}})]),t._v(" "),r("p",{staticClass:"ml-3",style:t.$vuetify.theme.dark?"color: #fff; font-size: 1.2em;text-shadow: #FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #fff 0px 0px 20px, #fff 0px 0px 30px, #fff 0px 0px 40px, #fff 0px 0px 50px, #fff 0px 0px 75px, 2px 2px 2px rgba(255,255,255,0.38);":"color: #565c5e; font-size: 1.2em"},[t._v("\n            Nadthaphon Changchai\n          ")])],1)],1),t._v(" "),r("div",{staticStyle:{"text-align":"right","margin-top":"2rem","padding-right":"1rem"}},[r("v-btn",{staticStyle:{color:"white"},attrs:{elevation:"2",color:"#01999D"},on:{click:function(e){return t.downloadItem()}}},[t._v("Download Resume")])],1),t._v(" "),r("v-card-title",[t._v("About me")]),t._v(" "),t._l(t.info,(function(e,o){return r("div",{key:o},[r("v-card-actions",[r("v-card-subtitle",[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[r("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-expand-transition",[r("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[r("v-card-text",[r("v-list",{attrs:{"two-line":""}},[r("v-list-item",[r("v-list-item-icon",[r("v-icon",{attrs:{color:"indigo"}},[t._v("mdi-account-box-outline")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("\n                      "+t._s(e.info.name+"  "+e.info.lastname))]),t._v(" "),r("v-list-item-subtitle",[t._v("Name")])],1)],1),t._v(" "),r("v-list-item",[r("v-list-item-icon",[r("v-icon",{attrs:{color:"green"}},[t._v("mdi-human-cane")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("\n                      "+t._s(e.info.age+" years"))]),t._v(" "),r("v-list-item-subtitle",[t._v("Age")])],1)],1),t._v(" "),r("v-list-item",[r("v-list-item-icon",[r("v-icon",{attrs:{color:"orange"}},[t._v("mdi-gender-male")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("\n                      "+t._s(e.info.gender))]),t._v(" "),r("v-list-item-subtitle",[t._v("Sex")])],1)],1)],1)],1)],1)])],1)}))],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VAvatar:l.a,VBtn:v.a,VCard:h.a,VCardActions:f.a,VCardSubtitle:f.b,VCardText:f.c,VCardTitle:f.d,VContainer:x.a,VDivider:y,VExpandTransition:O.a,VIcon:k.a,VImg:j.a,VList:V.a,VListItem:P.a,VListItemContent:D.a,VListItemIcon:C.a,VListItemSubtitle:D.b,VListItemTitle:D.c,VRow:B.a,VSpacer:I.a})}}]);