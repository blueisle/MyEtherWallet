(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75c583f1"],{"23e5":function(t,e,s){},"2cdb":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title-text-contents"},[t.options.title?s("div",{staticClass:"title-block"},[s("div",{staticClass:"title"},[t.options.titleIcon?s("img",{attrs:{src:t.options.titleIcon}}):t._e(),s("span",[t._v(t._s(t.options.title))])])]):t._e(),t.options.boldSubTitle?s("div",{staticClass:"bold-sub-title"},[t._v("\n    "+t._s(t.options.boldSubTitle)+"\n  ")]):t._e(),t.options.textContent?s("div",{staticClass:"text-content"},t._l(t.options.textContent,function(e){return s("p",{key:e.key},[t._v(t._s(e))])}),0):t._e()])},a=[],i={props:{options:{type:Object,default:function(){return{}}}},data:function(){return{}}},r=i,o=(s("521a"),s("2877")),c=Object(o["a"])(r,n,a,!1,null,"23c06331",null),l=c.exports;s.d(e,"a",function(){return l})},4065:function(t,e,s){},4234:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"accordion-menu accordion-menu-2"},[s("div",{staticClass:"wrap",class:t.isopen&&"opened"},[s("div",{staticClass:"menu-title",class:t.greytitle?"grey-title":"",on:{click:t.titleClicked}},[s("div",{staticClass:"title-number"},[s("span",[t._v(t._s(t.number))])]),s("div",[t._v(t._s(t.title))]),""!==t.rightText?s("div",{staticClass:"edit-button"},[t._v(t._s(t.rightText))]):t._e()]),s("div",{staticClass:"menu-content-container"},[s("div",{staticClass:"padding-block"},[t._t("default")],2)])])])},a=[],i={components:{},props:{greytitle:{type:Boolean,default:!1},number:{type:String,default:""},title:{type:String,default:""},isopen:{type:Boolean,default:!1},editbutton:{type:Boolean,default:!1},rightText:{type:String,default:""}},data:function(){return{}},methods:{titleClicked:function(){this.$emit("titleClicked")}}},r=i,o=(s("58c5"),s("2877")),c=Object(o["a"])(r,n,a,!1,null,"29a93114",null),l=c.exports;s.d(e,"a",function(){return l})},"521a":function(t,e,s){"use strict";var n=s("f24d"),a=s.n(n);a.a},"555f":function(t,e,s){"use strict";var n=s("23e5"),a=s.n(n);a.a},"58c5":function(t,e,s){"use strict";var n=s("92fb"),a=s.n(n);a.a},"841b":function(t,e,s){"use strict";var n=s("e240"),a=s.n(n);a.a},"88b7":function(t,e,s){},"92fb":function(t,e,s){},"9f16":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"send-offline-helper"},[s("div",{staticClass:"wrap"},[s("div",{staticClass:"page-title"},[s("page-title",{attrs:{options:{title:"Send Offline Helper",boldSubTitle:"",textContent:["Customize actions, debug reveals, and more with this set of advance tools. Please be mindful of the capabilities and limitations of these tools before using."]}}})],1),s("div",{staticClass:"page-content-container"},[s("div",{staticClass:"collapse-container"},[s("accordion-menu",{attrs:{greytitle:!1,isopen:t.stage1,title:t.$t("withoutWallet.selectNetwork"),"right-text":t.networkTitle,number:"1"},on:{titleClicked:function(e){t.stage1=!t.stage1}}},[s("ul",{staticClass:"networks"},t._l(Object.keys(t.reorderNetworkList),function(e,n){return s("li",{key:t.$router.path+e+n},[s("div",{staticClass:"network-title"},[s("div",{staticClass:"network-icon"},[t.Networks[e][0].type.icon?s("img",{attrs:{src:t.Networks[e][0].type.icon}}):t._e(),t.Networks[e][0].type.icon?t._e():s("div",{staticClass:"no-icon"},[s("p",[t._v("No")]),s("p",[t._v("Icon")])])]),s("p",[t._v(t._s(e))])]),s("div",{staticClass:"network-content"},t._l(t.Networks[e],function(e){return s("p",{key:e.service,class:e.service===t.selectedNetwork.service&&e.type&&e.type.name===t.selectedNetwork.type.name?"current-network":"",on:{click:function(s){return t.switchNetwork(e)}}},[t._v("\n                  "+t._s(e.service)+"\n                ")])}),0)])}),0)])],1),s("accordion-menu",{attrs:{greytitle:!1,editbutton:!0,isopen:t.stage2,title:t.$t("withoutWallet.generateInfo"),number:"2"},on:{titleClicked:function(e){t.stage2=!t.stage2}}},[s("dropdown-address-selector",{attrs:{title:"From Address"},on:{toAddress:function(e){return t.generateInformation(e)}}}),t.informationGenerated?s("div",[s("ul",[s("li",{staticClass:"detail-container"},[s("span",{staticClass:"detail-name"},[t._v("Sender:")]),s("span",{staticClass:"detail-text"},[t._v(t._s(t.genInfo.address))])]),s("li",{staticClass:"detail-container"},[s("span",{staticClass:"detail-name"},[t._v("Nonce:")]),s("span",{staticClass:"detail-text"},[t._v(t._s(t.genInfo.nonce))])]),s("li",{staticClass:"detail-container"},[s("span",{staticClass:"detail-name"},[t._v("Chain ID:")]),s("span",{staticClass:"detail-text"},[t._v(t._s(t.genInfo.chainID)+" ("+t._s(t.genInfo.networkName)+")")])]),s("li",{staticClass:"detail-container with-divider"},[s("span",{staticClass:"detail-name"},[t._v("Current Gas Price:")]),s("span",{staticClass:"detail-text"},[t._v(t._s(t.toGwei(t.genInfo.gasPrice))+" Gwei")])]),s("li",{staticClass:"detail-container"},[s("span",{staticClass:"detail-name"},[t._v("Retrieved:")]),s("span",{staticClass:"detail-text"},[t._v("\n                "+t._s(t.dateTimeDisplay(t.genInfo.timestamp))+"\n              ")])]),s("li",{staticClass:"detail-container"},[s("span",{staticClass:"detail-name"},[t._v("at block:")]),s("span",{staticClass:"detail-text"},[t._v(t._s(t.genInfo.blockNumber))])])])]):t._e(),s("div",{directives:[{name:"show",rawName:"v-show",value:t.informationGenerated,expression:"informationGenerated"}],staticClass:"button-container"},[s("a",{ref:"generatedDownloadLink",attrs:{href:t.generatedJson,download:t.exportFileName}},[s("standard-button",{attrs:{options:{title:"Export JSON File",buttonStyle:"green-border",noWalletTerms:!0,noMinWidth:!0}}})],1),s("standard-button",{attrs:{options:{title:"Continue",buttonStyle:"green",noWalletTerms:!0,rightArrow:!0}},nativeOn:{click:function(e){return t.stage2Btn(e)}}})],1)],1),s("accordion-menu",{attrs:{greytitle:!1,isopen:t.stage3,title:t.$t("withoutWallet.signedTx"),number:"3"},on:{titleClicked:function(e){t.stage3=!t.stage3}}},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.rawSigned,expression:"rawSigned"}],staticClass:"no-margin raw-tx-input",domProps:{value:t.rawSigned},on:{input:function(e){e.target.composing||(t.rawSigned=e.target.value)}}}),t.invalidSignature?s("p",[t._v("Invalid Signature")]):t._e(),t.wrongNetwork&&""===t.correctNetwork?s("p",[t._v("\n          Signed Chain ID does not match chain id for selected network\n        ")]):t._e(),t.wrongNetwork&&""!==t.correctNetwork?s("p",[t._v("\n          Signed Chain ID ("+t._s(t.correctNetwork)+") does not match chain id for\n          selected network\n        ")]):t._e(),s("expending-option",{attrs:{title:"Raw Transaction"}},[s("textarea",{staticClass:"no-margin raw-tx-input",attrs:{disabled:""},domProps:{value:JSON.stringify(t.rawTx)}})]),s("div",{staticClass:"button-container"},[s("input",{ref:"jsonInput",staticStyle:{display:"none"},attrs:{type:"file",name:"file"},on:{change:t.uploadFile}}),s("standard-button",{attrs:{options:{title:"Upload JSON File",buttonStyle:"green-border",noWalletTerms:!0,noMinWidth:!0}},nativeOn:{click:function(e){return t.uploadClick()}}}),s("standard-button",{attrs:{options:{title:"Continue",buttonStyle:"green",noWalletTerms:!0}},nativeOn:{click:function(e){return t.stage3Btn(e)}}})],1)],1),s("accordion-menu",{attrs:{greytitle:!1,editbutton:!1,isopen:t.stage4,title:t.$t("withoutWallet.txDetails"),number:"4"},on:{titleClicked:function(e){t.stage4=!t.stage4}}},[s("ul",[s("li",{staticClass:"detail-container"},[s("span",{staticClass:"detail-name"},[t._v("Sender:")]),s("span",{staticClass:"detail-text"},[t._v(t._s(t.from))])]),s("li",{staticClass:"detail-container"},[s("span",{staticClass:"detail-name"},[t._v("Receiver:")]),s("span",{staticClass:"detail-text"},[t._v(t._s(t.to))])]),s("li",{staticClass:"detail-container"},[s("span",{staticClass:"detail-name"},[t._v("Nonce:")]),s("span",{staticClass:"detail-text"},[t._v(t._s(t.nonce))])]),s("li",{staticClass:"detail-container"},[s("span",{staticClass:"detail-name"},[t._v("Value:")]),s("span",{staticClass:"detail-text"},[t._v(t._s(t.toEth(t.value))+" "+t._s(t.selectedNetwork.type.name))])]),s("li",{staticClass:"detail-container"},[s("span",{staticClass:"detail-name"},[t._v("Data:")]),"0x"!==t.data?s("span",{staticClass:"detail-text"},[t._v("\n              "+t._s(t.truncateData(t.data))+"\n              "),s("span",{staticClass:"show-all-btn",on:{click:function(e){t.showAllData=!t.showAllData}}},[t._v("Show All")])]):s("span",{staticClass:"data-all"},[t._v(t._s(t.data))]),t.showAllData?s("span",{staticClass:"data-all"},[t._v(t._s(t.data))]):t._e()]),s("li",{staticClass:"detail-container with-divider"},[s("span",{staticClass:"detail-name"},[t._v("Chain ID:")]),s("span",{staticClass:"detail-text"},[t._v(t._s(t.chainID)+" ("+t._s(t.selectedNetwork.type.name_long)+")")])]),s("li",{staticClass:"detail-container"},[s("span",{staticClass:"detail-name"},[t._v("Gas Limit:")]),s("span",{staticClass:"detail-text"},[t._v(t._s(t.gasLimit))])]),s("li",{staticClass:"detail-container"},[s("span",{staticClass:"detail-name"},[t._v("Gas Price:")]),s("span",{staticClass:"detail-text"},[t._v(t._s(t.toGwei(t.gasPrice))+" Gwei")])]),s("li",{staticClass:"detail-container"},[s("span",{staticClass:"detail-name"},[t._v("Fee:")]),s("span",{staticClass:"detail-text"},[t._v("\n              "+t._s(t.toEth(t.fee))+" "+t._s(t.selectedNetwork.type.name)+" ($\n              "+t._s(t.calculateCost(t.fee))+")\n            ")])])]),s("div",{staticClass:"button-container"},[s("standard-button",{attrs:{options:{title:"Send",buttonStyle:"green",noWalletTerms:!0,rightArrow:!0}},nativeOn:{click:function(e){return t.stage4Btn(e)}}})],1)]),s("accordion-menu",{attrs:{greytitle:!1,editbutton:!1,isopen:t.stage5,title:t.$t("withoutWallet.txStatus"),number:"5"},on:{titleClicked:function(e){t.stage5=!t.stage5}}},[""===t.error?s("ul",[s("li",{staticClass:"tx-hash-container"},[s("p",[t._v("Transaction Hash:")]),s("a",{staticClass:"detail-text",attrs:{href:t.replaceUrl("",t.txHash),target:"_blank"}},[t._v(t._s(t.txHash))])]),s("li",{staticClass:"tx-receipt-container"},[s("p",[t._v("Transaction Receipt:")]),Object.keys(t.txReceipt).length>0?s("div",{staticClass:"tx-receipt-items"},t._l(Object.keys(t.txReceipt),function(e,n){return s("div",{key:e+n},[s("span",[t._v(t._s(e))]),"transactionHash"===e?s("a",{staticClass:"right-side",attrs:{href:t.replaceUrl("",t.txReceipt[e]),target:"_blank"}},[t._v(t._s(t.txReceipt[e]))]):"contractAddress"===e?s("a",{staticClass:"right-side",attrs:{href:t.replaceUrl("address",t.txReceipt[e]),target:"_blank"}},[t._v(t._s(t.txReceipt[e]))]):s("span",{staticClass:"right-side"},[t._v(t._s(t.txReceipt[e]))])])}),0):s("div",{staticClass:"loading"},[t._v("Loading....")])])]):s("div",[t._v(t._s(t.error))])])],1)]),s("confirmation-modal",{ref:"offlineConfirm",attrs:{"raw-tx":t.rawTx,"signed-tx":t.rawSigned,"env-details":t.envDetails}})],1)},a=[],i=s("53ca"),r=(s("96cf"),s("1da1")),o=(s("6b54"),s("a481"),s("7f7f"),s("be94")),c=(s("ac6a"),s("8615"),s("dbd9")),l=s.n(c),d=s("2f62"),u=s("a731"),p=s("901e"),f=s.n(p),h=s("1131"),v=s.n(h),g=s("8761"),w=s("2cdb"),m=s("4234"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"drop-down-address-selector"},[n("div",{staticClass:"dropdown--title"},[n("h4",[t._v(t._s(t.title))]),n("button",{staticClass:"title-button prevent-user-select",on:{click:function(e){return t.copyToClipboard(t.$refs.addressInput)}}},[t._v("\n      "+t._s(t.$t("common.copy"))+"\n    ")])]),n("div",{staticClass:"dropdown--content"},[n("div",{staticClass:"dropdown-input-box",class:t.dropdownOpen?"dropdown-open":""},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedAddress,expression:"selectedAddress"}],ref:"addressInput",attrs:{type:"text",placeholder:"Please enter the address"},domProps:{value:t.selectedAddress},on:{focus:function(e){t.dropdownOpen=!1},input:function(e){e.target.composing||(t.selectedAddress=e.target.value)}}}),t.validAddress?t._e():n("div",{staticClass:"blockie-place-holder-image"}),t.validAddress?n("div",{staticClass:"selected-address-blockie"},[n("blockie",{attrs:{address:t.selectedAddress,width:"30px",height:"30px"}}),t.isToken(t.currency)?n("div",[n("img",{staticClass:"currency-icon",attrs:{src:s("9165")}})]):n("div",[n("i",{class:["currency-icon","as-font","cc",t.currency,"cc-icon"]})])],1):t._e(),n("div",{staticClass:"dropdown-open-button",on:{click:function(e){t.dropdownOpen=!t.dropdownOpen}}},[t.dropdownOpen?t._e():n("i",{staticClass:"fa fa-chevron-down",attrs:{"aria-hidden":"true"}}),t.dropdownOpen?n("i",{staticClass:"fa fa-chevron-up",attrs:{"aria-hidden":"true"}}):t._e()])]),t.dropdownOpen?n("div",{staticClass:"dropdown-list-box"},[n("ul",t._l(t.addresses,function(e){return n("li",{key:e.key,on:{click:function(s){return t.listedAddressClick(e.address)}}},[n("div",{staticClass:"list-blockie"},[n("blockie",{attrs:{address:e.address,width:"30px",height:"30px"}}),n("img",{staticClass:"currency-icon",attrs:{src:s("9165")}})],1),n("div",{staticClass:"address-block"},[n("p",{staticClass:"listed-address"},[t._v("\n              "+t._s(e.address)+"\n              ")])]),e.address===t.currentAddress?n("p",{staticClass:"address-note"},[t._v("\n            "+t._s(t.$t("interface.myAddr"))+"\n          ")]):t._e(),t.toAddressCheckMark?n("i",{staticClass:"fa fa-check-circle good-button",attrs:{"aria-hidden":"true"}}):t._e()])}),0)]):t._e()])])},C=[],b=s("2909"),k=(s("20d6"),s("7099"),s("e351"),s("34eb")),x=s.n(k),y=s("8233"),S=s.n(y),T=s("c8e5"),N=s("b643"),A=x()("v5:error"),I={components:{blockie:T["a"]},props:{title:{type:String,default:""},currentAddress:{type:String,default:""},currency:{type:String,default:"ETH"}},data:function(){return{selectedAddress:"",validAddress:!1,dropdownOpen:!1,addresses:[],toAddressCheckMark:!1}},watch:{currentAddress:function(t){-1===this.addresses.findIndex(function(e){return e.address===t})&&(this.addresses=[{address:t,currency:N["a"]}].concat(Object(b["a"])(this.addresses)))},selectedAddress:function(t){this.validateAddress(t)},currency:function(){this.validateAddress(this.selectedAddress)}},methods:{copyToClipboard:function(t){t.select(),document.execCommand("copy")},isToken:function(t){return"undefined"!==typeof N["c"][t]},listedAddressClick:function(t){this.toAddressCheckMark=!0,this.dropdownOpen=!this.dropdownOpen,this.selectedAddress=t},validateAddress:function(t){if(""!==this.selectedAddress){var e=t.address?t.address:t;if(N["c"][this.currency])this.validAddress=S.a.validate(e,"ETH");else try{this.validAddress=S.a.validate(e,this.currency)}catch(s){A(s),this.validAddress=!1}this.validAddress?(this.$emit("toAddress",e),this.$emit("validAddress",!0)):(this.$emit("toAddress",""),this.$emit("validAddress",!1))}}}},D=I,O=(s("f6ad"),s("2877")),j=Object(O["a"])(D,_,C,!1,null,"418c99a3",null),P=j.exports,$=s("a8f0"),R=s("38c1"),G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"expending-option",class:t.hidebottomborder?"hide-bottom-border":""},[s("div",{staticClass:"title-bar-container"},[s("div",{staticClass:"input-title"},[t._v(t._s(t.title))]),s("div",{staticClass:"switch sliding-switch-white"},[s("label",{staticClass:"switch"},[s("input",{attrs:{type:"checkbox"},on:{click:function(e){t.expanded=!t.expanded}}}),s("span",{staticClass:"slider round"})])])]),s("div",{staticClass:"contnet-container",class:t.expanded?"expanded":""},[s("div",{staticClass:"content-block"},[t._t("default")],2)])])},B=[],E={props:{title:{type:String,default:""},hidebottomborder:{type:Boolean,default:!1}},data:function(){return{expanded:!1}}},F=E,W=(s("555f"),Object(O["a"])(F,G,B,!1,null,"61c0e45a",null)),L=W.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"send-offline-confirmation-modal"},[s("b-modal",{ref:"sendOfflineConfirmation",staticClass:"bootstrap-modal-wide nopadding",attrs:{title:"Confirmation","hide-footer":"",centered:""}},[s("div",{staticClass:"modal-contents"},[s("div",{staticClass:"tx-info-container"},[s("ul",[s("li",[t._v("From Address")]),s("li",[t._v(t._s(t.rawTx.from))])]),s("ul",[s("li",[t._v("To Address")]),s("li",[t._v(t._s(t.rawTx.to))])]),s("ul",[s("li",[t._v("Nonce")]),s("li",[t._v(t._s(t.rawTx.nonce))])]),s("ul",[s("li",[t._v("Value")]),s("li",[t._v(t._s(t.rawTx.value))])]),s("ul",[s("li",[t._v("Data")]),s("li",{staticClass:"data"},[t._v(t._s(t.rawTx.data))])]),s("ul",[s("li",[t._v("Chain ID")]),s("li",[t._v(t._s(t.rawTx.chainID))])]),s("ul",[s("li",[t._v("Gas Limit")]),s("li",[t._v(t._s(t.rawTx.gasLimit))])]),s("ul",[s("li",[t._v("Gas Price")]),s("li",[t._v(t._s(t.rawTx.gasPrice))])])]),s("expending-option",{attrs:{hidebottomborder:!0,title:"Signed Transaction"}},[s("div",{staticClass:"raw-signed"},[t._v("\n          "+t._s(t.signedTx)+"\n        ")])]),s("expending-option",{attrs:{title:"Raw Transaction"}},[t._v("\n        "+t._s(t.rawTx)+"\n      ")]),s("div",{staticClass:"button-block-container"},[s("standard-button",{attrs:{options:t.buttonConfirmAndSend}})],1)],1)])],1)},U=[],J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"address-container"},[n("div",{staticClass:"currency-container"},[n("img",{attrs:{src:s("7cd9")("./"+t.lowerCaseCurrency+".svg")}}),n("p",[n("span",{staticClass:"currency-amt"},[t._v("\n        "+t._s("from"===t.direction?"-":"+")+"\n        "+t._s(""!==t.tokenTransferVal?t.tokenTransferVal:t.converter(t.value))+"\n      ")]),n("span",{staticClass:"currency-type"},[t._v(t._s(""!==t.tokenSymbol?t.tokenSymbol:t.currency.toUpperCase())+"\n      ")])])]),n("div",{staticClass:"identicon-container"},[n("p",[t._v(t._s(t._f("capitalize")(t.direction))+" Address")])]),n("div",{staticClass:"address"},[t._v(t._s(t.checksumAddress))])])},z=[],M=(s("c5f6"),s("b7d3")),V=s("6314"),q=s.n(V),X={props:{address:{type:String,default:""},direction:{type:String,default:""},value:{type:Number,default:0},currency:{type:String,default:"eth"},tokenTransferTo:{type:String,default:""},tokenTransferVal:{type:String,default:""},tokenSymbol:{type:String,default:""}},computed:{lowerCaseCurrency:function(){return this.currency.toLowerCase()},checksumAddress:function(){return Object(M["a"])(this.tokenTransferTo)?Object(M["b"])(this.tokenTransferTo):Object(M["a"])(this.address)?Object(M["b"])(this.address):""}},methods:{converter:function(t){return q.a.utils.fromWei(t.toString(),"ether")}}},K=X,Q=(s("edbf"),Object(O["a"])(K,J,z,!1,null,null,null)),Y=Q.exports,Z={name:"SendOfflineConfirmation",components:{"standard-input":R["a"],"standard-button":$["a"],"expending-option":L,"address-block":Y},props:{envDetails:{type:Object,default:function(){return{}}},rawTx:{type:Object,default:function(){return{}}},signedTx:{type:String,default:""}},data:function(){return{modalDetailInformation:!1,inputRawTx:{isTextarea:!0,buttonClear:!0,buttonCopy:!0},buttonConfirmAndSend:{title:"Confirm & Send",buttonStyle:"green",helpCenter:!0}}},beforeDestroy:function(){},methods:{}},tt=Z,et=(s("841b"),Object(O["a"])(tt,H,U,!1,null,"2345c42c",null)),st=et.exports,nt={components:{"page-title":w["a"],"accordion-menu":m["a"],"dropdown-address-selector":P,"standard-button":$["a"],"standard-input":R["a"],"expending-option":L,"confirmation-modal":st},data:function(){return{networkTypes:Object.values(g),selectedNetwork:this.$store.state.network,stage1:!1,stage2:!0,stage3:!1,stage4:!1,stage5:!1,showAllData:!1,informationGenerated:!1,downloadable:!1,from:"0x",rawSigned:"",minAccountBalance:0,fee:0,nonce:0,gasPrice:0,gasLimit:0,to:"0x",value:0,data:"0x",chainID:0,ethPrice:0,genInfo:{address:"0x",gasPrice:0,nonce:0,chainID:this.$store.state.network.type.chainID,networkName:this.$store.state.network.type.name_long},generatedJson:{},file:"",exportFileName:"Generated Information",invalidSignature:!1,wrongNetwork:!1,correctNetwork:"",txHash:"",txReceipt:{},error:""}},computed:Object(o["a"])({},Object(d["b"])({network:"network",Networks:"Networks",customPaths:"customPaths",path:"path",web3:"web3",wallet:"wallet"}),{reorderNetworkList:function(){return u["a"].reorderNetworks()},networkTitle:function(){return"".concat(this.selectedNetwork.type.name," - ").concat(this.selectedNetwork.service," ")},rawTx:function(){return{from:this.from,nonce:this.nonce,gasPrice:this.toGwei(this.gasPrice),gasLimit:this.gasLimit,to:this.to,value:this.toEth(this.value),data:this.data,chainID:this.chainID}},envDetails:function(){return{network:this.selectedNetwork,ethPrice:this.ethPrice}}}),watch:{rawSigned:function(t){this.getTransactionDetails(t)}},mounted:function(){this.switchNetwork(this.$store.state.network),this.fetchBalanceData()},methods:{replaceUrl:function(t,e){return"address"===t?this.network.type.blockExplorerAddr.replace("[[address]]",e):this.network.type.blockExplorerTX.replace("[[txHash]]",e)},stage1Btn:function(){this.stage1=!1,this.stage2=!0},stage2Btn:function(){this.stage2=!1,this.stage3=!0},stage3Btn:function(){this.stage3=!1,this.stage4=!0},stage4Btn:function(){var t=this;this.stage4=!1,this.stage5=!0,""!==this.rawSigned&&(this.error=this.txHash="",this.txReceipt={},this.web3.eth.sendSignedTransaction(this.rawSigned).once("transactionHash",function(e){t.txHash=e}).then(function(e){t.txReceipt=e}).catch(function(e){t.error=e}))},switchNetwork:function(t){var e=this;this.$store.dispatch("switchNetwork",t).then(function(){e.selectedNetwork=t,e.$store.dispatch("setWeb3Instance"),e.stage1Btn(),e.getTransactionDetails()})},truncateData:function(t){return t?"".concat(t.slice(0,20),"...").concat(t.slice(-10)):""},getTransactionDetails:function(t){var e=this,s={nonce:0,gasPrice:1,gasLimit:2,to:3,value:4,data:5,v:6,r:7,s:8};if(t&&(this.rawSigned=t),""!==this.rawSigned){var n=u["a"].sanitizeHex(this.rawSigned),a=new l.a(n);if(this.invalidSignature=!a.verifySignature(),this.chainID=a.getChainId(),this.wrongNetwork=!new f.a(this.selectedNetwork.type.chainID).eq(new f.a(this.chainID)),this.chainID=a.getChainId(),this.wrongNetwork){var i=this.networkTypes.filter(function(t){return t.chainID===e.chainID});i&&(this.correctNetwork=i[0].name_long)}this.from=u["a"].sanitizeHex(a.getSenderAddress().toString("hex"));var r=a.toJSON();this.to=r[s.to],this.gasLimit=new f.a(r[s.gasLimit]).toFixed(),this.nonce=new f.a(r[s.nonce]).toFixed(),this.value=new f.a(r[s.value]).toFixed(),this.data=r[s.data],this.minAccountBalance=a.getUpfrontCost().toString(),this.gasPrice=new f.a(u["a"].sanitizeHex(a.gasPrice.toString("hex"))).toFixed(),this.fee=new f.a(this.toGwei(this.gasPrice)).times(this.gasLimit).toFixed()}},fetchBalanceData:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,s,n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e="https://cryptorates.mewapi.io/ticker",t.next=3,fetch(e);case 3:return s=t.sent,t.next=6,s.json();case 6:if(n=t.sent,a=n.data,a["ETH"]){t.next=10;break}return t.abrupt("return",0);case 10:this.ethPrice=new f.a(a["ETH"].quotes.USD.price);case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),toEth:function(t){return!t||isNaN(t)?0:v.a.fromWei(new f.a(t).toFixed(),"ether")},toWei:function(t){return t?v.a.toWei(new f.a(t).toFixed(),"gwei"):0},toGwei:function(t){return t?v.a.fromWei(new f.a(t).toFixed(),"gwei"):0},dateTimeDisplay:function(t){return new Date(t).toString()},calculateCost:function(t){var e=this.toWei(t);return new f.a(this.ethPrice).times(this.toEth(e)).precision(2,f.a.ROUND_UP).toNumber()},generateInformation:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(""!==e){t.next=2;break}return t.abrupt("return");case 2:return this.genInfo.address=e,t.next=5,this.web3.eth.getGasPrice();case 5:return this.genInfo.gasPrice=t.sent,t.next=8,this.web3.eth.getTransactionCount(e);case 8:return this.genInfo.nonce=t.sent,t.next=11,this.web3.eth.getBlockNumber();case 11:this.genInfo.blockNumber=t.sent,this.genInfo.chainID=this.selectedNetwork.type.chainID,this.genInfo.timestamp=Date.now(),this.exportGeneratedInfo(),this.informationGenerated=!0;case 16:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),exportGeneratedInfo:function(){var t=this,e=function(e,s){var n="object"===Object(i["a"])(s)?JSON.stringify(s):s;if(null===n)return"";var a=new Blob([n],{type:e});return t.downloadable=!0,window.URL.createObjectURL(a)};this.generatedJson=e("mime",this.genInfo),this.exportFileName="generated-offline-tx-".concat(Date.now(),".json")},uploadClick:function(){var t=this.$refs.jsonInput;t.value="",t.click()},uploadFile:function(t){var e=this,s=new FileReader;s.onloadend=function(t){e.file=JSON.parse(t.target.result),e.getTransactionDetails(e.file.rawTransaction)},s.readAsBinaryString(t.target.files[0])}}},at=nt,it=(s("ddd9"),Object(O["a"])(at,n,a,!1,null,"50acdb80",null)),rt=it.exports;s.d(e,"default",function(){return rt})},ddd9:function(t,e,s){"use strict";var n=s("4065"),a=s.n(n);a.a},e240:function(t,e,s){},edbf:function(t,e,s){"use strict";var n=s("88b7"),a=s.n(n);a.a},f24d:function(t,e,s){},f6ad:function(t,e,s){"use strict";var n=s("fd74c"),a=s.n(n);a.a},fd74c:function(t,e,s){}}]);
//# sourceMappingURL=chunk-75c583f1.12b80195.js.map