import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ProductFilterComponent } from '../../client-side/Components/product-filter/product-filter.component';
import { PhoneMenuComponent } from '../Components/phone-menu/phone-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  index = [10, 1, 1, 1];

  public navbarCollapse = true;

  public searchBarOpen!: boolean;

  constructor(private offcanvasService: NgbOffcanvas, public router: Router) { }


  ngOnInit(): void {
    this.searchBarOpen = false;
  }

  open() {
    const offcanvasRef = this.offcanvasService.open(ProductFilterComponent);
  }

  menuOpen() {
    const offcanvasRef = this.offcanvasService.open(PhoneMenuComponent);
  }
  close() {
    const offcanvasRef = this.offcanvasService.dismiss(ProductFilterComponent);
  }
  logedin() {
    if (localStorage.getItem("vega") == null) {
      return false;
    }
    return true;
  }
  logout() {
    localStorage.removeItem('vega');
  }
  getName() {
    let data = JSON.parse("" + localStorage?.getItem("vega"))
    console.log(data);
    return data.name;
  }



}
