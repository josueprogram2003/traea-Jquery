$(document).ready(function () {});

//SELECCION ETIQUETAS
// $('h1').html('Hola mundo');

//SELECION DE SELECTORES CSS
// $('.container').html('Desde selector');

//SELECCION DE ID
const contenedor = $(".container");
const parrafo = $(".container p");
const contenedor_p = $("#paragraph");
const pintar = $("#pintar");
const normalizar = $("#normalizar").prop("disabled", true);
const desaparecer = $("#desaparecer");
const agregar = $("#agregar");
const div = $("<div></div>");
let estado = 0;

//Lo inserta al final

// $(contenedor).append("<h1>Este es un elemento</h1>");

//Lo inserta al inicio

// $(contenedor).prepend("<h1>Este es un elemento</h1>");

pintar.click(function (e) {
  if (estado == 0) {
    contenedor_p.addClass("text-danger display-4");
    normalizar.prop("disabled", false);
  } else {
    div.addClass("text-danger display-4");
    normalizar.prop("disabled", false);
  }
});

normalizar.click(function (e) {
  console.log(estado);
  if (estado == 0) {
    contenedor_p.removeClass("text-danger display-4");
    normalizar.prop("disabled", true);
  } else if (estado == 2) {
    div.removeClass("text-danger display-4");
    normalizar.prop("disabled", true);
  } else {
    contenedor.prepend(div);
    pintar.prop("disabled", false);
    normalizar.prop("disabled", false);
    agregar.prop("disabled", false);
    desaparecer.prop("disabled", false);
    estado = 2;
    console.log(estado);
  }
});

agregar.click(function (e) {
  if (estado == 0) {
    const nuevo = $("<p></p>").text(
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quislaborum incidunt ab sint. Eius provident quasi fuga unde numquamOfficiis veritatis laudantium eius totam animi enim assumenda consectetur at."
    );
    contenedor_p.append(nuevo);
  } else {
    const nuevo = $("<p></p>").text(
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quislaborum incidunt ab sint. Eius provident quasi fuga unde numquamOfficiis veritatis laudantium eius totam animi enim assumenda consectetur at."
    );
    div.append(nuevo);
  }
});

desaparecer.click(function (e) {
  if (estado == 0) {
    contenedor_p.remove();
    pintar.prop("disabled", true);
    agregar.prop("disabled", true);
    desaparecer.prop("disabled", true);
    normalizar.prop("disabled", false);
    estado = 1;
    console.log(estado);
  } else {
    div.remove();
    pintar.prop("disabled", true);
    agregar.prop("disabled", true);
    desaparecer.prop("disabled", true);
    normalizar.prop("disabled", false);
    estado = 1;
  }
});
