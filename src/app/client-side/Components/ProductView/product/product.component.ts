import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product:any={};
  private hearts:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  HandleHeart(){
    this.hearts++;
    console.log(this.hearts);

  }

}
