var __vite_style__=document.createElement("style");__vite_style__.innerHTML="view-block[data-v-172e7d18]{display:block}@keyframes nutFadeIn-172e7d18{from{opacity:0}to{opacity:1}}@keyframes nutFadeOut-172e7d18{from{opacity:1}to{opacity:0}}.nutFade-enter-active[data-v-172e7d18],.nutFade-leave-active[data-v-172e7d18],.nutFadeIn[data-v-172e7d18],.nutFadeOut[data-v-172e7d18]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutFade-enter-active[data-v-172e7d18],.nutFadeIn[data-v-172e7d18]{animation-name:nutFadeIn-172e7d18}.nutFade-leave-active[data-v-172e7d18],.nutFadeOut[data-v-172e7d18]{animation-name:nutFadeOut-172e7d18}@keyframes nutZoomIn-172e7d18{from{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes nutZoomOut-172e7d18{from{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.nutZoom-enter-active[data-v-172e7d18],.nutZoom-leave-active[data-v-172e7d18],.nutZoomIn[data-v-172e7d18],.nutZoomOut[data-v-172e7d18]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutZoom-enter-active[data-v-172e7d18],.nutZoomIn[data-v-172e7d18]{animation-name:nutZoomIn-172e7d18}.nutZoom-leave-active[data-v-172e7d18],.nutZoomOut[data-v-172e7d18]{animation-name:nutZoomOut-172e7d18}@keyframes nutEaseIn-172e7d18{0%{opacity:0;transform:scale(.9)}100%{opacity:1;transform:scale(1)}}@keyframes nutEaseOut-172e7d18{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.9)}}.nutEase-enter-active[data-v-172e7d18],.nutEase-leave-active[data-v-172e7d18],.nutEaseIn[data-v-172e7d18],.nutEaseOut[data-v-172e7d18]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutEase-enter-active[data-v-172e7d18],.nutEaseIn[data-v-172e7d18]{animation-name:nutEaseIn-172e7d18}.nutEase-leave-active[data-v-172e7d18],.nutEaseOut[data-v-172e7d18]{animation-name:nutEaseOut-172e7d18}@keyframes nutDropIn-172e7d18{0%{opacity:0;transform:scaleY(.8)}100%{opacity:1;transform:scaleY(1)}}@keyframes nutDropOut-172e7d18{0%{opacity:1;transform:scaleY(1)}100%{opacity:0;transform:scaleY(.8)}}.nutDrop-enter-active[data-v-172e7d18],.nutDrop-leave-active[data-v-172e7d18],.nutDropIn[data-v-172e7d18],.nutDropOut[data-v-172e7d18]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutDrop-enter-active[data-v-172e7d18],.nutDropIn[data-v-172e7d18]{animation-name:nutDropIn-172e7d18}.nutDrop-leave-active[data-v-172e7d18],.nutDropOut[data-v-172e7d18]{animation-name:nutDropOut-172e7d18}@keyframes rotation-172e7d18{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}.nutRotate-enter-active[data-v-172e7d18],.nutRotate-leave-active[data-v-172e7d18],.nutRotateIn[data-v-172e7d18],.nutRotateOut[data-v-172e7d18]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutRotate-enter-active[data-v-172e7d18],.nutRotateIn[data-v-172e7d18]{animation-name:nutRotateIn}.nutRotate-leave-active[data-v-172e7d18],.nutRotateOut[data-v-172e7d18]{animation-name:nutRotateOut}.wrapper[data-v-172e7d18]{display:flex;height:100%;align-items:center;justify-content:center}.wrapper .content[data-v-172e7d18]{display:flex;width:150px;height:150px;background:#fff;border-radius:8px;align-items:center;justify-content:center;color:red}",document.head.appendChild(__vite_style__),System.register(["./mobile-legacy.3700831f.js","./index-legacy.579cfc3c.js"],(function(t){"use strict";var a,e,n,o,i,d,u,r,s,c;return{setters:[function(t){a=t.c},function(t){e=t.a,n=t.A,o=t.B,i=t.r,d=t.o,u=t.c,r=t.f,s=t.z,c=t.j}],execute:function(){const{createDemo:v}=a("overlay");var m=t("default",v({props:{},setup:()=>({state:e({show:!1,show2:!1})})}));const l=s();n("data-v-172e7d18");const f={class:"demo"},p=r("h2",null,"基础用法",-1),y=c("显示遮罩层"),b=r("h2",null,"嵌套内容",-1),h=c("嵌套内容"),_=r("div",{class:"wrapper"},[r("div",{class:"content"},"这里是正文")],-1);o();const I=l(((t,a,e,n,o,s)=>{const c=i("nut-button"),v=i("nut-overlay"),m=i("nut-cell");return d(),u("div",f,[p,r(m,null,{default:l((()=>[r(c,{type:"primary",onClick:a[1]||(a[1]=a=>t.state.show=!0)},{default:l((()=>[y])),_:1}),r(v,{visible:t.state.show,"onUpdate:visible":a[2]||(a[2]=a=>t.state.show=a),"z-index":2e3},null,8,["visible"])])),_:1}),b,r(m,null,{default:l((()=>[r(c,{type:"success",onClick:a[3]||(a[3]=a=>t.state.show2=!0)},{default:l((()=>[h])),_:1}),r(v,{visible:t.state.show2,"onUpdate:visible":a[4]||(a[4]=a=>t.state.show2=a),"z-index":2e3},{default:l((()=>[_])),_:1},8,["visible"])])),_:1})])}));m.render=I,m.__scopeId="data-v-172e7d18"}}}));