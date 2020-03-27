const submit = document.getElementById('submitAnimal')
const name = document.getElementById('nameAnimal')
console.log(name)

submit.addEventListener('click',AddAnimal)
name.addEventListener('keyup',recupText)

let nom = ''
function recupText (e) {
    console.log(e.target.value)
    nom = e.target.value
}

function AddAnimal (e){
    e.preventDefault()
    let li = document.createElement('li')
    li.className = 'liAnimals'
    let texte = document.createTextNode(nom)
    li.appendChild(texte)
    let liste = document.getElementById('listAnimals')
    liste.appendChild(li)
}