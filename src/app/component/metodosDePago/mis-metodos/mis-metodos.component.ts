import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MetodosDePago } from 'src/app/domain/metodosDePago';
import { MetodosDePagoService} from 'src/app/service/metodos-de-pago-service.service';

@Component({
  selector: 'app-mis-metodos',
  templateUrl: './mis-metodos.component.html',
  styleUrls: ['./mis-metodos.component.css']
})
export class MisMetodosComponent implements OnInit {


  public misMetodos: MetodosDePago[];

  constructor(public metodosDePagoService: MetodosDePagoService, private toastr: ToastrService) { }

  ngOnInit(): void {

    //obtengo mis metodos de pago
    this.metodosDePagoService.misMetodos().subscribe({
      next: (data) => {
      this.misMetodos=data;
      console.log(this.misMetodos);
    }, error: (err) => {
      console.log(err);
      this.failMessage("Error al obtener metodos de pago: " + err);
    }});

  }

  public succesMessage(mensaje: string) {
    this.toastr.success(mensaje);
  }

  public failMessage(mensaje: string) {
    this.toastr.error(mensaje);
  }


}
