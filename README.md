# Database manager (SGBD) with SQL suport

**CREATE TABLE**
```SQL
create table author (id number, name string, age number, city string, state s tring,country string)
```

**INSERT**
```SQL
insert into author (id, name, age) values (1, Douglas Crockford, 62)
```

**SELECT**
```SQL
select name, age, city from author where age > 50 and age < 60
```

**UPDATE**
```SQL
update author set age = 45 where id = 2
```

**DELETE**
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

### Instruções Dado o comando:
create table author (id number, name string, age number, city string, state s tring, country string)

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
Conteúdo abordado neste exercício
• Object
• for/of
• String.prototype.trim() • JSON.stringify
