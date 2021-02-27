import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatListComponent } from './main/chat-list/chat-list.component';
import { ChatPageComponent } from './main/chat-page/chat-page.component';

const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    {
      path: 'list',
      component: ChatListComponent
    },
    {
      path: 'chat',
      component: ChatPageComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
