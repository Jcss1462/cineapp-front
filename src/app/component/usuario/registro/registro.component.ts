import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/domain/usuario';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public usuario: Usuario;

  constructor(public authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.usuario=new Usuario("","","",0,"","",0,0);
  }

  public save(): void {
    //registro en firebase
    this.authService.signInFirebase(this.usuario.email, this.usuario.password)
      .then((userCredential) => {
        //envio mail de verficacion
        const user = userCredential.user;
        this.authService.sendVerification(user).then(() => {

          this.succesMessage("Se envio un email de verificación");

          //guardo la informacion en el backend
          //seteo los valore por defecto
          this.usuario.idTipo_TiposUsuario = 2;
          this.usuario.idEstado_EstadosUsuario = 1;
          this.usuario.uid = user.uid;
          console.log(this.usuario);
          this.authService.saveUsuarioBackend(this.usuario).subscribe({
            complete: () => {
              this.succesMessage("Registro exitoso");
            }, error: (err) => {
              console.log(err);
              this.failMessage("Error al guardar en el backend: " + err);
            }
          });

        }).catch((error) => {
          console.log(error);
          this.failMessage(error);
        }
        );
      })
      .catch((error) => {
        console.log(error);
        this.failMessage(error);
      });

  }

  public succesMessage(mensaje: string) {
    this.toastr.success(mensaje);
  }

  public failMessage(mensaje: string) {
    this.toastr.error(mensaje);
  }

}
