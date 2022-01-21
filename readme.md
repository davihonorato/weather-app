Este projeto é um programa que consulta a API [OpenWeather](https://openweathermap.org) utilizando conceitos básico de JavaScript para realizar uma consulta de dados e obter determinadas informações acerca do clima de uma cidade.

O usuário irá inserir o nome da cidade na tela inicial e, após apertar 'Enter', será direcionado para a tela de informações acerca do clima da cidade inserida. 

Para construir a página web, foram utilizados conceitos de HTML e CSS.

#### Clonando o repositório

Caso deseje clonar o repositório, é importante saber que, para fins de segurança, a key da API foi armazenada em um arquivo chamado "config.js". Esse arquivo foi ignorado utilizando o ".gitignore", mas pode ser recriado da seguinte maneira:
```
const api = {
    key: "YOUR_API_KEY",
    lang: "YOUR_LANGUAGE",
    units: "YOUR_UNIT"
}

export default api;
```
Dessa forma, basta apenas importar o arquivo "config.js" com todas as informações necessárias no seu arquivo "script.js" e está tudo resolvido!