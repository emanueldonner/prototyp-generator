---
title: Cards
tags:
  - patterns
demo_options:
  - type: select
    label: Größe der Card
    key: size
    options:
      - value: s
        label: "Klein"
      - value: m
        default: true
        label: "Mittel"
      - value: l
        label: "Groß"
    attribute: size
  - type: select
    label: Störer
    key: type
    options:
      - value: eyecatcher-default
        label: "Standard"
      - value: eyecatcher-round
        label: "Rund"
    attribute: type
  - type: select
    label: Störer Position
    key: position
    options:
      - value: "bottom right"
        label: "Rechts unten"
      - value: "top right"
        label: "Rechts oben"
      - value: "bottom left"
        label: "Links unten"
      - value: "top left"
        label: "Links oben"
    attribute: position
  - type: select
    label: Störer Farbe
    key: color
    options:
      - value: 'frischgruen'
        label: "Frischgrün"
        default: true
      - value: 'abendstimmung'
        label: "Abendstimmung"
      - value: 'flieder'
        label: "Flieder"
      - value: 'goldgelb'
        label: "Goldgelb"
      - value: 'morgenrot'
        label: "Morgenrot"
      - value: 'nebelgrau'
        label: "Nebelgrau"
      - value: 'wasserblau'
        label: "Wasserblau"
    attribute: color
  - type: toggle
    label: Gesamte Card verlinken
    key: blocklink
    attribute: blocklink
    checked: false
  - selector: img
    type: toggle
    checked: true
    label: Bild anzeigen
    key: image
    slot: media
  - selector: .text
    type: toggle
    checked: true
    label: Text anzeigen
    key: text
    slot: content
  - selector: h3
    type: toggle
    checked: true
    label: Überschrift anzeigen
    key: heading
    slot: heading
  - selector: .list
    type: toggle
    checked: false
    label: Liste anzeigen
    key: list
    slot: content
  - selector: .eyecatcher
    type: toggle
    checked: false
    label: Störer anzeigen
    key: eyecatcher
    slot: eyecatcher
token: 'card'
intro: '<p>Cards werden verwendet für…</p>'
date: 2023-01-01
generator: true
examples: true
---