import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ProductFilterComponent } from '../product-filter/product-filter.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
navbarCollapse=true;
   constructor(private offcanvasService: NgbOffcanvas,public router:Router) {}


  ngOnInit(): void {
  }
  open(){
const offcanvasRef = this.offcanvasService.open(ProductFilterComponent);
  }


}
