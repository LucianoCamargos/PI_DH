const divCadastro = document.getElementById('cadastro-completo')
const divEndereco = document.getElementById('endereco')
const divMeusPedidos = document.getElementById('my-requets')
const title = document.getElementById('strong-title')
const formCadastro = document.querySelector('.container-cadastro')
const formEndereco = document.querySelector('.container-endereco')



divCadastro.addEventListener('click', e => {
  title.innerText = 'Dados Pessoais'
  formCadastro.style.display = 'flex'
  formEndereco.style.display = 'none'
  divCadastro.style.borderLeft = 'solid #1C98ED'
  divEndereco.style.borderLeft = 'none #1C98ED'
  divMeusPedidos.style.borderLeft = 'none #1C98ED'
})
divEndereco.addEventListener('click', e => {
  title.innerText = 'Endereço'
  formCadastro.style.display = 'none'
  formEndereco.style.display = 'flex'
  divCadastro.style.borderLeft = 'none #1C98ED'
  divEndereco.style.borderLeft = 'solid #1C98ED'
  divMeusPedidos.style.borderLeft = 'none #1C98ED'
})
divMeusPedidos.addEventListener('click', e => {

  title.innerText = 'Meus Pedidos'
  formCadastro.style.display = 'none'
  formEndereco.style.display = 'none'
  divCadastro.style.borderLeft = 'none #1C98ED'
  divEndereco.style.borderLeft = 'none #1C98ED'
  divMeusPedidos.style.borderLeft = 'solid #1C98ED'

})





const inputCep = document.getElementById("cep");
const inputStreet = document.getElementById("street");
const inputNeighborhood = document.getElementById("neighborhood");
const inputCity = document.getElementById("city");
const inputState = document.getElementById("state");

inputCep.addEventListener("blur", (event) => {
  const cep = event.target.value;

  fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`)
    .then((response) => response.json())
    .then((data) => {
      inputStreet.value = data.street;
      inputNeighborhood.value = data.neighborhood;
      inputCity.value = data.city;
      inputState.value = data.state;
      console.log("Recebi os dados de CEP");
    });


});