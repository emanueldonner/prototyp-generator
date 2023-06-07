/* @copyright Stadt Wien - Wiener Melange v2 */
import{i as t,s as e,y as s}from"../../lit-element-a22611a3.js";const r=[t`
* {
  box-sizing: border-box;
}

:host {
  display: block;
}

:host([clean]) ::slotted(ul) {
  list-style: none;
  margin: 0;
  padding: 0 !important;
}

:host([type="horizontal"]) ::slotted(ul) {
  display: flex;
  gap: var(--list-gap);
  list-style: none;
  padding: 0 !important;
}

:host([alignment="center"]) ::slotted(ul) {
  justify-content: center;
}
`],l=[t`
:host {
  --list-border: var(--_list-border, 1px solid);
  --list-border-color: var(--_list-border-color, var(--site-color));
  --list-gap: var(--_list-gap, 0.5rem);
}`];class o extends e{static properties={clean:{type:Boolean,reflect:!0},type:{type:String,reflect:!0},separator:{type:String,reflect:!0},alignment:{type:String,reflect:!0}};static styles=[l,r];constructor(){super(),this.clean=!0,this.type="default",this.separator="none",this.alignment=void 0}render(){return s`
      <slot></slot>
    `}}customElements.define("wm-list",o);const i="wm-list";export{o as List,i as tagName};
