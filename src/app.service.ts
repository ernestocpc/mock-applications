import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  // Generate a new purchase each time this method is called
  getPurchase(): any {
    const purchase = {
      id: Math.floor(Math.random() * 1000) + 1,
      price: Math.floor(Math.random() * 1000) + 1,
    };
    return purchase;
  }

  // Generate a new user each time this method is called
  getUser(): any {
    const user = {
      id: 1,
      name: 'John Doe',
      email: 'johnDoe@gmail.com,',
    };
    return user;
  }
}

