import{c as $}from"./mobile.6dea8604.js";import{_ as I}from"./index.8db4fe0c.js";import{m as i,a as m,r as a,e as D,j as s,o as K,W as w}from"./vendor.bd251973.js";const{createDemo:B}=$("numberkeyboard"),E=B({props:{},setup(){let{proxy:o}=w();const e=i(!1),r=i(!1),v=i(!1),p=i(!1),b=i(!1),u=i(""),t=m(["."]),n=m(["."]),d=[e,r,v,p,b];function y(l){o.$toast.text(`\u8F93\u5165\uFF1A${l}`)}function f(l){d[l-1].value=!0}function k(){o.$toast.text("\u5220\u9664")}function C(l){d[l-1].value=!1}return{input:y,onDelete:k,close:C,showKeyBoard:f,customKey1:t,customKey2:n,visible1:e,visible2:r,visible3:v,visible4:p,visible5:b,value:u}}}),F={class:"demo full"};function A(o,e,r,v,p,b){const u=a("nut-cell"),t=a("nut-numberkeyboard");return K(),D("div",F,[s(u,{isLink:!0,onClick:e[0]||(e[0]=n=>o.showKeyBoard(1)),showIcon:!0,title:"\u9ED8\u8BA4\u952E\u76D8"}),s(t,{visible:o.visible1,"onUpdate:visible":e[1]||(e[1]=n=>o.visible1=n),onInput:o.input,onDelete:o.onDelete,onClose:e[2]||(e[2]=n=>o.close(1))},null,8,["visible","onInput","onDelete"]),s(u,{isLink:!0,onClick:e[3]||(e[3]=n=>o.showKeyBoard(2)),showIcon:!0,title:"\u5E26\u53F3\u4FA7\u680F\u952E\u76D8"}),s(t,{type:"rightColumn",visible:o.visible2,"onUpdate:visible":e[4]||(e[4]=n=>o.visible2=n),"custom-key":o.customKey1,onInput:o.input,onClose:e[5]||(e[5]=n=>o.close(2))},null,8,["visible","custom-key","onInput"]),s(u,{isLink:!0,onClick:e[6]||(e[6]=n=>o.showKeyBoard(3)),showIcon:!0,title:"\u968F\u673A\u6570\u952E\u76D8"}),s(t,{type:"rightColumn",visible:o.visible3,"onUpdate:visible":e[7]||(e[7]=n=>o.visible3=n),randomKeys:"true","custom-key":o.customKey1,onInput:o.input,onClose:e[8]||(e[8]=n=>o.close(3))},null,8,["visible","custom-key","onInput"]),s(u,{isLink:!0,onClick:e[9]||(e[9]=n=>o.showKeyBoard(4)),showIcon:!0,title:"\u5E26\u6807\u9898\u680F\u952E\u76D8"}),s(t,{title:"\u9ED8\u8BA4\u952E\u76D8",visible:o.visible4,"onUpdate:visible":e[10]||(e[10]=n=>o.visible4=n),"custom-key":o.customKey2,onInput:o.input,onClose:e[11]||(e[11]=n=>o.close(4))},null,8,["visible","custom-key","onInput"]),s(u,{isLink:!0,"desc-text-align":"left",onClick:e[12]||(e[12]=n=>o.showKeyBoard(5)),desc:o.value,showIcon:!0,title:"\u53CC\u5411\u7ED1\u5B9A\uFF1A"},null,8,["desc"]),s(t,{visible:o.visible5,"onUpdate:visible":e[13]||(e[13]=n=>o.visible5=n),value:o.value,"onUpdate:value":e[14]||(e[14]=n=>o.value=n),maxlength:"6",onClose:e[15]||(e[15]=n=>o.close(5))},null,8,["visible","value"])])}var j=I(E,[["render",A],["__scopeId","data-v-dab9d0d8"]]);export{j as default};
