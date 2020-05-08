  
export class Pais{

    nombre:string;
    capital:string;
    flag:string;
    poblacion:string;
    id:number;

    constructor( nombre:string, capital:string, poblacion:string, flag:string ,id?:number){

        this.nombre=nombre;
        this.capital=capital;
        this.flag=flag;
        this.poblacion=poblacion;
        this.id=id;
    }
}