import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common-service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})

export class ChatListComponent implements OnInit {

  public users = [
    {
      id: '1', name: 'Johnson'
    },
    {
      id: '2', name: 'Dwayne'
    },
    {
      id: '3', name: 'Ronaldo'
    },
    {
      id: '4', name: 'Messi'
    },
    {
      id: '5', name: 'Rooney'
    }
  ];
  
  constructor(
    public router: Router,
    public comSvc: CommonService
  ) { }

  ngOnInit(): void {
  }

  public chatClick(user){
    if(this.comSvc.isMobile){
      this.router.navigate(['/chat']);
    }
  }

}
