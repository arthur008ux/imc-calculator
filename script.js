//calculo do imc
function CalcularImc(){
    //pegando peso e altura
    let peso =parseFloat (document.getElementById('peso').value)
    let altura = parseFloat(document.getElementById('altura').value)
    
    //pegando resultado
    let resultadoDiv = document.getElementById('resultado')
    let mensagem = document.getElementById('mensagem')
    let imagem = document.getElementById('imagem-status')
    //verificando valores reais

    if (isNaN(peso) || isNaN(altura)) {
        alert("Por favor, insira valores numéricos válidos");
        return;
    }

    //calculo de imc
   
    let imc = peso / (altura * altura)
    
    if (imc <= 18.5 ){
        resultadoDiv.style.display = 'block' 
        mensagem.textContent = `seu imc é: ${imc.toFixed(2)} - você está abaixo do peso ideal`
        imagem.src = 'img/abaixo.jpg'
    }
    else if((imc > 18.5) & (imc <= 24.9)){
        resultadoDiv.style.display = 'block' 
        mensagem.textContent = `seu imc é: ${imc.toFixed(2)} - você está no peso ideal`
        imagem.src = 'img/pessoanormal.jpg'
    }



}