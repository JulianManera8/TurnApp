const __vite__fileDeps=["assets/HomeView-B9qzNHeW.js","assets/navbarComp-Dmmz1cPW.js","assets/navbarComp-Df0ZzHQs.css","assets/HomeView-BZt4Xaax.css","assets/ConfiguracionView-DzYFTO1t.js","assets/ConfiguracionView-BDB2fksb.css","assets/GestionListaView-D-j-CyJI.js","assets/GestionListaView-Bb-3a8Vr.css","assets/GestionCalendarioView-xYue0570.js","assets/GestionCalendarioView-BBgSB9o3.css","assets/TutorialView-B_vl5DY0.js","assets/TutorialView-BtdMs6QW.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();/**
* @vue/shared v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ta(t,n){const e=new Set(t.split(","));return n?o=>e.has(o.toLowerCase()):o=>e.has(o)}const Se={},jt=[],un=()=>{},Gu=()=>!1,Tr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),oa=t=>t.startsWith("onUpdate:"),Re=Object.assign,ra=(t,n)=>{const e=t.indexOf(n);e>-1&&t.splice(e,1)},Ju=Object.prototype.hasOwnProperty,ue=(t,n)=>Ju.call(t,n),H=Array.isArray,Rt=t=>Uo(t)==="[object Map]",Wt=t=>Uo(t)==="[object Set]",Ua=t=>Uo(t)==="[object Date]",Y=t=>typeof t=="function",Ae=t=>typeof t=="string",Bn=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",Vc=t=>(xe(t)||Y(t))&&Y(t.then)&&Y(t.catch),Uc=Object.prototype.toString,Uo=t=>Uc.call(t),Zu=t=>Uo(t).slice(8,-1),Kc=t=>Uo(t)==="[object Object]",ia=t=>Ae(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,oo=ta(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Or=t=>{const n=Object.create(null);return e=>n[e]||(n[e]=t(e))},Yu=/-(\w)/g,Pn=Or(t=>t.replace(Yu,(n,e)=>e?e.toUpperCase():"")),Xu=/\B([A-Z])/g,xt=Or(t=>t.replace(Xu,"-$1").toLowerCase()),Ar=Or(t=>t.charAt(0).toUpperCase()+t.slice(1)),Xr=Or(t=>t?`on${Ar(t)}`:""),Zn=(t,n)=>!Object.is(t,n),fr=(t,n)=>{for(let e=0;e<t.length;e++)t[e](n)},Hc=(t,n,e)=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value:e})},xr=t=>{const n=parseFloat(t);return isNaN(n)?t:n},Qu=t=>{const n=Ae(t)?Number(t):NaN;return isNaN(n)?t:n};let Ka;const qc=()=>Ka||(Ka=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ct(t){if(H(t)){const n={};for(let e=0;e<t.length;e++){const o=t[e],r=Ae(o)?od(o):Ct(o);if(r)for(const i in r)n[i]=r[i]}return n}else if(Ae(t)||xe(t))return t}const ed=/;(?![^(]*\))/g,nd=/:([^]+)/,td=/\/\*[^]*?\*\//g;function od(t){const n={};return t.replace(td,"").split(ed).forEach(e=>{if(e){const o=e.split(nd);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function ze(t){let n="";if(Ae(t))n=t;else if(H(t))for(let e=0;e<t.length;e++){const o=ze(t[e]);o&&(n+=o+" ")}else if(xe(t))for(const e in t)t[e]&&(n+=e+" ");return n.trim()}function rd(t){if(!t)return null;let{class:n,style:e}=t;return n&&!Ae(n)&&(t.class=ze(n)),e&&(t.style=Ct(e)),t}const id="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ad=ta(id);function Wc(t){return!!t||t===""}function sd(t,n){if(t.length!==n.length)return!1;let e=!0;for(let o=0;e&&o<t.length;o++)e=yt(t[o],n[o]);return e}function yt(t,n){if(t===n)return!0;let e=Ua(t),o=Ua(n);if(e||o)return e&&o?t.getTime()===n.getTime():!1;if(e=Bn(t),o=Bn(n),e||o)return t===n;if(e=H(t),o=H(n),e||o)return e&&o?sd(t,n):!1;if(e=xe(t),o=xe(n),e||o){if(!e||!o)return!1;const r=Object.keys(t).length,i=Object.keys(n).length;if(r!==i)return!1;for(const a in t){const s=t.hasOwnProperty(a),c=n.hasOwnProperty(a);if(s&&!c||!s&&c||!yt(t[a],n[a]))return!1}}return String(t)===String(n)}function aa(t,n){return t.findIndex(e=>yt(e,n))}const Ge=t=>Ae(t)?t:t==null?"":H(t)||xe(t)&&(t.toString===Uc||!Y(t.toString))?JSON.stringify(t,Gc,2):String(t),Gc=(t,n)=>n&&n.__v_isRef?Gc(t,n.value):Rt(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((e,[o,r],i)=>(e[Qr(o,i)+" =>"]=r,e),{})}:Wt(n)?{[`Set(${n.size})`]:[...n.values()].map(e=>Qr(e))}:Bn(n)?Qr(n):xe(n)&&!H(n)&&!Kc(n)?String(n):n,Qr=(t,n="")=>{var e;return Bn(t)?`Symbol(${(e=t.description)!=null?e:n})`:t};/**
* @vue/reactivity v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bn;class Jc{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=bn,!n&&bn&&(this.index=(bn.scopes||(bn.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const e=bn;try{return bn=this,n()}finally{bn=e}}}on(){bn=this}off(){bn=this.parent}stop(n){if(this._active){let e,o;for(e=0,o=this.effects.length;e<o;e++)this.effects[e].stop();for(e=0,o=this.cleanups.length;e<o;e++)this.cleanups[e]();if(this.scopes)for(e=0,o=this.scopes.length;e<o;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function cd(t){return new Jc(t)}function ld(t,n=bn){n&&n.active&&n.effects.push(t)}function ud(){return bn}let gt;class sa{constructor(n,e,o,r){this.fn=n,this.trigger=e,this.scheduler=o,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,ld(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,et();for(let n=0;n<this._depsLength;n++){const e=this.deps[n];if(e.computed&&(dd(e.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),nt()}return this._dirtyLevel>=4}set dirty(n){this._dirtyLevel=n?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let n=Gn,e=gt;try{return Gn=!0,gt=this,this._runnings++,Ha(this),this.fn()}finally{qa(this),this._runnings--,gt=e,Gn=n}}stop(){var n;this.active&&(Ha(this),qa(this),(n=this.onStop)==null||n.call(this),this.active=!1)}}function dd(t){return t.value}function Ha(t){t._trackId++,t._depsLength=0}function qa(t){if(t.deps.length>t._depsLength){for(let n=t._depsLength;n<t.deps.length;n++)Zc(t.deps[n],t);t.deps.length=t._depsLength}}function Zc(t,n){const e=t.get(n);e!==void 0&&n._trackId!==e&&(t.delete(n),t.size===0&&t.cleanup())}let Gn=!0,ki=0;const Yc=[];function et(){Yc.push(Gn),Gn=!1}function nt(){const t=Yc.pop();Gn=t===void 0?!0:t}function ca(){ki++}function la(){for(ki--;!ki&&wi.length;)wi.shift()()}function Xc(t,n,e){if(n.get(t)!==t._trackId){n.set(t,t._trackId);const o=t.deps[t._depsLength];o!==n?(o&&Zc(o,t),t.deps[t._depsLength++]=n):t._depsLength++}}const wi=[];function Qc(t,n,e){ca();for(const o of t.keys()){let r;o._dirtyLevel<n&&(r??(r=t.get(o)===o._trackId))&&(o._shouldSchedule||(o._shouldSchedule=o._dirtyLevel===0),o._dirtyLevel=n),o._shouldSchedule&&(r??(r=t.get(o)===o._trackId))&&(o.trigger(),(!o._runnings||o.allowRecurse)&&o._dirtyLevel!==2&&(o._shouldSchedule=!1,o.scheduler&&wi.push(o.scheduler)))}la()}const el=(t,n)=>{const e=new Map;return e.cleanup=t,e.computed=n,e},Cr=new WeakMap,bt=Symbol(""),xi=Symbol("");function Xe(t,n,e){if(Gn&&gt){let o=Cr.get(t);o||Cr.set(t,o=new Map);let r=o.get(e);r||o.set(e,r=el(()=>o.delete(e))),Xc(gt,r)}}function On(t,n,e,o,r,i){const a=Cr.get(t);if(!a)return;let s=[];if(n==="clear")s=[...a.values()];else if(e==="length"&&H(t)){const c=Number(o);a.forEach((l,u)=>{(u==="length"||!Bn(u)&&u>=c)&&s.push(l)})}else switch(e!==void 0&&s.push(a.get(e)),n){case"add":H(t)?ia(e)&&s.push(a.get("length")):(s.push(a.get(bt)),Rt(t)&&s.push(a.get(xi)));break;case"delete":H(t)||(s.push(a.get(bt)),Rt(t)&&s.push(a.get(xi)));break;case"set":Rt(t)&&s.push(a.get(bt));break}ca();for(const c of s)c&&Qc(c,4);la()}function pd(t,n){var e;return(e=Cr.get(t))==null?void 0:e.get(n)}const fd=ta("__proto__,__v_isRef,__isVue"),nl=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Bn)),Wa=hd();function hd(){const t={};return["includes","indexOf","lastIndexOf"].forEach(n=>{t[n]=function(...e){const o=pe(this);for(let i=0,a=this.length;i<a;i++)Xe(o,"get",i+"");const r=o[n](...e);return r===-1||r===!1?o[n](...e.map(pe)):r}}),["push","pop","shift","unshift","splice"].forEach(n=>{t[n]=function(...e){et(),ca();const o=pe(this)[n].apply(this,e);return la(),nt(),o}}),t}function md(t){Bn(t)||(t=String(t));const n=pe(this);return Xe(n,"has",t),n.hasOwnProperty(t)}class tl{constructor(n=!1,e=!1){this._isReadonly=n,this._isShallow=e}get(n,e,o){const r=this._isReadonly,i=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return i;if(e==="__v_raw")return o===(r?i?Pd:al:i?il:rl).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(o)?n:void 0;const a=H(n);if(!r){if(a&&ue(Wa,e))return Reflect.get(Wa,e,o);if(e==="hasOwnProperty")return md}const s=Reflect.get(n,e,o);return(Bn(e)?nl.has(e):fd(e))||(r||Xe(n,"get",e),i)?s:Te(s)?a&&ia(e)?s:s.value:xe(s)?r?pa(s):kt(s):s}}class ol extends tl{constructor(n=!1){super(!1,n)}set(n,e,o,r){let i=n[e];if(!this._isShallow){const c=yo(i);if(!_r(o)&&!yo(o)&&(i=pe(i),o=pe(o)),!H(n)&&Te(i)&&!Te(o))return c?!1:(i.value=o,!0)}const a=H(n)&&ia(e)?Number(e)<n.length:ue(n,e),s=Reflect.set(n,e,o,r);return n===pe(r)&&(a?Zn(o,i)&&On(n,"set",e,o):On(n,"add",e,o)),s}deleteProperty(n,e){const o=ue(n,e);n[e];const r=Reflect.deleteProperty(n,e);return r&&o&&On(n,"delete",e,void 0),r}has(n,e){const o=Reflect.has(n,e);return(!Bn(e)||!nl.has(e))&&Xe(n,"has",e),o}ownKeys(n){return Xe(n,"iterate",H(n)?"length":bt),Reflect.ownKeys(n)}}class gd extends tl{constructor(n=!1){super(!0,n)}set(n,e){return!0}deleteProperty(n,e){return!0}}const bd=new ol,vd=new gd,yd=new ol(!0),ua=t=>t,Br=t=>Reflect.getPrototypeOf(t);function Go(t,n,e=!1,o=!1){t=t.__v_raw;const r=pe(t),i=pe(n);e||(Zn(n,i)&&Xe(r,"get",n),Xe(r,"get",i));const{has:a}=Br(r),s=o?ua:e?ha:ko;if(a.call(r,n))return s(t.get(n));if(a.call(r,i))return s(t.get(i));t!==r&&t.get(n)}function Jo(t,n=!1){const e=this.__v_raw,o=pe(e),r=pe(t);return n||(Zn(t,r)&&Xe(o,"has",t),Xe(o,"has",r)),t===r?e.has(t):e.has(t)||e.has(r)}function Zo(t,n=!1){return t=t.__v_raw,!n&&Xe(pe(t),"iterate",bt),Reflect.get(t,"size",t)}function Ga(t){t=pe(t);const n=pe(this);return Br(n).has.call(n,t)||(n.add(t),On(n,"add",t,t)),this}function Ja(t,n){n=pe(n);const e=pe(this),{has:o,get:r}=Br(e);let i=o.call(e,t);i||(t=pe(t),i=o.call(e,t));const a=r.call(e,t);return e.set(t,n),i?Zn(n,a)&&On(e,"set",t,n):On(e,"add",t,n),this}function Za(t){const n=pe(this),{has:e,get:o}=Br(n);let r=e.call(n,t);r||(t=pe(t),r=e.call(n,t)),o&&o.call(n,t);const i=n.delete(t);return r&&On(n,"delete",t,void 0),i}function Ya(){const t=pe(this),n=t.size!==0,e=t.clear();return n&&On(t,"clear",void 0,void 0),e}function Yo(t,n){return function(o,r){const i=this,a=i.__v_raw,s=pe(a),c=n?ua:t?ha:ko;return!t&&Xe(s,"iterate",bt),a.forEach((l,u)=>o.call(r,c(l),c(u),i))}}function Xo(t,n,e){return function(...o){const r=this.__v_raw,i=pe(r),a=Rt(i),s=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,l=r[t](...o),u=e?ua:n?ha:ko;return!n&&Xe(i,"iterate",c?xi:bt),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:s?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function jn(t){return function(...n){return t==="delete"?!1:t==="clear"?void 0:this}}function kd(){const t={get(i){return Go(this,i)},get size(){return Zo(this)},has:Jo,add:Ga,set:Ja,delete:Za,clear:Ya,forEach:Yo(!1,!1)},n={get(i){return Go(this,i,!1,!0)},get size(){return Zo(this)},has:Jo,add:Ga,set:Ja,delete:Za,clear:Ya,forEach:Yo(!1,!0)},e={get(i){return Go(this,i,!0)},get size(){return Zo(this,!0)},has(i){return Jo.call(this,i,!0)},add:jn("add"),set:jn("set"),delete:jn("delete"),clear:jn("clear"),forEach:Yo(!0,!1)},o={get(i){return Go(this,i,!0,!0)},get size(){return Zo(this,!0)},has(i){return Jo.call(this,i,!0)},add:jn("add"),set:jn("set"),delete:jn("delete"),clear:jn("clear"),forEach:Yo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Xo(i,!1,!1),e[i]=Xo(i,!0,!1),n[i]=Xo(i,!1,!0),o[i]=Xo(i,!0,!0)}),[t,e,n,o]}const[wd,xd,Cd,_d]=kd();function da(t,n){const e=n?t?_d:Cd:t?xd:wd;return(o,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?o:Reflect.get(ue(e,r)&&r in o?e:o,r,i)}const Sd={get:da(!1,!1)},Id={get:da(!1,!0)},$d={get:da(!0,!1)},rl=new WeakMap,il=new WeakMap,al=new WeakMap,Pd=new WeakMap;function Ed(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Td(t){return t.__v_skip||!Object.isExtensible(t)?0:Ed(Zu(t))}function kt(t){return yo(t)?t:fa(t,!1,bd,Sd,rl)}function sl(t){return fa(t,!1,yd,Id,il)}function pa(t){return fa(t,!0,vd,$d,al)}function fa(t,n,e,o,r){if(!xe(t)||t.__v_raw&&!(n&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const a=Td(t);if(a===0)return t;const s=new Proxy(t,a===2?o:e);return r.set(t,s),s}function ro(t){return yo(t)?ro(t.__v_raw):!!(t&&t.__v_isReactive)}function yo(t){return!!(t&&t.__v_isReadonly)}function _r(t){return!!(t&&t.__v_isShallow)}function cl(t){return t?!!t.__v_raw:!1}function pe(t){const n=t&&t.__v_raw;return n?pe(n):t}function ll(t){return Object.isExtensible(t)&&Hc(t,"__v_skip",!0),t}const ko=t=>xe(t)?kt(t):t,ha=t=>xe(t)?pa(t):t;class ul{constructor(n,e,o,r){this.getter=n,this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new sa(()=>n(this._value),()=>hr(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const n=pe(this);return(!n._cacheable||n.effect.dirty)&&Zn(n._value,n._value=n.effect.run())&&hr(n,4),dl(n),n.effect._dirtyLevel>=2&&hr(n,2),n._value}set value(n){this._setter(n)}get _dirty(){return this.effect.dirty}set _dirty(n){this.effect.dirty=n}}function Od(t,n,e=!1){let o,r;const i=Y(t);return i?(o=t,r=un):(o=t.get,r=t.set),new ul(o,r,i||!r,e)}function dl(t){var n;Gn&&gt&&(t=pe(t),Xc(gt,(n=t.dep)!=null?n:t.dep=el(()=>t.dep=void 0,t instanceof ul?t:void 0)))}function hr(t,n=4,e){t=pe(t);const o=t.dep;o&&Qc(o,n)}function Te(t){return!!(t&&t.__v_isRef===!0)}function Ee(t){return pl(t,!1)}function Ad(t){return pl(t,!0)}function pl(t,n){return Te(t)?t:new Bd(t,n)}class Bd{constructor(n,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?n:pe(n),this._value=e?n:ko(n)}get value(){return dl(this),this._value}set value(n){const e=this.__v_isShallow||_r(n)||yo(n);n=e?n:pe(n),Zn(n,this._rawValue)&&(this._rawValue=n,this._value=e?n:ko(n),hr(this,4))}}function _e(t){return Te(t)?t.value:t}const Ld={get:(t,n,e)=>_e(Reflect.get(t,n,e)),set:(t,n,e,o)=>{const r=t[n];return Te(r)&&!Te(e)?(r.value=e,!0):Reflect.set(t,n,e,o)}};function fl(t){return ro(t)?t:new Proxy(t,Ld)}function jd(t){const n=H(t)?new Array(t.length):{};for(const e in t)n[e]=Fd(t,e);return n}class Rd{constructor(n,e,o){this._object=n,this._key=e,this._defaultValue=o,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return pd(pe(this._object),this._key)}}function Fd(t,n,e){const o=t[n];return Te(o)?o:new Rd(t,n,e)}/**
* @vue/runtime-core v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Jn(t,n,e,o){try{return o?t(...o):t()}catch(r){Lr(r,n,e)}}function dn(t,n,e,o){if(Y(t)){const r=Jn(t,n,e,o);return r&&Vc(r)&&r.catch(i=>{Lr(i,n,e)}),r}if(H(t)){const r=[];for(let i=0;i<t.length;i++)r.push(dn(t[i],n,e,o));return r}}function Lr(t,n,e,o=!0){const r=n?n.vnode:null;if(n){let i=n.parent;const a=n.proxy,s=`https://vuejs.org/error-reference/#runtime-${e}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,a,s)===!1)return}i=i.parent}const c=n.appContext.config.errorHandler;if(c){et(),Jn(c,null,10,[t,a,s]),nt();return}}Md(t,e,r,o)}function Md(t,n,e,o=!0){console.error(t)}let wo=!1,Ci=!1;const qe=[];let In=0;const Ft=[];let Nn=null,ut=0;const hl=Promise.resolve();let ma=null;function jr(t){const n=ma||hl;return t?n.then(this?t.bind(this):t):n}function zd(t){let n=In+1,e=qe.length;for(;n<e;){const o=n+e>>>1,r=qe[o],i=xo(r);i<t||i===t&&r.pre?n=o+1:e=o}return n}function ga(t){(!qe.length||!qe.includes(t,wo&&t.allowRecurse?In+1:In))&&(t.id==null?qe.push(t):qe.splice(zd(t.id),0,t),ml())}function ml(){!wo&&!Ci&&(Ci=!0,ma=hl.then(bl))}function Dd(t){const n=qe.indexOf(t);n>In&&qe.splice(n,1)}function Nd(t){H(t)?Ft.push(...t):(!Nn||!Nn.includes(t,t.allowRecurse?ut+1:ut))&&Ft.push(t),ml()}function Xa(t,n,e=wo?In+1:0){for(;e<qe.length;e++){const o=qe[e];if(o&&o.pre){if(t&&o.id!==t.uid)continue;qe.splice(e,1),e--,o()}}}function gl(t){if(Ft.length){const n=[...new Set(Ft)].sort((e,o)=>xo(e)-xo(o));if(Ft.length=0,Nn){Nn.push(...n);return}for(Nn=n,ut=0;ut<Nn.length;ut++)Nn[ut]();Nn=null,ut=0}}const xo=t=>t.id==null?1/0:t.id,Vd=(t,n)=>{const e=xo(t)-xo(n);if(e===0){if(t.pre&&!n.pre)return-1;if(n.pre&&!t.pre)return 1}return e};function bl(t){Ci=!1,wo=!0,qe.sort(Vd);try{for(In=0;In<qe.length;In++){const n=qe[In];n&&n.active!==!1&&Jn(n,null,14)}}finally{In=0,qe.length=0,gl(),wo=!1,ma=null,(qe.length||Ft.length)&&bl()}}function Ud(t,n,...e){if(t.isUnmounted)return;const o=t.vnode.props||Se;let r=e;const i=n.startsWith("update:"),a=i&&n.slice(7);if(a&&a in o){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:d,trim:p}=o[u]||Se;p&&(r=e.map(f=>Ae(f)?f.trim():f)),d&&(r=e.map(xr))}let s,c=o[s=Xr(n)]||o[s=Xr(Pn(n))];!c&&i&&(c=o[s=Xr(xt(n))]),c&&dn(c,t,6,r);const l=o[s+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,dn(l,t,6,r)}}function vl(t,n,e=!1){const o=n.emitsCache,r=o.get(t);if(r!==void 0)return r;const i=t.emits;let a={},s=!1;if(!Y(t)){const c=l=>{const u=vl(l,n,!0);u&&(s=!0,Re(a,u))};!e&&n.mixins.length&&n.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!s?(xe(t)&&o.set(t,null),null):(H(i)?i.forEach(c=>a[c]=null):Re(a,i),xe(t)&&o.set(t,a),a)}function Rr(t,n){return!t||!Tr(n)?!1:(n=n.slice(2).replace(/Once$/,""),ue(t,n[0].toLowerCase()+n.slice(1))||ue(t,xt(n))||ue(t,n))}let je=null,Fr=null;function Sr(t){const n=je;return je=t,Fr=t&&t.type.__scopeId||null,n}function ba(t){Fr=t}function va(){Fr=null}function Ye(t,n=je,e){if(!n||t._n)return t;const o=(...r)=>{o._d&&ps(-1);const i=Sr(n);let a;try{a=t(...r)}finally{Sr(i),o._d&&ps(1)}return a};return o._n=!0,o._c=!0,o._d=!0,o}function ei(t){const{type:n,vnode:e,proxy:o,withProxy:r,props:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,data:p,setupState:f,ctx:g,inheritAttrs:v}=t;let b,y;const w=Sr(t);try{if(e.shapeFlag&4){const O=r||o,W=O;b=Sn(u.call(W,O,d,i,f,p,g)),y=c}else{const O=n;b=Sn(O.length>1?O(i,{attrs:c,slots:s,emit:l}):O(i,null)),y=n.props?c:Kd(c)}}catch(O){lo.length=0,Lr(O,t,1),b=he(pn)}let $=b;if(y&&v!==!1){const O=Object.keys(y),{shapeFlag:W}=$;O.length&&W&7&&(a&&O.some(oa)&&(y=Hd(y,a)),$=Yn($,y))}return e.dirs&&($=Yn($),$.dirs=$.dirs?$.dirs.concat(e.dirs):e.dirs),e.transition&&($.transition=e.transition),b=$,Sr(w),b}const Kd=t=>{let n;for(const e in t)(e==="class"||e==="style"||Tr(e))&&((n||(n={}))[e]=t[e]);return n},Hd=(t,n)=>{const e={};for(const o in t)(!oa(o)||!(o.slice(9)in n))&&(e[o]=t[o]);return e};function qd(t,n,e){const{props:o,children:r,component:i}=t,{props:a,children:s,patchFlag:c}=n,l=i.emitsOptions;if(n.dirs||n.transition)return!0;if(e&&c>=0){if(c&1024)return!0;if(c&16)return o?Qa(o,a,l):!!a;if(c&8){const u=n.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(a[p]!==o[p]&&!Rr(l,p))return!0}}}else return(r||s)&&(!s||!s.$stable)?!0:o===a?!1:o?a?Qa(o,a,l):!0:!!a;return!1}function Qa(t,n,e){const o=Object.keys(n);if(o.length!==Object.keys(t).length)return!0;for(let r=0;r<o.length;r++){const i=o[r];if(n[i]!==t[i]&&!Rr(e,i))return!0}return!1}function Wd({vnode:t,parent:n},e){for(;n;){const o=n.subTree;if(o.suspense&&o.suspense.activeBranch===t&&(o.el=t.el),o===t)(t=n.vnode).el=e,n=n.parent;else break}}const ya="components",Gd="directives";function Be(t,n){return ka(ya,t,!0,n)||t}const yl=Symbol.for("v-ndc");function De(t){return Ae(t)?ka(ya,t,!1)||t:t||yl}function Mr(t){return ka(Gd,t)}function ka(t,n,e=!0,o=!1){const r=je||Ne;if(r){const i=r.type;if(t===ya){const s=Up(i,!1);if(s&&(s===n||s===Pn(n)||s===Ar(Pn(n))))return i}const a=es(r[t]||i[t],n)||es(r.appContext[t],n);return!a&&o?i:a}}function es(t,n){return t&&(t[n]||t[Pn(n)]||t[Ar(Pn(n))])}const Jd=t=>t.__isSuspense;function Zd(t,n){n&&n.pendingBranch?H(t)?n.effects.push(...t):n.effects.push(t):Nd(t)}const Yd=Symbol.for("v-scx"),Xd=()=>$n(Yd),Qo={};function Mt(t,n,e){return kl(t,n,e)}function kl(t,n,{immediate:e,deep:o,flush:r,once:i,onTrack:a,onTrigger:s}=Se){if(n&&i){const N=n;n=(...Q)=>{N(...Q),W()}}const c=Ne,l=N=>o===!0?N:ht(N,o===!1?1:void 0);let u,d=!1,p=!1;if(Te(t)?(u=()=>t.value,d=_r(t)):ro(t)?(u=()=>l(t),d=!0):H(t)?(p=!0,d=t.some(N=>ro(N)||_r(N)),u=()=>t.map(N=>{if(Te(N))return N.value;if(ro(N))return l(N);if(Y(N))return Jn(N,c,2)})):Y(t)?n?u=()=>Jn(t,c,2):u=()=>(f&&f(),dn(t,c,3,[g])):u=un,n&&o){const N=u;u=()=>ht(N())}let f,g=N=>{f=$.onStop=()=>{Jn(N,c,4),f=$.onStop=void 0}},v;if(Ur)if(g=un,n?e&&dn(n,c,3,[u(),p?[]:void 0,g]):u(),r==="sync"){const N=Xd();v=N.__watcherHandles||(N.__watcherHandles=[])}else return un;let b=p?new Array(t.length).fill(Qo):Qo;const y=()=>{if(!(!$.active||!$.dirty))if(n){const N=$.run();(o||d||(p?N.some((Q,D)=>Zn(Q,b[D])):Zn(N,b)))&&(f&&f(),dn(n,c,3,[N,b===Qo?void 0:p&&b[0]===Qo?[]:b,g]),b=N)}else $.run()};y.allowRecurse=!!n;let w;r==="sync"?w=y:r==="post"?w=()=>Ze(y,c&&c.suspense):(y.pre=!0,c&&(y.id=c.uid),w=()=>ga(y));const $=new sa(u,un,w),O=ud(),W=()=>{$.stop(),O&&ra(O.effects,$)};return n?e?y():b=$.run():r==="post"?Ze($.run.bind($),c&&c.suspense):$.run(),v&&v.push(W),W}function Qd(t,n,e){const o=this.proxy,r=Ae(t)?t.includes(".")?wl(o,t):()=>o[t]:t.bind(o,o);let i;Y(n)?i=n:(i=n.handler,e=n);const a=Ko(this),s=kl(r,i.bind(o),e);return a(),s}function wl(t,n){const e=n.split(".");return()=>{let o=t;for(let r=0;r<e.length&&o;r++)o=o[e[r]];return o}}function ht(t,n,e=0,o){if(!xe(t)||t.__v_skip)return t;if(n&&n>0){if(e>=n)return t;e++}if(o=o||new Set,o.has(t))return t;if(o.add(t),Te(t))ht(t.value,n,e,o);else if(H(t))for(let r=0;r<t.length;r++)ht(t[r],n,e,o);else if(Wt(t)||Rt(t))t.forEach(r=>{ht(r,n,e,o)});else if(Kc(t))for(const r in t)ht(t[r],n,e,o);return t}function on(t,n){if(je===null)return t;const e=Kr(je)||je.proxy,o=t.dirs||(t.dirs=[]);for(let r=0;r<n.length;r++){let[i,a,s,c=Se]=n[r];i&&(Y(i)&&(i={mounted:i,updated:i}),i.deep&&ht(a),o.push({dir:i,instance:e,value:a,oldValue:void 0,arg:s,modifiers:c}))}return t}function tt(t,n,e,o){const r=t.dirs,i=n&&n.dirs;for(let a=0;a<r.length;a++){const s=r[a];i&&(s.oldValue=i[a].value);let c=s.dir[o];c&&(et(),dn(c,e,8,[t.el,s,t,n]),nt())}}const Vn=Symbol("_leaveCb"),er=Symbol("_enterCb");function ep(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Nr(()=>{t.isMounted=!0}),$l(()=>{t.isUnmounting=!0}),t}const an=[Function,Array],xl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:an,onEnter:an,onAfterEnter:an,onEnterCancelled:an,onBeforeLeave:an,onLeave:an,onAfterLeave:an,onLeaveCancelled:an,onBeforeAppear:an,onAppear:an,onAfterAppear:an,onAppearCancelled:an},np={name:"BaseTransition",props:xl,setup(t,{slots:n}){const e=Kl(),o=ep();return()=>{const r=n.default&&_l(n.default(),!0);if(!r||!r.length)return;let i=r[0];if(r.length>1){for(const p of r)if(p.type!==pn){i=p;break}}const a=pe(t),{mode:s}=a;if(o.isLeaving)return ni(i);const c=ns(i);if(!c)return ni(i);const l=_i(c,a,o,e);Si(c,l);const u=e.subTree,d=u&&ns(u);if(d&&d.type!==pn&&!dt(c,d)){const p=_i(d,a,o,e);if(Si(d,p),s==="out-in")return o.isLeaving=!0,p.afterLeave=()=>{o.isLeaving=!1,e.update.active!==!1&&(e.effect.dirty=!0,e.update())},ni(i);s==="in-out"&&c.type!==pn&&(p.delayLeave=(f,g,v)=>{const b=Cl(o,d);b[String(d.key)]=d,f[Vn]=()=>{g(),f[Vn]=void 0,delete l.delayedLeave},l.delayedLeave=v})}return i}}},tp=np;function Cl(t,n){const{leavingVNodes:e}=t;let o=e.get(n.type);return o||(o=Object.create(null),e.set(n.type,o)),o}function _i(t,n,e,o){const{appear:r,mode:i,persisted:a=!1,onBeforeEnter:s,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:p,onAfterLeave:f,onLeaveCancelled:g,onBeforeAppear:v,onAppear:b,onAfterAppear:y,onAppearCancelled:w}=n,$=String(t.key),O=Cl(e,t),W=(D,ee)=>{D&&dn(D,o,9,ee)},N=(D,ee)=>{const ne=ee[1];W(D,ee),H(D)?D.every(be=>be.length<=1)&&ne():D.length<=1&&ne()},Q={mode:i,persisted:a,beforeEnter(D){let ee=s;if(!e.isMounted)if(r)ee=v||s;else return;D[Vn]&&D[Vn](!0);const ne=O[$];ne&&dt(t,ne)&&ne.el[Vn]&&ne.el[Vn](),W(ee,[D])},enter(D){let ee=c,ne=l,be=u;if(!e.isMounted)if(r)ee=b||c,ne=y||l,be=w||u;else return;let V=!1;const se=D[er]=Fe=>{V||(V=!0,Fe?W(be,[D]):W(ne,[D]),Q.delayedLeave&&Q.delayedLeave(),D[er]=void 0)};ee?N(ee,[D,se]):se()},leave(D,ee){const ne=String(t.key);if(D[er]&&D[er](!0),e.isUnmounting)return ee();W(d,[D]);let be=!1;const V=D[Vn]=se=>{be||(be=!0,ee(),se?W(g,[D]):W(f,[D]),D[Vn]=void 0,O[ne]===t&&delete O[ne])};O[ne]=t,p?N(p,[D,V]):V()},clone(D){return _i(D,n,e,o)}};return Q}function ni(t){if(zr(t))return t=Yn(t),t.children=null,t}function ns(t){return zr(t)?t.children?t.children[0]:void 0:t}function Si(t,n){t.shapeFlag&6&&t.component?Si(t.component.subTree,n):t.shapeFlag&128?(t.ssContent.transition=n.clone(t.ssContent),t.ssFallback.transition=n.clone(t.ssFallback)):t.transition=n}function _l(t,n=!1,e){let o=[],r=0;for(let i=0;i<t.length;i++){let a=t[i];const s=e==null?a.key:String(e)+String(a.key!=null?a.key:i);a.type===Oe?(a.patchFlag&128&&r++,o=o.concat(_l(a.children,n,s))):(n||a.type!==pn)&&o.push(s!=null?Yn(a,{key:s}):a)}if(r>1)for(let i=0;i<o.length;i++)o[i].patchFlag=-2;return o}/*! #__NO_SIDE_EFFECTS__ */function wa(t,n){return Y(t)?Re({name:t.name},n,{setup:t}):t}const io=t=>!!t.type.__asyncLoader,zr=t=>t.type.__isKeepAlive;function op(t,n){Sl(t,"a",n)}function rp(t,n){Sl(t,"da",n)}function Sl(t,n,e=Ne){const o=t.__wdc||(t.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Dr(n,o,e),e){let r=e.parent;for(;r&&r.parent;)zr(r.parent.vnode)&&ip(o,n,e,r),r=r.parent}}function ip(t,n,e,o){const r=Dr(n,t,o,!0);Pl(()=>{ra(o[n],r)},e)}function Dr(t,n,e=Ne,o=!1){if(e){const r=e[t]||(e[t]=[]),i=n.__weh||(n.__weh=(...a)=>{if(e.isUnmounted)return;et();const s=Ko(e),c=dn(n,e,t,a);return s(),nt(),c});return o?r.unshift(i):r.push(i),i}}const Ln=t=>(n,e=Ne)=>(!Ur||t==="sp")&&Dr(t,(...o)=>n(...o),e),ap=Ln("bm"),Nr=Ln("m"),sp=Ln("bu"),Il=Ln("u"),$l=Ln("bum"),Pl=Ln("um"),cp=Ln("sp"),lp=Ln("rtg"),up=Ln("rtc");function dp(t,n=Ne){Dr("ec",t,n)}function Co(t,n,e,o){let r;const i=e&&e[o];if(H(t)||Ae(t)){r=new Array(t.length);for(let a=0,s=t.length;a<s;a++)r[a]=n(t[a],a,void 0,i&&i[a])}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=n(a+1,a,void 0,i&&i[a])}else if(xe(t))if(t[Symbol.iterator])r=Array.from(t,(a,s)=>n(a,s,void 0,i&&i[s]));else{const a=Object.keys(t);r=new Array(a.length);for(let s=0,c=a.length;s<c;s++){const l=a[s];r[s]=n(t[l],l,s,i&&i[s])}}else r=[];return e&&(e[o]=r),r}function de(t,n,e={},o,r){if(je.isCE||je.parent&&io(je.parent)&&je.parent.isCE)return n!=="default"&&(e.name=n),he("slot",e,o&&o());let i=t[n];i&&i._c&&(i._d=!1),C();const a=i&&El(i(e)),s=X(Oe,{key:e.key||a&&a.key||`_${n}`},a||(o?o():[]),a&&t._===1?64:-2);return!r&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),i&&i._c&&(i._d=!0),s}function El(t){return t.some(n=>$r(n)?!(n.type===pn||n.type===Oe&&!El(n.children)):!0)?t:null}const Ii=t=>t?Hl(t)?Kr(t)||t.proxy:Ii(t.parent):null,ao=Re(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ii(t.parent),$root:t=>Ii(t.root),$emit:t=>t.emit,$options:t=>xa(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ga(t.update)}),$nextTick:t=>t.n||(t.n=jr.bind(t.proxy)),$watch:t=>Qd.bind(t)}),ti=(t,n)=>t!==Se&&!t.__isScriptSetup&&ue(t,n),pp={get({_:t},n){if(n==="__v_skip")return!0;const{ctx:e,setupState:o,data:r,props:i,accessCache:a,type:s,appContext:c}=t;let l;if(n[0]!=="$"){const f=a[n];if(f!==void 0)switch(f){case 1:return o[n];case 2:return r[n];case 4:return e[n];case 3:return i[n]}else{if(ti(o,n))return a[n]=1,o[n];if(r!==Se&&ue(r,n))return a[n]=2,r[n];if((l=t.propsOptions[0])&&ue(l,n))return a[n]=3,i[n];if(e!==Se&&ue(e,n))return a[n]=4,e[n];$i&&(a[n]=0)}}const u=ao[n];let d,p;if(u)return n==="$attrs"&&Xe(t.attrs,"get",""),u(t);if((d=s.__cssModules)&&(d=d[n]))return d;if(e!==Se&&ue(e,n))return a[n]=4,e[n];if(p=c.config.globalProperties,ue(p,n))return p[n]},set({_:t},n,e){const{data:o,setupState:r,ctx:i}=t;return ti(r,n)?(r[n]=e,!0):o!==Se&&ue(o,n)?(o[n]=e,!0):ue(t.props,n)||n[0]==="$"&&n.slice(1)in t?!1:(i[n]=e,!0)},has({_:{data:t,setupState:n,accessCache:e,ctx:o,appContext:r,propsOptions:i}},a){let s;return!!e[a]||t!==Se&&ue(t,a)||ti(n,a)||(s=i[0])&&ue(s,a)||ue(o,a)||ue(ao,a)||ue(r.config.globalProperties,a)},defineProperty(t,n,e){return e.get!=null?t._.accessCache[n]=0:ue(e,"value")&&this.set(t,n,e.value,null),Reflect.defineProperty(t,n,e)}};function ts(t){return H(t)?t.reduce((n,e)=>(n[e]=null,n),{}):t}let $i=!0;function fp(t){const n=xa(t),e=t.proxy,o=t.ctx;$i=!1,n.beforeCreate&&os(n.beforeCreate,t,"bc");const{data:r,computed:i,methods:a,watch:s,provide:c,inject:l,created:u,beforeMount:d,mounted:p,beforeUpdate:f,updated:g,activated:v,deactivated:b,beforeDestroy:y,beforeUnmount:w,destroyed:$,unmounted:O,render:W,renderTracked:N,renderTriggered:Q,errorCaptured:D,serverPrefetch:ee,expose:ne,inheritAttrs:be,components:V,directives:se,filters:Fe}=n;if(l&&hp(l,o,null),a)for(const fe in a){const ce=a[fe];Y(ce)&&(o[fe]=ce.bind(e))}if(r){const fe=r.call(e,e);xe(fe)&&(t.data=kt(fe))}if($i=!0,i)for(const fe in i){const ce=i[fe],hn=Y(ce)?ce.bind(e,e):Y(ce.get)?ce.get.bind(e,e):un,wn=!Y(ce)&&Y(ce.set)?ce.set.bind(e):un,xn=Le({get:hn,set:wn});Object.defineProperty(o,fe,{enumerable:!0,configurable:!0,get:()=>xn.value,set:Je=>xn.value=Je})}if(s)for(const fe in s)Tl(s[fe],o,e,fe);if(c){const fe=Y(c)?c.call(e):c;Reflect.ownKeys(fe).forEach(ce=>{mr(ce,fe[ce])})}u&&os(u,t,"c");function ye(fe,ce){H(ce)?ce.forEach(hn=>fe(hn.bind(e))):ce&&fe(ce.bind(e))}if(ye(ap,d),ye(Nr,p),ye(sp,f),ye(Il,g),ye(op,v),ye(rp,b),ye(dp,D),ye(up,N),ye(lp,Q),ye($l,w),ye(Pl,O),ye(cp,ee),H(ne))if(ne.length){const fe=t.exposed||(t.exposed={});ne.forEach(ce=>{Object.defineProperty(fe,ce,{get:()=>e[ce],set:hn=>e[ce]=hn})})}else t.exposed||(t.exposed={});W&&t.render===un&&(t.render=W),be!=null&&(t.inheritAttrs=be),V&&(t.components=V),se&&(t.directives=se)}function hp(t,n,e=un){H(t)&&(t=Pi(t));for(const o in t){const r=t[o];let i;xe(r)?"default"in r?i=$n(r.from||o,r.default,!0):i=$n(r.from||o):i=$n(r),Te(i)?Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):n[o]=i}}function os(t,n,e){dn(H(t)?t.map(o=>o.bind(n.proxy)):t.bind(n.proxy),n,e)}function Tl(t,n,e,o){const r=o.includes(".")?wl(e,o):()=>e[o];if(Ae(t)){const i=n[t];Y(i)&&Mt(r,i)}else if(Y(t))Mt(r,t.bind(e));else if(xe(t))if(H(t))t.forEach(i=>Tl(i,n,e,o));else{const i=Y(t.handler)?t.handler.bind(e):n[t.handler];Y(i)&&Mt(r,i,t)}}function xa(t){const n=t.type,{mixins:e,extends:o}=n,{mixins:r,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,s=i.get(n);let c;return s?c=s:!r.length&&!e&&!o?c=n:(c={},r.length&&r.forEach(l=>Ir(c,l,a,!0)),Ir(c,n,a)),xe(n)&&i.set(n,c),c}function Ir(t,n,e,o=!1){const{mixins:r,extends:i}=n;i&&Ir(t,i,e,!0),r&&r.forEach(a=>Ir(t,a,e,!0));for(const a in n)if(!(o&&a==="expose")){const s=mp[a]||e&&e[a];t[a]=s?s(t[a],n[a]):n[a]}return t}const mp={data:rs,props:is,emits:is,methods:no,computed:no,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:no,directives:no,watch:bp,provide:rs,inject:gp};function rs(t,n){return n?t?function(){return Re(Y(t)?t.call(this,this):t,Y(n)?n.call(this,this):n)}:n:t}function gp(t,n){return no(Pi(t),Pi(n))}function Pi(t){if(H(t)){const n={};for(let e=0;e<t.length;e++)n[t[e]]=t[e];return n}return t}function We(t,n){return t?[...new Set([].concat(t,n))]:n}function no(t,n){return t?Re(Object.create(null),t,n):n}function is(t,n){return t?H(t)&&H(n)?[...new Set([...t,...n])]:Re(Object.create(null),ts(t),ts(n??{})):n}function bp(t,n){if(!t)return n;if(!n)return t;const e=Re(Object.create(null),t);for(const o in n)e[o]=We(t[o],n[o]);return e}function Ol(){return{app:null,config:{isNativeTag:Gu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vp=0;function yp(t,n){return function(o,r=null){Y(o)||(o=Re({},o)),r!=null&&!xe(r)&&(r=null);const i=Ol(),a=new WeakSet;let s=!1;const c=i.app={_uid:vp++,_component:o,_props:r,_container:null,_context:i,_instance:null,version:Hp,get config(){return i.config},set config(l){},use(l,...u){return a.has(l)||(l&&Y(l.install)?(a.add(l),l.install(c,...u)):Y(l)&&(a.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,d){if(!s){const p=he(o,r);return p.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),u&&n?n(p,l):t(p,l,d),s=!0,c._container=l,l.__vue_app__=c,Kr(p.component)||p.component.proxy}},unmount(){s&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=so;so=c;try{return l()}finally{so=u}}};return c}}let so=null;function mr(t,n){if(Ne){let e=Ne.provides;const o=Ne.parent&&Ne.parent.provides;o===e&&(e=Ne.provides=Object.create(o)),e[t]=n}}function $n(t,n,e=!1){const o=Ne||je;if(o||so){const r=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:so._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return e&&Y(n)?n.call(o&&o.proxy):n}}const Al=Object.create(null),Ei=()=>Object.create(Al),Bl=t=>Object.getPrototypeOf(t)===Al;function kp(t,n,e,o=!1){const r={},i=Ei();t.propsDefaults=Object.create(null),Ll(t,n,r,i);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);e?t.props=o?r:sl(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function wp(t,n,e,o){const{props:r,attrs:i,vnode:{patchFlag:a}}=t,s=pe(r),[c]=t.propsOptions;let l=!1;if((o||a>0)&&!(a&16)){if(a&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(Rr(t.emitsOptions,p))continue;const f=n[p];if(c)if(ue(i,p))f!==i[p]&&(i[p]=f,l=!0);else{const g=Pn(p);r[g]=Ti(c,s,g,f,t,!1)}else f!==i[p]&&(i[p]=f,l=!0)}}}else{Ll(t,n,r,i)&&(l=!0);let u;for(const d in s)(!n||!ue(n,d)&&((u=xt(d))===d||!ue(n,u)))&&(c?e&&(e[d]!==void 0||e[u]!==void 0)&&(r[d]=Ti(c,s,d,void 0,t,!0)):delete r[d]);if(i!==s)for(const d in i)(!n||!ue(n,d))&&(delete i[d],l=!0)}l&&On(t.attrs,"set","")}function Ll(t,n,e,o){const[r,i]=t.propsOptions;let a=!1,s;if(n)for(let c in n){if(oo(c))continue;const l=n[c];let u;r&&ue(r,u=Pn(c))?!i||!i.includes(u)?e[u]=l:(s||(s={}))[u]=l:Rr(t.emitsOptions,c)||(!(c in o)||l!==o[c])&&(o[c]=l,a=!0)}if(i){const c=pe(e),l=s||Se;for(let u=0;u<i.length;u++){const d=i[u];e[d]=Ti(r,c,d,l[d],t,!ue(l,d))}}return a}function Ti(t,n,e,o,r,i){const a=t[e];if(a!=null){const s=ue(a,"default");if(s&&o===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&Y(c)){const{propsDefaults:l}=r;if(e in l)o=l[e];else{const u=Ko(r);o=l[e]=c.call(null,n),u()}}else o=c}a[0]&&(i&&!s?o=!1:a[1]&&(o===""||o===xt(e))&&(o=!0))}return o}function jl(t,n,e=!1){const o=n.propsCache,r=o.get(t);if(r)return r;const i=t.props,a={},s=[];let c=!1;if(!Y(t)){const u=d=>{c=!0;const[p,f]=jl(d,n,!0);Re(a,p),f&&s.push(...f)};!e&&n.mixins.length&&n.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return xe(t)&&o.set(t,jt),jt;if(H(i))for(let u=0;u<i.length;u++){const d=Pn(i[u]);as(d)&&(a[d]=Se)}else if(i)for(const u in i){const d=Pn(u);if(as(d)){const p=i[u],f=a[d]=H(p)||Y(p)?{type:p}:Re({},p);if(f){const g=ls(Boolean,f.type),v=ls(String,f.type);f[0]=g>-1,f[1]=v<0||g<v,(g>-1||ue(f,"default"))&&s.push(d)}}}const l=[a,s];return xe(t)&&o.set(t,l),l}function as(t){return t[0]!=="$"&&!oo(t)}function ss(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function cs(t,n){return ss(t)===ss(n)}function ls(t,n){return H(n)?n.findIndex(e=>cs(e,t)):Y(n)&&cs(n,t)?0:-1}const Rl=t=>t[0]==="_"||t==="$stable",Ca=t=>H(t)?t.map(Sn):[Sn(t)],xp=(t,n,e)=>{if(n._n)return n;const o=Ye((...r)=>Ca(n(...r)),e);return o._c=!1,o},Fl=(t,n,e)=>{const o=t._ctx;for(const r in t){if(Rl(r))continue;const i=t[r];if(Y(i))n[r]=xp(r,i,o);else if(i!=null){const a=Ca(i);n[r]=()=>a}}},Ml=(t,n)=>{const e=Ca(n);t.slots.default=()=>e},Cp=(t,n)=>{if(t.vnode.shapeFlag&32){const e=n._;e?(t.slots=pe(n),Hc(t.slots,"_",e)):Fl(n,t.slots=Ei())}else t.slots=Ei(),n&&Ml(t,n)},_p=(t,n,e)=>{const{vnode:o,slots:r}=t;let i=!0,a=Se;if(o.shapeFlag&32){const s=n._;s?e&&s===1?i=!1:(Re(r,n),!e&&s===1&&delete r._):(i=!n.$stable,Fl(n,r)),a=n}else n&&(Ml(t,n),a={default:1});if(i)for(const s in r)!Rl(s)&&a[s]==null&&delete r[s]};function Oi(t,n,e,o,r=!1){if(H(t)){t.forEach((p,f)=>Oi(p,n&&(H(n)?n[f]:n),e,o,r));return}if(io(o)&&!r)return;const i=o.shapeFlag&4?Kr(o.component)||o.component.proxy:o.el,a=r?null:i,{i:s,r:c}=t,l=n&&n.r,u=s.refs===Se?s.refs={}:s.refs,d=s.setupState;if(l!=null&&l!==c&&(Ae(l)?(u[l]=null,ue(d,l)&&(d[l]=null)):Te(l)&&(l.value=null)),Y(c))Jn(c,s,12,[a,u]);else{const p=Ae(c),f=Te(c);if(p||f){const g=()=>{if(t.f){const v=p?ue(d,c)?d[c]:u[c]:c.value;r?H(v)&&ra(v,i):H(v)?v.includes(i)||v.push(i):p?(u[c]=[i],ue(d,c)&&(d[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=a,ue(d,c)&&(d[c]=a)):f&&(c.value=a,t.k&&(u[t.k]=a))};a?(g.id=-1,Ze(g,e)):g()}}}const Ze=Zd;function Sp(t){return Ip(t)}function Ip(t,n){const e=qc();e.__VUE__=!0;const{insert:o,remove:r,patchProp:i,createElement:a,createText:s,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:p,setScopeId:f=un,insertStaticContent:g}=t,v=(h,m,k,I=null,x=null,T=null,R=void 0,E=null,A=!!m.dynamicChildren)=>{if(h===m)return;h&&!dt(h,m)&&(I=_(h),Je(h,x,T,!0),h=null),m.patchFlag===-2&&(A=!1,m.dynamicChildren=null);const{type:P,ref:z,shapeFlag:G}=m;switch(P){case Vr:b(h,m,k,I);break;case pn:y(h,m,k,I);break;case gr:h==null&&w(m,k,I,R);break;case Oe:V(h,m,k,I,x,T,R,E,A);break;default:G&1?W(h,m,k,I,x,T,R,E,A):G&6?se(h,m,k,I,x,T,R,E,A):(G&64||G&128)&&P.process(h,m,k,I,x,T,R,E,A,U)}z!=null&&x&&Oi(z,h&&h.ref,T,m||h,!m)},b=(h,m,k,I)=>{if(h==null)o(m.el=s(m.children),k,I);else{const x=m.el=h.el;m.children!==h.children&&l(x,m.children)}},y=(h,m,k,I)=>{h==null?o(m.el=c(m.children||""),k,I):m.el=h.el},w=(h,m,k,I)=>{[h.el,h.anchor]=g(h.children,m,k,I,h.el,h.anchor)},$=({el:h,anchor:m},k,I)=>{let x;for(;h&&h!==m;)x=p(h),o(h,k,I),h=x;o(m,k,I)},O=({el:h,anchor:m})=>{let k;for(;h&&h!==m;)k=p(h),r(h),h=k;r(m)},W=(h,m,k,I,x,T,R,E,A)=>{m.type==="svg"?R="svg":m.type==="math"&&(R="mathml"),h==null?N(m,k,I,x,T,R,E,A):ee(h,m,x,T,R,E,A)},N=(h,m,k,I,x,T,R,E)=>{let A,P;const{props:z,shapeFlag:G,transition:q,dirs:Z}=h;if(A=h.el=a(h.type,T,z&&z.is,z),G&8?u(A,h.children):G&16&&D(h.children,A,null,I,x,oi(h,T),R,E),Z&&tt(h,null,I,"created"),Q(A,h,h.scopeId,R,I),z){for(const ke in z)ke!=="value"&&!oo(ke)&&i(A,ke,null,z[ke],T,h.children,I,x,Ue);"value"in z&&i(A,"value",null,z.value,T),(P=z.onVnodeBeforeMount)&&_n(P,I,h)}Z&&tt(h,null,I,"beforeMount");const ie=$p(x,q);ie&&q.beforeEnter(A),o(A,m,k),((P=z&&z.onVnodeMounted)||ie||Z)&&Ze(()=>{P&&_n(P,I,h),ie&&q.enter(A),Z&&tt(h,null,I,"mounted")},x)},Q=(h,m,k,I,x)=>{if(k&&f(h,k),I)for(let T=0;T<I.length;T++)f(h,I[T]);if(x){let T=x.subTree;if(m===T){const R=x.vnode;Q(h,R,R.scopeId,R.slotScopeIds,x.parent)}}},D=(h,m,k,I,x,T,R,E,A=0)=>{for(let P=A;P<h.length;P++){const z=h[P]=E?Un(h[P]):Sn(h[P]);v(null,z,m,k,I,x,T,R,E)}},ee=(h,m,k,I,x,T,R)=>{const E=m.el=h.el;let{patchFlag:A,dynamicChildren:P,dirs:z}=m;A|=h.patchFlag&16;const G=h.props||Se,q=m.props||Se;let Z;if(k&&ot(k,!1),(Z=q.onVnodeBeforeUpdate)&&_n(Z,k,m,h),z&&tt(m,h,k,"beforeUpdate"),k&&ot(k,!0),P?ne(h.dynamicChildren,P,E,k,I,oi(m,x),T):R||ce(h,m,E,null,k,I,oi(m,x),T,!1),A>0){if(A&16)be(E,m,G,q,k,I,x);else if(A&2&&G.class!==q.class&&i(E,"class",null,q.class,x),A&4&&i(E,"style",G.style,q.style,x),A&8){const ie=m.dynamicProps;for(let ke=0;ke<ie.length;ke++){const Pe=ie[ke],Me=G[Pe],mn=q[Pe];(mn!==Me||Pe==="value")&&i(E,Pe,Me,mn,x,h.children,k,I,Ue)}}A&1&&h.children!==m.children&&u(E,m.children)}else!R&&P==null&&be(E,m,G,q,k,I,x);((Z=q.onVnodeUpdated)||z)&&Ze(()=>{Z&&_n(Z,k,m,h),z&&tt(m,h,k,"updated")},I)},ne=(h,m,k,I,x,T,R)=>{for(let E=0;E<m.length;E++){const A=h[E],P=m[E],z=A.el&&(A.type===Oe||!dt(A,P)||A.shapeFlag&70)?d(A.el):k;v(A,P,z,null,I,x,T,R,!0)}},be=(h,m,k,I,x,T,R)=>{if(k!==I){if(k!==Se)for(const E in k)!oo(E)&&!(E in I)&&i(h,E,k[E],null,R,m.children,x,T,Ue);for(const E in I){if(oo(E))continue;const A=I[E],P=k[E];A!==P&&E!=="value"&&i(h,E,P,A,R,m.children,x,T,Ue)}"value"in I&&i(h,"value",k.value,I.value,R)}},V=(h,m,k,I,x,T,R,E,A)=>{const P=m.el=h?h.el:s(""),z=m.anchor=h?h.anchor:s("");let{patchFlag:G,dynamicChildren:q,slotScopeIds:Z}=m;Z&&(E=E?E.concat(Z):Z),h==null?(o(P,k,I),o(z,k,I),D(m.children||[],k,z,x,T,R,E,A)):G>0&&G&64&&q&&h.dynamicChildren?(ne(h.dynamicChildren,q,k,x,T,R,E),(m.key!=null||x&&m===x.subTree)&&_a(h,m,!0)):ce(h,m,k,z,x,T,R,E,A)},se=(h,m,k,I,x,T,R,E,A)=>{m.slotScopeIds=E,h==null?m.shapeFlag&512?x.ctx.activate(m,k,I,R,A):Fe(m,k,I,x,T,R,A):en(h,m,A)},Fe=(h,m,k,I,x,T,R)=>{const E=h.component=Mp(h,I,x);if(zr(h)&&(E.ctx.renderer=U),zp(E),E.asyncDep){if(x&&x.registerDep(E,ye),!h.el){const A=E.subTree=he(pn);y(null,A,m,k)}}else ye(E,h,m,k,x,T,R)},en=(h,m,k)=>{const I=m.component=h.component;if(qd(h,m,k))if(I.asyncDep&&!I.asyncResolved){fe(I,m,k);return}else I.next=m,Dd(I.update),I.effect.dirty=!0,I.update();else m.el=h.el,I.vnode=m},ye=(h,m,k,I,x,T,R)=>{const E=()=>{if(h.isMounted){let{next:z,bu:G,u:q,parent:Z,vnode:ie}=h;{const $t=zl(h);if($t){z&&(z.el=ie.el,fe(h,z,R)),$t.asyncDep.then(()=>{h.isUnmounted||E()});return}}let ke=z,Pe;ot(h,!1),z?(z.el=ie.el,fe(h,z,R)):z=ie,G&&fr(G),(Pe=z.props&&z.props.onVnodeBeforeUpdate)&&_n(Pe,Z,z,ie),ot(h,!0);const Me=ei(h),mn=h.subTree;h.subTree=Me,v(mn,Me,d(mn.el),_(mn),h,x,T),z.el=Me.el,ke===null&&Wd(h,Me.el),q&&Ze(q,x),(Pe=z.props&&z.props.onVnodeUpdated)&&Ze(()=>_n(Pe,Z,z,ie),x)}else{let z;const{el:G,props:q}=m,{bm:Z,m:ie,parent:ke}=h,Pe=io(m);if(ot(h,!1),Z&&fr(Z),!Pe&&(z=q&&q.onVnodeBeforeMount)&&_n(z,ke,m),ot(h,!0),G&&$e){const Me=()=>{h.subTree=ei(h),$e(G,h.subTree,h,x,null)};Pe?m.type.__asyncLoader().then(()=>!h.isUnmounted&&Me()):Me()}else{const Me=h.subTree=ei(h);v(null,Me,k,I,h,x,T),m.el=Me.el}if(ie&&Ze(ie,x),!Pe&&(z=q&&q.onVnodeMounted)){const Me=m;Ze(()=>_n(z,ke,Me),x)}(m.shapeFlag&256||ke&&io(ke.vnode)&&ke.vnode.shapeFlag&256)&&h.a&&Ze(h.a,x),h.isMounted=!0,m=k=I=null}},A=h.effect=new sa(E,un,()=>ga(P),h.scope),P=h.update=()=>{A.dirty&&A.run()};P.id=h.uid,ot(h,!0),P()},fe=(h,m,k)=>{m.component=h;const I=h.vnode.props;h.vnode=m,h.next=null,wp(h,m.props,I,k),_p(h,m.children,k),et(),Xa(h),nt()},ce=(h,m,k,I,x,T,R,E,A=!1)=>{const P=h&&h.children,z=h?h.shapeFlag:0,G=m.children,{patchFlag:q,shapeFlag:Z}=m;if(q>0){if(q&128){wn(P,G,k,I,x,T,R,E,A);return}else if(q&256){hn(P,G,k,I,x,T,R,E,A);return}}Z&8?(z&16&&Ue(P,x,T),G!==P&&u(k,G)):z&16?Z&16?wn(P,G,k,I,x,T,R,E,A):Ue(P,x,T,!0):(z&8&&u(k,""),Z&16&&D(G,k,I,x,T,R,E,A))},hn=(h,m,k,I,x,T,R,E,A)=>{h=h||jt,m=m||jt;const P=h.length,z=m.length,G=Math.min(P,z);let q;for(q=0;q<G;q++){const Z=m[q]=A?Un(m[q]):Sn(m[q]);v(h[q],Z,k,null,x,T,R,E,A)}P>z?Ue(h,x,T,!0,!1,G):D(m,k,I,x,T,R,E,A,G)},wn=(h,m,k,I,x,T,R,E,A)=>{let P=0;const z=m.length;let G=h.length-1,q=z-1;for(;P<=G&&P<=q;){const Z=h[P],ie=m[P]=A?Un(m[P]):Sn(m[P]);if(dt(Z,ie))v(Z,ie,k,null,x,T,R,E,A);else break;P++}for(;P<=G&&P<=q;){const Z=h[G],ie=m[q]=A?Un(m[q]):Sn(m[q]);if(dt(Z,ie))v(Z,ie,k,null,x,T,R,E,A);else break;G--,q--}if(P>G){if(P<=q){const Z=q+1,ie=Z<z?m[Z].el:I;for(;P<=q;)v(null,m[P]=A?Un(m[P]):Sn(m[P]),k,ie,x,T,R,E,A),P++}}else if(P>q)for(;P<=G;)Je(h[P],x,T,!0),P++;else{const Z=P,ie=P,ke=new Map;for(P=ie;P<=q;P++){const nn=m[P]=A?Un(m[P]):Sn(m[P]);nn.key!=null&&ke.set(nn.key,P)}let Pe,Me=0;const mn=q-ie+1;let $t=!1,Da=0;const Zt=new Array(mn);for(P=0;P<mn;P++)Zt[P]=0;for(P=Z;P<=G;P++){const nn=h[P];if(Me>=mn){Je(nn,x,T,!0);continue}let Cn;if(nn.key!=null)Cn=ke.get(nn.key);else for(Pe=ie;Pe<=q;Pe++)if(Zt[Pe-ie]===0&&dt(nn,m[Pe])){Cn=Pe;break}Cn===void 0?Je(nn,x,T,!0):(Zt[Cn-ie]=P+1,Cn>=Da?Da=Cn:$t=!0,v(nn,m[Cn],k,null,x,T,R,E,A),Me++)}const Na=$t?Pp(Zt):jt;for(Pe=Na.length-1,P=mn-1;P>=0;P--){const nn=ie+P,Cn=m[nn],Va=nn+1<z?m[nn+1].el:I;Zt[P]===0?v(null,Cn,k,Va,x,T,R,E,A):$t&&(Pe<0||P!==Na[Pe]?xn(Cn,k,Va,2):Pe--)}}},xn=(h,m,k,I,x=null)=>{const{el:T,type:R,transition:E,children:A,shapeFlag:P}=h;if(P&6){xn(h.component.subTree,m,k,I);return}if(P&128){h.suspense.move(m,k,I);return}if(P&64){R.move(h,m,k,U);return}if(R===Oe){o(T,m,k);for(let G=0;G<A.length;G++)xn(A[G],m,k,I);o(h.anchor,m,k);return}if(R===gr){$(h,m,k);return}if(I!==2&&P&1&&E)if(I===0)E.beforeEnter(T),o(T,m,k),Ze(()=>E.enter(T),x);else{const{leave:G,delayLeave:q,afterLeave:Z}=E,ie=()=>o(T,m,k),ke=()=>{G(T,()=>{ie(),Z&&Z()})};q?q(T,ie,ke):ke()}else o(T,m,k)},Je=(h,m,k,I=!1,x=!1)=>{const{type:T,props:R,ref:E,children:A,dynamicChildren:P,shapeFlag:z,patchFlag:G,dirs:q}=h;if(E!=null&&Oi(E,null,k,h,!0),z&256){m.ctx.deactivate(h);return}const Z=z&1&&q,ie=!io(h);let ke;if(ie&&(ke=R&&R.onVnodeBeforeUnmount)&&_n(ke,m,h),z&6)Wo(h.component,k,I);else{if(z&128){h.suspense.unmount(k,I);return}Z&&tt(h,null,m,"beforeUnmount"),z&64?h.type.remove(h,m,k,x,U,I):P&&(T!==Oe||G>0&&G&64)?Ue(P,m,k,!1,!0):(T===Oe&&G&384||!x&&z&16)&&Ue(A,m,k),I&&St(h)}(ie&&(ke=R&&R.onVnodeUnmounted)||Z)&&Ze(()=>{ke&&_n(ke,m,h),Z&&tt(h,null,m,"unmounted")},k)},St=h=>{const{type:m,el:k,anchor:I,transition:x}=h;if(m===Oe){It(k,I);return}if(m===gr){O(h);return}const T=()=>{r(k),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(h.shapeFlag&1&&x&&!x.persisted){const{leave:R,delayLeave:E}=x,A=()=>R(k,T);E?E(h.el,T,A):A()}else T()},It=(h,m)=>{let k;for(;h!==m;)k=p(h),r(h),h=k;r(m)},Wo=(h,m,k)=>{const{bum:I,scope:x,update:T,subTree:R,um:E}=h;I&&fr(I),x.stop(),T&&(T.active=!1,Je(R,h,m,k)),E&&Ze(E,m),Ze(()=>{h.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Ue=(h,m,k,I=!1,x=!1,T=0)=>{for(let R=T;R<h.length;R++)Je(h[R],m,k,I,x)},_=h=>h.shapeFlag&6?_(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el);let M=!1;const j=(h,m,k)=>{h==null?m._vnode&&Je(m._vnode,null,null,!0):v(m._vnode||null,h,m,null,null,null,k),M||(M=!0,Xa(),gl(),M=!1),m._vnode=h},U={p:v,um:Je,m:xn,r:St,mt:Fe,mc:D,pc:ce,pbc:ne,n:_,o:t};let me,$e;return n&&([me,$e]=n(U)),{render:j,hydrate:me,createApp:yp(j,me)}}function oi({type:t,props:n},e){return e==="svg"&&t==="foreignObject"||e==="mathml"&&t==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:e}function ot({effect:t,update:n},e){t.allowRecurse=n.allowRecurse=e}function $p(t,n){return(!t||t&&!t.pendingBranch)&&n&&!n.persisted}function _a(t,n,e=!1){const o=t.children,r=n.children;if(H(o)&&H(r))for(let i=0;i<o.length;i++){const a=o[i];let s=r[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=r[i]=Un(r[i]),s.el=a.el),e||_a(a,s)),s.type===Vr&&(s.el=a.el)}}function Pp(t){const n=t.slice(),e=[0];let o,r,i,a,s;const c=t.length;for(o=0;o<c;o++){const l=t[o];if(l!==0){if(r=e[e.length-1],t[r]<l){n[o]=r,e.push(o);continue}for(i=0,a=e.length-1;i<a;)s=i+a>>1,t[e[s]]<l?i=s+1:a=s;l<t[e[i]]&&(i>0&&(n[o]=e[i-1]),e[i]=o)}}for(i=e.length,a=e[i-1];i-- >0;)e[i]=a,a=n[a];return e}function zl(t){const n=t.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:zl(n)}const Ep=t=>t.__isTeleport,co=t=>t&&(t.disabled||t.disabled===""),us=t=>typeof SVGElement<"u"&&t instanceof SVGElement,ds=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Ai=(t,n)=>{const e=t&&t.to;return Ae(e)?n?n(e):null:e},Tp={name:"Teleport",__isTeleport:!0,process(t,n,e,o,r,i,a,s,c,l){const{mc:u,pc:d,pbc:p,o:{insert:f,querySelector:g,createText:v,createComment:b}}=l,y=co(n.props);let{shapeFlag:w,children:$,dynamicChildren:O}=n;if(t==null){const W=n.el=v(""),N=n.anchor=v("");f(W,e,o),f(N,e,o);const Q=n.target=Ai(n.props,g),D=n.targetAnchor=v("");Q&&(f(D,Q),a==="svg"||us(Q)?a="svg":(a==="mathml"||ds(Q))&&(a="mathml"));const ee=(ne,be)=>{w&16&&u($,ne,be,r,i,a,s,c)};y?ee(e,N):Q&&ee(Q,D)}else{n.el=t.el;const W=n.anchor=t.anchor,N=n.target=t.target,Q=n.targetAnchor=t.targetAnchor,D=co(t.props),ee=D?e:N,ne=D?W:Q;if(a==="svg"||us(N)?a="svg":(a==="mathml"||ds(N))&&(a="mathml"),O?(p(t.dynamicChildren,O,ee,r,i,a,s),_a(t,n,!0)):c||d(t,n,ee,ne,r,i,a,s,!1),y)D?n.props&&t.props&&n.props.to!==t.props.to&&(n.props.to=t.props.to):nr(n,e,W,l,1);else if((n.props&&n.props.to)!==(t.props&&t.props.to)){const be=n.target=Ai(n.props,g);be&&nr(n,be,null,l,0)}else D&&nr(n,N,Q,l,1)}Dl(n)},remove(t,n,e,o,{um:r,o:{remove:i}},a){const{shapeFlag:s,children:c,anchor:l,targetAnchor:u,target:d,props:p}=t;if(d&&i(u),a&&i(l),s&16){const f=a||!co(p);for(let g=0;g<c.length;g++){const v=c[g];r(v,n,e,f,!!v.dynamicChildren)}}},move:nr,hydrate:Op};function nr(t,n,e,{o:{insert:o},m:r},i=2){i===0&&o(t.targetAnchor,n,e);const{el:a,anchor:s,shapeFlag:c,children:l,props:u}=t,d=i===2;if(d&&o(a,n,e),(!d||co(u))&&c&16)for(let p=0;p<l.length;p++)r(l[p],n,e,2);d&&o(s,n,e)}function Op(t,n,e,o,r,i,{o:{nextSibling:a,parentNode:s,querySelector:c}},l){const u=n.target=Ai(n.props,c);if(u){const d=u._lpa||u.firstChild;if(n.shapeFlag&16)if(co(n.props))n.anchor=l(a(t),n,s(t),e,o,r,i),n.targetAnchor=d;else{n.anchor=a(t);let p=d;for(;p;)if(p=a(p),p&&p.nodeType===8&&p.data==="teleport anchor"){n.targetAnchor=p,u._lpa=n.targetAnchor&&a(n.targetAnchor);break}l(d,n,u,e,o,r,i)}Dl(n)}return n.anchor&&a(n.anchor)}const Ap=Tp;function Dl(t){const n=t.ctx;if(n&&n.ut){let e=t.children[0].el;for(;e&&e!==t.targetAnchor;)e.nodeType===1&&e.setAttribute("data-v-owner",n.uid),e=e.nextSibling;n.ut()}}const Oe=Symbol.for("v-fgt"),Vr=Symbol.for("v-txt"),pn=Symbol.for("v-cmt"),gr=Symbol.for("v-stc"),lo=[];let yn=null;function C(t=!1){lo.push(yn=t?null:[])}function Bp(){lo.pop(),yn=lo[lo.length-1]||null}let _o=1;function ps(t){_o+=t}function Nl(t){return t.dynamicChildren=_o>0?yn||jt:null,Bp(),_o>0&&yn&&yn.push(t),t}function B(t,n,e,o,r,i){return Nl(F(t,n,e,o,r,i,!0))}function X(t,n,e,o,r){return Nl(he(t,n,e,o,r,!0))}function $r(t){return t?t.__v_isVNode===!0:!1}function dt(t,n){return t.type===n.type&&t.key===n.key}const Vl=({key:t})=>t??null,br=({ref:t,ref_key:n,ref_for:e})=>(typeof t=="number"&&(t=""+t),t!=null?Ae(t)||Te(t)||Y(t)?{i:je,r:t,k:n,f:!!e}:t:null);function F(t,n=null,e=null,o=0,r=null,i=t===Oe?0:1,a=!1,s=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&Vl(n),ref:n&&br(n),scopeId:Fr,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:je};return s?(Sa(c,e),i&128&&t.normalize(c)):e&&(c.shapeFlag|=Ae(e)?8:16),_o>0&&!a&&yn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&yn.push(c),c}const he=Lp;function Lp(t,n=null,e=null,o=0,r=null,i=!1){if((!t||t===yl)&&(t=pn),$r(t)){const s=Yn(t,n,!0);return e&&Sa(s,e),_o>0&&!i&&yn&&(s.shapeFlag&6?yn[yn.indexOf(t)]=s:yn.push(s)),s.patchFlag|=-2,s}if(Kp(t)&&(t=t.__vccOpts),n){n=Ul(n);let{class:s,style:c}=n;s&&!Ae(s)&&(n.class=ze(s)),xe(c)&&(cl(c)&&!H(c)&&(c=Re({},c)),n.style=Ct(c))}const a=Ae(t)?1:Jd(t)?128:Ep(t)?64:xe(t)?4:Y(t)?2:0;return F(t,n,e,o,r,a,i,!0)}function Ul(t){return t?cl(t)||Bl(t)?Re({},t):t:null}function Yn(t,n,e=!1){const{props:o,ref:r,patchFlag:i,children:a}=t,s=n?S(o||{},n):o;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&Vl(s),ref:n&&n.ref?e&&r?H(r)?r.concat(br(n)):[r,br(n)]:br(n):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==Oe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Yn(t.ssContent),ssFallback:t.ssFallback&&Yn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function wt(t=" ",n=0){return he(Vr,null,t,n)}function jp(t,n){const e=he(gr,null,t);return e.staticCount=n,e}function re(t="",n=!1){return n?(C(),X(pn,null,t)):he(pn,null,t)}function Sn(t){return t==null||typeof t=="boolean"?he(pn):H(t)?he(Oe,null,t.slice()):typeof t=="object"?Un(t):he(Vr,null,String(t))}function Un(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Yn(t)}function Sa(t,n){let e=0;const{shapeFlag:o}=t;if(n==null)n=null;else if(H(n))e=16;else if(typeof n=="object")if(o&65){const r=n.default;r&&(r._c&&(r._d=!1),Sa(t,r()),r._c&&(r._d=!0));return}else{e=32;const r=n._;!r&&!Bl(n)?n._ctx=je:r===3&&je&&(je.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else Y(n)?(n={default:n,_ctx:je},e=32):(n=String(n),o&64?(e=16,n=[wt(n)]):e=8);t.children=n,t.shapeFlag|=e}function S(...t){const n={};for(let e=0;e<t.length;e++){const o=t[e];for(const r in o)if(r==="class")n.class!==o.class&&(n.class=ze([n.class,o.class]));else if(r==="style")n.style=Ct([n.style,o.style]);else if(Tr(r)){const i=n[r],a=o[r];a&&i!==a&&!(H(i)&&i.includes(a))&&(n[r]=i?[].concat(i,a):a)}else r!==""&&(n[r]=o[r])}return n}function _n(t,n,e,o=null){dn(t,n,7,[e,o])}const Rp=Ol();let Fp=0;function Mp(t,n,e){const o=t.type,r=(n?n.appContext:t.appContext)||Rp,i={uid:Fp++,vnode:t,type:o,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Jc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jl(o,r),emitsOptions:vl(o,r),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:o.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=n?n.root:i,i.emit=Ud.bind(null,i),t.ce&&t.ce(i),i}let Ne=null;const Kl=()=>Ne||je;let Pr,Bi;{const t=qc(),n=(e,o)=>{let r;return(r=t[e])||(r=t[e]=[]),r.push(o),i=>{r.length>1?r.forEach(a=>a(i)):r[0](i)}};Pr=n("__VUE_INSTANCE_SETTERS__",e=>Ne=e),Bi=n("__VUE_SSR_SETTERS__",e=>Ur=e)}const Ko=t=>{const n=Ne;return Pr(t),t.scope.on(),()=>{t.scope.off(),Pr(n)}},fs=()=>{Ne&&Ne.scope.off(),Pr(null)};function Hl(t){return t.vnode.shapeFlag&4}let Ur=!1;function zp(t,n=!1){n&&Bi(n);const{props:e,children:o}=t.vnode,r=Hl(t);kp(t,e,r,n),Cp(t,o);const i=r?Dp(t,n):void 0;return n&&Bi(!1),i}function Dp(t,n){const e=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,pp);const{setup:o}=e;if(o){const r=t.setupContext=o.length>1?Vp(t):null,i=Ko(t);et();const a=Jn(o,t,0,[t.props,r]);if(nt(),i(),Vc(a)){if(a.then(fs,fs),n)return a.then(s=>{hs(t,s,n)}).catch(s=>{Lr(s,t,0)});t.asyncDep=a}else hs(t,a,n)}else ql(t,n)}function hs(t,n,e){Y(n)?t.type.__ssrInlineRender?t.ssrRender=n:t.render=n:xe(n)&&(t.setupState=fl(n)),ql(t,e)}let ms;function ql(t,n,e){const o=t.type;if(!t.render){if(!n&&ms&&!o.render){const r=o.template||xa(t).template;if(r){const{isCustomElement:i,compilerOptions:a}=t.appContext.config,{delimiters:s,compilerOptions:c}=o,l=Re(Re({isCustomElement:i,delimiters:s},a),c);o.render=ms(r,l)}}t.render=o.render||un}{const r=Ko(t);et();try{fp(t)}finally{nt(),r()}}}const Np={get(t,n){return Xe(t,"get",""),t[n]}};function Vp(t){const n=e=>{t.exposed=e||{}};return{attrs:new Proxy(t.attrs,Np),slots:t.slots,emit:t.emit,expose:n}}function Kr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(fl(ll(t.exposed)),{get(n,e){if(e in n)return n[e];if(e in ao)return ao[e](t)},has(n,e){return e in n||e in ao}}))}function Up(t,n=!0){return Y(t)?t.displayName||t.name:t.name||n&&t.__name}function Kp(t){return Y(t)&&"__vccOpts"in t}const Le=(t,n)=>Od(t,n,Ur);function zt(t,n,e){const o=arguments.length;return o===2?xe(n)&&!H(n)?$r(n)?he(t,null,[n]):he(t,n):he(t,null,n):(o>3?e=Array.prototype.slice.call(arguments,2):o===3&&$r(e)&&(e=[e]),he(t,n,e))}const Hp="3.4.23";/**
* @vue/runtime-dom v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const qp="http://www.w3.org/2000/svg",Wp="http://www.w3.org/1998/Math/MathML",Kn=typeof document<"u"?document:null,gs=Kn&&Kn.createElement("template"),Gp={insert:(t,n,e)=>{n.insertBefore(t,e||null)},remove:t=>{const n=t.parentNode;n&&n.removeChild(t)},createElement:(t,n,e,o)=>{const r=n==="svg"?Kn.createElementNS(qp,t):n==="mathml"?Kn.createElementNS(Wp,t):Kn.createElement(t,e?{is:e}:void 0);return t==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:t=>Kn.createTextNode(t),createComment:t=>Kn.createComment(t),setText:(t,n)=>{t.nodeValue=n},setElementText:(t,n)=>{t.textContent=n},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Kn.querySelector(t),setScopeId(t,n){t.setAttribute(n,"")},insertStaticContent(t,n,e,o,r,i){const a=e?e.previousSibling:n.lastChild;if(r&&(r===i||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),e),!(r===i||!(r=r.nextSibling)););else{gs.innerHTML=o==="svg"?`<svg>${t}</svg>`:o==="mathml"?`<math>${t}</math>`:t;const s=gs.content;if(o==="svg"||o==="mathml"){const c=s.firstChild;for(;c.firstChild;)s.appendChild(c.firstChild);s.removeChild(c)}n.insertBefore(s,e)}return[a?a.nextSibling:n.firstChild,e?e.previousSibling:n.lastChild]}},Rn="transition",Yt="animation",So=Symbol("_vtc"),Gt=(t,{slots:n})=>zt(tp,Jp(t),n);Gt.displayName="Transition";const Wl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Gt.props=Re({},xl,Wl);const rt=(t,n=[])=>{H(t)?t.forEach(e=>e(...n)):t&&t(...n)},bs=t=>t?H(t)?t.some(n=>n.length>1):t.length>1:!1;function Jp(t){const n={};for(const V in t)V in Wl||(n[V]=t[V]);if(t.css===!1)return n;const{name:e="v",type:o,duration:r,enterFromClass:i=`${e}-enter-from`,enterActiveClass:a=`${e}-enter-active`,enterToClass:s=`${e}-enter-to`,appearFromClass:c=i,appearActiveClass:l=a,appearToClass:u=s,leaveFromClass:d=`${e}-leave-from`,leaveActiveClass:p=`${e}-leave-active`,leaveToClass:f=`${e}-leave-to`}=t,g=Zp(r),v=g&&g[0],b=g&&g[1],{onBeforeEnter:y,onEnter:w,onEnterCancelled:$,onLeave:O,onLeaveCancelled:W,onBeforeAppear:N=y,onAppear:Q=w,onAppearCancelled:D=$}=n,ee=(V,se,Fe)=>{it(V,se?u:s),it(V,se?l:a),Fe&&Fe()},ne=(V,se)=>{V._isLeaving=!1,it(V,d),it(V,f),it(V,p),se&&se()},be=V=>(se,Fe)=>{const en=V?Q:w,ye=()=>ee(se,V,Fe);rt(en,[se,ye]),vs(()=>{it(se,V?c:i),Fn(se,V?u:s),bs(en)||ys(se,o,v,ye)})};return Re(n,{onBeforeEnter(V){rt(y,[V]),Fn(V,i),Fn(V,a)},onBeforeAppear(V){rt(N,[V]),Fn(V,c),Fn(V,l)},onEnter:be(!1),onAppear:be(!0),onLeave(V,se){V._isLeaving=!0;const Fe=()=>ne(V,se);Fn(V,d),Qp(),Fn(V,p),vs(()=>{V._isLeaving&&(it(V,d),Fn(V,f),bs(O)||ys(V,o,b,Fe))}),rt(O,[V,Fe])},onEnterCancelled(V){ee(V,!1),rt($,[V])},onAppearCancelled(V){ee(V,!0),rt(D,[V])},onLeaveCancelled(V){ne(V),rt(W,[V])}})}function Zp(t){if(t==null)return null;if(xe(t))return[ri(t.enter),ri(t.leave)];{const n=ri(t);return[n,n]}}function ri(t){return Qu(t)}function Fn(t,n){n.split(/\s+/).forEach(e=>e&&t.classList.add(e)),(t[So]||(t[So]=new Set)).add(n)}function it(t,n){n.split(/\s+/).forEach(o=>o&&t.classList.remove(o));const e=t[So];e&&(e.delete(n),e.size||(t[So]=void 0))}function vs(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Yp=0;function ys(t,n,e,o){const r=t._endId=++Yp,i=()=>{r===t._endId&&o()};if(e)return setTimeout(i,e);const{type:a,timeout:s,propCount:c}=Xp(t,n);if(!a)return o();const l=a+"end";let u=0;const d=()=>{t.removeEventListener(l,p),i()},p=f=>{f.target===t&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},s+1),t.addEventListener(l,p)}function Xp(t,n){const e=window.getComputedStyle(t),o=g=>(e[g]||"").split(", "),r=o(`${Rn}Delay`),i=o(`${Rn}Duration`),a=ks(r,i),s=o(`${Yt}Delay`),c=o(`${Yt}Duration`),l=ks(s,c);let u=null,d=0,p=0;n===Rn?a>0&&(u=Rn,d=a,p=i.length):n===Yt?l>0&&(u=Yt,d=l,p=c.length):(d=Math.max(a,l),u=d>0?a>l?Rn:Yt:null,p=u?u===Rn?i.length:c.length:0);const f=u===Rn&&/\b(transform|all)(,|$)/.test(o(`${Rn}Property`).toString());return{type:u,timeout:d,propCount:p,hasTransform:f}}function ks(t,n){for(;t.length<n.length;)t=t.concat(t);return Math.max(...n.map((e,o)=>ws(e)+ws(t[o])))}function ws(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Qp(){return document.body.offsetHeight}function ef(t,n,e){const o=t[So];o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?t.removeAttribute("class"):e?t.setAttribute("class",n):t.className=n}const Er=Symbol("_vod"),Gl=Symbol("_vsh"),nf={beforeMount(t,{value:n},{transition:e}){t[Er]=t.style.display==="none"?"":t.style.display,e&&n?e.beforeEnter(t):Xt(t,n)},mounted(t,{value:n},{transition:e}){e&&n&&e.enter(t)},updated(t,{value:n,oldValue:e},{transition:o}){!n!=!e&&(o?n?(o.beforeEnter(t),Xt(t,!0),o.enter(t)):o.leave(t,()=>{Xt(t,!1)}):Xt(t,n))},beforeUnmount(t,{value:n}){Xt(t,n)}};function Xt(t,n){t.style.display=n?t[Er]:"none",t[Gl]=!n}const tf=Symbol(""),of=/(^|;)\s*display\s*:/;function rf(t,n,e){const o=t.style,r=Ae(e);let i=!1;if(e&&!r){if(n)if(Ae(n))for(const a of n.split(";")){const s=a.slice(0,a.indexOf(":")).trim();e[s]==null&&vr(o,s,"")}else for(const a in n)e[a]==null&&vr(o,a,"");for(const a in e)a==="display"&&(i=!0),vr(o,a,e[a])}else if(r){if(n!==e){const a=o[tf];a&&(e+=";"+a),o.cssText=e,i=of.test(e)}}else n&&t.removeAttribute("style");Er in t&&(t[Er]=i?o.display:"",t[Gl]&&(o.display="none"))}const xs=/\s*!important$/;function vr(t,n,e){if(H(e))e.forEach(o=>vr(t,n,o));else if(e==null&&(e=""),n.startsWith("--"))t.setProperty(n,e);else{const o=af(t,n);xs.test(e)?t.setProperty(xt(o),e.replace(xs,""),"important"):t[o]=e}}const Cs=["Webkit","Moz","ms"],ii={};function af(t,n){const e=ii[n];if(e)return e;let o=Pn(n);if(o!=="filter"&&o in t)return ii[n]=o;o=Ar(o);for(let r=0;r<Cs.length;r++){const i=Cs[r]+o;if(i in t)return ii[n]=i}return n}const _s="http://www.w3.org/1999/xlink";function sf(t,n,e,o,r){if(o&&n.startsWith("xlink:"))e==null?t.removeAttributeNS(_s,n.slice(6,n.length)):t.setAttributeNS(_s,n,e);else{const i=ad(n);e==null||i&&!Wc(e)?t.removeAttribute(n):t.setAttribute(n,i?"":e)}}function cf(t,n,e,o,r,i,a){if(n==="innerHTML"||n==="textContent"){o&&a(o,r,i),t[n]=e??"";return}const s=t.tagName;if(n==="value"&&s!=="PROGRESS"&&!s.includes("-")){const l=s==="OPTION"?t.getAttribute("value")||"":t.value,u=e??"";(l!==u||!("_value"in t))&&(t.value=u),e==null&&t.removeAttribute(n),t._value=e;return}let c=!1;if(e===""||e==null){const l=typeof t[n];l==="boolean"?e=Wc(e):e==null&&l==="string"?(e="",c=!0):l==="number"&&(e=0,c=!0)}try{t[n]=e}catch{}c&&t.removeAttribute(n)}function Tn(t,n,e,o){t.addEventListener(n,e,o)}function lf(t,n,e,o){t.removeEventListener(n,e,o)}const Ss=Symbol("_vei");function uf(t,n,e,o,r=null){const i=t[Ss]||(t[Ss]={}),a=i[n];if(o&&a)a.value=o;else{const[s,c]=df(n);if(o){const l=i[n]=hf(o,r);Tn(t,s,l,c)}else a&&(lf(t,s,a,c),i[n]=void 0)}}const Is=/(?:Once|Passive|Capture)$/;function df(t){let n;if(Is.test(t)){n={};let o;for(;o=t.match(Is);)t=t.slice(0,t.length-o[0].length),n[o[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):xt(t.slice(2)),n]}let ai=0;const pf=Promise.resolve(),ff=()=>ai||(pf.then(()=>ai=0),ai=Date.now());function hf(t,n){const e=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=e.attached)return;dn(mf(o,e.value),n,5,[o])};return e.value=t,e.attached=ff(),e}function mf(t,n){if(H(n)){const e=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{e.call(t),t._stopped=!0},n.map(o=>r=>!r._stopped&&o&&o(r))}else return n}const $s=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,gf=(t,n,e,o,r,i,a,s,c)=>{const l=r==="svg";n==="class"?ef(t,o,l):n==="style"?rf(t,e,o):Tr(n)?oa(n)||uf(t,n,e,o,a):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):bf(t,n,o,l))?cf(t,n,o,i,a,s,c):(n==="true-value"?t._trueValue=o:n==="false-value"&&(t._falseValue=o),sf(t,n,o,l))};function bf(t,n,e,o){if(o)return!!(n==="innerHTML"||n==="textContent"||n in t&&$s(n)&&Y(e));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&t.tagName==="INPUT"||n==="type"&&t.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return $s(n)&&Ae(e)?!1:n in t}const Xn=t=>{const n=t.props["onUpdate:modelValue"]||!1;return H(n)?e=>fr(n,e):n};function vf(t){t.target.composing=!0}function Ps(t){const n=t.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const fn=Symbol("_assign"),mt={created(t,{modifiers:{lazy:n,trim:e,number:o}},r){t[fn]=Xn(r);const i=o||r.props&&r.props.type==="number";Tn(t,n?"change":"input",a=>{if(a.target.composing)return;let s=t.value;e&&(s=s.trim()),i&&(s=xr(s)),t[fn](s)}),e&&Tn(t,"change",()=>{t.value=t.value.trim()}),n||(Tn(t,"compositionstart",vf),Tn(t,"compositionend",Ps),Tn(t,"change",Ps))},mounted(t,{value:n}){t.value=n??""},beforeUpdate(t,{value:n,modifiers:{lazy:e,trim:o,number:r}},i){if(t[fn]=Xn(i),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?xr(t.value):t.value,s=n??"";a!==s&&(document.activeElement===t&&t.type!=="range"&&(e||o&&t.value.trim()===s)||(t.value=s))}},yf={deep:!0,created(t,n,e){t[fn]=Xn(e),Tn(t,"change",()=>{const o=t._modelValue,r=Vt(t),i=t.checked,a=t[fn];if(H(o)){const s=aa(o,r),c=s!==-1;if(i&&!c)a(o.concat(r));else if(!i&&c){const l=[...o];l.splice(s,1),a(l)}}else if(Wt(o)){const s=new Set(o);i?s.add(r):s.delete(r),a(s)}else a(Jl(t,i))})},mounted:Es,beforeUpdate(t,n,e){t[fn]=Xn(e),Es(t,n,e)}};function Es(t,{value:n,oldValue:e},o){t._modelValue=n,H(n)?t.checked=aa(n,o.props.value)>-1:Wt(n)?t.checked=n.has(o.props.value):n!==e&&(t.checked=yt(n,Jl(t,!0)))}const kf={created(t,{value:n},e){t.checked=yt(n,e.props.value),t[fn]=Xn(e),Tn(t,"change",()=>{t[fn](Vt(t))})},beforeUpdate(t,{value:n,oldValue:e},o){t[fn]=Xn(o),n!==e&&(t.checked=yt(n,o.props.value))}},wf={deep:!0,created(t,{value:n,modifiers:{number:e}},o){const r=Wt(n);Tn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,a=>a.selected).map(a=>e?xr(Vt(a)):Vt(a));t[fn](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,jr(()=>{t._assigning=!1})}),t[fn]=Xn(o)},mounted(t,{value:n,modifiers:{number:e}}){Ts(t,n)},beforeUpdate(t,n,e){t[fn]=Xn(e)},updated(t,{value:n,modifiers:{number:e}}){t._assigning||Ts(t,n)}};function Ts(t,n,e){const o=t.multiple,r=H(n);if(!(o&&!r&&!Wt(n))){for(let i=0,a=t.options.length;i<a;i++){const s=t.options[i],c=Vt(s);if(o)if(r){const l=typeof c;l==="string"||l==="number"?s.selected=n.some(u=>String(u)===String(c)):s.selected=aa(n,c)>-1}else s.selected=n.has(c);else if(yt(Vt(s),n)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!o&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Vt(t){return"_value"in t?t._value:t.value}function Jl(t,n){const e=n?"_trueValue":"_falseValue";return e in t?t[e]:n}const Li={created(t,n,e){tr(t,n,e,null,"created")},mounted(t,n,e){tr(t,n,e,null,"mounted")},beforeUpdate(t,n,e,o){tr(t,n,e,o,"beforeUpdate")},updated(t,n,e,o){tr(t,n,e,o,"updated")}};function xf(t,n){switch(t){case"SELECT":return wf;case"TEXTAREA":return mt;default:switch(n){case"checkbox":return yf;case"radio":return kf;default:return mt}}}function tr(t,n,e,o,r){const a=xf(t.tagName,e.props&&e.props.type)[r];a&&a(t,n,e,o)}const Cf=["ctrl","shift","alt","meta"],_f={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,n)=>Cf.some(e=>t[`${e}Key`]&&!n.includes(e))},yr=(t,n)=>{const e=t._withMods||(t._withMods={}),o=n.join(".");return e[o]||(e[o]=(r,...i)=>{for(let a=0;a<n.length;a++){const s=_f[n[a]];if(s&&s(r,n))return}return t(r,...i)})},Sf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Os=(t,n)=>{const e=t._withKeys||(t._withKeys={}),o=n.join(".");return e[o]||(e[o]=r=>{if(!("key"in r))return;const i=xt(r.key);if(n.some(a=>a===i||Sf[a]===i))return t(r)})},If=Re({patchProp:gf},Gp);let As;function $f(){return As||(As=Sp(If))}const Pf=(...t)=>{const n=$f().createApp(...t),{mount:e}=n;return n.mount=o=>{const r=Tf(o);if(!r)return;const i=n._component;!Y(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const a=e(r,!1,Ef(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},n};function Ef(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Tf(t){return Ae(t)?document.querySelector(t):t}var Of=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const Af=Symbol();var Bs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Bs||(Bs={}));function Bf(){const t=cd(!0),n=t.run(()=>Ee({}));let e=[],o=[];const r=ll({install(i){r._a=i,i.provide(Af,r),i.config.globalProperties.$pinia=r,o.forEach(a=>e.push(a)),o=[]},use(i){return!this._a&&!Of?o.push(i):e.push(i),this},_p:e,_a:null,_e:t,_s:new Map,state:n});return r}function Io(t){"@babel/helpers - typeof";return Io=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Io(t)}function Lf(t){return Mf(t)||Ff(t)||Rf(t)||jf()}function jf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rf(t,n){if(t){if(typeof t=="string")return ji(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return ji(t,n)}}function Ff(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Mf(t){if(Array.isArray(t))return ji(t)}function ji(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function Ls(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,o)}return e}function Pt(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Ls(Object(e),!0).forEach(function(o){zf(t,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Ls(Object(e)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))})}return t}function zf(t,n,e){return n=Df(n),n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Df(t){var n=Nf(t,"string");return Io(n)=="symbol"?n:String(n)}function Nf(t,n){if(Io(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var o=e.call(t,n||"default");if(Io(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}var Ie={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_tokens:{},update:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.theme;e&&(this._theme=Pt(Pt({},e),{},{options:Pt(Pt({},this.defaults.options),e.options)}),this._tokens=sn.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get base(){var t;return((t=this.theme)===null||t===void 0?void 0:t.base)||{}},get preset(){var t;return((t=this.theme)===null||t===void 0?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)===null||t===void 0?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme:function(){return this.theme},setTheme:function(n){this.update({theme:n}),Dt.emit("theme:change",n)},getPreset:function(){return this.preset},setPreset:function(n){this._theme=Pt(Pt({},this.theme),{},{preset:n}),this._tokens=sn.createTokens(n,this.defaults),this.clearLoadedStyleNames(),Dt.emit("preset:change",n),Dt.emit("theme:change",this.theme)},getLayerNames:function(){return Lf(this._layerNames)},setLayerNames:function(n){this._layerNames.add(n)},getLoadedStyleNames:function(){return this._loadedStyleNames},isStyleNameLoaded:function(n){return this._loadedStyleNames.has(n)},setLoadedStyleName:function(n){this._loadedStyleNames.add(n)},deleteLoadedStyleName:function(n){this._loadedStyleNames.delete(n)},clearLoadedStyleNames:function(){this._loadedStyleNames.clear()},getTokenValue:function(n){return sn.getTokenValue(this.tokens,n,this.defaults)},getCommonCSS:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;return sn.getCommon({name:n,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponentCSS:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,o={name:n,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return{style:sn.getBaseC(o),variables:sn.getPresetC(o)}},getDirectiveCSS:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,o={name:n,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return{style:sn.getBaseD(o),variables:sn.getPresetD(o)}},getPresetCSS:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,i={name:n,preset:e,options:this.options,selector:o,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return sn.getPreset(i)},getLayerOrderCSS:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return sn.getLayerOrder(n,this.options,{names:this.getLayerNames()},this.defaults)},getCommonStyleSheet:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return sn.getCommonStyleSheet({name:n,theme:this.theme,params:e,props:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet:function(n,e){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return sn.getStyleSheet({name:n,theme:this.theme,params:e,props:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})}},Vf=["value","variable"],or=function(n,e,o){var r=Ie.getTheme();return Vf.includes(e)?vt(r,n,void 0,e):vt(r,n,e,o)},vt=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"variable";if(e){var i=Ie.defaults.variable,a=(n==null?void 0:n.options)||{},s=a.prefix,c=a.transform,l=/{([^}]*)}/g,u=J.object.test(l,e)?e:"{".concat(e,"}"),d=r==="value"||c==="strict";return d?Ie.getTokenValue(e):J.object.getVariableValue(u,void 0,s,[i.excludedKeyRegex],o)}return""},js=function(n){var e,o=Ie.getTheme(),r=vt(o,n,void 0,"variable"),i=(e=r.match(/--[\w-]+/g))===null||e===void 0?void 0:e[0],a=vt(o,n,void 0,"value");return{variable:r,name:i,value:a}};function Uf(t,n){return Wf(t)||qf(t,n)||Hf(t,n)||Kf()}function Kf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hf(t,n){if(t){if(typeof t=="string")return Rs(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Rs(t,n)}}function Rs(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function qf(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var o,r,i,a,s=[],c=!0,l=!1;try{if(i=(e=e.call(t)).next,n===0){if(Object(e)!==e)return;c=!1}else for(;!(c=(o=i.call(e)).done)&&(s.push(o.value),s.length!==n);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&e.return!=null&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw r}}return s}}function Wf(t){if(Array.isArray(t))return t}function Gf(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=Ie.defaults.variable,o=n.prefix,r=o===void 0?e.prefix:o,i=n.selector,a=i===void 0?e.selector:i,s=n.excludedKeyRegex,c=s===void 0?e.excludedKeyRegex:s,l=function d(p){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return Object.entries(p).reduce(function(g,v){var b=Uf(v,2),y=b[0],w=b[1],$=J.object.test(c,y)?J.object.toNormalizeVariable(f):J.object.toNormalizeVariable(f,J.object.toKebabCase(y)),O=J.object.toValue(w);if(J.object.isObject(O)){var W=d(O,$);J.object.merge(g,W)}else J.object.setProperty(g,J.object.getVariableName($),J.object.getVariableValue(O,$,r,[c]));return g},[])},u=l(t,r);return{value:u,declarations:u.join(""),css:J.object.getRule(a,u.join(""))}}function Jf(){var t=new Map;return{on:function(e,o){var r=t.get(e);return r?r.push(o):r=[o],t.set(e,r),this},off:function(e,o){var r=t.get(e);return r&&r.splice(r.indexOf(o)>>>0,1),this},emit:function(e,o){var r=t.get(e);r&&r.slice().map(function(i){i(o)})}}}var Dt=Jf();function Fs(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,o)}return e}function Zf(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Fs(Object(e),!0).forEach(function(o){Yf(t,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Fs(Object(e)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))})}return t}function Yf(t,n,e){return n=Xf(n),n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Xf(t){var n=Qf(t,"string");return Ut(n)=="symbol"?n:String(n)}function Qf(t,n){if(Ut(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var o=e.call(t,n||"default");if(Ut(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function eh(t){return rh(t)||oh(t)||th(t)||nh()}function nh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function th(t,n){if(t){if(typeof t=="string")return Ri(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Ri(t,n)}}function oh(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function rh(t){if(Array.isArray(t))return Ri(t)}function Ri(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function Ut(t){"@babel/helpers - typeof";return Ut=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ut(t)}var J={object:{isEmpty:function(n){return n==null||n===""||Array.isArray(n)&&n.length===0||!(n instanceof Date)&&Ut(n)==="object"&&Object.keys(n).length===0},isNotEmpty:function(n){return!this.isEmpty(n)},isFunction:function(n){return!!(n&&n.constructor&&n.call&&n.apply)},isObject:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n instanceof Object&&n.constructor===Object&&(e||Object.keys(n).length!==0)},isArray:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return Array.isArray(n)&&(e||n.length!==0)},isString:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return typeof n=="string"&&(e||n!=="")},isNumber:function(n){return!isNaN(n)},toFlatCase:function(n){return this.isString(n)?n.replace(/(-|_)/g,"").toLowerCase():n},toKebabCase:function(n){return this.isString(n)?n.replace(/(_)/g,"-").replace(/[A-Z]/g,function(e,o){return o===0?e:"-"+e.toLowerCase()}).toLowerCase():n},toTokenKey:function(n){return this.isString(n)?n.replace(/[A-Z]/g,function(e,o){return o===0?e:"."+e.toLowerCase()}).toLowerCase():n},merge:function(n,e){this.isArray(n)?n.push.apply(n,eh(e||[])):this.isObject(n)&&Object.assign(n,e)},mergeKeysByRegex:function(){var n=this,e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=Zf({},e);return Object.keys(o).forEach(function(a){n.test(r,a)&&n.isObject(o[a])&&a in e&&n.isObject(e[a])?i[a]=n.mergeKeysByRegex(e[a],o[a],r):i[a]=o[a]}),i},getItemValue:function(n){for(var e=arguments.length,o=new Array(e>1?e-1:0),r=1;r<e;r++)o[r-1]=arguments[r];return this.isFunction(n)?n.apply(void 0,o):n},getOptionValue:function(n){var e=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=this.toFlatCase(o).split("."),a=i.shift();return a?this.isObject(n)?this.getOptionValue(this.getItemValue(n[Object.keys(n).find(function(s){return e.toFlatCase(s)===a})||""],r),i.join("."),r):void 0:this.getItemValue(n,r)},test:function(n,e){if(n){var o=n.test(e);return n.lastIndex=0,o}return!1},toValue:function(n){return this.isObject(n)&&n.hasOwnProperty("value")&&n.hasOwnProperty("type")?n.value:n},toUnit:function(n){var e=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=["opacity","z-index","line-height","font-weight","flex","flex-grow","flex-shrink","order"];if(!r.some(function(s){return o.endsWith(s)})){var i="".concat(n).trim(),a=i.split(" ");return a.map(function(s){return e.isNumber(s)?"".concat(s,"px"):s}).join(" ")}return n},toNormalizePrefix:function(n){return n.replaceAll(/ /g,"").replace(/[^\w]/g,"-")},toNormalizeVariable:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return this.toNormalizePrefix("".concat(this.isString(n,!1)&&this.isString(e,!1)?"".concat(n,"-"):n).concat(e))},getVariableName:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return"--".concat(this.toNormalizeVariable(n,e))},getVariableValue:function(n){var e=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:[],a=arguments.length>4?arguments[4]:void 0;if(this.isString(n)){var s=/{([^}]*)}/g,c=n.trim();if(this.test(s,c)){var l=c.replaceAll(s,function(p){var f=p.replace(/{|}/g,""),g=f.split(".").filter(function(v){return!i.some(function(b){return e.test(b,v)})});return"var(".concat(e.getVariableName(r,e.toKebabCase(g.join("-")))).concat(e.isNotEmpty(a)?", ".concat(a):"",")")}),u=/(\d+\s+[\+\-\*\/]\s+\d+)/g,d=/var\([^)]+\)/g;return this.test(u,l.replace(d,"0"))?"calc(".concat(l,")"):l}return this.toUnit(c,o)}else if(this.isNumber(n))return this.toUnit(n,o)},getComputedValue:function(){var n=this,e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;if(this.isString(o)){var r=/{([^}]*)}/g,i=o.trim();return this.test(r,i)?i.replaceAll(r,function(a){return n.getOptionValue(e,a.replace(/{|}/g,""))}):i}else if(this.isNumber(o))return o},setProperty:function(n,e,o){this.isString(e,!1)&&n.push("".concat(e,":").concat(o,";"))},getRule:function(n,e){return n?"".concat(n,"{").concat(e,"}"):""},minifyCSS:function(n){return n&&n.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}},dom:{isClient:function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)},addClass:function(n,e){n&&e&&!this.hasClass(n,e)&&(n.classList?n.classList.add(e):n.className+=" "+e)},removeClass:function(n,e){n&&e&&(n.classList?n.classList.remove(e):n.className=n.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," "))},hasClass:function(n,e){return n?n.classList?n.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(n.className):!1},removeMultipleClasses:function(n,e){var o=this;n&&e&&[e].flat().filter(Boolean).forEach(function(r){return r.split(" ").forEach(function(i){return o.removeClass(n,i)})})}}};function $o(t){"@babel/helpers - typeof";return $o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},$o(t)}var ih=["colorScheme"],ah=["dark"],sh=["colorScheme"],ch=["dark"];function rr(t,n){return ph(t)||dh(t,n)||uh(t,n)||lh()}function lh(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function uh(t,n){if(t){if(typeof t=="string")return Ms(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Ms(t,n)}}function Ms(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function dh(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var o,r,i,a,s=[],c=!0,l=!1;try{if(i=(e=e.call(t)).next,n===0){if(Object(e)!==e)return;c=!1}else for(;!(c=(o=i.call(e)).done)&&(s.push(o.value),s.length!==n);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&e.return!=null&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw r}}return s}}function ph(t){if(Array.isArray(t))return t}function zs(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,o)}return e}function Et(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?zs(Object(e),!0).forEach(function(o){kr(t,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):zs(Object(e)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))})}return t}function kr(t,n,e){return n=fh(n),n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function fh(t){var n=hh(t,"string");return $o(n)=="symbol"?n:String(n)}function hh(t,n){if($o(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var o=e.call(t,n||"default");if($o(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function ir(t,n){if(t==null)return{};var e=mh(t,n),o,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)o=i[r],!(n.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(t,o)&&(e[o]=t[o])}return e}function mh(t,n){if(t==null)return{};var e={},o=Object.keys(t),r,i;for(i=0;i<o.length;i++)r=o[i],!(n.indexOf(r)>=0)&&(e[r]=t[r]);return e}var sn={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve:function(n){return{type:"class",selector:n,matched:this.pattern.test(n.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve:function(n){return{type:"attr",selector:":root".concat(n),matched:this.pattern.test(n.trim())}}},media:{pattern:/^@media (.*)$/,resolve:function(n){return{type:"media",selector:"".concat(n,"{:root{[CSS]}}"),matched:this.pattern.test(n.trim())}}},system:{pattern:/^system$/,resolve:function(n){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(n.trim())}}},custom:{resolve:function(n){return{type:"custom",selector:n,matched:!0}}}},resolve:function(n){var e=this,o=Object.keys(this.rules).filter(function(r){return r!=="custom"}).map(function(r){return e.rules[r]});return[n].flat().map(function(r){var i;return(i=o.map(function(a){return a.resolve(r)}).find(function(a){return a.matched}))!==null&&i!==void 0?i:e.rules.custom.resolve(r)})}},getCommon:function(n){var e,o=n.name,r=o===void 0?"":o,i=n.theme,a=i===void 0?{}:i,s=n.params,c=n.set,l=n.defaults,u=a.base,d=a.preset,p=a.options,f,g,v;if(J.object.isNotEmpty(d)){var b=d.primitive,y=d.semantic,w=y||{},$=w.colorScheme,O=ir(w,ih),W=$||{},N=W.dark,Q=ir(W,ah),D=J.object.isNotEmpty(b)?this._toVariables({primitive:b},p).declarations:"",ee=J.object.isNotEmpty(O)?this._toVariables({semantic:O},p).declarations:"",ne=J.object.isNotEmpty(Q)?this._toVariables({light:Q},p).declarations:"",be=J.object.isNotEmpty(N)?this._toVariables({dark:N},p).declarations:"";f=this._transformCSS(r,D,"light","variable",p,c,l);var V=this._transformCSS(r,"".concat(ee).concat(ne,"color-scheme:light"),"light","variable",p,c,l),se=this._transformCSS(r,"".concat(be,"color-scheme:dark"),"dark","variable",p,c,l);g="".concat(V).concat(se)}return v=J.object.getItemValue(u==null||(e=u.global)===null||e===void 0?void 0:e.css,Et(Et({},s),{},{dt:function(en,ye,fe){return vt(a,en,ye,fe)}})),v=this._transformCSS(r,v,void 0,"style",p,c,l),{primitive:f,semantic:g,global:v}},getPreset:function(n){var e=n.name,o=e===void 0?"":e,r=n.preset,i=r===void 0?{}:r,a=n.options;n.params;var s=n.set,c=n.defaults,l=n.selector,u=o.replace("-directive",""),d=i.colorScheme,p=ir(i,sh),f=d||{},g=f.dark,v=ir(f,ch),b=J.object.isNotEmpty(p)?this._toVariables(kr({},u,p),a).declarations:"",y=J.object.isNotEmpty(v)?this._toVariables(kr({},u,v),a).declarations:"",w=J.object.isNotEmpty(g)?this._toVariables(kr({},u,g),a).declarations:"",$=this._transformCSS(u,"".concat(b).concat(y),"light","variable",a,s,c,l),O=this._transformCSS(u,w,"dark","variable",a,s,c,l);return"".concat($).concat(O)},getPresetC:function(n){var e,o=n.name,r=o===void 0?"":o,i=n.theme,a=i===void 0?{}:i,s=n.params,c=n.set,l=n.defaults,u=a.preset,d=a.options,p=u==null||(e=u.components)===null||e===void 0?void 0:e[r];return this.getPreset({name:r,preset:p,options:d,params:s,set:c,defaults:l})},getBaseC:function(n){var e,o=n.name,r=o===void 0?"":o,i=n.theme,a=i===void 0?{}:i,s=n.params,c=n.set,l=n.defaults,u=a.base,d=a.options,p=(u==null||(e=u.components)===null||e===void 0?void 0:e[r])||{},f=p.css,g=J.object.getItemValue(f,Et(Et({},s),{},{dt:function(b,y,w){return vt(a,b,y,w)}}));return this._transformCSS(r,g,void 0,"style",d,c,l)},getPresetD:function(n){var e,o=n.name,r=o===void 0?"":o,i=n.theme,a=i===void 0?{}:i,s=n.params,c=n.set,l=n.defaults,u=r.replace("-directive",""),d=a.preset,p=a.options,f=d==null||(e=d.directives)===null||e===void 0?void 0:e[u];return this.getPreset({name:u,preset:f,options:p,params:s,set:c,defaults:l})},getBaseD:function(n){var e,o=n.name,r=o===void 0?"":o,i=n.theme,a=i===void 0?{}:i,s=n.params,c=n.set,l=n.defaults,u=r.replace("-directive",""),d=a.base,p=a.options,f=(d==null||(e=d.directives)===null||e===void 0?void 0:e[u])||{},g=f.css,v=J.object.getItemValue(g,Et(Et({},s),{},{dt:function(y,w,$){return vt(a,y,w,$)}}));return this._transformCSS(u,v,void 0,"style",p,c,l)},getColorSchemeOption:function(n,e){var o;return this.regex.resolve((o=n.darkModeSelector)!==null&&o!==void 0?o:e.options.darkModeSelector)},getLayerOrder:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,r=e.cssLayer;if(r){var i=J.object.getItemValue(r.order||"primeui",o);return"@layer ".concat(i)}return""},getCommonStyleSheet:function(n){var e=n.name,o=e===void 0?"":e,r=n.theme,i=r===void 0?{}:r,a=n.params,s=n.props,c=s===void 0?{}:s,l=n.set,u=n.defaults,d=this.getCommon({name:o,theme:i,params:a,set:l,defaults:u}),p=Object.entries(c).reduce(function(f,g){var v=rr(g,2),b=v[0],y=v[1];return f.push("".concat(b,'="').concat(y,'"'))&&f},[]).join(" ");return Object.entries(d||{}).reduce(function(f,g){var v=rr(g,2),b=v[0],y=v[1];if(y){var w=J.object.minifyCSS(y),$=b==="global"?"".concat(b,"-style"):"".concat(b,"-variables");f.push('<style type="text/css" data-primevue-style-id="'.concat($,'" ').concat(p,">").concat(w,"</style>"))}return f},[]).join("")},getStyleSheet:function(n){var e=n.name,o=e===void 0?"":e,r=n.theme,i=r===void 0?{}:r,a=n.params,s=n.props,c=s===void 0?{}:s,l=n.set,u=n.defaults,d=this.getPresetC({name:o,theme:i,params:a,set:l,defaults:u}),p=this.getBaseC({name:o,theme:i,params:a,set:l,defaults:u}),f=Object.entries(c).reduce(function(v,b){var y=rr(b,2),w=y[0],$=y[1];return v.push("".concat(w,'="').concat($,'"'))&&v},[]).join(" "),g=[];return d&&g.push('<style type="text/css" data-primevue-style-id="'.concat(o,'-variables" ').concat(f,">").concat(J.object.minifyCSS(d),"</style>")),p&&g.push('<style type="text/css" data-primevue-style-id="'.concat(o,'-style" ').concat(f,">").concat(J.object.minifyCSS(p),"</style>")),g.join("")},createTokens:function(){var n=this,e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{};return Object.entries(e).forEach(function(s){var c=rr(s,2),l=c[0],u=c[1],d=J.object.test(o.variable.excludedKeyRegex,l)?r:r?"".concat(r,".").concat(J.object.toTokenKey(l)):J.object.toTokenKey(l),p=i?"".concat(i,".").concat(l):l;J.object.isObject(u)?n.createTokens(u,o,d,p,a):(a[d]||(a[d]={paths:[],computed:function(g){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(g){var b=this.paths.find(function(y){return y.scheme===g})||this.paths.find(function(y){return y.scheme==="none"});return b==null?void 0:b.computed(g,v.paths)}return this.paths.map(function(y){return y.computed(y.scheme,v)})}}),a[d].paths.push({path:p,value:u,scheme:p.includes("colorScheme.light")?"light":p.includes("colorScheme.dark")?"dark":"none",computed:function(g){var v,b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},y=/{([^}]*)}/g,w=u;if(b.path=this.path,b[v="paths"]||(b[v]={}),J.object.test(y,u)){var $=u.trim(),O=$.replaceAll(y,function(Q){var D,ee=Q.replace(/{|}/g,"");return(D=a[ee])===null||D===void 0||(D=D.computed(g,b))===null||D===void 0?void 0:D.value}),W=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,N=/var\([^)]+\)/g;w=J.object.test(W,O.replace(N,"0"))?"calc(".concat(O,")"):O}return J.object.isEmpty(b.paths)&&delete b.paths,{colorScheme:g,tokenPath:this.path,tokenPathMap:b,value:w.includes("undefined")?void 0:w}}}))}),a},getTokenValue:function(n,e,o){var r,i=function(l){var u=l.split(".");return u.filter(function(d){return!J.object.test(o.variable.excludedKeyRegex,d.toLowerCase())}).join(".")},a=i(e),s=e.includes("colorScheme.light")?"light":e.includes("colorScheme.dark")?"dark":void 0;return[(r=n[a])===null||r===void 0?void 0:r.computed(s)].flat()},_toVariables:function(n,e){return Gf(n,{prefix:e==null?void 0:e.prefix})},_transformCSS:function(n,e,o,r){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{},a=arguments.length>5?arguments[5]:void 0,s=arguments.length>6?arguments[6]:void 0,c=arguments.length>7?arguments[7]:void 0;if(J.object.isNotEmpty(e)){var l=i.cssLayer;if(r!=="style"){var u=this.getColorSchemeOption(i,s),d=c?J.object.getRule(c,e):e;e=o==="dark"?u.reduce(function(f,g){var v=g.selector;return J.object.isNotEmpty(v)&&(f+=v.includes("[CSS]")?v.replace("[CSS]",d):J.object.getRule(v,d)),f},""):J.object.getRule(c??":root",e)}if(l){var p={name:"primeui",order:"primeui"};J.object.isObject(l)&&(p.name=J.object.getItemValue(l.name,{name:n,type:r})),J.object.isNotEmpty(p.name)&&(e=J.object.getRule("@layer ".concat(p.name),e),a==null||a.layerNames(p.name))}return e}return""}};function si(t,n){var e=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=Ia(t))||n&&t&&typeof t.length=="number"){e&&(t=e);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,a=!1,s;return{s:function(){e=e.call(t)},n:function(){var l=e.next();return i=l.done,l},e:function(l){a=!0,s=l},f:function(){try{!i&&e.return!=null&&e.return()}finally{if(a)throw s}}}}function gh(t){return yh(t)||vh(t)||Ia(t)||bh()}function bh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vh(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function yh(t){if(Array.isArray(t))return Fi(t)}function uo(t){"@babel/helpers - typeof";return uo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},uo(t)}function ci(t,n){return xh(t)||wh(t,n)||Ia(t,n)||kh()}function kh(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ia(t,n){if(t){if(typeof t=="string")return Fi(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Fi(t,n)}}function Fi(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function wh(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var o,r,i,a,s=[],c=!0,l=!1;try{if(i=(e=e.call(t)).next,n===0){if(Object(e)!==e)return;c=!1}else for(;!(c=(o=i.call(e)).done)&&(s.push(o.value),s.length!==n);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&e.return!=null&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw r}}return s}}function xh(t){if(Array.isArray(t))return t}var K={innerWidth:function(n){if(n){var e=n.offsetWidth,o=getComputedStyle(n);return e+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),e}return 0},width:function(n){if(n){var e=n.offsetWidth,o=getComputedStyle(n);return e-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),e}return 0},getWindowScrollTop:function(){var n=document.documentElement;return(window.pageYOffset||n.scrollTop)-(n.clientTop||0)},getWindowScrollLeft:function(){var n=document.documentElement;return(window.pageXOffset||n.scrollLeft)-(n.clientLeft||0)},getOuterWidth:function(n,e){if(n){var o=n.offsetWidth;if(e){var r=getComputedStyle(n);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}return 0},getOuterHeight:function(n,e){if(n){var o=n.offsetHeight;if(e){var r=getComputedStyle(n);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}return 0},getClientHeight:function(n,e){if(n){var o=n.clientHeight;if(e){var r=getComputedStyle(n);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}return 0},getViewport:function(){var n=window,e=document,o=e.documentElement,r=e.getElementsByTagName("body")[0],i=n.innerWidth||o.clientWidth||r.clientWidth,a=n.innerHeight||o.clientHeight||r.clientHeight;return{width:i,height:a}},getOffset:function(n){if(n){var e=n.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}},index:function(n){if(n)for(var e,o=(e=this.getParentNode(n))===null||e===void 0?void 0:e.childNodes,r=0,i=0;i<o.length;i++){if(o[i]===n)return r;o[i].nodeType===1&&r++}return-1},addMultipleClasses:function(n,e){var o=this;n&&e&&[e].flat().filter(Boolean).forEach(function(r){return r.split(" ").forEach(function(i){return o.addClass(n,i)})})},removeMultipleClasses:function(n,e){var o=this;n&&e&&[e].flat().filter(Boolean).forEach(function(r){return r.split(" ").forEach(function(i){return o.removeClass(n,i)})})},addClass:function(n,e){n&&e&&!this.hasClass(n,e)&&(n.classList?n.classList.add(e):n.className+=" "+e)},removeClass:function(n,e){n&&e&&(n.classList?n.classList.remove(e):n.className=n.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," "))},hasClass:function(n,e){return n?n.classList?n.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(n.className):!1},addStyles:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};n&&Object.entries(e).forEach(function(o){var r=ci(o,2),i=r[0],a=r[1];return n.style[i]=a})},find:function(n,e){return this.isElement(n)?n.querySelectorAll(e):[]},findSingle:function(n,e){return this.isElement(n)?n.matches(e)?n:n.querySelector(e):null},createElement:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(n){var o=document.createElement(n);this.setAttributes(o,e);for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];return o.append.apply(o,i),o}},setAttribute:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2?arguments[2]:void 0;this.isElement(n)&&o!==null&&o!==void 0&&n.setAttribute(e,o)},setAttributes:function(n){var e=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.isElement(n)){var r=function i(a,s){var c,l,u=n!=null&&(c=n.$attrs)!==null&&c!==void 0&&c[a]?[n==null||(l=n.$attrs)===null||l===void 0?void 0:l[a]]:[];return[s].flat().reduce(function(d,p){if(p!=null){var f=uo(p);if(f==="string"||f==="number")d.push(p);else if(f==="object"){var g=Array.isArray(p)?i(a,p):Object.entries(p).map(function(v){var b=ci(v,2),y=b[0],w=b[1];return a==="style"&&(w||w===0)?"".concat(y.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),":").concat(w):w?y:void 0});d=g.length?d.concat(g.filter(function(v){return!!v})):d}}return d},u)};Object.entries(o).forEach(function(i){var a=ci(i,2),s=a[0],c=a[1];if(c!=null){var l=s.match(/^on(.+)/);l?n.addEventListener(l[1].toLowerCase(),c):s==="p-bind"?e.setAttributes(n,c):(c=s==="class"?gh(new Set(r("class",c))).join(" ").trim():s==="style"?r("style",c).join(";").trim():c,(n.$attrs=n.$attrs||{})&&(n.$attrs[s]=c),n.setAttribute(s,c))}})}},getAttribute:function(n,e){if(this.isElement(n)){var o=n.getAttribute(e);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}},isAttributeEquals:function(n,e,o){return this.isElement(n)?this.getAttribute(n,e)===o:!1},isAttributeNotEquals:function(n,e,o){return!this.isAttributeEquals(n,e,o)},getHeight:function(n){if(n){var e=n.offsetHeight,o=getComputedStyle(n);return e-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),e}return 0},getWidth:function(n){if(n){var e=n.offsetWidth,o=getComputedStyle(n);return e-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),e}return 0},absolutePosition:function(n,e){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(n){var r=n.offsetParent?{width:n.offsetWidth,height:n.offsetHeight}:this.getHiddenElementDimensions(n),i=r.height,a=r.width,s=e.offsetHeight,c=e.offsetWidth,l=e.getBoundingClientRect(),u=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),p=this.getViewport(),f,g,v="top";l.top+s+i>p.height?(f=l.top+u-i,v="bottom",f<0&&(f=u)):f=s+l.top+u,l.left+a>p.width?g=Math.max(0,l.left+d+c-a):g=l.left+d,n.style.top=f+"px",n.style.left=g+"px",n.style.transformOrigin=v,o&&(n.style.marginTop=or(v==="bottom"?"{anchor.gutter} * -1":"anchor.gutter"))}},relativePosition:function(n,e){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(n){var r=n.offsetParent?{width:n.offsetWidth,height:n.offsetHeight}:this.getHiddenElementDimensions(n),i=e.offsetHeight,a=e.getBoundingClientRect(),s=this.getViewport(),c,l,u="top";a.top+i+r.height>s.height?(c=-1*r.height,u="bottom",a.top+c<0&&(c=-1*a.top)):c=i,r.width>s.width?l=a.left*-1:a.left+r.width>s.width?l=(a.left+r.width-s.width)*-1:l=0,n.style.top=c+"px",n.style.left=l+"px",n.style.transformOrigin=u,o&&(n.style.marginTop=or(u==="bottom"?"{anchor.gutter} * -1":"anchor.gutter"))}},nestedPosition:function(n,e){if(n){var o=n.parentElement,r=this.getOffset(o),i=this.getViewport(),a=n.offsetParent?n.offsetWidth:this.getHiddenElementOuterWidth(n),s=this.getOuterWidth(o.children[0]),c;parseInt(r.left,10)+s+a>i.width-this.calculateScrollbarWidth()?parseInt(r.left,10)<a?e%2===1?c=parseInt(r.left,10)?"-"+parseInt(r.left,10)+"px":"100%":e%2===0&&(c=i.width-a-this.calculateScrollbarWidth()+"px"):c="-100%":c="100%",n.style.top="0px",n.style.left=c}},getParentNode:function(n){var e=n==null?void 0:n.parentNode;return e&&e instanceof ShadowRoot&&e.host&&(e=e.host),e},getParents:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],o=this.getParentNode(n);return o===null?e:this.getParents(o,e.concat([o]))},getScrollableParents:function(n){var e=[];if(n){var o=this.getParents(n),r=/(auto|scroll)/,i=function(b){try{var y=window.getComputedStyle(b,null);return r.test(y.getPropertyValue("overflow"))||r.test(y.getPropertyValue("overflowX"))||r.test(y.getPropertyValue("overflowY"))}catch{return!1}},a=si(o),s;try{for(a.s();!(s=a.n()).done;){var c=s.value,l=c.nodeType===1&&c.dataset.scrollselectors;if(l){var u=l.split(","),d=si(u),p;try{for(d.s();!(p=d.n()).done;){var f=p.value,g=this.findSingle(c,f);g&&i(g)&&e.push(g)}}catch(v){d.e(v)}finally{d.f()}}c.nodeType!==9&&i(c)&&e.push(c)}}catch(v){a.e(v)}finally{a.f()}}return e},getHiddenElementOuterHeight:function(n){if(n){n.style.visibility="hidden",n.style.display="block";var e=n.offsetHeight;return n.style.display="none",n.style.visibility="visible",e}return 0},getHiddenElementOuterWidth:function(n){if(n){n.style.visibility="hidden",n.style.display="block";var e=n.offsetWidth;return n.style.display="none",n.style.visibility="visible",e}return 0},getHiddenElementDimensions:function(n){if(n){var e={};return n.style.visibility="hidden",n.style.display="block",e.width=n.offsetWidth,e.height=n.offsetHeight,n.style.display="none",n.style.visibility="visible",e}return 0},fadeIn:function(n,e){if(n){n.style.opacity=0;var o=+new Date,r=0,i=function a(){r=+n.style.opacity+(new Date().getTime()-o)/e,n.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(a)||setTimeout(a,16))};i()}},fadeOut:function(n,e){if(n)var o=1,r=50,i=e,a=r/i,s=setInterval(function(){o-=a,o<=0&&(o=0,clearInterval(s)),n.style.opacity=o},r)},getUserAgent:function(){return navigator.userAgent},appendChild:function(n,e){if(this.isElement(e))e.appendChild(n);else if(e.el&&e.elElement)e.elElement.appendChild(n);else throw new Error("Cannot append "+e+" to "+n)},isElement:function(n){return(typeof HTMLElement>"u"?"undefined":uo(HTMLElement))==="object"?n instanceof HTMLElement:n&&uo(n)==="object"&&n!==null&&n.nodeType===1&&typeof n.nodeName=="string"},scrollInView:function(n,e){var o=getComputedStyle(n).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,i=getComputedStyle(n).getPropertyValue("paddingTop"),a=i?parseFloat(i):0,s=n.getBoundingClientRect(),c=e.getBoundingClientRect(),l=c.top+document.body.scrollTop-(s.top+document.body.scrollTop)-r-a,u=n.scrollTop,d=n.clientHeight,p=this.getOuterHeight(e);l<0?n.scrollTop=u+l:l+p>d&&(n.scrollTop=u+l-d+p)},clearSelection:function(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}},getSelection:function(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null},calculateScrollbarWidth:function(){if(this.calculatedScrollbarWidth!=null)return this.calculatedScrollbarWidth;var n=document.createElement("div");this.addStyles(n,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(n);var e=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=e,e},calculateBodyScrollbarWidth:function(){return window.innerWidth-document.documentElement.offsetWidth},getBrowser:function(){if(!this.browser){var n=this.resolveUserAgent();this.browser={},n.browser&&(this.browser[n.browser]=!0,this.browser.version=n.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser},resolveUserAgent:function(){var n=navigator.userAgent.toLowerCase(),e=/(chrome)[ ]([\w.]+)/.exec(n)||/(webkit)[ ]([\w.]+)/.exec(n)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(n)||/(msie) ([\w.]+)/.exec(n)||n.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n)||[];return{browser:e[1]||"",version:e[2]||"0"}},isVisible:function(n){return n&&n.offsetParent!=null},invokeElementMethod:function(n,e,o){n[e].apply(n,o)},isExist:function(n){return!!(n!==null&&typeof n<"u"&&n.nodeName&&this.getParentNode(n))},isClient:function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)},focus:function(n,e){n&&document.activeElement!==n&&n.focus(e)},isFocusableElement:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return this.isElement(n)?n.matches('button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(e,`,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(e,`,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(e,`,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(e,`,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(e,`,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(e,`,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(e)):!1},getFocusableElements:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=this.find(n,'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(e,`,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(e,`,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(e,`,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(e,`,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(e,`,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(e,`,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(e)),r=[],i=si(o),a;try{for(i.s();!(a=i.n()).done;){var s=a.value;getComputedStyle(s).display!="none"&&getComputedStyle(s).visibility!="hidden"&&r.push(s)}}catch(c){i.e(c)}finally{i.f()}return r},getFirstFocusableElement:function(n,e){var o=this.getFocusableElements(n,e);return o.length>0?o[0]:null},getLastFocusableElement:function(n,e){var o=this.getFocusableElements(n,e);return o.length>0?o[o.length-1]:null},getNextFocusableElement:function(n,e,o){var r=this.getFocusableElements(n,o),i=r.length>0?r.findIndex(function(s){return s===e}):-1,a=i>-1&&r.length>=i+1?i+1:-1;return a>-1?r[a]:null},getPreviousElementSibling:function(n,e){for(var o=n.previousElementSibling;o;){if(o.matches(e))return o;o=o.previousElementSibling}return null},getNextElementSibling:function(n,e){for(var o=n.nextElementSibling;o;){if(o.matches(e))return o;o=o.nextElementSibling}return null},isClickable:function(n){if(n){var e=n.nodeName,o=n.parentElement&&n.parentElement.nodeName;return e==="INPUT"||e==="TEXTAREA"||e==="BUTTON"||e==="A"||o==="INPUT"||o==="TEXTAREA"||o==="BUTTON"||o==="A"||!!n.closest(".p-button, .p-checkbox, .p-radiobutton")}return!1},applyStyle:function(n,e){if(typeof e=="string")n.style.cssText=e;else for(var o in e)n.style[o]=e[o]},isIOS:function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},isAndroid:function(){return/(android)/i.test(navigator.userAgent)},isTouchDevice:function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},hasCSSAnimation:function(n){if(n){var e=getComputedStyle(n),o=parseFloat(e.getPropertyValue("animation-duration")||"0");return o>0}return!1},hasCSSTransition:function(n){if(n){var e=getComputedStyle(n),o=parseFloat(e.getPropertyValue("transition-duration")||"0");return o>0}return!1},exportCSV:function(n,e){var o=new Blob([n],{type:"application/csv;charset=utf-8;"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(o,e+".csv");else{var r=document.createElement("a");r.download!==void 0?(r.setAttribute("href",URL.createObjectURL(o)),r.setAttribute("download",e+".csv"),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)):(n="data:text/csv;charset=utf-8,"+n,window.open(encodeURI(n)))}},blockBodyScroll:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"p-overflow-hidden";document.body.style.setProperty(js("scrollbar.width").name,this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,n)},unblockBodyScroll:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"p-overflow-hidden";document.body.style.removeProperty(js("scrollbar.width").name),this.removeClass(document.body,n)}};function Po(t){"@babel/helpers - typeof";return Po=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Po(t)}function Ch(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function Ds(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,Sh(o.key),o)}}function _h(t,n,e){return n&&Ds(t.prototype,n),e&&Ds(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Sh(t){var n=Ih(t,"string");return Po(n)=="symbol"?n:String(n)}function Ih(t,n){if(Po(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var o=e.call(t,n||"default");if(Po(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}var Zl=function(){function t(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){};Ch(this,t),this.element=n,this.listener=e}return _h(t,[{key:"bindScrollListener",value:function(){this.scrollableParents=K.getScrollableParents(this.element);for(var e=0;e<this.scrollableParents.length;e++)this.scrollableParents[e].addEventListener("scroll",this.listener)}},{key:"unbindScrollListener",value:function(){if(this.scrollableParents)for(var e=0;e<this.scrollableParents.length;e++)this.scrollableParents[e].removeEventListener("scroll",this.listener)}},{key:"destroy",value:function(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}]),t}();function $h(){var t=new Map;return{on:function(e,o){var r=t.get(e);r?r.push(o):r=[o],t.set(e,r)},off:function(e,o){var r=t.get(e);r&&r.splice(r.indexOf(o)>>>0,1)},emit:function(e,o){var r=t.get(e);r&&r.slice().map(function(i){i(o)})}}}function Ns(t,n){return Th(t)||Eh(t,n)||$a(t,n)||Ph()}function Ph(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Eh(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var o,r,i,a,s=[],c=!0,l=!1;try{if(i=(e=e.call(t)).next,n===0){if(Object(e)!==e)return;c=!1}else for(;!(c=(o=i.call(e)).done)&&(s.push(o.value),s.length!==n);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&e.return!=null&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw r}}return s}}function Th(t){if(Array.isArray(t))return t}function Vs(t){return Bh(t)||Ah(t)||$a(t)||Oh()}function Oh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ah(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Bh(t){if(Array.isArray(t))return Mi(t)}function li(t,n){var e=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=$a(t))||n&&t&&typeof t.length=="number"){e&&(t=e);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,a=!1,s;return{s:function(){e=e.call(t)},n:function(){var l=e.next();return i=l.done,l},e:function(l){a=!0,s=l},f:function(){try{!i&&e.return!=null&&e.return()}finally{if(a)throw s}}}}function $a(t,n){if(t){if(typeof t=="string")return Mi(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Mi(t,n)}}function Mi(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function po(t){"@babel/helpers - typeof";return po=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},po(t)}var L={equals:function(n,e,o){return o?this.resolveFieldData(n,o)===this.resolveFieldData(e,o):this.deepEquals(n,e)},deepEquals:function(n,e){if(n===e)return!0;if(n&&e&&po(n)=="object"&&po(e)=="object"){var o=Array.isArray(n),r=Array.isArray(e),i,a,s;if(o&&r){if(a=n.length,a!=e.length)return!1;for(i=a;i--!==0;)if(!this.deepEquals(n[i],e[i]))return!1;return!0}if(o!=r)return!1;var c=n instanceof Date,l=e instanceof Date;if(c!=l)return!1;if(c&&l)return n.getTime()==e.getTime();var u=n instanceof RegExp,d=e instanceof RegExp;if(u!=d)return!1;if(u&&d)return n.toString()==e.toString();var p=Object.keys(n);if(a=p.length,a!==Object.keys(e).length)return!1;for(i=a;i--!==0;)if(!Object.prototype.hasOwnProperty.call(e,p[i]))return!1;for(i=a;i--!==0;)if(s=p[i],!this.deepEquals(n[s],e[s]))return!1;return!0}return n!==n&&e!==e},resolveFieldData:function(n,e){if(!n||!e)return null;try{var o=n[e];if(this.isNotEmpty(o))return o}catch{}if(Object.keys(n).length){if(this.isFunction(e))return e(n);if(e.indexOf(".")===-1)return n[e];for(var r=e.split("."),i=n,a=0,s=r.length;a<s;++a){if(i==null)return null;i=i[r[a]]}return i}return null},getItemValue:function(n){for(var e=arguments.length,o=new Array(e>1?e-1:0),r=1;r<e;r++)o[r-1]=arguments[r];return this.isFunction(n)?n.apply(void 0,o):n},filter:function(n,e,o){var r=[];if(n){var i=li(n),a;try{for(i.s();!(a=i.n()).done;){var s=a.value,c=li(e),l;try{for(c.s();!(l=c.n()).done;){var u=l.value;if(String(this.resolveFieldData(s,u)).toLowerCase().indexOf(o.toLowerCase())>-1){r.push(s);break}}}catch(d){c.e(d)}finally{c.f()}}}catch(d){i.e(d)}finally{i.f()}}return r},reorderArray:function(n,e,o){n&&e!==o&&(o>=n.length&&(o%=n.length,e%=n.length),n.splice(o,0,n.splice(e,1)[0]))},findIndexInList:function(n,e){var o=-1;if(e){for(var r=0;r<e.length;r++)if(e[r]===n){o=r;break}}return o},contains:function(n,e){if(n!=null&&e&&e.length){var o=li(e),r;try{for(o.s();!(r=o.n()).done;){var i=r.value;if(this.equals(n,i))return!0}}catch(a){o.e(a)}finally{o.f()}}return!1},insertIntoOrderedArray:function(n,e,o,r){if(o.length>0){for(var i=!1,a=0;a<o.length;a++){var s=this.findIndexInList(o[a],r);if(s>e){o.splice(a,0,n),i=!0;break}}i||o.push(n)}else o.push(n)},removeAccents:function(n){return n&&n.search(/[\xC0-\xFF]/g)>-1&&(n=n.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),n},getVNodeProp:function(n,e){if(n){var o=n.props;if(o){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=Object.prototype.hasOwnProperty.call(o,r)?r:e;return n.type.extends.props[e].type===Boolean&&o[i]===""?!0:o[i]}}return null},toFlatCase:function(n){return this.isString(n)?n.replace(/(-|_)/g,"").toLowerCase():n},toKebabCase:function(n){return this.isString(n)?n.replace(/(_)/g,"-").replace(/[A-Z]/g,function(e,o){return o===0?e:"-"+e.toLowerCase()}).toLowerCase():n},toCapitalCase:function(n){return this.isString(n,{empty:!1})?n[0].toUpperCase()+n.slice(1):n},isEmpty:function(n){return n==null||n===""||Array.isArray(n)&&n.length===0||!(n instanceof Date)&&po(n)==="object"&&Object.keys(n).length===0},isNotEmpty:function(n){return!this.isEmpty(n)},isFunction:function(n){return!!(n&&n.constructor&&n.call&&n.apply)},isObject:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n instanceof Object&&n.constructor===Object&&(e||Object.keys(n).length!==0)},isDate:function(n){return n instanceof Date&&n.constructor===Date},isArray:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return Array.isArray(n)&&(e||n.length!==0)},isString:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return typeof n=="string"&&(e||n!=="")},isPrintableCharacter:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return this.isNotEmpty(n)&&n.length===1&&n.match(/\S| /)},findLast:function(n,e){var o;if(this.isNotEmpty(n))try{o=n.findLast(e)}catch{o=Vs(n).reverse().find(e)}return o},findLastIndex:function(n,e){var o=-1;if(this.isNotEmpty(n))try{o=n.findLastIndex(e)}catch{o=n.lastIndexOf(Vs(n).reverse().find(e))}return o},sort:function(n,e){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1,a=this.compare(n,e,r,o),s=o;return(this.isEmpty(n)||this.isEmpty(e))&&(s=i===1?o:i),s*a},compare:function(n,e,o){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,i=-1,a=this.isEmpty(n),s=this.isEmpty(e);return a&&s?i=0:a?i=r:s?i=-r:typeof n=="string"&&typeof e=="string"?i=o(n,e):i=n<e?-1:n>e?1:0,i},localeComparator:function(){return new Intl.Collator(void 0,{numeric:!0}).compare},nestedKeys:function(){var n=this,e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return Object.entries(e).reduce(function(r,i){var a=Ns(i,2),s=a[0],c=a[1],l=o?"".concat(o,".").concat(s):s;return n.isObject(c)?r=r.concat(n.nestedKeys(c,l)):r.push(l),r},[])},stringify:function(n){var e=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,i=" ".repeat(r),a=" ".repeat(r+o);return this.isArray(n)?"["+n.map(function(s){return e.stringify(s,o,r+o)}).join(", ")+"]":this.isDate(n)?n.toISOString():this.isFunction(n)?n.toString():this.isObject(n)?`{
`+Object.entries(n).map(function(s){var c=Ns(s,2),l=c[0],u=c[1];return"".concat(a).concat(l,": ").concat(e.stringify(u,o,r+o))}).join(`,
`)+`
`.concat(i)+"}":JSON.stringify(n)},minifyCSS:function(n){return n&&n.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}},ar={};function Qn(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pv_id_";return ar.hasOwnProperty(t)||(ar[t]=0),ar[t]++,"".concat(t).concat(ar[t])}function Lh(t){return Mh(t)||Fh(t)||Rh(t)||jh()}function jh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rh(t,n){if(t){if(typeof t=="string")return zi(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return zi(t,n)}}function Fh(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Mh(t){if(Array.isArray(t))return zi(t)}function zi(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function zh(){var t=[],n=function(s,c){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:999,u=r(s,c,l),d=u.value+(u.key===s?0:l)+1;return t.push({key:s,value:d}),d},e=function(s){t=t.filter(function(c){return c.value!==s})},o=function(s,c){return r(s,c).value},r=function(s,c){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;return Lh(t).reverse().find(function(u){return c?!0:u.key===s})||{key:s,value:l}},i=function(s){return s&&parseInt(s.style.zIndex,10)||0};return{get:i,set:function(s,c,l){c&&(c.style.zIndex=String(n(s,!0,l)))},clear:function(s){s&&(e(i(s)),s.style.zIndex="")},getCurrent:function(s){return o(s,!0)}}}var An=zh(),Ke={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"},Dh={ripple:!1,inputStyle:null,locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"Page {page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left"}},filterMatchModeOptions:{text:[Ke.STARTS_WITH,Ke.CONTAINS,Ke.NOT_CONTAINS,Ke.ENDS_WITH,Ke.EQUALS,Ke.NOT_EQUALS],numeric:[Ke.EQUALS,Ke.NOT_EQUALS,Ke.LESS_THAN,Ke.LESS_THAN_OR_EQUAL_TO,Ke.GREATER_THAN,Ke.GREATER_THAN_OR_EQUAL_TO],date:[Ke.DATE_IS,Ke.DATE_IS_NOT,Ke.DATE_BEFORE,Ke.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},theme:void 0,unstyled:!1,pt:void 0,ptOptions:{mergeSections:!0,mergeProps:!1},csp:{nonce:void 0}},Nh=Symbol();function Vh(t,n){var e={config:kt(n)};return t.config.globalProperties.$primevue=e,t.provide(Nh,e),Uh(t,e),e}function Uh(t,n){var e=Ee(!1);Mt(n.config.theme,function(o){e.value||Ie.setTheme(o),e.value=!1},{immediate:!0,deep:!0}),Dt.on("theme:change",function(o){e.value=!0,t.config.globalProperties.$primevue.config.theme=o})}var Kh={css:function(n){var e=n.dt;return`
.p-accordion-header-link {
    cursor: pointer;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    text-decoration: none;
    padding: 1.125rem 1.125rem 1.125rem 1.125rem;
    color: `.concat(e("accordion.header.color"),`;
    background: `).concat(e("accordion.header.background"),`;
    font-weight: 600;
    border-radius: `).concat(e("rounded.base"),`;
    transition: color `).concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
}

.p-accordion-header-text {
    line-height: 1;
}

.p-accordion-header:not(.p-disabled) .p-accordion-header-link:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: -2px;
}

.p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link {
    color: `).concat(e("accordion.header.hover.color"),`
}

.p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link {
    color: `).concat(e("accordion.header.active.color"),`
}

.p-accordion-toggle-icon {
    transform: rotate(90deg);
}

.p-accordion-header.p-highlight .p-accordion-toggle-icon {
    transform: rotate(-180deg);
}

.p-accordion-content {
    padding: 0 1.125rem 1.125rem 1.125rem;
    background: color: `).concat(e("accordion.content.background"),`
    color: `).concat(e("accordion.content.color"),`
}

.p-accordion-tab {
    border-bottom: 1px solid `).concat(e("accordion.content.border.color"),`;
}

.p-accordion-tab:last-child {
    border-bottom: 0 none
}
`)}},Hh={css:function(n){var e=n.dt;return`
.p-autocomplete {
    display: inline-flex;
}

.p-autocomplete-loader {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    right: 0.75rem;
}

.p-autocomplete-dd .p-autocomplete-loader {
    right: 3.25rem;
}

.p-autocomplete-dd .p-autocomplete-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-autocomplete-dd .p-autocomplete-input,
.p-autocomplete-dd .p-autocomplete-multiple-container {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-autocomplete-dropdown {
    cursor: pointer;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: `.concat(e("autocomplete.dropdown.width"),`;
    border-top-right-radius: `).concat(e("rounded.base"),`;
    border-bottom-right-radius: `).concat(e("rounded.base"),`;
    background: `).concat(e("autocomplete.dropdown.background"),`;
    border: 1px solid `).concat(e("autocomplete.dropdown.border.color"),`;
    border-left: 0 none;
    background: `).concat(e("autocomplete.dropdown.background"),`;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
}

.p-autocomplete-dropdown:not(:disabled):hover {
    background: `).concat(e("autocomplete.dropdown.hover.background"),`;
    border-color: `).concat(e("autocomplete.dropdown.hover.border.color"),`;
    background: `).concat(e("autocomplete.dropdown.hover.background"),`;
}

.p-autocomplete-dropdown:not(:disabled):active {
    background: `).concat(e("autocomplete.dropdown.active.background"),`;
    border-color: `).concat(e("autocomplete.dropdown.active.border.color"),`;
    background: `).concat(e("autocomplete.dropdown.active.background"),`;
}

.p-autocomplete-dropdown:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("button.primary.background"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-autocomplete .p-autocomplete-panel {
    min-width: 100%;
}

.p-autocomplete-panel {
    position: absolute;
    overflow: auto;
    top: 0;
    left: 0;
    background: `).concat(e("autocomplete.overlay.background"),`;
    color: `).concat(e("autocomplete.overlay.color"),`;
    border: 1px solid `).concat(e("autocomplete.overlay.border.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-autocomplete-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: 0.25rem 0.25rem;
}

.p-autocomplete-item {
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    margin: 2px 0;
    padding: 0.5rem 0.75rem;
    border: 0 none;
    color: `).concat(e("autocomplete.item.color"),`;
    background: transparent;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),`;
    border-radius: `).concat(e("rounded.sm"),`;
}

.p-autocomplete-item:first-child {
    margin-top: 0;
}

.p-autocomplete-item:last-child {
    margin-bottom: 0;
}

.p-autocomplete-item:not(.p-highlight):not(.p-disabled).p-focus {
    background: `).concat(e("autocomplete.item.focus.background"),`;
    color: `).concat(e("autocomplete.item.focus.color"),`;
}

.p-autocomplete-item.p-highlight {
    background: `).concat(e("autocomplete.item.selected.background"),`;
    color: `).concat(e("autocomplete.item.selected.color"),`;
}

.p-autocomplete-item.p-highlight.p-focus {
    background: `).concat(e("autocomplete.item.selected.focus.background"),`;
    color: `).concat(e("autocomplete.item.selected.focus.color"),`;
}

.p-autocomplete-item-group {
    margin: 0;
    padding: 0.5rem 0.75rem;
    color: `).concat(e("autocomplete.item.group.color"),`;
    background: `).concat(e("autocomplete.item.group.background"),`;
    font-weight: 600;
}

.p-autocomplete-multiple-container {
    margin: 0;
    padding: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0.25rem 0.25rem;
    gap: 0.25rem;
    color: `).concat(e("autocomplete.input.multiple.color"),`;
    background: `).concat(e("autocomplete.input.multiple.background"),`;
    border: 1px solid `).concat(e("autocomplete.input.multiple.border.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
    width: 100%;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("autocomplete.input.multiple.box.shadow"),`;
}

.p-autocomplete:not(.p-disabled):hover .p-autocomplete-multiple-container {
    border-color: `).concat(e("autocomplete.input.multiple.hover.border.color"),`;
}

.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-multiple-container {
    border-color: `).concat(e("autocomplete.input.multiple.focus.border.color"),`;
    outline: 0 none;
}

.p-autocomplete.p-invalid .p-autocomplete-multiple-container {
    border-color: `).concat(e("autocomplete.input.multiple.invalid.border.color"),`;
}

.p-variant-filled.p-autocomplete-multiple-container {
    background: `).concat(e("autocomplete.input.multiple.filled.background"),`;
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-multiple-container  {
    background: `).concat(e("autocomplete.input.multiple.filled.focus.background"),`;
}

.p-autocomplete.p-disabled .p-autocomplete-multiple-container {
    opacity: 1;
    background: `).concat(e("autocomplete.input.multiple.disabled.background"),`;
    color: `).concat(e("autocomplete.input.multiple.disabled.color"),`;
}

.p-autocomplete-token {
    cursor: default;
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    padding: 0.25rem 0.75rem;
    background: `).concat(e("autocomplete.chip.background"),`;
    color: `).concat(e("autocomplete.chip.color"),`;
    border-radius: `).concat(e("rounded.sm"),`;
}

.p-autocomplete-token.p-focus {
    background: `).concat(e("autocomplete.chip.focus.background"),`;
    color: `).concat(e("autocomplete.chip.focus.color"),`;
}

.p-autocomplete-input-token {
    flex: 1 1 auto;
    display: inline-flex;
}

.p-autocomplete-token-icon {
    cursor: pointer;
    margin-left: 0.375rem;
}

.p-autocomplete-input-token {
    padding: 0.25rem 0;
    margin-left: 0.5rem;
}

.p-autocomplete-input-token input {
    border: 0 none;
    outline: 0 none;
    background-color: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: inherit;
    padding: 0;
    margin: 0;
}

.p-autocomplete-input-token input::placeholder {
    color: `).concat(e("autocomplete.input.multiple.placeholder.color"),`;
}

.p-fluid .p-autocomplete {
    display: flex;
}

.p-fluid .p-autocomplete-dd .p-autocomplete-input {
    width: 1%;
}
`)}},qh={css:function(n){var e=n.dt;return`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
    background: `.concat(e("avatar.background"),`;
    border-radius: `).concat(e("rounded.base"),`;
}

.p-avatar-image {
    background-color: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: 1rem;
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
}

.p-avatar-lg .p-avatar-icon {
    font-size: 1.5rem;
}

.p-avatar-xl {
    width: 4rem;
    height: 4rem;
    font-size: 2rem;
}

.p-avatar-xl .p-avatar-icon {
    font-size: 2rem;
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-left: -1rem;
}

.p-avatar-group .p-avatar {
    border: 2px solid `).concat(e("avatar.grouped.border.color"),`;
}
    `)}},Wh={css:function(n){var e=n.dt;return`
.p-badge {
    display: inline-flex;
    border-radius: 10px;
    justify-content: center;
    padding: 0 0.5rem;
    background: `.concat(e("badge.primary.background"),`;
    color: `).concat(e("badge.primary.color"),`;
    font-size: 0.75rem;
    font-weight: 700;
    min-width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
}

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge .p-badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}

.p-badge-dot {
    width: 0.5rem;
    min-width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    padding: 0;
}

.p-badge-no-gutter {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: `).concat(e("badge.secondary.background"),`;
    color: `).concat(e("badge.secondary.color"),`;
}

.p-badge-success {
    background: `).concat(e("badge.success.background"),`;
    color: `).concat(e("badge.success.color"),`;
}

.p-badge-info {
    background: `).concat(e("badge.info.background"),`;
    color: `).concat(e("badge.info.color"),`;
}

.p-badge-warning {
    background: `).concat(e("badge.warn.background"),`;
    color: `).concat(e("badge.warn.color"),`;
}

.p-badge-danger {
    background: `).concat(e("badge.danger.background"),`;
    color: `).concat(e("badge.danger.color"),`;
}

.p-badge-contrast {
    background: `).concat(e("badge.contrast.background"),`;
    color: `).concat(e("badge.contrast.color"),`;
}

.p-badge-lg {
    font-size: 1.125rem;
    min-width: 2.25rem;
    height: 2.25rem;
    line-height: 2.25rem;
}

.p-badge-xl {
    font-size: 1.5rem;
    min-width: 3rem;
    height: 3rem;
    line-height: 3rem;
}
    `)}},Gh={css:function(n){var e=n.dt;return`
.p-blockui {
    border-radius: `.concat(e("rounded.base"),`;
}
.p-blockui-container {
    position: relative;
}

.p-blockui.p-component-overlay {
    position: absolute;
}

.p-blockui-document.p-component-overlay {
    position: fixed;
}
    `)}},Jh={css:function(n){var e=n.dt;return`
.p-breadcrumb {
    background: `.concat(e("breadcrumb.background"),`;
    border: 0 none;
    border-radius: `).concat(e("rounded.base"),`;
    padding: 1rem;
    overflow-x: auto;
}

.p-breadcrumb .p-breadcrumb-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
}

.p-breadcrumb .p-menuitem-link {
    text-decoration: none;
    display: flex;
    align-items: center;
}

.p-breadcrumb .p-menuitem-separator {
    display: flex;
    align-items: center;
}

.p-breadcrumb::-webkit-scrollbar {
    display: none;
}

.p-breadcrumb .p-menuitem-link {
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    border-radius: `).concat(e("rounded.base"),`;
    outline-color: transparent;
}

.p-breadcrumb .p-menuitem-link:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-breadcrumb .p-menuitem-text {
    color: `).concat(e("breadcrumb.item.color"),`;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    line-height: 1;
}

.p-breadcrumb .p-menuitem-text:hover {
    color: `).concat(e("breadcrumb.item.hover.color"),`;
    line-height: 1;
}

.p-breadcrumb .p-menuitem-icon {
    color: `).concat(e("breadcrumb.item.icon.color"),`;
}

.p-breadcrumb .p-breadcrumb-list li.p-menuitem-separator {
    margin: 0 0.5rem 0 0.5rem;
    color: `).concat(e("breadcrumb.separator.color"),`;
}
`)}},Zh={css:function(n){var e=n.dt;return`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(e("button.primary.color"),`;
    background: `).concat(e("button.primary.background"),`;
    border: 1px solid `).concat(e("button.primary.border.color"),`;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    border-radius: `).concat(e("rounded.base"),`;
    outline-color: transparent;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-left {
    margin-right: 0.5rem;
}

.p-button-icon-right {
    order: 1;
    margin-left: 0.5rem;
}

.p-button-icon-top {
    margin-bottom: 0.5rem;
}

.p-button-icon-bottom {
    order: 2;
    margin-top: 0.5rem;
}

.p-button-icon-only {
    justify-content: center;
    width: 2.5rem;
    padding: 0.5rem 0;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button.p-button-icon-only .p-button-icon-left,
.p-button.p-button-icon-only .p-button-icon-right {
    margin: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: 2.5rem;
}

.p-button-sm {
    font-size: 0.875rem;
    padding: 0.375rem 0.875rem;
}

.p-button-sm .p-button-icon {
    font-size: 0.875rem;
}

.p-button-lg {
    font-size: 1.25rem;
    padding: 0.625rem 1.25rem;
}

.p-button-lg .p-button-icon {
    font-size: 1.25rem;
}

.p-button-loading-label-only .p-button-label {
    margin-left: 0.5rem;
}

.p-button-loading-label-only .p-button-loading-icon {
    margin-right: 0;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: 500;
}

.p-fluid .p-button {
    width: 100%;
}

.p-fluid .p-button-icon-only {
    width: 2.5rem;
}

.p-button:not(:disabled):hover {
    background: `).concat(e("button.primary.hover.background"),`;
    border: 1px solid `).concat(e("button.primary.hover.border.color"),`;
    color: `).concat(e("button.primary.hover.color"),`;
}

.p-button:not(:disabled):active {
    background: `).concat(e("button.primary.active.background"),`;
    border: 1px solid `).concat(e("button.primary.active.border.color"),`;
    color: `).concat(e("button.primary.active.color"),`;
}

.p-button:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("button.primary.background"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-button .p-badge {
    margin-left: 0.5rem;
    min-width: 1rem;
    height: 1rem;
    line-height: 1rem;
    background: `).concat(e("button.primary.color"),`;
    color: `).concat(e("button.primary.background"),`;
}

.p-button-raised {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.p-button-rounded {
    border-radius: 2rem;
}

/* Default Severities */
.p-button-secondary {
    background: `).concat(e("button.secondary.background"),`;
    border: 1px solid `).concat(e("button.secondary.border.color"),`;
    color: `).concat(e("button.secondary.color"),`;
}

.p-button-secondary:not(:disabled):hover {
    background: `).concat(e("button.secondary.hover.background"),`;
    border: 1px solid `).concat(e("button.secondary.hover.border.color"),`;
    color: `).concat(e("button.secondary.hover.color"),`;
}

.p-button-secondary:not(:disabled):active {
    background: `).concat(e("button.secondary.active.background"),`;
    border: 1px solid `).concat(e("button.secondary.active.border.color"),`;
    color: `).concat(e("button.secondary.active.color"),`;
}

.p-button-success {
    background: `).concat(e("button.success.background"),`;
    border: 1px solid `).concat(e("button.success.border.color"),`;
    color: `).concat(e("button.success.color"),`;
}

.p-button-success:not(:disabled):hover {
    background: `).concat(e("button.success.hover.background"),`;
    border: 1px solid `).concat(e("button.success.hover.border.color"),`;
    color: `).concat(e("button.success.hover.color"),`;
}

.p-button-success:not(:disabled):active {
    background: `).concat(e("button.success.active.background"),`;
    border: 1px solid `).concat(e("button.success.active.border.color"),`;
    color: `).concat(e("button.success.active.color"),`;
}

.p-button-success:focus-visible {
    outline-color: `).concat(e("button.success.background"),`;
}

.p-button-info {
    background: `).concat(e("button.info.background"),`;
    border: 1px solid `).concat(e("button.info.border.color"),`;
    color: `).concat(e("button.info.color"),`;
}

.p-button-info:not(:disabled):hover {
    background: `).concat(e("button.info.hover.background"),`;
    border: 1px solid `).concat(e("button.info.hover.border.color"),`;
    color: `).concat(e("button.info.hover.color"),`;
}

.p-button-info:not(:disabled):active {
    background: `).concat(e("button.info.active.background"),`;
    border: 1px solid `).concat(e("button.info.active.border.color"),`;
    color: `).concat(e("button.info.active.color"),`;
}

.p-button-info:focus-visible {
    outline-color: `).concat(e("button.info.background"),`;
}

.p-button-warning {
    background: `).concat(e("button.warn.background"),`;
    border: 1px solid `).concat(e("button.warn.border.color"),`;
    color: `).concat(e("button.warn.color"),`;
}

.p-button-warning:not(:disabled):hover {
    background: `).concat(e("button.warn.hover.background"),`;
    border: 1px solid `).concat(e("button.warn.hover.border.color"),`;
    color: `).concat(e("button.warn.hover.color"),`;
}

.p-button-warning:not(:disabled):active {
    background: `).concat(e("button.warn.active.background"),`;
    border: 1px solid `).concat(e("button.warn.active.border.color"),`;
    color: `).concat(e("button.warn.active.color"),`;
}

.p-button-warning:focus-visible {
    background: `).concat(e("button.warn.background"),`;
}

.p-button-help {
    background: `).concat(e("button.help.background"),`;
    border: 1px solid `).concat(e("button.help.border.color"),`;
    color: `).concat(e("button.help.color"),`;
}

.p-button-help:not(:disabled):hover {
    background: `).concat(e("button.help.hover.background"),`;
    border: 1px solid `).concat(e("button.help.hover.border.color"),`;
    color: `).concat(e("button.help.hover.color"),`;
}

.p-button-help:not(:disabled):active {
    background: `).concat(e("button.help.active.background"),`;
    border: 1px solid `).concat(e("button.help.active.border.color"),`;
    color: `).concat(e("button.help.active.color"),`;
}

.p-button-help:focus-visible {
    outline-color: `).concat(e("button.help.background"),`;
}

.p-button-danger {
    background: `).concat(e("button.danger.background"),`;
    border: 1px solid `).concat(e("button.danger.border.color"),`;
    color: `).concat(e("button.danger.color"),`;
}

.p-button-danger:not(:disabled):hover {
    background: `).concat(e("button.danger.hover.background"),`;
    border: 1px solid `).concat(e("button.danger.hover.border.color"),`;
    color: `).concat(e("button.danger.hover.color"),`;
}

.p-button-danger:not(:disabled):active {
    background: `).concat(e("button.danger.active.background"),`;
    border: 1px solid `).concat(e("button.danger.active.border.color"),`;
    color: `).concat(e("button.danger.active.color"),`;
}

.p-button-danger:focus-visible {
    background: `).concat(e("button.danger.background"),`;
}

.p-button-contrast {
    background: `).concat(e("button.contrast.background"),`;
    border: 1px solid `).concat(e("button.contrast.border.color"),`;
    color: `).concat(e("button.contrast.color"),`;
}

.p-button-contrast:not(:disabled):hover {
    background: `).concat(e("button.contrast.hover.background"),`;
    border: 1px solid `).concat(e("button.contrast.hover.border.color"),`;
    color: `).concat(e("button.contrast.hover.color"),`;
}

.p-button-contrast:not(:disabled):active {
    background: `).concat(e("button.contrast.active.background"),`;
    border: 1px solid `).concat(e("button.contrast.active.border.color"),`;
    color: `).concat(e("button.contrast.active.color"),`;
}

.p-button-contrast:focus-visible {
    outline-color: `).concat(e("button.contrast.background"),`;
}


/* Outlined Buttons */
.p-button-outlined {
    background: transparent;
    border-color: `).concat(e("button.outlined.primary.border.color"),`;
    color: `).concat(e("button.outlined.primary.color"),`;
}

.p-button-outlined:not(:disabled):hover {
    background: `).concat(e("button.outlined.primary.hover.background"),`;
    border-color: `).concat(e("button.outlined.primary.border.color"),`;
    color: `).concat(e("button.outlined.primary.color"),`;
}

.p-button-outlined:not(:disabled):active {
    background: `).concat(e("button.outlined.primary.active.background"),`;
    border-color: `).concat(e("button.outlined.primary.border.color"),`;
    color: `).concat(e("button.outlined.primary.color"),`;
}

.p-button-outlined.p-button-secondary {
    border-color: `).concat(e("button.outlined.secondary.border.color"),`;
    color: `).concat(e("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: `).concat(e("button.outlined.secondary.hover.background"),`;
    border-color: `).concat(e("button.outlined.secondary.border.color"),`;
    color: `).concat(e("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: `).concat(e("button.outlined.secondary.active.background"),`;
    border-color: `).concat(e("button.outlined.secondary.border.color"),`;
    color: `).concat(e("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-success {
    border-color: `).concat(e("button.outlined.success.border.color"),`;
    color: `).concat(e("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: `).concat(e("button.outlined.success.hover.background"),`;
    border-color: `).concat(e("button.outlined.success.border.color"),`;
    color: `).concat(e("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: `).concat(e("button.outlined.success.active.background"),`;
    border-color: `).concat(e("button.outlined.success.border.color"),`;
    color: `).concat(e("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-info {
    border-color: `).concat(e("button.outlined.info.border.color"),`;
    color: `).concat(e("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: `).concat(e("button.outlined.info.hover.background"),`;
    border-color: `).concat(e("button.outlined.info.border.color"),`;
    color: `).concat(e("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: `).concat(e("button.outlined.info.active.background"),`;
    border-color: `).concat(e("button.outlined.info.border.color"),`;
    color: `).concat(e("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-warning {
    border-color: `).concat(e("button.outlined.warn.border.color"),`;
    color: `).concat(e("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-warning:not(:disabled):hover {
    background: `).concat(e("button.outlined.warn.hover.background"),`;
    border-color: `).concat(e("button.outlined.warn.border.color"),`;
    color: `).concat(e("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-warning:not(:disabled):active {
    background: `).concat(e("button.outlined.warn.active.background"),`;
    border-color: `).concat(e("button.outlined.warn.border.color"),`;
    color: `).concat(e("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-help {
    border-color: `).concat(e("button.outlined.help.border.color"),`;
    color: `).concat(e("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: `).concat(e("button.outlined.help.hover.background"),`;
    border-color: `).concat(e("button.outlined.help.border.color"),`;
    color: `).concat(e("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: `).concat(e("button.outlined.help.active.background"),`;
    border-color: `).concat(e("button.outlined.help.border.color"),`;
    color: `).concat(e("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-danger {
    border-color: `).concat(e("button.outlined.danger.border.color"),`;
    color: `).concat(e("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: `).concat(e("button.outlined.danger.hover.background"),`;
    border-color: `).concat(e("button.outlined.danger.border.color"),`;
    color: `).concat(e("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: `).concat(e("button.outlined.danger.active.background"),`;
    border-color: `).concat(e("button.outlined.danger.border.color"),`;
    color: `).concat(e("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-contrast {
    border-color: `).concat(e("button.outlined.contrast.border.color"),`;
    color: `).concat(e("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: `).concat(e("button.outlined.contrast.hover.background"),`;
    border-color: `).concat(e("button.outlined.contrast.border.color"),`;
    color: `).concat(e("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: `).concat(e("button.outlined.contrast.active.background"),`;
    border-color: `).concat(e("button.outlined.contrast.border.color"),`;
    color: `).concat(e("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-plain {
    border-color: `).concat(e("button.outlined.plain.border.color"),`;
    color: `).concat(e("button.outlined.plain.color"),`;
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: `).concat(e("button.outlined.plain.hover.background"),`;
    border-color: `).concat(e("button.outlined.plain.border.color"),`;
    color: `).concat(e("button.outlined.plain.color"),`;
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: `).concat(e("button.outlined.plain.active.background"),`;
    border-color: `).concat(e("button.outlined.plain.border.color"),`;
    color: `).concat(e("button.outlined.plain.color"),`;
}

/* Text Button */
.p-button-text {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.text.primary.color"),`;
}

.p-button-text:not(:disabled):hover {
    background: `).concat(e("button.text.primary.hover.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.primary.color"),`;
}

.p-button-text:not(:disabled):active {
    background: `).concat(e("button.text.primary.active.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.primary.color"),`;
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.text.secondary.color"),`;
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: `).concat(e("button.text.secondary.hover.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.secondary.color"),`;
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: `).concat(e("button.text.secondary.active.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.secondary.color"),`;
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.text.success.color"),`;
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: `).concat(e("button.text.success.hover.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.success.color"),`;
}

.p-button-text.p-button-success:not(:disabled):active {
    background: `).concat(e("button.text.success.active.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.success.color"),`;
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.text.info.color"),`;
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: `).concat(e("button.text.info.hover.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.info.color"),`;
}

.p-button-text.p-button-info:not(:disabled):active {
    background: `).concat(e("button.text.info.active.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.info.color"),`;
}

.p-button-text.p-button-warning {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.text.warn.color"),`;
}

.p-button-text.p-button-warning:not(:disabled):hover {
    background: `).concat(e("button.text.warn.hover.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.warn.color"),`;
}

.p-button-text.p-button-warning:not(:disabled):active {
    background: `).concat(e("button.text.warn.active.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.warn.color"),`;
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.text.help.color"),`;
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: `).concat(e("button.text.help.hover.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.help.color"),`;
}

.p-button-text.p-button-help:not(:disabled):active {
    background: `).concat(e("button.text.help.active.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.help.color"),`;
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.text.danger.color"),`;
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: `).concat(e("button.text.danger.hover.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.danger.color"),`;
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: `).concat(e("button.text.danger.active.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.danger.color"),`;
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.text.plain.color"),`;
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: `).concat(e("button.text.plain.hover.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.plain.color"),`;
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: `).concat(e("button.text.plain.active.background"),`;
    border-color: transparent;
    color: `).concat(e("button.text.plain.color"),`;
}

/* Link Button */
.p-button-link {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.link.color"),`;
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.link.hover.color"),`;
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.link.active.color"),`;
}

.p-buttonset .p-button {
    margin: 0;
}
.p-buttonset .p-button:not(:last-child),
.p-buttonset .p-button:not(:last-child):hover {
    border-right: 0 none;
}

.p-buttonset .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-buttonset .p-button:first-of-type:not(:only-of-type) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-buttonset .p-button:last-of-type:not(:only-of-type) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-buttonset .p-button:focus-visible {
    position: relative;
    z-index: 1;
}

.p-fluid .p-buttonset {
    display: flex;
}

.p-fluid .p-buttonset .p-button {
    flex: 1;
}
`)}},Yh={css:function(n){var e=n.dt;return`
.p-calendar {
    display: inline-flex;
    max-width: 100%;
}

.p-calendar .p-inputtext {
    flex: 1 1 auto;
    width: 1%;
}

.p-calendar-w-btn .p-inputtext {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-datepicker-trigger {
    cursor: pointer;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: `.concat(e("calendar.dropdown.width"),`;
    border-top-right-radius: `).concat(e("rounded.base"),`;
    border-bottom-right-radius: `).concat(e("rounded.base"),`;
    background: `).concat(e("calendar.dropdown.background"),`;
    border: 1px solid `).concat(e("calendar.dropdown.border.color"),`;
    border-left: 0 none;
    background: `).concat(e("calendar.dropdown.background"),`;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
}

.p-datepicker-trigger:not(:disabled):hover {
    background: `).concat(e("calendar.dropdown.hover.background"),`;
    border-color: `).concat(e("calendar.dropdown.hover.border.color"),`;
    background: `).concat(e("calendar.dropdown.hover.background"),`;
}

.p-datepicker-trigger:not(:disabled):active {
    background: `).concat(e("calendar.dropdown.active.background"),`;
    border-color: `).concat(e("calendar.dropdown.active.border.color"),`;
    background: `).concat(e("calendar.dropdown.active.background"),`;
}

.p-datepicker-trigger:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("button.primary.background"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-calendar:has(.p-input-icon) {
    position: relative;
}

.p-calendar:has(.p-input-icon) .p-calendar-input {
    padding-right: 2.5rem;
}

.p-calendar .p-input-icon {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: .75rem;
    margin-top: -.5rem;
}

.p-fluid .p-calendar {
    display: flex;
}

.p-fluid .p-calendar .p-inputtext {
    width: 1%;
}

.p-calendar .p-datepicker {
    min-width: 100%;
}

.p-datepicker {
    width: auto;
    padding: 0.75rem;
    background: `).concat(e("calendar.background"),`;
    color: `).concat(e("calendar.color"),`;
    border: 1px solid `).concat(e("calendar.border.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-datepicker-inline {
    display: inline-block;
    overflow-x: auto;
    box-shadow: none;
}

.p-datepicker-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 0.5rem 0;
    font-weight: 500;
    background: `).concat(e("calendar.header.background"),`;
    color: `).concat(e("calendar.header.color"),`;
    border-bottom: 1px solid `).concat(e("calendar.header.border.color"),`;
}

.p-datepicker-title {
    margin: 0 auto;
    line-height: 1.75rem;
}

.p-datepicker-prev,
.p-datepicker-next {
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    color: `).concat(e("calendar.navigator.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
}

.p-datepicker-prev:enabled:hover,
.p-datepicker-next:enabled:hover {
    background: `).concat(e("calendar.navigator.hover.background"),`;
    color: `).concat(e("calendar.navigator.hover.color"),`;
}

.p-datepicker-prev:focus-visible,
.p-datepicker-next:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-datepicker-year,
.p-datepicker-month {
    font-weight: 500;
    padding: 0.25rem;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
}

.p-datepicker-month {
    margin-right: 0.5rem;
    color: `).concat(e("calendar.month.picker.color"),`;
}

.p-datepicker-year {
    margin-right: 0.5rem;
    color: `).concat(e("calendar.year.picker.color"),`;
}

.p-datepicker-month:enabled:hover {
    background: `).concat(e("calendar.month.picker.hover.background"),`;
    color: `).concat(e("calendar.month.picker.hover.color"),`;
}

.p-datepicker-year:enabled:hover {
    background: `).concat(e("calendar.year.picker.hover.background"),`;
    color: `).concat(e("calendar.year.picker.hover.color"),`;
}

.p-datepicker-multiple-month .p-datepicker-group-container {
    display: flex;
}

.p-datepicker-multiple-month .p-datepicker-group {
    flex: 1 1 auto;
    border-left: 1px solid `).concat(e("calendar.group.border.color"),`;
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    padding-top: 0;
    padding-bottom: 0;
}

.p-datepicker.p-datepicker-multiple-month .p-datepicker-group:first-child {
    padding-left: 0;
    border-left: 0 none;
}

.p-datepicker.p-datepicker-multiple-month .p-datepicker-group:last-child {
    padding-right: 0;
}

.p-datepicker table {
    width: 100%;
    border-collapse: collapse;
    font-size: 1rem;
    margin: 0.5rem 0 0 0;
}

.p-datepicker table th {
    padding: 0.25rem;
    font-weight: 500;
}

.p-datepicker table th > span {
    width: 2rem;
    height: 2rem;
}

.p-datepicker table td {
    padding: 0.25rem;
}

.p-datepicker td > span {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    border: 1px solid transparent;
    outline-color: transparent;
    color: `).concat(e("calendar.date.color"),`;
}

.p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):hover {
    background: `).concat(e("calendar.date.hover.background"),`;
    color: `).concat(e("calendar.date.hover.color"),`;
}

.p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):focus-visible {
    outline: 1px solid `).concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-datepicker table td > span.p-highlight {
    background: `).concat(e("calendar.date.selected.background"),`;
    color: `).concat(e("calendar.date.selected.color"),`;
}

.p-datepicker table td.p-datepicker-today > span {
    background: `).concat(e("calendar.today.background"),`;
    color: `).concat(e("calendar.today.color"),`;
}

.p-datepicker table td.p-datepicker-today > span.p-highlight {
    background: `).concat(e("calendar.date.selected.background"),`;
    color: `).concat(e("calendar.date.selected.color"),`;
}

.p-monthpicker {
    margin: 0.5rem 0 0 0;
}

.p-monthpicker-month {
    width: 33.3%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    padding: 0.25rem;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    border-radius: `).concat(e("rounded.base"),`;
    outline-color: transparent;
    color: `).concat(e("calendar.month.color"),`;
}

.p-datepicker:not(.p-disabled) .p-monthpicker .p-monthpicker-month:not(.p-disabled):not(.p-highlight):hover {
    color:  `).concat(e("calendar.month.hover.color"),`;
    background: `).concat(e("calendar.month.hover.background"),`;
}

.p-monthpicker-month.p-highlight {
    color: `).concat(e("calendar.month.selected.color"),`;
    background: `).concat(e("calendar.month.selected.background"),`;
}

.p-datepicker:not(.p-disabled) .p-monthpicker .p-monthpicker-month:not(.p-disabled):focus-visible {
    outline: `).concat(e("focus.ring.width")," solid ").concat(e("focus.ring.color"),`;
    outline-offset: 0;
}

/* Year Picker */
.p-yearpicker {
    margin: 0.5rem 0 0 0;
}

.p-yearpicker-year {
    width: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    padding: 0.25rem;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    border-radius: `).concat(e("rounded.base"),`;
    outline-color: transparent;
    color: `).concat(e("calendar.year.color"),`;
}

.p-datepicker:not(.p-disabled) .p-yearpicker .p-yearpicker-year:not(.p-disabled):not(.p-highlight):hover {
    color:  `).concat(e("calendar.year.hover.color"),`;
    background: `).concat(e("calendar.year.hover.background"),`;
}

.p-yearpicker-year.p-highlight {
    color: `).concat(e("calendar.year.selected.color"),`;
    background: `).concat(e("calendar.year.selected.background"),`;
}

.p-datepicker:not(.p-disabled) .p-yearpicker .p-yearpicker-year:not(.p-disabled):focus-visible {
    outline: `).concat(e("focus.ring.width")," solid ").concat(e("focus.ring.color"),`;
    outline-offset: 0;
}

.p-datepicker-buttonbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0 0 0;
    border-top: 1px solid `).concat(e("calendar.buttonbar.border.color"),`;
}

.p-datepicker-buttonbar .p-button {
    width: auto;
    padding: 0.25rem 0.75rem;
    font-size: 0.875rem;
}

.p-timepicker {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid `).concat(e("calendar.timepicker.border.color"),`;
    padding: 0;
}

.p-datepicker .p-datepicker-group-container+.p-timepicker {
    margin-top: 0.5rem;
    padding-top: 0.5rem;
}

.p-timepicker>div {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 0.5rem;
}

.p-timepicker button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    color: `).concat(e("calendar.timepicker.spin.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
}

.p-timepicker button:enabled:hover {
    background: `).concat(e("calendar.timepicker.spin.hover.background"),`;
    color: `).concat(e("calendar.timepicker.spin.hover.color"),`;
}

.p-timepicker button:focus-visible {
    outline: 1px solid `).concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-timepicker button:last-child {
    margin-top: 0.2em;
}

.p-timepicker span {
    font-size: 1rem;
}

.p-datepicker-timeonly .p-timepicker {
    border-top: 0 none;
}

/* Touch UI */
.p-datepicker-touch-ui,
.p-calendar .p-datepicker-touch-ui {
    min-width: 80vw;
}

.p-datepicker.p-datepicker-mobile table th,
.p-datepicker.p-datepicker-mobile table td {
    padding: 0.25rem;
}
`)}},Xh={css:function(n){var e=n.dt;return`
.p-card {
    background: `.concat(e("card.background"),`;
    color: `).concat(e("card.color"),`;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.p-card-body {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.p-card-title {
    font-size: 1.25rem;
    font-weight: 600;
}

.p-card-subtitle {
    font-weight: 400;
    color: `).concat(e("card.subtitle.color"),`;
}
`)}},Qh={css:function(n){var e=n.dt;return`
.p-carousel {
    display: flex;
    flex-direction: column;
}

.p-carousel-content {
    display: flex;
    flex-direction: column;
    overflow: auto;
}

.p-carousel-container {
    display: flex;
    flex-direction: row;
}

.p-carousel-items-content {
    overflow: hidden;
    width: 100%;
}

.p-carousel-items-container {
    display: flex;
    flex-direction: row;
}

.p-carousel-prev,
.p-carousel-next {
    align-self: center;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    color: `.concat(e("carousel.navigator.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),",outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
    margin: 0.5rem;
}

.p-carousel-prev:enabled:hover,
.p-carousel-next:enabled:hover {
    color: `).concat(e("carousel.navigator.hover.color"),`;
    background: `).concat(e("carousel.navigator.hover.background"),`;
}

.p-carousel-prev:focus-visible,
.p-carousel-next:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-carousel-indicators {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: 1rem;
    gap: 0.5rem;
}

.p-carousel-indicator button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: `).concat(e("carousel.indicator.background"),`;
    width: 2rem;
    height: 0.5rem;
    border: 0 none;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
    border-radius: `).concat(e("rounded.base"),`;
}

.p-carousel-indicator button:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-carousel-indicator button:hover {
    background: `).concat(e("carousel.indicator.hover.background"),`;
}

.p-carousel-indicator.p-highlight button {
    background: `).concat(e("carousel.indicator.active.background"),`;
}

.p-carousel-vertical .p-carousel-container {
    flex-direction: column;
}

.p-carousel-vertical .p-carousel-items-container {
    flex-direction: column;
    height: 100%;
}

.p-items-hidden .p-carousel-item {
    visibility: hidden;
}

.p-items-hidden .p-carousel-item.p-carousel-item-active {
    visibility: visible;
}
`)}},em={css:function(n){var e=n.dt;return`
.p-cascadeselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: `.concat(e("cascadeselect.background"),`;
    border: 1px solid `).concat(e("cascadeselect.border.color"),`;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    border-radius: `).concat(e("rounded.base"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("cascadeselect.box.shadow"),`;
}

.p-cascadeselect:not(.p-disabled):hover {
    border-color: `).concat(e("cascadeselect.hover.border.color"),`;
}

.p-cascadeselect:not(.p-disabled).p-focus {
    border-color: `).concat(e("cascadeselect.focus.border.color"),`;
    outline: 0 none;
}

.p-cascadeselect.p-variant-filled {
    background: `).concat(e("cascadeselect.filled.background"),`;
}

.p-cascadeselect.p-variant-filled.p-focus {
    background: `).concat(e("cascadeselect.filled.focus.background"),`;
}

.p-cascadeselect.p-invalid {
    border-color: `).concat(e("cascadeselect.invalid.border.color"),`;
}

.p-cascadeselect.p-disabled {
    opacity: 1;
    background: `).concat(e("cascadeselect.disabled.background"),`;
}

.p-cascadeselect-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: `).concat(e("cascadeselect.toggle.color"),`;
    width: 2.5rem;
    border-top-right-radius: `).concat(e("rounded.base"),`;
    border-bottom-right-radius: `).concat(e("rounded.base"),`;
}

.p-cascadeselect-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    padding: 0.5rem 0.75rem;
    text-overflow: ellipsis;
    cursor: pointer;
    color: `).concat(e("cascadeselect.color"),`;
    background: transparent;
    border: 0 none;
    outline: 0 none;
}

.p-cascadeselect-label.p-placeholder {
    color: `).concat(e("cascadeselect.placeholder.color"),`;
}

.p-cascadeselect-clearable .p-cascadeselect-label {
    padding-right: 1.75rem;
}

.p-cascadeselect.p-disabled .p-cascadeselect-label {
    color: `).concat(e("cascadeselect.disabled.color"),`;
}

.p-cascadeselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-fluid .p-cascadeselect {
    display: flex;
}

.p-fluid .p-cascadeselect .p-cascadeselect-label {
    width: 1%;
}

.p-cascadeselect-panel {
    background: `).concat(e("cascadeselect.overlay.background"),`;
    color: `).concat(e("cascadeselect.overlay.color"),`;
    border: 1px solid `).concat(e("cascadeselect.overlay.border.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-cascadeselect .p-cascadeselect-panel {
    min-width: 100%;
}

.p-cascadeselect-sublist {
    position: absolute;
    min-width: 100%;
    z-index: 1;
    display: none;
}

.p-cascadeselect-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
    min-width: 100%;
    padding: 0.25rem 0.25rem;
}

.p-cascadeselect-item {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    margin: 2px 0;
    border: 0 none;
    color: `).concat(e("cascadeselect.item.color"),`;
    background: transparent;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    border-radius: `).concat(e("rounded.sm"),`;
}

.p-cascadeselect-item:first-child {
    margin-top: 0;
}

.p-cascadeselect-item:last-child {
    margin-bottom: 0;
}

.p-cascadeselect-item:not(.p-highlight):not(.p-disabled).p-focus {
    background: `).concat(e("cascadeselect.item.focus.background"),`;
    color: `).concat(e("cascadeselect.item.focus.color"),`;
}

.p-cascadeselect-item:not(.p-highlight):not(.p-disabled).p-focus .p-cascadeselect-group-icon {
    color: `).concat(e("cascadeselect.item.icon.focus.color"),`;
}

.p-cascadeselect-item.p-highlight {
    background: `).concat(e("cascadeselect.item.selected.background"),`;
    color: `).concat(e("cascadeselect.item.selected.color"),`;
}

.p-cascadeselect-item.p-highlight.p-focus {
    background: `).concat(e("cascadeselect.item.selected.focus.background"),`;
    color: `).concat(e("cascadeselect.item.selected.focus.color"),`;
}

.p-cascadeselect-item-active {
    overflow: visible;
    background: `).concat(e("cascadeselect.item.focus.background"),`;
    color: `).concat(e("cascadeselect.item.focus.color"),`;
}

.p-cascadeselect-item-active > .p-cascadeselect-sublist {
    display: block;
    left: 100%;
    top: 0;
}

.p-cascadeselect-item-content {
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    padding: 0.5rem 0.75rem;
}

.p-cascadeselect-group-icon {
    margin-left: auto;
    font-size: 0.875rem;
    color: `).concat(e("cascadeselect.item.icon.color"),`;
}

.p-cascadeselect-enter-from,
.p-cascadeselect-leave-active {
    opacity: 0;
}

.p-cascadeselect-enter-active {
    transition: opacity 150ms;
}
`)}},nm={css:function(n){var e=n.dt;return`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: `.concat(e("checkbox.width"),`;
    height: `).concat(e("checkbox.height"),`;
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: `).concat(e("checkbox.border.radius"),`;
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: `).concat(e("checkbox.border.radius"),`;
    border: 1px solid `).concat(e("checkbox.border.color"),`;
    background: `).concat(e("checkbox.background"),`;
    width: `).concat(e("checkbox.width"),`;
    height: `).concat(e("checkbox.width"),`;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("checkbox.box.shadow"),`;
}

.p-checkbox-icon {
    transition-duration: `).concat(e("transition.duration"),`;
    color: `).concat(e("checkbox.icon.color"),`;
    font-size: `).concat(e("checkbox.icon.size"),`;
    width: `).concat(e("checkbox.icon.size"),`;
    height: `).concat(e("checkbox.icon.size"),`;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: `).concat(e("checkbox.hover.border.color"),`;
}

.p-checkbox.p-highlight .p-checkbox-box {
    border-color: `).concat(e("checkbox.checked.border.color"),`;
    background: `).concat(e("checkbox.checked.background"),`;
}

.p-checkbox.p-highlight .p-checkbox-box .p-checkbox-icon {
    color: `).concat(e("checkbox.icon.checked.color"),`;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover).p-highlight .p-checkbox-box {
    background: `).concat(e("checkbox.checked.hover.background"),`;
    border-color: `).concat(e("checkbox.checked.hover.border.color"),`;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover).p-highlight .p-checkbox-box .p-checkbox-icon {
    color: `).concat(e("checkbox.icon.checked.hover.color"),`;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-checkbox.p-invalid > .p-checkbox-box {
    border-color: `).concat(e("checkbox.invalid.border.color"),`;
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: `).concat(e("checkbox.checked.filled.background"),`;
}

.p-checkbox.p-variant-filled.p-highlight .p-checkbox-box {
    background: `).concat(e("checkbox.checked.background"),`;
}

.p-checkbox.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover).p-highlight .p-checkbox-box {
    background: `).concat(e("checkbox.checked.hover.background"),`;
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: `).concat(e("checkbox.disabled.background"),`;
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: `).concat(e("checkbox.icon.disabled.color"),`;
}
`)}},tm={css:function(n){var e=n.dt;return`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: `.concat(e("chip.background"),`;
    color: `).concat(e("chip.color"),`;
    border-radius: 16px;
    padding: 0.25rem 0.75rem;
}

.p-chip:has(.p-chip-remove-icon) {
    padding-right: 0.5rem;
  }

.p-chip-text {
    line-height: 1.5;
}

.p-chip-icon {
    line-height: 1.5;
    margin-right: 0.5rem;
}

.p-chip-remove-icon {
    line-height: 1.5;
    cursor: pointer;
    margin-left: 0.375rem;
    border-radius: 6px;
    transition: outline-color `).concat(e("transition.duration"),`;
    outline-color: transparent;
}

.p-chip img {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    margin-left: -0.5rem;
    margin-right: 0.5rem;
}

.p-chip-remove-icon:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}
    `)}},om={css:function(n){var e=n.dt;return`
.p-chips {
    display: inline-flex;
}

.p-chips-multiple-container {
    margin: 0;
    padding: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0.25rem 0.25rem;
    gap: 0.25rem;
    color: `.concat(e("chips.color"),`;
    background: `).concat(e("chips.background"),`;
    border: 1px solid `).concat(e("chips.border.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
    width: 100%;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("chips.box.shadow"),`;
}

.p-chips:not(.p-disabled):hover .p-chips-multiple-container {
    border-color: `).concat(e("chips.hover.border.color"),`;
}

.p-chips:not(.p-disabled).p-focus .p-chips-multiple-container {
    border-color: `).concat(e("chips.focus.border.color"),`;
    outline: 0 none;
}

.p-chips.p-invalid .p-chips-multiple-container {
    border-color: `).concat(e("chips.invalid.border.color"),`;
}

.p-variant-filled.p-chips-multiple-container {
    background: `).concat(e("chips.filled.background"),`;
}

.p-chips:not(.p-disabled).p-focus .p-variant-filled.p-chips-multiple-container  {
    background: `).concat(e("chips.filled.focus.background"),`;
}

.p-chips.p-disabled .p-chips-multiple-container {
    opacity: 1;
    background: `).concat(e("chips.disabled.background"),`;
    color: `).concat(e("chips.disabled.color"),`;
}

.p-chips-token {
    cursor: default;
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    padding: 0.25rem 0.75rem;
    background: `).concat(e("chips.chip.background"),`;
    color: `).concat(e("chips.chip.color"),`;
    border-radius: `).concat(e("rounded.sm"),`;
}

.p-chips-token.p-focus {
    background: `).concat(e("chips.chip.focus.background"),`;
    color: `).concat(e("chips.chip.focus.color"),`;
}

.p-chips-input-token {
    flex: 1 1 auto;
    display: inline-flex;
}

.p-chips-token-icon {
    cursor: pointer;
    margin-left: 0.375rem;
}

.p-chips-input-token {
    padding: 0.25rem 0;
    margin-left: 0.5rem;
}

.p-chips-input-token input {
    border: 0 none;
    outline: 0 none;
    background-color: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: inherit;
    padding: 0;
    margin: 0;
}

.p-chips-input-token input::placeholder {
    color: `).concat(e("chips.placeholder.color"),`;
}

.p-fluid .p-chips {
    display: flex;
}
`)}},rm={css:function(n){var e=n.dt;return`
.p-colorpicker-color {
    background: linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
}

.p-colorpicker-hue {
    background: linear-gradient(0deg,
            red 0,
            #ff0 17%,
            #0f0 33%,
            #0ff 50%,
            #00f 67%,
            #f0f 83%,
            red);
}

.p-colorpicker-preview {
    width: 1.5rem;
    height: 1.5rem;
    padding: 0;
    border: 0 none;
    border-radius: `.concat(e("rounded.base"),`;
    transition: outline-color `).concat(e("transition.duration"),`;
    outline-color: transparent;
}

.p-colorpicker-preview:enabled:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-colorpicker-panel {
    background: `).concat(e("colorpicker.panel.background"),`;
    border: 1px solid `).concat(e("colorpicker.panel.border.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
}

.p-colorpicker-panel .p-colorpicker-color-handle,
.p-colorpicker-panel .p-colorpicker-hue-handle {
    border-color: `).concat(e("colorpicker.handle.color"),`;
}

.p-colorpicker-overlay-panel {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}
`)}},im={css:function(n){return n.dt,`
.p-confirm-dialog .p-dialog-content {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.p-confirm-dialog-icon {
    font-size: 2rem;
}
`}},am={css:function(n){var e=n.dt;return`
.p-confirm-popup {
    position: absolute;
    margin-top: 10px;
    top: 0;
    left: 0;
    background: `.concat(e("confirmpopup.background"),`;
    color: `).concat(e("confirmpopup.color"),`;
    border: 1px solid `).concat(e("confirmpopup.border.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-confirm-popup-content {
    display: flex;
    align-items: center;
    padding: 1rem;
}

.p-confirm-popup-icon {
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
}

.p-confirm-popup-message {
    margin-left: 1rem;
}

.p-confirm-popup-footer {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    padding: 0 1rem 1rem 1rem;
}

.p-confirm-popup-footer button {
    width: auto;
}

.p-confirm-popup-footer button:last-child {
    margin: 0;
}

.p-confirm-popup-flipped {
    margin-top: 0;
    margin-bottom: 10px;
}

.p-confirm-popup-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-confirm-popup-leave-to {
    opacity: 0;
}

.p-confirm-popup-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-confirm-popup-leave-active {
    transition: opacity 0.1s linear;
}

.p-confirm-popup:after,
.p-confirm-popup:before {
    bottom: 100%;
    left: `).concat(e("{overlay.arrow.left} + 1.25rem",0),`;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-confirm-popup:after {
    border-width: 8px;
    margin-left: -8px;
    border-style: solid;
    border-color: transparent;
    border-bottom-color: `).concat(e("confirmpopup.background"),`;
}

.p-confirm-popup:before {
    border-width: 10px;
    margin-left: -10px;
    border-style: solid;
    border-color: transparent;
    border-bottom-color: `).concat(e("confirmpopup.border.color"),`;
}

.p-confirm-popup-flipped:after,
.p-confirm-popup-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-confirm-popup-flipped:after {
    border-bottom-color: transparent;
    border-top-color: `).concat(e("confirmpopup.background"),`;
}

.p-confirm-popup-flipped:before {
    border-bottom-color: transparent;
    border-top-color: `).concat(e("confirmpopup.border.color"),`;
}
`)}},sm={css:function(n){var e=n.dt;return`
.p-contextmenu {
    padding: 0.25rem 0.25rem;
    background: `.concat(e("contextmenu.background"),`;
    color: `).concat(e("contextmenu.color"),`;
    border: 1px solid `).concat(e("contextmenu.border.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    min-width: 12.5rem;
}

.p-contextmenu ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-contextmenu-root-list {
    outline: 0 none;
}

.p-contextmenu .p-submenu-list {
    position: absolute;
    min-width: 100%;
    z-index: 1;
    padding: 0.25rem 0.25rem;
    background: `).concat(e("contextmenu.background"),`;
    color: `).concat(e("contextmenu.color"),`;
    border: 1px solid `).concat(e("contextmenu.border.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-contextmenu .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: 0.5rem 0.75rem;
    user-select: none;
}

.p-contextmenu .p-menuitem-text {
    line-height: 1;
}

.p-contextmenu .p-menuitem {
    position: relative;
    margin: 2px 0;
}

.p-contextmenu .p-menuitem:first-child {
    margin-top: 0;
}
.p-contextmenu .p-menuitem:last-child {
    margin-bottom: 0;
}

.p-contextmenu .p-menuitem-content {
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),`;
    border-radius: `).concat(e("rounded.sm"),`;
    color: `).concat(e("contextmenu.item.color"),`;
}

.p-contextmenu .p-menuitem-icon {
    color: `).concat(e("contextmenu.item.icom.color"),`;
    margin-right: 0.5rem;
}

.p-contextmenu .p-submenu-icon {
    color: `).concat(e("contextmenu.item.icon.color"),`;
    margin-left: auto;
    font-size: 0.875rem;
    width: 0.875rem;
    height: 0.875rem;
}

.p-contextmenu .p-menuitem.p-focus > .p-menuitem-content {
    color: `).concat(e("contextmenu.item.focus.color"),`;
    background: `).concat(e("contextmenu.item.focus.background"),`;
}

.p-contextmenu .p-menuitem.p-focus > .p-menuitem-content .p-menuitem-icon,
.p-contextmenu .p-menuitem.p-focus > .p-menuitem-content .p-submenu-icon {
    color: `).concat(e("contextmenu.item.icon.focus.color"),`;
}

.p-contextmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover {
    color: `).concat(e("contextmenu.item.focus.color"),`;
    background: `).concat(e("contextmenu.item.focus.background"),`;
}

.p-contextmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-icon,
.p-contextmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-submenu-icon {
    color: `).concat(e("contextmenu.item.icon.focus.color"),`;
}

.p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-content {
    color: `).concat(e("contextmenu.item.focus.color"),`;
    background: `).concat(e("contextmenu.item.focus.background"),`;
}

.p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-content .p-menuitem-icon,
.p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-content .p-submenu-icon {
    color: `).concat(e("contextmenu.item.icon.focus.color"),`;
}

.p-contextmenu .p-menuitem-separator {
    border-top: 1px solid  `).concat(e("contextmenu.separator.border.color"),`;
    margin: 2px 0;
}

.p-contextmenu-enter-from,
.p-contextmenu-leave-active {
    opacity: 0;
}

.p-contextmenu-enter-active {
    transition: opacity 250ms;
}
`)}},cm={css:function(n){var e=n.dt;return`
.p-datatable {
    position: relative;
}

.p-datatable-table {
    border-spacing: 0px;
    width: 100%;
}

.p-datatable .p-sortable-column {
    cursor: pointer;
    user-select: none;
    outline-color: transparent;
}

.p-datatable .p-sortable-column .p-column-title,
.p-datatable .p-sortable-column .p-sortable-column-icon,
.p-datatable .p-sortable-column .p-sortable-column-badge {
    vertical-align: middle;
}

.p-datatable .p-sortable-column .p-sortable-column-icon {
    color: `.concat(e("datatable.sort.icon.color"),`;
    margin-left: 0.5rem;
    transition: color `).concat(e("transition.duration"),`;
}

.p-datatable .p-sortable-column .p-sortable-column-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 1rem;
    min-width: 1rem;
    line-height: 1rem;
    margin-left: 0.5rem;
}

.p-datatable .p-sortable-column:not(.p-highlight):hover {
    background: `).concat(e("datatable.header.cell.hover.background"),`;
    color: `).concat(e("datatable.header.cell.hover.color"),`;
}

.p-datatable .p-sortable-column:not(.p-highlight):hover .p-sortable-column-icon {
    color: `).concat(e("datatable.sort.icon.hover.color"),`;
}

.p-datatable .p-sortable-column.p-highlight {
    background: `).concat(e("highlight.background"),`;
    color: `).concat(e("highlight.color"),`;
}

.p-datatable .p-sortable-column:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: -1px;
}

.p-datatable .p-sortable-column.p-highlight .p-sortable-column-icon {
    color: `).concat(e("highlight.color"),`;
}

.p-datatable-hoverable-rows .p-selectable-row {
    cursor: pointer;
}

.p-datatable-scrollable > .p-datatable-wrapper {
    position: relative;
}

.p-datatable-scrollable-table > .p-datatable-thead {
    top: 0;
    z-index: 1;
}

.p-datatable-scrollable-table > .p-datatable-frozen-tbody {
    position: sticky;
    z-index: 1;
}

.p-datatable-scrollable-table>.p-datatable-tfoot {
    bottom: 0;
    z-index: 1;
}

.p-datatable-scrollable .p-frozen-column {
    position: sticky;
    background: inherit;
}

.p-datatable-scrollable th.p-frozen-column {
    z-index: 1;
}

.p-datatable-scrollable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-thead,
.p-datatable-scrollable > .p-datatable-wrapper > .p-virtualscroller > .p-datatable-table > .p-datatable-thead {
    background: `).concat(e("datatable.header.cell.background"),`;
}

.p-datatable-scrollable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tfoot,
.p-datatable-scrollable > .p-datatable-wrapper > .p-virtualscroller > .p-datatable-table > .p-datatable-tfoot {
    background: `).concat(e("datatable.footer.cell.background"),`;
}

.p-datatable-flex-scrollable {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.p-datatable-flex-scrollable>.p-datatable-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
}

.p-datatable-scrollable-table>.p-datatable-tbody>.p-rowgroup-header {
    position: sticky;
    z-index: 1;
}

/* Resizable */
.p-datatable-resizable-table > .p-datatable-thead > tr > th,
.p-datatable-resizable-table > .p-datatable-tfoot > tr > td,
.p-datatable-resizable-table > .p-datatable-tbody > tr > td {
    overflow: hidden;
    white-space: nowrap;
}

.p-datatable-resizable-table>.p-datatable-thead > tr > th.p-resizable-column:not(.p-frozen-column) {
    background-clip: padding-box;
    position: relative;
}

.p-datatable-resizable-table-fit > .p-datatable-thead > tr > th.p-resizable-column:last-child .p-column-resizer {
    display: none;
}

.p-datatable .p-column-resizer {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    width: 0.5rem;
    height: 100%;
    padding: 0px;
    cursor: col-resize;
    border: 1px solid transparent;
}

.p-datatable .p-column-header-content {
    display: flex;
    align-items: center;
}

.p-datatable .p-column-resizer-helper {
    width: 1px;
    position: absolute;
    z-index: 10;
    display: none;
    background: `).concat(e("datatable.resizer.color"),`;
}

.p-datatable .p-row-toggler,
.p-datatable .p-row-editor-init,
.p-datatable .p-row-editor-save,
.p-datatable .p-row-editor-cancel {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    color: `).concat(e("datatable.row.action.color"),`;
    border: 0 none;
    border-radius: 50%;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
}

.p-datatable .p-row-toggler:enabled:hover,
.p-datatable .p-row-editor-init:enabled:hover,
.p-datatable .p-row-editor-save:enabled:hover,
.p-datatable .p-row-editor-cancel:enabled:hover {
    color: `).concat(e("datatable.row.action.hover.color"),`;
    background: `).concat(e("datatable.row.action.hover.background"),`;
}

.p-datatable .p-row-toggler:focus-visible,
.p-datatable .p-row-editor-init:focus-visible,
.p-datatable .p-row-editor-save:focus-visible,
.p-datatable .p-row-editor-cancel:focus-visible {
    outline: 1px solid `).concat(e("focus.ring.color"),`;
    outline-offset: 2px;
}

.p-datatable .p-row-editor-save {
    margin-right: 0.5rem;
}

.p-datatable-tbody > tr.p-highlight .p-row-toggler:hover,
.p-datatable-tbody > tr.p-highlight .p-row-editor-init:hover,
.p-datatable-tbody > tr.p-highlight .p-row-editor-save:hover,
.p-datatable-tbody > tr.p-highlight .p-row-editor-cancel:hover {
    background: `).concat(e("datatable.row.action.highlight.hover.background"),`;
    color: inherit;
}

.p-datatable-reorder-indicator-up,
.p-datatable-reorder-indicator-down {
    position: absolute;
    display: none;
}

.p-reorderable-column,
.p-datatable-reorderablerow-handle {
    cursor: move;
}

.p-datatable .p-datatable-loading-overlay {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
}

.p-column-filter-row {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 0.5rem;
}

.p-column-filter-row .p-column-filter-element {
    flex: 1 1 auto;
    width: 1%;
}

.p-column-filter-menu-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    color: `).concat(e("datatable.filter.menu.button.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
}

.p-column-filter-menu-button:hover {
    background: `).concat(e("datatable.filter.menu.button.hover.background"),`;
    color: `).concat(e("datatable.filter.menu.button.hover.color"),`;
}

.p-column-filter-menu-button.p-column-filter-menu-button-open,
.p-column-filter-menu-button.p-column-filter-menu-button-open:hover {
    background: `).concat(e("datatable.filter.menu.button.open.background"),`;
    color: `).concat(e("datatable.filter.menu.button.open.color"),`;
}

.p-column-filter-menu-button.p-column-filter-menu-button-active,
.p-column-filter-menu-button.p-column-filter-menu-button-active:hover {
    background: `).concat(e("datatable.filter.menu.button.active.background"),`;
    color: `).concat(e("datatable.filter.menu.button.active.color"),`;
}

.p-column-filter-menu-button:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-column-filter-clear-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    color: `).concat(e("datatable.filter.clear.button.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
}

.p-column-filter-clear-button:hover {
    background: `).concat(e("datatable.filter.clear.button.hover.background"),`;
    color: `).concat(e("datatable.filter.clear.button.hover.color"),`;
}

.p-column-filter-clear-button:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-column-filter-overlay {
    background: `).concat(e("datatable.filter.overlay.background"),`;
    color: `).concat(e("datatable.filter.overlay.color"),`;
    border: 1px solid `).concat(e("datatable.filter.overlay.border.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    min-width: 12.5rem;
}

.p-column-filter-row-items {
    margin: 0;
    list-style: none;
    padding: 0.25rem 0.25rem;
}

.p-column-filter-row-item {
    margin: 2px 0;
    padding: 0.5rem 0.75rem;
    border: 0 none;
    color: `).concat(e("datatable.filter.matchmode.item.color"),`;
    background: transparent;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),`,;
    border-radius: `).concat(e("rounded.sm"),`;
    cursor: pointer;
}

.p-column-filter-row-item:first-child {
    margin-top: 0;
}

.p-column-filter-row-item:last-child {
    margin-bottom: 0;
}

.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item.p-highlight {
    background: `).concat(e("datatable.filter.matchmode.item.selected.background"),`;
    color: `).concat(e("datatable.filter.matchmode.item.selected.color"),`;
}

.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item:not(.p-highlight):not(.p-disabled):hover {
    background: `).concat(e("datatable.filter.matchmode.item.focus.background"),`;
    color: `).concat(e("datatable.filter.matchmode.item.focus.color"),`;
}

.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item:focus-visible {
    outline: 1px solid `).concat(e("focus.ring.color"),`;
    outline-offset: 2px;
    box-shadow: 0 none;
}

.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-separator {
    border-top: 1px solid `).concat(e("datatable.filter.matchmode.item.separator.border.color"),`;
    margin: 2px 0;
}

.p-column-filter-menu {
    display: inline-flex;
    margin-left: auto;
}

.p-column-filter-operator {
    padding: 0;
}

.p-column-filter-constraints {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.p-column-filter-constraint {
    padding: 0;
    border-bottom: 1px solid `).concat(e("datatable.filter.constraint.border.color"),`;
}

.p-column-filter-constraint:last-child {
    border-bottom: 0 none;
}

.p-column-filter-matchmode-dropdown {
    margin-bottom: 0.5rem;
}

.p-column-filter-remove-button {
    margin-top: 0.5rem;
}

.p-column-filter-constraint:last-child .p-column-filter-remove-button {
    margin-bottom: 0;
}

.p-column-filter-overlay-menu {
    background: `).concat(e("datatable.filter.overlay.background"),`;
    color: `).concat(e("datatable.filter.overlay.color"),`;
    border: 1px solid `).concat(e("datatable.filter.overlay.border.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    min-width: 12.5rem;
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.p-column-filter-add-rule {
    padding: 0;
}

.p-column-filter-buttonbar {
    padding: 0;
}

.p-column-filter-add-button,
.p-column-filter-remove-button {
    justify-content: center;
}

.p-column-filter-add-button .p-button-label,
.p-column-filter-remove-button .p-button-label {
    flex-grow: 0;
}

.p-column-filter-buttonbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.p-column-filter-buttonbar .p-button:not(.p-button-icon-only) {
    width: auto;
}

.p-datatable-virtualscroller-spacer {
    display: flex;
}

.p-datatable .p-virtualscroller .p-virtualscroller-loading {
    transform: none !important;
    min-height: 0;
    position: sticky;
    top: 0;
    left: 0;
}

.p-datatable .p-paginator-top {
    border-width: 0 0 1px 0;
    border-radius: 0;
}

.p-datatable .p-paginator-bottom {
    border-width: 0 0 1px 0;
    border-radius: 0;
}

.p-datatable-header {
    background: `).concat(e("datatable.header.background"),`;
    color: `).concat(e("datatable.header.color"),`;
    border: 1px solid `).concat(e("datatable.header.border.color"),`;
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
    font-weight: 600;
}

.p-datatable-footer {
    background: `).concat(e("datatable.footer.background"),`;
    color: `).concat(e("datatable.footer.color"),`;
    border: 1px solid `).concat(e("datatable.footer.border.color"),`;
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
    font-weight: 600;
}

.p-datatable-thead > tr > th {
    text-align: left;
    padding: 0.75rem 1rem;
    background: `).concat(e("datatable.header.cell.background"),`;
    border: 1px solid `).concat(e("datatable.header.cell.border.color"),`;
    border-width: 0 0 1px 0;
    color: `).concat(e("datatable.header.cell.color"),`;
    font-weight: 600;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
}

.p-datatable-tbody > tr {
    outline-color: transparent;
    background: `).concat(e("datatable.row.background"),`;
    color: `).concat(e("datatable.row.color"),`;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
}

.p-datatable-tbody > tr > td {
    text-align: left;
    border: 1px solid `).concat(e("datatable.body.cell.border.color"),`;
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
}

.p-datatable-hoverable-rows .p-datatable-tbody > tr:not(.p-highlight):hover {
    background: `).concat(e("datatable.row.hover.background"),`;
    color: `).concat(e("datatable.row.hover.color"),`;
}

.p-datatable-tbody > tr.p-highlight {
    background: `).concat(e("highlight.background"),`;
    color: `).concat(e("highlight.color"),`;
}

.p-datatable-tbody > tr:has(+ .p-highlight) > td {
    border-bottom-color: `).concat(e("datatable.body.cell.selected.border.color"),`;
}

.p-datatable-tbody > tr.p-highlight > td {
    border-bottom-color: `).concat(e("datatable.body.cell.selected.border.color"),`;
}

.p-datatable-tbody > tr:focus-visible {
    outline: 1px solid `).concat(e("focus.ring.color"),`;
    outline-offset: -1px;
}

.p-datatable-tbody > tr.p-highlight-contextmenu {
    outline: 1px solid `).concat(e("focus.ring.color"),`;
    outline-offset: -1px;
}

.p-datatable-tfoot > tr > td {
    text-align: left;
    padding: 0.75rem 1rem;
    border: 1px solid `).concat(e("datatable.footer.cell.border.color"),`;
    border-width: 0 0 1px 0;
    font-weight: 600;
    color: `).concat(e("datatable.footer.cell.color"),`;
    background: `).concat(e("datatable.footer.cell.background"),`;
}

.p-datatable-tbody > tr.p-datatable-dragpoint-top > td {
    box-shadow: inset 0 2px 0 0 `).concat(e("datatable.drop.point.color"),`;
}

.p-datatable-tbody>tr.p-datatable-dragpoint-bottom > td {
    box-shadow: inset 0 -2px 0 0 `).concat(e("datatable.drop.point.color"),`;
}

.p-datatable-loading-icon {
    font-size: 2rem;
    width: 2rem;
    height: 2rem;
}

.p-datatable.p-datatable-gridlines .p-datatable-header {
    border-width: 1px 1px 0 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-footer {
    border-width: 0 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-paginator-top {
    border-width: 0 1px 0 1px;
}

.p-datatable.p-datatable-gridlines .p-paginator-bottom {
    border-width: 0 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-thead>tr>th {
    border-width: 1px 0 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-thead>tr>th:last-child {
    border-width: 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-tbody>tr>td {
    border-width: 1px 0 0 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-tbody>tr>td:last-child {
    border-width: 1px 1px 0 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-tbody>tr:last-child>td {
    border-width: 1px 0 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-tbody>tr:last-child>td:last-child {
    border-width: 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-tfoot>tr>td {
    border-width: 1px 0 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-tfoot>tr>td:last-child {
    border-width: 1px 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-thead+.p-datatable-tfoot > tr > td {
    border-width: 0 0 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-thead+.p-datatable-tfoot > tr > td:last-child {
    border-width: 0 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td {
    border-width: 0 0 1px 1px;
}

.p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td:last-child {
    border-width: 0 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td {
    border-width: 0 0 0 1px;
}

.p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody >tr:last-child >td:last-child {
    border-width: 0 1px 0 1px;
}

.p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd {
    background: `).concat(e("datatable.row.striped.background"),`);
}

.p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-highlight {
    background: `).concat(e("highlight.background"),`);
    color: `).concat(e("highlight.color"),`);
}

.p-datatable.p-datatable-sm .p-datatable-header {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-sm .p-datatable-thead > tr > th {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-sm .p-datatable-tfoot > tr > td {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-sm .p-datatable-footer {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-lg .p-datatable-header {
    padding: 0.9375rem 1.25rem;
}

.p-datatable.p-datatable-lg .p-datatable-thead > tr > th {
    padding: 0.9375rem 1.25rem;
}

.p-datatable.p-datatable-lg .p-datatable-tbody>tr>td {
    padding: 0.9375rem 1.25rem;
}

.p-datatable.p-datatable-lg .p-datatable-tfoot>tr>td {
    padding: 0.9375rem 1.25rem;
}

.p-datatable.p-datatable-lg .p-datatable-footer {
    padding: 0.9375rem 1.25rem;
}
`)}},lm={css:function(n){var e=n.dt;return`
.p-dataview .p-paginator-top {
    border-width: 0 0 1px 0;
    border-radius: 0;
}

.p-dataview .p-paginator-bottom {
    border-width: 0 0 1px 0;
    border-radius: 0;
}

.p-dataview-header {
    background: `.concat(e("dataview.header.background"),`;
    color: `).concat(e("dataview.header.color"),`;
    border: 1px solid `).concat(e("dataview.header.border.color"),`;
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
    font-weight: 600;
}

.p-dataview-content {
    background: `).concat(e("dataview.content.background"),`;
    color: `).concat(e("dataview.content.color"),`;
    border: 0 none;
    padding: 0;
}

.p-dataview-footer {
    background: `).concat(e("dataview.footer.background"),`;
    color: `).concat(e("dataview.footer.color"),`;
    border: 1px solid `).concat(e("dataview.footer.border.color"),`;
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
    font-weight: 600;
}

.p-dataview-layout-options.p-selectbutton .p-button svg {
    position: relative;
}
`)}},um={css:function(n){var e=n.dt;return`
.p-dialog {
    max-height: 90%;
    transform: scale(1);
    border-radius: `.concat(e("rounded.xl"),`;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
    background: `).concat(e("dialog.background"),`;
    border: 1px solid `).concat(e("dialog.border.color"),`;
    color: `).concat(e("dialog.color"),`;
}

.p-dialog-content {
    overflow-y: auto;
    padding: 0 1.5rem 1.5rem 1.5rem;
}

.p-dialog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: 1.5rem;
}

.p-dialog-title {
    font-weight: 600;
    font-size: 1.25rem;
}

.p-dialog-footer {
    flex-shrink: 0;
    padding: 0 1.5rem 1.5rem 1.5rem;
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
}

.p-dialog-header-icons {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.p-dialog-header-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    color: `).concat(e("dialog.header.icon.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
}

.p-dialog-header-icon:enabled:hover {
    background: `).concat(e("dialog.header.icon.hover.background"),`;
    color: `).concat(e("dialog.header.icon.hover.color"),`;
}

.p-dialog-header-icon:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-dialog-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-dialog-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-dialog-top .p-dialog,
.p-dialog-bottom .p-dialog,
.p-dialog-left .p-dialog,
.p-dialog-right .p-dialog,
.p-dialog-topleft .p-dialog,
.p-dialog-topright .p-dialog,
.p-dialog-bottomleft .p-dialog,
.p-dialog-bottomright .p-dialog {
    margin: 0.75rem;
    transform: translate3d(0px, 0px, 0px);
}

.p-dialog-top .p-dialog-enter-active,
.p-dialog-top .p-dialog-leave-active,
.p-dialog-bottom .p-dialog-enter-active,
.p-dialog-bottom .p-dialog-leave-active,
.p-dialog-left .p-dialog-enter-active,
.p-dialog-left .p-dialog-leave-active,
.p-dialog-right .p-dialog-enter-active,
.p-dialog-right .p-dialog-leave-active,
.p-dialog-topleft .p-dialog-enter-active,
.p-dialog-topleft .p-dialog-leave-active,
.p-dialog-topright .p-dialog-enter-active,
.p-dialog-topright .p-dialog-leave-active,
.p-dialog-bottomleft .p-dialog-enter-active,
.p-dialog-bottomleft .p-dialog-leave-active,
.p-dialog-bottomright .p-dialog-enter-active,
.p-dialog-bottomright .p-dialog-leave-active {
    transition: all 0.3s ease-out;
}

.p-dialog-top .p-dialog-enter-from,
.p-dialog-top .p-dialog-leave-to {
    transform: translate3d(0px, -100%, 0px);
}

.p-dialog-bottom .p-dialog-enter-from,
.p-dialog-bottom .p-dialog-leave-to {
    transform: translate3d(0px, 100%, 0px);
}

.p-dialog-left .p-dialog-enter-from,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter-from,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter-from,
.p-dialog-bottomleft .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}

.p-dialog-right .p-dialog-enter-from,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter-from,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter-from,
.p-dialog-bottomright .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

.p-dialog-maximized {
    width: 100vw !important;
    height: 100vh !important;
    top: 0px !important;
    left: 0px !important;
    max-height: 100%;
    height: 100%;
    border-radius: 0;
}

.p-dialog-maximized .p-dialog-content {
    flex-grow: 1;
}
`)}},dm={css:function(n){var e=n.dt;return`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: 1rem 0;
    padding: 0 1rem;
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    top: 50%;
    left: 0;
    width: 100%;
    content: "";
    border-top: 1px solid `.concat(e("divider.border.color"),`;
}

.p-divider-horizontal .p-divider-content {
    padding: 0 0.5rem;
}

.p-divider-vertical {
    min-height: 100%;
    margin: 0 1rem;
    display: flex;
    position: relative;
    justify-content: center;
    margin: 0 1rem;
    padding: 1rem 0;
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    height: 100%;
    content: "";
    border-left: 1px solid `).concat(e("divider.border.color"),`;
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: 0.5rem 0;
}

.p-divider-content {
    z-index: 1;
    background: `).concat(e("divider.content.background"),`;
    color: `).concat(e("divider.content.color"),`;
}

.p-divider-solid.p-divider-horizontal:before {
    border-top-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-left-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-top-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-left-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-top-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-left-style: dotted;
}
    `)}},pm={css:function(n){var e=n.dt;return`
.p-dock {
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
}

.p-dock-list-container {
    display: flex;
    pointer-events: auto;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 0.5rem 0.5rem;
    border-radius: 0.5rem;
}

.p-dock-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 0 none;
}

.p-dock-item {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
    padding: 0.5rem;
    border-radius: 6px;
}

p-dock-item.p-focus {
    outline: `.concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-dock-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    cursor: default;
    width: 3rem;
    height: 3rem;
}

.p-dock-top {
    left: 0;
    top: 0;
    width: 100%;
}

.p-dock-top .p-dock-item {
    transform-origin: center top;
}

.p-dock-bottom {
    left: 0;
    bottom: 0;
    width: 100%;
}

.p-dock-bottom .p-dock-item {
    transform-origin: center bottom;
}

.p-dock-right {
    right: 0;
    top: 0;
    height: 100%;
}

.p-dock-right .p-dock-item {
    transform-origin: center right;
}

.p-dock-right .p-dock-list {
    flex-direction: column;
}

.p-dock-left {
    left: 0;
    top: 0;
    height: 100%;
}

.p-dock-left .p-dock-item {
    transform-origin: center left;
}

.p-dock-left .p-dock-list {
    flex-direction: column;
}

.p-dock-mobile.p-dock-top .p-dock-list-container,
.p-dock-mobile.p-dock-bottom .p-dock-list-container {
    overflow-x: auto;
    width: 100%;
}
.p-dock-mobile.p-dock-top .p-dock-list-container .p-dock-list,
.p-dock-mobile.p-dock-bottom .p-dock-list-container .p-dock-list {
    margin: 0 auto;
}
.p-dock-mobile.p-dock-left .p-dock-list-container,
.p-dock-mobile.p-dock-right .p-dock-list-container {
    overflow-y: auto;
    height: 100%;
}
.p-dock-mobile.p-dock-left .p-dock-list-container .p-dock-list,
.p-dock-mobile.p-dock-right .p-dock-list-container .p-dock-list {
    margin: auto 0;
}
.p-dock-mobile .p-dock-list .p-dock-item {
    transform: none;
    margin: 0;
}
`)}},fm={css:function(n){var e=n.dt;return`
.p-dropdown {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: `.concat(e("dropdown.background"),`;
    border: 1px solid `).concat(e("dropdown.border.color"),`;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    border-radius: `).concat(e("rounded.base"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("dropdown.box.shadow"),`;
}

.p-dropdown:not(.p-disabled):hover {
    border-color: `).concat(e("dropdown.hover.border.color"),`;
}

.p-dropdown:not(.p-disabled).p-focus {
    border-color:`).concat(e("dropdown.focus.border.color"),`;
    outline: 0 none;
}

.p-dropdown.p-variant-filled {
    background: `).concat(e("dropdown.filled.background"),`;
}

.p-dropdown.p-variant-filled.p-focus {
    background: `).concat(e("dropdown.filled.focus.background"),`;
}

.p-dropdown.p-invalid {
    border-color: `).concat(e("dropdown.invalid.border.color"),`;
}

.p-dropdown.p-disabled {
    opacity: 1;
    background: `).concat(e("dropdown.disabled.background"),`;
}

.p-dropdown-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    color: #94a3b8;
    right: 2.5rem;
}

.p-dropdown-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: `).concat(e("dropdown.toggle.color"),`;
    width: 2.5rem;
    border-top-right-radius: `).concat(e("rounded.base"),`;
    border-bottom-right-radius: `).concat(e("rounded.base"),`;
}

.p-dropdown-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    padding: 0.5rem 0.75rem;
    text-overflow: ellipsis;
    cursor: pointer;
    color: `).concat(e("dropdown.color"),`;
    background: transparent;
    border: 0 none;
    outline: 0 none;
}

.p-dropdown-label.p-placeholder {
    color: `).concat(e("dropdown.placeholder.color"),`;
}

.p-dropdown-clearable .p-dropdown-label {
    padding-right: 1.75rem;
}

.p-dropdown.p-disabled .p-dropdown-label {
    color: `).concat(e("dropdown.disabled.color"),`;
}

.p-dropdown-label-empty {
    overflow: hidden;
    opacity: 0;
}

input.p-dropdown-label {
    cursor: default;
}

.p-dropdown .p-dropdown-panel {
    min-width: 100%;
}

.p-dropdown-panel {
    position: absolute;
    top: 0;
    left: 0;
    background: `).concat(e("dropdown.overlay.background"),`;
    color: `).concat(e("dropdown.overlay.color"),`;
    border: 1px solid `).concat(e("dropdown.overlay.border.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}


.p-dropdown-panel .p-dropdown-header {
    padding: 0.5rem 0.5rem 0 0.5rem;
}

.p-dropdown-filter {
    width: 100%;
    padding-right: 1.75rem;
    margin-right: -1.75rem;
}

.p-dropdown-filter-container {
    position: relative;
}

.p-dropdown-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    right: 0.75rem;
    color: `).concat(e("dropdown.filter.icon.color"),`;
}

.p-dropdown-items-wrapper {
    overflow: auto;
}

.p-dropdown-item-group {
    cursor: auto;
    margin: 0;
    padding: 0.5rem 0.75rem;
    background: `).concat(e("dropdown.item.group.background"),`;
    color: `).concat(e("dropdown.item.group.color"),`;
    font-weight: 600;
}

.p-dropdown-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: 0.25rem 0.25rem;
}

.p-dropdown-item {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    margin: 2px 0;
    padding: 0.5rem 0.75rem;
    border: 0 none;
    color: `).concat(e("dropdown.item.color"),`;
    background: transparent;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    border-radius: `).concat(e("rounded.sm"),`;
}

.p-dropdown-item:first-child {
    margin-top: 0;
}

.p-dropdown-item:last-child {
    margin-bottom: 0;
}

.p-dropdown-item:not(.p-highlight):not(.p-disabled).p-focus {
    background: `).concat(e("dropdown.item.focus.background"),`;
    color: `).concat(e("dropdown.item.focus.color"),`;
}

.p-dropdown-item.p-highlight {
    background: `).concat(e("dropdown.item.selected.background"),`;
    color: `).concat(e("dropdown.item.selected.color"),`;
}

.p-dropdown-item.p-highlight.p-focus {
    background: `).concat(e("dropdown.item.selected.focus.background"),`;
    color: `).concat(e("dropdown.item.selected.focus.color"),`;
}

.p-dropdown-check-icon {
    position: relative;
    margin-left: -0.375rem;
    margin-right: 0.375rem;
    color: `).concat(e("dropdown.checkmark.color"),`;
}

.p-dropdown-empty-message {
    padding: 0.5rem 0.75rem;
    background: transparent;
}

.p-fluid .p-dropdown {
    display: flex;
}

.p-fluid .p-dropdown .p-dropdown-label {
    width: 1%;
}
`)}},hm={css:function(n){var e=n.dt;return`
.p-editor-container .p-editor-toolbar {
    background: `.concat(e("editor.toolbar.background"),`;
    border-top-right-radius: `).concat(e("rounded.base"),`;
    border-top-left-radius: `).concat(e("rounded.base"),`;
}

.p-editor-container .p-editor-toolbar.ql-snow {
    border: 1px solid `).concat(e("editor.toolbar.border.color"),`;
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-stroke {
    stroke: `).concat(e("editor.toolbar.item.color"),`;
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-fill {
    fill: `).concat(e("editor.toolbar.item.color"),`;
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {
    border: 0 none;
    color: `).concat(e("editor.toolbar.item.color"),`;
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover {
    color: `).concat(e("editor.toolbar.item.hover.color"),`;
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-stroke {
    stroke: `).concat(e("editor.toolbar.item.hover.color"),`;
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-fill {
    fill: `).concat(e("editor.toolbar.item.hover.color"),`;
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: `).concat(e("editor.toolbar.item.active.color"),`;
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
    stroke: `).concat(e("editor.toolbar.item.active.color"),`;
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
    fill: `).concat(e("editor.toolbar.item.active.color"),`;
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    background: `).concat(e("editor.overlay.background"),`;
    border: 1px solid `).concat(e("editor.overlay.border.color"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    border-radius: `).concat(e("rounded.base"),`;
    padding: 0.25rem 0.25rem;
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {
    color: `).concat(e("editor.overlay.item.color"),`;
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {
    background: `).concat(e("editor.overlay.item.hover.background"),`;
    color: `).concat(e("editor.overlay.item.hover.color"),`;
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-icon-picker) .ql-picker-item {
    padding: 0.5rem 0.75rem;
}

.p-editor-container .p-editor-content {
    border-bottom-right-radius: `).concat(e("rounded.base"),`;
    border-bottom-left-radius: `).concat(e("rounded.base"),`;
}

.p-editor-container .p-editor-content.ql-snow {
    border: 1px solid `).concat(e("editor.content.border.color"),`;
}

.p-editor-container .p-editor-content .ql-editor {
    background: `).concat(e("editor.content.background"),`;
    color: `).concat(e("editor.content.color"),`;
    border-bottom-right-radius: `).concat(e("rounded.base"),`;
    border-bottom-left-radius: `).concat(e("rounded.base"),`;
}

.p-editor-container .ql-snow.ql-toolbar button:hover,
.p-editor-container .ql-snow.ql-toolbar button:focus {
    color: `).concat(e("editor.toolbar.item.hover.color"),`;
}

.p-editor-container .ql-snow.ql-toolbar button:hover .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar button:focus .ql-stroke {
    stroke: `).concat(e("editor.toolbar.item.hover.color"),`;
}

.p-editor-container .ql-snow.ql-toolbar button:hover .ql-fill,
.p-editor-container .ql-snow.ql-toolbar button:focus .ql-fill {
    fill: `).concat(e("editor.toolbar.item.hover.color"),`;
}

.p-editor-container .ql-snow.ql-toolbar button.ql-active,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected {
    color: `).concat(e("editor.toolbar.item.active.color"),`;
}

.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke {
    stroke: `).concat(e("editor.toolbar.item.active.color"),`;
}

.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-fill,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {
    fill: `).concat(e("editor.toolbar.item.active.color"),`;
}

.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-picker-label,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-picker-label,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-picker-label {
    color: `).concat(e("editor.toolbar.item.active.color"),`;
}
`)}},mm={css:function(n){var e=n.dt;return`
.p-fieldset {
    background: `.concat(e("fieldset.background"),`;
    border: 1px solid `).concat(e("fieldset.border.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
    color: `).concat(e("fieldset.color"),`;
    padding: 0 1.125rem 1.125rem 1.125rem;
    margin: 0;
}

.p-fieldset-legend {
    font-weight: 600;
    border-radius: 6px;
    border: 0 none;
    padding: 0.5rem 0.75rem;
    margin-bottom: 0.375rem;
}

.p-fieldset-toggleable > .p-fieldset-legend {
    padding: 0;
}

.p-fieldset-toggleable > .p-fieldset-legend > a {
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0.75rem;
    color: `).concat(e("fieldset.legend.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
    transition: background `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
}

.p-fieldset-toggleable > .p-fieldset-legend > a:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-fieldset-toggleable > .p-fieldset-legend > a:hover {
    color: `).concat(e("fieldset.legend.hover.color"),`;
    background: `).concat(e("fieldset.legend.hover.background"),`;
}

.p-fieldset-toggler {
    color: `).concat(e("fieldset.toggle.icon.color"),`;
    transition: color `).concat(e("transition.duration"),`;
}

.p-fieldset-toggleable > .p-fieldset-legend > a:hover > .p-fieldset-toggler {
    color: `).concat(e("fieldset.toggle.icon.hover.color"),`;
}

.p-fieldset .p-fieldset-content {
    padding: 0;
}
    `)}},gm={css:function(n){var e=n.dt;return`
.p-fileupload-choose {
    position: relative;
    overflow: hidden;
}

.p-fileupload input[type="file"] {
    display: none;
}

.p-fluid .p-fileupload .p-button {
    width: auto;
}

.p-fileupload-buttonbar {
    display: flex;
    flex-wrap: wrap;
    background: `.concat(e("fileupload.header.background"),`;
    padding: 1.125rem;
    border: 1px solid `).concat(e("fileupload.header.border.color"),`;
    color: `).concat(e("fileupload.header.color"),`;
    border-bottom: 0 none;
    border-top-right-radius: `).concat(e("rounded.base"),`;
    border-top-left-radius: `).concat(e("rounded.base"),`;
    gap: 0.5rem;
}

.p-fileupload-content {
    position: relative;
    background: `).concat(e("fileupload.content.background"),`;
    padding: 0 1.125rem 1.125rem 1.125rem;
    border: 1px solid `).concat(e("fileupload.content.border.color"),`;
    color: `).concat(e("fileupload.content.color"),`;
    border-bottom-right-radius: `).concat(e("rounded.base"),`;
    border-bottom-left-radius: `).concat(e("rounded.base"),`;
    border-top: 0 none;
}

.p-fileupload-content .p-progressbar {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 0.25rem;
}

.p-fileupload-file {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 1rem;
    border: 1px solid `).concat(e("fileupload.file.border.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
}

.p-fileupload-file:last-child {
    margin-bottom: 0;
}

.p-fileupload-file-thumbnail {
    flex-shrink: 0;
}

.p-fileupload-file-actions {
    margin-left: auto;
}

.p-fileupload-highlight {
    border: 1px dashed `).concat(e("fileupload.content.highlight.border.color"),`;
    background: `).concat(e("fileupload.content.highlight.background"),`;
}

.p-fileupload-file-name {
    margin-bottom: 0.5rem;
}

.p-fileupload-file-size {
    margin-right: 0.5rem;
}

.p-fileupload-row > div {
    padding: 0.75rem 1rem;
}

.p-fileupload-advanced .p-message {
    margin-top: 0;
}
`)}},bm={css:function(n){var e=n.dt;return`
.p-float-label {
    display: block;
    position: relative;
}

.p-float-label label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    left: 0.75rem;
    color: `.concat(e("floatlabel.color"),`;
    transition-duration: `).concat(e("transition.duration"),`;
}

.p-float-label:has(textarea) label {
    top: 1rem;
}

.p-float-label:has(input:focus) label,
.p-float-label:has(input.p-filled) label,
.p-float-label:has(input:-webkit-autofill) label,
.p-float-label:has(textarea:focus) label,
.p-float-label:has(textarea.p-filled) label,
.p-float-label:has(.p-inputwrapper-focus) label,
.p-float-label:has(.p-inputwrapper-filled) label {
    top: -.75rem;
    font-size: 12px;
    color: `).concat(e("floatlabel.focus.color"),`;
}

.p-float-label .p-placeholder,
.p-float-label input::placeholder,
.p-float-label .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-float-label .p-focus .p-placeholder,
.p-float-label input:focus::placeholder,
.p-float-label .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}

.p-float-label > .p-invalid + label {
    color: `).concat(e("floatlabel.invalid.color"),`;
}
    `)}},vm={css:function(n){var e=n.dt;return`
.p-galleria-content {
    display: flex;
    flex-direction: column;
}

.p-galleria-item-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
}

.p-galleria-item-container {
    position: relative;
    display: flex;
    height: 100%;
}

.p-galleria-item-nav {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: transparent;
    color: `.concat(e("galleria.navigator.color"),`;
    width: 3rem;
    height: 3rem;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    border-radius: 50%;
    margin: 0 0.5rem;
}

.p-galleria-item-nav:not(.p-disabled):hover {
    background: `).concat(e("galleria.navigator.hover.background"),`;
}

.p-galleria-item-prev-icon,
.p-galleria-item-next-icon {
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
}

.p-galleria-item-prev {
    left: 0;
}

.p-galleria-item-next {
    right: 0;
}

.p-galleria-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.p-galleria-item-nav-onhover .p-galleria-item-nav {
    pointer-events: none;
    opacity: 0;
    transition: opacity `).concat(e("transition.duration"),` ease-in-out;
}

.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav {
    pointer-events: all;
    opacity: 1;
}

.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled {
    pointer-events: none;
}

.p-galleria-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: `).concat(e("galleria.caption.background"),`;
    color: `).concat(e("galleria.caption.color"),`;
    padding: 1rem;
}

.p-galleria-thumbnail-wrapper {
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex-shrink: 0;
}

.p-galleria-thumbnail-prev,
.p-galleria-thumbnail-next {
    align-self: center;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    margin: 0.5rem;
    background: transparent;
    color: `).concat(e("galleria.thumbnail.navigator.color"),`;
    width: 2rem;
    height: 2rem;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
    border-radius: 50%;
}

.p-galleria-thumbnail-prev:hover,
.p-galleria-thumbnail-next:hover {
    background: `).concat(e("galleria.thumbnail.navigator.hover.background"),`;
    color: `).concat(e("galleria.thumbnail.navigator.hover.color"),`;
}

.p-galleria-thumbnail-prev:focus-visible,
.p-galleria-thumbnail-next:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-galleria-thumbnail-prev span,
.p-galleria-thumbnail-next span {
    display: flex;
    justify-content: center;
    align-items: center;
}

.p-galleria-thumbnail-container {
    display: flex;
    flex-direction: row;
    background: `).concat(e("galleria.thumbnail.container.background"),`;
    padding: 1rem 0.25rem;
}

.p-galleria-thumbnail-items-container {
    overflow: hidden;
    width: 100%;
}

.p-galleria-thumbnail-items {
    display: flex;
}

.p-galleria-thumbnail-item {
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
}

.p-galleria-thumbnail-item-content {
    outline-color: transparent;
}

.p-galleria-thumbnail-item-content:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-galleria-thumbnail-item:hover {
    opacity: 1;
    transition: opacity 0.3s;
}

.p-galleria-thumbnail-item-current {
    opacity: 1;
}

.p-galleria-thumbnails-left .p-galleria-content,
.p-galleria-thumbnails-right .p-galleria-content {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-item-wrapper,
.p-galleria-thumbnails-right .p-galleria-item-wrapper {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-item-wrapper,
.p-galleria-thumbnails-top .p-galleria-item-wrapper {
    order: 2;
}

.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,
.p-galleria-thumbnails-top .p-galleria-thumbnail-wrapper {
    order: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnail-container,
.p-galleria-thumbnails-right .p-galleria-thumbnail-container {
    flex-direction: column;
    flex-grow: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnail-items,
.p-galleria-thumbnails-right .p-galleria-thumbnail-items {
    flex-direction: column;
    height: 100%;
}

.p-galleria-indicators {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    gap: 0.5rem;
}

.p-galleria-indicator > button {
    display: inline-flex;
    align-items: center;
    background: `).concat(e("galleria.indicator.background"),`;
    width: 1rem;
    height: 1rem;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
    border-radius: 50%;
}

.p-galleria-indicator > button:hover {
    background: `).concat(e("galleria.indicator.hover.background"),`;
}

.p-galleria-indicator > button:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-galleria-indicator.p-highlight > button {
    background-color: `).concat(e("galleria.indicator.active.background"),`;
}

.p-galleria-indicators-left .p-galleria-item-wrapper,
.p-galleria-indicators-right .p-galleria-item-wrapper {
    flex-direction: row;
    align-items: center;
}

.p-galleria-indicators-left .p-galleria-item-container,
.p-galleria-indicators-top .p-galleria-item-container {
    order: 2;
}

.p-galleria-indicators-left .p-galleria-indicators,
.p-galleria-indicators-top .p-galleria-indicators {
    order: 1;
}

.p-galleria-indicators-left .p-galleria-indicators,
.p-galleria-indicators-right .p-galleria-indicators {
    flex-direction: column;
}

.p-galleria-indicator-onitem .p-galleria-indicators {
    position: absolute;
    display: flex;
    z-index: 1;
    background: `).concat(e("galleria.inset.indicators.background"),`;
}

.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator > button {
    background: `).concat(e("galleria.inset.indicator.background"),`;
}

.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator.p-highlight > button {
    background: `).concat(e("galleria.inset.indicator.active.background"),`;
}

.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators {
    top: 0;
    left: 0;
    width: 100%;
    align-items: flex-start;
}

.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators {
    right: 0;
    top: 0;
    height: 100%;
    align-items: flex-end;
}

.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators {
    bottom: 0;
    left: 0;
    width: 100%;
    align-items: flex-end;
}

.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators {
    left: 0;
    top: 0;
    height: 100%;
    align-items: flex-start;
}

.p-galleria-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    --p-mask-background: `).concat(e("galleria.mask.background"),`;
}

.p-galleria-close {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 0.5rem;
    background: transparent;
    color: `).concat(e("galleria.close.color"),`;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    outline-color: transparent;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
}

.p-galleria-close-icon {
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
}

.p-galleria-close:hover {
    background: `).concat(e("galleria.close.hover.background"),`;
    color: `).concat(e("galleria.close.hover.color"),`;
}

.p-galleria-close:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-galleria-mask .p-galleria-item-nav {
    position: fixed;
    top: 50%;
    margin-top: -0.5rem;
}

.p-galleria-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-galleria-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-galleria-enter-from,
.p-galleria-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-galleria-enter-active .p-galleria-item-nav {
    opacity: 0;
}

.p-items-hidden .p-galleria-thumbnail-item {
    visibility: hidden;
}

.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
    visibility: visible;
}
`)}},ym={css:function(n){var e=n.dt;return`
.p-component,
.p-component * {
    box-sizing: border-box;
}

.p-hidden-space {
    visibility: hidden;
}

.p-reset {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    text-decoration: none;
    font-size: 100%;
    list-style: none;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-component-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-unselectable-text {
    user-select: none;
}

.p-sr-only {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    word-wrap: normal;
}

.p-link {
    text-align: left;
    background-color: transparent;
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-link:disabled {
    cursor: default;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

* {
    box-sizing: border-box;
}

.p-component {
    font-size: 1rem;
    font-weight: normal;
}

.p-component-overlay {
    background-color: rgba(0, 0, 0, 0.4);
    transition-duration: `.concat(e("transition.duration"),`;
}

.p-disabled,
.p-component:disabled {
    opacity: 0.6;
}

.p-error {
    color: #f87171;
}

.p-text-secondary {
    color: #64748b;
}

.pi {
    font-size: 1rem;
}

.p-icon {
    width: 1rem;
    height: 1rem;
}

.p-link {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    border-radius: 6px;
    outline-color: transparent;
}
.p-link:focus-visible {
    outline: 1px solid `).concat(e("focus.ring.color"),`;
    outline-offset: 2px;
    box-shadow: none;
}

.p-component-overlay-enter {
    animation: p-component-overlay-enter-animation 150ms forwards;
}

.p-component-overlay-leave {
    animation: p-component-overlay-leave-animation 150ms forwards;
}

@keyframes p-component-overlay-enter-animation {
    from {
        background-color: transparent;
    }
    to {
        background-color: `).concat(e("mask.background"),`;
    }
}
@keyframes p-component-overlay-leave-animation {
    from {
        background-color: `).concat(e("mask.background"),`;
    }
    to {
        background-color: transparent;
    }
}

.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`)}},km={css:function(n){var e=n.dt;return`
.p-icon-field {
    position: relative;
}

.p-input-icon {
    position: absolute;
    top: 50%;
    margin-top: -.5rem;
    color: `.concat(e("iconfield.color"),`;
}

.p-icon-field-left .p-input-icon {
    left: 0.75rem;
}

.p-icon-field-right .p-input-icon {
    right: 0.75rem;
}

.p-icon-field-left .p-inputtext {
    padding-left: 2.5rem;
}

.p-icon-field-right .p-inputtext {
    padding-right: 2.5rem;
}
`)}},wm={css:function(n){var e=n.dt;return`
.p-image-mask {
    display: flex;
    align-items: center;
    justify-content: center;
    --p-mask-background: `.concat(e("image.mask.background"),`;
}

.p-image-preview-container {
    position: relative;
    display: inline-flex;
    line-height: 0;
}

.p-image-preview-indicator {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
    border: 0 none;
    padding: 0;
    cursor: pointer;
    background: transparent;
    color: `).concat(e("image.preview.indicator.color"),`;
    transition: background-color `).concat(e("transition.duration"),`;
}

.p-image-preview-container:hover > .p-image-preview-indicator {
    opacity: 1;
    cursor: pointer;
    background: `).concat(e("image.preview.indicator.background"),`;
}

.p-image-preview-icon {
    width: 1.5rem;
    height: 1.5rem;
}

.p-image-toolbar {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    z-index: 1;
    padding: 1rem;
    gap: 0.5rem;
}

.p-image-action {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: `).concat(e("image.action.color"),`;
    background: transparent;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    outline-color: transparent;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
}

.p-image-action:hover {
    color: `).concat(e("image.action.hover.color"),`;
    background: `).concat(e("image.action.hover.background"),`;
}

.p-image-action:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-image-action .p-icon {
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
}

.p-image-action.p-disabled {
    pointer-events: auto;
}

.p-image-preview {
    transition: transform 0.15s;
    max-width: 100vw;
    max-height: 100vh;
}

.p-image-preview-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-image-preview-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-image-preview-enter-from,
.p-image-preview-leave-to {
    opacity: 0;
    transform: scale(0.7);
}
`)}},xm={css:function(n){var e=n.dt;return`
.p-inline-message {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0.75rem;
    margin: 0;
    border-radius: `.concat(e("rounded.base"),`;
}

.p-inline-message-text {
    font-weight: 500;
}

.p-inline-message-icon {
    flex-shrink: 0;
    margin-right: 0.5rem;
}

.p-inline-message-icon-only .p-inline-message-text {
    visibility: hidden;
    width: 0;
}

.p-fluid .p-inline-message {
    display: flex;
}

.p-inline-message-info {
    background: `).concat(e("inlinemessage.info.background"),`;
    border: 1px solid `).concat(e("inlinemessage.info.border.color"),`;
    color: `).concat(e("inlinemessage.info.color"),`;
    box-shadow: `).concat(e("inlinemessage.info.box.shadow"),`;
}

.p-inline-message-info .p-inline-message-icon {
    color: `).concat(e("inlinemessage.info.color"),`;
}

.p-inline-message-success {
    background: `).concat(e("inlinemessage.success.background"),`;
    border: 1px solid `).concat(e("inlinemessage.success.border.color"),`;
    color: `).concat(e("inlinemessage.success.color"),`;
    box-shadow: `).concat(e("inlinemessage.success.box.shadow"),`;
}
.p-inline-message-success .p-inline-message-icon {
    color: `).concat(e("inlinemessage.success.color"),`;
}

.p-inline-message-warn {
    background: `).concat(e("inlinemessage.warn.background"),`;
    border: 1px solid `).concat(e("inlinemessage.warn.border.color"),`;
    color: `).concat(e("inlinemessage.warn.color"),`;
    box-shadow: `).concat(e("inlinemessage.warn.box.shadow"),`;
}
.p-inline-message-warn .p-inline-message-icon {
    color: `).concat(e("inlinemessage.warn.color"),`;
}

.p-inline-message-error {
    background: `).concat(e("inlinemessage.error.background"),`;
    border: 1px solid `).concat(e("inlinemessage.error.border.color"),`;
    color: `).concat(e("inlinemessage.error.color"),`;
    box-shadow: `).concat(e("inlinemessage.error.box.shadow"),`;
}
.p-inline-message-error .p-inline-message-icon {
    color: `).concat(e("inlinemessage.error.color"),`;
}

.p-inline-message-secondary {
    background: `).concat(e("inlinemessage.secondary.background"),`;
    border: 1px solid `).concat(e("inlinemessage.secondary.border.color"),`;
    color: `).concat(e("inlinemessage.secondary.color"),`;
    box-shadow: `).concat(e("inlinemessage.secondary.box.shadow"),`;
}
.p-inline-message-secondary .p-inline-message-icon {
    color: `).concat(e("inlinemessage.secondary.color"),`;
}

.p-inline-message-contrast {
    background: `).concat(e("inlinemessage.contrast.background"),`;
    border: 1px solid `).concat(e("inlinemessage.contrast.border.color"),`;
    color: `).concat(e("inlinemessage.contrast.color"),`;
    box-shadow: `).concat(e("inlinemessage.contrast.box.shadow"),`;
}
.p-inline-message-contrast .p-inline-message-icon {
    color: `).concat(e("inlinemessage.contrast.color"),`;
}

.p-inline-message-icon-only .p-inline-message-icon {
    margin-right: 0;
}
`)}},Cm={css:function(n){var e=n.dt;return`
.p-inplace .p-inplace-display {
    display: inline;
    cursor: pointer;
}

.p-inplace .p-inplace-content {
    display: inline;
}

.p-fluid .p-inplace.p-inplace-closable .p-inplace-content {
    display: flex;
}

.p-fluid .p-inplace.p-inplace-closable .p-inplace-content > .p-inputtext {
    flex: 1 1 auto;
    width: 1%;
}

.p-inplace-display {
    padding: 0.5rem 0.75rem;
    border-radius: `.concat(e("rounded.base"),`;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
}

.p-inplace-display:not(.p-disabled):hover {
    background: `).concat(e("inplace.hover.background"),`;
    color: `).concat(e("inplace.hover.color"),`;
}

.p-inplace-display:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}
    `)}},_m={css:function(n){var e=n.dt;return`
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup-addon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background: `.concat(e("inputgroup.addon.background"),`;
    color: `).concat(e("inputgroup.addon.color"),`;
    border-top: 1px solid `).concat(e("inputgroup.addon.border.color"),`;
    border-left: 1px solid `).concat(e("inputgroup.addon.border.color"),`;
    border-bottom: 1px solid `).concat(e("inputgroup.addon.border.color"),`;
    padding: 0.5rem 0.75rem;
    min-width: 2.5rem;
}

.p-inputgroup .p-float-label {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-fluid .p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-fluid .p-inputgroup .p-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-inputgroup-addon:last-child {
    border-right: 1px solid `).concat(e("inputgroup.addon.border.color"),`;
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-inputtext,
.p-inputgroup > .p-float-label > .p-component {
    border-radius: 0;
    margin: 0;
}

.p-inputgroup > .p-component + .p-inputgroup-addon,
.p-inputgroup > .p-inputwrapper > .p-inputtext + .p-inputgroup-addon,
.p-inputgroup > .p-float-label > .p-component + .p-inputgroup-addon {
    border-left: 0 none;
}

.p-inputgroup > .p-component:focus,
.p-inputgroup > .p-inputwrapper > .p-inputtext:focus,
.p-inputgroup > .p-float-label > .p-component:focus {
    z-index: 1;
}

.p-inputgroup > .p-component:focus ~ label,
.p-inputgroup > .p-inputwrapper > .p-inputtext:focus~label,
.p-inputgroup > .p-float-label > .p-component:focus~label {
    z-index: 1;
}

.p-inputgroup-addon:first-child,
.p-inputgroup button:first-child,
.p-inputgroup input:first-child,
.p-inputgroup > .p-inputwrapper:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-inputtext {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
}

.p-inputgroup .p-float-label:first-child input {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
}

.p-inputgroup-addon:last-child,
.p-inputgroup button:last-child,
.p-inputgroup input:last-child,
.p-inputgroup > .p-inputwrapper:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-inputtext {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
}

.p-inputgroup .p-float-label:last-child input {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
}

.p-fluid .p-inputgroup .p-button {
    width: auto;
}

.p-fluid .p-inputgroup .p-button.p-button-icon-only {
    width: 2.5rem;
}
`)}},Sm={css:function(n){var e=n.dt;return`
.p-inputnumber {
    display: inline-flex;
    position: relative;
}

.p-inputnumber-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    background: `.concat(e("inputnumber.button.background"),`;
    color: `).concat(e("inputnumber.button.color"),`;
    width: `).concat(e("inputnumber.button.width"),`;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
}

.p-inputnumber-button:hover {
    background: `).concat(e("inputnumber.button.hover.background"),`;
    color: `).concat(e("inputnumber.button.hover.color"),`;
}

.p-inputnumber-button:active {
    background: `).concat(e("inputnumber.button.active.background"),`;
    color: `).concat(e("inputnumber.button.active.color"),`;
}

.p-inputnumber-buttons-stacked {
    overflow: hidden;
}

.p-inputnumber-buttons-stacked .p-inputnumber-button {
    position: relative;
    border: 0 none;
}

.p-inputnumber-buttons-stacked .p-inputnumber-button-group {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 1px;
    right: 1px;
    height: calc(100% - 2px);
}

.p-inputnumber-buttons-stacked .p-inputnumber-button-up {
    padding: 0;
    border-top-right-radius: calc(`).concat(e("rounded.base"),` - 1px);
}

.p-inputnumber-buttons-stacked .p-inputnumber-button-down {
    padding: 0;
    border-bottom-right-radius: calc(`).concat(e("rounded.base"),` - 1px);
}

.p-inputnumber-buttons-stacked .p-inputnumber-button {
    flex: 1 1 auto;
    border: 0 none;
}

.p-inputnumber-buttons-horizontal .p-inputnumber-button {
    border: 1px solid `).concat(e("inputnumber.button.border.color"),`;
}

.p-inputnumber-buttons-horizontal .p-inputnumber-button:hover {
    border-color: `).concat(e("inputnumber.button.hover.border.color"),`;
}

.p-inputnumber-buttons-horizontal .p-inputnumber-button:active {
    border-color: `).concat(e("inputnumber.button.active.border.color"),`;
}

.p-inputnumber-buttons-horizontal .p-inputnumber-button-up {
    order: 3;
    border-top-right-radius: `).concat(e("rounded.base"),`;
    border-bottom-right-radius: `).concat(e("rounded.base"),`;
    border-left: 0 none;
}

.p-inputnumber-buttons-horizontal .p-inputnumber-input {
    order: 2;
    border-radius: 0;
}

.p-inputnumber-buttons-horizontal .p-inputnumber-button-down {
    order: 1;
    border-top-left-radius: `).concat(e("rounded.base"),`;
    border-bottom-left-radius: `).concat(e("rounded.base"),`;
    border-right: 0 none;
}

.p-inputnumber-buttons-vertical {
    flex-direction: column;
}

.p-inputnumber-buttons-vertical .p-inputnumber-button {
    border: 1px solid `).concat(e("inputnumber.button.border.color"),`;
    padding: 0.5rem 0;
}

.p-inputnumber-buttons-vertical .p-inputnumber-button:hover {
    border-color: `).concat(e("inputnumber.button.hover.border.color"),`;
}

.p-inputnumber-buttons-vertical .p-inputnumber-button:active {
    border-color: `).concat(e("inputnumber.button.active.border.color"),`;
}

.p-inputnumber-buttons-vertical .p-inputnumber-button-up {
    order: 1;
    border-top-left-radius: `).concat(e("rounded.base"),`;
    border-top-right-radius: `).concat(e("rounded.base"),`;
    width: 100%;
    border-bottom: 0 none;
}

.p-inputnumber-buttons-vertical .p-inputnumber-input {
    order: 2;
    border-radius: 0;
    text-align: center;
}

.p-inputnumber-buttons-vertical .p-inputnumber-button-down {
    order: 3;
    border-bottom-left-radius: `).concat(e("rounded.base"),`;
    border-bottom-right-radius: `).concat(e("rounded.base"),`;
    width: 100%;
    border-top: 0 none;
}

.p-inputnumber-input {
    flex: 1 1 auto;
}

.p-fluid .p-inputnumber {
    width: 100%;
}

.p-fluid .p-inputnumber .p-inputnumber-input {
    width: 1%;
}

.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input {
    width: 100%;
}
`)}},Im={css:function(n){return n.dt,`
.p-inputotp {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.p-inputotp-input {
    text-align: center;
    width: 2.5rem;
}   
    `}},$m={css:function(n){var e=n.dt;return`
.p-inputswitch {
    display: inline-block;
    width: 2.5rem;
    height: 1.5rem;
}

.p-inputswitch-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border-radius: `.concat(e("inputswitch.border.radius"),`;
}

.p-inputswitch-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 0 none;
    background:  `).concat(e("inputswitch.background"),`;
    transition: background `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    border-radius: `).concat(e("inputswitch.border.radius"),`;
    outline-color: transparent;
}

.p-inputswitch-slider:before {
    position: absolute;
    content: "";
    top: 50%;
    background: `).concat(e("inputswitch.handle.background"),`;
    width: 1rem;
    height: 1rem;
    left: 0.25rem;
    margin-top: -0.5rem;
    border-radius: `).concat(e("inputswitch.handle.border.radius"),`;
    transition: all `).concat(e("transition.duration"),`;
}

.p-inputswitch.p-highlight .p-inputswitch-slider {
    background: `).concat(e("inputswitch.checked.background"),`;
}

.p-inputswitch.p-highlight .p-inputswitch-slider:before {
    background: `).concat(e("inputswitch.handle.checked.background"),`;
    left: 1.25rem;
}

.p-inputswitch:not(.p-disabled):has(.p-inputswitch-input:hover) .p-inputswitch-slider {
    background: `).concat(e("inputswitch.hover.background"),`;
}

.p-inputswitch:not(.p-disabled):has(.p-inputswitch-input:hover) .p-inputswitch-slider:before {
    background: `).concat(e("inputswitch.handle.hover.background"),`;
}

.p-inputswitch:not(.p-disabled):has(.p-inputswitch-input:hover).p-highlight .p-inputswitch-slider {
    background: `).concat(e("inputswitch.checked.hover.background"),`;
}

.p-inputswitch:not(.p-disabled):has(.p-inputswitch-input:hover).p-highlight .p-inputswitch-slider:before {
    background: `).concat(e("inputswitch.handle.checked.hover.background"),`;
}

.p-inputswitch:not(.p-disabled):has(.p-inputswitch-input:focus-visible) .p-inputswitch-slider {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-inputswitch.p-invalid > .p-inputswitch-slider {
    background: `).concat(e("inputswitch.invalid.background"),`;
}

.p-inputswitch.p-invalid > .p-inputswitch-slider:before {
    background: `).concat(e("inputswitch.handle.invalid.background"),`;
}
`)}},Pm={css:function(n){var e=n.dt;return`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(e("inputtext.color"),`;
    background: `).concat(e("inputtext.background"),`;
    padding: 0.5rem 0.75rem;
    border: 1px solid `).concat(e("inputtext.border.color"),`;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    appearance: none;
    border-radius: `).concat(e("rounded.base"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("inputtext.box.shadow"),`;
}

.p-inputtext:enabled:hover {
    border-color: `).concat(e("inputtext.hover.border.color"),`;
}

.p-inputtext:enabled:focus {
    border-color: `).concat(e("inputtext.focus.border.color"),`;
    outline: 0 none;
}

.p-inputtext.p-invalid {
    border-color: `).concat(e("inputtext.invalid.border.color"),`;
}

.p-inputtext.p-variant-filled {
    background: `).concat(e("inputtext.filled.background"),`;
}

.p-inputtext.p-variant-filled:enabled:focus {
    background-color: `).concat(e("inputtext.filled.focus.background"),`;
}

.p-inputtext:disabled {
    opacity: 1;
    background: `).concat(e("inputtext.disabled.background"),`;
    color: `).concat(e("inputtext.disabled.color"),`;
}

.p-input-icon-right > svg:last-of-type,
.p-input-icon-right > i:last-of-type {
    right: 0.75rem;
    color: #94a3b8;
}

.p-input-icon-right > .p-inputtext {
    padding-right: 2.5rem;
}

.p-inputtext::placeholder {
    color: `).concat(e("inputtext.placeholder.color"),`;
}

.p-fluid .p-inputtext {
    width: 100%;
}
`)}},Em={css:function(n){var e=n.dt;return`
.p-knob-range {
    fill: none;
    transition: stroke 0.1s ease-in;
}

.p-knob-value {
    animation-name: p-knob-dash-frame;
    animation-fill-mode: forwards;
    fill: none;
}

.p-knob-text {
    font-size: 1.3rem;
    text-align: center;
}

.p-knob svg {
    border-radius: `.concat(e("rounded.base"),`;
    outline-color: transparent;
    transition: outline-color `).concat(e("transition.duration"),`;
}
.p-knob svg:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

@keyframes p-knob-dash-frame {
    100% {
        stroke-dashoffset: 0;
    }
}
`)}},Tm={css:function(n){var e=n.dt;return`
.p-listbox {
    background: `.concat(e("listbox.background"),`;
    color: `).concat(e("listbox.color"),`;
    border: 1px solid `).concat(e("listbox.border.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
    box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05);
}

.p-listbox.p-focus {
    outline: 0 none;
    border-color: `).concat(e("listbox.focus.border.color"),`;
}

.p-listbox.p-disabled {
    opacity: 1;
    background: `).concat(e("listbox.disabled.background"),`;
    color: `).concat(e("listbox.disabled.color"),`;
}

.p-listbox.p-invalid {
    border-color: `).concat(e("listbox.invalid.border.color"),`;
}

.p-listbox .p-listbox-header {
    padding: 0.5rem 0.5rem 0 0.5rem;
    border-bottom: 0 none;
    margin: 0 0 0 0;
}

.p-listbox-filter-container {
    position: relative;
}

.p-listbox-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    right: 0.75rem;
    color: `).concat(e("listbox.filter.icon.color"),`;
}

.p-listbox-filter {
    width: 100%;
    padding-right: 1.75rem;
}

.p-listbox-list-wrapper {
    overflow: auto;
}

.p-listbox-list {
    list-style-type: none;
    margin: 0;
    padding: 0.25rem 0.25rem;
    outline: 0 none;
}

.p-listbox-item {
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin: 2px 0;
    padding: 0.5rem 0.75rem;
    border: 0 none;
    border-radius: `).concat(e("rounded.sm"),`;
    color: `).concat(e("listbox.item.color"),`;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
}

.p-listbox-item:first-child {
    margin-top: 0;
}

.p-listbox-item:last-child {
    margin-bottom: 0;
}

.p-listbox .p-listbox-list .p-listbox-item.p-highlight {
    background: `).concat(e("listbox.item.selected.background"),`;
    color: `).concat(e("listbox.item.selected.color"),`;
}

.p-listbox:not(.p-disabled) .p-listbox-item.p-highlight.p-focus {
    background: `).concat(e("listbox.item.selected.focus.background"),`;
    color: `).concat(e("listbox.item.selected.focus.color"),`;
}

.p-listbox:not(.p-disabled) .p-listbox-item:not(.p-highlight):not(.p-disabled).p-focus {
    background: `).concat(e("listbox.item.focus.background"),`;
    color: `).concat(e("listbox.item.focus.color"),`;
}

.p-listbox:not(.p-disabled) .p-listbox-item:not(.p-highlight):not(.p-disabled):hover {
    background: `).concat(e("listbox.item.focus.background"),`;
    color: `).concat(e("listbox.item.focus.color"),`;
}

.p-listbox-item-group {
    cursor: auto;
    margin: 0;
    padding: 0.5rem 0.75rem;
    color: `).concat(e("listbox.item.group.color"),`;
    background: `).concat(e("listbox.item.group.background"),`;
    font-weight: 600;
}

.p-listbox-empty-message {
    padding: 0.5rem 0.75rem;
    background: transparent;
}
`)}},Om={css:function(n){var e=n.dt;return`
.p-megamenu {
    display: flex;
    position: relative;
    padding: 0.5rem 0.5rem;
    background: `.concat(e("megamenu.background"),`;
    color: `).concat(e("megamenu.color"),`;
    border: 1px solid `).concat(e("megamenu.border.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
}

.p-megamenu-root-list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-megamenu .p-menuitem-content {
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),`;
    border-radius: `).concat(e("rounded.sm"),`;
    color: `).concat(e("megamenu.item.color"),`;
}

.p-megamenu .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: 0.5rem 0.75rem;
    user-select: none;
}

.p-megamenu .p-menuitem-text {
    line-height: 1;
}

.p-megamenu .p-menuitem-icon {
    color: `).concat(e("megamenu.item.icon.color"),`;
    margin-right: 0.5rem;
}

.p-megamenu .p-menuitem.p-focus > .p-menuitem-content {
    color: `).concat(e("megamenu.item.focus.color"),`;
    background: `).concat(e("megamenu.item.focus.background"),`;
}

.p-megamenu .p-menuitem.p-focus > .p-menuitem-content .p-menuitem-icon,
.p-megamenu .p-menuitem.p-focus > .p-menuitem-content .p-submenu-icon {
    color: `).concat(e("megamenu.item.icon.focus.color"),`;
}

.p-megamenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover {
    color: `).concat(e("megamenu.item.focus.color"),`;
    background: `).concat(e("megamenu.item.focus.background"),`;
}

.p-megamenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-icon,
.p-megamenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-submenu-icon {
    color: `).concat(e("megamenu.item.icon.focus.color"),`;
}

.p-megamenu .p-menuitem-active > .p-menuitem-content {
    color: `).concat(e("megamenu.item.focus.color"),`;
    background: `).concat(e("megamenu.item.focus.background"),`;
}

.p-megamenu .p-menuitem-active > .p-menuitem-content .p-menuitem-icon,
.p-megamenu .p-menuitem-active > .p-menuitem-content .p-submenu-icon {
    color: `).concat(e("megamenu.item.icon.focus.color"),`;
}

.p-megamenu .p-submenu-icon {
    color: `).concat(e("megamenu.item.icon.color"),`;
    margin-left: 0.5rem;
    font-size: 0.875rem;
    width: 0.875rem;
    height: 0.875rem;
}

.p-megamenu-panel {
    display: none;
    position: absolute;
    width: auto;
    z-index: 1;
    left: 0;
    min-width: 100%;
    background: `).concat(e("megamenu.background"),`;
    color: `).concat(e("megamenu.color"),`;
    border: 1px solid `).concat(e("megamenu.border.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)
}

.p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
    display: block;
}

.p-megamenu-submenu {
    margin: 0;
    list-style: none;
    padding: 0.25rem 0.25rem;
    min-width: 12.5rem;
}

.p-megamenu-submenu .p-menuitem {
    margin: 2px 0;
}

.p-megamenu-submenu .p-menuitem:first-child {
    margin-top: 0;
}

.p-megamenu-submenu .p-menuitem:last-child {
    margin-bottom: 0;
}

.p-megamenu-submenu .p-submenu-header {
    margin: 0;
    padding: 0.5rem 0.75rem;
    color: `).concat(e("megamenu.submenu.header.color"),`;
    font-weight: 600;
    margin-bottom: 2px;
}

.p-megamenu-submenu .p-menuitem-separator {
    border-top: 1px solid `).concat(e("megamenu.separator.border.color"),`;
    margin: 2px 0;
}

.p-megamenu-horizontal {
    align-items: center;
}

.p-megamenu-horizontal .p-megamenu-root-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.p-megamenu-horizontal .p-megamenu-end {
    margin-left: auto;
    align-self: center;
}

.p-megamenu-vertical {
    display: inline-flex;
    flex-direction: column;
    min-width: 12.5rem;
    padding: 0.25rem 0.25rem;
}

.p-megamenu-vertical .p-megamenu-root-list {
    flex-direction: column;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
    left: 100%;
    top: 0;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-menuitem > .p-menuitem-content .p-submenu-icon {
    margin-left: auto;
}

.p-megamenu-grid {
    display: flex;
}

.p-megamenu-col-2,
.p-megamenu-col-3,
.p-megamenu-col-4,
.p-megamenu-col-6,
.p-megamenu-col-12 {
    flex: 0 0 auto;
    padding: 0.5rem;
}

.p-megamenu-col-2 {
    width: 16.6667%;
}

.p-megamenu-col-3 {
    width: 25%;
}

.p-megamenu-col-4 {
    width: 33.3333%;
}

.p-megamenu-col-6 {
    width: 50%;
}

.p-megamenu-col-12 {
    width: 100%;
}

.p-megamenu-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 1.75rem;
    height: 1.75rem;
    position: relative;
    color: `).concat(e("megamenu.mobile.toggle.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
}

.p-megamenu-button:hover {
    color: `).concat(e("megamenu.mobile.toggle.hover.color"),`;
    background: `).concat(e("megamenu.mobile.toggle.hover.background"),`;
}

.p-megamenu-button:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-megamenu-mobile {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-button {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-root-list {
    position: absolute;
    display: none;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
    width: 100%;
    padding: 0.25rem 0.25rem;
    background: `).concat(e("megamenu.background"),`;
    border: 1px solid `).concat(e("megamenu.border.color"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    gap: 2px;
}

.p-megamenu-mobile-active .p-megamenu-root-list {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-root-list .p-menuitem {
    width: 100%;
    position: static;
}

.p-megamenu-mobile .p-megamenu-panel {
    position: static;
    border: 0 none;
    border-radius: 0;
    box-shadow: none;
}

.p-megamenu-mobile .p-megamenu-grid {
    flex-wrap: wrap;
    overflow: auto;
    max-height: 90%;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-menuitem > .p-menuitem-content .p-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-content .p-submenu-icon {
    transform: rotate(-180deg);
}
`)}},Am={css:function(n){var e=n.dt;return`
.p-menu {
    padding: 0.25rem 0.25rem;
    background: `.concat(e("menu.background"),`;
    color: `).concat(e("menu.color"),`;
    border: 1px solid `).concat(e("menu.border.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
    min-width: 12.5rem;
}

.p-menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-menu .p-menuitem {
    margin: 2px 0;
}

.p-menu .p-menuitem:first-child {
    margin-top: 0;
}

.p-menu .p-menuitem:last-child {
    margin-bottom: 0;
}

.p-menu .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: 0.5rem 0.75rem;
    user-select: none;
}

.p-menu .p-menuitem-text {
    line-height: 1;
}

.p-menu .p-menuitem-content {
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),`;
    border-radius:  `).concat(e("rounded.sm"),`;
    color: `).concat(e("menu.item.color"),`;
}

.p-menu .p-menuitem-icon {
    color: `).concat(e("menu.item.icon.color"),`;
    margin-right: 0.5rem;
}

.p-menu .p-menuitem.p-focus .p-menuitem-content {
    color: `).concat(e("menu.item.focus.color"),`;
    background: `).concat(e("menu.item.focus.background"),`;
}

.p-menu .p-menuitem.p-focus .p-menuitem-icon {
    color: `).concat(e("menu.item.icon.focus.color"),`;
}

.p-menu .p-menuitem:not(.p-disabled) .p-menuitem-content:hover {
    color: `).concat(e("menu.item.focus.color"),`;
    background: `).concat(e("menu.item.focus.background"),`;
}

.p-menu .p-menuitem:not(.p-disabled) .p-menuitem-content:hover .p-menuitem-icon,
.p-menu .p-menuitem:not(.p-disabled) .p-menuitem-content:hover .p-submenu-icon {
    color: `).concat(e("menu.item.icon.focus.color"),`;
}

.p-menu.p-menu-overlay {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-menu .p-submenu-header {
    margin: 0;
    padding: 0.5rem 0.75rem;
    color: `).concat(e("menu.submenu.header.color"),`;
    font-weight: 600;
}

.p-menu .p-menuitem-separator {
    border-top: 1px solid `).concat(e("menu.separator.border.color.color"),`;
    margin: 2px 0;
}
`)}},Bm={css:function(n){var e=n.dt;return`
.p-menubar {
    display: flex;
    align-items: center;
    padding: 0.5rem 0.5rem;
    background: `.concat(e("menubar.background"),`;
    color: `).concat(e("menubar.color"),`;
    border: 1px solid `).concat(e("menubar.border.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
}

.p-menubar ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-menubar .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: 0.5rem 0.75rem;
    user-select: none;
}

.p-menubar .p-menuitem-text {
    line-height: 1;
}

.p-menubar-root-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    outline: 0 none;
}

.p-menubar-root-list > .p-menuitem-active > .p-submenu-list {
    display: block;
}

.p-menubar .p-menuitem-content {
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),`;
    border-radius: `).concat(e("rounded.sm"),`);
    color: `).concat(e("menubar.item.color"),`;
}

.p-menubar .p-menuitem-icon {
    color: `).concat(e("menubar.item.icon.color"),`;
    margin-right: 0.5rem;
}

.p-menubar .p-menuitem.p-focus > .p-menuitem-content {
    color: `).concat(e("menubar.item.focus.color"),`;
    background: `).concat(e("menubar.item.focus.background"),`;
}

.p-menubar .p-menuitem.p-focus > .p-menuitem-content .p-menuitem-icon,
.p-menubar .p-menuitem.p-focus > .p-menuitem-content .p-submenu-icon {
    color: `).concat(e("menubar.item.icon.focus.color"),`;
}

.p-menubar .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover {
    color: `).concat(e("menubar.item.focus.color"),`;
    background: `).concat(e("menubar.item.focus.background"),`;
}

.p-menubar .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-icon,
.p-menubar .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-submenu-icon {
    color: `).concat(e("menubar.item.icon.focus.color"),`;
}

.p-menubar .p-menuitem-active > .p-menuitem-content {
    color: `).concat(e("menubar.item.focus.color"),`;
    background: `).concat(e("menubar.item.focus.background"),`;
}

.p-menubar .p-menuitem-active > .p-menuitem-content .p-menuitem-icon,
.p-menubar .p-menuitem-active > .p-menuitem-content .p-submenu-icon {
    color: `).concat(e("menubar.item.icon.focus.color"),`;
}

.p-menubar .p-submenu-icon {
    color: `).concat(e("menubar.item.icon.color"),`;
    margin-left: auto;
    font-size: 0.875rem;
    width: 0.875rem;
    height: 0.875rem;
}

.p-menubar-root-list > .p-menuitem > .p-menuitem-content .p-submenu-icon {
    margin-left: 0.5rem;
}

.p-menubar .p-submenu-list {
    display: none;
    position: absolute;
    min-width: 12.5rem;
    z-index: 1;
    padding: 0.25rem 0.25rem;
    background: `).concat(e("menubar.background"),`;
    color: `).concat(e("menubar.color"),`;
    border: 1px solid `).concat(e("menubar.border.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-menubar .p-submenu-list .p-menuitem-separator {
    border-top: 1px solid `).concat(e("menubar.separator.border.color"),`;
    margin: 2px 0;
}

.p-menubar .p-submenu-list .p-menuitem {
    position: relative;
    margin: 2px 0;
}

.p-menubar .p-submenu-list .p-menuitem:first-child {
    margin-top: 0;
}

.p-menubar .p-submenu-list .p-menuitem:last-child {
    margin-bottom: 0;
}

.p-menubar .p-submenu-list > .p-menuitem-active > .p-submenu-list {
    display: block;
    left: 100%;
    top: 0;
}

.p-menubar .p-menubar-end {
    margin-left: auto;
    align-self: center;
}

.p-menubar-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 1.75rem;
    height: 1.75rem;
    position: relative;
    color: `).concat(e("menubar.mobile.toggle.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
}

.p-menubar-button:hover {
    color: `).concat(e("menubar.mobile.toggle.hover.color"),`;
    background: `).concat(e("menubar.mobile.toggle.hover.background"),`;
}

.p-menubar-button:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-menubar-mobile {
    position: relative;
}

.p-menubar-mobile .p-menubar-button {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list {
    position: absolute;
    display: none;
    width: 100%;
    padding: 0.25rem 0.25rem;
    background: `).concat(e("menubar.background"),`;
    border: 1px solid `).concat(e("menubar.border.color"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-menubar-mobile-active .p-menubar-root-list {
    display: flex;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
}

.p-menubar-mobile .p-menubar-root-list .p-menuitem {
    width: 100%;
    position: static;
}

.p-menubar-mobile .p-menubar-root-list .p-menuitem-separator {
    border-top: 1px solid #e2e8f0;
    margin: 2px 0;
}

.p-menubar-mobile .p-menubar-root-list > .p-menuitem {
    position: relative;
    margin: 2px 0;
}

.p-menubar-mobile .p-menubar-root-list > .p-menuitem:first-child {
    margin-top: 0;
}

.p-menubar-mobile .p-menubar-root-list > .p-menuitem:last-child {
    margin-bottom: 0;
}

.p-menubar-mobile .p-menubar-root-list > .p-menuitem > .p-menuitem-content .p-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-menubar-mobile .p-menubar-root-list > .p-menuitem-active > .p-menuitem-content .p-submenu-icon {
    transform: rotate(-180deg);
}

.p-menubar-mobile .p-submenu-list .p-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-menubar-mobile  .p-menuitem-active > .p-menuitem-content .p-submenu-icon {
    transform: rotate(-90deg);
}

.p-menubar-mobile .p-submenu-list {
    width: 100%;
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-left: 1rem;
}
`)}},Lm={css:function(n){var e=n.dt;return`
.p-message-wrapper {
    display: flex;
    align-items: center;
    padding: 0.5rem 0.75rem;
}

.p-message {
    margin: 1rem 0;
    border-radius: 6px;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-left: auto;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    background: transparent;
    transition: background-color `.concat(e("transition.duration"),", color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
    color: inherit;
}

.p-message-close:focus-visible {
    outline-width: `).concat(e("focus.ring.width"),`;
    outline-style: `).concat(e("focus.ring.style"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-message-info {
    background: `).concat(e("message.info.background"),`;
    border: 1px solid `).concat(e("message.info.border.color"),`;
    color: `).concat(e("message.info.color"),`;
    box-shadow: `).concat(e("message.info.box.shadow"),`;
}

.p-message-info .p-message-close:focus-visible {
    outline-color: `).concat(e("message.info.color"),`;
}

.p-message-info .p-message-close:hover {
    background: `).concat(e("message.info.close.hover.background"),`;
}

.p-message-success {
    background: `).concat(e("message.success.background"),`;
    border: 1px solid `).concat(e("message.success.border.color"),`;
    color: `).concat(e("message.success.color"),`;
    box-shadow: `).concat(e("message.success.box.shadow"),`;
}

.p-message-success .p-message-close:focus-visible {
    outline-color: `).concat(e("message.success.color"),`;
}

.p-message-success .p-message-close:hover {
    background: `).concat(e("message.success.close.hover.background"),`;
}

.p-message-warn {
    background: `).concat(e("message.warn.background"),`;
    border: 1px solid `).concat(e("message.warn.border.color"),`;
    color: `).concat(e("message.warn.color"),`;
    box-shadow: `).concat(e("message.warn.box.shadow"),`;
}

.p-message-warn .p-message-close:focus-visible {
    outline-color: `).concat(e("message.warn.color"),`;
}

.p-message-warn .p-message-close:hover {
    background: `).concat(e("message.warn.close.hover.background"),`;
}

.p-message-error {
    background: `).concat(e("message.error.background"),`;
    border: 1px solid `).concat(e("message.error.border.color"),`;
    color: `).concat(e("message.error.color"),`;
    box-shadow: `).concat(e("message.error.box.shadow"),`;
}

.p-message-error .p-message-close:focus-visible {
    outline-color: `).concat(e("message.error.color"),`;
}

.p-message-error .p-message-close:hover {
    background: `).concat(e("message.error.close.hover.background"),`;
}

.p-message-secondary {
    background: `).concat(e("message.secondary.background"),`;
    border: 1px solid `).concat(e("message.secondary.border.color"),`;
    color: `).concat(e("message.secondary.color"),`;
    box-shadow: `).concat(e("message.secondary.box.shadow"),`;
}

.p-message-secondary .p-message-close:focus-visible {
    outline-color: `).concat(e("message.secondary.color"),`;
}

.p-message-secondary .p-message-close:hover {
    background: `).concat(e("message.secondary.close.hover.background"),`;
}

.p-message-contrast {
    background: `).concat(e("message.contrast.background"),`;
    border: 1px solid `).concat(e("message.contrast.border.color"),`;
    color: `).concat(e("message.contrast.color"),`;
    box-shadow: `).concat(e("message.contrast.box.shadow"),`;
}

.p-message-contrast .p-message-close:focus-visible {
    outline-color: `).concat(e("message.contrast.color"),`;
}

.p-message-contrast .p-message-close:hover {
    background: `).concat(e("message.contrast.close.hover.background"),`;
}

.p-message-text {
    font-size: 1rem;
    font-weight: 500;
}

.p-message-icon {
    font-size: 1rem;
    margin-right: 0.5rem;
}

.p-message .p-icon:not(.p-message-close-icon) {
    width: 1rem;
    height: 1rem;
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.3s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.15s;
}

.p-message-leave-active .p-message-close {
    display: none;
}
`)}},jm={css:function(n){var e=n.dt;return`
.p-metergroup {
    display: flex;
    gap: 1rem;
}

.p-metergroup-meters {
    display: flex;
    background: `.concat(e("metergroup.meters.background"),`;
    border-radius: `).concat(e("rounded.base"),`;
}

.p-metergroup-meter {
    border: 0 none;
}

.p-metergroup-labels {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.p-metergroup-label {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

.p-metergroup-label-marker {
    display: inline-flex;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100%;
}

.p-metergroup-label-icon {
    width: 1rem;
    height: 1rem;
}

.p-metergroup-horizontal {
    flex-direction: column;
}

.p-metergroup-labels-horizontal {
    gap: 1rem;
}

.p-metergroup-horizontal .p-metergroup-meters {
    height: 0.5rem;
}

.p-metergroup-horizontal .p-metergroup-meter:first-of-type {
    border-top-left-radius: `).concat(e("rounded.base"),`;
    border-bottom-left-radius: `).concat(e("rounded.base"),`;
}
.p-metergroup-horizontal .p-metergroup-meter:last-of-type {
    border-top-right-radius: `).concat(e("rounded.base"),`;
    border-bottom-right-radius: `).concat(e("rounded.base"),`;
}

.p-metergroup-vertical {
    flex-direction: row;
}

.p-metergroup-labels-vertical {
    flex-direction: column;
    gap: 0.5rem;
}

.p-metergroup-vertical .p-metergroup-meters {
    flex-direction: column;
    width: 0.5rem;
    height: 100%;
}

.p-metergroup-vertical .p-metergroup-labels {
    align-items: start;
}

.p-metergroup-vertical .p-metergroup-meter:first-of-type {
    border-top-left-radius: `).concat(e("rounded.base"),`;
    border-top-right-radius: `).concat(e("rounded.base"),`;
}
.p-metergroup-vertical .p-metergroup-meter:last-of-type {
    border-bottom-left-radius: `).concat(e("rounded.base"),`;
    border-bottom-right-radius: `).concat(e("rounded.base"),`;
}
`)}},Rm={css:function(n){var e=n.dt;return`
.p-multiselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: `.concat(e("multiselect.background"),`;
    border: 1px solid `).concat(e("multiselect.border.color"),`;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    border-radius: `).concat(e("rounded.base"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("multiselect.box.shadow"),`;
}

.p-multiselect:not(.p-disabled):hover {
    border-color: `).concat(e("multiselect.hover.border.color"),`;
}

.p-multiselect:not(.p-disabled).p-focus {
    border-color: `).concat(e("multiselect.focus.border.color"),`;
    outline: 0 none;
}

.p-multiselect.p-variant-filled {
    background: `).concat(e("multiselect.filled.background"),`;
}

.p-multiselect.p-variant-filled.p-focus {
    background: `).concat(e("multiselect.filled.focus.background"),`;
}

.p-multiselect.p-invalid {
    border-color: `).concat(e("multiselect.invalid.border.color"),`;
}

.p-multiselect.p-disabled {
    opacity: 1;
    background: `).concat(e("multiselect.disabled.background"),`;
}

.p-multiselect-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: `).concat(e("multiselect.toggle.color"),`;
    width: 2.5rem;
    border-top-right-radius: `).concat(e("rounded.base"),`;
    border-bottom-right-radius: `).concat(e("rounded.base"),`;
}

.p-multiselect-label-container {
    overflow: hidden;
    flex: 1 1 auto;
    cursor: pointer;
}

.p-multiselect-label {
    display: block;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0.5rem 0.75rem;
    color: `).concat(e("multiselect.color"),`;
}

.p-multiselect-label.p-placeholder {
    color: `).concat(e("multiselect.placeholder.color"),`;
}

.p-multiselect.p-disabled .p-multiselect-label {
    color: `).concat(e("multiselect.disabled.color"),`;
}

.p-inputwrapper-filled.p-multiselect.p-multiselect-chip .p-multiselect-label {
    padding: 0.25rem 0.25rem;
}

.p-multiselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-multiselect-token {
    cursor: default;
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    padding: 0.25rem 0.75rem;
    background: `).concat(e("multiselect.chip.background"),`;
    color: `).concat(e("multiselect.chip.color"),`;
    border-radius: `).concat(e("rounded.sm"),`;
    margin-right: 0.25rem;
}

.p-multiselect-token-icon {
    cursor: pointer;
    margin-left: 0.375rem;
}

.p-multiselect .p-multiselect-panel {
    min-width: 100%;
}

.p-multiselect-panel {
    position: absolute;
    top: 0;
    left: 0;
    background: `).concat(e("multiselect.overlay.background"),`;
    color: `).concat(e("multiselect.overlay.color"),`;
    border: 1px solid `).concat(e("multiselect.overlay.border.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-multiselect-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem 0 1rem;
}

.p-multiselect-header .p-checkbox {
    margin-right: 0.5rem;
}

.p-multiselect-filter-container {
    position: relative;
    flex: 1 1 auto;
}

.p-multiselect-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    right: 0.75rem;
    color: `).concat(e("multiselect.filter.icon.color"),`;
}

.p-multiselect-filter-container .p-inputtext {
    width: 100%;
    padding-right: 1.75rem;
}

.p-multiselect-items-wrapper {
    overflow: auto;
}

.p-multiselect-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: 0.25rem 0.25rem;
}

.p-multiselect-item {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    margin: 2px 0;
    padding: 0.5rem 0.75rem;
    border: 0 none;
    color: `).concat(e("multiselect.item.color"),`;
    background: transparent;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    border-radius: `).concat(e("rounded.sm"),`;
}

.p-multiselect-item:first-child {
    margin-top: 0;
}

.p-multiselect-item:last-child {
    margin-bottom: 0;
}

.p-multiselect-item:not(.p-highlight):not(.p-disabled).p-focus {
    background: `).concat(e("multiselect.item.focus.background"),`;
    color: `).concat(e("multiselect.item.focus.color"),`;
}

.p-multiselect-item.p-highlight {
    background: `).concat(e("multiselect.item.selected.background"),`;
    color: `).concat(e("multiselect.item.selected.color"),`;
}

.p-multiselect-item.p-highlight.p-focus {
    background: `).concat(e("multiselect.item.selected.focus.background"),`;
    color: `).concat(e("multiselect.item.selected.focus.color"),`;
}

.p-multiselect-item .p-checkbox {
    margin-right: 0.5rem;
}

.p-multiselect-item-group {
    cursor: auto;
    margin: 0;
    padding: 0.5rem 0.75rem;
    color: `).concat(e("multiselect.item.group.color"),`;
    background: `).concat(e("multiselect.item.group.background"),`;
    font-weight: 600;
}

.p-multiselect-empty-message {
    padding: 0.5rem 0.75rem;
    background: transparent;
}

.p-fluid .p-multiselect {
    display: flex;
}
`)}},Fm={css:function(n){return n.dt,`
.p-orderlist {
    display: flex;
    gap: 1.125rem;
}

.p-orderlist-controls {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
}
`}},Mm={css:function(n){var e=n.dt;return`
.p-organizationchart-table {
    border-spacing: 0;
    border-collapse: separate;
    margin: 0 auto;
}

.p-organizationchart-table > tbody > tr > td {
    text-align: center;
    vertical-align: top;
    padding: 0 0.75rem;
}

.p-organizationchart-node-content {
    display: inline-block;
    position: relative;
    border: 1px solid `.concat(e("organizationchart.node.border.color"),`;
    background: `).concat(e("organizationchart.node.background"),`;
    color: `).concat(e("organizationchart.node.color"),`;
    padding: 0.75rem 1rem;
    border-radius: `).concat(e("rounded.base"),`;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),`;
}

.p-organizationchart-node-content:has(.p-node-toggler) {
    padding: 0.75rem 1rem 1.25rem 1rem;
}

.p-organizationchart-node-content.p-organizationchart-selectable-node:not(.p-highlight):hover {
    background: `).concat(e("organizationchart.node.hover.background"),`;
    color: `).concat(e("organizationchart.node.hover.color"),`;
}

.p-organizationchart-node-content.p-highlight {
    background: `).concat(e("highlight.background"),`;
    color: `).concat(e("highlight.color"),`;
}

.p-organizationchart-node-content .p-node-toggler {
    position: absolute;
    bottom: -0.75rem;
    margin-left: -0.75rem;
    z-index: 2;
    left: 50%;
    user-select: none;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    text-decoration: none;
    background: `).concat(e("organizationchart.toggle.icon.background"),`;
    color: `).concat(e("organizationchart.toggle.icon.color"),`;
    border-radius: 50%;
    border: 1px solid `).concat(e("organizationchart.toggle.icon.border.color"),`;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline-color: transparent;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
}

.p-organizationchart-node-content .p-node-toggler:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-organizationchart-node-content .p-node-toggler .p-node-toggler-icon {
    position: relative;
    top: 1px;
}

.p-organizationchart-line-down {
    margin: 0 auto;
    height: 20px;
    width: 1px;
    background: `).concat(e("organizationchart.connector.color"),`;
}

.p-organizationchart-line-right {
    border-radius: 0;
    border-left: 1px solid `).concat(e("organizationchart.connector.color"),`;
    border-top-left-radius: `).concat(e("rounded.base"),`;
}

.p-organizationchart-line-left {
    border-radius: 0;
    border-right: 1px solid `).concat(e("organizationchart.connector.color"),`;
}

.p-organizationchart-line-top {
    border-top: 1px solid `).concat(e("organizationchart.connector.color"),`;
}

.p-organizationchart-selectable-node {
    cursor: pointer;
}

.p-organizationchart-lines :nth-child(1 of .p-organizationchart-line-left) {
    border-right: 0 none;
}

.p-organizationchart-lines :nth-last-child(1 of .p-organizationchart-line-left) {
    border-top-right-radius: `).concat(e("rounded.base"),`;
}

.p-organizationchart-lines :nth-child(1 of .p-organizationchart-line-right) {
    border-left: 1px solid `).concat(e("organizationchart.connector.color"),`;
    border-top-left-radius: `).concat(e("rounded.base"),`;
}
`)}},zm={css:function(n){var e=n.dt;return`
.p-overlaypanel {
    margin-top: 10px;
    background: `.concat(e("overlaypanel.background"),`;
    color: `).concat(e("overlaypanel.color"),`;
    border: 1px solid `).concat(e("overlaypanel.border.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-overlaypanel-content {
    padding: 0.75rem;
}

.p-overlaypanel-flipped {
    margin-top: 0;
    margin-bottom: 10px;
}

.p-overlaypanel-close {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 1.75rem;
    height: 1.75rem;
    background: transparent;
    color: `).concat(e("overlaypanel.close.icon.color"),`;
    border: 0 none;
    border-radius: 50%;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
}

.p-overlaypanel-close:enabled:hover {
    background: `).concat(e("overlaypanel.close.icon.hover.background"),`;
    color: `).concat(e("overlaypanel.close.icon.hover.color"),`;
}

.p-overlaypanel-close:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-overlaypanel-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-overlaypanel-leave-to {
    opacity: 0;
}

.p-overlaypanel-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-overlaypanel-leave-active {
    transition: opacity 0.1s linear;
}

.p-overlaypanel:after,
.p-overlaypanel:before {
    bottom: 100%;
    left: `).concat(e("{overlay.arrow.left} + 1.25rem",0),`;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-overlaypanel:after {
    border-width: 8px;
    margin-left: -8px;
    border-style: solid;
    border-color: transparent;
    border-bottom-color: `).concat(e("overlaypanel.background"),`;
}

.p-overlaypanel:before {
    border-width: 10px;
    margin-left: -10px;
    border-style: solid;
    border-color: transparent;
    border-bottom-color: `).concat(e("overlaypanel.border.color"),`;
}

.p-overlaypanel-flipped:after,
.p-overlaypanel-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-overlaypanel.p-overlaypanel-flipped:after {
    border-bottom-color: transparent;
    border-top-color: `).concat(e("overlaypanel.background"),`;
}

.p-overlaypanel.p-overlaypanel-flipped:before {
    border-bottom-color: transparent;
    border-top-color: `).concat(e("overlaypanel.border.color"),`;
}
`)}},Dm={css:function(n){var e=n.dt;return`
.p-paginator {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background: `.concat(e("paginator.background"),`;
    color: `).concat(e("paginator.color"),`;
    border: 0 none;
    padding: 0.5rem 1rem;
    border-radius: `).concat(e("rounded.base"),`;
    gap: 0.25rem;
}

.p-paginator-left-content {
    margin-right: auto;
}

.p-paginator-right-content {
    margin-left: auto;
}

.p-paginator-page,
.p-paginator-next,
.p-paginator-last,
.p-paginator-first,
.p-paginator-prev {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    user-select: none;
    overflow: hidden;
    position: relative;
    background: transparent;
    border: 0 none;
    color: `).concat(e("paginator.navigator.color"),`;
    min-width: 2.5rem;
    height: 2.5rem;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    border-radius: 50%;
}

.p-paginator-page:not(.p-disabled):not(.p-highlight):hover,
.p-paginator-first:not(.p-disabled):hover,
.p-paginator-prev:not(.p-disabled):hover,
.p-paginator-next:not(.p-disabled):hover,
.p-paginator-last:not(.p-disabled):hover {
    background: `).concat(e("paginator.navigator.hover.background"),`;
    color: `).concat(e("paginator.navigator.hover.color"),`;
}

.p-paginator-current {
    color: `).concat(e("paginator.current.page.report.color"),`;
}

.p-paginator-pages {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.p-paginator-page.p-highlight {
    background: `).concat(e("highlight.background"),`;
    color: `).concat(e("highlight.color"),`;
}

.p-paginator-page-input .p-inputtext {
    max-width: 2.5rem;
}
`)}},Nm={css:function(n){var e=n.dt;return`
.p-panel {
    border: 1px solid `.concat(e("panel.border.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
    background: `).concat(e("panel.background"),`;
    color: `).concat(e("panel.color"),`;
}

.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.125rem;
}

.p-panel-toggleable .p-panel-header {
    padding: 0.75rem 1.125rem;
}

.p-panel-title {
    line-height: 1;
    font-weight: 600;
}

.p-panel-header-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 1.75rem;
    height: 1.75rem;
    position: relative;
    color: `).concat(e("panel.header.icon.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
}

.p-panel-header-icon:enabled:hover {
    color: `).concat(e("panel.header.icon.hover.color"),`;
    background: `).concat(e("panel.header.icon.hover.background"),`;
}

.p-panel-header-icon:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-panel-content {
    padding: 0 1.125rem 1.125rem 1.125rem;
}

.p-panel-footer {
    padding: 0 1.125rem 1.125rem 1.125rem;
}
    `)}},Vm={css:function(n){var e=n.dt;return`
.p-panelmenu {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.p-panelmenu-panel {
    background: `.concat(e("panelmenu.panel.background"),`;
    border: 1px solid `).concat(e("panelmenu.panel.border.color"),`;
    color: `).concat(e("panelmenu.panel.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
    padding: 0.25rem 0.25rem;
}

.p-panelmenu-header {
    outline: 0 none;
    border: 0 none;
}

.p-panelmenu-header-content {
    border: 0 none;
    color: `).concat(e("panelmenu.item.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
}

.p-panelmenu-header-action {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    user-select: none;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: inherit;
    padding: 0.5rem 0.75rem;
    font-weight: 600;
}

.p-panelmenu .p-submenu-icon,
.p-panelmenu .p-menuitem-icon {
    color: `).concat(e("panelmenu.item.icon.icolor"),`;
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {
    background: `).concat(e("panelmenu.item.focus.background"),`;
    color: `).concat(e("panelmenu.item.focus.color"),`;
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-submenu-icon,
.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-menuitem-icon {
    color: `).concat(e("panelmenu.item.icon.focus.color"),`;
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover {
    background: `).concat(e("panelmenu.item.focus.background"),`;
    color: `).concat(e("panelmenu.item.focus.color"),`;
}

.p-panelmenu-header:not(.p-disabled).p-panelmenu-header-content:hover .p-submenu-icon,
.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-menuitem-icon {
    color: `).concat(e("panelmenu.item.icon.focus.color"),`;
}

.p-panelmenu .p-menuitem {
    margin: 2px 0;
}

.p-panelmenu .p-menuitem:first-child {
    margin-top: 0;
}

.p-panelmenu .p-menuitem:last-child {
    margin-bottom: 0;
}

.p-panelmenu .p-submenu-list {
    margin: 4px 0 0 0;
    padding: 0 0 0 1rem;
    list-style: none;
}

.p-panelmenu .p-menuitem-link {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    position: relative;
    overflow: hidden;
    padding: 0.5rem 0.75rem;
}

.p-panelmenu .p-menuitem-text {
    line-height: 1;
}

.p-panelmenu .p-menuitem-content {
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),`;
    border-radius: `).concat(e("rounded.sm"),`;
    color: `).concat(e("panelmenu.item.color"),`;
}

.p-panelmenu .p-menuitem.p-focus > .p-menuitem-content {
    background: `).concat(e("panelmenu.item.focus.background"),`;
    color: `).concat(e("panelmenu.item.focus.color"),`;
}

.p-panelmenu .p-menuitem.p-focus > .p-menuitem-icon {
    color: `).concat(e("panelmenu.item.focus.color"),`;
}

.p-panelmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover {
    background: `).concat(e("panelmenu.item.focus.background"),`;
    color: `).concat(e("panelmenu.item.focus.color"),`;
}

.p-panelmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-icon,
.p-panelmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-submenu-icon {
    color: `).concat(e("panelmenu.item.focus.color"),`;
}
`)}},Um={css:function(n){var e=n.dt;return`
.p-password {
    display: inline-flex;
    position: relative;
}

.p-password .p-password-panel {
    min-width: 100%;
}

.p-password-meter {
    height: 10px;
    margin-bottom: 0.75rem;
    background: `.concat(e("password.meter.border.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
}

.p-password-strength {
    height: 100%;
    width: 0;
    transition: width 1s ease-in-out;
    border-radius: `).concat(e("rounded.base"),`;
}

.p-password-strength.weak {
    background: `).concat(e("password.weak.background"),`;
}

.p-password-strength.medium {
    background: `).concat(e("password.medium.background"),`;
}

.p-password-strength.strong {
    background: `).concat(e("password.strong.background"),`;
}

.p-fluid .p-password {
    display: flex;
}

.p-password-input::-ms-reveal,
.p-password-input::-ms-clear {
    display: none;
}

.p-password-panel {
    padding: 0.75rem;
    background: `).concat(e("password.overlay.background"),`;
    color: `).concat(e("password.overlay.color"),`;
    border: 1px solid `).concat(e("password.overlay.border.color"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    border-radius: `).concat(e("rounded.base"),`;
}

.p-password > svg:last-of-type,
.p-password > i:last-of-type {
    right: 0.75rem;
    color: `).concat(e("password.icon.color"),`;
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    width: 1rem;
    height: 1rem;
}

.p-password:has(svg,i) .p-password-input {
    padding-right: 2.5rem;
}
`)}},Km={css:function(n){return n.dt,`
.p-picklist {
    display: flex;
    gap: 1.125rem;
}

.p-picklist-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
}

.p-picklist-list-wrapper {
    flex: 1 1 50%;
}

.p-picklist .p-listbox {
    height: 100%;
}
`}},Hm={css:function(n){var e=n.dt;return`
.p-progressbar {
    position: relative;
    overflow: hidden;
    border: 0 none;
    height: 1.25rem;
    background: `.concat(e("progressbar.background"),`;
    border-radius: `).concat(e("rounded.base"),`;
}

.p-progressbar-value {
    border: 0 none;
    margin: 0;
    background: `).concat(e("progressbar.value.background"),`;
}

.p-progressbar-label {
    color: `).concat(e("progressbar.label.color"),`;
    line-height: 1.25rem;
    font-size: .75rem;
    font-weight: 600;
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    border: 0 none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-determinate .p-progressbar-value-animate {
    transition: width 1s ease-in-out;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        left: -35%;
        right: 100%;
    }
    60% {
        left: 100%;
        right: -90%;
    }
    100% {
        left: 100%;
        right: -90%;
    }
}
@keyframes p-progressbar-indeterminate-anim {
    0% {
        left: -35%;
        right: 100%;
    }
    60% {
        left: 100%;
        right: -90%;
    }
    100% {
        left: 100%;
        right: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        left: -200%;
        right: 100%;
    }
    60% {
        left: 107%;
        right: -8%;
    }
    100% {
        left: 107%;
        right: -8%;
    }
}
@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        left: -200%;
        right: 100%;
    }
    60% {
        left: 107%;
        right: -8%;
    }
    100% {
        left: 107%;
        right: -8%;
    }
}
`)}},qm={css:function(n){var e=n.dt;return`
.p-progress-spinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progress-spinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progress-spinner-svg {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progress-spinner-rotate 2s linear infinite;
}

.p-progress-spinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: `.concat(e("progressspinner.color-1"),`;
    animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progress-spinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progress-spinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progress-spinner-color {
    100%,
    0% {
        stroke: `).concat(e("progressspinner.color-1"),`;
    }
    40% {
        stroke: `).concat(e("progressspinner.color-2"),`;
    }
    66% {
        stroke: `).concat(e("progressspinner.color-3"),`;
    }
    80%,
    90% {
        stroke: `).concat(e("progressspinner.color-4"),`;
    }
}
`)}},Wm={css:function(n){var e=n.dt;return`
.p-radiobutton {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: `.concat(e("radiobutton.width"),`;
    height: `).concat(e("radiobutton.height"),`;
}

.p-radiobutton-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: 50%;
}

.p-radiobutton-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid `).concat(e("radiobutton.border.color"),`;
    background: `).concat(e("radiobutton.background"),`;
    width: `).concat(e("radiobutton.width"),`;
    height: `).concat(e("radiobutton.height"),`;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("radiobutton.box.shadow"),`;
}

.p-radiobutton-icon {
    transition-duration: `).concat(e("transition.duration"),`;
    background: transparent;
    font-size: `).concat(e("radiobutton.icon.size"),`;
    width: `).concat(e("radiobutton.icon.size"),`;
    height: `).concat(e("radiobutton.icon.size"),`;
    border-radius: 50%;
    backface-visibility: hidden;
    transform: translateZ(0) scale(0.1);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: `).concat(e("radiobutton.hover.border.color"),`;
}

.p-radiobutton.p-highlight .p-radiobutton-box {
    border-color: `).concat(e("radiobutton.checked.border.color"),`;
    background: `).concat(e("radiobutton.checked.background"),`;
}

.p-radiobutton.p-highlight .p-radiobutton-box .p-radiobutton-icon {
    background: `).concat(e("radiobutton.icon.checked.color"),`;
    transform: translateZ(0) scale(1, 1);
    visibility: visible;
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-highlight .p-radiobutton-box {
    border-color: `).concat(e("radiobutton.checked.hover.border.color"),`;
    background: `).concat(e("radiobutton.checked.hover.background"),`;
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-highlight .p-radiobutton-box .p-radiobutton-icon {
    background: `).concat(e("radiobutton.icon.checked.hover.color"),`;
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-radiobutton.p-invalid > .p-radiobutton-box {
    border-color: `).concat(e("radiobutton.invalid.border.color"),`;
}

.p-radiobutton.p-variant-filled .p-radiobutton-box {
    background: `).concat(e("radiobutton.filled.background"),`;
}

.p-radiobutton.p-variant-filled.p-highlight .p-radiobutton-box {
    background: `).concat(e("radiobutton.checked.background"),`;
}

.p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-highlight .p-radiobutton-box {
    background: `).concat(e("radiobutton.checked.hover.background"),`;
}

.p-radiobutton.p-disabled {
    opacity: 1;
}

.p-radiobutton.p-disabled .p-radiobutton-box {
    background: `).concat(e("radiobutton.disabled.background"),`;
}

.p-radiobutton.p-disabled .p-radiobutton-box .p-radiobutton-icon {
    color: `).concat(e("radiobutton.icon.disabled.color"),`;
}
`)}},Gm={css:function(n){var e=n.dt;return`
.p-rating {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.p-rating-item {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    outline-color: transparent;
    border-radius: 50%;
    cursor: pointer;
}

.p-rating-item.p-focus-visible {
    outline: `.concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-rating-icon {
    color: `).concat(e("rating.icon.color"),`;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    font-size: 1rem;
    width: 1rem;
    height: 1rem;
}

.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-item:hover .p-rating-icon {
    color: `).concat(e("rating.icon.hover.color"),`;
}

.p-rating-item-active .p-rating-icon {
    color: `).concat(e("rating.icon.active.color"),`;
}
`)}},Jm={css:function(n){var e=n.dt;return`
.p-scrollpanel-wrapper {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    float: left;
}

.p-scrollpanel-content {
    height: calc(100% + 18px);
    width: calc(100% + 18px);
    padding: 0 18px 18px 0;
    position: relative;
    overflow: auto;
    box-sizing: border-box;
    scrollbar-width: none;
}

.p-scrollpanel-content::-webkit-scrollbar {
    display: none;
}

.p-scrollpanel-bar {
    position: relative;
    border-radius: 3px;
    z-index: 2;
    cursor: pointer;
    opacity: 0;
    outline-color: transparent;
    transition: outline-color `.concat(e("transition.duration"),`;
    background: `).concat(e("scrollpanel.bar.background"),`;
    border: 0 none;
    transition: outline-color `).concat(e("transition.duration"),", opacity ").concat(e("transition.duration"),`;
}

.p-scrollpanel-bar:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-scrollpanel-bar-y {
    width: 9px;
    top: 0;
}

.p-scrollpanel-bar-x {
    height: 9px;
    bottom: 0;
}

.p-scrollpanel-hidden {
    visibility: hidden;
}

.p-scrollpanel:hover .p-scrollpanel-bar,
.p-scrollpanel:active .p-scrollpanel-bar {
    opacity: 1;
}

.p-scrollpanel-grabbed {
    user-select: none;
}
`)}},Zm={css:function(n){var e=n.dt;return`
.p-scrolltop {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: `.concat(e("scrolltop.background"),`;
    color: `).concat(e("scrolltop.color"),`;
}

.p-scrolltop:hover {
    background: `).concat(e("scrolltop.hover.background"),`;
    color: `).concat(e("scrolltop.hover.text"),`;
}

.p-scrolltop-icon {
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
}

.p-scrolltop-sticky {
    position: sticky;
}

.p-scrolltop-sticky {
    margin-left: auto;
}

.p-scrolltop-enter-from {
    opacity: 0;
}

.p-scrolltop-enter-active {
    transition: opacity 0.15s;
}

.p-scrolltop.p-scrolltop-leave-to {
    opacity: 0;
}

.p-scrolltop-leave-active {
    transition: opacity 0.15s;
}

.p-scrolltop {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    transition: background `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
}
`)}},Ym={css:function(n){var e=n.dt;return`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: `.concat(e("rounded.base"),`;
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton .p-togglebutton:first-child {
    border-top-left-radius: `).concat(e("rounded.base"),`;
    border-bottom-left-radius: `).concat(e("rounded.base"),`;
}

.p-selectbutton .p-togglebutton:last-child {
    border-top-right-radius: `).concat(e("rounded.base"),`;
    border-bottom-right-radius: `).concat(e("rounded.base"),`;
}

.p-selectbutton.p-invalid {
    outline: 1px solid `).concat(e("selectbutton.invalid.border.color"),`;
    outline-offset: 0;
}
`)}},Xm={css:function(n){var e=n.dt;return`
.p-sidebar {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    transition: transform 0.3s;
    background: `.concat(e("sidebar.background"),`;
    color: `).concat(e("sidebar.color"),`;
    border: 1px solid `).concat(e("sidebar.border.color"),`;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
}

.p-sidebar-content {
    overflow-y: auto;
    flex-grow: 1;
    padding: 0 1.125rem 1.125rem 1.125rem;
}

.p-sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: 1.125rem;
}

.p-sidebar-header-content {
    font-weight: 600;
    font-size: 1.25rem;
}

.p-sidebar-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    color: `).concat(e("sidebar.header.icon.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
}

.p-sidebar-icon:enabled:hover {
    background: `).concat(e("sidebar.header.icon.hover.background"),`;
    color: `).concat(e("sidebar.header.icon.hover.color"),`;
}

.p-sidebar-icon:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-sidebar-full .p-sidebar {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
    border-width: 1px;
}

.p-sidebar-left .p-sidebar-enter-from,
.p-sidebar-left .p-sidebar-leave-to {
    transform: translateX(-100%);
}

.p-sidebar-right .p-sidebar-enter-from,
.p-sidebar-right .p-sidebar-leave-to {
    transform: translateX(100%);
}

.p-sidebar-top .p-sidebar-enter-from,
.p-sidebar-top .p-sidebar-leave-to {
    transform: translateY(-100%);
}

.p-sidebar-bottom .p-sidebar-enter-from,
.p-sidebar-bottom .p-sidebar-leave-to {
    transform: translateY(100%);
}

.p-sidebar-full .p-sidebar-enter-from,
.p-sidebar-full .p-sidebar-leave-to {
    opacity: 0;
}

.p-sidebar-full .p-sidebar-enter-active,
.p-sidebar-full .p-sidebar-leave-active {
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}

.p-sidebar-left .p-sidebar {
    width: 20rem;
    height: 100%;
    border-right-width: 1px;
}

.p-sidebar-right .p-sidebar {
    width: 20rem;
    height: 100%;
    border-left-width: 1px;
}

.p-sidebar-top .p-sidebar {
    height: 10rem;
    width: 100%;
    border-bottom-width: 1px;
}

.p-sidebar-bottom .p-sidebar {
    height: 10rem;
    width: 100%;
    border-top-width: 1px;
}

.p-sidebar-left .p-sidebar-sm,
.p-sidebar-right .p-sidebar-sm {
    width: 20rem;
}

.p-sidebar-left .p-sidebar-md,
.p-sidebar-right .p-sidebar-md {
    width: 40rem;
}

.p-sidebar-left .p-sidebar-lg,
.p-sidebar-right .p-sidebar-lg {
    width: 60rem;
}

.p-sidebar-top .p-sidebar-sm,
.p-sidebar-bottom .p-sidebar-sm {
    height: 10rem;
}

.p-sidebar-top .p-sidebar-md,
.p-sidebar-bottom .p-sidebar-md {
    height: 20rem;
}

.p-sidebar-top .p-sidebar-lg,
.p-sidebar-bottom .p-sidebar-lg {
    height: 30rem;
}

.p-sidebar-left .p-sidebar-content,
.p-sidebar-right .p-sidebar-content,
.p-sidebar-top .p-sidebar-content,
.p-sidebar-bottom .p-sidebar-content {
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 64em) {
    .p-sidebar-left .p-sidebar-lg,
    .p-sidebar-left .p-sidebar-md,
    .p-sidebar-right .p-sidebar-lg,
    .p-sidebar-right .p-sidebar-md {
        width: 20rem;
    }
}

.p-sidebar-visible {
    display: flex;
}
`)}},Qm={css:function(n){var e=n.dt;return`
.p-skeleton {
    overflow: hidden;
    background-color: `.concat(e("skeleton.background"),`;
    border-radius: `).concat(e("rounded.base"),`;
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient( 90deg, rgba(255, 255, 255, 0), `).concat(e("skeleton.animation.background"),`, rgba(255, 255, 255, 0) );
}

.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-none::after {
    animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}
`)}},eg={css:function(n){var e=n.dt;return`
.p-slider {
    position: relative;
    background: `.concat(e("slider.track.background"),`;
    border-radius: `).concat(e("rounded.base"),`;
}

.p-slider-handle {
    cursor: grab;
    touch-action: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 20px;
    background: `).concat(e("slider.handle.background"),`;
    border: 0 none;
    border-radius: 50%;
    transition: background `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
}

.p-slider-handle::before {
    content: "";
    width: 16px;
    height: 16px;
    display: block;
    background-color: `).concat(e("slider.handle.content.background"),`;
    border-radius: 50%;
    box-shadow: 0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14);
}

.p-slider:not(.p-disabled) .p-slider-handle:hover {
    background: `).concat(e("slider.handle.hover.background"),`;
    border-color: transparent;
}

.p-slider-handle:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: 0;
}

.p-slider-range {
    display: block;
    background: `).concat(e("slider.range.background"),`;
    border-radius: `).concat(e("rounded.base"),`;
}

.p-slider.p-slider-horizontal {
    height: 3px;
}

.p-slider-horizontal .p-slider-range {
    top: 0;
    left: 0;
    height: 100%;
}

.p-slider-horizontal .p-slider-handle {
    top: 50%;
    margin-top: -10px;
    margin-left: -10px;
}

.p-slider-vertical {
    height: 100px;
    width: 3px;
}

.p-slider-vertical .p-slider-handle {
    left: 50%;
    margin-left: -10px;
    margin-bottom: -10px;
}

.p-slider-vertical .p-slider-range {
    bottom: 0;
    left: 0;
    width: 100%;
}
`)}},ng={css:function(n){var e=n.dt;return`
.p-speeddial {
    position: static;
    display: flex;
    gap: 0.25rem;
}

.p-speeddial-button {
    z-index: 1;
    width: 2.5rem;
    height: 2.5rem;
}

.p-speeddial-button.p-speeddial-rotate {
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color `.concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    will-change: transform;
}

.p-speeddial-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: top 0s linear `).concat(e("transition.duration"),`;
    pointer-events: none;
    outline: 0 none;
    z-index: 2;
    gap: 0.25rem;
}

.p-speeddial-item {
    transform: scale(0);
    opacity: 0;
    transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 0.8s;
    will-change: transform;
}

.p-speeddial-item.p-focus > .p-speeddial-action {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-speeddial-action {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    width: 2.5rem;
    height: 2.5rem;
    background: `).concat(e("speeddial.item.background"),`;
    color: `).concat(e("speeddial.item.color"),`;
    outline-color: transparent;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
}

.p-speeddial-action:hover {
    background: `).concat(e("speeddial.item.hover.background"),`;
    color: `).concat(e("speeddial.item.hover.color"),`;
}

.p-speeddial-circle .p-speeddial-item,
.p-speeddial-semi-circle .p-speeddial-item,
.p-speeddial-quarter-circle .p-speeddial-item {
    position: absolute;
}

.p-speeddial-mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: `).concat(e("mask.background"),`;
    border-radius: 6px;
    transition: opacity 150ms;
}

.p-speeddial-mask-visible {
    pointer-events: none;
    opacity: 1;
    transition: opacity 150ms;
}

.p-speeddial-opened .p-speeddial-list {
    pointer-events: auto;
}

.p-speeddial-opened .p-speeddial-item {
    transform: scale(1);
    opacity: 1;
}

.p-speeddial-opened .p-speeddial-rotate {
    transform: rotate(45deg);
}
`)}},tg={css:function(n){var e=n.dt;return`
.p-splitbutton {
    display: inline-flex;
    position: relative;
    border-radius: `.concat(e("rounded.base"),`;
}

.p-splitbutton-defaultbutton {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0 none;
}

.p-splitbutton-defaultbutton:not(:disabled):hover,
.p-splitbutton-defaultbutton:not(:disabled):active {
    border-right: 0 none;
}

.p-splitbutton-menubutton {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-splitbutton .p-menu {
    min-width: 100%;
}

.p-fluid .p-splitbutton {
    display: flex;
}

.p-splitbutton.p-button-rounded .p-splitbutton-defaultbutton {
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;;
}

.p-splitbutton.p-button-rounded .p-splitbutton-menubutton {
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;;
}

.p-splitbutton.p-button-raised {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

/*
.p-splitbutton .p-splitbutton-defaultbutton,
.p-splitbutton.p-button-rounded > .p-splitbutton-defaultbutton.p-button,
.p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button,
.p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button-outlined.p-button:hover {
    flex: 1 1 auto;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0 none;
}

.p-splitbutton-menubutton,
.p-splitbutton.p-button-rounded > .p-splitbutton-menubutton.p-button,
.p-splitbutton.p-button-outlined > .p-splitbutton-menubutton.p-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}


*/
`)}},og={css:function(n){var e=n.dt;return`
.p-splitter {
    display: flex;
    flex-wrap: nowrap;
    border: 1px solid `.concat(e("splitter.border.color"),`;
    background: `).concat(e("splitter.background"),`;
    border-radius: `).concat(e("rounded.base"),`;
    color: `).concat(e("splitter.color"),`;
}

.p-splitter-vertical {
    flex-direction: column;
}

.p-splitter-gutter {
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    background: `).concat(e("splitter.gutter.background"),`;
}

.p-splitter-gutter-handle {
    border-radius: `).concat(e("rounded.base"),`;
    background: transparent;
    transition: outline-color `).concat(e("transition.duration"),`;
    outline-color: transparent;
}

.p-splitter-gutter-handle:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-splitter-horizontal.p-splitter-resizing {
    cursor: col-resize;
    user-select: none;
}

.p-splitter-vertical.p-splitter-resizing {
    cursor: row-resize;
    user-select: none;
}

.p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {
    height: 24px;
    width: 100%;
}

.p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {
    width: 24px;
    height: 100%;
}

.p-splitter-horizontal > .p-splitter-gutter {
    cursor: col-resize;
}

.p-splitter-vertical > .p-splitter-gutter {
    cursor: row-resize;
}

.p-splitter-panel {
    flex-grow: 1;
    overflow: hidden;
}

.p-splitter-panel-nested {
    display: flex;
}

.p-splitter-panel .p-splitter {
    flex-grow: 1;
    border: 0 none;
}
`)}},rg={css:function(n){var e=n.dt;return`
.p-stepper-nav {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow-x: auto;
}

.p-stepper-header {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    padding: 0.5rem;
}

.p-stepper-header:last-of-type {
    flex: initial;
}

.p-stepper-action {
    border: 0 none;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: background-color `.concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    border-radius: `).concat(e("rounded.base"),`;
    outline-color: transparent;
    background: transparent;
}

.p-stepper-header .p-stepper-action:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-stepper.p-stepper-readonly .p-stepper-header {
    cursor: auto;
}

.p-stepper-title {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    margin-left: 0.5rem;
    color: `).concat(e("stepper.title.color"),`;
    font-weight: 500;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
}

.p-stepper-number {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: `).concat(e("stepper.marker.color"),`;
    border: 1px solid `).concat(e("stepper.marker.border.color"),`;
    border-width: 2px;
    background: `).concat(e("stepper.marker.background"),`;
    min-width: 2rem;
    height: 2rem;
    line-height: 2rem;
    font-size: 1.143rem;
    border-radius: 50%;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
}

.p-stepper-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
}

.p-stepper-header.p-highlight .p-stepper-action {
    cursor: default;
}

.p-stepper-header.p-highlight .p-stepper-number {
    background: `).concat(e("stepper.marker.active.background"),`;
    color: `).concat(e("stepper.marker.active.background"),`;
}

.p-stepper-header.p-highlight .p-stepper-title {
    color: `).concat(e("stepper.title.active.background"),`;
}

.p-stepper-header:not(.p-disabled):focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-stepper-header:has(~ .p-highlight) .p-stepper-separator {
    background: `).concat(e("stepper.connector.active.background"),`;
}

.p-stepper-separator {
    flex: 1 1 0;
    background: `).concat(e("stepper.connector.background"),`;
    width: 100%;
    height: 2px;
    margin-inline-start: 1rem;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
}

.p-stepper-content {
    background: `).concat(e("stepper.content.background"),`;
    color: `).concat(e("stepper.content.color"),`;
    padding: 0.875rem 1.125rem 1.125rem 1.125rem;
}

.p-stepper-vertical .p-stepper-nav {
    flex-direction: column;
}

.p-stepper-vertical {
    display: flex;
    flex-direction: column;
}

.p-stepper-vertical .p-stepper-toggleable-content {
    display: flex;
    flex: 1 1 auto;
}

.p-stepper-vertical .p-stepper-panel {
    display: flex;
    flex-direction: column;
    flex: initial;
}

.p-stepper-vertical .p-stepper-panel.p-stepper-panel-active {
    flex: 1 1 auto;
}

.p-stepper-vertical .p-stepper-panel .p-stepper-header {
    flex: initial;
}

.p-stepper-vertical .p-stepper-panel .p-stepper-content {
    width: 100%;
    padding-left: 1rem;
}

.p-stepper-vertical .p-stepper-panel .p-stepper-separator {
    flex: 0 0 auto;
    width: 2px;
    height: auto;
    margin-inline-start: calc(1.75rem + 2px);
}

.p-stepper-vertical .p-stepper-panel:has(~ .p-stepper-panel-active) .p-stepper-separator {
    background: `).concat(e("stepper.connector.active.background"),`;
}

.p-stepper-vertical .p-stepper-panel:last-of-type .p-stepper-content {
    padding-left: 3rem;
}
`)}},ig={css:function(n){var e=n.dt;return`
.p-steps {
    position: relative;
}

.p-steps .p-steps-list {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
}

.p-steps-item {
    position: relative;
    display: flex;
    justify-content: center;
    flex: 1 1 auto;
}

.p-steps-item.p-disabled,
.p-steps-item.p-disabled * {
    opacity: 1;
    pointer-events: auto;
    user-select: auto;
    cursor: auto;
}

.p-steps-item:before {
    content: " ";
    border-top: 2px solid `.concat(e("steps.connector.border.color"),`;
    width: 100%;
    top: 50%;
    left: 0;
    display: block;
    position: absolute;
    margin-top: -1rem;
    margin-top: calc(-1rem + 1px);
}

.p-steps-item:first-child::before {
    width: calc(50% + 1rem);
    transform: translateX(100%);
}

.p-steps-item:last-child::before {
    width: 50%;
}

.p-steps-item .p-menuitem-link {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    text-decoration: none;
    transition: outline-color `).concat(e("transition.duration"),`;
    border-radius: `).concat(e("rounded.base"),`;
    outline-color: transparent;
}

.p-steps-item .p-menuitem-link:not(.p-disabled):focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-steps-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    margin-top: 0.5rem;
    color: `).concat(e("steps.item.color"),`;
    display: block;
    font-weight: 500;
}

.p-steps-number {
    display: flex;
    align-items: center;
    justify-content: center;
    color: `).concat(e("steps.marker.color"),`;
    border: 2px solid `).concat(e("steps.marker.border.color"),`;
    background: `).concat(e("steps.marker.background"),`;
    min-width: 2rem;
    height: 2rem;
    line-height: 2rem;
    font-size: 1.143rem;
    z-index: 1;
    border-radius: 50%;
    position: relative;
    font-weight: 500;
}

.p-steps-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
}

.p-steps:not(.p-readonly) .p-steps-item {
    cursor: pointer;
}

.p-steps-current .p-steps-number {
    background: `).concat(e("steps.marker.active.background"),`;
    color: `).concat(e("steps.marker.active.color"),`;
}

.p-steps-current .p-steps-title {
    font-weight: 500;
    color: `).concat(e("steps.item.active.color"),`;
}
`)}},ag={css:function(n){var e=n.dt;return`
.p-tabmenu {
    overflow-x: auto;
}

.p-tabmenu-nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex: 1 1 auto;
    background: `.concat(e("tabmenu.nav.background"),`;
    border: 1px solid `).concat(e("tabmenu.nav.border.color"),`;
    border-width: 0 0 1px 0;
    position: relative;
}

.p-tabmenuitem .p-menuitem-link {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: transparent transparent `).concat(e("tabmenu.header.border.color"),` transparent;
    color: `).concat(e("tabmenu.header.color"),`;
    padding: 1rem 1.125rem;
    font-weight: 600;
    border-top-right-radius: `).concat(e("rounded.base"),`;
    border-top-left-radius: `).concat(e("rounded.base"),`;
    transition: color `).concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    margin: 0 0 -1px 0;
    outline-color: transparent;
}

.p-tabmenuitem .p-menuitem-link:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: -1px;
}

.p-tabmenuitem .p-menuitem-icon {
    margin-right: 0.5rem;
}

.p-tabmenu-nav .p-menuitem-text {
    line-height: 1;
}

.p-tabmenuitem:not(.p-highlight):not(.p-disabled):hover .p-menuitem-link {
    color: `).concat(e("tabmenu.header.hover.color"),`;
}

.p-tabmenuitem.p-highlight .p-menuitem-link {
    color: `).concat(e("tabmenu.header.active.border.color"),`;
}

.p-tabmenu-ink-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: -1px;
    height: 1px;
    background-color: `).concat(e("tabmenu.header.active.border.color"),`;
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}

.p-tabmenu::-webkit-scrollbar {
    display: none;
}
`)}},sg={css:function(n){var e=n.dt;return`
.p-tabview-nav-container {
    position: relative;
}

.p-tabview-scrollable > .p-tabview-nav-container {
    overflow: hidden;
}

.p-tabview-nav-content {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tabview-nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex: 1 1 auto;
    background: `.concat(e("tabview.nav.background"),`;
    border: 1px solid `).concat(e("tabview.nav.border.color"),`;
    border-width: 0 0 1px 0;
    position: relative;
}

.p-tabview-nav-link {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: transparent transparent `).concat(e("tabview.header.border.color"),` transparent;
    color: `).concat(e("tabview.header.color"),`;
    padding: 1rem 1.125rem;
    font-weight: 600;
    border-top-right-radius: `).concat(e("rounded.base"),`;
    border-top-left-radius: `).concat(e("rounded.base"),`;
    transition: color `).concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    margin: 0 0 -1px 0;
    outline-color: transparent;
}

.p-tabview-header:not(.p-disabled) .p-tabview-nav-link:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: -1px;
}

.p-tabview-header:not(.p-highlight):not(.p-disabled):hover >.p-tabview-nav-link {
    color: `).concat(e("tabview.header.hover.color"),`;
}

.p-tabview-header.p-highlight > .p-tabview-nav-link {
    color: `).concat(e("tabview.header.active.color"),`;
}

.p-tabview-title {
    line-height: 1;
    white-space: nowrap;
}

.p-tabview-nav-btn {
    position: absolute;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: `).concat(e("tabview.navigator.icon.background"),`;
    color: `).concat(e("tabview.navigator.icon.color"),`;
    width: 2.5rem;
    border-radius: 0;
    outline-color: transparent;
    transition: color `).concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    box-shadow: `).concat(e("tabview.navigator.icon.box.shadow"),`;
}

.p-tabview-nav-btn:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-tabview-nav-btn:hover {
    color: `).concat(e("tabview.navigator.icon.hover.color"),`;
}

.p-tabview-nav-prev {
    left: 0;
}

.p-tabview-nav-next {
    right: 0;
}

.p-tabview-nav-content::-webkit-scrollbar {
    display: none;
}

.p-tabview-panels {
    background: `).concat(e("tabview.navigator.content.background"),`;
    color: `).concat(e("tabview.navigator.content.color"),`;
    padding: 0.875rem 1.125rem 1.125rem 1.125rem;
}

.p-tabview-ink-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: -1px;
    height: 1px;
    background-color: `).concat(e("tabview.header.active.border.color"),`;
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`)}},cg={css:function(n){var e=n.dt;return`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: `.concat(e("tag.primary.background"),`;
    color: `).concat(e("tag.primary.color"),`;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.25rem 0.4rem;
    border-radius: 6px;
    gap: 0.25rem;
}

.p-tag-icon {
    font-size: 0.75rem;
    width: 0.75rem;
    height: 0.75rem;
}

.p-tag-rounded {
    border-radius: 10rem;
}

.p-tag-success {
    background: `).concat(e("tag.success.background"),`;
    color: `).concat(e("tag.success.color"),`;
}

.p-tag-info {
    background: `).concat(e("tag.info.background"),`;
    color: `).concat(e("tag.info.color"),`;
}

.p-tag-warning {
    background: `).concat(e("tag.warn.background"),`;
    color: `).concat(e("tag.warn.color"),`;
}

.p-tag-danger {
    background: `).concat(e("tag.danger.background"),`;
    color: `).concat(e("tag.danger.color"),`;
}

.p-tag-secondary {
    background: `).concat(e("tag.secondary.background"),`;
    color: `).concat(e("tag.secondary.color"),`;
}

.p-tag-contrast {
    background: `).concat(e("tag.contrast.background"),`;
    color: `).concat(e("tag.contrast.color"),`;
}
`)}},lg={css:function(n){var e=n.dt;return`
.p-terminal {
    height: 18rem;
    overflow: auto;
    background: `.concat(e("terminal.background"),`;
    color: `).concat(e("terminal.color"),`;
    border: 1px solid `).concat(e("terminal.border.color"),`;
    padding: 0.5rem 0.75rem;
    border-radius: `).concat(e("rounded.base"),`;
}

.p-terminal-prompt-container {
    display: flex;
    align-items: center;
}

.p-terminal-input {
    flex: 1 1 auto;
    border: 0 none;
    background-color: transparent;
    color: inherit;
    padding: 0;
    outline: 0 none;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
}

.p-terminal-prompt {
    margin-right: 0.25rem;
}

.p-terminal-input::-ms-clear {
    display: none;
}

.p-terminal-response {
    margin: 2px 0;
}
`)}},ug={css:function(n){var e=n.dt;return`
.p-inputtextarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(e("textarea.color"),`;
    background: `).concat(e("textarea.background"),`;
    padding: 0.5rem 0.75rem;
    border: 1px solid `).concat(e("textarea.border.color"),`;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    appearance: none;
    border-radius: `).concat(e("rounded.base"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("textarea.box.shadow"),`;
}

.p-inputtextarea:enabled:hover {
    border-color: `).concat(e("textarea.hover.border.color"),`;
}

.p-inputtextarea:enabled:focus {
    border-color: `).concat(e("textarea.focus.border.color"),`;
    outline: 0 none;
}

.p-inputtextarea.p-invalid {
    border-color: `).concat(e("textarea.invalid.border.color"),`;
}

.p-inputtextarea.p-variant-filled {
    background-color: `).concat(e("textarea.filled.background"),`;
}

.p-inputtextarea.p-variant-filled:enabled:focus {
    background-color: `).concat(e("textarea.filled.focus.background"),`;
}

.p-inputtextarea:disabled {
    opacity: 1;
    background: `).concat(e("textarea.disabled.background"),`;
    color: `).concat(e("textarea.disabled.color"),`;
}

.p-inputtextarea::placeholder {
    color: `).concat(e("textarea.placeholder.color"),`;
}

.p-fluid .p-inputtextarea {
    width: 100%;
}

.p-inputtextarea-resizable {
    overflow: hidden;
    resize: none;
}
`)}},dg={css:function(n){var e=n.dt;return`
.p-tieredmenu {
    padding: 0.25rem 0.25rem;
    background: `.concat(e("tieredmenu.background"),`;
    color: `).concat(e("tieredmenu.color"),`;
    border: 1px solid `).concat(e("tieredmenu.border.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
    min-width: 12.5rem;
}

.p-tieredmenu ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-tieredmenu-root-list {
    outline: 0 none;
}

.p-tieredmenu .p-submenu-list {
    position: absolute;
    min-width: 100%;
    z-index: 1;
    padding: 0.25rem 0.25rem;
    background: `).concat(e("tieredmenu.background"),`;
    color: `).concat(e("tieredmenu.color"),`;
    border: 1px solid `).concat(e("tieredmenu.border.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-tieredmenu .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: 0.5rem 0.75rem;
    user-select: none;
}

.p-tieredmenu .p-menuitem-text {
    line-height: 1;
}

.p-tieredmenu .p-menuitem {
    position: relative;
    margin: 2px 0;
}

.p-tieredmenu .p-menuitem:first-child {
    margin-top: 0;
}
.p-tieredmenu .p-menuitem:last-child {
    margin-bottom: 0;
}

.p-tieredmenu .p-menuitem-content {
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),`;
    border-radius: `).concat(e("rounded.sm"),`;
    color: `).concat(e("tieredmenu.item.color"),`;
}

.p-tieredmenu .p-menuitem-icon {
    color: `).concat(e("tieredmenu.item.icon.color"),`;
    margin-right: 0.5rem;
}

.p-tieredmenu .p-submenu-icon {
    color: `).concat(e("tieredmenu.item.icon.color"),`;
    margin-left: auto;
    font-size: 0.875rem;
    width: 0.875rem;
    height: 0.875rem;
}

.p-tieredmenu .p-menuitem.p-focus > .p-menuitem-content {
    color: `).concat(e("tieredmenu.item.focus.color"),`;
    background: `).concat(e("tieredmenu.item.focus.background"),`;
}

.p-tieredmenu .p-menuitem.p-focus > .p-menuitem-content .p-menuitem-icon,
.p-tieredmenu .p-menuitem.p-focus > .p-menuitem-content .p-submenu-icon {
    color: `).concat(e("tieredmenu.item.icon.focus.color"),`;
}

.p-tieredmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover {
    color: `).concat(e("tieredmenu.item.focus.color"),`;
    background: `).concat(e("tieredmenu.item.focus.background"),`;
}

.p-tieredmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-icon,
.p-tieredmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-submenu-icon {
    color: `).concat(e("tieredmenu.item.icon.focus.color"),`;
}

.p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-content {
    color: `).concat(e("tieredmenu.item.focus.color"),`;
    background: `).concat(e("tieredmenu.item.focus.background"),`;
}

.p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-content .p-menuitem-icon,
.p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-content .p-submenu-icon {
    color: `).concat(e("tieredmenu.item.icon.focus.color"),`;
}

.p-tieredmenu .p-menuitem-separator {
    border-top: 1px solid `).concat(e("tieredmenu.separator.border.color"),`;
    margin: 2px 0;
}

.p-tieredmenu.p-tieredmenu-overlay {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-tieredmenu-enter-from,
.p-tieredmenu-leave-active {
    opacity: 0;
}

.p-tieredmenu-enter-active {
    transition: opacity 250ms;
}
`)}},pg={css:function(n){var e=n.dt;return`
.p-timeline {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
}

.p-timeline-left .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-left .p-timeline-event-content {
    text-align: left;
}

.p-timeline-right .p-timeline-event {
    flex-direction: row-reverse;
}

.p-timeline-right .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-right .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: row-reverse;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical .p-timeline-event-opposite,
.p-timeline-vertical .p-timeline-event-content {
    padding: 0 1rem;
}

.p-timeline-vertical .p-timeline-event-connector {
    width: 2px;
}

.p-timeline-event {
    display: flex;
    position: relative;
    min-height: 70px;
}

.p-timeline-event:last-child {
    min-height: 0;
}

.p-timeline-event-opposite {
    flex: 1;
    padding: 0 1rem;
}

.p-timeline-event-content {
    flex: 1;
    padding: 0 1rem;
}

.p-timeline-event-separator {
    flex: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.p-timeline-event-marker {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    align-self: baseline;
    border: 2px solid `.concat(e("timeline.marker.border.color"),`;
    border-radius: 50%;
    width: 1.125rem;
    height: 1.125rem;
    background-color: `).concat(e("timeline.marker.background"),`;
}

.p-timeline-event-marker::before {
    content: " ";
    border-radius: 50%;
    width: 0.375rem;
    height: 0.375rem;
    background: `).concat(e("timeline.marker.content.color"),`;
}

.p-timeline-event-marker::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
}

.p-timeline-event-connector {
    flex-grow: 1;
    background-color: `).concat(e("timeline.connector.color"),`;
}

.p-timeline-horizontal {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event {
    flex-direction: column;
    flex: 1;
}

.p-timeline-horizontal .p-timeline-event:last-child {
    flex: 0;
}

.p-timeline-horizontal .p-timeline-event-separator {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event-connector {
    width: 100%;
    height: 2px;
}

.p-timeline-horizontal .p-timeline-event-opposite,
.p-timeline-horizontal .p-timeline-event-content {
    padding: 1rem 0;
}

.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: column-reverse;
}

.p-timeline-bottom .p-timeline-event {
    flex-direction: column-reverse;
}
`)}},fg={css:function(n){var e=n.dt;return`
.p-toast {
    width: 25rem;
    white-space: pre-line;
    word-break: break-word;
}

.p-toast-message {
    backdrop-filter: blur(`.concat(e("toast.blur"),`);
    margin: 0 0 1rem 0;
    border-radius: `).concat(e("rounded.base"),`;
}

.p-toast-message-icon {
    flex-shrink: 0;
    font-size: 1.125rem;
    width: 1.125rem;
    height: 1.125rem;
}

.p-toast-message-content {
    display: flex;
    align-items: flex-start;
    padding: 0.75rem;
    gap: 0.5rem;
}

.p-toast-message-text {
    flex: 1 1 auto;
}

.p-toast-summary {
    font-weight: 500;
}
.p-toast-detail {
    margin-top: 0.5rem;
    font-size: 0.875rem;
}

.p-toast-icon-close {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    border-radius: 50%;
    cursor: pointer;
    background: transparent;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
    color: inherit;
    width: 1.75rem;
    height: 1.75rem;
    margin-top: -25%;
    right: -25%;
}

.p-toast-icon-close:focus-visible {
    outline-width: `).concat(e("focus.ring.width"),`;
    outline-style: `).concat(e("focus.ring.style"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-toast-message-info {
    background: `).concat(e("toast.info.background"),`;
    border: 1px solid `).concat(e("toast.info.border.color"),`;
    color: `).concat(e("toast.info.color"),`;
    box-shadow: `).concat(e("toast.info.box.shadow"),`;
}

.p-toast-message-info .p-toast-detail {
    color: `).concat(e("toast.info.detail.color"),`;
}

.p-toast-message-info .p-toast-icon-close:focus-visible {
    color: `).concat(e("toast.info.color"),`;
}

.p-toast-message-info .p-toast-icon-close:hover {
    background: `).concat(e("toast.info.close.hover.background"),`;
}

.p-toast-message-success {
    background: `).concat(e("toast.success.background"),`;
    border: 1px solid `).concat(e("toast.success.border.color"),`;
    color: `).concat(e("toast.success.color"),`;
    box-shadow: `).concat(e("toast.success.box.shadow"),`;
}

.p-toast-message-success .p-toast-detail {
    color: `).concat(e("toast.success.detail.color"),`;
}

.p-toast-message-success .p-toast-icon-close:focus-visible {
    color: `).concat(e("toast.success.color"),`;
}

.p-toast-message-success .p-toast-icon-close:hover {
    background: `).concat(e("toast.success.close.hover.background"),`;
}

.p-toast-message-warn {
    background: `).concat(e("toast.warn.background"),`;
    border: 1px solid `).concat(e("toast.warn.border.color"),`;
    color: `).concat(e("toast.warn.color"),`;
    box-shadow: `).concat(e("toast.warn.box.shadow"),`;
}

.p-toast-message-warn .p-toast-detail {
    color: `).concat(e("toast.warn.detail.color"),`;
}

.p-toast-message-warn .p-toast-icon-close:focus-visible {
    color: `).concat(e("toast.warn.color"),`;
}

.p-toast-message-warn .p-toast-icon-close:hover {
    background: `).concat(e("toast.warn.close.hover.background"),`;
}

.p-toast-message-error {
    background: `).concat(e("toast.error.background"),`;
    border: 1px solid `).concat(e("toast.error.border.color"),`;
    color: `).concat(e("toast.error.color"),`;
    box-shadow: `).concat(e("toast.error.box.shadow"),`;
}

.p-toast-message-error .p-toast-detail {
    color: `).concat(e("toast.error.detail.color"),`;
}

.p-toast-message-error .p-toast-icon-close:focus-visible {
    color: `).concat(e("toast.error.color"),`;
}

.p-toast-message-error .p-toast-icon-close:hover {
    background: `).concat(e("toast.error.close.hover.background"),`;
}

.p-toast-message-secondary {
    background: `).concat(e("toast.secondary.background"),`;
    border: 1px solid `).concat(e("toast.secondary.border.color"),`;
    color: `).concat(e("toast.secondary.color"),`;
    box-shadow: `).concat(e("toast.secondary.box.shadow"),`;
}

.p-toast-message-secondary .p-toast-detail {
    color: `).concat(e("toast.secondary.detail.color"),`;
}

.p-toast-message-secondary .p-toast-icon-close:focus-visible {
    color: `).concat(e("toast.secondary.color"),`;
}

.p-toast-message-secondary .p-toast-icon-close:hover {
    background: `).concat(e("toast.secondary.close.hover.background"),`;
}

.p-toast-message-contrast {
    background: `).concat(e("toast.contrast.background"),`;
    border: 1px solid `).concat(e("toast.contrast.border.color"),`;
    color: `).concat(e("toast.contrast.color"),`;
    box-shadow: `).concat(e("toast.contrast.box.shadow"),`;
}

.p-toast-message-contrast .p-toast-detail {
    color: `).concat(e("toast.contrast.detail.color"),`;
}

.p-toast-message-contrast .p-toast-icon-close:focus-visible {
    color: `).concat(e("toast.contrast.color"),`;
}

.p-toast-message-contrast .p-toast-icon-close:hover {
    background: `).concat(e("toast.contrast.close.hover.background"),`;
}

.p-toast-top-center {
    transform: translateX(-50%);
}

.p-toast-bottom-center {
    transform: translateX(-50%);
}

.p-toast-center {
    min-width: 20vw;
    transform: translate(-50%, -50%);
}

.p-toast-message-enter-from {
    opacity: 0;
    transform: translateY(50%);
}

.p-toast-message-leave-from {
    max-height: 1000px;
}

.p-toast .p-toast-message.p-toast-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
    overflow: hidden;
}

.p-toast-message-enter-active {
    transition: transform 0.3s, opacity 0.3s;
}

.p-toast-message-leave-active {
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
}
`)}},hg={css:function(n){var e=n.dt;return`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(e("togglebutton.color"),`;
    background: `).concat(e("togglebutton.background"),`;
    border: 1px solid `).concat(e("togglebutton.border.color"),`;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    border-radius: `).concat(e("rounded.base"),`;
    outline-color: transparent;
    gap: 0.5rem;
    font-weight: 500;
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    position: absolute;
    left: 0.25rem;
    top: 0.25rem;
    width: calc(100% - 0.5rem);
    height: calc(100% - 0.5rem);
    border-radius: `).concat(e("rounded.sm"),`;
}

.p-togglebutton.p-highlight::before {
    background: `).concat(e("togglebutton.checked.background"),`;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04);
}

.p-togglebutton:not(:disabled):not(.p-highlight):hover {
    color: `).concat(e("togglebutton.hover.color"),`;
}

.p-togglebutton.p-highlight {
    color: `).concat(e("togglebutton.checked.color"),`;
}

.p-togglebutton:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: `).concat(e("focus.ring.offset"),`;
}

.p-togglebutton.p-invalid {
    border-color: `).concat(e("togglebutton.invalid.border.color"),`;
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: `).concat(e("togglebutton.disabled.background"),`;
    border-color: `).concat(e("togglebutton.disabled.border.color"),`;
    color: `).concat(e("togglebutton.disabled.color"),`;
}

.p-togglebutton-icon {
    color: `).concat(e("togglebutton.icon.color"),`;
}

.p-togglebutton:not(:disabled):not(.p-highlight):hover .p-togglebutton-icon {
    color: `).concat(e("togglebutton.icon.hover.color"),`;
}

.p-togglebutton.p-highlight .p-togglebutton-icon {
    color: `).concat(e("togglebutton.icon.checked.color"),`;
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: `).concat(e("togglebutton.icon.disabled.color"),`;
}
`)}},mg={css:function(n){var e=n.dt;return`
.p-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0.75rem;
    background: `.concat(e("toolbar.background"),`;
    border: 1px solid `).concat(e("toolbar.border.color"),`;
    color: `).concat(e("toolbar.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
    gap: 0.5rem;
}

.p-toolbar-group-start,
.p-toolbar-group-center,
.p-toolbar-group-end {
    display: flex;
    align-items: center;
}

.p-toolbar-separator {
    margin: 0 0.5rem;
}
`)}},gg={css:function(n){var e=n.dt;return`
.p-tooltip {
    position: absolute;
    display: none;
    max-width: 12.5rem;
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 0.25rem;
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: 0.25rem 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: `.concat(e("tooltip.background"),`;
    color: `).concat(e("tooltip.color"),`;
    padding: 0.5rem 0.75rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    scale: 2;
}

.p-tooltip-right .p-tooltip-arrow {
    margin-top: -0.25rem;
    border-width: 0.25em 0.25em 0.25em 0;
    border-right-color: `).concat(e("tooltip.background"),`;
}

.p-tooltip-left .p-tooltip-arrow {
    margin-top: -0.25rem;
    border-width: 0.25em 0 0.25em 0.25rem;
    border-left-color: `).concat(e("tooltip.background"),`;
}

.p-tooltip-top .p-tooltip-arrow {
    margin-left: -0.25rem;
    border-width: 0.25em 0.25em 0;
    border-top-color: `).concat(e("tooltip.background"),`;
    border-bottom-color: `).concat(e("tooltip.background"),`;
}

.p-tooltip-bottom .p-tooltip-arrow {
    margin-left: -0.25rem;
    border-width: 0 0.25em 0.25rem;
}
`)}},bg={css:function(n){var e=n.dt;return`
.p-tree {
    background: `.concat(e("tree.background"),`;
    color: `).concat(e("tree.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
    border: 0 none;
    padding: 1rem;
}

.p-tree-container {
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow: auto;
}

.p-treenode {
    padding: 0 0;
    outline: 0 none;
    margin: 2px 0;
}

.p-tree-container > .p-treenode:first-child {
    margin-top: 0;
}

.p-tree-container > .p-treenode:last-child {
    margin-bottom: 0;
}

.p-treenode-content {
    border-radius: `).concat(e("rounded.base"),`;
    padding: 0.25rem 0.5rem;
    display: flex;
    align-items: center;
    outline-color: transparent;
    color: `).concat(e("tree.node.color"),`;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
}

.p-treenode:focus-visible > .p-treenode-content {
    outline: 1px solid `).concat(e("focus.ring.color"),`;
    outline-offset: -2px;
}

.p-treenode-content.p-highlight {
    background: `).concat(e("highlight.background"),`;
    color: `).concat(e("highlight.color"),`;
}

.p-tree-toggler {
    cursor: pointer;
    user-select: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    margin-right: 0.5rem;
    width: 1.75rem;
    height: 1.75rem;
    color: `).concat(e("tree.toggle.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
}

.p-tree-toggler:enabled:hover {
    background: `).concat(e("tree.toggle.hover.background"),`;
    color: `).concat(e("tree.toggle.hover.color"),`;
}

.p-treenode-content.p-highlight .p-tree-toggler,
.p-treenode-content.p-highlight .p-treenode-icon {
    color: inherit;
}

.p-treenode-content.p-highlight .p-tree-toggler:hover {
    background: `).concat(e("tree.toggle.highlight.hover.background"),`;
}

.p-treenode-content.p-treenode-selectable:not(.p-highlight):hover {
    background: `).concat(e("tree.node.hover.background"),`;
    color: `).concat(e("tree.node.hover.color"),`;
}

.p-treenode-content.p-treenode-selectable:not(.p-highlight):hover .p-tree-toggler {
    color: `).concat(e("tree.toggle.hover.color"),`;
}

.p-treenode-content.p-treenode-selectable:not(.p-highlight):hover .p-treenode-icon {
    color: `).concat(e("tree.icon.hover.color"),`;
}

.p-treenode-children {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: 0 0 0 1rem;
}

.p-tree-wrapper {
    overflow: auto;
}

.p-treenode-selectable {
    cursor: pointer;
    user-select: none;
}

.p-treenode-leaf > .p-treenode-content .p-tree-toggler {
    visibility: hidden;
}

.p-treenode-icon {
    margin-right: 0.5rem;
    color: `).concat(e("tree.icon.color"),`;
    transition: color `).concat(e("transition.duration"),`;
}

.p-treenode-content .p-checkbox {
    margin-right: 0.5rem;
}

.p-treenode-content .p-checkbox.p-indeterminate .p-checkbox-icon {
    color: `).concat(e("tree.indeterminate.color"),`;
}

.p-tree-filter {
    width: 100%;
    padding-right: 1.75rem;
}

.p-tree-filter-container {
    position: relative;
    display: block;
    width: 100%;
    margin-bottom: 0.5rem;
}

.p-tree-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    right: 0.75rem;
    color: #94a3b8;
}

.p-tree-loading {
    position: relative;
    min-height: 4rem;
}

.p-tree-loading-icon {
    font-size: 2rem;
    width: 2rem;
    height: 2rem;
}

.p-tree-loading-overlay {
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-tree-flex-scrollable {
    display: flex;
    flex: 1;
    height: 100%;
    flex-direction: column;
}

.p-tree-flex-scrollable .p-tree-wrapper {
    flex: 1;
}
`)}},vg={css:function(n){var e=n.dt;return`
.p-treeselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: `.concat(e("treeselect.background"),`;
    border: 1px solid `).concat(e("treeselect.border.color"),`;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    border-radius: `).concat(e("rounded.base"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("treeselect.box.shadow"),`;
}

.p-treeselect:not(.p-disabled):hover {
    border-color: `).concat(e("treeselect.hover.border.color"),`;
}

.p-treeselect:not(.p-disabled).p-focus {
    border-color: `).concat(e("treeselect.focus.border.color"),`;
    outline: 0 none;
}

.p-treeselect.p-variant-filled {
    background: `).concat(e("treeselect.filled.background"),`;
}

.p-treeselect.p-variant-filled.p-focus {
    background: `).concat(e("treeselect.filled.focus.background"),`;
}

.p-treeselect.p-invalid {
    border-color: `).concat(e("treeselect.invalid.border.color"),`;
}

.p-treeselect.p-disabled {
    opacity: 1;
    background: `).concat(e("treeselect.disabled.background"),`;
}

.p-treeselect-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: `).concat(e("treeselect.toggle.color"),`;
    width: 2.5rem;
    border-top-right-radius: `).concat(e("rounded.base"),`;
    border-bottom-right-radius: `).concat(e("rounded.base"),`;
}

.p-treeselect-label-container {
    overflow: hidden;
    flex: 1 1 auto;
    cursor: pointer;
}

.p-treeselect-label {
    display: block;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0.5rem 0.75rem;
    color: `).concat(e("treeselect.color"),`;
}

.p-treeselect-label.p-placeholder {
    color: `).concat(e("treeselect.placeholder.color"),`;
}

.p-treeselect.p-disabled .p-treeselect-label {
    color: `).concat(e("treeselect.disabled.color"),`;
}

.p-inputwrapper-filled.p-treeselect.p-treeselect-chip .p-treeselect-label {
    padding: 0.25rem 0.25rem;
}

.p-treeselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-treeselect-token {
    cursor: default;
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    padding: 0.25rem 0.75rem;
    background: `).concat(e("treeselect.chip.background"),`;
    color: `).concat(e("treeselect.chip.color"),`;
    border-radius: `).concat(e("rounded.sm"),`;
    margin-right: 0.25rem;
}

.p-treeselect-token-icon {
    cursor: pointer;
    margin-left: 0.375rem;
}

.p-treeselect .p-treeselect-panel {
    min-width: 100%;
}

.p-treeselect-panel {
    position: absolute;
    top: 0;
    left: 0;
    background: `).concat(e("treeselect.overlay.background"),`;
    color: `).concat(e("treeselect.overlay.color"),`;
    border: 1px solid `).concat(e("treeselect.overlay.border.color"),`;
    border-radius: `).concat(e("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-treeselect-empty-message {
    padding: 0.5rem 0.75rem;
    background: transparent;
}

.p-fluid .p-treeselect {
    display: flex;
}

.p-treeselect-panel .p-tree {
    padding: 0.25rem 0.25rem;
}
`)}},yg={css:function(n){var e=n.dt;return`
.p-treetable {
    position: relative;
}

.p-treetable table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
}

.p-treetable .p-sortable-column {
    cursor: pointer;
    user-select: none;
    outline-color: transparent;
}

.p-treetable .p-sortable-column .p-column-title,
.p-treetable .p-sortable-column .p-sortable-column-icon,
.p-treetable .p-sortable-column .p-sortable-column-badge {
    vertical-align: middle;
}

.p-treetable .p-sortable-column .p-sortable-column-icon {
    color: `.concat(e("treetable.sort.icon.color"),`;
    margin-left: 0.5rem;
    transition: color `).concat(e("transition.duration"),`;
}

.p-treetable .p-sortable-column .p-sortable-column-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 1rem;
    min-width: 1rem;
    line-height: 1rem;
    margin-left: 0.5rem;
}

.p-treetable .p-sortable-column:not(.p-highlight):hover {
    background: `).concat(e("treetable.header.cell.hover.background"),`;
    color: `).concat(e("treetable.header.cell.hover.color"),`;
}

.p-treetable .p-sortable-column:not(.p-highlight):hover .p-sortable-column-icon {
    color: `).concat(e("treetable.sort.icon.hover.color"),`;
}

.p-treetable .p-sortable-column.p-highlight {
    background: `).concat(e("highlight.background"),`;
    color: `).concat(e("highlight.color"),`;
}

.p-treetable .p-sortable-column:focus-visible {
    outline: `).concat(e("focus.ring.width")," ").concat(e("focus.ring.style")," ").concat(e("focus.ring.color"),`;
    outline-offset: -1px;
}

.p-treetable .p-sortable-column.p-highlight .p-sortable-column-icon {
    color: `).concat(e("highlight.color"),`;
}

.p-treetable-responsive-scroll > .p-treetable-wrapper {
    overflow-x: auto;
}

.p-treetable-responsive-scroll > .p-treetable-wrapper > table,
.p-treetable-auto-layout > .p-treetable-wrapper > table {
    table-layout: auto;
}

.p-treetable-hoverable-rows .p-treetable-tbody > tr {
    cursor: pointer;
}

.p-treetable-resizable>.p-treetable-wrapper {
    overflow-x: auto;
}

.p-treetable-resizable .p-treetable-thead>tr>th,
.p-treetable-resizable .p-treetable-tfoot>tr>td,
.p-treetable-resizable .p-treetable-tbody>tr>td {
    overflow: hidden;
}

.p-treetable-resizable .p-resizable-column:not(.p-frozen-column) {
    background-clip: padding-box;
    position: relative;
}

.p-treetable-resizable-fit .p-resizable-column:last-child .p-column-resizer {
    display: none;
}

.p-treetable .p-column-resizer {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    width: 0.5rem;
    height: 100%;
    padding: 0px;
    cursor: col-resize;
    border: 1px solid transparent;
}

.p-treetable .p-column-resizer-helper {
    width: 1px;
    position: absolute;
    z-index: 10;
    display: none;
    background: `).concat(e("treetable.resizer.color"),`;
}

.p-treetable .p-treetable-loading-overlay {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
}

/* Scrollable */
.p-treetable-scrollable .p-treetable-wrapper {
    position: relative;
    overflow: auto;
}

.p-treetable-scrollable .p-treetable-table {
    display: block;
}



.p-treetable-scrollable .p-treetable-thead,
.p-treetable-scrollable .p-treetable-tbody,
.p-treetable-scrollable .p-treetable-tfoot {
    display: block;
}

.p-treetable-scrollable .p-treetable-thead>tr,
.p-treetable-scrollable .p-treetable-tbody>tr,
.p-treetable-scrollable .p-treetable-tfoot>tr {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
}

.p-treetable-scrollable .p-treetable-thead>tr>th,
.p-treetable-scrollable .p-treetable-tbody>tr>td,
.p-treetable-scrollable .p-treetable-tfoot>tr>td {
    display: flex;
    flex: 1 1 0;
    align-items: center;
}

.p-treetable-scrollable .p-treetable-thead {
    position: sticky;
    top: 0;
    z-index: 1;
}

.p-treetable-scrollable .p-treetable-tfoot {
    position: sticky;
    bottom: 0;
    z-index: 1;
}

.p-treetable-scrollable .p-frozen-column {
    position: sticky;
    background: inherit;
}

.p-treetable-scrollable th.p-frozen-column {
    z-index: 1;
}

.p-treetable-scrollable-both .p-treetable-thead>tr>th,
.p-treetable-scrollable-both .p-treetable-tbody>tr>td,
.p-treetable-scrollable-both .p-treetable-tfoot>tr>td,
.p-treetable-scrollable-horizontal .p-treetable-thead>tr>th .p-treetable-scrollable-horizontal .p-treetable-tbody>tr>td,
.p-treetable-scrollable-horizontal .p-treetable-tfoot>tr>td {
    flex: 0 0 auto;
}

.p-treetable-flex-scrollable {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.p-treetable-flex-scrollable .p-treetable-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
}

.p-treetable .p-treetable-scrollable-header {
    background: `).concat(e("treetable.header.background"),`;
}

.p-treetable .p-treetable-scrollable-footer {
    background: `).concat(e("treetable.footer.background"),`;
}

.p-treetable .p-paginator-top {
    border-width: 0 0 1px 0;
    border-radius: 0;
}

.p-treetable .p-paginator-bottom {
    border-width: 0 0 1px 0;
    border-radius: 0;
}

.p-treetable-header {
    background: `).concat(e("treetable.header.background"),`;
    color: `).concat(e("treetable.header.color"),`;
    border: 1px solid `).concat(e("treetable.header.border.color"),`;
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
    font-weight: 600;
}

.p-treetable-footer {
    background: `).concat(e("treetable.footer.background"),`;
    color: `).concat(e("treetable.footer.color"),`;
    border: 1px solid `).concat(e("treetable.footer.border.color"),`;
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
    font-weight: 600;
}

.p-treetable-thead > tr > th {
    text-align: left;
    padding: 0.75rem 1rem;
    background: `).concat(e("treetable.header.cell.background"),`;
    border: 1px solid `).concat(e("treetable.header.cell.border.color"),`;
    border-width: 0 0 1px 0;
    color: `).concat(e("treetable.header.cell.color"),`);
    font-weight: 600;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
}

.p-treetable-tbody > tr {
    outline-color: transparent;
    background: `).concat(e("treetable.row.background"),`;
    color: `).concat(e("treetable.row.color"),`;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
}

.p-treetable-tbody > tr > td {
    text-align: left;
    border: 1px solid `).concat(e("treetable.body.cell.border.color"),`;
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
}

.p-treetable-hoverable-rows .p-treetable-tbody > tr:not(.p-highlight):hover {
    background: `).concat(e("treetable.row.hover.background"),`;
    color: `).concat(e("treetable.row.hover.color"),`;
}

.p-treetable-tbody > tr.p-highlight {
    background: `).concat(e("highlight.background"),`;
    color: `).concat(e("highlight.color"),`;
}

.p-treetable-tbody > tr:has(+ .p-highlight) > td {
    border-bottom-color: `).concat(e("treetable.body.cell.selected.border.color"),`);
}

.p-treetable-tbody > tr.p-highlight > td {
    border-bottom-color: `).concat(e("treetable.body.cell.selected.border.color"),`);
}

.p-treetable-tbody > tr:focus-visible {
    outline: 1px solid `).concat(e("focus.ring.color"),`;
    outline-offset: -1px;
}

.p-treetable-toggler {
    cursor: pointer;
    user-select: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    color: `).concat(e("treetable.toggle.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", box-shadow ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    outline-color: transparent;
    margin-right: 0.5rem;
}

.p-treetable-toggler + .p-checkbox {
    vertical-align: middle;
    margin-right: 0.5rem;
}

.p-treetable-toggler + .p-checkbox + span {
    vertical-align: middle;
}

.p-treetable-toggler + .p-checkbox.p-indeterminate .p-checkbox-icon {
    color: `).concat(e("treetable.indeterminate.color"),`;
}

.p-treetable-toggler:enabled:hover {
    background: `).concat(e("treetable.toggle.hover.background"),`;
    color: `).concat(e("treetable.toggle.hover.color"),`;
}

.p-treetable-hoverable-rows .p-treetable-tbody > tr:not(.p-highlight):hover .p-treetable-toggler {
    color: `).concat(e("treetable.toggle.hover.color"),`;
    background: transparent;
}

.p-treetable-tbody > tr.p-highlight .p-treetable-toggler {
    color: inherit;
}

.p-treetable-tbody > tr.p-highlight .p-treetable-toggler:hover {
    background: `).concat(e("treetable.toggle.highlight.hover.background"),`;
    color: inherit;
}

.p-treetable-tfoot > tr > td {
    text-align: left;
    padding: 0.75rem 1rem;
    border: 1px solid `).concat(e("treetable.footer.cell.border.color"),`;
    border-width: 0 0 1px 0;
    font-weight: 600;
    color: `).concat(e("treetable.footer.cell.color"),`;
    background: `).concat(e("treetable.footer.cell.background"),`;
}

.p-treetable .p-treetable-loading-icon {
    font-size: 2rem;
    width: 2rem;
    height: 2rem;
}

.p-treetable-gridlines .p-treetable-header {
    border-width: 1px 1px 0 1px;
}

.p-treetable-gridlines .p-treetable-footer {
    border-width: 0 1px 1px 1px;
}

.p-treetable-gridlines .p-treetable-top {
    border-width: 0 1px 0 1px;
}

.p-treetable-gridlines .p-treetable-bottom {
    border-width: 0 1px 1px 1px;
}

.p-treetable-gridlines .p-treetable-thead > tr > th {
    border-width: 1px;
}

.p-treetable-gridlines .p-treetable-tbody > tr > td {
    border-width: 1px;
}

.p-treetable-gridlines .p-treetable-tfoot > tr > td {
    border-width: 1px;
}

.p-treetable-sm .p-treetable-header {
    padding: 0.65625rem 0.875rem;
}

.p-treetable-sm .p-treetable-thead > tr > th {
    padding: 0.375rem 0.5rem;
}

.p-treetable-sm .p-treetable-tbody > tr > td {
    padding: 0.375rem 0.5rem;
}

.p-treetable-sm .p-treetable-tfoot > tr > td {
    padding: 0.375rem 0.5rem;
}

.p-treetable-sm .p-treetable-footer {
    padding: 0.375rem 0.5rem;
}

.p-treetable-lg .p-treetable-header {
    padding: 0.9375rem 1.25rem;
}

.p-treetable-lg .p-treetable-thead > tr > th {
    padding: 0.9375rem 1.25rem;
}

.p-treetable-lg .p-treetable-tbody > tr > td {
    padding: 0.9375rem 1.25rem;
}

.p-treetable-lg .p-treetable-tfoot > tr > td {
    padding: 0.9375rem 1.25rem;
}

.p-treetable-lg .p-treetable-footer {
    padding: 0.9375rem 1.25rem;
}
`)}},kg={global:ym,components:{accordion:Kh,autocomplete:Hh,avatar:qh,badge:Wh,blockui:Gh,breadcrumb:Jh,button:Zh,calendar:Yh,card:Xh,carousel:Qh,cascadeselect:em,checkbox:nm,chip:tm,chips:om,colorpicker:rm,confirmdialog:im,confirmpopup:am,contextmenu:sm,dataview:lm,datatable:cm,dialog:um,divider:dm,dropdown:fm,dock:pm,editor:hm,fieldset:mm,fileupload:gm,floatlabel:bm,galleria:vm,iconfield:km,image:wm,inlinemessage:xm,inplace:Cm,inputgroup:_m,inputnumber:Sm,inputotp:Im,inputswitch:$m,inputtext:Pm,knob:Em,listbox:Tm,megamenu:Om,menu:Am,menubar:Bm,message:Lm,metergroup:jm,multiselect:Rm,orderlist:Fm,organizationchart:Mm,overlaypanel:zm,paginator:Dm,password:Um,panel:Nm,panelmenu:Vm,picklist:Km,progressbar:Hm,progressspinner:qm,radiobutton:Wm,rating:Gm,scrollpanel:Jm,scrolltop:Zm,selectbutton:Ym,skeleton:Qm,sidebar:Xm,slider:eg,speeddial:ng,splitter:og,splitbutton:tg,steps:ig,stepper:rg,tabmenu:ag,tabview:sg,textarea:ug,tieredmenu:dg,tag:cg,terminal:lg,timeline:pg,togglebutton:hg,tree:bg,treeselect:vg,treetable:yg,toast:fg,toolbar:mg},directives:{tooltip:gg}},wg={colorScheme:{light:{header:{background:"{surface.0}",color:"{surface.500}",hoverColor:"{surface.700}",activeColor:"{surface.700}"},content:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"}},dark:{header:{background:"{surface.900}",color:"{surface.400}",hoverColor:"{surface.0}",activeColor:"{surface.0}"},content:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"}}}},xg={inputMultiple:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",boxShadow:"{form.field.box.shadow}"},colorScheme:{light:{chip:{background:"{surface.100}",focusBackground:"{surface.200}",color:"{surface.800}",focusColor:"{surface.900}"},overlay:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},item:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{surface.700}",focusColor:"{surface.800}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}"},itemGroup:{background:"{surface.0}",color:"{surface.500}"},dropdown:{width:"2.5rem",background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{chip:{background:"{surface.700}",focusBackground:"{surface.600}",color:"{surface.0}",focusColor:"{surface.0}"},overlay:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},item:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{surface.0}",focusColor:"{surface.0}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}"},itemGroup:{background:"{surface.900}",color:"{surface.400}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}}},Cg={colorScheme:{light:{root:{background:"{surface.200}"},grouped:{borderColor:"{surface.0}"}},dark:{root:{background:"{surface.700}"},grouped:{borderColor:"{surface.900}"}}}},_g={colorScheme:{light:{primary:{background:"{primary.color}",color:"{primary.inverseColor}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.inverseColor}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}},Sg={},Ig={colorScheme:{root:{background:"{surface.0}"},light:{item:{color:"{surface.500}",hoverColor:"{surface.700}",iconColor:"{surface.400}"},separator:{color:"{surface.400}"}},dark:{root:{background:"{surface.900}"},item:{color:"{surface.400}",hoverColor:"{surface.0}",iconColor:"{surface.500}"},separator:{color:"{surface.500}"}}}},$g={colorScheme:{light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hoverColor}",activeBackground:"{primary.activeColor}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hoverColor}",activeBorderColor:"{primary.activeColor}",color:"{primary.inverseColor}",hoverColor:"{primary.inverseColor}",activeColor:"{primary.inverseColor}"},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},info:{background:"{sky.500}",hoverBackground:"{sky.600}",activeBackground:"{sky.700}",borderColor:"{sky.500}",hoverBorderColor:"{sky.600}",activeBorderColor:"{sky.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff"},success:{background:"{green.500}",hoverBackground:"{green.600}",activeBackground:"{green.700}",borderColor:"{green.500}",hoverBorderColor:"{green.600}",activeBorderColor:"{green.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff"},warn:{background:"{orange.500}",hoverBackground:"{orange.600}",activeBackground:"{orange.700}",borderColor:"{orange.500}",hoverBorderColor:"{orange.600}",activeBorderColor:"{orange.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff"},help:{background:"{purple.500}",hoverBackground:"{purple.600}",activeBackground:"{purple.700}",borderColor:"{purple.500}",hoverBorderColor:"{purple.600}",activeBorderColor:"{purple.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff"},danger:{background:"{red.500}",hoverBackground:"{red.600}",activeBackground:"{red.700}",borderColor:"{red.500}",hoverBorderColor:"{red.600}",activeBorderColor:"{red.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff"},contrast:{background:"{surface.950}",hoverBackground:"{surface.900}",activeBackground:"{surface.800}",borderColor:"{surface.950}",hoverBorderColor:"{surface.900}",activeBorderColor:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}"}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.200}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.200}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.200}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.200}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.200}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.200}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.700}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.700}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.600}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.700}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hoverColor}",activeBackground:"{primary.activeColor}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hoverColor}",activeBorderColor:"{primary.activeColor}",color:"{primary.inverseColor}",hoverColor:"{primary.inverseColor}",activeColor:"{primary.inverseColor}"},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}"},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}"},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}"},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}"},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}"},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}"}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.900}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.900}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.900}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.900}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {help.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {help.400}, transparent 84%)",borderColor:"{purple.900}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {danger.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {danger.400}, transparent 84%)",borderColor:"{red.900}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}}},Pg={colorScheme:{light:{root:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},header:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},navigator:{hoverBackground:"{surface.100}",color:"{surface.500}",hoverColor:"{surface.600}"},monthPicker:{hoverBackground:"{surface.100}",color:"{surface.700}",hoverColor:"{surface.800}"},yearPicker:{hoverBackground:"{surface.100}",color:"{surface.700}",hoverColor:"{surface.800}"},group:{borderColor:"{surface.200}"},date:{hoverBackground:"{surface.100}",selectedBackground:"{highlight.background}",color:"{surface.700}",hoverColor:"{surface.800}",selectedColor:"{highlight.color}"},today:{background:"{surface.200}",color:"{surface.900}"},month:{hoverBackground:"{surface.100}",selectedBackground:"{highlight.background}",color:"{surface.700}",hoverColor:"{surface.800}",selectedColor:"{highlight.color}"},year:{hoverBackground:"{surface.100}",selectedBackground:"{highlight.background}",color:"{surface.700}",hoverColor:"{surface.800}",selectedColor:"{highlight.color}"},buttonbar:{borderColor:"{surface.200}"},timepicker:{borderColor:"{surface.200}"},timepickerSpin:{hoverBackground:"{surface.100}",color:"{surface.500}",hoverColor:"{surface.600}"},dropdown:{width:"2.5rem",background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{root:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},header:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},navigator:{hoverBackground:"{surface.800}",color:"{surface.400}",hoverColor:"{surface.300}"},monthPicker:{hoverBackground:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}"},yearPicker:{hoverBackground:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}"},group:{borderColor:"{surface.700}"},date:{hoverBackground:"{surface.800}",selectedBackground:"{highlight.background}",color:"{surface.0}",hoverColor:"{surface.0}",selectedColor:"{highlight.color}"},today:{background:"{surface.700}",color:"{surface.0}"},month:{hoverBackground:"{surface.800}",selectedBackground:"{highlight.background}",color:"{surface.0}",hoverColor:"{surface.0}",selectedColor:"{highlight.color}"},year:{hoverBackground:"{surface.800}",selectedBackground:"{highlight.background}",color:"{surface.0}",hoverColor:"{surface.0}",selectedColor:"{highlight.color}"},buttonbar:{borderColor:"{surface.700}"},timepicker:{borderColor:"{surface.700}"},timepickerSpin:{hoverBackground:"{surface.800}",color:"{surface.400}",hoverColor:"{surface.300}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}}},Eg={colorScheme:{light:{root:{background:"{surface.0}",color:"{surface.700}"},subtitle:{color:"{surface.500}"}},dark:{root:{background:"{surface.900}",color:"{surface.0}"},subtitle:{color:"{surface.400}"}}}},Tg={colorScheme:{light:{navigator:{color:"{surface.500}",hoverColor:"{surface.600}",hoverBackground:"{surface.100}"},indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{navigator:{color:"{surface.400}",hoverColor:"{surface.300}",hoverBackground:"{surface.800}"},indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}}},Og={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",boxShadow:"{form.field.box.shadow}"},colorScheme:{light:{toggle:{color:"{surface.400}"},overlay:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},item:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{surface.700}",focusColor:"{surface.800}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}}},dark:{toggle:{color:"{surface.400}"},overlay:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},item:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{surface.0}",focusColor:"{surface.0}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}}}}},Ag={root:{borderRadius:"{rounded.sm}",width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBordercolor:"{form.field.hover.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",invalidBorderColor:"{form.field.invalid.border.color}",boxShadow:"{form.field.box.shadow}"},icon:{size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.inverse.color}",checkedHoverColor:"{primary.inverse.color}",disabledColor:"{form.field.disabled.color}"}},Bg={colorScheme:{light:{root:{background:"{surface.100}",color:"{surface.800}"}},dark:{root:{background:"{surface.700}",color:"{surface.0}"}}}},Lg={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",boxShadow:"{form.field.box.shadow}"},colorScheme:{light:{chip:{background:"{surface.100}",focusBackground:"{surface.200}",color:"{surface.800}",focusColor:"{surface.900}"}},dark:{chip:{background:"{surface.700}",focusBackground:"{surface.600}",color:"{surface.0}",focusColor:"{surface.0}"}}}},jg={colorScheme:{light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}}},Rg={},Fg={colorScheme:{light:{root:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"}},dark:{root:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"}}}},Mg={colorScheme:{light:{root:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},item:{focusBackground:"{surface.100}",color:"{surface.700}",colorFocus:"{surface.800}",icon:{color:"{surface.400}",colorFocus:"{surface.500}"}},separator:{borderColor:"{surface.200}"}},dark:{root:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},item:{focusBackground:"{surface.800}",color:"{surface.0}",colorFocus:"{surface.0}",icon:{color:"{surface.500}",colorFocus:"{surface.400}"}},separator:{borderColor:"{surface.700}"}}}},zg={colorScheme:{light:{header:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},headerCell:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.700}",hoverColor:"{surface.800}"},row:{background:"{surface.0}",stripedBackground:"{surface.50}",hoverBackground:"{surface.100}",color:"{surface.700}",hoverColor:"{surface.800}"},bodyCell:{borderColor:"{surface.200}",selectedBorderColor:"{primary.100}"},footerCell:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},footer:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},dropPointColor:"{primary.color}",resizerColor:"{primary.color}",sortIcon:{color:"{surface.500}",hoverColor:"{surface.600}"},rowAction:{hoverBackground:"{surface.100}",highlightHoverBackground:"{surface.0}",color:"{surface.500}",hoverColor:"{surface.500}"},filter:{menuButton:{hoverBackground:"{surface.100}",openBackground:"{surface.100}",activeBackground:"{highlight.background}",color:"{surface.500}",openColor:"{surface.500}",hoverColor:"{surface.600}",activeColor:"{highlight.color}"},clearButton:{hoverBackground:"{surface.100}",color:"{surface.500}",hoverColor:"{surface.600}"},overlay:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},constraint:{borderColor:"{surface.200}"},matchmodeItem:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",color:"{surface.700}",focusColor:"{surface.800}",selectedColor:"{highlight.color}",separator:{borderColor:"{surface.200}"}}}},dark:{header:{background:"{surface.900}",borderColor:"{surface.800}",color:"{surface.0}"},headerCell:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}"},row:{background:"{surface.900}",stripedBackground:"{surface.950}",hoverBackground:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}"},bodyCell:{borderColor:"{surface.800}",selectedBorderColor:"{primary.900}"},footerCell:{background:"{surface.900}",borderColor:"{surface.800}",color:"{surface.0}"},footer:{background:"{surface.900}",borderColor:"{surface.800}",color:"{surface.0}"},dropPointColor:"{primary.color}",resizerColor:"{primary.color}",sortIcon:{color:"{surface.400}",hoverColor:"{surface.300}"},rowAction:{hoverBackground:"{surface.800}",highlightHoverBackground:"{surface.900}",color:"{surface.400}",hoverColor:"{surface.300}"},filter:{menuButton:{hoverBackground:"{surface.800}",openBackground:"{surface.800}",activeBackground:"{highlight.background}",color:"{surface.400}",openColor:"{surface.300}",hoverColor:"{surface.300}",activeColor:"{highlight.color}"},clearButton:{hoverBackground:"{surface.800}",color:"{surface.400}",hoverColor:"{surface.300}"},overlay:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},constraint:{borderColor:"{surface.700}"},matchmodeItem:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",color:"{surface.0}",focusColor:"{surface.0}",selectedColor:"{highlight.color}",separator:{borderColor:"{surface.700}"}}}}}},Dg={colorScheme:{light:{header:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},content:{background:"{surface.0}",color:"{surface.700}"},footer:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"}},dark:{header:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},content:{background:"{surface.900}",color:"{surface.0}"},footer:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"}}}},Ng={colorScheme:{light:{root:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},headerIcon:{color:"{surface.500}",hoverColor:"{surface.600}",hoverBackground:"{surface.100}"}},dark:{root:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},headerIcon:{color:"{surface.400}",hoverColor:"{surface.300}",hoverBackground:"{surface.800}"}}}},Vg={colorScheme:{light:{root:{borderColor:"{surface.200}"},content:{background:"{surface.0}",color:"{surface.700}"}},dark:{root:{borderColor:"{surface.700}"},content:{background:"{surface.900}",color:"{surface.0}"}}}},Ug={},Kg={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",boxShadow:"{form.field.box.shadow}"},colorScheme:{light:{toggle:{color:"{surface.400}"},overlay:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},filterIcon:{color:"{surface.400}"},itemGroup:{background:"{surface.0}",color:"{surface.500}"},item:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{surface.700}",focusColor:"{surface.800}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}"},checkmark:{color:"{surface.400}"}},dark:{toggle:{color:"{surface.400}"},overlay:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},filterIcon:{color:"{surface.400}"},itemGroup:{background:"{surface.900}",color:"{surface.400}"},item:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{surface.0}",focusColor:"{surface.0}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}"},checkmark:{color:"{surface.400}"}}}},Hg={colorScheme:{light:{toolbar:{background:"{surface.0}",borderColor:"{surface.200}"},toolbarItem:{color:"{surface.500}",hoverColor:"{surface.700}",activeColor:"{primary.color}"},overlay:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},overlayItem:{hoverBackground:"{surface.100}",color:"{surface.700}",hoverColor:"{surface.800}"},content:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"}},dark:{toolbar:{background:"{surface.900}",borderColor:"{surface.700}"},toolbarItem:{color:"{surface.400}",hoverColor:"{surface.0}",activeColor:"{primary.color}"},overlay:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},overlayItem:{hoverBackground:"{surface.800}",color:"{surface.400}",hoverColor:"{surface.0}"},content:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"}}}},qg={colorScheme:{light:{root:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},legend:{color:"{surface.700}",hoverBackground:"{surface.100}",hoverColor:"{surface.800}"},toggleIcon:{color:"{surface.500}",hoverColor:"{surface.600}"}},dark:{root:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},legend:{color:"{surface.0}",hoverBackground:"{surface.800}",hoverColor:"{surface.0}"},toggleIcon:{color:"{surface.400}",hoverColor:"{surface.300}"}}}},Wg={colorScheme:{light:{header:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},content:{background:"{surface.0}",highlightBackground:"{highlight.background}",borderColor:"{surface.200}",highlightBorderColor:"{highlight.color}",color:"{surface.700}"},file:{borderColor:"{surface.200}"}},dark:{header:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},content:{background:"{surface.900}",highlightBackground:"{highlight.background}",borderColor:"{surface.700}",highlightBorderColor:"{highlight.color}",color:"{surface.0}"},file:{borderColor:"{surface.200}"}}}},Gg={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}"}},Jg={colorScheme:{light:{navigator:{hoverBackground:"rgba(255, 255, 255, 0.1)",color:"{surface.100}"},thumbnailNavigator:{hoverBackground:"{surface.200}",color:"{surface.600}",hoverColor:"{surface.700}"},thumbnailContainer:{background:"{surface.50}"},caption:{background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}"},indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"},insetIndicators:{background:"rgba(0, 0, 0, 0.5)"},insetIndicator:{background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.4)"},mask:{background:"rgba(0,0,0,0.9)"},close:{hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}"}},dark:{navigator:{hoverBackground:"rgba(255, 255, 255, 0.1)",color:"{surface.400}"},thumbnailNavigator:{hoverBackground:"{surface.800}",color:"{surface.400}",hoverColor:"{surface.300}"},thumbnailContainer:{background:"{surface.950}"},caption:{background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}"},indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"},insetIndicators:{background:"rgba(0, 0, 0, 0.5)"},insetIndicator:{background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.4)"},mask:{background:"rgba(0,0,0,0.9)"},close:{hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}"}}}},Zg={colorScheme:{light:{root:{color:"{surface.400}"}},dark:{root:{color:"{surface.400}"}}}},Yg={colorScheme:{light:{previewIndicator:{background:"{maskBackground}",color:"{surface.200}"},mask:{background:"rgba(0,0,0,0.9)"},action:{hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}"}},dark:{previewIndicator:{background:"{maskBackground}",color:"{surface.200}"},mask:{background:"rgba(0,0,0,0.9)"},action:{hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}"}}}},Xg={colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}}}},Qg={colorScheme:{light:{display:{hoverBackground:"{surface.100}",hoverColor:"{surface.800}"}},dark:{display:{hoverBackground:"{surface.800}",hoverColor:"{surface.0}"}}}},eb={addon:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.placeholder.color}"}},nb={button:{width:"2.5rem"},colorScheme:{light:{button:{background:"transparent",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.500}",activeColor:"{surface.600}"}},dark:{button:{background:"transparent",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",activeColor:"{surface.200}"}}}},tb={},ob={handle:{borderRadius:"50%"},colorScheme:{light:{root:{background:"{surface.300}",invalidBackground:"{red.400}",hoverBackground:"{surface.400}",checkedBackground:"{primary.500}",checkedHoverBackground:"{primary.600}",borderRadius:"30px"},handle:{background:"{surface.0}",hoverBackground:"{surface.0}",checkedBackground:"{surface.0}",checkedHoverBackground:"{surface.0}",invalidBackground:"{surface.0}"}},dark:{root:{background:"{surface.700}",invalidBackground:"{red.300}",hoverBackground:"{surface.600}",checkedBackground:"{primary.400}",checkedHoverBackground:"{primary.300}",borderRadius:"30px"},handle:{background:"{surface.400}",hoverBackground:"{surface.300}",checkedBackground:"{surface.900}",checkedHoverBackground:"{surface.900}",invalidBackground:"{surface.900}"}}}},rb={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",boxShadow:"{form.field.box.shadow}"}},ib={colorScheme:{light:{value:{background:"{primary.color}"},range:{background:"{surface.200}"},text:{color:"{surface.500}"}},dark:{value:{background:"{primary.color}"},range:{background:"{surface.700}"},text:{color:"{surface.400}"}}}},ab={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",boxShadow:"{form.field.box.shadow}"},colorScheme:{light:{filterIcon:{color:"{surface.400}"},itemGroup:{background:"{surface.0}",color:"{surface.500}"},item:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{surface.700}",focusColor:"{surface.800}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}"}},dark:{filterIcon:{color:"{surface.400}"},itemGroup:{background:"{surface.900}",color:"{surface.400}"},item:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{surface.0}",focusColor:"{surface.0}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}"}}}},sb={colorScheme:{light:{root:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},item:{focusBackground:"{surface.100}",color:"{surface.700}",focusColor:"{surface.800}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},submenuHeader:{color:"{surface.400}"},separator:{borderColor:"{surface.200}"},mobileToggle:{color:"{surface.500}",hoverColor:"{surface.600}",hoverBackground:"{surface.100}"}},dark:{root:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},item:{focusBackground:"{surface.800}",color:"{surface.0}",focusColor:"{surface.0}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},submenuHeader:{color:"{surface.500}"},separator:{borderColor:"{surface.700}"},toggleIcon:{color:"{surface.400}",hoverColor:"{surface.300}",hoverBackground:"{surface.800}"}}}},cb={colorScheme:{light:{root:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},item:{focusBackground:"{surface.100}",color:"{surface.700}",focusColor:"{surface.800}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},submenuHeader:{color:"{surface.400}"},separator:{borderColor:"{surface.200}"}},dark:{root:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},item:{focusBackground:"{surface.800}",color:"{surface.0}",focusColor:"{surface.0}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},submenuHeader:{color:"{surface.500}"},separator:{borderColor:"{surface.700}"}}}},lb={colorScheme:{light:{root:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},item:{focusBackground:"{surface.100}",color:"{surface.700}",focusColor:"{surface.800}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},separator:{borderColor:"{surface.200}"},mobileToggle:{color:"{surface.500}",hoverColor:"{surface.600}",hoverBackground:"{surface.100}"}},dark:{root:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},item:{focusBackground:"{surface.800}",color:"{surface.0}",focusColor:"{surface.0}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},separator:{borderColor:"{surface.700}"},mobileToggle:{color:"{surface.400}",hoverColor:"{surface.300}",hoverBackground:"{surface.800}"}}}},ub={colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeHoverBackground:"{blue.100}"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeHoverBackground:"{green.100}"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeHoverBackground:"{yellow.100}"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeHoverBackground:"{red.100}"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeHoverBackground:"{surface.200}"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeHoverBackground:"{surface.800}"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeHoverBackground:"rgba(255, 255, 255, 0.05)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeHoverBackground:"rgba(255, 255, 255, 0.05)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeHoverBackground:"rgba(255, 255, 255, 0.05)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeHoverBackground:"rgba(255, 255, 255, 0.05)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeHoverBackground:"{surface.700}"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeHoverBackground:"{surface.100}"}}}},db={colorScheme:{light:{meters:{background:"{surface.200}"}},dark:{meters:{background:"{surface.700}"}}}},pb={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",boxShadow:"{form.field.box.shadow}"},colorScheme:{light:{toggle:{color:"{surface.400}"},overlay:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},filterIcon:{color:"{surface.400}"},itemGroup:{background:"{surface.0}",color:"{surface.500}"},item:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{surface.700}",focusColor:"{surface.800}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}"},chip:{background:"{surface.100}",color:"{surface.800}"}},dark:{toggle:{color:"{surface.400}"},overlay:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},filterIcon:{color:"{surface.400}"},itemGroup:{background:"{surface.900}",color:"{surface.400}"},item:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{surface.0}",focusColor:"{surface.0}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}"},chip:{background:"{surface.700}",color:"{surface.0}"}}}},fb={},hb={colorScheme:{light:{node:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.700}",hoverColor:"{surface.800}"},toggleIcon:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.500}"},connector:{color:"{surface.200}"}},dark:{node:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{surface.0}",hoverColor:"{surface.0}"},toggleIcon:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.400}"},connector:{color:"{surface.700}"}}}},mb={colorScheme:{light:{root:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},closeIcon:{color:"{surface.500}",hoverColor:"{surface.600}",hoverBackground:"{surface.100}"}},dark:{root:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},closeIcon:{color:"{surface.400}",hoverColor:"{surface.300}",hoverBackground:"{surface.800}"}}}},gb={colorScheme:{light:{root:{background:"{surface.0}",color:"{surface.700}"},navigator:{hoverBackground:"{surface.100}",color:"{surface.500}",hoverColor:"{surface.600}"},currentPageReport:{color:"{surface.500}"}},dark:{root:{background:"{surface.900}",color:"{surface.0}"},navigator:{hoverBackground:"{surface.800}",color:"{surface.400}",hoverColor:"{surface.300}"},currentPageReport:{color:"{surface.400}"}}}},bb={colorScheme:{light:{root:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},headerIcon:{color:"{surface.500}",hoverColor:"{surface.600}",hoverBackground:"{surface.100}"}},dark:{root:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},headerIcon:{color:"{surface.400}",hoverColor:"{surface.300}",hoverBackground:"{surface.800}"}}}},vb={colorScheme:{light:{panel:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},item:{focusBackground:"{surface.100}",color:"{surface.700}",focusColor:"{surface.800}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},item:{focusBackground:"{surface.800}",color:"{surface.0}",focusColor:"{surface.0}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}}}}},yb={colorScheme:{light:{meter:{borderColor:"{surface.200}"},icon:{color:"{surface.500}"},strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"},overlay:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"}},dark:{meter:{borderColor:"{surface.700}"},icon:{color:"{surface.400}"},strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"},overlay:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"}}}},kb={},wb={colorScheme:{light:{root:{background:"{surface.200}"},value:{background:"{primary.color}"},label:{color:"{primary.inverse.color}"}},dark:{root:{background:"{surface.700}"},value:{background:"{primary.color}"},label:{color:"{primary.inverse.color}"}}}},xb={colorScheme:{light:{root:{"color-1":"{red.500}","color-2":"{blue.500}","color-3":"{green.500}","color-4":"{yellow.500}"}},dark:{root:{"color-1":"{red.400}","color-2":"{blue.400}","color-3":"{green.400}","color-4":"{yellow.400}"}}}},Cb={root:{width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBordercolor:"{form.field.hover.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",invalidBorderColor:"{form.field.invalid.border.color}",boxShadow:"{form.field.box.shadow}"},icon:{size:"0.75rem",checkedColor:"{primary.inverse.color}",checkedHoverColor:"{primary.inverse.color}",disabledColor:"{form.field.disabled.color}"}},_b={colorScheme:{light:{icon:{color:"{surface.500}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{icon:{color:"{surface.400}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}}},Sb={colorScheme:{light:{bar:{background:"{surface.100}"}},dark:{bar:{background:"{surface.800}"}}}},Ib={colorScheme:{light:{root:{background:"{surface.800}",hoverBackground:"{surface.700}",color:"{surface.100}",hoverColor:"{surface.0}"}},dark:{root:{background:"{surface.800}",hoverBackground:"{surface.700}",color:"{surface.300}",hoverColor:"{surface.200}"}}}},$b={colorScheme:{light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}}},Pb={colorScheme:{light:{root:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},headerIcon:{color:"{surface.500}",hoverColor:"{surface.600}",hoverBackground:"{surface.100}"}},dark:{root:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},headerIcon:{color:"{surface.400}",hoverColor:"{surface.300}",hoverBackground:"{surface.800}"}}}},Eb={colorScheme:{light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}}},Tb={colorScheme:{light:{track:{background:"{surface.200}"},handle:{background:"{surface.200}",hoverBackground:"{surface.200}",contentBackground:"{surface.0}"},range:{background:"{primary.color}"}},dark:{track:{background:"{surface.700}"},handle:{background:"{surface.700}",hoverBackground:"{surface.700}",contentBackground:"{surface.950}"},range:{background:"{primary.color}"}}}},Ob={colorScheme:{light:{item:{background:"{surface.100}",hoverBackground:"{surface.200}",color:"{surface.600}",hoverColor:"{surface.700}"}},dark:{item:{background:"{surface.800}",hoverBackground:"{surface.700}",color:"{surface.300}",hoverColor:"{surface.200}"}}}},Ab={},Bb={colorScheme:{light:{root:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},gutter:{background:"{surface.200}"}},dark:{root:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},gutter:{background:"{surface.700}"}}}},Lb={colorScheme:{light:{connector:{background:"{surface.200}",activeBackground:"{primary.color}"},title:{color:"{surface.700}",activeColor:"{primary.color}"},marker:{background:"{surface.0}",activeBackground:"{surface.0}",borderColor:"{surface.200}",color:"{surface.500}",activeColor:"{primary.color}"},content:{background:"{surface.0}",color:"{surface.700}"}},dark:{connector:{background:"{surface.700}",activeBackground:"{primary.color}"},title:{color:"{surface.0}",activeColor:"{primary.color}"},marker:{background:"{surface.900}",activeBackground:"{surface.900}",borderColor:"{surface.700}",color:"{surface.400}",activeColor:"{primary.color}"},content:{background:"{surface.900}",color:"{surface.0}"}}}},jb={colorScheme:{light:{connector:{borderColor:"{surface.200}"},item:{color:"{surface.700}",activeColor:"{primary.color}"},marker:{background:"{surface.0}",activeBackground:"{surface.0}",borderColor:"{surface.200}",color:"{surface.500}",activeColor:"{primary.color}"}},dark:{connector:{borderColor:"{surface.700}"},item:{color:"{surface.0}",activeColor:"{primary.color}"},marker:{background:"{surface.900}",activeBackground:"{surface.900}",borderColor:"{surface.700}",color:"{surface.400}",activeColor:"{primary.color}"}}}},Rb={colorScheme:{light:{nav:{background:"{surface.0}",borderColor:"{surface.200}"},header:{borderColor:"{surface.200}",activeBorderColor:"{primary.color}",color:"{surface.500}",hoverColor:"{surface.700}"}},dark:{nav:{background:"{surface.900}",borderColor:"{surface.700}"},header:{borderColor:"{surface.700}",activeBorderColor:"{primary.color}",color:"{surface.400}",hoverColor:"{surface.0}"}}}},Fb={colorScheme:{light:{nav:{background:"{surface.0}",borderColor:"{surface.200}"},header:{borderColor:"{surface.200}",activeBorderColor:"{primary.color}",color:"{surface.500}",hoverColor:"{surface.700}",activeColor:"{primary.color}"},navigatorIcon:{background:"{surface.0}",color:"{surface.500}",hoverColor:"{surface.700}",boxShadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"},content:{background:"{surface.0}",color:"{surface.700}"}},dark:{nav:{background:"{surface.900}",borderColor:"{surface.700}"},header:{borderColor:"{surface.700}",activeBorderColor:"{primary.color}",color:"{surface.400}",hoverColor:"{surface.0}",activeColor:"{primary.color}"},navigatorIcon:{background:"{surface.900}",color:"{surface.400}",hoverColor:"{surface.0}",boxShadow:"0px 0px 10px 50px color-mix(in srgb, {surface.900}, transparent 50%)"},content:{background:"{surface.900}",color:"{surface.0}"}}}},Mb={colorScheme:{light:{primary:{background:"{primary.100}",color:"{primary.700}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.100}",color:"{green.700}"},info:{background:"{sky.100}",color:"{sky.700}"},warn:{background:"{orange.100}",color:"{orange.700}"},danger:{background:"{red.100}",color:"{red.700}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"color-mix(in srgb, {primary.500}, transparent 84%)",color:"{primary.300}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",color:"{green.300}"},info:{background:"color-mix(in srgb, {sky.500}, transparent 84%)",color:"{sky.300}"},warn:{background:"color-mix(in srgb, {orange.500}, transparent 84%)",color:"{orange.300}"},danger:{background:"color-mix(in srgb, {red.500}, transparent 84%)",color:"{red.300}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}},zb={colorScheme:{light:{background:"{surface.0}",borderColor:"{surface.300}",color:"{surface.700}"},dark:{background:"{surface.950}",borderColor:"{surface.700}",color:"{surface.0}"}}},Db={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",boxShadow:"{form.field.box.shadow}"}},Nb={colorScheme:{light:{root:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},item:{focusBackground:"{surface.100}",color:"{surface.700}",focusColor:"{surface.800}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},separator:{borderColor:"{surface.200}"}},dark:{root:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},item:{focusBackground:"{surface.800}",color:"{surface.0}",focusColor:"{surface.0}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},separator:{borderColor:"{surface.700}"}}}},Vb={colorScheme:{light:{marker:{background:"{surface.0}",borderColor:"{surface.200}",contentColor:"{primary.color}"},connector:{color:"{surface.200}"}},dark:{marker:{background:"{surface.900}",borderColor:"{surface.700}",contentColor:"{primary.color}"},connector:{color:"{surface.700}"}}}},Ub={colorScheme:{light:{blur:"1.5px",info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",detailColor:"{surface.700}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeHoverBackground:"{blue.100}"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",detailColor:"{surface.700}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeHoverBackground:"{green.100}"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",detailColor:"{surface.700}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeHoverBackground:"{yellow.100}"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",detailColor:"{surface.700}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeHoverBackground:"{red.100}"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",detailColor:"{surface.700}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeHoverBackground:"{surface.200}"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",detailColor:"{surface.0}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeHoverBackground:"{surface.800}"}},dark:{blur:"10px",info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",detailColor:"{surface.0}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeHoverBackground:"rgba(255, 255, 255, 0.05)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",detailColor:"{surface.0}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeHoverBackground:"rgba(255, 255, 255, 0.05)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",detailColor:"{surface.0}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeHoverBackground:"rgba(255, 255, 255, 0.05)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",detailColor:"{surface.0}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeHoverBackground:"rgba(255, 255, 255, 0.05)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeHoverBackground:"{surface.700}"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeHoverBackground:"{surface.100}"}}}},Kb={colorScheme:{light:{root:{background:"{surface.100}",checkedBackground:"{surface.0}",disabledBackground:"{form.field.disabled.background}",borderColor:"{surface.100}",disabledBorderColor:"{form.field.disabled.background}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}",disabledColor:"{form.field.disabled.color}"},icon:{color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}",disabledColor:"{form.field.disabled.color}"}},dark:{root:{background:"{surface.950}",checkedBackground:"{surface.800}",disabledBackground:"{form.field.disabled.background}",borderColor:"{surface.950}",disabledBorderColor:"{form.field.disabled.background}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}",disabledColor:"{form.field.disabled.color}"},icon:{color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}",disabledColor:"{form.field.disabled.color}"}}}},Hb={colorScheme:{light:{root:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"}},dark:{root:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"}}}},qb={colorScheme:{light:{root:{background:"{surface.700}",color:"{surface.0}"}},dark:{root:{background:"{surface.700}",color:"{surface.0}"}}}},Wb={colorScheme:{light:{root:{background:"{surface.0}",color:"{surface.700}"},node:{hoverBackground:"{surface.100}",color:"{surface.700}",hoverColor:"{surface.800}"},nodeIcon:{color:"{surface.500}",hoverColor:"{surface.600}"},toggle:{hoverBackground:"{surface.100}",highlightHoverBackground:"{surface.0}",color:"{surface.500}",hoverColor:"{surface.600}"},indeterminate:{color:"{surface.500}"}},dark:{root:{background:"{surface.900}",color:"{surface.0}"},node:{hoverBackground:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}"},nodeIcon:{color:"{surface.400}",hoverColor:"{surface.300}"},toggle:{hoverBackground:"{surface.800}",highlightHoverBackground:"{surface.900}",color:"{surface.400}",hoverColor:"{surface.300}"},indeterminate:{color:"{surface.400}"}}}},Gb={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",boxShadow:"{form.field.box.shadow}"},colorScheme:{light:{toggle:{color:"{surface.400}"},overlay:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},chip:{background:"{surface.100}",color:"{surface.800}"}},dark:{toggle:{color:"{surface.400}"},overlay:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},chip:{background:"{surface.700}",color:"{surface.0}"}}}},Jb={colorScheme:{light:{header:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},headerCell:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.700}",hoverColor:"{surface.800}"},row:{background:"{surface.0}",stripedBackground:"{surface.50}",hoverBackground:"{surface.100}",color:"{surface.700}",hoverColor:"{surface.800}"},bodyCell:{borderColor:"{surface.200}",selectedBorderColor:"{primary.100}"},footerCell:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},footer:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},resizerColor:"{primary.color}",sortIcon:{color:"{surface.500}",hoverColor:"{surface.600}"},toggle:{hoverBackground:"{surface.100}",highlightHoverBackground:"{surface.0}",color:"{surface.500}",hoverColor:"{surface.600}"},indeterminate:{color:"{surface.500}"}},dark:{header:{background:"{surface.900}",borderColor:"{surface.800}",color:"{surface.0}"},headerCell:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}"},row:{background:"{surface.900}",stripedBackground:"{surface.950}",hoverBackground:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}"},bodyCell:{borderColor:"{surface.800}",selectedBorderColor:"{primary.900}"},footerCell:{background:"{surface.900}",borderColor:"{surface.800}",color:"{surface.0}"},footer:{background:"{surface.900}",borderColor:"{surface.800}",color:"{surface.0}"},resizerColor:"{primary.color}",sortIcon:{color:"{surface.400}",hoverColor:"{surface.300}"},toggle:{hoverBackground:"{surface.800}",highlightHoverBackground:"{surface.900}",color:"{surface.400}",hoverColor:"{surface.300}"},indeterminate:{color:"{surface.400}"}}}},Zb={primitive:{rounded:{sm:"4px",base:"6px",lg:"8px",xl:"12px"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},semantic:{transitionDuration:"0.2s",focusRing:{width:"1px",style:"solid",color:"{primary.500}",offset:"2px"},anchorGutter:"2px",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},colorScheme:{light:{surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",inverseColor:"#ffffff",hoverColor:"{primary.600}",activeColor:"{primary.700}"},highlight:{background:"{primary.50}",focusBackground:"{primary.100}",color:"{primary.700}",focusColor:"{primary.800}"},maskBackground:"rgba(0,0,0,0.4)",formField:{background:"{surface.0}",disabledBackground:"{surface.200}",filledBackground:"{surface.50}",filledFocusBackground:"{surface.0}",borderColor:"{surface.300}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.400}",color:"{surface.700}",disabledColor:"{surface.500}",placeholderColor:"{surface.500}",floatLabelColor:"{surface.500}",floatLabelFocusColor:"{surface.500}",floatLabelInvalidColor:"{red.400}",boxShadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"}},dark:{surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",inverseColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},maskBackground:"rgba(0,0,0,0.4)",formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledFocusBackground:"{surface.950}",borderColor:"{surface.700}",hoverBorderColor:"{surface.600}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{surface.400}",floatLabelInvalidColor:"{red.300}",boxShadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"}}}},components:{accordion:wg,autocomplete:xg,avatar:Cg,badge:_g,blockui:Sg,breadcrumb:Ig,button:$g,calendar:Pg,card:Eg,carousel:Tg,cascadeselect:Og,checkbox:Ag,chip:Bg,chips:Lg,colorpicker:jg,confirmdialog:Rg,confirmpopup:Fg,contextmenu:Mg,dataview:Dg,datatable:zg,dialog:Ng,divider:Vg,dock:Ug,dropdown:Kg,editor:Hg,fieldset:qg,fileupload:Wg,floatlabel:Gg,galleria:Jg,iconfield:Zg,image:Yg,inlinemessage:Xg,inplace:Qg,inputgroup:eb,inputnumber:nb,inputotp:tb,inputswitch:ob,inputtext:rb,knob:ib,listbox:ab,megamenu:sb,menu:cb,menubar:lb,message:ub,metergroup:db,multiselect:pb,orderlist:fb,organizationchart:hb,overlaypanel:mb,paginator:gb,password:yb,panel:bb,panelmenu:vb,picklist:kb,progressbar:wb,progressspinner:xb,radiobutton:Cb,rating:_b,scrollpanel:Sb,scrolltop:Ib,selectbutton:$b,skeleton:Eb,sidebar:Pb,slider:Tb,speeddial:Ob,splitter:Bb,splitbutton:Ab,stepper:Lb,steps:jb,tabmenu:Rb,tabview:Fb,textarea:Db,tieredmenu:Nb,tag:Mb,terminal:zb,timeline:Vb,togglebutton:Kb,tree:Wb,treeselect:Gb,treetable:Jb,toast:Ub,toolbar:Hb},directives:{tooltip:qb}};function Eo(t){"@babel/helpers - typeof";return Eo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Eo(t)}function Us(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,o)}return e}function fo(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Us(Object(e),!0).forEach(function(o){Yb(t,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Us(Object(e)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))})}return t}function Yb(t,n,e){return n=Xb(n),n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Xb(t){var n=Qb(t,"string");return Eo(n)=="symbol"?n:String(n)}function Qb(t,n){if(Eo(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var o=e.call(t,n||"default");if(Eo(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}var e0=fo(fo({},Dh),{},{theme:{base:kg,preset:Zb,options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}}}),n0={install:function(n,e){var o=fo(fo(fo({},e0),e),{},{unstyled:!1});Vh(n,o)}};function To(t){"@babel/helpers - typeof";return To=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},To(t)}function Ks(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,o)}return e}function Hs(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Ks(Object(e),!0).forEach(function(o){t0(t,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Ks(Object(e)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))})}return t}function t0(t,n,e){return n=o0(n),n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o0(t){var n=r0(t,"string");return To(n)=="symbol"?n:String(n)}function r0(t,n){if(To(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var o=e.call(t,n||"default");if(To(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function i0(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;Kl()?Nr(t):n?t():jr(t)}var a0=0;function qs(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=Ee(!1),o=Ee(t),r=Ee(null),i=K.isClient()?window.document:void 0,a=n.document,s=a===void 0?i:a,c=n.immediate,l=c===void 0?!0:c,u=n.manual,d=u===void 0?!1:u,p=n.name,f=p===void 0?"style_".concat(++a0):p,g=n.id,v=g===void 0?void 0:g,b=n.media,y=b===void 0?void 0:b,w=n.nonce,$=w===void 0?void 0:w,O=n.first,W=O===void 0?!1:O,N=n.onLoad,Q=N===void 0?void 0:N,D=n.props,ee=D===void 0?{}:D,ne=function(){},be=function(Fe){var en=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(s){var ye=Hs(Hs({},ee),en),fe=ye.name||f,ce=ye.id||v,hn=ye.nonce||$;r.value=s.querySelector('style[data-primevue-style-id="'.concat(fe,'"]'))||s.getElementById(ce)||s.createElement("style"),r.value.isConnected||(o.value=Fe||t,K.setAttributes(r.value,{type:"text/css",id:ce,media:y,nonce:hn}),W?s.head.prepend(r.value):s.head.appendChild(r.value),K.setAttribute(r.value,"data-primevue-style-id",f),K.setAttributes(r.value,ye),r.value.onload=Q),!e.value&&(ne=Mt(o,function(wn){r.value.textContent=wn},{immediate:!0}),e.value=!0)}},V=function(){!s||!e.value||(ne(),K.isExist(r.value)&&s.head.removeChild(r.value),e.value=!1)};return l&&!d&&i0(be),{id:v,name:f,el:r,css:o,unload:V,load:be,isLoaded:pa(e)}}function Oo(t){"@babel/helpers - typeof";return Oo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Oo(t)}function s0(t,n){return d0(t)||u0(t,n)||l0(t,n)||c0()}function c0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l0(t,n){if(t){if(typeof t=="string")return Ws(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Ws(t,n)}}function Ws(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function u0(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var o,r,i,a,s=[],c=!0,l=!1;try{if(i=(e=e.call(t)).next,n===0){if(Object(e)!==e)return;c=!1}else for(;!(c=(o=i.call(e)).done)&&(s.push(o.value),s.length!==n);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&e.return!=null&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw r}}return s}}function d0(t){if(Array.isArray(t))return t}function Gs(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,o)}return e}function sr(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Gs(Object(e),!0).forEach(function(o){p0(t,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Gs(Object(e)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))})}return t}function p0(t,n,e){return n=f0(n),n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function f0(t){var n=h0(t,"string");return Oo(n)=="symbol"?n:String(n)}function h0(t,n){if(Oo(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var o=e.call(t,n||"default");if(Oo(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}var m0=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: var(--p-scrollbar-width);
}
`,g0={},b0={},we={name:"base",css:m0,classes:g0,inlineStyles:b0,loadStyle:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.css?qs(L.minifyCSS(this.css),sr({name:this.name},n)):{}},loadTheme:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return n?qs(L.minifyCSS(n),sr({name:this.name},e)):{}},getCommonThemeCSS:function(n){return Ie.getCommonCSS(this.name,n)},getComponentThemeCSS:function(n){return Ie.getComponentCSS(this.name,n)},getDirectiveThemeCSS:function(n){return Ie.getDirectiveCSS(this.name,n)},getPresetThemeCSS:function(n,e,o){return Ie.getPresetCSS(this.name,n,e,o)},getLayerOrderThemeCSS:function(){return Ie.getLayerOrderCSS(this.name)},getStyleSheet:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var o=L.minifyCSS("".concat(this.css).concat(n)),r=Object.entries(e).reduce(function(i,a){var s=s0(a,2),c=s[0],l=s[1];return i.push("".concat(c,'="').concat(l,'"'))&&i},[]).join(" ");return'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(r,">").concat(o,"</style>")}return""},getCommonThemeStyleSheet:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Ie.getCommonStyleSheet(this.name,n,e)},getThemeStyleSheet:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Ie.getStyleSheet(this.name,n,e)},extend:function(n){return sr(sr({},this),{},{css:void 0},n)}},v0={root:function(n){var e=n.props,o=n.instance;return["p-badge p-component",{"p-badge-no-gutter":L.isNotEmpty(e.value)&&String(e.value).length===1,"p-badge-dot":L.isEmpty(e.value)&&!o.$slots.default,"p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warning":e.severity==="warning","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]}},y0=we.extend({name:"badge",classes:v0}),Js=we.extend({name:"common"});function Ao(t){"@babel/helpers - typeof";return Ao=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ao(t)}function k0(t){return Ql(t)||w0(t)||Xl(t)||Yl()}function w0(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function cr(t,n){return Ql(t)||x0(t,n)||Xl(t,n)||Yl()}function Yl(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xl(t,n){if(t){if(typeof t=="string")return Zs(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Zs(t,n)}}function Zs(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function x0(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var o,r,i,a,s=[],c=!0,l=!1;try{if(i=(e=e.call(t)).next,n===0){if(Object(e)!==e)return;c=!1}else for(;!(c=(o=i.call(e)).done)&&(s.push(o.value),s.length!==n);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&e.return!=null&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw r}}return s}}function Ql(t){if(Array.isArray(t))return t}function Ys(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,o)}return e}function le(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Ys(Object(e),!0).forEach(function(o){wr(t,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Ys(Object(e)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))})}return t}function wr(t,n,e){return n=C0(n),n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function C0(t){var n=_0(t,"string");return Ao(n)=="symbol"?n:String(n)}function _0(t,n){if(Ao(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var o=e.call(t,n||"default");if(Ao(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}var Ve={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0},dt:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(n){n?this._loadThemeStyles():(Js.loadStyle(this.$styleOptions),this.$options.style&&this.$style.loadStyle(this.$styleOptions))}},dt:{immediate:!0,handler:function(n){n&&this._loadScopedThemeStyles(n)}}},scopedStyleEl:void 0,beforeCreate:function(){var n,e,o,r,i,a,s,c,l,u,d,p=(n=this.pt)===null||n===void 0?void 0:n._usept,f=p?(e=this.pt)===null||e===void 0||(e=e.originalValue)===null||e===void 0?void 0:e[this.$.type.name]:void 0,g=p?(o=this.pt)===null||o===void 0||(o=o.value)===null||o===void 0?void 0:o[this.$.type.name]:this.pt;(r=g||f)===null||r===void 0||(r=r.hooks)===null||r===void 0||(i=r.onBeforeCreate)===null||i===void 0||i.call(r);var v=(a=this.$config)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a._usept,b=v?(s=this.$primevue)===null||s===void 0||(s=s.config)===null||s===void 0||(s=s.pt)===null||s===void 0?void 0:s.originalValue:void 0,y=v?(c=this.$primevue)===null||c===void 0||(c=c.config)===null||c===void 0||(c=c.pt)===null||c===void 0?void 0:c.value:(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0?void 0:l.pt;(u=y||b)===null||u===void 0||(u=u[this.$.type.name])===null||u===void 0||(u=u.hooks)===null||u===void 0||(d=u.onBeforeCreate)===null||d===void 0||d.call(u)},created:function(){this._hook("onCreated")},beforeMount:function(){this._loadStyles(),this._hook("onBeforeMount")},mounted:function(){var n=K.findSingle(this.$el,'[data-pc-name="'.concat(L.toFlatCase(this.$.type.name),'"]'));n==null||n.setAttribute(this.$attrSelector,""),this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){var n;(n=this.scopedStyleEl)===null||n===void 0||(n=n.value)===null||n===void 0||n.remove(),this._hook("onUnmounted")},methods:{_hook:function(n){if(!this.$options.hostName){var e=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(n)),o=this._useDefaultPT(this._getOptionValue,"hooks.".concat(n));e==null||e(),o==null||o()}},_mergeProps:function(n){for(var e=arguments.length,o=new Array(e>1?e-1:0),r=1;r<e;r++)o[r-1]=arguments[r];return L.isFunction(n)?n.apply(void 0,o):S.apply(void 0,o)},_loadStyles:function(){we.loadStyle(this.$styleOptions),this._loadGlobalStyles(),this._loadThemeStyles(),Dt.on("theme:change",this._loadThemeStyles)},_loadGlobalStyles:function(){var n=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);L.isNotEmpty(n)&&we.loadStyle(n,le({name:"global"},this.$styleOptions))},_loadThemeStyles:function(){var n,e;if(!this.isUnstyled){if(!Ie.isStyleNameLoaded("common")){var o,r,i=((o=this.$style)===null||o===void 0||(r=o.getCommonThemeCSS)===null||r===void 0?void 0:r.call(o))||{},a=i.primitive,s=i.semantic,c=i.global;we.loadTheme(a,le({name:"primitive-variables"},this.$styleOptions)),we.loadTheme(s,le({name:"semantic-variables"},this.$styleOptions)),we.loadTheme(c,le({name:"global-style"},this.$styleOptions)),Ie.setLoadedStyleName("common")}if(!Ie.isStyleNameLoaded((n=this.$style)===null||n===void 0?void 0:n.name)&&(e=this.$style)!==null&&e!==void 0&&e.name){var l,u,d,p,f=((l=this.$style)===null||l===void 0||(u=l.getComponentThemeCSS)===null||u===void 0?void 0:u.call(l))||{},g=f.variables,v=f.style;(d=this.$style)===null||d===void 0||d.loadTheme(g,le({name:"".concat(this.$style.name,"-variables")},this.$styleOptions)),(p=this.$style)===null||p===void 0||p.loadTheme(v,le({name:"".concat(this.$style.name,"-style")},this.$styleOptions)),Ie.setLoadedStyleName(this.$style.name)}if(!Ie.isStyleNameLoaded("layer-order")){var b,y,w=(b=this.$style)===null||b===void 0||(y=b.getLayerOrderThemeCSS)===null||y===void 0?void 0:y.call(b);we.loadTheme(w,le({name:"layer-order",first:!0},this.$styleOptions)),Ie.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(n){var e,o,r,i=((e=this.$style)===null||e===void 0||(o=e.getPresetThemeCSS)===null||o===void 0?void 0:o.call(e,n,"[".concat(this.$attrSelector,"]")))||{},a=(r=this.$style)===null||r===void 0?void 0:r.loadTheme(i,le({name:"".concat(this.$attrSelector,"-").concat(this.$style.name)},this.$styleOptions));this.scopedStyleEl=a.el},_getHostInstance:function(n){return n?this.$options.hostName?n.$.type.name===this.$options.hostName?n:this._getHostInstance(n.$parentInstance):n.$parentInstance:void 0},_getPropValue:function(n){var e;return this[n]||((e=this._getHostInstance(this))===null||e===void 0?void 0:e[n])},_getOptionValue:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=L.toFlatCase(e).split("."),i=r.shift();return i?L.isObject(n)?this._getOptionValue(L.getItemValue(n[Object.keys(n).find(function(a){return L.toFlatCase(a)===i})||""],o),r.join("."),o):void 0:L.getItemValue(n,o)},_getPTValue:function(){var n,e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,a=/./g.test(o)&&!!r[o.split(".")[0]],s=this._getPropValue("ptOptions")||((n=this.$config)===null||n===void 0?void 0:n.ptOptions)||{},c=s.mergeSections,l=c===void 0?!0:c,u=s.mergeProps,d=u===void 0?!1:u,p=i?a?this._useGlobalPT(this._getPTClassValue,o,r):this._useDefaultPT(this._getPTClassValue,o,r):void 0,f=a?void 0:this._getPTSelf(e,this._getPTClassValue,o,le(le({},r),{},{global:p||{}})),g=this._getPTDatasets(o);return l||!l&&f?d?this._mergeProps(d,p,f,g):le(le(le({},p),f),g):le(le({},f),g)},_getPTSelf:function(){for(var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length,o=new Array(e>1?e-1:0),r=1;r<e;r++)o[r-1]=arguments[r];return S(this._usePT.apply(this,[this._getPT(n,this.$name)].concat(o)),this._usePT.apply(this,[this.$_attrsPT].concat(o)))},_getPTDatasets:function(){var n,e,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r="data-pc-",i=o==="root"&&L.isNotEmpty((n=this.pt)===null||n===void 0?void 0:n["data-pc-section"]);return o!=="transition"&&le(le({},o==="root"&&le(wr({},"".concat(r,"name"),L.toFlatCase(i?(e=this.pt)===null||e===void 0?void 0:e["data-pc-section"]:this.$.type.name)),i&&wr({},"".concat(r,"extend"),L.toFlatCase(this.$.type.name)))),{},wr({},"".concat(r,"section"),L.toFlatCase(o)))},_getPTClassValue:function(){var n=this._getOptionValue.apply(this,arguments);return L.isString(n)||L.isArray(n)?{class:n}:n},_getPT:function(n){var e=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,i=function(s){var c,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=r?r(s):s,d=L.toFlatCase(o),p=L.toFlatCase(e.$name);return(c=l?d!==p?u==null?void 0:u[d]:void 0:u==null?void 0:u[d])!==null&&c!==void 0?c:u};return n!=null&&n.hasOwnProperty("_usept")?{_usept:n._usept,originalValue:i(n.originalValue),value:i(n.value)}:i(n,!0)},_usePT:function(n,e,o,r){var i=function(v){return e(v,o,r)};if(n!=null&&n.hasOwnProperty("_usept")){var a,s=n._usept||((a=this.$config)===null||a===void 0?void 0:a.ptOptions)||{},c=s.mergeSections,l=c===void 0?!0:c,u=s.mergeProps,d=u===void 0?!1:u,p=i(n.originalValue),f=i(n.value);return p===void 0&&f===void 0?void 0:L.isString(f)?f:L.isString(p)?p:l||!l&&f?d?this._mergeProps(d,p,f):le(le({},p),f):f}return i(n)},_useGlobalPT:function(n,e,o){return this._usePT(this.globalPT,n,e,o)},_useDefaultPT:function(n,e,o){return this._usePT(this.defaultPT,n,e,o)},ptm:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,n,le(le({},this.$params),e))},ptmi:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return S(this.$_attrsWithoutPT,this.ptm(n,e))},ptmo:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(n,e,le({instance:this},o),!1)},cx:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,n,le(le({},this.$params),e))},sx:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(e){var r=this._getOptionValue(this.$style.inlineStyles,n,le(le({},this.$params),o)),i=this._getOptionValue(Js.inlineStyles,n,le(le({},this.$params),o));return[i,r]}}},computed:{globalPT:function(){var n,e=this;return this._getPT((n=this.$config)===null||n===void 0?void 0:n.pt,void 0,function(o){return L.getItemValue(o,{instance:e})})},defaultPT:function(){var n,e=this;return this._getPT((n=this.$config)===null||n===void 0?void 0:n.pt,void 0,function(o){return e._getOptionValue(o,e.$name,le({},e.$params))||L.getItemValue(o,le({},e.$params))})},isUnstyled:function(){var n;return this.unstyled!==void 0?this.unstyled:(n=this.$config)===null||n===void 0?void 0:n.unstyled},$theme:function(){var n;return(n=this.$config)===null||n===void 0?void 0:n.theme},$style:function(){return le(le({classes:void 0,inlineStyles:void 0,loadStyle:function(){},loadCustomStyle:function(){},loadTheme:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$styleOptions:function(){var n;return{nonce:(n=this.$config)===null||n===void 0||(n=n.csp)===null||n===void 0?void 0:n.nonce}},$config:function(){var n;return(n=this.$primevue)===null||n===void 0?void 0:n.config},$name:function(){return this.$options.hostName||this.$.type.name},$params:function(){var n=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:n,props:n==null?void 0:n.$props,state:n==null?void 0:n.$data,attrs:n==null?void 0:n.$attrs}}},$_attrsPT:function(){return Object.entries(this.$attrs||{}).filter(function(n){var e=cr(n,1),o=e[0];return o==null?void 0:o.startsWith("pt:")}).reduce(function(n,e){var o=cr(e,2),r=o[0],i=o[1],a=r.split(":"),s=k0(a),c=s.slice(1);return c==null||c.reduce(function(l,u,d,p){return!l[u]&&(l[u]=d===p.length-1?i:{}),l[u]},n),n},{})},$_attrsWithoutPT:function(){return Object.entries(this.$attrs||{}).filter(function(n){var e=cr(n,1),o=e[0];return!(o!=null&&o.startsWith("pt:"))}).reduce(function(n,e){var o=cr(e,2),r=o[0],i=o[1];return n[r]=i,n},{})},$attrSelector:function(){return Qn("pc")}}},S0={name:"BaseBadge",extends:Ve,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:y0,provide:function(){return{$parentInstance:this}}},Pa={name:"Badge",extends:S0,inheritAttrs:!1};function I0(t,n,e,o,r,i){return C(),B("span",S({class:t.cx("root")},t.ptmi("root")),[de(t.$slots,"default",{},function(){return[wt(Ge(t.value),1)]})],16)}Pa.render=I0;var $0=`
.p-icon {
    display: inline-block;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,P0=we.extend({name:"baseicon",css:$0});function Bo(t){"@babel/helpers - typeof";return Bo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Bo(t)}function Xs(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,o)}return e}function Qs(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Xs(Object(e),!0).forEach(function(o){E0(t,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Xs(Object(e)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))})}return t}function E0(t,n,e){return n=T0(n),n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function T0(t){var n=O0(t,"string");return Bo(n)=="symbol"?n:String(n)}function O0(t,n){if(Bo(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var o=e.call(t,n||"default");if(Bo(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}var rn={name:"BaseIcon",extends:Ve,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:P0,methods:{pti:function(){var n=L.isEmpty(this.label);return Qs(Qs({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:n?void 0:"img","aria-label":n?void 0:this.label,"aria-hidden":n})}}},eu={name:"SpinnerIcon",extends:rn},A0=F("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1),B0=[A0];function L0(t,n,e,o,r,i){return C(),B("svg",S({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),B0,16)}eu.render=L0;function Lo(t){"@babel/helpers - typeof";return Lo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Lo(t)}function ec(t,n){return M0(t)||F0(t,n)||R0(t,n)||j0()}function j0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R0(t,n){if(t){if(typeof t=="string")return nc(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return nc(t,n)}}function nc(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function F0(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var o,r,i,a,s=[],c=!0,l=!1;try{if(i=(e=e.call(t)).next,n===0){if(Object(e)!==e)return;c=!1}else for(;!(c=(o=i.call(e)).done)&&(s.push(o.value),s.length!==n);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&e.return!=null&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw r}}return s}}function M0(t){if(Array.isArray(t))return t}function tc(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,o)}return e}function ge(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?tc(Object(e),!0).forEach(function(o){Di(t,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):tc(Object(e)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))})}return t}function Di(t,n,e){return n=z0(n),n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function z0(t){var n=D0(t,"string");return Lo(n)=="symbol"?n:String(n)}function D0(t,n){if(Lo(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var o=e.call(t,n||"default");if(Lo(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}var te={_getMeta:function(){return[L.isObject(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],L.getItemValue(L.isObject(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getConfig:function(n,e){var o,r,i;return(o=(n==null||(r=n.instance)===null||r===void 0?void 0:r.$primevue)||(e==null||(i=e.ctx)===null||i===void 0||(i=i.appContext)===null||i===void 0||(i=i.config)===null||i===void 0||(i=i.globalProperties)===null||i===void 0?void 0:i.$primevue))===null||o===void 0?void 0:o.config},_getOptionValue:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=L.toFlatCase(e).split("."),i=r.shift();return i?L.isObject(n)?te._getOptionValue(L.getItemValue(n[Object.keys(n).find(function(a){return L.toFlatCase(a)===i})||""],o),r.join("."),o):void 0:L.getItemValue(n,o)},_getPTValue:function(){var n,e,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,c=function(){var w=te._getOptionValue.apply(te,arguments);return L.isString(w)||L.isArray(w)?{class:w}:w},l=((n=o.binding)===null||n===void 0||(n=n.value)===null||n===void 0?void 0:n.ptOptions)||((e=o.$config)===null||e===void 0?void 0:e.ptOptions)||{},u=l.mergeSections,d=u===void 0?!0:u,p=l.mergeProps,f=p===void 0?!1:p,g=s?te._useDefaultPT(o,o.defaultPT(),c,i,a):void 0,v=te._usePT(o,te._getPT(r,o.$name),c,i,ge(ge({},a),{},{global:g||{}})),b=te._getPTDatasets(o,i);return d||!d&&v?f?te._mergeProps(o,f,g,v,b):ge(ge(ge({},g),v),b):ge(ge({},v),b)},_getPTDatasets:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o="data-pc-";return ge(ge({},e==="root"&&Di({},"".concat(o,"name"),L.toFlatCase(n.$name))),{},Di({},"".concat(o,"section"),L.toFlatCase(e)))},_getPT:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2?arguments[2]:void 0,r=function(a){var s,c=o?o(a):a,l=L.toFlatCase(e);return(s=c==null?void 0:c[l])!==null&&s!==void 0?s:c};return n!=null&&n.hasOwnProperty("_usept")?{_usept:n._usept,originalValue:r(n.originalValue),value:r(n.value)}:r(n)},_usePT:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,a=function(b){return o(b,r,i)};if(e!=null&&e.hasOwnProperty("_usept")){var s,c=e._usept||((s=n.$config)===null||s===void 0?void 0:s.ptOptions)||{},l=c.mergeSections,u=l===void 0?!0:l,d=c.mergeProps,p=d===void 0?!1:d,f=a(e.originalValue),g=a(e.value);return f===void 0&&g===void 0?void 0:L.isString(g)?g:L.isString(f)?f:u||!u&&g?p?te._mergeProps(n,p,f,g):ge(ge({},f),g):g}return a(e)},_useDefaultPT:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;return te._usePT(n,e,o,r,i)},_loadStyles:function(n,e,o){var r,i,a,s,c,l,u=te._getConfig(e,o);we.loadStyle({nonce:u==null||(r=u.csp)===null||r===void 0?void 0:r.nonce}),!((i=n.$instance)!==null&&i!==void 0&&i.isUnstyled())&&((a=n.$instance)===null||a===void 0||(a=a.$style)===null||a===void 0||a.loadStyle({nonce:u==null||(s=u.csp)===null||s===void 0?void 0:s.nonce})),te._loadThemeStyles(n.$instance,{nonce:u==null||(c=u.csp)===null||c===void 0?void 0:c.nonce}),Dt.on("theme:change",function(){var d;return te._loadThemeStyles(n.$instance,{nonce:u==null||(d=u.csp)===null||d===void 0?void 0:d.nonce})}),te._loadScopedThemeStyles(n.$instance,{nonce:u==null||(l=u.csp)===null||l===void 0?void 0:l.nonce})},_loadThemeStyles:function(){var n,e,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;if(!(o!=null&&o.isUnstyled())){if(!Ie.isStyleNameLoaded("common")){var i,a,s=((i=o.$style)===null||i===void 0||(a=i.getCommonThemeCSS)===null||a===void 0?void 0:a.call(i))||{},c=s.primitive,l=s.semantic,u=s.global;we.loadTheme(c,ge({name:"primitive-variables"},r)),we.loadTheme(l,ge({name:"semantic-variables"},r)),we.loadTheme(u,ge({name:"global-style"},r)),Ie.setLoadedStyleName("common")}if(!Ie.isStyleNameLoaded((n=o.$style)===null||n===void 0?void 0:n.name)&&(e=o.$style)!==null&&e!==void 0&&e.name){var d,p,f,g,v=((d=o.$style)===null||d===void 0||(p=d.getDirectiveThemeCSS)===null||p===void 0?void 0:p.call(d))||{},b=v.variables,y=v.style;(f=o.$style)===null||f===void 0||f.loadTheme(b,ge({name:"".concat(o.$style.name,"-variables")},r)),(g=o.$style)===null||g===void 0||g.loadTheme(y,ge({name:"".concat(o.$style.name,"-style")},r)),Ie.setLoadedStyleName(o.$style.name)}if(!Ie.isStyleNameLoaded("layer-order")){var w,$,O=(w=o.$style)===null||w===void 0||($=w.getLayerOrderThemeCSS)===null||$===void 0?void 0:$.call(w);we.loadTheme(O,ge({name:"layer-order",first:!0},r)),Ie.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,o=n.preset();if(o&&n.$attrSelector){var r,i,a,s=((r=n.$style)===null||r===void 0||(i=r.getPresetThemeCSS)===null||i===void 0?void 0:i.call(r,o,"[".concat(n.$attrSelector,"]")))||{},c=(a=n.$style)===null||a===void 0?void 0:a.loadTheme(s,ge({name:"".concat(n.$attrSelector,"-").concat(n.$style.name)},e));n.scopedStyleEl=c.el}},_hook:function(n,e,o,r,i,a){var s,c,l="on".concat(L.toCapitalCase(e)),u=te._getConfig(r,i),d=o==null?void 0:o.$instance,p=te._usePT(d,te._getPT(r==null||(s=r.value)===null||s===void 0?void 0:s.pt,n),te._getOptionValue,"hooks.".concat(l)),f=te._useDefaultPT(d,u==null||(c=u.pt)===null||c===void 0||(c=c.directives)===null||c===void 0?void 0:c[n],te._getOptionValue,"hooks.".concat(l)),g={el:o,binding:r,vnode:i,prevVnode:a};p==null||p(d,g),f==null||f(d,g)},_mergeProps:function(){for(var n=arguments.length>1?arguments[1]:void 0,e=arguments.length,o=new Array(e>2?e-2:0),r=2;r<e;r++)o[r-2]=arguments[r];return L.isFunction(n)?n.apply(void 0,o):S.apply(void 0,o)},_extend:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=function(i,a,s,c,l){var u,d;a._$instances=a._$instances||{};var p=te._getConfig(s,c),f=a._$instances[n]||{},g=L.isEmpty(f)?ge(ge({},e),e==null?void 0:e.methods):{};a._$instances[n]=ge(ge({},f),{},{$name:n,$host:a,$binding:s,$modifiers:s==null?void 0:s.modifiers,$value:s==null?void 0:s.value,$el:f.$el||a||void 0,$style:ge({classes:void 0,inlineStyles:void 0,loadStyle:function(){},loadTheme:function(){}},e==null?void 0:e.style),$config:p,$attrSelector:a.$attrSelector,defaultPT:function(){return te._getPT(p==null?void 0:p.pt,void 0,function(b){var y;return b==null||(y=b.directives)===null||y===void 0?void 0:y[n]})},isUnstyled:function(){var b,y;return((b=a.$instance)===null||b===void 0||(b=b.$binding)===null||b===void 0||(b=b.value)===null||b===void 0?void 0:b.unstyled)!==void 0?(y=a.$instance)===null||y===void 0||(y=y.$binding)===null||y===void 0||(y=y.value)===null||y===void 0?void 0:y.unstyled:p==null?void 0:p.unstyled},theme:function(){var b;return(b=a.$instance)===null||b===void 0||(b=b.$config)===null||b===void 0?void 0:b.theme},preset:function(){var b;return(b=a.$instance)===null||b===void 0||(b=b.$binding)===null||b===void 0||(b=b.value)===null||b===void 0?void 0:b.dt},ptm:function(){var b,y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return te._getPTValue(a.$instance,(b=a.$instance)===null||b===void 0||(b=b.$binding)===null||b===void 0||(b=b.value)===null||b===void 0?void 0:b.pt,y,ge({},w))},ptmo:function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return te._getPTValue(a.$instance,b,y,w,!1)},cx:function(){var b,y,w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",$=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(b=a.$instance)!==null&&b!==void 0&&b.isUnstyled()?void 0:te._getOptionValue((y=a.$instance)===null||y===void 0||(y=y.$style)===null||y===void 0?void 0:y.classes,w,ge({},$))},sx:function(){var b,y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,$=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return w?te._getOptionValue((b=a.$instance)===null||b===void 0||(b=b.$style)===null||b===void 0?void 0:b.inlineStyles,y,ge({},$)):void 0}},g),a.$instance=a._$instances[n],(u=(d=a.$instance)[i])===null||u===void 0||u.call(d,a,s,c,l),a["$".concat(n)]=a.$instance,te._hook(n,i,a,s,c,l)};return{created:function(i,a,s,c){o("created",i,a,s,c)},beforeMount:function(i,a,s,c){i.$attrSelector=Qn("pd"),te._loadStyles(i,a,s),o("beforeMount",i,a,s,c)},mounted:function(i,a,s,c){te._loadStyles(i,a,s),o("mounted",i,a,s,c)},beforeUpdate:function(i,a,s,c){o("beforeUpdate",i,a,s,c)},updated:function(i,a,s,c){te._loadStyles(i,a,s),o("updated",i,a,s,c)},beforeUnmount:function(i,a,s,c){o("beforeUnmount",i,a,s,c)},unmounted:function(i,a,s,c){var l;(l=i.$instance)===null||l===void 0||(l=l.scopedStyleEl)===null||l===void 0||(l=l.value)===null||l===void 0||l.remove(),o("unmounted",i,a,s,c)}}},extend:function(){var n=te._getMeta.apply(te,arguments),e=ec(n,2),o=e[0],r=e[1];return ge({extend:function(){var a=te._getMeta.apply(te,arguments),s=ec(a,2),c=s[0],l=s[1];return te.extend(c,ge(ge(ge({},r),r==null?void 0:r.methods),l))}},te._extend(o,r))}},N0={root:"p-ink"},V0=we.extend({name:"ripple-directive",classes:N0}),U0=te.extend({style:V0});function jo(t){"@babel/helpers - typeof";return jo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},jo(t)}function K0(t){return G0(t)||W0(t)||q0(t)||H0()}function H0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q0(t,n){if(t){if(typeof t=="string")return Ni(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Ni(t,n)}}function W0(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function G0(t){if(Array.isArray(t))return Ni(t)}function Ni(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function oc(t,n,e){return n=J0(n),n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function J0(t){var n=Z0(t,"string");return jo(n)=="symbol"?n:String(n)}function Z0(t,n){if(jo(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var o=e.call(t,n||"default");if(jo(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}var Ho=U0.extend("ripple",{mounted:function(n){var e,o=n==null||(e=n.$instance)===null||e===void 0?void 0:e.$config;o&&o.ripple&&(this.create(n),this.bindEvents(n),n.setAttribute("data-pd-ripple",!0))},unmounted:function(n){this.remove(n)},timeout:void 0,methods:{bindEvents:function(n){n.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(n){n.removeEventListener("mousedown",this.onMouseDown.bind(this))},create:function(n){var e=K.createElement("span",oc(oc({role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this)},this.$attrSelector,""),"p-bind",this.ptm("root")));n.appendChild(e),this.$el=e},remove:function(n){var e=this.getInk(n);e&&(this.unbindEvents(n),e.removeEventListener("animationend",this.onAnimationEnd),e.remove())},onMouseDown:function(n){var e=this,o=n.currentTarget,r=this.getInk(o);if(!(!r||getComputedStyle(r,null).display==="none")){if(!this.isUnstyled()&&K.removeClass(r,"p-ink-active"),r.setAttribute("data-p-ink-active","false"),!K.getHeight(r)&&!K.getWidth(r)){var i=Math.max(K.getOuterWidth(o),K.getOuterHeight(o));r.style.height=i+"px",r.style.width=i+"px"}var a=K.getOffset(o),s=n.pageX-a.left+document.body.scrollTop-K.getWidth(r)/2,c=n.pageY-a.top+document.body.scrollLeft-K.getHeight(r)/2;r.style.top=c+"px",r.style.left=s+"px",!this.isUnstyled()&&K.addClass(r,"p-ink-active"),r.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){r&&(!e.isUnstyled()&&K.removeClass(r,"p-ink-active"),r.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(n){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&K.removeClass(n.currentTarget,"p-ink-active"),n.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(n){return n&&n.children?K0(n.children).find(function(e){return K.getAttribute(e,"data-pc-name")==="ripple"}):void 0}}});function Ro(t){"@babel/helpers - typeof";return Ro=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ro(t)}function Mn(t,n,e){return n=Y0(n),n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Y0(t){var n=X0(t,"string");return Ro(n)=="symbol"?n:String(n)}function X0(t,n){if(Ro(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var o=e.call(t,n||"default");if(Ro(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}var Q0={root:function(n){var e=n.instance,o=n.props;return["p-button p-component",Mn(Mn(Mn(Mn(Mn(Mn(Mn(Mn({"p-button-icon-only":e.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-disabled":e.$attrs.disabled||e.$attrs.disabled===""||o.loading,"p-button-loading":o.loading,"p-button-loading-label-only":o.loading&&!e.hasIcon&&o.label,"p-button-link":o.link},"p-button-".concat(o.severity),o.severity),"p-button-raised",o.raised),"p-button-rounded",o.rounded),"p-button-text",o.text),"p-button-outlined",o.outlined),"p-button-sm",o.size==="small"),"p-button-lg",o.size==="large"),"p-button-plain",o.plain)]},loadingIcon:"p-button-loading-icon pi-spin",icon:function(n){var e=n.props;return["p-button-icon",{"p-button-icon-left":e.iconPos==="left"&&e.label,"p-button-icon-right":e.iconPos==="right"&&e.label,"p-button-icon-top":e.iconPos==="top"&&e.label,"p-button-icon-bottom":e.iconPos==="bottom"&&e.label}]},label:"p-button-label"},ev=we.extend({name:"button",classes:Q0}),nv={name:"BaseButton",extends:Ve,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:String,default:null},badge:{type:String,default:null},badgeClass:{type:String,default:null},badgeSeverity:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},style:ev,provide:function(){return{$parentInstance:this}}},Hr={name:"Button",extends:nv,inheritAttrs:!1,methods:{getPTOptions:function(n){var e=n==="root"?this.ptmi:this.ptm;return e(n,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon}},components:{SpinnerIcon:eu,Badge:Pa},directives:{ripple:Ho}},tv=["aria-label","disabled","data-p-severity"];function ov(t,n,e,o,r,i){var a=Be("SpinnerIcon"),s=Be("Badge"),c=Mr("ripple");return on((C(),B("button",S({class:t.cx("root"),type:"button","aria-label":i.defaultAriaLabel,disabled:i.disabled},i.getPTOptions("root"),{"data-p-severity":t.severity}),[de(t.$slots,"default",{},function(){return[t.loading?de(t.$slots,"loadingicon",{key:0,class:ze([t.cx("loadingIcon"),t.cx("icon")])},function(){return[t.loadingIcon?(C(),B("span",S({key:0,class:[t.cx("loadingIcon"),t.cx("icon"),t.loadingIcon]},t.ptm("loadingIcon")),null,16)):(C(),X(a,S({key:1,class:[t.cx("loadingIcon"),t.cx("icon")],spin:""},t.ptm("loadingIcon")),null,16,["class"]))]}):de(t.$slots,"icon",{key:1,class:ze([t.cx("icon")])},function(){return[t.icon?(C(),B("span",S({key:0,class:[t.cx("icon"),t.icon,t.iconClass]},t.ptm("icon")),null,16)):re("",!0)]}),F("span",S({class:t.cx("label")},t.ptm("label")),Ge(t.label||" "),17),t.badge?(C(),X(s,S({key:2,value:t.badge,class:t.badgeClass,severity:t.badgeSeverity,unstyled:t.unstyled},t.ptm("badge")),null,16,["value","class","severity","unstyled"])):re("",!0)]})],16,tv)),[[c]])}Hr.render=ov;var nu={name:"EyeIcon",extends:rn},rv=F("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z",fill:"currentColor"},null,-1),iv=[rv];function av(t,n,e,o,r,i){return C(),B("svg",S({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),iv,16)}nu.render=av;var tu={name:"EyeSlashIcon",extends:rn},sv=F("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z",fill:"currentColor"},null,-1),cv=[sv];function lv(t,n,e,o,r,i){return C(),B("svg",S({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),cv,16)}tu.render=lv;var uv={root:function(n){var e=n.instance,o=n.props;return["p-inputtext p-component",{"p-filled":e.filled,"p-inputtext-sm":o.size==="small","p-inputtext-lg":o.size==="large","p-invalid":o.invalid,"p-variant-filled":o.variant?o.variant==="filled":e.$primevue.config.inputStyle==="filled"}]}},dv=we.extend({name:"inputtext",classes:uv}),pv={name:"BaseInputText",extends:Ve,props:{modelValue:null,size:{type:String,default:null},invalid:{type:Boolean,default:!1},variant:{type:String,default:null}},style:dv,provide:function(){return{$parentInstance:this}}},ou={name:"InputText",extends:pv,inheritAttrs:!1,emits:["update:modelValue"],methods:{getPTOptions:function(n){var e=n==="root"?this.ptmi:this.ptm;return e(n,{context:{filled:this.filled,disabled:this.$attrs.disabled||this.$attrs.disabled===""}})},onInput:function(n){this.$emit("update:modelValue",n.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0}}},fv=["value","aria-invalid"];function hv(t,n,e,o,r,i){return C(),B("input",S({type:"text",class:t.cx("root"),value:t.modelValue,"aria-invalid":t.invalid||void 0,onInput:n[0]||(n[0]=function(){return i.onInput&&i.onInput.apply(i,arguments)})},i.getPTOptions("root")),null,16,fv)}ou.render=hv;var ru=$h(),Ea={name:"Portal",props:{appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=K.isClient()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function mv(t,n,e,o,r,i){return i.inline?de(t.$slots,"default",{key:0}):r.mounted?(C(),X(Ap,{key:1,to:e.appendTo},[de(t.$slots,"default")],8,["to"])):re("",!0)}Ea.render=mv;var gv={root:function(n){var e=n.props;return{position:e.appendTo==="self"?"relative":void 0}}},bv={root:function(n){var e=n.instance,o=n.props;return["p-password p-component p-inputwrapper",{"p-inputwrapper-filled":e.filled,"p-inputwrapper-focus":e.focused,"p-password-icon-field":o.toggleMask}]},input:function(n){var e=n.props;return["p-password-input",{"p-disabled":e.disabled}]},hideIcon:"p-input-icon",showIcon:"p-input-icon",panel:function(n){var e=n.instance;return["p-password-panel p-component",{"p-ripple-disabled":e.$primevue.config.ripple===!1}]},meter:"p-password-meter",meterLabel:function(n){var e=n.instance;return"p-password-strength ".concat(e.meter?e.meter.strength:"")},info:"p-password-info"},vv=we.extend({name:"password",classes:bv,inlineStyles:gv}),yv={name:"BasePassword",extends:Ve,props:{modelValue:String,promptLabel:{type:String,default:null},mediumRegex:{type:String,default:"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"},strongRegex:{type:String,default:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"},weakLabel:{type:String,default:null},mediumLabel:{type:String,default:null},strongLabel:{type:String,default:null},feedback:{type:Boolean,default:!0},appendTo:{type:[String,Object],default:"body"},toggleMask:{type:Boolean,default:!1},hideIcon:{type:String,default:void 0},showIcon:{type:String,default:void 0},variant:{type:String,default:null},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},panelId:{type:String,default:null},panelClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelProps:{type:null,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:vv,provide:function(){return{$parentInstance:this}}},iu={name:"Password",extends:yv,inheritAttrs:!1,emits:["update:modelValue","change","focus","blur","invalid"],data:function(){return{id:this.$attrs.id,overlayVisible:!1,meter:null,infoText:null,focused:!1,unmasked:!1}},watch:{"$attrs.id":function(n){this.id=n||Qn()}},mediumCheckRegExp:null,strongCheckRegExp:null,resizeListener:null,scrollHandler:null,overlay:null,mounted:function(){this.id=this.id||Qn(),this.infoText=this.promptText,this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex)},beforeUnmount:function(){this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(An.clear(this.overlay),this.overlay=null)},methods:{onOverlayEnter:function(n){An.set("overlay",n,this.$primevue.config.zIndex.overlay),K.addStyles(n,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindScrollListener(),this.bindResizeListener()},onOverlayLeave:function(){this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null},onOverlayAfterLeave:function(n){An.clear(n)},alignOverlay:function(){this.appendTo==="self"?K.relativePosition(this.overlay,this.$refs.input.$el):(this.overlay.style.minWidth=K.getOuterWidth(this.$refs.input.$el)+"px",K.absolutePosition(this.overlay,this.$refs.input.$el))},testStrength:function(n){var e=0;return this.strongCheckRegExp.test(n)?e=3:this.mediumCheckRegExp.test(n)?e=2:n.length&&(e=1),e},onInput:function(n){this.$emit("update:modelValue",n.target.value),this.$emit("change",n)},onFocus:function(n){this.focused=!0,this.feedback&&(this.setPasswordMeter(this.modelValue),this.overlayVisible=!0),this.$emit("focus",n)},onBlur:function(n){this.focused=!1,this.feedback&&(this.overlayVisible=!1),this.$emit("blur",n)},onKeyUp:function(n){if(this.feedback){var e=n.target.value,o=this.checkPasswordStrength(e),r=o.meter,i=o.label;if(this.meter=r,this.infoText=i,n.code==="Escape"){this.overlayVisible&&(this.overlayVisible=!1);return}this.overlayVisible||(this.overlayVisible=!0)}},setPasswordMeter:function(){if(!this.modelValue){this.meter=null,this.infoText=this.promptText;return}var n=this.checkPasswordStrength(this.modelValue),e=n.meter,o=n.label;this.meter=e,this.infoText=o,this.overlayVisible||(this.overlayVisible=!0)},checkPasswordStrength:function(n){var e=null,o=null;switch(this.testStrength(n)){case 1:e=this.weakText,o={strength:"weak",width:"33.33%"};break;case 2:e=this.mediumText,o={strength:"medium",width:"66.66%"};break;case 3:e=this.strongText,o={strength:"strong",width:"100%"};break;default:e=this.promptText,o=null;break}return{label:e,meter:o}},onInvalid:function(n){this.$emit("invalid",n)},bindScrollListener:function(){var n=this;this.scrollHandler||(this.scrollHandler=new Zl(this.$refs.input.$el,function(){n.overlayVisible&&(n.overlayVisible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var n=this;this.resizeListener||(this.resizeListener=function(){n.overlayVisible&&!K.isTouchDevice()&&(n.overlayVisible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},overlayRef:function(n){this.overlay=n},onMaskToggle:function(){this.unmasked=!this.unmasked},onOverlayClick:function(n){ru.emit("overlay-click",{originalEvent:n,target:this.$el})}},computed:{inputType:function(){return this.unmasked?"text":"password"},filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},weakText:function(){return this.weakLabel||this.$primevue.config.locale.weak},mediumText:function(){return this.mediumLabel||this.$primevue.config.locale.medium},strongText:function(){return this.strongLabel||this.$primevue.config.locale.strong},promptText:function(){return this.promptLabel||this.$primevue.config.locale.passwordPrompt},panelUniqueId:function(){return this.id+"_panel"}},components:{PInputText:ou,Portal:Ea,EyeSlashIcon:tu,EyeIcon:nu}};function Fo(t){"@babel/helpers - typeof";return Fo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Fo(t)}function rc(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,o)}return e}function ic(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?rc(Object(e),!0).forEach(function(o){kv(t,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):rc(Object(e)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))})}return t}function kv(t,n,e){return n=wv(n),n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function wv(t){var n=xv(t,"string");return Fo(n)=="symbol"?n:String(n)}function xv(t,n){if(Fo(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var o=e.call(t,n||"default");if(Fo(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}var Cv=["id"];function _v(t,n,e,o,r,i){var a=Be("PInputText"),s=Be("Portal");return C(),B("div",S({class:t.cx("root"),style:t.sx("root")},t.ptmi("root")),[he(a,S({ref:"input",id:t.inputId,type:i.inputType,class:[t.cx("input"),t.inputClass],style:t.inputStyle,value:t.modelValue,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,"aria-controls":t.panelProps&&t.panelProps.id||t.panelId||i.panelUniqueId,"aria-expanded":r.overlayVisible,"aria-haspopup":!0,placeholder:t.placeholder,required:t.required,disabled:t.disabled,variant:t.variant,invalid:t.invalid,onInput:i.onInput,onFocus:i.onFocus,onBlur:i.onBlur,onKeyup:i.onKeyUp,onInvalid:i.onInvalid},t.inputProps,{pt:t.ptm("input"),unstyled:t.unstyled}),null,16,["id","type","class","style","value","aria-labelledby","aria-label","aria-controls","aria-expanded","placeholder","required","disabled","variant","invalid","onInput","onFocus","onBlur","onKeyup","onInvalid","pt","unstyled"]),t.toggleMask&&r.unmasked?de(t.$slots,"hideicon",{key:0,onClick:i.onMaskToggle,toggleCallback:i.onMaskToggle},function(){return[(C(),X(De(t.hideIcon?"i":"EyeSlashIcon"),S({class:[t.cx("hideIcon"),t.hideIcon],onClick:i.onMaskToggle},t.ptm("hideIcon")),null,16,["class","onClick"]))]}):re("",!0),t.toggleMask&&!r.unmasked?de(t.$slots,"showicon",{key:1,onClick:i.onMaskToggle,toggleCallback:i.onMaskToggle},function(){return[(C(),X(De(t.showIcon?"i":"EyeIcon"),S({class:[t.cx("showIcon"),t.showIcon],onClick:i.onMaskToggle},t.ptm("showIcon")),null,16,["class","onClick"]))]}):re("",!0),F("span",S({class:"p-hidden-accessible","aria-live":"polite"},t.ptm("hiddenAccesible"),{"data-p-hidden-accessible":!0}),Ge(r.infoText),17),he(s,{appendTo:t.appendTo},{default:Ye(function(){return[he(Gt,S({name:"p-connected-overlay",onEnter:i.onOverlayEnter,onLeave:i.onOverlayLeave,onAfterLeave:i.onOverlayAfterLeave},t.ptm("transition")),{default:Ye(function(){return[r.overlayVisible?(C(),B("div",S({key:0,ref:i.overlayRef,id:t.panelId||i.panelUniqueId,class:[t.cx("panel"),t.panelClass],style:t.panelStyle,onClick:n[0]||(n[0]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)})},ic(ic({},t.panelProps),t.ptm("panel"))),[de(t.$slots,"header"),de(t.$slots,"content",{},function(){return[F("div",S({class:t.cx("meter")},t.ptm("meter")),[F("div",S({class:t.cx("meterLabel"),style:{width:r.meter?r.meter.width:""}},t.ptm("meterLabel")),null,16)],16),F("div",S({class:t.cx("info")},t.ptm("info")),Ge(r.infoText),17)]}),de(t.$slots,"footer")],16,Cv)):re("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16)}iu.render=_v;var Sv={root:function(n){var e=n.instance,o=n.props;return["p-inputtextarea p-component",{"p-filled":e.filled,"p-inputtextarea-resizable ":o.autoResize,"p-invalid":o.invalid,"p-variant-filled":o.variant?o.variant==="filled":e.$primevue.config.inputStyle==="filled"}]}},Iv=we.extend({name:"textarea",classes:Sv}),$v={name:"BaseTextarea",extends:Ve,props:{modelValue:null,autoResize:Boolean,invalid:{type:Boolean,default:!1},variant:{type:String,default:null}},style:Iv,provide:function(){return{$parentInstance:this}}},au={name:"Textarea",extends:$v,inheritAttrs:!1,emits:["update:modelValue"],mounted:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},updated:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},methods:{resize:function(){this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden"},onInput:function(n){this.autoResize&&this.resize(),this.$emit("update:modelValue",n.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},ptmParams:function(){return{context:{disabled:this.$attrs.disabled||this.$attrs.disabled===""}}}}},Pv=["value","aria-invalid"];function Ev(t,n,e,o,r,i){return C(),B("textarea",S({class:t.cx("root"),value:t.modelValue,"aria-invalid":t.invalid||void 0,onInput:n[0]||(n[0]=function(){return i.onInput&&i.onInput.apply(i,arguments)})},t.ptmi("root",i.ptmParams)),null,16,Pv)}au.render=Ev;var Tv={root:function(n){var e=n.props;return["p-icon-field",{"p-icon-field-right":e.iconPosition==="right","p-icon-field-left":e.iconPosition==="left"}]}},Ov=we.extend({name:"iconfield",classes:Tv}),Av={name:"BaseIconField",extends:Ve,props:{iconPosition:{type:String,default:"right"}},style:Ov,provide:function(){return{$parentInstance:this}}},su={name:"IconField",extends:Av,inheritAttrs:!1};function Bv(t,n,e,o,r,i){return C(),B("div",S({class:t.cx("root")},t.ptmi("root")),[de(t.$slots,"default")],16)}su.render=Bv;var Lv={root:"p-input-icon"},jv=we.extend({name:"inputicon",classes:Lv}),Rv={name:"BaseInputIcon",extends:Ve,style:jv,props:{class:null},provide:function(){return{$parentInstance:this}}},cu={name:"InputIcon",extends:Rv,inheritAttrs:!1,computed:{containerClass:function(){return[this.cx("root"),this.class]}}};function Fv(t,n,e,o,r,i){return C(),B("span",S({class:i.containerClass},t.ptmi("root")),[de(t.$slots,"default")],16)}cu.render=Fv;var Mv={root:function(n){var e=n.props;return["p-avatar p-component",{"p-avatar-image":e.image!=null,"p-avatar-circle":e.shape==="circle","p-avatar-lg":e.size==="large","p-avatar-xl":e.size==="xlarge"}]},label:"p-avatar-text",icon:"p-avatar-icon"},zv=we.extend({name:"avatar",classes:Mv}),Dv={name:"BaseAvatar",extends:Ve,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:zv,provide:function(){return{$parentInstance:this}}},lu={name:"Avatar",extends:Dv,inheritAttrs:!1,emits:["error"],methods:{onError:function(n){this.$emit("error",n)}}},Nv=["aria-labelledby","aria-label"],Vv=["src","alt"];function Uv(t,n,e,o,r,i){return C(),B("div",S({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root")),[de(t.$slots,"default",{},function(){return[t.label?(C(),B("span",S({key:0,class:t.cx("label")},t.ptm("label")),Ge(t.label),17)):t.$slots.icon?(C(),X(De(t.$slots.icon),{key:1,class:ze(t.cx("icon"))},null,8,["class"])):t.icon?(C(),B("span",S({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):t.image?(C(),B("img",S({key:3,src:t.image,alt:t.ariaLabel,onError:n[0]||(n[0]=function(){return i.onError&&i.onError.apply(i,arguments)})},t.ptm("image")),null,16,Vv)):re("",!0)]})],16,Nv)}lu.render=Uv;var uu={name:"PlusIcon",extends:rn},Kv=F("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"},null,-1),Hv=[Kv];function qv(t,n,e,o,r,i){return C(),B("svg",S({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),Hv,16)}uu.render=qv;var qr={name:"TimesIcon",extends:rn},Wv=F("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"},null,-1),Gv=[Wv];function Jv(t,n,e,o,r,i){return C(),B("svg",S({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),Gv,16)}qr.render=Jv;var du={name:"UploadIcon",extends:rn},Zv=F("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z",fill:"currentColor"},null,-1),Yv=[Zv];function Xv(t,n,e,o,r,i){return C(),B("svg",S({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),Yv,16)}du.render=Xv;var Vi={name:"CheckIcon",extends:rn},Qv=F("path",{d:"M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",fill:"currentColor"},null,-1),e1=[Qv];function n1(t,n,e,o,r,i){return C(),B("svg",S({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e1,16)}Vi.render=n1;var Ui={name:"ExclamationTriangleIcon",extends:rn},t1=F("path",{d:"M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z",fill:"currentColor"},null,-1),o1=F("path",{d:"M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z",fill:"currentColor"},null,-1),r1=F("path",{d:"M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z",fill:"currentColor"},null,-1),i1=[t1,o1,r1];function a1(t,n,e,o,r,i){return C(),B("svg",S({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),i1,16)}Ui.render=a1;var Ki={name:"InfoCircleIcon",extends:rn},s1=F("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z",fill:"currentColor"},null,-1),c1=[s1];function l1(t,n,e,o,r,i){return C(),B("svg",S({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),c1,16)}Ki.render=l1;var Hi={name:"TimesCircleIcon",extends:rn},u1=F("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",fill:"currentColor"},null,-1),d1=[u1];function p1(t,n,e,o,r,i){return C(),B("svg",S({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),d1,16)}Hi.render=p1;var f1={root:function(n){var e=n.props;return"p-message p-component p-message-"+e.severity},wrapper:"p-message-wrapper",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close p-link",closeIcon:"p-message-close-icon"},h1=we.extend({name:"message",classes:f1}),m1={name:"BaseMessage",extends:Ve,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!0},sticky:{type:Boolean,default:!0},life:{type:Number,default:3e3},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null}},style:h1,provide:function(){return{$parentInstance:this}}},pu={name:"Message",extends:m1,inheritAttrs:!1,emits:["close","life-end"],timeout:null,data:function(){return{visible:!0}},watch:{sticky:function(n){n||this.closeAfterDelay()}},mounted:function(){this.sticky||this.closeAfterDelay()},methods:{close:function(n){this.visible=!1,this.$emit("close",n)},closeAfterDelay:function(){var n=this;setTimeout(function(){n.visible=!1,n.$emit("life-end")},this.life)}},computed:{iconComponent:function(){return{info:Ki,success:Vi,warn:Ui,error:Hi}[this.severity]},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{ripple:Ho},components:{TimesIcon:qr,InfoCircleIcon:Ki,CheckIcon:Vi,ExclamationTriangleIcon:Ui,TimesCircleIcon:Hi}};function Mo(t){"@babel/helpers - typeof";return Mo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Mo(t)}function ac(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,o)}return e}function at(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?ac(Object(e),!0).forEach(function(o){g1(t,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ac(Object(e)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))})}return t}function g1(t,n,e){return n=b1(n),n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function b1(t){var n=v1(t,"string");return Mo(n)=="symbol"?n:String(n)}function v1(t,n){if(Mo(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var o=e.call(t,n||"default");if(Mo(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}var y1=["aria-label"];function k1(t,n,e,o,r,i){var a=Be("TimesIcon"),s=Mr("ripple");return C(),X(Gt,S({name:"p-message",appear:""},t.ptmi("transition")),{default:Ye(function(){return[on(F("div",S({class:t.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true"},t.ptm("root")),[t.$slots.container?de(t.$slots,"container",{key:0,onClose:i.close,closeCallback:i.close}):(C(),B("div",S({key:1,class:t.cx("wrapper")},t.ptm("wrapper")),[de(t.$slots,"messageicon",{class:"p-message-icon"},function(){return[(C(),X(De(t.icon?"span":i.iconComponent),S({class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16,["class"]))]}),F("div",S({class:["p-message-text",t.cx("text")]},t.ptm("text")),[de(t.$slots,"default")],16),t.closable?on((C(),B("button",S({key:0,class:t.cx("closeButton"),"aria-label":i.closeAriaLabel,type:"button",onClick:n[0]||(n[0]=function(c){return i.close(c)})},at(at(at({},t.closeButtonProps),t.ptm("button")),t.ptm("closeButton"))),[de(t.$slots,"closeicon",{},function(){return[t.closeIcon?(C(),B("i",S({key:0,class:[t.cx("closeIcon"),t.closeIcon]},at(at({},t.ptm("buttonIcon")),t.ptm("closeIcon"))),null,16)):(C(),X(a,S({key:1,class:[t.cx("closeIcon"),t.closeIcon]},at(at({},t.ptm("buttonIcon")),t.ptm("closeIcon"))),null,16,["class"]))]})],16,y1)),[[s]]):re("",!0)],16))],16),[[nf,r.visible]])]}),_:3},16)}pu.render=k1;var w1={root:function(n){var e=n.instance;return["p-progressbar p-component",{"p-progressbar-determinate":e.determinate,"p-progressbar-indeterminate":e.indeterminate}]},container:"p-progressbar-indeterminate-container",value:"p-progressbar-value p-progressbar-value-animate",label:"p-progressbar-label"},x1=we.extend({name:"progressbar",classes:w1}),C1={name:"BaseProgressBar",extends:Ve,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:x1,provide:function(){return{$parentInstance:this}}},fu={name:"ProgressBar",extends:C1,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},_1=["aria-valuenow"];function S1(t,n,e,o,r,i){return C(),B("div",S({role:"progressbar",class:t.cx("root"),"aria-valuemin":"0","aria-valuenow":t.value,"aria-valuemax":"100"},t.ptmi("root")),[i.determinate?(C(),B("div",S({key:0,class:t.cx("value"),style:i.progressStyle},t.ptm("value")),[t.value!=null&&t.value!==0&&t.showValue?(C(),B("div",S({key:0,class:t.cx("label")},t.ptm("label")),[de(t.$slots,"default",{},function(){return[wt(Ge(t.value+"%"),1)]})],16)):re("",!0)],16)):re("",!0),i.indeterminate?(C(),B("div",S({key:1,class:t.cx("container")},t.ptm("container")),[F("div",S({class:t.cx("value")},t.ptm("value")),null,16)],16)):re("",!0)],16,_1)}fu.render=S1;var I1={root:function(n){var e=n.props;return["p-fileupload p-fileupload-".concat(e.mode," p-component")]},buttonbar:"p-fileupload-buttonbar",chooseButton:function(n){var e=n.instance,o=n.props;return["p-fileupload-choose",{"p-fileupload-choose-selected":o.mode==="basic"&&e.hasFiles,"p-focus":e.focused}]},chooseIcon:"p-fileupload-choose-icon",chooseButtonLabel:"p-fileupload-choosebutton-label",content:"p-fileupload-content",empty:"p-fileupload-empty",uploadIcon:"p-fileupload-upload-icon",label:"p-fileupload-button-label",file:"p-fileupload-file",thumbnail:"p-fileupload-file-thumbnail",details:"p-fileupload-file-details",fileName:"p-fileupload-file-name",fileSize:"p-fileupload-file-size",badge:"p-fileupload-file-badge",actions:"p-fileupload-file-actions",removeButton:"p-fileupload-file-remove"},$1=we.extend({name:"fileupload",classes:I1}),P1={name:"BaseFileUpload",extends:Ve,props:{name:{type:String,default:null},url:{type:String,default:null},mode:{type:String,default:"advanced"},multiple:{type:Boolean,default:!1},accept:{type:String,default:null},disabled:{type:Boolean,default:!1},auto:{type:Boolean,default:!1},maxFileSize:{type:Number,default:null},invalidFileSizeMessage:{type:String,default:"{0}: Invalid file size, file size should be smaller than {1}."},invalidFileTypeMessage:{type:String,default:"{0}: Invalid file type, allowed file types: {1}."},fileLimit:{type:Number,default:null},invalidFileLimitMessage:{type:String,default:"Maximum number of files exceeded, limit is {0} at most."},withCredentials:{type:Boolean,default:!1},previewWidth:{type:Number,default:50},chooseLabel:{type:String,default:null},uploadLabel:{type:String,default:null},cancelLabel:{type:String,default:null},customUpload:{type:Boolean,default:!1},showUploadButton:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!0},chooseIcon:{type:String,default:void 0},uploadIcon:{type:String,default:void 0},cancelIcon:{type:String,default:void 0},style:null,class:null},style:$1,provide:function(){return{$parentInstance:this}}},hu={name:"FileContent",hostName:"FileUpload",extends:Ve,emits:["remove"],props:{files:{type:Array,default:function(){return[]}},badgeSeverity:{type:String,default:"warning"},badgeValue:{type:String,default:null},previewWidth:{type:Number,default:50},templates:{type:null,default:null}},methods:{formatSize:function(n){var e,o=1024,r=3,i=((e=this.$primevue.config.locale)===null||e===void 0?void 0:e.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(n===0)return"0 ".concat(i[0]);var a=Math.floor(Math.log(n)/Math.log(o)),s=parseFloat((n/Math.pow(o,a)).toFixed(r));return"".concat(s," ").concat(i[a])}},components:{Button:Hr,Badge:Pa,TimesIcon:qr}},E1=["alt","src","width"];function T1(t,n,e,o,r,i){var a=Be("Badge"),s=Be("TimesIcon"),c=Be("Button");return C(!0),B(Oe,null,Co(e.files,function(l,u){return C(),B("div",S({key:l.name+l.type+l.size,class:t.cx("file")},t.ptm("file")),[F("img",S({role:"presentation",class:t.cx("thumbnail"),alt:l.name,src:l.objectURL,width:e.previewWidth},t.ptm("thumbnail")),null,16,E1),F("div",S({class:t.cx("details")},t.ptm("details")),[F("div",S({class:t.cx("fileName")},t.ptm("fileName")),Ge(l.name),17),F("span",S({class:t.cx("fileSize")},t.ptm("fileSize")),Ge(i.formatSize(l.size)),17),he(a,{value:e.badgeValue,class:ze(t.cx("badge")),severity:e.badgeSeverity,unstyled:t.unstyled,pt:t.ptm("badge")},null,8,["value","class","severity","unstyled","pt"])],16),F("div",S({class:t.cx("actions")},t.ptm("actions")),[he(c,{onClick:function(p){return t.$emit("remove",u)},text:"",rounded:"",severity:"danger",class:ze(t.cx("removeButton")),unstyled:t.unstyled,pt:t.ptm("removeButton")},{icon:Ye(function(d){return[e.templates.fileremoveicon?(C(),X(De(e.templates.fileremoveicon),{key:0,class:ze(d.class),file:l,index:u},null,8,["class","file","index"])):(C(),X(s,S({key:1,class:d.class,"aria-hidden":"true"},t.ptm("removeButton").icon),null,16,["class"]))]}),_:2},1032,["onClick","class","unstyled","pt"])],16)],16)}),128)}hu.render=T1;function ui(t){return B1(t)||A1(t)||mu(t)||O1()}function O1(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A1(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function B1(t){if(Array.isArray(t))return qi(t)}function lr(t,n){var e=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=mu(t))||n&&t&&typeof t.length=="number"){e&&(t=e);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,a=!1,s;return{s:function(){e=e.call(t)},n:function(){var l=e.next();return i=l.done,l},e:function(l){a=!0,s=l},f:function(){try{!i&&e.return!=null&&e.return()}finally{if(a)throw s}}}}function mu(t,n){if(t){if(typeof t=="string")return qi(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return qi(t,n)}}function qi(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}var gu={name:"FileUpload",extends:P1,inheritAttrs:!1,emits:["select","uploader","before-upload","progress","upload","error","before-send","clear","remove","remove-uploaded-file"],duplicateIEEvent:!1,data:function(){return{uploadedFileCount:0,files:[],messages:[],focused:!1,progress:null,uploadedFiles:[]}},methods:{onFileSelect:function(n){if(n.type!=="drop"&&this.isIE11()&&this.duplicateIEEvent){this.duplicateIEEvent=!1;return}this.messages=[],this.files=this.files||[];var e=n.dataTransfer?n.dataTransfer.files:n.target.files,o=lr(e),r;try{for(o.s();!(r=o.n()).done;){var i=r.value;this.isFileSelected(i)||this.validate(i)&&(this.isImage(i)&&(i.objectURL=window.URL.createObjectURL(i)),this.files.push(i))}}catch(a){o.e(a)}finally{o.f()}this.$emit("select",{originalEvent:n,files:this.files}),this.fileLimit&&this.checkFileLimit(),this.auto&&this.hasFiles&&!this.isFileLimitExceeded()&&this.upload(),n.type!=="drop"&&this.isIE11()?this.clearIEInput():this.clearInputElement()},choose:function(){this.$refs.fileInput.click()},upload:function(){var n=this;if(this.customUpload)this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.$emit("uploader",{files:this.files}),this.clear();else{var e=new XMLHttpRequest,o=new FormData;this.$emit("before-upload",{xhr:e,formData:o});var r=lr(this.files),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;o.append(this.name,a,a.name)}}catch(s){r.e(s)}finally{r.f()}e.upload.addEventListener("progress",function(s){s.lengthComputable&&(n.progress=Math.round(s.loaded*100/s.total)),n.$emit("progress",{originalEvent:s,progress:n.progress})}),e.onreadystatechange=function(){if(e.readyState===4){var s;n.progress=0,e.status>=200&&e.status<300?(n.fileLimit&&(n.uploadedFileCount+=n.files.length),n.$emit("upload",{xhr:e,files:n.files})):n.$emit("error",{xhr:e,files:n.files}),(s=n.uploadedFiles).push.apply(s,ui(n.files)),n.clear()}},e.open("POST",this.url,!0),this.$emit("before-send",{xhr:e,formData:o}),e.withCredentials=this.withCredentials,e.send(o)}},clear:function(){this.files=[],this.messages=null,this.$emit("clear"),this.isAdvanced&&this.clearInputElement()},onFocus:function(){this.focused=!0},onBlur:function(){this.focused=!1},isFileSelected:function(n){if(this.files&&this.files.length){var e=lr(this.files),o;try{for(e.s();!(o=e.n()).done;){var r=o.value;if(r.name+r.type+r.size===n.name+n.type+n.size)return!0}}catch(i){e.e(i)}finally{e.f()}}return!1},isIE11:function(){return!!window.MSInputMethodContext&&!!document.documentMode},validate:function(n){return this.accept&&!this.isFileTypeValid(n)?(this.messages.push(this.invalidFileTypeMessage.replace("{0}",n.name).replace("{1}",this.accept)),!1):this.maxFileSize&&n.size>this.maxFileSize?(this.messages.push(this.invalidFileSizeMessage.replace("{0}",n.name).replace("{1}",this.formatSize(this.maxFileSize))),!1):!0},isFileTypeValid:function(n){var e=this.accept.split(",").map(function(s){return s.trim()}),o=lr(e),r;try{for(o.s();!(r=o.n()).done;){var i=r.value,a=this.isWildcard(i)?this.getTypeClass(n.type)===this.getTypeClass(i):n.type==i||this.getFileExtension(n).toLowerCase()===i.toLowerCase();if(a)return!0}}catch(s){o.e(s)}finally{o.f()}return!1},getTypeClass:function(n){return n.substring(0,n.indexOf("/"))},isWildcard:function(n){return n.indexOf("*")!==-1},getFileExtension:function(n){return"."+n.name.split(".").pop()},isImage:function(n){return/^image\//.test(n.type)},onDragEnter:function(n){this.disabled||(n.stopPropagation(),n.preventDefault())},onDragOver:function(n){this.disabled||(!this.isUnstyled&&K.addClass(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!0),n.stopPropagation(),n.preventDefault())},onDragLeave:function(){this.disabled||(!this.isUnstyled&&K.removeClass(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1))},onDrop:function(n){if(!this.disabled){!this.isUnstyled&&K.removeClass(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1),n.stopPropagation(),n.preventDefault();var e=n.dataTransfer?n.dataTransfer.files:n.target.files,o=this.multiple||e&&e.length===1;o&&this.onFileSelect(n)}},onBasicUploaderClick:function(n){this.hasFiles?this.upload():n.button===0&&this.$refs.fileInput.click()},remove:function(n){this.clearInputElement();var e=this.files.splice(n,1)[0];this.files=ui(this.files),this.$emit("remove",{file:e,files:this.files})},removeUploadedFile:function(n){var e=this.uploadedFiles.splice(n,1)[0];this.uploadedFiles=ui(this.uploadedFiles),this.$emit("remove-uploaded-file",{file:e,files:this.uploadedFiles})},clearInputElement:function(){this.$refs.fileInput.value=""},clearIEInput:function(){this.$refs.fileInput&&(this.duplicateIEEvent=!0,this.$refs.fileInput.value="")},formatSize:function(n){var e,o=1024,r=3,i=((e=this.$primevue.config.locale)===null||e===void 0?void 0:e.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(n===0)return"0 ".concat(i[0]);var a=Math.floor(Math.log(n)/Math.log(o)),s=parseFloat((n/Math.pow(o,a)).toFixed(r));return"".concat(s," ").concat(i[a])},isFileLimitExceeded:function(){return this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount&&this.focused&&(this.focused=!1),this.fileLimit&&this.fileLimit<this.files.length+this.uploadedFileCount},checkFileLimit:function(){this.isFileLimitExceeded()&&this.messages.push(this.invalidFileLimitMessage.replace("{0}",this.fileLimit.toString()))},onMessageClose:function(){this.messages=null}},computed:{isAdvanced:function(){return this.mode==="advanced"},isBasic:function(){return this.mode==="basic"},chooseButtonClass:function(){return[this.cx("chooseButton"),this.class]},basicChooseButtonLabel:function(){return this.auto?this.chooseButtonLabel:this.hasFiles?this.files.map(function(n){return n.name}).join(", "):this.chooseButtonLabel},hasFiles:function(){return this.files&&this.files.length>0},hasUploadedFiles:function(){return this.uploadedFiles&&this.uploadedFiles.length>0},chooseDisabled:function(){return this.disabled||this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount},uploadDisabled:function(){return this.disabled||!this.hasFiles||this.fileLimit&&this.fileLimit<this.files.length},cancelDisabled:function(){return this.disabled||!this.hasFiles},chooseButtonLabel:function(){return this.chooseLabel||this.$primevue.config.locale.choose},uploadButtonLabel:function(){return this.uploadLabel||this.$primevue.config.locale.upload},cancelButtonLabel:function(){return this.cancelLabel||this.$primevue.config.locale.cancel},completedLabel:function(){return this.$primevue.config.locale.completed},pendingLabel:function(){return this.$primevue.config.locale.pending}},components:{Button:Hr,ProgressBar:fu,Message:pu,FileContent:hu,PlusIcon:uu,UploadIcon:du,TimesIcon:qr},directives:{ripple:Ho}},L1=["multiple","accept","disabled"],j1=["accept","disabled","multiple"];function R1(t,n,e,o,r,i){var a=Be("Button"),s=Be("ProgressBar"),c=Be("FileContent"),l=Be("Message");return i.isAdvanced?(C(),B("div",S({key:0,class:t.cx("root")},t.ptmi("root")),[F("input",S({ref:"fileInput",type:"file",onChange:n[0]||(n[0]=function(){return i.onFileSelect&&i.onFileSelect.apply(i,arguments)}),multiple:t.multiple,accept:t.accept,disabled:i.chooseDisabled},t.ptm("input")),null,16,L1),F("div",S({class:t.cx("buttonbar")},t.ptm("buttonbar")),[de(t.$slots,"header",{files:r.files,uploadedFiles:r.uploadedFiles,chooseCallback:i.choose,uploadCallback:i.upload,clearCallback:i.clear},function(){return[he(a,{label:i.chooseButtonLabel,class:ze(i.chooseButtonClass),style:Ct(t.style),disabled:t.disabled,unstyled:t.unstyled,onClick:i.choose,onKeydown:Os(i.choose,["enter"]),onFocus:i.onFocus,onBlur:i.onBlur,pt:t.ptm("chooseButton")},{icon:Ye(function(u){return[de(t.$slots,"chooseicon",{class:ze(t.cx("chooseIcon"))},function(){return[(C(),X(De(t.chooseIcon?"span":"PlusIcon"),S({class:[u.class,t.cx("chooseIcon"),t.chooseIcon],"aria-hidden":"true"},t.ptm("chooseButton").icon),null,16,["class"]))]})]}),_:3},8,["label","class","style","disabled","unstyled","onClick","onKeydown","onFocus","onBlur","pt"]),t.showUploadButton?(C(),X(a,{key:0,label:i.uploadButtonLabel,onClick:i.upload,disabled:i.uploadDisabled,unstyled:t.unstyled,pt:t.ptm("uploadButton")},{icon:Ye(function(u){return[de(t.$slots,"uploadicon",{},function(){return[(C(),X(De(t.uploadIcon?"span":"UploadIcon"),S({class:[u.class,t.uploadIcon],"aria-hidden":"true"},t.ptm("uploadButton").icon,{"data-pc-section":"uploadbuttonicon"}),null,16,["class"]))]})]}),_:3},8,["label","onClick","disabled","unstyled","pt"])):re("",!0),t.showCancelButton?(C(),X(a,{key:1,label:i.cancelButtonLabel,onClick:i.clear,disabled:i.cancelDisabled,unstyled:t.unstyled,pt:t.ptm("cancelButton")},{icon:Ye(function(u){return[de(t.$slots,"cancelicon",{},function(){return[(C(),X(De(t.cancelIcon?"span":"TimesIcon"),S({class:[u.class,t.cancelIcon],"aria-hidden":"true"},t.ptm("cancelButton").icon,{"data-pc-section":"cancelbuttonicon"}),null,16,["class"]))]})]}),_:3},8,["label","onClick","disabled","unstyled","pt"])):re("",!0)]})],16),F("div",S({ref:"content",class:t.cx("content"),onDragenter:n[1]||(n[1]=function(){return i.onDragEnter&&i.onDragEnter.apply(i,arguments)}),onDragover:n[2]||(n[2]=function(){return i.onDragOver&&i.onDragOver.apply(i,arguments)}),onDragleave:n[3]||(n[3]=function(){return i.onDragLeave&&i.onDragLeave.apply(i,arguments)}),onDrop:n[4]||(n[4]=function(){return i.onDrop&&i.onDrop.apply(i,arguments)})},t.ptm("content"),{"data-p-highlight":!1}),[de(t.$slots,"content",{files:r.files,uploadedFiles:r.uploadedFiles,removeUploadedFileCallback:i.removeUploadedFile,removeFileCallback:i.remove,progress:r.progress,messages:r.messages},function(){return[i.hasFiles?(C(),B(Oe,{key:0},[he(s,{value:r.progress,showValue:!1,unstyled:t.unstyled,pt:t.ptm("progressbar")},null,8,["value","unstyled","pt"]),he(c,{files:r.files,onRemove:i.remove,badgeValue:i.pendingLabel,previewWidth:t.previewWidth,templates:t.$slots,unstyled:t.unstyled,pt:t.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])],64)):re("",!0),(C(!0),B(Oe,null,Co(r.messages,function(u){return C(),X(l,{key:u,severity:"error",onClose:i.onMessageClose,unstyled:t.unstyled,pt:t.ptm("message")},{default:Ye(function(){return[wt(Ge(u),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),he(c,{files:r.uploadedFiles,onRemove:i.removeUploadedFile,badgeValue:i.completedLabel,badgeSeverity:"success",previewWidth:t.previewWidth,templates:t.$slots,unstyled:t.unstyled,pt:t.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])]}),t.$slots.empty&&!i.hasFiles&&!i.hasUploadedFiles?(C(),B("div",S({key:0,class:t.cx("empty")},t.ptm("empty")),[de(t.$slots,"empty")],16)):re("",!0)],16)],16)):i.isBasic?(C(),B("div",S({key:1,class:t.cx("root")},t.ptmi("root")),[(C(!0),B(Oe,null,Co(r.messages,function(u){return C(),X(l,{key:u,severity:"error",onClose:i.onMessageClose,unstyled:t.unstyled,pt:t.ptm("messages")},{default:Ye(function(){return[wt(Ge(u),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),he(a,S({label:i.basicChooseButtonLabel,class:i.chooseButtonClass,style:t.style,onMouseup:i.onBasicUploaderClick,onKeydown:Os(i.choose,["enter"]),onFocus:i.onFocus,onBlur:i.onBlur},t.ptm("button")),{icon:Ye(function(u){return[!i.hasFiles||t.auto?de(t.$slots,"uploadicon",{key:0,class:ze(t.cx("uploadIcon"))},function(){return[(C(),X(De(t.uploadIcon?"span":"UploadIcon"),S({class:[u.class,t.cx("uploadIcon"),t.uploadIcon],"aria-hidden":"true"},t.ptm("button").icon),null,16,["class"]))]}):de(t.$slots,"chooseicon",{key:1,class:ze(t.cx("chooseIcon"))},function(){return[(C(),X(De(t.chooseIcon?"span":"PlusIcon"),S({class:[u.class,t.cx("chooseIcon"),t.chooseIcon],"aria-hidden":"true"},t.ptm("button").icon),null,16,["class"]))]})]}),_:3},16,["label","class","style","onMouseup","onKeydown","onFocus","onBlur"]),i.hasFiles?re("",!0):(C(),B("input",S({key:0,ref:"fileInput",type:"file",accept:t.accept,disabled:t.disabled,multiple:t.multiple,onChange:n[5]||(n[5]=function(){return i.onFileSelect&&i.onFileSelect.apply(i,arguments)}),onFocus:n[6]||(n[6]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:n[7]||(n[7]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)})},t.ptm("input")),null,16,j1))],16)):re("",!0)}gu.render=R1;var F1={submenu:function(n){var e=n.instance,o=n.processedItem;return{display:e.isItemActive(o)?"block":"none"}}},M1={root:function(n){var e=n.instance,o=n.props;return["p-tieredmenu p-component",{"p-tieredmenu-overlay":o.popup,"p-ripple-disabled":e.$primevue.config.ripple===!1}]},start:"p-tieredmenu-start",menu:"p-tieredmenu-root-list",menuitem:function(n){var e=n.instance,o=n.processedItem;return["p-menuitem",{"p-menuitem-active p-highlight":e.isItemActive(o),"p-focus":e.isItemFocused(o),"p-disabled":e.isItemDisabled(o)}]},content:"p-menuitem-content",action:"p-menuitem-link",icon:"p-menuitem-icon",text:"p-menuitem-text",submenuIcon:"p-submenu-icon",submenu:"p-submenu-list",separator:"p-menuitem-separator",end:"p-tieredmenu-end"},z1=we.extend({name:"tieredmenu",classes:M1,inlineStyles:F1}),Ta={name:"AngleRightIcon",extends:rn},D1=F("path",{d:"M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z",fill:"currentColor"},null,-1),N1=[D1];function V1(t,n,e,o,r,i){return C(),B("svg",S({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),N1,16)}Ta.render=V1;var U1={name:"BaseTieredMenu",extends:Ve,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:z1,provide:function(){return{$parentInstance:this}}},bu={name:"TieredMenuSub",hostName:"TieredMenu",extends:Ve,emits:["item-click","item-mouseenter","item-mousemove"],container:null,props:{menuId:{type:String,default:null},focusedItemId:{type:String,default:null},items:{type:Array,default:null},visible:{type:Boolean,default:!1},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getItemId:function(n){return"".concat(this.menuId,"_").concat(n.key)},getItemKey:function(n){return this.getItemId(n)},getItemProp:function(n,e,o){return n&&n.item?L.getItemValue(n.item[e],o):void 0},getItemLabel:function(n){return this.getItemProp(n,"label")},getItemLabelId:function(n){return"".concat(this.menuId,"_").concat(n.key,"_label")},getPTOptions:function(n,e,o){return this.ptm(o,{context:{item:n,index:e,active:this.isItemActive(n),focused:this.isItemFocused(n),disabled:this.isItemDisabled(n)}})},isItemActive:function(n){return this.activeItemPath.some(function(e){return e.key===n.key})},isItemVisible:function(n){return this.getItemProp(n,"visible")!==!1},isItemDisabled:function(n){return this.getItemProp(n,"disabled")},isItemFocused:function(n){return this.focusedItemId===this.getItemId(n)},isItemGroup:function(n){return L.isNotEmpty(n.items)},onEnter:function(){K.nestedPosition(this.container,this.level)},onItemClick:function(n,e){this.getItemProp(e,"command",{originalEvent:n,item:e.item}),this.$emit("item-click",{originalEvent:n,processedItem:e,isFocus:!0})},onItemMouseEnter:function(n,e){this.$emit("item-mouseenter",{originalEvent:n,processedItem:e})},onItemMouseMove:function(n,e){this.$emit("item-mousemove",{originalEvent:n,processedItem:e})},getAriaSetSize:function(){var n=this;return this.items.filter(function(e){return n.isItemVisible(e)&&!n.getItemProp(e,"separator")}).length},getAriaPosInset:function(n){var e=this;return n-this.items.slice(0,n).filter(function(o){return e.isItemVisible(o)&&e.getItemProp(o,"separator")}).length+1},getMenuItemProps:function(n,e){return{action:S({class:this.cx("action"),tabindex:-1,"aria-hidden":!0},this.getPTOptions(n,e,"action")),icon:S({class:[this.cx("icon"),this.getItemProp(n,"icon")]},this.getPTOptions(n,e,"icon")),label:S({class:this.cx("label")},this.getPTOptions(n,e,"label")),submenuicon:S({class:this.cx("submenuIcon")},this.getPTOptions(n,e,"submenuIcon"))}},containerRef:function(n){this.container=n}},components:{AngleRightIcon:Ta},directives:{ripple:Ho}},K1=["tabindex"],H1=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-highlight","data-p-focused","data-p-disabled"],q1=["onClick","onMouseenter","onMousemove"],W1=["href","target"],G1=["id"],J1=["id"];function Z1(t,n,e,o,r,i){var a=Be("AngleRightIcon"),s=Be("TieredMenuSub",!0),c=Mr("ripple");return C(),X(Gt,S({name:"p-tieredmenu",onEnter:i.onEnter},t.ptm("menu.transition")),{default:Ye(function(){return[e.level===0||e.visible?(C(),B("ul",S({key:0,ref:i.containerRef,class:e.level===0?t.cx("menu"):t.cx("submenu"),tabindex:e.tabindex},e.level===0?t.ptm("menu"):t.ptm("submenu")),[(C(!0),B(Oe,null,Co(e.items,function(l,u){return C(),B(Oe,{key:i.getItemKey(l)},[i.isItemVisible(l)&&!i.getItemProp(l,"separator")?(C(),B("li",S({key:0,id:i.getItemId(l),style:i.getItemProp(l,"style"),class:[t.cx("menuitem",{processedItem:l}),i.getItemProp(l,"class")],role:"menuitem","aria-label":i.getItemLabel(l),"aria-disabled":i.isItemDisabled(l)||void 0,"aria-expanded":i.isItemGroup(l)?i.isItemActive(l):void 0,"aria-haspopup":i.isItemGroup(l)&&!i.getItemProp(l,"to")?"menu":void 0,"aria-level":e.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(u)},i.getPTOptions(l,u,"menuitem"),{"data-p-highlight":i.isItemActive(l),"data-p-focused":i.isItemFocused(l),"data-p-disabled":i.isItemDisabled(l)}),[F("div",S({class:t.cx("content"),onClick:function(p){return i.onItemClick(p,l)},onMouseenter:function(p){return i.onItemMouseEnter(p,l)},onMousemove:function(p){return i.onItemMouseMove(p,l)}},i.getPTOptions(l,u,"content")),[e.templates.item?(C(),X(De(e.templates.item),{key:1,item:l.item,hasSubmenu:i.getItemProp(l,"items"),label:i.getItemLabel(l),props:i.getMenuItemProps(l,u)},null,8,["item","hasSubmenu","label","props"])):on((C(),B("a",S({key:0,href:i.getItemProp(l,"url"),class:t.cx("action"),target:i.getItemProp(l,"target"),tabindex:"-1","aria-hidden":"true"},i.getPTOptions(l,u,"action")),[e.templates.itemicon?(C(),X(De(e.templates.itemicon),{key:0,item:l.item,class:ze(t.cx("icon"))},null,8,["item","class"])):i.getItemProp(l,"icon")?(C(),B("span",S({key:1,class:[t.cx("icon"),i.getItemProp(l,"icon")]},i.getPTOptions(l,u,"icon")),null,16)):re("",!0),F("span",S({id:i.getItemLabelId(l),class:t.cx("label")},i.getPTOptions(l,u,"label")),Ge(i.getItemLabel(l)),17,G1),i.getItemProp(l,"items")?(C(),B(Oe,{key:2},[e.templates.submenuicon?(C(),X(De(e.templates.submenuicon),S({key:0,class:t.cx("submenuIcon"),active:i.isItemActive(l)},i.getPTOptions(l,u,"submenuIcon")),null,16,["class","active"])):(C(),X(a,S({key:1,class:t.cx("submenuIcon")},i.getPTOptions(l,u,"submenuIcon")),null,16,["class"]))],64)):re("",!0)],16,W1)),[[c]])],16,q1),i.isItemVisible(l)&&i.isItemGroup(l)?(C(),X(s,{key:0,id:i.getItemId(l)+"_list",style:Ct(t.sx("submenu",!0,{processedItem:l})),"aria-labelledby":i.getItemLabelId(l),role:"menu",menuId:e.menuId,focusedItemId:e.focusedItemId,items:l.items,templates:e.templates,activeItemPath:e.activeItemPath,level:e.level+1,visible:i.isItemActive(l)&&i.isItemGroup(l),pt:t.pt,unstyled:t.unstyled,onItemClick:n[0]||(n[0]=function(d){return t.$emit("item-click",d)}),onItemMouseenter:n[1]||(n[1]=function(d){return t.$emit("item-mouseenter",d)}),onItemMousemove:n[2]||(n[2]=function(d){return t.$emit("item-mousemove",d)})},null,8,["id","style","aria-labelledby","menuId","focusedItemId","items","templates","activeItemPath","level","visible","pt","unstyled"])):re("",!0)],16,H1)):re("",!0),i.isItemVisible(l)&&i.getItemProp(l,"separator")?(C(),B("li",S({key:1,id:i.getItemId(l),style:i.getItemProp(l,"style"),class:[t.cx("separator"),i.getItemProp(l,"class")],role:"separator"},t.ptm("separator")),null,16,J1)):re("",!0)],64)}),128))],16,K1)):re("",!0)]}),_:1},16,["onEnter"])}bu.render=Z1;var vu={name:"TieredMenu",extends:U1,inheritAttrs:!1,emits:["focus","blur","before-show","before-hide","hide","show"],outsideClickListener:null,scrollHandler:null,resizeListener:null,target:null,container:null,menubar:null,searchTimeout:null,searchValue:null,data:function(){return{id:this.$attrs.id,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],visible:!this.popup,submenuVisible:!1,dirty:!1}},watch:{"$attrs.id":function(n){this.id=n||Qn()},activeItemPath:function(n){this.popup||(L.isNotEmpty(n)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener()))}},mounted:function(){this.id=this.id||Qn()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&An.clear(this.container),this.target=null,this.container=null},methods:{getItemProp:function(n,e){return n?L.getItemValue(n[e]):void 0},getItemLabel:function(n){return this.getItemProp(n,"label")},isItemDisabled:function(n){return this.getItemProp(n,"disabled")},isItemGroup:function(n){return L.isNotEmpty(this.getItemProp(n,"items"))},isItemSeparator:function(n){return this.getItemProp(n,"separator")},getProccessedItemLabel:function(n){return n?this.getItemLabel(n.item):void 0},isProccessedItemGroup:function(n){return n&&L.isNotEmpty(n.items)},toggle:function(n){this.visible?this.hide(n,!0):this.show(n)},show:function(n,e){this.popup&&(this.$emit("before-show"),this.visible=!0,this.target=this.target||n.currentTarget,this.relatedTarget=n.relatedTarget||null),e&&K.focus(this.menubar)},hide:function(n,e){this.popup&&(this.$emit("before-hide"),this.visible=!1),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},e&&K.focus(this.relatedTarget||this.target||this.menubar),this.dirty=!1},onFocus:function(n){this.focused=!0,this.popup||(this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""}),this.$emit("focus",n)},onBlur:function(n){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",n)},onKeyDown:function(n){if(this.disabled){n.preventDefault();return}var e=n.metaKey||n.ctrlKey;switch(n.code){case"ArrowDown":this.onArrowDownKey(n);break;case"ArrowUp":this.onArrowUpKey(n);break;case"ArrowLeft":this.onArrowLeftKey(n);break;case"ArrowRight":this.onArrowRightKey(n);break;case"Home":this.onHomeKey(n);break;case"End":this.onEndKey(n);break;case"Space":this.onSpaceKey(n);break;case"Enter":case"NumpadEnter":this.onEnterKey(n);break;case"Escape":this.onEscapeKey(n);break;case"Tab":this.onTabKey(n);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!e&&L.isPrintableCharacter(n.key)&&this.searchItems(n,n.key);break}},onItemChange:function(n){var e=n.processedItem,o=n.isFocus;if(!L.isEmpty(e)){var r=e.index,i=e.key,a=e.level,s=e.parentKey,c=e.items,l=L.isNotEmpty(c),u=this.activeItemPath.filter(function(d){return d.parentKey!==s&&d.parentKey!==i});l&&(u.push(e),this.submenuVisible=!0),this.focusedItemInfo={index:r,level:a,parentKey:s},this.activeItemPath=u,l&&(this.dirty=!0),o&&K.focus(this.menubar)}},onOverlayClick:function(n){ru.emit("overlay-click",{originalEvent:n,target:this.target})},onItemClick:function(n){var e=n.originalEvent,o=n.processedItem,r=this.isProccessedItemGroup(o),i=L.isEmpty(o.parent),a=this.isSelected(o);if(a){var s=o.index,c=o.key,l=o.level,u=o.parentKey;this.activeItemPath=this.activeItemPath.filter(function(p){return c!==p.key&&c.startsWith(p.key)}),this.focusedItemInfo={index:s,level:l,parentKey:u},this.dirty=!i,K.focus(this.menubar)}else if(r)this.onItemChange(n);else{var d=i?o:this.activeItemPath.find(function(p){return p.parentKey===""});this.hide(e),this.changeFocusedItemIndex(e,d?d.index:-1),K.focus(this.menubar)}},onItemMouseEnter:function(n){this.dirty&&this.onItemChange(n)},onItemMouseMove:function(n){this.focused&&this.changeFocusedItemIndex(n,n.processedItem.index)},onArrowDownKey:function(n){var e=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(n,e),n.preventDefault()},onArrowUpKey:function(n){if(n.altKey){if(this.focusedItemInfo.index!==-1){var e=this.visibleItems[this.focusedItemInfo.index],o=this.isProccessedItemGroup(e);!o&&this.onItemChange({originalEvent:n,processedItem:e})}this.popup&&this.hide(n,!0),n.preventDefault()}else{var r=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(n,r),n.preventDefault()}},onArrowLeftKey:function(n){var e=this,o=this.visibleItems[this.focusedItemInfo.index],r=this.activeItemPath.find(function(a){return a.key===o.parentKey}),i=L.isEmpty(o.parent);i||(this.focusedItemInfo={index:-1,parentKey:r?r.parentKey:""},this.searchValue="",this.onArrowDownKey(n)),this.activeItemPath=this.activeItemPath.filter(function(a){return a.parentKey!==e.focusedItemInfo.parentKey}),n.preventDefault()},onArrowRightKey:function(n){var e=this.visibleItems[this.focusedItemInfo.index],o=this.isProccessedItemGroup(e);o&&(this.onItemChange({originalEvent:n,processedItem:e}),this.focusedItemInfo={index:-1,parentKey:e.key},this.searchValue="",this.onArrowDownKey(n)),n.preventDefault()},onHomeKey:function(n){this.changeFocusedItemIndex(n,this.findFirstItemIndex()),n.preventDefault()},onEndKey:function(n){this.changeFocusedItemIndex(n,this.findLastItemIndex()),n.preventDefault()},onEnterKey:function(n){if(this.focusedItemInfo.index!==-1){var e=K.findSingle(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),o=e&&K.findSingle(e,'[data-pc-section="action"]');if(o?o.click():e&&e.click(),!this.popup){var r=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(r);!i&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}}n.preventDefault()},onSpaceKey:function(n){this.onEnterKey(n)},onEscapeKey:function(n){this.hide(n,!0),!this.popup&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex()),n.preventDefault()},onTabKey:function(n){if(this.focusedItemInfo.index!==-1){var e=this.visibleItems[this.focusedItemInfo.index],o=this.isProccessedItemGroup(e);!o&&this.onItemChange({originalEvent:n,processedItem:e})}this.hide()},onEnter:function(n){this.autoZIndex&&An.set("menu",n,this.baseZIndex+this.$primevue.config.zIndex.menu),K.addStyles(n,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),K.focus(this.menubar),this.scrollInView()},onAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.container=null,this.dirty=!1},onAfterLeave:function(n){this.autoZIndex&&An.clear(n)},alignOverlay:function(){K.absolutePosition(this.container,this.target);var n=K.getOuterWidth(this.target);n>K.getOuterWidth(this.container)&&(this.container.style.minWidth=K.getOuterWidth(this.target)+"px")},bindOutsideClickListener:function(){var n=this;this.outsideClickListener||(this.outsideClickListener=function(e){var o=n.container&&!n.container.contains(e.target),r=n.popup?!(n.target&&(n.target===e.target||n.target.contains(e.target))):!0;o&&r&&n.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var n=this;this.scrollHandler||(this.scrollHandler=new Zl(this.target,function(e){n.hide(e,!0)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var n=this;this.resizeListener||(this.resizeListener=function(e){K.isTouchDevice()||n.hide(e,!0)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isItemMatched:function(n){var e;return this.isValidItem(n)&&((e=this.getProccessedItemLabel(n))===null||e===void 0?void 0:e.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(n){return!!n&&!this.isItemDisabled(n.item)&&!this.isItemSeparator(n.item)},isValidSelectedItem:function(n){return this.isValidItem(n)&&this.isSelected(n)},isSelected:function(n){return this.activeItemPath.some(function(e){return e.key===n.key})},findFirstItemIndex:function(){var n=this;return this.visibleItems.findIndex(function(e){return n.isValidItem(e)})},findLastItemIndex:function(){var n=this;return L.findLastIndex(this.visibleItems,function(e){return n.isValidItem(e)})},findNextItemIndex:function(n){var e=this,o=n<this.visibleItems.length-1?this.visibleItems.slice(n+1).findIndex(function(r){return e.isValidItem(r)}):-1;return o>-1?o+n+1:n},findPrevItemIndex:function(n){var e=this,o=n>0?L.findLastIndex(this.visibleItems.slice(0,n),function(r){return e.isValidItem(r)}):-1;return o>-1?o:n},findSelectedItemIndex:function(){var n=this;return this.visibleItems.findIndex(function(e){return n.isValidSelectedItem(e)})},findFirstFocusedItemIndex:function(){var n=this.findSelectedItemIndex();return n<0?this.findFirstItemIndex():n},findLastFocusedItemIndex:function(){var n=this.findSelectedItemIndex();return n<0?this.findLastItemIndex():n},searchItems:function(n,e){var o=this;this.searchValue=(this.searchValue||"")+e;var r=-1,i=!1;return this.focusedItemInfo.index!==-1?(r=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(a){return o.isItemMatched(a)}),r=r===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(a){return o.isItemMatched(a)}):r+this.focusedItemInfo.index):r=this.visibleItems.findIndex(function(a){return o.isItemMatched(a)}),r!==-1&&(i=!0),r===-1&&this.focusedItemInfo.index===-1&&(r=this.findFirstFocusedItemIndex()),r!==-1&&this.changeFocusedItemIndex(n,r),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){o.searchValue="",o.searchTimeout=null},500),i},changeFocusedItemIndex:function(n,e){this.focusedItemInfo.index!==e&&(this.focusedItemInfo.index=e,this.scrollInView())},scrollInView:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,e=n!==-1?"".concat(this.id,"_").concat(n):this.focusedItemId,o=K.findSingle(this.menubar,'li[id="'.concat(e,'"]'));o&&o.scrollIntoView&&o.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(n){var e=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",a=[];return n&&n.forEach(function(s,c){var l=(i!==""?i+"_":"")+c,u={item:s,index:c,level:o,key:l,parent:r,parentKey:i};u.items=e.createProcessedItems(s.items,o+1,u,l),a.push(u)}),a},containerRef:function(n){this.container=n},menubarRef:function(n){this.menubar=n?n.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var n=this,e=this.activeItemPath.find(function(o){return o.key===n.focusedItemInfo.parentKey});return e?e.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index!==-1?"".concat(this.id).concat(L.isNotEmpty(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{TieredMenuSub:bu,Portal:Ea}},Y1=["id"];function X1(t,n,e,o,r,i){var a=Be("TieredMenuSub"),s=Be("Portal");return C(),X(s,{appendTo:t.appendTo,disabled:!t.popup},{default:Ye(function(){return[he(Gt,S({name:"p-connected-overlay",onEnter:i.onEnter,onAfterEnter:i.onAfterEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},t.ptm("transition")),{default:Ye(function(){return[r.visible?(C(),B("div",S({key:0,ref:i.containerRef,id:r.id,class:t.cx("root"),onClick:n[0]||(n[0]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)})},t.ptmi("root")),[t.$slots.start?(C(),B("div",S({key:0,class:t.cx("start")},t.ptm("start")),[de(t.$slots,"start")],16)):re("",!0),he(a,{ref:i.menubarRef,id:r.id+"_list",tabindex:t.disabled?-1:t.tabindex,role:"menubar","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-disabled":t.disabled||void 0,"aria-orientation":"vertical","aria-activedescendant":r.focused?i.focusedItemId:void 0,menuId:r.id,focusedItemId:r.focused?i.focusedItemId:void 0,items:i.processedItems,templates:t.$slots,activeItemPath:r.activeItemPath,level:0,visible:r.submenuVisible,pt:t.pt,unstyled:t.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter,onItemMousemove:i.onItemMouseMove},null,8,["id","tabindex","aria-label","aria-labelledby","aria-disabled","aria-activedescendant","menuId","focusedItemId","items","templates","activeItemPath","visible","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"]),t.$slots.end?(C(),B("div",S({key:1,class:t.cx("end")},t.ptm("end")),[de(t.$slots,"end")],16)):re("",!0)],16,Y1)):re("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}vu.render=X1;var yu={name:"BarsIcon",extends:rn},Q1=F("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z",fill:"currentColor"},null,-1),ey=[Q1];function ny(t,n,e,o,r,i){return C(),B("svg",S({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),ey,16)}yu.render=ny;var ty={submenu:function(n){var e=n.instance,o=n.processedItem;return{display:e.isItemActive(o)?"block":"none"}}},oy={root:function(n){var e=n.instance;return["p-menubar p-component",{"p-menubar-mobile":e.queryMatches,"p-menubar-mobile-active":e.mobileActive}]},start:"p-menubar-start",button:"p-menubar-button",menu:"p-menubar-root-list",menuitem:function(n){var e=n.instance,o=n.processedItem;return["p-menuitem",{"p-menuitem-active p-highlight":e.isItemActive(o),"p-focus":e.isItemFocused(o),"p-disabled":e.isItemDisabled(o)}]},content:"p-menuitem-content",action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text",submenuIcon:"p-submenu-icon",submenu:"p-submenu-list",separator:"p-menuitem-separator",end:"p-menubar-end"},ry=we.extend({name:"menubar",classes:oy,inlineStyles:ty}),ku={name:"AngleDownIcon",extends:rn},iy=F("path",{d:"M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z",fill:"currentColor"},null,-1),ay=[iy];function sy(t,n,e,o,r,i){return C(),B("svg",S({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),ay,16)}ku.render=sy;var cy={name:"BaseMenubar",extends:Ve,props:{model:{type:Array,default:null},buttonProps:{type:null,default:null},breakpoint:{type:String,default:"960px"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:ry,provide:function(){return{$parentInstance:this}}},wu={name:"MenubarSub",hostName:"Menubar",extends:Ve,emits:["item-mouseenter","item-click","item-mousemove"],props:{items:{type:Array,default:null},root:{type:Boolean,default:!1},popup:{type:Boolean,default:!1},mobileActive:{type:Boolean,default:!1},templates:{type:Object,default:null},level:{type:Number,default:0},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},activeItemPath:{type:Object,default:null}},list:null,methods:{getItemId:function(n){return"".concat(this.menuId,"_").concat(n.key)},getItemKey:function(n){return this.getItemId(n)},getItemProp:function(n,e,o){return n&&n.item?L.getItemValue(n.item[e],o):void 0},getItemLabel:function(n){return this.getItemProp(n,"label")},getItemLabelId:function(n){return"".concat(this.menuId,"_").concat(n.key,"_label")},getPTOptions:function(n,e,o){return this.ptm(o,{context:{item:n,index:e,active:this.isItemActive(n),focused:this.isItemFocused(n),disabled:this.isItemDisabled(n),level:this.level}})},isItemActive:function(n){return this.activeItemPath.some(function(e){return e.key===n.key})},isItemVisible:function(n){return this.getItemProp(n,"visible")!==!1},isItemDisabled:function(n){return this.getItemProp(n,"disabled")},isItemFocused:function(n){return this.focusedItemId===this.getItemId(n)},isItemGroup:function(n){return L.isNotEmpty(n.items)},onItemClick:function(n,e){this.getItemProp(e,"command",{originalEvent:n,item:e.item}),this.$emit("item-click",{originalEvent:n,processedItem:e,isFocus:!0})},onItemMouseEnter:function(n,e){this.$emit("item-mouseenter",{originalEvent:n,processedItem:e})},onItemMouseMove:function(n,e){this.$emit("item-mousemove",{originalEvent:n,processedItem:e})},getAriaSetSize:function(){var n=this;return this.items.filter(function(e){return n.isItemVisible(e)&&!n.getItemProp(e,"separator")}).length},getAriaPosInset:function(n){var e=this;return n-this.items.slice(0,n).filter(function(o){return e.isItemVisible(o)&&e.getItemProp(o,"separator")}).length+1},getMenuItemProps:function(n,e){return{action:S({class:this.cx("action"),tabindex:-1,"aria-hidden":!0},this.getPTOptions(n,e,"action")),icon:S({class:[this.cx("icon"),this.getItemProp(n,"icon")]},this.getPTOptions(n,e,"icon")),label:S({class:this.cx("label")},this.getPTOptions(n,e,"label")),submenuicon:S({class:this.cx("submenuIcon")},this.getPTOptions(n,e,"submenuIcon"))}}},components:{AngleRightIcon:Ta,AngleDownIcon:ku},directives:{ripple:Ho}},ly=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-highlight","data-p-focused","data-p-disabled"],uy=["onClick","onMouseenter","onMousemove"],dy=["href","target"],py=["id"],fy=["id"];function hy(t,n,e,o,r,i){var a=Be("MenubarSub",!0),s=Mr("ripple");return C(),B("ul",S({class:e.level===0?t.cx("menu"):t.cx("submenu")},e.level===0?t.ptm("menu"):t.ptm("submenu")),[(C(!0),B(Oe,null,Co(e.items,function(c,l){return C(),B(Oe,{key:i.getItemKey(c)},[i.isItemVisible(c)&&!i.getItemProp(c,"separator")?(C(),B("li",S({key:0,id:i.getItemId(c),style:i.getItemProp(c,"style"),class:[t.cx("menuitem",{processedItem:c}),i.getItemProp(c,"class")],role:"menuitem","aria-label":i.getItemLabel(c),"aria-disabled":i.isItemDisabled(c)||void 0,"aria-expanded":i.isItemGroup(c)?i.isItemActive(c):void 0,"aria-haspopup":i.isItemGroup(c)&&!i.getItemProp(c,"to")?"menu":void 0,"aria-level":e.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(l)},i.getPTOptions(c,l,"menuitem"),{"data-p-highlight":i.isItemActive(c),"data-p-focused":i.isItemFocused(c),"data-p-disabled":i.isItemDisabled(c)}),[F("div",S({class:t.cx("content"),onClick:function(d){return i.onItemClick(d,c)},onMouseenter:function(d){return i.onItemMouseEnter(d,c)},onMousemove:function(d){return i.onItemMouseMove(d,c)}},i.getPTOptions(c,l,"content")),[e.templates.item?(C(),X(De(e.templates.item),{key:1,item:c.item,root:e.root,hasSubmenu:i.getItemProp(c,"items"),label:i.getItemLabel(c),props:i.getMenuItemProps(c,l)},null,8,["item","root","hasSubmenu","label","props"])):on((C(),B("a",S({key:0,href:i.getItemProp(c,"url"),class:t.cx("action"),target:i.getItemProp(c,"target"),tabindex:"-1","aria-hidden":"true"},i.getPTOptions(c,l,"action")),[e.templates.itemicon?(C(),X(De(e.templates.itemicon),{key:0,item:c.item,class:ze(t.cx("icon"))},null,8,["item","class"])):i.getItemProp(c,"icon")?(C(),B("span",S({key:1,class:[t.cx("icon"),i.getItemProp(c,"icon")]},i.getPTOptions(c,l,"icon")),null,16)):re("",!0),F("span",S({id:i.getItemLabelId(c),class:t.cx("label")},i.getPTOptions(c,l,"label")),Ge(i.getItemLabel(c)),17,py),i.getItemProp(c,"items")?(C(),B(Oe,{key:2},[e.templates.submenuicon?(C(),X(De(e.templates.submenuicon),{key:0,root:e.root,active:i.isItemActive(c),class:ze(t.cx("submenuIcon"))},null,8,["root","active","class"])):(C(),X(De(e.root?"AngleDownIcon":"AngleRightIcon"),S({key:1,class:t.cx("submenuIcon")},i.getPTOptions(c,l,"submenuIcon")),null,16,["class"]))],64)):re("",!0)],16,dy)),[[s]])],16,uy),i.isItemVisible(c)&&i.isItemGroup(c)?(C(),X(a,{key:0,menuId:e.menuId,role:"menu",style:Ct(t.sx("submenu",!0,{processedItem:c})),focusedItemId:e.focusedItemId,items:c.items,mobileActive:e.mobileActive,activeItemPath:e.activeItemPath,templates:e.templates,level:e.level+1,"aria-labelledby":i.getItemLabelId(c),pt:t.pt,unstyled:t.unstyled,onItemClick:n[0]||(n[0]=function(u){return t.$emit("item-click",u)}),onItemMouseenter:n[1]||(n[1]=function(u){return t.$emit("item-mouseenter",u)}),onItemMousemove:n[2]||(n[2]=function(u){return t.$emit("item-mousemove",u)})},null,8,["menuId","style","focusedItemId","items","mobileActive","activeItemPath","templates","level","aria-labelledby","pt","unstyled"])):re("",!0)],16,ly)):re("",!0),i.isItemVisible(c)&&i.getItemProp(c,"separator")?(C(),B("li",S({key:1,id:i.getItemId(c),class:[t.cx("separator"),i.getItemProp(c,"class")],style:i.getItemProp(c,"style"),role:"separator"},t.ptm("separator")),null,16,fy)):re("",!0)],64)}),128))],16)}wu.render=hy;var xu={name:"Menubar",extends:cy,inheritAttrs:!1,emits:["focus","blur"],matchMediaListener:null,data:function(){return{id:this.$attrs.id,mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],dirty:!1,query:null,queryMatches:!1}},watch:{"$attrs.id":function(n){this.id=n||Qn()},activeItemPath:function(n){L.isNotEmpty(n)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},outsideClickListener:null,container:null,menubar:null,mounted:function(){this.id=this.id||Qn(),this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),this.container&&An.clear(this.container),this.container=null},methods:{getItemProp:function(n,e){return n?L.getItemValue(n[e]):void 0},getItemLabel:function(n){return this.getItemProp(n,"label")},isItemDisabled:function(n){return this.getItemProp(n,"disabled")},isItemGroup:function(n){return L.isNotEmpty(this.getItemProp(n,"items"))},isItemSeparator:function(n){return this.getItemProp(n,"separator")},getProccessedItemLabel:function(n){return n?this.getItemLabel(n.item):void 0},isProccessedItemGroup:function(n){return n&&L.isNotEmpty(n.items)},toggle:function(n){var e=this;this.mobileActive?(this.mobileActive=!1,An.clear(this.menubar),this.hide()):(this.mobileActive=!0,An.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){e.show()},1)),this.bindOutsideClickListener(),n.preventDefault()},show:function(){K.focus(this.menubar)},hide:function(n,e){var o=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){K.focus(o.$refs.menubutton)},0)),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},e&&K.focus(this.menubar),this.dirty=!1},onFocus:function(n){this.focused=!0,this.popup||(this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""}),this.$emit("focus",n)},onBlur:function(n){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",n)},onKeyDown:function(n){var e=n.metaKey||n.ctrlKey;switch(n.code){case"ArrowDown":this.onArrowDownKey(n);break;case"ArrowUp":this.onArrowUpKey(n);break;case"ArrowLeft":this.onArrowLeftKey(n);break;case"ArrowRight":this.onArrowRightKey(n);break;case"Home":this.onHomeKey(n);break;case"End":this.onEndKey(n);break;case"Space":this.onSpaceKey(n);break;case"Enter":case"NumpadEnter":this.onEnterKey(n);break;case"Escape":this.onEscapeKey(n);break;case"Tab":this.onTabKey(n);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!e&&L.isPrintableCharacter(n.key)&&this.searchItems(n,n.key);break}},onItemChange:function(n){var e=n.processedItem,o=n.isFocus;if(!L.isEmpty(e)){var r=e.index,i=e.key,a=e.level,s=e.parentKey,c=e.items,l=L.isNotEmpty(c),u=this.activeItemPath.filter(function(d){return d.parentKey!==s&&d.parentKey!==i});l&&u.push(e),this.focusedItemInfo={index:r,level:a,parentKey:s},this.activeItemPath=u,l&&(this.dirty=!0),o&&K.focus(this.menubar)}},onItemClick:function(n){var e=n.originalEvent,o=n.processedItem,r=this.isProccessedItemGroup(o),i=L.isEmpty(o.parent),a=this.isSelected(o);if(a){var s=o.index,c=o.key,l=o.level,u=o.parentKey;this.activeItemPath=this.activeItemPath.filter(function(p){return c!==p.key&&c.startsWith(p.key)}),this.focusedItemInfo={index:s,level:l,parentKey:u},this.dirty=!i,K.focus(this.menubar)}else if(r)this.onItemChange(n);else{var d=i?o:this.activeItemPath.find(function(p){return p.parentKey===""});this.hide(e),this.changeFocusedItemIndex(e,d?d.index:-1),this.mobileActive=!1,K.focus(this.menubar)}},onItemMouseEnter:function(n){!this.mobileActive&&this.dirty&&this.onItemChange(n)},onItemMouseMove:function(n){this.focused&&this.changeFocusedItemIndex(n,n.processedItem.index)},menuButtonClick:function(n){this.toggle(n)},menuButtonKeydown:function(n){(n.code==="Enter"||n.code==="NumpadEnter"||n.code==="Space")&&this.menuButtonClick(n)},onArrowDownKey:function(n){var e=this.visibleItems[this.focusedItemInfo.index],o=e?L.isEmpty(e.parent):null;if(o){var r=this.isProccessedItemGroup(e);r&&(this.onItemChange({originalEvent:n,processedItem:e}),this.focusedItemInfo={index:-1,parentKey:e.key},this.onArrowRightKey(n))}else{var i=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(n,i)}n.preventDefault()},onArrowUpKey:function(n){var e=this,o=this.visibleItems[this.focusedItemInfo.index],r=L.isEmpty(o.parent);if(r){var i=this.isProccessedItemGroup(o);if(i){this.onItemChange({originalEvent:n,processedItem:o}),this.focusedItemInfo={index:-1,parentKey:o.key};var a=this.findLastItemIndex();this.changeFocusedItemIndex(n,a)}}else{var s=this.activeItemPath.find(function(l){return l.key===o.parentKey});if(this.focusedItemInfo.index===0)this.focusedItemInfo={index:-1,parentKey:s?s.parentKey:""},this.searchValue="",this.onArrowLeftKey(n),this.activeItemPath=this.activeItemPath.filter(function(l){return l.parentKey!==e.focusedItemInfo.parentKey});else{var c=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(n,c)}}n.preventDefault()},onArrowLeftKey:function(n){var e=this,o=this.visibleItems[this.focusedItemInfo.index],r=o?this.activeItemPath.find(function(a){return a.key===o.parentKey}):null;if(r)this.onItemChange({originalEvent:n,processedItem:r}),this.activeItemPath=this.activeItemPath.filter(function(a){return a.parentKey!==e.focusedItemInfo.parentKey}),n.preventDefault();else{var i=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(n,i),n.preventDefault()}},onArrowRightKey:function(n){var e=this.visibleItems[this.focusedItemInfo.index],o=e?this.activeItemPath.find(function(a){return a.key===e.parentKey}):null;if(o){var r=this.isProccessedItemGroup(e);r&&(this.onItemChange({originalEvent:n,processedItem:e}),this.focusedItemInfo={index:-1,parentKey:e.key},this.onArrowDownKey(n))}else{var i=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(n,i),n.preventDefault()}},onHomeKey:function(n){this.changeFocusedItemIndex(n,this.findFirstItemIndex()),n.preventDefault()},onEndKey:function(n){this.changeFocusedItemIndex(n,this.findLastItemIndex()),n.preventDefault()},onEnterKey:function(n){if(this.focusedItemInfo.index!==-1){var e=K.findSingle(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),o=e&&K.findSingle(e,'a[data-pc-section="action"]');o?o.click():e&&e.click();var r=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(r);!i&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}n.preventDefault()},onSpaceKey:function(n){this.onEnterKey(n)},onEscapeKey:function(n){if(this.focusedItemInfo.level!==0){var e=this.focusedItemInfo;this.hide(n,!1),this.focusedItemInfo={index:Number(e.parentKey.split("_")[0]),level:0,parentKey:""}}n.preventDefault()},onTabKey:function(n){if(this.focusedItemInfo.index!==-1){var e=this.visibleItems[this.focusedItemInfo.index],o=this.isProccessedItemGroup(e);!o&&this.onItemChange({originalEvent:n,processedItem:e})}this.hide()},bindOutsideClickListener:function(){var n=this;this.outsideClickListener||(this.outsideClickListener=function(e){var o=n.container&&!n.container.contains(e.target),r=!(n.target&&(n.target===e.target||n.target.contains(e.target)));o&&r&&n.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener:function(){var n=this;this.resizeListener||(this.resizeListener=function(e){K.isTouchDevice()||n.hide(e,!0),n.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var n=this;if(!this.matchMediaListener){var e=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=e,this.queryMatches=e.matches,this.matchMediaListener=function(){n.queryMatches=e.matches,n.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(n){var e;return this.isValidItem(n)&&((e=this.getProccessedItemLabel(n))===null||e===void 0?void 0:e.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(n){return!!n&&!this.isItemDisabled(n.item)&&!this.isItemSeparator(n.item)},isValidSelectedItem:function(n){return this.isValidItem(n)&&this.isSelected(n)},isSelected:function(n){return this.activeItemPath.some(function(e){return e.key===n.key})},findFirstItemIndex:function(){var n=this;return this.visibleItems.findIndex(function(e){return n.isValidItem(e)})},findLastItemIndex:function(){var n=this;return L.findLastIndex(this.visibleItems,function(e){return n.isValidItem(e)})},findNextItemIndex:function(n){var e=this,o=n<this.visibleItems.length-1?this.visibleItems.slice(n+1).findIndex(function(r){return e.isValidItem(r)}):-1;return o>-1?o+n+1:n},findPrevItemIndex:function(n){var e=this,o=n>0?L.findLastIndex(this.visibleItems.slice(0,n),function(r){return e.isValidItem(r)}):-1;return o>-1?o:n},findSelectedItemIndex:function(){var n=this;return this.visibleItems.findIndex(function(e){return n.isValidSelectedItem(e)})},findFirstFocusedItemIndex:function(){var n=this.findSelectedItemIndex();return n<0?this.findFirstItemIndex():n},findLastFocusedItemIndex:function(){var n=this.findSelectedItemIndex();return n<0?this.findLastItemIndex():n},searchItems:function(n,e){var o=this;this.searchValue=(this.searchValue||"")+e;var r=-1,i=!1;return this.focusedItemInfo.index!==-1?(r=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(a){return o.isItemMatched(a)}),r=r===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(a){return o.isItemMatched(a)}):r+this.focusedItemInfo.index):r=this.visibleItems.findIndex(function(a){return o.isItemMatched(a)}),r!==-1&&(i=!0),r===-1&&this.focusedItemInfo.index===-1&&(r=this.findFirstFocusedItemIndex()),r!==-1&&this.changeFocusedItemIndex(n,r),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){o.searchValue="",o.searchTimeout=null},500),i},changeFocusedItemIndex:function(n,e){this.focusedItemInfo.index!==e&&(this.focusedItemInfo.index=e,this.scrollInView())},scrollInView:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,e=n!==-1?"".concat(this.id,"_").concat(n):this.focusedItemId,o=K.findSingle(this.menubar,'li[id="'.concat(e,'"]'));o&&o.scrollIntoView&&o.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(n){var e=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",a=[];return n&&n.forEach(function(s,c){var l=(i!==""?i+"_":"")+c,u={item:s,index:c,level:o,key:l,parent:r,parentKey:i};u.items=e.createProcessedItems(s.items,o+1,u,l),a.push(u)}),a},containerRef:function(n){this.container=n},menubarRef:function(n){this.menubar=n?n.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var n=this,e=this.activeItemPath.find(function(o){return o.key===n.focusedItemInfo.parentKey});return e?e.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index!==-1?"".concat(this.id).concat(L.isNotEmpty(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{MenubarSub:wu,BarsIcon:yu}};function zo(t){"@babel/helpers - typeof";return zo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},zo(t)}function sc(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,o)}return e}function cc(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?sc(Object(e),!0).forEach(function(o){my(t,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):sc(Object(e)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))})}return t}function my(t,n,e){return n=gy(n),n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function gy(t){var n=by(t,"string");return zo(n)=="symbol"?n:String(n)}function by(t,n){if(zo(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var o=e.call(t,n||"default");if(zo(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}var vy=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function yy(t,n,e,o,r,i){var a=Be("BarsIcon"),s=Be("MenubarSub");return C(),B("div",S({ref:i.containerRef,class:t.cx("root")},t.ptmi("root")),[t.$slots.start?(C(),B("div",S({key:0,class:t.cx("start")},t.ptm("start")),[de(t.$slots,"start")],16)):re("",!0),de(t.$slots,"menubutton",{id:r.id,class:ze(t.cx("button")),toggleCallback:function(l){return i.menuButtonClick(l)}},function(){var c;return[t.model&&t.model.length>0?(C(),B("a",S({key:0,ref:"menubutton",role:"button",tabindex:"0",class:t.cx("button"),"aria-haspopup":!!(t.model.length&&t.model.length>0),"aria-expanded":r.mobileActive,"aria-controls":r.id,"aria-label":(c=t.$primevue.config.locale.aria)===null||c===void 0?void 0:c.navigation,onClick:n[0]||(n[0]=function(l){return i.menuButtonClick(l)}),onKeydown:n[1]||(n[1]=function(l){return i.menuButtonKeydown(l)})},cc(cc({},t.buttonProps),t.ptm("button"))),[de(t.$slots,"menubuttonicon",{},function(){return[he(a,rd(Ul(t.ptm("menubuttonicon"))),null,16)]})],16,vy)):re("",!0)]}),he(s,{ref:i.menubarRef,id:r.id,role:"menubar",items:i.processedItems,templates:t.$slots,root:!0,mobileActive:r.mobileActive,tabindex:"0","aria-activedescendant":r.focused?i.focusedItemId:void 0,menuId:r.id,focusedItemId:r.focused?i.focusedItemId:void 0,activeItemPath:r.activeItemPath,level:0,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,pt:t.pt,unstyled:t.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter,onItemMousemove:i.onItemMouseMove},null,8,["id","items","templates","mobileActive","aria-activedescendant","menuId","focusedItemId","activeItemPath","aria-labelledby","aria-label","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"]),t.$slots.end?(C(),B("div",S({key:1,class:t.cx("end")},t.ptm("end")),[de(t.$slots,"end")],16)):re("",!0)],16)}xu.render=yy;const ky={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;","&":"&amp;"};let wy=0;var xy=t=>t.replace(/[<>"&]/g,n=>ky[n]||n),Cy=t=>t+wy++;const pt={},_y=t=>{const{name:n,paths:e=[],d:o,polygons:r=[],points:i}=t;o&&e.push({d:o}),i&&r.push({points:i}),pt[n]=Object.assign({},t,{paths:e,polygons:r}),pt[n].minX||(pt[n].minX=0),pt[n].minY||(pt[n].minY=0)},Sy=(...t)=>{for(const n of t)_y(n)},Iy=wa({name:"OhVueIcon",props:{name:{type:String,validator:t=>!t||t in pt||(console.warn(`Invalid prop: prop "name" is referring to an unregistered icon "${t}".
Please make sure you have imported this icon before using it.`),!1)},title:String,fill:String,scale:{type:[Number,String],default:1},animation:{validator:t=>["spin","spin-pulse","wrench","ring","pulse","flash","float"].includes(t)},hover:Boolean,flip:{validator:t=>["horizontal","vertical","both"].includes(t)},speed:{validator:t=>t==="fast"||t==="slow"},label:String,inverse:Boolean},setup(t){const n=Ee([]),e=kt({outerScale:1.2,x:null,y:null}),o=kt({width:0,height:0}),r=Le(()=>{const v=Number(t.scale);return isNaN(v)||v<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),e.outerScale):v*e.outerScale}),i=Le(()=>({"ov-icon":!0,"ov-inverse":t.inverse,"ov-flip-horizontal":t.flip==="horizontal","ov-flip-vertical":t.flip==="vertical","ov-flip-both":t.flip==="both","ov-spin":t.animation==="spin","ov-spin-pulse":t.animation==="spin-pulse","ov-wrench":t.animation==="wrench","ov-ring":t.animation==="ring","ov-pulse":t.animation==="pulse","ov-flash":t.animation==="flash","ov-float":t.animation==="float","ov-hover":t.hover,"ov-fast":t.speed==="fast","ov-slow":t.speed==="slow"})),a=Le(()=>t.name?pt[t.name]:null),s=Le(()=>a.value?`${a.value.minX} ${a.value.minY} ${a.value.width} ${a.value.height}`:`0 0 ${l.value} ${u.value}`),c=Le(()=>{if(!a.value)return 1;const{width:v,height:b}=a.value;return Math.max(v,b)/16}),l=Le(()=>o.width||a.value&&a.value.width/c.value*r.value||0),u=Le(()=>o.height||a.value&&a.value.height/c.value*r.value||0),d=Le(()=>r.value!==1&&{fontSize:r.value+"em"}),p=Le(()=>{if(!a.value||!a.value.raw)return null;const v={};let b=a.value.raw;return b=b.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,(y,w,$)=>{const O=Cy("vat-");return v[$]=O,` id="${O}"`}),b=b.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(y,w,$,O)=>{const W=w||O;return W&&v[W]?`#${v[W]}`:y}),b}),f=Le(()=>a.value&&a.value.attr?a.value.attr:{}),g=()=>{if(!t.name&&t.name!==null&&n.value.length===0)return void console.warn('Invalid prop: prop "name" is required.');if(a.value)return;let v=0,b=0;n.value.forEach(y=>{y.outerScale=r.value,v=Math.max(v,y.width),b=Math.max(b,y.height)}),o.width=v,o.height=b,n.value.forEach(y=>{y.x=(v-y.width)/2,y.y=(b-y.height)/2})};return Nr(()=>{g()}),Il(()=>{g()}),{...jd(e),children:n,icon:a,klass:i,style:d,width:l,height:u,box:s,attribs:f,raw:p}},created(){const t=this.$parent;t&&t.children&&t.children.push(this)},render(){const t=Object.assign({role:this.$attrs.role||(this.label||this.title?"img":null),"aria-label":this.label||null,"aria-hidden":!(this.label||this.title),width:this.width,height:this.height,viewBox:this.box},this.attribs);this.attribs.stroke?t.stroke=this.fill?this.fill:"currentColor":t.fill=this.fill?this.fill:"currentColor",this.x&&(t.x=this.x.toString()),this.y&&(t.y=this.y.toString());let n={class:this.klass,style:this.style};if(n=Object.assign(n,t),this.raw){const r=this.title?`<title>${xy(this.title)}</title>${this.raw}`:this.raw;n.innerHTML=r}const e=this.title?[zt("title",this.title)]:[],o=(r,i,a)=>zt(r,{...i,key:`${r}-${a}`});return zt("svg",n,this.raw?void 0:e.concat([this.$slots.default?this.$slots.default():this.icon?[...this.icon.paths.map((r,i)=>o("path",r,i)),...this.icon.polygons.map((r,i)=>o("polygon",r,i))]:[]]))}});function Oa(t,n){n===void 0&&(n={});var e=n.insertAt;if(t&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",e==="top"&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}Oa(`.ov-icon {
  display: inline-block;
  overflow: visible;
  vertical-align: -0.2em;
}
`);Oa(`/* ---------------- spin ---------------- */
.ov-spin:not(.ov-hover),
.ov-spin.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-spin {
  animation: ov-spin 1s linear infinite;
}

.ov-spin:not(.ov-hover).ov-fast,
.ov-spin.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-spin.ov-fast {
  animation: ov-spin 0.7s linear infinite;
}

.ov-spin:not(.ov-hover).ov-slow,
.ov-spin.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-spin.ov-slow {
  animation: ov-spin 2s linear infinite;
}

/* ---------------- spin-pulse ---------------- */

.ov-spin-pulse:not(.ov-hover),
.ov-spin-pulse.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-spin-pulse {
  animation: ov-spin 1s infinite steps(8);
}

.ov-spin-pulse:not(.ov-hover).ov-fast,
.ov-spin-pulse.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-spin-pulse.ov-fast {
  animation: ov-spin 0.7s infinite steps(8);
}

.ov-spin-pulse:not(.ov-hover).ov-slow,
.ov-spin-pulse.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-spin-pulse.ov-slow {
  animation: ov-spin 2s infinite steps(8);
}

@keyframes ov-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* ---------------- wrench ---------------- */
.ov-wrench:not(.ov-hover),
.ov-wrench.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-wrench {
  animation: ov-wrench 2.5s ease infinite;
}

.ov-wrench:not(.ov-hover).ov-fast,
.ov-wrench.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-wrench.ov-fast {
  animation: ov-wrench 1.2s ease infinite;
}

.ov-wrench:not(.ov-hover).ov-slow,
.ov-wrench.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-wrench.ov-slow {
  animation: ov-wrench 3.7s ease infinite;
}

@keyframes ov-wrench {
  0% {
    transform: rotate(-12deg);
  }

  8% {
    transform: rotate(12deg);
  }

  10%, 28%, 30%, 48%, 50%, 68% {
    transform: rotate(24deg);
  }

  18%, 20%, 38%, 40%, 58%, 60% {
    transform: rotate(-24deg);
  }

  75%, 100% {
    transform: rotate(0deg);
  }
}

/* ---------------- ring ---------------- */
.ov-ring:not(.ov-hover),
.ov-ring.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-ring {
  animation: ov-ring 2s ease infinite;
}

.ov-ring:not(.ov-hover).ov-fast,
.ov-ring.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-ring.ov-fast {
  animation: ov-ring 1s ease infinite;
}

.ov-ring:not(.ov-hover).ov-slow,
.ov-ring.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-ring.ov-slow {
  animation: ov-ring 3s ease infinite;
}

@keyframes ov-ring {
  0% {
    transform: rotate(-15deg);
  }

  2% {
    transform: rotate(15deg);
  }

  4%, 12% {
    transform: rotate(-18deg);
  }

  6% {
    transform: rotate(18deg);
  }

  8% {
    transform: rotate(-22deg);
  }

  10% {
    transform: rotate(22deg);
  }

  12% {
    transform: rotate(-18deg);
  }

  14% {
    transform: rotate(18deg);
  }

  16% {
    transform: rotate(-12deg);
  }

  18% {
    transform: rotate(12deg);
  }

  20%, 100% {
    transform: rotate(0deg);
  }
}

/* ---------------- pulse ---------------- */
.ov-pulse:not(.ov-hover),
.ov-pulse.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-pulse {
  animation: ov-pulse 2s linear infinite;
}

.ov-pulse:not(.ov-hover).ov-fast,
.ov-pulse.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-pulse.ov-fast {
  animation: ov-pulse 1s linear infinite;
}

.ov-pulse:not(.ov-hover).ov-slow,
.ov-pulse.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-pulse.ov-slow {
  animation: ov-pulse 3s linear infinite;
}

@keyframes ov-pulse {
  0% {
    transform: scale(1.1);
  }

  50% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1.1);
  }
}

/* ---------------- flash ---------------- */
.ov-flash:not(.ov-hover),
.ov-flash.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-flash {
  animation: ov-flash 2s ease infinite;
}

.ov-flash:not(.ov-hover).ov-fast,
.ov-flash.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-flash.ov-fast {
  animation: ov-flash 1s ease infinite;
}

.ov-flash:not(.ov-hover).ov-slow,
.ov-flash.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-flash.ov-slow {
  animation: ov-flash 3s ease infinite;
}

@keyframes ov-flash {
  0%, 100%, 50%{
    opacity: 1;
  }
  25%, 75%{
    opacity: 0;
  }
}

/* ---------------- float ---------------- */
.ov-float:not(.ov-hover),
.ov-float.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-float {
  animation: ov-float 2s linear infinite;
}

.ov-float:not(.ov-hover).ov-fast,
.ov-float.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-float.ov-fast {
  animation: ov-float 1s linear infinite;
}

.ov-float:not(.ov-hover).ov-slow,
.ov-float.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-float.ov-slow {
  animation: ov-float 3s linear infinite;
}

@keyframes ov-float {
  0%, 100% {
    transform: translateY(-3px);
  }
  50% {
    transform: translateY(3px);
  }
}
`);Oa(`.ov-flip-horizontal {
  transform: scale(-1, 1);
}

.ov-flip-vertical {
  transform: scale(1, -1);
}

.ov-flip-both {
  transform: scale(-1, -1);
}

.ov-inverse {
  color: #fff;
}
`);const $y={name:"bi-eye-slash",minX:-1.6,minY:-1.6,width:19.2,height:19.2,raw:'<path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 00-2.79.588l.77.771A5.944 5.944 0 018 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0114.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/><path d="M11.297 9.176a3.5 3.5 0 00-4.474-4.474l.823.823a2.5 2.5 0 012.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 01-4.474-4.474l.823.823a2.5 2.5 0 002.829 2.829z"/><path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 001.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 018 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884l-12-12 .708-.708 12 12-.708.708z"/>'},Py={name:"bi-eye",minX:-1.6,minY:-1.6,width:19.2,height:19.2,raw:'<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 011.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0114.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 011.172 8z"/><path d="M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM4.5 8a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"/>'},Ey={name:"bi-pencil-fill",minX:-1.6,minY:-1.6,width:19.2,height:19.2,raw:'<path d="M12.854.146a.5.5 0 00-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 000-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 01.5.5v.5h.5a.5.5 0 01.5.5v.5h.5a.5.5 0 01.5.5v.5h.5a.5.5 0 01.5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 016 13.5V13h-.5a.5.5 0 01-.5-.5V12h-.5a.5.5 0 01-.5-.5V11h-.5a.5.5 0 01-.5-.5V10h-.5a.499.499 0 01-.175-.032l-.179.178a.5.5 0 00-.11.168l-2 5a.5.5 0 00.65.65l5-2a.5.5 0 00.168-.11l.178-.178z"/>'},Ty={name:"gi-mushroom-cloud",minX:-35.84,minY:-35.84,width:583.68,height:583.68,raw:'<path d="M279.775 17.137c-18.823-.262-38.412 6.822-51.54 20.02l-5.858 5.89-6.535-5.127c-35.796-28.083-78.147-22.538-98.727 10.39l-3.465 5.547-6.398-1.357c-27.027-5.737-53.6 4.882-69.373 23.047-15.776 18.165-21.16 42.634-5.937 68.43l3.68 6.234-5.12 5.122c-7.12 7.122-9.71 16.235-8.956 26.824.753 10.59 5.242 22.277 12.04 31.98 6.8 9.705 15.853 17.3 24.67 20.634 8.82 3.333 16.93 3.112 25.68-2.877l6.626-4.538 5.48 5.868c18.752 20.07 63.427 19.456 81.504-9.315l4.967-7.906 7.91 4.96c9.652 6.05 21.095 6.628 32.078 3.243 10.983-3.384 21.017-10.924 26.445-19.56l8.34-13.272 7.707 13.648c5.984 10.6 21.754 20.7 39.238 24.517 17.485 3.818 35.716 1.47 46.955-7.793l7.116-5.863 5.96 7.036c13.405 15.834 34.384 19.713 51.292 15.234 8.453-2.24 15.61-6.562 20.1-11.894 4.49-5.332 6.64-11.394 5.548-19.36l-1.412-10.292 10.386-.317c14.28-.435 23.67-5.757 30.195-13.635 6.527-7.877 9.99-18.775 9.966-30.103-.05-22.658-12.994-45.11-39.104-48.66l-9.843-1.34 1.936-9.743c1.49-7.49-1.057-16.514-7.54-25.764-6.485-9.25-16.708-18.272-28.37-24.904-11.662-6.634-24.726-10.866-36.596-11.388-11.87-.522-22.266 2.385-30.62 9.863l-7.743 6.934-6.072-8.437c-10.336-14.36-27.786-21.715-46.61-21.976zm-23.13 207.613c-7.79 7.932-17.737 13.957-28.64 17.316-12.57 3.874-26.675 4.027-39.61-1.3-13.607 16.66-33.646 25.044-53.58 25.658a30.847 30.847 0 003.65 7.885c4.48 6.947 11.786 12.436 20.377 14.188 8.59 1.752 18.766.2 30.504-8.578l9.133-6.828 4.9 10.295c1.805 3.793 10.955 9.652 22.417 10.94 11.462 1.286 23.836-1.518 30.982-8.206l7.2-6.737 6.34 7.55c7.687 9.153 18.164 11.31 28.223 9.768 10.06-1.54 18.25-8.15 19.394-10.936l4.225-10.297 9.41 5.943c9.343 5.9 17.365 6.48 24.47 4.494 7.103-1.987 13.382-6.983 17.39-13.273 3.672-5.763 5.297-12.387 4.51-18.327-7.83-2.86-15.302-7.21-21.903-13.22-16.45 9.763-37.038 10.807-55.794 6.712-16.836-3.676-32.71-11.465-43.6-23.045zm5.767 80.373c-7.74 4.837-16.592 7.306-25.443 8.002v41.938c-39.484 1.013-74.942 4.618-102.22 10.093-16.214 3.255-29.515 7.07-39.53 11.844-5.01 2.387-9.234 4.994-12.69 8.406-3.454 3.412-6.343 8.197-6.343 13.75 0 5.553 2.866 10.328 6.313 13.75 3.447 3.422 7.682 6.03 12.688 8.438 10.01 4.818 23.314 8.72 39.53 12.03 20.218 4.13 44.93 7.244 72.438 9-15.85 21.005-36.292 38.707-56.937 50.438H364.5c-20.393-12.03-39.75-29.664-54.72-50.312 28.51-1.726 54.114-4.872 74.94-9.125 16.215-3.312 29.52-7.213 39.53-12.03 5.006-2.41 9.24-5.016 12.688-8.44 3.446-3.42 6.28-8.196 6.28-13.75 0-5.55-2.857-10.337-6.312-13.75-3.455-3.41-7.68-6.018-12.687-8.405-10.017-4.773-23.32-8.59-39.533-11.844-27.645-5.55-63.688-9.17-103.812-10.125v-40.776c-6.473-1.61-12.817-4.55-18.463-9.13zm19.12 68.596c38.834.986 73.608 4.558 99.468 9.75 15.31 3.072 27.538 6.774 35.156 10.405 3.81 1.815 6.438 3.64 7.625 4.813.298.293.28.317.408.468-.13.156-.123.188-.438.5-1.196 1.187-3.814 3.04-7.625 4.875-7.622 3.67-19.85 7.406-35.156 10.533-22.08 4.51-50.67 7.833-82.72 9.343-8.816-16.007-14.824-33.213-16.72-50.687zm-45.157.06c-1.88 17.484-8.158 34.644-17.28 50.533-31.217-1.555-59.056-4.838-80.657-9.25-15.308-3.127-27.534-6.863-35.157-10.532-3.81-1.833-6.428-3.686-7.624-4.874-.32-.318-.31-.344-.437-.5.126-.15.134-.17.436-.47 1.188-1.17 3.785-2.996 7.594-4.81 7.62-3.632 19.846-7.334 35.156-10.407 25.525-5.125 59.738-8.648 97.97-9.69z"/>'},Oy={name:"la-calendar-day-solid",minX:0,minY:0,width:32,height:32,raw:'<path d="M9 4v1H5v22h22V5h-4V4h-2v1H11V4zM7 7h2v1h2V7h10v1h2V7h2v2H7zm0 4h18v14H7zm6 2v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-5 3v4h4v-4zm-7 1v2h2v-2zm4 0v2h2v-2zm8 0v2h2v-2zM9 21v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z"/>'},Ay={name:"md-menu",minX:.48,minY:.48,width:23.04,height:23.04,raw:'<path fill="none" d="M0 0h24v24H0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>'},Wr=(t,n)=>{const e=t.__vccOpts||t;for(const[o,r]of n)e[o]=r;return e},By={};function Ly(t,n){const e=Be("RouterView");return C(),X(e)}const jy=Wr(By,[["render",Ly]]),Ry="modulepreload",Fy=function(t){return"/"+t},lc={},ln=function(n,e,o){let r=Promise.resolve();if(e&&e.length>0){const i=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.all(e.map(c=>{if(c=Fy(c),c in lc)return;lc[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(!!o)for(let f=i.length-1;f>=0;f--){const g=i[f];if(g.href===c&&(!l||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const p=document.createElement("link");if(p.rel=l?"stylesheet":Ry,l||(p.as="script",p.crossOrigin=""),p.href=c,s&&p.setAttribute("nonce",s),document.head.appendChild(p),l)return new Promise((f,g)=>{p.addEventListener("load",f),p.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}return r.then(()=>n()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})};/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Bt=typeof document<"u";function My(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ve=Object.assign;function di(t,n){const e={};for(const o in n){const r=n[o];e[o]=kn(r)?r.map(t):t(r)}return e}const ho=()=>{},kn=Array.isArray,Cu=/#/g,zy=/&/g,Dy=/\//g,Ny=/=/g,Vy=/\?/g,_u=/\+/g,Uy=/%5B/g,Ky=/%5D/g,Su=/%5E/g,Hy=/%60/g,Iu=/%7B/g,qy=/%7C/g,$u=/%7D/g,Wy=/%20/g;function Aa(t){return encodeURI(""+t).replace(qy,"|").replace(Uy,"[").replace(Ky,"]")}function Gy(t){return Aa(t).replace(Iu,"{").replace($u,"}").replace(Su,"^")}function Wi(t){return Aa(t).replace(_u,"%2B").replace(Wy,"+").replace(Cu,"%23").replace(zy,"%26").replace(Hy,"`").replace(Iu,"{").replace($u,"}").replace(Su,"^")}function Jy(t){return Wi(t).replace(Ny,"%3D")}function Zy(t){return Aa(t).replace(Cu,"%23").replace(Vy,"%3F")}function Yy(t){return t==null?"":Zy(t).replace(Dy,"%2F")}function Do(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Xy=/\/$/,Qy=t=>t.replace(Xy,"");function pi(t,n,e="/"){let o,r={},i="",a="";const s=n.indexOf("#");let c=n.indexOf("?");return s<c&&s>=0&&(c=-1),c>-1&&(o=n.slice(0,c),i=n.slice(c+1,s>-1?s:n.length),r=t(i)),s>-1&&(o=o||n.slice(0,s),a=n.slice(s,n.length)),o=ok(o??n,e),{fullPath:o+(i&&"?")+i+a,path:o,query:r,hash:Do(a)}}function ek(t,n){const e=n.query?t(n.query):"";return n.path+(e&&"?")+e+(n.hash||"")}function uc(t,n){return!n||!t.toLowerCase().startsWith(n.toLowerCase())?t:t.slice(n.length)||"/"}function nk(t,n,e){const o=n.matched.length-1,r=e.matched.length-1;return o>-1&&o===r&&Kt(n.matched[o],e.matched[r])&&Pu(n.params,e.params)&&t(n.query)===t(e.query)&&n.hash===e.hash}function Kt(t,n){return(t.aliasOf||t)===(n.aliasOf||n)}function Pu(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const e in t)if(!tk(t[e],n[e]))return!1;return!0}function tk(t,n){return kn(t)?dc(t,n):kn(n)?dc(n,t):t===n}function dc(t,n){return kn(n)?t.length===n.length&&t.every((e,o)=>e===n[o]):t.length===1&&t[0]===n}function ok(t,n){if(t.startsWith("/"))return t;if(!t)return n;const e=n.split("/"),o=t.split("/"),r=o[o.length-1];(r===".."||r===".")&&o.push("");let i=e.length-1,a,s;for(a=0;a<o.length;a++)if(s=o[a],s!==".")if(s==="..")i>1&&i--;else break;return e.slice(0,i).join("/")+"/"+o.slice(a).join("/")}var No;(function(t){t.pop="pop",t.push="push"})(No||(No={}));var mo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(mo||(mo={}));function rk(t){if(!t)if(Bt){const n=document.querySelector("base");t=n&&n.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Qy(t)}const ik=/^[^#]+#/;function ak(t,n){return t.replace(ik,"#")+n}function sk(t,n){const e=document.documentElement.getBoundingClientRect(),o=t.getBoundingClientRect();return{behavior:n.behavior,left:o.left-e.left-(n.left||0),top:o.top-e.top-(n.top||0)}}const Gr=()=>({left:window.scrollX,top:window.scrollY});function ck(t){let n;if("el"in t){const e=t.el,o=typeof e=="string"&&e.startsWith("#"),r=typeof e=="string"?o?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!r)return;n=sk(r,t)}else n=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function pc(t,n){return(history.state?history.state.position-n:-1)+t}const Gi=new Map;function lk(t,n){Gi.set(t,n)}function uk(t){const n=Gi.get(t);return Gi.delete(t),n}let dk=()=>location.protocol+"//"+location.host;function Eu(t,n){const{pathname:e,search:o,hash:r}=n,i=t.indexOf("#");if(i>-1){let s=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(s);return c[0]!=="/"&&(c="/"+c),uc(c,"")}return uc(e,t)+o+r}function pk(t,n,e,o){let r=[],i=[],a=null;const s=({state:p})=>{const f=Eu(t,location),g=e.value,v=n.value;let b=0;if(p){if(e.value=f,n.value=p,a&&a===g){a=null;return}b=v?p.position-v.position:0}else o(f);r.forEach(y=>{y(e.value,g,{delta:b,type:No.pop,direction:b?b>0?mo.forward:mo.back:mo.unknown})})};function c(){a=e.value}function l(p){r.push(p);const f=()=>{const g=r.indexOf(p);g>-1&&r.splice(g,1)};return i.push(f),f}function u(){const{history:p}=window;p.state&&p.replaceState(ve({},p.state,{scroll:Gr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:d}}function fc(t,n,e,o=!1,r=!1){return{back:t,current:n,forward:e,replaced:o,position:window.history.length,scroll:r?Gr():null}}function fk(t){const{history:n,location:e}=window,o={value:Eu(t,e)},r={value:n.state};r.value||i(o.value,{back:null,current:o.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const d=t.indexOf("#"),p=d>-1?(e.host&&document.querySelector("base")?t:t.slice(d))+c:dk()+t+c;try{n[u?"replaceState":"pushState"](l,"",p),r.value=l}catch(f){console.error(f),e[u?"replace":"assign"](p)}}function a(c,l){const u=ve({},n.state,fc(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),o.value=c}function s(c,l){const u=ve({},r.value,n.state,{forward:c,scroll:Gr()});i(u.current,u,!0);const d=ve({},fc(o.value,c,null),{position:u.position+1},l);i(c,d,!1),o.value=c}return{location:o,state:r,push:s,replace:a}}function hk(t){t=rk(t);const n=fk(t),e=pk(t,n.state,n.location,n.replace);function o(i,a=!0){a||e.pauseListeners(),history.go(i)}const r=ve({location:"",base:t,go:o,createHref:ak.bind(null,t)},n,e);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>n.state.value}),r}function mk(t){return typeof t=="string"||t&&typeof t=="object"}function Tu(t){return typeof t=="string"||typeof t=="symbol"}const zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ou=Symbol("");var hc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(hc||(hc={}));function Ht(t,n){return ve(new Error,{type:t,[Ou]:!0},n)}function En(t,n){return t instanceof Error&&Ou in t&&(n==null||!!(t.type&n))}const mc="[^/]+?",gk={sensitive:!1,strict:!1,start:!0,end:!0},bk=/[.+*?^${}()[\]/\\]/g;function vk(t,n){const e=ve({},gk,n),o=[];let r=e.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];e.strict&&!l.length&&(r+="/");for(let d=0;d<l.length;d++){const p=l[d];let f=40+(e.sensitive?.25:0);if(p.type===0)d||(r+="/"),r+=p.value.replace(bk,"\\$&"),f+=40;else if(p.type===1){const{value:g,repeatable:v,optional:b,regexp:y}=p;i.push({name:g,repeatable:v,optional:b});const w=y||mc;if(w!==mc){f+=10;try{new RegExp(`(${w})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${g}" (${w}): `+O.message)}}let $=v?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||($=b&&l.length<2?`(?:/${$})`:"/"+$),b&&($+="?"),r+=$,f+=20,b&&(f+=-8),v&&(f+=-20),w===".*"&&(f+=-50)}u.push(f)}o.push(u)}if(e.strict&&e.end){const l=o.length-1;o[l][o[l].length-1]+=.7000000000000001}e.strict||(r+="/?"),e.end?r+="$":e.strict&&(r+="(?:/|$)");const a=new RegExp(r,e.sensitive?"":"i");function s(l){const u=l.match(a),d={};if(!u)return null;for(let p=1;p<u.length;p++){const f=u[p]||"",g=i[p-1];d[g.name]=f&&g.repeatable?f.split("/"):f}return d}function c(l){let u="",d=!1;for(const p of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const f of p)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:v,optional:b}=f,y=g in l?l[g]:"";if(kn(y)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const w=kn(y)?y.join("/"):y;if(!w)if(b)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=w}}return u||"/"}return{re:a,score:o,keys:i,parse:s,stringify:c}}function yk(t,n){let e=0;for(;e<t.length&&e<n.length;){const o=n[e]-t[e];if(o)return o;e++}return t.length<n.length?t.length===1&&t[0]===80?-1:1:t.length>n.length?n.length===1&&n[0]===80?1:-1:0}function kk(t,n){let e=0;const o=t.score,r=n.score;for(;e<o.length&&e<r.length;){const i=yk(o[e],r[e]);if(i)return i;e++}if(Math.abs(r.length-o.length)===1){if(gc(o))return 1;if(gc(r))return-1}return r.length-o.length}function gc(t){const n=t[t.length-1];return t.length>0&&n[n.length-1]<0}const wk={type:0,value:""},xk=/[a-zA-Z0-9_]/;function Ck(t){if(!t)return[[]];if(t==="/")return[[wk]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function n(f){throw new Error(`ERR (${e})/"${l}": ${f}`)}let e=0,o=e;const r=[];let i;function a(){i&&r.push(i),i=[]}let s=0,c,l="",u="";function d(){l&&(e===0?i.push({type:0,value:l}):e===1||e===2||e===3?(i.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;s<t.length;){if(c=t[s++],c==="\\"&&e!==2){o=e,e=4;continue}switch(e){case 0:c==="/"?(l&&d(),a()):c===":"?(d(),e=1):p();break;case 4:p(),e=o;break;case 1:c==="("?e=2:xk.test(c)?p():(d(),e=0,c!=="*"&&c!=="?"&&c!=="+"&&s--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:e=3:u+=c;break;case 3:d(),e=0,c!=="*"&&c!=="?"&&c!=="+"&&s--,u="";break;default:n("Unknown state");break}}return e===2&&n(`Unfinished custom RegExp for param "${l}"`),d(),a(),r}function _k(t,n,e){const o=vk(Ck(t.path),e),r=ve(o,{record:t,parent:n,children:[],alias:[]});return n&&!r.record.aliasOf==!n.record.aliasOf&&n.children.push(r),r}function Sk(t,n){const e=[],o=new Map;n=yc({strict:!1,end:!0,sensitive:!1},n);function r(u){return o.get(u)}function i(u,d,p){const f=!p,g=Ik(u);g.aliasOf=p&&p.record;const v=yc(n,u),b=[g];if("alias"in u){const $=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of $)b.push(ve({},g,{components:p?p.record.components:g.components,path:O,aliasOf:p?p.record:g}))}let y,w;for(const $ of b){const{path:O}=$;if(d&&O[0]!=="/"){const W=d.record.path,N=W[W.length-1]==="/"?"":"/";$.path=d.record.path+(O&&N+O)}if(y=_k($,d,v),p?p.alias.push(y):(w=w||y,w!==y&&w.alias.push(y),f&&u.name&&!vc(y)&&a(u.name)),g.children){const W=g.children;for(let N=0;N<W.length;N++)i(W[N],y,p&&p.children[N])}p=p||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&c(y)}return w?()=>{a(w)}:ho}function a(u){if(Tu(u)){const d=o.get(u);d&&(o.delete(u),e.splice(e.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=e.indexOf(u);d>-1&&(e.splice(d,1),u.record.name&&o.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function s(){return e}function c(u){let d=0;for(;d<e.length&&kk(u,e[d])>=0&&(u.record.path!==e[d].record.path||!Au(u,e[d]));)d++;e.splice(d,0,u),u.record.name&&!vc(u)&&o.set(u.record.name,u)}function l(u,d){let p,f={},g,v;if("name"in u&&u.name){if(p=o.get(u.name),!p)throw Ht(1,{location:u});v=p.record.name,f=ve(bc(d.params,p.keys.filter(w=>!w.optional).concat(p.parent?p.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),u.params&&bc(u.params,p.keys.map(w=>w.name))),g=p.stringify(f)}else if(u.path!=null)g=u.path,p=e.find(w=>w.re.test(g)),p&&(f=p.parse(g),v=p.record.name);else{if(p=d.name?o.get(d.name):e.find(w=>w.re.test(d.path)),!p)throw Ht(1,{location:u,currentLocation:d});v=p.record.name,f=ve({},d.params,u.params),g=p.stringify(f)}const b=[];let y=p;for(;y;)b.unshift(y.record),y=y.parent;return{name:v,path:g,params:f,matched:b,meta:Pk(b)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:a,getRoutes:s,getRecordMatcher:r}}function bc(t,n){const e={};for(const o of n)o in t&&(e[o]=t[o]);return e}function Ik(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:$k(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function $k(t){const n={},e=t.props||!1;if("component"in t)n.default=e;else for(const o in t.components)n[o]=typeof e=="object"?e[o]:e;return n}function vc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Pk(t){return t.reduce((n,e)=>ve(n,e.meta),{})}function yc(t,n){const e={};for(const o in t)e[o]=o in n?n[o]:t[o];return e}function Au(t,n){return n.children.some(e=>e===t||Au(t,e))}function Ek(t){const n={};if(t===""||t==="?")return n;const o=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<o.length;++r){const i=o[r].replace(_u," "),a=i.indexOf("="),s=Do(a<0?i:i.slice(0,a)),c=a<0?null:Do(i.slice(a+1));if(s in n){let l=n[s];kn(l)||(l=n[s]=[l]),l.push(c)}else n[s]=c}return n}function kc(t){let n="";for(let e in t){const o=t[e];if(e=Jy(e),o==null){o!==void 0&&(n+=(n.length?"&":"")+e);continue}(kn(o)?o.map(i=>i&&Wi(i)):[o&&Wi(o)]).forEach(i=>{i!==void 0&&(n+=(n.length?"&":"")+e,i!=null&&(n+="="+i))})}return n}function Tk(t){const n={};for(const e in t){const o=t[e];o!==void 0&&(n[e]=kn(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return n}const Ok=Symbol(""),wc=Symbol(""),Jr=Symbol(""),Bu=Symbol(""),Ji=Symbol("");function Qt(){let t=[];function n(o){return t.push(o),()=>{const r=t.indexOf(o);r>-1&&t.splice(r,1)}}function e(){t=[]}return{add:n,list:()=>t.slice(),reset:e}}function Hn(t,n,e,o,r,i=a=>a()){const a=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((s,c)=>{const l=p=>{p===!1?c(Ht(4,{from:e,to:n})):p instanceof Error?c(p):mk(p)?c(Ht(2,{from:n,to:p})):(a&&o.enterCallbacks[r]===a&&typeof p=="function"&&a.push(p),s())},u=i(()=>t.call(o&&o.instances[r],n,e,l));let d=Promise.resolve(u);t.length<3&&(d=d.then(l)),d.catch(p=>c(p))})}function fi(t,n,e,o,r=i=>i()){const i=[];for(const a of t)for(const s in a.components){let c=a.components[s];if(!(n!=="beforeRouteEnter"&&!a.instances[s]))if(Ak(c)){const u=(c.__vccOpts||c)[n];u&&i.push(Hn(u,e,o,a,s,r))}else{let l=c();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${a.path}"`));const d=My(u)?u.default:u;a.components[s]=d;const f=(d.__vccOpts||d)[n];return f&&Hn(f,e,o,a,s,r)()}))}}return i}function Ak(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function xc(t){const n=$n(Jr),e=$n(Bu),o=Le(()=>{const c=_e(t.to);return n.resolve(c)}),r=Le(()=>{const{matched:c}=o.value,{length:l}=c,u=c[l-1],d=e.matched;if(!u||!d.length)return-1;const p=d.findIndex(Kt.bind(null,u));if(p>-1)return p;const f=Cc(c[l-2]);return l>1&&Cc(u)===f&&d[d.length-1].path!==f?d.findIndex(Kt.bind(null,c[l-2])):p}),i=Le(()=>r.value>-1&&Rk(e.params,o.value.params)),a=Le(()=>r.value>-1&&r.value===e.matched.length-1&&Pu(e.params,o.value.params));function s(c={}){return jk(c)?n[_e(t.replace)?"replace":"push"](_e(t.to)).catch(ho):Promise.resolve()}return{route:o,href:Le(()=>o.value.href),isActive:i,isExactActive:a,navigate:s}}const Bk=wa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xc,setup(t,{slots:n}){const e=kt(xc(t)),{options:o}=$n(Jr),r=Le(()=>({[_c(t.activeClass,o.linkActiveClass,"router-link-active")]:e.isActive,[_c(t.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const i=n.default&&n.default(e);return t.custom?i:zt("a",{"aria-current":e.isExactActive?t.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:r.value},i)}}}),Lk=Bk;function jk(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const n=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return t.preventDefault&&t.preventDefault(),!0}}function Rk(t,n){for(const e in n){const o=n[e],r=t[e];if(typeof o=="string"){if(o!==r)return!1}else if(!kn(r)||r.length!==o.length||o.some((i,a)=>i!==r[a]))return!1}return!0}function Cc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const _c=(t,n,e)=>t??n??e,Fk=wa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:n,slots:e}){const o=$n(Ji),r=Le(()=>t.route||o.value),i=$n(wc,0),a=Le(()=>{let l=_e(i);const{matched:u}=r.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),s=Le(()=>r.value.matched[a.value]);mr(wc,Le(()=>a.value+1)),mr(Ok,s),mr(Ji,r);const c=Ee();return Mt(()=>[c.value,s.value,t.name],([l,u,d],[p,f,g])=>{u&&(u.instances[d]=l,f&&f!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),l&&u&&(!f||!Kt(u,f)||!p)&&(u.enterCallbacks[d]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,d=s.value,p=d&&d.components[u];if(!p)return Sc(e.default,{Component:p,route:l});const f=d.props[u],g=f?f===!0?l.params:typeof f=="function"?f(l):f:null,b=zt(p,ve({},g,n,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return Sc(e.default,{Component:b,route:l})||b}}});function Sc(t,n){if(!t)return null;const e=t(n);return e.length===1?e[0]:e}const Mk=Fk;function zk(t){const n=Sk(t.routes,t),e=t.parseQuery||Ek,o=t.stringifyQuery||kc,r=t.history,i=Qt(),a=Qt(),s=Qt(),c=Ad(zn);let l=zn;Bt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=di.bind(null,_=>""+_),d=di.bind(null,Yy),p=di.bind(null,Do);function f(_,M){let j,U;return Tu(_)?(j=n.getRecordMatcher(_),U=M):U=_,n.addRoute(U,j)}function g(_){const M=n.getRecordMatcher(_);M&&n.removeRoute(M)}function v(){return n.getRoutes().map(_=>_.record)}function b(_){return!!n.getRecordMatcher(_)}function y(_,M){if(M=ve({},M||c.value),typeof _=="string"){const m=pi(e,_,M.path),k=n.resolve({path:m.path},M),I=r.createHref(m.fullPath);return ve(m,k,{params:p(k.params),hash:Do(m.hash),redirectedFrom:void 0,href:I})}let j;if(_.path!=null)j=ve({},_,{path:pi(e,_.path,M.path).path});else{const m=ve({},_.params);for(const k in m)m[k]==null&&delete m[k];j=ve({},_,{params:d(m)}),M.params=d(M.params)}const U=n.resolve(j,M),me=_.hash||"";U.params=u(p(U.params));const $e=ek(o,ve({},_,{hash:Gy(me),path:U.path})),h=r.createHref($e);return ve({fullPath:$e,hash:me,query:o===kc?Tk(_.query):_.query||{}},U,{redirectedFrom:void 0,href:h})}function w(_){return typeof _=="string"?pi(e,_,c.value.path):ve({},_)}function $(_,M){if(l!==_)return Ht(8,{from:M,to:_})}function O(_){return Q(_)}function W(_){return O(ve(w(_),{replace:!0}))}function N(_){const M=_.matched[_.matched.length-1];if(M&&M.redirect){const{redirect:j}=M;let U=typeof j=="function"?j(_):j;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=w(U):{path:U},U.params={}),ve({query:_.query,hash:_.hash,params:U.path!=null?{}:_.params},U)}}function Q(_,M){const j=l=y(_),U=c.value,me=_.state,$e=_.force,h=_.replace===!0,m=N(j);if(m)return Q(ve(w(m),{state:typeof m=="object"?ve({},me,m.state):me,force:$e,replace:h}),M||j);const k=j;k.redirectedFrom=M;let I;return!$e&&nk(o,U,j)&&(I=Ht(16,{to:k,from:U}),xn(U,U,!0,!1)),(I?Promise.resolve(I):ne(k,U)).catch(x=>En(x)?En(x,2)?x:wn(x):ce(x,k,U)).then(x=>{if(x){if(En(x,2))return Q(ve({replace:h},w(x.to),{state:typeof x.to=="object"?ve({},me,x.to.state):me,force:$e}),M||k)}else x=V(k,U,!0,h,me);return be(k,U,x),x})}function D(_,M){const j=$(_,M);return j?Promise.reject(j):Promise.resolve()}function ee(_){const M=It.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(_):_()}function ne(_,M){let j;const[U,me,$e]=Dk(_,M);j=fi(U.reverse(),"beforeRouteLeave",_,M);for(const m of U)m.leaveGuards.forEach(k=>{j.push(Hn(k,_,M))});const h=D.bind(null,_,M);return j.push(h),Ue(j).then(()=>{j=[];for(const m of i.list())j.push(Hn(m,_,M));return j.push(h),Ue(j)}).then(()=>{j=fi(me,"beforeRouteUpdate",_,M);for(const m of me)m.updateGuards.forEach(k=>{j.push(Hn(k,_,M))});return j.push(h),Ue(j)}).then(()=>{j=[];for(const m of $e)if(m.beforeEnter)if(kn(m.beforeEnter))for(const k of m.beforeEnter)j.push(Hn(k,_,M));else j.push(Hn(m.beforeEnter,_,M));return j.push(h),Ue(j)}).then(()=>(_.matched.forEach(m=>m.enterCallbacks={}),j=fi($e,"beforeRouteEnter",_,M,ee),j.push(h),Ue(j))).then(()=>{j=[];for(const m of a.list())j.push(Hn(m,_,M));return j.push(h),Ue(j)}).catch(m=>En(m,8)?m:Promise.reject(m))}function be(_,M,j){s.list().forEach(U=>ee(()=>U(_,M,j)))}function V(_,M,j,U,me){const $e=$(_,M);if($e)return $e;const h=M===zn,m=Bt?history.state:{};j&&(U||h?r.replace(_.fullPath,ve({scroll:h&&m&&m.scroll},me)):r.push(_.fullPath,me)),c.value=_,xn(_,M,j,h),wn()}let se;function Fe(){se||(se=r.listen((_,M,j)=>{if(!Wo.listening)return;const U=y(_),me=N(U);if(me){Q(ve(me,{replace:!0}),U).catch(ho);return}l=U;const $e=c.value;Bt&&lk(pc($e.fullPath,j.delta),Gr()),ne(U,$e).catch(h=>En(h,12)?h:En(h,2)?(Q(h.to,U).then(m=>{En(m,20)&&!j.delta&&j.type===No.pop&&r.go(-1,!1)}).catch(ho),Promise.reject()):(j.delta&&r.go(-j.delta,!1),ce(h,U,$e))).then(h=>{h=h||V(U,$e,!1),h&&(j.delta&&!En(h,8)?r.go(-j.delta,!1):j.type===No.pop&&En(h,20)&&r.go(-1,!1)),be(U,$e,h)}).catch(ho)}))}let en=Qt(),ye=Qt(),fe;function ce(_,M,j){wn(_);const U=ye.list();return U.length?U.forEach(me=>me(_,M,j)):console.error(_),Promise.reject(_)}function hn(){return fe&&c.value!==zn?Promise.resolve():new Promise((_,M)=>{en.add([_,M])})}function wn(_){return fe||(fe=!_,Fe(),en.list().forEach(([M,j])=>_?j(_):M()),en.reset()),_}function xn(_,M,j,U){const{scrollBehavior:me}=t;if(!Bt||!me)return Promise.resolve();const $e=!j&&uk(pc(_.fullPath,0))||(U||!j)&&history.state&&history.state.scroll||null;return jr().then(()=>me(_,M,$e)).then(h=>h&&ck(h)).catch(h=>ce(h,_,M))}const Je=_=>r.go(_);let St;const It=new Set,Wo={currentRoute:c,listening:!0,addRoute:f,removeRoute:g,hasRoute:b,getRoutes:v,resolve:y,options:t,push:O,replace:W,go:Je,back:()=>Je(-1),forward:()=>Je(1),beforeEach:i.add,beforeResolve:a.add,afterEach:s.add,onError:ye.add,isReady:hn,install(_){const M=this;_.component("RouterLink",Lk),_.component("RouterView",Mk),_.config.globalProperties.$router=M,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>_e(c)}),Bt&&!St&&c.value===zn&&(St=!0,O(r.location).catch(me=>{}));const j={};for(const me in zn)Object.defineProperty(j,me,{get:()=>c.value[me],enumerable:!0});_.provide(Jr,M),_.provide(Bu,sl(j)),_.provide(Ji,c);const U=_.unmount;It.add(_),_.unmount=function(){It.delete(_),It.size<1&&(l=zn,se&&se(),se=null,c.value=zn,St=!1,fe=!1),U()}}};function Ue(_){return _.reduce((M,j)=>M.then(()=>ee(j)),Promise.resolve())}return Wo}function Dk(t,n){const e=[],o=[],r=[],i=Math.max(n.matched.length,t.matched.length);for(let a=0;a<i;a++){const s=n.matched[a];s&&(t.matched.find(l=>Kt(l,s))?o.push(s):e.push(s));const c=t.matched[a];c&&(n.matched.find(l=>Kt(l,c))||r.push(c))}return[e,o,r]}function Lu(){return $n(Jr)}const Nk="/assets/fondo-5O3Z_0bn.png",Vk="/assets/calendar-ELdOVyUr.png",Uk=t=>{let n;return t?n=t:typeof fetch>"u"?n=(...e)=>ln(()=>Promise.resolve().then(()=>qo),void 0).then(({default:o})=>o(...e)):n=fetch,(...e)=>n(...e)};class Ba extends Error{constructor(n,e="FunctionsError",o){super(n),this.name=e,this.context=o}}class Kk extends Ba{constructor(n){super("Failed to send a request to the Edge Function","FunctionsFetchError",n)}}class Hk extends Ba{constructor(n){super("Relay Error invoking the Edge Function","FunctionsRelayError",n)}}class qk extends Ba{constructor(n){super("Edge Function returned a non-2xx status code","FunctionsHttpError",n)}}var Zi;(function(t){t.Any="any",t.ApNortheast1="ap-northeast-1",t.ApNortheast2="ap-northeast-2",t.ApSouth1="ap-south-1",t.ApSoutheast1="ap-southeast-1",t.ApSoutheast2="ap-southeast-2",t.CaCentral1="ca-central-1",t.EuCentral1="eu-central-1",t.EuWest1="eu-west-1",t.EuWest2="eu-west-2",t.EuWest3="eu-west-3",t.SaEast1="sa-east-1",t.UsEast1="us-east-1",t.UsWest1="us-west-1",t.UsWest2="us-west-2"})(Zi||(Zi={}));var Wk=function(t,n,e,o){function r(i){return i instanceof e?i:new e(function(a){a(i)})}return new(e||(e=Promise))(function(i,a){function s(u){try{l(o.next(u))}catch(d){a(d)}}function c(u){try{l(o.throw(u))}catch(d){a(d)}}function l(u){u.done?i(u.value):r(u.value).then(s,c)}l((o=o.apply(t,n||[])).next())})};class Gk{constructor(n,{headers:e={},customFetch:o,region:r=Zi.Any}={}){this.url=n,this.headers=e,this.region=r,this.fetch=Uk(o)}setAuth(n){this.headers.Authorization=`Bearer ${n}`}invoke(n,e={}){var o;return Wk(this,void 0,void 0,function*(){try{const{headers:r,method:i,body:a}=e;let s={},{region:c}=e;c||(c=this.region),c&&c!=="any"&&(s["x-region"]=c);let l;a&&(r&&!Object.prototype.hasOwnProperty.call(r,"Content-Type")||!r)&&(typeof Blob<"u"&&a instanceof Blob||a instanceof ArrayBuffer?(s["Content-Type"]="application/octet-stream",l=a):typeof a=="string"?(s["Content-Type"]="text/plain",l=a):typeof FormData<"u"&&a instanceof FormData?l=a:(s["Content-Type"]="application/json",l=JSON.stringify(a)));const u=yield this.fetch(`${this.url}/${n}`,{method:i||"POST",headers:Object.assign(Object.assign(Object.assign({},s),this.headers),r),body:l}).catch(g=>{throw new Kk(g)}),d=u.headers.get("x-relay-error");if(d&&d==="true")throw new Hk(u);if(!u.ok)throw new qk(u);let p=((o=u.headers.get("Content-Type"))!==null&&o!==void 0?o:"text/plain").split(";")[0].trim(),f;return p==="application/json"?f=yield u.json():p==="application/octet-stream"?f=yield u.blob():p==="text/event-stream"?f=u:p==="multipart/form-data"?f=yield u.formData():f=yield u.text(),{data:f,error:null}}catch(r){return{data:null,error:r}}})}}var Jk=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},qt=Jk();const Zk=qt.fetch,La=qt.fetch.bind(qt),ju=qt.Headers,Yk=qt.Request,Xk=qt.Response,qo=Object.freeze(Object.defineProperty({__proto__:null,Headers:ju,Request:Yk,Response:Xk,default:La,fetch:Zk},Symbol.toStringTag,{value:"Module"}));class Qk extends Error{constructor(n){super(n.message),this.name="PostgrestError",this.details=n.details,this.hint=n.hint,this.code=n.code}}class ew{constructor(n){this.shouldThrowOnError=!1,this.method=n.method,this.url=n.url,this.headers=n.headers,this.schema=n.schema,this.body=n.body,this.shouldThrowOnError=n.shouldThrowOnError,this.signal=n.signal,this.isMaybeSingle=n.isMaybeSingle,n.fetch?this.fetch=n.fetch:typeof fetch>"u"?this.fetch=La:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}then(n,e){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const o=this.fetch;let r=o(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async i=>{var a,s,c;let l=null,u=null,d=null,p=i.status,f=i.statusText;if(i.ok){if(this.method!=="HEAD"){const y=await i.text();y===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?u=y:u=JSON.parse(y))}const v=(a=this.headers.Prefer)===null||a===void 0?void 0:a.match(/count=(exact|planned|estimated)/),b=(s=i.headers.get("content-range"))===null||s===void 0?void 0:s.split("/");v&&b&&b.length>1&&(d=parseInt(b[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(u)&&(u.length>1?(l={code:"PGRST116",details:`Results contain ${u.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},u=null,d=null,p=406,f="Not Acceptable"):u.length===1?u=u[0]:u=null)}else{const v=await i.text();try{l=JSON.parse(v),Array.isArray(l)&&i.status===404&&(u=[],l=null,p=200,f="OK")}catch{i.status===404&&v===""?(p=204,f="No Content"):l={message:v}}if(l&&this.isMaybeSingle&&(!((c=l==null?void 0:l.details)===null||c===void 0)&&c.includes("0 rows"))&&(l=null,p=200,f="OK"),l&&this.shouldThrowOnError)throw new Qk(l)}return{error:l,data:u,count:d,status:p,statusText:f}});return this.shouldThrowOnError||(r=r.catch(i=>{var a,s,c;return{error:{message:`${(a=i==null?void 0:i.name)!==null&&a!==void 0?a:"FetchError"}: ${i==null?void 0:i.message}`,details:`${(s=i==null?void 0:i.stack)!==null&&s!==void 0?s:""}`,hint:"",code:`${(c=i==null?void 0:i.code)!==null&&c!==void 0?c:""}`},data:null,count:null,status:0,statusText:""}})),r.then(n,e)}}class nw extends ew{select(n){let e=!1;const o=(n??"*").split("").map(r=>/\s/.test(r)&&!e?"":(r==='"'&&(e=!e),r)).join("");return this.url.searchParams.set("select",o),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(n,{ascending:e=!0,nullsFirst:o,foreignTable:r,referencedTable:i=r}={}){const a=i?`${i}.order`:"order",s=this.url.searchParams.get(a);return this.url.searchParams.set(a,`${s?`${s},`:""}${n}.${e?"asc":"desc"}${o===void 0?"":o?".nullsfirst":".nullslast"}`),this}limit(n,{foreignTable:e,referencedTable:o=e}={}){const r=typeof o>"u"?"limit":`${o}.limit`;return this.url.searchParams.set(r,`${n}`),this}range(n,e,{foreignTable:o,referencedTable:r=o}={}){const i=typeof r>"u"?"offset":`${r}.offset`,a=typeof r>"u"?"limit":`${r}.limit`;return this.url.searchParams.set(i,`${n}`),this.url.searchParams.set(a,`${e-n+1}`),this}abortSignal(n){return this.signal=n,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:n=!1,verbose:e=!1,settings:o=!1,buffers:r=!1,wal:i=!1,format:a="text"}={}){var s;const c=[n?"analyze":null,e?"verbose":null,o?"settings":null,r?"buffers":null,i?"wal":null].filter(Boolean).join("|"),l=(s=this.headers.Accept)!==null&&s!==void 0?s:"application/json";return this.headers.Accept=`application/vnd.pgrst.plan+${a}; for="${l}"; options=${c};`,a==="json"?this:this}rollback(){var n;return((n=this.headers.Prefer)!==null&&n!==void 0?n:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}}class Lt extends nw{eq(n,e){return this.url.searchParams.append(n,`eq.${e}`),this}neq(n,e){return this.url.searchParams.append(n,`neq.${e}`),this}gt(n,e){return this.url.searchParams.append(n,`gt.${e}`),this}gte(n,e){return this.url.searchParams.append(n,`gte.${e}`),this}lt(n,e){return this.url.searchParams.append(n,`lt.${e}`),this}lte(n,e){return this.url.searchParams.append(n,`lte.${e}`),this}like(n,e){return this.url.searchParams.append(n,`like.${e}`),this}likeAllOf(n,e){return this.url.searchParams.append(n,`like(all).{${e.join(",")}}`),this}likeAnyOf(n,e){return this.url.searchParams.append(n,`like(any).{${e.join(",")}}`),this}ilike(n,e){return this.url.searchParams.append(n,`ilike.${e}`),this}ilikeAllOf(n,e){return this.url.searchParams.append(n,`ilike(all).{${e.join(",")}}`),this}ilikeAnyOf(n,e){return this.url.searchParams.append(n,`ilike(any).{${e.join(",")}}`),this}is(n,e){return this.url.searchParams.append(n,`is.${e}`),this}in(n,e){const o=Array.from(new Set(e)).map(r=>typeof r=="string"&&new RegExp("[,()]").test(r)?`"${r}"`:`${r}`).join(",");return this.url.searchParams.append(n,`in.(${o})`),this}contains(n,e){return typeof e=="string"?this.url.searchParams.append(n,`cs.${e}`):Array.isArray(e)?this.url.searchParams.append(n,`cs.{${e.join(",")}}`):this.url.searchParams.append(n,`cs.${JSON.stringify(e)}`),this}containedBy(n,e){return typeof e=="string"?this.url.searchParams.append(n,`cd.${e}`):Array.isArray(e)?this.url.searchParams.append(n,`cd.{${e.join(",")}}`):this.url.searchParams.append(n,`cd.${JSON.stringify(e)}`),this}rangeGt(n,e){return this.url.searchParams.append(n,`sr.${e}`),this}rangeGte(n,e){return this.url.searchParams.append(n,`nxl.${e}`),this}rangeLt(n,e){return this.url.searchParams.append(n,`sl.${e}`),this}rangeLte(n,e){return this.url.searchParams.append(n,`nxr.${e}`),this}rangeAdjacent(n,e){return this.url.searchParams.append(n,`adj.${e}`),this}overlaps(n,e){return typeof e=="string"?this.url.searchParams.append(n,`ov.${e}`):this.url.searchParams.append(n,`ov.{${e.join(",")}}`),this}textSearch(n,e,{config:o,type:r}={}){let i="";r==="plain"?i="pl":r==="phrase"?i="ph":r==="websearch"&&(i="w");const a=o===void 0?"":`(${o})`;return this.url.searchParams.append(n,`${i}fts${a}.${e}`),this}match(n){return Object.entries(n).forEach(([e,o])=>{this.url.searchParams.append(e,`eq.${o}`)}),this}not(n,e,o){return this.url.searchParams.append(n,`not.${e}.${o}`),this}or(n,{foreignTable:e,referencedTable:o=e}={}){const r=o?`${o}.or`:"or";return this.url.searchParams.append(r,`(${n})`),this}filter(n,e,o){return this.url.searchParams.append(n,`${e}.${o}`),this}}class tw{constructor(n,{headers:e={},schema:o,fetch:r}){this.url=n,this.headers=e,this.schema=o,this.fetch=r}select(n,{head:e=!1,count:o}={}){const r=e?"HEAD":"GET";let i=!1;const a=(n??"*").split("").map(s=>/\s/.test(s)&&!i?"":(s==='"'&&(i=!i),s)).join("");return this.url.searchParams.set("select",a),o&&(this.headers.Prefer=`count=${o}`),new Lt({method:r,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(n,{count:e,defaultToNull:o=!0}={}){const r="POST",i=[];if(this.headers.Prefer&&i.push(this.headers.Prefer),e&&i.push(`count=${e}`),o||i.push("missing=default"),this.headers.Prefer=i.join(","),Array.isArray(n)){const a=n.reduce((s,c)=>s.concat(Object.keys(c)),[]);if(a.length>0){const s=[...new Set(a)].map(c=>`"${c}"`);this.url.searchParams.set("columns",s.join(","))}}return new Lt({method:r,url:this.url,headers:this.headers,schema:this.schema,body:n,fetch:this.fetch,allowEmpty:!1})}upsert(n,{onConflict:e,ignoreDuplicates:o=!1,count:r,defaultToNull:i=!0}={}){const a="POST",s=[`resolution=${o?"ignore":"merge"}-duplicates`];if(e!==void 0&&this.url.searchParams.set("on_conflict",e),this.headers.Prefer&&s.push(this.headers.Prefer),r&&s.push(`count=${r}`),i||s.push("missing=default"),this.headers.Prefer=s.join(","),Array.isArray(n)){const c=n.reduce((l,u)=>l.concat(Object.keys(u)),[]);if(c.length>0){const l=[...new Set(c)].map(u=>`"${u}"`);this.url.searchParams.set("columns",l.join(","))}}return new Lt({method:a,url:this.url,headers:this.headers,schema:this.schema,body:n,fetch:this.fetch,allowEmpty:!1})}update(n,{count:e}={}){const o="PATCH",r=[];return this.headers.Prefer&&r.push(this.headers.Prefer),e&&r.push(`count=${e}`),this.headers.Prefer=r.join(","),new Lt({method:o,url:this.url,headers:this.headers,schema:this.schema,body:n,fetch:this.fetch,allowEmpty:!1})}delete({count:n}={}){const e="DELETE",o=[];return n&&o.push(`count=${n}`),this.headers.Prefer&&o.unshift(this.headers.Prefer),this.headers.Prefer=o.join(","),new Lt({method:e,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}}const ow="1.15.2",rw={"X-Client-Info":`postgrest-js/${ow}`};class ja{constructor(n,{headers:e={},schema:o,fetch:r}={}){this.url=n,this.headers=Object.assign(Object.assign({},rw),e),this.schemaName=o,this.fetch=r}from(n){const e=new URL(`${this.url}/${n}`);return new tw(e,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(n){return new ja(this.url,{headers:this.headers,schema:n,fetch:this.fetch})}rpc(n,e={},{head:o=!1,get:r=!1,count:i}={}){let a;const s=new URL(`${this.url}/rpc/${n}`);let c;o||r?(a=o?"HEAD":"GET",Object.entries(e).filter(([u,d])=>d!==void 0).map(([u,d])=>[u,Array.isArray(d)?`{${d.join(",")}}`:`${d}`]).forEach(([u,d])=>{s.searchParams.append(u,d)})):(a="POST",c=e);const l=Object.assign({},this.headers);return i&&(l.Prefer=`count=${i}`),new Lt({method:a,url:s,headers:l,schema:this.schemaName,body:c,fetch:this.fetch,allowEmpty:!1})}}const iw="2.9.4",aw={"X-Client-Info":`realtime-js/${iw}`},sw="1.0.0",Ru=1e4,cw=1e3;var Nt;(function(t){t[t.connecting=0]="connecting",t[t.open=1]="open",t[t.closing=2]="closing",t[t.closed=3]="closed"})(Nt||(Nt={}));var tn;(function(t){t.closed="closed",t.errored="errored",t.joined="joined",t.joining="joining",t.leaving="leaving"})(tn||(tn={}));var vn;(function(t){t.close="phx_close",t.error="phx_error",t.join="phx_join",t.reply="phx_reply",t.leave="phx_leave",t.access_token="access_token"})(vn||(vn={}));var Yi;(function(t){t.websocket="websocket"})(Yi||(Yi={}));var ft;(function(t){t.Connecting="connecting",t.Open="open",t.Closing="closing",t.Closed="closed"})(ft||(ft={}));class Fu{constructor(n,e){this.callback=n,this.timerCalc=e,this.timer=void 0,this.tries=0,this.callback=n,this.timerCalc=e}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}class lw{constructor(){this.HEADER_LENGTH=1}decode(n,e){return n.constructor===ArrayBuffer?e(this._binaryDecode(n)):e(typeof n=="string"?JSON.parse(n):{})}_binaryDecode(n){const e=new DataView(n),o=new TextDecoder;return this._decodeBroadcast(n,e,o)}_decodeBroadcast(n,e,o){const r=e.getUint8(1),i=e.getUint8(2);let a=this.HEADER_LENGTH+2;const s=o.decode(n.slice(a,a+r));a=a+r;const c=o.decode(n.slice(a,a+i));a=a+i;const l=JSON.parse(o.decode(n.slice(a,n.byteLength)));return{ref:null,topic:s,event:c,payload:l}}}class hi{constructor(n,e,o={},r=Ru){this.channel=n,this.event=e,this.payload=o,this.timeout=r,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(n){this.timeout=n,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(n){this.payload=Object.assign(Object.assign({},this.payload),n)}receive(n,e){var o;return this._hasReceived(n)&&e((o=this.receivedResp)===null||o===void 0?void 0:o.response),this.recHooks.push({status:n,callback:e}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const n=e=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=e,this._matchReceive(e)};this.channel._on(this.refEvent,{},n),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(n,e){this.refEvent&&this.channel._trigger(this.refEvent,{status:n,response:e})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:n,response:e}){this.recHooks.filter(o=>o.status===n).forEach(o=>o.callback(e))}_hasReceived(n){return this.receivedResp&&this.receivedResp.status===n}}var Ic;(function(t){t.SYNC="sync",t.JOIN="join",t.LEAVE="leave"})(Ic||(Ic={}));class go{constructor(n,e){this.channel=n,this.state={},this.pendingDiffs=[],this.joinRef=null,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const o=(e==null?void 0:e.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(o.state,{},r=>{const{onJoin:i,onLeave:a,onSync:s}=this.caller;this.joinRef=this.channel._joinRef(),this.state=go.syncState(this.state,r,i,a),this.pendingDiffs.forEach(c=>{this.state=go.syncDiff(this.state,c,i,a)}),this.pendingDiffs=[],s()}),this.channel._on(o.diff,{},r=>{const{onJoin:i,onLeave:a,onSync:s}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(r):(this.state=go.syncDiff(this.state,r,i,a),s())}),this.onJoin((r,i,a)=>{this.channel._trigger("presence",{event:"join",key:r,currentPresences:i,newPresences:a})}),this.onLeave((r,i,a)=>{this.channel._trigger("presence",{event:"leave",key:r,currentPresences:i,leftPresences:a})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(n,e,o,r){const i=this.cloneDeep(n),a=this.transformState(e),s={},c={};return this.map(i,(l,u)=>{a[l]||(c[l]=u)}),this.map(a,(l,u)=>{const d=i[l];if(d){const p=u.map(b=>b.presence_ref),f=d.map(b=>b.presence_ref),g=u.filter(b=>f.indexOf(b.presence_ref)<0),v=d.filter(b=>p.indexOf(b.presence_ref)<0);g.length>0&&(s[l]=g),v.length>0&&(c[l]=v)}else s[l]=u}),this.syncDiff(i,{joins:s,leaves:c},o,r)}static syncDiff(n,e,o,r){const{joins:i,leaves:a}={joins:this.transformState(e.joins),leaves:this.transformState(e.leaves)};return o||(o=()=>{}),r||(r=()=>{}),this.map(i,(s,c)=>{var l;const u=(l=n[s])!==null&&l!==void 0?l:[];if(n[s]=this.cloneDeep(c),u.length>0){const d=n[s].map(f=>f.presence_ref),p=u.filter(f=>d.indexOf(f.presence_ref)<0);n[s].unshift(...p)}o(s,u,c)}),this.map(a,(s,c)=>{let l=n[s];if(!l)return;const u=c.map(d=>d.presence_ref);l=l.filter(d=>u.indexOf(d.presence_ref)<0),n[s]=l,r(s,l,c),l.length===0&&delete n[s]}),n}static map(n,e){return Object.getOwnPropertyNames(n).map(o=>e(o,n[o]))}static transformState(n){return n=this.cloneDeep(n),Object.getOwnPropertyNames(n).reduce((e,o)=>{const r=n[o];return"metas"in r?e[o]=r.metas.map(i=>(i.presence_ref=i.phx_ref,delete i.phx_ref,delete i.phx_ref_prev,i)):e[o]=r,e},{})}static cloneDeep(n){return JSON.parse(JSON.stringify(n))}onJoin(n){this.caller.onJoin=n}onLeave(n){this.caller.onLeave=n}onSync(n){this.caller.onSync=n}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var Ce;(function(t){t.abstime="abstime",t.bool="bool",t.date="date",t.daterange="daterange",t.float4="float4",t.float8="float8",t.int2="int2",t.int4="int4",t.int4range="int4range",t.int8="int8",t.int8range="int8range",t.json="json",t.jsonb="jsonb",t.money="money",t.numeric="numeric",t.oid="oid",t.reltime="reltime",t.text="text",t.time="time",t.timestamp="timestamp",t.timestamptz="timestamptz",t.timetz="timetz",t.tsrange="tsrange",t.tstzrange="tstzrange"})(Ce||(Ce={}));const $c=(t,n,e={})=>{var o;const r=(o=e.skipTypes)!==null&&o!==void 0?o:[];return Object.keys(n).reduce((i,a)=>(i[a]=uw(a,t,n,r),i),{})},uw=(t,n,e,o)=>{const r=n.find(s=>s.name===t),i=r==null?void 0:r.type,a=e[t];return i&&!o.includes(i)?Mu(i,a):Xi(a)},Mu=(t,n)=>{if(t.charAt(0)==="_"){const e=t.slice(1,t.length);return hw(n,e)}switch(t){case Ce.bool:return dw(n);case Ce.float4:case Ce.float8:case Ce.int2:case Ce.int4:case Ce.int8:case Ce.numeric:case Ce.oid:return pw(n);case Ce.json:case Ce.jsonb:return fw(n);case Ce.timestamp:return mw(n);case Ce.abstime:case Ce.date:case Ce.daterange:case Ce.int4range:case Ce.int8range:case Ce.money:case Ce.reltime:case Ce.text:case Ce.time:case Ce.timestamptz:case Ce.timetz:case Ce.tsrange:case Ce.tstzrange:return Xi(n);default:return Xi(n)}},Xi=t=>t,dw=t=>{switch(t){case"t":return!0;case"f":return!1;default:return t}},pw=t=>{if(typeof t=="string"){const n=parseFloat(t);if(!Number.isNaN(n))return n}return t},fw=t=>{if(typeof t=="string")try{return JSON.parse(t)}catch(n){return console.log(`JSON parse error: ${n}`),t}return t},hw=(t,n)=>{if(typeof t!="string")return t;const e=t.length-1,o=t[e];if(t[0]==="{"&&o==="}"){let i;const a=t.slice(1,e);try{i=JSON.parse("["+a+"]")}catch{i=a?a.split(","):[]}return i.map(s=>Mu(n,s))}return t},mw=t=>typeof t=="string"?t.replace(" ","T"):t;var Pc;(function(t){t.ALL="*",t.INSERT="INSERT",t.UPDATE="UPDATE",t.DELETE="DELETE"})(Pc||(Pc={}));var Ec;(function(t){t.BROADCAST="broadcast",t.PRESENCE="presence",t.POSTGRES_CHANGES="postgres_changes"})(Ec||(Ec={}));var Tc;(function(t){t.SUBSCRIBED="SUBSCRIBED",t.TIMED_OUT="TIMED_OUT",t.CLOSED="CLOSED",t.CHANNEL_ERROR="CHANNEL_ERROR"})(Tc||(Tc={}));class Ra{constructor(n,e={config:{}},o){this.topic=n,this.params=e,this.socket=o,this.bindings={},this.state=tn.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=n.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:""}},e.config),this.timeout=this.socket.timeout,this.joinPush=new hi(this,vn.join,this.params,this.timeout),this.rejoinTimer=new Fu(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=tn.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(r=>r.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=tn.closed,this.socket._remove(this)}),this._onError(r=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,r),this.state=tn.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=tn.errored,this.rejoinTimer.scheduleTimeout())}),this._on(vn.reply,{},(r,i)=>{this._trigger(this._replyEventName(i),r)}),this.presence=new go(this),this.broadcastEndpointURL=this._broadcastEndpointURL()}subscribe(n,e=this.timeout){var o,r;if(this.socket.isConnected()||this.socket.connect(),this.joinedOnce)throw"tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";{const{config:{broadcast:i,presence:a}}=this.params;this._onError(l=>n&&n("CHANNEL_ERROR",l)),this._onClose(()=>n&&n("CLOSED"));const s={},c={broadcast:i,presence:a,postgres_changes:(r=(o=this.bindings.postgres_changes)===null||o===void 0?void 0:o.map(l=>l.filter))!==null&&r!==void 0?r:[]};this.socket.accessToken&&(s.access_token=this.socket.accessToken),this.updateJoinPayload(Object.assign({config:c},s)),this.joinedOnce=!0,this._rejoin(e),this.joinPush.receive("ok",({postgres_changes:l})=>{var u;if(this.socket.accessToken&&this.socket.setAuth(this.socket.accessToken),l===void 0){n&&n("SUBSCRIBED");return}else{const d=this.bindings.postgres_changes,p=(u=d==null?void 0:d.length)!==null&&u!==void 0?u:0,f=[];for(let g=0;g<p;g++){const v=d[g],{filter:{event:b,schema:y,table:w,filter:$}}=v,O=l&&l[g];if(O&&O.event===b&&O.schema===y&&O.table===w&&O.filter===$)f.push(Object.assign(Object.assign({},v),{id:O.id}));else{this.unsubscribe(),n&&n("CHANNEL_ERROR",new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=f,n&&n("SUBSCRIBED");return}}).receive("error",l=>{n&&n("CHANNEL_ERROR",new Error(JSON.stringify(Object.values(l).join(", ")||"error")))}).receive("timeout",()=>{n&&n("TIMED_OUT")})}return this}presenceState(){return this.presence.state}async track(n,e={}){return await this.send({type:"presence",event:"track",payload:n},e.timeout||this.timeout)}async untrack(n={}){return await this.send({type:"presence",event:"untrack"},n)}on(n,e,o){return this._on(n,e,o)}async send(n,e={}){var o,r;if(!this._canPush()&&n.type==="broadcast"){const{event:i,payload:a}=n,s={method:"POST",headers:{apikey:(o=this.socket.apiKey)!==null&&o!==void 0?o:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:i,payload:a}]})};try{return(await this._fetchWithTimeout(this.broadcastEndpointURL,s,(r=e.timeout)!==null&&r!==void 0?r:this.timeout)).ok?"ok":"error"}catch(c){return c.name==="AbortError"?"timed out":"error"}}else return new Promise(i=>{var a,s,c;const l=this._push(n.type,n,e.timeout||this.timeout);n.type==="broadcast"&&!(!((c=(s=(a=this.params)===null||a===void 0?void 0:a.config)===null||s===void 0?void 0:s.broadcast)===null||c===void 0)&&c.ack)&&i("ok"),l.receive("ok",()=>i("ok")),l.receive("error",()=>i("error")),l.receive("timeout",()=>i("timed out"))})}updateJoinPayload(n){this.joinPush.updatePayload(n)}unsubscribe(n=this.timeout){this.state=tn.leaving;const e=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(vn.close,"leave",this._joinRef())};return this.rejoinTimer.reset(),this.joinPush.destroy(),new Promise(o=>{const r=new hi(this,vn.leave,{},n);r.receive("ok",()=>{e(),o("ok")}).receive("timeout",()=>{e(),o("timed out")}).receive("error",()=>{o("error")}),r.send(),this._canPush()||r.trigger("ok",{})})}_broadcastEndpointURL(){let n=this.socket.endPoint;return n=n.replace(/^ws/i,"http"),n=n.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),n.replace(/\/+$/,"")+"/api/broadcast"}async _fetchWithTimeout(n,e,o){const r=new AbortController,i=setTimeout(()=>r.abort(),o),a=await this.socket.fetch(n,Object.assign(Object.assign({},e),{signal:r.signal}));return clearTimeout(i),a}_push(n,e,o=this.timeout){if(!this.joinedOnce)throw`tried to push '${n}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let r=new hi(this,n,e,o);return this._canPush()?r.send():(r.startTimeout(),this.pushBuffer.push(r)),r}_onMessage(n,e,o){return e}_isMember(n){return this.topic===n}_joinRef(){return this.joinPush.ref}_trigger(n,e,o){var r,i;const a=n.toLocaleLowerCase(),{close:s,error:c,leave:l,join:u}=vn;if(o&&[s,c,l,u].indexOf(a)>=0&&o!==this._joinRef())return;let p=this._onMessage(a,e,o);if(e&&!p)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(a)?(r=this.bindings.postgres_changes)===null||r===void 0||r.filter(f=>{var g,v,b;return((g=f.filter)===null||g===void 0?void 0:g.event)==="*"||((b=(v=f.filter)===null||v===void 0?void 0:v.event)===null||b===void 0?void 0:b.toLocaleLowerCase())===a}).map(f=>f.callback(p,o)):(i=this.bindings[a])===null||i===void 0||i.filter(f=>{var g,v,b,y,w,$;if(["broadcast","presence","postgres_changes"].includes(a))if("id"in f){const O=f.id,W=(g=f.filter)===null||g===void 0?void 0:g.event;return O&&((v=e.ids)===null||v===void 0?void 0:v.includes(O))&&(W==="*"||(W==null?void 0:W.toLocaleLowerCase())===((b=e.data)===null||b===void 0?void 0:b.type.toLocaleLowerCase()))}else{const O=(w=(y=f==null?void 0:f.filter)===null||y===void 0?void 0:y.event)===null||w===void 0?void 0:w.toLocaleLowerCase();return O==="*"||O===(($=e==null?void 0:e.event)===null||$===void 0?void 0:$.toLocaleLowerCase())}else return f.type.toLocaleLowerCase()===a}).map(f=>{if(typeof p=="object"&&"ids"in p){const g=p.data,{schema:v,table:b,commit_timestamp:y,type:w,errors:$}=g;p=Object.assign(Object.assign({},{schema:v,table:b,commit_timestamp:y,eventType:w,new:{},old:{},errors:$}),this._getPayloadRecords(g))}f.callback(p,o)})}_isClosed(){return this.state===tn.closed}_isJoined(){return this.state===tn.joined}_isJoining(){return this.state===tn.joining}_isLeaving(){return this.state===tn.leaving}_replyEventName(n){return`chan_reply_${n}`}_on(n,e,o){const r=n.toLocaleLowerCase(),i={type:r,filter:e,callback:o};return this.bindings[r]?this.bindings[r].push(i):this.bindings[r]=[i],this}_off(n,e){const o=n.toLocaleLowerCase();return this.bindings[o]=this.bindings[o].filter(r=>{var i;return!(((i=r.type)===null||i===void 0?void 0:i.toLocaleLowerCase())===o&&Ra.isEqual(r.filter,e))}),this}static isEqual(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const o in n)if(n[o]!==e[o])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(n){this._on(vn.close,{},n)}_onError(n){this._on(vn.error,{},e=>n(e))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(n=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=tn.joining,this.joinPush.resend(n))}_getPayloadRecords(n){const e={new:{},old:{}};return(n.type==="INSERT"||n.type==="UPDATE")&&(e.new=$c(n.columns,n.record)),(n.type==="UPDATE"||n.type==="DELETE")&&(e.old=$c(n.columns,n.old_record)),e}}const gw=()=>{},bw=typeof WebSocket<"u";class vw{constructor(n,e){var o;this.accessToken=null,this.apiKey=null,this.channels=[],this.endPoint="",this.headers=aw,this.params={},this.timeout=Ru,this.heartbeatIntervalMs=3e4,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.ref=0,this.logger=gw,this.conn=null,this.sendBuffer=[],this.serializer=new lw,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this._resolveFetch=i=>{let a;return i?a=i:typeof fetch>"u"?a=(...s)=>ln(()=>Promise.resolve().then(()=>qo),void 0).then(({default:c})=>c(...s)):a=fetch,(...s)=>a(...s)},this.endPoint=`${n}/${Yi.websocket}`,e!=null&&e.transport?this.transport=e.transport:this.transport=null,e!=null&&e.params&&(this.params=e.params),e!=null&&e.headers&&(this.headers=Object.assign(Object.assign({},this.headers),e.headers)),e!=null&&e.timeout&&(this.timeout=e.timeout),e!=null&&e.logger&&(this.logger=e.logger),e!=null&&e.heartbeatIntervalMs&&(this.heartbeatIntervalMs=e.heartbeatIntervalMs);const r=(o=e==null?void 0:e.params)===null||o===void 0?void 0:o.apikey;r&&(this.accessToken=r,this.apiKey=r),this.reconnectAfterMs=e!=null&&e.reconnectAfterMs?e.reconnectAfterMs:i=>[1e3,2e3,5e3,1e4][i-1]||1e4,this.encode=e!=null&&e.encode?e.encode:(i,a)=>a(JSON.stringify(i)),this.decode=e!=null&&e.decode?e.decode:this.serializer.decode.bind(this.serializer),this.reconnectTimer=new Fu(async()=>{this.disconnect(),this.connect()},this.reconnectAfterMs),this.fetch=this._resolveFetch(e==null?void 0:e.fetch)}connect(){if(!this.conn){if(this.transport){this.conn=new this.transport(this._endPointURL(),void 0,{headers:this.headers});return}if(bw){this.conn=new WebSocket(this._endPointURL()),this.setupConnection();return}this.conn=new yw(this._endPointURL(),void 0,{close:()=>{this.conn=null}}),ln(()=>import("./browser-BImCA5dO.js").then(n=>n.b),[]).then(({default:n})=>{this.conn=new n(this._endPointURL(),void 0,{headers:this.headers}),this.setupConnection()})}}disconnect(n,e){this.conn&&(this.conn.onclose=function(){},n?this.conn.close(n,e??""):this.conn.close(),this.conn=null,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.reset())}getChannels(){return this.channels}async removeChannel(n){const e=await n.unsubscribe();return this.channels.length===0&&this.disconnect(),e}async removeAllChannels(){const n=await Promise.all(this.channels.map(e=>e.unsubscribe()));return this.disconnect(),n}log(n,e,o){this.logger(n,e,o)}connectionState(){switch(this.conn&&this.conn.readyState){case Nt.connecting:return ft.Connecting;case Nt.open:return ft.Open;case Nt.closing:return ft.Closing;default:return ft.Closed}}isConnected(){return this.connectionState()===ft.Open}channel(n,e={config:{}}){const o=new Ra(`realtime:${n}`,e,this);return this.channels.push(o),o}push(n){const{topic:e,event:o,payload:r,ref:i}=n,a=()=>{this.encode(n,s=>{var c;(c=this.conn)===null||c===void 0||c.send(s)})};this.log("push",`${e} ${o} (${i})`,r),this.isConnected()?a():this.sendBuffer.push(a)}setAuth(n){this.accessToken=n,this.channels.forEach(e=>{n&&e.updateJoinPayload({access_token:n}),e.joinedOnce&&e._isJoined()&&e._push(vn.access_token,{access_token:n})})}_makeRef(){let n=this.ref+1;return n===this.ref?this.ref=0:this.ref=n,this.ref.toString()}_leaveOpenTopic(n){let e=this.channels.find(o=>o.topic===n&&(o._isJoined()||o._isJoining()));e&&(this.log("transport",`leaving duplicate topic "${n}"`),e.unsubscribe())}_remove(n){this.channels=this.channels.filter(e=>e._joinRef()!==n._joinRef())}setupConnection(){this.conn&&(this.conn.binaryType="arraybuffer",this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=n=>this._onConnError(n),this.conn.onmessage=n=>this._onConnMessage(n),this.conn.onclose=n=>this._onConnClose(n))}_endPointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:sw}))}_onConnMessage(n){this.decode(n.data,e=>{let{topic:o,event:r,payload:i,ref:a}=e;(a&&a===this.pendingHeartbeatRef||r===(i==null?void 0:i.type))&&(this.pendingHeartbeatRef=null),this.log("receive",`${i.status||""} ${o} ${r} ${a&&"("+a+")"||""}`,i),this.channels.filter(s=>s._isMember(o)).forEach(s=>s._trigger(r,i,a)),this.stateChangeCallbacks.message.forEach(s=>s(e))})}_onConnOpen(){this.log("transport",`connected to ${this._endPointURL()}`),this._flushSendBuffer(),this.reconnectTimer.reset(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this._sendHeartbeat(),this.heartbeatIntervalMs),this.stateChangeCallbacks.open.forEach(n=>n())}_onConnClose(n){this.log("transport","close",n),this._triggerChanError(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(e=>e(n))}_onConnError(n){this.log("transport",n.message),this._triggerChanError(),this.stateChangeCallbacks.error.forEach(e=>e(n))}_triggerChanError(){this.channels.forEach(n=>n._trigger(vn.error))}_appendParams(n,e){if(Object.keys(e).length===0)return n;const o=n.match(/\?/)?"&":"?",r=new URLSearchParams(e);return`${n}${o}${r}`}_flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(n=>n()),this.sendBuffer=[])}_sendHeartbeat(){var n;if(this.isConnected()){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),(n=this.conn)===null||n===void 0||n.close(cw,"hearbeat timeout");return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.setAuth(this.accessToken)}}}class yw{constructor(n,e,o){this.binaryType="arraybuffer",this.onclose=()=>{},this.onerror=()=>{},this.onmessage=()=>{},this.onopen=()=>{},this.readyState=Nt.connecting,this.send=()=>{},this.url=null,this.url=n,this.close=o.close}}class Fa extends Error{constructor(n){super(n),this.__isStorageError=!0,this.name="StorageError"}}function He(t){return typeof t=="object"&&t!==null&&"__isStorageError"in t}class kw extends Fa{constructor(n,e){super(n),this.name="StorageApiError",this.status=e}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class Oc extends Fa{constructor(n,e){super(n),this.name="StorageUnknownError",this.originalError=e}}var ww=function(t,n,e,o){function r(i){return i instanceof e?i:new e(function(a){a(i)})}return new(e||(e=Promise))(function(i,a){function s(u){try{l(o.next(u))}catch(d){a(d)}}function c(u){try{l(o.throw(u))}catch(d){a(d)}}function l(u){u.done?i(u.value):r(u.value).then(s,c)}l((o=o.apply(t,n||[])).next())})};const zu=t=>{let n;return t?n=t:typeof fetch>"u"?n=(...e)=>ln(()=>Promise.resolve().then(()=>qo),void 0).then(({default:o})=>o(...e)):n=fetch,(...e)=>n(...e)},xw=()=>ww(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield ln(()=>Promise.resolve().then(()=>qo),void 0)).Response:Response});var Jt=function(t,n,e,o){function r(i){return i instanceof e?i:new e(function(a){a(i)})}return new(e||(e=Promise))(function(i,a){function s(u){try{l(o.next(u))}catch(d){a(d)}}function c(u){try{l(o.throw(u))}catch(d){a(d)}}function l(u){u.done?i(u.value):r(u.value).then(s,c)}l((o=o.apply(t,n||[])).next())})};const mi=t=>t.msg||t.message||t.error_description||t.error||JSON.stringify(t),Cw=(t,n)=>Jt(void 0,void 0,void 0,function*(){const e=yield xw();t instanceof e?t.json().then(o=>{n(new kw(mi(o),t.status||500))}).catch(o=>{n(new Oc(mi(o),o))}):n(new Oc(mi(t),t))}),_w=(t,n,e,o)=>{const r={method:t,headers:(n==null?void 0:n.headers)||{}};return t==="GET"?r:(r.headers=Object.assign({"Content-Type":"application/json"},n==null?void 0:n.headers),r.body=JSON.stringify(o),Object.assign(Object.assign({},r),e))};function Zr(t,n,e,o,r,i){return Jt(this,void 0,void 0,function*(){return new Promise((a,s)=>{t(e,_w(n,o,r,i)).then(c=>{if(!c.ok)throw c;return o!=null&&o.noResolveJson?c:c.json()}).then(c=>a(c)).catch(c=>Cw(c,s))})})}function Qi(t,n,e,o){return Jt(this,void 0,void 0,function*(){return Zr(t,"GET",n,e,o)})}function qn(t,n,e,o,r){return Jt(this,void 0,void 0,function*(){return Zr(t,"POST",n,o,r,e)})}function Sw(t,n,e,o,r){return Jt(this,void 0,void 0,function*(){return Zr(t,"PUT",n,o,r,e)})}function Du(t,n,e,o,r){return Jt(this,void 0,void 0,function*(){return Zr(t,"DELETE",n,o,r,e)})}var cn=function(t,n,e,o){function r(i){return i instanceof e?i:new e(function(a){a(i)})}return new(e||(e=Promise))(function(i,a){function s(u){try{l(o.next(u))}catch(d){a(d)}}function c(u){try{l(o.throw(u))}catch(d){a(d)}}function l(u){u.done?i(u.value):r(u.value).then(s,c)}l((o=o.apply(t,n||[])).next())})};const Iw={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},Ac={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class $w{constructor(n,e={},o,r){this.url=n,this.headers=e,this.bucketId=o,this.fetch=zu(r)}uploadOrUpdate(n,e,o,r){return cn(this,void 0,void 0,function*(){try{let i;const a=Object.assign(Object.assign({},Ac),r),s=Object.assign(Object.assign({},this.headers),n==="POST"&&{"x-upsert":String(a.upsert)});typeof Blob<"u"&&o instanceof Blob?(i=new FormData,i.append("cacheControl",a.cacheControl),i.append("",o)):typeof FormData<"u"&&o instanceof FormData?(i=o,i.append("cacheControl",a.cacheControl)):(i=o,s["cache-control"]=`max-age=${a.cacheControl}`,s["content-type"]=a.contentType);const c=this._removeEmptyFolders(e),l=this._getFinalPath(c),u=yield this.fetch(`${this.url}/object/${l}`,Object.assign({method:n,body:i,headers:s},a!=null&&a.duplex?{duplex:a.duplex}:{})),d=yield u.json();return u.ok?{data:{path:c,id:d.Id,fullPath:d.Key},error:null}:{data:null,error:d}}catch(i){if(He(i))return{data:null,error:i};throw i}})}upload(n,e,o){return cn(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",n,e,o)})}uploadToSignedUrl(n,e,o,r){return cn(this,void 0,void 0,function*(){const i=this._removeEmptyFolders(n),a=this._getFinalPath(i),s=new URL(this.url+`/object/upload/sign/${a}`);s.searchParams.set("token",e);try{let c;const l=Object.assign({upsert:Ac.upsert},r),u=Object.assign(Object.assign({},this.headers),{"x-upsert":String(l.upsert)});typeof Blob<"u"&&o instanceof Blob?(c=new FormData,c.append("cacheControl",l.cacheControl),c.append("",o)):typeof FormData<"u"&&o instanceof FormData?(c=o,c.append("cacheControl",l.cacheControl)):(c=o,u["cache-control"]=`max-age=${l.cacheControl}`,u["content-type"]=l.contentType);const d=yield this.fetch(s.toString(),{method:"PUT",body:c,headers:u}),p=yield d.json();return d.ok?{data:{path:i,fullPath:p.Key},error:null}:{data:null,error:p}}catch(c){if(He(c))return{data:null,error:c};throw c}})}createSignedUploadUrl(n){return cn(this,void 0,void 0,function*(){try{let e=this._getFinalPath(n);const o=yield qn(this.fetch,`${this.url}/object/upload/sign/${e}`,{},{headers:this.headers}),r=new URL(this.url+o.url),i=r.searchParams.get("token");if(!i)throw new Fa("No token returned by API");return{data:{signedUrl:r.toString(),path:n,token:i},error:null}}catch(e){if(He(e))return{data:null,error:e};throw e}})}update(n,e,o){return cn(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",n,e,o)})}move(n,e){return cn(this,void 0,void 0,function*(){try{return{data:yield qn(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:n,destinationKey:e},{headers:this.headers}),error:null}}catch(o){if(He(o))return{data:null,error:o};throw o}})}copy(n,e){return cn(this,void 0,void 0,function*(){try{return{data:{path:(yield qn(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:n,destinationKey:e},{headers:this.headers})).Key},error:null}}catch(o){if(He(o))return{data:null,error:o};throw o}})}createSignedUrl(n,e,o){return cn(this,void 0,void 0,function*(){try{let r=this._getFinalPath(n),i=yield qn(this.fetch,`${this.url}/object/sign/${r}`,Object.assign({expiresIn:e},o!=null&&o.transform?{transform:o.transform}:{}),{headers:this.headers});const a=o!=null&&o.download?`&download=${o.download===!0?"":o.download}`:"";return i={signedUrl:encodeURI(`${this.url}${i.signedURL}${a}`)},{data:i,error:null}}catch(r){if(He(r))return{data:null,error:r};throw r}})}createSignedUrls(n,e,o){return cn(this,void 0,void 0,function*(){try{const r=yield qn(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:e,paths:n},{headers:this.headers}),i=o!=null&&o.download?`&download=${o.download===!0?"":o.download}`:"";return{data:r.map(a=>Object.assign(Object.assign({},a),{signedUrl:a.signedURL?encodeURI(`${this.url}${a.signedURL}${i}`):null})),error:null}}catch(r){if(He(r))return{data:null,error:r};throw r}})}download(n,e){return cn(this,void 0,void 0,function*(){const r=typeof(e==null?void 0:e.transform)<"u"?"render/image/authenticated":"object",i=this.transformOptsToQueryString((e==null?void 0:e.transform)||{}),a=i?`?${i}`:"";try{const s=this._getFinalPath(n);return{data:yield(yield Qi(this.fetch,`${this.url}/${r}/${s}${a}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(s){if(He(s))return{data:null,error:s};throw s}})}getPublicUrl(n,e){const o=this._getFinalPath(n),r=[],i=e!=null&&e.download?`download=${e.download===!0?"":e.download}`:"";i!==""&&r.push(i);const s=typeof(e==null?void 0:e.transform)<"u"?"render/image":"object",c=this.transformOptsToQueryString((e==null?void 0:e.transform)||{});c!==""&&r.push(c);let l=r.join("&");return l!==""&&(l=`?${l}`),{data:{publicUrl:encodeURI(`${this.url}/${s}/public/${o}${l}`)}}}remove(n){return cn(this,void 0,void 0,function*(){try{return{data:yield Du(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:n},{headers:this.headers}),error:null}}catch(e){if(He(e))return{data:null,error:e};throw e}})}list(n,e,o){return cn(this,void 0,void 0,function*(){try{const r=Object.assign(Object.assign(Object.assign({},Iw),e),{prefix:n||""});return{data:yield qn(this.fetch,`${this.url}/object/list/${this.bucketId}`,r,{headers:this.headers},o),error:null}}catch(r){if(He(r))return{data:null,error:r};throw r}})}_getFinalPath(n){return`${this.bucketId}/${n}`}_removeEmptyFolders(n){return n.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(n){const e=[];return n.width&&e.push(`width=${n.width}`),n.height&&e.push(`height=${n.height}`),n.resize&&e.push(`resize=${n.resize}`),n.format&&e.push(`format=${n.format}`),n.quality&&e.push(`quality=${n.quality}`),e.join("&")}}const Pw="2.5.5",Ew={"X-Client-Info":`storage-js/${Pw}`};var Tt=function(t,n,e,o){function r(i){return i instanceof e?i:new e(function(a){a(i)})}return new(e||(e=Promise))(function(i,a){function s(u){try{l(o.next(u))}catch(d){a(d)}}function c(u){try{l(o.throw(u))}catch(d){a(d)}}function l(u){u.done?i(u.value):r(u.value).then(s,c)}l((o=o.apply(t,n||[])).next())})};class Tw{constructor(n,e={},o){this.url=n,this.headers=Object.assign(Object.assign({},Ew),e),this.fetch=zu(o)}listBuckets(){return Tt(this,void 0,void 0,function*(){try{return{data:yield Qi(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(n){if(He(n))return{data:null,error:n};throw n}})}getBucket(n){return Tt(this,void 0,void 0,function*(){try{return{data:yield Qi(this.fetch,`${this.url}/bucket/${n}`,{headers:this.headers}),error:null}}catch(e){if(He(e))return{data:null,error:e};throw e}})}createBucket(n,e={public:!1}){return Tt(this,void 0,void 0,function*(){try{return{data:yield qn(this.fetch,`${this.url}/bucket`,{id:n,name:n,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:this.headers}),error:null}}catch(o){if(He(o))return{data:null,error:o};throw o}})}updateBucket(n,e){return Tt(this,void 0,void 0,function*(){try{return{data:yield Sw(this.fetch,`${this.url}/bucket/${n}`,{id:n,name:n,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:this.headers}),error:null}}catch(o){if(He(o))return{data:null,error:o};throw o}})}emptyBucket(n){return Tt(this,void 0,void 0,function*(){try{return{data:yield qn(this.fetch,`${this.url}/bucket/${n}/empty`,{},{headers:this.headers}),error:null}}catch(e){if(He(e))return{data:null,error:e};throw e}})}deleteBucket(n){return Tt(this,void 0,void 0,function*(){try{return{data:yield Du(this.fetch,`${this.url}/bucket/${n}`,{},{headers:this.headers}),error:null}}catch(e){if(He(e))return{data:null,error:e};throw e}})}}class Ow extends Tw{constructor(n,e={},o){super(n,e,o)}from(n){return new $w(this.url,this.headers,n,this.fetch)}}const Aw="2.42.5";let to="";typeof Deno<"u"?to="deno":typeof document<"u"?to="web":typeof navigator<"u"&&navigator.product==="ReactNative"?to="react-native":to="node";const Bw={"X-Client-Info":`supabase-js-${to}/${Aw}`},Lw={headers:Bw},jw={schema:"public"},Rw={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},Fw={};var Mw=function(t,n,e,o){function r(i){return i instanceof e?i:new e(function(a){a(i)})}return new(e||(e=Promise))(function(i,a){function s(u){try{l(o.next(u))}catch(d){a(d)}}function c(u){try{l(o.throw(u))}catch(d){a(d)}}function l(u){u.done?i(u.value):r(u.value).then(s,c)}l((o=o.apply(t,n||[])).next())})};const zw=t=>{let n;return t?n=t:typeof fetch>"u"?n=La:n=fetch,(...e)=>n(...e)},Dw=()=>typeof Headers>"u"?ju:Headers,Nw=(t,n,e)=>{const o=zw(e),r=Dw();return(i,a)=>Mw(void 0,void 0,void 0,function*(){var s;const c=(s=yield n())!==null&&s!==void 0?s:t;let l=new r(a==null?void 0:a.headers);return l.has("apikey")||l.set("apikey",t),l.has("Authorization")||l.set("Authorization",`Bearer ${c}`),o(i,Object.assign(Object.assign({},a),{headers:l}))})};function Vw(t){return t.replace(/\/$/,"")}function Uw(t,n){const{db:e,auth:o,realtime:r,global:i}=t,{db:a,auth:s,realtime:c,global:l}=n;return{db:Object.assign(Object.assign({},a),e),auth:Object.assign(Object.assign({},s),o),realtime:Object.assign(Object.assign({},c),r),global:Object.assign(Object.assign({},l),i)}}const Nu="2.63.1",Kw="http://localhost:9999",Hw="supabase.auth.token",qw={"X-Client-Info":`gotrue-js/${Nu}`},Bc=10,ea="X-Supabase-Api-Version",Vu={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}};function Ww(t){return Math.round(Date.now()/1e3)+t}function Gw(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){const n=Math.random()*16|0;return(t=="x"?n:n&3|8).toString(16)})}const gn=()=>typeof document<"u",st={tested:!1,writable:!1},bo=()=>{if(!gn())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(st.tested)return st.writable;const t=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(t,t),globalThis.localStorage.removeItem(t),st.tested=!0,st.writable=!0}catch{st.tested=!0,st.writable=!1}return st.writable};function gi(t){const n={},e=new URL(t);if(e.hash&&e.hash[0]==="#")try{new URLSearchParams(e.hash.substring(1)).forEach((r,i)=>{n[i]=r})}catch{}return e.searchParams.forEach((o,r)=>{n[r]=o}),n}const Uu=t=>{let n;return t?n=t:typeof fetch>"u"?n=(...e)=>ln(()=>Promise.resolve().then(()=>qo),void 0).then(({default:o})=>o(...e)):n=fetch,(...e)=>n(...e)},Jw=t=>typeof t=="object"&&t!==null&&"status"in t&&"ok"in t&&"json"in t&&typeof t.json=="function",Ku=async(t,n,e)=>{await t.setItem(n,JSON.stringify(e))},ur=async(t,n)=>{const e=await t.getItem(n);if(!e)return null;try{return JSON.parse(e)}catch{return e}},bi=async(t,n)=>{await t.removeItem(n)};function Zw(t){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";let e="",o,r,i,a,s,c,l,u=0;for(t=t.replace("-","+").replace("_","/");u<t.length;)a=n.indexOf(t.charAt(u++)),s=n.indexOf(t.charAt(u++)),c=n.indexOf(t.charAt(u++)),l=n.indexOf(t.charAt(u++)),o=a<<2|s>>4,r=(s&15)<<4|c>>2,i=(c&3)<<6|l,e=e+String.fromCharCode(o),c!=64&&r!=0&&(e=e+String.fromCharCode(r)),l!=64&&i!=0&&(e=e+String.fromCharCode(i));return e}class Yr{constructor(){this.promise=new Yr.promiseConstructor((n,e)=>{this.resolve=n,this.reject=e})}}Yr.promiseConstructor=Promise;function Lc(t){const n=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,e=t.split(".");if(e.length!==3)throw new Error("JWT is not valid: not a JWT structure");if(!n.test(e[1]))throw new Error("JWT is not valid: payload is not in base64url format");const o=e[1];return JSON.parse(Zw(o))}async function Yw(t){return await new Promise(n=>{setTimeout(()=>n(null),t)})}function Xw(t,n){return new Promise((o,r)=>{(async()=>{for(let i=0;i<1/0;i++)try{const a=await t(i);if(!n(i,null,a)){o(a);return}}catch(a){if(!n(i,a)){r(a);return}}})()})}function Qw(t){return("0"+t.toString(16)).substr(-2)}function e5(){const n=new Uint32Array(56);if(typeof crypto>"u"){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",o=e.length;let r="";for(let i=0;i<56;i++)r+=e.charAt(Math.floor(Math.random()*o));return r}return crypto.getRandomValues(n),Array.from(n,Qw).join("")}async function n5(t){const e=new TextEncoder().encode(t),o=await crypto.subtle.digest("SHA-256",e),r=new Uint8Array(o);return Array.from(r).map(i=>String.fromCharCode(i)).join("")}function t5(t){return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function o5(t){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),t;const e=await n5(t);return t5(e)}async function Ot(t,n,e=!1){const o=e5();let r=o;e&&(r+="/PASSWORD_RECOVERY"),await Ku(t,`${n}-code-verifier`,r);const i=await o5(o);return[i,o===i?"plain":"s256"]}const r5=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function i5(t){const n=t.headers.get(ea);if(!n||!n.match(r5))return null;try{return new Date(`${n}T00:00:00.0Z`)}catch{return null}}class Ma extends Error{constructor(n,e,o){super(n),this.__isAuthError=!0,this.name="AuthError",this.status=e,this.code=o}}function oe(t){return typeof t=="object"&&t!==null&&"__isAuthError"in t}class a5 extends Ma{constructor(n,e,o){super(n,e,o),this.name="AuthApiError",this.status=e,this.code=o}}function s5(t){return oe(t)&&t.name==="AuthApiError"}class Hu extends Ma{constructor(n,e){super(n),this.name="AuthUnknownError",this.originalError=e}}class _t extends Ma{constructor(n,e,o,r){super(n,o,r),this.name=e,this.status=o}}class ct extends _t{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}class vi extends _t{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class dr extends _t{constructor(n){super(n,"AuthInvalidCredentialsError",400,void 0)}}class pr extends _t{constructor(n,e=null){super(n,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=e}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class jc extends _t{constructor(n,e=null){super(n,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=e}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class na extends _t{constructor(n,e){super(n,"AuthRetryableFetchError",e,void 0)}}function yi(t){return oe(t)&&t.name==="AuthRetryableFetchError"}class Rc extends _t{constructor(n,e,o){super(n,"AuthWeakPasswordError",e,"weak_password"),this.reasons=o}}var c5=function(t,n){var e={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&n.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(t);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(e[o[r]]=t[o[r]]);return e};const lt=t=>t.msg||t.message||t.error_description||t.error||JSON.stringify(t),l5=[502,503,504];async function Fc(t){var n;if(!Jw(t))throw new na(lt(t),0);if(l5.includes(t.status))throw new na(lt(t),t.status);let e;try{e=await t.json()}catch(i){throw new Hu(lt(i),i)}let o;const r=i5(t);if(r&&r.getTime()>=Vu["2024-01-01"].timestamp&&typeof e=="object"&&e&&typeof e.code=="string"?o=e.code:typeof e=="object"&&e&&typeof e.error_code=="string"&&(o=e.error_code),o){if(o==="weak_password")throw new Rc(lt(e),t.status,((n=e.weak_password)===null||n===void 0?void 0:n.reasons)||[])}else if(typeof e=="object"&&e&&typeof e.weak_password=="object"&&e.weak_password&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.reasons.reduce((i,a)=>i&&typeof a=="string",!0))throw new Rc(lt(e),t.status,e.weak_password.reasons);throw new a5(lt(e),t.status||500,o)}const u5=(t,n,e,o)=>{const r={method:t,headers:(n==null?void 0:n.headers)||{}};return t==="GET"?r:(r.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},n==null?void 0:n.headers),r.body=JSON.stringify(o),Object.assign(Object.assign({},r),e))};async function ae(t,n,e,o){var r;const i=Object.assign({},o==null?void 0:o.headers);i[ea]||(i[ea]=Vu["2024-01-01"].name),o!=null&&o.jwt&&(i.Authorization=`Bearer ${o.jwt}`);const a=(r=o==null?void 0:o.query)!==null&&r!==void 0?r:{};o!=null&&o.redirectTo&&(a.redirect_to=o.redirectTo);const s=Object.keys(a).length?"?"+new URLSearchParams(a).toString():"",c=await d5(t,n,e+s,{headers:i,noResolveJson:o==null?void 0:o.noResolveJson},{},o==null?void 0:o.body);return o!=null&&o.xform?o==null?void 0:o.xform(c):{data:Object.assign({},c),error:null}}async function d5(t,n,e,o,r,i){const a=u5(n,o,r,i);let s;try{s=await t(e,Object.assign(Object.assign({},a),{cache:"no-store"}))}catch(c){throw console.error(c),new na(lt(c),0)}if(s.ok||await Fc(s),o!=null&&o.noResolveJson)return s;try{return await s.json()}catch(c){await Fc(c)}}function Dn(t){var n;let e=null;m5(t)&&(e=Object.assign({},t),t.expires_at||(e.expires_at=Ww(t.expires_in)));const o=(n=t.user)!==null&&n!==void 0?n:t;return{data:{session:e,user:o},error:null}}function Mc(t){const n=Dn(t);return!n.error&&t.weak_password&&typeof t.weak_password=="object"&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.message&&typeof t.weak_password.message=="string"&&t.weak_password.reasons.reduce((e,o)=>e&&typeof o=="string",!0)&&(n.data.weak_password=t.weak_password),n}function Wn(t){var n;return{data:{user:(n=t.user)!==null&&n!==void 0?n:t},error:null}}function p5(t){return{data:t,error:null}}function f5(t){const{action_link:n,email_otp:e,hashed_token:o,redirect_to:r,verification_type:i}=t,a=c5(t,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),s={action_link:n,email_otp:e,hashed_token:o,redirect_to:r,verification_type:i},c=Object.assign({},a);return{data:{properties:s,user:c},error:null}}function h5(t){return t}function m5(t){return t.access_token&&t.refresh_token&&t.expires_in}var g5=function(t,n){var e={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&n.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(t);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(e[o[r]]=t[o[r]]);return e};class b5{constructor({url:n="",headers:e={},fetch:o}){this.url=n,this.headers=e,this.fetch=Uu(o),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(n,e="global"){try{return await ae(this.fetch,"POST",`${this.url}/logout?scope=${e}`,{headers:this.headers,jwt:n,noResolveJson:!0}),{data:null,error:null}}catch(o){if(oe(o))return{data:null,error:o};throw o}}async inviteUserByEmail(n,e={}){try{return await ae(this.fetch,"POST",`${this.url}/invite`,{body:{email:n,data:e.data},headers:this.headers,redirectTo:e.redirectTo,xform:Wn})}catch(o){if(oe(o))return{data:{user:null},error:o};throw o}}async generateLink(n){try{const{options:e}=n,o=g5(n,["options"]),r=Object.assign(Object.assign({},o),e);return"newEmail"in o&&(r.new_email=o==null?void 0:o.newEmail,delete r.newEmail),await ae(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:r,headers:this.headers,xform:f5,redirectTo:e==null?void 0:e.redirectTo})}catch(e){if(oe(e))return{data:{properties:null,user:null},error:e};throw e}}async createUser(n){try{return await ae(this.fetch,"POST",`${this.url}/admin/users`,{body:n,headers:this.headers,xform:Wn})}catch(e){if(oe(e))return{data:{user:null},error:e};throw e}}async listUsers(n){var e,o,r,i,a,s,c;try{const l={nextPage:null,lastPage:0,total:0},u=await ae(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(o=(e=n==null?void 0:n.page)===null||e===void 0?void 0:e.toString())!==null&&o!==void 0?o:"",per_page:(i=(r=n==null?void 0:n.perPage)===null||r===void 0?void 0:r.toString())!==null&&i!==void 0?i:""},xform:h5});if(u.error)throw u.error;const d=await u.json(),p=(a=u.headers.get("x-total-count"))!==null&&a!==void 0?a:0,f=(c=(s=u.headers.get("link"))===null||s===void 0?void 0:s.split(","))!==null&&c!==void 0?c:[];return f.length>0&&(f.forEach(g=>{const v=parseInt(g.split(";")[0].split("=")[1].substring(0,1)),b=JSON.parse(g.split(";")[1].split("=")[1]);l[`${b}Page`]=v}),l.total=parseInt(p)),{data:Object.assign(Object.assign({},d),l),error:null}}catch(l){if(oe(l))return{data:{users:[]},error:l};throw l}}async getUserById(n){try{return await ae(this.fetch,"GET",`${this.url}/admin/users/${n}`,{headers:this.headers,xform:Wn})}catch(e){if(oe(e))return{data:{user:null},error:e};throw e}}async updateUserById(n,e){try{return await ae(this.fetch,"PUT",`${this.url}/admin/users/${n}`,{body:e,headers:this.headers,xform:Wn})}catch(o){if(oe(o))return{data:{user:null},error:o};throw o}}async deleteUser(n,e=!1){try{return await ae(this.fetch,"DELETE",`${this.url}/admin/users/${n}`,{headers:this.headers,body:{should_soft_delete:e},xform:Wn})}catch(o){if(oe(o))return{data:{user:null},error:o};throw o}}async _listFactors(n){try{const{data:e,error:o}=await ae(this.fetch,"GET",`${this.url}/admin/users/${n.userId}/factors`,{headers:this.headers,xform:r=>({data:{factors:r},error:null})});return{data:e,error:o}}catch(e){if(oe(e))return{data:null,error:e};throw e}}async _deleteFactor(n){try{return{data:await ae(this.fetch,"DELETE",`${this.url}/admin/users/${n.userId}/factors/${n.id}`,{headers:this.headers}),error:null}}catch(e){if(oe(e))return{data:null,error:e};throw e}}}const v5={getItem:t=>bo()?globalThis.localStorage.getItem(t):null,setItem:(t,n)=>{bo()&&globalThis.localStorage.setItem(t,n)},removeItem:t=>{bo()&&globalThis.localStorage.removeItem(t)}};function zc(t={}){return{getItem:n=>t[n]||null,setItem:(n,e)=>{t[n]=e},removeItem:n=>{delete t[n]}}}function y5(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const At={debug:!!(globalThis&&bo()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class qu extends Error{constructor(n){super(n),this.isAcquireTimeout=!0}}class k5 extends qu{}async function w5(t,n,e){At.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",t,n);const o=new globalThis.AbortController;return n>0&&setTimeout(()=>{o.abort(),At.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",t)},n),await globalThis.navigator.locks.request(t,n===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:o.signal},async r=>{if(r){At.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",t,r.name);try{return await e()}finally{At.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",t,r.name)}}else{if(n===0)throw At.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",t),new k5(`Acquiring an exclusive Navigator LockManager lock "${t}" immediately failed`);if(At.debug)try{const i=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(i,null,"  "))}catch(i){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",i)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await e()}})}y5();const x5={url:Kw,storageKey:Hw,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:qw,flowType:"implicit",debug:!1},eo=30*1e3,Dc=3;async function Nc(t,n,e){return await e()}class Vo{constructor(n){var e,o;this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=Vo.nextInstanceID,Vo.nextInstanceID+=1,this.instanceID>0&&gn()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const r=Object.assign(Object.assign({},x5),n);if(this.logDebugMessages=!!r.debug,typeof r.debug=="function"&&(this.logger=r.debug),this.persistSession=r.persistSession,this.storageKey=r.storageKey,this.autoRefreshToken=r.autoRefreshToken,this.admin=new b5({url:r.url,headers:r.headers,fetch:r.fetch}),this.url=r.url,this.headers=r.headers,this.fetch=Uu(r.fetch),this.lock=r.lock||Nc,this.detectSessionInUrl=r.detectSessionInUrl,this.flowType=r.flowType,r.lock?this.lock=r.lock:gn()&&(!((e=globalThis==null?void 0:globalThis.navigator)===null||e===void 0)&&e.locks)?this.lock=w5:this.lock=Nc,this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?r.storage?this.storage=r.storage:bo()?this.storage=v5:(this.memoryStorage={},this.storage=zc(this.memoryStorage)):(this.memoryStorage={},this.storage=zc(this.memoryStorage)),gn()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(i){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",i)}(o=this.broadcastChannel)===null||o===void 0||o.addEventListener("message",async i=>{this._debug("received broadcast notification from other tab or client",i),await this._notifyAllSubscribers(i.data.event,i.data.session,!1)})}this.initialize()}_debug(...n){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${Nu}) ${new Date().toISOString()}`,...n),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){try{const n=gn()?await this._isPKCEFlow():!1;if(this._debug("#_initialize()","begin","is PKCE flow",n),n||this.detectSessionInUrl&&this._isImplicitGrantFlow()){const{data:e,error:o}=await this._getSessionFromURL(n);if(o)return this._debug("#_initialize()","error detecting session from URL",o),(o==null?void 0:o.message)==="Identity is already linked"||(o==null?void 0:o.message)==="Identity is already linked to another user"?{error:o}:(await this._removeSession(),{error:o});const{session:r,redirectType:i}=e;return this._debug("#_initialize()","detected session in URL",r,"redirect type",i),await this._saveSession(r),setTimeout(async()=>{i==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",r):await this._notifyAllSubscribers("SIGNED_IN",r)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(n){return oe(n)?{error:n}:{error:new Hu("Unexpected error during initialization",n)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(n){var e,o,r;try{await this._removeSession();const i=await ae(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(o=(e=n==null?void 0:n.options)===null||e===void 0?void 0:e.data)!==null&&o!==void 0?o:{},gotrue_meta_security:{captcha_token:(r=n==null?void 0:n.options)===null||r===void 0?void 0:r.captchaToken}},xform:Dn}),{data:a,error:s}=i;if(s||!a)return{data:{user:null,session:null},error:s};const c=a.session,l=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",c)),{data:{user:l,session:c},error:null}}catch(i){if(oe(i))return{data:{user:null,session:null},error:i};throw i}}async signUp(n){var e,o,r;try{await this._removeSession();let i;if("email"in n){const{email:u,password:d,options:p}=n;let f=null,g=null;this.flowType==="pkce"&&([f,g]=await Ot(this.storage,this.storageKey)),i=await ae(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:p==null?void 0:p.emailRedirectTo,body:{email:u,password:d,data:(e=p==null?void 0:p.data)!==null&&e!==void 0?e:{},gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken},code_challenge:f,code_challenge_method:g},xform:Dn})}else if("phone"in n){const{phone:u,password:d,options:p}=n;i=await ae(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:u,password:d,data:(o=p==null?void 0:p.data)!==null&&o!==void 0?o:{},channel:(r=p==null?void 0:p.channel)!==null&&r!==void 0?r:"sms",gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken}},xform:Dn})}else throw new dr("You must provide either an email or phone number and a password");const{data:a,error:s}=i;if(s||!a)return{data:{user:null,session:null},error:s};const c=a.session,l=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",c)),{data:{user:l,session:c},error:null}}catch(i){if(oe(i))return{data:{user:null,session:null},error:i};throw i}}async signInWithPassword(n){try{await this._removeSession();let e;if("email"in n){const{email:i,password:a,options:s}=n;e=await ae(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:i,password:a,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}},xform:Mc})}else if("phone"in n){const{phone:i,password:a,options:s}=n;e=await ae(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:i,password:a,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}},xform:Mc})}else throw new dr("You must provide either an email or phone number and a password");const{data:o,error:r}=e;return r?{data:{user:null,session:null},error:r}:!o||!o.session||!o.user?{data:{user:null,session:null},error:new vi}:(o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",o.session)),{data:Object.assign({user:o.user,session:o.session},o.weak_password?{weakPassword:o.weak_password}:null),error:r})}catch(e){if(oe(e))return{data:{user:null,session:null},error:e};throw e}}async signInWithOAuth(n){var e,o,r,i;return await this._removeSession(),await this._handleProviderSignIn(n.provider,{redirectTo:(e=n.options)===null||e===void 0?void 0:e.redirectTo,scopes:(o=n.options)===null||o===void 0?void 0:o.scopes,queryParams:(r=n.options)===null||r===void 0?void 0:r.queryParams,skipBrowserRedirect:(i=n.options)===null||i===void 0?void 0:i.skipBrowserRedirect})}async exchangeCodeForSession(n){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(n))}async _exchangeCodeForSession(n){const e=await ur(this.storage,`${this.storageKey}-code-verifier`),[o,r]=(e??"").split("/"),{data:i,error:a}=await ae(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:n,code_verifier:o},xform:Dn});return await bi(this.storage,`${this.storageKey}-code-verifier`),a?{data:{user:null,session:null,redirectType:null},error:a}:!i||!i.session||!i.user?{data:{user:null,session:null,redirectType:null},error:new vi}:(i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers("SIGNED_IN",i.session)),{data:Object.assign(Object.assign({},i),{redirectType:r??null}),error:a})}async signInWithIdToken(n){await this._removeSession();try{const{options:e,provider:o,token:r,access_token:i,nonce:a}=n,s=await ae(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:o,id_token:r,access_token:i,nonce:a,gotrue_meta_security:{captcha_token:e==null?void 0:e.captchaToken}},xform:Dn}),{data:c,error:l}=s;return l?{data:{user:null,session:null},error:l}:!c||!c.session||!c.user?{data:{user:null,session:null},error:new vi}:(c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers("SIGNED_IN",c.session)),{data:c,error:l})}catch(e){if(oe(e))return{data:{user:null,session:null},error:e};throw e}}async signInWithOtp(n){var e,o,r,i,a;try{if(await this._removeSession(),"email"in n){const{email:s,options:c}=n;let l=null,u=null;this.flowType==="pkce"&&([l,u]=await Ot(this.storage,this.storageKey));const{error:d}=await ae(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:s,data:(e=c==null?void 0:c.data)!==null&&e!==void 0?e:{},create_user:(o=c==null?void 0:c.shouldCreateUser)!==null&&o!==void 0?o:!0,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken},code_challenge:l,code_challenge_method:u},redirectTo:c==null?void 0:c.emailRedirectTo});return{data:{user:null,session:null},error:d}}if("phone"in n){const{phone:s,options:c}=n,{data:l,error:u}=await ae(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:s,data:(r=c==null?void 0:c.data)!==null&&r!==void 0?r:{},create_user:(i=c==null?void 0:c.shouldCreateUser)!==null&&i!==void 0?i:!0,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken},channel:(a=c==null?void 0:c.channel)!==null&&a!==void 0?a:"sms"}});return{data:{user:null,session:null,messageId:l==null?void 0:l.message_id},error:u}}throw new dr("You must provide either an email or phone number.")}catch(s){if(oe(s))return{data:{user:null,session:null},error:s};throw s}}async verifyOtp(n){var e,o;try{n.type!=="email_change"&&n.type!=="phone_change"&&await this._removeSession();let r,i;"options"in n&&(r=(e=n.options)===null||e===void 0?void 0:e.redirectTo,i=(o=n.options)===null||o===void 0?void 0:o.captchaToken);const{data:a,error:s}=await ae(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},n),{gotrue_meta_security:{captcha_token:i}}),redirectTo:r,xform:Dn});if(s)throw s;if(!a)throw new Error("An error occurred on token verification.");const c=a.session,l=a.user;return c!=null&&c.access_token&&(await this._saveSession(c),await this._notifyAllSubscribers(n.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",c)),{data:{user:l,session:c},error:null}}catch(r){if(oe(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithSSO(n){var e,o,r;try{await this._removeSession();let i=null,a=null;return this.flowType==="pkce"&&([i,a]=await Ot(this.storage,this.storageKey)),await ae(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in n?{provider_id:n.providerId}:null),"domain"in n?{domain:n.domain}:null),{redirect_to:(o=(e=n.options)===null||e===void 0?void 0:e.redirectTo)!==null&&o!==void 0?o:void 0}),!((r=n==null?void 0:n.options)===null||r===void 0)&&r.captchaToken?{gotrue_meta_security:{captcha_token:n.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:i,code_challenge_method:a}),headers:this.headers,xform:p5})}catch(i){if(oe(i))return{data:null,error:i};throw i}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async n=>{const{data:{session:e},error:o}=n;if(o)throw o;if(!e)throw new ct;const{error:r}=await ae(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:e.access_token});return{data:{user:null,session:null},error:r}})}catch(n){if(oe(n))return{data:{user:null,session:null},error:n};throw n}}async resend(n){try{n.type!="email_change"&&n.type!="phone_change"&&await this._removeSession();const e=`${this.url}/resend`;if("email"in n){const{email:o,type:r,options:i}=n,{error:a}=await ae(this.fetch,"POST",e,{headers:this.headers,body:{email:o,type:r,gotrue_meta_security:{captcha_token:i==null?void 0:i.captchaToken}},redirectTo:i==null?void 0:i.emailRedirectTo});return{data:{user:null,session:null},error:a}}else if("phone"in n){const{phone:o,type:r,options:i}=n,{data:a,error:s}=await ae(this.fetch,"POST",e,{headers:this.headers,body:{phone:o,type:r,gotrue_meta_security:{captcha_token:i==null?void 0:i.captchaToken}}});return{data:{user:null,session:null,messageId:a==null?void 0:a.message_id},error:s}}throw new dr("You must provide either an email or phone number and a type")}catch(e){if(oe(e))return{data:{user:null,session:null},error:e};throw e}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async e=>e))}async _acquireLock(n,e){this._debug("#_acquireLock","begin",n);try{if(this.lockAcquired){const o=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),r=(async()=>(await o,await e()))();return this.pendingInLock.push((async()=>{try{await r}catch{}})()),r}return await this.lock(`lock:${this.storageKey}`,n,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const o=e();for(this.pendingInLock.push((async()=>{try{await o}catch{}})()),await o;this.pendingInLock.length;){const r=[...this.pendingInLock];await Promise.all(r),this.pendingInLock.splice(0,r.length)}return await o}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(n){this._debug("#_useSession","begin");try{const e=await this.__loadSession();return await n(e)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let n=null;const e=await ur(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",e),e!==null&&(this._isValidSession(e)?n=e:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!n)return{data:{session:null},error:null};const o=n.expires_at?n.expires_at<=Date.now()/1e3:!1;if(this._debug("#__loadSession()",`session has${o?"":" not"} expired`,"expires_at",n.expires_at),!o)return this.storage.isServer&&(n=new Proxy(n,{get(s,c,l){return c==="user"&&console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),Reflect.get(s,c,l)}})),{data:{session:n},error:null};const{session:r,error:i}=await this._callRefreshToken(n.refresh_token);return i?{data:{session:null},error:i}:{data:{session:r},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(n){return n?await this._getUser(n):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(n){try{return n?await ae(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:n,xform:Wn}):await this._useSession(async e=>{var o,r,i;const{data:a,error:s}=e;if(s)throw s;return!((o=a.session)===null||o===void 0)&&o.access_token?await ae(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(i=(r=a.session)===null||r===void 0?void 0:r.access_token)!==null&&i!==void 0?i:void 0,xform:Wn}):{data:{user:null},error:new ct}})}catch(e){if(oe(e))return{data:{user:null},error:e};throw e}}async updateUser(n,e={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(n,e))}async _updateUser(n,e={}){try{return await this._useSession(async o=>{const{data:r,error:i}=o;if(i)throw i;if(!r.session)throw new ct;const a=r.session;let s=null,c=null;this.flowType==="pkce"&&n.email!=null&&([s,c]=await Ot(this.storage,this.storageKey));const{data:l,error:u}=await ae(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:e==null?void 0:e.emailRedirectTo,body:Object.assign(Object.assign({},n),{code_challenge:s,code_challenge_method:c}),jwt:a.access_token,xform:Wn});if(u)throw u;return a.user=l.user,await this._saveSession(a),await this._notifyAllSubscribers("USER_UPDATED",a),{data:{user:a.user},error:null}})}catch(o){if(oe(o))return{data:{user:null},error:o};throw o}}_decodeJWT(n){return Lc(n)}async setSession(n){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(n))}async _setSession(n){try{if(!n.access_token||!n.refresh_token)throw new ct;const e=Date.now()/1e3;let o=e,r=!0,i=null;const a=Lc(n.access_token);if(a.exp&&(o=a.exp,r=o<=e),r){const{session:s,error:c}=await this._callRefreshToken(n.refresh_token);if(c)return{data:{user:null,session:null},error:c};if(!s)return{data:{user:null,session:null},error:null};i=s}else{const{data:s,error:c}=await this._getUser(n.access_token);if(c)throw c;i={access_token:n.access_token,refresh_token:n.refresh_token,user:s.user,token_type:"bearer",expires_in:o-e,expires_at:o},await this._saveSession(i),await this._notifyAllSubscribers("SIGNED_IN",i)}return{data:{user:i.user,session:i},error:null}}catch(e){if(oe(e))return{data:{session:null,user:null},error:e};throw e}}async refreshSession(n){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(n))}async _refreshSession(n){try{return await this._useSession(async e=>{var o;if(!n){const{data:a,error:s}=e;if(s)throw s;n=(o=a.session)!==null&&o!==void 0?o:void 0}if(!(n!=null&&n.refresh_token))throw new ct;const{session:r,error:i}=await this._callRefreshToken(n.refresh_token);return i?{data:{user:null,session:null},error:i}:r?{data:{user:r.user,session:r},error:null}:{data:{user:null,session:null},error:null}})}catch(e){if(oe(e))return{data:{user:null,session:null},error:e};throw e}}async _getSessionFromURL(n){try{if(!gn())throw new pr("No browser detected.");if(this.flowType==="implicit"&&!this._isImplicitGrantFlow())throw new pr("Not a valid implicit grant flow url.");if(this.flowType=="pkce"&&!n)throw new jc("Not a valid PKCE flow url.");const e=gi(window.location.href);if(n){if(!e.code)throw new jc("No code detected.");const{data:w,error:$}=await this._exchangeCodeForSession(e.code);if($)throw $;const O=new URL(window.location.href);return O.searchParams.delete("code"),window.history.replaceState(window.history.state,"",O.toString()),{data:{session:w.session,redirectType:null},error:null}}if(e.error||e.error_description||e.error_code)throw new pr(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});const{provider_token:o,provider_refresh_token:r,access_token:i,refresh_token:a,expires_in:s,expires_at:c,token_type:l}=e;if(!i||!s||!a||!l)throw new pr("No session defined in URL");const u=Math.round(Date.now()/1e3),d=parseInt(s);let p=u+d;c&&(p=parseInt(c));const f=p-u;f*1e3<=eo&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${d}s`);const g=p-d;u-g>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",g,p,u):u-g<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew",g,p,u);const{data:v,error:b}=await this._getUser(i);if(b)throw b;const y={provider_token:o,provider_refresh_token:r,access_token:i,expires_in:d,expires_at:p,refresh_token:a,token_type:l,user:v.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:y,redirectType:e.type},error:null}}catch(e){if(oe(e))return{data:{session:null,redirectType:null},error:e};throw e}}_isImplicitGrantFlow(){const n=gi(window.location.href);return!!(gn()&&(n.access_token||n.error_description))}async _isPKCEFlow(){const n=gi(window.location.href),e=await ur(this.storage,`${this.storageKey}-code-verifier`);return!!(n.code&&e)}async signOut(n={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(n))}async _signOut({scope:n}={scope:"global"}){return await this._useSession(async e=>{var o;const{data:r,error:i}=e;if(i)return{error:i};const a=(o=r.session)===null||o===void 0?void 0:o.access_token;if(a){const{error:s}=await this.admin.signOut(a,n);if(s&&!(s5(s)&&(s.status===404||s.status===401)))return{error:s}}return n!=="others"&&(await this._removeSession(),await bi(this.storage,`${this.storageKey}-code-verifier`),await this._notifyAllSubscribers("SIGNED_OUT",null)),{error:null}})}onAuthStateChange(n){const e=Gw(),o={id:e,callback:n,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",e),this.stateChangeEmitters.delete(e)}};return this._debug("#onAuthStateChange()","registered callback with id",e),this.stateChangeEmitters.set(e,o),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(e)})))(),{data:{subscription:o}}}async _emitInitialSession(n){return await this._useSession(async e=>{var o,r;try{const{data:{session:i},error:a}=e;if(a)throw a;await((o=this.stateChangeEmitters.get(n))===null||o===void 0?void 0:o.callback("INITIAL_SESSION",i)),this._debug("INITIAL_SESSION","callback id",n,"session",i)}catch(i){await((r=this.stateChangeEmitters.get(n))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",n,"error",i),console.error(i)}})}async resetPasswordForEmail(n,e={}){let o=null,r=null;this.flowType==="pkce"&&([o,r]=await Ot(this.storage,this.storageKey,!0));try{return await ae(this.fetch,"POST",`${this.url}/recover`,{body:{email:n,code_challenge:o,code_challenge_method:r,gotrue_meta_security:{captcha_token:e.captchaToken}},headers:this.headers,redirectTo:e.redirectTo})}catch(i){if(oe(i))return{data:null,error:i};throw i}}async getUserIdentities(){var n;try{const{data:e,error:o}=await this.getUser();if(o)throw o;return{data:{identities:(n=e.user.identities)!==null&&n!==void 0?n:[]},error:null}}catch(e){if(oe(e))return{data:null,error:e};throw e}}async linkIdentity(n){var e;try{const{data:o,error:r}=await this._useSession(async i=>{var a,s,c,l,u;const{data:d,error:p}=i;if(p)throw p;const f=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,n.provider,{redirectTo:(a=n.options)===null||a===void 0?void 0:a.redirectTo,scopes:(s=n.options)===null||s===void 0?void 0:s.scopes,queryParams:(c=n.options)===null||c===void 0?void 0:c.queryParams,skipBrowserRedirect:!0});return await ae(this.fetch,"GET",f,{headers:this.headers,jwt:(u=(l=d.session)===null||l===void 0?void 0:l.access_token)!==null&&u!==void 0?u:void 0})});if(r)throw r;return gn()&&!(!((e=n.options)===null||e===void 0)&&e.skipBrowserRedirect)&&window.location.assign(o==null?void 0:o.url),{data:{provider:n.provider,url:o==null?void 0:o.url},error:null}}catch(o){if(oe(o))return{data:{provider:n.provider,url:null},error:o};throw o}}async unlinkIdentity(n){try{return await this._useSession(async e=>{var o,r;const{data:i,error:a}=e;if(a)throw a;return await ae(this.fetch,"DELETE",`${this.url}/user/identities/${n.identity_id}`,{headers:this.headers,jwt:(r=(o=i.session)===null||o===void 0?void 0:o.access_token)!==null&&r!==void 0?r:void 0})})}catch(e){if(oe(e))return{data:null,error:e};throw e}}async _refreshAccessToken(n){const e=`#_refreshAccessToken(${n.substring(0,5)}...)`;this._debug(e,"begin");try{const o=Date.now();return await Xw(async r=>(r>0&&await Yw(200*Math.pow(2,r-1)),this._debug(e,"refreshing attempt",r),await ae(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:n},headers:this.headers,xform:Dn})),(r,i)=>{const a=200*Math.pow(2,r);return i&&yi(i)&&Date.now()+a-o<eo})}catch(o){if(this._debug(e,"error",o),oe(o))return{data:{session:null,user:null},error:o};throw o}finally{this._debug(e,"end")}}_isValidSession(n){return typeof n=="object"&&n!==null&&"access_token"in n&&"refresh_token"in n&&"expires_at"in n}async _handleProviderSignIn(n,e){const o=await this._getUrlForProvider(`${this.url}/authorize`,n,{redirectTo:e.redirectTo,scopes:e.scopes,queryParams:e.queryParams});return this._debug("#_handleProviderSignIn()","provider",n,"options",e,"url",o),gn()&&!e.skipBrowserRedirect&&window.location.assign(o),{data:{provider:n,url:o},error:null}}async _recoverAndRefresh(){var n;const e="#_recoverAndRefresh()";this._debug(e,"begin");try{const o=await ur(this.storage,this.storageKey);if(this._debug(e,"session from storage",o),!this._isValidSession(o)){this._debug(e,"session is not valid"),o!==null&&await this._removeSession();return}const r=Math.round(Date.now()/1e3),i=((n=o.expires_at)!==null&&n!==void 0?n:1/0)<r+Bc;if(this._debug(e,`session has${i?"":" not"} expired with margin of ${Bc}s`),i){if(this.autoRefreshToken&&o.refresh_token){const{error:a}=await this._callRefreshToken(o.refresh_token);a&&(console.error(a),yi(a)||(this._debug(e,"refresh failed with a non-retryable error, removing the session",a),await this._removeSession()))}}else await this._notifyAllSubscribers("SIGNED_IN",o)}catch(o){this._debug(e,"error",o),console.error(o);return}finally{this._debug(e,"end")}}async _callRefreshToken(n){var e,o;if(!n)throw new ct;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const r=`#_callRefreshToken(${n.substring(0,5)}...)`;this._debug(r,"begin");try{this.refreshingDeferred=new Yr;const{data:i,error:a}=await this._refreshAccessToken(n);if(a)throw a;if(!i.session)throw new ct;await this._saveSession(i.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",i.session);const s={session:i.session,error:null};return this.refreshingDeferred.resolve(s),s}catch(i){if(this._debug(r,"error",i),oe(i)){const a={session:null,error:i};return yi(i)||(await this._removeSession(),await this._notifyAllSubscribers("SIGNED_OUT",null)),(e=this.refreshingDeferred)===null||e===void 0||e.resolve(a),a}throw(o=this.refreshingDeferred)===null||o===void 0||o.reject(i),i}finally{this.refreshingDeferred=null,this._debug(r,"end")}}async _notifyAllSubscribers(n,e,o=!0){const r=`#_notifyAllSubscribers(${n})`;this._debug(r,"begin",e,`broadcast = ${o}`);try{this.broadcastChannel&&o&&this.broadcastChannel.postMessage({event:n,session:e});const i=[],a=Array.from(this.stateChangeEmitters.values()).map(async s=>{try{await s.callback(n,e)}catch(c){i.push(c)}});if(await Promise.all(a),i.length>0){for(let s=0;s<i.length;s+=1)console.error(i[s]);throw i[0]}}finally{this._debug(r,"end")}}async _saveSession(n){this._debug("#_saveSession()",n),await Ku(this.storage,this.storageKey,n)}async _removeSession(){this._debug("#_removeSession()"),await bi(this.storage,this.storageKey)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const n=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{n&&gn()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",n)}catch(e){console.error("removing visibilitychange callback failed",e)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const n=setInterval(()=>this._autoRefreshTokenTick(),eo);this.autoRefreshTicker=n,n&&typeof n=="object"&&typeof n.unref=="function"?n.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(n),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const n=this.autoRefreshTicker;this.autoRefreshTicker=null,n&&clearInterval(n)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const n=Date.now();try{return await this._useSession(async e=>{const{data:{session:o}}=e;if(!o||!o.refresh_token||!o.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const r=Math.floor((o.expires_at*1e3-n)/eo);this._debug("#_autoRefreshTokenTick()",`access token expires in ${r} ticks, a tick lasts ${eo}ms, refresh threshold is ${Dc} ticks`),r<=Dc&&await this._callRefreshToken(o.refresh_token)})}catch(e){console.error("Auto refresh tick failed with error. This is likely a transient error.",e)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(n){if(n.isAcquireTimeout||n instanceof qu)this._debug("auto refresh token tick lock not available");else throw n}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!gn()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(n){console.error("_handleVisibilityChange",n)}}async _onVisibilityChanged(n){const e=`#_onVisibilityChanged(${n})`;this._debug(e,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),n||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(e,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(n,e,o){const r=[`provider=${encodeURIComponent(e)}`];if(o!=null&&o.redirectTo&&r.push(`redirect_to=${encodeURIComponent(o.redirectTo)}`),o!=null&&o.scopes&&r.push(`scopes=${encodeURIComponent(o.scopes)}`),this.flowType==="pkce"){const[i,a]=await Ot(this.storage,this.storageKey),s=new URLSearchParams({code_challenge:`${encodeURIComponent(i)}`,code_challenge_method:`${encodeURIComponent(a)}`});r.push(s.toString())}if(o!=null&&o.queryParams){const i=new URLSearchParams(o.queryParams);r.push(i.toString())}return o!=null&&o.skipBrowserRedirect&&r.push(`skip_http_redirect=${o.skipBrowserRedirect}`),`${n}?${r.join("&")}`}async _unenroll(n){try{return await this._useSession(async e=>{var o;const{data:r,error:i}=e;return i?{data:null,error:i}:await ae(this.fetch,"DELETE",`${this.url}/factors/${n.factorId}`,{headers:this.headers,jwt:(o=r==null?void 0:r.session)===null||o===void 0?void 0:o.access_token})})}catch(e){if(oe(e))return{data:null,error:e};throw e}}async _enroll(n){try{return await this._useSession(async e=>{var o,r;const{data:i,error:a}=e;if(a)return{data:null,error:a};const{data:s,error:c}=await ae(this.fetch,"POST",`${this.url}/factors`,{body:{friendly_name:n.friendlyName,factor_type:n.factorType,issuer:n.issuer},headers:this.headers,jwt:(o=i==null?void 0:i.session)===null||o===void 0?void 0:o.access_token});return c?{data:null,error:c}:(!((r=s==null?void 0:s.totp)===null||r===void 0)&&r.qr_code&&(s.totp.qr_code=`data:image/svg+xml;utf-8,${s.totp.qr_code}`),{data:s,error:null})})}catch(e){if(oe(e))return{data:null,error:e};throw e}}async _verify(n){return this._acquireLock(-1,async()=>{try{return await this._useSession(async e=>{var o;const{data:r,error:i}=e;if(i)return{data:null,error:i};const{data:a,error:s}=await ae(this.fetch,"POST",`${this.url}/factors/${n.factorId}/verify`,{body:{code:n.code,challenge_id:n.challengeId},headers:this.headers,jwt:(o=r==null?void 0:r.session)===null||o===void 0?void 0:o.access_token});return s?{data:null,error:s}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+a.expires_in},a)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",a),{data:a,error:s})})}catch(e){if(oe(e))return{data:null,error:e};throw e}})}async _challenge(n){return this._acquireLock(-1,async()=>{try{return await this._useSession(async e=>{var o;const{data:r,error:i}=e;return i?{data:null,error:i}:await ae(this.fetch,"POST",`${this.url}/factors/${n.factorId}/challenge`,{headers:this.headers,jwt:(o=r==null?void 0:r.session)===null||o===void 0?void 0:o.access_token})})}catch(e){if(oe(e))return{data:null,error:e};throw e}})}async _challengeAndVerify(n){const{data:e,error:o}=await this._challenge({factorId:n.factorId});return o?{data:null,error:o}:await this._verify({factorId:n.factorId,challengeId:e.id,code:n.code})}async _listFactors(){const{data:{user:n},error:e}=await this.getUser();if(e)return{data:null,error:e};const o=(n==null?void 0:n.factors)||[],r=o.filter(i=>i.factor_type==="totp"&&i.status==="verified");return{data:{all:o,totp:r},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async n=>{var e,o;const{data:{session:r},error:i}=n;if(i)return{data:null,error:i};if(!r)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const a=this._decodeJWT(r.access_token);let s=null;a.aal&&(s=a.aal);let c=s;((o=(e=r.user.factors)===null||e===void 0?void 0:e.filter(d=>d.status==="verified"))!==null&&o!==void 0?o:[]).length>0&&(c="aal2");const u=a.amr||[];return{data:{currentLevel:s,nextLevel:c,currentAuthenticationMethods:u},error:null}}))}}Vo.nextInstanceID=0;const C5=Vo;class _5 extends C5{constructor(n){super(n)}}var S5=function(t,n,e,o){function r(i){return i instanceof e?i:new e(function(a){a(i)})}return new(e||(e=Promise))(function(i,a){function s(u){try{l(o.next(u))}catch(d){a(d)}}function c(u){try{l(o.throw(u))}catch(d){a(d)}}function l(u){u.done?i(u.value):r(u.value).then(s,c)}l((o=o.apply(t,n||[])).next())})};class I5{constructor(n,e,o){var r,i,a,s,c,l,u,d;if(this.supabaseUrl=n,this.supabaseKey=e,!n)throw new Error("supabaseUrl is required.");if(!e)throw new Error("supabaseKey is required.");const p=Vw(n);this.realtimeUrl=`${p}/realtime/v1`.replace(/^http/i,"ws"),this.authUrl=`${p}/auth/v1`,this.storageUrl=`${p}/storage/v1`,this.functionsUrl=`${p}/functions/v1`;const f=`sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,g={db:jw,realtime:Fw,auth:Object.assign(Object.assign({},Rw),{storageKey:f}),global:Lw},v=Uw(o??{},g);this.storageKey=(i=(r=v.auth)===null||r===void 0?void 0:r.storageKey)!==null&&i!==void 0?i:"",this.headers=(s=(a=v.global)===null||a===void 0?void 0:a.headers)!==null&&s!==void 0?s:{},this.auth=this._initSupabaseAuthClient((c=v.auth)!==null&&c!==void 0?c:{},this.headers,(l=v.global)===null||l===void 0?void 0:l.fetch),this.fetch=Nw(e,this._getAccessToken.bind(this),(u=v.global)===null||u===void 0?void 0:u.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers},v.realtime)),this.rest=new ja(`${p}/rest/v1`,{headers:this.headers,schema:(d=v.db)===null||d===void 0?void 0:d.schema,fetch:this.fetch}),this._listenForAuthEvents()}get functions(){return new Gk(this.functionsUrl,{headers:this.headers,customFetch:this.fetch})}get storage(){return new Ow(this.storageUrl,this.headers,this.fetch)}from(n){return this.rest.from(n)}schema(n){return this.rest.schema(n)}rpc(n,e={},o={}){return this.rest.rpc(n,e,o)}channel(n,e={config:{}}){return this.realtime.channel(n,e)}getChannels(){return this.realtime.getChannels()}removeChannel(n){return this.realtime.removeChannel(n)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var n,e;return S5(this,void 0,void 0,function*(){const{data:o}=yield this.auth.getSession();return(e=(n=o.session)===null||n===void 0?void 0:n.access_token)!==null&&e!==void 0?e:null})}_initSupabaseAuthClient({autoRefreshToken:n,persistSession:e,detectSessionInUrl:o,storage:r,storageKey:i,flowType:a,debug:s},c,l){const u={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new _5({url:this.authUrl,headers:Object.assign(Object.assign({},u),c),storageKey:i,autoRefreshToken:n,persistSession:e,detectSessionInUrl:o,storage:r,flowType:a,debug:s,fetch:l})}_initRealtimeClient(n){return new vw(this.realtimeUrl,Object.assign(Object.assign({},n),{params:Object.assign({apikey:this.supabaseKey},n==null?void 0:n.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((e,o)=>{this._handleTokenChanged(e,"CLIENT",o==null?void 0:o.access_token)})}_handleTokenChanged(n,e,o){(n==="TOKEN_REFRESHED"||n==="SIGNED_IN")&&this.changedAccessToken!==o?(this.realtime.setAuth(o??null),this.changedAccessToken=o):n==="SIGNED_OUT"&&(this.realtime.setAuth(this.supabaseKey),e=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const $5=(t,n,e)=>new I5(t,n,e),P5="https://xixsodjnauzphfhzpknq.supabase.co",E5="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpeHNvZGpuYXV6cGhmaHpwa25xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxMzg4NTEsImV4cCI6MjAyODcxNDg1MX0.pUQAS9v9wHduATEbrIE_Q8MiCscj50JBXWwMndS-Y9o",vo=$5(P5,E5),za=t=>(ba("data-v-884cb825"),t=t(),va(),t),T5={class:"form-container"},O5=za(()=>F("h3",{class:"title"},"Inicia sesión",-1)),A5={class:"form"},B5={class:"password"},L5=["type"],j5=za(()=>F("p",{class:"page-link"},[F("span",{class:"page-link-label"},"Olvidaste tu contraseña?")],-1)),R5=za(()=>F("div",null,[F("label",{class:"check-label",style:{"font-size":"12px"},for:"checkbox"},"Mantener sesion iniciada"),F("input",{type:"checkbox",id:"checkbox",class:"check"})],-1)),F5={key:0,class:"mostrarError"},M5={class:"errormsg"},z5={__name:"FormLogin",emits:["mostrarFormRegistro"],setup(t,{emit:n}){const e=n,o=()=>{e("mostrarFormRegistro")},r=Lu();let i=Ee(""),a=Ee(""),s=Ee("");async function c(){if(i.value,a.value){const{data:g,error:v}=await vo.auth.signInWithPassword({email:i.value,password:a.value});v?(s.value="Email o contraseña incorrecto, vuelve a intentarlo.",setTimeout(()=>s.value="",2500)):(console.log(g),r.push({name:"homeview"}))}else s.value="Completa el email y contraseña para iniciar sesion.",setTimeout(()=>s.value="",2500)}async function l(){const g=await vo.auth.getSession();console.log(g)}async function u(){const{error:g}=await vo.auth.signOut();console.log(g||"sesion cerrada")}let d=Ee(!1),p=Ee("password");const f=()=>{d.value=d.value===!1,p.value=p.value==="password"?"text":"password"};return(g,v)=>{const b=Be("v-icon");return C(),B("div",T5,[O5,F("form",A5,[on(F("input",{type:"email",class:"input",placeholder:"Email",autocomplete:"email","onUpdate:modelValue":v[0]||(v[0]=y=>Te(i)?i.value=y:i=y)},null,512),[[mt,_e(i)]]),F("div",B5,[_e(d)?(C(),X(b,{key:1,onClick:f,class:"password-icono",name:"bi-eye"})):(C(),X(b,{key:0,onClick:f,class:"password-icono",name:"bi-eye-slash"})),on(F("input",{type:_e(p),id:"password",class:"input",placeholder:"Contraseña",autocomplete:"current-password","onUpdate:modelValue":v[1]||(v[1]=y=>Te(a)?a.value=y:a=y)},null,8,L5),[[Li,_e(a)]])]),j5,F("button",{class:"form-btn",onClick:yr(c,["prevent"])},"Entrar"),F("button",{class:"form-btn",onClick:yr(l,["prevent"])},"Ver sesion"),F("button",{class:"form-btn",onClick:yr(u,["prevent"])},"Log out"),R5,_e(s)?(C(),B("div",F5,[F("p",M5,Ge(_e(s)),1)])):re("",!0),F("p",{class:"sign-up-label"},[wt(" No tienes cuenta?"),F("span",{style:{"font-size":"small","text-decoration":"none"},class:"sign-up-link",onClick:o},"Crea una!")])])])}}},D5=Wr(z5,[["__scopeId","data-v-884cb825"]]),N5=t=>(ba("data-v-9ed5e38c"),t=t(),va(),t),V5={class:"form-container"},U5=N5(()=>F("h3",{class:"title"},"Crear Cuenta",-1)),K5={class:"form"},H5={class:"password"},q5=["type"],W5={class:"password"},G5=["type"],J5={key:0,class:"mostrarMsg"},Z5={class:"errormsg"},Y5={key:1,class:"mostrarMsg"},X5={class:"exitomsg"},Q5={__name:"FormRegistro",emits:["mostrarLogin"],setup(t,{emit:n}){const e=n;function o(){e("mostrarLogin")}Lu();let r=Ee(""),i=Ee(""),a=Ee(""),s=Ee(""),c=Ee(""),l=Ee(""),u=Ee(""),d=Ee("");async function p(){if(s.value,i.value,a.value,s.value,c.value,l.value)if(c.value===l.value){const{data:b,error:y}=await vo.auth.signUp({email:s.value,password:c.value,options:{data:{dni:a.value,nombre:r.value,apellido:i.value}}});y?(u.value="Completa correctamente todos los campos",setTimeout(()=>u.value="",2500)):(console.log(b),d.value="Registrado con exito, prueba de iniciar sesion.",setTimeout(()=>{d.value="",o()},3e3))}else u.value="Las contraseñas tienen que coincidir perro",setTimeout(()=>u.value="",2500);else u.value="Completa correctamente todos los campos",setTimeout(()=>u.value="",2500)}let f=Ee(!1),g=Ee("password");const v=()=>{f.value=f.value===!1,g.value=g.value==="password"?"text":"password"};return(b,y)=>{const w=Be("v-icon");return C(),B("div",V5,[U5,F("form",K5,[on(F("input",{type:"text",class:"input",placeholder:"Nombre",autocomplete:"name","onUpdate:modelValue":y[0]||(y[0]=$=>Te(r)?r.value=$:r=$),required:""},null,512),[[mt,_e(r)]]),on(F("input",{type:"text",class:"input",placeholder:"Apellido",autocomplete:"additional-name","onUpdate:modelValue":y[1]||(y[1]=$=>Te(i)?i.value=$:i=$),required:""},null,512),[[mt,_e(i)]]),on(F("input",{type:"text",class:"input",placeholder:"D.N.I",autocomplete:"number","onUpdate:modelValue":y[2]||(y[2]=$=>Te(a)?a.value=$:a=$),required:""},null,512),[[mt,_e(a)]]),on(F("input",{type:"email",class:"input",placeholder:"Email",autocomplete:"email","onUpdate:modelValue":y[3]||(y[3]=$=>Te(s)?s.value=$:s=$),required:""},null,512),[[mt,_e(s)]]),F("div",H5,[_e(f)?(C(),X(w,{key:1,onClick:v,class:"password-icono",name:"bi-eye"})):(C(),X(w,{key:0,onClick:v,class:"password-icono",name:"bi-eye-slash"})),on(F("input",{type:_e(g),class:"input",placeholder:"Contraseña",autocomplete:"new-password","onUpdate:modelValue":y[4]||(y[4]=$=>Te(c)?c.value=$:c=$),required:""},null,8,q5),[[Li,_e(c)]])]),F("div",W5,[on(F("input",{type:_e(g),class:"input",placeholder:"Repetir contraseña",autocomplete:"new-password","onUpdate:modelValue":y[5]||(y[5]=$=>Te(l)?l.value=$:l=$),required:""},null,8,G5),[[Li,_e(l)]])]),F("button",{class:"form-btn",onClick:yr(p,["prevent"])},"Crear")]),_e(u)?(C(),B("div",J5,[F("p",Z5,Ge(_e(u)),1)])):re("",!0),_e(d)?(C(),B("div",Y5,[F("p",X5,Ge(_e(d)),1)])):re("",!0),F("p",{class:"sign-up-label"},[wt(" ¿Ya tienes cuenta?"),F("span",{class:"sign-up-link",onClick:o},"¡Inicia sesion!")])])}}},ex=Wr(Q5,[["__scopeId","data-v-9ed5e38c"]]),nx=t=>(ba("data-v-50972e3a"),t=t(),va(),t),tx=nx(()=>F("img",{src:Nk,class:"fondo",alt:""},null,-1)),ox={class:"container-general"},rx={class:"container-forms"},ix={key:0,class:"container-login"},ax={key:1,class:"container-registro"},sx=jp('<section class="container-slogan" data-v-50972e3a><div class="container-texto" data-v-50972e3a><div class="titulo" data-v-50972e3a><h1 data-v-50972e3a> TurnApp </h1></div><div class="slogan" data-v-50972e3a><p data-v-50972e3a> Gestiona tus turnos con facilidad y comodidad. </p></div><div data-v-50972e3a><img src="'+Vk+'" alt="calendar" class="logoCalendario" data-v-50972e3a></div></div></section>',1),cx={__name:"LoginView",setup(t){const n=Ee(!1);function e(){n.value=!0}function o(){n.value=!1}return(r,i)=>(C(),B(Oe,null,[tx,F("div",ox,[F("section",rx,[n.value?(C(),B("div",ax,[he(ex,{onMostrarLogin:o})])):(C(),B("div",ix,[he(D5,{onMostrarFormRegistro:e})]))]),sx])],64))}},lx=Wr(cx,[["__scopeId","data-v-50972e3a"]]),Wu=zk({history:hk("/"),routes:[{path:"/",name:"login",component:lx},{path:"/noauth",name:"noauth",component:()=>ln(()=>import("./NoAuthView-CRXiPpVH.js"),[])},{path:"/homeView",name:"homeview",component:()=>ln(()=>import("./HomeView-B9qzNHeW.js"),__vite__mapDeps([0,1,2,3])),meta:{requireAuth:!0}},{path:"/configuracion",name:"configuracion",component:()=>ln(()=>import("./ConfiguracionView-DzYFTO1t.js"),__vite__mapDeps([4,1,2,5])),meta:{requireAuth:!0}},{path:"/gestionTurnos/lista",name:"lista",component:()=>ln(()=>import("./GestionListaView-D-j-CyJI.js"),__vite__mapDeps([6,1,2,7])),meta:{requireAuth:!0}},{path:"/gestionTurnos/calendario",name:"calendario",component:()=>ln(()=>import("./GestionCalendarioView-xYue0570.js"),__vite__mapDeps([8,1,2,9])),meta:{requireAuth:!0}},{path:"/tutorial",name:"tutorial",component:()=>ln(()=>import("./TutorialView-B_vl5DY0.js"),__vite__mapDeps([10,1,2,11])),meta:{requireAuth:!0}}]});async function ux(t){(await vo.auth.getSession()).data.session==null?t("/noauth"):t()}Wu.beforeEach((t,n,e)=>{t.meta.requireAuth?(console.log("requiere auth perro"),ux(e)):(console.log("no requiere auth perro"),e())});Sy(Ty,Ey,Oy,Py,$y,Ay);const Qe=Pf(jy);Qe.use(Bf());Qe.use(Wu);Qe.use(n0);Qe.component("v-icon",Iy);Qe.component("Button",Hr);Qe.component("Password",iu);Qe.component("Textarea",au);Qe.component("IconField",su);Qe.component("InputIcon",cu);Qe.component("Avatar",lu);Qe.component("FileUpload",gu);Qe.component("TieredMenu",vu);Qe.component("Menubar",xu);Qe.mount("#app");export{Gt as T,Wr as _,F as a,he as b,B as c,wt as d,va as e,Ee as f,_e as g,yr as h,Te as i,re as j,C as o,ba as p,Be as r,vo as s,Lu as u,Ye as w};
