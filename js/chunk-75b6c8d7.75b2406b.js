(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75b6c8d7"],{"37c7":function(t,e,n){"use strict";var a=n("5492"),i=n.n(a);i.a},5492:function(t,e,n){},"64d8":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"claim-dns-container"},[n("div",{staticClass:"claim-dns-content"},[n("h3",[t._v("Cheers!")]),n("p",[t._v(t._s(t.fullDomainName)+" is claimable!")]),n("p",[t._v("Ownership will be set to: "+t._s(t.dnsOwner))]),n("div",{staticClass:"claim-dns-button"},[n("button",{class:["large-round-button-green-filled",t.loading?"disabled":""],on:{click:t.claimFunc}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[t._v("\n          Claim\n        ")]),n("i",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin"})])])]),n("interface-bottom-text",{attrs:{"link-text":t.$t("interface.helpCenter"),question:t.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)},i=[],s=n("539d"),o={components:{"interface-bottom-text":s["a"]},props:{hostName:{type:String,default:""},dnsOwner:{type:String,default:""},claimFunc:{type:Function,default:function(){}},loading:{type:Boolean,default:!1},tld:{type:String,default:""}},computed:{fullDomainName:function(){return"".concat(this.hostName,".").concat(this.tld)}},mounted:function(){""===this.hostName&&this.$router.push("/interface/dapps/manage-ens")}},c=o,l=(n("37c7"),n("2877")),r=Object(l["a"])(c,a,i,!1,null,"fcb3ab18",null),u=r.exports;n.d(e,"default",function(){return u})}}]);
//# sourceMappingURL=chunk-75b6c8d7.75b2406b.js.map