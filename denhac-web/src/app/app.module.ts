import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainDashComponent } from './main-dash/main-dash.component';
import { DonateComponent } from './donate/donate.component';
import { MemberResourcesComponent } from './member-resources/member-resources.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


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
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainDashComponent,
    DonateComponent,
    MemberResourcesComponent,
    NotFoundPageComponent
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
