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
    return user;
  }

  async getAll() {
    const user = await this.model.findAll();
    return user;
  }

  async update(username, data) {
    const user = await this.model.update(data, {
      where: { username: username },
    });
    return user;
  }

  async destroy(id) {
    const user = await this.model.destroy({
      where: {
        username: username,
      },
    });
    return user;
  }
}

module.exports = crudRepository;
