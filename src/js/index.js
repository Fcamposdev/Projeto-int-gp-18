function mostrarSenha(){
  var inputPass = document.getElementById('password')
  var btnShowPass = document.getElementById('btn-senha')

  if(inputPass.type === 'password'){
    inputPass.setAttribute('type', 'text')
    btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
  } else {
        inputPass.setAttribute('type', 'password')
    btnShowPass.classList.replace( 'bi-eye-slash-fill','bi-eye-fill')
  }
}

/* =====================================================*/
  

/* O trecho abaixo precisa ser verificado */
 /* const userLogado = JSON.parse(localStorage.getItem("userLogado"));
  
  const logado = document.querySelector("#logado");
  logado.innerHTML = `Olá ${userLogado.nome}`;
  
  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
  }*/