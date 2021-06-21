import { NgModule } from '@angular/core';
import { OrderServiceComponent } from './containers/order-service/order-service.component';
import { OrderServiceFormComponent } from './containers/order-service-form/order-service-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule, NbLayoutModule, NbRadioModule, NbSelectModule, NB_TIME_PICKER_CONFIG } from '@nebular/theme';
import { RouterModule, Routes } from '@angular/router';
import { OrderServiceFacade } from './order-service.facade';
import { OrderServiceTableComponent } from './components/order-service-table/order-service-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { ptBR } from 'date-fns/locale';
import { NgSelectModule } from '@ng-select/ng-select';

const routes: Routes = [
    { path: '', component: OrderServiceComponent },
    { path: 'cadastrar', component: OrderServiceFormComponent },
    { path: 'atualizar/:id', component: OrderServiceFormComponent },
]

@NgModule({
    declarations: [
        OrderServiceComponent,
        OrderServiceFormComponent,
        OrderServiceTableComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NbSelectModule,
        SharedModule,
        NbLayoutModule,
        NbInputModule,
        NbButtonModule,
        NbCardModule,
        NbDatepickerModule.forRoot(),
        NbDatepickerModule, 
        NbIconModule,
        NbRadioModule,
        RouterModule.forChild(routes),
        NbDateFnsDateModule.forRoot({
            parseOptions: { locale: ptBR },
            formatOptions: { locale: ptBR },
          }),
    ],
    providers:[
        OrderServiceFacade
    ]
})
export class OrderServiceModule { }