function aplicarEstilos(){
    document.getElementById('texto2').style.color = 'blue';
    document.getElementById('texto2').style.background = 'red';
    document.getElementById('texto2').style.fontFamily = 'Arial';
    document.getElementById('texto2').style.fontSize = '30px';
}

function apagarBombillo(){
    document.getElementById('bombillo').src = 'assets/images/pic_bulboff.gif'
}

function encenderBombillo(){
    document.getElementById('bombillo').src = 'assets/images/pic_bulbon.gif'
}

function operacionesJS(op){
    
    // Comentario de una línea
    /*
    Comentario de varias líneas
    */

    var nomVar = 5;
    nomVar = "Carlos";
    nomVar = true;

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

function validarForm(){
    var nombre = document.forms["formulario"]["nombre"].value;

    if(nombre == ""){
        alert("El nombre no puede estar vacío");
    }
}

function validarNumero(){
    var num = document.getElementById("numero").value;

    if(isNaN(num)||num<1||num>10){
        alert("El valor no es correcto")
    } else {
        alert("el valor es correcto")
    }
} 