import { Component, OnInit } from '@angular/core';
import {IPayPalConfig,ICreateOrderRequest   } from 'ngx-paypal';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 public payPalConfig ? : IPayPalConfig;
 showCancel:boolean=false
 showError:boolean=false
 showSuccess:any;
  constructor(public cartservice:CartService) { }

   ngOnInit(): void {
        this.initConfig();
    }
    private initConfig(): void {
        this.payPalConfig = {
            currency: 'Ksh',
            clientId: 'sb-n4mlx8233214@business.example.com',
            createOrderOnClient: (data) => < ICreateOrderRequest > {
                intent: 'CAPTURE',
                purchase_units: [{
                    amount: {
                        currency_code: 'Ksh',
                        value: `${this.cartservice.TotolPrice}`,
                        breakdown: {
                            item_total: {
                                currency_code: 'Ksh',
                                value: `${this.cartservice.TotolPrice}`
                            }
                        }
                    },
                    items:this.cartservice.products
                }]
            },
            advanced: {
                commit: 'true'
            },
            style: {
                label: 'paypal',
                layout: 'vertical'
            },
            onApprove: (data, actions) => {
                console.log('onApprove - transaction was approved, but not authorized', data, actions);
                actions.order.get().then((details:any) => {
                    console.log('onApprove - you can get full order details inside onApprove: ', details);
                });

            },
            onClientAuthorization: (data) => {
                console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
                this.showSuccess = true;
            },
            onCancel: (data, actions) => {
                console.log('OnCancel', data, actions);
                this.showCancel = true;

            },
            onError: err => {
                console.log('OnError', err);
                this.showError = true;
            },
            onClick: (data, actions) => {
                console.log('onClick', data, actions);
                //this.resetStatus();
            }
        };
    }

}
