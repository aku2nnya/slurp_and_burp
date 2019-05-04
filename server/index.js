const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const path = require('path');
// const items = require('../database-mongo');

const app = express();
const PORT = 3000;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
});
