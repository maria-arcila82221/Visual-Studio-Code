$(function(){

    $("#btn1").click(function (e) { 
        e.preventDefault();
        
        $("#titulo").append("<b> Texto nuevo </b>"); //append: etiqueta que quiero agregar al darle click al boton identificado como #btn1
    });

    $("#btn2").click(function (e) { 
        e.preventDefault();
        
        $("ol").append("<li> Item nuevo </li>"); //etiqueta que quiero agregar al darle click al boton identificado como #btn2 en la etiqueta tipo ol(se agregara un li)
    });

})