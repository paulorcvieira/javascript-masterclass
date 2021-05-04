console.log(`Regular Expressions`);
//estruturas formadas por uma sequencia de caracteres que especificam
//um padrão formal que servem para validar, extrair ou mesmo substituir
//caracteres dentro de uma string.
console.log();
console.log(typeof /johndoe@gmail.com/);
console.log(typeof new RegExp("johndoe@gmail.com"));

let regExp = /johndoe@gmail.com/
let result = regExp.test("Email: johndoe@gmail.com")
let result2 = regExp.exec("Email: johndoe@gmail.com")
console.log(result);
console.log(result2)


console.log();
console.log("Metacaracteres");
console.log("delimitadores de inicio(^) e fim ($)");

let exp = /^johndoe@gmail.com$/; //delimita o inicio e fim
result = exp.exec("johndoe@gmail.com")
console.log(result[0]); 
console.log(result.index);
console.log();

result = exp.exec("email é johndoe@gmail.com ...")//null
if (result !== null) {
    console.log(result[0]); 
    console.log(result.index);
    console.log();
}

exp = /johndoe@gmail.com$/
result = exp.exec("email é johndoe@gmail.com");//encotra pois está finalizando conforme a regra.
console.log(result[0]); 
console.log(result.index);
console.log();

exp = /^johndoe@gmail.com/
result = exp.exec("johndoe@gmail.com ... "); //encotra pois está iniciando conforme a regra.
console.log(result[0]); 
console.log(result.index);

console.log();
console.log("Grupos de caracteres");
//[abc]
//[^abc]
//[0-9]
//[^0-9]

regExp = /[a-z]{10}@/;
console.log(regExp.test("abc@"));//false
console.log(regExp.test("abcdefghij@"));//true pq tem 10 caracteres
regExp = /[a-z]+@[a-z]+/; //um ou mais conjuntos de caracters (+)
console.log(regExp.test("johndoe@gmail.com")); //true

console.log();
regExp = /^\w+@[a-z]+/
console.log(regExp.test("johndoe@gmail.com")); //true
console.log(regExp.test("1johndoe@gmail.com")); //true
console.log(regExp.test("1johndoe@232.com")); //false
console.log(regExp.test("1johndoe.gmail.com")); //false

console.log();
regExp = /^\w+@\w+.\w{3}/;
console.log(regExp.test("johndoe@gmail.com")); //true
console.log(regExp.test("johndoe@gmail.net")); //true
console.log(regExp.test("johndoe@hotmail.com")); //true
console.log(regExp.test("johndoe@hotmail.io")); //false

console.log();
regExp = /^\w+@\w+(.\w{2,3})+$/;
console.log(regExp.test("johndoe@gmail.com")); //true
console.log(regExp.test("johndoe@gmail.net")); //true
console.log(regExp.test("johndoe@hotmail.io.br")); //true
console.log(regExp.test("johndoe@hotmail")); //true


console.log();
console.log("Grupos de captura");

regExp = /^(\w+)@(\w+)(.\w{2,3})+$/;
console.log(regExp.exec("johndoe@email.com.br")); //true



const text = "Aprender regex é muito fácil. 123 \n";

// Forma 01
regExp = new RegExp("aprender");
console.log("Contém a palavra 'aprender'?", regExp.test(text));

// Forma 02
const regExp = /Aprender/;
console.log(regExp.test(text));

// Forma 03
console.log(/aprender/.test(text));
console.log(/Aprender/i.test(text));

// \d - Qualquer dígito de caractere [0-9]
// \w - Um caractere alfanumérico ("teste")
// \s - Qualquer caractere de espa;co em branco
// \D - Caracteres que não são digito [^0-9]
// \W - Caractere não-alfanumérico
// \S - Caractere que não seja espaço em branco
// . - Qualquer caractere, menos nova linha (coringa)

