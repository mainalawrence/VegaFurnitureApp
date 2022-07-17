import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { window, windowToggle } from 'rxjs';
import { ProductFilterComponent } from '../../client-side/Components/product-filter/product-filter.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  index=[10,1,1,1];
  public getScreenWidth: any;

  public navbarCollapse=true;
  
  public searchBarOpen!:boolean;

   constructor(private offcanvasService: NgbOffcanvas,public router:Router) {}


  ngOnInit(): void {
    this.searchBarOpen=false;
   
    console.log();
    
  }

    @HostListener('window:resize', ['$event'])
  onWindowResize() {
    
   
     
  }
  open(){
const offcanvasRef = this.offcanvasService.open(ProductFilterComponent);
  }




}
