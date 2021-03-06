# Javascript MasterClass - Challenges

## Database manager (SGBD) with SQL suport

### **CREATE TABLE**

```SQL
create table author (id number, name string, age number, city string, state s tring,country string)
```

### **INSERT**

```SQL
insert into author (id, name, age) values (1, Douglas Crockford, 62)
```

### **SELECT**

```SQL
select name, age, city from author where age > 50 and age < 60
```

### **UPDATE**

```SQL
update author set age = 45 where id = 2
```

### **DELETE**

```SQL
delete from author where age < 50
```

## Desafio 01

Extraia partes do comando como o nome da tabela e as colunas, armazenando-as em variáveis.

### Instruções

Dado o comando:
```SQL
create table author (id number, name string, age number, city string, state string, country string)
```

1. Extraia o nome da tabela e armazene em uma variável chamada "tableName".
2. Extraia as colunas da tabela e armazene em uma variável chamada "columns".
3. Manipule a variável "columns", separando cada coluna com seu respectivo tipo, em
uma string separada.

### Resultado
```SQL
tableName = "author"
columns = [ 'id number',' name string',' age number',' city string',' state s tring',' country string']
```

### Dicas

Explore ao máximo as operações disponíveis na String API como: String.prototype.match, String.prototype.replace e String.prototype.split, juntamente com expressões regulares. A operação String.prototype.split retorna uma array, então não é necessário se preocupar
em criar ou adicionar as colunas no array.

### Conteúdo abordado neste exercício

• String
• String.prototype.match • String.prototype.split
• String.prototype.trim
• RegExp
• RegExp - Groups
• RegExp - Capture Groups
• RegExp - Quantifiers
• RegExp - Metacharacters
• RegExp - Escape

## Desafio 02

### Objetivo

Com base no nome da tabela e nas colunas, monte uma estrutura de objetos para armazenar tanto a definição da tabela quanto os dados.

### Instruções

Dado o comando:
```SQL
create table author (id number, name string, age number, city string, state s tring, country string)
```

1. Crie um objeto chamado "database".
2. Dentro do objeto "database", crie um objeto chamado "tables".
3. Dentro do objeto "tables", crie um objeto com o nome da tabela.
4. Dentro do objeto criado com o nome da tabela, crie um objeto chamado "columns",
onde as chaves são representadas pelo nome da coluna e o valor pelo tipo.
5. Dentro do objeto criado com nome da tabela, crie um array chamado "data".
6. Exiba o conteúdo do objeto "database" utilizando JSON.stringify

### Resultado

```JSON
{
  "tables": {
    "author": {
      "columns": {
        "id": "number", "name": "string",
      }
    },
    "age": "number",
    "city": "string",
    "state": "string",
    "country": "string"
  },
  "data": []
}
```

### Dicas

Percorra as colunas com for/of e utilize a notação de [] tanto para criar e acessar as propriedades nos objetos. É possível utilizar um parâmetro na operação JSON.stringify para formatar o objeto. Para isso, passe como terceiro parâmetro alguns espaços em branco ou o caracter tab.

### Conteúdo abordado neste exercício

• Object
• for/of
• String.prototype.trim()
• JSON.stringify

## Desafio 03

### Objetivo

Crie dois métodos no objeto "database" chamados de "createTable" e "execute". O comando "createTable" já foi implementado no exercício anterior, mova o código e utilize o método "execute" para invocar dinamicamente o método "createTable".

### Instruções

1. No objeto "database", crie uma função chamada "createTable", que recebe o comando por parâmetro.
2. Mova o código responsável por criar a tabela para dentro do método "createTable".
3. Crie uma função chamada "execute", invocando dinamicamente a função
"createTable".

### Cenário

```SQL
database.execute("create table author (id number, name string, age number, city string, state string, country string)");
```

### Resultado

```JSON
{
  "tables": {
    "author": {
      "columns": {
        "id": "number",
        "name": "string",
        "age": "number",
        "city": "string",
        "state": "string",
        "country": "string"
      },
      "data": []
    }
  }
}
```

### Dicas

Não se esqueça de utilizar o "this" para referenciar a propriedade "tables" do objeto "database". Você pode utilizar a operação String.prototype.startsWith para verificar se o comando começa com "create table" e realizar a chamada para o método "createTable".

### Conteúdo abordado neste exercício

• Function
• if
• String.prototype.startsWith
• this
• Method Notation

## Desafio 04

### Objetivo

Lance uma exceção caso o comando não exista, interrompendo o fluxo de execução.

### Instruções

1. Crie uma função construtora chamada "DatabaseError" que recebe dois parâmetros: "statement" e "message".
2. Dentro do método "execute", caso o comando passado por parâmetro não exista, instancie a função construtora "DatabaseError", lançando-a como um erro.
3. Envolva a chamada para o objeto "database" em um bloco try/catch imprimindo a propriedade "message" do objeto "DatabaseError".

### Cenário

