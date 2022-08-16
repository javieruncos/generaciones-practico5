let formulario = document.getElementById("formulario");
formulario.addEventListener("click",guardarInfo);


let edad = document.getElementById("edad");
edad.addEventListener("click",Edad);
let sectionPadre = document.getElementById("sectionP");
let generacion = document.createElement('div')
let parrafo = document.createElement('h3');
let lista = document.createElement("ul")

class Persona {
    constructor(nombre,edad,DNI,sexo,peso,altura,fechaNacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.fechaNacimiento = fechaNacimiento;
    }

    mostraGeneracion(){

        function Genereaciones(){

              
            // estilos
            lista.style.fontSize="30px"
            parrafo.style.textAlign ="center"
            parrafo.style.color="yellow"
            parrafo.style.marginTop="30px"
            sectionPadre.appendChild(parrafo)
            generacion.style.marginTop = "40px"
            generacion.style.textAlign = "center"
            generacion.style.fontSize = "60px"        

            switch(true){
              case persona.fechaNacimiento >= 1994 && persona.fechaNacimiento <= 2010:
                  parrafo.innerHTML="perteneces a la generacion Z";
                  sectionPadre.appendChild(parrafo)
                  lista.innerHTML=`
                  <li><h5>Año desde</h5></li>
                  <li>1994-2010</li>
                  <li><h5>Poblacion de las generaciones</h5></li>
                  <li>7.800.000</li>
                  <li><h5>Circunstancia historica</h5></li>
                  <li>Expancion masiva de internet</li>
                  <li><h5>Rasgo caracteristico</h5></li> 
                  <li>irreverencia</li>
                  `
                  generacion.appendChild(lista)
                  sectionPadre.appendChild(generacion)
                  break
              case persona.fechaNacimiento >= 1981 && persona.fechaNacimiento <= 1993:
                  console.log("perteneces a la generacion Y")
                  parrafo.innerHTML="perteneces a la generacion Y";
                  sectionPadre.appendChild(parrafo)
                  lista.innerHTML=`
                  <li><h5>Año desde</h5></li>
                  <li>1981-1993</li>
                  <li><h5>Poblacion de las generaciones</h5></li>
                  <li>7.200.000</li>
                  <li><h5>Circunstancia historica</h5></li>
                  <li>Inicio de la digilitacion</li>
                  <li><h5>Rasgo caracteristico</h5></li> 
                  <li>Frustracion</li>
                  `
                  generacion.appendChild(lista)
                  sectionPadre.appendChild(generacion)
                  break
              case persona.fechaNacimiento >= 1969 && persona.fechaNacimiento <= 1980:
                  parrafo.innerHTML="perteneces a la generacion X";
                  sectionPadre.appendChild(parrafo)
                  lista.innerHTML=`
                  <li><h5>Año desde</h5></li>
                  <li>1969-1980</li>
                  <li><h5>Poblacion de las generaciones</h5></li>
                  <li>9.300.000</li>
                  <li><h5>Circunstancia historica</h5></li>
                  <li>Crisis del 73 y transicion española</li>
                  <li><h5>Rasgo caracteristico</h5></li> 
                  <li>Obsesion por el exito</li>
                  `
                  generacion.appendChild(lista)
                  sectionPadre.appendChild(generacion)
                  break
              case persona.fechaNacimiento >= 1949 && persona.fechaNacimiento <= 1968:
                  parrafo.innerHTML="perteneces a la generacion Baby Boom";
                  sectionPadre.appendChild(parrafo)
                  lista.innerHTML=`
                  <li><h5>Año desde</h5></li>
                  <li>1949-1968</li>
                  <li><h5>Poblacion de las generaciones</h5></li>
                  <li>12.200.000</li>
                  <li><h5>Circunstancia historica</h5></li>
                  <li>Paz y explosion demografica</li>
                  <li><h5>Rasgo caracteristico</h5></li> 
                  <li>Ambicion</li>
                  `
                  generacion.appendChild(lista)
                  sectionPadre.appendChild(generacion)
                  break
              case persona.fechaNacimiento >= 1930 && persona.fechaNacimiento <= 1948:
                  
                  parrafo.innerHTML="perteneces a la generacion Silent Generation";
                  sectionPadre.appendChild(parrafo)
                  lista.innerHTML=`
                  <li><h5>Año desde</h5></li>
                  <li>1930-1948</li>
                  <li><h5>Poblacion de las generaciones</h5></li>
                  <li>6.300.000</li>
                  <li><h5>Circunstancia historica</h5></li>
                  <li>Conflictos belicos</li>
                  <li><h5>Rasgo caracteristico</h5></li> 
                  <li>Austeridad</li>
                  `
                  generacion.appendChild(lista)
                  sectionPadre.appendChild(generacion)
                  break
                 default:
                  alert("numero erroneo")   
            }
        }
        Genereaciones()
    }

    esMayordeEdad(){
     if(persona.edad < 18){
        alert("eres menor de edad ")
     }else if(persona.edad > 18){
        alert("eres mayor de edad")
     }


    }

    mostrarDatos(){
       document.write(`
        <ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Edad: ${this.edad}</li>
        <li>Dni: ${this.dni}</li>
        <li>Sexo: ${this.sexo}</li>
        <li>Peso: ${this.peso}</li>
        <li>Altura: ${this.altura}</li>
        <li>Fecha de nacimiento: ${this.fechaNacimiento}</li>
        </ul>
       `)
    }
}



// se creo una funcion para guardar el value de los input que ademas llama al metodo mostrarGeneracion 

let persona = new Persona()
function Edad(){
    persona.esMayordeEdad()
}

function guardarInfo(e){
    e.preventDefault();
    let nombre = document.getElementById("input1").value;
    let edad = document.getElementById("input2").value;
    let Dni = document.getElementById("input3").value;
    let sexo = document.getElementById("input4").value;
    let peso= document.getElementById("input5").value;
    let altura= document.getElementById("input6").value;
    let Fecha= document.getElementById("input7").value;
    persona = new Persona (nombre,edad,Dni,sexo,peso,altura,Fecha);
    // persona.mostrarDatos()
    
    if(formulario.innerHTML==="Mostrar generacion"){  
        
        persona.mostraGeneracion()
        formulario.innerHTML="consultar generacion";
    }else{
        formulario.innerHTML="consultar generacion";
        // sectionPadre.removeChild(sectionPadre.children[3]);
        formulario.innerHTML="Mostrar generacion"
        location.reload()
      
    }
}



console.log(sectionPadre)
