import { Component, OnInit } from '@angular/core';
import {NgbOffcanvas} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-phone-menu',
  templateUrl: './phone-menu.component.html',
  styleUrls: ['./phone-menu.component.css']
})
export class PhoneMenuComponent implements OnInit {
  RatingCollapsed=true
  CategoryCollapsed=true
  PriceCollapsed=true
  
  constructor(private offcanvasService: NgbOffcanvas) { }
  ngOnInit(): void {
  }
     getDismissReason(reason: any) {
       this.offcanvasService.dismiss()
  }
}
