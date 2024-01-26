const key = 'e58bfd93a525a2df533b979eb459293d';
// Funcional
function dadosNaTela(dados) {
    // Pegando os elementos da tela que vão receber as informações.
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

//Função assíncrona para acessar servidores externos, avisando o javascript para ficar esperando até que o servidor responda
async function buscarCidade(cidade) {
    // "await" e "fetch" ferramentas que devemos usar para conectar servidores javascript
    //acessando o servidor, quando(.then) obtiver resposta, ela será passada para formato .json
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    dadosNaTela(dados);
}

function clickButton() {
    const cidade = document.querySelector(".input-cidade").value;

    buscarCidade(cidade);
}

