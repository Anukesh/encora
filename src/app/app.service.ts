import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  fetchItems(): any {
    return this.http.get('http://localhost:3000/items').pipe(
      catchError(this.handleError)
    );
  }

  addItems(obj): any {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(obj);
    return this.http.post('http://localhost:3000/items', body, { 'headers': headers }).pipe(
      catchError(this.handleError)
    );
  }

  removeItems(id): any {
    return this.http.delete(`http://localhost:3000/items/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(err: Response): any {
    console.log('failed with error: ', err);
    return throwError(err);
  }
}
