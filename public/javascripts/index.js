const btn = document.getElementById('btnBusca')

const cart = document.querySelector('.logo-cart')
const contianerCart = document.querySelector('.container-cart')

const backCart = document.getElementById('back-cart')


const containerRegistre = document.querySelector('.container-registration')
const bntClose = document.getElementById('close')



btn.addEventListener("click", e => {

  alert("Botão funcionando")

}
)

//evento para fixar menu ao rolar página, deixei comentado para rever mais pra frente
/*
var nav =document.querySelector('nav')

document.addEventListener('scroll', ()=>{

        nav.style.position = 'fixed'
    
})

*/

cart.addEventListener('click', e => {


  contianerCart.style.display = 'block'

})


backCart.addEventListener('click', (e) => {


  contianerCart.style.display = 'none'
  //contianerCart.className = 'container-cart-close'




})




