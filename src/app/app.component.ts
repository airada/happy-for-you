import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Happy For You';

  constructor(private router: Router){}

  ngOnInit() {
    this.router.navigate([`${'Chatroom'}`])
}

}