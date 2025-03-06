const chaveApi = 'Chave Excharge Rate API';
const urlApi = `https://v6.exchangerate-api.com/v6/${chaveApi}/latest/`;

const valor = document.getElementById("valor");
const moedaDe = document.getElementById("input-de");
const moedaPara = document.getElementById("input-para");
const opcoesDe = document.getElementById("opcoes-de");
const opcoesPara = document.getElementById("opcoes-para");
const converter = document.getElementById("converter");
const result = document.getElementById("resultado");


let moedas = [];

fetch('moedas.json')
  .then(response => response.json())
  .then(data => {moedas = data;})
  .catch(error => console.error('Erro ao carregar JSON:', error));

converter.addEventListener('click', buscarCambio);

moedaDe.addEventListener("input", (event) => {
    listarMoedasDe(event.target.value);
});

moedaPara.addEventListener("input", (event) => {
    listarMoedasPara(event.target.value);
});

function listarMoedasDe(texto) {
    const moedasLocal = [];
    opcoesDe.innerHTML = '';
    for(let m of moedas){
        if(m.moeda.includes(texto.toUpperCase()) || m.nome.toUpperCase().includes(texto.toUpperCase()) || m.pais.toUpperCase().includes(texto.toUpperCase())){
            moedasLocal.push(m);
        }
    }
    for(let m of moedasLocal){
        opcoesDe.innerHTML += `<option value="${m.moeda} - ${m.nome}">${m.pais}</option>`;
        console.log(m.pais + ' ' + m.moeda)
    }
}

function listarMoedasPara(texto) {
    const moedasLocal = [];
    opcoesPara.innerHTML = '';
    for(let m of moedas){
        if(m.moeda.includes(texto.toUpperCase()) || m.nome.toUpperCase().includes(texto.toUpperCase()) || m.pais.toUpperCase().includes(texto.toUpperCase())){
            moedasLocal.push(m);
        }
    }
    for(let m of moedasLocal){
        opcoesPara.innerHTML += `<option value="${m.moeda} - ${m.nome}">${m.pais}</option>`;
        console.log(m.pais + ' ' + m.moeda)
    }
}

async function buscarCambio(){
    let cambio = null;
    let deSigla =  moedaDe.value.split(" - ")[0].toUpperCase();
    let paraSigla = moedaPara.value.split(" - ")[0].toUpperCase();
    try{
        cambio = JSON.parse(sessionStorage.getItem(deSigla));
    }
    catch{
        cambio = null;
    }
    if(cambio == null){
        try{
            const response = await fetch(urlApi + deSigla);
            const data = await response.json();
            if(data.result === "success") {
                sessionStorage.setItem(deSigla, JSON.stringify(data.conversion_rates));
                converterMoeda(deSigla, paraSigla);
            } else {
                console.error("Erro ao assecar a API:", data.error);
            }
        }catch(error){
            console.error("Erro ao acessar API:", error);
        }
    }else{
        converterMoeda(deSigla, paraSigla);
    }
    
}

function converterMoeda(moeda1, moeda2){
    try{
        const cambio = JSON.parse(sessionStorage.getItem(moeda1))[moeda2];
        let valorConvertido = cambio * valor.value;
        result.innerText = valorConvertido.toFixed(2);
    }catch(erro){
        result.innerText = "Erro";
        console.log("Erro ao obter as moedas: " + erro.message)
    }

}

