/* @copyright Stadt Wien - Wiener Melange v2 */
import{T as t}from"./lit-element-3f64521b.js";import{e as i,i as e,t as s}from"./directive-19e462f3.js";
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n=i(class extends e{constructor(t){var i;if(super(t),t.type!==s.ATTRIBUTE||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[e]){var s,n;if(void 0===this.it){this.it=new Set,void 0!==i.strings&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(s=this.nt)||void 0===s?void 0:s.has(t))&&this.it.add(t);return this.render(e)}const r=i.element.classList;this.it.forEach((t=>{t in e||(r.remove(t),this.it.delete(t))}));for(const t in e){const i=!!e[t];i===this.it.has(t)||(null===(n=this.nt)||void 0===n?void 0:n.has(t))||(i?(r.add(t),this.it.add(t)):(r.remove(t),this.it.delete(t)))}return t}});export{n as o};
