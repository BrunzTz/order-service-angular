import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NbIconModule, NbLayoutModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { IconAddRegisterComponent } from './icon-add-register/icon-add-register.component';

@NgModule({
    declarations: [
        LayoutComponent,
        IconAddRegisterComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        NbLayoutModule,
        NbIconModule
    ],
    exports: [
        LayoutComponent,
        IconAddRegisterComponent
    ]
})
export class SharedModule { }