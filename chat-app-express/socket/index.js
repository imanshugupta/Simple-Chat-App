const { verifyToken } = require('../authenticate')

const SocketIO = io => {
    io.use((socket, next) => {
        verifyToken(socket.handshake.query.token, (err, user) => {
            if (!err) {
                socket.username = user.username
            }
        })
        next()
    })
    io.on('connection', socket => {
        socket.on('new-message', (newMessage) => {
            io.emit('new-message', { message: newMessage, username: socket.username })
        })
        console.log('Connnected To Socket')
        socket.on('disconnect', () => console.log('Socket Disconnected'))
    })
}

module.exports = SocketIO