# Passos necessários para executar a aplicação  

Instale o **node** (se necessário)  
Acesse o link: https://www.treinaweb.com.br/blog/instalacao-do-node-js-windows-mac-e-linux/  
<br>
Instale o **Git** (se necessário)  
Acesse o link: https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git  
<br>
Instale o **VSCode** (se necessário)  
Download no link (após download, execute o instalador e siga as instruções): https://code.visualstudio.com/Download  
<br>
Abra um terminal (ou use o do VSCode)  
<br>
Clone o repositório do **GitHub**:  (na pasta de sua preferência)  
`git clone git@github.com:dario-monteiro/monopoly-simulator.git`  
<br>
Ainda no terminal execute:  
`cd monopoly-simulator`  
<br>
Execute:  
`npm install`  
<br>
Após o termino do download e instalação de todas as dependências do projeto, execute:  
`npm start`  
Aguarde o inicio da aplicação  
<br>
Acesse a url da aplicação no browser ou uma ferramenta para testes de API, como **Postman**  
http://localhost:8080/jogo/simular (método GET no Postman)  
<br>
Para jogar novamente, recarregue a página ou repita a requisição no Postman  
<br>
Para interromper a execução do jogo use `Control + C`  
<br>
**Observação**: No terminal ou console do VSCode são gerados logs para acompanhar a execução do jogo  