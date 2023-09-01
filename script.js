const divDeResultado = document.getElementById('telaDeResultado')
divDeResultado.innerText = 0
const container = document.getElementById('container')
// console.log(container)
const teclas = container.querySelector('#tabela')
// console.log(teclas)
teclas.addEventListener('click', e => {    //Evento que ouve todas as teclas 
    if(e.target.matches('td')) {             //O matches retorna verdadeiro ou falso, ouseja, clicado ou não    
        const key = e.target                   // A variável key recebe a tecla que foi clicada(alvo)
        const action = key.dataset.action     //A variável action recebe as teclas que tem o atributo action
        const minhaString = divDeResultado.textContent.toString()
        if(!action) { 
            if(divDeResultado.innerText == 0)   {
                divDeResultado.innerText = ''                     //verifica se o atributo data da tecla clicada é igual action 
            }
            divDeResultado.innerText += key.textContent
        }
        if(
            action === 'adicao' ||
            action === 'subtracao' ||
            action === 'multipicacao' ||  //verifica se a tecla clicada é um operador
            action === 'divisao' ||
            action === 'porcentagem'
        ) {
            if(minhaString.indexOf(key.textContent) == -1){
                divDeResultado.innerText += key.textContent
            }
          
        }
        if (action === 'decimal') {
            
            if(minhaString.indexOf(',') == -1){
                divDeResultado.innerText += key.textContent
            }
          
          }
          
          if (action === 'limpar') {
            divDeResultado.innerText = minhaString.slice(0, -1)
          }

          if (action === 'limparTudo') {
            divDeResultado.innerText = '0'
          }
          
          if (action === 'calculate') {
            
          }
    }

})





// const minhaTabela =document.getElementById('tabela')
// console.log(minhaTabela)

// const linha = minhaTabela.rows[1]
// console.log(linha)

// const celula = linha.cells[0]
// console.log(celula.textContent)

// const igual = document.getElementById('igual')
// console.log(igual.textContent)