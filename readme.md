## Weather App

O Weather App é um aplicativo que exibe algumas informações do clima da cidade pesquisada através de uma consulta feita a uma API pública.


## Funcionalidades

O usuário irá inserir o nome da cidade na tela inicial e, após apertar 'Enter', será direcionado para a tela de informações acerca do clima da cidade inserida.

Algumas funcionalidades importantes:

- Recebimento de dados de entrada
- Geolocalização
- Requisição utilizando a API [OpenWeather](https://openweathermap.org)
- Tratamento de informações recebidas da API
- Exibição de dados


## Desenvolvimento

Este projeto é um programa que consulta a API [OpenWeather](https://openweathermap.org) utilizando conceitos básico de JavaScript para realizar uma consulta de dados e obter determinadas informações acerca do clima de uma cidade.

Para construir a interface da página web, foram utilizados conceitos de HTML e CSS.


## Clonando o repositório

Caso deseje clonar o repositório, é importante saber que, para fins de segurança (recomendado pelo próprio site), a key da API foi armazenada em um arquivo chamado "config.js". Esse arquivo foi ignorado utilizando o ".gitignore", mas pode ser recriado com o seguinte conteúdo:

```
const api = {
    key: "YOUR_API_KEY",
    lang: "YOUR_LANGUAGE",
    units: "YOUR_UNIT"
}

export default api;
```

Dessa forma, após substituir com as suas informações, basta apenas importar o arquivo "config.js" com todas as informações necessárias no seu arquivo "script.js" e está tudo resolvido!


## Constribuições

Contribuições e conselhos são sempre bem-vindos!

Caso encontre algum erro ou queira adicionar alguma outra funcionalidade interessante, pode ir em frente! :)


## Autor

- [@davihonorato](https://www.github.com/davihonorato)