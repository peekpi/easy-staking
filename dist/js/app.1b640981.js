(function(t){function e(e){for(var n,r,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"72d7ad0d","chunk-c89970e8":"665f0e8f","chunk-ffb004c2":"231636ea"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1,"chunk-c89970e8":1,"chunk-ffb004c2":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"65669474","chunk-c89970e8":"d875d1eb","chunk-ffb004c2":"74f3cd12"}[t]+".css",o=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===n||u===o)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],m.parentNode.removeChild(m),a(i)},m.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(m)})).then((function(){r[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}o[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/easy-staking/dist/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"03e5":function(t,e,a){"use strict";var n=a("48c1"),r=a.n(n);r.a},"09ec":function(t,e,a){"use strict";var n=a("34cc"),r=a.n(n);r.a},1:function(t,e){},2:function(t,e){},3:function(t,e){},"34cc":function(t,e,a){},4:function(t,e){},"48c1":function(t,e,a){},"49d9":function(t,e,a){},5:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],i=(a("034f"),a("2877")),s={},c=Object(i["a"])(s,r,o,!1,null,null,null),l=c.exports,u=(a("d3b7"),a("8c4f")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("Header",[t._e(),a("svg",{staticClass:"logosvg",attrs:{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1020 300"}},[a("defs"),a("title",[t._v("Harmony-logo-WH-horizontal")]),a("path",{staticClass:"cls-1",attrs:{d:"M201.17,61.26A38.81,38.81,0,0,0,162.33,100v42.93c-4,.27-8.09.44-12.33.44s-8.31.17-12.33.41V100A38.84,38.84,0,0,0,60,100V202.55a38.84,38.84,0,0,0,77.67,0V159.63c4-.27,8.09-.44,12.33-.44s8.31-.17,12.33-.41v43.77a38.84,38.84,0,0,0,77.67,0V100A38.81,38.81,0,0,0,201.17,61.26ZM98.83,77.12A22.91,22.91,0,0,1,121.75,100v45.46a130.64,130.64,0,0,0-33,9.33,60,60,0,0,0-12.8,7.64V100A22.91,22.91,0,0,1,98.83,77.12Zm22.92,125.43a22.92,22.92,0,0,1-45.84,0V192.29c0-9.08,7.2-17.7,19.27-23a112.49,112.49,0,0,1,26.57-7.77Zm79.42,22.85a22.91,22.91,0,0,1-22.92-22.85V157.09a129.82,129.82,0,0,0,33-9.33,59.55,59.55,0,0,0,12.8-7.63v62.42A22.91,22.91,0,0,1,201.17,225.4Zm3.65-92.12A112.49,112.49,0,0,1,178.25,141V100a22.92,22.92,0,0,1,45.84,0v10.26C224.09,119.31,216.89,127.92,204.82,133.28Z"}}),a("path",{staticClass:"cls-1",attrs:{d:"M748.35,125.42a42.45,42.45,0,1,0,42.44,42.45A42.45,42.45,0,0,0,748.35,125.42Zm0,71.13A28.69,28.69,0,1,1,777,167.87,28.68,28.68,0,0,1,748.35,196.55Zm-258.2-70.83a6.88,6.88,0,0,0-6.88,6.88v4.05a42.45,42.45,0,1,0,0,62.43v4a6.88,6.88,0,1,0,13.76,0V132.6A6.88,6.88,0,0,0,490.15,125.72Zm-35.57,70.83a28.69,28.69,0,1,1,28.69-28.68A28.68,28.68,0,0,1,454.58,196.55Zm108.49-64.24a6.88,6.88,0,0,1-6.87,6.87c-.15,0-.28,0-.42,0s-.31,0-.47,0a28.68,28.68,0,0,0-28.69,28.69c-.36,1.42-.21,23.25-.1,36.16a6.85,6.85,0,0,1-7.81,5.87,7.1,7.1,0,0,1-5.85-7.13V132.6a6.88,6.88,0,0,1,7.25-6.87,7.14,7.14,0,0,1,6.51,7.26v3.66a42.24,42.24,0,0,1,28.69-11.23l.89,0A6.87,6.87,0,0,1,563.07,132.31ZM873.69,161v42.1a6.88,6.88,0,0,1-6.88,6.88h0a6.88,6.88,0,0,1-6.87-6.88v-6.88h0V161a21.5,21.5,0,0,0-23-21.42c-11.4.76-20,10.75-20,22.17v8.37h0v26.1h0v6.88a6.88,6.88,0,1,1-13.76,0V132.64a6.88,6.88,0,0,1,13.76,0v.65a34.2,34.2,0,0,1,19.77-7.49A35.23,35.23,0,0,1,873.69,161ZM398,96.79V203.21a6.8,6.8,0,0,1-13.59,0V155H313.59v48.26a6.8,6.8,0,0,1-13.59,0V96.79a6.8,6.8,0,0,1,13.59,0v46.42h70.79V96.79a6.8,6.8,0,0,1,13.59,0Zm295.49,67.46h0v38.84a6.88,6.88,0,0,1-6.88,6.88h0a6.88,6.88,0,0,1-6.88-6.88V167.7h0v-9.31a19.21,19.21,0,1,0-38.41,0h0v44.7a6.88,6.88,0,1,1-13.76,0V167.7h0v-9.31h0a19.21,19.21,0,1,0-38.41,0v44.7a6.88,6.88,0,0,1-13.76,0V132.64a6.87,6.87,0,0,1,13.68-1,32.89,32.89,0,0,1,45.37,6.63,32.93,32.93,0,0,1,59.05,20.1Zm265.89-28.6L913,236a7,7,0,0,1-12.65-5.85l12.47-27-31.23-67.51a7,7,0,1,1,12.64-5.85l26.27,56.77,26.26-56.77a7,7,0,1,1,12.64,5.85Z"}}),a("rect",{staticClass:"cls-2",attrs:{x:"300",y:"60",width:"660",height:"180"}}),a("rect",{staticClass:"cls-2",attrs:{width:"1020",height:"300"}})]),a("div",{staticClass:"topright"},[a("Button",{attrs:{type:"text",ghost:""},on:{click:function(e){t.enable=!0}}},[t._v("投票规则")])],1),a("Modal",{attrs:{"footer-hide":"",fullscreen:"",title:"投票规则"},model:{value:t.enable,callback:function(e){t.enable=e},expression:"enable"}},[a("List",{attrs:{split:!1}},t._l(t.stakingRules,(function(e,n){return a("ListItem",{key:n},[t._v(" "+t._s(n)+". "+t._s(e)+" ")])})),1)],1)],1),a("Content",[a("Account",{model:{value:t.delegate,callback:function(e){t.delegate=e},expression:"delegate"}}),t.delegate?a("ValidatorList"):a("Delegations")],1)],1)},m=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ValidatorPage",{attrs:{triger:t.pageTriger,validator:t.validatorSelected}}),a("StakingConfirm",{attrs:{triger:t.btnTriger,validator:t.validatorSelected}}),a("List",{attrs:{border:"",loading:t.loading}},[a("Scroll",{attrs:{"on-reach-bottom":t.handleReachBottom,height:t.scrollHeight}},t._l(t.validators,(function(e,n){return a("ListItem",{key:n},[t._v(" "+t._s(n)+" "),a("ValidatorLogo",{attrs:{address:e.address}}),a("ListItemMeta",{attrs:{title:t.shortName(e.name)},nativeOn:{click:function(a){return t.titleClick(e)}}},[a("template",{slot:"description"},[a("span",[t._v(" 票数: "),a("b",[t._v(t._s(t._f("zeroDecimals")(t._f("ones")(e.total_stake))))]),a("span"),t._v(" 年化: "),a("b",[t._v(t._s(t._f("percent")(e.apr))+"%")])])])],2),a("template",{slot:"action"},[a("Button",{attrs:{shape:"circle",loading:t.loging},on:{click:function(a){return t.validatorClick(e)}}},[t._v("投票")])],1)],2)})),1)],1)],1)},g=[],f=(a("fb6a"),a("96cf"),a("1da1")),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{"footer-hide":"",fullscreen:"",title:t.validator.name},model:{value:t.enable,callback:function(e){t.enable=e},expression:"enable"}},[a("ValidatorProfile",{attrs:{validator:t.validator}}),a("br"),a("ValidatorStatus",{attrs:{validator:t.validator}}),a("br"),a("ValidatorInfo",{attrs:{validator:t.validator}})],1)},v=[],b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Table",{attrs:{"disabled-hover":"",stripe:"",border:"",columns:t.header,data:t.bodyStyle}},[a("template",{slot:"body"},[a("Table",{attrs:{"disabled-hover":"","show-header":!1,stripe:"",border:"",columns:t.column,data:t.context}})],1)],2)},_=[],y=(a("b0c0"),a("4160"),a("d81d"),a("13d5"),a("b65f"),a("a9e3"),a("9129"),a("4fad"),a("25f0"),a("159b"),a("3835"),a("901e")),k=a.n(y);function x(t,e){return Math.trunc(t*Math.pow(10,e))/Math.pow(10,e)}var w="en-US";function S(t,e,a){return new Intl.NumberFormat(w,{minimumFractionDigits:e,maximumFractionDigits:a}).format(x(t,a))}function O(t){return S(t,0,0)}function T(t){return S(t,2,2)}function A(t){return-1===t||null===t}function R(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return A(t)?t:new Intl.NumberFormat(w,{minimumFractionDigits:2,maximumFractionDigits:2}).format(Math.round(1e4*t)/100)+"%"}function C(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return k()(t).div(1e18).toNumber()}var V=function(t){return"http"==t.slice(0,4)?t:"http://"+t},j={data:function(){return{bodyStyle:[{cellClassName:{body:"nopadding"}}]}},computed:{header:function(){return[{title:"节点信息",align:"center",slot:"body",key:"body",flush:this.validator.name}]},column:function(){return[{key:"name"},{key:"text",render:function(t,e){var a=e.row;return"网站"==a.name?t("a",{domProps:{href:V(a.text?a.text:""),target:"black"}},a.text):t("span",a.text)}}]},context:function(){return[{name:"简介",text:this.validator["details"]},{name:"网站",text:this.validator["website"]},{name:"投票地址",text:this.validator["operator_address"]},{name:"注册区块高度",text:this.validator["creation_height"]},{name:"费率",text:R(this.validator["rate"])},{name:"单日最大费率调整",text:R(this.validator["max_change_rate"])}]}},props:["validator"]},B=j,L=Object(i["a"])(B,b,_,!1,null,null,null),M=L.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Table",{attrs:{"disabled-hover":"",stripe:"",border:"",columns:t.header,data:t.bodyStyle}},[a("template",{slot:"body"},[a("Table",{attrs:{"disabled-hover":"","show-header":!1,stripe:"",border:"",columns:t.column,data:t.context}})],1)],2)},D=[],I={data:function(){return{bodyStyle:[{cellClassName:{body:"nopadding"}}]}},computed:{header:function(){return[{title:this.validator.name,align:"center",slot:"body",key:"body",flush:this.validator.name}]},column:function(){return[{key:"name"},{key:"text"}]},context:function(){var t=function(t){return O(C(t))};return[{name:"总得票数",text:t(this.validator["total_stake"])},{name:"自抵押票数",text:t(this.validator["self_stake"])},{name:"代理抵押票数",text:t(this.validator["delegator_shares"])},{name:"最大可代理票数",text:t(this.validator["max_total_delegation"])}]}},props:["validator"]},E=I,H=(a("bbba"),Object(i["a"])(E,$,D,!1,null,null,null)),N=H.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Table",{attrs:{"disabled-hover":"",stripe:"",border:"",columns:t.header,data:t.bodyStyle}},[a("template",{slot:"body"},[a("Table",{attrs:{"disabled-hover":"","show-header":!1,stripe:"",border:"",columns:t.column,data:t.context}})],1)],2)},F=[],Z={data:function(){return{bodyStyle:[{cellClassName:{body:"nopadding"}}]}},computed:{header:function(){return[{title:"节点状态",align:"center",slot:"body",key:"body",flush:this.validator.name}]},column:function(){return[{key:"name"},{key:"text"}]},context:function(){var t=function(t){return O(C(t))};return[{name:"出块率",text:R(this.validator["uptime_percentage"])},{name:"Slots",text:this.validator["active_nodes"]},{name:"Elected Slots",text:this.validator["elected_nodes"]},{name:"七日年化",text:R(this.validator["apr"])},{name:"已分红",text:t(this.validator["lifetime_reward_accumulated"])}]}},props:["validator"]},U=Z,z=Object(i["a"])(U,P,F,!1,null,null,null),W=z.exports,J={data:function(){return{enable:!1}},props:["triger","validator"],watch:{triger:function(){this.enable||(this.enable=!0)}},components:{ValidatorProfile:N,ValidatorStatus:W,ValidatorInfo:M}},q=J,G=Object(i["a"])(q,p,v,!1,null,null,null),X=G.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",["error"!=t.imgState?a("img",{staticClass:"li-validator-image",style:{display:"loaded"==t.imgState?"block":"none"},attrs:{src:t.imageSrc},on:{load:function(e){t.imgState="loaded"},error:function(e){t.imgState="error"}}}):t._e(),"loaded"!=t.imgState?a("Avatar",{staticClass:"li-validator-image",attrs:{address:t.address}}):t._e()],1)},Q=[],Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{domProps:{innerHTML:t._s(t.svg)}})},tt=[],et=a("2551"),at=a.n(et),nt=a("1f91"),rt=a.n(nt),ot={name:"avatar",props:{address:{type:String,required:!0}},computed:{svg:function(){var t={},e=new at.a(rt()(t));return e.create(this.address)}}},it=ot,st=Object(i["a"])(it,Y,tt,!1,null,null,null),ct=st.exports,lt={name:"ValidatorLogo",data:function(){return{imgState:null}},components:{Avatar:ct},props:["address","logoUrl"],computed:{imageSrc:function(){return this.logoUrl||"https://github.com/harmony-one/validator-logos/raw/master/validators/".concat(this.address,".jpg")}}},ut=lt,dt=(a("09ec"),Object(i["a"])(ut,K,Q,!1,null,null,null)),mt=dt.exports,ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{width:"360",loading:!0,closable:!1,"mask-closable":!1},on:{"on-ok":t.ok},model:{value:t.enable,callback:function(e){t.enable=e},expression:"enable"}},[a("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[a("span",[t._v(" 投票给 "),a("i",[t._v(t._s(t.validator.name))])])]),a("div",[a("Input",{attrs:{placeholder:"数量"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},[a("Icon",{attrs:{slot:"prepend",type:"logo-bitcoin"},slot:"prepend"}),a("span",{attrs:{slot:"append"},slot:"append"},[t._v("ONE")])],1),a("span",{staticStyle:{"font-size":"smaller"}},[t._v(" 可用余额: "+t._s(t._f("twoDecimals")(t.balanceOne))+" "),a("b",[t._v("ONE")])]),a("Slider",{attrs:{step:.1},model:{value:t.persent,callback:function(e){t.persent=e},expression:"persent"}})],1)])},gt=[],ft=(a("b680"),{data:function(){return{enable:!1,amount:1e3}},props:["triger","validator"],filters:{twoDecimals:T},methods:{message:function(t,e){this.$Message[t]({background:!0,content:e,duration:5})},ok:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var a,n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=t.$root.hmy,n=t.account,r=new a.hmy.utils.Unit(t.amount).asOne().toHex(),o=a.delegate(n.address,t.validator.address,r),e.next=7,t.$store.dispatch("txCommit",o);case 7:t.message("success","交易哈希:"+o.id),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),t.message("error",e.t0.message?e.t0.message:e.t0);case 13:t.enable=!1;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()}},watch:{triger:function(){this.enable||(this.enable=!0)}},computed:{persent:{set:function(t){try{var e=Math.floor(this.balanceOne),a=100*this.amount/e;a.toFixed(1)!=t.toFixed(1)&&(this.amount=Math.floor(t*e/100))}catch(n){return 0}},get:function(){try{var t=Math.floor(this.balanceOne);return 100*this.amount/t}catch(e){return 0}}},account:function(){return this.$store.state.account},balanceOne:function(){try{return this.account.balance.toOne()}catch(t){return 0}}}}),pt=ft,vt=Object(i["a"])(pt,ht,gt,!1,null,null,null),bt=vt.exports,_t={name:"ValidatorList",components:{ValidatorLogo:mt,StakingConfirm:bt,ValidatorPage:X},data:function(){var t=this;return 0==this.$store.state.validators.length&&this.$store.dispatch("getValidators").then((function(){return t.loading=!1})).catch((function(e){t.loading=!1,t.message("error",e)})),{loading:0==this.$store.state.validators.length,loging:!1,btnTriger:!1,pageTriger:!1,validatorSelected:{}}},computed:{scrollHeight:function(){return document.documentElement.clientHeight-85},validators:function(){return this.$store.state.validators}},filters:{ones:C,zeroDecimals:O,percent:R},methods:{message:function(t,e){this.$Message[t]({background:!0,content:e,duration:5})},shortName:function(t){return t.length>25?t.slice(0,10)+"..."+t.slice(-10):t},validatorClick:function(t){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.loging=!0,a.prev=1,a.next=4,e.$store.dispatch("login");case 4:e.btnTriger=!e.btnTriger,e.validatorSelected=t,a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](1),e.message("error",a.t0.message);case 11:e.loging=!1;case 12:case"end":return a.stop()}}),a,null,[[1,8]])})))()},titleClick:function(t){this.pageTriger=!this.pageTriger,this.validatorSelected=t},handleReachBottom:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$store.dispatch("getValidators");case 4:a=e.sent,0==a&&t.message("info","没有节点了"),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),t.message("error",e.t0);case 11:t.loading=!1;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()}}},yt=_t,kt=Object(i["a"])(yt,h,g,!1,null,null,null),xt=kt.exports,wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("StakingCancel",{attrs:{triger:t.btnTriger,validator:t.validatorSelected}}),a("ValidatorPage",{attrs:{triger:t.pageTriger,validator:t.validatorInfo}}),a("List",{attrs:{border:"",loading:t.loading}},[a("Scroll",{attrs:{height:t.scrollHeight}},t._l(t.delegations,(function(e,n){return a("ListItem",{key:n},[t._v(" "+t._s(n)+" "),a("ValidatorLogo",{attrs:{address:e.validator_address}}),a("ListItemMeta",{attrs:{title:t.shortName(e.validator_info.name)},nativeOn:{click:function(a){return t.titleClick(e)}}},[a("template",{slot:"description"},[a("span",[t._v(" 我的票数: "),a("b",[t._v(t._s(t._f("twoDecimals")(t._f("ones")(e.amount))))]),a("span"),t._v(" 我的收益: "),a("b",[t._v(t._s(t._f("twoDecimals")(t._f("ones")(e.reward))))]),a("span"),t._v(" 赎回中: "),a("b",[t._v(t._s(t._f("twoDecimals")(t._f("ones")(t.totalLocked(e.Undelegations)))))])])])],2),a("template",{slot:"action"},[a("Button",{attrs:{shape:"circle"},on:{click:function(a){return t.validatorClick(e)}}},[t._v("取回投票")])],1)],2)})),1)],1)],1)},St=[],Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{width:"360",loading:!0,closable:!1,"mask-closable":!1},on:{"on-ok":t.ok},model:{value:t.enable,callback:function(e){t.enable=e},expression:"enable"}},[a("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[a("span",[t._v(" 取消 "),a("i",[t._v(t._s(t.validator.validator_info?t.validator.validator_info.name:""))]),t._v(" 的投票 ")])]),a("div",[a("Input",{attrs:{placeholder:"数量"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},[a("Icon",{attrs:{slot:"prepend",type:"logo-bitcoin"},slot:"prepend"}),a("span",{attrs:{slot:"append"},slot:"append"},[t._v("ONE")])],1),a("span",{staticStyle:{"font-size":"smaller"}},[t._v(" 我的投票: "+t._s(t._f("twoDecimals")(t.balanceOne))+" "),a("b",[t._v("ONE")])]),a("Slider",{attrs:{step:.1},model:{value:t.persent,callback:function(e){t.persent=e},expression:"persent"}})],1)])},Tt=[],At={data:function(){return window.x=this,{enable:!1,amount:1e3}},props:["triger","validator"],filters:{twoDecimals:T},methods:{message:function(t,e){this.$Message[t]({background:!0,content:e,duration:5})},ok:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var a,n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=t.$root.hmy,n=t.account,r=new a.hmy.utils.Unit(t.amount).asOne().toHex(),o=a.undelegate(n.address,t.validator.validator_address,r),e.next=7,t.$store.dispatch("txCommit",o);case 7:t.message("success","交易哈希:"+o.id),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),t.message("error",e.t0.message?e.t0.message:e.t0);case 13:t.enable=!1;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()}},watch:{triger:function(){this.enable||(this.enable=!0)}},computed:{persent:{set:function(t){try{var e=Math.floor(this.balanceOne),a=100*this.amount/e;a.toFixed(1)!=t.toFixed(1)&&(this.amount=Math.floor(t*e/100))}catch(n){return 0}},get:function(){try{var t=Math.floor(this.balanceOne);return 100*this.amount/t}catch(e){return 0}}},account:function(){return this.$store.state.account},balanceOne:function(){try{return this.validator.amount/1e18}catch(t){return 0}}}},Rt=At,Ct=Object(i["a"])(Rt,Ot,Tt,!1,null,null,null),Vt=Ct.exports,jt={name:"ValidatorList",components:{ValidatorLogo:mt,StakingCancel:Vt,ValidatorPage:X},data:function(){var t=this;return this.$store.dispatch("updateDelegations").then((function(){return t.loading=!1})).catch((function(e){t.loading=!1,t.message("error",e)})),{loading:0==this.$store.state.delegations.length,btnTriger:!1,pageTriger:!1,validatorSelected:{},validatorInfo:{}}},computed:{scrollHeight:function(){return document.documentElement.clientHeight-85},delegations:function(){return this.$store.state.delegations}},filters:{ones:C,twoDecimals:T},methods:{message:function(t,e){this.$Message[t]({background:!0,content:e,duration:5})},shortName:function(t){return t.length>25?t.slice(0,10)+"..."+t.slice(-10):t},totalLocked:function(t){var e=0;return t.map((function(t){e+=t.Amount?t.Amount:0})),e},titleClick:function(t){this.pageTriger=!this.pageTriger,this.validatorInfo=t.validator_info},validatorClick:function(t){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.btnTriger=!e.btnTriger,e.validatorSelected=t;case 2:case"end":return a.stop()}}),a)})))()},handleReachBottom:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$store.dispatch("updateDelegations");case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](1),t.message("error",e.t0);case 9:t.loading=!1;case 10:case"end":return e.stop()}}),e,null,[[1,6]])})))()}}},Bt=jt,Lt=Object(i["a"])(Bt,wt,St,!1,null,null,null),Mt=Lt.exports,$t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"margin"},[t.account.address?a("div",[a("span",[t._v(" 地址: "),a("a",{on:{click:t.login}},[t._v(t._s(t.address))]),t._v(" 余额:"+t._s(t._f("twoDecimals")(t.balanceOne))+" ONE ")]),a("span",{staticClass:"record",on:{click:function(e){return e.preventDefault(),t.clickRecord(e)}}},[a("RadioGroup",{attrs:{type:"button",size:"small"},model:{value:t.record,callback:function(e){t.record=e},expression:"record"}},[a("Radio",{attrs:{label:"true"}},[t._v("我的记录")])],1)],1)]):a("div",[a("Button",{attrs:{type:"text",size:"small",loading:t.loging},on:{click:t.login}},[t._v("登录")])],1)])},Dt=[],It={name:"Account",data:function(){return{record:"",loging:!1}},model:{prop:"checked",event:"change"},props:["checked"],methods:{clickRecord:function(){this.record="true"==this.record?"":"true",this.$emit("change","true"!=this.record)},message:function(t,e){this.$Message[t]({background:!0,content:e,duration:5})},login:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loging=!0,t.prev=1,t.next=4,this.$store.dispatch("logout");case 4:return t.next=6,this.$store.dispatch("login");case 6:t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),this.message("error",t.t0.message);case 11:this.loging=!1;case 12:case"end":return t.stop()}}),t,this,[[1,8]])})));function e(){return t.apply(this,arguments)}return e}()},filters:{twoDecimals:T},computed:{address:function(){return void 0==this.account.address?"":this.account.address.slice(0,6)+"..."+this.account.address.slice(-4,-1)},balanceOne:function(){return this.account.balance.toOne()},account:function(){return this.$store.state.account}}},Et=It,Ht=(a("e55d"),Object(i["a"])(Et,$t,Dt,!1,null,"00b5f85f",null)),Nt=Ht.exports,Pt=a("cb6b"),Ft={name:"StakingHome",components:{Account:Nt,ValidatorList:xt,Delegations:Mt},data:function(){return{stakingRules:Pt,enable:!1,delegate:!0}},methods:{}},Zt=Ft,Ut=(a("03e5"),Object(i["a"])(Zt,d,m,!1,null,"f81fd75e",null)),zt=Ut.exports;n["default"].use(u["a"]);var Wt=[{path:"/",name:"Staking",component:zt},{path:"/home",name:"Home",component:function(){return a.e("chunk-ffb004c2").then(a.bind(null,"bb51"))}},{path:"/wallet",name:"Wallet",component:function(){return a.e("chunk-c89970e8").then(a.bind(null,"4dd7"))}},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Jt=new u["a"]({mode:"history",base:"/easy-staking/dist/",routes:Wt}),qt=Jt,Gt=a("f825"),Xt=a.n(Gt);a("f8ce");n["default"].use(Xt.a);a("99af");var Kt=a("5530"),Qt=a("2f62"),Yt=a("bc3a"),te=a.n(Yt),ee=a("1a04"),ae=(a("a630"),a("ac1f"),a("3ca3"),a("1276"),a("66fd")),ne=ae.Harmony,re=a("c21e"),oe=re.ChainID,ie=re.ChainType,se=a("f162"),ce=0,le="https://api.s0.dry.hmny.io",ue=new ne(le,{chainType:ie.Harmony,chainId:oe.HmyMainnet,shardID:ce});function de(t){return new Promise((function(e){return setTimeout(e,t)}))}function me(){return he.apply(this,arguments)}function he(){return he=Object(f["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=0;case 1:if(window.harmony||!(e++<2)){t.next=6;break}return t.next=4,de(1e3);case 4:t.next=1;break;case 6:if(window.harmony){t.next=8;break}throw{message:"请安装麦子钱包"};case 8:case"end":return t.stop()}}),t)}))),he.apply(this,arguments)}function ge(){return fe.apply(this,arguments)}function fe(){return fe=Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,me();case 2:return t.abrupt("return",window.harmony.getAccount());case 3:case"end":return t.stop()}}),t)}))),fe.apply(this,arguments)}function pe(){return ve.apply(this,arguments)}function ve(){return ve=Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,me();case 2:return t.abrupt("return",window.harmony.forgetIdentity());case 3:case"end":return t.stop()}}),t)}))),ve.apply(this,arguments)}function be(t,e,a){var n=ue.stakings.delegate({delegatorAddress:t,validatorAddress:e,amount:new ue.utils.Unit(a).asWei().toHex()}).setTxParams({gasPrice:"0x1000000000000",gasLimit:"0x0927c0",chainId:ue.chainId}).build();return n.setFromAddress(t),window.dtx=n,n}function _e(t,e,a){var n=ue.stakings.undelegate({delegatorAddress:t,validatorAddress:e,amount:new ue.utils.Unit(a).asWei().toHex()}).setTxParams({gasPrice:"0x100000000000",gasLimit:"0x0927c0",chainId:ue.chainId}).build();return n.setFromAddress(t),window.udtx=n,n}function ye(t,e,a){var n=ue.transactions.newTx({from:t,to:e,value:new ue.utils.Unit(a).asWei().toHex(),gasLimit:"210000",shardID:0,toShardID:0,gasPrice:"100000000000"});return window.tx=n,n}function ke(t){return xe.apply(this,arguments)}function xe(){return xe=Object(f["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,window.harmony.signTransaction(e);case 2:return t.next=4,e.sendTransaction();case 4:if(a=t.sent,a[1]==e.id){t.next=7;break}throw{message:a[1]};case 7:return t.abrupt("return",e);case 8:case"end":return t.stop()}}),t)}))),xe.apply(this,arguments)}se.map((function(t){var e=t.name.split(" ")[0],a={};t.methods.map((function(t){a[t.slice(4)]=function(){return ue.messenger.send(t,Array.from(arguments)).then((function(t){return t.getRaw}))}})),ue.blockchain[e]=a}));var we={hmy:ue,login:ge,logout:pe,transfer:ye,delegate:be,undelegate:_e,txSignSend:ke},Se=a("72bf");n["default"].use(Qt["a"]);var Oe="https://staking-explorer2-268108.appspot.com",Te="harmony";function Ae(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(Kt["a"])(Object(Kt["a"])({},t),{},{userName:t.name,operator_address:e?ee["getAddress"](t["address"]).bech32:t["address"],rate:t.rate,max_rate:t["max-rate"],max_change_rate:t["max-change-rate"],max_total_delegation:t["max-total-delegation"],min_self_delegation:String(t["min-self-delegation"]),website:t.website,details:t.details,moniker:t.name,average_stake:t.average_stake,reminder:t.reminder,creation_height:t["creation-height"],uptime_percentage:t.uptime_percentage,voting_power:t.voting_power,total_effective_stake:"0",active:t.active,self_stake:t.self_stake,total_stake:t.total_stake,address:t.address,epoch:t["last-epoch-in-committee"],status:2,jailed:!1,tombstoned:!1,tokens:"5706991464569",id:"16a9a8ae-1568-42a5-b4a6-59735c655dca",delegator_shares:"5706991464569.000000000000000000"})}function Re(t){return te.a.get("".concat(Oe,"/networks/").concat(Te,"/delegations/").concat(t)).then((function(t){return t.data.map((function(t){t.validator_info=Ae(t.validator_info,!1)})),t.data}))}function Ce(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,a={active:!0,page:t,search:"",size:e,sortOrder:"desc",sortProperty:"total_stake"};return te.a.get("".concat(Oe,"/networks/").concat(Te,"/validators_with_page?").concat(Se.stringify(a))).then((function(t){var e=t.data.validators.map((function(t){return Ae(t,!1)}));return Object(Kt["a"])(Object(Kt["a"])({},t.data),{},{validators:e})}))}var Ve=0,je=new Qt["a"].Store({state:{account:{},delegations:[],total:0,totalActive:0,totalFound:0,validators:[],loading:!1,loaded:!1,txRecord:[]},mutations:{setAccount:function(t,e){t.account=e},appendValidators:function(t,e){t.validators=t.validators.concat(e)},setTotal:function(t,e){t.total=e},setTotalActive:function(t,e){t.totalActive=e},setTotalFound:function(t,e){t.totalFound=e},setLoading:function(t,e){t.loading=e},setLoaded:function(t,e){t.loading=!1,t.loaded=e},setDelegations:function(t,e){t.delegations=e},appendTx:function(t,e){t.txRecord.push(e)}},actions:{getValidators:function(t){return Object(f["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.state.totalActive||t.state.totalActive!=t.state.validators.length){e.next=2;break}return e.abrupt("return",0);case 2:return a=t.commit,e.next=5,Ce(Ve,20);case 5:return n=e.sent,a("setLoaded",!0),n.validators.length&&(Ve++,a("appendValidators",n.validators),a("setTotal",n.total),a("setTotalActive",n.total_active),a("setTotalFound",n.totalFound)),e.abrupt("return",n.validators.length);case 9:case"end":return e.stop()}}),e)})))()},updateDelegations:function(t){return Object(f["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Re(t.state.account.address);case 2:a=e.sent,t.commit("setDelegations",a);case 4:case"end":return e.stop()}}),e)})))()},login:function(t){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(window.vuex=e,void 0!=t.state.account.address){a.next=10;break}return a.next=4,we.login();case 4:return n=a.sent,a.next=7,we.hmy.blockchain.getBalance(n);case 7:r=a.sent,n.balance=new we.hmy.utils.Unit(r.result).asWei(),t.commit("setAccount",n);case 10:case"end":return a.stop()}}),a)})))()},logout:function(t){return Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(void 0==t.state.account.address){e.next=4;break}return e.next=3,we.logout();case 3:t.commit("setAccount",{});case 4:case"end":return e.stop()}}),e)})))()},txCommit:function(t,e){return Object(f["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,we.txSignSend(e);case 2:t.commit("appendTx",e);case 3:case"end":return a.stop()}}),a)})))()}}});n["default"].config.productionTip=!1,window.hmy=we,new n["default"]({data:{hmy:we},router:qt,store:je,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,a){},"996e":function(t,e,a){},bbba:function(t,e,a){"use strict";var n=a("996e"),r=a.n(n);r.a},cb6b:function(t){t.exports=JSON.parse('["hello world","etc..."]')},e55d:function(t,e,a){"use strict";var n=a("49d9"),r=a.n(n);r.a},f162:function(t){t.exports=JSON.parse('[{"name":"Account Methods","methods":["hmy_getBalanceByBlockNumber","hmy_getTransactionCount","hmy_getBalance","address"]},{"name":"Filter Methods","methods":["hmy_getFilterLogs","hmy_newFilter","hmy_newPendingTransactionFilter","hmy_newBlockFilter","hmy_getFilterChanges","hmy_getLogs"]},{"name":"Transaction Related Methods","methods":["hmy_getStakingTransactionByBlockHashAndIndex","hmy_getStakingTransactionByBlockNumberAndIndex","hmy_getStakingTransactionByHash","hmy_getCurrentTransactionErrorSink","hmy_getPendingCrossLinks","hmy_getPendingCXReceipts","hmy_getCXReceiptByHash","hmy_pendingTransactions","hmy_sendRawStakingTransaction","hmy_getTransactionsHistory","hmy_sendRawTransaction","hmy_getTransactionReceipt","hmy_getBlockTransactionCountByHash","hmy_getBlockTransactionCountByNumber","hmy_getTransactionByHash","hmy_getTransactionByBlockNumberAndIndex","hmy_getTransactionByBlockHashAndIndex","hmy_getBlockByNumber","hmy_getBlockByHash","hmy_getBlocks","tx"]},{"name":"Contract Related Methods","methods":["hmy_estimateGas","hmy_getStorageAt","hmy_call","hmy_getCode"]},{"name":"Protocol Related Methods","methods":["hmy_isLastBlock","hmy_epochLastBlock","hmy_latestHeader","hmy_getShardingStructure","hmy_blockNumber","hmy_syncing","hmy_gasPrice","net_peerCount","hmy_getEpoch","hmy_getLeader"]},{"name":"Staking Related Methods","methods":["hmy_getCirculatingSupply","hmy_getTotalSupply","hmy_getStakingNetworkInfo","hmy_getAllValidatorInformation","hmy_getCurrentUtilityMetrics","hmy_getDelegationsByValidator","hmy_getDelegationsByDelegatorAndValidator","hmy_getDelegationsByDelegator","hmy_getValidatorMetrics","hmy_getMedianRawStakeSnapshot","hmy_getActiveValidatorAddresses","hmy_getAllValidatorAddresses","hmy_getCurrentStakingErrorSink","hmy_getValidatorInformation","hmy_getValidators","hmy_getSignedBlocks","hmy_isBlockSigner","hmy_getBlockSigners"]}]')}});
//# sourceMappingURL=app.1b640981.js.map