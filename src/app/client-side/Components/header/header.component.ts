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
  public navbarCollapse=true;
  public searchBarOpen!:boolean;

   constructor(private offcanvasService: NgbOffcanvas,public router:Router) {}


  ngOnInit(): void {
    this.searchBarOpen=false
  }
  open(){
const offcanvasRef = this.offcanvasService.open(ProductFilterComponent);
  }


}
