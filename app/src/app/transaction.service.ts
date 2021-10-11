import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITransaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }
  
  getTransactions(): Observable<ReadonlyArray<ITransaction>>{
    return this.http.get<ReadonlyArray<ITransaction>>("http://localhost:3000/transactions");
  }
  
  // addTransaction(transaction: ITransaction): Observable<any> {
  //   const customHeaders = new HttpHeaders({
  //     'Accept': 'application/json'
  //   });
    
  //   return this.http.post("http://localhost:3000/transactions", transaction, { headers: customHeaders });
  // }
}