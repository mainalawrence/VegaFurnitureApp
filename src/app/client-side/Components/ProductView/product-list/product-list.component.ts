import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  Products:any[]=[1,2,2,2,3,4,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,4]
  constructor() { }

  ngOnInit(): void {
  }

}
