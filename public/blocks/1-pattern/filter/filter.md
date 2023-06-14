---
title: Filter
tags:
- patterns
token: 'filter'
date: 2023-01-01
demo_options:
  - type: select
    label: Art
    key: type
    options:
      - value: dropdown
        label: "Dropdown"
        default: true
      - value: 
        label: "Liste"
    attribute: type
  - type: text
    label: Beschreibung
    attribute: label
    key: label
    value: "Erweitere Filter"
  - type: text
    label: Label für Anwenden-Button
    attribute: searchlabel
    key: search_button
    value: "Anwenden"
  - type: text
    label: Label für Abbrechen-Button
    attribute: dismisslabel
    key: close_button
    value: "Abbrechen"
  - type: toggle
    label: Buttons anzeigen
    checked: true
    attribute: controls
    key: controls
    boolean: true
---
<style>
  main {
    margin-block-end: 400px;
  }
</style>