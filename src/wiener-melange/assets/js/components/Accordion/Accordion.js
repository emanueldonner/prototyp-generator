/* @copyright Stadt Wien - Wiener Melange v2 */
import{y as t,i as e,s as o}from"../../lit-element-a22611a3.js";import{getNodeIndex as n}from"../misc/utils.js";import{o as i}from"../../unsafe-html-a853c1af.js";import"../../directive-19e462f3.js";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const r=Symbol.for(""),a=t=>{if((null==t?void 0:t.r)===r)return null==t?void 0:t._$litStatic$},s=t=>({_$litStatic$:t,r}),c=new Map,l=(d=t,(t,...e)=>{const o=e.length;let n,i;const r=[],s=[];let l,p=0,h=!1;for(;p<o;){for(l=t[p];p<o&&void 0!==(i=e[p],n=a(i));)l+=n+t[++p],h=!0;s.push(i),r.push(l),p++}if(p===o&&r.push(t[o]),h){const o=r.join("$$lit$$");void 0===(t=c.get(o))&&(r.raw=r,c.set(o,t=r)),e=s}return d(t,...e)});var d;const p=[e`
* {
  box-sizing: border-box;
}

:host {
  display: block;
}

.heading {
  margin: 0;
}

button[aria-controls] {
  all: unset !important;
  background-color: var(--accordion-background) !important;;
  box-sizing: border-box !important;;
  cursor: pointer !important;;
  font-size: 1.1rem !important;;
  font-variation-settings: "wght" 600 !important;;
  font-weight: 400 !important;;
  padding-block: var(--accordion-padding-block) !important;;
  padding-inline: var(--accordion-padding-inline) !important;;
  position: relative !important;;
  width: 100% !important;;
}

button[aria-controls]::after {
  content: "";
  background: var(--accordion-icon) no-repeat center right;
  background-size: cover;
  display: inline-block;
  height: var(--accordion-icon-size);
  inset-inline-end: var(--accordion-padding-inline);
  inset-block: 0;
  margin: auto;
  position: absolute;
  transition: 0.2s all ease-in-out;
  width: var(--accordion-icon-size);
}

button:where(:hover, :focus-visible)::after {
  transform: rotate(-90deg);
}

[aria-expanded="true"]::after {
  transform: rotate(-180deg);
}

.panel {
  background-color: var(--accordion-background);
  display: none;
  overflow: hidden;
  padding-block: var(--accordion-padding-block);
  padding-inline: var(--accordion-padding-inline);
}

.panel > *:first-child {
  margin-block-start: 0;
} 

.open {
  display: block;
}

figcaption {
  --media-figcaption-background: var(--accordion-contrast);
}
`],h=[e`
:host {
  --accordion-background: var(--_accordion-background, transparent);
  --accordion-contrast: var(--_accordion-contrast, #FFF);
  --accordion-padding-inline: var(--_accordion-padding-inline, 0);
  --accordion-padding-block: var(--_accordion-padding-block, 0);
  --accordion-icon: var(--_accordion-icon, none);
  --accordion-icon-size: var(--_accordion-icon-size, 0);
}`],u=[e`
  img,
  picture,
  svg,
  video {
    display: block;
    height: auto;
    max-width: 100%;
  }

  iframe {
    border: 0;
    display: block;
    max-width: 100%;
  }

  iframe[src*="youtube"] {
    aspect-ratio: 560 / 315;
  }

  iframe:not([height]) {
    aspect-ratio: 16 / 9;
  }

  figure {
    display: inline-flex;
    flex-direction: column;
    margin: 0;
    max-inline-size: 100%;
  }

  figcaption {
    background-color: var(--media-figcaption-background);
    padding: var(--media-figcaption-padding);
  }
`],g=[e`
  form {
    margin-block-end: 2em;
  }

  form > * + * {
    margin-block-start: 1em;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    /* max-width: 30rem; */
  }

  label {
    display: block;
    font-weight: var(--content-font-weight);
    font-variation-settings: var(--content-font-variation-settings);
    margin-block-end: 0.125rem;
  }

  :where([type="checkbox"], [type="radio"]) + label {
    display: inline-block;
    font-weight: normal;
    font-variation-settings: normal;
  }

  input:is(
    [type="date"],
    [type="text"],
    [type="email"],
    [type="password"],
  ),
  textarea {
    background-color: var(--input-background);
    border: 1px solid var(--input-border-color);
    border-radius: 0;
    color: var(--input-color);
    line-height: 1;
    margin: 0;
    min-height: var(--input-min-height);
    padding: var(--input-padding);
    width: 100%;
  }

  select {
    appearance: var(--select-appearance);
    background: var(--select-background) var(--select-icon)  no-repeat right 0.625rem center;
    border: 1px solid var(--select-border-color);
    border-radius: 0;
    color: var(--select-color);
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    min-height: var(--select-min-height);
    min-width: 8.75rem;
    padding: var(--select-padding);
    width: 100%;
  }

  :is(button, .wm-e-button:link, .wm-e-button:visited) {
    align-items: center;
    background-color: var(--button-background);
    border: 1px solid var(--button-border-color);
    color: var(--button-color);
    display: inline-flex;
    font-weight: var(--content-font-weight);
    font-variation-settings: var(--content-font-variation-settings);
    justify-content: center;
    line-height: 1.45;
    padding: 0.463em 0.88em;
    text-align: center;
    text-decoration: none;
    text-transform: var(--button-text-transform);
  }

  :is(button, .wm-e-button:link, .wm-e-button:visited):is(:focus-visible, :hover) {
    --button-background: var(--button-background-hover);
    --button-color: var(--button-color-hover);
  }

  fieldset {
    border: 0;
    padding: 0;
  }

  legend {
    font-weight: var(--content-font-weight);
    font-variation-settings: var(--content-font-variation-settings);
    padding: 0;
  }

  :is([type="radio"], [type="checkbox"]) {
    appearance: none;
    border: 1px solid var(--input-accent-color);
    display: inline-block;
    height: 1rem;
    margin-right: 0.5rem;
    position: relative;
    top: 0.125rem;
    width: 1rem;
  }

  [type="radio"] {
    border-radius: 50%;
  }

  [type="checkbox"]:is(:checked, :indeterminate) {
    background-color: var(--accent-color, var(--input-accent-color));
    background-image: var(--input-checkbox-icon);
    background-position: right 0 center;
    background-size: cover;
  }

  [type="radio"]:checked {
    box-shadow: inset 0 0 0 4px #fff;
  }

  [type="radio"]:checked {
    background-color: var(--accent-color, var(--input-accent-color));
  }

  [type="checkbox"]:indeterminate {
    background-color: var(--input-border-color);
  }
`];class b extends o{get _panels(){return this.shadowRoot?.querySelectorAll(".panel")??null}get _buttons(){return this.shadowRoot?.querySelectorAll("button")??null}static properties={open:{type:String,reflect:!0},multiple:{type:String,reflect:!0},_previousIndex:{type:Number,attribute:!1},_showMultiple:{type:Boolean,attribute:!1},_items:{type:Array,attribute:!1}};static styles=[g,u,h,p];constructor(){super(),this.open=!1,this.multiple="false",this._previousIndex=NaN,this._showMultiple=!1,this._items=[],this._tagName="h3"}firstUpdated(){this._registerEvents()}updated(t){t.has("multiple")&&(this._showMultiple="false"!==this.multiple),t.has("open")&&this._openOrCloseItems(),t.has("_items")&&this._openOrCloseItems()}_openOrCloseItems(){const t=this._openByDefaultIndex();if(-1===t||isNaN(t)){const e=isNaN(t)?"close":"open";for(let t=0;t<this._buttons.length;t++)this._openOrClose(t,e)}else this._openOrClose(this._openByDefaultIndex())}_openOrClose(t,e="toggle",o=!1){if(isNaN(t)){if(this.renderRoot?.querySelectorAll(".open").length)for(let t=0;t<this.renderRoot?.querySelectorAll(".open").length;t++){this.collapse(t,!1)}}else if(t<this._panels.length){const n=this._buttons[t],i=this._panels[t],r="false"!==n.getAttribute("aria-expanded");r?"open"!==e&&(n.setAttribute("aria-expanded","false"),i.classList.remove("open")):"close"!==e&&(n.setAttribute("aria-expanded","true"),i.classList.add("open")),this._showMultiple||isNaN(this._previousIndex)||this._previousIndex===t||this.collapse(this._previousIndex,!1),r||(this._previousIndex=t);const a={bubbles:!0,composed:!0,detail:{id:n.getAttribute("aria-controls"),index:t}};o&&(r?this.dispatchEvent(new CustomEvent("collapsed",a)):this.dispatchEvent(new CustomEvent("expanded",a)))}else console.log("Dieser Panel existiert nicht")}_registerEvents(){this.shadowRoot.addEventListener("click",(t=>{const e=t.target.closest("button");if(e){const t=e.getAttribute("aria-controls"),o=parseInt(t.split("_")[1]);this._openOrClose(o,"toggle",!0)}}))}_openByDefaultIndex(){let t;return t=""===this.open||"true"===this.open?0:isNaN(parseInt(this.open))?NaN:parseInt(this.open),t-1}_getContents(){this._items=[];const t=this.querySelectorAll('[slot="heading"]'),e=this.querySelectorAll('[slot="content"]');for(let o=0;o<t.length;o++){const n=t[o],i=e[o];this._items.push({text:n.textContent,content:i.innerHTML}),0===o&&(this._tagName=n.nodeName)}}_getPanel(t){const e=typeof t;let o;return"number"===e?o=t:"string"===e?o=n(this._panels,this.renderRoot?.querySelector(t)):"object"===e?o=n(this._panels,t):isNaN(t)&&(o=NaN),o}expand(t,e=!0){const o=this._getPanel(t);this._openOrClose(o,"open",e)}collapse(t,e=!0){const o=this._getPanel(t);this._openOrClose(o,"close",e)}_rerender(){this._getContents();this.dispatchEvent(new CustomEvent("contentchanged",{bubbles:!0,composed:!0,detail:{}}))}connectedCallback(){super.connectedCallback()}render(){return l`
    ${this._items.map(((t,e)=>l`<${s(this._tagName)} class="heading">
      <wm-button clean>
        <button aria-expanded="false" aria-controls="panel_${e}">
          ${t.text}
        </button>
      </wm-button>
      </${s(this._tagName)}>

      <div id="panel_${e}" class="panel">
        ${i(t.content)}
      </div>
      `))}
      <slot name="heading" @slotchange="${this._rerender}" hidden></slot>
      <slot name="content" hidden></slot>
    `}}customElements.define("wm-accordion",b);const m="wm-accordion";export{b as Accordion,m as tagName};
