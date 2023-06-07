/* @copyright Stadt Wien - Wiener Melange v2 */
import{i as e,s as t,y as i}from"../../lit-element-a22611a3.js";import{n as r}from"../../when-c8427aa9.js";import{l as a}from"../../if-defined-133e139e.js";const o=[e`
  * {
    box-sizing: border-box;
  }

:host {
  --spacing: var(--card-spacing);


  display: block;
  /*height: 100%;*/
  width: 100%;

  perspective: 1000px;
}

:host([flipped]) .card-inner  {
  transform: rotateY(180deg);
}

.card-inner {
  align-content: start;
  background-color: var(--card-background);
  border: var(--card-border);
  box-shadow: var(--card-shadow);
  display: grid;
  block-size: 100%;
  grid-template-columns: var(--spacing) 1fr var(--spacing);
  grid-template-rows: repeat(3, min-content) 1fr;
  padding-block: var(--spacing);
  position: relative;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

@media(min-width: 1024px) {
  :host {
    --spacing: var(--card-spacing-large);
  }
}

:host([size="s"]) {
  max-width: 16.25rem;
}

:host([size="m"]) {
  max-width: 21.875rem;
}

:host([size="l"]) {
  max-width: 33.125rem;
}

::slotted(:is(img, picture)) {
  display: block;
  height: 100% !important;
  object-fit: cover;
  width: 100%;
}

::slotted(*) {
  grid-column: 2;
  min-width: 0;
}

::slotted(:is(img, picture)),
::slotted(div[slot]) {
  margin: 0 !important;
}

.header {
  background-color: inherit;
  align-items: center;
  display: flex;
  grid-column: 2;
  grid-row: 2;
  justify-content: space-between;
  z-index: 1;
}

.media {
  aspect-ratio: 16 / 9;
  grid-column: 1 / -1;
  grid-row: 1;
  margin-block-end: var(--spacing);
  margin-block-start: calc(var(--spacing) * -1);
  position: relative;
}

.content ::slotted(*:not(:last-of-type)) {
  margin-block-end: var(--spacing) !important;
}

.content {
  background-color: inherit;
  grid-column: 2;
  grid-row: 3;
  z-index: 1;
}

.postcontent {
  grid-column: 2;
  grid-row: -1;
  z-index: 1;
}

.flip {
  background-color: inherit;
  block-size: 100%;
  inline-size: 100%;
  grid-column: 2 / -2;
  grid-row: 1 / -1;
  transform:translateZ(-1px) rotateY(180deg);
  z-index: 1;
}

.flip-header {
  display: flex;
  justify-content: flex-end;
  padding-block: 0.7rem;
}

.eyecatcher {
  background: var(--card-media-background);
  color: var(--card-media-color);
  font-size: var(--card-eyecatcher-fontsize);
  font-weight: normal;
  padding: 0 var(--card-eyecatcher-padding);
  position: absolute;
}

:host([color="goldgelb"]) {
  --card-media-background: var(--wm-color-goldgelb) !important;
}

:host([color="wasserblau"]) {
  --card-media-background: var(--wm-color-wasserblau) !important;
}

:host([color="morgenrot"]) {
  --card-media-background: var(--wm-color-morgenrot) !important;
}

:host([color="flieder"]) {
  --card-media-background: var(--wm-color-flieder) !important;
}

:host([color="nebelgrau"]) {
  --card-media-background: var(--wm-color-nebelgrau) !important;
}

:host([color="abendstimmung"]) {
  --card-media-background: var(--wm-color-abendstimmung) !important;
  --card-media-color: var(--wm-color-weiss) !important;
}

:host(:not([position])) .eyecatcher {
  inset-block-end: var(--card-eyecatcher-spacing);
  inset-inline-end: 0;
} 

:host([position*="bottom"]) .eyecatcher {
  inset-block-end: var(--card-eyecatcher-spacing);
} 

:host([position*="top"]) .eyecatcher {
  inset-block-start: var(--card-eyecatcher-spacing);
} 

:host([position*="left"]) .eyecatcher {
  inset-inline-start: 0;
} 

:host([position*="right"]) .eyecatcher {
  inset-inline-end: 0;
} 

:host([position*="left"][type="eyecatcher-round"]) .eyecatcher {
  inset-inline-start: var(--card-eyecatcher-spacing);
} 

:host([position*="right"][type="eyecatcher-round"]) .eyecatcher {
  inset-inline-end: var(--card-eyecatcher-spacing);
} 

:host([type="eyecatcher-round"]) .eyecatcher {
  align-items: center;
  border-radius: 50%;
  display: flex;
  height: 3.5em;
  justify-content: center;
  padding: 0;
  transform: rotate(-20deg);
  width: 3.5em;
}
`],n=[e`
:host {
  --card-background: var(--_card-background, #FFFFFF);
  --card-border: var(--_card-border, 1px solid var(--site-color));
  --card-eyecatcher-spacing: var(--_card-eyecatcher-spacing, 1rem);
  --card-eyecatcher-padding: var(--_card-eyecatcher-padding, 0.5rem);
  --card-eyecatcher-fontsize: var(--_card-eyecatcher-fontsize, 1.5rem);
  --card-media-background: var(--_card-media-background, hsl(0 0% 0%));
  --card-media-color: var(--_card-media-color, hsl(0 0% 100%));
  --card-spacing: var(--_card-spacing, 1rem);
  --card-spacing-large: var(--_card-spacing-large, 1.5rem);
  --card-shadow: var(--_card-shadow, none);
}`];class c extends t{static properties={size:{type:String,reflect:!0},_hasMedia:{type:String,attribute:!1},_flipcard:{type:Boolean},flipped:{type:Boolean,reflect:!0},blocklink:{type:Boolean,reflect:!0},color:{type:String},position:{type:String,reflect:!0},type:{type:String}};static styles=[n,o];constructor(){super(),this.size="m",this.type="",this.position=void 0,this.color="frischgruen",this.blocklink=void 0,this._hasMedia=null,this._flipcard=!1,this.flipped=void 0}firstUpdated(){this.shadowRoot.querySelector('slot[name="media"]').addEventListener("slotchange",(()=>{this._hasMedia=this.shadowRoot.querySelector('slot[name="media"]').assignedNodes().length,this._hasMedia&&this._linkCard()}))}_linkCard(){this.querySelectorAll("a").length<2&&1===this.querySelectorAll("h2 a, h3 a, h4 a").length&&(this.blocklink||(this.blocklink=!0))}_onflipChange(){this._flipcard=!0}render(){return i`
      <div class="card-inner">
        <div class="header" inert="${a(this.flipped?"inert":void 0)}">
          <slot name="heading"></slot>

          ${r(this._flipcard,(()=>i`
          <wm-button kind="clean">
            <button @click="${()=>this.flipped=!0}" aria-expanded="${this.flipped}">
              <wm-icon iconid="embed"></wm-icon>
              Teilen
            </button>
          <wm-button>
          `))}
        </div>

        <div class="media" ?hidden=${!this._hasMedia}>
          <slot name="media"></slot>
          <div class="eyecatcher">
            <strong><slot name="eyecatcher"></slot></strong>
          </div>
        </div>
        
        <div class="content wm-h-vs" inert="${a(this.flipped?"inert":void 0)}">
          <slot name="content"></slot>
        </div>
        
        <div class="postcontent" inert="${a(this.flipped?"inert":void 0)}">
          <slot name="postcontent"></slot>
        </div>

        <div class="flip" inert="${a(this.flipped?void 0:"inert")}">
          <div class="flip-header">
            <wm-button kind="clean">
              <button @click="${()=>this.flipped=!1}" aria-expanded="${this.flipped}">
                <wm-icon iconid="close">Schließen</wm-icon>
              </button>
            <wm-button>
          </div>

          <slot name="flip" @slotchange="${this._onflipChange}"></slot>
        </div>
      </div>
    `}}customElements.define("wm-card",c);const d="wm-card";export{c as Card,d as tagName};
