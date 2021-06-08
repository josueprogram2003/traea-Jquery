$(document).ready(function () {});

//SELECCION ETIQUETAS
// $('h1').html('Hola mundo');

//SELECION DE SELECTORES CSS
// $('.container').html('Desde selector');

//SELECCION DE ID
const contenedor = $(".container");
const parrafo = $(".container p");
const pintar = $("#pintar");
const normalizar = $("#normalizar");
const desaparecer = $("#desaparecer");
const agregar = $("#agregar");

//Lo inserta al final

// $(contenedor).append("<h1>Este es un elemento</h1>");

//Lo inserta al inicio

// $(contenedor).prepend("<h1>Este es un elemento</h1>");

pintar.click(function (e) {
  parrafo.addClass("text-danger display-4");
});

normalizar.click(function (e) {
  parrafo.removeClass("text-danger display-4");
});

const nuevo = $("h1").html("Nuevo elemento");

agregar.click(function (e) {
  container.append(nuevo);
});
