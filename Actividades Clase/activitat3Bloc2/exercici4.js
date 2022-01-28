function majMin(){
    let sentenceUsuario = prompt("Escribe una frase:")

    let lowerSentence = sentenceUsuario.toLowerCase()
    let upperSentence = sentenceUsuario.toUpperCase()

    alert("Majúscula: " + upperSentence + "\n" + "Minúscula: " + lowerSentence)
}