function GenerarCorreo(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var fecha = document.getElementById("Fecha").value;
    var edad = (2023 - fecha);
        if(nombre != "" || apellido !="" || fecha > 0 ){
            alert(nombre+apellido+edad+"@devsjm.com.co");
        }else{
            alert("ingrese los datos correspondientes")
        }
        
    
}