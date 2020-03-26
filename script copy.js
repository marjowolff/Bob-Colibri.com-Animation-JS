// Récupération valeur du formulaire Send
const name = document.querySelector('input[type="text"]')
name.addEventListener('keyup',recupText)
let nom = ''
function recupText (e) {
    console.log(e.target.value)
    nom = e.target.value
}

// Animation bouton Send
const select = document.querySelector('.homeButton')

select.addEventListener('click',function(){
    alert (`${nom}, votre message a bien été envoyé par pigeon voyageur 🐦!`)})




