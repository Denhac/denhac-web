import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainDashComponent } from './main-dash/main-dash.component';
import { DonateComponent } from './donate/donate.component';


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
  }
  // ,
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainDashComponent,
    DonateComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
