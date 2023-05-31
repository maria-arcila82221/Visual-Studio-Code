$(function(){

    var valorNombre;
    var nota1;
    var nota2;
    var nota3;
    var prom;

    $("#btngenerar").click(function (e) { 
        e.preventDefault();

        //$("#numeroe").html("<p class='n'>Estudiante " + valorNombre + "</p>");

        valorNombre = Math.ceil(Math.random()*(10 - 1) + 1);
        nota1 = Number((Math.random() * 5 + 0.01).toFixed(2));
        nota2 = Number((Math.random() * 5 + 0.01).toFixed(2));
        nota3 = Number((Math.random() * 5 + 0.01).toFixed(2));
        prom = (nota1+nota2+nota3)/3;

        $("#numeroe").val("Estudiante " + valorNombre);
    });

    $("#btngenerar").click(function (e) { 
        e.preventDefault();
        
        $("#n1").val(nota1);
        $("#n2").val(nota2);
        $("#n3").val(nota3);
    });

    $("#btninsertar").click(function (e) { 
        e.preventDefault();

        if(valorNombre%2 == 0) {
            $("#tabla").append("<tr><td>" + valorNombre + "</td><td><img src=assets/images/hombre.png>" + "</td><td>" + nota1 +"</td><td>" + nota2 +"</td><td>" + nota3 +"</td><td>" + prom +"</td></tr>");
        } else {
            $("#tabla").append("<tr><td>" + valorNombre + "</td><td><img src=assets/images/mujer.png>" + "</td><td>" + nota1 +"</td><td>" + nota2 +"</td><td>" + nota3 +"</td><td>" + prom +"</td></tr>");
        }
    });

    /*$("#btninsertar").click(function (e) { 
        e.preventDefault();

        var nota1 = Number((Math.random() * 5 + 0.01).toFixed(2));
        var nota2 = Number((Math.random() * 5 + 0.01).toFixed(2));
        var nota3 = Number((Math.random() * 5 + 0.01).toFixed(2));
        
        $("#n1").append("<p class='n'>" + nota1 + "</p>");
        $("#n2").append("<p class='n'>" + nota2 + "</p>");
        $("#n3").append("<p class='n'>" + nota3 + "</p>");

        var prom = (nota1+nota2+nota3)/3;
        alert(prom);
    });*/

})

