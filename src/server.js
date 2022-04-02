const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

module.exports = {
  init() {
    io.on('connect', (socket) => {
      console.log('一个socket连接成功')
      socket.on('invoke', (data) => {
        console.info('serverEventName', data)
        const { messageId, target, phrase } = data
        socket.emit('reply', {
          messageId,
          target,
          phrase,
          replyMsg: {
            data: '你开心就好',
            code: 200,
          },
        })
      })
    })
    http.listen(3000, () => {
      console.log('socket服务创建成功')
    })
  },
}
