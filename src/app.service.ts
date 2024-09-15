import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPurchase(): any {
    // Generate a new price value each time this method is called
    const purchase = {
      id: 1,
      price: Math.floor(Math.random() * 1000) + 1, // Random price between 1 and 1000
    };
    return purchase;
  }
}

