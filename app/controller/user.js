'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this
    ctx.body = ctx.model.User.find({})
  }

  async getAllStudents() {
    const { ctx } = this
    ctx.body = 'qq'
  }
}

module.exports = UserController;
