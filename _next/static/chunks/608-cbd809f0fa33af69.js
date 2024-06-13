"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[608],{8173:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let r=n(9920),i=n(1452),o=n(7437),l=i._(n(2265)),u=r._(n(4887)),a=r._(n(8321)),s=n(497),d=n(7103),c=n(3938);n(2301);let f=n(291),p=r._(n(1241)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,n,r,i,o,l){let u=null==e?void 0:e.src;e&&e["data-loaded-src"]!==u&&(e["data-loaded-src"]=u,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function h(e){let[t,n]=l.version.split(".",2),r=parseInt(t,10),i=parseInt(n,10);return r>18||18===r&&i>=3?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let v=(0,l.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:u,width:a,decoding:s,className:d,style:c,fetchPriority:f,placeholder:p,loading:m,unoptimized:v,fill:y,onLoadRef:b,onLoadingCompleteRef:w,setBlurComplete:_,setShowAltText:C,sizesInput:S,onLoad:j,onError:x,...E}=e;return(0,o.jsx)("img",{...E,...h(f),loading:m,width:a,height:u,decoding:s,"data-nimg":y?"fill":"1",className:d,style:c,sizes:i,srcSet:r,src:n,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&g(e,p,b,w,_,v,S))},[n,p,b,w,_,x,v,S,t]),onLoad:e=>{g(e.currentTarget,p,b,w,_,v,S)},onError:e=>{C(!0),"empty"!==p&&_(!0),x&&x(e)}})});function y(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...h(n.fetchPriority)};return t&&u.default.preload?(u.default.preload(n.src,r),null):(0,o.jsx)(a.default,{children:(0,o.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...r},"__nimg-"+n.src+n.srcSet+n.sizes)})}let b=(0,l.forwardRef)((e,t)=>{let n=(0,l.useContext)(f.RouterContext),r=(0,l.useContext)(c.ImageConfigContext),i=(0,l.useMemo)(()=>{let e=m||r||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:u,onLoadingComplete:a}=e,g=(0,l.useRef)(u);(0,l.useEffect)(()=>{g.current=u},[u]);let h=(0,l.useRef)(a);(0,l.useEffect)(()=>{h.current=a},[a]);let[b,w]=(0,l.useState)(!1),[_,C]=(0,l.useState)(!1),{props:S,meta:j}=(0,s.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:b,showAltText:_});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{...S,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:w,setShowAltText:C,sizesInput:e.sizes,ref:t}),j.priority?(0,o.jsx)(y,{isAppRouter:!n,imgAttributes:S}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2901:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(9920)._(n(2265)).default.createContext({})},687:function(e,t){function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},497:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return u}}),n(2301);let r=n(1564),i=n(7103);function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u(e,t){var n;let u,a,s,{src:d,sizes:c,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:h,width:v,height:y,fill:b=!1,style:w,overrideSrc:_,onLoad:C,onLoadingComplete:S,placeholder:j="empty",blurDataURL:x,fetchPriority:E,layout:P,objectFit:O,objectPosition:M,lazyBoundary:z,lazyRoot:I,...k}=e,{imgConf:N,showAltText:R,blurComplete:A,defaultLoader:D}=t,F=N||i.imageConfigDefault;if("allSizes"in F)u=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,t)=>e-t),t=F.deviceSizes.sort((e,t)=>e-t);u={...F,allSizes:e,deviceSizes:t}}if(void 0===D)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let T=k.loader||D;delete k.loader,delete k.srcSet;let L="__next_img_default"in T;if(L){if("custom"===u.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=T;T=t=>{let{config:n,...r}=t;return e(r)}}if(P){"fill"===P&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!c&&(c=t)}let U="",$=l(v),B=l(y);if("object"==typeof(n=d)&&(o(n)||void 0!==n.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,s=e.blurHeight,x=x||e.blurDataURL,U=e.src,!b){if($||B){if($&&!B){let t=$/e.width;B=Math.round(e.height*t)}else if(!$&&B){let t=B/e.height;$=Math.round(e.width*t)}}else $=e.width,B=e.height}}let V=!p&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:U)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,V=!1),u.unoptimized&&(f=!0),L&&d.endsWith(".svg")&&!u.dangerouslyAllowSVG&&(f=!0),p&&(E="high");let G=l(h),W=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:M}:{},R?{}:{color:"transparent"},w),H=A||"empty"===j?null:"blur"===j?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:$,heightInt:B,blurWidth:a,blurHeight:s,blurDataURL:x||"",objectFit:W.objectFit})+'")':'url("'+j+'")',Z=H?{backgroundSize:W.objectFit||"cover",backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},q=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:l,loader:u}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:a,kind:s}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,l),d=a.length-1;return{sizes:l||"w"!==s?l:"100vw",srcSet:a.map((e,r)=>u({config:t,src:n,quality:o,width:e})+" "+("w"===s?e:r+1)+s).join(", "),src:u({config:t,src:n,quality:o,width:a[d]})}}({config:u,src:d,unoptimized:f,width:$,quality:G,sizes:c,loader:T});return{props:{...k,loading:V?"lazy":m,fetchPriority:E,width:$,height:B,decoding:"async",className:g,style:{...W,...Z},sizes:q.sizes,srcSet:q.srcSet,src:_||q.src},meta:{unoptimized:f,priority:p,placeholder:j,fill:b}}}},8321:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return g},defaultHead:function(){return c}});let r=n(9920),i=n(1452),o=n(7437),l=i._(n(2265)),u=r._(n(5960)),a=n(2901),s=n(6590),d=n(687);function c(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(2301);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:n}=t;return e.reduce(f,[]).reverse().concat(c(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,l=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){l=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!l)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:r})})}let g=function(e){let{children:t}=e,n=(0,l.useContext)(a.AmpStateContext),r=(0,l.useContext)(s.HeadManagerContext);return(0,o.jsx)(u.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,d.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1564:function(e,t){function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:l}=e,u=r?40*r:t,a=i?40*i:n,s=u&&a?"viewBox='0 0 "+u+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},3938:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let r=n(9920)._(n(2265)),i=n(7103),o=r.default.createContext(i.imageConfigDefault)},7103:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},1241:function(e,t){function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},5960:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let r=n(2265),i="undefined"==typeof window,o=i?()=>{}:r.useLayoutEffect,l=i?()=>{}:r.useEffect;function u(e){let{headManager:t,reduceComponentsToState:n}=e;function u(){if(t&&t.mountedInstances){let i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}if(i){var a;null==t||null==(a=t.mountedInstances)||a.add(e.children),u()}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=u),()=>{t&&(t._pendingUpdate=u)})),l(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},2988:function(e,t,n){n.d(t,{Z:function(){return r}});function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}},1584:function(e,t,n){n.d(t,{F:function(){return i},e:function(){return o}});var r=n(2265);function i(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function o(...e){return(0,r.useCallback)(i(...e),e)}},8324:function(e,t,n){n.d(t,{b:function(){return o},k:function(){return i}});var r=n(2265);function i(e,t){let n=(0,r.createContext)(t);function i(e){let{children:t,...i}=e,o=(0,r.useMemo)(()=>i,Object.values(i));return(0,r.createElement)(n.Provider,{value:o},t)}return i.displayName=e+"Provider",[i,function(i){let o=(0,r.useContext)(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${i}\` must be used within \`${e}\``)}]}function o(e,t=[]){let n=[],i=()=>{let t=n.map(e=>(0,r.createContext)(e));return function(n){let i=(null==n?void 0:n[e])||t;return(0,r.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:i}}),[n,i])}};return i.scopeName=e,[function(t,i){let o=(0,r.createContext)(i),l=n.length;function u(t){let{scope:n,children:i,...u}=t,a=(null==n?void 0:n[e][l])||o,s=(0,r.useMemo)(()=>u,Object.values(u));return(0,r.createElement)(a.Provider,{value:s},i)}return n=[...n,i],u.displayName=t+"Provider",[u,function(n,u){let a=(null==u?void 0:u[e][l])||o,s=(0,r.useContext)(a);if(s)return s;if(void 0!==i)return i;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let i=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e)[`__scope${r}`];return{...t,...i}},{});return(0,r.useMemo)(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}(i,...t)]}},5171:function(e,t,n){n.d(t,{WV:function(){return u},jH:function(){return a}});var r=n(2988),i=n(2265),o=n(4887),l=n(1538);let u=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=(0,i.forwardRef)((e,n)=>{let{asChild:o,...u}=e,a=o?l.g7:t;return(0,i.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,i.createElement)(a,(0,r.Z)({},u,{ref:n}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function a(e,t){e&&(0,o.flushSync)(()=>e.dispatchEvent(t))}},1538:function(e,t,n){n.d(t,{g7:function(){return l}});var r=n(2988),i=n(2265),o=n(1584);let l=(0,i.forwardRef)((e,t)=>{let{children:n,...o}=e,l=i.Children.toArray(n),a=l.find(s);if(a){let e=a.props.children,n=l.map(t=>t!==a?t:i.Children.count(e)>1?i.Children.only(null):(0,i.isValidElement)(e)?e.props.children:null);return(0,i.createElement)(u,(0,r.Z)({},o,{ref:t}),(0,i.isValidElement)(e)?(0,i.cloneElement)(e,void 0,n):null)}return(0,i.createElement)(u,(0,r.Z)({},o,{ref:t}),n)});l.displayName="Slot";let u=(0,i.forwardRef)((e,t)=>{let{children:n,...r}=e;return(0,i.isValidElement)(n)?(0,i.cloneElement)(n,{...function(e,t){let n={...t};for(let r in t){let i=e[r],o=t[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...e)=>{o(...e),i(...e)}:i&&(n[r]=i):"style"===r?n[r]={...i,...o}:"className"===r&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props),ref:t?(0,o.F)(t,n.ref):n.ref}):i.Children.count(n)>1?i.Children.only(null):null});u.displayName="SlotClone";let a=({children:e})=>(0,i.createElement)(i.Fragment,null,e);function s(e){return(0,i.isValidElement)(e)&&e.type===a}},5137:function(e,t,n){n.d(t,{W:function(){return i}});var r=n(2265);function i(e){let t=(0,r.useRef)(e);return(0,r.useEffect)(()=>{t.current=e}),(0,r.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}},1336:function(e,t,n){n.d(t,{b:function(){return i}});var r=n(2265);let i=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}}}]);