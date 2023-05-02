import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './components/page1/page1.component';
import { PageaComponent } from './components/pagea/pagea.component';
import { PagebComponent } from './components/pageb/pageb.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';

const routes: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'pagea', component: PageaComponent },
  { path: 'pageb', component: PagebComponent },
  { path: 'horoscopo', component: HoroscopoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'page1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
