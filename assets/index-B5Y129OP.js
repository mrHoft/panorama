(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Df={exports:{}},po={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function Mx(){if(L_)return po;L_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return po.Fragment=e,po.jsx=i,po.jsxs=i,po}var N_;function yx(){return N_||(N_=1,Df.exports=Mx()),Df.exports}var Ne=yx(),Uf={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function Ex(){if(O_)return re;O_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,w={};function M(L,it,Et){this.props=L,this.context=it,this.refs=w,this.updater=Et||y}M.prototype.isReactComponent={},M.prototype.setState=function(L,it){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,it,"setState")},M.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function g(){}g.prototype=M.prototype;function P(L,it,Et){this.props=L,this.context=it,this.refs=w,this.updater=Et||y}var O=P.prototype=new g;O.constructor=P,b(O,M.prototype),O.isPureReactComponent=!0;var D=Array.isArray,H={H:null,A:null,T:null,S:null},I=Object.prototype.hasOwnProperty;function B(L,it,Et,At,q,dt){return Et=dt.ref,{$$typeof:o,type:L,key:it,ref:Et!==void 0?Et:null,props:dt}}function K(L,it){return B(L.type,it,void 0,void 0,void 0,L.props)}function C(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function R(L){var it={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Et){return it[Et]})}var F=/\/+/g;function ut(L,it){return typeof L=="object"&&L!==null&&L.key!=null?R(""+L.key):it.toString(36)}function at(){}function mt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(at,at):(L.status="pending",L.then(function(it){L.status==="pending"&&(L.status="fulfilled",L.value=it)},function(it){L.status==="pending"&&(L.status="rejected",L.reason=it)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ht(L,it,Et,At,q){var dt=typeof L;(dt==="undefined"||dt==="boolean")&&(L=null);var xt=!1;if(L===null)xt=!0;else switch(dt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(L.$$typeof){case o:case e:xt=!0;break;case _:return xt=L._init,ht(xt(L._payload),it,Et,At,q)}}if(xt)return q=q(L),xt=At===""?"."+ut(L,0):At,D(q)?(Et="",xt!=null&&(Et=xt.replace(F,"$&/")+"/"),ht(q,it,Et,"",function(Kt){return Kt})):q!=null&&(C(q)&&(q=K(q,Et+(q.key==null||L&&L.key===q.key?"":(""+q.key).replace(F,"$&/")+"/")+xt)),it.push(q)),1;xt=0;var Tt=At===""?".":At+":";if(D(L))for(var Rt=0;Rt<L.length;Rt++)At=L[Rt],dt=Tt+ut(At,Rt),xt+=ht(At,it,Et,dt,q);else if(Rt=S(L),typeof Rt=="function")for(L=Rt.call(L),Rt=0;!(At=L.next()).done;)At=At.value,dt=Tt+ut(At,Rt++),xt+=ht(At,it,Et,dt,q);else if(dt==="object"){if(typeof L.then=="function")return ht(mt(L),it,Et,At,q);throw it=String(L),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return xt}function X(L,it,Et){if(L==null)return L;var At=[],q=0;return ht(L,At,"","",function(dt){return it.call(Et,dt,q++)}),At}function rt(L){if(L._status===-1){var it=L._result;it=it(),it.then(function(Et){(L._status===0||L._status===-1)&&(L._status=1,L._result=Et)},function(Et){(L._status===0||L._status===-1)&&(L._status=2,L._result=Et)}),L._status===-1&&(L._status=0,L._result=it)}if(L._status===1)return L._result.default;throw L._result}var Z=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function St(){}return re.Children={map:X,forEach:function(L,it,Et){X(L,function(){it.apply(this,arguments)},Et)},count:function(L){var it=0;return X(L,function(){it++}),it},toArray:function(L){return X(L,function(it){return it})||[]},only:function(L){if(!C(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},re.Component=M,re.Fragment=i,re.Profiler=l,re.PureComponent=P,re.StrictMode=r,re.Suspense=p,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,re.act=function(){throw Error("act(...) is not supported in production builds of React.")},re.cache=function(L){return function(){return L.apply(null,arguments)}},re.cloneElement=function(L,it,Et){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var At=b({},L.props),q=L.key,dt=void 0;if(it!=null)for(xt in it.ref!==void 0&&(dt=void 0),it.key!==void 0&&(q=""+it.key),it)!I.call(it,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&it.ref===void 0||(At[xt]=it[xt]);var xt=arguments.length-2;if(xt===1)At.children=Et;else if(1<xt){for(var Tt=Array(xt),Rt=0;Rt<xt;Rt++)Tt[Rt]=arguments[Rt+2];At.children=Tt}return B(L.type,q,void 0,void 0,dt,At)},re.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},re.createElement=function(L,it,Et){var At,q={},dt=null;if(it!=null)for(At in it.key!==void 0&&(dt=""+it.key),it)I.call(it,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(q[At]=it[At]);var xt=arguments.length-2;if(xt===1)q.children=Et;else if(1<xt){for(var Tt=Array(xt),Rt=0;Rt<xt;Rt++)Tt[Rt]=arguments[Rt+2];q.children=Tt}if(L&&L.defaultProps)for(At in xt=L.defaultProps,xt)q[At]===void 0&&(q[At]=xt[At]);return B(L,dt,void 0,void 0,null,q)},re.createRef=function(){return{current:null}},re.forwardRef=function(L){return{$$typeof:d,render:L}},re.isValidElement=C,re.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:rt}},re.memo=function(L,it){return{$$typeof:m,type:L,compare:it===void 0?null:it}},re.startTransition=function(L){var it=H.T,Et={};H.T=Et;try{var At=L(),q=H.S;q!==null&&q(Et,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(St,Z)}catch(dt){Z(dt)}finally{H.T=it}},re.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},re.use=function(L){return H.H.use(L)},re.useActionState=function(L,it,Et){return H.H.useActionState(L,it,Et)},re.useCallback=function(L,it){return H.H.useCallback(L,it)},re.useContext=function(L){return H.H.useContext(L)},re.useDebugValue=function(){},re.useDeferredValue=function(L,it){return H.H.useDeferredValue(L,it)},re.useEffect=function(L,it){return H.H.useEffect(L,it)},re.useId=function(){return H.H.useId()},re.useImperativeHandle=function(L,it,Et){return H.H.useImperativeHandle(L,it,Et)},re.useInsertionEffect=function(L,it){return H.H.useInsertionEffect(L,it)},re.useLayoutEffect=function(L,it){return H.H.useLayoutEffect(L,it)},re.useMemo=function(L,it){return H.H.useMemo(L,it)},re.useOptimistic=function(L,it){return H.H.useOptimistic(L,it)},re.useReducer=function(L,it,Et){return H.H.useReducer(L,it,Et)},re.useRef=function(L){return H.H.useRef(L)},re.useState=function(L){return H.H.useState(L)},re.useSyncExternalStore=function(L,it,Et){return H.H.useSyncExternalStore(L,it,Et)},re.useTransition=function(){return H.H.useTransition()},re.version="19.0.0",re}var P_;function nd(){return P_||(P_=1,Uf.exports=Ex()),Uf.exports}var fu=nd(),Lf={exports:{}},mo={},Nf={exports:{}},Of={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_;function Tx(){return z_||(z_=1,function(o){function e(X,rt){var Z=X.length;X.push(rt);t:for(;0<Z;){var St=Z-1>>>1,L=X[St];if(0<l(L,rt))X[St]=rt,X[Z]=L,Z=St;else break t}}function i(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var rt=X[0],Z=X.pop();if(Z!==rt){X[0]=Z;t:for(var St=0,L=X.length,it=L>>>1;St<it;){var Et=2*(St+1)-1,At=X[Et],q=Et+1,dt=X[q];if(0>l(At,Z))q<L&&0>l(dt,At)?(X[St]=dt,X[q]=Z,St=q):(X[St]=At,X[Et]=Z,St=Et);else if(q<L&&0>l(dt,Z))X[St]=dt,X[q]=Z,St=q;else break t}}return rt}function l(X,rt){var Z=X.sortIndex-rt.sortIndex;return Z!==0?Z:X.id-rt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],_=1,v=null,S=3,y=!1,b=!1,w=!1,M=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function O(X){for(var rt=i(m);rt!==null;){if(rt.callback===null)r(m);else if(rt.startTime<=X)r(m),rt.sortIndex=rt.expirationTime,e(p,rt);else break;rt=i(m)}}function D(X){if(w=!1,O(X),!b)if(i(p)!==null)b=!0,mt();else{var rt=i(m);rt!==null&&ht(D,rt.startTime-X)}}var H=!1,I=-1,B=5,K=-1;function C(){return!(o.unstable_now()-K<B)}function R(){if(H){var X=o.unstable_now();K=X;var rt=!0;try{t:{b=!1,w&&(w=!1,g(I),I=-1),y=!0;var Z=S;try{e:{for(O(X),v=i(p);v!==null&&!(v.expirationTime>X&&C());){var St=v.callback;if(typeof St=="function"){v.callback=null,S=v.priorityLevel;var L=St(v.expirationTime<=X);if(X=o.unstable_now(),typeof L=="function"){v.callback=L,O(X),rt=!0;break e}v===i(p)&&r(p),O(X)}else r(p);v=i(p)}if(v!==null)rt=!0;else{var it=i(m);it!==null&&ht(D,it.startTime-X),rt=!1}}break t}finally{v=null,S=Z,y=!1}rt=void 0}}finally{rt?F():H=!1}}}var F;if(typeof P=="function")F=function(){P(R)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,at=ut.port2;ut.port1.onmessage=R,F=function(){at.postMessage(null)}}else F=function(){M(R,0)};function mt(){H||(H=!0,F())}function ht(X,rt){I=M(function(){X(o.unstable_now())},rt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(X){X.callback=null},o.unstable_continueExecution=function(){b||y||(b=!0,mt())},o.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<X?Math.floor(1e3/X):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_getFirstCallbackNode=function(){return i(p)},o.unstable_next=function(X){switch(S){case 1:case 2:case 3:var rt=3;break;default:rt=S}var Z=S;S=rt;try{return X()}finally{S=Z}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(X,rt){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var Z=S;S=X;try{return rt()}finally{S=Z}},o.unstable_scheduleCallback=function(X,rt,Z){var St=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?St+Z:St):Z=St,X){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Z+L,X={id:_++,callback:rt,priorityLevel:X,startTime:Z,expirationTime:L,sortIndex:-1},Z>St?(X.sortIndex=Z,e(m,X),i(p)===null&&X===i(m)&&(w?(g(I),I=-1):w=!0,ht(D,Z-St))):(X.sortIndex=L,e(p,X),b||y||(b=!0,mt())),X},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(X){var rt=S;return function(){var Z=S;S=rt;try{return X.apply(this,arguments)}finally{S=Z}}}}(Of)),Of}var B_;function bx(){return B_||(B_=1,Nf.exports=Tx()),Nf.exports}var Pf={exports:{}},Mn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_;function Ax(){if(F_)return Mn;F_=1;var o=nd();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Mn.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,_)},Mn.flushSync=function(p){var m=h.T,_=r.p;try{if(h.T=null,r.p=2,p)return p()}finally{h.T=m,r.p=_,r.d.f()}},Mn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Mn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Mn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,v=d(_,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,y=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:y}):_==="script"&&r.d.X(p,{crossOrigin:v,integrity:S,fetchPriority:y,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Mn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Mn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,v=d(_,m.crossOrigin);r.d.L(p,_,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Mn.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Mn.requestFormReset=function(p){r.d.r(p)},Mn.unstable_batchedUpdates=function(p,m){return p(m)},Mn.useFormState=function(p,m,_){return h.H.useFormState(p,m,_)},Mn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Mn.version="19.0.0",Mn}var I_;function Rx(){if(I_)return Pf.exports;I_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Pf.exports=Ax(),Pf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_;function Cx(){if(H_)return mo;H_=1;var o=bx(),e=nd(),i=Rx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var c=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),S=Symbol.for("react.consumer"),y=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),D=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function I(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var B=Symbol.for("react.client.reference");function K(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===B?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case p:return"Fragment";case d:return"Portal";case _:return"Profiler";case m:return"StrictMode";case w:return"Suspense";case M:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case y:return(t.displayName||"Context")+".Provider";case S:return(t._context.displayName||"Context")+".Consumer";case b:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case g:return n=t.displayName||null,n!==null?n:K(t.type)||"Memo";case P:n=t._payload,t=t._init;try{return K(t(n))}catch{}}return null}var C=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=Object.assign,F,ut;function at(t){if(F===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);F=n&&n[1]||"",ut=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+F+t+ut}var mt=!1;function ht(t,n){if(!t||mt)return"";mt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(ot){var nt=ot}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(ot){nt=ot}t.call(gt.prototype)}}else{try{throw Error()}catch(ot){nt=ot}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(ot){if(ot&&nt&&typeof ot.stack=="string")return[ot.stack,nt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],T=f[1];if(x&&T){var N=x.split(`
`),V=T.split(`
`);for(u=s=0;s<N.length&&!N[s].includes("DetermineComponentFrameRoot");)s++;for(;u<V.length&&!V[u].includes("DetermineComponentFrameRoot");)u++;if(s===N.length||u===V.length)for(s=N.length-1,u=V.length-1;1<=s&&0<=u&&N[s]!==V[u];)u--;for(;1<=s&&0<=u;s--,u--)if(N[s]!==V[u]){if(s!==1||u!==1)do if(s--,u--,0>u||N[s]!==V[u]){var lt=`
`+N[s].replace(" at new "," at ");return t.displayName&&lt.includes("<anonymous>")&&(lt=lt.replace("<anonymous>",t.displayName)),lt}while(1<=s&&0<=u);break}}}finally{mt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?at(a):""}function X(t){switch(t.tag){case 26:case 27:case 5:return at(t.type);case 16:return at("Lazy");case 13:return at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return t=ht(t.type,!1),t;case 11:return t=ht(t.type.render,!1),t;case 1:return t=ht(t.type,!0),t;default:return""}}function rt(t){try{var n="";do n+=X(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Z(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function St(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function L(t){if(Z(t)!==t)throw Error(r(188))}function it(t){var n=t.alternate;if(!n){if(n=Z(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return L(u),t;if(f===s)return L(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var x=!1,T=u.child;T;){if(T===a){x=!0,a=u,s=f;break}if(T===s){x=!0,s=u,a=f;break}T=T.sibling}if(!x){for(T=f.child;T;){if(T===a){x=!0,a=f,s=u;break}if(T===s){x=!0,s=f,a=u;break}T=T.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function Et(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=Et(t),n!==null)return n;t=t.sibling}return null}var At=Array.isArray,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt={pending:!1,data:null,method:null,action:null},xt=[],Tt=-1;function Rt(t){return{current:t}}function Kt(t){0>Tt||(t.current=xt[Tt],xt[Tt]=null,Tt--)}function Pt(t,n){Tt++,xt[Tt]=t.current,t.current=n}var Se=Rt(null),Ae=Rt(null),ie=Rt(null),z=Rt(null);function pn(t,n){switch(Pt(ie,n),Pt(Ae,t),Pt(Se,null),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?o_(n):0;break;default:if(t=t===8?n.parentNode:n,n=t.tagName,t=t.namespaceURI)t=o_(t),n=l_(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Kt(Se),Pt(Se,n)}function oe(){Kt(Se),Kt(Ae),Kt(ie)}function ce(t){t.memoizedState!==null&&Pt(z,t);var n=Se.current,a=l_(n,t.type);n!==a&&(Pt(Ae,t),Pt(Se,a))}function kt(t){Ae.current===t&&(Kt(Se),Kt(Ae)),z.current===t&&(Kt(z),lo._currentValue=dt)}var Re=Object.prototype.hasOwnProperty,Xt=o.unstable_scheduleCallback,U=o.unstable_cancelCallback,E=o.unstable_shouldYield,$=o.unstable_requestPaint,ct=o.unstable_now,vt=o.unstable_getCurrentPriorityLevel,ft=o.unstable_ImmediatePriority,Ht=o.unstable_UserBlockingPriority,wt=o.unstable_NormalPriority,zt=o.unstable_LowPriority,de=o.unstable_IdlePriority,yt=o.log,Bt=o.unstable_setDisableYieldValue,jt=null,Gt=null;function Ft(t){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(jt,t,void 0,(t.current.flags&128)===128)}catch{}}function ae(t){if(typeof yt=="function"&&Bt(t),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(jt,t)}catch{}}var Yt=Math.clz32?Math.clz32:Lt,we=Math.log,k=Math.LN2;function Lt(t){return t>>>=0,t===0?32:31-(we(t)/k|0)|0}var st=128,_t=4194304;function Ct(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Dt(t,n){var a=t.pendingLanes;if(a===0)return 0;var s=0,u=t.suspendedLanes,f=t.pingedLanes,x=t.warmLanes;t=t.finishedLanes!==0;var T=a&134217727;return T!==0?(a=T&~u,a!==0?s=Ct(a):(f&=T,f!==0?s=Ct(f):t||(x=T&~x,x!==0&&(s=Ct(x))))):(T=a&~u,T!==0?s=Ct(T):f!==0?s=Ct(f):t||(x=a&~x,x!==0&&(s=Ct(x)))),s===0?0:n!==0&&n!==s&&(n&u)===0&&(u=s&-s,x=n&-n,u>=x||u===32&&(x&4194176)!==0)?n:s}function $t(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function He(t,n){switch(t){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tn(){var t=st;return st<<=1,(st&4194176)===0&&(st=128),t}function Me(){var t=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),t}function Tn(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function bn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Po(t,n,a,s,u,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,N=t.expirationTimes,V=t.hiddenUpdates;for(a=x&~a;0<a;){var lt=31-Yt(a),gt=1<<lt;T[lt]=0,N[lt]=-1;var nt=V[lt];if(nt!==null)for(V[lt]=null,lt=0;lt<nt.length;lt++){var ot=nt[lt];ot!==null&&(ot.lane&=-536870913)}a&=~gt}s!==0&&xs(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function xs(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Yt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194218}function vi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Yt(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function gr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ss(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:A_(t.type))}function zo(t,n){var a=q.p;try{return q.p=t,n()}finally{q.p=a}}var In=Math.random().toString(36).slice(2),en="__reactFiber$"+In,nn="__reactProps$"+In,Di="__reactContainer$"+In,vr="__reactEvents$"+In,Ru="__reactListeners$"+In,Cu="__reactHandles$"+In,Bo="__reactResources$"+In,Ba="__reactMarker$"+In;function Ms(t){delete t[en],delete t[nn],delete t[vr],delete t[Ru],delete t[Cu]}function Ui(t){var n=t[en];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Di]||a[en]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=f_(t);t!==null;){if(a=t[en])return a;t=f_(t)}return n}t=a,a=t.parentNode}return null}function A(t){if(t=t[en]||t[Di]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function W(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function et(t){var n=t[Bo];return n||(n=t[Bo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Q(t){t[Ba]=!0}var Y=new Set,Mt={};function bt(t,n){Ot(t,n),Ot(t+"Capture",n)}function Ot(t,n){for(Mt[t]=n,t=0;t<n.length;t++)Y.add(n[t])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jt={},qt={};function pe(t){return Re.call(qt,t)?!0:Re.call(Jt,t)?!1:te.test(t)?qt[t]=!0:(Jt[t]=!0,!1)}function me(t,n,a){if(pe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ie(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ye(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function ee(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function an(t){var n=Zt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){s=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function _e(t){t._valueTracker||(t._valueTracker=an(t))}function Ln(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Zt(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function si(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var An=/[\n"\\]/g;function un(t){return t.replace(An,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function De(t,n,a,s,u,f,x,T){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ee(n)):t.value!==""+ee(n)&&(t.value=""+ee(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?xn(t,x,ee(n)):a!=null?xn(t,x,ee(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ee(T):t.removeAttribute("name")}function Rn(t,n,a,s,u,f,x,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ee(a):"",n=n!=null?""+ee(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x)}function xn(t,n,a){n==="number"&&si(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ke(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ee(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function mn(t,n,a){if(n!=null&&(n=""+ee(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ee(a):""}function xr(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(At(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ee(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function Nn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var vv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function md(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||vv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function _d(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&md(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&md(t,f,n[f])}function wu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fo(t){return Sv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Du=null;function Uu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sr=null,Mr=null;function gd(t){var n=A(t);if(n&&(t=n.stateNode)){var a=t[nn]||null;t:switch(t=n.stateNode,n.type){case"input":if(De(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+un(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[nn]||null;if(!u)throw Error(r(90));De(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Ln(s)}break t;case"textarea":mn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ke(t,!!a.multiple,n,!1)}}}var Lu=!1;function vd(t,n,a){if(Lu)return t(n,a);Lu=!0;try{var s=t(n);return s}finally{if(Lu=!1,(Sr!==null||Mr!==null)&&(Ml(),Sr&&(n=Sr,t=Mr,Mr=Sr=null,gd(n),t)))for(n=0;n<t.length;n++)gd(t[n])}}function ys(t,n){var a=t.stateNode;if(a===null)return null;var s=a[nn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Nu=!1;if(Nt)try{var Es={};Object.defineProperty(Es,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",Es,Es),window.removeEventListener("test",Es,Es)}catch{Nu=!1}var aa=null,Ou=null,Io=null;function xd(){if(Io)return Io;var t,n=Ou,a=n.length,s,u="value"in aa?aa.value:aa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var x=a-t;for(s=1;s<=x&&n[a-s]===u[f-s];s++);return Io=u.slice(t,1<s?1-s:void 0)}function Ho(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Go(){return!0}function Sd(){return!1}function On(t){function n(a,s,u,f,x){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Go:Sd,this.isPropagationStopped=Sd,this}return R(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Go)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Go)},persist:function(){},isPersistent:Go}),n}var Fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vo=On(Fa),Ts=R({},Fa,{view:0,detail:0}),Mv=On(Ts),Pu,zu,bs,ko=R({},Ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bs&&(bs&&t.type==="mousemove"?(Pu=t.screenX-bs.screenX,zu=t.screenY-bs.screenY):zu=Pu=0,bs=t),Pu)},movementY:function(t){return"movementY"in t?t.movementY:zu}}),Md=On(ko),yv=R({},ko,{dataTransfer:0}),Ev=On(yv),Tv=R({},Ts,{relatedTarget:0}),Bu=On(Tv),bv=R({},Fa,{animationName:0,elapsedTime:0,pseudoElement:0}),Av=On(bv),Rv=R({},Fa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cv=On(Rv),wv=R({},Fa,{data:0}),yd=On(wv),Dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Lv[t])?!!n[t]:!1}function Fu(){return Nv}var Ov=R({},Ts,{key:function(t){if(t.key){var n=Dv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ho(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Uv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fu,charCode:function(t){return t.type==="keypress"?Ho(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ho(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Pv=On(Ov),zv=R({},ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ed=On(zv),Bv=R({},Ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fu}),Fv=On(Bv),Iv=R({},Fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hv=On(Iv),Gv=R({},ko,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vv=On(Gv),kv=R({},Fa,{newState:0,oldState:0}),Xv=On(kv),Wv=[9,13,27,32],Iu=Nt&&"CompositionEvent"in window,As=null;Nt&&"documentMode"in document&&(As=document.documentMode);var qv=Nt&&"TextEvent"in window&&!As,Td=Nt&&(!Iu||As&&8<As&&11>=As),bd=" ",Ad=!1;function Rd(t,n){switch(t){case"keyup":return Wv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yr=!1;function Yv(t,n){switch(t){case"compositionend":return Cd(n);case"keypress":return n.which!==32?null:(Ad=!0,bd);case"textInput":return t=n.data,t===bd&&Ad?null:t;default:return null}}function Zv(t,n){if(yr)return t==="compositionend"||!Iu&&Rd(t,n)?(t=xd(),Io=Ou=aa=null,yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Td&&n.locale!=="ko"?null:n.data;default:return null}}var jv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!jv[t.type]:n==="textarea"}function Dd(t,n,a,s){Sr?Mr?Mr.push(s):Mr=[s]:Sr=s,n=Al(n,"onChange"),0<n.length&&(a=new Vo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Rs=null,Cs=null;function Kv(t){n_(t,0)}function Xo(t){var n=W(t);if(Ln(n))return t}function Ud(t,n){if(t==="change")return n}var Ld=!1;if(Nt){var Hu;if(Nt){var Gu="oninput"in document;if(!Gu){var Nd=document.createElement("div");Nd.setAttribute("oninput","return;"),Gu=typeof Nd.oninput=="function"}Hu=Gu}else Hu=!1;Ld=Hu&&(!document.documentMode||9<document.documentMode)}function Od(){Rs&&(Rs.detachEvent("onpropertychange",Pd),Cs=Rs=null)}function Pd(t){if(t.propertyName==="value"&&Xo(Cs)){var n=[];Dd(n,Cs,t,Uu(t)),vd(Kv,n)}}function Qv(t,n,a){t==="focusin"?(Od(),Rs=n,Cs=a,Rs.attachEvent("onpropertychange",Pd)):t==="focusout"&&Od()}function Jv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xo(Cs)}function $v(t,n){if(t==="click")return Xo(n)}function t0(t,n){if(t==="input"||t==="change")return Xo(n)}function e0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Hn=typeof Object.is=="function"?Object.is:e0;function ws(t,n){if(Hn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Re.call(n,u)||!Hn(t[u],n[u]))return!1}return!0}function zd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bd(t,n){var a=zd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=zd(a)}}function Fd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Fd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Id(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=si(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=si(t.document)}return n}function Vu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function n0(t,n){var a=Id(n);n=t.focusedElem;var s=t.selectionRange;if(a!==n&&n&&n.ownerDocument&&Fd(n.ownerDocument.documentElement,n)){if(s!==null&&Vu(n)){if(t=s.start,a=s.end,a===void 0&&(a=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(a,n.value.length);else if(a=(t=n.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var u=n.textContent.length,f=Math.min(s.start,u);s=s.end===void 0?f:Math.min(s.end,u),!a.extend&&f>s&&(u=s,s=f,f=u),u=Bd(n,f);var x=Bd(n,s);u&&x&&(a.rangeCount!==1||a.anchorNode!==u.node||a.anchorOffset!==u.offset||a.focusNode!==x.node||a.focusOffset!==x.offset)&&(t=t.createRange(),t.setStart(u.node,u.offset),a.removeAllRanges(),f>s?(a.addRange(t),a.extend(x.node,x.offset)):(t.setEnd(x.node,x.offset),a.addRange(t)))}}for(t=[],a=n;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)a=t[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var i0=Nt&&"documentMode"in document&&11>=document.documentMode,Er=null,ku=null,Ds=null,Xu=!1;function Hd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xu||Er==null||Er!==si(s)||(s=Er,"selectionStart"in s&&Vu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ds&&ws(Ds,s)||(Ds=s,s=Al(ku,"onSelect"),0<s.length&&(n=new Vo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Er)))}function Ia(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Tr={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionrun:Ia("Transition","TransitionRun"),transitionstart:Ia("Transition","TransitionStart"),transitioncancel:Ia("Transition","TransitionCancel"),transitionend:Ia("Transition","TransitionEnd")},Wu={},Gd={};Nt&&(Gd=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Ha(t){if(Wu[t])return Wu[t];if(!Tr[t])return t;var n=Tr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Gd)return Wu[t]=n[a];return t}var Vd=Ha("animationend"),kd=Ha("animationiteration"),Xd=Ha("animationstart"),a0=Ha("transitionrun"),r0=Ha("transitionstart"),s0=Ha("transitioncancel"),Wd=Ha("transitionend"),qd=new Map,Yd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function oi(t,n){qd.set(t,n),bt(n,[t])}var Yn=[],br=0,qu=0;function Wo(){for(var t=br,n=qu=br=0;n<t;){var a=Yn[n];Yn[n++]=null;var s=Yn[n];Yn[n++]=null;var u=Yn[n];Yn[n++]=null;var f=Yn[n];if(Yn[n++]=null,s!==null&&u!==null){var x=s.pending;x===null?u.next=u:(u.next=x.next,x.next=u),s.pending=u}f!==0&&Zd(a,u,f)}}function qo(t,n,a,s){Yn[br++]=t,Yn[br++]=n,Yn[br++]=a,Yn[br++]=s,qu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Yu(t,n,a,s){return qo(t,n,a,s),Yo(t)}function ra(t,n){return qo(t,null,null,n),Yo(t)}function Zd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;u&&n!==null&&t.tag===3&&(f=t.stateNode,u=31-Yt(a),f=f.hiddenUpdates,t=f[u],t===null?f[u]=[n]:t.push(n),n.lane=a|536870912)}function Yo(t){if(50<eo)throw eo=0,$c=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ar={},jd=new WeakMap;function Zn(t,n){if(typeof t=="object"&&t!==null){var a=jd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:rt(n)},jd.set(t,n),n)}return{value:t,source:n,stack:rt(n)}}var Rr=[],Cr=0,Zo=null,jo=0,jn=[],Kn=0,Ga=null,Li=1,Ni="";function Va(t,n){Rr[Cr++]=jo,Rr[Cr++]=Zo,Zo=t,jo=n}function Kd(t,n,a){jn[Kn++]=Li,jn[Kn++]=Ni,jn[Kn++]=Ga,Ga=t;var s=Li;t=Ni;var u=32-Yt(s)-1;s&=~(1<<u),a+=1;var f=32-Yt(n)+u;if(30<f){var x=u-u%5;f=(s&(1<<x)-1).toString(32),s>>=x,u-=x,Li=1<<32-Yt(n)+u|a<<u|s,Ni=f+t}else Li=1<<f|a<<u|s,Ni=t}function Zu(t){t.return!==null&&(Va(t,1),Kd(t,1,0))}function ju(t){for(;t===Zo;)Zo=Rr[--Cr],Rr[Cr]=null,jo=Rr[--Cr],Rr[Cr]=null;for(;t===Ga;)Ga=jn[--Kn],jn[Kn]=null,Ni=jn[--Kn],jn[Kn]=null,Li=jn[--Kn],jn[Kn]=null}var Cn=null,_n=null,Ee=!1,li=null,xi=!1,Ku=Error(r(519));function ka(t){var n=Error(r(418,""));throw Ns(Zn(n,t)),Ku}function Qd(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[en]=t,n[nn]=s,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<io.length;a++)ge(io[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Rn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),_e(n);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),xr(n,s.value,s.defaultValue,s.children),_e(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||s_(n.textContent,a)?(s.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),s.onScroll!=null&&ge("scroll",n),s.onScrollEnd!=null&&ge("scrollend",n),s.onClick!=null&&(n.onclick=Rl),n=!0):n=!1,n||ka(t)}function Jd(t){for(Cn=t.return;Cn;)switch(Cn.tag){case 3:case 27:xi=!0;return;case 5:case 13:xi=!1;return;default:Cn=Cn.return}}function Us(t){if(t!==Cn)return!1;if(!Ee)return Jd(t),Ee=!0,!1;var n=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||gf(t.type,t.memoizedProps)),a=!a),a&&(n=!0),n&&_n&&ka(t),Jd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){_n=ci(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}_n=null}}else _n=Cn?ci(t.stateNode.nextSibling):null;return!0}function Ls(){_n=Cn=null,Ee=!1}function Ns(t){li===null?li=[t]:li.push(t)}var Os=Error(r(460)),$d=Error(r(474)),Qu={then:function(){}};function tp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ko(){}function ep(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ko,Ko),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===Os?Error(r(483)):t;default:if(typeof n.status=="string")n.then(Ko,Ko);else{if(t=Be,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===Os?Error(r(483)):t}throw Ps=n,Os}}var Ps=null;function np(){if(Ps===null)throw Error(r(459));var t=Ps;return Ps=null,t}var wr=null,zs=0;function Qo(t){var n=zs;return zs+=1,wr===null&&(wr=[]),ep(wr,t,n)}function Bs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Jo(t,n){throw n.$$typeof===c?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function ip(t){var n=t._init;return n(t._payload)}function ap(t){function n(j,G){if(t){var J=j.deletions;J===null?(j.deletions=[G],j.flags|=16):J.push(G)}}function a(j,G){if(!t)return null;for(;G!==null;)n(j,G),G=G.sibling;return null}function s(j){for(var G=new Map;j!==null;)j.key!==null?G.set(j.key,j):G.set(j.index,j),j=j.sibling;return G}function u(j,G){return j=ga(j,G),j.index=0,j.sibling=null,j}function f(j,G,J){return j.index=J,t?(J=j.alternate,J!==null?(J=J.index,J<G?(j.flags|=33554434,G):J):(j.flags|=33554434,G)):(j.flags|=1048576,G)}function x(j){return t&&j.alternate===null&&(j.flags|=33554434),j}function T(j,G,J,pt){return G===null||G.tag!==6?(G=Wc(J,j.mode,pt),G.return=j,G):(G=u(G,J),G.return=j,G)}function N(j,G,J,pt){var It=J.type;return It===p?lt(j,G,J.props.children,pt,J.key):G!==null&&(G.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===P&&ip(It)===G.type)?(G=u(G,J.props),Bs(G,J),G.return=j,G):(G=_l(J.type,J.key,J.props,null,j.mode,pt),Bs(G,J),G.return=j,G)}function V(j,G,J,pt){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=qc(J,j.mode,pt),G.return=j,G):(G=u(G,J.children||[]),G.return=j,G)}function lt(j,G,J,pt,It){return G===null||G.tag!==7?(G=$a(J,j.mode,pt,It),G.return=j,G):(G=u(G,J),G.return=j,G)}function gt(j,G,J){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Wc(""+G,j.mode,J),G.return=j,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case h:return J=_l(G.type,G.key,G.props,null,j.mode,J),Bs(J,G),J.return=j,J;case d:return G=qc(G,j.mode,J),G.return=j,G;case P:var pt=G._init;return G=pt(G._payload),gt(j,G,J)}if(At(G)||I(G))return G=$a(G,j.mode,J,null),G.return=j,G;if(typeof G.then=="function")return gt(j,Qo(G),J);if(G.$$typeof===y)return gt(j,dl(j,G),J);Jo(j,G)}return null}function nt(j,G,J,pt){var It=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return It!==null?null:T(j,G,""+J,pt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case h:return J.key===It?N(j,G,J,pt):null;case d:return J.key===It?V(j,G,J,pt):null;case P:return It=J._init,J=It(J._payload),nt(j,G,J,pt)}if(At(J)||I(J))return It!==null?null:lt(j,G,J,pt,null);if(typeof J.then=="function")return nt(j,G,Qo(J),pt);if(J.$$typeof===y)return nt(j,G,dl(j,J),pt);Jo(j,J)}return null}function ot(j,G,J,pt,It){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return j=j.get(J)||null,T(G,j,""+pt,It);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case h:return j=j.get(pt.key===null?J:pt.key)||null,N(G,j,pt,It);case d:return j=j.get(pt.key===null?J:pt.key)||null,V(G,j,pt,It);case P:var fe=pt._init;return pt=fe(pt._payload),ot(j,G,J,pt,It)}if(At(pt)||I(pt))return j=j.get(J)||null,lt(G,j,pt,It,null);if(typeof pt.then=="function")return ot(j,G,J,Qo(pt),It);if(pt.$$typeof===y)return ot(j,G,J,dl(G,pt),It);Jo(G,pt)}return null}function Vt(j,G,J,pt){for(var It=null,fe=null,Wt=G,Qt=G=0,hn=null;Wt!==null&&Qt<J.length;Qt++){Wt.index>Qt?(hn=Wt,Wt=null):hn=Wt.sibling;var Te=nt(j,Wt,J[Qt],pt);if(Te===null){Wt===null&&(Wt=hn);break}t&&Wt&&Te.alternate===null&&n(j,Wt),G=f(Te,G,Qt),fe===null?It=Te:fe.sibling=Te,fe=Te,Wt=hn}if(Qt===J.length)return a(j,Wt),Ee&&Va(j,Qt),It;if(Wt===null){for(;Qt<J.length;Qt++)Wt=gt(j,J[Qt],pt),Wt!==null&&(G=f(Wt,G,Qt),fe===null?It=Wt:fe.sibling=Wt,fe=Wt);return Ee&&Va(j,Qt),It}for(Wt=s(Wt);Qt<J.length;Qt++)hn=ot(Wt,j,Qt,J[Qt],pt),hn!==null&&(t&&hn.alternate!==null&&Wt.delete(hn.key===null?Qt:hn.key),G=f(hn,G,Qt),fe===null?It=hn:fe.sibling=hn,fe=hn);return t&&Wt.forEach(function(Ta){return n(j,Ta)}),Ee&&Va(j,Qt),It}function ne(j,G,J,pt){if(J==null)throw Error(r(151));for(var It=null,fe=null,Wt=G,Qt=G=0,hn=null,Te=J.next();Wt!==null&&!Te.done;Qt++,Te=J.next()){Wt.index>Qt?(hn=Wt,Wt=null):hn=Wt.sibling;var Ta=nt(j,Wt,Te.value,pt);if(Ta===null){Wt===null&&(Wt=hn);break}t&&Wt&&Ta.alternate===null&&n(j,Wt),G=f(Ta,G,Qt),fe===null?It=Ta:fe.sibling=Ta,fe=Ta,Wt=hn}if(Te.done)return a(j,Wt),Ee&&Va(j,Qt),It;if(Wt===null){for(;!Te.done;Qt++,Te=J.next())Te=gt(j,Te.value,pt),Te!==null&&(G=f(Te,G,Qt),fe===null?It=Te:fe.sibling=Te,fe=Te);return Ee&&Va(j,Qt),It}for(Wt=s(Wt);!Te.done;Qt++,Te=J.next())Te=ot(Wt,j,Qt,Te.value,pt),Te!==null&&(t&&Te.alternate!==null&&Wt.delete(Te.key===null?Qt:Te.key),G=f(Te,G,Qt),fe===null?It=Te:fe.sibling=Te,fe=Te);return t&&Wt.forEach(function(Sx){return n(j,Sx)}),Ee&&Va(j,Qt),It}function qe(j,G,J,pt){if(typeof J=="object"&&J!==null&&J.type===p&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case h:t:{for(var It=J.key;G!==null;){if(G.key===It){if(It=J.type,It===p){if(G.tag===7){a(j,G.sibling),pt=u(G,J.props.children),pt.return=j,j=pt;break t}}else if(G.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===P&&ip(It)===G.type){a(j,G.sibling),pt=u(G,J.props),Bs(pt,J),pt.return=j,j=pt;break t}a(j,G);break}else n(j,G);G=G.sibling}J.type===p?(pt=$a(J.props.children,j.mode,pt,J.key),pt.return=j,j=pt):(pt=_l(J.type,J.key,J.props,null,j.mode,pt),Bs(pt,J),pt.return=j,j=pt)}return x(j);case d:t:{for(It=J.key;G!==null;){if(G.key===It)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){a(j,G.sibling),pt=u(G,J.children||[]),pt.return=j,j=pt;break t}else{a(j,G);break}else n(j,G);G=G.sibling}pt=qc(J,j.mode,pt),pt.return=j,j=pt}return x(j);case P:return It=J._init,J=It(J._payload),qe(j,G,J,pt)}if(At(J))return Vt(j,G,J,pt);if(I(J)){if(It=I(J),typeof It!="function")throw Error(r(150));return J=It.call(J),ne(j,G,J,pt)}if(typeof J.then=="function")return qe(j,G,Qo(J),pt);if(J.$$typeof===y)return qe(j,G,dl(j,J),pt);Jo(j,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,G!==null&&G.tag===6?(a(j,G.sibling),pt=u(G,J),pt.return=j,j=pt):(a(j,G),pt=Wc(J,j.mode,pt),pt.return=j,j=pt),x(j)):a(j,G)}return function(j,G,J,pt){try{zs=0;var It=qe(j,G,J,pt);return wr=null,It}catch(Wt){if(Wt===Os)throw Wt;var fe=ti(29,Wt,null,j.mode);return fe.lanes=pt,fe.return=j,fe}finally{}}}var Xa=ap(!0),rp=ap(!1),Dr=Rt(null),$o=Rt(0);function sp(t,n){t=Xi,Pt($o,t),Pt(Dr,n),Xi=t|n.baseLanes}function Ju(){Pt($o,Xi),Pt(Dr,Dr.current)}function $u(){Xi=$o.current,Kt(Dr),Kt($o)}var Qn=Rt(null),Si=null;function sa(t){var n=t.alternate;Pt(rn,rn.current&1),Pt(Qn,t),Si===null&&(n===null||Dr.current!==null||n.memoizedState!==null)&&(Si=t)}function op(t){if(t.tag===22){if(Pt(rn,rn.current),Pt(Qn,t),Si===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Si=t)}}else oa()}function oa(){Pt(rn,rn.current),Pt(Qn,Qn.current)}function Oi(t){Kt(Qn),Si===t&&(Si=null),Kt(rn)}var rn=Rt(0);function tl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var o0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},l0=o.unstable_scheduleCallback,u0=o.unstable_NormalPriority,sn={$$typeof:y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tc(){return{controller:new o0,data:new Map,refCount:0}}function Fs(t){t.refCount--,t.refCount===0&&l0(u0,function(){t.controller.abort()})}var Is=null,ec=0,Ur=0,Lr=null;function c0(t,n){if(Is===null){var a=Is=[];ec=0,Ur=lf(),Lr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return ec++,n.then(lp,lp),n}function lp(){if(--ec===0&&Is!==null){Lr!==null&&(Lr.status="fulfilled");var t=Is;Is=null,Ur=0,Lr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function f0(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var up=C.S;C.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&c0(t,n),up!==null&&up(t,n)};var Wa=Rt(null);function nc(){var t=Wa.current;return t!==null?t:Be.pooledCache}function el(t,n){n===null?Pt(Wa,Wa.current):Pt(Wa,n.pool)}function cp(){var t=nc();return t===null?null:{parent:sn._currentValue,pool:t}}var la=0,ue=null,Ue=null,Ke=null,nl=!1,Nr=!1,qa=!1,il=0,Hs=0,Or=null,h0=0;function Ye(){throw Error(r(321))}function ic(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Hn(t[a],n[a]))return!1;return!0}function ac(t,n,a,s,u,f){return la=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,C.H=t===null||t.memoizedState===null?Ya:ua,qa=!1,f=a(s,u),qa=!1,Nr&&(f=hp(n,a,s,u)),fp(t),f}function fp(t){C.H=Mi;var n=Ue!==null&&Ue.next!==null;if(la=0,Ke=Ue=ue=null,nl=!1,Hs=0,Or=null,n)throw Error(r(300));t===null||cn||(t=t.dependencies,t!==null&&hl(t)&&(cn=!0))}function hp(t,n,a,s){ue=t;var u=0;do{if(Nr&&(Or=null),Hs=0,Nr=!1,25<=u)throw Error(r(301));if(u+=1,Ke=Ue=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}C.H=Za,f=n(a,s)}while(Nr);return f}function d0(){var t=C.H,n=t.useState()[0];return n=typeof n.then=="function"?Gs(n):n,t=t.useState()[0],(Ue!==null?Ue.memoizedState:null)!==t&&(ue.flags|=1024),n}function rc(){var t=il!==0;return il=0,t}function sc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function oc(t){if(nl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}nl=!1}la=0,Ke=Ue=ue=null,Nr=!1,Hs=il=0,Or=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?ue.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function Qe(){if(Ue===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var n=Ke===null?ue.memoizedState:Ke.next;if(n!==null)Ke=n,Ue=t;else{if(t===null)throw ue.alternate===null?Error(r(467)):Error(r(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ke===null?ue.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}var al;al=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Gs(t){var n=Hs;return Hs+=1,Or===null&&(Or=[]),t=ep(Or,t,n),n=ue,(Ke===null?n.memoizedState:Ke.next)===null&&(n=n.alternate,C.H=n===null||n.memoizedState===null?Ya:ua),t}function rl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Gs(t);if(t.$$typeof===y)return Sn(t)}throw Error(r(438,String(t)))}function lc(t){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ue.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=al(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=D;return n.index++,a}function Pi(t,n){return typeof n=="function"?n(t):n}function sl(t){var n=Qe();return uc(n,Ue,t)}function uc(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=x=null,N=null,V=n,lt=!1;do{var gt=V.lane&-536870913;if(gt!==V.lane?(xe&gt)===gt:(la&gt)===gt){var nt=V.revertLane;if(nt===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),gt===Ur&&(lt=!0);else if((la&nt)===nt){V=V.next,nt===Ur&&(lt=!0);continue}else gt={lane:0,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},N===null?(T=N=gt,x=f):N=N.next=gt,ue.lanes|=nt,va|=nt;gt=V.action,qa&&a(f,gt),f=V.hasEagerState?V.eagerState:a(f,gt)}else nt={lane:gt,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},N===null?(T=N=nt,x=f):N=N.next=nt,ue.lanes|=gt,va|=gt;V=V.next}while(V!==null&&V!==n);if(N===null?x=f:N.next=T,!Hn(f,t.memoizedState)&&(cn=!0,lt&&(a=Lr,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=N,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function cc(t){var n=Qe(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=t(f,x.action),x=x.next;while(x!==u);Hn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function dp(t,n,a){var s=ue,u=Qe(),f=Ee;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Hn((Ue||u).memoizedState,a);if(x&&(u.memoizedState=a,cn=!0),u=u.queue,dc(_p.bind(null,s,u,t),[t]),u.getSnapshot!==n||x||Ke!==null&&Ke.memoizedState.tag&1){if(s.flags|=2048,Pr(9,mp.bind(null,s,u,a,n),{destroy:void 0},null),Be===null)throw Error(r(349));f||(la&60)!==0||pp(s,n,a)}return a}function pp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=al(),ue.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function mp(t,n,a,s){n.value=a,n.getSnapshot=s,gp(n)&&vp(t)}function _p(t,n,a){return a(function(){gp(n)&&vp(t)})}function gp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Hn(t,a)}catch{return!0}}function vp(t){var n=ra(t,2);n!==null&&wn(n,t,2)}function fc(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),qa){ae(!0);try{a()}finally{ae(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:t},n}function xp(t,n,a,s){return t.baseState=a,uc(t,Ue,typeof s=="function"?s:Pi)}function p0(t,n,a,s,u){if(ul(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};C.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Sp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Sp(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=C.T,x={};C.T=x;try{var T=a(u,s),N=C.S;N!==null&&N(x,T),Mp(t,n,T)}catch(V){hc(t,n,V)}finally{C.T=f}}else try{f=a(u,s),Mp(t,n,f)}catch(V){hc(t,n,V)}}function Mp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){yp(t,n,s)},function(s){return hc(t,n,s)}):yp(t,n,a)}function yp(t,n,a){n.status="fulfilled",n.value=a,Ep(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Sp(t,a)))}function hc(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Ep(n),n=n.next;while(n!==s)}t.action=null}function Ep(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Tp(t,n){return n}function bp(t,n){if(Ee){var a=Be.formState;if(a!==null){t:{var s=ue;if(Ee){if(_n){e:{for(var u=_n,f=xi;u.nodeType!==8;){if(!f){u=null;break e}if(u=ci(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){_n=ci(u.nextSibling),s=u.data==="F!";break t}}ka(s)}s=!1}s&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tp,lastRenderedState:n},a.queue=s,a=kp.bind(null,ue,s),s.dispatch=a,s=fc(!1),f=vc.bind(null,ue,!1,s.queue),s=Pn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=p0.bind(null,ue,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function Ap(t){var n=Qe();return Rp(n,Ue,t)}function Rp(t,n,a){n=uc(t,n,Tp)[0],t=sl(Pi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?Gs(n):n;var s=Qe(),u=s.queue,f=u.dispatch;return a!==s.memoizedState&&(ue.flags|=2048,Pr(9,m0.bind(null,u,a),{destroy:void 0},null)),[n,f,t]}function m0(t,n){t.action=n}function Cp(t){var n=Qe(),a=Ue;if(a!==null)return Rp(n,a,t);Qe(),n=n.memoizedState,a=Qe();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Pr(t,n,a,s){return t={tag:t,create:n,inst:a,deps:s,next:null},n=ue.updateQueue,n===null&&(n=al(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function wp(){return Qe().memoizedState}function ol(t,n,a,s){var u=Pn();ue.flags|=t,u.memoizedState=Pr(1|n,a,{destroy:void 0},s===void 0?null:s)}function ll(t,n,a,s){var u=Qe();s=s===void 0?null:s;var f=u.memoizedState.inst;Ue!==null&&s!==null&&ic(s,Ue.memoizedState.deps)?u.memoizedState=Pr(n,a,f,s):(ue.flags|=t,u.memoizedState=Pr(1|n,a,f,s))}function Dp(t,n){ol(8390656,8,t,n)}function dc(t,n){ll(2048,8,t,n)}function Up(t,n){return ll(4,2,t,n)}function Lp(t,n){return ll(4,4,t,n)}function Np(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Op(t,n,a){a=a!=null?a.concat([t]):null,ll(4,4,Np.bind(null,n,t),a)}function pc(){}function Pp(t,n){var a=Qe();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&ic(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function zp(t,n){var a=Qe();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&ic(n,s[1]))return s[0];if(s=t(),qa){ae(!0);try{t()}finally{ae(!1)}}return a.memoizedState=[s,n],s}function mc(t,n,a){return a===void 0||(la&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Fm(),ue.lanes|=t,va|=t,a)}function Bp(t,n,a,s){return Hn(a,n)?a:Dr.current!==null?(t=mc(t,a,s),Hn(t,n)||(cn=!0),t):(la&42)===0?(cn=!0,t.memoizedState=a):(t=Fm(),ue.lanes|=t,va|=t,n)}function Fp(t,n,a,s,u){var f=q.p;q.p=f!==0&&8>f?f:8;var x=C.T,T={};C.T=T,vc(t,!1,n,a);try{var N=u(),V=C.S;if(V!==null&&V(T,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var lt=f0(N,s);Vs(t,n,lt,Xn(t))}else Vs(t,n,s,Xn(t))}catch(gt){Vs(t,n,{then:function(){},status:"rejected",reason:gt},Xn())}finally{q.p=f,C.T=x}}function _0(){}function _c(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Ip(t).queue;Fp(t,u,n,dt,a===null?_0:function(){return Hp(t),a(s)})}function Ip(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:dt,baseState:dt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:dt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Hp(t){var n=Ip(t).next.queue;Vs(t,n,{},Xn())}function gc(){return Sn(lo)}function Gp(){return Qe().memoizedState}function Vp(){return Qe().memoizedState}function g0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Xn();t=ha(a);var s=da(n,t,a);s!==null&&(wn(s,n,a),Ws(s,n,a)),n={cache:tc()},t.payload=n;return}n=n.return}}function v0(t,n,a){var s=Xn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ul(t)?Xp(n,a):(a=Yu(t,n,a,s),a!==null&&(wn(a,t,s),Wp(a,n,s)))}function kp(t,n,a){var s=Xn();Vs(t,n,a,s)}function Vs(t,n,a,s){var u={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ul(t))Xp(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,T=f(x,a);if(u.hasEagerState=!0,u.eagerState=T,Hn(T,x))return qo(t,n,u,0),Be===null&&Wo(),!1}catch{}finally{}if(a=Yu(t,n,u,s),a!==null)return wn(a,t,s),Wp(a,n,s),!0}return!1}function vc(t,n,a,s){if(s={lane:2,revertLane:lf(),action:s,hasEagerState:!1,eagerState:null,next:null},ul(t)){if(n)throw Error(r(479))}else n=Yu(t,a,s,2),n!==null&&wn(n,t,2)}function ul(t){var n=t.alternate;return t===ue||n!==null&&n===ue}function Xp(t,n){Nr=nl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Wp(t,n,a){if((a&4194176)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,vi(t,a)}}var Mi={readContext:Sn,use:rl,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye};Mi.useCacheRefresh=Ye,Mi.useMemoCache=Ye,Mi.useHostTransitionStatus=Ye,Mi.useFormState=Ye,Mi.useActionState=Ye,Mi.useOptimistic=Ye;var Ya={readContext:Sn,use:rl,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:Sn,useEffect:Dp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ol(4194308,4,Np.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ol(4194308,4,t,n)},useInsertionEffect:function(t,n){ol(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var s=t();if(qa){ae(!0);try{t()}finally{ae(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Pn();if(a!==void 0){var u=a(n);if(qa){ae(!0);try{a(n)}finally{ae(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=v0.bind(null,ue,t),[s.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=fc(t);var n=t.queue,a=kp.bind(null,ue,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:pc,useDeferredValue:function(t,n){var a=Pn();return mc(a,t,n)},useTransition:function(){var t=fc(!1);return t=Fp.bind(null,ue,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ue,u=Pn();if(Ee){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Be===null)throw Error(r(349));(xe&60)!==0||pp(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Dp(_p.bind(null,s,f,t),[t]),s.flags|=2048,Pr(9,mp.bind(null,s,f,a,n),{destroy:void 0},null),a},useId:function(){var t=Pn(),n=Be.identifierPrefix;if(Ee){var a=Ni,s=Li;a=(s&~(1<<32-Yt(s)-1)).toString(32)+a,n=":"+n+"R"+a,a=il++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=h0++,n=":"+n+"r"+a.toString(32)+":";return t.memoizedState=n},useCacheRefresh:function(){return Pn().memoizedState=g0.bind(null,ue)}};Ya.useMemoCache=lc,Ya.useHostTransitionStatus=gc,Ya.useFormState=bp,Ya.useActionState=bp,Ya.useOptimistic=function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=vc.bind(null,ue,!0,a),a.dispatch=n,[t,n]};var ua={readContext:Sn,use:rl,useCallback:Pp,useContext:Sn,useEffect:dc,useImperativeHandle:Op,useInsertionEffect:Up,useLayoutEffect:Lp,useMemo:zp,useReducer:sl,useRef:wp,useState:function(){return sl(Pi)},useDebugValue:pc,useDeferredValue:function(t,n){var a=Qe();return Bp(a,Ue.memoizedState,t,n)},useTransition:function(){var t=sl(Pi)[0],n=Qe().memoizedState;return[typeof t=="boolean"?t:Gs(t),n]},useSyncExternalStore:dp,useId:Gp};ua.useCacheRefresh=Vp,ua.useMemoCache=lc,ua.useHostTransitionStatus=gc,ua.useFormState=Ap,ua.useActionState=Ap,ua.useOptimistic=function(t,n){var a=Qe();return xp(a,Ue,t,n)};var Za={readContext:Sn,use:rl,useCallback:Pp,useContext:Sn,useEffect:dc,useImperativeHandle:Op,useInsertionEffect:Up,useLayoutEffect:Lp,useMemo:zp,useReducer:cc,useRef:wp,useState:function(){return cc(Pi)},useDebugValue:pc,useDeferredValue:function(t,n){var a=Qe();return Ue===null?mc(a,t,n):Bp(a,Ue.memoizedState,t,n)},useTransition:function(){var t=cc(Pi)[0],n=Qe().memoizedState;return[typeof t=="boolean"?t:Gs(t),n]},useSyncExternalStore:dp,useId:Gp};Za.useCacheRefresh=Vp,Za.useMemoCache=lc,Za.useHostTransitionStatus=gc,Za.useFormState=Cp,Za.useActionState=Cp,Za.useOptimistic=function(t,n){var a=Qe();return Ue!==null?xp(a,Ue,t,n):(a.baseState=t,[t,a.queue.dispatch])};function xc(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:R({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Sc={isMounted:function(t){return(t=t._reactInternals)?Z(t)===t:!1},enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Xn(),u=ha(s);u.payload=n,a!=null&&(u.callback=a),n=da(t,u,s),n!==null&&(wn(n,t,s),Ws(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Xn(),u=ha(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=da(t,u,s),n!==null&&(wn(n,t,s),Ws(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Xn(),s=ha(a);s.tag=2,n!=null&&(s.callback=n),n=da(t,s,a),n!==null&&(wn(n,t,a),Ws(n,t,a))}};function qp(t,n,a,s,u,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!ws(a,s)||!ws(u,f):!0}function Yp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Sc.enqueueReplaceState(n,n.state,null)}function ja(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=R({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var cl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Zp(t){cl(t)}function jp(t){console.error(t)}function Kp(t){cl(t)}function fl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Qp(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Mc(t,n,a){return a=ha(a),a.tag=3,a.payload={element:null},a.callback=function(){fl(t,n)},a}function Jp(t){return t=ha(t),t.tag=3,t}function $p(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){Qp(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){Qp(n,a,s),typeof u!="function"&&(xa===null?xa=new Set([this]):xa.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function x0(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Xs(n,a,u,!0),a=Qn.current,a!==null){switch(a.tag){case 13:return Si===null?nf():a.alternate===null&&We===0&&(We=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===Qu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),rf(t,s,u)),!1;case 22:return a.flags|=65536,s===Qu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),rf(t,s,u)),!1}throw Error(r(435,a.tag))}return rf(t,s,u),nf(),!1}if(Ee)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Ku&&(t=Error(r(422),{cause:s}),Ns(Zn(t,a)))):(s!==Ku&&(n=Error(r(423),{cause:s}),Ns(Zn(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=Zn(s,a),u=Mc(t.stateNode,s,u),zc(t,u),We!==4&&(We=2)),!1;var f=Error(r(520),{cause:s});if(f=Zn(f,a),$s===null?$s=[f]:$s.push(f),We!==4&&(We=2),n===null)return!0;s=Zn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Mc(a.stateNode,s,t),zc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(xa===null||!xa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Jp(u),$p(u,t,a,s),zc(a,u),!1}a=a.return}while(a!==null);return!1}var tm=Error(r(461)),cn=!1;function gn(t,n,a,s){n.child=t===null?rp(n,null,a,s):Xa(n,t.child,a,s)}function em(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var x={};for(var T in s)T!=="ref"&&(x[T]=s[T])}else x=s;return Qa(n),s=ac(t,n,a,x,f,u),T=rc(),t!==null&&!cn?(sc(t,n,u),zi(t,n,u)):(Ee&&T&&Zu(n),n.flags|=1,gn(t,n,s,u),n.child)}function nm(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!Xc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,im(t,n,f,s,u)):(t=_l(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Dc(t,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:ws,a(x,s)&&t.ref===n.ref)return zi(t,n,u)}return n.flags|=1,t=ga(f,s),t.ref=n.ref,t.return=n,n.child=t}function im(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(ws(f,s)&&t.ref===n.ref)if(cn=!1,n.pendingProps=s=f,Dc(t,u))(t.flags&131072)!==0&&(cn=!0);else return n.lanes=t.lanes,zi(t,n,u)}return yc(t,n,a,s,u)}function am(t,n,a){var s=n.pendingProps,u=s.children,f=(n.stateNode._pendingVisibility&2)!==0,x=t!==null?t.memoizedState:null;if(ks(t,n),s.mode==="hidden"||f){if((n.flags&128)!==0){if(s=x!==null?x.baseLanes|a:a,t!==null){for(u=n.child=t.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return rm(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&el(n,x!==null?x.cachePool:null),x!==null?sp(n,x):Ju(),op(n);else return n.lanes=n.childLanes=536870912,rm(t,n,x!==null?x.baseLanes|a:a,a)}else x!==null?(el(n,x.cachePool),sp(n,x),oa(),n.memoizedState=null):(t!==null&&el(n,null),Ju(),oa());return gn(t,n,u,a),n.child}function rm(t,n,a,s){var u=nc();return u=u===null?null:{parent:sn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&el(n,null),Ju(),op(n),t!==null&&Xs(t,n,s,!0),null}function ks(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=2097664)}}function yc(t,n,a,s,u){return Qa(n),a=ac(t,n,a,s,void 0,u),s=rc(),t!==null&&!cn?(sc(t,n,u),zi(t,n,u)):(Ee&&s&&Zu(n),n.flags|=1,gn(t,n,a,u),n.child)}function sm(t,n,a,s,u,f){return Qa(n),n.updateQueue=null,a=hp(n,s,a,u),fp(t),s=rc(),t!==null&&!cn?(sc(t,n,f),zi(t,n,f)):(Ee&&s&&Zu(n),n.flags|=1,gn(t,n,a,f),n.child)}function om(t,n,a,s,u){if(Qa(n),n.stateNode===null){var f=Ar,x=a.contextType;typeof x=="object"&&x!==null&&(f=Sn(x)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Sc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Oc(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Sn(x):Ar,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(xc(n,a,x,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Sc.enqueueReplaceState(f,f.state,null),Ys(n,s,f,u),qs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,N=ja(a,T);f.props=N;var V=f.context,lt=a.contextType;x=Ar,typeof lt=="object"&&lt!==null&&(x=Sn(lt));var gt=a.getDerivedStateFromProps;lt=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,lt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||V!==x)&&Yp(n,f,s,x),fa=!1;var nt=n.memoizedState;f.state=nt,Ys(n,s,f,u),qs(),V=n.memoizedState,T||nt!==V||fa?(typeof gt=="function"&&(xc(n,a,gt,s),V=n.memoizedState),(N=fa||qp(n,a,N,s,nt,V,x))?(lt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=V),f.props=s,f.state=V,f.context=x,s=N):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Pc(t,n),x=n.memoizedProps,lt=ja(a,x),f.props=lt,gt=n.pendingProps,nt=f.context,V=a.contextType,N=Ar,typeof V=="object"&&V!==null&&(N=Sn(V)),T=a.getDerivedStateFromProps,(V=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==gt||nt!==N)&&Yp(n,f,s,N),fa=!1,nt=n.memoizedState,f.state=nt,Ys(n,s,f,u),qs();var ot=n.memoizedState;x!==gt||nt!==ot||fa||t!==null&&t.dependencies!==null&&hl(t.dependencies)?(typeof T=="function"&&(xc(n,a,T,s),ot=n.memoizedState),(lt=fa||qp(n,a,lt,s,nt,ot,N)||t!==null&&t.dependencies!==null&&hl(t.dependencies))?(V||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ot,N),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ot,N)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ot),f.props=s,f.state=ot,f.context=N,s=lt):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,ks(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Xa(n,t.child,null,u),n.child=Xa(n,null,a,u)):gn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=zi(t,n,u),t}function lm(t,n,a,s){return Ls(),n.flags|=256,gn(t,n,a,s),n.child}var Ec={dehydrated:null,treeContext:null,retryLane:0};function Tc(t){return{baseLanes:t,cachePool:cp()}}function bc(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ei),t}function um(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(rn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ee){if(u?sa(n):oa(),Ee){var T=_n,N;if(N=T){t:{for(N=T,T=xi;N.nodeType!==8;){if(!T){T=null;break t}if(N=ci(N.nextSibling),N===null){T=null;break t}}T=N}T!==null?(n.memoizedState={dehydrated:T,treeContext:Ga!==null?{id:Li,overflow:Ni}:null,retryLane:536870912},N=ti(18,null,null,0),N.stateNode=T,N.return=n,n.child=N,Cn=n,_n=null,N=!0):N=!1}N||ka(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return T.data==="$!"?n.lanes=16:n.lanes=536870912,null;Oi(n)}return T=s.children,s=s.fallback,u?(oa(),u=n.mode,T=Rc({mode:"hidden",children:T},u),s=$a(s,u,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,u=n.child,u.memoizedState=Tc(a),u.childLanes=bc(t,x,a),n.memoizedState=Ec,s):(sa(n),Ac(n,T))}if(N=t.memoizedState,N!==null&&(T=N.dehydrated,T!==null)){if(f)n.flags&256?(sa(n),n.flags&=-257,n=Cc(t,n,a)):n.memoizedState!==null?(oa(),n.child=t.child,n.flags|=128,n=null):(oa(),u=s.fallback,T=n.mode,s=Rc({mode:"visible",children:s.children},T),u=$a(u,T,a,null),u.flags|=2,s.return=n,u.return=n,s.sibling=u,n.child=s,Xa(n,t.child,null,a),s=n.child,s.memoizedState=Tc(a),s.childLanes=bc(t,x,a),n.memoizedState=Ec,n=u);else if(sa(n),T.data==="$!"){if(x=T.nextSibling&&T.nextSibling.dataset,x)var V=x.dgst;x=V,s=Error(r(419)),s.stack="",s.digest=x,Ns({value:s,source:null,stack:null}),n=Cc(t,n,a)}else if(cn||Xs(t,n,a,!1),x=(a&t.childLanes)!==0,cn||x){if(x=Be,x!==null){if(s=a&-a,(s&42)!==0)s=1;else switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=64;break;case 268435456:s=134217728;break;default:s=0}if(s=(s&(x.suspendedLanes|a))!==0?0:s,s!==0&&s!==N.retryLane)throw N.retryLane=s,ra(t,s),wn(x,t,s),tm}T.data==="$?"||nf(),n=Cc(t,n,a)}else T.data==="$?"?(n.flags|=128,n.child=t.child,n=O0.bind(null,t),T._reactRetry=n,n=null):(t=N.treeContext,_n=ci(T.nextSibling),Cn=n,Ee=!0,li=null,xi=!1,t!==null&&(jn[Kn++]=Li,jn[Kn++]=Ni,jn[Kn++]=Ga,Li=t.id,Ni=t.overflow,Ga=n),n=Ac(n,s.children),n.flags|=4096);return n}return u?(oa(),u=s.fallback,T=n.mode,N=t.child,V=N.sibling,s=ga(N,{mode:"hidden",children:s.children}),s.subtreeFlags=N.subtreeFlags&31457280,V!==null?u=ga(V,u):(u=$a(u,T,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,s=u,u=n.child,T=t.child.memoizedState,T===null?T=Tc(a):(N=T.cachePool,N!==null?(V=sn._currentValue,N=N.parent!==V?{parent:V,pool:V}:N):N=cp(),T={baseLanes:T.baseLanes|a,cachePool:N}),u.memoizedState=T,u.childLanes=bc(t,x,a),n.memoizedState=Ec,s):(sa(n),a=t.child,t=a.sibling,a=ga(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function Ac(t,n){return n=Rc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Rc(t,n){return Pm(t,n,0,null)}function Cc(t,n,a){return Xa(n,t.child,null,a),t=Ac(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function cm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Lc(t.return,n,a)}function wc(t,n,a,s,u){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=u)}function fm(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;if(gn(t,n,s.children,a),s=rn.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cm(t,a,n);else if(t.tag===19)cm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(Pt(rn,s),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&tl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),wc(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&tl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}wc(n,!0,a,null,f);break;case"together":wc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function zi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),va|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Xs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ga(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ga(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Dc(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&hl(t)))}function S0(t,n,a){switch(n.tag){case 3:pn(n,n.stateNode.containerInfo),ca(n,sn,t.memoizedState.cache),Ls();break;case 27:case 5:ce(n);break;case 4:pn(n,n.stateNode.containerInfo);break;case 10:ca(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(sa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?um(t,n,a):(sa(n),t=zi(t,n,a),t!==null?t.sibling:null);sa(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Xs(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return fm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Pt(rn,rn.current),s)break;return null;case 22:case 23:return n.lanes=0,am(t,n,a);case 24:ca(n,sn,t.memoizedState.cache)}return zi(t,n,a)}function hm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)cn=!0;else{if(!Dc(t,a)&&(n.flags&128)===0)return cn=!1,S0(t,n,a);cn=(t.flags&131072)!==0}else cn=!1,Ee&&(n.flags&1048576)!==0&&Kd(n,jo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,u=s._init;if(s=u(s._payload),n.type=s,typeof s=="function")Xc(s)?(t=ja(s,t),n.tag=1,n=om(null,n,s,t,a)):(n.tag=0,n=yc(null,n,s,t,a));else{if(s!=null){if(u=s.$$typeof,u===b){n.tag=11,n=em(null,n,s,t,a);break t}else if(u===g){n.tag=14,n=nm(null,n,s,t,a);break t}}throw n=K(s)||s,Error(r(306,n,""))}}return n;case 0:return yc(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=ja(s,n.pendingProps),om(t,n,s,u,a);case 3:t:{if(pn(n,n.stateNode.containerInfo),t===null)throw Error(r(387));var f=n.pendingProps;u=n.memoizedState,s=u.element,Pc(t,n),Ys(n,f,null,a);var x=n.memoizedState;if(f=x.cache,ca(n,sn,f),f!==u.cache&&Nc(n,[sn],a,!0),qs(),f=x.element,u.isDehydrated)if(u={element:f,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=lm(t,n,f,a);break t}else if(f!==s){s=Zn(Error(r(424)),n),Ns(s),n=lm(t,n,f,a);break t}else for(_n=ci(n.stateNode.containerInfo.firstChild),Cn=n,Ee=!0,li=null,xi=!0,a=rp(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ls(),f===s){n=zi(t,n,a);break t}gn(t,n,f,a)}n=n.child}return n;case 26:return ks(t,n),t===null?(a=m_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,t=n.pendingProps,s=Cl(ie.current).createElement(a),s[en]=n,s[nn]=t,vn(s,a,t),Q(s),n.stateNode=s):n.memoizedState=m_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ce(n),t===null&&Ee&&(s=n.stateNode=h_(n.type,n.pendingProps,ie.current),Cn=n,xi=!0,_n=ci(s.firstChild)),s=n.pendingProps.children,t!==null||Ee?gn(t,n,s,a):n.child=Xa(n,null,s,a),ks(t,n),n.child;case 5:return t===null&&Ee&&((u=s=_n)&&(s=K0(s,n.type,n.pendingProps,xi),s!==null?(n.stateNode=s,Cn=n,_n=ci(s.firstChild),xi=!1,u=!0):u=!1),u||ka(n)),ce(n),u=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,s=f.children,gf(u,f)?s=null:x!==null&&gf(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=ac(t,n,d0,null,null,a),lo._currentValue=u),ks(t,n),gn(t,n,s,a),n.child;case 6:return t===null&&Ee&&((t=a=_n)&&(a=Q0(a,n.pendingProps,xi),a!==null?(n.stateNode=a,Cn=n,_n=null,t=!0):t=!1),t||ka(n)),null;case 13:return um(t,n,a);case 4:return pn(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Xa(n,null,s,a):gn(t,n,s,a),n.child;case 11:return em(t,n,n.type,n.pendingProps,a);case 7:return gn(t,n,n.pendingProps,a),n.child;case 8:return gn(t,n,n.pendingProps.children,a),n.child;case 12:return gn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ca(n,n.type,s.value),gn(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,Qa(n),u=Sn(u),s=s(u),n.flags|=1,gn(t,n,s,a),n.child;case 14:return nm(t,n,n.type,n.pendingProps,a);case 15:return im(t,n,n.type,n.pendingProps,a);case 19:return fm(t,n,a);case 22:return am(t,n,a);case 24:return Qa(n),s=Sn(sn),t===null?(u=nc(),u===null&&(u=Be,f=tc(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},Oc(n),ca(n,sn,u)):((t.lanes&a)!==0&&(Pc(t,n),Ys(n,null,null,a),qs()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ca(n,sn,s)):(s=f.cache,ca(n,sn,s),s!==u.cache&&Nc(n,[sn],a,!0))),gn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var Uc=Rt(null),Ka=null,Bi=null;function ca(t,n,a){Pt(Uc,n._currentValue),n._currentValue=a}function Fi(t){t._currentValue=Uc.current,Kt(Uc)}function Lc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Nc(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var N=0;N<n.length;N++)if(T.context===n[N]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Lc(f.return,a,t),s||(x=null);break t}f=T.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),Lc(x,a,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Xs(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var T=u.type;Hn(u.pendingProps.value,x.value)||(t!==null?t.push(T):t=[T])}}else if(u===z.current){if(x=u.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(lo):t=[lo])}u=u.return}t!==null&&Nc(n,t,a,s),n.flags|=262144}function hl(t){for(t=t.firstContext;t!==null;){if(!Hn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Qa(t){Ka=t,Bi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Sn(t){return dm(Ka,t)}function dl(t,n){return Ka===null&&Qa(t),dm(t,n)}function dm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Bi===null){if(t===null)throw Error(r(308));Bi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Bi=Bi.next=n;return a}var fa=!1;function Oc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ha(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function da(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ve&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Yo(t),Zd(t,null,a),n}return qo(t,s,n,a),Yo(t)}function Ws(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,vi(t,a)}}function zc(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Bc=!1;function qs(){if(Bc){var t=Lr;if(t!==null)throw t}}function Ys(t,n,a,s){Bc=!1;var u=t.updateQueue;fa=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var N=T,V=N.next;N.next=null,x===null?f=V:x.next=V,x=N;var lt=t.alternate;lt!==null&&(lt=lt.updateQueue,T=lt.lastBaseUpdate,T!==x&&(T===null?lt.firstBaseUpdate=V:T.next=V,lt.lastBaseUpdate=N))}if(f!==null){var gt=u.baseState;x=0,lt=V=N=null,T=f;do{var nt=T.lane&-536870913,ot=nt!==T.lane;if(ot?(xe&nt)===nt:(s&nt)===nt){nt!==0&&nt===Ur&&(Bc=!0),lt!==null&&(lt=lt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Vt=t,ne=T;nt=n;var qe=a;switch(ne.tag){case 1:if(Vt=ne.payload,typeof Vt=="function"){gt=Vt.call(qe,gt,nt);break t}gt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=ne.payload,nt=typeof Vt=="function"?Vt.call(qe,gt,nt):Vt,nt==null)break t;gt=R({},gt,nt);break t;case 2:fa=!0}}nt=T.callback,nt!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[nt]:ot.push(nt))}else ot={lane:nt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},lt===null?(V=lt=ot,N=gt):lt=lt.next=ot,x|=nt;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;ot=T,T=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);lt===null&&(N=gt),u.baseState=N,u.firstBaseUpdate=V,u.lastBaseUpdate=lt,f===null&&(u.shared.lanes=0),va|=x,t.lanes=x,t.memoizedState=gt}}function pm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function mm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)pm(a[t],n)}function Zs(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,x=a.inst;s=f(),x.destroy=s}a=a.next}while(a!==u)}}catch(T){Pe(n,n.return,T)}}function pa(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var x=s.inst,T=x.destroy;if(T!==void 0){x.destroy=void 0,u=n;var N=a;try{T()}catch(V){Pe(u,N,V)}}}s=s.next}while(s!==f)}}catch(V){Pe(n,n.return,V)}}function _m(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{mm(n,a)}catch(s){Pe(t,t.return,s)}}}function gm(t,n,a){a.props=ja(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Pe(t,n,s)}}function Ja(t,n){try{var a=t.ref;if(a!==null){var s=t.stateNode;switch(t.tag){case 26:case 27:case 5:var u=s;break;default:u=s}typeof a=="function"?t.refCleanup=a(u):a.current=u}}catch(f){Pe(t,n,f)}}function Gn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Pe(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Pe(t,n,u)}else a.current=null}function vm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Pe(t,t.return,u)}}function xm(t,n,a){try{var s=t.stateNode;W0(s,t.type,a,n),s[nn]=n}catch(u){Pe(t,t.return,u)}}function Sm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function Fc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Sm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ic(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(t,n):a.insertBefore(t,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(t,a)):(n=a,n.appendChild(t)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Rl));else if(s!==4&&s!==27&&(t=t.child,t!==null))for(Ic(t,n,a),t=t.sibling;t!==null;)Ic(t,n,a),t=t.sibling}function pl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&s!==27&&(t=t.child,t!==null))for(pl(t,n,a),t=t.sibling;t!==null;)pl(t,n,a),t=t.sibling}var Ii=!1,Xe=!1,Hc=!1,Mm=typeof WeakSet=="function"?WeakSet:Set,fn=null,ym=!1;function M0(t,n){if(t=t.containerInfo,mf=Ol,t=Id(t),Vu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,T=-1,N=-1,V=0,lt=0,gt=t,nt=null;e:for(;;){for(var ot;gt!==a||u!==0&&gt.nodeType!==3||(T=x+u),gt!==f||s!==0&&gt.nodeType!==3||(N=x+s),gt.nodeType===3&&(x+=gt.nodeValue.length),(ot=gt.firstChild)!==null;)nt=gt,gt=ot;for(;;){if(gt===t)break e;if(nt===a&&++V===u&&(T=x),nt===f&&++lt===s&&(N=x),(ot=gt.nextSibling)!==null)break;gt=nt,nt=gt.parentNode}gt=ot}a=T===-1||N===-1?null:{start:T,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(_f={focusedElem:t,selectionRange:a},Ol=!1,fn=n;fn!==null;)if(n=fn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,fn=t;else for(;fn!==null;){switch(n=fn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Vt=ja(a.type,u,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(Vt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(ne){Pe(a,a.return,ne)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Sf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Sf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,fn=t;break}fn=n.return}return Vt=ym,ym=!1,Vt}function Em(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Gi(t,a),s&4&&Zs(5,a);break;case 1:if(Gi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(T){Pe(a,a.return,T)}else{var u=ja(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(T){Pe(a,a.return,T)}}s&64&&_m(a),s&512&&Ja(a,a.return);break;case 3:if(Gi(t,a),s&64&&(s=a.updateQueue,s!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{mm(s,t)}catch(T){Pe(a,a.return,T)}}break;case 26:Gi(t,a),s&512&&Ja(a,a.return);break;case 27:case 5:Gi(t,a),n===null&&s&4&&vm(a),s&512&&Ja(a,a.return);break;case 12:Gi(t,a);break;case 13:Gi(t,a),s&4&&Am(t,a);break;case 22:if(u=a.memoizedState!==null||Ii,!u){n=n!==null&&n.memoizedState!==null||Xe;var f=Ii,x=Xe;Ii=u,(Xe=n)&&!x?ma(t,a,(a.subtreeFlags&8772)!==0):Gi(t,a),Ii=f,Xe=x}s&512&&(a.memoizedProps.mode==="manual"?Ja(a,a.return):Gn(a,a.return));break;default:Gi(t,a)}}function Tm(t){var n=t.alternate;n!==null&&(t.alternate=null,Tm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ms(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,Vn=!1;function Hi(t,n,a){for(a=a.child;a!==null;)bm(t,n,a),a=a.sibling}function bm(t,n,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(jt,a)}catch{}switch(a.tag){case 26:Xe||Gn(a,n),Hi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xe||Gn(a,n);var s=Je,u=Vn;for(Je=a.stateNode,Hi(t,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Ms(a),Je=s,Vn=u;break;case 5:Xe||Gn(a,n);case 6:u=Je;var f=Vn;if(Je=null,Hi(t,n,a),Je=u,Vn=f,Je!==null)if(Vn)try{t=Je,s=a.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)}catch(x){Pe(a,n,x)}else try{Je.removeChild(a.stateNode)}catch(x){Pe(a,n,x)}break;case 18:Je!==null&&(Vn?(n=Je,a=a.stateNode,n.nodeType===8?xf(n.parentNode,a):n.nodeType===1&&xf(n,a),ho(n)):xf(Je,a.stateNode));break;case 4:s=Je,u=Vn,Je=a.stateNode.containerInfo,Vn=!0,Hi(t,n,a),Je=s,Vn=u;break;case 0:case 11:case 14:case 15:Xe||pa(2,a,n),Xe||pa(4,a,n),Hi(t,n,a);break;case 1:Xe||(Gn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&gm(a,n,s)),Hi(t,n,a);break;case 21:Hi(t,n,a);break;case 22:Xe||Gn(a,n),Xe=(s=Xe)||a.memoizedState!==null,Hi(t,n,a),Xe=s;break;default:Hi(t,n,a)}}function Am(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ho(t)}catch(a){Pe(n,n.return,a)}}function y0(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Mm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Mm),n;default:throw Error(r(435,t.tag))}}function Gc(t,n){var a=y0(t);n.forEach(function(s){var u=P0.bind(null,t,s);a.has(s)||(a.add(s),s.then(u,u))})}function Jn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,x=n,T=x;t:for(;T!==null;){switch(T.tag){case 27:case 5:Je=T.stateNode,Vn=!1;break t;case 3:Je=T.stateNode.containerInfo,Vn=!0;break t;case 4:Je=T.stateNode.containerInfo,Vn=!0;break t}T=T.return}if(Je===null)throw Error(r(160));bm(f,x,u),Je=null,Vn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Rm(n,t),n=n.sibling}var ui=null;function Rm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Jn(n,t),$n(t),s&4&&(pa(3,t,t.return),Zs(3,t),pa(5,t,t.return));break;case 1:Jn(n,t),$n(t),s&512&&(Xe||a===null||Gn(a,a.return)),s&64&&Ii&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=ui;if(Jn(n,t),$n(t),s&512&&(Xe||a===null||Gn(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ba]||f[en]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),vn(f,s,a),f[en]=t,Q(f),s=f;break t;case"link":var x=v_("link","href",u).get(s+(a.href||""));if(x){for(var T=0;T<x.length;T++)if(f=x[T],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(T,1);break e}}f=u.createElement(s),vn(f,s,a),u.head.appendChild(f);break;case"meta":if(x=v_("meta","content",u).get(s+(a.content||""))){for(T=0;T<x.length;T++)if(f=x[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(T,1);break e}}f=u.createElement(s),vn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[en]=t,Q(f),s=f}t.stateNode=s}else x_(u,t.type,t.stateNode);else t.stateNode=g_(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?x_(u,t.type,t.stateNode):g_(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&xm(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(s&4&&t.alternate===null){u=t.stateNode,f=t.memoizedProps;try{for(var N=u.firstChild;N;){var V=N.nextSibling,lt=N.nodeName;N[Ba]||lt==="HEAD"||lt==="BODY"||lt==="SCRIPT"||lt==="STYLE"||lt==="LINK"&&N.rel.toLowerCase()==="stylesheet"||u.removeChild(N),N=V}for(var gt=t.type,nt=u.attributes;nt.length;)u.removeAttributeNode(nt[0]);vn(u,gt,f),u[en]=t,u[nn]=f}catch(Vt){Pe(t,t.return,Vt)}}case 5:if(Jn(n,t),$n(t),s&512&&(Xe||a===null||Gn(a,a.return)),t.flags&32){u=t.stateNode;try{Nn(u,"")}catch(Vt){Pe(t,t.return,Vt)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,xm(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Hc=!0);break;case 6:if(Jn(n,t),$n(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Vt){Pe(t,t.return,Vt)}}break;case 3:if(Ul=null,u=ui,ui=wl(n.containerInfo),Jn(n,t),ui=u,$n(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ho(n.containerInfo)}catch(Vt){Pe(t,t.return,Vt)}Hc&&(Hc=!1,Cm(t));break;case 4:s=ui,ui=wl(t.stateNode.containerInfo),Jn(n,t),$n(t),ui=s;break;case 12:Jn(n,t),$n(t);break;case 13:Jn(n,t),$n(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Kc=ct()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Gc(t,s)));break;case 22:if(s&512&&(Xe||a===null||Gn(a,a.return)),N=t.memoizedState!==null,V=a!==null&&a.memoizedState!==null,lt=Ii,gt=Xe,Ii=lt||N,Xe=gt||V,Jn(n,t),Xe=gt,Ii=lt,$n(t),n=t.stateNode,n._current=t,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,s&8192&&(n._visibility=N?n._visibility&-2:n._visibility|1,N&&(n=Ii||Xe,a===null||V||n||zr(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(a=null,n=t;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){V=a=n;try{if(u=V.stateNode,N)f=u.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{x=V.stateNode,T=V.memoizedProps.style;var ot=T!=null&&T.hasOwnProperty("display")?T.display:null;x.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Vt){Pe(V,V.return,Vt)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=N?"":V.memoizedProps}catch(Vt){Pe(V,V.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Gc(t,a))));break;case 19:Jn(n,t),$n(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Gc(t,s)));break;case 21:break;default:Jn(n,t),$n(t)}}function $n(t){var n=t.flags;if(n&2){try{if(t.tag!==27){t:{for(var a=t.return;a!==null;){if(Sm(a)){var s=a;break t}a=a.return}throw Error(r(160))}switch(s.tag){case 27:var u=s.stateNode,f=Fc(t);pl(t,f,u);break;case 5:var x=s.stateNode;s.flags&32&&(Nn(x,""),s.flags&=-33);var T=Fc(t);pl(t,T,x);break;case 3:case 4:var N=s.stateNode.containerInfo,V=Fc(t);Ic(t,V,N);break;default:throw Error(r(161))}}}catch(lt){Pe(t,t.return,lt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Cm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Cm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Gi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Em(t,n.alternate,n),n=n.sibling}function zr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:pa(4,n,n.return),zr(n);break;case 1:Gn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&gm(n,n.return,a),zr(n);break;case 26:case 27:case 5:Gn(n,n.return),zr(n);break;case 22:Gn(n,n.return),n.memoizedState===null&&zr(n);break;default:zr(n)}t=t.sibling}}function ma(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:ma(u,f,a),Zs(4,f);break;case 1:if(ma(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(V){Pe(s,s.return,V)}if(s=f,u=s.updateQueue,u!==null){var T=s.stateNode;try{var N=u.shared.hiddenCallbacks;if(N!==null)for(u.shared.hiddenCallbacks=null,u=0;u<N.length;u++)pm(N[u],T)}catch(V){Pe(s,s.return,V)}}a&&x&64&&_m(f),Ja(f,f.return);break;case 26:case 27:case 5:ma(u,f,a),a&&s===null&&x&4&&vm(f),Ja(f,f.return);break;case 12:ma(u,f,a);break;case 13:ma(u,f,a),a&&x&4&&Am(u,f);break;case 22:f.memoizedState===null&&ma(u,f,a),Ja(f,f.return);break;default:ma(u,f,a)}n=n.sibling}}function Vc(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Fs(a))}function kc(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Fs(t))}function _a(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)wm(t,n,a,s),n=n.sibling}function wm(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:_a(t,n,a,s),u&2048&&Zs(9,n);break;case 3:_a(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Fs(t)));break;case 12:if(u&2048){_a(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,T=f.onPostCommit;typeof T=="function"&&T(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(N){Pe(n,n.return,N)}}else _a(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?_a(t,n,a,s):js(t,n):f._visibility&4?_a(t,n,a,s):(f._visibility|=4,Br(t,n,a,s,(n.subtreeFlags&10256)!==0)),u&2048&&Vc(n.alternate,n);break;case 24:_a(t,n,a,s),u&2048&&kc(n.alternate,n);break;default:_a(t,n,a,s)}}function Br(t,n,a,s,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,x=n,T=a,N=s,V=x.flags;switch(x.tag){case 0:case 11:case 15:Br(f,x,T,N,u),Zs(8,x);break;case 23:break;case 22:var lt=x.stateNode;x.memoizedState!==null?lt._visibility&4?Br(f,x,T,N,u):js(f,x):(lt._visibility|=4,Br(f,x,T,N,u)),u&&V&2048&&Vc(x.alternate,x);break;case 24:Br(f,x,T,N,u),u&&V&2048&&kc(x.alternate,x);break;default:Br(f,x,T,N,u)}n=n.sibling}}function js(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:js(a,s),u&2048&&Vc(s.alternate,s);break;case 24:js(a,s),u&2048&&kc(s.alternate,s);break;default:js(a,s)}n=n.sibling}}var Ks=8192;function Fr(t){if(t.subtreeFlags&Ks)for(t=t.child;t!==null;)Dm(t),t=t.sibling}function Dm(t){switch(t.tag){case 26:Fr(t),t.flags&Ks&&t.memoizedState!==null&&cx(ui,t.memoizedState,t.memoizedProps);break;case 5:Fr(t);break;case 3:case 4:var n=ui;ui=wl(t.stateNode.containerInfo),Fr(t),ui=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Ks,Ks=16777216,Fr(t),Ks=n):Fr(t));break;default:Fr(t)}}function Um(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Qs(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];fn=s,Nm(s,t)}Um(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Lm(t),t=t.sibling}function Lm(t){switch(t.tag){case 0:case 11:case 15:Qs(t),t.flags&2048&&pa(9,t,t.return);break;case 3:Qs(t);break;case 12:Qs(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&4&&(t.return===null||t.return.tag!==13)?(n._visibility&=-5,ml(t)):Qs(t);break;default:Qs(t)}}function ml(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];fn=s,Nm(s,t)}Um(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:pa(8,n,n.return),ml(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,ml(n));break;default:ml(n)}t=t.sibling}}function Nm(t,n){for(;fn!==null;){var a=fn;switch(a.tag){case 0:case 11:case 15:pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Fs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,fn=s;else t:for(a=t;fn!==null;){s=fn;var u=s.sibling,f=s.return;if(Tm(s),s===a){fn=null;break t}if(u!==null){u.return=f,fn=u;break t}fn=f}}}function E0(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(t,n,a,s){return new E0(t,n,a,s)}function Xc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ga(t,n){var a=t.alternate;return a===null?(a=ti(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Om(t,n){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function _l(t,n,a,s,u,f){var x=0;if(s=t,typeof t=="function")Xc(t)&&(x=1);else if(typeof t=="string")x=lx(t,a,Se.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case p:return $a(a.children,u,f,n);case m:x=8,u|=24;break;case _:return t=ti(12,a,n,u|2),t.elementType=_,t.lanes=f,t;case w:return t=ti(13,a,n,u),t.elementType=w,t.lanes=f,t;case M:return t=ti(19,a,n,u),t.elementType=M,t.lanes=f,t;case O:return Pm(a,u,f,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v:case y:x=10;break t;case S:x=9;break t;case b:x=11;break t;case g:x=14;break t;case P:x=16,s=null;break t}x=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=ti(x,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function $a(t,n,a,s){return t=ti(7,t,s,n),t.lanes=a,t}function Pm(t,n,a,s){t=ti(22,t,s,n),t.elementType=O,t.lanes=a;var u={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=u._current;if(f===null)throw Error(r(456));if((u._pendingVisibility&2)===0){var x=ra(f,2);x!==null&&(u._pendingVisibility|=2,wn(x,f,2))}},attach:function(){var f=u._current;if(f===null)throw Error(r(456));if((u._pendingVisibility&2)!==0){var x=ra(f,2);x!==null&&(u._pendingVisibility&=-3,wn(x,f,2))}}};return t.stateNode=u,t}function Wc(t,n,a){return t=ti(6,t,null,n),t.lanes=a,t}function qc(t,n,a){return n=ti(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function Vi(t){t.flags|=4}function zm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!S_(n)){if(n=Qn.current,n!==null&&((xe&4194176)===xe?Si!==null:(xe&62914560)!==xe&&(xe&536870912)===0||n!==Si))throw Ps=Qu,$d;t.flags|=8192}}function gl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Me():536870912,t.lanes|=n,Hr|=n)}function Js(t,n){if(!Ee)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ge(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&31457280,s|=u.flags&31457280,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function T0(t,n,a){var s=n.pendingProps;switch(ju(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(n),null;case 1:return Ge(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Fi(sn),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Us(n)?Vi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,li!==null&&(tf(li),li=null))),Ge(n),null;case 26:return a=n.memoizedState,t===null?(Vi(n),a!==null?(Ge(n),zm(n,a)):(Ge(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Vi(n),Ge(n),zm(n,a)):(Ge(n),n.flags&=-16777217):(t.memoizedProps!==s&&Vi(n),Ge(n),n.flags&=-16777217),null;case 27:kt(n),a=ie.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Vi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ge(n),null}t=Se.current,Us(n)?Qd(n):(t=h_(u,s,a),n.stateNode=t,Vi(n))}return Ge(n),null;case 5:if(kt(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Vi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ge(n),null}if(t=Se.current,Us(n))Qd(n);else{switch(u=Cl(ie.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?u.createElement("select",{is:s.is}):u.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?u.createElement(a,{is:s.is}):u.createElement(a)}}t[en]=n,t[nn]=s;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;t:switch(vn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Vi(n)}}return Ge(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Vi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=ie.current,Us(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[en]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||s_(t.nodeValue,a)),t||ka(n)}else t=Cl(t).createTextNode(s),t[en]=n,n.stateNode=t}return Ge(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Us(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[en]=n}else Ls(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ge(n),u=!1}else li!==null&&(tf(li),li=null),u=!0;if(!u)return n.flags&256?(Oi(n),n):(Oi(n),null)}if(Oi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),gl(n,n.updateQueue),Ge(n),null;case 4:return oe(),t===null&&hf(n.stateNode.containerInfo),Ge(n),null;case 10:return Fi(n.type),Ge(n),null;case 19:if(Kt(rn),u=n.memoizedState,u===null)return Ge(n),null;if(s=(n.flags&128)!==0,f=u.rendering,f===null)if(s)Js(u,!1);else{if(We!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=tl(t),f!==null){for(n.flags|=128,Js(u,!1),t=f.updateQueue,n.updateQueue=t,gl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Om(a,t),a=a.sibling;return Pt(rn,rn.current&1|2),n.child}t=t.sibling}u.tail!==null&&ct()>vl&&(n.flags|=128,s=!0,Js(u,!1),n.lanes=4194304)}else{if(!s)if(t=tl(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,gl(n,t),Js(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Ee)return Ge(n),null}else 2*ct()-u.renderingStartTime>vl&&a!==536870912&&(n.flags|=128,s=!0,Js(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(t=u.last,t!==null?t.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=ct(),n.sibling=null,t=rn.current,Pt(rn,s?t&1|2:t&1),n):(Ge(n),null);case 22:case 23:return Oi(n),$u(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ge(n),n.subtreeFlags&6&&(n.flags|=8192)):Ge(n),a=n.updateQueue,a!==null&&gl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Kt(Wa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Fi(sn),Ge(n),null;case 25:return null}throw Error(r(156,n.tag))}function b0(t,n){switch(ju(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Fi(sn),oe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return kt(n),null;case 13:if(Oi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ls()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Kt(rn),null;case 4:return oe(),null;case 10:return Fi(n.type),null;case 22:case 23:return Oi(n),$u(),t!==null&&Kt(Wa),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Fi(sn),null;case 25:return null;default:return null}}function Bm(t,n){switch(ju(n),n.tag){case 3:Fi(sn),oe();break;case 26:case 27:case 5:kt(n);break;case 4:oe();break;case 13:Oi(n);break;case 19:Kt(rn);break;case 10:Fi(n.type);break;case 22:case 23:Oi(n),$u(),t!==null&&Kt(Wa);break;case 24:Fi(sn)}}var A0={getCacheForType:function(t){var n=Sn(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},R0=typeof WeakMap=="function"?WeakMap:Map,Ve=0,Be=null,he=null,xe=0,Fe=0,kn=null,ki=!1,Ir=!1,Yc=!1,Xi=0,We=0,va=0,tr=0,Zc=0,ei=0,Hr=0,$s=null,yi=null,jc=!1,Kc=0,vl=1/0,xl=null,xa=null,Sl=!1,er=null,to=0,Qc=0,Jc=null,eo=0,$c=null;function Xn(){if((Ve&2)!==0&&xe!==0)return xe&-xe;if(C.T!==null){var t=Ur;return t!==0?t:lf()}return Ss()}function Fm(){ei===0&&(ei=(xe&536870912)===0||Ee?tn():536870912);var t=Qn.current;return t!==null&&(t.flags|=32),ei}function wn(t,n,a){(t===Be&&Fe===2||t.cancelPendingCommit!==null)&&(Gr(t,0),Wi(t,xe,ei,!1)),bn(t,a),((Ve&2)===0||t!==Be)&&(t===Be&&((Ve&2)===0&&(tr|=a),We===4&&Wi(t,xe,ei,!1)),Ei(t))}function Im(t,n,a){if((Ve&6)!==0)throw Error(r(327));var s=!a&&(n&60)===0&&(n&t.expiredLanes)===0||$t(t,n),u=s?D0(t,n):af(t,n,!0),f=s;do{if(u===0){Ir&&!s&&Wi(t,n,0,!1);break}else if(u===6)Wi(t,n,0,!ki);else{if(a=t.current.alternate,f&&!C0(a)){u=af(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var T=t;u=$s;var N=T.current.memoizedState.isDehydrated;if(N&&(Gr(T,x).flags|=256),x=af(T,x,!1),x!==2){if(Yc&&!N){T.errorRecoveryDisabledLanes|=f,tr|=f,u=4;break t}f=yi,yi=u,f!==null&&tf(f)}u=x}if(f=!1,u!==2)continue}}if(u===1){Gr(t,0),Wi(t,n,0,!0);break}t:{switch(s=t,u){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){Wi(s,n,ei,!ki);break t}break;case 2:yi=null;break;case 3:case 5:break;default:throw Error(r(329))}if(s.finishedWork=a,s.finishedLanes=n,(n&62914560)===n&&(f=Kc+300-ct(),10<f)){if(Wi(s,n,ei,!ki),Dt(s,0)!==0)break t;s.timeoutHandle=u_(Hm.bind(null,s,a,yi,xl,jc,n,ei,tr,Hr,ki,2,-0,0),f);break t}Hm(s,a,yi,xl,jc,n,ei,tr,Hr,ki,0,-0,0)}}break}while(!0);Ei(t)}function tf(t){yi===null?yi=t:yi.push.apply(yi,t)}function Hm(t,n,a,s,u,f,x,T,N,V,lt,gt,nt){var ot=n.subtreeFlags;if((ot&8192||(ot&16785408)===16785408)&&(oo={stylesheets:null,count:0,unsuspend:ux},Dm(n),n=fx(),n!==null)){t.cancelPendingCommit=n(Ym.bind(null,t,a,s,u,x,T,N,1,gt,nt)),Wi(t,f,x,!V);return}Ym(t,a,s,u,x,T,N,lt,gt,nt)}function C0(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Hn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Wi(t,n,a,s){n&=~Zc,n&=~tr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Yt(u),x=1<<f;s[f]=-1,u&=~x}a!==0&&xs(t,a,n)}function Ml(){return(Ve&6)===0?(no(0),!1):!0}function ef(){if(he!==null){if(Fe===0)var t=he.return;else t=he,Bi=Ka=null,oc(t),wr=null,zs=0,t=he;for(;t!==null;)Bm(t.alternate,t),t=t.return;he=null}}function Gr(t,n){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Y0(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ef(),Be=t,he=a=ga(t.current,null),xe=n,Fe=0,kn=null,ki=!1,Ir=$t(t,n),Yc=!1,Hr=ei=Zc=tr=va=We=0,yi=$s=null,jc=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Yt(s),f=1<<u;n|=t[u],s&=~f}return Xi=n,Wo(),a}function Gm(t,n){ue=null,C.H=Mi,n===Os?(n=np(),Fe=3):n===$d?(n=np(),Fe=4):Fe=n===tm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,kn=n,he===null&&(We=1,fl(t,Zn(n,t.current)))}function Vm(){var t=C.H;return C.H=Mi,t===null?Mi:t}function km(){var t=C.A;return C.A=A0,t}function nf(){We=4,ki||(xe&4194176)!==xe&&Qn.current!==null||(Ir=!0),(va&134217727)===0&&(tr&134217727)===0||Be===null||Wi(Be,xe,ei,!1)}function af(t,n,a){var s=Ve;Ve|=2;var u=Vm(),f=km();(Be!==t||xe!==n)&&(xl=null,Gr(t,n)),n=!1;var x=We;t:do try{if(Fe!==0&&he!==null){var T=he,N=kn;switch(Fe){case 8:ef(),x=6;break t;case 3:case 2:case 6:Qn.current===null&&(n=!0);var V=Fe;if(Fe=0,kn=null,Vr(t,T,N,V),a&&Ir){x=0;break t}break;default:V=Fe,Fe=0,kn=null,Vr(t,T,N,V)}}w0(),x=We;break}catch(lt){Gm(t,lt)}while(!0);return n&&t.shellSuspendCounter++,Bi=Ka=null,Ve=s,C.H=u,C.A=f,he===null&&(Be=null,xe=0,Wo()),x}function w0(){for(;he!==null;)Xm(he)}function D0(t,n){var a=Ve;Ve|=2;var s=Vm(),u=km();Be!==t||xe!==n?(xl=null,vl=ct()+500,Gr(t,n)):Ir=$t(t,n);t:do try{if(Fe!==0&&he!==null){n=he;var f=kn;e:switch(Fe){case 1:Fe=0,kn=null,Vr(t,n,f,1);break;case 2:if(tp(f)){Fe=0,kn=null,Wm(n);break}n=function(){Fe===2&&Be===t&&(Fe=7),Ei(t)},f.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:tp(f)?(Fe=0,kn=null,Wm(n)):(Fe=0,kn=null,Vr(t,n,f,7));break;case 5:var x=null;switch(he.tag){case 26:x=he.memoizedState;case 5:case 27:var T=he;if(!x||S_(x)){Fe=0,kn=null;var N=T.sibling;if(N!==null)he=N;else{var V=T.return;V!==null?(he=V,yl(V)):he=null}break e}}Fe=0,kn=null,Vr(t,n,f,5);break;case 6:Fe=0,kn=null,Vr(t,n,f,6);break;case 8:ef(),We=6;break t;default:throw Error(r(462))}}U0();break}catch(lt){Gm(t,lt)}while(!0);return Bi=Ka=null,C.H=s,C.A=u,Ve=a,he!==null?0:(Be=null,xe=0,Wo(),We)}function U0(){for(;he!==null&&!E();)Xm(he)}function Xm(t){var n=hm(t.alternate,t,Xi);t.memoizedProps=t.pendingProps,n===null?yl(t):he=n}function Wm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=sm(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=sm(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:oc(n);default:Bm(a,n),n=he=Om(n,Xi),n=hm(a,n,Xi)}t.memoizedProps=t.pendingProps,n===null?yl(t):he=n}function Vr(t,n,a,s){Bi=Ka=null,oc(n),wr=null,zs=0;var u=n.return;try{if(x0(t,u,n,a,xe)){We=1,fl(t,Zn(a,t.current)),he=null;return}}catch(f){if(u!==null)throw he=u,f;We=1,fl(t,Zn(a,t.current)),he=null;return}n.flags&32768?(Ee||s===1?t=!0:Ir||(xe&536870912)!==0?t=!1:(ki=t=!0,(s===2||s===3||s===6)&&(s=Qn.current,s!==null&&s.tag===13&&(s.flags|=16384))),qm(n,t)):yl(n)}function yl(t){var n=t;do{if((n.flags&32768)!==0){qm(n,ki);return}t=n.return;var a=T0(n.alternate,n,Xi);if(a!==null){he=a;return}if(n=n.sibling,n!==null){he=n;return}he=n=t}while(n!==null);We===0&&(We=5)}function qm(t,n){do{var a=b0(t.alternate,t);if(a!==null){a.flags&=32767,he=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){he=t;return}he=t=a}while(t!==null);We=6,he=null}function Ym(t,n,a,s,u,f,x,T,N,V){var lt=C.T,gt=q.p;try{q.p=2,C.T=null,L0(t,n,a,s,gt,u,f,x,T,N,V)}finally{C.T=lt,q.p=gt}}function L0(t,n,a,s,u,f,x,T){do kr();while(er!==null);if((Ve&6)!==0)throw Error(r(327));var N=t.finishedWork;if(s=t.finishedLanes,N===null)return null;if(t.finishedWork=null,t.finishedLanes=0,N===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var V=N.lanes|N.childLanes;if(V|=qu,Po(t,s,V,f,x,T),t===Be&&(he=Be=null,xe=0),(N.subtreeFlags&10256)===0&&(N.flags&10256)===0||Sl||(Sl=!0,Qc=V,Jc=a,z0(wt,function(){return kr(),null})),a=(N.flags&15990)!==0,(N.subtreeFlags&15990)!==0||a?(a=C.T,C.T=null,f=q.p,q.p=2,x=Ve,Ve|=4,M0(t,N),Rm(N,t),n0(_f,t.containerInfo),Ol=!!mf,_f=mf=null,t.current=N,Em(t,N.alternate,N),$(),Ve=x,q.p=f,C.T=a):t.current=N,Sl?(Sl=!1,er=t,to=s):Zm(t,V),V=t.pendingLanes,V===0&&(xa=null),Ft(N.stateNode),Ei(t),n!==null)for(u=t.onRecoverableError,N=0;N<n.length;N++)V=n[N],u(V.value,{componentStack:V.stack});return(to&3)!==0&&kr(),V=t.pendingLanes,(s&4194218)!==0&&(V&42)!==0?t===$c?eo++:(eo=0,$c=t):eo=0,no(0),null}function Zm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Fs(n)))}function kr(){if(er!==null){var t=er,n=Qc;Qc=0;var a=gr(to),s=C.T,u=q.p;try{if(q.p=32>a?32:a,C.T=null,er===null)var f=!1;else{a=Jc,Jc=null;var x=er,T=to;if(er=null,to=0,(Ve&6)!==0)throw Error(r(331));var N=Ve;if(Ve|=4,Lm(x.current),wm(x,x.current,T,a),Ve=N,no(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(jt,x)}catch{}f=!0}return f}finally{q.p=u,C.T=s,Zm(t,n)}}return!1}function jm(t,n,a){n=Zn(a,n),n=Mc(t.stateNode,n,2),t=da(t,n,2),t!==null&&(bn(t,2),Ei(t))}function Pe(t,n,a){if(t.tag===3)jm(t,t,a);else for(;n!==null;){if(n.tag===3){jm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(xa===null||!xa.has(s))){t=Zn(a,t),a=Jp(2),s=da(n,a,2),s!==null&&($p(a,s,n,t),bn(s,2),Ei(s));break}}n=n.return}}function rf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new R0;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Yc=!0,u.add(a),t=N0.bind(null,t,n,a),n.then(t,t))}function N0(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Be===t&&(xe&a)===a&&(We===4||We===3&&(xe&62914560)===xe&&300>ct()-Kc?(Ve&2)===0&&Gr(t,0):Zc|=a,Hr===xe&&(Hr=0)),Ei(t)}function Km(t,n){n===0&&(n=Me()),t=ra(t,n),t!==null&&(bn(t,n),Ei(t))}function O0(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Km(t,a)}function P0(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Km(t,a)}function z0(t,n){return Xt(t,n)}var El=null,Xr=null,sf=!1,Tl=!1,of=!1,nr=0;function Ei(t){t!==Xr&&t.next===null&&(Xr===null?El=Xr=t:Xr=Xr.next=t),Tl=!0,sf||(sf=!0,F0(B0))}function no(t,n){if(!of&&Tl){of=!0;do for(var a=!1,s=El;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var x=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Yt(42|t)+1)-1,f&=u&~(x&~T),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,$m(s,f))}else f=xe,f=Dt(s,s===Be?f:0),(f&3)===0||$t(s,f)||(a=!0,$m(s,f));s=s.next}while(a);of=!1}}function B0(){Tl=sf=!1;var t=0;nr!==0&&(q0()&&(t=nr),nr=0);for(var n=ct(),a=null,s=El;s!==null;){var u=s.next,f=Qm(s,n);f===0?(s.next=null,a===null?El=u:a.next=u,u===null&&(Xr=a)):(a=s,(t!==0||(f&3)!==0)&&(Tl=!0)),s=u}no(t)}function Qm(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-Yt(f),T=1<<x,N=u[x];N===-1?((T&a)===0||(T&s)!==0)&&(u[x]=He(T,n)):N<=n&&(t.expiredLanes|=T),f&=~T}if(n=Be,a=xe,a=Dt(t,t===n?a:0),s=t.callbackNode,a===0||t===n&&Fe===2||t.cancelPendingCommit!==null)return s!==null&&s!==null&&U(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||$t(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&U(s),gr(a)){case 2:case 8:a=Ht;break;case 32:a=wt;break;case 268435456:a=de;break;default:a=wt}return s=Jm.bind(null,t),a=Xt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&U(s),t.callbackPriority=2,t.callbackNode=null,2}function Jm(t,n){var a=t.callbackNode;if(kr()&&t.callbackNode!==a)return null;var s=xe;return s=Dt(t,t===Be?s:0),s===0?null:(Im(t,s,n),Qm(t,ct()),t.callbackNode!=null&&t.callbackNode===a?Jm.bind(null,t):null)}function $m(t,n){if(kr())return null;Im(t,n,!0)}function F0(t){Z0(function(){(Ve&6)!==0?Xt(ft,t):t()})}function lf(){return nr===0&&(nr=tn()),nr}function t_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Fo(""+t)}function e_(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function I0(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=t_((u[nn]||null).action),x=s.submitter;x&&(n=(n=x[nn]||null)?t_(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var T=new Vo("action","action",null,s,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(nr!==0){var N=x?e_(u,x):new FormData(u);_c(a,{pending:!0,data:N,method:u.method,action:f},null,N)}}else typeof f=="function"&&(T.preventDefault(),N=x?e_(u,x):new FormData(u),_c(a,{pending:!0,data:N,method:u.method,action:f},f,N))},currentTarget:u}]})}}for(var uf=0;uf<Yd.length;uf++){var cf=Yd[uf],H0=cf.toLowerCase(),G0=cf[0].toUpperCase()+cf.slice(1);oi(H0,"on"+G0)}oi(Vd,"onAnimationEnd"),oi(kd,"onAnimationIteration"),oi(Xd,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi(a0,"onTransitionRun"),oi(r0,"onTransitionStart"),oi(s0,"onTransitionCancel"),oi(Wd,"onTransitionEnd"),Ot("onMouseEnter",["mouseout","mouseover"]),Ot("onMouseLeave",["mouseout","mouseover"]),Ot("onPointerEnter",["pointerout","pointerover"]),Ot("onPointerLeave",["pointerout","pointerover"]),bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),bt("onBeforeInput",["compositionend","keypress","textInput","paste"]),bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),V0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(io));function n_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var T=s[x],N=T.instance,V=T.currentTarget;if(T=T.listener,N!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=V;try{f(u)}catch(lt){cl(lt)}u.currentTarget=null,f=N}else for(x=0;x<s.length;x++){if(T=s[x],N=T.instance,V=T.currentTarget,T=T.listener,N!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=V;try{f(u)}catch(lt){cl(lt)}u.currentTarget=null,f=N}}}}function ge(t,n){var a=n[vr];a===void 0&&(a=n[vr]=new Set);var s=t+"__bubble";a.has(s)||(i_(n,t,2,!1),a.add(s))}function ff(t,n,a){var s=0;n&&(s|=4),i_(a,t,s,n)}var bl="_reactListening"+Math.random().toString(36).slice(2);function hf(t){if(!t[bl]){t[bl]=!0,Y.forEach(function(a){a!=="selectionchange"&&(V0.has(a)||ff(a,!1,t),ff(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[bl]||(n[bl]=!0,ff("selectionchange",!1,n))}}function i_(t,n,a,s){switch(A_(n)){case 2:var u=px;break;case 8:u=mx;break;default:u=bf}a=u.bind(null,n,a,t),u=void 0,!Nu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function df(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var T=s.stateNode.containerInfo;if(T===u||T.nodeType===8&&T.parentNode===u)break;if(x===4)for(x=s.return;x!==null;){var N=x.tag;if((N===3||N===4)&&(N=x.stateNode.containerInfo,N===u||N.nodeType===8&&N.parentNode===u))return;x=x.return}for(;T!==null;){if(x=Ui(T),x===null)return;if(N=x.tag,N===5||N===6||N===26||N===27){s=f=x;continue t}T=T.parentNode}}s=s.return}vd(function(){var V=f,lt=Uu(a),gt=[];t:{var nt=qd.get(t);if(nt!==void 0){var ot=Vo,Vt=t;switch(t){case"keypress":if(Ho(a)===0)break t;case"keydown":case"keyup":ot=Pv;break;case"focusin":Vt="focus",ot=Bu;break;case"focusout":Vt="blur",ot=Bu;break;case"beforeblur":case"afterblur":ot=Bu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=Ev;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Fv;break;case Vd:case kd:case Xd:ot=Av;break;case Wd:ot=Hv;break;case"scroll":case"scrollend":ot=Mv;break;case"wheel":ot=Vv;break;case"copy":case"cut":case"paste":ot=Cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Ed;break;case"toggle":case"beforetoggle":ot=Xv}var ne=(n&4)!==0,qe=!ne&&(t==="scroll"||t==="scrollend"),j=ne?nt!==null?nt+"Capture":null:nt;ne=[];for(var G=V,J;G!==null;){var pt=G;if(J=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||J===null||j===null||(pt=ys(G,j),pt!=null&&ne.push(ao(G,pt,J))),qe)break;G=G.return}0<ne.length&&(nt=new ot(nt,Vt,null,a,lt),gt.push({event:nt,listeners:ne}))}}if((n&7)===0){t:{if(nt=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",nt&&a!==Du&&(Vt=a.relatedTarget||a.fromElement)&&(Ui(Vt)||Vt[Di]))break t;if((ot||nt)&&(nt=lt.window===lt?lt:(nt=lt.ownerDocument)?nt.defaultView||nt.parentWindow:window,ot?(Vt=a.relatedTarget||a.toElement,ot=V,Vt=Vt?Ui(Vt):null,Vt!==null&&(qe=Z(Vt),ne=Vt.tag,Vt!==qe||ne!==5&&ne!==27&&ne!==6)&&(Vt=null)):(ot=null,Vt=V),ot!==Vt)){if(ne=Md,pt="onMouseLeave",j="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(ne=Ed,pt="onPointerLeave",j="onPointerEnter",G="pointer"),qe=ot==null?nt:W(ot),J=Vt==null?nt:W(Vt),nt=new ne(pt,G+"leave",ot,a,lt),nt.target=qe,nt.relatedTarget=J,pt=null,Ui(lt)===V&&(ne=new ne(j,G+"enter",Vt,a,lt),ne.target=J,ne.relatedTarget=qe,pt=ne),qe=pt,ot&&Vt)e:{for(ne=ot,j=Vt,G=0,J=ne;J;J=Wr(J))G++;for(J=0,pt=j;pt;pt=Wr(pt))J++;for(;0<G-J;)ne=Wr(ne),G--;for(;0<J-G;)j=Wr(j),J--;for(;G--;){if(ne===j||j!==null&&ne===j.alternate)break e;ne=Wr(ne),j=Wr(j)}ne=null}else ne=null;ot!==null&&a_(gt,nt,ot,ne,!1),Vt!==null&&qe!==null&&a_(gt,qe,Vt,ne,!0)}}t:{if(nt=V?W(V):window,ot=nt.nodeName&&nt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&nt.type==="file")var It=Ud;else if(wd(nt))if(Ld)It=t0;else{It=Jv;var fe=Qv}else ot=nt.nodeName,!ot||ot.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?V&&wu(V.elementType)&&(It=Ud):It=$v;if(It&&(It=It(t,V))){Dd(gt,It,a,lt);break t}fe&&fe(t,nt,V),t==="focusout"&&V&&nt.type==="number"&&V.memoizedProps.value!=null&&xn(nt,"number",nt.value)}switch(fe=V?W(V):window,t){case"focusin":(wd(fe)||fe.contentEditable==="true")&&(Er=fe,ku=V,Ds=null);break;case"focusout":Ds=ku=Er=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,Hd(gt,a,lt);break;case"selectionchange":if(i0)break;case"keydown":case"keyup":Hd(gt,a,lt)}var Wt;if(Iu)t:{switch(t){case"compositionstart":var Qt="onCompositionStart";break t;case"compositionend":Qt="onCompositionEnd";break t;case"compositionupdate":Qt="onCompositionUpdate";break t}Qt=void 0}else yr?Rd(t,a)&&(Qt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Qt="onCompositionStart");Qt&&(Td&&a.locale!=="ko"&&(yr||Qt!=="onCompositionStart"?Qt==="onCompositionEnd"&&yr&&(Wt=xd()):(aa=lt,Ou="value"in aa?aa.value:aa.textContent,yr=!0)),fe=Al(V,Qt),0<fe.length&&(Qt=new yd(Qt,t,null,a,lt),gt.push({event:Qt,listeners:fe}),Wt?Qt.data=Wt:(Wt=Cd(a),Wt!==null&&(Qt.data=Wt)))),(Wt=qv?Yv(t,a):Zv(t,a))&&(Qt=Al(V,"onBeforeInput"),0<Qt.length&&(fe=new yd("onBeforeInput","beforeinput",null,a,lt),gt.push({event:fe,listeners:Qt}),fe.data=Wt)),I0(gt,t,V,a,lt)}n_(gt,n)})}function ao(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Al(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ys(t,a),u!=null&&s.unshift(ao(t,u,f)),u=ys(t,n),u!=null&&s.push(ao(t,u,f))),t=t.return}return s}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function a_(t,n,a,s,u){for(var f=n._reactName,x=[];a!==null&&a!==s;){var T=a,N=T.alternate,V=T.stateNode;if(T=T.tag,N!==null&&N===s)break;T!==5&&T!==26&&T!==27||V===null||(N=V,u?(V=ys(a,f),V!=null&&x.unshift(ao(a,V,N))):u||(V=ys(a,f),V!=null&&x.push(ao(a,V,N)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var k0=/\r\n?/g,X0=/\u0000|\uFFFD/g;function r_(t){return(typeof t=="string"?t:""+t).replace(k0,`
`).replace(X0,"")}function s_(t,n){return n=r_(n),r_(t)===n}function Rl(){}function Le(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Nn(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Nn(t,""+s);break;case"className":Ie(t,"class",s);break;case"tabIndex":Ie(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ie(t,a,s);break;case"style":_d(t,s,f);break;case"data":if(n!=="object"){Ie(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Fo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Le(t,n,"name",u.name,u,null),Le(t,n,"formEncType",u.formEncType,u,null),Le(t,n,"formMethod",u.formMethod,u,null),Le(t,n,"formTarget",u.formTarget,u,null)):(Le(t,n,"encType",u.encType,u,null),Le(t,n,"method",u.method,u,null),Le(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Fo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Rl);break;case"onScroll":s!=null&&ge("scroll",t);break;case"onScrollEnd":s!=null&&ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Fo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":ge("beforetoggle",t),ge("toggle",t),me(t,"popover",s);break;case"xlinkActuate":ye(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ye(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ye(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ye(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ye(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ye(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ye(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ye(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ye(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":me(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=xv.get(a)||a,me(t,a,s))}}function pf(t,n,a,s,u,f){switch(a){case"style":_d(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Nn(t,s):(typeof s=="number"||typeof s=="bigint")&&Nn(t,""+s);break;case"onScroll":s!=null&&ge("scroll",t);break;case"onScrollEnd":s!=null&&ge("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Rl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[nn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):me(t,a,s)}}}function vn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",t),ge("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Le(t,n,f,x,a,null)}}u&&Le(t,n,"srcSet",a.srcSet,a,null),s&&Le(t,n,"src",a.src,a,null);return;case"input":ge("invalid",t);var T=f=x=u=null,N=null,V=null;for(s in a)if(a.hasOwnProperty(s)){var lt=a[s];if(lt!=null)switch(s){case"name":u=lt;break;case"type":x=lt;break;case"checked":N=lt;break;case"defaultChecked":V=lt;break;case"value":f=lt;break;case"defaultValue":T=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:Le(t,n,s,lt,a,null)}}Rn(t,f,T,N,V,x,u,!1),_e(t);return;case"select":ge("invalid",t),s=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":x=T;break;case"multiple":s=T;default:Le(t,n,u,T,a,null)}n=f,a=x,t.multiple=!!s,n!=null?ke(t,!!s,n,!1):a!=null&&ke(t,!!s,a,!0);return;case"textarea":ge("invalid",t),f=u=s=null;for(x in a)if(a.hasOwnProperty(x)&&(T=a[x],T!=null))switch(x){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Le(t,n,x,T,a,null)}xr(t,s,u,f),_e(t);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(s=a[N],s!=null))switch(N){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Le(t,n,N,s,a,null)}return;case"dialog":ge("cancel",t),ge("close",t);break;case"iframe":case"object":ge("load",t);break;case"video":case"audio":for(s=0;s<io.length;s++)ge(io[s],t);break;case"image":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"embed":case"source":case"link":ge("error",t),ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in a)if(a.hasOwnProperty(V)&&(s=a[V],s!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Le(t,n,V,s,a,null)}return;default:if(wu(n)){for(lt in a)a.hasOwnProperty(lt)&&(s=a[lt],s!==void 0&&pf(t,n,lt,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Le(t,n,T,s,a,null))}function W0(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,T=null,N=null,V=null,lt=null;for(ot in a){var gt=a[ot];if(a.hasOwnProperty(ot)&&gt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":N=gt;default:s.hasOwnProperty(ot)||Le(t,n,ot,null,s,gt)}}for(var nt in s){var ot=s[nt];if(gt=a[nt],s.hasOwnProperty(nt)&&(ot!=null||gt!=null))switch(nt){case"type":f=ot;break;case"name":u=ot;break;case"checked":V=ot;break;case"defaultChecked":lt=ot;break;case"value":x=ot;break;case"defaultValue":T=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==gt&&Le(t,n,nt,ot,s,gt)}}De(t,x,T,N,V,lt,f,u);return;case"select":ot=x=T=nt=null;for(f in a)if(N=a[f],a.hasOwnProperty(f)&&N!=null)switch(f){case"value":break;case"multiple":ot=N;default:s.hasOwnProperty(f)||Le(t,n,f,null,s,N)}for(u in s)if(f=s[u],N=a[u],s.hasOwnProperty(u)&&(f!=null||N!=null))switch(u){case"value":nt=f;break;case"defaultValue":T=f;break;case"multiple":x=f;default:f!==N&&Le(t,n,u,f,s,N)}n=T,a=x,s=ot,nt!=null?ke(t,!!a,nt,!1):!!s!=!!a&&(n!=null?ke(t,!!a,n,!0):ke(t,!!a,a?[]:"",!1));return;case"textarea":ot=nt=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Le(t,n,T,null,s,u)}for(x in s)if(u=s[x],f=a[x],s.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":nt=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Le(t,n,x,u,s,f)}mn(t,nt,ot);return;case"option":for(var Vt in a)if(nt=a[Vt],a.hasOwnProperty(Vt)&&nt!=null&&!s.hasOwnProperty(Vt))switch(Vt){case"selected":t.selected=!1;break;default:Le(t,n,Vt,null,s,nt)}for(N in s)if(nt=s[N],ot=a[N],s.hasOwnProperty(N)&&nt!==ot&&(nt!=null||ot!=null))switch(N){case"selected":t.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Le(t,n,N,nt,s,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)nt=a[ne],a.hasOwnProperty(ne)&&nt!=null&&!s.hasOwnProperty(ne)&&Le(t,n,ne,null,s,nt);for(V in s)if(nt=s[V],ot=a[V],s.hasOwnProperty(V)&&nt!==ot&&(nt!=null||ot!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Le(t,n,V,nt,s,ot)}return;default:if(wu(n)){for(var qe in a)nt=a[qe],a.hasOwnProperty(qe)&&nt!==void 0&&!s.hasOwnProperty(qe)&&pf(t,n,qe,void 0,s,nt);for(lt in s)nt=s[lt],ot=a[lt],!s.hasOwnProperty(lt)||nt===ot||nt===void 0&&ot===void 0||pf(t,n,lt,nt,s,ot);return}}for(var j in a)nt=a[j],a.hasOwnProperty(j)&&nt!=null&&!s.hasOwnProperty(j)&&Le(t,n,j,null,s,nt);for(gt in s)nt=s[gt],ot=a[gt],!s.hasOwnProperty(gt)||nt===ot||nt==null&&ot==null||Le(t,n,gt,nt,s,ot)}var mf=null,_f=null;function Cl(t){return t.nodeType===9?t:t.ownerDocument}function o_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function l_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function gf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var vf=null;function q0(){var t=window.event;return t&&t.type==="popstate"?t===vf?!1:(vf=t,!0):(vf=null,!1)}var u_=typeof setTimeout=="function"?setTimeout:void 0,Y0=typeof clearTimeout=="function"?clearTimeout:void 0,c_=typeof Promise=="function"?Promise:void 0,Z0=typeof queueMicrotask=="function"?queueMicrotask:typeof c_<"u"?function(t){return c_.resolve(null).then(t).catch(j0)}:u_;function j0(t){setTimeout(function(){throw t})}function xf(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(s===0){t.removeChild(u),ho(n);return}s--}else a!=="$"&&a!=="$?"&&a!=="$!"||s++;a=u}while(a);ho(n)}function Sf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Sf(a),Ms(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function K0(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ba])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ci(t.nextSibling),t===null)break}return null}function Q0(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ci(t.nextSibling),t===null))return null;return t}function ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}function f_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function h_(t,n,a){switch(n=Cl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}var ni=new Map,d_=new Set;function wl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var qi=q.d;q.d={f:J0,r:$0,D:tx,C:ex,L:nx,m:ix,X:rx,S:ax,M:sx};function J0(){var t=qi.f(),n=Ml();return t||n}function $0(t){var n=A(t);n!==null&&n.tag===5&&n.type==="form"?Hp(n):qi.r(t)}var qr=typeof document>"u"?null:document;function p_(t,n,a){var s=qr;if(s&&typeof n=="string"&&n){var u=un(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),d_.has(u)||(d_.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),vn(n,"link",t),Q(n),s.head.appendChild(n)))}}function tx(t){qi.D(t),p_("dns-prefetch",t,null)}function ex(t,n){qi.C(t,n),p_("preconnect",t,n)}function nx(t,n,a){qi.L(t,n,a);var s=qr;if(s&&t&&n){var u='link[rel="preload"][as="'+un(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+un(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+un(a.imageSizes)+'"]')):u+='[href="'+un(t)+'"]';var f=u;switch(n){case"style":f=Yr(t);break;case"script":f=Zr(t)}ni.has(f)||(t=R({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ni.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(ro(f))||n==="script"&&s.querySelector(so(f))||(n=s.createElement("link"),vn(n,"link",t),Q(n),s.head.appendChild(n)))}}function ix(t,n){qi.m(t,n);var a=qr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+un(s)+'"][href="'+un(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Zr(t)}if(!ni.has(f)&&(t=R({rel:"modulepreload",href:t},n),ni.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(so(f)))return}s=a.createElement("link"),vn(s,"link",t),Q(s),a.head.appendChild(s)}}}function ax(t,n,a){qi.S(t,n,a);var s=qr;if(s&&t){var u=et(s).hoistableStyles,f=Yr(t);n=n||"default";var x=u.get(f);if(!x){var T={loading:0,preload:null};if(x=s.querySelector(ro(f)))T.loading=5;else{t=R({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ni.get(f))&&Mf(t,a);var N=x=s.createElement("link");Q(N),vn(N,"link",t),N._p=new Promise(function(V,lt){N.onload=V,N.onerror=lt}),N.addEventListener("load",function(){T.loading|=1}),N.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Dl(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:T},u.set(f,x)}}}function rx(t,n){qi.X(t,n);var a=qr;if(a&&t){var s=et(a).hoistableScripts,u=Zr(t),f=s.get(u);f||(f=a.querySelector(so(u)),f||(t=R({src:t,async:!0},n),(n=ni.get(u))&&yf(t,n),f=a.createElement("script"),Q(f),vn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function sx(t,n){qi.M(t,n);var a=qr;if(a&&t){var s=et(a).hoistableScripts,u=Zr(t),f=s.get(u);f||(f=a.querySelector(so(u)),f||(t=R({src:t,async:!0,type:"module"},n),(n=ni.get(u))&&yf(t,n),f=a.createElement("script"),Q(f),vn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function m_(t,n,a,s){var u=(u=ie.current)?wl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Yr(a.href),a=et(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Yr(a.href);var f=et(u).hoistableStyles,x=f.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=u.querySelector(ro(t)))&&!f._p&&(x.instance=f,x.state.loading=5),ni.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ni.set(t,a),f||ox(u,t,a,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Zr(a),a=et(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Yr(t){return'href="'+un(t)+'"'}function ro(t){return'link[rel="stylesheet"]['+t+"]"}function __(t){return R({},t,{"data-precedence":t.precedence,precedence:null})}function ox(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),vn(n,"link",a),Q(n),t.head.appendChild(n))}function Zr(t){return'[src="'+un(t)+'"]'}function so(t){return"script[async]"+t}function g_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+un(a.href)+'"]');if(s)return n.instance=s,Q(s),s;var u=R({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Q(s),vn(s,"style",u),Dl(s,a.precedence,t),n.instance=s;case"stylesheet":u=Yr(a.href);var f=t.querySelector(ro(u));if(f)return n.state.loading|=4,n.instance=f,Q(f),f;s=__(a),(u=ni.get(u))&&Mf(s,u),f=(t.ownerDocument||t).createElement("link"),Q(f);var x=f;return x._p=new Promise(function(T,N){x.onload=T,x.onerror=N}),vn(f,"link",s),n.state.loading|=4,Dl(f,a.precedence,t),n.instance=f;case"script":return f=Zr(a.src),(u=t.querySelector(so(f)))?(n.instance=u,Q(u),u):(s=a,(u=ni.get(f))&&(s=R({},a),yf(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),Q(u),vn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Dl(s,a.precedence,t));return n.instance}function Dl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,x=0;x<s.length;x++){var T=s[x];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Mf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function yf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ul=null;function v_(t,n,a){if(Ul===null){var s=new Map,u=Ul=new Map;u.set(a,s)}else u=Ul,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ba]||f[en]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var T=s.get(x);T?T.push(f):s.set(x,[f])}}return s}function x_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function lx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function S_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var oo=null;function ux(){}function cx(t,n,a){if(oo===null)throw Error(r(475));var s=oo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Yr(a.href),f=t.querySelector(ro(u));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Ll.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,Q(f);return}f=t.ownerDocument||t,a=__(a),(u=ni.get(u))&&Mf(a,u),f=f.createElement("link"),Q(f);var x=f;x._p=new Promise(function(T,N){x.onload=T,x.onerror=N}),vn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Ll.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function fx(){if(oo===null)throw Error(r(475));var t=oo;return t.stylesheets&&t.count===0&&Ef(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Ef(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Ll(){if(this.count--,this.count===0){if(this.stylesheets)Ef(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Nl=null;function Ef(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Nl=new Map,n.forEach(hx,t),Nl=null,Ll.call(t))}function hx(t,n){if(!(n.state.loading&4)){var a=Nl.get(t);if(a)var s=a.get(null);else{a=new Map,Nl.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||s,f===s&&a.set(null,u),a.set(x,u),this.count++,s=Ll.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var lo={$$typeof:y,Provider:null,Consumer:null,_currentValue:dt,_currentValue2:dt,_threadCount:0};function dx(t,n,a,s,u,f,x,T){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tn(0),this.hiddenUpdates=Tn(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function M_(t,n,a,s,u,f,x,T,N,V,lt,gt){return t=new dx(t,n,a,x,T,N,V,gt),n=1,f===!0&&(n|=24),f=ti(3,null,null,n),t.current=f,f.stateNode=t,n=tc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Oc(f),t}function y_(t){return t?(t=Ar,t):Ar}function E_(t,n,a,s,u,f){u=y_(u),s.context===null?s.context=u:s.pendingContext=u,s=ha(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=da(t,s,n),a!==null&&(wn(a,t,n),Ws(a,t,n))}function T_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Tf(t,n){T_(t,n),(t=t.alternate)&&T_(t,n)}function b_(t){if(t.tag===13){var n=ra(t,67108864);n!==null&&wn(n,t,67108864),Tf(t,67108864)}}var Ol=!0;function px(t,n,a,s){var u=C.T;C.T=null;var f=q.p;try{q.p=2,bf(t,n,a,s)}finally{q.p=f,C.T=u}}function mx(t,n,a,s){var u=C.T;C.T=null;var f=q.p;try{q.p=8,bf(t,n,a,s)}finally{q.p=f,C.T=u}}function bf(t,n,a,s){if(Ol){var u=Af(s);if(u===null)df(t,n,s,Pl,a),R_(t,s);else if(gx(u,t,n,a,s))s.stopPropagation();else if(R_(t,s),n&4&&-1<_x.indexOf(t)){for(;u!==null;){var f=A(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Ct(f.pendingLanes);if(x!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;x;){var N=1<<31-Yt(x);T.entanglements[1]|=N,x&=~N}Ei(f),(Ve&6)===0&&(vl=ct()+500,no(0))}}break;case 13:T=ra(f,2),T!==null&&wn(T,f,2),Ml(),Tf(f,2)}if(f=Af(s),f===null&&df(t,n,s,Pl,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else df(t,n,s,null,a)}}function Af(t){return t=Uu(t),Rf(t)}var Pl=null;function Rf(t){if(Pl=null,t=Ui(t),t!==null){var n=Z(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=St(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Pl=t,null}function A_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vt()){case ft:return 2;case Ht:return 8;case wt:case zt:return 32;case de:return 268435456;default:return 32}default:return 32}}var Cf=!1,Sa=null,Ma=null,ya=null,uo=new Map,co=new Map,Ea=[],_x="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function R_(t,n){switch(t){case"focusin":case"focusout":Sa=null;break;case"dragenter":case"dragleave":Ma=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(n.pointerId)}}function fo(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=A(n),n!==null&&b_(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function gx(t,n,a,s,u){switch(n){case"focusin":return Sa=fo(Sa,t,n,a,s,u),!0;case"dragenter":return Ma=fo(Ma,t,n,a,s,u),!0;case"mouseover":return ya=fo(ya,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return uo.set(f,fo(uo.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,co.set(f,fo(co.get(f)||null,t,n,a,s,u)),!0}return!1}function C_(t){var n=Ui(t.target);if(n!==null){var a=Z(n);if(a!==null){if(n=a.tag,n===13){if(n=St(a),n!==null){t.blockedOn=n,zo(t.priority,function(){if(a.tag===13){var s=Xn(),u=ra(a,s);u!==null&&wn(u,a,s),Tf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Af(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Du=s,a.target.dispatchEvent(s),Du=null}else return n=A(a),n!==null&&b_(n),t.blockedOn=a,!1;n.shift()}return!0}function w_(t,n,a){zl(t)&&a.delete(n)}function vx(){Cf=!1,Sa!==null&&zl(Sa)&&(Sa=null),Ma!==null&&zl(Ma)&&(Ma=null),ya!==null&&zl(ya)&&(ya=null),uo.forEach(w_),co.forEach(w_)}function Bl(t,n){t.blockedOn===n&&(t.blockedOn=null,Cf||(Cf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,vx)))}var Fl=null;function D_(t){Fl!==t&&(Fl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Fl===t&&(Fl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(Rf(s||a)===null)continue;break}var f=A(a);f!==null&&(t.splice(n,3),n-=3,_c(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function ho(t){function n(N){return Bl(N,t)}Sa!==null&&Bl(Sa,t),Ma!==null&&Bl(Ma,t),ya!==null&&Bl(ya,t),uo.forEach(n),co.forEach(n);for(var a=0;a<Ea.length;a++){var s=Ea[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ea.length&&(a=Ea[0],a.blockedOn===null);)C_(a),a.blockedOn===null&&Ea.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],x=u[nn]||null;if(typeof f=="function")x||D_(a);else if(x){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[nn]||null)T=x.formAction;else if(Rf(u)!==null)continue}else T=x.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),D_(a)}}}function wf(t){this._internalRoot=t}Il.prototype.render=wf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Xn();E_(a,s,t,n,null,null)},Il.prototype.unmount=wf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;t.tag===0&&kr(),E_(t.current,2,null,t,null,null),Ml(),n[Di]=null}};function Il(t){this._internalRoot=t}Il.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ss();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ea.length&&n!==0&&n<Ea[a].priority;a++);Ea.splice(a,0,t),a===0&&C_(t)}};var U_=e.version;if(U_!=="19.0.0")throw Error(r(527,U_,"19.0.0"));q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=it(n),t=t!==null?Et(t):null,t=t===null?null:t.stateNode,t};var xx={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:C,findFiberByHostInstance:Ui,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{jt=Hl.inject(xx),Gt=Hl}catch{}}return mo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=Zp,f=jp,x=Kp,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=M_(t,1,!1,null,null,a,s,u,f,x,T,null),t[Di]=n.current,hf(t.nodeType===8?t.parentNode:t),new wf(n)},mo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=Zp,x=jp,T=Kp,N=null,V=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(N=a.unstable_transitionCallbacks),a.formState!==void 0&&(V=a.formState)),n=M_(t,1,!0,n,a??null,s,u,f,x,T,N,V),n.context=y_(null),a=n.current,s=Xn(),u=ha(s),u.callback=null,da(a,u,s),n.current.lanes=s,bn(n,s),Ei(n),t[Di]=n.current,hf(t),new Il(n)},mo.version="19.0.0",mo}var G_;function wx(){if(G_)return Lf.exports;G_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Lf.exports=Cx(),Lf.exports}var Dx=wx();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const id="175",Ux=0,V_=1,Lx=2,Hg=1,Nx=2,Ji=3,Pa=0,Bn=1,bi=2,Na=0,cs=1,k_=2,X_=3,W_=4,Ox=5,fr=100,Px=101,zx=102,Bx=103,Fx=104,Ix=200,Hx=201,Gx=202,Vx=203,mh=204,_h=205,kx=206,Xx=207,Wx=208,qx=209,Yx=210,Zx=211,jx=212,Kx=213,Qx=214,gh=0,vh=1,xh=2,hs=3,Sh=4,Mh=5,yh=6,Eh=7,Gg=0,Jx=1,$x=2,Oa=0,tS=1,eS=2,nS=3,iS=4,aS=5,rS=6,sS=7,Vg=300,ds=301,ps=302,Th=303,bh=304,Eu=306,Ah=1e3,dr=1001,Rh=1002,_i=1003,oS=1004,Gl=1005,Ai=1006,zf=1007,pr=1008,na=1009,kg=1010,Xg=1011,To=1012,ad=1013,mr=1014,$i=1015,wo=1016,rd=1017,sd=1018,bo=1020,Wg=35902,qg=1021,Yg=1022,mi=1023,Zg=1024,jg=1025,Ao=1026,Ro=1027,Kg=1028,od=1029,Qg=1030,ld=1031,ud=1033,hu=33776,du=33777,pu=33778,mu=33779,Ch=35840,wh=35841,Dh=35842,Uh=35843,Lh=36196,Nh=37492,Oh=37496,Ph=37808,zh=37809,Bh=37810,Fh=37811,Ih=37812,Hh=37813,Gh=37814,Vh=37815,kh=37816,Xh=37817,Wh=37818,qh=37819,Yh=37820,Zh=37821,_u=36492,jh=36494,Kh=36495,Jg=36283,Qh=36284,Jh=36285,$h=36286,lS=3200,uS=3201,cS=0,fS=1,La="",ai="srgb",ms="srgb-linear",xu="linear",Oe="srgb",jr=7680,q_=519,hS=512,dS=513,pS=514,$g=515,mS=516,_S=517,gS=518,vS=519,Y_=35044,Z_="300 es",ta=2e3,Su=2001;class gs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bf=Math.PI/180,td=180/Math.PI;function Do(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[o&255]+yn[o>>8&255]+yn[o>>16&255]+yn[o>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[i&63|128]+yn[i>>8&255]+"-"+yn[i>>16&255]+yn[i>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function ve(o,e,i){return Math.max(e,Math.min(i,o))}function xS(o,e){return(o%e+e)%e}function Ff(o,e,i){return(1-i)*o+i*e}function _o(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function zn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,i=0){ze.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ve(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(e,i,r,l,c,h,d,p,m){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,p,m)}set(e,i,r,l,c,h,d,p,m){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=p,_[6]=r,_[7]=h,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],_=r[4],v=r[7],S=r[2],y=r[5],b=r[8],w=l[0],M=l[3],g=l[6],P=l[1],O=l[4],D=l[7],H=l[2],I=l[5],B=l[8];return c[0]=h*w+d*P+p*H,c[3]=h*M+d*O+p*I,c[6]=h*g+d*D+p*B,c[1]=m*w+_*P+v*H,c[4]=m*M+_*O+v*I,c[7]=m*g+_*D+v*B,c[2]=S*w+y*P+b*H,c[5]=S*M+y*O+b*I,c[8]=S*g+y*D+b*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return i*h*_-i*d*m-r*c*_+r*d*p+l*c*m-l*h*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],_=e[8],v=_*h-d*m,S=d*p-_*c,y=m*c-h*p,b=i*v+r*S+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=v*w,e[1]=(l*m-_*r)*w,e[2]=(d*r-l*h)*w,e[3]=S*w,e[4]=(_*i-l*p)*w,e[5]=(l*c-d*i)*w,e[6]=y*w,e[7]=(r*p-m*i)*w,e[8]=(h*i-r*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*h+m*d)+h+e,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(If.makeScale(e,i)),this}rotate(e){return this.premultiply(If.makeRotation(-e)),this}translate(e,i){return this.premultiply(If.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const If=new se;function tv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Co(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function SS(){const o=Co("canvas");return o.style.display="block",o}const j_={};function gu(o){o in j_||(j_[o]=!0,console.warn(o))}function MS(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function yS(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ES(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const K_=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Q_=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function TS(){const o={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Oe&&(l.r=ea(l.r),l.g=ea(l.g),l.b=ea(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Oe&&(l.r=fs(l.r),l.g=fs(l.g),l.b=fs(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===La?xu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[ms]:{primaries:e,whitePoint:r,transfer:xu,toXYZ:K_,fromXYZ:Q_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:r,transfer:Oe,toXYZ:K_,fromXYZ:Q_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),o}const be=TS();function ea(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function fs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Kr;class bS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Kr===void 0&&(Kr=Co("canvas")),Kr.width=e.width,Kr.height=e.height;const l=Kr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Kr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Co("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ea(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ea(i[r]/255)*255):i[r]=ea(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let AS=0;class cd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=Do(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Hf(l[h].image)):c.push(Hf(l[h]))}else c=Hf(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Hf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?bS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let RS=0;class Un extends gs{constructor(e=Un.DEFAULT_IMAGE,i=Un.DEFAULT_MAPPING,r=dr,l=dr,c=Ai,h=pr,d=mi,p=na,m=Un.DEFAULT_ANISOTROPY,_=La){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Do(),this.name="",this.source=new cd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ah:e.x=e.x-Math.floor(e.x);break;case dr:e.x=e.x<0?0:1;break;case Rh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ah:e.y=e.y-Math.floor(e.y);break;case dr:e.y=e.y<0?0:1;break;case Rh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Vg;Un.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,i=0,r=0,l=1){Ze.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const p=e.elements,m=p[0],_=p[4],v=p[8],S=p[1],y=p[5],b=p[9],w=p[2],M=p[6],g=p[10];if(Math.abs(_-S)<.01&&Math.abs(v-w)<.01&&Math.abs(b-M)<.01){if(Math.abs(_+S)<.1&&Math.abs(v+w)<.1&&Math.abs(b+M)<.1&&Math.abs(m+y+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(m+1)/2,D=(y+1)/2,H=(g+1)/2,I=(_+S)/4,B=(v+w)/4,K=(b+M)/4;return O>D&&O>H?O<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(O),l=I/r,c=B/r):D>H?D<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),r=I/l,c=K/l):H<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),r=B/c,l=K/c),this.set(r,l,c,i),this}let P=Math.sqrt((M-b)*(M-b)+(v-w)*(v-w)+(S-_)*(S-_));return Math.abs(P)<.001&&(P=1),this.x=(M-b)/P,this.y=(v-w)/P,this.z=(S-_)/P,this.w=Math.acos((m+y+g-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this.w=ve(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this.w=ve(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CS extends gs{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new Ze(0,0,e,i),this.scissorTest=!1,this.viewport=new Ze(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Un(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new cd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _r extends CS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class ev extends Un{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wS extends Un{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let p=r[l+0],m=r[l+1],_=r[l+2],v=r[l+3];const S=c[h+0],y=c[h+1],b=c[h+2],w=c[h+3];if(d===0){e[i+0]=p,e[i+1]=m,e[i+2]=_,e[i+3]=v;return}if(d===1){e[i+0]=S,e[i+1]=y,e[i+2]=b,e[i+3]=w;return}if(v!==w||p!==S||m!==y||_!==b){let M=1-d;const g=p*S+m*y+_*b+v*w,P=g>=0?1:-1,O=1-g*g;if(O>Number.EPSILON){const H=Math.sqrt(O),I=Math.atan2(H,g*P);M=Math.sin(M*I)/H,d=Math.sin(d*I)/H}const D=d*P;if(p=p*M+S*D,m=m*M+y*D,_=_*M+b*D,v=v*M+w*D,M===1-d){const H=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=H,m*=H,_*=H,v*=H}}e[i]=p,e[i+1]=m,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],p=r[l+1],m=r[l+2],_=r[l+3],v=c[h],S=c[h+1],y=c[h+2],b=c[h+3];return e[i]=d*b+_*v+p*y-m*S,e[i+1]=p*b+_*S+m*v-d*y,e[i+2]=m*b+_*y+d*S-p*v,e[i+3]=_*b-d*v-p*S-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(l/2),v=d(c/2),S=p(r/2),y=p(l/2),b=p(c/2);switch(h){case"XYZ":this._x=S*_*v+m*y*b,this._y=m*y*v-S*_*b,this._z=m*_*b+S*y*v,this._w=m*_*v-S*y*b;break;case"YXZ":this._x=S*_*v+m*y*b,this._y=m*y*v-S*_*b,this._z=m*_*b-S*y*v,this._w=m*_*v+S*y*b;break;case"ZXY":this._x=S*_*v-m*y*b,this._y=m*y*v+S*_*b,this._z=m*_*b+S*y*v,this._w=m*_*v-S*y*b;break;case"ZYX":this._x=S*_*v-m*y*b,this._y=m*y*v+S*_*b,this._z=m*_*b-S*y*v,this._w=m*_*v+S*y*b;break;case"YZX":this._x=S*_*v+m*y*b,this._y=m*y*v+S*_*b,this._z=m*_*b-S*y*v,this._w=m*_*v-S*y*b;break;case"XZY":this._x=S*_*v-m*y*b,this._y=m*y*v-S*_*b,this._z=m*_*b+S*y*v,this._w=m*_*v+S*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],p=i[9],m=i[2],_=i[6],v=i[10],S=r+d+v;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(_-p)*y,this._y=(c-m)*y,this._z=(h-l)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(_-p)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+m)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(c-m)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(h-l)/y,this._x=(c+m)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ve(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,p=i._y,m=i._z,_=i._w;return this._x=r*_+h*d+l*m-c*p,this._y=l*_+h*p+c*d-r*m,this._z=c*_+h*m+r*p-l*d,this._w=h*_-r*d-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),v=Math.sin((1-i)*_)/m,S=Math.sin(i*_)/m;return this._w=h*v+this._w*S,this._x=r*v+this._x*S,this._y=l*v+this._y*S,this._z=c*v+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(e=0,i=0,r=0){tt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(J_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(J_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*l-d*r),_=2*(d*i-c*l),v=2*(c*r-h*i);return this.x=i+p*m+h*v-d*_,this.y=r+p*_+d*m-c*v,this.z=l+p*v+c*_-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*h-r*p,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Gf.copy(this).projectOnVector(e),this.sub(Gf)}reflect(e){return this.sub(Gf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ve(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gf=new tt,J_=new Uo;class Lo{constructor(e=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(fi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(fi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=fi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,fi):fi.fromBufferAttribute(c,h),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Vl.copy(r.boundingBox)),Vl.applyMatrix4(e.matrixWorld),this.union(Vl)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(go),kl.subVectors(this.max,go),Qr.subVectors(e.a,go),Jr.subVectors(e.b,go),$r.subVectors(e.c,go),ba.subVectors(Jr,Qr),Aa.subVectors($r,Jr),ir.subVectors(Qr,$r);let i=[0,-ba.z,ba.y,0,-Aa.z,Aa.y,0,-ir.z,ir.y,ba.z,0,-ba.x,Aa.z,0,-Aa.x,ir.z,0,-ir.x,-ba.y,ba.x,0,-Aa.y,Aa.x,0,-ir.y,ir.x,0];return!Vf(i,Qr,Jr,$r,kl)||(i=[1,0,0,0,1,0,0,0,1],!Vf(i,Qr,Jr,$r,kl))?!1:(Xl.crossVectors(ba,Aa),i=[Xl.x,Xl.y,Xl.z],Vf(i,Qr,Jr,$r,kl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yi=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],fi=new tt,Vl=new Lo,Qr=new tt,Jr=new tt,$r=new tt,ba=new tt,Aa=new tt,ir=new tt,go=new tt,kl=new tt,Xl=new tt,ar=new tt;function Vf(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){ar.fromArray(o,c);const d=l.x*Math.abs(ar.x)+l.y*Math.abs(ar.y)+l.z*Math.abs(ar.z),p=e.dot(ar),m=i.dot(ar),_=r.dot(ar);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const DS=new Lo,vo=new tt,kf=new tt;class Tu{constructor(e=new tt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):DS.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vo.subVectors(e,this.center);const i=vo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(vo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vo.copy(e.center).add(kf)),this.expandByPoint(vo.copy(e.center).sub(kf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zi=new tt,Xf=new tt,Wl=new tt,Ra=new tt,Wf=new tt,ql=new tt,qf=new tt;class nv{constructor(e=new tt,i=new tt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Zi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,i),Zi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Xf.copy(e).add(i).multiplyScalar(.5),Wl.copy(i).sub(e).normalize(),Ra.copy(this.origin).sub(Xf);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Wl),d=Ra.dot(this.direction),p=-Ra.dot(Wl),m=Ra.lengthSq(),_=Math.abs(1-h*h);let v,S,y,b;if(_>0)if(v=h*p-d,S=h*d-p,b=c*_,v>=0)if(S>=-b)if(S<=b){const w=1/_;v*=w,S*=w,y=v*(v+h*S+2*d)+S*(h*v+S+2*p)+m}else S=c,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*p)+m;else S=-c,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*p)+m;else S<=-b?(v=Math.max(0,-(-h*c+d)),S=v>0?-c:Math.min(Math.max(-c,-p),c),y=-v*v+S*(S+2*p)+m):S<=b?(v=0,S=Math.min(Math.max(-c,-p),c),y=S*(S+2*p)+m):(v=Math.max(0,-(h*c+d)),S=v>0?c:Math.min(Math.max(-c,-p),c),y=-v*v+S*(S+2*p)+m);else S=h>0?-c:c,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Xf).addScaledVector(Wl,S),y}intersectSphere(e,i){Zi.subVectors(e.center,this.origin);const r=Zi.dot(this.direction),l=Zi.dot(Zi)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,S=this.origin;return m>=0?(r=(e.min.x-S.x)*m,l=(e.max.x-S.x)*m):(r=(e.max.x-S.x)*m,l=(e.min.x-S.x)*m),_>=0?(c=(e.min.y-S.y)*_,h=(e.max.y-S.y)*_):(c=(e.max.y-S.y)*_,h=(e.min.y-S.y)*_),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-S.z)*v,p=(e.max.z-S.z)*v):(d=(e.max.z-S.z)*v,p=(e.min.z-S.z)*v),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,i,r,l,c){Wf.subVectors(i,e),ql.subVectors(r,e),qf.crossVectors(Wf,ql);let h=this.direction.dot(qf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ra.subVectors(this.origin,e);const p=d*this.direction.dot(ql.crossVectors(Ra,ql));if(p<0)return null;const m=d*this.direction.dot(Wf.cross(Ra));if(m<0||p+m>h)return null;const _=-d*Ra.dot(qf);return _<0?null:this.at(_/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,i,r,l,c,h,d,p,m,_,v,S,y,b,w,M){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,p,m,_,v,S,y,b,w,M)}set(e,i,r,l,c,h,d,p,m,_,v,S,y,b,w,M){const g=this.elements;return g[0]=e,g[4]=i,g[8]=r,g[12]=l,g[1]=c,g[5]=h,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=v,g[14]=S,g[3]=y,g[7]=b,g[11]=w,g[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ts.setFromMatrixColumn(e,0).length(),c=1/ts.setFromMatrixColumn(e,1).length(),h=1/ts.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const S=h*_,y=h*v,b=d*_,w=d*v;i[0]=p*_,i[4]=-p*v,i[8]=m,i[1]=y+b*m,i[5]=S-w*m,i[9]=-d*p,i[2]=w-S*m,i[6]=b+y*m,i[10]=h*p}else if(e.order==="YXZ"){const S=p*_,y=p*v,b=m*_,w=m*v;i[0]=S+w*d,i[4]=b*d-y,i[8]=h*m,i[1]=h*v,i[5]=h*_,i[9]=-d,i[2]=y*d-b,i[6]=w+S*d,i[10]=h*p}else if(e.order==="ZXY"){const S=p*_,y=p*v,b=m*_,w=m*v;i[0]=S-w*d,i[4]=-h*v,i[8]=b+y*d,i[1]=y+b*d,i[5]=h*_,i[9]=w-S*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const S=h*_,y=h*v,b=d*_,w=d*v;i[0]=p*_,i[4]=b*m-y,i[8]=S*m+w,i[1]=p*v,i[5]=w*m+S,i[9]=y*m-b,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const S=h*p,y=h*m,b=d*p,w=d*m;i[0]=p*_,i[4]=w-S*v,i[8]=b*v+y,i[1]=v,i[5]=h*_,i[9]=-d*_,i[2]=-m*_,i[6]=y*v+b,i[10]=S-w*v}else if(e.order==="XZY"){const S=h*p,y=h*m,b=d*p,w=d*m;i[0]=p*_,i[4]=-v,i[8]=m*_,i[1]=S*v+w,i[5]=h*_,i[9]=y*v-b,i[2]=b*v-y,i[6]=d*_,i[10]=w*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(US,e,LS)}lookAt(e,i,r){const l=this.elements;return Wn.subVectors(e,i),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Ca.crossVectors(r,Wn),Ca.lengthSq()===0&&(Math.abs(r.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Ca.crossVectors(r,Wn)),Ca.normalize(),Yl.crossVectors(Wn,Ca),l[0]=Ca.x,l[4]=Yl.x,l[8]=Wn.x,l[1]=Ca.y,l[5]=Yl.y,l[9]=Wn.y,l[2]=Ca.z,l[6]=Yl.z,l[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],_=r[1],v=r[5],S=r[9],y=r[13],b=r[2],w=r[6],M=r[10],g=r[14],P=r[3],O=r[7],D=r[11],H=r[15],I=l[0],B=l[4],K=l[8],C=l[12],R=l[1],F=l[5],ut=l[9],at=l[13],mt=l[2],ht=l[6],X=l[10],rt=l[14],Z=l[3],St=l[7],L=l[11],it=l[15];return c[0]=h*I+d*R+p*mt+m*Z,c[4]=h*B+d*F+p*ht+m*St,c[8]=h*K+d*ut+p*X+m*L,c[12]=h*C+d*at+p*rt+m*it,c[1]=_*I+v*R+S*mt+y*Z,c[5]=_*B+v*F+S*ht+y*St,c[9]=_*K+v*ut+S*X+y*L,c[13]=_*C+v*at+S*rt+y*it,c[2]=b*I+w*R+M*mt+g*Z,c[6]=b*B+w*F+M*ht+g*St,c[10]=b*K+w*ut+M*X+g*L,c[14]=b*C+w*at+M*rt+g*it,c[3]=P*I+O*R+D*mt+H*Z,c[7]=P*B+O*F+D*ht+H*St,c[11]=P*K+O*ut+D*X+H*L,c[15]=P*C+O*at+D*rt+H*it,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],p=e[9],m=e[13],_=e[2],v=e[6],S=e[10],y=e[14],b=e[3],w=e[7],M=e[11],g=e[15];return b*(+c*p*v-l*m*v-c*d*S+r*m*S+l*d*y-r*p*y)+w*(+i*p*y-i*m*S+c*h*S-l*h*y+l*m*_-c*p*_)+M*(+i*m*v-i*d*y-c*h*v+r*h*y+c*d*_-r*m*_)+g*(-l*d*_-i*p*v+i*d*S+l*h*v-r*h*S+r*p*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],_=e[8],v=e[9],S=e[10],y=e[11],b=e[12],w=e[13],M=e[14],g=e[15],P=v*M*m-w*S*m+w*p*y-d*M*y-v*p*g+d*S*g,O=b*S*m-_*M*m-b*p*y+h*M*y+_*p*g-h*S*g,D=_*w*m-b*v*m+b*d*y-h*w*y-_*d*g+h*v*g,H=b*v*p-_*w*p-b*d*S+h*w*S+_*d*M-h*v*M,I=i*P+r*O+l*D+c*H;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/I;return e[0]=P*B,e[1]=(w*S*c-v*M*c-w*l*y+r*M*y+v*l*g-r*S*g)*B,e[2]=(d*M*c-w*p*c+w*l*m-r*M*m-d*l*g+r*p*g)*B,e[3]=(v*p*c-d*S*c-v*l*m+r*S*m+d*l*y-r*p*y)*B,e[4]=O*B,e[5]=(_*M*c-b*S*c+b*l*y-i*M*y-_*l*g+i*S*g)*B,e[6]=(b*p*c-h*M*c-b*l*m+i*M*m+h*l*g-i*p*g)*B,e[7]=(h*S*c-_*p*c+_*l*m-i*S*m-h*l*y+i*p*y)*B,e[8]=D*B,e[9]=(b*v*c-_*w*c-b*r*y+i*w*y+_*r*g-i*v*g)*B,e[10]=(h*w*c-b*d*c+b*r*m-i*w*m-h*r*g+i*d*g)*B,e[11]=(_*d*c-h*v*c-_*r*m+i*v*m+h*r*y-i*d*y)*B,e[12]=H*B,e[13]=(_*w*l-b*v*l+b*r*S-i*w*S-_*r*M+i*v*M)*B,e[14]=(b*d*l-h*w*l-b*r*p+i*w*p+h*r*M-i*d*M)*B,e[15]=(h*v*l-_*d*l+_*r*p-i*v*p-h*r*S+i*d*S)*B,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,p=e.z,m=c*h,_=c*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,_*d+r,_*p-l*h,0,m*p-l*d,_*p+l*h,c*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,p=i._w,m=c+c,_=h+h,v=d+d,S=c*m,y=c*_,b=c*v,w=h*_,M=h*v,g=d*v,P=p*m,O=p*_,D=p*v,H=r.x,I=r.y,B=r.z;return l[0]=(1-(w+g))*H,l[1]=(y+D)*H,l[2]=(b-O)*H,l[3]=0,l[4]=(y-D)*I,l[5]=(1-(S+g))*I,l[6]=(M+P)*I,l[7]=0,l[8]=(b+O)*B,l[9]=(M-P)*B,l[10]=(1-(S+w))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=ts.set(l[0],l[1],l[2]).length();const h=ts.set(l[4],l[5],l[6]).length(),d=ts.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],hi.copy(this);const m=1/c,_=1/h,v=1/d;return hi.elements[0]*=m,hi.elements[1]*=m,hi.elements[2]*=m,hi.elements[4]*=_,hi.elements[5]*=_,hi.elements[6]*=_,hi.elements[8]*=v,hi.elements[9]*=v,hi.elements[10]*=v,i.setFromRotationMatrix(hi),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=ta){const p=this.elements,m=2*c/(i-e),_=2*c/(r-l),v=(i+e)/(i-e),S=(r+l)/(r-l);let y,b;if(d===ta)y=-(h+c)/(h-c),b=-2*h*c/(h-c);else if(d===Su)y=-h/(h-c),b=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=ta){const p=this.elements,m=1/(i-e),_=1/(r-l),v=1/(h-c),S=(i+e)*m,y=(r+l)*_;let b,w;if(d===ta)b=(h+c)*v,w=-2*v;else if(d===Su)b=c*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-S,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=w,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ts=new tt,hi=new je,US=new tt(0,0,0),LS=new tt(1,1,1),Ca=new tt,Yl=new tt,Wn=new tt,$_=new je,tg=new Uo;class ia{constructor(e=0,i=0,r=0,l=ia.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],_=l[9],v=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(ve(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-ve(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(ve(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return $_.makeRotationFromQuaternion(e),this.setFromRotationMatrix($_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return tg.setFromEuler(this),this.setFromQuaternion(tg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ia.DEFAULT_ORDER="XYZ";class iv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let NS=0;const eg=new tt,es=new Uo,ji=new je,Zl=new tt,xo=new tt,OS=new tt,PS=new Uo,ng=new tt(1,0,0),ig=new tt(0,1,0),ag=new tt(0,0,1),rg={type:"added"},zS={type:"removed"},ns={type:"childadded",child:null},Yf={type:"childremoved",child:null};class Fn extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=Do(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new tt,i=new ia,r=new Uo,l=new tt(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new se}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return es.setFromAxisAngle(e,i),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,i){return es.setFromAxisAngle(e,i),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(ng,e)}rotateY(e){return this.rotateOnAxis(ig,e)}rotateZ(e){return this.rotateOnAxis(ag,e)}translateOnAxis(e,i){return eg.copy(e).applyQuaternion(this.quaternion),this.position.add(eg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(ng,e)}translateY(e){return this.translateOnAxis(ig,e)}translateZ(e){return this.translateOnAxis(ag,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Zl.copy(e):Zl.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(xo,Zl,this.up):ji.lookAt(Zl,xo,this.up),this.quaternion.setFromRotationMatrix(ji),l&&(ji.extractRotation(l.matrixWorld),es.setFromRotationMatrix(ji),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rg),ns.child=e,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(zS),Yf.child=e,this.dispatchEvent(Yf),Yf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rg),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,OS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,PS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];c(e.shapes,v)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),_=h(e.images),v=h(e.shapes),S=h(e.skeletons),y=h(e.animations),b=h(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Fn.DEFAULT_UP=new tt(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new tt,Ki=new tt,Zf=new tt,Qi=new tt,is=new tt,as=new tt,sg=new tt,jf=new tt,Kf=new tt,Qf=new tt,Jf=new Ze,$f=new Ze,th=new Ze;class pi{constructor(e=new tt,i=new tt,r=new tt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),di.subVectors(e,i),l.cross(di);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){di.subVectors(l,i),Ki.subVectors(r,i),Zf.subVectors(e,i);const h=di.dot(di),d=di.dot(Ki),p=di.dot(Zf),m=Ki.dot(Ki),_=Ki.dot(Zf),v=h*m-d*d;if(v===0)return c.set(0,0,0),null;const S=1/v,y=(m*p-d*_)*S,b=(h*_-d*p)*S;return c.set(1-y-b,b,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,i,r,l,c,h,d,p){return this.getBarycoord(e,i,r,l,Qi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Qi.x),p.addScaledVector(h,Qi.y),p.addScaledVector(d,Qi.z),p)}static getInterpolatedAttribute(e,i,r,l,c,h){return Jf.setScalar(0),$f.setScalar(0),th.setScalar(0),Jf.fromBufferAttribute(e,i),$f.fromBufferAttribute(e,r),th.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Jf,c.x),h.addScaledVector($f,c.y),h.addScaledVector(th,c.z),h}static isFrontFacing(e,i,r,l){return di.subVectors(r,i),Ki.subVectors(e,i),di.cross(Ki).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),di.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return pi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return pi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;is.subVectors(l,r),as.subVectors(c,r),jf.subVectors(e,r);const p=is.dot(jf),m=as.dot(jf);if(p<=0&&m<=0)return i.copy(r);Kf.subVectors(e,l);const _=is.dot(Kf),v=as.dot(Kf);if(_>=0&&v<=_)return i.copy(l);const S=p*v-_*m;if(S<=0&&p>=0&&_<=0)return h=p/(p-_),i.copy(r).addScaledVector(is,h);Qf.subVectors(e,c);const y=is.dot(Qf),b=as.dot(Qf);if(b>=0&&y<=b)return i.copy(c);const w=y*m-p*b;if(w<=0&&m>=0&&b<=0)return d=m/(m-b),i.copy(r).addScaledVector(as,d);const M=_*b-y*v;if(M<=0&&v-_>=0&&y-b>=0)return sg.subVectors(c,l),d=(v-_)/(v-_+(y-b)),i.copy(l).addScaledVector(sg,d);const g=1/(M+w+S);return h=w*g,d=S*g,i.copy(r).addScaledVector(is,h).addScaledVector(as,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const av={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wa={h:0,s:0,l:0},jl={h:0,s:0,l:0};function eh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ce{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,be.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=be.workingColorSpace){return this.r=e,this.g=i,this.b=r,be.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=be.workingColorSpace){if(e=xS(e,1),i=ve(i,0,1),r=ve(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=eh(h,c,e+1/3),this.g=eh(h,c,e),this.b=eh(h,c,e-1/3)}return be.toWorkingColorSpace(this,l),this}setStyle(e,i=ai){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ai){const r=av[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}copyLinearToSRGB(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return be.fromWorkingColorSpace(En.copy(this),e),Math.round(ve(En.r*255,0,255))*65536+Math.round(ve(En.g*255,0,255))*256+Math.round(ve(En.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=be.workingColorSpace){be.fromWorkingColorSpace(En.copy(this),i);const r=En.r,l=En.g,c=En.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let p,m;const _=(d+h)/2;if(d===h)p=0,m=0;else{const v=h-d;switch(m=_<=.5?v/(h+d):v/(2-h-d),h){case r:p=(l-c)/v+(l<c?6:0);break;case l:p=(c-r)/v+2;break;case c:p=(r-l)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,i=be.workingColorSpace){return be.fromWorkingColorSpace(En.copy(this),i),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=ai){be.fromWorkingColorSpace(En.copy(this),e);const i=En.r,r=En.g,l=En.b;return e!==ai?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(wa),this.setHSL(wa.h+e,wa.s+i,wa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(wa),e.getHSL(jl);const r=Ff(wa.h,jl.h,i),l=Ff(wa.s,jl.s,i),c=Ff(wa.l,jl.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new Ce;Ce.NAMES=av;let BS=0;class No extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=Do(),this.name="",this.type="Material",this.blending=cs,this.side=Pa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mh,this.blendDst=_h,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=q_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(r.blending=this.blending),this.side!==Pa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==mh&&(r.blendSrc=this.blendSrc),this.blendDst!==_h&&(r.blendDst=this.blendDst),this.blendEquation!==fr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==q_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fd extends No{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ia,this.combine=Gg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $e=new tt,Kl=new ze;let FS=0;class Ci{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:FS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Y_,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Kl.fromBufferAttribute(this,i),Kl.applyMatrix3(e),this.setXY(i,Kl.x,Kl.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)$e.fromBufferAttribute(this,i),$e.applyMatrix3(e),this.setXYZ(i,$e.x,$e.y,$e.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)$e.fromBufferAttribute(this,i),$e.applyMatrix4(e),this.setXYZ(i,$e.x,$e.y,$e.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)$e.fromBufferAttribute(this,i),$e.applyNormalMatrix(e),this.setXYZ(i,$e.x,$e.y,$e.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)$e.fromBufferAttribute(this,i),$e.transformDirection(e),this.setXYZ(i,$e.x,$e.y,$e.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=_o(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=zn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=_o(i,this.array)),i}setX(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=_o(i,this.array)),i}setY(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=_o(i,this.array)),i}setZ(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=_o(i,this.array)),i}setW(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array),c=zn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Y_&&(e.usage=this.usage),e}}class rv extends Ci{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class sv extends Ci{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class gi extends Ci{constructor(e,i,r){super(new Float32Array(e),i,r)}}let IS=0;const ii=new je,nh=new Fn,rs=new tt,qn=new Lo,So=new Lo,dn=new tt;class wi extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=Do(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tv(e)?sv:rv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new se().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,i,r){return ii.makeTranslation(e,i,r),this.applyMatrix4(ii),this}scale(e,i,r){return ii.makeScale(e,i,r),this.applyMatrix4(ii),this}lookAt(e){return nh.lookAt(e),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new gi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];qn.setFromBufferAttribute(c),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(e){const r=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];So.setFromBufferAttribute(d),this.morphTargetsRelative?(dn.addVectors(qn.min,So.min),qn.expandByPoint(dn),dn.addVectors(qn.max,So.max),qn.expandByPoint(dn)):(qn.expandByPoint(So.min),qn.expandByPoint(So.max))}qn.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)dn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(dn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)dn.fromBufferAttribute(d,m),p&&(rs.fromBufferAttribute(e,m),dn.add(rs)),l=Math.max(l,r.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let K=0;K<r.count;K++)d[K]=new tt,p[K]=new tt;const m=new tt,_=new tt,v=new tt,S=new ze,y=new ze,b=new ze,w=new tt,M=new tt;function g(K,C,R){m.fromBufferAttribute(r,K),_.fromBufferAttribute(r,C),v.fromBufferAttribute(r,R),S.fromBufferAttribute(c,K),y.fromBufferAttribute(c,C),b.fromBufferAttribute(c,R),_.sub(m),v.sub(m),y.sub(S),b.sub(S);const F=1/(y.x*b.y-b.x*y.y);isFinite(F)&&(w.copy(_).multiplyScalar(b.y).addScaledVector(v,-y.y).multiplyScalar(F),M.copy(v).multiplyScalar(y.x).addScaledVector(_,-b.x).multiplyScalar(F),d[K].add(w),d[C].add(w),d[R].add(w),p[K].add(M),p[C].add(M),p[R].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let K=0,C=P.length;K<C;++K){const R=P[K],F=R.start,ut=R.count;for(let at=F,mt=F+ut;at<mt;at+=3)g(e.getX(at+0),e.getX(at+1),e.getX(at+2))}const O=new tt,D=new tt,H=new tt,I=new tt;function B(K){H.fromBufferAttribute(l,K),I.copy(H);const C=d[K];O.copy(C),O.sub(H.multiplyScalar(H.dot(C))).normalize(),D.crossVectors(I,C);const F=D.dot(p[K])<0?-1:1;h.setXYZW(K,O.x,O.y,O.z,F)}for(let K=0,C=P.length;K<C;++K){const R=P[K],F=R.start,ut=R.count;for(let at=F,mt=F+ut;at<mt;at+=3)B(e.getX(at+0)),B(e.getX(at+1)),B(e.getX(at+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ci(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const l=new tt,c=new tt,h=new tt,d=new tt,p=new tt,m=new tt,_=new tt,v=new tt;if(e)for(let S=0,y=e.count;S<y;S+=3){const b=e.getX(S+0),w=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),_.subVectors(h,c),v.subVectors(l,c),_.cross(v),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,M),d.add(_),p.add(_),m.add(_),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),_.subVectors(h,c),v.subVectors(l,c),_.cross(v),r.setXYZ(S+0,_.x,_.y,_.z),r.setXYZ(S+1,_.x,_.y,_.z),r.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)dn.fromBufferAttribute(e,i),dn.normalize(),e.setXYZ(i,dn.x,dn.y,dn.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,v=d.normalized,S=new m.constructor(p.length*_);let y=0,b=0;for(let w=0,M=p.length;w<M;w++){d.isInterleavedBufferAttribute?y=p[w]*d.data.stride+d.offset:y=p[w]*_;for(let g=0;g<_;g++)S[b++]=m[y++]}return new Ci(S,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new wi,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,r);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let _=0,v=m.length;_<v;_++){const S=m[_],y=e(S,r);p.push(y)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,S=m.length;v<S;v++){const y=m[v];_.push(y.toJSON(e.data))}_.length>0&&(l[p]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const c=e.morphAttributes;for(const m in c){const _=[],v=c[m];for(let S=0,y=v.length;S<y;S++)_.push(v[S].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,_=h.length;m<_;m++){const v=h[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const og=new je,rr=new nv,Ql=new Tu,lg=new tt,Jl=new tt,$l=new tt,tu=new tt,ih=new tt,eu=new tt,ug=new tt,nu=new tt;class Ri extends Fn{constructor(e=new wi,i=new fd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){eu.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=d[p],v=c[p];_!==0&&(ih.fromBufferAttribute(v,e),h?eu.addScaledVector(ih,_):eu.addScaledVector(ih.sub(i),_))}i.add(eu)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ql.copy(r.boundingSphere),Ql.applyMatrix4(c),rr.copy(e.ray).recast(e.near),!(Ql.containsPoint(rr.origin)===!1&&(rr.intersectSphere(Ql,lg)===null||rr.origin.distanceToSquared(lg)>(e.far-e.near)**2))&&(og.copy(c).invert(),rr.copy(e.ray).applyMatrix4(og),!(r.boundingBox!==null&&rr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,rr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,S=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,w=S.length;b<w;b++){const M=S[b],g=h[M.materialIndex],P=Math.max(M.start,y.start),O=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let D=P,H=O;D<H;D+=3){const I=d.getX(D),B=d.getX(D+1),K=d.getX(D+2);l=iu(this,g,e,r,m,_,v,I,B,K),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let M=b,g=w;M<g;M+=3){const P=d.getX(M),O=d.getX(M+1),D=d.getX(M+2);l=iu(this,h,e,r,m,_,v,P,O,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let b=0,w=S.length;b<w;b++){const M=S[b],g=h[M.materialIndex],P=Math.max(M.start,y.start),O=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let D=P,H=O;D<H;D+=3){const I=D,B=D+1,K=D+2;l=iu(this,g,e,r,m,_,v,I,B,K),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let M=b,g=w;M<g;M+=3){const P=M,O=M+1,D=M+2;l=iu(this,h,e,r,m,_,v,P,O,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function HS(o,e,i,r,l,c,h,d){let p;if(e.side===Bn?p=r.intersectTriangle(h,c,l,!0,d):p=r.intersectTriangle(l,c,h,e.side===Pa,d),p===null)return null;nu.copy(d),nu.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(nu);return m<i.near||m>i.far?null:{distance:m,point:nu.clone(),object:o}}function iu(o,e,i,r,l,c,h,d,p,m){o.getVertexPosition(d,Jl),o.getVertexPosition(p,$l),o.getVertexPosition(m,tu);const _=HS(o,e,i,r,Jl,$l,tu,ug);if(_){const v=new tt;pi.getBarycoord(ug,Jl,$l,tu,v),l&&(_.uv=pi.getInterpolatedAttribute(l,d,p,m,v,new ze)),c&&(_.uv1=pi.getInterpolatedAttribute(c,d,p,m,v,new ze)),h&&(_.normal=pi.getInterpolatedAttribute(h,d,p,m,v,new tt),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:d,b:p,c:m,normal:new tt,materialIndex:0};pi.getNormal(Jl,$l,tu,S.normal),_.face=S,_.barycoord=v}return _}class Oo extends wi{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],m=[],_=[],v=[];let S=0,y=0;b("z","y","x",-1,-1,r,i,e,h,c,0),b("z","y","x",1,-1,r,i,-e,h,c,1),b("x","z","y",1,1,e,r,i,l,h,2),b("x","z","y",1,-1,e,r,-i,l,h,3),b("x","y","z",1,-1,e,i,r,l,c,4),b("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new gi(m,3)),this.setAttribute("normal",new gi(_,3)),this.setAttribute("uv",new gi(v,2));function b(w,M,g,P,O,D,H,I,B,K,C){const R=D/B,F=H/K,ut=D/2,at=H/2,mt=I/2,ht=B+1,X=K+1;let rt=0,Z=0;const St=new tt;for(let L=0;L<X;L++){const it=L*F-at;for(let Et=0;Et<ht;Et++){const At=Et*R-ut;St[w]=At*P,St[M]=it*O,St[g]=mt,m.push(St.x,St.y,St.z),St[w]=0,St[M]=0,St[g]=I>0?1:-1,_.push(St.x,St.y,St.z),v.push(Et/B),v.push(1-L/K),rt+=1}}for(let L=0;L<K;L++)for(let it=0;it<B;it++){const Et=S+it+ht*L,At=S+it+ht*(L+1),q=S+(it+1)+ht*(L+1),dt=S+(it+1)+ht*L;p.push(Et,At,dt),p.push(At,q,dt),Z+=6}d.addGroup(y,Z,C),y+=Z,S+=rt}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Dn(o){const e={};for(let i=0;i<o.length;i++){const r=_s(o[i]);for(const l in r)e[l]=r[l]}return e}function GS(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function ov(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:be.workingColorSpace}const VS={clone:_s,merge:Dn};var kS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class za extends No{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kS,this.fragmentShader=XS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=GS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class lv extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=ta}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Da=new tt,cg=new ze,fg=new ze;class ri extends lv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=td*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return td*2*Math.atan(Math.tan(Bf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Da.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Da.x,Da.y).multiplyScalar(-e/Da.z),Da.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Da.x,Da.y).multiplyScalar(-e/Da.z)}getViewSize(e,i){return this.getViewBounds(e,cg,fg),i.subVectors(fg,cg)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Bf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ss=-90,os=1;class WS extends Fn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ri(ss,os,e,i);l.layers=this.layers,this.add(l);const c=new ri(ss,os,e,i);c.layers=this.layers,this.add(c);const h=new ri(ss,os,e,i);h.layers=this.layers,this.add(h);const d=new ri(ss,os,e,i);d.layers=this.layers,this.add(d);const p=new ri(ss,os,e,i);p.layers=this.layers,this.add(p);const m=new ri(ss,os,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,p]=i;for(const m of i)this.remove(m);if(e===ta)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Su)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,p,m,_]=this.children,v=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(v,S,y),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class uv extends Un{constructor(e=[],i=ds,r,l,c,h,d,p,m,_){super(e,i,r,l,c,h,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qS extends _r{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new uv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ai}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Oo(5,5,5),c=new za({name:"CubemapFromEquirect",uniforms:_s(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:Na});c.uniforms.tEquirect.value=i;const h=new Ri(l,c),d=i.minFilter;return i.minFilter===pr&&(i.minFilter=Ai),new WS(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class yo extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YS={type:"move"};class ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const w of e.hand.values()){const M=i.getJointPose(w,r),g=this._getHandJoint(m,w);M!==null&&(g.matrix.fromArray(M.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=M.radius),g.visible=M!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],S=_.position.distanceTo(v.position),y=.02,b=.005;m.inputState.pinching&&S>y+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=y-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(YS)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new yo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class ZS extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ia,this.environmentIntensity=1,this.environmentRotation=new ia,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const rh=new tt,jS=new tt,KS=new se;class ur{constructor(e=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=rh.subVectors(r,i).cross(jS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(rh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||KS.getNormalMatrix(e),l=this.coplanarPoint(rh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new Tu,au=new tt;class cv{constructor(e=new ur,i=new ur,r=new ur,l=new ur,c=new ur,h=new ur){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ta){const r=this.planes,l=e.elements,c=l[0],h=l[1],d=l[2],p=l[3],m=l[4],_=l[5],v=l[6],S=l[7],y=l[8],b=l[9],w=l[10],M=l[11],g=l[12],P=l[13],O=l[14],D=l[15];if(r[0].setComponents(p-c,S-m,M-y,D-g).normalize(),r[1].setComponents(p+c,S+m,M+y,D+g).normalize(),r[2].setComponents(p+h,S+_,M+b,D+P).normalize(),r[3].setComponents(p-h,S-_,M-b,D-P).normalize(),r[4].setComponents(p-d,S-v,M-w,D-O).normalize(),i===ta)r[5].setComponents(p+d,S+v,M+w,D+O).normalize();else if(i===Su)r[5].setComponents(d,v,w,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),sr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(au.x=l.normal.x>0?e.max.x:e.min.x,au.y=l.normal.y>0?e.max.y:e.min.y,au.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(au)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fv extends No{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Mu=new tt,yu=new tt,hg=new je,Mo=new nv,ru=new Tu,sh=new tt,dg=new tt;class QS extends Fn{constructor(e=new wi,i=new fv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)Mu.fromBufferAttribute(i,l-1),yu.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Mu.distanceTo(yu);e.setAttribute("lineDistance",new gi(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),ru.copy(r.boundingSphere),ru.applyMatrix4(l),ru.radius+=c,e.ray.intersectsSphere(ru)===!1)return;hg.copy(l).invert(),Mo.copy(e.ray).applyMatrix4(hg);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,_=r.index,S=r.attributes.position;if(_!==null){const y=Math.max(0,h.start),b=Math.min(_.count,h.start+h.count);for(let w=y,M=b-1;w<M;w+=m){const g=_.getX(w),P=_.getX(w+1),O=su(this,e,Mo,p,g,P,w);O&&i.push(O)}if(this.isLineLoop){const w=_.getX(b-1),M=_.getX(y),g=su(this,e,Mo,p,w,M,b-1);g&&i.push(g)}}else{const y=Math.max(0,h.start),b=Math.min(S.count,h.start+h.count);for(let w=y,M=b-1;w<M;w+=m){const g=su(this,e,Mo,p,w,w+1,w);g&&i.push(g)}if(this.isLineLoop){const w=su(this,e,Mo,p,b-1,y,b-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function su(o,e,i,r,l,c,h){const d=o.geometry.attributes.position;if(Mu.fromBufferAttribute(d,l),yu.fromBufferAttribute(d,c),i.distanceSqToSegment(Mu,yu,sh,dg)>r)return;sh.applyMatrix4(o.matrixWorld);const m=e.ray.origin.distanceTo(sh);if(!(m<e.near||m>e.far))return{distance:m,point:dg.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}class hv extends Un{constructor(e,i,r=mr,l,c,h,d=_i,p=_i,m,_=Ao){if(_!==Ao&&_!==Ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,h,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class bu extends wi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,_=p+1,v=e/d,S=i/p,y=[],b=[],w=[],M=[];for(let g=0;g<_;g++){const P=g*S-h;for(let O=0;O<m;O++){const D=O*v-c;b.push(D,-P,0),w.push(0,0,1),M.push(O/d),M.push(1-g/p)}}for(let g=0;g<p;g++)for(let P=0;P<d;P++){const O=P+m*g,D=P+m*(g+1),H=P+1+m*(g+1),I=P+1+m*g;y.push(O,D,I),y.push(D,H,I)}this.setIndex(y),this.setAttribute("position",new gi(b,3)),this.setAttribute("normal",new gi(w,3)),this.setAttribute("uv",new gi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bu(e.width,e.height,e.widthSegments,e.heightSegments)}}class hd extends wi{constructor(e=1,i=32,r=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(h+d,Math.PI);let m=0;const _=[],v=new tt,S=new tt,y=[],b=[],w=[],M=[];for(let g=0;g<=r;g++){const P=[],O=g/r;let D=0;g===0&&h===0?D=.5/i:g===r&&p===Math.PI&&(D=-.5/i);for(let H=0;H<=i;H++){const I=H/i;v.x=-e*Math.cos(l+I*c)*Math.sin(h+O*d),v.y=e*Math.cos(h+O*d),v.z=e*Math.sin(l+I*c)*Math.sin(h+O*d),b.push(v.x,v.y,v.z),S.copy(v).normalize(),w.push(S.x,S.y,S.z),M.push(I+D,1-O),P.push(m++)}_.push(P)}for(let g=0;g<r;g++)for(let P=0;P<i;P++){const O=_[g][P+1],D=_[g][P],H=_[g+1][P],I=_[g+1][P+1];(g!==0||h>0)&&y.push(O,D,I),(g!==r-1||p<Math.PI)&&y.push(D,H,I)}this.setIndex(y),this.setAttribute("position",new gi(b,3)),this.setAttribute("normal",new gi(w,3)),this.setAttribute("uv",new gi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class JS extends No{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $S extends No{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pg={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class tM{constructor(e,i,r){const l=this;let c=!1,h=0,d=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this.itemStart=function(_){d++,c===!1&&l.onStart!==void 0&&l.onStart(_,h,d),c=!0},this.itemEnd=function(_){h++,l.onProgress!==void 0&&l.onProgress(_,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return p?p(_):_},this.setURLModifier=function(_){return p=_,this},this.addHandler=function(_,v){return m.push(_,v),this},this.removeHandler=function(_){const v=m.indexOf(_);return v!==-1&&m.splice(v,2),this},this.getHandler=function(_){for(let v=0,S=m.length;v<S;v+=2){const y=m[v],b=m[v+1];if(y.global&&(y.lastIndex=0),y.test(_))return b}return null}}}const eM=new tM;class dd{constructor(e){this.manager=e!==void 0?e:eM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,c){r.load(e,l,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}dd.DEFAULT_MATERIAL_NAME="__DEFAULT";class nM extends dd{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,h=pg.get(e);if(h!==void 0)return c.manager.itemStart(e),setTimeout(function(){i&&i(h),c.manager.itemEnd(e)},0),h;const d=Co("img");function p(){_(),pg.add(e,this),i&&i(this),c.manager.itemEnd(e)}function m(v){_(),l&&l(v),c.manager.itemError(e),c.manager.itemEnd(e)}function _(){d.removeEventListener("load",p,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),c.manager.itemStart(e),d.src=e,d}}class iM extends dd{constructor(e){super(e)}load(e,i,r,l){const c=new Un,h=new nM(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class aM extends lv{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,h=c+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class rM extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function mg(o,e,i,r){const l=sM(r);switch(i){case qg:return o*e;case Zg:return o*e;case jg:return o*e*2;case Kg:return o*e/l.components*l.byteLength;case od:return o*e/l.components*l.byteLength;case Qg:return o*e*2/l.components*l.byteLength;case ld:return o*e*2/l.components*l.byteLength;case Yg:return o*e*3/l.components*l.byteLength;case mi:return o*e*4/l.components*l.byteLength;case ud:return o*e*4/l.components*l.byteLength;case hu:case du:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case pu:case mu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case wh:case Uh:return Math.max(o,16)*Math.max(e,8)/4;case Ch:case Dh:return Math.max(o,8)*Math.max(e,8)/2;case Lh:case Nh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Oh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case kh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case qh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Yh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case _u:case jh:case Kh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Jg:case Qh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Jh:case $h:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function sM(o){switch(o){case na:case kg:return{byteLength:1,components:1};case To:case Xg:case wo:return{byteLength:2,components:1};case rd:case sd:return{byteLength:2,components:4};case mr:case ad:case $i:return{byteLength:4,components:1};case Wg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:id}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=id);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dv(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function oM(o){const e=new WeakMap;function i(d,p){const m=d.array,_=d.usage,v=m.byteLength,S=o.createBuffer();o.bindBuffer(p,S),o.bufferData(p,m,_),d.onUploadCallback();let y;if(m instanceof Float32Array)y=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=o.SHORT;else if(m instanceof Uint32Array)y=o.UNSIGNED_INT;else if(m instanceof Int32Array)y=o.INT;else if(m instanceof Int8Array)y=o.BYTE;else if(m instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const _=p.array,v=p.updateRanges;if(o.bindBuffer(m,d),v.length===0)o.bufferSubData(m,0,_);else{v.sort((y,b)=>y.start-b.start);let S=0;for(let y=1;y<v.length;y++){const b=v[S],w=v[y];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++S,v[S]=w)}v.length=S+1;for(let y=0,b=v.length;y<b;y++){const w=v[y];o.bufferSubData(m,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:h}}var lM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_M=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,MM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,UM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,LM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,NM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,OM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FM="gl_FragColor = linearToOutputTexel( gl_FragColor );",IM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,GM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,VM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,WM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,KM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$M=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ty=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ny=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ay=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ry=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ly=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,py=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,my=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_y=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,My=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ey=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ty=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,by=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ay=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Uy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ly=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ny=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Oy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Py=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,By=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ky=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Xy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ky=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$y=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_E=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ME=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,CE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,LE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,IE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,le={alphahash_fragment:lM,alphahash_pars_fragment:uM,alphamap_fragment:cM,alphamap_pars_fragment:fM,alphatest_fragment:hM,alphatest_pars_fragment:dM,aomap_fragment:pM,aomap_pars_fragment:mM,batching_pars_vertex:_M,batching_vertex:gM,begin_vertex:vM,beginnormal_vertex:xM,bsdfs:SM,iridescence_fragment:MM,bumpmap_pars_fragment:yM,clipping_planes_fragment:EM,clipping_planes_pars_fragment:TM,clipping_planes_pars_vertex:bM,clipping_planes_vertex:AM,color_fragment:RM,color_pars_fragment:CM,color_pars_vertex:wM,color_vertex:DM,common:UM,cube_uv_reflection_fragment:LM,defaultnormal_vertex:NM,displacementmap_pars_vertex:OM,displacementmap_vertex:PM,emissivemap_fragment:zM,emissivemap_pars_fragment:BM,colorspace_fragment:FM,colorspace_pars_fragment:IM,envmap_fragment:HM,envmap_common_pars_fragment:GM,envmap_pars_fragment:VM,envmap_pars_vertex:kM,envmap_physical_pars_fragment:ty,envmap_vertex:XM,fog_vertex:WM,fog_pars_vertex:qM,fog_fragment:YM,fog_pars_fragment:ZM,gradientmap_pars_fragment:jM,lightmap_pars_fragment:KM,lights_lambert_fragment:QM,lights_lambert_pars_fragment:JM,lights_pars_begin:$M,lights_toon_fragment:ey,lights_toon_pars_fragment:ny,lights_phong_fragment:iy,lights_phong_pars_fragment:ay,lights_physical_fragment:ry,lights_physical_pars_fragment:sy,lights_fragment_begin:oy,lights_fragment_maps:ly,lights_fragment_end:uy,logdepthbuf_fragment:cy,logdepthbuf_pars_fragment:fy,logdepthbuf_pars_vertex:hy,logdepthbuf_vertex:dy,map_fragment:py,map_pars_fragment:my,map_particle_fragment:_y,map_particle_pars_fragment:gy,metalnessmap_fragment:vy,metalnessmap_pars_fragment:xy,morphinstance_vertex:Sy,morphcolor_vertex:My,morphnormal_vertex:yy,morphtarget_pars_vertex:Ey,morphtarget_vertex:Ty,normal_fragment_begin:by,normal_fragment_maps:Ay,normal_pars_fragment:Ry,normal_pars_vertex:Cy,normal_vertex:wy,normalmap_pars_fragment:Dy,clearcoat_normal_fragment_begin:Uy,clearcoat_normal_fragment_maps:Ly,clearcoat_pars_fragment:Ny,iridescence_pars_fragment:Oy,opaque_fragment:Py,packing:zy,premultiplied_alpha_fragment:By,project_vertex:Fy,dithering_fragment:Iy,dithering_pars_fragment:Hy,roughnessmap_fragment:Gy,roughnessmap_pars_fragment:Vy,shadowmap_pars_fragment:ky,shadowmap_pars_vertex:Xy,shadowmap_vertex:Wy,shadowmask_pars_fragment:qy,skinbase_vertex:Yy,skinning_pars_vertex:Zy,skinning_vertex:jy,skinnormal_vertex:Ky,specularmap_fragment:Qy,specularmap_pars_fragment:Jy,tonemapping_fragment:$y,tonemapping_pars_fragment:tE,transmission_fragment:eE,transmission_pars_fragment:nE,uv_pars_fragment:iE,uv_pars_vertex:aE,uv_vertex:rE,worldpos_vertex:sE,background_vert:oE,background_frag:lE,backgroundCube_vert:uE,backgroundCube_frag:cE,cube_vert:fE,cube_frag:hE,depth_vert:dE,depth_frag:pE,distanceRGBA_vert:mE,distanceRGBA_frag:_E,equirect_vert:gE,equirect_frag:vE,linedashed_vert:xE,linedashed_frag:SE,meshbasic_vert:ME,meshbasic_frag:yE,meshlambert_vert:EE,meshlambert_frag:TE,meshmatcap_vert:bE,meshmatcap_frag:AE,meshnormal_vert:RE,meshnormal_frag:CE,meshphong_vert:wE,meshphong_frag:DE,meshphysical_vert:UE,meshphysical_frag:LE,meshtoon_vert:NE,meshtoon_frag:OE,points_vert:PE,points_frag:zE,shadow_vert:BE,shadow_frag:FE,sprite_vert:IE,sprite_frag:HE},Ut={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Ti={basic:{uniforms:Dn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Dn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ce(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Dn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Dn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Dn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Ce(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Dn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Dn([Ut.points,Ut.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Dn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Dn([Ut.common,Ut.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Dn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Dn([Ut.sprite,Ut.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Dn([Ut.common,Ut.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Dn([Ut.lights,Ut.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Ti.physical={uniforms:Dn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const ou={r:0,b:0,g:0},or=new ia,GE=new je;function VE(o,e,i,r,l,c,h){const d=new Ce(0);let p=c===!0?0:1,m,_,v=null,S=0,y=null;function b(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?i:e).get(D)),D}function w(O){let D=!1;const H=b(O);H===null?g(d,p):H&&H.isColor&&(g(H,1),D=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(O,D){const H=b(D);H&&(H.isCubeTexture||H.mapping===Eu)?(_===void 0&&(_=new Ri(new Oo(1,1,1),new za({name:"BackgroundCubeMaterial",uniforms:_s(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(I,B,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),or.copy(D.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),_.material.uniforms.envMap.value=H,_.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(GE.makeRotationFromEuler(or)),_.material.toneMapped=be.getTransfer(H.colorSpace)!==Oe,(v!==H||S!==H.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,v=H,S=H.version,y=o.toneMapping),_.layers.enableAll(),O.unshift(_,_.geometry,_.material,0,0,null)):H&&H.isTexture&&(m===void 0&&(m=new Ri(new bu(2,2),new za({name:"BackgroundMaterial",uniforms:_s(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Pa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=H,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=be.getTransfer(H.colorSpace)!==Oe,H.matrixAutoUpdate===!0&&H.updateMatrix(),m.material.uniforms.uvTransform.value.copy(H.matrix),(v!==H||S!==H.version||y!==o.toneMapping)&&(m.material.needsUpdate=!0,v=H,S=H.version,y=o.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function g(O,D){O.getRGB(ou,ov(o)),r.buffers.color.setClear(ou.r,ou.g,ou.b,D,h)}function P(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,D=1){d.set(O),p=D,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,g(d,p)},render:w,addToRenderList:M,dispose:P}}function kE(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let c=l,h=!1;function d(R,F,ut,at,mt){let ht=!1;const X=v(at,ut,F);c!==X&&(c=X,m(c.object)),ht=y(R,at,ut,mt),ht&&b(R,at,ut,mt),mt!==null&&e.update(mt,o.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,D(R,F,ut,at),mt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(mt).buffer))}function p(){return o.createVertexArray()}function m(R){return o.bindVertexArray(R)}function _(R){return o.deleteVertexArray(R)}function v(R,F,ut){const at=ut.wireframe===!0;let mt=r[R.id];mt===void 0&&(mt={},r[R.id]=mt);let ht=mt[F.id];ht===void 0&&(ht={},mt[F.id]=ht);let X=ht[at];return X===void 0&&(X=S(p()),ht[at]=X),X}function S(R){const F=[],ut=[],at=[];for(let mt=0;mt<i;mt++)F[mt]=0,ut[mt]=0,at[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ut,attributeDivisors:at,object:R,attributes:{},index:null}}function y(R,F,ut,at){const mt=c.attributes,ht=F.attributes;let X=0;const rt=ut.getAttributes();for(const Z in rt)if(rt[Z].location>=0){const L=mt[Z];let it=ht[Z];if(it===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(it=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(it=R.instanceColor)),L===void 0||L.attribute!==it||it&&L.data!==it.data)return!0;X++}return c.attributesNum!==X||c.index!==at}function b(R,F,ut,at){const mt={},ht=F.attributes;let X=0;const rt=ut.getAttributes();for(const Z in rt)if(rt[Z].location>=0){let L=ht[Z];L===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(L=R.instanceColor));const it={};it.attribute=L,L&&L.data&&(it.data=L.data),mt[Z]=it,X++}c.attributes=mt,c.attributesNum=X,c.index=at}function w(){const R=c.newAttributes;for(let F=0,ut=R.length;F<ut;F++)R[F]=0}function M(R){g(R,0)}function g(R,F){const ut=c.newAttributes,at=c.enabledAttributes,mt=c.attributeDivisors;ut[R]=1,at[R]===0&&(o.enableVertexAttribArray(R),at[R]=1),mt[R]!==F&&(o.vertexAttribDivisor(R,F),mt[R]=F)}function P(){const R=c.newAttributes,F=c.enabledAttributes;for(let ut=0,at=F.length;ut<at;ut++)F[ut]!==R[ut]&&(o.disableVertexAttribArray(ut),F[ut]=0)}function O(R,F,ut,at,mt,ht,X){X===!0?o.vertexAttribIPointer(R,F,ut,mt,ht):o.vertexAttribPointer(R,F,ut,at,mt,ht)}function D(R,F,ut,at){w();const mt=at.attributes,ht=ut.getAttributes(),X=F.defaultAttributeValues;for(const rt in ht){const Z=ht[rt];if(Z.location>=0){let St=mt[rt];if(St===void 0&&(rt==="instanceMatrix"&&R.instanceMatrix&&(St=R.instanceMatrix),rt==="instanceColor"&&R.instanceColor&&(St=R.instanceColor)),St!==void 0){const L=St.normalized,it=St.itemSize,Et=e.get(St);if(Et===void 0)continue;const At=Et.buffer,q=Et.type,dt=Et.bytesPerElement,xt=q===o.INT||q===o.UNSIGNED_INT||St.gpuType===ad;if(St.isInterleavedBufferAttribute){const Tt=St.data,Rt=Tt.stride,Kt=St.offset;if(Tt.isInstancedInterleavedBuffer){for(let Pt=0;Pt<Z.locationSize;Pt++)g(Z.location+Pt,Tt.meshPerAttribute);R.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Pt=0;Pt<Z.locationSize;Pt++)M(Z.location+Pt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Pt=0;Pt<Z.locationSize;Pt++)O(Z.location+Pt,it/Z.locationSize,q,L,Rt*dt,(Kt+it/Z.locationSize*Pt)*dt,xt)}else{if(St.isInstancedBufferAttribute){for(let Tt=0;Tt<Z.locationSize;Tt++)g(Z.location+Tt,St.meshPerAttribute);R.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Tt=0;Tt<Z.locationSize;Tt++)M(Z.location+Tt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Tt=0;Tt<Z.locationSize;Tt++)O(Z.location+Tt,it/Z.locationSize,q,L,it*dt,it/Z.locationSize*Tt*dt,xt)}}else if(X!==void 0){const L=X[rt];if(L!==void 0)switch(L.length){case 2:o.vertexAttrib2fv(Z.location,L);break;case 3:o.vertexAttrib3fv(Z.location,L);break;case 4:o.vertexAttrib4fv(Z.location,L);break;default:o.vertexAttrib1fv(Z.location,L)}}}}P()}function H(){K();for(const R in r){const F=r[R];for(const ut in F){const at=F[ut];for(const mt in at)_(at[mt].object),delete at[mt];delete F[ut]}delete r[R]}}function I(R){if(r[R.id]===void 0)return;const F=r[R.id];for(const ut in F){const at=F[ut];for(const mt in at)_(at[mt].object),delete at[mt];delete F[ut]}delete r[R.id]}function B(R){for(const F in r){const ut=r[F];if(ut[R.id]===void 0)continue;const at=ut[R.id];for(const mt in at)_(at[mt].object),delete at[mt];delete ut[R.id]}}function K(){C(),h=!0,c!==l&&(c=l,m(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:C,dispose:H,releaseStatesOfGeometry:I,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:M,disableUnusedAttributes:P}}function XE(o,e,i){let r;function l(m){r=m}function c(m,_){o.drawArrays(r,m,_),i.update(_,r,1)}function h(m,_,v){v!==0&&(o.drawArraysInstanced(r,m,_,v),i.update(_,r,v))}function d(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,v);let y=0;for(let b=0;b<v;b++)y+=_[b];i.update(y,r,1)}function p(m,_,v,S){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<m.length;b++)h(m[b],_[b],S[b]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,_,0,S,0,v);let b=0;for(let w=0;w<v;w++)b+=_[w]*S[w];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function WE(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==mi&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const K=B===wo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==na&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==$i&&!K)}function p(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=b>0,I=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:S,maxTextures:y,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:M,maxAttributes:g,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:H,maxSamples:I}}function qE(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new ur,d=new se,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const y=v.length!==0||S||r!==0||l;return l=S,r=v.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,S){i=_(v,S,0)},this.setState=function(v,S,y){const b=v.clippingPlanes,w=v.clipIntersection,M=v.clipShadows,g=o.get(v);if(!l||b===null||b.length===0||c&&!M)c?_(null):m();else{const P=c?0:r,O=P*4;let D=g.clippingState||null;p.value=D,D=_(b,S,O,y);for(let H=0;H!==O;++H)D[H]=i[H];g.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,S,y,b){const w=v!==null?v.length:0;let M=null;if(w!==0){if(M=p.value,b!==!0||M===null){const g=y+w*4,P=S.matrixWorldInverse;d.getNormalMatrix(P),(M===null||M.length<g)&&(M=new Float32Array(g));for(let O=0,D=y;O!==w;++O,D+=4)h.copy(v[O]).applyMatrix4(P,d),h.normal.toArray(M,D),M[D+3]=h.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}function YE(o){let e=new WeakMap;function i(h,d){return d===Th?h.mapping=ds:d===bh&&(h.mapping=ps),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Th||d===bh)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new qS(p.height);return m.fromEquirectangularTexture(o,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const us=4,_g=[.125,.215,.35,.446,.526,.582],hr=20,oh=new aM,gg=new Ce;let lh=null,uh=0,ch=0,fh=!1;const cr=(1+Math.sqrt(5))/2,ls=1/cr,vg=[new tt(-cr,ls,0),new tt(cr,ls,0),new tt(-ls,0,cr),new tt(ls,0,cr),new tt(0,cr,-ls),new tt(0,cr,ls),new tt(-1,1,-1),new tt(1,1,-1),new tt(-1,1,1),new tt(1,1,1)],ZE=new tt;class xg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=ZE}=c;lh=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lh,uh,ch),this._renderer.xr.enabled=fh,e.scissorTest=!1,lu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ds||e.mapping===ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lh=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:wo,format:mi,colorSpace:ms,depthBuffer:!1},l=Sg(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sg(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jE(c)),this._blurMaterial=KE(c,e,i)}return l}_compileMaterial(e){const i=new Ri(this._lodPlanes[0],e);this._renderer.compile(i,oh)}_sceneToCubeUV(e,i,r,l,c){const p=new ri(90,1,i,r),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,y=v.toneMapping;v.getClearColor(gg),v.toneMapping=Oa,v.autoClear=!1;const b=new fd({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),w=new Ri(new Oo,b);let M=!1;const g=e.background;g?g.isColor&&(b.color.copy(g),e.background=null,M=!0):(b.color.copy(gg),M=!0);for(let P=0;P<6;P++){const O=P%3;O===0?(p.up.set(0,m[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[P],c.y,c.z)):O===1?(p.up.set(0,0,m[P]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[P],c.z)):(p.up.set(0,m[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[P]));const D=this._cubeSize;lu(l,O*D,P>2?D:0,D,D),v.setRenderTarget(l),M&&v.render(w,p),v.render(e,p)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=y,v.autoClear=S,e.background=g}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===ds||e.mapping===ps;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=yg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mg());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Ri(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;lu(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,oh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=vg[(l-c-1)%vg.length];this._blur(e,c-1,c,h,d)}i.autoClear=r}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new Ri(this._lodPlanes[l],m),S=m.uniforms,y=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*hr-1),w=c/b,M=isFinite(c)?1+Math.floor(_*w):hr;M>hr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${hr}`);const g=[];let P=0;for(let B=0;B<hr;++B){const K=B/w,C=Math.exp(-K*K/2);g.push(C),B===0?P+=C:B<M&&(P+=2*C)}for(let B=0;B<g.length;B++)g[B]=g[B]/P;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=g,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:O}=this;S.dTheta.value=b,S.mipInt.value=O-r;const D=this._sizeLods[l],H=3*D*(l>O-us?l-O+us:0),I=4*(this._cubeSize-D);lu(i,H,I,3*D,2*D),p.setRenderTarget(i),p.render(v,oh)}}function jE(o){const e=[],i=[],r=[];let l=o;const c=o-us+1+_g.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-us?p=_g[h-o+us-1]:h===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,v=1+m,S=[_,_,v,_,v,v,_,_,v,v,_,v],y=6,b=6,w=3,M=2,g=1,P=new Float32Array(w*b*y),O=new Float32Array(M*b*y),D=new Float32Array(g*b*y);for(let I=0;I<y;I++){const B=I%3*2/3-1,K=I>2?0:-1,C=[B,K,0,B+2/3,K,0,B+2/3,K+1,0,B,K,0,B+2/3,K+1,0,B,K+1,0];P.set(C,w*b*I),O.set(S,M*b*I);const R=[I,I,I,I,I,I];D.set(R,g*b*I)}const H=new wi;H.setAttribute("position",new Ci(P,w)),H.setAttribute("uv",new Ci(O,M)),H.setAttribute("faceIndex",new Ci(D,g)),e.push(H),l>us&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function Sg(o,e,i){const r=new _r(o,e,i);return r.texture.mapping=Eu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function lu(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function KE(o,e,i){const r=new Float32Array(hr),l=new tt(0,1,0);return new za({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Mg(){return new za({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function yg(){return new za({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function pd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function QE(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Th||p===bh,_=p===ds||p===ps;if(m||_){let v=e.get(d);const S=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new xg(o)),v=m?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return m&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new xg(o)),v=m?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function JE(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&gu("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function $E(o,e,i,r){const l={},c=new WeakMap;function h(v){const S=v.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete l[S.id];const y=c.get(S);y&&(e.remove(y),c.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(v,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function p(v){const S=v.attributes;for(const y in S)e.update(S[y],o.ARRAY_BUFFER)}function m(v){const S=[],y=v.index,b=v.attributes.position;let w=0;if(y!==null){const P=y.array;w=y.version;for(let O=0,D=P.length;O<D;O+=3){const H=P[O+0],I=P[O+1],B=P[O+2];S.push(H,I,I,B,B,H)}}else if(b!==void 0){const P=b.array;w=b.version;for(let O=0,D=P.length/3-1;O<D;O+=3){const H=O+0,I=O+1,B=O+2;S.push(H,I,I,B,B,H)}}else return;const M=new(tv(S)?sv:rv)(S,1);M.version=w;const g=c.get(v);g&&e.remove(g),c.set(v,M)}function _(v){const S=c.get(v);if(S){const y=v.index;y!==null&&S.version<y.version&&m(v)}else m(v);return c.get(v)}return{get:d,update:p,getWireframeAttribute:_}}function tT(o,e,i){let r;function l(S){r=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function p(S,y){o.drawElements(r,y,c,S*h),i.update(y,r,1)}function m(S,y,b){b!==0&&(o.drawElementsInstanced(r,y,c,S*h,b),i.update(y,r,b))}function _(S,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,S,0,b);let M=0;for(let g=0;g<b;g++)M+=y[g];i.update(M,r,1)}function v(S,y,b,w){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let g=0;g<S.length;g++)m(S[g]/h,y[g],w[g]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,S,0,w,0,b);let g=0;for(let P=0;P<b;P++)g+=y[P]*w[P];i.update(g,r,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function eT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function nT(o,e,i){const r=new WeakMap,l=new Ze;function c(h,d,p){const m=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let S=r.get(d);if(S===void 0||S.count!==v){let R=function(){K.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var y=R;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),w===!0&&(D=2),M===!0&&(D=3);let H=d.attributes.position.count*D,I=1;H>e.maxTextureSize&&(I=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const B=new Float32Array(H*I*4*v),K=new ev(B,H,I,v);K.type=$i,K.needsUpdate=!0;const C=D*4;for(let F=0;F<v;F++){const ut=g[F],at=P[F],mt=O[F],ht=H*I*4*F;for(let X=0;X<ut.count;X++){const rt=X*C;b===!0&&(l.fromBufferAttribute(ut,X),B[ht+rt+0]=l.x,B[ht+rt+1]=l.y,B[ht+rt+2]=l.z,B[ht+rt+3]=0),w===!0&&(l.fromBufferAttribute(at,X),B[ht+rt+4]=l.x,B[ht+rt+5]=l.y,B[ht+rt+6]=l.z,B[ht+rt+7]=0),M===!0&&(l.fromBufferAttribute(mt,X),B[ht+rt+8]=l.x,B[ht+rt+9]=l.y,B[ht+rt+10]=l.z,B[ht+rt+11]=mt.itemSize===4?l.w:1)}}S={count:v,texture:K,size:new ze(H,I)},r.set(d,S),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<m.length;M++)b+=m[M];const w=d.morphTargetsRelative?1:1-b;p.getUniforms().setValue(o,"morphTargetBaseInfluence",w),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:c}}function iT(o,e,i,r){let l=new WeakMap;function c(p){const m=r.render.frame,_=p.geometry,v=e.get(p,_);if(l.get(v)!==m&&(e.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==m&&(S.update(),l.set(S,m))}return v}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:h}}const pv=new Un,Eg=new hv(1,1),mv=new ev,_v=new wS,gv=new uv,Tg=[],bg=[],Ag=new Float32Array(16),Rg=new Float32Array(9),Cg=new Float32Array(4);function vs(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=Tg[l];if(c===void 0&&(c=new Float32Array(l),Tg[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function on(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function ln(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Au(o,e){let i=bg[e];i===void 0&&(i=new Int32Array(e),bg[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function aT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function rT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;o.uniform2fv(this.addr,e),ln(i,e)}}function sT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(on(i,e))return;o.uniform3fv(this.addr,e),ln(i,e)}}function oT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;o.uniform4fv(this.addr,e),ln(i,e)}}function lT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;Cg.set(r),o.uniformMatrix2fv(this.addr,!1,Cg),ln(i,r)}}function uT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;Rg.set(r),o.uniformMatrix3fv(this.addr,!1,Rg),ln(i,r)}}function cT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;Ag.set(r),o.uniformMatrix4fv(this.addr,!1,Ag),ln(i,r)}}function fT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function hT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;o.uniform2iv(this.addr,e),ln(i,e)}}function dT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(on(i,e))return;o.uniform3iv(this.addr,e),ln(i,e)}}function pT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;o.uniform4iv(this.addr,e),ln(i,e)}}function mT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function _T(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;o.uniform2uiv(this.addr,e),ln(i,e)}}function gT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(on(i,e))return;o.uniform3uiv(this.addr,e),ln(i,e)}}function vT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;o.uniform4uiv(this.addr,e),ln(i,e)}}function xT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Eg.compareFunction=$g,c=Eg):c=pv,i.setTexture2D(e||c,l)}function ST(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||_v,l)}function MT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||gv,l)}function yT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||mv,l)}function ET(o){switch(o){case 5126:return aT;case 35664:return rT;case 35665:return sT;case 35666:return oT;case 35674:return lT;case 35675:return uT;case 35676:return cT;case 5124:case 35670:return fT;case 35667:case 35671:return hT;case 35668:case 35672:return dT;case 35669:case 35673:return pT;case 5125:return mT;case 36294:return _T;case 36295:return gT;case 36296:return vT;case 35678:case 36198:case 36298:case 36306:case 35682:return xT;case 35679:case 36299:case 36307:return ST;case 35680:case 36300:case 36308:case 36293:return MT;case 36289:case 36303:case 36311:case 36292:return yT}}function TT(o,e){o.uniform1fv(this.addr,e)}function bT(o,e){const i=vs(e,this.size,2);o.uniform2fv(this.addr,i)}function AT(o,e){const i=vs(e,this.size,3);o.uniform3fv(this.addr,i)}function RT(o,e){const i=vs(e,this.size,4);o.uniform4fv(this.addr,i)}function CT(o,e){const i=vs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function wT(o,e){const i=vs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function DT(o,e){const i=vs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function UT(o,e){o.uniform1iv(this.addr,e)}function LT(o,e){o.uniform2iv(this.addr,e)}function NT(o,e){o.uniform3iv(this.addr,e)}function OT(o,e){o.uniform4iv(this.addr,e)}function PT(o,e){o.uniform1uiv(this.addr,e)}function zT(o,e){o.uniform2uiv(this.addr,e)}function BT(o,e){o.uniform3uiv(this.addr,e)}function FT(o,e){o.uniform4uiv(this.addr,e)}function IT(o,e,i){const r=this.cache,l=e.length,c=Au(i,l);on(r,c)||(o.uniform1iv(this.addr,c),ln(r,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||pv,c[h])}function HT(o,e,i){const r=this.cache,l=e.length,c=Au(i,l);on(r,c)||(o.uniform1iv(this.addr,c),ln(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||_v,c[h])}function GT(o,e,i){const r=this.cache,l=e.length,c=Au(i,l);on(r,c)||(o.uniform1iv(this.addr,c),ln(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||gv,c[h])}function VT(o,e,i){const r=this.cache,l=e.length,c=Au(i,l);on(r,c)||(o.uniform1iv(this.addr,c),ln(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||mv,c[h])}function kT(o){switch(o){case 5126:return TT;case 35664:return bT;case 35665:return AT;case 35666:return RT;case 35674:return CT;case 35675:return wT;case 35676:return DT;case 5124:case 35670:return UT;case 35667:case 35671:return LT;case 35668:case 35672:return NT;case 35669:case 35673:return OT;case 5125:return PT;case 36294:return zT;case 36295:return BT;case 36296:return FT;case 35678:case 36198:case 36298:case 36306:case 35682:return IT;case 35679:case 36299:case 36307:return HT;case 35680:case 36300:case 36308:case 36293:return GT;case 36289:case 36303:case 36311:case 36292:return VT}}class XT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=ET(i.type)}}class WT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=kT(i.type)}}class qT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const hh=/(\w+)(\])?(\[|\.)?/g;function wg(o,e){o.seq.push(e),o.map[e.id]=e}function YT(o,e,i){const r=o.name,l=r.length;for(hh.lastIndex=0;;){const c=hh.exec(r),h=hh.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){wg(i,m===void 0?new XT(d,o,e):new WT(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new qT(d),wg(i,v)),i=v}}}class vu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);YT(c,h,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function Dg(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const ZT=37297;let jT=0;function KT(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const Ug=new se;function QT(o){be._getMatrix(Ug,be.workingColorSpace,o);const e=`mat3( ${Ug.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(o)){case xu:return[e,"LinearTransferOETF"];case Oe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Lg(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+KT(o.getShaderSource(e),h)}else return l}function JT(o,e){const i=QT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function $T(o,e){let i;switch(e){case tS:i="Linear";break;case eS:i="Reinhard";break;case nS:i="Cineon";break;case iS:i="ACESFilmic";break;case rS:i="AgX";break;case sS:i="Neutral";break;case aS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const uu=new tt;function tb(){be.getLuminanceCoefficients(uu);const o=uu.x.toFixed(4),e=uu.y.toFixed(4),i=uu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function nb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function ib(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Eo(o){return o!==""}function Ng(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Og(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ab=/^[ \t]*#include +<([\w\d./]+)>/gm;function ed(o){return o.replace(ab,sb)}const rb=new Map;function sb(o,e){let i=le[e];if(i===void 0){const r=rb.get(e);if(r!==void 0)i=le[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ed(i)}const ob=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pg(o){return o.replace(ob,lb)}function lb(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function zg(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ub(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Hg?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Nx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function cb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ds:case ps:e="ENVMAP_TYPE_CUBE";break;case Eu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ps:e="ENVMAP_MODE_REFRACTION";break}return e}function hb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Gg:e="ENVMAP_BLENDING_MULTIPLY";break;case Jx:e="ENVMAP_BLENDING_MIX";break;case $x:e="ENVMAP_BLENDING_ADD";break}return e}function db(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function pb(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=ub(i),m=cb(i),_=fb(i),v=hb(i),S=db(i),y=eb(i),b=nb(c),w=l.createProgram();let M,g,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Eo).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Eo).join(`
`),g.length>0&&(g+=`
`)):(M=[zg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),g=[zg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Oa?"#define TONE_MAPPING":"",i.toneMapping!==Oa?le.tonemapping_pars_fragment:"",i.toneMapping!==Oa?$T("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,JT("linearToOutputTexel",i.outputColorSpace),tb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Eo).join(`
`)),h=ed(h),h=Ng(h,i),h=Og(h,i),d=ed(d),d=Ng(d,i),d=Og(d,i),h=Pg(h),d=Pg(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",i.glslVersion===Z_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Z_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const O=P+M+h,D=P+g+d,H=Dg(l,l.VERTEX_SHADER,O),I=Dg(l,l.FRAGMENT_SHADER,D);l.attachShader(w,H),l.attachShader(w,I),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function B(F){if(o.debug.checkShaderErrors){const ut=l.getProgramInfoLog(w).trim(),at=l.getShaderInfoLog(H).trim(),mt=l.getShaderInfoLog(I).trim();let ht=!0,X=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ht=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,H,I);else{const rt=Lg(l,H,"vertex"),Z=Lg(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ut+`
`+rt+`
`+Z)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(at===""||mt==="")&&(X=!1);X&&(F.diagnostics={runnable:ht,programLog:ut,vertexShader:{log:at,prefix:M},fragmentShader:{log:mt,prefix:g}})}l.deleteShader(H),l.deleteShader(I),K=new vu(l,w),C=ib(l,w)}let K;this.getUniforms=function(){return K===void 0&&B(this),K};let C;this.getAttributes=function(){return C===void 0&&B(this),C};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(w,ZT)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=jT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=H,this.fragmentShader=I,this}let mb=0;class _b{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new gb(e),i.set(e,r)),r}}class gb{constructor(e){this.id=mb++,this.code=e,this.usedTimes=0}}function vb(o,e,i,r,l,c,h){const d=new iv,p=new _b,m=new Set,_=[],v=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return m.add(C),C===0?"uv":`uv${C}`}function M(C,R,F,ut,at){const mt=ut.fog,ht=at.geometry,X=C.isMeshStandardMaterial?ut.environment:null,rt=(C.isMeshStandardMaterial?i:e).get(C.envMap||X),Z=rt&&rt.mapping===Eu?rt.image.height:null,St=b[C.type];C.precision!==null&&(y=l.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const L=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,it=L!==void 0?L.length:0;let Et=0;ht.morphAttributes.position!==void 0&&(Et=1),ht.morphAttributes.normal!==void 0&&(Et=2),ht.morphAttributes.color!==void 0&&(Et=3);let At,q,dt,xt;if(St){const Me=Ti[St];At=Me.vertexShader,q=Me.fragmentShader}else At=C.vertexShader,q=C.fragmentShader,p.update(C),dt=p.getVertexShaderID(C),xt=p.getFragmentShaderID(C);const Tt=o.getRenderTarget(),Rt=o.state.buffers.depth.getReversed(),Kt=at.isInstancedMesh===!0,Pt=at.isBatchedMesh===!0,Se=!!C.map,Ae=!!C.matcap,ie=!!rt,z=!!C.aoMap,pn=!!C.lightMap,oe=!!C.bumpMap,ce=!!C.normalMap,kt=!!C.displacementMap,Re=!!C.emissiveMap,Xt=!!C.metalnessMap,U=!!C.roughnessMap,E=C.anisotropy>0,$=C.clearcoat>0,ct=C.dispersion>0,vt=C.iridescence>0,ft=C.sheen>0,Ht=C.transmission>0,wt=E&&!!C.anisotropyMap,zt=$&&!!C.clearcoatMap,de=$&&!!C.clearcoatNormalMap,yt=$&&!!C.clearcoatRoughnessMap,Bt=vt&&!!C.iridescenceMap,jt=vt&&!!C.iridescenceThicknessMap,Gt=ft&&!!C.sheenColorMap,Ft=ft&&!!C.sheenRoughnessMap,ae=!!C.specularMap,Yt=!!C.specularColorMap,we=!!C.specularIntensityMap,k=Ht&&!!C.transmissionMap,Lt=Ht&&!!C.thicknessMap,st=!!C.gradientMap,_t=!!C.alphaMap,Ct=C.alphaTest>0,Dt=!!C.alphaHash,$t=!!C.extensions;let He=Oa;C.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(He=o.toneMapping);const tn={shaderID:St,shaderType:C.type,shaderName:C.name,vertexShader:At,fragmentShader:q,defines:C.defines,customVertexShaderID:dt,customFragmentShaderID:xt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Pt,batchingColor:Pt&&at._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&at.instanceColor!==null,instancingMorph:Kt&&at.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Tt===null?o.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:ms,alphaToCoverage:!!C.alphaToCoverage,map:Se,matcap:Ae,envMap:ie,envMapMode:ie&&rt.mapping,envMapCubeUVHeight:Z,aoMap:z,lightMap:pn,bumpMap:oe,normalMap:ce,displacementMap:S&&kt,emissiveMap:Re,normalMapObjectSpace:ce&&C.normalMapType===fS,normalMapTangentSpace:ce&&C.normalMapType===cS,metalnessMap:Xt,roughnessMap:U,anisotropy:E,anisotropyMap:wt,clearcoat:$,clearcoatMap:zt,clearcoatNormalMap:de,clearcoatRoughnessMap:yt,dispersion:ct,iridescence:vt,iridescenceMap:Bt,iridescenceThicknessMap:jt,sheen:ft,sheenColorMap:Gt,sheenRoughnessMap:Ft,specularMap:ae,specularColorMap:Yt,specularIntensityMap:we,transmission:Ht,transmissionMap:k,thicknessMap:Lt,gradientMap:st,opaque:C.transparent===!1&&C.blending===cs&&C.alphaToCoverage===!1,alphaMap:_t,alphaTest:Ct,alphaHash:Dt,combine:C.combine,mapUv:Se&&w(C.map.channel),aoMapUv:z&&w(C.aoMap.channel),lightMapUv:pn&&w(C.lightMap.channel),bumpMapUv:oe&&w(C.bumpMap.channel),normalMapUv:ce&&w(C.normalMap.channel),displacementMapUv:kt&&w(C.displacementMap.channel),emissiveMapUv:Re&&w(C.emissiveMap.channel),metalnessMapUv:Xt&&w(C.metalnessMap.channel),roughnessMapUv:U&&w(C.roughnessMap.channel),anisotropyMapUv:wt&&w(C.anisotropyMap.channel),clearcoatMapUv:zt&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:de&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&w(C.sheenRoughnessMap.channel),specularMapUv:ae&&w(C.specularMap.channel),specularColorMapUv:Yt&&w(C.specularColorMap.channel),specularIntensityMapUv:we&&w(C.specularIntensityMap.channel),transmissionMapUv:k&&w(C.transmissionMap.channel),thicknessMapUv:Lt&&w(C.thicknessMap.channel),alphaMapUv:_t&&w(C.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(ce||E),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!ht.attributes.uv&&(Se||_t),fog:!!mt,useFog:C.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Rt,skinning:at.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:Et,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:He,decodeVideoTexture:Se&&C.map.isVideoTexture===!0&&be.getTransfer(C.map.colorSpace)===Oe,decodeVideoTextureEmissive:Re&&C.emissiveMap.isVideoTexture===!0&&be.getTransfer(C.emissiveMap.colorSpace)===Oe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===bi,flipSided:C.side===Bn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:$t&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&C.extensions.multiDraw===!0||Pt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return tn.vertexUv1s=m.has(1),tn.vertexUv2s=m.has(2),tn.vertexUv3s=m.has(3),m.clear(),tn}function g(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const F in C.defines)R.push(F),R.push(C.defines[F]);return C.isRawShaderMaterial===!1&&(P(R,C),O(R,C),R.push(o.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function P(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function O(C,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),C.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),C.push(d.mask)}function D(C){const R=b[C.type];let F;if(R){const ut=Ti[R];F=VS.clone(ut.uniforms)}else F=C.uniforms;return F}function H(C,R){let F;for(let ut=0,at=_.length;ut<at;ut++){const mt=_[ut];if(mt.cacheKey===R){F=mt,++F.usedTimes;break}}return F===void 0&&(F=new pb(o,R,C,c),_.push(F)),F}function I(C){if(--C.usedTimes===0){const R=_.indexOf(C);_[R]=_[_.length-1],_.pop(),C.destroy()}}function B(C){p.remove(C)}function K(){p.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:D,acquireProgram:H,releaseProgram:I,releaseShaderCache:B,programs:_,dispose:K}}function xb(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function Sb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Bg(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Fg(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(v,S,y,b,w,M){let g=o[e];return g===void 0?(g={id:v.id,object:v,geometry:S,material:y,groupOrder:b,renderOrder:v.renderOrder,z:w,group:M},o[e]=g):(g.id=v.id,g.object=v,g.geometry=S,g.material=y,g.groupOrder=b,g.renderOrder=v.renderOrder,g.z=w,g.group=M),e++,g}function d(v,S,y,b,w,M){const g=h(v,S,y,b,w,M);y.transmission>0?r.push(g):y.transparent===!0?l.push(g):i.push(g)}function p(v,S,y,b,w,M){const g=h(v,S,y,b,w,M);y.transmission>0?r.unshift(g):y.transparent===!0?l.unshift(g):i.unshift(g)}function m(v,S){i.length>1&&i.sort(v||Sb),r.length>1&&r.sort(S||Bg),l.length>1&&l.sort(S||Bg)}function _(){for(let v=e,S=o.length;v<S;v++){const y=o[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:p,finish:_,sort:m}}function Mb(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new Fg,o.set(r,[h])):l>=c.length?(h=new Fg,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function yb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new tt,color:new Ce};break;case"SpotLight":i={position:new tt,direction:new tt,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return o[e.id]=i,i}}}function Eb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Tb=0;function bb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Ab(o){const e=new yb,i=Eb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new tt);const l=new tt,c=new je,h=new je;function d(m){let _=0,v=0,S=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let y=0,b=0,w=0,M=0,g=0,P=0,O=0,D=0,H=0,I=0,B=0;m.sort(bb);for(let C=0,R=m.length;C<R;C++){const F=m[C],ut=F.color,at=F.intensity,mt=F.distance,ht=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)_+=ut.r*at,v+=ut.g*at,S+=ut.b*at;else if(F.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(F.sh.coefficients[X],at);B++}else if(F.isDirectionalLight){const X=e.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const rt=F.shadow,Z=i.get(F);Z.shadowIntensity=rt.intensity,Z.shadowBias=rt.bias,Z.shadowNormalBias=rt.normalBias,Z.shadowRadius=rt.radius,Z.shadowMapSize=rt.mapSize,r.directionalShadow[y]=Z,r.directionalShadowMap[y]=ht,r.directionalShadowMatrix[y]=F.shadow.matrix,P++}r.directional[y]=X,y++}else if(F.isSpotLight){const X=e.get(F);X.position.setFromMatrixPosition(F.matrixWorld),X.color.copy(ut).multiplyScalar(at),X.distance=mt,X.coneCos=Math.cos(F.angle),X.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),X.decay=F.decay,r.spot[w]=X;const rt=F.shadow;if(F.map&&(r.spotLightMap[H]=F.map,H++,rt.updateMatrices(F),F.castShadow&&I++),r.spotLightMatrix[w]=rt.matrix,F.castShadow){const Z=i.get(F);Z.shadowIntensity=rt.intensity,Z.shadowBias=rt.bias,Z.shadowNormalBias=rt.normalBias,Z.shadowRadius=rt.radius,Z.shadowMapSize=rt.mapSize,r.spotShadow[w]=Z,r.spotShadowMap[w]=ht,D++}w++}else if(F.isRectAreaLight){const X=e.get(F);X.color.copy(ut).multiplyScalar(at),X.halfWidth.set(F.width*.5,0,0),X.halfHeight.set(0,F.height*.5,0),r.rectArea[M]=X,M++}else if(F.isPointLight){const X=e.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity),X.distance=F.distance,X.decay=F.decay,F.castShadow){const rt=F.shadow,Z=i.get(F);Z.shadowIntensity=rt.intensity,Z.shadowBias=rt.bias,Z.shadowNormalBias=rt.normalBias,Z.shadowRadius=rt.radius,Z.shadowMapSize=rt.mapSize,Z.shadowCameraNear=rt.camera.near,Z.shadowCameraFar=rt.camera.far,r.pointShadow[b]=Z,r.pointShadowMap[b]=ht,r.pointShadowMatrix[b]=F.shadow.matrix,O++}r.point[b]=X,b++}else if(F.isHemisphereLight){const X=e.get(F);X.skyColor.copy(F.color).multiplyScalar(at),X.groundColor.copy(F.groundColor).multiplyScalar(at),r.hemi[g]=X,g++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ut.LTC_FLOAT_1,r.rectAreaLTC2=Ut.LTC_FLOAT_2):(r.rectAreaLTC1=Ut.LTC_HALF_1,r.rectAreaLTC2=Ut.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=S;const K=r.hash;(K.directionalLength!==y||K.pointLength!==b||K.spotLength!==w||K.rectAreaLength!==M||K.hemiLength!==g||K.numDirectionalShadows!==P||K.numPointShadows!==O||K.numSpotShadows!==D||K.numSpotMaps!==H||K.numLightProbes!==B)&&(r.directional.length=y,r.spot.length=w,r.rectArea.length=M,r.point.length=b,r.hemi.length=g,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=D+H-I,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=B,K.directionalLength=y,K.pointLength=b,K.spotLength=w,K.rectAreaLength=M,K.hemiLength=g,K.numDirectionalShadows=P,K.numPointShadows=O,K.numSpotShadows=D,K.numSpotMaps=H,K.numLightProbes=B,r.version=Tb++)}function p(m,_){let v=0,S=0,y=0,b=0,w=0;const M=_.matrixWorldInverse;for(let g=0,P=m.length;g<P;g++){const O=m[g];if(O.isDirectionalLight){const D=r.directional[v];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),v++}else if(O.isSpotLight){const D=r.spot[y];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),y++}else if(O.isRectAreaLight){const D=r.rectArea[b];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),h.identity(),c.copy(O.matrixWorld),c.premultiply(M),h.extractRotation(c),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(O.isPointLight){const D=r.point[S];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),S++}else if(O.isHemisphereLight){const D=r.hemi[w];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(M),w++}}}return{setup:d,setupView:p,state:r}}function Ig(o){const e=new Ab(o),i=[],r=[];function l(_){m.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function h(_){r.push(_)}function d(){e.setup(i)}function p(_){e.setupView(i,_)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:h}}function Rb(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new Ig(o),e.set(l,[d])):c>=h.length?(d=new Ig(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const Cb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Db(o,e,i){let r=new cv;const l=new ze,c=new ze,h=new Ze,d=new JS({depthPacking:uS}),p=new $S,m={},_=i.maxTextureSize,v={[Pa]:Bn,[Bn]:Pa,[bi]:bi},S=new za({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:Cb,fragmentShader:wb}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const b=new wi;b.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ri(b,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hg;let g=this.type;this.render=function(I,B,K){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;const C=o.getRenderTarget(),R=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),ut=o.state;ut.setBlending(Na),ut.buffers.color.setClear(1,1,1,1),ut.buffers.depth.setTest(!0),ut.setScissorTest(!1);const at=g!==Ji&&this.type===Ji,mt=g===Ji&&this.type!==Ji;for(let ht=0,X=I.length;ht<X;ht++){const rt=I[ht],Z=rt.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const St=Z.getFrameExtents();if(l.multiply(St),c.copy(Z.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/St.x),l.x=c.x*St.x,Z.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/St.y),l.y=c.y*St.y,Z.mapSize.y=c.y)),Z.map===null||at===!0||mt===!0){const it=this.type!==Ji?{minFilter:_i,magFilter:_i}:{};Z.map!==null&&Z.map.dispose(),Z.map=new _r(l.x,l.y,it),Z.map.texture.name=rt.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const L=Z.getViewportCount();for(let it=0;it<L;it++){const Et=Z.getViewport(it);h.set(c.x*Et.x,c.y*Et.y,c.x*Et.z,c.y*Et.w),ut.viewport(h),Z.updateMatrices(rt,it),r=Z.getFrustum(),D(B,K,Z.camera,rt,this.type)}Z.isPointLightShadow!==!0&&this.type===Ji&&P(Z,K),Z.needsUpdate=!1}g=this.type,M.needsUpdate=!1,o.setRenderTarget(C,R,F)};function P(I,B){const K=e.update(w);S.defines.VSM_SAMPLES!==I.blurSamples&&(S.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new _r(l.x,l.y)),S.uniforms.shadow_pass.value=I.map.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(B,null,K,S,w,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(B,null,K,y,w,null)}function O(I,B,K,C){let R=null;const F=K.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(F!==void 0)R=F;else if(R=K.isPointLight===!0?p:d,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const ut=R.uuid,at=B.uuid;let mt=m[ut];mt===void 0&&(mt={},m[ut]=mt);let ht=mt[at];ht===void 0&&(ht=R.clone(),mt[at]=ht,B.addEventListener("dispose",H)),R=ht}if(R.visible=B.visible,R.wireframe=B.wireframe,C===Ji?R.side=B.shadowSide!==null?B.shadowSide:B.side:R.side=B.shadowSide!==null?B.shadowSide:v[B.side],R.alphaMap=B.alphaMap,R.alphaTest=B.alphaTest,R.map=B.map,R.clipShadows=B.clipShadows,R.clippingPlanes=B.clippingPlanes,R.clipIntersection=B.clipIntersection,R.displacementMap=B.displacementMap,R.displacementScale=B.displacementScale,R.displacementBias=B.displacementBias,R.wireframeLinewidth=B.wireframeLinewidth,R.linewidth=B.linewidth,K.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ut=o.properties.get(R);ut.light=K}return R}function D(I,B,K,C,R){if(I.visible===!1)return;if(I.layers.test(B.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&R===Ji)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,I.matrixWorld);const at=e.update(I),mt=I.material;if(Array.isArray(mt)){const ht=at.groups;for(let X=0,rt=ht.length;X<rt;X++){const Z=ht[X],St=mt[Z.materialIndex];if(St&&St.visible){const L=O(I,St,C,R);I.onBeforeShadow(o,I,B,K,at,L,Z),o.renderBufferDirect(K,null,at,L,I,Z),I.onAfterShadow(o,I,B,K,at,L,Z)}}}else if(mt.visible){const ht=O(I,mt,C,R);I.onBeforeShadow(o,I,B,K,at,ht,null),o.renderBufferDirect(K,null,at,ht,I,null),I.onAfterShadow(o,I,B,K,at,ht,null)}}const ut=I.children;for(let at=0,mt=ut.length;at<mt;at++)D(ut[at],B,K,C,R)}function H(I){I.target.removeEventListener("dispose",H);for(const K in m){const C=m[K],R=I.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const Ub={[gh]:vh,[xh]:yh,[Sh]:Eh,[hs]:Mh,[vh]:gh,[yh]:xh,[Eh]:Sh,[Mh]:hs};function Lb(o,e){function i(){let k=!1;const Lt=new Ze;let st=null;const _t=new Ze(0,0,0,0);return{setMask:function(Ct){st!==Ct&&!k&&(o.colorMask(Ct,Ct,Ct,Ct),st=Ct)},setLocked:function(Ct){k=Ct},setClear:function(Ct,Dt,$t,He,tn){tn===!0&&(Ct*=He,Dt*=He,$t*=He),Lt.set(Ct,Dt,$t,He),_t.equals(Lt)===!1&&(o.clearColor(Ct,Dt,$t,He),_t.copy(Lt))},reset:function(){k=!1,st=null,_t.set(-1,0,0,0)}}}function r(){let k=!1,Lt=!1,st=null,_t=null,Ct=null;return{setReversed:function(Dt){if(Lt!==Dt){const $t=e.get("EXT_clip_control");Dt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),Lt=Dt;const He=Ct;Ct=null,this.setClear(He)}},getReversed:function(){return Lt},setTest:function(Dt){Dt?Tt(o.DEPTH_TEST):Rt(o.DEPTH_TEST)},setMask:function(Dt){st!==Dt&&!k&&(o.depthMask(Dt),st=Dt)},setFunc:function(Dt){if(Lt&&(Dt=Ub[Dt]),_t!==Dt){switch(Dt){case gh:o.depthFunc(o.NEVER);break;case vh:o.depthFunc(o.ALWAYS);break;case xh:o.depthFunc(o.LESS);break;case hs:o.depthFunc(o.LEQUAL);break;case Sh:o.depthFunc(o.EQUAL);break;case Mh:o.depthFunc(o.GEQUAL);break;case yh:o.depthFunc(o.GREATER);break;case Eh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=Dt}},setLocked:function(Dt){k=Dt},setClear:function(Dt){Ct!==Dt&&(Lt&&(Dt=1-Dt),o.clearDepth(Dt),Ct=Dt)},reset:function(){k=!1,st=null,_t=null,Ct=null,Lt=!1}}}function l(){let k=!1,Lt=null,st=null,_t=null,Ct=null,Dt=null,$t=null,He=null,tn=null;return{setTest:function(Me){k||(Me?Tt(o.STENCIL_TEST):Rt(o.STENCIL_TEST))},setMask:function(Me){Lt!==Me&&!k&&(o.stencilMask(Me),Lt=Me)},setFunc:function(Me,Tn,bn){(st!==Me||_t!==Tn||Ct!==bn)&&(o.stencilFunc(Me,Tn,bn),st=Me,_t=Tn,Ct=bn)},setOp:function(Me,Tn,bn){(Dt!==Me||$t!==Tn||He!==bn)&&(o.stencilOp(Me,Tn,bn),Dt=Me,$t=Tn,He=bn)},setLocked:function(Me){k=Me},setClear:function(Me){tn!==Me&&(o.clearStencil(Me),tn=Me)},reset:function(){k=!1,Lt=null,st=null,_t=null,Ct=null,Dt=null,$t=null,He=null,tn=null}}}const c=new i,h=new r,d=new l,p=new WeakMap,m=new WeakMap;let _={},v={},S=new WeakMap,y=[],b=null,w=!1,M=null,g=null,P=null,O=null,D=null,H=null,I=null,B=new Ce(0,0,0),K=0,C=!1,R=null,F=null,ut=null,at=null,mt=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,rt=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),X=rt>=1):Z.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),X=rt>=2);let St=null,L={};const it=o.getParameter(o.SCISSOR_BOX),Et=o.getParameter(o.VIEWPORT),At=new Ze().fromArray(it),q=new Ze().fromArray(Et);function dt(k,Lt,st,_t){const Ct=new Uint8Array(4),Dt=o.createTexture();o.bindTexture(k,Dt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let $t=0;$t<st;$t++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,Ct):o.texImage2D(Lt+$t,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ct);return Dt}const xt={};xt[o.TEXTURE_2D]=dt(o.TEXTURE_2D,o.TEXTURE_2D,1),xt[o.TEXTURE_CUBE_MAP]=dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[o.TEXTURE_2D_ARRAY]=dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),xt[o.TEXTURE_3D]=dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Tt(o.DEPTH_TEST),h.setFunc(hs),oe(!1),ce(V_),Tt(o.CULL_FACE),z(Na);function Tt(k){_[k]!==!0&&(o.enable(k),_[k]=!0)}function Rt(k){_[k]!==!1&&(o.disable(k),_[k]=!1)}function Kt(k,Lt){return v[k]!==Lt?(o.bindFramebuffer(k,Lt),v[k]=Lt,k===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Lt),k===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Pt(k,Lt){let st=y,_t=!1;if(k){st=S.get(Lt),st===void 0&&(st=[],S.set(Lt,st));const Ct=k.textures;if(st.length!==Ct.length||st[0]!==o.COLOR_ATTACHMENT0){for(let Dt=0,$t=Ct.length;Dt<$t;Dt++)st[Dt]=o.COLOR_ATTACHMENT0+Dt;st.length=Ct.length,_t=!0}}else st[0]!==o.BACK&&(st[0]=o.BACK,_t=!0);_t&&o.drawBuffers(st)}function Se(k){return b!==k?(o.useProgram(k),b=k,!0):!1}const Ae={[fr]:o.FUNC_ADD,[Px]:o.FUNC_SUBTRACT,[zx]:o.FUNC_REVERSE_SUBTRACT};Ae[Bx]=o.MIN,Ae[Fx]=o.MAX;const ie={[Ix]:o.ZERO,[Hx]:o.ONE,[Gx]:o.SRC_COLOR,[mh]:o.SRC_ALPHA,[Yx]:o.SRC_ALPHA_SATURATE,[Wx]:o.DST_COLOR,[kx]:o.DST_ALPHA,[Vx]:o.ONE_MINUS_SRC_COLOR,[_h]:o.ONE_MINUS_SRC_ALPHA,[qx]:o.ONE_MINUS_DST_COLOR,[Xx]:o.ONE_MINUS_DST_ALPHA,[Zx]:o.CONSTANT_COLOR,[jx]:o.ONE_MINUS_CONSTANT_COLOR,[Kx]:o.CONSTANT_ALPHA,[Qx]:o.ONE_MINUS_CONSTANT_ALPHA};function z(k,Lt,st,_t,Ct,Dt,$t,He,tn,Me){if(k===Na){w===!0&&(Rt(o.BLEND),w=!1);return}if(w===!1&&(Tt(o.BLEND),w=!0),k!==Ox){if(k!==M||Me!==C){if((g!==fr||D!==fr)&&(o.blendEquation(o.FUNC_ADD),g=fr,D=fr),Me)switch(k){case cs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case k_:o.blendFunc(o.ONE,o.ONE);break;case X_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case W_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case cs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case k_:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case X_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case W_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}P=null,O=null,H=null,I=null,B.set(0,0,0),K=0,M=k,C=Me}return}Ct=Ct||Lt,Dt=Dt||st,$t=$t||_t,(Lt!==g||Ct!==D)&&(o.blendEquationSeparate(Ae[Lt],Ae[Ct]),g=Lt,D=Ct),(st!==P||_t!==O||Dt!==H||$t!==I)&&(o.blendFuncSeparate(ie[st],ie[_t],ie[Dt],ie[$t]),P=st,O=_t,H=Dt,I=$t),(He.equals(B)===!1||tn!==K)&&(o.blendColor(He.r,He.g,He.b,tn),B.copy(He),K=tn),M=k,C=!1}function pn(k,Lt){k.side===bi?Rt(o.CULL_FACE):Tt(o.CULL_FACE);let st=k.side===Bn;Lt&&(st=!st),oe(st),k.blending===cs&&k.transparent===!1?z(Na):z(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const _t=k.stencilWrite;d.setTest(_t),_t&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Re(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Tt(o.SAMPLE_ALPHA_TO_COVERAGE):Rt(o.SAMPLE_ALPHA_TO_COVERAGE)}function oe(k){R!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),R=k)}function ce(k){k!==Ux?(Tt(o.CULL_FACE),k!==F&&(k===V_?o.cullFace(o.BACK):k===Lx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Rt(o.CULL_FACE),F=k}function kt(k){k!==ut&&(X&&o.lineWidth(k),ut=k)}function Re(k,Lt,st){k?(Tt(o.POLYGON_OFFSET_FILL),(at!==Lt||mt!==st)&&(o.polygonOffset(Lt,st),at=Lt,mt=st)):Rt(o.POLYGON_OFFSET_FILL)}function Xt(k){k?Tt(o.SCISSOR_TEST):Rt(o.SCISSOR_TEST)}function U(k){k===void 0&&(k=o.TEXTURE0+ht-1),St!==k&&(o.activeTexture(k),St=k)}function E(k,Lt,st){st===void 0&&(St===null?st=o.TEXTURE0+ht-1:st=St);let _t=L[st];_t===void 0&&(_t={type:void 0,texture:void 0},L[st]=_t),(_t.type!==k||_t.texture!==Lt)&&(St!==st&&(o.activeTexture(st),St=st),o.bindTexture(k,Lt||xt[k]),_t.type=k,_t.texture=Lt)}function $(){const k=L[St];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ct(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function vt(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ht(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function zt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Gt(k){At.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),At.copy(k))}function Ft(k){q.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),q.copy(k))}function ae(k,Lt){let st=m.get(Lt);st===void 0&&(st=new WeakMap,m.set(Lt,st));let _t=st.get(k);_t===void 0&&(_t=o.getUniformBlockIndex(Lt,k.name),st.set(k,_t))}function Yt(k,Lt){const _t=m.get(Lt).get(k);p.get(Lt)!==_t&&(o.uniformBlockBinding(Lt,_t,k.__bindingPointIndex),p.set(Lt,_t))}function we(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},St=null,L={},v={},S=new WeakMap,y=[],b=null,w=!1,M=null,g=null,P=null,O=null,D=null,H=null,I=null,B=new Ce(0,0,0),K=0,C=!1,R=null,F=null,ut=null,at=null,mt=null,At.set(0,0,o.canvas.width,o.canvas.height),q.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:Tt,disable:Rt,bindFramebuffer:Kt,drawBuffers:Pt,useProgram:Se,setBlending:z,setMaterial:pn,setFlipSided:oe,setCullFace:ce,setLineWidth:kt,setPolygonOffset:Re,setScissorTest:Xt,activeTexture:U,bindTexture:E,unbindTexture:$,compressedTexImage2D:ct,compressedTexImage3D:vt,texImage2D:Bt,texImage3D:jt,updateUBOMapping:ae,uniformBlockBinding:Yt,texStorage2D:de,texStorage3D:yt,texSubImage2D:ft,texSubImage3D:Ht,compressedTexSubImage2D:wt,compressedTexSubImage3D:zt,scissor:Gt,viewport:Ft,reset:we}}function Nb(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ze,_=new WeakMap;let v;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,E){return y?new OffscreenCanvas(U,E):Co("canvas")}function w(U,E,$){let ct=1;const vt=Xt(U);if((vt.width>$||vt.height>$)&&(ct=$/Math.max(vt.width,vt.height)),ct<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ft=Math.floor(ct*vt.width),Ht=Math.floor(ct*vt.height);v===void 0&&(v=b(ft,Ht));const wt=E?b(ft,Ht):v;return wt.width=ft,wt.height=Ht,wt.getContext("2d").drawImage(U,0,0,ft,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ft+"x"+Ht+")."),wt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),U;return U}function M(U){return U.generateMipmaps}function g(U){o.generateMipmap(U)}function P(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(U,E,$,ct,vt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ft=E;if(E===o.RED&&($===o.FLOAT&&(ft=o.R32F),$===o.HALF_FLOAT&&(ft=o.R16F),$===o.UNSIGNED_BYTE&&(ft=o.R8)),E===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(ft=o.R8UI),$===o.UNSIGNED_SHORT&&(ft=o.R16UI),$===o.UNSIGNED_INT&&(ft=o.R32UI),$===o.BYTE&&(ft=o.R8I),$===o.SHORT&&(ft=o.R16I),$===o.INT&&(ft=o.R32I)),E===o.RG&&($===o.FLOAT&&(ft=o.RG32F),$===o.HALF_FLOAT&&(ft=o.RG16F),$===o.UNSIGNED_BYTE&&(ft=o.RG8)),E===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(ft=o.RG8UI),$===o.UNSIGNED_SHORT&&(ft=o.RG16UI),$===o.UNSIGNED_INT&&(ft=o.RG32UI),$===o.BYTE&&(ft=o.RG8I),$===o.SHORT&&(ft=o.RG16I),$===o.INT&&(ft=o.RG32I)),E===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(ft=o.RGB8UI),$===o.UNSIGNED_SHORT&&(ft=o.RGB16UI),$===o.UNSIGNED_INT&&(ft=o.RGB32UI),$===o.BYTE&&(ft=o.RGB8I),$===o.SHORT&&(ft=o.RGB16I),$===o.INT&&(ft=o.RGB32I)),E===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(ft=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(ft=o.RGBA16UI),$===o.UNSIGNED_INT&&(ft=o.RGBA32UI),$===o.BYTE&&(ft=o.RGBA8I),$===o.SHORT&&(ft=o.RGBA16I),$===o.INT&&(ft=o.RGBA32I)),E===o.RGB&&$===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),E===o.RGBA){const Ht=vt?xu:be.getTransfer(ct);$===o.FLOAT&&(ft=o.RGBA32F),$===o.HALF_FLOAT&&(ft=o.RGBA16F),$===o.UNSIGNED_BYTE&&(ft=Ht===Oe?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ft}function D(U,E){let $;return U?E===null||E===mr||E===bo?$=o.DEPTH24_STENCIL8:E===$i?$=o.DEPTH32F_STENCIL8:E===To&&($=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===mr||E===bo?$=o.DEPTH_COMPONENT24:E===$i?$=o.DEPTH_COMPONENT32F:E===To&&($=o.DEPTH_COMPONENT16),$}function H(U,E){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==_i&&U.minFilter!==Ai?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function I(U){const E=U.target;E.removeEventListener("dispose",I),K(E),E.isVideoTexture&&_.delete(E)}function B(U){const E=U.target;E.removeEventListener("dispose",B),R(E)}function K(U){const E=r.get(U);if(E.__webglInit===void 0)return;const $=U.source,ct=S.get($);if(ct){const vt=ct[E.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&C(U),Object.keys(ct).length===0&&S.delete($)}r.remove(U)}function C(U){const E=r.get(U);o.deleteTexture(E.__webglTexture);const $=U.source,ct=S.get($);delete ct[E.__cacheKey],h.memory.textures--}function R(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(E.__webglFramebuffer[ct]))for(let vt=0;vt<E.__webglFramebuffer[ct].length;vt++)o.deleteFramebuffer(E.__webglFramebuffer[ct][vt]);else o.deleteFramebuffer(E.__webglFramebuffer[ct]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ct])}else{if(Array.isArray(E.__webglFramebuffer))for(let ct=0;ct<E.__webglFramebuffer.length;ct++)o.deleteFramebuffer(E.__webglFramebuffer[ct]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ct=0;ct<E.__webglColorRenderbuffer.length;ct++)E.__webglColorRenderbuffer[ct]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ct]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=U.textures;for(let ct=0,vt=$.length;ct<vt;ct++){const ft=r.get($[ct]);ft.__webglTexture&&(o.deleteTexture(ft.__webglTexture),h.memory.textures--),r.remove($[ct])}r.remove(U)}let F=0;function ut(){F=0}function at(){const U=F;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),F+=1,U}function mt(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ht(U,E){const $=r.get(U);if(U.isVideoTexture&&kt(U),U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){const ct=U.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q($,U,E);return}}i.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+E)}function X(U,E){const $=r.get(U);if(U.version>0&&$.__version!==U.version){q($,U,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+E)}function rt(U,E){const $=r.get(U);if(U.version>0&&$.__version!==U.version){q($,U,E);return}i.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+E)}function Z(U,E){const $=r.get(U);if(U.version>0&&$.__version!==U.version){dt($,U,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+E)}const St={[Ah]:o.REPEAT,[dr]:o.CLAMP_TO_EDGE,[Rh]:o.MIRRORED_REPEAT},L={[_i]:o.NEAREST,[oS]:o.NEAREST_MIPMAP_NEAREST,[Gl]:o.NEAREST_MIPMAP_LINEAR,[Ai]:o.LINEAR,[zf]:o.LINEAR_MIPMAP_NEAREST,[pr]:o.LINEAR_MIPMAP_LINEAR},it={[hS]:o.NEVER,[vS]:o.ALWAYS,[dS]:o.LESS,[$g]:o.LEQUAL,[pS]:o.EQUAL,[gS]:o.GEQUAL,[mS]:o.GREATER,[_S]:o.NOTEQUAL};function Et(U,E){if(E.type===$i&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ai||E.magFilter===zf||E.magFilter===Gl||E.magFilter===pr||E.minFilter===Ai||E.minFilter===zf||E.minFilter===Gl||E.minFilter===pr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,St[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,St[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,St[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,L[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,L[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,it[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===_i||E.minFilter!==Gl&&E.minFilter!==pr||E.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function At(U,E){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",I));const ct=E.source;let vt=S.get(ct);vt===void 0&&(vt={},S.set(ct,vt));const ft=mt(E);if(ft!==U.__cacheKey){vt[ft]===void 0&&(vt[ft]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,$=!0),vt[ft].usedTimes++;const Ht=vt[U.__cacheKey];Ht!==void 0&&(vt[U.__cacheKey].usedTimes--,Ht.usedTimes===0&&C(E)),U.__cacheKey=ft,U.__webglTexture=vt[ft].texture}return $}function q(U,E,$){let ct=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ct=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ct=o.TEXTURE_3D);const vt=At(U,E),ft=E.source;i.bindTexture(ct,U.__webglTexture,o.TEXTURE0+$);const Ht=r.get(ft);if(ft.version!==Ht.__version||vt===!0){i.activeTexture(o.TEXTURE0+$);const wt=be.getPrimaries(be.workingColorSpace),zt=E.colorSpace===La?null:be.getPrimaries(E.colorSpace),de=E.colorSpace===La||wt===zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let yt=w(E.image,!1,l.maxTextureSize);yt=Re(E,yt);const Bt=c.convert(E.format,E.colorSpace),jt=c.convert(E.type);let Gt=O(E.internalFormat,Bt,jt,E.colorSpace,E.isVideoTexture);Et(ct,E);let Ft;const ae=E.mipmaps,Yt=E.isVideoTexture!==!0,we=Ht.__version===void 0||vt===!0,k=ft.dataReady,Lt=H(E,yt);if(E.isDepthTexture)Gt=D(E.format===Ro,E.type),we&&(Yt?i.texStorage2D(o.TEXTURE_2D,1,Gt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,Gt,yt.width,yt.height,0,Bt,jt,null));else if(E.isDataTexture)if(ae.length>0){Yt&&we&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,ae[0].width,ae[0].height);for(let st=0,_t=ae.length;st<_t;st++)Ft=ae[st],Yt?k&&i.texSubImage2D(o.TEXTURE_2D,st,0,0,Ft.width,Ft.height,Bt,jt,Ft.data):i.texImage2D(o.TEXTURE_2D,st,Gt,Ft.width,Ft.height,0,Bt,jt,Ft.data);E.generateMipmaps=!1}else Yt?(we&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,yt.width,yt.height),k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,yt.width,yt.height,Bt,jt,yt.data)):i.texImage2D(o.TEXTURE_2D,0,Gt,yt.width,yt.height,0,Bt,jt,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Yt&&we&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Gt,ae[0].width,ae[0].height,yt.depth);for(let st=0,_t=ae.length;st<_t;st++)if(Ft=ae[st],E.format!==mi)if(Bt!==null)if(Yt){if(k)if(E.layerUpdates.size>0){const Ct=mg(Ft.width,Ft.height,E.format,E.type);for(const Dt of E.layerUpdates){const $t=Ft.data.subarray(Dt*Ct/Ft.data.BYTES_PER_ELEMENT,(Dt+1)*Ct/Ft.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,st,0,0,Dt,Ft.width,Ft.height,1,Bt,$t)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,st,0,0,0,Ft.width,Ft.height,yt.depth,Bt,Ft.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,st,Gt,Ft.width,Ft.height,yt.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?k&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,st,0,0,0,Ft.width,Ft.height,yt.depth,Bt,jt,Ft.data):i.texImage3D(o.TEXTURE_2D_ARRAY,st,Gt,Ft.width,Ft.height,yt.depth,0,Bt,jt,Ft.data)}else{Yt&&we&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,ae[0].width,ae[0].height);for(let st=0,_t=ae.length;st<_t;st++)Ft=ae[st],E.format!==mi?Bt!==null?Yt?k&&i.compressedTexSubImage2D(o.TEXTURE_2D,st,0,0,Ft.width,Ft.height,Bt,Ft.data):i.compressedTexImage2D(o.TEXTURE_2D,st,Gt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?k&&i.texSubImage2D(o.TEXTURE_2D,st,0,0,Ft.width,Ft.height,Bt,jt,Ft.data):i.texImage2D(o.TEXTURE_2D,st,Gt,Ft.width,Ft.height,0,Bt,jt,Ft.data)}else if(E.isDataArrayTexture)if(Yt){if(we&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Gt,yt.width,yt.height,yt.depth),k)if(E.layerUpdates.size>0){const st=mg(yt.width,yt.height,E.format,E.type);for(const _t of E.layerUpdates){const Ct=yt.data.subarray(_t*st/yt.data.BYTES_PER_ELEMENT,(_t+1)*st/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,yt.width,yt.height,1,Bt,jt,Ct)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Bt,jt,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Gt,yt.width,yt.height,yt.depth,0,Bt,jt,yt.data);else if(E.isData3DTexture)Yt?(we&&i.texStorage3D(o.TEXTURE_3D,Lt,Gt,yt.width,yt.height,yt.depth),k&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Bt,jt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,Gt,yt.width,yt.height,yt.depth,0,Bt,jt,yt.data);else if(E.isFramebufferTexture){if(we)if(Yt)i.texStorage2D(o.TEXTURE_2D,Lt,Gt,yt.width,yt.height);else{let st=yt.width,_t=yt.height;for(let Ct=0;Ct<Lt;Ct++)i.texImage2D(o.TEXTURE_2D,Ct,Gt,st,_t,0,Bt,jt,null),st>>=1,_t>>=1}}else if(ae.length>0){if(Yt&&we){const st=Xt(ae[0]);i.texStorage2D(o.TEXTURE_2D,Lt,Gt,st.width,st.height)}for(let st=0,_t=ae.length;st<_t;st++)Ft=ae[st],Yt?k&&i.texSubImage2D(o.TEXTURE_2D,st,0,0,Bt,jt,Ft):i.texImage2D(o.TEXTURE_2D,st,Gt,Bt,jt,Ft);E.generateMipmaps=!1}else if(Yt){if(we){const st=Xt(yt);i.texStorage2D(o.TEXTURE_2D,Lt,Gt,st.width,st.height)}k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Bt,jt,yt)}else i.texImage2D(o.TEXTURE_2D,0,Gt,Bt,jt,yt);M(E)&&g(ct),Ht.__version=ft.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function dt(U,E,$){if(E.image.length!==6)return;const ct=At(U,E),vt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+$);const ft=r.get(vt);if(vt.version!==ft.__version||ct===!0){i.activeTexture(o.TEXTURE0+$);const Ht=be.getPrimaries(be.workingColorSpace),wt=E.colorSpace===La?null:be.getPrimaries(E.colorSpace),zt=E.colorSpace===La||Ht===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const de=E.isCompressedTexture||E.image[0].isCompressedTexture,yt=E.image[0]&&E.image[0].isDataTexture,Bt=[];for(let _t=0;_t<6;_t++)!de&&!yt?Bt[_t]=w(E.image[_t],!0,l.maxCubemapSize):Bt[_t]=yt?E.image[_t].image:E.image[_t],Bt[_t]=Re(E,Bt[_t]);const jt=Bt[0],Gt=c.convert(E.format,E.colorSpace),Ft=c.convert(E.type),ae=O(E.internalFormat,Gt,Ft,E.colorSpace),Yt=E.isVideoTexture!==!0,we=ft.__version===void 0||ct===!0,k=vt.dataReady;let Lt=H(E,jt);Et(o.TEXTURE_CUBE_MAP,E);let st;if(de){Yt&&we&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,ae,jt.width,jt.height);for(let _t=0;_t<6;_t++){st=Bt[_t].mipmaps;for(let Ct=0;Ct<st.length;Ct++){const Dt=st[Ct];E.format!==mi?Gt!==null?Yt?k&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,Dt.width,Dt.height,Gt,Dt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,ae,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,Dt.width,Dt.height,Gt,Ft,Dt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,ae,Dt.width,Dt.height,0,Gt,Ft,Dt.data)}}}else{if(st=E.mipmaps,Yt&&we){st.length>0&&Lt++;const _t=Xt(Bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,ae,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(yt){Yt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Bt[_t].width,Bt[_t].height,Gt,Ft,Bt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ae,Bt[_t].width,Bt[_t].height,0,Gt,Ft,Bt[_t].data);for(let Ct=0;Ct<st.length;Ct++){const $t=st[Ct].image[_t].image;Yt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,$t.width,$t.height,Gt,Ft,$t.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,ae,$t.width,$t.height,0,Gt,Ft,$t.data)}}else{Yt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Gt,Ft,Bt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ae,Gt,Ft,Bt[_t]);for(let Ct=0;Ct<st.length;Ct++){const Dt=st[Ct];Yt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,Gt,Ft,Dt.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,ae,Gt,Ft,Dt.image[_t])}}}M(E)&&g(o.TEXTURE_CUBE_MAP),ft.__version=vt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function xt(U,E,$,ct,vt,ft){const Ht=c.convert($.format,$.colorSpace),wt=c.convert($.type),zt=O($.internalFormat,Ht,wt,$.colorSpace),de=r.get(E),yt=r.get($);if(yt.__renderTarget=E,!de.__hasExternalTextures){const Bt=Math.max(1,E.width>>ft),jt=Math.max(1,E.height>>ft);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,ft,zt,Bt,jt,E.depth,0,Ht,wt,null):i.texImage2D(vt,ft,zt,Bt,jt,0,Ht,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),ce(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ct,vt,yt.__webglTexture,0,oe(E)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ct,vt,yt.__webglTexture,ft),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Tt(U,E,$){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const ct=E.depthTexture,vt=ct&&ct.isDepthTexture?ct.type:null,ft=D(E.stencilBuffer,vt),Ht=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=oe(E);ce(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,wt,ft,E.width,E.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,ft,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ft,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ht,o.RENDERBUFFER,U)}else{const ct=E.textures;for(let vt=0;vt<ct.length;vt++){const ft=ct[vt],Ht=c.convert(ft.format,ft.colorSpace),wt=c.convert(ft.type),zt=O(ft.internalFormat,Ht,wt,ft.colorSpace),de=oe(E);$&&ce(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,de,zt,E.width,E.height):ce(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,de,zt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,zt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Rt(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=r.get(E.depthTexture);ct.__renderTarget=E,(!ct.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht(E.depthTexture,0);const vt=ct.__webglTexture,ft=oe(E);if(E.depthTexture.format===Ao)ce(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0);else if(E.depthTexture.format===Ro)ce(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Kt(U){const E=r.get(U),$=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const ct=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ct){const vt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ct.removeEventListener("dispose",vt)};ct.addEventListener("dispose",vt),E.__depthDisposeCallback=vt}E.__boundDepthTexture=ct}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Rt(E.__webglFramebuffer,U)}else if($){E.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ct]),E.__webglDepthbuffer[ct]===void 0)E.__webglDepthbuffer[ct]=o.createRenderbuffer(),Tt(E.__webglDepthbuffer[ct],U,!1);else{const vt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer[ct];o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ft)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Tt(E.__webglDepthbuffer,U,!1);else{const ct=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,vt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,vt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ct,o.RENDERBUFFER,vt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Pt(U,E,$){const ct=r.get(U);E!==void 0&&xt(ct.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&Kt(U)}function Se(U){const E=U.texture,$=r.get(U),ct=r.get(E);U.addEventListener("dispose",B);const vt=U.textures,ft=U.isWebGLCubeRenderTarget===!0,Ht=vt.length>1;if(Ht||(ct.__webglTexture===void 0&&(ct.__webglTexture=o.createTexture()),ct.__version=E.version,h.memory.textures++),ft){$.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[wt]=[];for(let zt=0;zt<E.mipmaps.length;zt++)$.__webglFramebuffer[wt][zt]=o.createFramebuffer()}else $.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let wt=0;wt<E.mipmaps.length;wt++)$.__webglFramebuffer[wt]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(Ht)for(let wt=0,zt=vt.length;wt<zt;wt++){const de=r.get(vt[wt]);de.__webglTexture===void 0&&(de.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&ce(U)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let wt=0;wt<vt.length;wt++){const zt=vt[wt];$.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[wt]);const de=c.convert(zt.format,zt.colorSpace),yt=c.convert(zt.type),Bt=O(zt.internalFormat,de,yt,zt.colorSpace,U.isXRRenderTarget===!0),jt=oe(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,Bt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,$.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),Tt($.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ft){i.bindTexture(o.TEXTURE_CUBE_MAP,ct.__webglTexture),Et(o.TEXTURE_CUBE_MAP,E);for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0)for(let zt=0;zt<E.mipmaps.length;zt++)xt($.__webglFramebuffer[wt][zt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,zt);else xt($.__webglFramebuffer[wt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);M(E)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ht){for(let wt=0,zt=vt.length;wt<zt;wt++){const de=vt[wt],yt=r.get(de);i.bindTexture(o.TEXTURE_2D,yt.__webglTexture),Et(o.TEXTURE_2D,de),xt($.__webglFramebuffer,U,de,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,0),M(de)&&g(o.TEXTURE_2D)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(wt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,ct.__webglTexture),Et(wt,E),E.mipmaps&&E.mipmaps.length>0)for(let zt=0;zt<E.mipmaps.length;zt++)xt($.__webglFramebuffer[zt],U,E,o.COLOR_ATTACHMENT0,wt,zt);else xt($.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,wt,0);M(E)&&g(wt),i.unbindTexture()}U.depthBuffer&&Kt(U)}function Ae(U){const E=U.textures;for(let $=0,ct=E.length;$<ct;$++){const vt=E[$];if(M(vt)){const ft=P(U),Ht=r.get(vt).__webglTexture;i.bindTexture(ft,Ht),g(ft),i.unbindTexture()}}}const ie=[],z=[];function pn(U){if(U.samples>0){if(ce(U)===!1){const E=U.textures,$=U.width,ct=U.height;let vt=o.COLOR_BUFFER_BIT;const ft=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ht=r.get(U),wt=E.length>1;if(wt)for(let zt=0;zt<E.length;zt++)i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let zt=0;zt<E.length;zt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[zt]);const de=r.get(E[zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,de,0)}o.blitFramebuffer(0,0,$,ct,0,0,$,ct,vt,o.NEAREST),p===!0&&(ie.length=0,z.length=0,ie.push(o.COLOR_ATTACHMENT0+zt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ie.push(ft),z.push(ft),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,z)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ie))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let zt=0;zt<E.length;zt++){i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[zt]);const de=r.get(E[zt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,de,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function oe(U){return Math.min(l.maxSamples,U.samples)}function ce(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function kt(U){const E=h.render.frame;_.get(U)!==E&&(_.set(U,E),U.update())}function Re(U,E){const $=U.colorSpace,ct=U.format,vt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==ms&&$!==La&&(be.getTransfer($)===Oe?(ct!==mi||vt!==na)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function Xt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=at,this.resetTextureUnits=ut,this.setTexture2D=ht,this.setTexture2DArray=X,this.setTexture3D=rt,this.setTextureCube=Z,this.rebindTextures=Pt,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=ce}function Ob(o,e){function i(r,l=La){let c;const h=be.getTransfer(l);if(r===na)return o.UNSIGNED_BYTE;if(r===rd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===sd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Wg)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===kg)return o.BYTE;if(r===Xg)return o.SHORT;if(r===To)return o.UNSIGNED_SHORT;if(r===ad)return o.INT;if(r===mr)return o.UNSIGNED_INT;if(r===$i)return o.FLOAT;if(r===wo)return o.HALF_FLOAT;if(r===qg)return o.ALPHA;if(r===Yg)return o.RGB;if(r===mi)return o.RGBA;if(r===Zg)return o.LUMINANCE;if(r===jg)return o.LUMINANCE_ALPHA;if(r===Ao)return o.DEPTH_COMPONENT;if(r===Ro)return o.DEPTH_STENCIL;if(r===Kg)return o.RED;if(r===od)return o.RED_INTEGER;if(r===Qg)return o.RG;if(r===ld)return o.RG_INTEGER;if(r===ud)return o.RGBA_INTEGER;if(r===hu||r===du||r===pu||r===mu)if(h===Oe)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===hu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===pu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===hu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===du)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===pu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===mu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ch||r===wh||r===Dh||r===Uh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Ch)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Dh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Uh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lh||r===Nh||r===Oh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Lh||r===Nh)return h===Oe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Oh)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ph||r===zh||r===Bh||r===Fh||r===Ih||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===Zh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Ph)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zh)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bh)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fh)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ih)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hh)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Gh)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Vh)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===kh)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xh)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wh)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===qh)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Yh)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zh)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_u||r===jh||r===Kh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===_u)return h===Oe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===jh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Kh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Jg||r===Qh||r===Jh||r===$h)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===_u)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Qh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$h)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const Pb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Bb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Un,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new za({vertexShader:Pb,fragmentShader:zb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ri(new bu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fb extends gs{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",p=1,m=null,_=null,v=null,S=null,y=null,b=null;const w=new Bb,M=i.getContextAttributes();let g=null,P=null;const O=[],D=[],H=new ze;let I=null;const B=new ri;B.viewport=new Ze;const K=new ri;K.viewport=new Ze;const C=[B,K],R=new rM;let F=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let dt=O[q];return dt===void 0&&(dt=new ah,O[q]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(q){let dt=O[q];return dt===void 0&&(dt=new ah,O[q]=dt),dt.getGripSpace()},this.getHand=function(q){let dt=O[q];return dt===void 0&&(dt=new ah,O[q]=dt),dt.getHandSpace()};function at(q){const dt=D.indexOf(q.inputSource);if(dt===-1)return;const xt=O[dt];xt!==void 0&&(xt.update(q.inputSource,q.frame,m||h),xt.dispatchEvent({type:q.type,data:q.inputSource}))}function mt(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",mt),l.removeEventListener("inputsourceschange",ht);for(let q=0;q<O.length;q++){const dt=D[q];dt!==null&&(D[q]=null,O[q].disconnect(dt))}F=null,ut=null,w.reset(),e.setRenderTarget(g),y=null,S=null,v=null,l=null,P=null,At.stop(),r.isPresenting=!1,e.setPixelRatio(I),e.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){c=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(q){m=q},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(g=e.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",mt),l.addEventListener("inputsourceschange",ht),M.xrCompatible!==!0&&await i.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Tt=null,Rt=null;M.depth&&(Rt=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xt=M.stencil?Ro:Ao,Tt=M.stencil?bo:mr);const Kt={colorFormat:i.RGBA8,depthFormat:Rt,scaleFactor:c};v=new XRWebGLBinding(l,i),S=v.createProjectionLayer(Kt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),P=new _r(S.textureWidth,S.textureHeight,{format:mi,type:na,depthTexture:new hv(S.textureWidth,S.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const xt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,xt),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new _r(y.framebufferWidth,y.framebufferHeight,{format:mi,type:na,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),At.setContext(l),At.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ht(q){for(let dt=0;dt<q.removed.length;dt++){const xt=q.removed[dt],Tt=D.indexOf(xt);Tt>=0&&(D[Tt]=null,O[Tt].disconnect(xt))}for(let dt=0;dt<q.added.length;dt++){const xt=q.added[dt];let Tt=D.indexOf(xt);if(Tt===-1){for(let Kt=0;Kt<O.length;Kt++)if(Kt>=D.length){D.push(xt),Tt=Kt;break}else if(D[Kt]===null){D[Kt]=xt,Tt=Kt;break}if(Tt===-1)break}const Rt=O[Tt];Rt&&Rt.connect(xt)}}const X=new tt,rt=new tt;function Z(q,dt,xt){X.setFromMatrixPosition(dt.matrixWorld),rt.setFromMatrixPosition(xt.matrixWorld);const Tt=X.distanceTo(rt),Rt=dt.projectionMatrix.elements,Kt=xt.projectionMatrix.elements,Pt=Rt[14]/(Rt[10]-1),Se=Rt[14]/(Rt[10]+1),Ae=(Rt[9]+1)/Rt[5],ie=(Rt[9]-1)/Rt[5],z=(Rt[8]-1)/Rt[0],pn=(Kt[8]+1)/Kt[0],oe=Pt*z,ce=Pt*pn,kt=Tt/(-z+pn),Re=kt*-z;if(dt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Re),q.translateZ(kt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Rt[10]===-1)q.projectionMatrix.copy(dt.projectionMatrix),q.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Xt=Pt+kt,U=Se+kt,E=oe-Re,$=ce+(Tt-Re),ct=Ae*Se/U*Xt,vt=ie*Se/U*Xt;q.projectionMatrix.makePerspective(E,$,ct,vt,Xt,U),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function St(q,dt){dt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(dt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let dt=q.near,xt=q.far;w.texture!==null&&(w.depthNear>0&&(dt=w.depthNear),w.depthFar>0&&(xt=w.depthFar)),R.near=K.near=B.near=dt,R.far=K.far=B.far=xt,(F!==R.near||ut!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),F=R.near,ut=R.far),B.layers.mask=q.layers.mask|2,K.layers.mask=q.layers.mask|4,R.layers.mask=B.layers.mask|K.layers.mask;const Tt=q.parent,Rt=R.cameras;St(R,Tt);for(let Kt=0;Kt<Rt.length;Kt++)St(Rt[Kt],Tt);Rt.length===2?Z(R,B,K):R.projectionMatrix.copy(B.projectionMatrix),L(q,R,Tt)};function L(q,dt,xt){xt===null?q.matrix.copy(dt.matrixWorld):(q.matrix.copy(xt.matrixWorld),q.matrix.invert(),q.matrix.multiply(dt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(dt.projectionMatrix),q.projectionMatrixInverse.copy(dt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=td*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(S===null&&y===null))return p},this.setFoveation=function(q){p=q,S!==null&&(S.fixedFoveation=q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let it=null;function Et(q,dt){if(_=dt.getViewerPose(m||h),b=dt,_!==null){const xt=_.views;y!==null&&(e.setRenderTargetFramebuffer(P,y.framebuffer),e.setRenderTarget(P));let Tt=!1;xt.length!==R.cameras.length&&(R.cameras.length=0,Tt=!0);for(let Pt=0;Pt<xt.length;Pt++){const Se=xt[Pt];let Ae=null;if(y!==null)Ae=y.getViewport(Se);else{const z=v.getViewSubImage(S,Se);Ae=z.viewport,Pt===0&&(e.setRenderTargetTextures(P,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(P))}let ie=C[Pt];ie===void 0&&(ie=new ri,ie.layers.enable(Pt),ie.viewport=new Ze,C[Pt]=ie),ie.matrix.fromArray(Se.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Se.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),Pt===0&&(R.matrix.copy(ie.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Tt===!0&&R.cameras.push(ie)}const Rt=l.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Pt=v.getDepthInformation(xt[0]);Pt&&Pt.isValid&&Pt.texture&&w.init(e,Pt,l.renderState)}}for(let xt=0;xt<O.length;xt++){const Tt=D[xt],Rt=O[xt];Tt!==null&&Rt!==void 0&&Rt.update(Tt,dt,m||h)}it&&it(q,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),b=null}const At=new dv;At.setAnimationLoop(Et),this.setAnimationLoop=function(q){it=q},this.dispose=function(){}}}const lr=new ia,Ib=new je;function Hb(o,e){function i(M,g){M.matrixAutoUpdate===!0&&M.updateMatrix(),g.value.copy(M.matrix)}function r(M,g){g.color.getRGB(M.fogColor.value,ov(o)),g.isFog?(M.fogNear.value=g.near,M.fogFar.value=g.far):g.isFogExp2&&(M.fogDensity.value=g.density)}function l(M,g,P,O,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(M,g):g.isMeshToonMaterial?(c(M,g),v(M,g)):g.isMeshPhongMaterial?(c(M,g),_(M,g)):g.isMeshStandardMaterial?(c(M,g),S(M,g),g.isMeshPhysicalMaterial&&y(M,g,D)):g.isMeshMatcapMaterial?(c(M,g),b(M,g)):g.isMeshDepthMaterial?c(M,g):g.isMeshDistanceMaterial?(c(M,g),w(M,g)):g.isMeshNormalMaterial?c(M,g):g.isLineBasicMaterial?(h(M,g),g.isLineDashedMaterial&&d(M,g)):g.isPointsMaterial?p(M,g,P,O):g.isSpriteMaterial?m(M,g):g.isShadowMaterial?(M.color.value.copy(g.color),M.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(M,g){M.opacity.value=g.opacity,g.color&&M.diffuse.value.copy(g.color),g.emissive&&M.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.bumpMap&&(M.bumpMap.value=g.bumpMap,i(g.bumpMap,M.bumpMapTransform),M.bumpScale.value=g.bumpScale,g.side===Bn&&(M.bumpScale.value*=-1)),g.normalMap&&(M.normalMap.value=g.normalMap,i(g.normalMap,M.normalMapTransform),M.normalScale.value.copy(g.normalScale),g.side===Bn&&M.normalScale.value.negate()),g.displacementMap&&(M.displacementMap.value=g.displacementMap,i(g.displacementMap,M.displacementMapTransform),M.displacementScale.value=g.displacementScale,M.displacementBias.value=g.displacementBias),g.emissiveMap&&(M.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,M.emissiveMapTransform)),g.specularMap&&(M.specularMap.value=g.specularMap,i(g.specularMap,M.specularMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest);const P=e.get(g),O=P.envMap,D=P.envMapRotation;O&&(M.envMap.value=O,lr.copy(D),lr.x*=-1,lr.y*=-1,lr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),M.envMapRotation.value.setFromMatrix4(Ib.makeRotationFromEuler(lr)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=g.reflectivity,M.ior.value=g.ior,M.refractionRatio.value=g.refractionRatio),g.lightMap&&(M.lightMap.value=g.lightMap,M.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,M.lightMapTransform)),g.aoMap&&(M.aoMap.value=g.aoMap,M.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,M.aoMapTransform))}function h(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform))}function d(M,g){M.dashSize.value=g.dashSize,M.totalSize.value=g.dashSize+g.gapSize,M.scale.value=g.scale}function p(M,g,P,O){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.size.value=g.size*P,M.scale.value=O*.5,g.map&&(M.map.value=g.map,i(g.map,M.uvTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function m(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.rotation.value=g.rotation,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function _(M,g){M.specular.value.copy(g.specular),M.shininess.value=Math.max(g.shininess,1e-4)}function v(M,g){g.gradientMap&&(M.gradientMap.value=g.gradientMap)}function S(M,g){M.metalness.value=g.metalness,g.metalnessMap&&(M.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,M.metalnessMapTransform)),M.roughness.value=g.roughness,g.roughnessMap&&(M.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,M.roughnessMapTransform)),g.envMap&&(M.envMapIntensity.value=g.envMapIntensity)}function y(M,g,P){M.ior.value=g.ior,g.sheen>0&&(M.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),M.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(M.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,M.sheenColorMapTransform)),g.sheenRoughnessMap&&(M.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,M.sheenRoughnessMapTransform))),g.clearcoat>0&&(M.clearcoat.value=g.clearcoat,M.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(M.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,M.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(M.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Bn&&M.clearcoatNormalScale.value.negate())),g.dispersion>0&&(M.dispersion.value=g.dispersion),g.iridescence>0&&(M.iridescence.value=g.iridescence,M.iridescenceIOR.value=g.iridescenceIOR,M.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(M.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,M.iridescenceMapTransform)),g.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),g.transmission>0&&(M.transmission.value=g.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),g.transmissionMap&&(M.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,M.transmissionMapTransform)),M.thickness.value=g.thickness,g.thicknessMap&&(M.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=g.attenuationDistance,M.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(M.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(M.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=g.specularIntensity,M.specularColor.value.copy(g.specularColor),g.specularColorMap&&(M.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,M.specularColorMapTransform)),g.specularIntensityMap&&(M.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,g){g.matcap&&(M.matcap.value=g.matcap)}function w(M,g){const P=e.get(g).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function Gb(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,O){const D=O.program;r.uniformBlockBinding(P,D)}function m(P,O){let D=l[P.id];D===void 0&&(b(P),D=_(P),l[P.id]=D,P.addEventListener("dispose",M));const H=O.program;r.updateUBOMapping(P,H);const I=e.render.frame;c[P.id]!==I&&(S(P),c[P.id]=I)}function _(P){const O=v();P.__bindingPointIndex=O;const D=o.createBuffer(),H=P.__size,I=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,H,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,D),D}function v(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const O=l[P.id],D=P.uniforms,H=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let I=0,B=D.length;I<B;I++){const K=Array.isArray(D[I])?D[I]:[D[I]];for(let C=0,R=K.length;C<R;C++){const F=K[C];if(y(F,I,C,H)===!0){const ut=F.__offset,at=Array.isArray(F.value)?F.value:[F.value];let mt=0;for(let ht=0;ht<at.length;ht++){const X=at[ht],rt=w(X);typeof X=="number"||typeof X=="boolean"?(F.__data[0]=X,o.bufferSubData(o.UNIFORM_BUFFER,ut+mt,F.__data)):X.isMatrix3?(F.__data[0]=X.elements[0],F.__data[1]=X.elements[1],F.__data[2]=X.elements[2],F.__data[3]=0,F.__data[4]=X.elements[3],F.__data[5]=X.elements[4],F.__data[6]=X.elements[5],F.__data[7]=0,F.__data[8]=X.elements[6],F.__data[9]=X.elements[7],F.__data[10]=X.elements[8],F.__data[11]=0):(X.toArray(F.__data,mt),mt+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ut,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(P,O,D,H){const I=P.value,B=O+"_"+D;if(H[B]===void 0)return typeof I=="number"||typeof I=="boolean"?H[B]=I:H[B]=I.clone(),!0;{const K=H[B];if(typeof I=="number"||typeof I=="boolean"){if(K!==I)return H[B]=I,!0}else if(K.equals(I)===!1)return K.copy(I),!0}return!1}function b(P){const O=P.uniforms;let D=0;const H=16;for(let B=0,K=O.length;B<K;B++){const C=Array.isArray(O[B])?O[B]:[O[B]];for(let R=0,F=C.length;R<F;R++){const ut=C[R],at=Array.isArray(ut.value)?ut.value:[ut.value];for(let mt=0,ht=at.length;mt<ht;mt++){const X=at[mt],rt=w(X),Z=D%H,St=Z%rt.boundary,L=Z+St;D+=St,L!==0&&H-L<rt.storage&&(D+=H-L),ut.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),ut.__offset=D,D+=rt.storage}}}const I=D%H;return I>0&&(D+=H-I),P.__size=D,P.__cache={},this}function w(P){const O={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(O.boundary=4,O.storage=4):P.isVector2?(O.boundary=8,O.storage=8):P.isVector3||P.isColor?(O.boundary=16,O.storage=12):P.isVector4?(O.boundary=16,O.storage=16):P.isMatrix3?(O.boundary=48,O.storage=48):P.isMatrix4?(O.boundary=64,O.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),O}function M(P){const O=P.target;O.removeEventListener("dispose",M);const D=h.indexOf(O.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function g(){for(const P in l)o.deleteBuffer(l[P]);h=[],l={},c={}}return{bind:p,update:m,dispose:g}}class Vb{constructor(e={}){const{canvas:i=SS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const b=new Uint32Array(4),w=new Int32Array(4);let M=null,g=null;const P=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let H=!1;this._outputColorSpace=ai;let I=0,B=0,K=null,C=-1,R=null;const F=new Ze,ut=new Ze;let at=null;const mt=new Ce(0);let ht=0,X=i.width,rt=i.height,Z=1,St=null,L=null;const it=new Ze(0,0,X,rt),Et=new Ze(0,0,X,rt);let At=!1;const q=new cv;let dt=!1,xt=!1;const Tt=new je,Rt=new je,Kt=new tt,Pt=new Ze,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ae=!1;function ie(){return K===null?Z:1}let z=r;function pn(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${id}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",Ct,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),z===null){const W="webgl2";if(z=pn(W,A),z===null)throw pn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let oe,ce,kt,Re,Xt,U,E,$,ct,vt,ft,Ht,wt,zt,de,yt,Bt,jt,Gt,Ft,ae,Yt,we,k;function Lt(){oe=new JE(z),oe.init(),Yt=new Ob(z,oe),ce=new WE(z,oe,e,Yt),kt=new Lb(z,oe),ce.reverseDepthBuffer&&S&&kt.buffers.depth.setReversed(!0),Re=new eT(z),Xt=new xb,U=new Nb(z,oe,kt,Xt,ce,Yt,Re),E=new YE(D),$=new QE(D),ct=new oM(z),we=new kE(z,ct),vt=new $E(z,ct,Re,we),ft=new iT(z,vt,ct,Re),Gt=new nT(z,ce,U),yt=new qE(Xt),Ht=new vb(D,E,$,oe,ce,we,yt),wt=new Hb(D,Xt),zt=new Mb,de=new Rb(oe),jt=new VE(D,E,$,kt,ft,y,p),Bt=new Db(D,ft,ce),k=new Gb(z,Re,ce,kt),Ft=new XE(z,oe,Re),ae=new tT(z,oe,Re),Re.programs=Ht.programs,D.capabilities=ce,D.extensions=oe,D.properties=Xt,D.renderLists=zt,D.shadowMap=Bt,D.state=kt,D.info=Re}Lt();const st=new Fb(D,z);this.xr=st,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=oe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=oe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(X,rt,!1))},this.getSize=function(A){return A.set(X,rt)},this.setSize=function(A,W,et=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,rt=W,i.width=Math.floor(A*Z),i.height=Math.floor(W*Z),et===!0&&(i.style.width=A+"px",i.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(X*Z,rt*Z).floor()},this.setDrawingBufferSize=function(A,W,et){X=A,rt=W,Z=et,i.width=Math.floor(A*et),i.height=Math.floor(W*et),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(F)},this.getViewport=function(A){return A.copy(it)},this.setViewport=function(A,W,et,Q){A.isVector4?it.set(A.x,A.y,A.z,A.w):it.set(A,W,et,Q),kt.viewport(F.copy(it).multiplyScalar(Z).round())},this.getScissor=function(A){return A.copy(Et)},this.setScissor=function(A,W,et,Q){A.isVector4?Et.set(A.x,A.y,A.z,A.w):Et.set(A,W,et,Q),kt.scissor(ut.copy(Et).multiplyScalar(Z).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(A){kt.setScissorTest(At=A)},this.setOpaqueSort=function(A){St=A},this.setTransparentSort=function(A){L=A},this.getClearColor=function(A){return A.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,et=!0){let Q=0;if(A){let Y=!1;if(K!==null){const Mt=K.texture.format;Y=Mt===ud||Mt===ld||Mt===od}if(Y){const Mt=K.texture.type,bt=Mt===na||Mt===mr||Mt===To||Mt===bo||Mt===rd||Mt===sd,Ot=jt.getClearColor(),Nt=jt.getClearAlpha(),te=Ot.r,Jt=Ot.g,qt=Ot.b;bt?(b[0]=te,b[1]=Jt,b[2]=qt,b[3]=Nt,z.clearBufferuiv(z.COLOR,0,b)):(w[0]=te,w[1]=Jt,w[2]=qt,w[3]=Nt,z.clearBufferiv(z.COLOR,0,w))}else Q|=z.COLOR_BUFFER_BIT}W&&(Q|=z.DEPTH_BUFFER_BIT),et&&(Q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",Ct,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),jt.dispose(),zt.dispose(),de.dispose(),Xt.dispose(),E.dispose(),$.dispose(),ft.dispose(),we.dispose(),k.dispose(),Ht.dispose(),st.dispose(),st.removeEventListener("sessionstart",Po),st.removeEventListener("sessionend",xs),vi.stop()};function _t(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const A=Re.autoReset,W=Bt.enabled,et=Bt.autoUpdate,Q=Bt.needsUpdate,Y=Bt.type;Lt(),Re.autoReset=A,Bt.enabled=W,Bt.autoUpdate=et,Bt.needsUpdate=Q,Bt.type=Y}function Dt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $t(A){const W=A.target;W.removeEventListener("dispose",$t),He(W)}function He(A){tn(A),Xt.remove(A)}function tn(A){const W=Xt.get(A).programs;W!==void 0&&(W.forEach(function(et){Ht.releaseProgram(et)}),A.isShaderMaterial&&Ht.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,et,Q,Y,Mt){W===null&&(W=Se);const bt=Y.isMesh&&Y.matrixWorld.determinant()<0,Ot=Ru(A,W,et,Q,Y);kt.setMaterial(Q,bt);let Nt=et.index,te=1;if(Q.wireframe===!0){if(Nt=vt.getWireframeAttribute(et),Nt===void 0)return;te=2}const Jt=et.drawRange,qt=et.attributes.position;let pe=Jt.start*te,me=(Jt.start+Jt.count)*te;Mt!==null&&(pe=Math.max(pe,Mt.start*te),me=Math.min(me,(Mt.start+Mt.count)*te)),Nt!==null?(pe=Math.max(pe,0),me=Math.min(me,Nt.count)):qt!=null&&(pe=Math.max(pe,0),me=Math.min(me,qt.count));const Ie=me-pe;if(Ie<0||Ie===1/0)return;we.setup(Y,Q,Ot,et,Nt);let ye,ee=Ft;if(Nt!==null&&(ye=ct.get(Nt),ee=ae,ee.setIndex(ye)),Y.isMesh)Q.wireframe===!0?(kt.setLineWidth(Q.wireframeLinewidth*ie()),ee.setMode(z.LINES)):ee.setMode(z.TRIANGLES);else if(Y.isLine){let Zt=Q.linewidth;Zt===void 0&&(Zt=1),kt.setLineWidth(Zt*ie()),Y.isLineSegments?ee.setMode(z.LINES):Y.isLineLoop?ee.setMode(z.LINE_LOOP):ee.setMode(z.LINE_STRIP)}else Y.isPoints?ee.setMode(z.POINTS):Y.isSprite&&ee.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)gu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ee.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))ee.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Zt=Y._multiDrawStarts,an=Y._multiDrawCounts,_e=Y._multiDrawCount,Ln=Nt?ct.get(Nt).bytesPerElement:1,si=Xt.get(Q).currentProgram.getUniforms();for(let An=0;An<_e;An++)si.setValue(z,"_gl_DrawID",An),ee.render(Zt[An]/Ln,an[An])}else if(Y.isInstancedMesh)ee.renderInstances(pe,Ie,Y.count);else if(et.isInstancedBufferGeometry){const Zt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,an=Math.min(et.instanceCount,Zt);ee.renderInstances(pe,Ie,an)}else ee.render(pe,Ie)};function Me(A,W,et){A.transparent===!0&&A.side===bi&&A.forceSinglePass===!1?(A.side=Bn,A.needsUpdate=!0,nn(A,W,et),A.side=Pa,A.needsUpdate=!0,nn(A,W,et),A.side=bi):nn(A,W,et)}this.compile=function(A,W,et=null){et===null&&(et=A),g=de.get(et),g.init(W),O.push(g),et.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),A!==et&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const Q=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Mt=Y.material;if(Mt)if(Array.isArray(Mt))for(let bt=0;bt<Mt.length;bt++){const Ot=Mt[bt];Me(Ot,et,Y),Q.add(Ot)}else Me(Mt,et,Y),Q.add(Mt)}),g=O.pop(),Q},this.compileAsync=function(A,W,et=null){const Q=this.compile(A,W,et);return new Promise(Y=>{function Mt(){if(Q.forEach(function(bt){Xt.get(bt).currentProgram.isReady()&&Q.delete(bt)}),Q.size===0){Y(A);return}setTimeout(Mt,10)}oe.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Tn=null;function bn(A){Tn&&Tn(A)}function Po(){vi.stop()}function xs(){vi.start()}const vi=new dv;vi.setAnimationLoop(bn),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(A){Tn=A,st.setAnimationLoop(A),A===null?vi.stop():vi.start()},st.addEventListener("sessionstart",Po),st.addEventListener("sessionend",xs),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(W),W=st.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,W,K),g=de.get(A,O.length),g.init(W),O.push(g),Rt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),q.setFromProjectionMatrix(Rt),xt=this.localClippingEnabled,dt=yt.init(this.clippingPlanes,xt),M=zt.get(A,P.length),M.init(),P.push(M),st.enabled===!0&&st.isPresenting===!0){const Mt=D.xr.getDepthSensingMesh();Mt!==null&&gr(Mt,W,-1/0,D.sortObjects)}gr(A,W,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(St,L),Ae=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Ae&&jt.addToRenderList(M,A),this.info.render.frame++,dt===!0&&yt.beginShadows();const et=g.state.shadowsArray;Bt.render(et,A,W),dt===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=M.opaque,Y=M.transmissive;if(g.setupLights(),W.isArrayCamera){const Mt=W.cameras;if(Y.length>0)for(let bt=0,Ot=Mt.length;bt<Ot;bt++){const Nt=Mt[bt];zo(Q,Y,A,Nt)}Ae&&jt.render(A);for(let bt=0,Ot=Mt.length;bt<Ot;bt++){const Nt=Mt[bt];Ss(M,A,Nt,Nt.viewport)}}else Y.length>0&&zo(Q,Y,A,W),Ae&&jt.render(A),Ss(M,A,W);K!==null&&B===0&&(U.updateMultisampleRenderTarget(K),U.updateRenderTargetMipmap(K)),A.isScene===!0&&A.onAfterRender(D,A,W),we.resetDefaultState(),C=-1,R=null,O.pop(),O.length>0?(g=O[O.length-1],dt===!0&&yt.setGlobalState(D.clippingPlanes,g.state.camera)):g=null,P.pop(),P.length>0?M=P[P.length-1]:M=null};function gr(A,W,et,Q){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)et=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){Q&&Pt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Rt);const bt=ft.update(A),Ot=A.material;Ot.visible&&M.push(A,bt,Ot,et,Pt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||q.intersectsObject(A))){const bt=ft.update(A),Ot=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pt.copy(A.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Pt.copy(bt.boundingSphere.center)),Pt.applyMatrix4(A.matrixWorld).applyMatrix4(Rt)),Array.isArray(Ot)){const Nt=bt.groups;for(let te=0,Jt=Nt.length;te<Jt;te++){const qt=Nt[te],pe=Ot[qt.materialIndex];pe&&pe.visible&&M.push(A,bt,pe,et,Pt.z,qt)}}else Ot.visible&&M.push(A,bt,Ot,et,Pt.z,null)}}const Mt=A.children;for(let bt=0,Ot=Mt.length;bt<Ot;bt++)gr(Mt[bt],W,et,Q)}function Ss(A,W,et,Q){const Y=A.opaque,Mt=A.transmissive,bt=A.transparent;g.setupLightsView(et),dt===!0&&yt.setGlobalState(D.clippingPlanes,et),Q&&kt.viewport(F.copy(Q)),Y.length>0&&In(Y,W,et),Mt.length>0&&In(Mt,W,et),bt.length>0&&In(bt,W,et),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function zo(A,W,et,Q){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Q.id]===void 0&&(g.state.transmissionRenderTarget[Q.id]=new _r(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?wo:na,minFilter:pr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const Mt=g.state.transmissionRenderTarget[Q.id],bt=Q.viewport||F;Mt.setSize(bt.z*D.transmissionResolutionScale,bt.w*D.transmissionResolutionScale);const Ot=D.getRenderTarget();D.setRenderTarget(Mt),D.getClearColor(mt),ht=D.getClearAlpha(),ht<1&&D.setClearColor(16777215,.5),D.clear(),Ae&&jt.render(et);const Nt=D.toneMapping;D.toneMapping=Oa;const te=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),g.setupLightsView(Q),dt===!0&&yt.setGlobalState(D.clippingPlanes,Q),In(A,et,Q),U.updateMultisampleRenderTarget(Mt),U.updateRenderTargetMipmap(Mt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let qt=0,pe=W.length;qt<pe;qt++){const me=W[qt],Ie=me.object,ye=me.geometry,ee=me.material,Zt=me.group;if(ee.side===bi&&Ie.layers.test(Q.layers)){const an=ee.side;ee.side=Bn,ee.needsUpdate=!0,en(Ie,et,Q,ye,ee,Zt),ee.side=an,ee.needsUpdate=!0,Jt=!0}}Jt===!0&&(U.updateMultisampleRenderTarget(Mt),U.updateRenderTargetMipmap(Mt))}D.setRenderTarget(Ot),D.setClearColor(mt,ht),te!==void 0&&(Q.viewport=te),D.toneMapping=Nt}function In(A,W,et){const Q=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,Mt=A.length;Y<Mt;Y++){const bt=A[Y],Ot=bt.object,Nt=bt.geometry,te=bt.group;let Jt=bt.material;Jt.allowOverride===!0&&Q!==null&&(Jt=Q),Ot.layers.test(et.layers)&&en(Ot,W,et,Nt,Jt,te)}}function en(A,W,et,Q,Y,Mt){A.onBeforeRender(D,W,et,Q,Y,Mt),A.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(D,W,et,Q,A,Mt),Y.transparent===!0&&Y.side===bi&&Y.forceSinglePass===!1?(Y.side=Bn,Y.needsUpdate=!0,D.renderBufferDirect(et,W,Q,Y,A,Mt),Y.side=Pa,Y.needsUpdate=!0,D.renderBufferDirect(et,W,Q,Y,A,Mt),Y.side=bi):D.renderBufferDirect(et,W,Q,Y,A,Mt),A.onAfterRender(D,W,et,Q,Y,Mt)}function nn(A,W,et){W.isScene!==!0&&(W=Se);const Q=Xt.get(A),Y=g.state.lights,Mt=g.state.shadowsArray,bt=Y.state.version,Ot=Ht.getParameters(A,Y.state,Mt,W,et),Nt=Ht.getProgramCacheKey(Ot);let te=Q.programs;Q.environment=A.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(A.isMeshStandardMaterial?$:E).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,te===void 0&&(A.addEventListener("dispose",$t),te=new Map,Q.programs=te);let Jt=te.get(Nt);if(Jt!==void 0){if(Q.currentProgram===Jt&&Q.lightsStateVersion===bt)return vr(A,Ot),Jt}else Ot.uniforms=Ht.getUniforms(A),A.onBeforeCompile(Ot,D),Jt=Ht.acquireProgram(Ot,Nt),te.set(Nt,Jt),Q.uniforms=Ot.uniforms;const qt=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qt.clippingPlanes=yt.uniform),vr(A,Ot),Q.needsLights=Bo(A),Q.lightsStateVersion=bt,Q.needsLights&&(qt.ambientLightColor.value=Y.state.ambient,qt.lightProbe.value=Y.state.probe,qt.directionalLights.value=Y.state.directional,qt.directionalLightShadows.value=Y.state.directionalShadow,qt.spotLights.value=Y.state.spot,qt.spotLightShadows.value=Y.state.spotShadow,qt.rectAreaLights.value=Y.state.rectArea,qt.ltc_1.value=Y.state.rectAreaLTC1,qt.ltc_2.value=Y.state.rectAreaLTC2,qt.pointLights.value=Y.state.point,qt.pointLightShadows.value=Y.state.pointShadow,qt.hemisphereLights.value=Y.state.hemi,qt.directionalShadowMap.value=Y.state.directionalShadowMap,qt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,qt.spotShadowMap.value=Y.state.spotShadowMap,qt.spotLightMatrix.value=Y.state.spotLightMatrix,qt.spotLightMap.value=Y.state.spotLightMap,qt.pointShadowMap.value=Y.state.pointShadowMap,qt.pointShadowMatrix.value=Y.state.pointShadowMatrix),Q.currentProgram=Jt,Q.uniformsList=null,Jt}function Di(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=vu.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function vr(A,W){const et=Xt.get(A);et.outputColorSpace=W.outputColorSpace,et.batching=W.batching,et.batchingColor=W.batchingColor,et.instancing=W.instancing,et.instancingColor=W.instancingColor,et.instancingMorph=W.instancingMorph,et.skinning=W.skinning,et.morphTargets=W.morphTargets,et.morphNormals=W.morphNormals,et.morphColors=W.morphColors,et.morphTargetsCount=W.morphTargetsCount,et.numClippingPlanes=W.numClippingPlanes,et.numIntersection=W.numClipIntersection,et.vertexAlphas=W.vertexAlphas,et.vertexTangents=W.vertexTangents,et.toneMapping=W.toneMapping}function Ru(A,W,et,Q,Y){W.isScene!==!0&&(W=Se),U.resetTextureUnits();const Mt=W.fog,bt=Q.isMeshStandardMaterial?W.environment:null,Ot=K===null?D.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ms,Nt=(Q.isMeshStandardMaterial?$:E).get(Q.envMap||bt),te=Q.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,Jt=!!et.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),qt=!!et.morphAttributes.position,pe=!!et.morphAttributes.normal,me=!!et.morphAttributes.color;let Ie=Oa;Q.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ie=D.toneMapping);const ye=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,ee=ye!==void 0?ye.length:0,Zt=Xt.get(Q),an=g.state.lights;if(dt===!0&&(xt===!0||A!==R)){const ke=A===R&&Q.id===C;yt.setState(Q,A,ke)}let _e=!1;Q.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==an.state.version||Zt.outputColorSpace!==Ot||Y.isBatchedMesh&&Zt.batching===!1||!Y.isBatchedMesh&&Zt.batching===!0||Y.isBatchedMesh&&Zt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Zt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Zt.instancing===!1||!Y.isInstancedMesh&&Zt.instancing===!0||Y.isSkinnedMesh&&Zt.skinning===!1||!Y.isSkinnedMesh&&Zt.skinning===!0||Y.isInstancedMesh&&Zt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Zt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Zt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Zt.instancingMorph===!1&&Y.morphTexture!==null||Zt.envMap!==Nt||Q.fog===!0&&Zt.fog!==Mt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==yt.numPlanes||Zt.numIntersection!==yt.numIntersection)||Zt.vertexAlphas!==te||Zt.vertexTangents!==Jt||Zt.morphTargets!==qt||Zt.morphNormals!==pe||Zt.morphColors!==me||Zt.toneMapping!==Ie||Zt.morphTargetsCount!==ee)&&(_e=!0):(_e=!0,Zt.__version=Q.version);let Ln=Zt.currentProgram;_e===!0&&(Ln=nn(Q,W,Y));let si=!1,An=!1,un=!1;const De=Ln.getUniforms(),Rn=Zt.uniforms;if(kt.useProgram(Ln.program)&&(si=!0,An=!0,un=!0),Q.id!==C&&(C=Q.id,An=!0),si||R!==A){kt.buffers.depth.getReversed()?(Tt.copy(A.projectionMatrix),yS(Tt),ES(Tt),De.setValue(z,"projectionMatrix",Tt)):De.setValue(z,"projectionMatrix",A.projectionMatrix),De.setValue(z,"viewMatrix",A.matrixWorldInverse);const mn=De.map.cameraPosition;mn!==void 0&&mn.setValue(z,Kt.setFromMatrixPosition(A.matrixWorld)),ce.logarithmicDepthBuffer&&De.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&De.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,An=!0,un=!0)}if(Y.isSkinnedMesh){De.setOptional(z,Y,"bindMatrix"),De.setOptional(z,Y,"bindMatrixInverse");const ke=Y.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),De.setValue(z,"boneTexture",ke.boneTexture,U))}Y.isBatchedMesh&&(De.setOptional(z,Y,"batchingTexture"),De.setValue(z,"batchingTexture",Y._matricesTexture,U),De.setOptional(z,Y,"batchingIdTexture"),De.setValue(z,"batchingIdTexture",Y._indirectTexture,U),De.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&De.setValue(z,"batchingColorTexture",Y._colorsTexture,U));const xn=et.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Gt.update(Y,et,Ln),(An||Zt.receiveShadow!==Y.receiveShadow)&&(Zt.receiveShadow=Y.receiveShadow,De.setValue(z,"receiveShadow",Y.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Rn.envMap.value=Nt,Rn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&W.environment!==null&&(Rn.envMapIntensity.value=W.environmentIntensity),An&&(De.setValue(z,"toneMappingExposure",D.toneMappingExposure),Zt.needsLights&&Cu(Rn,un),Mt&&Q.fog===!0&&wt.refreshFogUniforms(Rn,Mt),wt.refreshMaterialUniforms(Rn,Q,Z,rt,g.state.transmissionRenderTarget[A.id]),vu.upload(z,Di(Zt),Rn,U)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(vu.upload(z,Di(Zt),Rn,U),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&De.setValue(z,"center",Y.center),De.setValue(z,"modelViewMatrix",Y.modelViewMatrix),De.setValue(z,"normalMatrix",Y.normalMatrix),De.setValue(z,"modelMatrix",Y.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const ke=Q.uniformsGroups;for(let mn=0,xr=ke.length;mn<xr;mn++){const Nn=ke[mn];k.update(Nn,Ln),k.bind(Nn,Ln)}}return Ln}function Cu(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Bo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(A,W,et){const Q=Xt.get(A);Q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Xt.get(A.texture).__webglTexture=W,Xt.get(A.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:et,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const et=Xt.get(A);et.__webglFramebuffer=W,et.__useDefaultFramebuffer=W===void 0};const Ba=z.createFramebuffer();this.setRenderTarget=function(A,W=0,et=0){K=A,I=W,B=et;let Q=!0,Y=null,Mt=!1,bt=!1;if(A){const Nt=Xt.get(A);if(Nt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(z.FRAMEBUFFER,null),Q=!1;else if(Nt.__webglFramebuffer===void 0)U.setupRenderTarget(A);else if(Nt.__hasExternalTextures)U.rebindTextures(A,Xt.get(A.texture).__webglTexture,Xt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const qt=A.depthTexture;if(Nt.__boundDepthTexture!==qt){if(qt!==null&&Xt.has(qt)&&(A.width!==qt.image.width||A.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(A)}}const te=A.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(bt=!0);const Jt=Xt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Jt[W])?Y=Jt[W][et]:Y=Jt[W],Mt=!0):A.samples>0&&U.useMultisampledRTT(A)===!1?Y=Xt.get(A).__webglMultisampledFramebuffer:Array.isArray(Jt)?Y=Jt[et]:Y=Jt,F.copy(A.viewport),ut.copy(A.scissor),at=A.scissorTest}else F.copy(it).multiplyScalar(Z).floor(),ut.copy(Et).multiplyScalar(Z).floor(),at=At;if(et!==0&&(Y=Ba),kt.bindFramebuffer(z.FRAMEBUFFER,Y)&&Q&&kt.drawBuffers(A,Y),kt.viewport(F),kt.scissor(ut),kt.setScissorTest(at),Mt){const Nt=Xt.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+W,Nt.__webglTexture,et)}else if(bt){const Nt=Xt.get(A.texture),te=W;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Nt.__webglTexture,et,te)}else if(A!==null&&et!==0){const Nt=Xt.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Nt.__webglTexture,et)}C=-1},this.readRenderTargetPixels=function(A,W,et,Q,Y,Mt,bt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Xt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&bt!==void 0&&(Ot=Ot[bt]),Ot){kt.bindFramebuffer(z.FRAMEBUFFER,Ot);try{const Nt=A.texture,te=Nt.format,Jt=Nt.type;if(!ce.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-Q&&et>=0&&et<=A.height-Y&&z.readPixels(W,et,Q,Y,Yt.convert(te),Yt.convert(Jt),Mt)}finally{const Nt=K!==null?Xt.get(K).__webglFramebuffer:null;kt.bindFramebuffer(z.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(A,W,et,Q,Y,Mt,bt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Xt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&bt!==void 0&&(Ot=Ot[bt]),Ot)if(W>=0&&W<=A.width-Q&&et>=0&&et<=A.height-Y){kt.bindFramebuffer(z.FRAMEBUFFER,Ot);const Nt=A.texture,te=Nt.format,Jt=Nt.type;if(!ce.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,qt),z.bufferData(z.PIXEL_PACK_BUFFER,Mt.byteLength,z.STREAM_READ),z.readPixels(W,et,Q,Y,Yt.convert(te),Yt.convert(Jt),0);const pe=K!==null?Xt.get(K).__webglFramebuffer:null;kt.bindFramebuffer(z.FRAMEBUFFER,pe);const me=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await MS(z,me,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,qt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Mt),z.deleteBuffer(qt),z.deleteSync(me),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,et=0){const Q=Math.pow(2,-et),Y=Math.floor(A.image.width*Q),Mt=Math.floor(A.image.height*Q),bt=W!==null?W.x:0,Ot=W!==null?W.y:0;U.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,et,0,0,bt,Ot,Y,Mt),kt.unbindTexture()};const Ms=z.createFramebuffer(),Ui=z.createFramebuffer();this.copyTextureToTexture=function(A,W,et=null,Q=null,Y=0,Mt=null){Mt===null&&(Y!==0?(gu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Mt=Y,Y=0):Mt=0);let bt,Ot,Nt,te,Jt,qt,pe,me,Ie;const ye=A.isCompressedTexture?A.mipmaps[Mt]:A.image;if(et!==null)bt=et.max.x-et.min.x,Ot=et.max.y-et.min.y,Nt=et.isBox3?et.max.z-et.min.z:1,te=et.min.x,Jt=et.min.y,qt=et.isBox3?et.min.z:0;else{const xn=Math.pow(2,-Y);bt=Math.floor(ye.width*xn),Ot=Math.floor(ye.height*xn),A.isDataArrayTexture?Nt=ye.depth:A.isData3DTexture?Nt=Math.floor(ye.depth*xn):Nt=1,te=0,Jt=0,qt=0}Q!==null?(pe=Q.x,me=Q.y,Ie=Q.z):(pe=0,me=0,Ie=0);const ee=Yt.convert(W.format),Zt=Yt.convert(W.type);let an;W.isData3DTexture?(U.setTexture3D(W,0),an=z.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(U.setTexture2DArray(W,0),an=z.TEXTURE_2D_ARRAY):(U.setTexture2D(W,0),an=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const _e=z.getParameter(z.UNPACK_ROW_LENGTH),Ln=z.getParameter(z.UNPACK_IMAGE_HEIGHT),si=z.getParameter(z.UNPACK_SKIP_PIXELS),An=z.getParameter(z.UNPACK_SKIP_ROWS),un=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,ye.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ye.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,te),z.pixelStorei(z.UNPACK_SKIP_ROWS,Jt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,qt);const De=A.isDataArrayTexture||A.isData3DTexture,Rn=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const xn=Xt.get(A),ke=Xt.get(W),mn=Xt.get(xn.__renderTarget),xr=Xt.get(ke.__renderTarget);kt.bindFramebuffer(z.READ_FRAMEBUFFER,mn.__webglFramebuffer),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,xr.__webglFramebuffer);for(let Nn=0;Nn<Nt;Nn++)De&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xt.get(A).__webglTexture,Y,qt+Nn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xt.get(W).__webglTexture,Mt,Ie+Nn)),z.blitFramebuffer(te,Jt,bt,Ot,pe,me,bt,Ot,z.DEPTH_BUFFER_BIT,z.NEAREST);kt.bindFramebuffer(z.READ_FRAMEBUFFER,null),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||Xt.has(A)){const xn=Xt.get(A),ke=Xt.get(W);kt.bindFramebuffer(z.READ_FRAMEBUFFER,Ms),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ui);for(let mn=0;mn<Nt;mn++)De?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,xn.__webglTexture,Y,qt+mn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,xn.__webglTexture,Y),Rn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.__webglTexture,Mt,Ie+mn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ke.__webglTexture,Mt),Y!==0?z.blitFramebuffer(te,Jt,bt,Ot,pe,me,bt,Ot,z.COLOR_BUFFER_BIT,z.NEAREST):Rn?z.copyTexSubImage3D(an,Mt,pe,me,Ie+mn,te,Jt,bt,Ot):z.copyTexSubImage2D(an,Mt,pe,me,te,Jt,bt,Ot);kt.bindFramebuffer(z.READ_FRAMEBUFFER,null),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Rn?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(an,Mt,pe,me,Ie,bt,Ot,Nt,ee,Zt,ye.data):W.isCompressedArrayTexture?z.compressedTexSubImage3D(an,Mt,pe,me,Ie,bt,Ot,Nt,ee,ye.data):z.texSubImage3D(an,Mt,pe,me,Ie,bt,Ot,Nt,ee,Zt,ye):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Mt,pe,me,bt,Ot,ee,Zt,ye.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Mt,pe,me,ye.width,ye.height,ee,ye.data):z.texSubImage2D(z.TEXTURE_2D,Mt,pe,me,bt,Ot,ee,Zt,ye);z.pixelStorei(z.UNPACK_ROW_LENGTH,_e),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ln),z.pixelStorei(z.UNPACK_SKIP_PIXELS,si),z.pixelStorei(z.UNPACK_SKIP_ROWS,An),z.pixelStorei(z.UNPACK_SKIP_IMAGES,un),Mt===0&&W.generateMipmaps&&z.generateMipmap(an),kt.unbindTexture()},this.copyTextureToTexture3D=function(A,W,et=null,Q=null,Y=0){return gu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,et,Q,Y)},this.initRenderTarget=function(A){Xt.get(A).__webglFramebuffer===void 0&&U.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?U.setTextureCube(A,0):A.isData3DTexture?U.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?U.setTexture2DArray(A,0):U.setTexture2D(A,0),kt.unbindTexture()},this.resetState=function(){I=0,B=0,K=null,kt.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(e),i.unpackColorSpace=be._getUnpackColorSpace()}}function dh(o,e,i){const r=new fv({color:0,linewidth:3}),l=[new tt(0,0,0),new tt(0,150,0),new tt(-5,158,0),new tt(0,166,0),new tt(5,158,0),new tt(0,150,0)],c=new wi().setFromPoints(l),h=new QS(c,r);return h.position.set(o,e,i),h}const ph=3;function kb(){let o=!1,e=!0,i=0,r=window.innerWidth-100,l=window.innerHeight/3;const c=new ZS,h=new ri(80,r/l,1,1e3);h.position.set(0,0,100),h.lookAt(0,0,0);const d=new Vb;d.setSize(r,l);const p=new yo;p.rotation.y=ph,c.add(p);const m=new iM().load("/montreal.jpg"),_=new hd(500,60,40),v=new fd({map:m,side:bi}),S=new Ri(_,v);p.add(S),p.add(dh(150,-50,400),dh(0,-200,400),dh(-100,-250,400));const y=()=>{e&&(requestAnimationFrame(y),p.rotation.y+=.001,d.render(c,h))};y();function b(O){o=!0,i=O.clientX}function w(){o=!1}function M(O){if(o){const D=O.clientX-i;p.rotation.y-=D*.005,i=O.clientX}}function g(){r=window.innerWidth-100,l=window.innerHeight/3,h.aspect=r/l,h.updateProjectionMatrix(),d.setSize(r,l)}window.addEventListener("mousedown",b),window.addEventListener("mouseup",w),window.addEventListener("mousemove",M),window.addEventListener("resize",g);function P(){e=!1;const O=p.rotation.y>ph?-.1:.1;requestAnimationFrame(()=>{p.rotation.y+=O,d.render(c,h),Math.floor(p.rotation.y*10)!==ph*10?requestAnimationFrame(P):(e=!0,y())})}return{canvas:d.domElement,smoothReturn:P}}const Xb="_palette_g1pdd_1",Wb="_palette__side_g1pdd_7",qb="_palette__center_g1pdd_13",Yb="_palette__box1_g1pdd_20",Zb="_palette__box2_g1pdd_26",Ua={palette:Xb,palette__side:Wb,palette__center:qb,palette__box1:Yb,palette__box2:Zb};function jb({onClick:o}){return Ne.jsxs("div",{className:Ua.palette,children:[Ne.jsx("div",{className:Ua.palette__side,onClick:o}),Ne.jsxs("div",{className:Ua.palette__center,children:[Ne.jsx("div",{className:Ua.palette__box1,onClick:o}),Ne.jsx("div",{className:Ua.palette__box2,onClick:o}),Ne.jsx("div",{className:Ua.palette__box2,onClick:o}),Ne.jsx("div",{className:Ua.palette__box1,onClick:o})]}),Ne.jsx("div",{className:Ua.palette__side,onClick:o})]})}const Kb="_header_1bn2o_1",Qb="_container_1bn2o_12",Jb="_footer_1bn2o_22",$b="_footer__author_1bn2o_33",cu={header:Kb,container:Qb,footer:Jb,footer__author:$b},tA="/avatar_hex.png";function eA(){const o=fu.useRef(null),{canvas:e,smoothReturn:i}=fu.useMemo(()=>kb(),[]),r=()=>{i()};return fu.useEffect(()=>{var l;o.current&&!o.current.contains(e)&&((l=o.current)==null||l.appendChild(e))},[e]),Ne.jsxs(Ne.Fragment,{children:[Ne.jsx("header",{className:cu.header,children:Ne.jsx("h1",{children:"Montreal city panorama"})}),Ne.jsxs("div",{className:cu.container,children:[Ne.jsx("div",{ref:o}),Ne.jsx(jb,{onClick:r}),Ne.jsx("div",{children:Ne.jsxs("ul",{children:[Ne.jsx("li",{children:'Взял на себя смелость заменить панораму на ту что лучше "стыкуется".'}),Ne.jsx("li",{children:'Не выполнена часть задания в отношении пинов с текстом: я "срезал углы", привязав пины к самой панораме. С текстом так не получится потому что он тоже будет поворачиваться. Для текса (и для пинов) нужно формировать отдельный слой с собственными орбиталями и кучей логики с тригонометрией, которую нужно будет синхронизировать с панорамой. Я посчитал что это чересчур для технического задания: что со сторонней библиотекой (есть такая) что на собственную реализачию ушло бы ещё больше часа.'}),Ne.jsx("li",{children:"Верстка адаптивная (включая canvas и прямоугольники)."})]})})]}),Ne.jsx("footer",{className:cu.footer,children:Ne.jsxs("div",{className:cu.footer__author,children:[Ne.jsx("span",{children:"© 2025 "}),Ne.jsx("img",{height:24,src:tA,alt:"avatar"}),Ne.jsx("a",{href:"https://github.com/mrHoft",children:Ne.jsx("span",{children:" mrHoft"})})]})})]})}Dx.createRoot(document.getElementById("root")).render(Ne.jsx(fu.StrictMode,{children:Ne.jsx(eA,{})}));
