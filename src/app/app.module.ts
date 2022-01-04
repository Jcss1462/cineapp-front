import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './component/usuario/registro/registro.component';

//firebase
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth} from '@angular/fire/auth';

//form module
import { FormsModule } from '@angular/forms';

//Http
import {HttpClientModule} from '@angular/common/http';

//toaster
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),

    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
        timeOut: 10000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
      }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
