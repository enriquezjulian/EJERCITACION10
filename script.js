function saludo() {
    let nombre = "Programación" + " Fácil.";
        let saludo = "Les doy la bienvenida a ";
        let fraseCompleta = saludo + nombre;

        console.log(fraseCompleta);
        alert(fraseCompleta)
}

function fraseJS() {
    let frase = "Java Script " + "es un lenguaje" + " esencial para crear" + " sitios web poderosos."
        console.log (frase);
        alert(frase)
}

function concatenanum () {
    let numeroString1 = "10";
    let numeroString2 = "20";
    let numeroString3 = "30";

    let concatenaNumeros = numeroString1 + " diez " + numeroString2 + " veinte " + numeroString3 + " treinta";
    console.log (concatenaNumeros);
    alert(concatenaNumeros)
}

function nomedad () {
    var age = prompt("Cuál es tu edad:?");
    console.log (age);
    var name = prompt("Cuál es tu Nombre:?");
    console.log(name);
    alert("Tu nombre es "+name + " y tienes "+age)
}

function mayomen(){
    let edad;
    let sexo;

    sexo=prompt("Cual es tu sexo? (Indique F o M)");
    if(sexo=="M"){
        edad=prompt("Cuál es tu edad?");
        if(edad>=18){
            alert("Eres mayor de edad, puedes ingresar.")
        } else {
            alert("No eres mayor de edad.");
        }
    }

    if(sexo=="F"){
        edad=prompt("Cuál es tu edad?");
        if(edad>=20){
            alert("Eres mayor de edad, puedes ingresar.");
        } else {
            alert("Dedes ser mayor a 20 para ingresar");
        }
    }
}