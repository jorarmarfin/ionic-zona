import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcuerdosPageRoutingModule } from './acuerdos-routing.module';

import { AcuerdosPage } from './acuerdos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcuerdosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AcuerdosPage]
})
export class AcuerdosPageModule {}
