import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { map, find, first, filter, tap } from 'rxjs/operators';
import { ICreditCard } from 'src/app/creditCard';
import { CreditCardService } from '../credit-card.service';

@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.component.html',
  styleUrls: ['./credit-card-details.component.scss']
})
export class CreditCardDetailsComponent implements OnInit {

  creditCard$!: Observable<ICreditCard | undefined>;

  constructor(private creditCardService: CreditCardService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      const cardNumber = parseInt(params.creditCardNumber);

      this.creditCard$ = this.creditCardService.getCreditCards().pipe(
        map(cc => cc.find(c => c.card_number === cardNumber))
      );

    });
  }

  ngOnInit(): void {
  }

}