```Javascript
database.execute("create table author (id number, name string, age number, city string, state string, country string)");
database.execute("select id, name from author");
```

### Resultado

```
"Syntax error: 'select id, name from author'"
```

### Dicas

Não esqueça de utilizar o operador new para instanciar a função construtora "DatabaseError" e de utilizar Template Literals para montar a mensagem de erro.

### Conteúdo abordado neste exercício
• new
• throw
• try
• catch
• Template Literals
• Constructor Function

## Desafio 05

Implemente o método "insert". Para isso, é necessário, como sempre, extrair as informações a partir do comando, converter as informações em um objeto e inserir no array "data" da tabela correspondente.

### Instruções

Dados os comandos:
```SQL
insert into author (id, name, age)  values (1, Douglas Crockford, 62)
insert into author (id, name, age) values (2, Linus Torvalds, 47) insert into author (id, name, age) values (3,  Martin Fowler, 54)
```

1. No objeto "database", crie um método chamado "insert", que recebe o comando por parâmetro.
2. Na função "execute", invoque o método "insert".
3. Extraia o nome da tabela para a variável "tableName", as colunas para a variável
"columns" e os valores para a variável "values".
4. Manipule os valores dentro "columns" e "values", separando-os um a um.
5. Crie um objeto chamado "row" com base nas colunas e valores.
6. Insira o objeto em "data".

### Cenário

```Javascript
database.execute("create table author (id number, name string, age number, city string, state string, country string)");
database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
```

### Resultado

```JSON
{
  "tables": {
    "author": {
      "columns": {
        "id": "number", "name": "string", "age": "number", "city": "string", "state": "string", "country": "string"
      },
      "data": [
        { "id": "1", "name": "Douglas Crockford", "age": "62" },
        { "id": "2", "name": "Linus Torvalds", "age": "47" },
        { "id": "3", "name": "Martin Fowler", "age": "54" }
      ]
    }
  }
}
```

### Dicas

Utilize um for, com índice, para percorrer ao mesmo tempo o array de colunas e de valores. Utilize a operação push para incluir no array "data". Não se esqueça de utilizar.
destructuring para extrair os dados de dentro do array.

### Conteúdo abordado neste exercício

• Function
• for
• if
• Array.prototype.push
• String.prototype.startsWith • this
• Method Notation
• Destructuring
• String.prototype.match
• String.prototype.split
• String.prototype.trim
• RegExp
• RegExp - Groups
• RegExp - Capture Groups
• RegExp - Quantifiers
• RegExp - Metacharacters
• RegExp - Escape

## Desafio 06

### Objetivo

Implemente o método "select". Para isso, é necessário extrair as informações a partir do comando, filtrando os dados pela cláusula "where" e montando os objetos de acordo com as colunas selecionadas.

### Instruções

Dada o comando:
```SQL
select name, age from author where id = 1
```

1. Crie um método chamado "select".
2. Na função "execute", invoque o método "select".
3. No método "select", retorne todos os registros considerando apenas as colunas
selecionadas.
4. Extraia a cláusula where do comando.
5. Crie as variáveis columnWhere e valueWhere.
6. Filtre os registros conforme a cláusula where.

### Cenário

```Javascript
database.execute("create table author (id number, name string, age number, city string, state string, country string)");
database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
database.execute("select name, age from author");
database.execute("select name, age from author where id = 1");
```

### Resultado

```JSON
[
  { "name": "Douglas Crockford", "age": "62" },
  { "name": "Linus Torvalds", "age": "47" },
  { "name": "Martin Fowler", "age": "54" }
]
[
  { "name": "Douglas Crockford", "age": "62" },
]
```

### Dicas

Você pode utilizar a operação Array.prototype.map para converter um array em outro e ainda a operação Array.prototype.filter para filtrar os dados. Você pode querer ignorar um grupo de captura, para isso utiliza a notação ?: dentro do grupo, por exemplo (?: where (.+))?

### Conteúdo abordado neste exercício

• in
• for/of
• Object
• Array
• Array.prototype.push
• Array.prototype.filter
• Array.prototype.map
• Array.prototype.forEach

## Desafio 07

### Objetivo

Implemente o método "delete". Para isso, é necessário extrair as informações a partir do comando e excluir os dados de acordo com a cláusula "where".

### Instruções

Dada o comando:
```SQL
delete from author where id = 2
```

1. Crie um método chamado "delete".
2. Na função "execute", invoque o método "delete".
3. Extraia a cláusula where do comando.
4. Crie as variáveis columnWhere e valueWhere.
5. Filtre os registros conforme a cláusula where.
6. Exclua os registros.

### Cenário

```Javascript
database.execute("create table author (id number, name string, age number, city string, state string, country string)");
database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
database.execute("delete from author where id = 2");
database.execute("select name, age from author");
```

### Resultado

```JSON
[
  { "name": "Douglas Crockford", "age": "62" },
  { "name": "Martin Fowler", "age": "54" }
]
```

### Dicas

