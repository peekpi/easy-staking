(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],d=0,m=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/easy-staking/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"09ec":function(t,e,a){"use strict";var n=a("34cc"),r=a.n(n);r.a},1:function(t,e){},2:function(t,e){},3:function(t,e){},"34cc":function(t,e,a){},4:function(t,e){},"4f7d":function(t,e,a){},5:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("8bbf"),r=a.n(n),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Staking")},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("Header",[a("a",{attrs:{target:"_blank",href:"https://www.harmony.one/cn"}},[t._e(),a("svg",{staticClass:"logosvg",attrs:{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1020 300"}},[a("defs"),a("title",[t._v("Harmony-logo-WH-horizontal")]),a("path",{staticClass:"cls-1",attrs:{d:"M201.17,61.26A38.81,38.81,0,0,0,162.33,100v42.93c-4,.27-8.09.44-12.33.44s-8.31.17-12.33.41V100A38.84,38.84,0,0,0,60,100V202.55a38.84,38.84,0,0,0,77.67,0V159.63c4-.27,8.09-.44,12.33-.44s8.31-.17,12.33-.41v43.77a38.84,38.84,0,0,0,77.67,0V100A38.81,38.81,0,0,0,201.17,61.26ZM98.83,77.12A22.91,22.91,0,0,1,121.75,100v45.46a130.64,130.64,0,0,0-33,9.33,60,60,0,0,0-12.8,7.64V100A22.91,22.91,0,0,1,98.83,77.12Zm22.92,125.43a22.92,22.92,0,0,1-45.84,0V192.29c0-9.08,7.2-17.7,19.27-23a112.49,112.49,0,0,1,26.57-7.77Zm79.42,22.85a22.91,22.91,0,0,1-22.92-22.85V157.09a129.82,129.82,0,0,0,33-9.33,59.55,59.55,0,0,0,12.8-7.63v62.42A22.91,22.91,0,0,1,201.17,225.4Zm3.65-92.12A112.49,112.49,0,0,1,178.25,141V100a22.92,22.92,0,0,1,45.84,0v10.26C224.09,119.31,216.89,127.92,204.82,133.28Z"}}),a("path",{staticClass:"cls-1",attrs:{d:"M748.35,125.42a42.45,42.45,0,1,0,42.44,42.45A42.45,42.45,0,0,0,748.35,125.42Zm0,71.13A28.69,28.69,0,1,1,777,167.87,28.68,28.68,0,0,1,748.35,196.55Zm-258.2-70.83a6.88,6.88,0,0,0-6.88,6.88v4.05a42.45,42.45,0,1,0,0,62.43v4a6.88,6.88,0,1,0,13.76,0V132.6A6.88,6.88,0,0,0,490.15,125.72Zm-35.57,70.83a28.69,28.69,0,1,1,28.69-28.68A28.68,28.68,0,0,1,454.58,196.55Zm108.49-64.24a6.88,6.88,0,0,1-6.87,6.87c-.15,0-.28,0-.42,0s-.31,0-.47,0a28.68,28.68,0,0,0-28.69,28.69c-.36,1.42-.21,23.25-.1,36.16a6.85,6.85,0,0,1-7.81,5.87,7.1,7.1,0,0,1-5.85-7.13V132.6a6.88,6.88,0,0,1,7.25-6.87,7.14,7.14,0,0,1,6.51,7.26v3.66a42.24,42.24,0,0,1,28.69-11.23l.89,0A6.87,6.87,0,0,1,563.07,132.31ZM873.69,161v42.1a6.88,6.88,0,0,1-6.88,6.88h0a6.88,6.88,0,0,1-6.87-6.88v-6.88h0V161a21.5,21.5,0,0,0-23-21.42c-11.4.76-20,10.75-20,22.17v8.37h0v26.1h0v6.88a6.88,6.88,0,1,1-13.76,0V132.64a6.88,6.88,0,0,1,13.76,0v.65a34.2,34.2,0,0,1,19.77-7.49A35.23,35.23,0,0,1,873.69,161ZM398,96.79V203.21a6.8,6.8,0,0,1-13.59,0V155H313.59v48.26a6.8,6.8,0,0,1-13.59,0V96.79a6.8,6.8,0,0,1,13.59,0v46.42h70.79V96.79a6.8,6.8,0,0,1,13.59,0Zm295.49,67.46h0v38.84a6.88,6.88,0,0,1-6.88,6.88h0a6.88,6.88,0,0,1-6.88-6.88V167.7h0v-9.31a19.21,19.21,0,1,0-38.41,0h0v44.7a6.88,6.88,0,1,1-13.76,0V167.7h0v-9.31h0a19.21,19.21,0,1,0-38.41,0v44.7a6.88,6.88,0,0,1-13.76,0V132.64a6.87,6.87,0,0,1,13.68-1,32.89,32.89,0,0,1,45.37,6.63,32.93,32.93,0,0,1,59.05,20.1Zm265.89-28.6L913,236a7,7,0,0,1-12.65-5.85l12.47-27-31.23-67.51a7,7,0,1,1,12.64-5.85l26.27,56.77,26.26-56.77a7,7,0,1,1,12.64,5.85Z"}}),a("rect",{staticClass:"cls-2",attrs:{x:"300",y:"60",width:"660",height:"180"}}),a("rect",{staticClass:"cls-2",attrs:{width:"1020",height:"300"}})])]),a("div",{staticClass:"topright"},[a("a",{attrs:{target:"_blank",href:"https://mp.weixin.qq.com/s/CV7ccdKIblUD11rEECnYeA"}},[a("Button",{attrs:{type:"text",ghost:""},on:{click:function(t){}}},[t._v("投票规则")])],1)]),a("Modal",{attrs:{"footer-hide":"",fullscreen:"",title:"投票规则"},model:{value:t.enable,callback:function(e){t.enable=e},expression:"enable"}},[a("List",{attrs:{split:!1}},t._l(t.stakingRules,(function(e,n){return a("ListItem",{key:n},[t._v(" "+t._s(n)+". "+t._s(e)+" ")])})),1)],1)],1),a("Content",[a("Account",{model:{value:t.delegate,callback:function(e){t.delegate=e},expression:"delegate"}}),t.delegate?a("ValidatorList"):a("Delegations")],1)],1)},c=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ValidatorPage",{attrs:{triger:t.pageTriger,validator:t.validatorSelected}}),a("StakingConfirm",{attrs:{triger:t.btnTriger,validator:t.validatorSelected}}),a("List",{attrs:{border:"",loading:t.loading}},[a("Scroll",{attrs:{"on-reach-bottom":t.handleReachBottom,height:t.scrollHeight}},t._l(t.validators,(function(e,n){return a("ListItem",{key:n},[t._v(" "+t._s(n)+" "),a("ValidatorLogo",{attrs:{address:e.address}}),a("ListItemMeta",{attrs:{title:t.shortName(e.name)},nativeOn:{click:function(a){return t.titleClick(e)}}},[a("template",{slot:"description"},[a("span",[t._v(" 票数: "),a("b",[t._v(t._s(t._f("zeroDecimals")(t._f("ones")(e.total_stake))))]),a("span"),t._v(" 年化: "),a("b",[t._v(t._s(t._f("percent")(e.apr>e.rate?e.apr-e.rate:0))+"%")])])])],2),a("template",{slot:"action"},[a("Button",{attrs:{shape:"circle",loading:t.loging},on:{click:function(a){return t.validatorClick(e)}}},[t._v("投票")])],1)],2)})),1)],1)],1)},u=[],d=(a("fb6a"),a("96cf"),a("1da1")),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{"footer-hide":"",fullscreen:"",title:t.validator.name},model:{value:t.enable,callback:function(e){t.enable=e},expression:"enable"}},[a("ValidatorProfile",{attrs:{validator:t.validator}}),a("br"),a("ValidatorStatus",{attrs:{validator:t.validator}}),a("br"),a("ValidatorInfo",{attrs:{validator:t.validator}})],1)},h=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Table",{attrs:{"disabled-hover":"",stripe:"",border:"",columns:t.header,data:t.bodyStyle}},[a("template",{slot:"body"},[a("Table",{attrs:{"disabled-hover":"","show-header":!1,stripe:"",border:"",columns:t.column,data:t.context}})],1)],2)},p=[],f=(a("b0c0"),a("4160"),a("d81d"),a("13d5"),a("b65f"),a("a9e3"),a("9129"),a("4fad"),a("d3b7"),a("25f0"),a("159b"),a("3835"),a("901e")),v=a.n(f);function b(t,e){return Math.trunc(t*Math.pow(10,e))/Math.pow(10,e)}var _="en-US";function y(t,e,a){return new Intl.NumberFormat(_,{minimumFractionDigits:e,maximumFractionDigits:a}).format(b(t,a))}function x(t){return y(t,0,0)}function k(t){return y(t,2,2)}function w(t){return-1===t||null===t}function S(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return w(t)?t:new Intl.NumberFormat(_,{minimumFractionDigits:2,maximumFractionDigits:2}).format(Math.round(1e4*t)/100)+"%"}function O(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return v()(t).div(1e18).toNumber()}var T=function(t){return"http"==t.slice(0,4)?t:"http://"+t},R={data:function(){return{bodyStyle:[{cellClassName:{body:"nopadding"}}]}},computed:{header:function(){return[{title:"节点信息",align:"center",slot:"body",key:"body",flush:this.validator.name}]},column:function(){return[{key:"name"},{key:"text",render:function(t,e){var a=e.row;return"网站"==a.name?t("a",{domProps:{href:T(a.text?a.text:""),target:"black"}},a.text):t("span",a.text)}}]},context:function(){return[{name:"简介",text:this.validator["details"]},{name:"网站",text:this.validator["website"]},{name:"投票地址",text:this.validator["operator_address"]},{name:"注册区块高度",text:this.validator["creation_height"]},{name:"费率",text:S(this.validator["rate"])},{name:"单日最大费率调整",text:S(this.validator["max_change_rate"])}]}},props:["validator"]},A=R,V=a("2877"),C=Object(V["a"])(A,g,p,!1,null,null,null),$=C.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Table",{attrs:{"disabled-hover":"",stripe:"",border:"",columns:t.header,data:t.bodyStyle}},[a("template",{slot:"body"},[a("Table",{attrs:{"disabled-hover":"","show-header":!1,stripe:"",border:"",columns:t.column,data:t.context}})],1)],2)},B=[],I={data:function(){return{bodyStyle:[{cellClassName:{body:"nopadding"}}]}},computed:{header:function(){return[{title:this.validator.name,align:"center",slot:"body",key:"body",flush:this.validator.name}]},column:function(){return[{key:"name"},{key:"text"}]},context:function(){var t=function(t){return x(O(t))};return[{name:"总得票数",text:t(this.validator["total_stake"])},{name:"自抵押票数",text:t(this.validator["self_stake"])},{name:"代理抵押票数",text:t(this.validator["delegator_shares"])},{name:"最大可代理票数",text:t(this.validator["max_total_delegation"])}]}},props:["validator"]},L=I,M=(a("bbba"),Object(V["a"])(L,j,B,!1,null,null,null)),D=M.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Table",{attrs:{"disabled-hover":"",stripe:"",border:"",columns:t.header,data:t.bodyStyle}},[a("template",{slot:"body"},[a("Table",{attrs:{"disabled-hover":"","show-header":!1,stripe:"",border:"",columns:t.column,data:t.context}})],1)],2)},P=[],E={data:function(){return{bodyStyle:[{cellClassName:{body:"nopadding"}}]}},computed:{header:function(){return[{title:"节点状态",align:"center",slot:"body",key:"body",flush:this.validator.name}]},column:function(){return[{key:"name"},{key:"text"}]},context:function(){var t=function(t){return x(O(t))};return[{name:"出块率",text:S(this.validator["uptime_percentage"])},{name:"Slots",text:this.validator["active_nodes"]},{name:"Elected Slots",text:this.validator["elected_nodes"]},{name:"七日年化",text:S(this.validator["apr"])},{name:"已分红",text:t(this.validator["lifetime_reward_accumulated"])}]}},props:["validator"]},N=E,F=Object(V["a"])(N,H,P,!1,null,null,null),Z=F.exports,U={data:function(){return{enable:!1}},props:["triger","validator"],watch:{triger:function(){this.enable||(this.enable=!0)}},components:{ValidatorProfile:D,ValidatorStatus:Z,ValidatorInfo:$}},z=U,W=Object(V["a"])(z,m,h,!1,null,null,null),J=W.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",["error"!=t.imgState?a("img",{staticClass:"li-validator-image",style:{display:"loaded"==t.imgState?"block":"none"},attrs:{src:t.imageSrc},on:{load:function(e){t.imgState="loaded"},error:function(e){t.imgState="error"}}}):t._e(),"loaded"!=t.imgState?a("Avatar",{staticClass:"li-validator-image",attrs:{address:t.address}}):t._e()],1)},G=[],X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{domProps:{innerHTML:t._s(t.svg)}})},K=[],Y=a("2551"),Q=a.n(Y),tt=a("1f91"),et=a.n(tt),at={name:"avatar",props:{address:{type:String,required:!0}},computed:{svg:function(){var t={},e=new Q.a(et()(t));return e.create(this.address)}}},nt=at,rt=Object(V["a"])(nt,X,K,!1,null,null,null),ot=rt.exports,it={name:"ValidatorLogo",data:function(){return{imgState:null}},components:{Avatar:ot},props:["address","logoUrl"],computed:{imageSrc:function(){return this.logoUrl||"https://github.com/harmony-one/validator-logos/raw/master/validators/".concat(this.address,".jpg")}}},st=it,ct=(a("09ec"),Object(V["a"])(st,q,G,!1,null,null,null)),lt=ct.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{width:"360",loading:!0,closable:!1,"mask-closable":!1},model:{value:t.enable,callback:function(e){t.enable=e},expression:"enable"}},[a("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[a("span",[t._v(" 投票给 "),a("i",[t._v(t._s(t.validator.name))])])]),a("div",[a("Input",{attrs:{placeholder:"数量"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},[a("Icon",{attrs:{slot:"prepend",type:"logo-bitcoin"},slot:"prepend"}),a("span",{attrs:{slot:"append"},slot:"append"},[t._v("ONE")])],1),a("span",{staticStyle:{"font-size":"smaller"}},[t._v(" 可用余额: "+t._s(t._f("twoDecimals")(t.balanceOne))+" "),a("b",[t._v("ONE")])]),a("Slider",{attrs:{step:.1},model:{value:t.persent,callback:function(e){t.persent=e},expression:"persent"}})],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:function(e){t.enable=!1}}},[t._v("取消")]),a("Button",{attrs:{type:"primary",loading:t.loading},on:{click:t.ok}},[t._v("确定")])],1)])},dt=[],mt=(a("b680"),function(t){return"https://explorer.harmony.one/#/tx/".concat(t)}),ht={data:function(){return{enable:!1,amount:1e3,loading:!1}},props:["triger","validator"],filters:{twoDecimals:k},methods:{ok:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var a,n,r,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.loading=!0,e.prev=1,!(t.amount<1e3)){e.next=4;break}throw{message:"至少需要 1000 One"};case 4:if(!(t.balanceOne-t.amount<.001)){e.next=6;break}throw{message:"请留出一些手续费"};case 6:return a=t.$root.hmy,n=t.account,r=new a.hmy.utils.Unit(t.amount).asOne().toHex(),o=a.delegate(n.address,t.validator.address,r),i=null,e.next=13,t.$store.dispatch("txCommit",{tx:o,fun:function(){i&&i(),o.isConfirmed()?t.$root.message("success","<a target=_blank href="+mt(o.id)+">交易</a>已打包"):t.$root.message("warning","<a target=_blank href="+mt(o.id)+">交易</a>仍未打包")}});case 13:i=t.$root.message("loading","<a target=_blank href="+mt(o.id)+">交易</a>已发送，等待打包。"),t.enable=!1,e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](1),t.$root.message("error",e.t0.message?e.t0.message:e.t0);case 20:t.loading=!1;case 21:case"end":return e.stop()}}),e,null,[[1,17]])})))()}},watch:{triger:function(){this.enable||(this.enable=!0)}},computed:{persent:{set:function(t){try{var e=Math.floor(this.balanceOne),a=100*this.amount/e;a.toFixed(1)!=t.toFixed(1)&&(this.amount=Math.floor(t*e/100))}catch(n){return 0}},get:function(){try{var t=Math.floor(this.balanceOne);return 100*this.amount/t}catch(e){return 0}}},account:function(){return this.$store.state.account},balanceOne:function(){try{return this.account.balance.toOne()}catch(t){return 0}}}},gt=ht,pt=Object(V["a"])(gt,ut,dt,!1,null,null,null),ft=pt.exports,vt={name:"ValidatorList",components:{ValidatorLogo:lt,StakingConfirm:ft,ValidatorPage:J},data:function(){var t=this;return 0==this.$store.state.validators.length&&this.$store.dispatch("getValidators").then((function(){return t.loading=!1})).catch((function(e){t.loading=!1,t.$root.message("error",e)})),{loading:0==this.$store.state.validators.length,loging:!1,btnTriger:!1,pageTriger:!1,validatorSelected:{}}},computed:{scrollHeight:function(){return document.documentElement.clientHeight-85},validators:function(){return this.$store.state.validators}},filters:{ones:O,zeroDecimals:x,percent:S},methods:{shortName:function(t){return t.length>25?t.slice(0,10)+"..."+t.slice(-10):t},validatorClick:function(t){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.loging=!0,a.prev=1,a.next=4,e.$store.dispatch("login");case 4:e.btnTriger=!e.btnTriger,e.validatorSelected=t,a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](1),e.$root.message("error",a.t0.message);case 11:e.loging=!1;case 12:case"end":return a.stop()}}),a,null,[[1,8]])})))()},titleClick:function(t){this.pageTriger=!this.pageTriger,this.validatorSelected=t},handleReachBottom:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$store.dispatch("getValidators");case 4:a=e.sent,0==a&&t.$root.message("info","没有节点了"),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),t.$root.message("error",e.t0);case 11:t.loading=!1;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()}}},bt=vt,_t=Object(V["a"])(bt,l,u,!1,null,null,null),yt=_t.exports,xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("StakingCancel",{attrs:{triger:t.btnTriger,validator:t.validatorSelected}}),a("ValidatorPage",{attrs:{triger:t.pageTriger,validator:t.validatorInfo}}),a("List",{staticClass:"dl",attrs:{border:"",loading:t.loading}},[a("Scroll",{attrs:{height:t.scrollHeight}},t._l(t.delegations,(function(e,n){return a("ListItem",{key:n},[t._v(" "+t._s(n)+" "),a("ValidatorLogo",{attrs:{address:e.validator_address}}),a("ListItemMeta",{attrs:{title:t.shortName(e.validator_info.name)},nativeOn:{click:function(a){return t.titleClick(e)}}},[a("template",{slot:"description"},[a("span",[t._v(" 我的票数: "),a("b",[t._v(t._s(t._f("twoDecimals")(t._f("ones")(e.amount))))]),a("span"),t._v(" 我的收益: "),a("b",[t._v(t._s(t._f("twoDecimals")(t._f("ones")(e.reward))))]),a("span"),t._v(" 赎回中: "),a("b",[t._v(t._s(t._f("twoDecimals")(t._f("ones")(t.totalLocked(e.Undelegations)))))])])])],2),a("template",{slot:"action"},[a("Button",{attrs:{shape:"circle"},on:{click:function(a){return t.validatorClick(e)}}},[t._v("取回投票")])],1)],2)})),1)],1)],1)},kt=[],wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{width:"360",loading:!0,closable:!1,"mask-closable":!1},on:{"on-ok":t.ok},model:{value:t.enable,callback:function(e){t.enable=e},expression:"enable"}},[a("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[a("span",[t._v(" 取消 "),a("i",[t._v(t._s(t.validator.validator_info?t.validator.validator_info.name:""))]),t._v(" 的投票 ")])]),a("div",[a("Input",{attrs:{placeholder:"数量"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},[a("Icon",{attrs:{slot:"prepend",type:"logo-bitcoin"},slot:"prepend"}),a("span",{attrs:{slot:"append"},slot:"append"},[t._v("ONE")])],1),a("span",{staticStyle:{"font-size":"smaller"}},[t._v(" 我的投票: "+t._s(t._f("twoDecimals")(t.balanceOne))+" "),a("b",[t._v("ONE")])]),a("Slider",{attrs:{step:.1},model:{value:t.persent,callback:function(e){t.persent=e},expression:"persent"}})],1)])},St=[],Ot=function(t){return"https://explorer.harmony.one/#/tx/".concat(t)},Tt={data:function(){return window.x=this,{enable:!1,amount:1e3}},props:["triger","validator"],filters:{twoDecimals:k},methods:{ok:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var a,n,r,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=t.$root.hmy,n=t.account,r=new a.hmy.utils.Unit(t.amount).asOne().toHex(),o=a.undelegate(n.address,t.validator.validator_address,r),i=null,e.next=8,t.$store.dispatch("txCommit",{tx:o,fun:function(){i&&i(),o.isConfirmed()?t.$root.message("success","<a target=_blank href="+Ot(o.id)+">交易</a>已打包"):t.$root.message("warning","<a target=_blank href="+Ot(o.id)+">交易</a>仍未打包")}});case 8:i=t.$root.message("loading","<a target=_blank href="+Ot(o.id)+">交易</a>已发送，等待打包。"),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),t.$root.message("error",e.t0.message?e.t0.message:e.t0);case 14:t.enable=!1;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},watch:{triger:function(){this.enable||(this.enable=!0)}},computed:{persent:{set:function(t){try{var e=Math.floor(this.balanceOne),a=100*this.amount/e;a.toFixed(1)!=t.toFixed(1)&&(this.amount=Math.floor(t*e/100))}catch(n){return 0}},get:function(){try{var t=Math.floor(this.balanceOne);return 100*this.amount/t}catch(e){return 0}}},account:function(){return this.$store.state.account},balanceOne:function(){try{return this.validator.amount/1e18}catch(t){return 0}}}},Rt=Tt,At=Object(V["a"])(Rt,wt,St,!1,null,null,null),Vt=At.exports,Ct={name:"ValidatorList",components:{ValidatorLogo:lt,StakingCancel:Vt,ValidatorPage:J},data:function(){var t=this;return this.$store.dispatch("updateDelegations").then((function(){return t.loading=!1})).catch((function(e){t.loading=!1,t.$root.message("error",e)})),{loading:0==this.$store.state.delegations.length,btnTriger:!1,pageTriger:!1,validatorSelected:{},validatorInfo:{}}},computed:{scrollHeight:function(){return document.documentElement.clientHeight-85},delegations:function(){return this.$store.state.delegations}},filters:{ones:O,twoDecimals:k},methods:{shortName:function(t){return t.length>25?t.slice(0,10)+"..."+t.slice(-10):t},totalLocked:function(t){var e=0;return t.map((function(t){e+=t.Amount?t.Amount:0})),e},titleClick:function(t){this.pageTriger=!this.pageTriger,this.validatorInfo=t.validator_info},validatorClick:function(t){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.btnTriger=!e.btnTriger,e.validatorSelected=t;case 2:case"end":return a.stop()}}),a)})))()}}},$t=Ct,jt=(a("8a24"),Object(V["a"])($t,xt,kt,!1,null,"8ef8e890",null)),Bt=jt.exports,It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"margin"},[t.account.address?a("div",[a("span",[t._v(" 地址: "),a("a",{on:{click:t.login}},[t._v(t._s(t.address))]),t._v(" 余额:"+t._s(t._f("twoDecimals")(t.balanceOne))+" ONE ")]),a("span",{staticClass:"record",on:{click:function(e){return e.preventDefault(),t.clickRecord(e)}}},[a("RadioGroup",{attrs:{type:"button",size:"small"},model:{value:t.record,callback:function(e){t.record=e},expression:"record"}},[a("Radio",{style:"true"==t.record?"background: #dcdee2":"",attrs:{label:"true"}},[t._v(t._s("true"==t.record?"返回":"我的记录"))])],1)],1)]):a("div",[a("Button",{attrs:{type:"text",size:"small",loading:t.loging},on:{click:t.login}},[a("span",{staticStyle:{"font-size":"1.2em"}},[t._v("登录")])])],1)])},Lt=[],Mt={name:"Account",data:function(){return{record:"",loging:!1}},model:{prop:"checked",event:"change"},props:["checked"],methods:{clickRecord:function(){this.record="true"==this.record?"":"true",this.$emit("change","true"!=this.record)},login:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loging=!0,t.prev=1,t.next=4,this.$store.dispatch("logout");case 4:return t.next=6,this.$store.dispatch("login");case 6:t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),this.$root.message("error",t.t0.message);case 11:this.loging=!1;case 12:case"end":return t.stop()}}),t,this,[[1,8]])})));function e(){return t.apply(this,arguments)}return e}()},filters:{twoDecimals:k},computed:{address:function(){return void 0==this.account.address?"":this.account.address.slice(0,6)+"..."+this.account.address.slice(-4,-1)},balanceOne:function(){return this.account.balance.toOne()},account:function(){return this.$store.state.account}}},Dt=Mt,Ht=(a("ea0f"),Object(V["a"])(Dt,It,Lt,!1,null,"a11f643c",null)),Pt=Ht.exports,Et=a("cb6b"),Nt={name:"StakingHome",components:{Account:Pt,ValidatorList:yt,Delegations:Bt},data:function(){return{stakingRules:Et,enable:!1,delegate:!0}},methods:{}},Ft=Nt,Zt=(a("7cb9"),Object(V["a"])(Ft,s,c,!1,null,"c176e6dc",null)),Ut=Zt.exports,zt={components:{Staking:Ut}},Wt=zt,Jt=Object(V["a"])(Wt,o,i,!1,null,null,null),qt=Jt.exports,Gt=a("aa30"),Xt=a("beb5"),Kt=a("fe66"),Yt=a("5250"),Qt=a("af63"),te=a("df4a"),ee=a("8679"),ae=a("9259"),ne=a("dddb"),re=a("9768"),oe=a("2d48"),ie=a("8144"),se=a("e571"),ce=a("4d39"),le=a("e3f5");r.a.component("Button",le["a"]),r.a.component("Table",ce["a"]),r.a.component("Scroll",se["a"]),r.a.component("RadioGroup",ie["a"]),r.a.component("Radio",oe["a"]),r.a.component("List",re["a"]),r.a.component("ListItem",re["a"].Item),r.a.component("ListItemMeta",re["a"].Item.Meta),r.a.component("Slider",ne["a"]),r.a.component("Modal",ae["a"]),r.a.component("Layout",ee["a"]),r.a.component("Header",te["a"]),r.a.component("Content",Qt["a"]),r.a.component("Icon",Yt["a"]),r.a.component("Spin",Kt["a"]),r.a.component("Input",Xt["a"]),r.a.prototype.$Message=Gt["a"];a("99af");var ue=a("5530"),de=a("5880"),me=a.n(de),he=a("cebe"),ge=a.n(he),pe=a("1a04"),fe=(a("a630"),a("ac1f"),a("3ca3"),a("1276"),a("66fd")),ve=fe.Harmony,be=a("c21e"),_e=be.ChainID,ye=be.ChainType,xe=a("f162"),ke="1000000000",we=0,Se="https://api.s0.t.hmny.io",Oe=new ve(Se,{chainType:ye.Harmony,chainId:_e.HmyMainnet,shardID:we});function Te(t){return new Promise((function(e){return setTimeout(e,t)}))}function Re(){return Ae.apply(this,arguments)}function Ae(){return Ae=Object(d["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=0;case 1:if(window.harmony||!(e++<2)){t.next=6;break}return t.next=4,Te(1e3);case 4:t.next=1;break;case 6:if(window.harmony){t.next=8;break}throw{message:"请安装麦子钱包"};case 8:case"end":return t.stop()}}),t)}))),Ae.apply(this,arguments)}function Ve(){return Ce.apply(this,arguments)}function Ce(){return Ce=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Re();case 2:return t.abrupt("return",window.harmony.getAccount());case 3:case"end":return t.stop()}}),t)}))),Ce.apply(this,arguments)}function $e(){return je.apply(this,arguments)}function je(){return je=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Re();case 2:return t.abrupt("return",window.harmony.forgetIdentity());case 3:case"end":return t.stop()}}),t)}))),je.apply(this,arguments)}function Be(t,e,a){var n=Oe.stakings.delegate({delegatorAddress:t,validatorAddress:e,amount:new Oe.utils.Unit(a).asWei().toHex()}).setTxParams({gasPrice:ke,gasLimit:"0x0927c0",chainId:Oe.chainId}).build();return n.setFromAddress(t),window.dtx=n,n}function Ie(t){var e=Oe.stakings.collectRewards({delegatorAddress:t}).setTxParams({gasPrice:ke,gasLimit:"0x0927c0",chainId:Oe.chainId}).build();return e.setFromAddress(t),window.rtx=e,e}function Le(t,e,a){var n=Oe.stakings.undelegate({delegatorAddress:t,validatorAddress:e,amount:new Oe.utils.Unit(a).asWei().toHex()}).setTxParams({gasPrice:ke,gasLimit:"0x0927c0",chainId:Oe.chainId}).build();return n.setFromAddress(t),window.udtx=n,n}function Me(t,e,a){var n=Oe.transactions.newTx({from:t,to:e,value:new Oe.utils.Unit(a).asWei().toHex(),gasLimit:"210000",shardID:0,toShardID:0,gasPrice:ke});return window.tx=n,n}function De(t){return He.apply(this,arguments)}function He(){return He=Object(d["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,window.harmony.signTransaction(e);case 2:return t.next=4,e.sendTransaction();case 4:if(a=t.sent,a[1]==e.id){t.next=7;break}throw{message:a[1]};case 7:return t.abrupt("return",e);case 8:case"end":return t.stop()}}),t)}))),He.apply(this,arguments)}xe.map((function(t){var e=t.name.split(" ")[0],a={};t.methods.map((function(t){a[t.slice(4)]=function(){return Oe.messenger.send(t,Array.from(arguments)).then((function(t){return t.getRaw}))}})),Oe.blockchain[e]=a}));var Pe={hmy:Oe,login:Ve,logout:$e,transfer:Me,delegate:Be,undelegate:Le,withdrawReward:Ie,txSignSend:De},Ee=a("72bf");r.a.use(me.a);var Ne="https://staking-explorer2-268108.appspot.com",Fe="harmony";function Ze(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(ue["a"])(Object(ue["a"])({},t),{},{userName:t.name,operator_address:e?pe["getAddress"](t["address"]).bech32:t["address"],rate:t.rate,max_rate:t["max-rate"],max_change_rate:t["max-change-rate"],max_total_delegation:t["max-total-delegation"],min_self_delegation:String(t["min-self-delegation"]),website:t.website,details:t.details,moniker:t.name,average_stake:t.average_stake,reminder:t.reminder,creation_height:t["creation-height"],uptime_percentage:t.uptime_percentage,voting_power:t.voting_power,total_effective_stake:"0",active:t.active,self_stake:t.self_stake,total_stake:t.total_stake,address:t.address,epoch:t["last-epoch-in-committee"],status:2,jailed:!1,tombstoned:!1,tokens:"5706991464569",id:"16a9a8ae-1568-42a5-b4a6-59735c655dca",delegator_shares:"5706991464569.000000000000000000"})}function Ue(t){return ge.a.get("".concat(Ne,"/networks/").concat(Fe,"/delegations/").concat(t)).then((function(t){return t.data.map((function(t){t.validator_info=Ze(t.validator_info,!1)})),t.data}))}function ze(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,a={active:!0,page:t,search:"",size:e,sortOrder:"desc",sortProperty:"apr"};return ge.a.get("".concat(Ne,"/networks/").concat(Fe,"/validators_with_page?").concat(Ee.stringify(a))).then((function(t){var e=t.data.validators.map((function(t){return Ze(t,!1)}));return Object(ue["a"])(Object(ue["a"])({},t.data),{},{validators:e})}))}function We(t){return Je.apply(this,arguments)}function Je(){return Je=Object(d["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(void 0==e.address){t.next=5;break}return t.next=3,Pe.hmy.blockchain.getBalance(e);case 3:a=t.sent,e.balance=new Pe.hmy.utils.Unit(a.result).asWei();case 5:return t.abrupt("return",e);case 6:case"end":return t.stop()}}),t)}))),Je.apply(this,arguments)}var qe=0,Ge=new me.a.Store({state:{account:{},delegations:[],total:0,totalActive:0,totalFound:0,validators:[],loading:!1,loaded:!1,txRecord:[]},mutations:{setAccount:function(t,e){t.account=e},appendValidators:function(t,e){t.validators=t.validators.concat(e)},setTotal:function(t,e){t.total=e},setTotalActive:function(t,e){t.totalActive=e},setTotalFound:function(t,e){t.totalFound=e},setLoading:function(t,e){t.loading=e},setLoaded:function(t,e){t.loading=!1,t.loaded=e},setDelegations:function(t,e){t.delegations=e},appendTx:function(t,e){t.txRecord.push(e)}},actions:{getValidators:function(t){return Object(d["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.state.totalActive||t.state.totalActive!=t.state.validators.length){e.next=2;break}return e.abrupt("return",0);case 2:return a=t.commit,e.next=5,ze(qe,20);case 5:return n=e.sent,a("setLoaded",!0),n.validators.length&&(qe++,a("appendValidators",n.validators),a("setTotal",n.total),a("setTotalActive",n.total_active),a("setTotalFound",n.totalFound)),e.abrupt("return",n.validators.length);case 9:case"end":return e.stop()}}),e)})))()},updateDelegations:function(t){return Object(d["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ue(t.state.account.address);case 2:a=e.sent,t.commit("setDelegations",a);case 4:case"end":return e.stop()}}),e)})))()},login:function(t){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(window.vuex=e,void 0!=t.state.account.address){a.next=8;break}return a.next=4,Pe.login();case 4:return n=a.sent,a.next=7,We(n);case 7:t.commit("setAccount",n);case 8:case"end":return a.stop()}}),a)})))()},logout:function(t){return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(void 0==t.state.account.address){e.next=4;break}return e.next=3,Pe.logout();case 3:t.commit("setAccount",{});case 4:case"end":return e.stop()}}),e)})))()},txCommit:function(t,e){return Object(d["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.tx,r=e.fun,a.next=3,Pe.txSignSend(n);case 3:t.commit("appendTx",n),n.confirm(n.id,5).then((function(){r(),We(t.state.account).then((function(e){return t.commit("setAccount",e)}))})).catch(r);case 5:case"end":return a.stop()}}),a)})))()}}});r.a.config.productionTip=!1,window.hmy=Pe,new r.a({data:{hmy:Pe},methods:{message:function(t,e){this.$Message[t]({background:!0,content:e,closable:!0,duration:5})}},store:Ge,render:function(t){return t(qt)}}).$mount("#app")},5880:function(t,e){t.exports=Vuex},"7cb9":function(t,e,a){"use strict";var n=a("fed8"),r=a.n(n);r.a},"8a24":function(t,e,a){"use strict";var n=a("c877"),r=a.n(n);r.a},"8bbf":function(t,e){t.exports=Vue},"996e":function(t,e,a){},bbba:function(t,e,a){"use strict";var n=a("996e"),r=a.n(n);r.a},c877:function(t,e,a){},cb6b:function(t){t.exports=JSON.parse('["hello world","etc..."]')},cebe:function(t,e){t.exports=axios},ea0f:function(t,e,a){"use strict";var n=a("4f7d"),r=a.n(n);r.a},f162:function(t){t.exports=JSON.parse('[{"name":"Account Methods","methods":["hmy_getBalanceByBlockNumber","hmy_getTransactionCount","hmy_getBalance","address"]},{"name":"Filter Methods","methods":["hmy_getFilterLogs","hmy_newFilter","hmy_newPendingTransactionFilter","hmy_newBlockFilter","hmy_getFilterChanges","hmy_getLogs"]},{"name":"Transaction Related Methods","methods":["hmy_getStakingTransactionByBlockHashAndIndex","hmy_getStakingTransactionByBlockNumberAndIndex","hmy_getStakingTransactionByHash","hmy_getCurrentTransactionErrorSink","hmy_getPendingCrossLinks","hmy_getPendingCXReceipts","hmy_getCXReceiptByHash","hmy_pendingTransactions","hmy_sendRawStakingTransaction","hmy_getTransactionsHistory","hmy_sendRawTransaction","hmy_getTransactionReceipt","hmy_getBlockTransactionCountByHash","hmy_getBlockTransactionCountByNumber","hmy_getTransactionByHash","hmy_getTransactionByBlockNumberAndIndex","hmy_getTransactionByBlockHashAndIndex","hmy_getBlockByNumber","hmy_getBlockByHash","hmy_getBlocks","tx"]},{"name":"Contract Related Methods","methods":["hmy_estimateGas","hmy_getStorageAt","hmy_call","hmy_getCode"]},{"name":"Protocol Related Methods","methods":["hmy_isLastBlock","hmy_epochLastBlock","hmy_latestHeader","hmy_getShardingStructure","hmy_blockNumber","hmy_syncing","hmy_gasPrice","net_peerCount","hmy_getEpoch","hmy_getLeader"]},{"name":"Staking Related Methods","methods":["hmy_getCirculatingSupply","hmy_getTotalSupply","hmy_getStakingNetworkInfo","hmy_getAllValidatorInformation","hmy_getCurrentUtilityMetrics","hmy_getDelegationsByValidator","hmy_getDelegationsByDelegatorAndValidator","hmy_getDelegationsByDelegator","hmy_getValidatorMetrics","hmy_getMedianRawStakeSnapshot","hmy_getActiveValidatorAddresses","hmy_getAllValidatorAddresses","hmy_getCurrentStakingErrorSink","hmy_getValidatorInformation","hmy_getValidators","hmy_getSignedBlocks","hmy_isBlockSigner","hmy_getBlockSigners"]}]')},fed8:function(t,e,a){}});