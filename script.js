
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
// const select = document.querySelector('.homeButton')
// const about = document.getElementsByClassName('split-character')
// select.addEventListener('mouseover',function(){
//     alert ('Viendez voir!')})




