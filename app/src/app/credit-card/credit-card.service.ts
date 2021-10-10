import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreditCard } from '../creditCard';

@Injectable({
  providedIn: 'any'
})
export class CreditCardService {

  constructor(private http: HttpClient) { }

  getCreditCards(): Observable<ReadonlyArray<ICreditCard>>{
    return this.http.get<ReadonlyArray<ICreditCard>>("http://localhost:3000/credit_cards");
  }

  // addCreditCards(): Observable<ReadonlyArray<ICreditCard>>{
  //   return this.http.post<ICreditCard>("localhost:3000/credit_cards");
  // }
}
