import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainDashComponent } from './main-dash/main-dash.component';

// Pages
import { DonateComponent } from './pages/donate/donate.component';
import { MemberResourcesComponent } from './pages/member-resources/member-resources.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AboutComponent } from './pages/about/about.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { PaymentComponent } from './pages/payment/payment.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: MainDashComponent,
    data: { title: 'Main' }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'donate',
    component: DonateComponent
  },
  {
    path: 'member-services',
    component: MemberResourcesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'classes',
    component: ClassesComponent
  },
  {
    path: 'payment/:type',
    component: PaymentComponent
  },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainDashComponent,
    DonateComponent,
    MemberResourcesComponent,
    NotFoundPageComponent,
    AboutComponent,
    ClassesComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
