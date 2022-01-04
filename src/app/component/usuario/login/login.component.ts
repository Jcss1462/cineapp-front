import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(public authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.email="";
    this.password="";
  }

  public login() {

    this.authService.logInFirebase(this.email,this.password)
    .then((userCredential) => {
      //valido que el email haya sido verificado
      if(userCredential.user.emailVerified==false){
        this.failMessage("La cuenta no ha sido verificada");
      }else{
        //guardo el email del usuario en el local storage 
        localStorage.setItem("usuario",this.email);
        this.succesMessage("Sesión iniciada con éxito");
      }

    }).catch((error) => {
      console.log(error);
      this.failMessage(error);
    });;

  }


  public succesMessage(mensaje: string) {
    this.toastr.success(mensaje);
  }

  public failMessage(mensaje: string) {
    this.toastr.error(mensaje);
  }

}
