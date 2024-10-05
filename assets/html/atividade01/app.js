const formMain = document.getElementById('form-01');
formMain.addEventListener('submit', function(event) {
    console.log ('html access success');
    
// evita o comportamento padrão do evento submit
event.preventDefault(); 
    console.log ('prevent default action: success');
 
// pega o valor como string
let num01 = document.getElementById('form-num01').value;
let hourValue;

    // calculo
    if (num01 <= 2) {
    console.log ('R$ 5,00 por hora');
    hourValue = 5;
        
    } else if (num01 <= 5) {
        console.log (' R$ 4,50 por hora.');
        hourValue = 4.5;
        
    } else if (num01 <= 10) {
        console.log (' R$ 4,00 por hora.');
        hourValue = 4;
        
    } else {
        console.log (' R$ 3,50 por hora.');
        hourValue = 3.5;
    } 
let finalResult = (num01 * hourValue).toFixed(2);
console.log ('valor: '+finalResult);

// Troca virgula por ponto se necessário
finalResult = finalResult.replace(".", ",");
    console.log ('coma adjustment: success');
console.log (finalResult);

// manda o valor para interface
document.getElementById('final-result').classList.remove('is-hidden');

document.getElementById('final-result').scrollIntoView({
    behavior: 'smooth', // Faz a rolagem ser suave
    block: 'start' // Alinha o elemento ao topo da janela de visualização
});

// manda o valor para interface
document.getElementById('div-area').innerHTML = ('R$ '+ finalResult);
    console.log ('print result on html: success');

});