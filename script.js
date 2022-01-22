import api from "./config.js";

const container = document.querySelector(".container"),
inputBox = container.querySelector(".input-box"),
weatherBox = container.querySelector(".weather-box"),
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
    if(info.cod == 404) {
        infoText.innerText = `'${inputField.value}': Cidade não encontrada.`;
        infoText.classList.replace('pending', 'error');
    }else {
        // reseta os valores do campo de entrada (inputField) e da caixa de texto (infoText). Adiciona uma classe ao ".container"
        inputField.value = '';
        infoText.classList.remove('pending', 'error');
        container.classList.add('active');

        //exibe todos os dados na tela
        console.log(info)
        // location
        weatherBox.querySelector('.location span').innerText = `${info.name}, ${info.sys.country}`;

        //date
        let date = new Date();
        let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

        let day = date.getDate();
        let month = months[date.getMonth()]; // mes[numero do mes]
        let year = date.getFullYear();
        

        weatherBox.querySelector('.date span').innerText = `${day} de ${month} de ${year}`;

        // temp
        weatherBox.querySelector('.temp .num').innerText = Math.floor(info.main.temp);

        //weather
        let weatherId = info.weather[0].id;
        let weatherInfo = info.weather[0].description;
        let weatherIcon;

        //weather icon conditions
        if(weatherId >= 200 || weatherId <= 232){
            weatherIcon = '/Weather Icons/storm.svg';

        }else if(weatherId >= 300 || weatherId <= 321){
            weatherIcon = '/Weather Icons/rain.svg';

        }else if(weatherId >= 500 || weatherId <= 531){
            weatherIcon = '/Weather Icons/rain.svg';
            
        }else if(weatherId >= 600 || weatherId <= 622){
            weatherIcon = '/Weather Icons/snow.svg';
            
        }else if(weatherId >= 701 || weatherId <= 781){
            weatherIcon = '/Weather Icons/haze.svg';
            
        }else if(weatherId == 800){
            weatherIcon = '/Weather Icons/clear.svg';
            
        }else if(weatherId >= 801 || weatherId <= 804){
            weatherIcon = '/Weather Icons/cloud.svg';

        }
        
        weatherBox.querySelector('.weather img').src = weatherIcon;
        weatherBox.querySelector('.weather span').innerText = weatherInfo;

        // bottom details
        weatherBox.querySelector('.bottom-details .feels-like .num').innerText = Math.floor(info.main.feels_like);
        weatherBox.querySelector('.bottom-details .humidity .num').innerText = `${info.main.humidity}%`;
    }
}