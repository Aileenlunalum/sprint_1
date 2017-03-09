var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes

    //document.write ( agregarEstudiante);
}

 function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
      var arregloRespuestas = [] ;
      var cantidadPersonas = Number(prompt("cuantas personas"));

      for (a=0 ; a < cantidadPersonas ; a++){
         var nombre = prompt("Ingresa el nombre ");
         var apellidos = prompt("Ingresa el apellido ");
         var puntosTecnicos = Number( prompt("cuantos  puntos técnicos  obtuviste "));
         var puntosHSE = Number(prompt ("cuantos  puntos de HSE   obtuviste "));
         var estudiante= {};
            estudiante.nombre = nombre;
            estudiante.apellidos = apellidos;
            estudiante.puntosTecnicos=puntosTecnicos;
            estudiante.puntosHSE=puntosHSE;
            arregloRespuestas.push(estudiante);

        document.write(arregloRespuestas[a].nombre +  +  arregloRespuestas[a].apellidos +" "+" "+ arregloRespuestas[a].puntosTecnicos+" "+" "+ arregloRespuestas[a].puntosHSE);

}
}
function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
for (e=0;e<=cantidadPersonas;e++){
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + arregloRespuestas[e].nombre  "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " +  arregloRespuestas[e].puntosTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " +  arregloRespuestas[e].puntosHSE + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}
}

/*function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes

}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

}*/
