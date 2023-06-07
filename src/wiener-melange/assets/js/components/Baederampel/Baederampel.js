/* @copyright Stadt Wien - Wiener Melange v2 */
import{i as t,s,y as e}from"../../lit-element-a22611a3.js";const a=[t`
* {
  box-sizing: border-box;
}

:host {
  align-items: center;
  display: flex;
  gap: var(--wm-spacing-xs);
  flex-wrap: wrap;
}

span {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
}

.status {
  width: 1.6rem;
  height: 1.6rem;
  background: #d6d1ca;
  display: inline-block;
  border-radius: 50%;
}

.status-0 {
  background: #292929;
}

.status-1 {
  background: #82d282;
}

.status-2 {
  background: #e6c828;
}

.status-3 {
  background: #e6b728;
}
.status-4 {
  background: #e68a28;
}

.status-5 {
  background: #cc0000;
}

strong {
  font-weight: normal;
  font-variation-settings: var(--wm-f-fwb);
}
`],r="wm-baederampel";class i extends s{static properties={bid:{type:String},label:{type:String},_status:{type:String,attribute:!1},_statusText:{type:String,attribute:!1}};static styles=[a];constructor(){super(),this.bid="",this._statusText="Lade Auslastung…",this.label="Auslastung:"}updated(t){t.has("bid")&&this._fetchData()}_fetchData(){fetch(this._api(),{method:"GET"}).then((t=>t.json())).then((t=>{const s=t.features[0].properties;this._status=s.AUSLASTUNG_AMPEL_KATEGORIE_0,s.AUSLASTUNG_AMPEL_KAT_TXT_0&&(this._statusText=s.AUSLASTUNG_AMPEL_KAT_TXT_0)}))}_api(){return`https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:SCHWIMMBADOGD&srsName=EPSG:4326&outputFormat=json&cql_filter=strIndexOf(WEBLINK1%2C%27${this.bid}%27)%3E-1`}render(){return e`
      <strong>${this.label}</strong>
      <span>
        <span class="status status-${this._status}"></span> ${this._statusText}
      </span>
    `}}customElements.define("wm-baederampel",i);export{i as Baederampel,r as tagName};
