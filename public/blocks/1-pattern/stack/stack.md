---
title: Stack
tags:
- patterns
token: 'stack'
date: 2023-01-01
demo_options:
  - type: select
    label: Abstand
    key: gap
    attribute: gap
    options:
      - label: Kein Abstand
        value: ''
      - label: Klein
        value: s
        default: true
      - label: Mittel
        value: m
      - label: Groß
        value: l
  - type: toggle
    label: Vertikal darstellen
    checked: false
    key: vertical
    attribute: vertical
  - type: toggle
    label: Elternelement auffüllen
    checked: false
    key: grow
    attribute: grow
  - type: toggle
    label: Gleiche Breite
    checked: false
    key: equal
    attribute: equal
  - type: toggle
    label: Umbrechen
    checked: false
    key: wrap
    attribute: wrap
  - selector: "[data-demo-col]"
    type: toggle
    checked: true
    label: Spalten anzeigen
    key: col
generator: true
---