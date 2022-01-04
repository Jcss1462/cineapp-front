import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cineapp-front';

  constructor(public authService: AuthService,  private toastr: ToastrService, public router: Router) { }


  public isAuth(): boolean {
    //si el elemento esta retorna true, y si no false
    return !!localStorage.getItem('usuario');
  }

  public logOut(){
    console.log("logout");
    this.authService.signOutFirebase().then(()=>{
      this.succesMessage("Secion cerrada");
      this.router.navigate(['/login'])
    }).catch((e)=>{
      this.failMessage(e);
    });
  }

  
  public succesMessage(mensaje: string) {
    this.toastr.success(mensaje);
  }

  public failMessage(mensaje: string) {
    this.toastr.error(mensaje);
  }
}
