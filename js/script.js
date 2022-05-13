
document.getElementById("botaoEnviar").addEventListener("click",validaFormulario)

function validaFormulario(){

  if(document.getElementById("nome").value != "" &&
     document.getElementById("telefone").value != "" &&
     document.getElementById("email").value != ""){

    alert("Prontinho! você receberá as novidades por e-mail.")
  }else{
    alert("Por favor, preencha os campos nome, telefone e e-mail.")
  }
}

