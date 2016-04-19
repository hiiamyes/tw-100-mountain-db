var fs = require('fs');
var parse = require('csv-parse');

fs.readFile('100mountain.csv', (err, dataCSV) => {
  if (err) throw err;
  parse(dataCSV, (err, dataArray) => {
    dataArray = dataArray.slice(1).map( (mountain, index) => {
      var latlngs = mountain[8].match(/\d+/g).map((latlng) => Number.parseInt(latlng));
      return({
        index: Number.parseInt(mountain[0]),
        name: mountain[2],
        altitude: Number.parseInt(mountain[4]),
        longitude: {
          direction: 'E',
          degrees: latlngs[3],
          minutes: latlngs[4],
          seconds: latlngs[5],
          value: Math.floor((latlngs[3] + latlngs[4]/60 + latlngs[5]/3600)*100000)/100000
        },
        latitude: {
          direction: 'N',
          degrees: latlngs[0],
          minutes: latlngs[1],
          seconds: latlngs[2],
          value: Math.floor((latlngs[0] + latlngs[1]/60 + latlngs[2]/3600)*100000)/100000
        }
      })
    })
    fs.writeFile('mountains.json', JSON.stringify(dataArray), (err) => {
      if (err) throw err;
      console.log('finished')
    })
  })
})
