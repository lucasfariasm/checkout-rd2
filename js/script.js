//VALIDAÇÃO DE SESSÃO DADOS PESSOAIS
// 1. Campo de nome não pode ter números
let nome = document.querySelector('#nomeUsuario')
nome.addEventListener('keypress', naoNumeros)
function naoNumeros(e) {
  let charCode = e.charCode ? e.charCode : e.keyCode;
  // charCode 8 = backspace   
  // charCode 9 = tab
  if (charCode != 8 && charCode != 9) {
      // charCode 48 equivale a 0   
      // charCode 57 equivale a 9
      if (charCode > 48 && charCode < 57) {
        alert('não pode ter números neste campo')
          // return false;
      }
  }
}
// 2. Campo CPF não pode ser maior que 11 dígitos.
let cpf = document.querySelector('#cpfUsuario')
cpf.addEventListener('change', numeromaximo)
function numeromaximo(e) {
  if(cpf.value.length !== 11 && cpf.value != "") {
    alert ('O campo informado não possui 11 dígitos')
  }
}
// 3. Campo senha deve ser maior que 6 caracteres
let senha = document.querySelector ('#senhaUsuario')
senha.addEventListener('change', tamanhoSenha)
function tamanhoSenha(e){
  if (senha.value.length < 7 && senha.value != "") {
    alert('A senha deve ter no mínimo 6 caracteres')
  }
}
// 4. Campo Confirme sua senha deve ser igual ao de Senha
let confirmarSenha = document.querySelector('#confirmarSenhaUsuario')
confirmarSenha.addEventListener('change', verificar)
function verificar(e){
  if (confirmarSenha.value !== senha.value){
      alert ('As senhas têm que ser iguais');
    }
}

// Validações Sessão Entrega:
// 1. Campo de cep deve ter apenas números
let inputCep = document.querySelector('#cepUsuario')
inputCep.addEventListener('keypress', somenteNumeros)
function somenteNumeros(e) {
  let charCode = e.charCode ? e.charCode : e.keyCode;
  // charCode 8 = backspace   
  // charCode 9 = tab
  if (charCode != 8 && charCode != 9) {
      // charCode 48 equivale a 0   
      // charCode 57 equivale a 9
      if (charCode < 48 || charCode > 57) {
        alert('Somente números neste campo');
      }
  }
  
}

// Validações Sessão Pagamento:
// 1. Campo número do cartão deve ter apenas números
let inputCartao = document.querySelector('#cartao')
inputCartao.addEventListener('keypress', somenteNumeros)
inputCartao.addEventListener('change', limparCartao)

// 2. A validade do cartão de ser maior que o mês atual;
// let validade = document.querySelector('#validadeCartao');

// 3. O campo CVV deve conter apenas 3 dígitos
let codigo = document.querySelector('#CVVCartao')
codigo.addEventListener('change', tresDigitos)

function tresDigitos(e){
  if (codigo.value.length !== 3 && codigo.value != ""){
    codigo.value = "";
    alert('Deve possuir 3 dígitos')
  }
}
// 4. O campo de CPF não pode estar vazio.


// 5. O campo Titular não pode conter números
let nomeTitular = document.querySelector('#nomeTitular')
nomeTitular.addEventListener('keypress', naoNumeros)

//Uso de API para preenchimento automático
let inputEndereco = document.querySelector('#enderecoUsuario')
let inputBairro = document.querySelector('#bairroUsuario')
let inputCidade = document.querySelector('#cidadeUsuario')

inputCep.addEventListener('keyup', apiCEP)

async function apiCEP(e){
  if(this.value.length == 8) {
    //async await
    let resposta = await fetch("https://brasilapi.com.br/api/cep/v1/" + this.value) ;
    let cep = await resposta.json();
    console.log(cep);
    //Preenchimento automático
    inputEndereco.value = cep.street;
    inputBairro.value = cep.neighborhood;
    inputCidade.value = cep.city;
  }
}
