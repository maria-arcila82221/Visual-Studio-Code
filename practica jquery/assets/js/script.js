//el simbolo $ en JQuery es como entrar al DOM del documento(estructura HTML) DOCUMENT OBJECT MODEL
$(function(){ //no le pongo nombre por que no la tengo que llamar de otro lado, asi se llama una funcion en JQuery
    //Sintaxis
    // $(selector).action() sobre el objeto ejecute tal accion cuando action halla ocurrido sobre el
    // .: class
    // #: id
    // <p>: etiqueta p
    //$("#text").hide(3000).show(1000) //id
    //$(".text").hide(3000).show(1000) clase

    //Eventos
    /* $(selector).evento(funcion(){ cuando ocurra el evento en el elemento se ejecuten tales instrucciones
        instrucciones que se ejecuten al ejecutar ese evento
    })*/
    //jq: asi empiezan todos los elementos de la funcion
    /*$("#boton1").click(function (e) { 
        e.preventDefault();
        $("#texto").hide(); .hide(): Esta función oculta los elementos seleccionados del DOM. Al llamar a .hide(), los elementos seleccionados se vuelven invisibles y ocupan cero espacio en la página. Es decir, se establece la propiedad CSS display del elemento como "none". Los elementos ocultos con .hide() todavía existen en el DOM, pero no son visibles para el usuario.
    });
    $("#boton2").click(function (e) { 
        e.preventDefault();
        $("#texto").show(); .show(): Esta función muestra los elementos ocultos del DOM. Al llamar a .show(), los elementos seleccionados se vuelven visibles y se muestra nuevamente en la página. Se establece la propiedad CSS display del elemento como su valor original, que podría ser "block", "inline", "inline-block", entre otros.
    });*/

    $("#boton1").click(function (e) { 
        //lo que va aqui dentro ya si es codigo javascript normal
        e.preventDefault();

        //jqValGet: obtener
        /*var num1 = $("#num1").val(); //busque el num1 y obtenga el valor
        var num2 = $("#num2").val();

        //si leo una variable de esta forma, lee es un string. hay que castearlas (convertir tipo de dato)
        //var resultado = num1 + num2;
        var resultado = Number(num1) + Number(num2);

        //jqHTMLSet: asignar algo a una etiqueta HTML
        $(".text").html("<b>" + resultado + "</b>");*/

        //jqattset: obtener de la etiqueta
        $("#usuario").attr("src", "assets/images/user1.png"); //imagen
        //$(".text").html("<b>" + "assets/images/user1.png" + "</b>"); ponerlo textualmente no es lo mas adecuado
        $(".text").html("<b>" + $("#usuario").attr("src") + "</b>"); //texto
    });

    $("#boton2").click(function (e) { 
        e.preventDefault();
        //Al llamar a e.preventDefault(), se evita que se realice la acción predeterminada asociada al evento. Esto es útil cuando se desea personalizar el comportamiento del evento utilizando JavaScript.
        
        $("#usuario").attr("src", "assets/images/user2.png");
        $(".text").html("<b>" + $("#usuario").attr("src") + "</b>");
    });
})

/*Evento: Accion de una tercera 'persona, cosa' sobre un elemento*/