console.log(". ", /./.test(text));
console.log("\\d ", /\d/.test(text));
console.log("\\w ", /\w/.test(text));
console.log("\\s ", /\s/.test(text));
console.log("\\D ", /\D/.test(text));
console.log("\\W ", /\W/.test(text));
console.log("\\S ", /\S/.test(text));
console.log("\\d\\d em 02 ", /\S/.test("02"));
console.log("\\d\\d 2021 ", /\S/.test("2021"));
console.log("\\d\\d\\d\\d as ", /\S/.test("as"));
console.log("\\d\\d\\d\\d asd ", /\S/.test("asd"));
console.log("\\d\\d\\d\\d asdf ", /\S/.test("asdf"));
console.log("[^a-z] abcdfghijlmn... ", /[^a-z]/.test("abcdfghijlmn..."));
console.log("[^a-z] abcdfghijlmn... a ", /[^a-z]/.test("abcdfghijlmn... a"));
console.log("\\d+ 1234567890 ", /\d+/.test("1234567890"));
console.log("\\d+ abcdfghijlmn... a ", /\d+/.test("asdf"));
console.log("\\d+ '' ", /\d+/.test(""));
console.log("? Abacaxi ", /Abacax?i/.test("Abacaxi"));
console.log("? Abacai ", /Abacax?i/.test("Abacai"));
console.log("\\d+\\w? 123 ", /\d+\w?/.test("123"));
console.log("\\d+\\w? 123a ", /\d+\w?/.test("123a"));
console.log("\\d+\\w? 123asdf ", /\d+\w?/.test("123asdf"));
console.log("\\d{5}-\\d{3} cep: 99999-9 ", /\d{5}-\d{3}/.test("99999-9"));
console.log("\\d{5}-\\d{3} cep: 99999-999 ", /\d{5}-\d{3}/.test("99999-999"));
console.log("\\(\d{2}\\) \d{4,5}-\\d{4} fone: (99) 99999-9999 ", /\(\d{2}\) \d{4,5}-\d{4}/.test("(99) 99999-9999"));
console.log("\\(\d{2}\\) \d{4,5}-\\d{4} fone: (99)99999-9999 ", /\(\d{2}\) \d{4,5}-\d{4}/.test("(99)99999-9999"));
console.log("\\(\d{2}\\) \d{4,5}-\\d{4} fone: (99)99999-999 ", /\(\d{2}\) \d{4,5}-\d{4}/.test("(9)99999-999"));
console.log("\\(\d{2}\\) \d{4,5}-\\d{4} fone: (99)99999-999 ", /\(\d{2}\) \d{4,5}-\d{4}/.test("(99) 9999-9999"));
console.log("\\(\d{2}\\) \d{4,5}-\\d{4} fone: (99)99999-999 ", /\(\d{2}\) \d{4,5}-\d{4}/.test("(99) 999999999"));

// exec
console.log('\\d+ exec ', /\d+/.exec("Tem o número 99 aqui"))
console.log('\\d+ exec ', /\d+/.exec("Tem o número aqui"))

// match
console.log('\\d+ match ', "Tem o número 99 aqui".match(/\d+/))
console.log('\\d+ match ', "Tem o número aqui".match(/\d+/))

// Choice pattern | ou or
console.log('\\w+: (Paulo|Caroline|Carmen)i', /\w+: (Paulo|Caroline|Carmen)/i.test("Nome: Paulo"))
console.log('\\w+: (Paulo|Caroline|Carmen)i', /\w+: (Paulo|Caroline|Carmen)/i.test("Nome: caroline"))
console.log('\\w+: (Paulo|Caroline|Carmen)i', /\w+: (Paulo|Caroline|Carmen)/i.test("Carmen"))

console.log('[?www]\\w+\\.com|com.br www.google.com.br ', /[?www].\w+\.com|com.br/.test("www.google.com.br"))
console.log('[?www]\\w+\\.com|com.br www.google.com', /[?www].\w+\.com|com.br/.test("www.google.com"))
console.log('[?www]\\w+\\.com|com.br www.google', /[?www].\w+\.com|com.br/.test("www.google"))
console.log('[?www]\\w+\\.com|com.br www.google.com', /[?www].\w+\.com|com.br/.test("www.google.com"))
console.log('[?www]\\w+\\.com|com.br http://www.google.com', /[?www].\w+\.com|com.br/.test("http://www.google.com"))

