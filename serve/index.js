/**
 * Created by axetroy on 2017/6/24.
 */

const express = require('express');
const bodyParser = require('body-parser');

const combine = require('../index');

const app = express();
const PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post('/combine', function(req, res) {
  let requests = req.body;
  if (requests && Array.isArray(requests)) {
    if (requests.every(v => typeof v === 'object')) {
      combine(requests)
        .then(function(response) {
          res.status(200).json(response);
        })
        .catch(function(err) {
          res.status(400).json({ error: err.toString() });
        });
    } else if (requests.every(v => typeof v === 'string')) {
      combine(
        requests.map(url => {
          return { url };
        })
      )
        .then(function(response) {
          res.status(200).json(response);
        })
        .catch(function(err) {
          res.status(400).json({ error: err.toString() });
        });
    } else {
      res.status(400).json({ error: `Invalid requests` });
    }
  }
});

app.listen(PORT, function() {
  console.log(`Listen on port ${PORT}, Now you can POST combine entity to http://localhost:3000/combine`);
});
