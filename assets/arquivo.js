var nome = prompt("Informe o seu nome: ");
var valorEmAnosLuz = prompt("Digite o valor em anos Luz: ");
var valorEmMetros = 9460800000000000;
var total = (valorEmAnosLuz * valorEmMetros).toFixed(2);
alert("Olá, " + nome + "! o valor em metros é " + total);
