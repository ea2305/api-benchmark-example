const fs = require('fs')
const apiBenchmark = require('api-benchmark')

const service = {
  server1: 'http://127.0.0.1:3333'
};
const options = {
  debug: true,
  runMode: 'parallel',
  minSamples: 2000,
  maxConcurrentRequests: 150,
  maxTime: 240
}

const routes = {
  route1: {
    method: 'get',
    route: '/',
    headers: {
      Accept: 'application/json'
    }
  }
}

apiBenchmark.measure(service, routes, options, function(err, results) {

  apiBenchmark.getHtml(results, { encoding: 'utf8' }, function(error, html) {
    fs.writeFile(`report from ${new Date().toUTCString()}.html`, html, () => {
      console.log('finished')
    })

    // now save it yourself to a file and enjoy
  })
})