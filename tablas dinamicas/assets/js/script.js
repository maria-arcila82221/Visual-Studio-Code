$(function(){

    $("#btn1").click(function (e) { 
        e.preventDefault();
        var nombre = $("#nombre").val();
        var fecha = $("#fecha").val();

        alert(fecha)

        $("#tabla").append("<tr><td>" + nombre + "</td></tr>" + "<tr><td>" + fecha + "</td></tr>" + "<tr><td>" + edad + "</td></tr>"); 
    });

    $(function fecha(fecha) {
        var strDate = fecha;
    
        var yyyy = strDate.substring(0,4);
        var mm   = strDate.substring(5,7);
        var dd   = strDate.substring(8,10);
        strDate  = yyyy + '/' + mm + '/' + dd;

        return strDate;
    })

    $(function edad(fecha) {
        var fecha2 = Tfecha(fecha);
        var hoy = new Date();
        var cumpleanos = new Date(fecha2);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();

        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }

        return edad;
    })

    $(function Tfecha(fecha) {
        var strDate = fecha;
    
        var yyyy = strDate.substring(0,4);
        var mm   = strDate.substring(5,7);
        var dd   = strDate.substring(8,10);
        strDate  = dd + '/' + mm + '/' + yyyy;

        return strDate;
    })

    $("#btn2").click(function (e) { 
        e.preventDefault();
        
        $(selector).each(function (index, element){

        })
    });

})

//local storage y session storage: consulta
//numeros aleatorios