---
title: Akkordeon
tags:
  - patterns
token: 'accordion'
demo_options:
  - type: select
    label: Geöffnet darstellen
    key: open
    options:
      - label: Nein
        default: true
        value: false
      - label: Erstes Element
        value: 1
      - label: Zweites Element
        value: 2
      - label: Alle
        value: true
    attribute: open
    dependencies:
      - key: open_all
        attribute: open
        value: false
  - type: toggle
    label: Mehrere gleichzeitig anzeigen
    key: multiple
    attribute: multiple
date: 2023-01-01
generator: true
examples: true
---