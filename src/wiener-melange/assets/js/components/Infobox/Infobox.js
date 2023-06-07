/* @copyright Stadt Wien - Wiener Melange v2 */
import{i as t,s as e,y as s}from"../../lit-element-a22611a3.js";const o=[t`
  * {
    box-sizing: border-box;
  }

  :host {
    display: block;
  }
`];class l extends e{static styles=[o];render(){return s`
      <wm-card size="default">
        <wm-stack slot="content" equal="true" wrap="false" gap="l">
          <slot></slot>
        </wm-stack>
      </wm-card>
    `}}customElements.define("wm-infobox",l);const n="wm-infobox";export{l as Infobox,n as tagName};
