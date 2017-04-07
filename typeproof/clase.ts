interface Inter{
  getSaludo(edad:number);
};

class Prueba implements Inter{
  protected nombre:string;

  constructor(nombre:string){
    this.nombre = nombre;
  }
  public getSaludo(edad:number):string{
    return "Hola " + this.nombre + " edad: " + edad;
  };
};

class Testeo extends Prueba{
  public setSaludo(nombre: string){
    this.nombre = nombre;
  }
}


var nombre = "Juan";
var Saludo = new Testeo(nombre);
console.log(Saludo.getSaludo(22));
