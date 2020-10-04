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
// 3. Campo senha deve ser maior que 6 caracteres
// 4. Campo Confirme sua senha deve ser igual ao de Senha

// Validações Sessão Entrega:
// 1. Campo de cep deve ter apenas números


// Validações Sessão Pagamento:
// 1. Campo número do cartão deve ter apenas números
// 2. A validade do cartão de ser maior que o mês atual;
// 3. O campo CVV deve conter apenas 3 dígitos
// 4. O campo de CPF não pode estar vazio.
// 5. O campo Titular não pode conter números

//Uso de API para preenchimento automático

