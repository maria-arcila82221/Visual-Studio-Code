function aplicarEstilos(){
    document.getElementById('texto2').style.color = 'blue';
    document.getElementById('texto2').style.background = 'red';
    document.getElementById('texto2').style.fontFamily = 'Arial';
    document.getElementById('texto2').style.fontSize = '30px';
}

function yatoTriste(){
    document.getElementById('triste').src = 'assets/images/kaizokucujoh1.gif';
}

function yatoFeliz(){
    document.getElementById('triste').src = 'assets/images/kaizokucujoh.gif';
}

//javascript es interpretado no tipado. es menos extricto con la sintaxis
function operacionesJS(op){
    var nomVar = 5;
    nomVar = "Carlos";
    nomVar = true;

    var res;
    alert(op);
    //var n1 = parseInt(document.getElementById('num1').vale;


    switch(op){
        case 1: 
        res = num1 + num2;
        break;

        case 2: 
        res = num1 * num2;
        break;

        case 3: 
        res = num1 - num2;
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
        alert("el nombre no puede estar vacio");
    }
}

function validarNumero(){
    var num = document.getElementById("numero").value;
    
    //isNaN: si este valor es texto devuelve true, si no false
    if(isNaN(num) || num<1 || num>10){
        alert("el valor no es correcto");
    } else {
        alert("el valor es correcto");
    }
}