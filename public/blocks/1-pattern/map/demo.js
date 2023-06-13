const map = document.querySelector('wm-map')
map.addEventListener('moveend', e => {
  const mapObject = e.detail.map.gl
  document.querySelector('#center').value = `${mapObject.getCenter().lng}, ${mapObject.getCenter().lat}`
})