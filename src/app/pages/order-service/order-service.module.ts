import { NgModule } from '@angular/core';
import { OrderServiceComponent } from './containers/order-service/order-service.component';
import { OrderServiceFormComponent } from './containers/order-service-form/order-service-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NbInputModule, NbLayoutModule } from '@nebular/theme';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: OrderServiceComponent },
    { path: 'cadastrar', component: OrderServiceFormComponent },
    { path: 'atualizar/:id', component: OrderServiceFormComponent },
]

@NgModule({
    declarations: [
        OrderServiceComponent,
        OrderServiceFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NbLayoutModule,
        NbInputModule,
        RouterModule.forChild(routes)
    ],
    exports:[
        OrderServiceComponent
    ]
})
export class OrderServiceModule { }