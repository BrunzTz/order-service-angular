import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { OrderServiceFacade } from '../../order-service.facade';

@UntilDestroy()
@Component({
  selector: 'app-order-service',
  templateUrl: './order-service.component.html',
  styleUrls: ['./order-service.component.scss']
})
export class OrderServiceComponent implements OnInit {

  constructor(
    public facade: OrderServiceFacade,
    public formBuilder: FormBuilder,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.facade.init();
  }
  
  editOrderService(id: number){
    this.router.navigate([`/order-service/atualizar/${id}`])
  }

}
