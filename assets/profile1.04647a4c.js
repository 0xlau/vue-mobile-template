import{o as t,e as i,_ as f,f as o,L as _,$ as b,a as l,i as p,I as x,J as h,h as s,a0 as g,H as r,Q as u,r as y,a1 as I,a2 as S,j as C}from"./index.f2379f95.js";import{I as k}from"./index.7c67b749.js";import{G,a as N}from"./index.903e3bf6.js";import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";const j={class:"GridCard-component"},O={props:{title:{type:String,default:void 0},titleStyle:{type:Object,default:{}},columnNum:{type:Number,default:4},items:{type:Object,default:{}}},setup(e){return(d,n)=>{const c=g("svg-icon");return t(),i("div",j,[e.title!=null?(t(),i("div",{key:0,class:"GridCard-title",style:f(e.titleStyle)},[o("span",null,_(e.title),1)],4)):b("",!0),l(s(G),{border:!1,"column-num":e.columnNum},{default:p(()=>[(t(!0),i(x,null,h(e.items,a=>(t(),r(s(N),{text:a.text,dot:a.dot,badge:a.badge,url:a.url,to:a.to},{icon:p(()=>[a.svg?(t(),r(c,{key:0,name:a.svg},null,8,["name"])):a.icon?(t(),r(s(u),{key:1,name:a.icon},null,8,["name"])):(t(),r(s(u),{key:2,name:"photo-o"}))]),_:2},1032,["text","dot","badge","url","to"]))),256))]),_:1},8,["column-num"])])}}};var m=v(O,[["__scopeId","data-v-2ec5ae14"]]);const w=e=>(I("data-v-6251783a"),e=e(),S(),e),B={class:"profile-container"},V={class:"profile-header"},F={class:"profile-header-inner"},P={class:"profile-info"},$=w(()=>o("div",{class:"profile-info-main"},[o("span",{class:"profile-info-main-nickname"},"\u7801\u519C\u5C0F\u6613"),o("span",{class:"profile-info-main-phone"},"131****0000")],-1)),L=C('<div class="profile-number" data-v-6251783a><div class="profile-number-box" data-v-6251783a><span class="profile-number-box-num" data-v-6251783a>1,892</span><span class="profile-number-box-text" data-v-6251783a>\u6211\u7684\u91D1\u5E01</span></div><div class="profile-number-box" data-v-6251783a><span class="profile-number-box-num" data-v-6251783a>212</span><span class="profile-number-box-text" data-v-6251783a>\u4ECA\u65E5\u91D1\u5E01</span></div><div class="profile-number-box" data-v-6251783a><span class="profile-number-box-num" data-v-6251783a>2.3</span><span class="profile-number-box-text" data-v-6251783a>\u4ECA\u65E5\u9605\u8BFB(\u5206\u949F)</span></div></div>',1),W={setup(e){const d=[{text:"\u8FD4\u56DE\u4E3B\u9875",icon:"home-o",to:"/"},{text:"\u5728Github\u70B9\u8D5E",icon:"good-job-o",url:"https://github.com/Coder-XiaoYi/vue-mobile-template"},{text:"\u5728Gitee\u70B9\u8D5E",icon:"good-job-o",url:"https://gitee.com/liupeiqiang/vue-mobile-template"}],n=y({Withdrawal:{text:"\u5151\u6362\u63D0\u73B0",svg:"Withdrawal"},Friend:{text:"\u9080\u8BF7\u597D\u53CB",svg:"Friend"},Order:{text:"\u6211\u7684\u8BA2\u5355",svg:"Order"},Profit:{text:"\u6536\u76CA\u660E\u7EC6",svg:"Profit"}});return n.Order.dot=!0,n.Profit.badge="9+",(c,a)=>(t(),i("div",B,[o("div",V,[o("div",F,[o("div",P,[l(s(k),{class:"profile-info-avatar",round:"",fit:"cover",src:"/other/avatar.png"}),$]),L]),l(m,{class:"profile-action-card",items:s(n)},null,8,["items"]),l(m,{columnNum:3,title:"\u7CFB\u7EDF\u4E13\u533A",items:d})])]))}};var E=v(W,[["__scopeId","data-v-6251783a"]]);export{E as default};