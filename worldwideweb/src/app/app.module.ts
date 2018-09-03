import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {KidzCornerComponent} from './kidz-corner/kidz-corner.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatSidenavModule} from '@angular/material';
import {FloodFillComponent} from './flood-fill/flood-fill.component';
import { DragComponent } from './drag/drag.component';


const appRoutes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'floodfill', component: FloodFillComponent},
  {path: 'kidzcorner', component: KidzCornerComponent},
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    KidzCornerComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    FloodFillComponent,
    DragComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false}),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
