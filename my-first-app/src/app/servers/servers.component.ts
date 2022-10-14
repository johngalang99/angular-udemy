import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';
  serverName = 'Test server';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2'];
  counter = [];
  isFive = false;
  displayDetails = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onDisplay() {
    this.displayDetails = !this.displayDetails;
    if (this.displayDetails) {
      this.counter.push(Date.now());
    }
    if (this.counter.length > 4) this.isFive = true;
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
  }

  getColor() {
    return this.isFive && 'blue';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
