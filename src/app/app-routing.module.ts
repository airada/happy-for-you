import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatroomComponent } from '../app/chatroom/chatroom.component';

const routes: Routes = [
  {path: 'Chatroom', component: ChatroomComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
