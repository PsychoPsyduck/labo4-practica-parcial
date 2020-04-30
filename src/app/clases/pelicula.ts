export class Pelicula {
    id:number;
    nombre:string;
    tipo:string;
    fecha_estreno:string;
    cantidad_publico:string;
    foto:string;

    public constructor(nombre:string,tipo:string,fecha_estreno:string,cantidad_publico:string,foto:string)
    {
        this.nombre=nombre;
        this.tipo=tipo;
        this.fecha_estreno=fecha_estreno;
        this.cantidad_publico=cantidad_publico;
        this.foto=foto;
    }
}

// a. id
// b. Nombre
// c. tipo { terror , comedia, amor ,otros }
// d. fecha de estreno,
// e. cantidad de público
// f. Foto de la película
