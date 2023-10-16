const express = require('express')
const app = express()

const http = require('http')

const server = http.createServer((req, res) => {
  //   res.statusCode(200)
  res.end('<h1>Hey how are you doing,Har Har Mahadev</h1>')
})

server.listen(3000, () => {
  console.log('Listening on server 3000')
})
