$(function(){
   
    $(".btn").click(function (e) {
        e.preventDefault();

        var descripcion = $(this).siblings(".descripcion").text();
        var valor = $(this).siblings(".valor").text();
       
        $("#tbody").append("<tr><td>" + descripcion + "</td><td>" + valor + "</td></tr>");
        //tr: se utiliza para definir una fila en una tabla
        //td: definir cada celda de la tabla
    });

    $(".btn").click(function (e) {
        e.preventDefault();

        switch($(this).attr("id")) {
            case "btn1":
                $("#tbody tr:last-child").addClass("prod1");
            break;

            case "btn2":
                $("#tbody tr:last-child").addClass("prod2");
            break;

            case "btn3":
                $("#tbody tr:last-child").addClass("prod3");
            break;

            case "btn4":
                $("#tbody tr:last-child").addClass("prod4");
            break;
        }
    });
   
})