import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]= [
    new Quote(1, 'sometimes my genius is almost frightening!', 'Quotes by Jeremy Clarkson'),
    new Quote(2, 'It always seem impossible until it is done', 'Quotes by Mahatma Gandhi'),
    new Quote(3, 'Every moment is a fresh beginning', 'Quotes by T.S Eliot')
  ];
   toggleDetails(index:any){
     this.quotes[index].showDescription = !this.quotes[index].showDescription;
   }

   completeQuote(isComplete:any, index:any){
     if(isComplete){
       this.quotes.splice(index,1);
     }
   }
  constructor() { }

  ngOnInit(): void {
  }

}
