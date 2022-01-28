var primerNom = parseInt(prompt("Escriu un nombre:"));
var segonNom = parseInt(prompt("Escriu un altre nombre:"));

function sum_of_params(x, y) {
    let suma_dels_params = x + y;
    let texte = x + " més " + y + " és igual a " + suma_dels_params;
    return texte;
}

document.write(sum_of_params(primerNom, segon_nombre));