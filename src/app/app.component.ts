import { Component, HostListener } from '@angular/core';
import { CommonService } from './services/common-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat-app';
  
  constructor(public comSvc :CommonService){
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.comSvc.isMobile = (window.innerWidth < 430 ) ? true : false;
  }
}
