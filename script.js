console.log("Welkom")

let aantal = 0
let eersteFoto = true

const h1Aantal = document.querySelector("h1")
const verhogingCijfers = document.querySelector("p")
const flowerButton = document.querySelector("img")

const fotos = ["./images/vlinder.png", "./images/dots.png"]

flowerButton.addEventListener('click', function() {
    aantal++

   verhogingCijfers.textContent = "Aantal klikken: " + aantal

    if (eersteFoto) {
        flowerButton.src = fotos[0]
    } else {
        flowerButton.src = fotos[1]
    }

    eersteFoto = !eersteFoto
})



