$(function(){
   
    $("#btn1").click(function (e) {
        e.preventDefault();
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
        var fecha = $("#fecha").val();
        var edad = moment().diff(moment(fecha, 'YYYY-MM-DD'), 'years');
       
        $("#tbody").append("<tr><td>" + nombre + " " + apellido + "</td><td>" + fecha + "</td><td>" + edad + "</td></tr>");
        //tr: se utiliza para definir una fila en una tabla
        //td: definir cada celda de la tabla
    });

    $("#btn2").click(function (e) {
        e.preventDefault();
       
        $('table tr').each(function() {//each(): se utiliza para iterar sobre un conjunto de elementos seleccionados y ejecutar una función para cada uno de ellos.
            // Obtener el valor de la columna de edad
            var edad = parseInt($(this).find('td:nth-child(3)').text());
            //var edad = parseInt($(this).find('td:nth-child(3)').text()): Dentro de cada fila, busca el tercer elemento <td> (columna) utilizando el selector :nth-child(3). Luego, obtiene el texto dentro de esa columna y lo convierte a un número entero utilizando parseInt()
       
            // Comprobar si la edad es mayor a 18
            if (edad > 18) {
              // Resaltar la fila
              $(this).css('background-color', 'yellow');
              //$(this): se refiere a la fila actual que se está recorriendo en el bucle each()
            }
        });
    });
   
})

//local storage y session storage: consulta
//numeros aleatorios