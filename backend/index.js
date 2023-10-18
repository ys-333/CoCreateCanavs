const express = require('express')
const app = express()
const http = require('node:http')
const { createServer } = http
const { Server } = require('socket.io')

const server = createServer(app)
const io = new Server(server)

io.on('connection', (socket) => {
  socket.on('chat', (msg) => {
    console.log('message', msg)
    io.emit('chat', 'hello how are you doing')
  })
})

server.listen(3000, () => {
  console.log('listening on portal 3000')
})
