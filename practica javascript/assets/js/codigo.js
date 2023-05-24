function aplicarEstilos(){
    document.getElementById('texto2').style.color = 'blue';
    document.getElementById('texto2').style.background = 'red';
    document.getElementById('texto2').style.fontFamily = 'Arial';
    document.getElementById('texto2').style.fontSize = '30px';
    //basicamente, con javascript se cambian propiedades de elementos en etiquetas o hasta esos mismos elementos. Solo es de saber que funcion utilizar
}

function yatoTriste(){
    document.getElementById('triste').src = 'assets/images/kaizokucujoh1.gif';
    //cambia(muestra) el src de la etiqueta con el ID a la nueva imagen seleccionada
}

function yatoFeliz(){
    document.getElementById('triste').src = 'assets/images/kaizokucujoh.gif';
}

//javascript es interpretado no tipado. es menos extricto con la sintaxis
function operacionesJS(op){
    var res;
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    switch(op){
        case 1: 
        res = num1 + num2;
        break;

        case 2: 
        res = num1 - num2;
        break;

        case 3: 
        res = num1 * num2;
        break;

        case 4: 
        res = num1 / num2;
        break;
    }

    document.getElementById("res").innerHTML = res;
}

function validarFormulario(){
    var nombre = document.getElementById("nombre").value;
    //en el formulario con nombre o ID formulario en la etiqueta con nombre o ID nombre asignar esa entrada a la variable nombre: por que es un input

    if(nombre == ""){
        alert("el nombre no puede estar vacio");
    }
}

function validarNumero(){
    var num = document.getElementById("numero").value;
    //.value está asociado a elementos de formulario, pero otros elementos HTML personalizados también podrían implementar una propiedad value
    
    //isNaN: si este valor es texto devuelve true, si no false
    if(isNaN(num) || num<1 || num>10){
        alert("el valor no es correcto");
    } else {
        alert("el valor es correcto");
    }
}