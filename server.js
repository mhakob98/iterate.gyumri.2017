'use strict'
const http = require('http');
const server = http.createServer((req,res) => {
  if (req.url === '/') {
    res.setHeader('content-type','text/html');
    res.end(`
      <!doctype html>
      <body>
      <h1> Some header! </h1>
      <p> what a body =P </p>
      </body>
      `)

  } else{
    res.end('UNKNOWN')
  }
})
server.listen(8080,() => console.log('Started our server'));
