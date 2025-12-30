"use strict";var s=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var o=s(function(B,d){
var j=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-assert-is-negative-zero/dist'),R=require('@stdlib/math-base-assert-is-positive-zero/dist');function Z(e,i,n,f){var t,u,v,r,a;if(e<=0)return NaN;if(e===1||n===0)return i[f];for(v=f,a=0;a<e&&(r=i[v],r!==r);a++)v+=n;if(a===e)return NaN;for(u=r,t=u,a+=1,a;a<e;a++)v+=n,r=i[v],!j(r)&&(r<u||r===u&&l(r)?u=r:(r>t||r===t&&R(r))&&(t=r));return(t+u)/2}d.exports=Z
});var c=s(function(C,m){
var _=require('@stdlib/strided-base-stride2offset/dist'),b=o();function k(e,i,n){return b(e,i,n,_(e,n))}m.exports=k
});var y=s(function(D,p){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=c(),O=o();E(g,"ndarray",O);p.exports=g
});var P=require("path").join,h=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=y(),q,x=h(P(__dirname,"./native.js"));w(x)?q=z:q=x;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
