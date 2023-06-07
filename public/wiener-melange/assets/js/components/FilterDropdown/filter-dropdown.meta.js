/* @copyright Stadt Wien - Wiener Melange v2 */
const e={placeholder:{type:String},url:{type:String},label:{type:String},searchlabel:{type:String},dismisslabel:{type:String},isOpen:{type:Boolean,reflect:!0},totalChecked:{type:Number,attribute:!1},allOptions:{type:Object,attribute:!1},totalSelected:{type:Number,attribute:!1}},t={tag:"wm-filter-dropdown",properties:[{title:"Label",key:"label",component_properties:e.label,description:"Bezeichnung für das Dropdown.",options:[{value:"'Erweitere Filter'",default:!0},{value:"Beliebiger String"}]},{title:"Platzhalter",key:"placeholder",component_properties:e.placeholder,description:"Platzhaltertext im Eingabefeld",options:[]},{title:"Suchen",key:"searchlabel",component_properties:e.searchlabel,description:"Text für Suchen-Button",options:[{value:"'Suchen'",default:!0},{value:"Beliebiger String"}]},{title:"Schliessen",key:"dismisslabel",component_properties:e.dismisslabel,description:"Text für Schliessen-Button",options:[{value:"'Schliessen'",default:!0},{value:"Beliebiger String"}]},{title:"Offen",key:"isOpen",component_properties:e.isOpen,description:"Dropdown geöffnet darstellen",options:[{value:"Boolsches Attribut (kein Wert)"}]}]};export{t as meta,e as properties};