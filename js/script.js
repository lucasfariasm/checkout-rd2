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
          // return false;
      }
  }
  
}
inputCep.addEventListener('change', limparCampo)
function limparCampo(event){
  if (somenteNumeros){
    inputCep.value = "";
  }
}

// Validações Sessão Pagamento:
// 1. Campo número do cartão deve ter apenas números
let inputCartao = document.querySelector('#cartao')
inputCartao.addEventListener('keypress', somenteNumeros)
inputCartao.addEventListener('change', limparCampo)
function limparCampo(event){
  if (somenteNumeros){
    inputCartao.value = "";
  }
}
// 2. A validade do cartão de ser maior que o mês atual;
// 3. O campo CVV deve conter apenas 3 dígitos
// 4. O campo de CPF não pode estar vazio.
// 5. O campo Titular não pode conter números

//Uso de API para preenchimento automático

