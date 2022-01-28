var primerNom = parseInt(prompt("Escriu un nombre:"));
var segonNom = parseInt(prompt("Escriu un altre nombre:"));

function biggest(x, y) {
    let texte = x + " és més gran que " + y;
    if (x < y) {
        texte = y + " és més gran que " + x;
    }
    return texte;
}

document.write(biggest(primerNom, segonNom));