// Animation bouton Send
const select = document.querySelector('.homeButton')

select.addEventListener('click',function(){
    alert ('Votre message a bien été envoyé par pigeon voyageur 🐦!')})

// Animation boutons Agrandir et Réduire
const reduc = document.getElementById('reduire')
const bloc = document.querySelector('.blocLast')
reduc.addEventListener('click',function(){
    bloc.classList.add("hide")})

const agrand = document.getElementById('agrandir')
agrand.addEventListener('click',function(){
    bloc.classList.remove("hide")})
 
// Dark Mode
const toggler = document.querySelector('#toggler')
toggler.addEventListener('change', switchMode)
const main = document.querySelector('main')

function switchMode (e) {
    if (e.target.checked) {
        main.setAttribute('dark-theme','dark')
    } else {main.setAttribute('dark-theme','ligth')}
}

// Animation bouton 'About me'
const about = document.getElementsByClassName('split-character')
select.addEventListener('mouseover',function(){
    alert ('Viendez voir!')})





// (function() {
//     var elements, newContent = "";
//     // on stock tous les objets du DOM ayant la classe "split-character" dans un tableau "elements"
//     elements = document.getElementsByClassName('split-character'); 
//     // pour chaque objet du DOM ayant la classe "split-character"
//     for (var element = 0; element < elements.length; ++element) { 
//       // on initialise la variable qui va contenir le nouveau contenu en ouvrant le span qui contiendra le premier mot
//       newContent += "<span>"
//       // pour chaque caractère existant dans cet objet
//       for (var character = 0; character < elements[element].innerText.length; character++) {
//         // si c'est un caractère on le met dans un span
//         if (elements[element].innerText[character] !== " ") { 
//            // Pour que chaque lettre apparaisse après l'autre, on ajoute un délai de 35 millisecondes entre chacune d'elle. La deuxième partie de l'animation devant se jouer après la première, on ajoute aussi un délai initial de 1s.
//           newContent += "<span style='animation-delay: "+ 0.035*character + "s, "+ (0.035*character+1) +"s'>"+ elements[element].innerText[character] +"</span>";
//         }
//         // si c'est un espace vide c'est la fin d'un mot, on ferme le span qui englobe ce mot et on ouvre le span du mot suivant (tout en gardant l'espace)
//         else { 
//           newContent += "</span> <span>";
//         }
//       }
//       // on ferme le span du dernier mot
//       newContent += "</span>"
//       // on remplace le contenu actuel par notre nouveau contenu
//       elements[element].innerHTML = newContent; 
//       // on réinitialise la variable newContent puisqu'elle va accueillir le contenu de l'objet suivant dans la boucle
//       newContent = ""; 
//     }
    
//   })(); 