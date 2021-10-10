import { Component, Input, OnInit } from '@angular/core';
import { ICreditCard } from 'src/app/creditCard';

@Component({
  selector: 'app-credit-card-list-item',
  templateUrl: './credit-card-list-item.component.html',
  styleUrls: ['./credit-card-list-item.component.scss']
})
export class CreditCardListItemComponent implements OnInit {
  
  @Input() creditCardInfo!: ICreditCard;

  constructor() { }

  ngOnInit(): void {
  }

}
