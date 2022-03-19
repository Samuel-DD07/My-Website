let block = document.querySelector(".block")
let txt = "01"

block.style.backgroundImage = "url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80')"
block.style.backgroundSize = "cover"

const CreationLetter = (element, numberLigne, numberColumn) =>{
    for (let m = 0; m < numberColumn; m++) {
        let ligne = document.createElement("p")
    
        for (let i = 0; i < numberLigne; i++) {
            ligne.textContent += txt[Math.round(Math.random() * (txt.length - 1))]
        } 
        element.append(ligne)
    }
}

CreationLetter(block, 150, 100)