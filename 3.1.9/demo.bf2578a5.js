import{c as a}from"./mobile.6dea8604.js";import{_ as r}from"./index.8db4fe0c.js";import{m as _,r as c,e as m,j as u,k as e,g as o,o as C}from"./vendor.bd251973.js";const{createDemo:E}=a("cell"),h=E({setup(){const s=i=>{console.log("\u70B9\u51FB\u4E8B\u4EF6")},l=_(!0);return{testClick:s,switchChecked:l}}}),p={class:"demo"},B=o("h2",null,"\u57FA\u672C\u7528\u6CD5",-1),A=o("h2",null,"\u76F4\u63A5\u4F7F\u7528\u63D2\u69FD(slot)",-1),f=o("div",null,"\u81EA\u5B9A\u4E49\u5185\u5BB9",-1),D=o("img",{class:"nut-icon",src:"https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"},null,-1),k=o("h2",null,"\u5C55\u793A\u56FE\u6807",-1),g=o("h2",null,"\u53EA\u5C55\u793A desc \uFF0C\u53EF\u901A\u8FC7 desc-text-align \u8C03\u6574\u5185\u5BB9\u4F4D\u7F6E",-1);function b(s,l,i,j,w,v){const t=c("nut-cell"),n=c("nut-cell-group"),d=c("nut-switch");return C(),m("div",p,[B,u(t,{title:"\u6211\u662F\u6807\u9898",desc:"\u63CF\u8FF0\u6587\u5B57"}),u(t,{title:"\u6211\u662F\u6807\u9898","sub-title":"\u526F\u6807\u9898\u63CF\u8FF0",desc:"\u63CF\u8FF0\u6587\u5B57"}),u(t,{title:"\u70B9\u51FB\u6D4B\u8BD5",onClick:s.testClick},null,8,["onClick"]),u(t,{title:"\u5706\u89D2\u8BBE\u7F6E 0","round-radius":"0"}),A,u(t,{title:"\u6211\u662F\u6807\u9898",desc:"\u63CF\u8FF0\u6587\u5B57"},{default:e(()=>[f]),_:1}),u(n,{title:"\u94FE\u63A5 | \u5206\u7EC4\u7528\u6CD5"},{default:e(()=>[u(t,{title:"\u94FE\u63A5","is-link":""}),u(t,{title:"URL \u8DF3\u8F6C",desc:"https://jd.com","is-link":"",url:"https://jd.com"}),u(t,{title:"\u8DEF\u7531\u8DF3\u8F6C \u2019/\u2018 ",to:"/"})]),_:1}),u(n,{title:"\u81EA\u5B9A\u4E49\u53F3\u4FA7\u7BAD\u5934\u533A\u57DF"},{default:e(()=>[u(t,{title:"Switch"},{link:e(()=>[u(d,{modelValue:s.switchChecked,"onUpdate:modelValue":l[0]||(l[0]=F=>s.switchChecked=F)},null,8,["modelValue"])]),_:1})]),_:1}),u(n,{title:"\u81EA\u5B9A\u4E49\u5DE6\u4FA7 Icon \u533A\u57DF"},{default:e(()=>[u(t,{title:"\u56FE\u7247"},{icon:e(()=>[D]),_:1})]),_:1}),k,u(t,{title:"\u59D3\u540D",icon:"my",desc:"\u5F20\u4E09",isLink:""}),g,u(t,{"desc-text-align":"left",desc:"\u5F20\u4E09"})])}var y=r(h,[["render",b]]);export{y as default};
