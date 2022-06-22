import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContainerComponent } from './container/container.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { AlbumComponent } from './album/album.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContainerComponent,
    SignUpComponent,
    HomeComponent,
    VideoComponent,
    AlbumComponent
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'home', component:HomeComponent},
      {path: 'album', component:AlbumComponent},
      {path: 'video', component:VideoComponent},
      {path: 'sign-up', component:SignUpComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
