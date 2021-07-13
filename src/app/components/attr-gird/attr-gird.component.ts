import { Component, OnInit } from '@angular/core';
// import { DataAttributesService } from '../../services/data-attributes/data-attributes.service';

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
  constructor() {
    // json.getData('../../assets/data/attributes.json').subscribe(result => {
    //   console.log(result);
    // });
    // this.http
    //   .get(this.demoUrl)
    //   .toPromise()
    //   .then(data => {
    //     console.log('DATA', data);
    //   });
  }

  ngOnInit() {}
}
