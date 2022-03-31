import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route4RoutingModule } from './route4-routing.module';
import { Route4Component } from './route4.component';
import { FormsModule } from '@angular/forms';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompThreeComponent } from './comp-three/comp-three.component';
import { CompFourComponent } from './comp-four/comp-four.component';

@NgModule({
  declarations: [
    Route4Component,
    CompOneComponent,
    CompTwoComponent,
    CompThreeComponent,
    CompFourComponent,
  ],
  imports: [CommonModule, Route4RoutingModule, FormsModule],
})
export class Route4Module {}
