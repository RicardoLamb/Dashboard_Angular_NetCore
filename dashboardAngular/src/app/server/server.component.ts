import { Server } from './../../shared/server';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  color: string;
  buttonText: string;

  @Input() serverInput: Server;

  ngOnInit(): void {
    this.getServerStatus(this.serverInput.isOnline);
  }

  getServerStatus(isOnline: boolean): void {
    if(isOnline) {
      this.serverInput.isOnline = true;
      this.color = '#66BB6A';
      this.buttonText = 'Shut Down';
    } else
    {
      this.serverInput.isOnline = false;
      this.color = '#FF686B';
      this.buttonText = 'Start';
    }
  }

  toggleStatus(onlineStatus: boolean): void {
    console.log(this.serverInput.name, ' : ', onlineStatus);
    this.getServerStatus(!onlineStatus);
  }

}
