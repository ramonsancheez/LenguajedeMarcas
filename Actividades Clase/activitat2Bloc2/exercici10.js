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