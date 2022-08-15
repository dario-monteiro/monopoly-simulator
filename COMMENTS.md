# Como executar a aplicação  

Instale o **node** (caso não tenha)  
Instruções no link: https://www.treinaweb.com.br/blog/instalacao-do-node-js-windows-mac-e-linux/  
<br>
Instale o **Git** (caso não tenha)  
Instruções no link: https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git  
<br>
Instale o **VSCode** (opcional)  
Download no link: https://code.visualstudio.com/Download  
Após download, execute o instalador e siga as instruções  
<br>
Abra um terminal ou use o do VSCode  
<br>
Clone o repositório do **GitHub** na pasta de sua preferência:  
`git clone git@github.com:dario-monteiro/monopoly-simulator.git`  
<br>
Execute:  
`cd monopoly-simulator`  
<br>
Execute:  
`npm install`  
Aguarde o termino do download e instalação de todas as dependências da aplicação  
<br>
Execute:  
`npm run start`  
Aguarde o inicio da aplicação  
<br>
Para jogar, acesse a url da aplicação no browser ou em uma ferramenta para testes de API, como **Postman**  
http://localhost:8080/jogo/simular  
No Postman crie uma requisição **GET**  
<br>
Para jogar novamente, recarregue a página ou repita a requisição no Postman  
<br>
Para interromper a execução da aplicação use  `Control+C`  no terminal  
<br>
**Observação**:  
No terminal ou console do VSCode são gerados logs para acompanhar a execução do jogo  