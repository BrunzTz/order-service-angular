import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderServiceTableComponent } from './order-service-table.component';

describe('OrderServiceTableComponent', () => {
  let component: OrderServiceTableComponent;
  let fixture: ComponentFixture<OrderServiceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderServiceTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderServiceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