console.log('^\\w+@\\w+(\\.\\w{2,3})+$ email@email.com.br', /^\w+@\w+(\.\w{2,3})+$/.test("email@email.com.br"))
console.log('^\\w+@\\w+(\\.\\w{2,3})+$ email@email.com', /^\w+@\w+(\.\w{2,3})+$/.test("email@email.com"))
console.log('^\\w+@\\w+(\\.\\w{2,3})+$ email@email', /^\w+@\w+(\.\w{2,3})+$/.test("email@email"))
console.log('^\\w+@\\w+(\\.\\w{2,3})+$ email0email.com', /^\w+@\w+(\.\w{2,3})+$/.test("email0email.com"))

const cnpjRegex = /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/
const cnpj = "99999999999999"
console.log('^(\\d{2})(\\d{3})(\\d{3})(\\d{4})(\\d{2}) cnpj 99999999999999 ', cnpjRegex.test(cnpj))
console.log('^(\\d{2})(\\d{3})(\\d{3})(\\d{4})(\\d{2}) cnpj 99999999999999 ', cnpj.replace(cnpjRegex, "$1.$2.$3/$4-$5"))

const regexBurnDate = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/
console.log('^[0-9]{2}[/][0-9]{2}[/][0-9]{4} data de nascimento 07/11/1986: ', regexBurnDate.test("07/11/1986"))
console.log('^[0-9]{2}[/][0-9]{2}[/][0-9]{4} data de nascimento 07-11-1986: ', regexBurnDate.test("07-11-1986"))
console.log('^[0-9]{2}[/][0-9]{2}[/][0-9]{4} data de nascimento 07/11/86: ', regexBurnDate.test("07/11/86"))
console.log('^[0-9]{2}[/][0-9]{2}[/][0-9]{4} data de nascimento 07111986: ', regexBurnDate.test("07111986"))

// Somente letras maiúculas
console.log("SOMENTE LETRAS MAIUSCULAS: ", /[A-Z]/.test("SOMENTE LETRAS MAIUSCULAS"))

// Digitos com final ID
console.log('Digitos e termina com ID 4255235ID: ', /\d+ID\b/.test("4255235ID"))
console.log('Digitos e termina com ID 4255235: ', /\d+ID\b/.test("4255235"))
console.log('Digitos e termina com ID asdfID: ', /\d+ID\b/.test("asdfID"))

// Marca: nomeDaMarca (Nike, Adidas, Puma, Asics)
console.log('Marca: (Nike|Adidas|Puma|Asics): ', /Marca: (Nike|Adidas|Puma|Asics)/.test("Marca: Nike"))
console.log('Marca: (Nike|Adidas|Puma|Asics): ', /Marca: (Nike|Adidas|Puma|Asics)/.test("Marca: Adidas"))
console.log('Marca: (Nike|Adidas|Puma|Asics): ', /Marca: (Nike|Adidas|Puma|Asics)/.test("Marca: Puma"))
console.log('Marca: (Nike|Adidas|Puma|Asics): ', /Marca: (Nike|Adidas|Puma|Asics)/.test("Marca: Asics"))
console.log('Marca: (Nike|Adidas|Puma|Asics): ', /Marca: (Nike|Adidas|Puma|Asics)/.test("Marca: Lacoste"))
console.log('Marca: (Nike|Adidas|Puma|Asics): ', /Marca: (Nike|Adidas|Puma|Asics)/.test("Hollister"))

// Valida IP
console.log('Valida IP: 127.0.0.1', /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test("127.0.0.1"))
console.log('Valida IP: 8.8.8.8', /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test("8.8.8.8"))
console.log('\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3} Valida IP: 255.255.255.255', /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test("255.255.255.255"))

// valida nome de usuário
console.log('^(?=.{3,16}$)[a-z0-9-_] Valida nome de usuário: ', /^(?=.{3,16}$)[a-z0-9-_]/.test("paulorcvieira"))
console.log('^(?=.{3,16}$)[a-z0-9-_] Valida nome de usuário: ', /^(?=.{3,16}$)[a-z0-9-_]/.test("paulo-rc_vieira"))