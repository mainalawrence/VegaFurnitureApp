import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
    RatingCollapsed=true
    CategoryCollapsed=true
    PriceCollapsed=true
  constructor() { }

  ngOnInit(): void {
  }

}
