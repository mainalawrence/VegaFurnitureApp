import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-menu',
  templateUrl: './phone-menu.component.html',
  styleUrls: ['./phone-menu.component.css']
})
export class PhoneMenuComponent implements OnInit {
  RatingCollapsed=true
  CategoryCollapsed=true
  PriceCollapsed=true
  
  constructor() { }
  ngOnInit(): void {
  }

}
