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
        const previousKeyType = teclas.dataset.previousKeyType

        if(!action) { 
            if(divDeResultado.innerText == 0 || previousKeyType === 'operacao' )   {
                divDeResultado.innerText = key.textContent 
                       
            }else{

                divDeResultado.innerText += key.textContent
            }
        
        }
        if(
            action === 'adicao' ||
            action === 'subtracao' ||
            action === 'multipicacao' ||  //verifica se a tecla clicada é um operador
            action === 'divisao' ||
            action === 'porcentagem'
        ) {

            key.classList.add('is-depressed')
            teclas.dataset.previousKeyType = 'operacao'
          
        }
        if (action === 'decimal') {
            
            if(minhaString.indexOf(',') == -1){
                divDeResultado.innerText += key.textContent
            }
          
          }
          
          if (action === 'limpar') {
            if(divDeResultado.textContent.length < 0) {
                
                divDeResultado.innerText = 0
            }
            divDeResultado.innerText = minhaString.slice(0, -1)
            console.log(divDeResultado.textContent.length)
          }

          if (action === 'limparTudo') {
            divDeResultado.innerText = '0'
          }
          
          if (action === 'calculate') {
            
          }
          
        Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'))
    }

})

