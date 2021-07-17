import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Quote } from '../quote';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
   
  @Input() quote!:Quote;
  @Output() isCreate = new EventEmitter<boolean>();

  quoteDelete(create:boolean){
    this.isCreate.emit(create);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
