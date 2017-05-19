'use strict'

const net = require('net');
const sock = new net.Socket;

sock.on('connect', () => {
    sock.write('GET /en/  HTTP/1.1 \r\n');
    sock.write('Host: istc.am');
    sock.write('\r\n\r\n');
});

sock.setEncoding('utf-8');

const total_data = [];

sock.on('data', d => total_data.push(d));

sock.on('end', () => {
const result =
 total_data.reduce((prev, total) => prev + total);
console.log( f1(result))
});

sock.connect({

    port: 80,

    host: 'istc.am'

});

const f1 = (data) => {
  const arr = data.split('\r\n\r\n');
  const body = arr[1];
  const headers =  arr[0].split('\r\n');
  return {
    headers,
    body
  }
}
