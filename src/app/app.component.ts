import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ITI Course';
  username = 'marina';
  NameAddMessage = "no user is added"
  constructor() {}
  
  onInput(ev){
    console.log(ev.target.value);
    this.username = ev.target.value;
  }

  onClick(ev){
    console.log(ev);
    this.NameAddMessage = `${this.username} is Added`;

  }

  
}
