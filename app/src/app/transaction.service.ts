import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITransaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }
  
  getTransactions(): Observable<Array<ITransaction>>{
    return this.http.get<Array<ITransaction>>("http://localhost:3000/transactions");
  }
  
  // addTransaction(transaction: ITransaction): Observable<any> {
  //   const customHeaders = new HttpHeaders({
  //     'Accept': 'application/json'
  //   });
    
  //   return this.http.post("http://localhost:3000/transactions", transaction, { headers: customHeaders });
  // }
}




// Card number max -> 13 -> 16
// CSC -> only accept numbers (must be integer)
// 	Validator problemer ved number field? -> mulig løsning lav field om til text field

// Credit card card router forkert på /credit-cards