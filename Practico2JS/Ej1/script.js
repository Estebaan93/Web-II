/*Construir 2 clases (Persona y Empleado) 
Persona debe tener: 
nombre (pública) 
edad (pública) 
altura (privada) 
peso (privada) 
Empleado es una persona y tiene un sueldo (privado). 
Ambas clases deben tener un método público que permita imprimir un resumen de su 
información. 
Cree instancias de las clases y compruebe su funcionamiento. 
Compruebe el polimorfismo creando una función que reciba por parámetro cualquiera de 
los objetos e imprima su información. 
Agregue un método a la clase Empleado que permita llevar la cantidad de instancias 
creadas.*/

class Persona {
    constructor(nombre,edad,altura,peso) {
        this.nombre=nombre;
        this.edad=edad;
        let _altura= altura;	//Privado
        let _peso= peso; 	//Privado
        this.mostrar=function(){
            console.log(`Nombre : ${this.nombre} , Edad: ${this.edad} , Altura: ${_altura} , Peso: ${_peso} clase persona` ); 
     }
     
    }
}
class Empleado extends Persona{
    static cantidad=0;//atriburo que pertenece a la clase y no a los ojetos creados
    constructor(nombre,edad,altura,peso,sueldo){   
        super(nombre,edad,altura,peso);
        let _sueldo=sueldo;
        // Incrementar la cantidad de empleados cada vez que se crea una instancia
        Empleado.cantidad++;
       this.mostrar =function () {
            console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Altura: ${altura}, Peso: ${peso}, Sueldo: ${_sueldo}, clase empleado`);
        }
    }
    static fromPersona(persona, sueldo) {
        return new Empleado(persona.nombre, persona.edad, persona._altura, persona._peso, sueldo);
    }

}
Ale=new Persona("Alejandro",45,1.70,80);
Juan=new Empleado("Juan",43,1.78,85,300000);
Luis=new Empleado("Luis",55,1.56,76,299990);
Esteban=new Empleado('Esteban',30, 1.70, 76, 230000);

ale= Empleado.fromPersona(Ale,276666666);

Ale.mostrar();
Juan.mostrar();
ale.mostrar();
Esteban.mostrar();

console.log('Cantidad de instancias de empleados:',Empleado.cantidad);