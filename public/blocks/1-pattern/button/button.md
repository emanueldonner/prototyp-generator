---
title: Button
tags:
- patterns
token: 'button'
generator: true
demo_options:
  - type: select
    label: Farbe
    key: color
    options:
      - value: ''
        label: "Standard"
        default: true
      - value: 'frischgruen'
        label: "Frischgrün"
      - value: 'morgenrot'
        label: "Morgenrot"
      - value: 'abendstimmung'
        label: "Abendstimmung"
    attribute: color
  - type: select
    label: Art
    key: kind
    options:
      - value: ''
        label: "Standard"
        default: "primary"
      - label: "Sekundär"
        value: "secondary"
      - label: "Tertiär"
        value: "tertiary"
      - label: "Tag"
        value: "tag"
      - label: "Kein Styling"
        value: "clean"
    attribute: kind
  - type: toggle
    label: Volle Breite
    key: full
    attribute: full
    boolean: true
date: 2023-01-01
---