import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataAttributesService {
  // PROPERTIES
  public dataUrl = '../../assets/data/attributes/demo';

  // CONTRUCTOR
  constructor(private http: HttpClient) {
    this.http
      .get(this.dataUrl)
      .toPromise()
      .then(data => {
        console.log('JAYZ', data);
      });
  }
}
