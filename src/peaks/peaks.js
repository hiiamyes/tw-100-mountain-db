
var query_overpass = require('query-overpass');
var fs = require('fs');

var query = `
[out:json];
node
  ["natural" = "peak"]
  (around: 200000, 23.825623, 120.982937);
out;
`;

console.log('syncing peaks')
query_overpass(query, (err, peaks) => {
  if (err) throw err;

  peaks.features = peaks.features.map( peak => {
    if (peak.properties.tags.name) {
      return ({
        "type": "Feature",
        "properties": {
            "tags": {
                "name": peak.properties.tags.name
            }
        },
        "geometry": {
            "type": "Point",
            "coordinates": peak.geometry.coordinates
        }
      })
    }
  })

  fs.writeFile(__dirname + '/peaks.geojson', JSON.stringify(peaks), (err) => {
    if (err) throw err;
    console.log('finished')
  })
})
