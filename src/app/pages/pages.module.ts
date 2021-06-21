import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderServiceModule } from './order-service/order-service.module';
import { HomeModule } from './home/home.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        OrderServiceModule,
        HomeModule
    ],
})
export class PagesModule { }