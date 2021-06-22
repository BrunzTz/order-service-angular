import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderService } from '../../models/order-service';

@Component({
  selector: 'app-order-service-table',
  templateUrl: './order-service-table.component.html',
  styleUrls: ['./order-service-table.component.scss']
})
export class OrderServiceTableComponent implements OnInit {

  @Input() orderServices: OrderService[] | [];

  @Output() onEdit: EventEmitter<number> = new EventEmitter();
  @Output() onRemove: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
