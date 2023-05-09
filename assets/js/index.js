
const CHIAVE_NOME = "cm";
const CHIAVE_COUNT = "cc";
var count = 0;
window.onload = () => {
    aggiornaTitolo();
    let input = document.getElementById('input');
    let buttonSave = document.getElementById('btn1');
    let buttonRimuovi = document.getElementById('btn2');
    buttonSave.onclick = () => {
        let value = input.value;
        localStorage.setItem(CHIAVE_NOME, value);
        aggiornaTitolo();
        input.value = '';
    };
    buttonRimuovi.onclick = () => {
      
        localStorage.removeItem(CHIAVE_NOME);
        aggiornaTitolo();
    };

    let counter = document.getElementById('counter');
    let storedCount = sessionStorage.getItem(CHIAVE_COUNT);
    if(storedCount){
        count = storedCount;
        counter.innerText = `${storedCount}`;
    }else{
        counter.innerText = `${count}`;
    }

    let promise = setInterval(() => {
        count++;
        sessionStorage.setItem(CHIAVE_COUNT, count);
        counter.innerText = `${count}`;
    }, 1000);

};

function aggiornaTitolo(){
    let titolo = document.getElementById('lg');
    titolo.innerText = localStorage.getItem(CHIAVE_NOME);
}