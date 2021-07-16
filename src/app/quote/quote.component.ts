import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]= [
    {id:1, name: 'sometimes my genius is almost frightening!', description: 'Quotes by Jeremy Clarkson'},
    {id:2, name: 'It always seem impossible until it is done', description: 'Quotes by Mahatma Gandhi'},
    {id:3, name: 'Every moment is a fresh beginning', description: 'Quotes by T.S Eliot'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
