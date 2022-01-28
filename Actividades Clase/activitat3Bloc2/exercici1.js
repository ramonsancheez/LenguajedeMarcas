function funcion1() {
    alert("Aquest es el meu primer script");
    document.write("Aquest es el meu primer script");
}

function func2() {
    var nom_home = prompt("Escriu un nom de home: ");
    var nom_dona = prompt("Escriu un nom de dona: ");

    alert(nom_home + " & " + nom_dona);
}

function func3() {
    var nom_usuari = prompt("El teu nom és:");

    document.write("El teu nom es " + nom_usuari);
}

function func4() {
    var primerNom = parseInt(prompt("Escriu un nom: "));
    var segonNom = parseInt(prompt("Escriu un altre nom: "));

    function biggest(x, y) {
        let texte;
        if (x < y) {
            texte = y + " és més gran que " + x;
        } else {
            texte = x + " és més gran que " + y;
        }
        return texte;
    }

    document.write(biggest(primerNom, segonNom));
}

function func5() {
    var primerNom = parseInt(prompt("Escriu un nom:"));
    var segonNom = parseInt(prompt("Escriu un altre nom:"));

    function sum_of_params(x, y) {
        let suma = x + y;
        let texte = x + " més " + y + " és igual a " + suma;
        return texte;
    }

    document.write(sum_of_params(primerNom, segonNom));
}

function func6() {
    
}

function funcion7() {
    var palabra = prompt("Escriu:")

    var longitutParaula = paraula.length

    var text = '"' + paraula + '" te ' + longitutParaula + " caràcter"

    if (longitutParaula == 0){
        text = "No has escrit res"
    }
    if (longitutParaula > 1){
        text += "es"
    }
    document.write(texto)
}

function funcion8() {
    mesos = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

    mesos.forEach(mes => {
    document.write("<h3>" + mes + "<h3>")
});
}

function funcion9() {
    var nota = prompt("Escribe la nota que has sacado (0/10): ");
    var texto = "???";
    switch (nota) {
        case "0":
            texto = "F";
            break;

        case "1":
            texto = "F";
            break;

        case "2":
            texto = "F";
            break;

        case "3":
            texto = "F";
            break;

        case "4":
            texto = "Aprobado";
            break;

        case "5":
            texto = "Aprobado";
            break;

        case "6":
            texto = "Aprobado";
            break;

        case "7":
            texto = "Aprobado";
            break;

        case "8":
            texto = "Aprobado";
            break;

        case "9":
            texto = "Aprobado";
            break;

        case "10":
            texto = "Gg's";
            break;

        default:
            texto = "Haz introducido un valor erróneo, vuelva a intentarlo.";
            break;
}

    document.write("Tu nota es un " + nota);
    document.write("<br>");
    document.write(texto);
}

function funcion10() {
    while(true) {
        input_usuario = prompt('Escribe un numero cualquiera, si quieres parar escribe "stop"');
    
        var texto = "El numero " + input_usuario + " es ";
    
        if (input_usuario.toLowerCase() == "stop") {
            break;
        };
    
        switch (true) {    
            case input_usuario == "":
            default:
                texto = '"' + input_usuario + '" no es valido';
                break;
                
            case input_usuario % 2 == 0:
                texto += "par";
                break;
                
            case input_usuario % 2 >= 0:
            case input_usuario % 2 <= 0:
                texto += "impar";
                break;
        }
    
        document.write(texto)
        document.write(".<br>")
    }
}