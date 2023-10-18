const express = require('express')
const app = express()
const http = require('node:http')
const { createServer } = http
const { Server } = require('socket.io')

const server = createServer(app)
const io = new Server(server)

io.on('connection', (socket) => {
  console.log('user connected')
})

app.get('/', (req, res) => {
  res.send('This is mern realtime board sharing app')
})

const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log('listening on portal 3000')
})
