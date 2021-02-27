import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common-service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {

  public isMob;

  constructor(
    public router: Router,
    public comSvc: CommonService
  ) { 
    this.isMob = this.comSvc.isMobile;
  }

  ngOnInit(): void {
    console.log()
  }

  public back(){
    if(this.isMob){
      this.router.navigate(['/list']);
    }
  }

}
