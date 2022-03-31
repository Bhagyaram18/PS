import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route3RoutingModule } from './route3-routing.module';
import { Route3Component } from './route3.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompThreeComponent } from './comp-three/comp-three.component';
import { CompFourComponent } from './comp-four/comp-four.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Route3Component,
    CompOneComponent,
    CompTwoComponent,
    CompThreeComponent,
    CompFourComponent,
  ],
  imports: [CommonModule, Route3RoutingModule, FormsModule],
})
export class Route3Module {}
