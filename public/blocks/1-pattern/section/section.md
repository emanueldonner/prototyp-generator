---
title: Sections
tags:
  - patterns
token: 'section'
demo_options:
  - type: toggle
    label: Hervorgehoben
    key: highlight
    attribute: highlight
    checked: false
    boolean: true
  - selector: "[data-demo-text]"
    type: toggle
    checked: true
    label: Text anzeigen
    key: text
  - type: select
    label: In Page Navigation
    key: nav
    options:
      - label: Keine
        default: true
        value: 
      - label: Scroll
        value: scroll
      - label: Toggle
        value: toggle
    attribute: nav
date: 2023-01-01
generator: true
---