import { Component, OnInit } from '@angular/core';

import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent implements OnInit {
  activeUsers: string[] = []
  inactiveUsers: string[] = []

  constructor(private UsersService: UsersService) { }

  ngOnInit(): void {
    this.activeUsers = this.UsersService.activeUsers
    this.inactiveUsers = this.UsersService.inactiveUsers
  }

}
