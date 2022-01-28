function bigOne(){
    const primerNum = prompt("Escriu un número: ");
    const segonNum = prompt("Escriu un altre número: ");
    const tercerNum = prompt("Escriu un darrer número: ");

    const numbers = [primerNum, segonNum, tercerNum]
    numbers.sort()
    
    console.log(numbers[2])
    document.write(numbers[2] + " és més gran que " + numbers[1] + " que és més que " + numbers[0] + ".")
}