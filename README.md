<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Previsão do Tempo - README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 0;
            color: #333;
        }

        h1, h2 {
            color: #0056b3;
        }

        pre {
            background: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }

        code {
            font-family: monospace;
            background: #f4f4f4;
            padding: 2px 5px;
            border-radius: 3px;
        }

        .container {
            max-width: 800px;
            margin: auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 10px;
            background: #fff;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Previsão do Tempo - Fernando Zuchi</h1>

        <p>Este projeto é uma aplicação web simples para mostrar a previsão do tempo de uma cidade, utilizando a API do OpenWeatherMap.</p>

        <h2>Funcionalidades</h2>
        <ul>
            <li>Entrada de texto para inserir o nome da cidade.</li>
            <li>Botão para buscar a previsão do tempo.</li>
            <li>Exibição do nome da cidade, temperatura, descrição do tempo, ícone do tempo e umidade.</li>
        </ul>

        <h2>Tecnologias Utilizadas</h2>
        <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>API OpenWeatherMap</li>
        </ul>

        <h2>Como Executar o Projeto</h2>
        <p>Siga os passos abaixo para rodar o projeto localmente.</p>

        <h3>Pré-requisitos</h3>
        <p>Navegador web atualizado.</p>

        <h3>Passo a Passo</h3>
        <ol>
            <li><p><strong>Clone o repositório:</strong></p>
                <pre><code>git clone https://github.com/seu-usuario/nome-do-repositorio.git</code></pre>
            </li>
            <li><p><strong>Navegue até o diretório do projeto:</strong></p>
                <pre><code>cd nome-do-repositorio</code></pre>
            </li>
            <li><p><strong>Abra o arquivo <code>index.html</code> em seu navegador:</strong></p>
                <p>Basta clicar duas vezes no arquivo <code>index.html</code> ou abrir manualmente pelo navegador.</p>
            </li>
        </ol>

        <h2>Estrutura do Projeto</h2>
        <pre><code>
/
├── index.html
├── style.css
├── main.js
└── img/
    └── find.svg
        </code></pre>

        <ul>
            <li><code>index.html</code>: Estrutura principal da página.</li>
            <li><code>style.css</code>: Estilos aplicados à página.</li>
            <li><code>main.js</code>: Funções JavaScript para interagir com a API e atualizar a página.</li>
            <li><code>img/find.svg</code>: Ícone da lupa usado no botão de busca.</li>
        </ul>

        <h2>Detalhes do Código</h2>

        <h3>HTML (<code>index.html</code>)</h3>
        <p>A estrutura principal da página com um input para a cidade, um botão de busca e áreas para exibir os dados do tempo.</p>

        <h3>CSS (<code>style.css</code>)</h3>
        <p>Estilos para tornar a página visualmente atraente, incluindo background, layout centralizado e estilização dos componentes.</p>

        <h3>JavaScript (<code>main.js</code>)</h3>

        <h4>Chave da API</h4>
        <pre><code>const key = 'sua-chave-da-api-aqui';</code></pre>
        <p>Substitua <code>'sua-chave-da-api-aqui'</code> pela sua chave de API do OpenWeatherMap.</p>

        <h4>Função <code>dadosNaTela</code></h4>
        <p>Atualiza a interface com os dados retornados da API.</p>
        <pre><code>function dadosNaTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}
        </code></pre>

        <h4>Função <code>buscarCidade</code></h4>
        <p>Realiza a busca na API com a cidade fornecida.</p>
        <pre><code>async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    dadosNaTela(dados);
}
        </code></pre>

        <h4>Função <code>clickButton</code></h4>
        <p>Obtém o valor do input e chama a função <code>buscarCidade</code>.</p>
        <pre><code>function clickButton() {
    const cidade = document.querySelector(".input-cidade").value;
    buscarCidade(cidade);
}
        </code></pre>

        <h2>Contribuições</h2>
        <p>Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.</p>

        <h2>Licença</h2>
        <p>Este projeto está licenciado sob a <a href="LICENSE">MIT License</a>.</p>

        <p><strong>Fernando Zuchi</strong></p>
    </div>
</body>

</html>
