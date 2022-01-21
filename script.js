import api from "config.js";

const container = document.querySelector(".container"),
inputBox = container.querySelector(".input-box"),
infoText = inputBox.querySelector(".info-text"),
inputField = inputBox.querySelector("input"),
inputBtn = inputBox.querySelector("button");

inputField.addEventListener("keyup", e => {
    if(e.key == "Enter" && inputField.value != ""){
        requestAPI(inputField.value);
    }
});

inputBtn.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }else {
        console.log("O navegador não suporta Geolocation.");
    }
})

function onSuccess(position){
    let apiReq = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${api.key}&units=${api.units}&lang=${api.lang}`;
    
    fetchData(apiReq);
}

function onError(error) {
    if(error.code == 1) {
        infoText.innerText = "O usuário negou o acesso.";
    }else if(error.code == 2){
        infoText.innerText = "Posição atual indisponível.";
    }else {
        infoText.innerText = "Tempo esgotado.";
    }
    infoText.classList.add('error');
}

function requestAPI(city) {
    let apiReq = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api.key}&units=${api.units}&lang=${api.lang}`;
    
    fetchData(apiReq);
}

function fetchData(apiReq){
    //Insere um novo texto em infoText e adiciona uma nova classe
    infoText.textContent = "Procurando...";
    infoText.classList.add('pending');

    // Pega a resposta e retorna transformando em um objeto JS
    // para então chamar a função weatherDetails, passando o resultado como argumento
    fetch(apiReq)
        .then(response => response.json())
        .then(data => weatherDetails(data));
}

function weatherDetails(info) {
    console.log(info);
}