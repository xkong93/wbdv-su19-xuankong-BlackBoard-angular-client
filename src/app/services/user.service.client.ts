import {Injectable} from '@angular/core';


@Injectable()
export class UserService {
  users = [
    {id: '123', username: 'alice', password: 'alice'},
    {id: '234', username: 'bob', password: 'bob'}
  ];


  findUserByCredentials(username: string, password: string) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i];
      if (username === user.username &&
        password === user.password) {
        return user;
      }
    }
    return null;
  }

  findUserById(userId: string) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.users.length; i++) {
        const user = this.users[i];
        if (user.id === userId) {
          return user;
        }
    }
    return null;
  }

}
