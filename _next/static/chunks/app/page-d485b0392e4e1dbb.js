(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5306:function(e,r,t){Promise.resolve().then(t.t.bind(t,8173,23)),Promise.resolve().then(t.t.bind(t,231,23)),Promise.resolve().then(t.bind(t,420))},420:function(e,r,t){"use strict";t.d(r,{Avatar:function(){return o},AvatarFallback:function(){return s},AvatarImage:function(){return i}});var n=t(7437),a=t(2265),l=t(4458),u=t(9354);let o=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(l.fC,{ref:r,className:(0,u.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",t),...a})});o.displayName=l.fC.displayName;let i=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(l.Ee,{ref:r,className:(0,u.cn)("aspect-square h-full w-full",t),...a})});i.displayName=l.Ee.displayName;let s=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(l.NY,{ref:r,className:(0,u.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",t),...a})});s.displayName=l.NY.displayName},9354:function(e,r,t){"use strict";t.d(r,{cn:function(){return l}});var n=t(4839),a=t(6164);function l(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,a.m6)((0,n.W)(r))}},4458:function(e,r,t){"use strict";t.d(r,{Ee:function(){return h},NY:function(){return N},fC:function(){return p}});var n=t(2988),a=t(2265),l=t(8324),u=t(5137),o=t(1336),i=t(5171);let s="Avatar",[f,d]=(0,l.b)(s),[c,m]=f(s),v=(0,a.forwardRef)((e,r)=>{let{__scopeAvatar:t,...l}=e,[u,o]=(0,a.useState)("idle");return(0,a.createElement)(c,{scope:t,imageLoadingStatus:u,onImageLoadingStatusChange:o},(0,a.createElement)(i.WV.span,(0,n.Z)({},l,{ref:r})))}),g=(0,a.forwardRef)((e,r)=>{let{__scopeAvatar:t,src:l,onLoadingStatusChange:s=()=>{},...f}=e,d=m("AvatarImage",t),c=function(e){let[r,t]=(0,a.useState)("idle");return(0,o.b)(()=>{if(!e){t("error");return}let r=!0,n=new window.Image,a=e=>()=>{r&&t(e)};return t("loading"),n.onload=a("loaded"),n.onerror=a("error"),n.src=e,()=>{r=!1}},[e]),r}(l),v=(0,u.W)(e=>{s(e),d.onImageLoadingStatusChange(e)});return(0,o.b)(()=>{"idle"!==c&&v(c)},[c,v]),"loaded"===c?(0,a.createElement)(i.WV.img,(0,n.Z)({},f,{ref:r,src:l})):null}),w=(0,a.forwardRef)((e,r)=>{let{__scopeAvatar:t,delayMs:l,...u}=e,o=m("AvatarFallback",t),[s,f]=(0,a.useState)(void 0===l);return(0,a.useEffect)(()=>{if(void 0!==l){let e=window.setTimeout(()=>f(!0),l);return()=>window.clearTimeout(e)}},[l]),s&&"loaded"!==o.imageLoadingStatus?(0,a.createElement)(i.WV.span,(0,n.Z)({},u,{ref:r})):null}),p=v,h=g,N=w}},function(e){e.O(0,[231,33,971,23,744],function(){return e(e.s=5306)}),_N_E=e.O()}]);