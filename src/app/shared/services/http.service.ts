import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
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

  public get<T>(url: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(url, {
      // headers: {
      //   'Content-Type': 'application/json'
      // },
      responseType: 'json',
      params: params
    }).pipe(
      catchError((err: HttpErrorResponse) => {
        console.error(err);
        return throwError(() => {
          return err;
        });
      })
    );
  }

}
