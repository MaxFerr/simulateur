(this.webpackJsonpsimulateur=this.webpackJsonpsimulateur||[]).push([[0],{17:function(e){e.exports=JSON.parse('{"credit_perso":{"credit":{"loan_type_unique_name":"credit_perso","amount_min":2501,"amount_max":100000,"amount_default":15001,"range_duration_default":84,"range_duration_type":"months"},"description":{"title":"Cr\xe9dit personnel"},"ranges":[{"range_min":2501,"range_max":5000,"range_rate":12.49,"range_duration":[24,30]},{"range_min":5001,"range_max":5600,"range_rate":6.95,"range_duration":[24,30,36]},{"range_min":5601,"range_max":7500,"range_rate":6.95,"range_duration":[24,30,36,42]},{"range_min":7501,"range_max":10000,"range_rate":6.95,"range_duration":[30,36,42,48]},{"range_min":10001,"range_max":15000,"range_rate":6.45,"range_duration":[24,30,36,42,48,60]},{"range_min":15001,"range_max":20000,"range_rate":6.45,"range_duration":[24,30,36,42,48,60,72,84]},{"range_min":20001,"range_max":100000,"range_rate":6.45,"range_duration":[24,30,36,42,48,60,72,84,120]}]},"credit_auto":{"credit":{"loan_type_unique_name":"credit_auto","amount_min":2500,"amount_max":100000,"amount_default":15001,"range_duration_default":84,"range_duration_type":"months","slider_increments":50},"description":{"title":"Cr\xe9dit auto"},"ranges":[{"range_min":2500,"range_max":3700,"range_rate":1.39,"range_duration":[24,30]},{"range_min":3701,"range_max":5600,"range_rate":1.39,"range_duration":[30,36]},{"range_min":5601,"range_max":7500,"range_rate":1.39,"range_duration":[30,36,42]},{"range_min":7501,"range_max":10000,"range_rate":1.39,"range_duration":[30,36,42,48]},{"range_min":10001,"range_max":15000,"range_rate":1.39,"range_duration":[30,36,42,48,60]},{"range_min":15001,"range_max":100000,"range_rate":1.39,"range_duration":[30,36,42,48,60,72,84]}]},"credit_travaux":{"credit":{"loan_type_unique_name":"credit_travaux","amount_min":2500,"amount_max":100000,"amount_default":20001,"range_duration_default":120,"range_duration_type":"months","slider_increments":50},"description":{"title":"Cr\xe9dit travaux"},"ranges":[{"range_min":2500,"range_max":5000,"range_rate":2.7,"range_duration":[6,12,24,30]},{"range_min":5001,"range_max":5600,"range_rate":2.7,"range_duration":[6,12,24,30,36]},{"range_min":5601,"range_max":7500,"range_rate":2.7,"range_duration":[6,12,24,30,36,42]},{"range_min":7501,"range_max":10000,"range_rate":2.7,"range_duration":[6,12,24,30,36,42,48]},{"range_min":10001,"range_max":15000,"range_rate":2.7,"range_duration":[6,12,24,30,36,42,48,60]},{"range_min":15001,"range_max":20000,"range_rate":2.7,"range_duration":[6,12,24,30,36,42,48,60,72,84]},{"range_min":20001,"range_max":37500,"range_rate":2.7,"range_duration":[6,12,24,30,36,42,48,60,72,84,120]},{"range_min":37501,"range_max":100000,"range_rate":2.7,"range_duration":[6,12,24,30,36,42,48,60,72,84,120,180]}]},"credit_hypo_fixed":{"credit":{"loan_type_unique_name":"credit_hypo_fixed","amount_min":100000,"amount_max":1000000,"amount_default":150000,"range_duration_default":30,"range_duration_type":"years","slider_increments":10000},"i18n":{"title":"Cr\xe9dit hypoth\xe9caire"},"ranges":[{"range_rate":1.29,"range_duration":[5]},{"range_rate":1.37,"range_duration":[10]},{"range_rate":1.66,"range_duration":[15]},{"range_rate":1.86,"range_duration":[20]},{"range_rate":2.16,"range_duration":[25]},{"range_rate":2.25,"range_duration":[30]}]}}')},20:function(e,a,n){e.exports=n(39)},25:function(e,a,n){},26:function(e,a,n){},27:function(e,a,n){},34:function(e,a,n){},35:function(e,a,n){},37:function(e,a,n){},38:function(e,a,n){},39:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(7),u=n.n(o),i=(n(25),n(13)),l=n(14),m=n(19),c=n(18),d=n(41),g=n(42),_=n(43),s=(n(26),n(27),n(4)),p=Object(s.b)((function(e){return{credits:e.credits}}),(function(e){return{handleLoanTypeDis:function(a){return e({type:"SELECT_LOAN_TYPE",value:a})}}}))((function(e){var a=e.credits.map((function(e){var a="".concat(e[1].description?e[1].description.title:e[1].i18n.title);return r.a.createElement("option",{value:a,key:"".concat(e[0])},a)}));return r.a.createElement("div",null,r.a.createElement("label",{className:"typeLab"},"Type de pr\xeat"),r.a.createElement("select",{onChange:function(a){var n=a.target.value;e.handleLoanTypeDis(n)},list:"loanTypes",name:"loanType",id:"loanType"},r.a.createElement("option",{value:"Rien de s\xe9lectionn\xe9"},"Rien de s\xe9lectionn\xe9"),a))})),y=(n(34),Object(s.b)((function(e){return{selectedAmount:e.selectedAmount,loanAmountMax:e.loanAmountMax,loanAmountMin:e.loanAmountMin,errorAmount:e.errorAmount}}),(function(e){return{handleAmountChangeDis:function(a){return e({type:"SELECT_AMOUNT",amountValue:a})}}}))((function(e){return r.a.createElement("div",null,r.a.createElement("label",{className:"amount"},"Montant"),r.a.createElement("input",{type:"number",name:"loanAmount",id:"loanAmount",onChange:function(a){var n=a.target.value;e.handleAmountChangeDis(n)},value:e.selectedAmount,min:e.loanAmountMin,max:e.loanAmountMax}),r.a.createElement("input",{list:"devices",name:"device",id:"device",defaultValue:"\u20ac"}),r.a.createElement("datalist",{id:"devices"},r.a.createElement("option",{value:"\u20ac"})),r.a.createElement("span",{className:"amount red"},e.errorAmount?"Selectionnez un montant entre ".concat(e.loanAmountMin," - ").concat(e.loanAmountMax," \u20ac"):null))}))),f=(n(35),Object(s.b)((function(e){return{sum:e.sum}}))((function(e){return r.a.createElement("div",{className:"description"},r.a.createElement("p",null,"Mensualit\xe9s : ",e.sum.monthlyPaymentSum,"\u20ac "),r.a.createElement("p",null,"Type de cr\xe9dit : ",e.sum.loanTypeSum," "),r.a.createElement("p",null,"Montant : ",e.sum.amount,"\u20ac"),r.a.createElement("p",null,"TAEG : ",e.sum.taeg,"%"),r.a.createElement("p",null,"Dur\xe9e : ",e.sum.rang," ","years"===e.sum.rangeDurationType?"ans":"mois"," "),r.a.createElement("p",null,"Total \xe0 payer : ",e.sum.total,"\u20ac"))}))),v=(n(36),n(37),Object(s.b)(null,(function(e){return{handleLoanCardDis:function(a,n,t,r,o,u){return e({type:"LOANCARD_CLICK",payload:{amountToPay:a,selectedAmount:n,rangeRate:t,rangeDurationType:r,ranges:o,index:u}})}}}))((function(e){return r.a.createElement("div",{className:"loanCard ".concat(e.active===e.index?"active":null),onClick:function(){e.handleLoanCardDis(e.amountToPay,e.selectedAmount,e.rangeRate,e.rangeDurationType,e.ranges,e.index,e.length),e.handleClick()}},r.a.createElement("p",null,e.ranges," ","months"===e.rangeDurationType?"mois":"ans"),r.a.createElement("p",null,e.amountToPay,"\u20ac"))}))),E=(n(38),Object(s.b)((function(e){return{defaultRangeDuration:e.defaultRangeDuration,rangeDurationType:e.rangeDurationType,ranges:e.ranges,active:e.active,selectedAmount:e.selectedAmount}}))((function(e){var a=e.ranges.map((function(a,n){return e.selectedAmount<=a.range_max&&e.selectedAmount>=a.range_min?a.range_duration.map((function(n,t){return r.a.createElement(v,{defaultRangeDuration:e.defaultRangeDuration,rangeDurationType:e.rangeDurationType,ranges:n,key:n,selectedAmount:e.selectedAmount,rangeRate:a.range_rate,amountToPay:Math.floor(e.selectedAmount*(a.range_rate/100/12)/(1-Math.pow(1+a.range_rate/100/12,-n))),index:t,active:e.active,handleClick:e.handleClick})})):void 0===a.range_max?r.a.createElement(v,{defaultRangeDuration:e.defaultRangeDuration,selectedAmount:e.selectedAmount,rangeDurationType:e.rangeDurationType,ranges:a.range_duration,key:a.range_duration,rangeRate:a.range_rate,amountToPay:Math.floor(e.selectedAmount*(a.range_rate/100/12)/(1-Math.pow(1+a.range_rate/100/12,12*-a.range_duration))),index:n,active:e.active,handleClick:e.handleClick}):null}));return r.a.createElement("div",{className:"loanList"},r.a.createElement("p",null,"Dur\xe9e"),r.a.createElement("div",{className:"loanListCard"},a))}))),h=r.a.createRef(),T=function(e){Object(m.a)(n,e);var a=Object(c.a)(n);function n(){var e;Object(i.a)(this,n);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).handleClick=function(){return h.current.scrollIntoView({behavior:"smooth",block:"start"})},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"headerH"},"Simulateur"),r.a.createElement(d.a,{fluid:!0,id:"cont"},r.a.createElement(g.a,null,r.a.createElement(_.a,{sm:8},r.a.createElement(p,null),r.a.createElement(y,null),r.a.createElement(E,{handleClick:this.handleClick})),r.a.createElement(_.a,{sm:4},r.a.createElement("span",{ref:h},r.a.createElement(f,null))))))}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=n(8),x=n(2),D=n(17),b={credits:Object.entries(D),loanType:"",loanTypeData:[],loanAmountMax:0,loanAmountMin:0,selectedAmount:0,errorAmount:!1,defaultRangeDuration:0,rangeDurationType:"",ranges:[],sum:{monthlyPaymentSum:0,loanTypeSum:"Pas encore s\xe9lectionn\xe9",amount:0,taeg:0,total:0,rangeDurationType:"",rang:0},active:null},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SELECT_LOAN_TYPE":e=Object(x.a)(Object(x.a)({},b),{},{loanType:a.value,sum:Object(x.a)(Object(x.a)({},b.sum),{},{loanTypeSum:a.value})});for(var n=0;n<e.credits.length;n++){var t=n,r={loanType:a.value,loanTypeData:e.credits[t],loanAmountMax:e.credits[t][1].credit.amount_max,loanAmountMin:e.credits[t][1].credit.amount_min,selectedAmount:e.credits[t][1].credit.amount_default,defaultRangeDuration:e.credits[t][1].credit.range_duration_default,rangeDurationType:e.credits[t][1].credit.range_duration_type,ranges:e.credits[t][1].ranges};if("Rien de s\xe9lectionn\xe9"===a.value)return Object(x.a)({},b);if(e.credits[n][1].description){if(e.credits[n][1].description.title===a.value)return Object(x.a)(Object(x.a)({},e),r)}else if(e.credits[n][1].i18n.title===a.value)return Object(x.a)(Object(x.a)({},e),r)}break;case"SELECT_AMOUNT":var o=a.amountValue<e.loanAmountMin||a.amountValue>e.loanAmountMax;return Object(x.a)(Object(x.a)({},e),{},{selectedAmount:a.amountValue,active:null,sum:{monthlyPaymentSum:0,loanTypeSum:"Pas encore s\xe9lectionn\xe9",amount:0,taeg:0,total:0,rangeDurationType:"",rang:0},errorAmount:o});case"LOANCARD_CLICK":var u;return u="months"===a.payload.rangeDurationType?a.payload.amountToPay*a.payload.ranges:a.payload.amountToPay*(12*a.payload.ranges[0]),Object(x.a)(Object(x.a)({},e),{},{sum:{monthlyPaymentSum:a.payload.amountToPay,loanTypeSum:e.loanType,amount:e.selectedAmount,taeg:a.payload.rangeRate,total:u,rangeDurationType:a.payload.rangeDurationType,rang:a.payload.ranges},active:a.payload.index});default:return e}},C=Object(A.b)(O,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());u.a.render(r.a.createElement(s.a,{store:C},r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.6f9a6789.chunk.js.map