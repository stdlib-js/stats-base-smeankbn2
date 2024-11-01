"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=n(function(E,u){
var b=require('@stdlib/number-float64-base-to-float32/dist'),k=require('@stdlib/blas-ext-base-ssumkbn2/dist');function l(r,e,a){return r<=0?NaN:r===1||a===0?e[0]:b(k(r,e,a)/r)}u.exports=l
});var v=n(function(O,o){
var p=require('@stdlib/number-float64-base-to-float32/dist'),y=require('@stdlib/blas-ext-base-ssumkbn2/dist').ndarray;function d(r,e,a,t){return r<=0?NaN:r===1||a===0?e[t]:p(y(r,e,a,t)/r)}o.exports=d
});var f=n(function(g,m){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=s(),x=v();j(q,"ndarray",x);m.exports=q
});var F=require("path").join,R=require('@stdlib/utils-try-require/dist'),T=f(),i,c=R(F(__dirname,"./native.js"));c instanceof Error?i=T:i=c;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
