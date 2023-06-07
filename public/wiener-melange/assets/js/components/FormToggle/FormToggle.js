/* @copyright Stadt Wien - Wiener Melange v2 */
import{i as e,s as o,y as r}from"../../lit-element-a22611a3.js";const t=[e`
:host {
  --form-toggle-background: var(--_form-toggle-background, gray);
  --form-toggle-background-active: var(--_form-toggle-background-active, blue);
  --form-toggle-background-knob: var(--_form-toggle-background-knob, white);
  --form-toggle-border-color: var(--_form-toggle-border-color, gray);
}`],i=[e`
  * {
    box-sizing: border-box;
  }

  :host {
    align-items: center;
    gap: 0.5rem;
    display: flex;
  }

  [role="switch"] {
    background-color: var(--form-toggle-background);
    border: 1px solid var(--form-toggle-border-color);
    border-radius: 32px;
    border-inline-size: 2px;
    block-size: 1.75rem;
    cursor: pointer;
    inline-size: 3.4375rem;
    padding: 0;
    position: relative;
  }
  
  [aria-checked="true"] {
    --form-toggle-background: var(--form-toggle-background-active);
  }
  
  [role="switch"]::before {
    background-color: var(--form-toggle-background-knob);
    border-radius: 16px;
    block-size: 1.25rem;
    content: "";
    inset-block-start: 3px;
    inset-inline-start: 3px;
    inline-size: 1.25rem;
    position: absolute;
    transition: .2s;
  }

  [aria-checked="true"]::before {
    transform: translateX(1.625rem);
  }
`];class a extends o{static properties={label:{type:String,reflect:!0},active:{type:Boolean}};static styles=[t,i];constructor(){super(),this.label="Aktivieren",this.active=!1}_toggle(){this.active=!this.active,this.dispatchEvent(new CustomEvent("switched",{detail:this.active,bubbles:!0,composed:!0}))}render(){return r`
    <span id="toggle">${this.label}</span>
	  <button role="switch" aria-checked="${this.active}" aria-labelledby="toggle" @click="${this._toggle}"></button>
    `}}customElements.define("wm-form-toggle",a);const l="wm-form-toggle";export{a as FormToggle,l as tagName};
