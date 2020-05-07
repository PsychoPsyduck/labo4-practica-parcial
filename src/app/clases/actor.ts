import { Pais } from './pais';

export class Actor{

    id:number
    Nombre:string;
    apellido:string;
    sexo:string;
    FechaNacimiento:string;
    Foto:string;
    PaisOrigen: Pais;

    constructor(id:number,Nombre:string,apellido:string,sexo:string,FechaNacimiento:string,Foto:string,PaisOrigen:Pais){

        this.id=id;
        this.Nombre=Nombre;
        this.apellido=apellido;
        this.sexo = sexo;
        this.FechaNacimiento = FechaNacimiento;
        this.Foto = Foto;
        this.PaisOrigen = PaisOrigen;
    }
}