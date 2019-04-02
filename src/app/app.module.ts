import { NgModule,ApplicationRef  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule} from'@angular/platform-browser';
import { AppRoutingModule } from'./app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { GooglePlacesComponent } from './google-places/google-places.component';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    
    SignupComponent,
    
    HomeComponent,
    
    GooglePlacesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    GooglePlaceModule, BrowserModule, FormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyAhrZHqqvFMU4-CN-IVXv_GOgmolmxGG6E"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
