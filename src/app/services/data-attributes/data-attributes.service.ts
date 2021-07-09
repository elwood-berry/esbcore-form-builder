import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataAttributesService {
  // PROPERTIES
  public dataUrl = '../../assets/data/attributes/demo';

  // CONTRUCTOR
  constructor(private http: HttpClient) {}

  //
  public getData(url): Observable<any> {
    return this.http.get<any>(url);
  }

  //
}
