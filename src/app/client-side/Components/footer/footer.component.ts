import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  date!:string;
  companyName:string='Bright Tech';
  constructor() { 
    this.date=new Date().getFullYear().toString();
    
  }

  ngOnInit(): void {
  }

}
