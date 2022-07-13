import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrushUsersComponent } from './trush-users.component';

describe('TrushUsersComponent', () => {
  let component: TrushUsersComponent;
  let fixture: ComponentFixture<TrushUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrushUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrushUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
