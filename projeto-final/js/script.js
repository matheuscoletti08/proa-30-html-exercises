// isso aqui so funciona se o id bater com o html
function mostrarMensagem() {
  var p = document.getElementById("mensagem");
  p.innerText = "Obrigado! Em breve traremos mais novidades da Peixaria Mar Azul.";
}

function enviarContato() {
  var p = document.getElementById("mensagem-contato");
  p.innerText = "Mensagem enviada! Entraremos em contato pelo e-mail fictício.";
}
