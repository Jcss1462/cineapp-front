import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  User
} from "firebase/auth";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../domain/usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public auth: Auth;

  private url:string=environment.apiUrl+'usuarios/'

  constructor(public httpClient: HttpClient, private _fireAuth: Auth) {
    console.log("El servicio de ususario funciona");
    this.auth = _fireAuth;
  }

  public signInFirebase(email: string, password: string) {
    const auth = getAuth();
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  public sendVerification(user: User) {
    this.auth = getAuth();
    return sendEmailVerification(user);
  }

  public saveUsuarioBackend(usuario:Usuario):Observable<any>{
    return this.httpClient.post(this.url+'save',usuario);
  }

}
