(function(t){function e(e){for(var a,r,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);h&&h(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5c8baf96","chunk-c89970e8":"665f0e8f","chunk-ffb004c2":"033c4848"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-c89970e8":1,"chunk-ffb004c2":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-c89970e8":"d875d1eb","chunk-ffb004c2":"74f3cd12"}[t]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===o)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],h.parentNode.removeChild(h),n(i)},h.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(h);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[t]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/easy-staking/dist/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var h=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},1:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},4760:function(t,e,n){},5:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=(n("034f"),n("2877")),s={},c=Object(i["a"])(s,r,o,!1,null,null,null),l=c.exports,u=(n("d3b7"),n("8c4f")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("Header",[a("img",{staticClass:"logo",attrs:{src:n("9db3")}}),a("div",{staticClass:"topright"},[a("Button",{attrs:{type:"text",ghost:""},on:{click:function(e){t.enable=!0}}},[t._v("投票规则")])],1),a("Modal",{attrs:{"footer-hide":"",fullscreen:"",title:"投票规则"},model:{value:t.enable,callback:function(e){t.enable=e},expression:"enable"}},[a("List",{attrs:{split:!1}},t._l(t.stakingRules,(function(e,n){return a("ListItem",{key:n},[t._v(" "+t._s(n)+". "+t._s(e)+" ")])})),1)],1)],1),a("Content",[a("Account",{model:{value:t.delegate,callback:function(e){t.delegate=e},expression:"delegate"}}),t.delegate?a("ValidatorList"):a("Delegations")],1)],1)},h=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ValidatorPage",{attrs:{triger:t.pageTriger,validator:t.validatorSelected}}),n("StakingConfirm",{attrs:{triger:t.btnTriger,validator:t.validatorSelected}}),n("List",{attrs:{border:"",loading:t.loading}},[n("Scroll",{attrs:{"on-reach-bottom":t.handleReachBottom,height:t.scrollHeight}},t._l(t.validators,(function(e,a){return n("ListItem",{key:a},[t._v(" "+t._s(a)+" "),n("Avatar",{staticClass:"li-validator-image",attrs:{alt:e.address,address:e.address}}),n("ListItemMeta",{attrs:{title:t.shortName(e.name)},nativeOn:{click:function(n){return t.titleClick(e)}}},[n("template",{slot:"description"},[n("span",[t._v(" 票数: "),n("b",[t._v(t._s(t.description(e)))]),n("span"),t._v(" 年化: "),n("b",[t._v(t._s(t.expectedRetrun(e))+"%")])])])],2),n("template",{slot:"action"},[n("Button",{attrs:{shape:"circle",loading:t.loging},on:{click:function(n){return t.validatorClick(e)}}},[t._v("投票")])],1)],2)})),1)],1)],1)},g=[],p=(n("fb6a"),n("b680"),n("25f0"),n("96cf"),n("1da1")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Modal",{attrs:{"footer-hide":"",fullscreen:"",title:t.validator.name},model:{value:t.enable,callback:function(e){t.enable=e},expression:"enable"}},[n("ValidatorProfile",{attrs:{validator:t.validator}}),n("br"),n("ValidatorStatus",{attrs:{validator:t.validator}}),n("br"),n("ValidatorInfo",{attrs:{validator:t.validator}})],1)},v=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Table",{attrs:{"disabled-hover":"",stripe:"",border:"",columns:t.header,data:t.bodyStyle}},[n("template",{slot:"body"},[n("Table",{attrs:{"disabled-hover":"","show-header":!1,stripe:"",border:"",columns:t.column,data:t.context}})],1)],2)},y=[],_=(n("b0c0"),n("4160"),n("d81d"),n("13d5"),n("b65f"),n("a9e3"),n("9129"),n("4fad"),n("159b"),n("3835"),n("901e")),k=n.n(_);function x(t,e){return Math.trunc(t*Math.pow(10,e))/Math.pow(10,e)}var w="en-US";function S(t,e,n){return new Intl.NumberFormat(w,{minimumFractionDigits:e,maximumFractionDigits:n}).format(x(t,n))}function O(t){return S(t,0,0)}function T(t){return-1===t||null===t}function R(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return T(t)?t:new Intl.NumberFormat(w,{minimumFractionDigits:2,maximumFractionDigits:2}).format(Math.round(1e4*t)/100)+"%"}function C(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return k()(t).div(1e18).toNumber()}var j=function(t){return"http"==t.slice(0,4)?t:"http://"+t},A={data:function(){return{bodyStyle:[{cellClassName:{body:"nopadding"}}]}},computed:{header:function(){return[{title:"节点信息",align:"center",slot:"body",key:"body",flush:this.validator.name}]},column:function(){return[{key:"name"},{key:"text",render:function(t,e){var n=e.row;return"网站"==n.name?t("a",{domProps:{href:j(n.text?n.text:""),target:"black"}},n.text):t("span",n.text)}}]},context:function(){return[{name:"简介",text:this.validator["details"]},{name:"网站",text:this.validator["website"]},{name:"投票地址",text:this.validator["operator_address"]},{name:"注册区块高度",text:this.validator["creation_height"]},{name:"费率",text:R(this.validator["rate"])},{name:"单日最大费率调整",text:R(this.validator["max_change_rate"])}]}},props:["validator"]},B=A,M=Object(i["a"])(B,b,y,!1,null,null,null),$=M.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Table",{attrs:{"disabled-hover":"",stripe:"",border:"",columns:t.header,data:t.bodyStyle}},[n("template",{slot:"body"},[n("Table",{attrs:{"disabled-hover":"","show-header":!1,stripe:"",border:"",columns:t.column,data:t.context}})],1)],2)},L=[],E={data:function(){return{bodyStyle:[{cellClassName:{body:"nopadding"}}]}},computed:{header:function(){return[{title:this.validator.name,align:"center",slot:"body",key:"body",flush:this.validator.name}]},column:function(){return[{key:"name"},{key:"text"}]},context:function(){var t=function(t){return O(C(t))};return[{name:"总得票数",text:t(this.validator["total_stake"])},{name:"自抵押票数",text:t(this.validator["self_stake"])},{name:"代理抵押票数",text:t(this.validator["delegator_shares"])},{name:"最大可代理票数",text:t(this.validator["max_total_delegation"])}]}},props:["validator"]},F=E,P=(n("bbba"),Object(i["a"])(F,I,L,!1,null,null,null)),N=P.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Table",{attrs:{"disabled-hover":"",stripe:"",border:"",columns:t.header,data:t.bodyStyle}},[n("template",{slot:"body"},[n("Table",{attrs:{"disabled-hover":"","show-header":!1,stripe:"",border:"",columns:t.column,data:t.context}})],1)],2)},H=[],D={data:function(){return{bodyStyle:[{cellClassName:{body:"nopadding"}}]}},computed:{header:function(){return[{title:"节点状态",align:"center",slot:"body",key:"body",flush:this.validator.name}]},column:function(){return[{key:"name"},{key:"text"}]},context:function(){var t=function(t){return O(C(t))};return[{name:"出块率",text:R(this.validator["uptime_percentage"])},{name:"Slots",text:this.validator["active_nodes"]},{name:"Elected Slots",text:this.validator["elected_nodes"]},{name:"七日年化",text:R(this.validator["apr"])},{name:"已分红",text:t(this.validator["lifetime_reward_accumulated"])}]}},props:["validator"]},U=D,z=Object(i["a"])(U,V,H,!1,null,null,null),W=z.exports,J={data:function(){return{enable:!1}},props:["triger","validator"],watch:{triger:function(){this.enable||(this.enable=!0)}},components:{ValidatorProfile:N,ValidatorStatus:W,ValidatorInfo:$}},q=J,G=Object(i["a"])(q,f,v,!1,null,null,null),X=G.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{domProps:{innerHTML:t._s(t.svg)}})},Q=[],Y=n("2551"),Z=n.n(Y),tt=n("1f91"),et=n.n(tt),nt={name:"avatar",props:{address:{type:String,required:!0}},computed:{svg:function(){var t={},e=new Z.a(et()(t));return e.create(this.address)}}},at=nt,rt=Object(i["a"])(at,K,Q,!1,null,null,null),ot=rt.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Modal",{attrs:{width:"360",loading:!0,closable:!1,"mask-closable":!1},on:{"on-ok":t.ok},model:{value:t.enable,callback:function(e){t.enable=e},expression:"enable"}},[n("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[n("span",[t._v(" 投票给 "),n("i",[t._v(t._s(t.validator.name))])])]),n("div",[n("Input",{attrs:{placeholder:"数量"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},[n("Icon",{attrs:{slot:"prepend",type:"logo-bitcoin"},slot:"prepend"}),n("span",{attrs:{slot:"append"},slot:"append"},[t._v("ONE")])],1),n("span",{staticStyle:{"font-size":"smaller"}},[t._v(" 可用余额: "+t._s(parseFloat(t.balanceOne).toFixed(2))+" "),n("b",[t._v("ONE")])]),n("Slider",{attrs:{step:.1},model:{value:t.persent,callback:function(e){t.persent=e},expression:"persent"}})],1)])},st=[],ct={data:function(){return{enable:!1,amount:1e3}},props:["triger","validator"],methods:{message:function(t,e){this.$Message[t]({background:!0,content:e,duration:30})},ok:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var n,a,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=t.$root.hmy,a=t.account,r=new n.hmy.utils.Unit(t.amount).asOne().toHex(),o=n.delegate(a.address,t.validator.address,r),e.next=7,t.$store.dispatch("txCommit",o);case 7:t.message("success","交易哈希:"+o.id),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),t.message("error",e.t0.message?e.t0.message:e.t0);case 13:t.enable=!1;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()}},watch:{triger:function(){this.enable||(this.enable=!0)}},computed:{persent:{set:function(t){try{var e=Math.floor(this.balanceOne),n=100*this.amount/e;n.toFixed(1)!=t.toFixed(1)&&(this.amount=Math.floor(t*e/100))}catch(a){return 0}},get:function(){try{var t=Math.floor(this.balanceOne);return 100*this.amount/t}catch(e){return 0}}},account:function(){return this.$store.state.account},balanceOne:function(){try{return this.account.balance.toOne()}catch(t){return 0}}}},lt=ct,ut=Object(i["a"])(lt,it,st,!1,null,null,null),dt=ut.exports,ht={name:"ValidatorList",components:{Avatar:ot,StakingConfirm:dt,ValidatorPage:X},data:function(){var t=this;return 0==this.$store.state.validators.length&&this.$store.dispatch("getValidators").then((function(){return t.loading=!1})).catch((function(e){t.loading=!1,t.message("error",e)})),{loading:0==this.$store.state.validators.length,loging:!1,btnTriger:!1,pageTriger:!1,validatorSelected:{},scrollHeight:document.documentElement.clientHeight-85}},computed:{validators:function(){return this.$store.state.validators}},methods:{message:function(t,e){this.$Message[t]({background:!0,content:e,duration:3})},shortName:function(t){return t.length>25?t.slice(0,10)+"..."+t.slice(-10):t},description:function(t){return Math.floor(t.total_stake/1e18).toString()},expectedRetrun:function(t){return(10*t.apr).toFixed(2)},validatorClick:function(t){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.loging=!0,n.prev=1,n.next=4,e.$store.dispatch("login");case 4:e.btnTriger=!e.btnTriger,e.validatorSelected=t,n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](1),e.message("error",n.t0.message);case 11:e.loging=!1;case 12:case"end":return n.stop()}}),n,null,[[1,8]])})))()},titleClick:function(t){this.pageTriger=!this.pageTriger,this.validatorSelected=t},handleReachBottom:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$store.dispatch("getValidators");case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](1),t.message("error",e.t0);case 9:t.loading=!1;case 10:case"end":return e.stop()}}),e,null,[[1,6]])})))()}}},mt=ht,gt=(n("daf2"),Object(i["a"])(mt,m,g,!1,null,null,null)),pt=gt.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("StakingCancel",{attrs:{triger:t.btnTriger,validator:t.validatorSelected}}),n("ValidatorPage",{attrs:{triger:t.pageTriger,validator:t.validatorInfo}}),n("List",{attrs:{border:"",loading:t.loading}},[n("Scroll",{attrs:{height:"600"}},t._l(t.delegations,(function(e,a){return n("ListItem",{key:a},[t._v(" "+t._s(a)+" "),n("Avatar",{staticClass:"li-validator-image",attrs:{alt:e.validator_address,address:e.validator_address}}),n("ListItemMeta",{attrs:{title:t.shortName(e.validator_info.name)},nativeOn:{click:function(n){return t.titleClick(e)}}},[n("template",{slot:"description"},[n("span",[t._v(" 我的票数: "),n("b",[t._v(t._s(t.toOneInt(e.amount)))]),n("span"),t._v(" 我的收益: "),n("b",[t._v(t._s(t.toOneInt(e.reward)))]),n("span"),t._v(" 赎回中: "),n("b",[t._v(t._s(t.totalLocked(e.Undelegations)))])])])],2),n("template",{slot:"action"},[n("Button",{attrs:{shape:"circle"},on:{click:function(n){return t.validatorClick(e)}}},[t._v("取回投票")])],1)],2)})),1)],1)],1)},vt=[],bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Modal",{attrs:{width:"360",loading:!0,closable:!1,"mask-closable":!1},on:{"on-ok":t.ok},model:{value:t.enable,callback:function(e){t.enable=e},expression:"enable"}},[n("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[n("span",[t._v(" 取消 "),n("i",[t._v(t._s(t.validator.validator_info?t.validator.validator_info.name:""))]),t._v(" 的投票 ")])]),n("div",[n("Input",{attrs:{placeholder:"数量"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},[n("Icon",{attrs:{slot:"prepend",type:"logo-bitcoin"},slot:"prepend"}),n("span",{attrs:{slot:"append"},slot:"append"},[t._v("ONE")])],1),n("span",{staticStyle:{"font-size":"smaller"}},[t._v(" 我的投票: "+t._s(parseFloat(t.balanceOne).toFixed(2))+" "),n("b",[t._v("ONE")])]),n("Slider",{attrs:{step:.1},model:{value:t.persent,callback:function(e){t.persent=e},expression:"persent"}})],1)])},yt=[],_t={data:function(){return window.x=this,{enable:!1,amount:1e3}},props:["triger","validator"],methods:{message:function(t,e){this.$Message[t]({background:!0,content:e,duration:3})},ok:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var n,a,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=t.$root.hmy,a=t.account,r=new n.hmy.utils.Unit(t.amount).asOne().toHex(),o=n.undelegate(a.address,t.validator.validator_address,r),e.next=7,t.$store.dispatch("txCommit",o);case 7:t.message("success","交易哈希:"+o.id),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),t.message("error",e.t0.message?e.t0.message:e.t0);case 13:t.enable=!1;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()}},watch:{triger:function(){this.enable||(this.enable=!0)}},computed:{persent:{set:function(t){try{var e=Math.floor(this.balanceOne),n=100*this.amount/e;n.toFixed(1)!=t.toFixed(1)&&(this.amount=Math.floor(t*e/100))}catch(a){return 0}},get:function(){try{var t=Math.floor(this.balanceOne);return 100*this.amount/t}catch(e){return 0}}},account:function(){return this.$store.state.account},balanceOne:function(){try{return this.validator.amount/1e18}catch(t){return 0}}}},kt=_t,xt=Object(i["a"])(kt,bt,yt,!1,null,null,null),wt=xt.exports,St={name:"ValidatorList",components:{Avatar:ot,StakingCancel:wt,ValidatorPage:X},data:function(){var t=this;return this.$store.dispatch("updateDelegations").then((function(){return t.loading=!1})).catch((function(e){t.loading=!1,t.message("error",e)})),{loading:0==this.$store.state.delegations.length,btnTriger:!1,pageTriger:!1,validatorSelected:{},validatorInfo:{}}},computed:{delegations:function(){return this.$store.state.delegations}},methods:{message:function(t,e){this.$Message[t]({background:!0,content:e,duration:3})},shortName:function(t){return t.length>25?t.slice(0,10)+"..."+t.slice(-10):t},toOneInt:function(t){return Math.floor(t/1e18).toString()},totalLocked:function(t){var e=0;return t.map((function(t){e+=t.Amount?t.Amount:0})),Math.floor(e/1e18).toString()},titleClick:function(t){console.log("titleClick"),this.pageTriger=!this.pageTriger,this.validatorInfo=t.validator_info},validatorClick:function(t){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.btnTriger=!e.btnTriger,e.validatorSelected=t;case 2:case"end":return n.stop()}}),n)})))()},handleReachBottom:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$store.dispatch("updateDelegations");case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](1),t.message("error",e.t0);case 9:t.loading=!1;case 10:case"end":return e.stop()}}),e,null,[[1,6]])})))()}}},Ot=St,Tt=(n("d117"),Object(i["a"])(Ot,ft,vt,!1,null,null,null)),Rt=Tt.exports,Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"margin"},[t.account.address?n("div",[n("span",[t._v(" 地址: "),n("a",{on:{click:t.login}},[t._v(t._s(t.address))]),t._v(" 余额:"+t._s(parseFloat(t.balanceOne).toFixed(2))+" ONE ")]),n("span",{staticClass:"record",on:{click:function(e){return e.preventDefault(),t.clickRecord(e)}}},[n("RadioGroup",{attrs:{type:"button",size:"small"},model:{value:t.record,callback:function(e){t.record=e},expression:"record"}},[n("Radio",{attrs:{label:"true"}},[t._v("我的记录")])],1)],1)]):n("div",[n("Button",{attrs:{type:"text",size:"small",loading:t.loging},on:{click:t.login}},[t._v("登录")])],1)])},jt=[],At={name:"Account",data:function(){return{record:"",loging:!1}},model:{prop:"checked",event:"change"},props:["checked"],methods:{clickRecord:function(){this.record="true"==this.record?"":"true",this.$emit("change","true"==this.record)},message:function(t,e){this.$Message[t]({background:!0,content:e,duration:3})},login:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loging=!0,t.prev=1,t.next=4,this.$store.dispatch("logout");case 4:return t.next=6,this.$store.dispatch("login");case 6:t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),this.message("error",t.t0.message);case 11:this.loging=!1;case 12:case"end":return t.stop()}}),t,this,[[1,8]])})));function e(){return t.apply(this,arguments)}return e}()},watch:{},computed:{address:function(){return void 0==this.account.address?"":this.account.address.slice(0,6)+"..."+this.account.address.slice(-4,-1)},balanceOne:function(){return this.account.balance.toOne()},account:function(){return this.$store.state.account}}},Bt=At,Mt=(n("7523"),Object(i["a"])(Bt,Ct,jt,!1,null,"84e2ab70",null)),$t=Mt.exports,It=n("cb6b"),Lt={name:"StakingHome",components:{Account:$t,ValidatorList:pt,Delegations:Rt},data:function(){return{stakingRules:It,enable:!1,delegate:!0}},methods:{}},Et=Lt,Ft=(n("c54c"),Object(i["a"])(Et,d,h,!1,null,"0cbc94cc",null)),Pt=Ft.exports;a["default"].use(u["a"]);var Nt=[{path:"/",name:"Staking",component:Pt},{path:"/home",name:"Home",component:function(){return n.e("chunk-ffb004c2").then(n.bind(null,"bb51"))}},{path:"/wallet",name:"Wallet",component:function(){return n.e("chunk-c89970e8").then(n.bind(null,"4dd7"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Vt=new u["a"]({mode:"history",base:"/easy-staking/dist/",routes:Nt}),Ht=Vt,Dt=n("f825"),Ut=n.n(Dt);n("f8ce");a["default"].use(Ut.a);n("99af");var zt=n("5530"),Wt=n("2f62"),Jt=n("bc3a"),qt=n.n(Jt),Gt=n("1a04"),Xt=(n("a630"),n("ac1f"),n("3ca3"),n("1276"),n("66fd")),Kt=Xt.Harmony,Qt=n("c21e"),Yt=Qt.ChainID,Zt=Qt.ChainType,te=n("f162"),ee=0,ne="https://api.s0.os.hmny.io",ae=new Kt(ne,{chainType:Zt.Harmony,chainId:Yt.HmyPangaea,shardID:ee});function re(t){return new Promise((function(e){return setTimeout(e,t)}))}function oe(){return ie.apply(this,arguments)}function ie(){return ie=Object(p["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=0;case 1:if(window.harmony||!(e++<2)){t.next=6;break}return t.next=4,re(1e3);case 4:t.next=1;break;case 6:if(window.harmony){t.next=8;break}throw{message:"请安装麦子钱包"};case 8:case"end":return t.stop()}}),t)}))),ie.apply(this,arguments)}function se(){return ce.apply(this,arguments)}function ce(){return ce=Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,oe();case 2:return t.abrupt("return",window.harmony.getAccount());case 3:case"end":return t.stop()}}),t)}))),ce.apply(this,arguments)}function le(){return ue.apply(this,arguments)}function ue(){return ue=Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,oe();case 2:return t.abrupt("return",window.harmony.forgetIdentity());case 3:case"end":return t.stop()}}),t)}))),ue.apply(this,arguments)}function de(t,e,n){var a=ae.stakings.delegate({delegatorAddress:t,validatorAddress:e,amount:new ae.utils.Unit(n).asWei().toHex()}).setTxParams({gasPrice:"0x100000000000",gasLimit:"0x0927c0",chainId:ae.chainId}).build();return a.setFromAddress(t),window.dtx=a,a}function he(t,e,n){var a=ae.stakings.undelegate({delegatorAddress:t,validatorAddress:e,amount:new ae.utils.Unit(n).asWei().toHex()}).setTxParams({gasPrice:"0x100000000000",gasLimit:"0x0927c0",chainId:ae.chainId}).build();return a.setFromAddress(t),window.udtx=a,a}function me(t,e,n){var a=ae.transactions.newTx({from:t,to:e,value:new ae.utils.Unit(n).asWei().toHex(),gasLimit:"210000",shardID:0,toShardID:0,gasPrice:"100000000000"});return window.tx=a,a}function ge(t){return pe.apply(this,arguments)}function pe(){return pe=Object(p["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,window.harmony.signTransaction(e);case 2:return t.next=4,e.sendTransaction();case 4:if(n=t.sent,n[1]==e.id){t.next=7;break}throw{message:n[1]};case 7:return t.abrupt("return",e);case 8:case"end":return t.stop()}}),t)}))),pe.apply(this,arguments)}te.map((function(t){var e=t.name.split(" ")[0],n={};t.methods.map((function(t){n[t.slice(4)]=function(){return ae.messenger.send(t,Array.from(arguments)).then((function(t){return t.getRaw}))}})),ae.blockchain[e]=n}));var fe={hmy:ae,login:se,logout:le,transfer:me,delegate:de,undelegate:he,txSignSend:ge},ve=n("72bf");a["default"].use(Wt["a"]);var be="https://staking-explorer2-268108.appspot.com",ye="harmony-open-staking";function _e(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(zt["a"])(Object(zt["a"])({},t),{},{userName:t.name,operator_address:e?Gt["getAddress"](t["address"]).bech32:t["address"],rate:t.rate,max_rate:t["max-rate"],max_change_rate:t["max-change-rate"],max_total_delegation:t["max-total-delegation"],min_self_delegation:String(t["min-self-delegation"]),website:t.website,details:t.details,moniker:t.name,average_stake:t.average_stake,reminder:t.reminder,creation_height:t["creation-height"],uptime_percentage:t.uptime_percentage,voting_power:t.voting_power,total_effective_stake:"0",active:t.active,self_stake:t.self_stake,total_stake:t.total_stake,address:t.address,epoch:t["last-epoch-in-committee"],status:2,jailed:!1,tombstoned:!1,tokens:"5706991464569",id:"16a9a8ae-1568-42a5-b4a6-59735c655dca",delegator_shares:"5706991464569.000000000000000000"})}function ke(t){return qt.a.get("".concat(be,"/networks/").concat(ye,"/delegations/").concat(t)).then((function(t){return t.data.map((function(t){t.validator_info=_e(t.validator_info,!1)})),t.data}))}function xe(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,n={active:!0,page:t,search:"",size:e,sortOrder:"desc",sortProperty:"total_stake"};return qt.a.get("".concat(be,"/networks/").concat(ye,"/validators_with_page?").concat(ve.stringify(n))).then((function(t){var e=t.data.validators.map((function(t){return _e(t,!1)}));return Object(zt["a"])(Object(zt["a"])({},t.data),{},{validators:e})}))}var we=0,Se=new Wt["a"].Store({state:{account:{},delegations:[],total:0,totalActive:0,totalFound:0,validators:[],loading:!1,loaded:!1,txRecord:[]},mutations:{setAccount:function(t,e){t.account=e},appendValidators:function(t,e){t.validators=t.validators.concat(e)},setTotal:function(t,e){t.total=e},setTotalActive:function(t,e){t.totalActive=e},setTotalFound:function(t,e){t.totalFound=e},setLoading:function(t,e){t.loading=e},setLoaded:function(t,e){t.loading=!1,t.loaded=e},setDelegations:function(t,e){t.delegations=e},appendTx:function(t,e){t.txRecord.push(e)}},actions:{getValidators:function(t){return Object(p["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,xe(we,20);case 3:a=e.sent,n("setLoaded",!0),a.validators.length&&(we++,n("appendValidators",a.validators),n("setTotal",a.total),n("setTotalActive",a.total_active),n("setTotalFound",a.totalFound));case 6:case"end":return e.stop()}}),e)})))()},updateDelegations:function(t){return Object(p["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ke(t.state.account.address);case 2:n=e.sent,t.commit("setDelegations",n);case 4:case"end":return e.stop()}}),e)})))()},login:function(t){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(window.vuex=e,void 0!=t.state.account.address){n.next=10;break}return n.next=4,fe.login();case 4:return a=n.sent,n.next=7,fe.hmy.blockchain.getBalance(a);case 7:r=n.sent,a.balance=new fe.hmy.utils.Unit(r.result).asWei(),t.commit("setAccount",a);case 10:case"end":return n.stop()}}),n)})))()},logout:function(t){return Object(p["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(void 0==t.state.account.address){e.next=4;break}return e.next=3,fe.logout();case 3:t.commit("setAccount",{});case 4:case"end":return e.stop()}}),e)})))()},txCommit:function(t,e){return Object(p["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fe.txSignSend(e);case 2:t.commit("appendTx",e);case 3:case"end":return n.stop()}}),n)})))()}}});a["default"].config.productionTip=!1,window.hmy=fe,new a["default"]({data:{hmy:fe},router:Ht,store:Se,render:function(t){return t(l)}}).$mount("#app")},7523:function(t,e,n){"use strict";var a=n("f0c8"),r=n.n(a);r.a},7914:function(t,e,n){},"85ec":function(t,e,n){},8777:function(t,e,n){},"996e":function(t,e,n){},"9db3":function(t,e,n){t.exports=n.p+"img/logo-top-right.c1e636ca.png"},bbba:function(t,e,n){"use strict";var a=n("996e"),r=n.n(a);r.a},c54c:function(t,e,n){"use strict";var a=n("7914"),r=n.n(a);r.a},cb6b:function(t){t.exports=JSON.parse('["hello world","etc..."]')},d117:function(t,e,n){"use strict";var a=n("8777"),r=n.n(a);r.a},daf2:function(t,e,n){"use strict";var a=n("4760"),r=n.n(a);r.a},f0c8:function(t,e,n){},f162:function(t){t.exports=JSON.parse('[{"name":"Account Methods","methods":["hmy_getBalanceByBlockNumber","hmy_getTransactionCount","hmy_getBalance","address"]},{"name":"Filter Methods","methods":["hmy_getFilterLogs","hmy_newFilter","hmy_newPendingTransactionFilter","hmy_newBlockFilter","hmy_getFilterChanges","hmy_getLogs"]},{"name":"Transaction Related Methods","methods":["hmy_getStakingTransactionByBlockHashAndIndex","hmy_getStakingTransactionByBlockNumberAndIndex","hmy_getStakingTransactionByHash","hmy_getCurrentTransactionErrorSink","hmy_getPendingCrossLinks","hmy_getPendingCXReceipts","hmy_getCXReceiptByHash","hmy_pendingTransactions","hmy_sendRawStakingTransaction","hmy_getTransactionsHistory","hmy_sendRawTransaction","hmy_getTransactionReceipt","hmy_getBlockTransactionCountByHash","hmy_getBlockTransactionCountByNumber","hmy_getTransactionByHash","hmy_getTransactionByBlockNumberAndIndex","hmy_getTransactionByBlockHashAndIndex","hmy_getBlockByNumber","hmy_getBlockByHash","hmy_getBlocks","tx"]},{"name":"Contract Related Methods","methods":["hmy_estimateGas","hmy_getStorageAt","hmy_call","hmy_getCode"]},{"name":"Protocol Related Methods","methods":["hmy_isLastBlock","hmy_epochLastBlock","hmy_latestHeader","hmy_getShardingStructure","hmy_blockNumber","hmy_syncing","hmy_gasPrice","net_peerCount","hmy_getEpoch","hmy_getLeader"]},{"name":"Staking Related Methods","methods":["hmy_getCirculatingSupply","hmy_getTotalSupply","hmy_getStakingNetworkInfo","hmy_getAllValidatorInformation","hmy_getCurrentUtilityMetrics","hmy_getDelegationsByValidator","hmy_getDelegationsByDelegatorAndValidator","hmy_getDelegationsByDelegator","hmy_getValidatorMetrics","hmy_getMedianRawStakeSnapshot","hmy_getActiveValidatorAddresses","hmy_getAllValidatorAddresses","hmy_getCurrentStakingErrorSink","hmy_getValidatorInformation","hmy_getValidators","hmy_getSignedBlocks","hmy_isBlockSigner","hmy_getBlockSigners"]}]')}});
//# sourceMappingURL=app.e0ec388f.js.map