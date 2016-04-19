var query_overpass = require('query-overpass');
var fs = require('fs');

var query = `
[out:json];
node
  ["natural" = "peak"]
  ["ele" ~ "3[0-9][0-9][0-9]"]
  (around: 200000, 23.825623, 120.982937);
out;
`;

console.log('syncing 100 mountain geojson')
query_overpass(query, (err, data) => {
  if (err) throw err;
  fs.writeFile(__dirname + '/mountains.geojson', JSON.stringify(data, null, 4), (err) => {
    if (err) throw err;
    console.log('finished')
  })
})
