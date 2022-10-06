import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const versionUrl: string = 'https://raw.githubusercontent.com/yiqu/pokemondb/master/package.json';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(url).pipe(
      catchError((err: HttpErrorResponse) => {
        console.error(err);
        return throwError(() => {
          return new Error("Error: " + err);
        });
      })
    );
  }

}
