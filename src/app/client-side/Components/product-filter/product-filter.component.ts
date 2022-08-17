import { Component, OnInit } from '@angular/core';
import {NgbOffcanvas, OffcanvasDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
    RatingCollapsed=true
    CategoryCollapsed=true
    PriceCollapsed=true
  constructor(private offcanvasService: NgbOffcanvas) { }

  ngOnInit(): void {
    
  }
  open(content:any) {
    this.offcanvasService.open(content, {ariaLabelledBy: 'offcanvas-basic-title'}).result.then((result) => {
      
    });
  }
     getDismissReason(reason: any) {
       this.offcanvasService.dismiss()
  }

}
