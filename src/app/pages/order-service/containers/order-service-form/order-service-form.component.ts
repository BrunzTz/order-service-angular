import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { OrderService } from '../../models/order-service';
import { OrderServiceFacade } from '../../order-service.facade';
import { format } from 'date-fns'

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

  public get date(){
    return this.form.get('date')?.value;
  }

  ngOnInit(): void {
    this.facade.getDadosForm();
    this.iniciarForm();
    this.atualizaForm();
    this.form.valueChanges.pipe().subscribe(z => console.log(z))
  }

  iniciarForm(){
    this.form = this.formBuilder.group({
      date: [''],
      paciente: [null, [Validators.required]],
      convenio: [null, [Validators.required]],
      posto_coleta: [null, [Validators.required]],
      medico: [null, [Validators.required]],
      exame: [null, [Validators.required]],
      preco: ['', [Validators.required]]
    })
  }

  cadastrarOrderService(){
    const valorFormatado = {
      ...this.form.value, 
      date: format(this.date, 'yyyy-MM-dd')
    }
    this.facade.addOrderService(valorFormatado)
    this.router.navigate(['/order-service'])
  }

  async atualizaForm(){
    this.userId$.pipe(
        filter(Boolean),
        switchMap((id: any) => this.facade.getById(id))
    ).subscribe( (orderService: OrderService) => {
      this.form.patchValue({
        convenio: orderService.convenio.id,
        paciente: orderService.paciente.id,
        postoColeta: orderService.posto_coleta.id,
        medico: orderService.medico.id,
      })
    });
  }
}
