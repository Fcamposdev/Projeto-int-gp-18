const cpf = document.querySelector("#cpf")

cpf.addEventListener("keyup", event => {
    let start = cpf.selectionStart 
    let end = cpf.selectionEnd 
    
    if(start == end) { 
        formMask("___.___.___-__", "_", event, start);
    }
})

function formMask(mask, char, event, cursor) {
    
    const vetMask = mask.split("") 
    const onlyNumbers = cpf.value.split("").filter(value => !isNaN(value) && value != " ")
    const key = event.keyCode || event.which
    const backspaceAndArrowKeys = [8, 37, 38, 39, 40] 
    const clickedOnTheBackspaceOrArrowsKeys = backspaceAndArrowKeys.indexOf(key) >= 0
    const charNoMod = [".", "-"] 
    const cursorIsCloseToCharNoMod = charNoMod.indexOf(vetMask[cursor]) >= 0

    onlyNumbers.forEach( (value) => vetMask.splice(vetMask.indexOf(char), 1, value)) 

    cpf.value = vetMask.join("")

    if(!clickedOnTheBackspaceOrArrowsKeys && cursorIsCloseToCharNoMod) { 
        cpf.setSelectionRange(cursor+1, cursor+1)
    } else {
        cpf.setSelectionRange(cursor, cursor)
    }
}

let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')
btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#password')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
    
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirm_password')
  
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
    
  }
})
