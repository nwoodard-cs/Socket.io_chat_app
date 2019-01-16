const express = require('express')
const path = require('path')

const port = 8080
const app = express()
const server = require('http').Server(app)

const io = require('socket.io')(server)

app.use(express.static(path.join(__dirname, "public")))

io.on('connection', (socket) => {
    console.log('New connection made.')
    socket.emit('serverMsg', { text: 'Hello World' })
    socket.on('clientMsg', msg => console.log(`Client said: ${msg.text}`))
})



server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
