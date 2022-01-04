export class MetodosDePago {

    constructor(
        public idMetodo:number,
        public cvv:number,
        public fechaExpiracion:string,
        public nombreTarjetahabiente:string,
        public numeroTarjeta:number,
        public idEstado_EstadosMetodoDePago:number,
        public email_Usuarios:string,
    ){

        
    }

}
