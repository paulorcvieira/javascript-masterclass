# Database manager (SGBD) with SQL suport

**CREATE TABLE**
```
create table author (id number, name string, age number, city string, state s tring,country string)
```

**INSERT**
```
insert into author (id, name, age) values (1, Douglas Crockford, 62)
```

**SELECT**
```
select name, age, city from author where age > 50 and age < 60
```

**UPDATE**
```
update author set age = 45 where id = 2
```

**DELETE**
```
delete from author where age < 50
```

## Desafio 01
Extraia partes do comando como o nome da tabela e as colunas, armazenando-as em variáveis.

### Instruções
Dado o comando:
```
create table author (id number, name string, age number, city string, state s tring, country string)
```

1. Extraia o nome da tabela e armazene em uma variável chamada "tableName".
2. Extraia as colunas da tabela e armazene em uma variável chamada "columns".
3. Manipule a variável "columns", separando cada coluna com seu respectivo tipo, em
uma string separada.

### Resultado
```
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