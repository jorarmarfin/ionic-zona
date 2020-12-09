import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnlacesPageRoutingModule } from './enlaces-routing.module';

import { EnlacesPage } from './enlaces.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnlacesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EnlacesPage]
})
export class EnlacesPageModule {}
