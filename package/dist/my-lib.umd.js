(function(a,i){typeof exports=="object"&&typeof module!="undefined"?i(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],i):(a=typeof globalThis!="undefined"?globalThis:a||self,i(a.MyLib={},a.React))})(this,function(a,i){"use strict";function m(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var v=m(i),R="",l={exports:{}},s={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var p=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;function _(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function g(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;var n=Object.getOwnPropertyNames(r).map(function(f){return r[f]});if(n.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(f){o[f]=f}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}g();/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=v.default,d=60103;if(s.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var y=Symbol.for;d=y("react.element"),s.Fragment=y("react.fragment")}var w=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function b(e,r,t){var n,o={},f=null,u=null;t!==void 0&&(f=""+t),r.key!==void 0&&(f=""+r.key),r.ref!==void 0&&(u=r.ref);for(n in r)S.call(r,n)&&!x.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps,r)o[n]===void 0&&(o[n]=r[n]);return{$$typeof:d,type:e,key:f,ref:u,props:o,_owner:w.current}}s.jsx=b,s.jsxs=b,l.exports=s;const P=l.exports.jsx,E=({tt:e})=>P("div",{children:e});a.MyButton=E,Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
//# sourceMappingURL=my-lib.umd.js.map
