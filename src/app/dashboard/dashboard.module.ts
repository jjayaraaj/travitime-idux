import { AddTourComponent } from './tour/add-tour/add-tour.component';
import { FormsModule } from '@angular/forms';
import { TourComponent } from './tour/tour.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditTourComponent } from './tour/edit-tour/edit-tour.component';
import { AllToursComponent } from './tour/all-tours/all-tours.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        component: LandingComponent,
      },
      {
        path: 'tour',
        component: TourComponent,
        children: [
          { path: '', redirectTo: 'all', pathMatch: 'full' },
          {
            path: 'all',
            component: AllToursComponent,
          },
          {
            path: 'add',
            component: AddTourComponent,
          },
          {
            path: 'edit/:id',
            component: EditTourComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  declarations: [LandingComponent, EditTourComponent, AllToursComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class DashboardModule {}
