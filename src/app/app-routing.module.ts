import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./route1/route1.module').then((m) => m.Route1Module),
  },
  {
    path: 'routeOne',
    loadChildren: () =>
      import('./route1/route1.module').then((m) => m.Route1Module),
  },
  {
    path: 'routeTwo',
    loadChildren: () =>
      import('./route2/route2.module').then((m) => m.Route2Module),
  },
  {
    path: 'routeThree',
    loadChildren: () =>
      import('./route3/route3.module').then((m) => m.Route3Module),
  },
  {
    path: 'routeFour',
    loadChildren: () =>
      import('./route4/route4.module').then((m) => m.Route4Module),
  },
  {
    path: 'routeFive',
    loadChildren: () =>
      import('./route5/route5.module').then((m) => m.Route5Module),
  },
  {
    path: 'routeSix',
    loadChildren: () =>
      import('./route6/route6.module').then((m) => m.Route6Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
