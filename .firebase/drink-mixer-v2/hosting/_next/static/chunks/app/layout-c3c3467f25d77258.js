(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1748:function(e,t,n){Promise.resolve().then(n.bind(n,8764)),Promise.resolve().then(n.t.bind(n,7035,23)),Promise.resolve().then(n.t.bind(n,2445,23))},8764:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeProvider:function(){return y}});var a=n(3827),c=n(4090);let o=["light","dark"],r="(prefers-color-scheme: dark)",l=(0,c.createContext)(void 0),s=e=>(0,c.useContext)(l)?c.createElement(c.Fragment,null,e.children):c.createElement(m,e),i=["light","dark"],m=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:a=!0,enableColorScheme:s=!0,storageKey:m="theme",themes:y=i,defaultTheme:v=a?"system":"light",attribute:g="data-theme",value:b,children:S,nonce:_}=e,[k,p]=(0,c.useState)(()=>u(m,v)),[E,w]=(0,c.useState)(()=>u(m)),C=b?Object.values(b):y,T=(0,c.useCallback)(e=>{let t=e;if(!t)return;"system"===e&&a&&(t=f());let c=b?b[t]:t,r=n?h():null,l=document.documentElement;if("class"===g?(l.classList.remove(...C),c&&l.classList.add(c)):c?l.setAttribute(g,c):l.removeAttribute(g),s){let e=o.includes(v)?v:null,n=o.includes(t)?t:e;l.style.colorScheme=n}null==r||r()},[]),x=(0,c.useCallback)(e=>{p(e);try{localStorage.setItem(m,e)}catch(e){}},[t]),L=(0,c.useCallback)(e=>{w(f(e)),"system"===k&&a&&!t&&T("system")},[k,t]);(0,c.useEffect)(()=>{let e=window.matchMedia(r);return e.addListener(L),L(e),()=>e.removeListener(L)},[L]),(0,c.useEffect)(()=>{let e=e=>{e.key===m&&x(e.newValue||v)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[x]),(0,c.useEffect)(()=>{T(null!=t?t:k)},[t,k]);let N=(0,c.useMemo)(()=>({theme:k,setTheme:x,forcedTheme:t,resolvedTheme:"system"===k?E:k,themes:a?[...y,"system"]:y,systemTheme:a?E:void 0}),[k,x,t,E,a,y]);return c.createElement(l.Provider,{value:N},c.createElement(d,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:a,enableColorScheme:s,storageKey:m,themes:y,defaultTheme:v,attribute:g,value:b,children:S,attrs:C,nonce:_}),S)},d=(0,c.memo)(e=>{let{forcedTheme:t,storageKey:n,attribute:a,enableSystem:l,enableColorScheme:s,defaultTheme:i,value:m,attrs:d,nonce:u}=e,h="system"===i,f="class"===a?"var d=document.documentElement,c=d.classList;c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),");"):"var d=document.documentElement,n='".concat(a,"',s='setAttribute';"),y=s?o.includes(i)&&i?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(i,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],c=m?m[e]:e,r=t?e+"|| ''":"'".concat(c,"'"),l="";return s&&n&&!t&&o.includes(e)&&(l+="d.style.colorScheme = '".concat(e,"';")),"class"===a?l+=t||c?"c.add(".concat(r,")"):"null":c&&(l+="d[s](n,".concat(r,")")),l},g=t?"!function(){".concat(f).concat(v(t),"}()"):l?"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(r,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(v("dark"),"}else{").concat(v("light"),"}}else if(e){").concat(m?"var x=".concat(JSON.stringify(m),";"):"").concat(v(m?"x[e]":"e",!0),"}").concat(h?"":"else{"+v(i,!1,!1)+"}").concat(y,"}catch(e){}}()"):"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(m?"var x=".concat(JSON.stringify(m),";"):"").concat(v(m?"x[e]":"e",!0),"}else{").concat(v(i,!1,!1),";}").concat(y,"}catch(t){}}();");return c.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:g}})},()=>!0),u=(e,t)=>{let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},h=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},f=e=>(e||(e=window.matchMedia(r)),e.matches?"dark":"light");function y(e){let{children:t,...n}=e;return(0,a.jsx)(s,{...n,children:t})}},2445:function(){},7035:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}}},function(e){e.O(0,[971,69,744],function(){return e(e.s=1748)}),_N_E=e.O()}]);