// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).smeankbn2={})}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,n){var e,l,s,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),s="get"in n,y="set"in n,l&&(s||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(r,t,n.get),y&&f&&f.call(r,t,n.set),r};var l=n;function s(r,t,n){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y="function"==typeof Math.fround?Math.fround:null;var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return p&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var j,_="function"==typeof Symbol?Symbol.toStringTag:"";j=b()?function(r){var t,n,e,o,u;if(null==r)return v.call(r);n=r[_],u=_,t=null!=(o=r)&&d.call(o,u);try{r[_]=void 0}catch(t){return v.call(r)}return e=v.call(r),t?r[_]=n:delete r[_],e}:function(r){return v.call(r)};var m=j,g="function"==typeof Float32Array;var w=Number.POSITIVE_INFINITY,h="function"==typeof Float32Array?Float32Array:null;var O,A="function"==typeof Float32Array?Float32Array:void 0;O=function(){var r,t,n;if("function"!=typeof h)return!1;try{t=new h([1,3.14,-3.14,5e40]),n=t,r=(g&&n instanceof Float32Array||"[object Float32Array]"===m(n))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===w}catch(t){r=!1}return r}()?A:function(){throw new Error("not implemented")};var E=new O(1);var S="function"==typeof y?y:function(r){return E[0]=r,E[0]};function F(r){var t=function(r){return"/"===r.charAt(0)}(r),n="/"===T(r,-1);return(r=function(r,t){for(var n=0,e=r.length-1;e>=0;e--){var o=r[e];"."===o?r.splice(e,1):".."===o?(r.splice(e,1),n++):n&&(r.splice(e,1),n--)}if(t)for(;n--;n)r.unshift("..");return r}(P(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&n&&(r+="/"),(t?"/":"")+r}function P(r,t){if(r.filter)return r.filter(t);for(var n=[],e=0;e<r.length;e++)t(r[e],e,r)&&n.push(r[e]);return n}var T="b"==="ab".substr(-1)?function(r,t,n){return r.substr(t,n)}:function(r,t,n){return t<0&&(t=r.length+t),r.substr(t,n)},N=/./;function k(r){return"boolean"==typeof r}var x=Boolean.prototype.toString;var B=b();function I(r){return"object"==typeof r&&(r instanceof Boolean||(B?function(r){try{return x.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===m(r)))}function M(r){return k(r)||I(r)}function V(){return new Function("return this;")()}s(M,"isPrimitive",k),s(M,"isObject",I);var C="object"==typeof self?self:null,G="object"==typeof window?window:null,L="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},q="object"==typeof L?L:null;var J=function(r){if(arguments.length){if(!k(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return V()}if(C)return C;if(G)return G;if(q)return q;throw new Error("unexpected error. Unable to resolve global object.")}(),R=J.document&&J.document.childNodes,U=Int8Array;function X(){return/^\s*function\s*([^(]*)/i}var Y,z=/^\s*function\s*([^(]*)/i;s(X,"REGEXP",z),Y=Array.isArray?Array.isArray:function(r){return"[object Array]"===m(r)};var D=Y;function H(r){return null!==r&&"object"==typeof r}var K=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!D(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(H);function Q(r){var t,n,e,o;if(("Object"===(n=m(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=z.exec(e.toString()))return t[1]}return H(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}s(H,"isObjectLikeArray",K);var W="function"==typeof N||"object"==typeof U||"function"==typeof R?function(r){return Q(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Q(r).toLowerCase():t};var Z,$,rr=Object.getPrototypeOf;$=Object.getPrototypeOf,Z="function"===W($)?rr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===m(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var tr,nr=Z;function er(r){return null==r?null:(r=Object(r),nr(r))}function or(r){return Math.abs(r)}function ur(r,t,n){var e,o,u,i,f,a,c,l,s;if(r<=0)return 0;if(1===r||0===n)return t[0];for(u=n<0?(1-r)*n:0,e=0,o=0,i=0,s=0;s<r;s++)a=t[u],c=S(e+a),l=or(e)>=or(a)?S(S(e-c)+a):S(S(a-c)+e),e=c,c=S(i+l),f=or(i)>=or(l)?S(S(i-c)+l):S(S(l-c)+i),i=c,o=S(o+f),u+=n;return S(e+S(i+o))}s(ur,"ndarray",(function(r,t,n,e){var o,u,i,f,a,c,l,s,y;if(r<=0)return 0;if(1===r||0===n)return t[e];for(i=e,o=0,u=0,f=0,y=0;y<r;y++)c=t[i],l=S(o+c),s=or(o)>=or(c)?S(S(o-l)+c):S(S(c-l)+o),o=l,l=S(f+s),a=or(f)>=or(s)?S(S(f-l)+s):S(S(s-l)+f),f=l,u=S(u+a),i+=n;return S(o+S(f+u))}));var ir=function(r){try{return require(r)}catch(r){return function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===m(r))return!0;r=er(r)}return!1}(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}(function(){var r=Array.prototype.slice.call(arguments,0);return F(P(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}("/home/runner/work/stats-base-smeankbn2/stats-base-smeankbn2/node_modules/@stdlib/blas-ext-base-ssumkbn2/lib","./native.js")),fr=tr=ir instanceof Error?ur:ir;const{ndarray:ar}=tr;function cr(r,t,n){return r<=0?NaN:1===r||0===n?t[0]:S(fr(r,t,n)/r)}function lr(r,t,n,e){return r<=0?NaN:1===r||0===n?t[e]:S(ar(r,t,n,e)/r)}s(cr,"ndarray",lr),r.default=cr,r.ndarray=lr,Object.defineProperty(r,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
