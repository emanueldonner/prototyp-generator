---
title: List
tags:
- patterns
token: 'list'
date: 2023-01-01
demo_options:
  - type: toggle
    label: Formatierung entfernen
    attribute: clean
    key: clean
    checked: false
  - type: select
    label: Typ
    attribute: type
    key: type
    options:
      - value: ''
        label: 'Standard'
        default: true
      - value: 'horizontal'
        label: 'Horizontal'
      - value: 'row'
        label: 'Reihe'
  - type: select
    label: Ausrichtung
    attribute: alignment
    key: alignment
    options:
      - value: ''
        label: 'Standard'
        default: true
      - value: 'center'
        label: 'Zentriert'
  - type: select
    label: Trenner
    attribute: separator
    key: separator
    options:
      - value: ''
        label: 'Standard'
        default: true
      - value: 'pipe'
        label: 'Linie'
generator: true
---