export class UserService {
  constructor() {
    this.users = [];
  }

  createUser(user) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }
}
