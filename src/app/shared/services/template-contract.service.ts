import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TemplateHTML } from '../models/template-html.model';

@Injectable({
  providedIn: 'root',
})
export class TemplateContractService {
  constructor(private http: HttpClient) {}

  public getTemaplateHtmlForContract(): Observable<any> {
    return this.http.post(
      'https://api-dev.payvalidda.net/v4/wallet/getUserTransactionsX',
      { page_next: true },
      {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVU0VSX0NPREUiOiIyOTI2MDMiLCJFTUFJTCI6ImpzYW5jaGV6QGNpZGVuZXQuY29tLmNvIiwiU1RBVFVTIjoiMjAiLCJleHAiOjE2MzkxNzIwNjEsImlzcyI6IlBheVZhbGlkYVdhbGxldCJ9.q3PUsouIpDC2NYCYGRWZC9SKxbOl8S46VWoUejf4aqg',
        },
      }
    );
  }

  public getHttpOptions(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: environment.TOKEN,
      }),
    };
    return httpOptions;
  }
}
