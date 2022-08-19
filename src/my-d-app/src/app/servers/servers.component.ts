import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverState = "Server has not been created";
  serverName = '';
  constructor() {
    setTimeout(() => {this.allowNewServer = true;
  }, 3000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverState = "Server is created";

    
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
