import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatListComponent } from './main/chat-list/chat-list.component';
import { ChatPageComponent } from './main/chat-page/chat-page.component';
import { CommonService } from './services/common-service';

@NgModule({
  declarations: [
    AppComponent,
    ChatListComponent,
    ChatPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
