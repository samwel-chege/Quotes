import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]= [
    new Quote(1, 'Sometimes my genius is almost frightening!', 'Quotes by Jeremy Clarkson'),
    new Quote(2, 'It always seem impossible until it is done.', 'Quotes by Mahatma Gandhi'),
    new Quote(3, 'Every moment is a fresh beginning.', 'Quotes by T.S Eliot'),
    new Quote(4, 'Everything you can imagine is real.', 'Quote by Pablo Picasso'),
    new Quote(5, 'Simplicity is the ultimate sophistication.', 'Quote by Leonardo da Vinci'),
    new Quote(6, 'Whatever you do, do it well.', ' Quote by Walt Disney')
  ];
   toggleDetails(index:any){
     this.quotes[index].showDescription = !this.quotes[index].showDescription;
   }

   deleteQuote(isComplete:any, index:any){
     if(isComplete){
       let toDelete = confirm(`Are you you want to delete ${this.quotes[index].name}?`)
     }
   }
  constructor() { }

  ngOnInit(): void {
  }

}
