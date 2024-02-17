const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");

class crudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const user = await this.model.create(data);
    return user;
  }

  async get(username) {
    const user = await this.model.findOne({
      where: {
        username:username
      },
    });
    if(!user){
      throw new AppError('can not found data',StatusCodes.NOT_FOUND)
    }
    return user;
  }

  async getAll() {
    const response = await this.model.findAll();
    return response;
  }

  async update(username, data) {
    const user = await this.model.update(data, {
      where: { username: username },
    });
    return user;
  }

  async destroy(username) {
    const user = await this.model.destroy({
      where: {
        username: username,
      },
    });
    if(!user){
      throw new AppError('can not found data to destroy ',StatusCodes.NOT_FOUND)
    }
    return user;
  }
}

module.exports = crudRepository;
