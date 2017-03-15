
var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
}
function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

    var nombre = prompt("Cuál es tu nombre ");
    var puntosTecnicos = Number(prompt("puntaje tecnico obtenido"));
    var puntajeHSE = Number(prompt("puntaje de HSE obtenido"));

    var objetoestudiante = {
      "nombre":nombre,
      "puntosTecnicos":puntosTecnicos,
      "puntajeHSE":puntajeHSE
    }
    estudiantes.push(objetoestudiante);
    return objetoestudiante;
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntajeHSE + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
  }
  function mostrarLista(estudiantes) {
      // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
     var lista="";
  for( var contador = 0; contador < estudiantes.length; contador ++){

    lista += mostrar(estudiantes[contador]);
  }
  return lista;
  }



function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
   var busqueda = estudiantes.filter(function(objetoestudiante){
   return objetoestudiante.nombre.toLowerCase() == nombre.toLowerCase();
   })
  return busqueda;
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
   var tecnico = estudiantes.sort(function(casoA,casoB){
   return casoA.puntosTecnicos < casoB.puntosTecnicos;
   })
  return tecnico;
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    var puntosHse= estudiantes.sort(function(casoA,casoB){
    return  casoA.puntajeHSE < casoB.puntajeHSE;
    })

  return puntosHse;
}
