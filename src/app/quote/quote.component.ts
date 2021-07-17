import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]= [
    new Quote(1, 'Sometimes my genius is almost frightening!', 'Quotes by Jeremy Clarkson', new Date('2021,10,7')),
    new Quote(2, 'It always seem impossible until it is done.', 'Quotes by Mahatma Gandhi', new Date('2021,12,7')),
    new Quote(3, 'Every moment is a fresh beginning.', 'Quotes by T.S Eliot', new Date('2020,7,9')),
    new Quote(4, 'Everything you can imagine is real.', 'Quote by Pablo Picasso', new Date('2021,12,4')),
    new Quote(5, 'Simplicity is the ultimate sophistication.', 'Quote by Leonardo da Vinci', new Date('2020,10.10')),
    new Quote(6, 'Whatever you do, do it well.', ' Quote by Walt Disney', new Date('2019,5,5'))
  ];
   toggleDetails(index:any){
     this.quotes[index].showDescription = !this.quotes[index].showDescription;
   }

   deleteQuote(isCreate:any, index:any){
     if(isCreate){
       let toDelete = confirm(`Are you sure you  want to delete quote?`)

       if(toDelete){
         this.quotes.splice(index,1)
       }
     }
   }
  constructor() { }

  ngOnInit(): void {
  }

}
