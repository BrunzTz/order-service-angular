import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NbLayoutModule } from '@nebular/theme';

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        CommonModule,
        NbLayoutModule
    ],
    exports: [
        LayoutComponent
    ]
})
export class SharedModule { }