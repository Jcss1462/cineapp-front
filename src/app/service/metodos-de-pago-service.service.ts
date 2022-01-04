import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MetodosDePagoService{

  private url:string=environment.apiUrl+'metodosDePago/'

  constructor(public httpClient: HttpClient) {
    console.log("El servicio de metodos de pago funciona");
  }


  public misMetodos():Observable<any>{
    console.log(this.url+'misMetodos/'+localStorage.getItem("usuario"));
    return this.httpClient.get(this.url+'misMetodos/'+localStorage.getItem("usuario"));
  }
  
}
