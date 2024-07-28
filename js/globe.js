var map = new OSMBuildings({
    container: 'globe',
    position: { latitude: 60.166, longitude: 24.922 },
    zoom: 2,
    minZoom: 1,
    maxZoom: 20,
    tilt: 45,
    rotation: 0,
    effects: ['shadows'],
  });
  
  
  map.addMapTiles('https://tile-a.openstreetmap.fr/hot/{z}/{x}/{y}.png');
  map.addGeoJSONTiles('https://{s}.data.osmbuildings.org/0.2/59fcc2e8/tile/{z}/{x}/{y}.json');
  
  let rotation = 0;
  
  function rotate () {
    map.setRotation(rotation);
    rotation = (rotation+1) % 360;
    requestAnimationFrame(rotate);
  }
  
  // rotate (); // uncomment to start rotation