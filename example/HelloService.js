class HelloServe {
  constructor() {}
  hello(name,say) {
    console.info('接收到的', name,say)
    return {
      say:"hello yo"+name,
      name:"runner-up-js"+say,
    }
  }
}
module.exports = HelloServe
