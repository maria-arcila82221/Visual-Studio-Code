$(function(){
    /*
    Basic symtax: 
        $(selector).action()

    The Document Ready Event
    
        $(document).ready(function(){

            // jQuery methods go here...

        });

    jQuery Syntax For Event Methods
        $(selector).event(function(){
            // action goes here!!
        });

    The on() Method
        The on() method attaches one or more event handlers for the selected elements.

        Example
            $("p").on({
            mouseenter: function(){
                $(this).css("background-color", "lightgray");
            },
            mouseleave: function(){
                $(this).css("background-color", "lightblue");
            },
            click: function(){
                $(this).css("background-color", "yellow");
            }
            });
    */
    
    // 1
    $(function () {
        $("#texto1").hide(3000).show(1000)
        //$(".titulo").hide(3000).show(1000)
        //$("div").hide(3000).show(1000)
    });

    // 2
    $("#1").click(function () { 
        $("#texto2").show();        
    });

    $("#2").click(function () { 
        $("#texto2").hide()        
    });

    // 3
    $("#suma").click(function(){
        var num1 = $("#num1").val();
        var num2 = $("#num2").val();
        var suma
        // 1.
        suma = num1 + num2;

        // 2.
        //suma = Number(num1) + Number(num2);
        alert(suma)
    })

    // 4
    $(function () {
        $("tr:odd").css("background-color", "yellow");
        // tr:even : Nos enfocamos sólo en la filas de indice impar
        // tr:odd : Nos enfocamos sólo en la filas de indice par
    });

    // 5
    $(function () {
        $("#boton51").click(function () {
            $("#texto51").text("<b> Politécnico Colombiano </b>");
        });

        $("#boton52").click(function () {
            $("#texto52").html("<b> Jaime Isaza Cadavid </b>");
        });
    });

    // 6
    $(function () {
        $("#boton6").click(function () {
            $("ul li:first-child").hide();
            // ul li:first : Se refiere al primer elemento de la lista
            // ul li:last : Se refiere al últmo elemento de la lista
            // ul li:first-child : Se refiere a los pirmeros elementos de ambas listas
        });
    });

    // 7
    $("#boton7").click(function () {
        var texto = "";
        texto += "Width: " + $("#caja").width() + " px " + "<br/>";
        texto += "Height: " + $("#caja").height() + " px ";
        $("#detalles").html(texto);
    });

    $(function () {
        $("#boton8").click(function () {
    
            // Para mostrar el valor de un atributo
            //var x = "El valor del atributo es: " + $("#miID").attr("value"); 
            // En este caso accederemos al valor del atributo type
            //$("#info").html(x);
    
            // Para cambiar el valor de dicho atributo, pasamos dos parámetros al método: el nombre del atributo, y el nuevo valor del atributo
            $("#miID").attr("value", "codigo");
            var x = "El valor del atributo ID es: " + $("#miID").attr("id");
            $("#info").html(x);
    
            //Para hacer referncia a un control en particular, lo identificamos a partir de uno de sus atributos
            //$("input[id='miID']").attr("id", "codigo"); 
            //var x = "El valor del atributo es: " + $("input").attr("id"); 
            //$("#info").html(x);
    
            // Teniendo muchos otros controles tipo Input text
            //var z = "codigo";
            //$("input[id='miID']").attr("id", z); 
            //var x = "El valor del atributo es: " + $("input[id='" + z + "'").attr("id"); 
            //$("#info").html(x);
        });
    
        // 8.1
        $("#botonUser1").click(function () {
            $("#imagen").attr("src", "assets/user1.png")
            $("#ruta").text($("#imagen").attr("src"))
        });
    
        $("#botonUser2").click(function () {
            $("#imagen").attr("src", "assets/user2.png");
            $("#ruta").text($("#imagen").attr("src"))
        });
    });

    
});