Você pode utilizar a operação Array.prototype.filter filtrar os elementos do array.

### Conteúdo abordado neste exercício

• Object
• Array
• Array.prototype.filter

## Desafio 08

### Objetivo

Implemente a função construtora "Parser", que será responsável por receber o comando, identificá-lo e extraí-lo após a execução da expressão regular. Além disso, o nome do comando também deve ser retornado para que ele seja selecionado dinamicamente no método "execute".

### Instruções

1. Crie uma função construtora chamada "Parser".
2. Dentro de "Parser", crie um Map chamando "commands" onde a chave é o nome do comando e o valor é a expressão regular.
3. Crie um método chamado "parse" que recebe "statement".
4. Dentro do método "parse" itere em "commands" fazendo um match em cada uma
das expressões regulares com o "statement" até identificar a expressão
responsável pelo comando.
5. Após encontrar a expressão regular, retorne um objeto contendo o nome do
comando na propriedade "command" e o resultado da execução do método
"match" na propriedade "parsedStatement".
6. No objeto "database", crie uma propriedade chamada "parser" e instancie a função
construtora "Parser".
7. No método "execute", execute o método "parse" e faça o chaveamento do
comando dinamicamente.
8. Refatore os métodos "createTable", "insert", "select" e "delete" para receberem o
"parsedStatement" e não mais o "statement".

### Cenário

```Javascript
database.execute("create table author (id number, name string, age number, city string, state string, country string)");
database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
database.execute("delete from author where id = 2");
database.execute("select name, age from author");
```

### Resultado

```JSON
[
  { "name": "Douglas Crockford", "age": "62" },
  { "name": "Martin Fowler", "age": "54"}
]
```

### Dicas

Dentro do método "parse", você pode iterar sobre o Map de "commands" com for/of e utilizar destructuring para extrair o "command" e o "parsedStatement".

### Conteúdo abordado neste exercício

• Object
• Map
• Map.prototype.set
• for/of
• Destructuring
• Constructor Function
• new

## Desafio 09

### Objetivo

Migre as funções construtoras "DatabaseError" e "Parser" e o objeto "database" para classes.

### Instruções

1. Migre a função construtora "DatabaseError" para uma classe.
2. Migre a função construtora "Parser" para uma classe.
3. Migre o objeto "database" para uma classe.
4. Instancie a classe "Database" no objeto "database".

### Cenário

```Javascript
const database = new Database();
database.execute("create table author (id number, name string, age number, city string, state string, country string)");
database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
database.execute("delete from author where id = 2");
console.log(JSON.stringify(database.execute("select name, age from author"), undefined, "  "));
```

### Resultado

```JSON
[
  { "name": "Douglas Crockford", "age": "62" },
  { "name": "Martin Fowler", "age": "54" }
]
```

### Conteúdo abordado neste exercício

• class
• constructor
• method
• new

## Desafio 10

### Objetivo

Divida o projeto em módulos

### Instruções

1. Crie um módulo chamado "database.mjs"
2. Mova as classe "Database", "Parser" e "DatabaseError" para o módulo
"database.mjs"
3. Exporte a classe "Database"
4. Importe a classe "Database" no main.mjs
5. Mova as classes "Parser" e "DatabaseError" para seus próprios módulos
realizando o mesmo procedimento feito na classe "Database"

### Cenário

```Javascript
const database = new Database();
database.execute("create table author (id number, name string, age number, city string, state string, country string)");
database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
database.execute("delete from author where id = 2");
console.log(JSON.stringify(database.execute("select name, age from author"), undefined, "  "));
```

### Resultado

```JSON
[
  { "name": "Douglas Crockford", "age": "62" },
  { "name": "Martin Fowler", "age": "54" }
]
```

### Conteúdo abordado neste exercício

• Modules

## Desafio 11

### Objetivo

Crie um atraso no retorno da função execute por meio de setTimeout e utilize uma promise para tratar o comportamento assíncrono.

### Instruções

1. Envolva o código da função execute em um setTimeout com 1000ms.
2. Crie uma promise e retorne-a.
3. Execute o comando "create table".
4. Após a execução de "create table", utilize a função Promise.all para executar os 3 comandos "insert".
5. Após a execução dos 3 comandos "insert", faça um select retornando as colunas "name" e "author".

### Resultado

```JSON
[
  { "name": "Douglas Crockford", "age": "62" },
  { "name": "Linus Torvalds", "age": "47" },
  { "name": "Martin Fowler", "age": "54" }
]
```

### Conteúdo abordado neste exercício

• Promise
• Promise.all
• new

## Desafio 12

### Objetivo

Utilize async/await para tratar as chamadas para as promises.

### Instruções

1. Crie uma função utilizando async.
2. Invoque cada uma das funções execute utilizando await incluindo o Promise.all.
3. Envolva as chamadas em um bloco try/catch para tratar as exceções.

### Conteúdo abordado neste exercício

• Async/Await
• Promises
• try/catch
