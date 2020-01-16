import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { NotfoundComponentComponent } from './components/notfound-component/notfound-component.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    GoodsComponent,
    NotfoundComponentComponent,
    NavbarComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp({
    
        apiKey: "AIzaSyDl_7nEKsXEK2C8ikeCdEoPRUbGydo6UvA",
        authDomain: "market-caa18.firebaseapp.com",
        databaseURL: "https://market-caa18.firebaseio.com",
        projectId: "market-caa18",
        storageBucket: "market-caa18.appspot.com",
        messagingSenderId: "885954530092",
        appId: "1:885954530092:web:ec3a7cdcb0e465c69ffa89",
        measurementId: "G-LF7WWG9TVJ"
      
     } )
  ],
  providers: [{
    provide : FirestoreSettingsToken ,useValue :{}
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
