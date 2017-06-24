/**
 * Created by axetroy on 2017/6/24.
 */
const axios = require('axios');
const co = require('co');

function combine(requestObject) {
  if (Array.isArray(requestObject)) {
    return requestSeries(requestObject);
  } else if (typeof requestObject === 'object') {
    return requestParallel(requestObject);
  } else {
    throw new Error(
      `Request object must be an Object or Array not ${typeof requestObject}`
    );
  }
}

function requestSeries(requestArray = []) {
  return co(function*() {
    const result = [];
    while (requestArray.length) {
      let request = requestArray.shift();
      let response = {};
      const config = {
        url: request.url.trim(),
        method: (request.method || 'GET').toUpperCase().trim(),
        data: request.data || null,
        headers: request.headers || {}
      };
      try {
        response = yield axios
          .request(config)
          .then(res => {
            return Promise.resolve({
              status: res.status,
              statusText: res.statusText,
              data: res.data,
              config,
              error: null
            });
          })
          .catch(err => {
            console.log('error', err.toString());
            return Promise.resolve({
              status: 400,
              statusText: `Request error`,
              data: null,
              config,
              error: err.toString()
            });
          });
      } catch (err) {
        response = {
          status: 500,
          statusText: `Server error`,
          data: null,
          config,
          error: err.toString()
        };
      } finally {
        result.push(response);
      }
    }
    return result;
  }).catch(function(err) {
    return Promise.reject(err);
  });
}

function requestParallel(requestObject) {}

module.exports = combine;
