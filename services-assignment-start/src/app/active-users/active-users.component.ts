import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private UsersService: UsersService) { }

  ngOnInit(): void {
    this.users = this.UsersService.activeUsers
  }

  onSetToInactive(id: number) {
    this.UsersService.setToInactive(id)
  }
}
