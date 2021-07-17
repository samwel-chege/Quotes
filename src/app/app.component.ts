import { Quote } from './quote';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  quotes:Quote[]= [
    new Quote(1, 'Sometimes my genius is almost frightening!', 'Quotes by Jeremy Clarkson'),
    new Quote(2, 'It always seem impossible until it is done.', 'Quotes by Mahatma Gandhi'),
    new Quote(3, 'Every moment is a fresh beginning.', 'Quotes by T.S Eliot'),
    new Quote(4, 'Everything you can imagine is real.', 'Quote by Pablo Picasso'),
    new Quote(5, 'Simplicity is the ultimate sophistication.', 'Quote by Leonardo da Vinci'),
    new Quote(6, 'Whatever you do, do it well.', ' Quote by Walt Disney')
  ];
   
  
  
}


