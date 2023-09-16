import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderreturnComponent } from './orderreturn.component';

describe('OrderreturnComponent', () => {
  let component: OrderreturnComponent;
  let fixture: ComponentFixture<OrderreturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderreturnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
