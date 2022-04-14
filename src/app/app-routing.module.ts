import { DrinkDetailsComponent } from './components/drink-details/drink-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinksResolverService } from './services/drinks-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    // children:[
    //   {
    //     path: ':id',
    //     component: DrinkDetailsComponent,
    //     resolve: {
    //       drinks: DrinksResolverService
    //     }
    //   }
    // ]
  },
  {
    path: '**',
    component: DrinkDetailsComponent,
    resolve: {
      drinks: DrinksResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
