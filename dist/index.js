"use strict";var s=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var o=s(function(B,d){
var j=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-assert-is-negative-zero/dist'),R=require('@stdlib/math-base-assert-is-positive-zero/dist');function Z(i,e,a,f){var t,u,v,r,n;if(i<=0)return NaN;if(i===1||a===0)return e[f];for(v=f,n=0;n<i&&(r=e[v],r!==r);n++)v+=a;if(n===i)return NaN;for(u=r,t=u,n+=1,n;n<i;n++)v+=a,r=e[v],!j(r)&&(r<u||r===u&&l(r)?u=r:(r>t||r===t&&R(r))&&(t=r));return(t+u)/2}d.exports=Z
});var c=s(function(C,m){
var _=require('@stdlib/strided-base-stride2offset/dist'),b=o();function k(i,e,a){return b(i,e,a,_(i,a))}m.exports=k
});var y=s(function(D,p){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=c(),O=o();E(g,"ndarray",O);p.exports=g
});var P=require("path").join,h=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=y(),q,x=h(P(__dirname,"./native.js"));w(x)?q=z:q=x;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
