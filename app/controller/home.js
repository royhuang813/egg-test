const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    let data = await this.ctx.model.Students.find({})
    console.log('ttt', data)
    // console.log('ccc', this.ctx)
    this.ctx.body = 'Hello world'
  }
}

module.exports = HomeController