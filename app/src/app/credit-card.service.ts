import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreditCard } from './creditCard';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  constructor(private http: HttpClient) { }

  getCreditCards(): Observable<ReadonlyArray<ICreditCard>>{
    return this.http.get<ReadonlyArray<ICreditCard>>("http://localhost:3000/credit_cards");
  }

  deleteCreditCard(number: number) {
    return this.http.delete(`http://localhost:3000/credit_cards/${number}`);
  }

  addCreditCard(creditCard: ICreditCard): Observable<any> {
    const customHeaders = new HttpHeaders({
      'Accept': 'application/json'
    });
    
    return this.http.post("http://localhost:3000/credit_cards", creditCard, { headers: customHeaders });
  }
}
