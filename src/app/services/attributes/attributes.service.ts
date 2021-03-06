import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AttributesService {
  constructor(private http: HttpClient) {}

  //
  public getAttributes(url): Observable<any> {
    return this.http.get<any>(url);
  }
}
