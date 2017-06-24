/**
 * Created by axetroy on 2017/6/24.
 */
const fs = require('fs-extra');

const combine = require('../index');

combine([
  {
    url: 'https://api.github.com',
    method: 'GET'
  },
  {
    url: 'https://api.github.com',
    method: 'GET'
  }
])
  .then(function(res) {
    fs.writeFile(
      './result.json',
      JSON.stringify(
        res.map(e => {
          return {
            data: e.data,
            status: e.status,
            statusText: e.statusText,
            headers: e.headers,
            config: e.config,
            error: e.error
          };
        }),
        null,
        2
      ),
      'utf8'
    );
  })
  .catch(function(err) {
    console.error(err);
  });
