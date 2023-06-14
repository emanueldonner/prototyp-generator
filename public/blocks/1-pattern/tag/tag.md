---
title: Tag
tags:
- patterns
token: 'tag'
intro: Ein Tag verlinkt zu häufig gesuchten, passenden Themen und Bereichen und hebt sich durch einen pillenförmigen Rahmen von anderen Links ab.
date: 2023-01-01
demo_options:
  - type: select
    label: Farbe
    key: color
    options:
      - value: ''
        label: "Keine Farbe"
        default: true
      - value: 'interactive'
        label: "Standard"
      - value: 'frischgruen'
        label: "Frischgrün"
    attribute: color
---

<h2>Beispiele</h2>

<section>
<h3>Tag für Amtswege</h3>

<wm-tag>
  <a href="#">
    <wm-icon iconid="amtswege"></wm-icon>
    Zum Online-Antrag
  </a>
</wm-tag>
</section>

<section>
<h3>Tag mit Zurück-Pfeil</h3>
<p>
  Zur besseren Übersicht kann es Zurück-Tags mit einem Pfeil-Icon geben, die auf eine darüberliegende Ebene führen. 
</p>

<wm-tag>
  <a href="#">
    <wm-icon iconid="chevron-left"></wm-icon>
    Zum Online-Antrag
  </a>
</wm-tag>
</section>
<!--
<section>
<h3>Tag mit Dropdown </h3>
<p>
  Für wichtige Listen gibt es Dropdown Tags, z.B. für die Auswahl von Bädern, Bezirken etc.
</p>

*Beispiel von Bezirksprototyp oder Bäder einbauen*
</section>

<section>
<h3>Tag Liste</h3>
</section>

<section>
<h3>Tag Liste mit Scrollbalken</h3>
</section>
-->