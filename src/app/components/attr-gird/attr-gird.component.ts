import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-attr-gird',
  templateUrl: './attr-gird.component.html',
  styleUrls: ['./attr-gird.component.scss']
})

//
export class AttrGirdComponent implements OnInit {
  // PROPERTIES
  public demoUrl = 'https://jsonplaceholder.typicode.com/posts';

  // CONSTRUCTUR
  constructor(private http: HttpClient) {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .toPromise()
      .then(data => {
        console.log('DATA', data);
      });
  }

  ngOnInit() {}
}
