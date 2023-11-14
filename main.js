const inputFormNome = document.getElementById("form-nome");
const inputFormNumero = document.getElementById("form-numero");
const imgTelefone = `<img src="./imgs/telefone.png" alt='telefone'>`;
const imgCelular = `<img src="./imgs/celular.png" alt='celular'>`;
let nomes = [];
let numeros = [];
var numeroEhValido = false;
var nomeEhValido = false;
var totalDeContatos = 0;

let contatos = '';

inputFormNome.addEventListener('keyup', function (e) {
    validacaoDoCampoNome();
})

inputFormNumero.addEventListener('keyup', function (e) {
    validacaoDoCampoNumero();
})

document.addEventListener('submit', function (e) {
    e.preventDefault();

    if(numeroEhValido && nomeEhValido){
        adicionandoContato();
    }
})

function validacaoDoCampoNome() {
    let nome = inputFormNome.value;
    
    // Validação de nome
    if (!nomes.includes(nome)) {
        document.getElementById("span-nome").style.display = 'none';
        document.getElementById("span-nome").classList.remove = 'erro';

        nomeEhValido = true;

    } else {
        document.getElementById("span-nome").style.display = 'block';
        document.getElementById("span-nome").innerHTML = 'Nome já adicionado, escolha outro!';
        document.getElementById("span-nome").classList.add = 'alerta';
        
        nomeEhValido = false;
    }
}

function validacaoDoCampoNumero() {
    let numero = inputFormNumero.value;

    // Validação de número
    if (!numeros.includes(numero)) {

        // Validação da quantidade de números de telefone e celular
        // Para telefone são 10 dígitos 
        // E celular são 11 dígitos
        if (numero.length == 10 || numero.length == 11) {
            console.log("Número correto")
            document.getElementById("span-numero").style.display = 'none';
            numeroEhValido = true;

        } else {
            // console.log("Somente números nacionais");
            document.getElementById("span-numero").style.display = 'block';
            document.getElementById("span-numero").innerHTML = 'Somente números nacionais';
            document.getElementById("span-numero").classList.add = 'erro';
            numeroEhValido = false;
        }

    } else {
        console.log("Número já adicionado na agenda!");
        document.getElementById("span-numero").style.display = 'block';
        document.getElementById("span-numero").innerHTML = 'Número já adicionado na agenda!';
        document.getElementById("span-numero").classList.add = 'alerta';
        numeroEhValido = false;
    }
}

function adicionandoContato(){

    nomes.push(inputFormNome.value);
    numeros.push(inputFormNumero.value);
    totalDeContatos++;

    let contato = '';

    contato += `<tr>`;
    contato += `<td>${inputFormNome.value}</td>`;
    contato += `<td>${formatacaoDeNumero()}</td>`;
    contato += `<td>${inputFormNumero.value.length == 10 ? imgTelefone : imgCelular}</td>`;
    contato += `</tr>`;

    contatos += contato;

    document.querySelector('tbody').innerHTML = contatos;
    document.getElementById('total-contatos').innerHTML = totalDeContatos;
    
    inputFormNome.value = '';
    inputFormNumero.value = '';
}

function formatacaoDeNumero() {

    var numero = inputFormNumero.value;
    var numeroFormatado = '';

    // Formatação do número
    if (numero.length == 10) {
        numeroFormatado += `(${numero.slice(0, 2)}) ${numero.slice(2, 5)}-${numero.slice(5, 10)}`;
    } else {
        numeroFormatado += `(${numero.slice(0, 2)})  ${numero.slice(2, 7)}-${numero.slice(7, 11)}`;
    }

    return numeroFormatado;
}