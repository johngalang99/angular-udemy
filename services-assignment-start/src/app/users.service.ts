import { Injectable } from '@angular/core';

import { CounterService } from './counter.service';


@Injectable()
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private CounterService: CounterService) { }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id])
    this.inactiveUsers.splice(id, 1)
    this.CounterService.incrementInActiveToActive()
  }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id])
    this.activeUsers.splice(id, 1)
    this.CounterService.incrementActiveToInactive()
  }
}
