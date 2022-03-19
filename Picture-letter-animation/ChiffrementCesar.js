const carToAscii = (car) => {
    return car.charCodeAt(0)
}

const asciiToCar = (number) => {
    return String.fromCharCode(number)
}

const chiffrement = (textDechiffré, cle) => {
    txtChiffré = ""
    for(let i = 0; i < textDechiffré.length; i++){
        if (textDechiffré[i] == " "){
            txtChiffré += " "
        } 
        else {
            txtChiffré += asciiToCar(carToAscii(textDechiffré[i]) + cle)
        }
    }
    return txtChiffré
}

const dechiffrement = (textChiffré, cle) =>{
    return chiffrement(textChiffré, -cle) 
}

const effetDechifrement = (elementText, textChiffré, textDechiffré) =>{
    let tabChiffré = []
    let tabDéchiffré = []
    let temps = (1/textChiffré.length*5000)

    for(let i = 0; i < textChiffré.length; i++){
        tabChiffré.push(textChiffré[i])
    }
    
    for(let i = 0; i < textDechiffré.length; i++){
        tabDéchiffré.push(textDechiffré[i])
    }

    let i = 0
    setInterval(function(){
        if (i < tabChiffré.length){
            tabChiffré[i] = tabDéchiffré[i]
            elementText.textContent = tabChiffré.join('')
            i++
        }
    }, temps)
}
