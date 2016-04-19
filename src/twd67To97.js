// var fs = require('fs');
//
// fs.readFile('mountains.json', (err, mountains) => {
//   if (err) throw err;
//   mountains = JSON.parse(mountains).map( mountain => {
//     mountain['latlng'] = {
//       twd67: {
//         latitude: mountain['latitude'],
//         longitude: mountain['longitude']
//       },
//       twd97: {
//         latitude:
//         longitude:
//       }
//     }
//     return mountain;
//   })
//   console.log(mountains);
// })


var x67 = 23.47055;
var y67 = 120.94888;
var A = 0.00001549, B = 0.000006521;
var x97=x67+807.8+A*x67+B*y67;
var y97=y67-248.6+A*y67+B*x67;
console.log(x97, y97);
