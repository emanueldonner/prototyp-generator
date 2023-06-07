/* @copyright Stadt Wien - Wiener Melange v2 */
import{A as t,T as e}from"./lit-element-3f64521b.js";import{e as r,i,t as s}from"./directive-19e462f3.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class n extends i{constructor(e){if(super(e),this.et=t,e.type!==s.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===t||null==r)return this.ft=void 0,this.et=r;if(r===e)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.et)return this.ft;this.et=r;const i=[r];return i.raw=i,this.ft={_$litType$:this.constructor.resultType,strings:i,values:[]}}}n.directiveName="unsafeHTML",n.resultType=1;const o=r(n);export{n as e,o};
