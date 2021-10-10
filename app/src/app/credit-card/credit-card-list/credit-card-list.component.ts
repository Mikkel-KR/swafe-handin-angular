import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreditCard } from 'src/app/creditCard';
import { CreditCardService } from '../credit-card.service';

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.scss']
})
export class CreditCardListComponent implements OnInit {

  creditCards$: Observable<readonly ICreditCard[]>;

  constructor(private creditCardService: CreditCardService) {
    this.creditCards$ = this.creditCardService.getCreditCards();
  }

  ngOnInit(): void {
  }

}
