import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingdeliveryComponent } from './shippingdelivery.component';

describe('ShippingdeliveryComponent', () => {
  let component: ShippingdeliveryComponent;
  let fixture: ComponentFixture<ShippingdeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingdeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingdeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
