const calcular = document.getElementById('calcular')
calcular.addEventListener('click', calculo)

function calculo(){

    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    const imc = (peso / (altura * altura)).toFixed(1)

    if (nome != '' && altura != '' && peso != '')
    
        classificar = ''

        if (imc < 18.5) {
            classificar = 'abaixo do peso'
            resultado.textContent = `${nome}, seu IMC é: ${imc} e você está ${classificar}`
        }

        else if (imc < 25) {
            classificar = 'no peso ideal'
            resultado.textContent = `${nome}, seu IMC é: ${imc} e você está ${classificar}`
        }

        else if (imc < 30) {
            classificar = 'levemente acima do peso'
            resultado.textContent = `${nome}, seu IMC é: ${imc} e você está ${classificar}`
        }

        else if (imc < 35) {
            classificar = 'obesidade grau I'
            resultado.textContent = `${nome}, seu IMC é: ${imc} e você está com ${classificar}`
        }

        else if (imc < 40) {
            classificar = 'obesidade grau II (Severa)'
            resultado.textContent = `${nome}, seu IMC é: ${imc} e você está com ${classificar}`
        }

        else if (imc > 40) {
            classificar = 'obesidade grau III (Mórbida)'
            resultado.textContent = `${nome}, seu IMC é: ${imc} e você está com ${classificar}`
        }

        if (nome == '' || altura == '' || peso == ''){
            alert('Preencha Todos Os Campos')
            document.getElementById('resultado').value='';
        }

}

const Limpar = document.getElementById('limpar')

Limpar.addEventListener('click', limpar)

function limpar(){
    const resultado = document.getElementById('resultado')
    resultado.innerHTML = ''
}