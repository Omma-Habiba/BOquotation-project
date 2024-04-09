import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetQuotesComponent } from './get-quotes/get-quotes.component';

export const routes: Routes = [
    { path: 'get-quotes', component: GetQuotesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
