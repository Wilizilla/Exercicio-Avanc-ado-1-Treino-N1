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

console.log (num01 * hourValue);

// manda o valor para interface
document.getElementById('final-result').classList.remove('is-hidden');

document.getElementById('final-result').scrollIntoView({
    behavior: 'smooth', // Faz a rolagem ser suave
    block: 'start' // Alinha o elemento ao topo da janela de visualização
});

// manda o valor para interface
document.getElementById('div-area').innerHTML = ('Os valores são iguais');
    console.log ('print result on html: success');

});