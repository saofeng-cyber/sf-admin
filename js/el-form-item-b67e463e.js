var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(r,t,n)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,s=(e,r)=>{for(var t in r||(r={}))a.call(r,t)&&o(e,t,r[t]);if(n)for(var t of n(r))i.call(r,t)&&o(e,t,r[t]);return e},l=(e,n)=>r(e,t(n)),u=(e,r,t)=>new Promise(((n,a)=>{var i=e=>{try{s(t.next(e))}catch(r){a(r)}},o=e=>{try{s(t.throw(e))}catch(r){a(r)}},s=e=>e.done?n(e.value):Promise.resolve(e.value).then(i,o);s((t=t.apply(e,r)).next())}));import{bf as f,bY as c,b9 as d,aD as p,bZ as v,b as y,d as h,bo as g,I as m,bl as b,b_ as j,r as w,c as q,a as F,aw as O,ag as x,a4 as A,bL as E,ah as P,O as S,bq as k,b$ as I,f as R,s as $,q as M,n as _,k as B,_ as W,bP as D,ar as V,c0 as C,bk as z,o as N,a9 as L,bw as T,bB as U,y as Z,F as J,a5 as G,ax as Y,c1 as H,c2 as K,at as Q,bC as X,w as ee,g as re,m as te,l as ne,W as ae,t as ie,p as oe,j as se,c3 as le,ai as ue,aj as fe}from"./index-f20dec1b.js";import{k as ce,j as de,l as pe,m as ve,n as ye,o as he,p as ge,q as me,a as be,S as je,r as we}from"./isEqual-43dc2218.js";import{c as qe,k as Fe,g as Oe,m as xe,e as Ae,b as Ee,d as Pe,f as Se}from"./el-checkbox-caf134c1.js";function ke(){if(!arguments.length)return[];var e=arguments[0];return f(e)?e:[e]}const Ie=Object.getOwnPropertySymbols?function(e){for(var r=[];e;)ve(r,de(e)),e=Oe(e);return r}:pe;function Re(e){return ye(e,Fe,Ie)}var $e=Object.prototype.hasOwnProperty;var Me=/\w*$/;var _e=c?c.prototype:void 0,Be=_e?_e.valueOf:void 0;var We="[object Boolean]",De="[object Date]",Ve="[object Map]",Ce="[object Number]",ze="[object RegExp]",Ne="[object Set]",Le="[object String]",Te="[object Symbol]",Ue="[object ArrayBuffer]",Ze="[object DataView]",Je="[object Float32Array]",Ge="[object Float64Array]",Ye="[object Int8Array]",He="[object Int16Array]",Ke="[object Int32Array]",Qe="[object Uint8Array]",Xe="[object Uint8ClampedArray]",er="[object Uint16Array]",rr="[object Uint32Array]";function tr(e,r,t){var n,a,i,o=e.constructor;switch(r){case Ue:return xe(e);case We:case De:return new o(+e);case Ze:return function(e,r){var t=r?xe(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}(e,t);case Je:case Ge:case Ye:case He:case Ke:case Qe:case Xe:case er:case rr:return Ae(e,t);case Ve:return new o;case Ce:case Le:return new o(e);case ze:return(i=new(a=e).constructor(a.source,Me.exec(a))).lastIndex=a.lastIndex,i;case Ne:return new o;case Te:return n=e,Be?Object(Be.call(n)):{}}}var nr="[object Map]";var ar=ge&&ge.isMap;const ir=ar?me(ar):function(e){return d(e)&&he(e)==nr};var or="[object Set]";var sr=ge&&ge.isSet;const lr=sr?me(sr):function(e){return d(e)&&he(e)==or};var ur=1,fr=2,cr=4,dr="[object Arguments]",pr="[object Function]",vr="[object GeneratorFunction]",yr="[object Object]",hr={};function gr(e,r,t,n,a,i){var o,s=r&ur,l=r&fr,u=r&cr;if(t&&(o=a?t(e,n,a,i):t(e)),void 0!==o)return o;if(!p(e))return e;var c=f(e);if(c){if(o=function(e){var r=e.length,t=new e.constructor(r);return r&&"string"==typeof e[0]&&$e.call(e,"index")&&(t.index=e.index,t.input=e.input),t}(e),!s)return Ee(e,o)}else{var d=he(e),y=d==pr||d==vr;if(be(e))return Pe(e,s);if(d==yr||d==dr||y&&!a){if(o=l||y?{}:Se(e),!s)return l?function(e,r){return qe(e,Ie(e),r)}(e,function(e,r){return e&&qe(r,Fe(r),e)}(o,e)):function(e,r){return qe(e,de(e),r)}(e,function(e,r){return e&&qe(r,ce(r),e)}(o,e))}else{if(!hr[d])return a?e:{};o=tr(e,d,s)}}i||(i=new je);var h=i.get(e);if(h)return h;i.set(e,o),lr(e)?e.forEach((function(n){o.add(gr(n,r,t,n,e,i))})):ir(e)&&e.forEach((function(n,a){o.set(a,gr(n,r,t,a,e,i))}));var g=c?void 0:(u?l?Re:we:l?Fe:ce)(e);return function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n&&!1!==r(e[t],t,e););}(g||e,(function(n,a){g&&(n=e[a=n]),v(o,a,gr(n,r,t,a,e,i))})),o}hr[dr]=hr["[object Array]"]=hr["[object ArrayBuffer]"]=hr["[object DataView]"]=hr["[object Boolean]"]=hr["[object Date]"]=hr["[object Float32Array]"]=hr["[object Float64Array]"]=hr["[object Int8Array]"]=hr["[object Int16Array]"]=hr["[object Int32Array]"]=hr["[object Map]"]=hr["[object Number]"]=hr[yr]=hr["[object RegExp]"]=hr["[object Set]"]=hr["[object String]"]=hr["[object Symbol]"]=hr["[object Uint8Array]"]=hr["[object Uint8ClampedArray]"]=hr["[object Uint16Array]"]=hr["[object Uint32Array]"]=!0,hr["[object Error]"]=hr[pr]=hr["[object WeakMap]"]=!1;var mr=4;function br(e){return gr(e,mr)}const jr=y({size:{type:String,values:j},disabled:Boolean}),wr=y(l(s({},jr),{model:Object,rules:{type:h(Object)},labelPosition:{type:String,values:["left","right","top"],default:"right"},requireAsteriskPosition:{type:String,values:["left","right"],default:"left"},labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:{type:Boolean,default:!1},scrollToError:Boolean})),qr={validate:(e,r,t)=>(g(e)||m(e))&&b(r)&&m(t)};const Fr=(e,r)=>{const t=ke(r);return t.length>0?e.filter((e=>e.prop&&t.includes(e.prop))):e},Or=F({name:"ElForm"});var xr=W(F(l(s({},Or),{props:wr,emits:qr,setup(e,{expose:r,emit:t}){const n=e,a=[],i=O(),o=x("form"),f=q((()=>{const{labelPosition:e,inline:r}=n;return[o.b(),o.m(i.value||"default"),{[o.m(`label-${e}`)]:e,[o.m("inline")]:r}]})),c=(e=[])=>{n.model&&Fr(a,e).forEach((e=>e.resetField()))},d=(e=[])=>{Fr(a,e).forEach((e=>e.clearValidate()))},p=q((()=>!!n.model)),v=e=>u(this,null,(function*(){return h(void 0,e)})),y=(...e)=>u(this,[...e],(function*(e=[]){if(!p.value)return!1;const r=(e=>{if(0===a.length)return[];const r=Fr(a,e);return r.length?r:[]})(e);if(0===r.length)return!0;let t={};for(const a of r)try{yield a.validate("")}catch(n){t=s(s({},t),n)}return 0===Object.keys(t).length||Promise.reject(t)})),h=(...e)=>u(this,[...e],(function*(e=[],r){const t=!D(r);try{const t=yield y(e);return!0===t&&(null==r||r(t)),t}catch(a){if(a instanceof Error)throw a;const e=a;return n.scrollToError&&g(Object.keys(e)[0]),null==r||r(!1,e),t&&Promise.reject(e)}})),g=e=>{var r;const t=Fr(a,e)[0];t&&(null==(r=t.$el)||r.scrollIntoView())};return A((()=>n.rules),(()=>{n.validateOnRuleChange&&v().catch((e=>E()))}),{deep:!0}),P(I,S(s(l(s({},k(n)),{emit:t,resetFields:c,clearValidate:d,validateField:h,addField:e=>{a.push(e)},removeField:e=>{e.prop&&a.splice(a.indexOf(e),1)}}),function(){const e=w([]),r=q((()=>{if(!e.value.length)return"0";const r=Math.max(...e.value);return r?`${r}px`:""}));function t(t){const n=e.value.indexOf(t);return-1===n&&r.value,n}return{autoLabelWidth:r,registerLabelWidth:function(r,n){if(r&&n){const a=t(n);e.value.splice(a,1,r)}else r&&e.value.push(r)},deregisterLabelWidth:function(r){const n=t(r);n>-1&&e.value.splice(n,1)}}}()))),r({validate:v,validateField:h,resetFields:c,clearValidate:d,scrollToField:g}),(e,r)=>(R(),$("form",{class:_(B(f))},[M(e.$slots,"default")],2))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);function Ar(){return Ar=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ar.apply(this,arguments)}function Er(e){return(Er=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Pr(e,r){return(Pr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e})(e,r)}function Sr(e,r,t){return(Sr=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct.bind():function(e,r,t){var n=[null];n.push.apply(n,r);var a=new(Function.bind.apply(e,n));return t&&Pr(a,t.prototype),a}).apply(null,arguments)}function kr(e){var r="function"==typeof Map?new Map:void 0;return kr=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,n)}function n(){return Sr(e,arguments,Er(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Pr(n,e)},kr(e)}var Ir=/%[sdj%]/g,Rr=function(){};function $r(e){if(!e||!e.length)return null;var r={};return e.forEach((function(e){var t=e.field;r[t]=r[t]||[],r[t].push(e)})),r}function Mr(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var a=0,i=t.length;return"function"==typeof e?e.apply(null,t):"string"==typeof e?e.replace(Ir,(function(e){if("%%"===e)return"%";if(a>=i)return e;switch(e){case"%s":return String(t[a++]);case"%d":return Number(t[a++]);case"%j":try{return JSON.stringify(t[a++])}catch(r){return"[Circular]"}break;default:return e}})):e}function _r(e,r){return null==e||(!("array"!==r||!Array.isArray(e)||e.length)||!(!function(e){return"string"===e||"url"===e||"hex"===e||"email"===e||"date"===e||"pattern"===e}(r)||"string"!=typeof e||e))}function Br(e,r,t){var n=0,a=e.length;!function i(o){if(o&&o.length)t(o);else{var s=n;n+=1,s<a?r(e[s],i):t([])}}([])}"undefined"!=typeof process&&process.env;var Wr=function(e){var r,t;function n(r,t){var n;return(n=e.call(this,"Async Validation Error")||this).errors=r,n.fields=t,n}return t=e,(r=n).prototype=Object.create(t.prototype),r.prototype.constructor=r,Pr(r,t),n}(kr(Error));function Dr(e,r,t,n,a){if(r.first){var i=new Promise((function(r,i){var o=function(e){var r=[];return Object.keys(e).forEach((function(t){r.push.apply(r,e[t]||[])})),r}(e);Br(o,t,(function(e){return n(e),e.length?i(new Wr(e,$r(e))):r(a)}))}));return i.catch((function(e){return e})),i}var o=!0===r.firstFields?Object.keys(e):r.firstFields||[],s=Object.keys(e),l=s.length,u=0,f=[],c=new Promise((function(r,i){var c=function(e){if(f.push.apply(f,e),++u===l)return n(f),f.length?i(new Wr(f,$r(f))):r(a)};s.length||(n(f),r(a)),s.forEach((function(r){var n=e[r];-1!==o.indexOf(r)?Br(n,t,c):function(e,r,t){var n=[],a=0,i=e.length;function o(e){n.push.apply(n,e||[]),++a===i&&t(n)}e.forEach((function(e){r(e,o)}))}(n,t,c)}))}));return c.catch((function(e){return e})),c}function Vr(e,r){return function(t){var n,a;return n=e.fullFields?function(e,r){for(var t=e,n=0;n<r.length;n++){if(null==t)return t;t=t[r[n]]}return t}(r,e.fullFields):r[t.field||e.fullField],(a=t)&&void 0!==a.message?(t.field=t.field||e.fullField,t.fieldValue=n,t):{message:"function"==typeof t?t():t,fieldValue:n,field:t.field||e.fullField}}}function Cr(e,r){if(r)for(var t in r)if(r.hasOwnProperty(t)){var n=r[t];"object"==typeof n&&"object"==typeof e[t]?e[t]=Ar({},e[t],n):e[t]=n}return e}var zr,Nr=function(e,r,t,n,a,i){!e.required||t.hasOwnProperty(e.field)&&!_r(r,i||e.type)||n.push(Mr(a.messages.required,e.fullField))},Lr=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,Tr=/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,Ur={integer:function(e){return Ur.number(e)&&parseInt(e,10)===e},float:function(e){return Ur.number(e)&&!Ur.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch(r){return!1}},date:function(e){return"function"==typeof e.getTime&&"function"==typeof e.getMonth&&"function"==typeof e.getYear&&!isNaN(e.getTime())},number:function(e){return!isNaN(e)&&"number"==typeof e},object:function(e){return"object"==typeof e&&!Ur.array(e)},method:function(e){return"function"==typeof e},email:function(e){return"string"==typeof e&&e.length<=320&&!!e.match(Lr)},url:function(e){return"string"==typeof e&&e.length<=2048&&!!e.match(function(){if(zr)return zr;var e="[a-fA-F\\d:]",r=function(r){return r&&r.includeBoundaries?"(?:(?<=\\s|^)(?="+e+")|(?<="+e+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",a=("\n(?:\n(?:"+n+":){7}(?:"+n+"|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:"+n+":){6}(?:"+t+"|:"+n+"|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:"+n+":){5}(?::"+t+"|(?::"+n+"){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:"+n+":){4}(?:(?::"+n+"){0,1}:"+t+"|(?::"+n+"){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:"+n+":){3}(?:(?::"+n+"){0,2}:"+t+"|(?::"+n+"){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:"+n+":){2}(?:(?::"+n+"){0,3}:"+t+"|(?::"+n+"){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:"+n+":){1}(?:(?::"+n+"){0,4}:"+t+"|(?::"+n+"){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::"+n+"){0,5}:"+t+"|(?::"+n+"){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),i=new RegExp("(?:^"+t+"$)|(?:^"+a+"$)"),o=new RegExp("^"+t+"$"),s=new RegExp("^"+a+"$"),l=function(e){return e&&e.exact?i:new RegExp("(?:"+r(e)+t+r(e)+")|(?:"+r(e)+a+r(e)+")","g")};l.v4=function(e){return e&&e.exact?o:new RegExp(""+r(e)+t+r(e),"g")},l.v6=function(e){return e&&e.exact?s:new RegExp(""+r(e)+a+r(e),"g")};var u=l.v4().source,f=l.v6().source;return zr=new RegExp("(?:^(?:(?:(?:[a-z]+:)?//)|www\\.)(?:\\S+(?::\\S*)?@)?(?:localhost|"+u+"|"+f+'|(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?$)',"i")}())},hex:function(e){return"string"==typeof e&&!!e.match(Tr)}},Zr="enum",Jr={required:Nr,whitespace:function(e,r,t,n,a){(/^\s+$/.test(r)||""===r)&&n.push(Mr(a.messages.whitespace,e.fullField))},type:function(e,r,t,n,a){if(e.required&&void 0===r)Nr(e,r,t,n,a);else{var i=e.type;["integer","float","array","regexp","object","method","email","number","date","url","hex"].indexOf(i)>-1?Ur[i](r)||n.push(Mr(a.messages.types[i],e.fullField,e.type)):i&&typeof r!==e.type&&n.push(Mr(a.messages.types[i],e.fullField,e.type))}},range:function(e,r,t,n,a){var i="number"==typeof e.len,o="number"==typeof e.min,s="number"==typeof e.max,l=r,u=null,f="number"==typeof r,c="string"==typeof r,d=Array.isArray(r);if(f?u="number":c?u="string":d&&(u="array"),!u)return!1;d&&(l=r.length),c&&(l=r.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length),i?l!==e.len&&n.push(Mr(a.messages[u].len,e.fullField,e.len)):o&&!s&&l<e.min?n.push(Mr(a.messages[u].min,e.fullField,e.min)):s&&!o&&l>e.max?n.push(Mr(a.messages[u].max,e.fullField,e.max)):o&&s&&(l<e.min||l>e.max)&&n.push(Mr(a.messages[u].range,e.fullField,e.min,e.max))},enum:function(e,r,t,n,a){e[Zr]=Array.isArray(e[Zr])?e[Zr]:[],-1===e[Zr].indexOf(r)&&n.push(Mr(a.messages[Zr],e.fullField,e[Zr].join(", ")))},pattern:function(e,r,t,n,a){if(e.pattern)if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(r)||n.push(Mr(a.messages.pattern.mismatch,e.fullField,r,e.pattern));else if("string"==typeof e.pattern){new RegExp(e.pattern).test(r)||n.push(Mr(a.messages.pattern.mismatch,e.fullField,r,e.pattern))}}},Gr=function(e,r,t,n,a){var i=e.type,o=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(_r(r,i)&&!e.required)return t();Jr.required(e,r,n,o,a,i),_r(r,i)||Jr.type(e,r,n,o,a)}t(o)},Yr={string:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(_r(r,"string")&&!e.required)return t();Jr.required(e,r,n,i,a,"string"),_r(r,"string")||(Jr.type(e,r,n,i,a),Jr.range(e,r,n,i,a),Jr.pattern(e,r,n,i,a),!0===e.whitespace&&Jr.whitespace(e,r,n,i,a))}t(i)},method:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(_r(r)&&!e.required)return t();Jr.required(e,r,n,i,a),void 0!==r&&Jr.type(e,r,n,i,a)}t(i)},number:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(""===r&&(r=void 0),_r(r)&&!e.required)return t();Jr.required(e,r,n,i,a),void 0!==r&&(Jr.type(e,r,n,i,a),Jr.range(e,r,n,i,a))}t(i)},boolean:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(_r(r)&&!e.required)return t();Jr.required(e,r,n,i,a),void 0!==r&&Jr.type(e,r,n,i,a)}t(i)},regexp:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(_r(r)&&!e.required)return t();Jr.required(e,r,n,i,a),_r(r)||Jr.type(e,r,n,i,a)}t(i)},integer:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(_r(r)&&!e.required)return t();Jr.required(e,r,n,i,a),void 0!==r&&(Jr.type(e,r,n,i,a),Jr.range(e,r,n,i,a))}t(i)},float:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(_r(r)&&!e.required)return t();Jr.required(e,r,n,i,a),void 0!==r&&(Jr.type(e,r,n,i,a),Jr.range(e,r,n,i,a))}t(i)},array:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(null==r&&!e.required)return t();Jr.required(e,r,n,i,a,"array"),null!=r&&(Jr.type(e,r,n,i,a),Jr.range(e,r,n,i,a))}t(i)},object:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(_r(r)&&!e.required)return t();Jr.required(e,r,n,i,a),void 0!==r&&Jr.type(e,r,n,i,a)}t(i)},enum:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(_r(r)&&!e.required)return t();Jr.required(e,r,n,i,a),void 0!==r&&Jr.enum(e,r,n,i,a)}t(i)},pattern:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(_r(r,"string")&&!e.required)return t();Jr.required(e,r,n,i,a),_r(r,"string")||Jr.pattern(e,r,n,i,a)}t(i)},date:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(_r(r,"date")&&!e.required)return t();var o;if(Jr.required(e,r,n,i,a),!_r(r,"date"))o=r instanceof Date?r:new Date(r),Jr.type(e,o,n,i,a),o&&Jr.range(e,o.getTime(),n,i,a)}t(i)},url:Gr,hex:Gr,email:Gr,required:function(e,r,t,n,a){var i=[],o=Array.isArray(r)?"array":typeof r;Jr.required(e,r,n,i,a,o),t(i)},any:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(_r(r)&&!e.required)return t();Jr.required(e,r,n,i,a)}t(i)}};function Hr(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var Kr=Hr(),Qr=function(){function e(e){this.rules=null,this._messages=Kr,this.define(e)}var r=e.prototype;return r.define=function(e){var r=this;if(!e)throw new Error("Cannot configure a schema with no rules");if("object"!=typeof e||Array.isArray(e))throw new Error("Rules must be an object");this.rules={},Object.keys(e).forEach((function(t){var n=e[t];r.rules[t]=Array.isArray(n)?n:[n]}))},r.messages=function(e){return e&&(this._messages=Cr(Hr(),e)),this._messages},r.validate=function(r,t,n){var a=this;void 0===t&&(t={}),void 0===n&&(n=function(){});var i=r,o=t,s=n;if("function"==typeof o&&(s=o,o={}),!this.rules||0===Object.keys(this.rules).length)return s&&s(null,i),Promise.resolve(i);if(o.messages){var l=this.messages();l===Kr&&(l=Hr()),Cr(l,o.messages),o.messages=l}else o.messages=this.messages();var u={};(o.keys||Object.keys(this.rules)).forEach((function(e){var t=a.rules[e],n=i[e];t.forEach((function(t){var o=t;"function"==typeof o.transform&&(i===r&&(i=Ar({},i)),n=i[e]=o.transform(n)),(o="function"==typeof o?{validator:o}:Ar({},o)).validator=a.getValidationMethod(o),o.validator&&(o.field=e,o.fullField=o.fullField||e,o.type=a.getType(o),u[e]=u[e]||[],u[e].push({rule:o,value:n,source:i,field:e}))}))}));var f={};return Dr(u,o,(function(r,t){var n,a=r.rule,s=!("object"!==a.type&&"array"!==a.type||"object"!=typeof a.fields&&"object"!=typeof a.defaultField);function l(e,r){return Ar({},r,{fullField:a.fullField+"."+e,fullFields:a.fullFields?[].concat(a.fullFields,[e]):[e]})}function u(n){void 0===n&&(n=[]);var u=Array.isArray(n)?n:[n];!o.suppressWarning&&u.length&&e.warning("async-validator:",u),u.length&&void 0!==a.message&&(u=[].concat(a.message));var c=u.map(Vr(a,i));if(o.first&&c.length)return f[a.field]=1,t(c);if(s){if(a.required&&!r.value)return void 0!==a.message?c=[].concat(a.message).map(Vr(a,i)):o.error&&(c=[o.error(a,Mr(o.messages.required,a.field))]),t(c);var d={};a.defaultField&&Object.keys(r.value).map((function(e){d[e]=a.defaultField})),d=Ar({},d,r.rule.fields);var p={};Object.keys(d).forEach((function(e){var r=d[e],t=Array.isArray(r)?r:[r];p[e]=t.map(l.bind(null,e))}));var v=new e(p);v.messages(o.messages),r.rule.options&&(r.rule.options.messages=o.messages,r.rule.options.error=o.error),v.validate(r.value,r.rule.options||o,(function(e){var r=[];c&&c.length&&r.push.apply(r,c),e&&e.length&&r.push.apply(r,e),t(r.length?r:null)}))}else t(c)}if(s=s&&(a.required||!a.required&&r.value),a.field=r.field,a.asyncValidator)n=a.asyncValidator(a,r.value,u,r.source,o);else if(a.validator){try{n=a.validator(a,r.value,u,r.source,o)}catch(c){null==console.error||console.error(c),o.suppressValidatorError||setTimeout((function(){throw c}),0),u(c.message)}!0===n?u():!1===n?u("function"==typeof a.message?a.message(a.fullField||a.field):a.message||(a.fullField||a.field)+" fails"):n instanceof Array?u(n):n instanceof Error&&u(n.message)}n&&n.then&&n.then((function(){return u()}),(function(e){return u(e)}))}),(function(e){!function(e){for(var r,t,n=[],a={},o=0;o<e.length;o++)r=e[o],t=void 0,Array.isArray(r)?n=(t=n).concat.apply(t,r):n.push(r);n.length?(a=$r(n),s(n,a)):s(null,i)}(e)}),i)},r.getType=function(e){if(void 0===e.type&&e.pattern instanceof RegExp&&(e.type="pattern"),"function"!=typeof e.validator&&e.type&&!Yr.hasOwnProperty(e.type))throw new Error(Mr("Unknown rule type %s",e.type));return e.type||"string"},r.getValidationMethod=function(e){if("function"==typeof e.validator)return e.validator;var r=Object.keys(e),t=r.indexOf("message");return-1!==t&&r.splice(t,1),1===r.length&&"required"===r[0]?Yr.required:Yr[this.getType(e)]||void 0},e}();Qr.register=function(e,r){if("function"!=typeof r)throw new Error("Cannot register a validator by type, validator is not a function");Yr[e]=r},Qr.warning=Rr,Qr.messages=Kr,Qr.validators=Yr;const Xr=y({label:String,labelWidth:{type:[String,Number],default:""},prop:{type:h([String,Array])},required:{type:Boolean,default:void 0},rules:{type:h([Object,Array])},error:String,validateStatus:{type:String,values:["","error","validating","success"]},for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:{type:String,values:j}}),et="ElLabelWrap";var rt=F({name:et,props:{isAutoWidth:Boolean,updateAll:Boolean},setup(e,{slots:r}){const t=V(I,void 0),n=V(C);n||z(et,"usage: <el-form-item><label-wrap /></el-form-item>");const a=x("form"),i=w(),o=w(0),s=(n="update")=>{G((()=>{r.default&&e.isAutoWidth&&("update"===n?o.value=(()=>{var e;if(null==(e=i.value)?void 0:e.firstElementChild){const e=window.getComputedStyle(i.value.firstElementChild).width;return Math.ceil(Number.parseFloat(e))}return 0})():"remove"===n&&(null==t||t.deregisterLabelWidth(o.value)))}))},l=()=>s("update");return N((()=>{l()})),L((()=>{s("remove")})),T((()=>l())),A(o,((r,n)=>{e.updateAll&&(null==t||t.registerLabelWidth(r,n))})),U(q((()=>{var e,r;return null!=(r=null==(e=i.value)?void 0:e.firstElementChild)?r:null})),l),()=>{var s,l;if(!r)return null;const{isAutoWidth:u}=e;if(u){const e=null==t?void 0:t.autoLabelWidth,l={};if((null==n?void 0:n.hasLabel)&&e&&"auto"!==e){const r=Math.max(0,Number.parseInt(e,10)-o.value),n="left"===t.labelPosition?"marginRight":"marginLeft";r&&(l[n]=`${r}px`)}return Z("div",{ref:i,class:[a.be("item","label-wrap")],style:l},[null==(s=r.default)?void 0:s.call(r)])}return Z(J,{ref:i},[null==(l=r.default)?void 0:l.call(r)])}}});const tt=["role","aria-labelledby"],nt=F({name:"ElFormItem"});var at=W(F(l(s({},nt),{props:Xr,setup(e,{expose:r}){const t=e,o=Y(),f=V(I,void 0),c=V(C,void 0),d=O(void 0,{formItem:!1}),p=x("form-item"),v=H().value,y=w([]),h=w(""),g=K(h,100),j=w(""),F=w();let E,W=!1;const z=q((()=>{if("top"===(null==f?void 0:f.labelPosition))return{};const e=Q(t.labelWidth||(null==f?void 0:f.labelWidth)||"");return e?{width:e}:{}})),T=q((()=>{if("top"===(null==f?void 0:f.labelPosition)||(null==f?void 0:f.inline))return{};if(!t.label&&!t.labelWidth&&ve)return{};const e=Q(t.labelWidth||(null==f?void 0:f.labelWidth)||"");return t.label||o.label?{}:{marginLeft:e}})),U=q((()=>[p.b(),p.m(d.value),p.is("error","error"===h.value),p.is("validating","validating"===h.value),p.is("success","success"===h.value),p.is("required",be.value||t.required),p.is("no-asterisk",null==f?void 0:f.hideRequiredAsterisk),"right"===(null==f?void 0:f.requireAsteriskPosition)?"asterisk-right":"asterisk-left",{[p.m("feedback")]:null==f?void 0:f.statusIcon}])),J=q((()=>b(t.inlineMessage)?t.inlineMessage:(null==f?void 0:f.inlineMessage)||!1)),ue=q((()=>[p.e("error"),{[p.em("error","inline")]:J.value}])),fe=q((()=>t.prop?m(t.prop)?t.prop:t.prop.join("."):"")),ce=q((()=>!(!t.label&&!o.label))),de=q((()=>t.for||1===y.value.length?y.value[0]:void 0)),pe=q((()=>!de.value&&ce.value)),ve=!!c,ye=q((()=>{const e=null==f?void 0:f.model;if(e&&t.prop)return X(e,t.prop).value})),he=q((()=>{const{required:e}=t,r=[];t.rules&&r.push(...ke(t.rules));const n=null==f?void 0:f.rules;if(n&&t.prop){const e=X(n,t.prop).value;e&&r.push(...ke(e))}if(void 0!==e){const t=r.map(((e,r)=>[e,r])).filter((([e])=>Object.keys(e).includes("required")));if(t.length>0)for(const[n,a]of t)n.required!==e&&(r[a]=l(s({},n),{required:e}));else r.push({required:e})}return r})),ge=q((()=>he.value.length>0)),me=e=>he.value.filter((r=>!r.trigger||!e||(Array.isArray(r.trigger)?r.trigger.includes(e):r.trigger===e))).map((e=>{var r=e,{trigger:t}=r;return((e,r)=>{var t={};for(var o in e)a.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&n)for(var o of n(e))r.indexOf(o)<0&&i.call(e,o)&&(t[o]=e[o]);return t})(r,["trigger"])})),be=q((()=>he.value.some((e=>e.required)))),je=q((()=>{var e;return"error"===g.value&&t.showMessage&&(null==(e=null==f?void 0:f.showMessage)||e)})),we=q((()=>`${t.label||""}${(null==f?void 0:f.labelSuffix)||""}`)),qe=e=>{h.value=e},Fe=e=>u(this,null,(function*(){const r=fe.value;return new Qr({[r]:e}).validate({[r]:ye.value},{firstFields:!0}).then((()=>(qe("success"),null==f||f.emit("validate",t.prop,!0,""),!0))).catch((e=>((e=>{var r,n;const{errors:a,fields:i}=e;a&&i||console.error(e),qe("error"),j.value=a?null!=(n=null==(r=null==a?void 0:a[0])?void 0:r.message)?n:`${t.prop} is required`:"",null==f||f.emit("validate",t.prop,!1,j.value)})(e),Promise.reject(e))))})),Oe=(e,r)=>u(this,null,(function*(){if(W||!t.prop)return!1;const n=D(r);if(!ge.value)return null==r||r(!1),!1;const a=me(e);return 0===a.length?(null==r||r(!0),!0):(qe("validating"),Fe(a).then((()=>(null==r||r(!0),!0))).catch((e=>{const{fields:t}=e;return null==r||r(!1,t),!n&&Promise.reject(t)})))})),xe=()=>{qe(""),j.value="",W=!1},Ae=()=>u(this,null,(function*(){const e=null==f?void 0:f.model;if(!e||!t.prop)return;const r=X(e,t.prop);W=!0,r.value=br(E),yield G(),xe(),W=!1}));A((()=>t.error),(e=>{j.value=e||"",qe(e?"error":"")}),{immediate:!0}),A((()=>t.validateStatus),(e=>qe(e||"")));const Ee=S(l(s({},k(t)),{$el:F,size:d,validateState:h,labelId:v,inputIds:y,isGroup:pe,hasLabel:ce,addInputId:e=>{y.value.includes(e)||y.value.push(e)},removeInputId:e=>{y.value=y.value.filter((r=>r!==e))},resetField:Ae,clearValidate:xe,validate:Oe}));return P(C,Ee),N((()=>{t.prop&&(null==f||f.addField(Ee),E=br(ye.value))})),L((()=>{null==f||f.removeField(Ee)})),r({size:d,validateMessage:j,validateState:h,validate:Oe,clearValidate:xe,resetField:Ae}),(e,r)=>{var t;return R(),$("div",{ref_key:"formItemRef",ref:F,class:_(B(U)),role:B(pe)?"group":void 0,"aria-labelledby":B(pe)?B(v):void 0},[Z(B(rt),{"is-auto-width":"auto"===B(z).width,"update-all":"auto"===(null==(t=B(f))?void 0:t.labelWidth)},{default:ee((()=>[B(ce)?(R(),re(te(B(de)?"label":"div"),{key:0,id:B(v),for:B(de),class:_(B(p).e("label")),style:ne(B(z))},{default:ee((()=>[M(e.$slots,"label",{label:B(we)},(()=>[ae(ie(B(we)),1)]))])),_:3},8,["id","for","class","style"])):oe("v-if",!0)])),_:3},8,["is-auto-width","update-all"]),se("div",{class:_(B(p).e("content")),style:ne(B(T))},[M(e.$slots,"default"),Z(le,{name:`${B(p).namespace.value}-zoom-in-top`},{default:ee((()=>[B(je)?M(e.$slots,"error",{key:0,error:j.value},(()=>[se("div",{class:_(B(ue))},ie(j.value),3)])):oe("v-if",!0)])),_:3},8,["name"])],6)],10,tt)}}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);const it=ue(xr,{FormItem:at}),ot=fe(at);export{it as E,ot as a};
