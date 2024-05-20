let sorteados = [];
let botao = document.getElementById('botao');
let apagar = document.getElementById('apagar');

botao.addEventListener('click', () => {
    while (sorteados.length < 15) {
        let numSorteado = Math.floor(Math.random() * (0, 25) + 1);
        if (!sorteados.includes(numSorteado)) {
            sorteados.push(numSorteado);
        }
    }
    
    let sorteio = document.getElementById('num-sorteados');
    sorteio.innerHTML = sorteados.join(' - ');
});

apagar.addEventListener('click', ()=>{
    let sorteio = document.getElementById('num-sorteados');
    sorteados = [];
    sorteio.innerHTML = '';
});