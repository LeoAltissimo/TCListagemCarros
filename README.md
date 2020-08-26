## Teste aptidão TradersClub

### Ponto Importante
Conforme comentado por e-mail, foi tomado como base os dados apresentados na documentação da api, porem **utilizando os dados localmente.**<br /><br />
**Com isso, no arquivo src>container>App>index.js na linha 29. existe um booleano que setado como true, é feito uma simulação da API de forma local**. e setado para false, sera consumido os endpoints disponiveis na API.

### Alguns pontos relevantes
O seguinte projeto foi estruturado da forma mais fiel possível ao modelo que seguia com o desafio.<br />
**UTILIZANDO APENAS OS COMPONENTES PREVIAMENTE LISTADOS NO PACKAGE.JSON ORIGINAL**.<br />

Por tanto utiliza-se da versão classica do react com o uso de classes.<br />

Como a ideia era seguir a risca o projeto base, não foi feito uso do redux, por conta disso, as principais funcionalidades do CRUD são definidas no arquivo que contem o parente mais antigo da árvore.(src>container>App>index.js)<br /><br />


### Sobre estrutura utilizada
Tendo e vista ser um projeto pequeno, e não fazer uso de ferramentas que impactam diretamente na estrutura do projeto como Redux e Styled-Components, Foi utilizado uma versão mais "simplificada" do atomic design, de modo que componentes altamente reutilizáveis e sem dependência com a regra de negócio foram levado para a pasta "components" e arquivos que possuem uma baixa reutilizabilidade e estão presos a regra de negócio, estao alocados na pasta "containers"<br />
Já os demais aspectos organizacionais foi buscado deixar como o proposto no repositório do desafio da TC.
