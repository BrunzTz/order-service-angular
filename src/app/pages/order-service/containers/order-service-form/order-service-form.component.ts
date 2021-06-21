import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { OrderService } from '../../models/order-service';
import { OrderServiceFacade } from '../../order-service.facade';

@Component({
  selector: 'app-order-service-form',
  templateUrl: './order-service-form.component.html',
  styleUrls: ['./order-service-form.component.scss']
})
export class OrderServiceFormComponent implements OnInit {

  public form: FormGroup;
  public userId$ = this.route.paramMap.pipe(map(params => params.get('id')));

  constructor(
    public facade: OrderServiceFacade,
    public formBuilder: FormBuilder,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.facade.getDadosForm();
    this.iniciarForm();
  }

  iniciarForm(){
    this.form = this.formBuilder.group({
      data: [''],
      paciente: [null, [Validators.required]],
      convenio: [null, [Validators.required]],
      postoColeta: [null, [Validators.required]],
      medico: [null, [Validators.required]],
      exame: [null, [Validators.required]],
      preco: ['', [Validators.required]]
    })
  }

  cadastrarOrderService(){
    console.log(this.form.value)
    this.facade.addOrderService(this.form.value)
    this.router.navigate(['/order-service'])
  }

  atualizaForm(){
    const orderService = this.facade.getById(this.userId$)

    this.form.patchValue({orderService})
  }
}
