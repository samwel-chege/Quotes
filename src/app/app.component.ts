import { Quote } from './quote';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[]= [
    {id:1, name: 'sometimes my genius is almost frightening!'},
    {id:2, name: 'It always seem impossible until it is done'},
    {id:3, name: 'Every moment is a fresh beginning'}
  ];

  
  
}


