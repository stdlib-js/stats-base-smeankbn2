"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var i=n(function(O,s){
var y=require('@stdlib/number-float64-base-to-float32/dist'),b=require('@stdlib/blas-ext-base-ssumkbn2/dist').ndarray;function d(r,e,a,u){return r<=0?NaN:r===1||a===0?e[u]:y(b(r,e,a,u)/r)}s.exports=d
});var v=n(function(T,o){
var k=require('@stdlib/strided-base-stride2offset/dist'),p=i();function l(r,e,a){return p(r,e,a,k(r,a))}o.exports=l
});var c=n(function(g,m){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),x=i();j(q,"ndarray",x);m.exports=q
});var R=require("path").join,_=require('@stdlib/utils-try-require/dist'),E=c(),t,f=_(R(__dirname,"./native.js"));f instanceof Error?t=E:t=f;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
