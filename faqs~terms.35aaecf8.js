(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["faqs~terms"],{"0249":function(t,n,e){"use strict";e("e47d")},"25f0":function(t,n,e){"use strict";var s=e("6eeb"),a=e("825a"),i=e("d039"),o=e("ad6d"),c="toString",r=RegExp.prototype,u=r[c],d=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l=u.name!=c;(d||l)&&s(RegExp.prototype,c,(function(){var t=a(this),n=String(t.source),e=t.flags,s=String(void 0===e&&t instanceof RegExp&&!("flags"in r)?o.call(t):e);return"/"+n+"/"+s}),{unsafe:!0})},"2a7d":function(t,n,e){"use strict";var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.routerLink?t._e():e("button",{class:[t.type],attrs:{id:"btn",type:t.submit?"submit":""},on:{click:function(n){return t.$emit("click")}}},[t._t("default")],2)},a=[],i={name:"Button",props:{type:String,routerLink:Boolean,submit:Boolean}},o=i,c=(e("f0d8"),e("2877")),r=Object(c["a"])(o,s,a,!1,null,"29d091c1",null);n["a"]=r.exports},"3d42":function(t,n,e){"use strict";var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:[this.id],attrs:{id:"expandable-section"}},[e("div",{staticClass:"header"},[t._t("header")],2),e("div",{staticClass:"body"},[t._t("default")],2)])},a=[],i=(e("d3b7"),e("25f0"),{name:"ExpandableSection",data:function(){return{id:"_"+Math.random().toString(36).substr(2,9)}}}),o=i,c=(e("fc7f"),e("2877")),r=Object(c["a"])(o,s,a,!1,null,"074d40b6",null);n["a"]=r.exports},4129:function(t,n,e){"use strict";var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"dashboard-layout","data-theme":!0===t.darkTheme?"dark":""}},[e("div",{staticClass:"navbar-desktop"},[e("svg-icon",{staticClass:"logo",attrs:{icon:"images/logo_lock"}}),e("div",{staticClass:"items"},[t._l(t.navItems,(function(n,s){return e("router-link",{key:s,class:[t.current===n.name?"selected":""],attrs:{to:n.to,disabled:n.disabled}},[e("svg-icon",{staticClass:"nav-img",attrs:{icon:"icons/"+n.icon}}),e("span",[t._v(" "+t._s(n.name)+" ")])],1)})),t.isLoggedIn?e("router-link",{staticClass:"sign-out",attrs:{to:"/logout"}},[e("svg-icon",{staticClass:"nav-img",attrs:{icon:"icons/signout_icon"}}),e("span",[t._v(" Log out ")])],1):t._e()],2)],1),e("div",{ref:"mobileNav",staticClass:"navbar-mobile"},[e("div",{staticClass:"logo-actions"},[e("svg-icon",{staticClass:"logo",attrs:{icon:"images/logo_side"}}),e("div",{staticClass:"actions"},[e("Button",{attrs:{type:"dash-filled"},on:{click:function(n){return t.updateDark(!t.darkTheme)}}},[e("svg-icon",{attrs:{icon:t.darkTheme?"icons/sun_icon":"icons/moon_icon"}})],1)],1)],1),null!==t.currentNavItem?e("div",{staticClass:"navigation"},[e("svg-icon",{staticClass:"nav-img",attrs:{icon:"icons/"+t.currentNavItem.icon}}),e("span",{staticClass:"nav-title"},[t._v(" "+t._s(t.currentNavItem.name)+" ")]),e("button",{staticClass:"nav-choose"},[e("svg-icon",{attrs:{icon:"icons/chevron_down"}})],1)],1):t._e(),t.showNavbar?e("div",{staticClass:"navigation-select"},t._l(t.mobileNavItems,(function(n,s){return e("router-link",{key:s,class:[t.current===n.name?"selected":""],attrs:{to:n.to,disabled:n.disabled}},[e("svg-icon",{staticClass:"nav-img",attrs:{icon:"icons/"+n.icon}}),e("span",[t._v(" "+t._s(n.name)+" ")])],1)})),1):t._e()]),e("div",{staticClass:"dash-content"},[e("header",{staticClass:"mobile"},[this.icon?e("svg-icon",{staticClass:"icon",attrs:{icon:"icons/hand_icon"}}):t._e(),e("h2",[t._v(" "+t._s(t.name)+" ")])],1),e("header",{staticClass:"desktop"},[this.icon?e("svg-icon",{staticClass:"icon",attrs:{icon:"icons/hand_icon"}}):t._e(),e("h2",[t._v(" "+t._s(t.name)+" ")]),e("div",{staticClass:"actions"},[t.showTokens?e("div",{staticClass:"token-counter"},[e("span",{staticClass:"epic-text"},[t._v("Tokens: "+t._s(t.tokens))])]):t._e(),void 0!==this.buttonText&&void 0===this.buttonTo?e("Button",{staticClass:"main",attrs:{type:void 0!==this.buttonType?t.buttonType:"dash-filled"},on:{click:function(n){return t.$emit("buttonClick")}}},[t._v(" "+t._s(this.buttonText)+" ")]):t._e(),void 0!==this.buttonTo?e("router-link",{staticClass:"main",attrs:{type:void 0!==this.buttonType?t.buttonType:"dash-filled",to:this.buttonTo}},[t._v(" "+t._s(this.buttonText)+" ")]):t._e(),e("div",{staticClass:"theme-btns"},[e("span",[t._v("Theme:")]),e("Button",{class:!0!==t.darkTheme?"selected":"",attrs:{type:""},on:{click:function(n){return t.updateDark(!1)}}},[e("svg-icon",{attrs:{icon:"icons/sun_icon"}})],1),e("Button",{class:!0===t.darkTheme?"selected":"",attrs:{type:""},on:{click:function(n){return t.updateDark(!0)}}},[e("svg-icon",{attrs:{icon:"icons/moon_icon"}})],1)],1)],1)],1),t._t("default"),e("footer",[e("a",{attrs:{href:"javascript:void(0)"}},[t._v(" Contact Us ")]),e("router-link",{attrs:{to:"/dashboard/faq"}},[t._v(" FAQs ")]),e("router-link",{attrs:{to:"/dashboard/terms"}},[t._v(" Legal ")]),e("Copyright")],1)],2)])},a=[],i=(e("4de4"),e("b0c0"),e("5530")),o=e("2f62"),c=e("2a7d"),r=e("8053"),u=e("968c"),d=e("4360"),l={name:"Dashboard-Layout",components:{Button:c["a"],Copyright:r["a"]},props:{buttonText:String,buttonType:String,buttonTo:String,showTokens:Boolean,current:String,name:String,icon:Boolean},computed:Object(i["a"])(Object(i["a"])({currentNavItem:function(){for(var t in console.log(this.navItems,this.current),this.navItems){var n=this.navItems[t];if(this.current===n.name)return n}return null},mobileNavItems:function(){var t=this;return this.navItems.filter((function(n){return n!==t.currentNavItem}))}},Object(o["d"])(["darkTheme"])),Object(o["c"])(["isLoggedIn","tokens"])),methods:{updateDark:function(t){this.darkTheme!==t&&(d["a"].commit("setDarkTheme",t),u["a"].setDarkTheme(t))},onDocumentClick:function(t){this.$refs.mobileNav&&this.$refs.mobileNav.contains(t.target)?this.showNavbar=!this.showNavbar:this.showNavbar&&(this.showNavbar=!1)}},mounted:function(){document.body.addEventListener("click",this.onDocumentClick)},unmounted:function(){document.body.removeEventListener("click",this.onDocumentClick)},data:function(){return{showNavbar:!1,navItems:[{name:"Dashboard",icon:"squares_icon",to:"/dashboard"},{name:"Obfuscate",icon:"search_icon",to:"/dashboard/obfuscate"},{name:"Purchase",icon:"program_icon",to:"/dashboard/purchase"},{name:"Account",icon:"smile_icon",to:"/dashboard/account"},{name:"Tickets",icon:"horn_icon",to:"/dashboard/tickets",disabled:!0},{name:"Documents",icon:"stack_icon",to:"/dashboard/documents"}]}}},m=l,v=(e("0249"),e("2877")),h=Object(v["a"])(m,s,a,!1,null,"1a78675c",null);n["a"]=h.exports},8053:function(t,n,e){"use strict";var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",[t._v(" ©CorruptedMemes LLC "+t._s(t.copyrightYear)+" ")])},a=[],i=(e("99af"),{name:"copyright",computed:{copyrightYear:function(){var t=2020,n=(new Date).getFullYear();return t!==n?"".concat(Math.min(t,n),"-").concat(Math.max(t,n)):"".concat(n)}}}),o=i,c=e("2877"),r=Object(c["a"])(o,s,a,!1,null,null,null);n["a"]=r.exports},da58:function(t,n,e){},e008:function(t,n,e){"use strict";var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"expandable"}},[t._t("default")],2)},a=[],i={name:"Expandable",methods:{getExpandableFromClick:function(t){for(var n=this.$el.children,e=0;e<n.length;e++){var s=n[e],a=s.querySelector(".header");if(a&&a.contains(t))return s}return null},onDocumentClick:function(t){var n=this.getExpandableFromClick(t.target);if(n){var e=this.expanded,s=n.classList[0],a=document.getElementsByClassName(e)[0];this.expanded===s&&a?(a.classList.remove("expanded"),this.expanded=""):""!==this.expanded&&a?(a.classList.remove("expanded"),n.classList.add("expanded"),this.expanded=s):(n.classList.add("expanded"),this.expanded=s)}}},data:function(){return{expanded:""}},created:function(){document.addEventListener("click",this.onDocumentClick)},destroyed:function(){document.removeEventListener("click",this.onDocumentClick)}},o=i,c=(e("e745"),e("2877")),r=Object(c["a"])(o,s,a,!1,null,"195f8af1",null);n["a"]=r.exports},e47d:function(t,n,e){},e553:function(t,n,e){},e745:function(t,n,e){"use strict";e("e553")},e903:function(t,n,e){},f0d8:function(t,n,e){"use strict";e("da58")},fc7f:function(t,n,e){"use strict";e("e903")}}]);