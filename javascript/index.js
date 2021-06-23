//PAGINA DE CADASTRO

//FUNÇÃO PARA TRANSFORMAR OS CARACTERES EM MAIÚSCULO

function nomeUsuario() {
    var nome = document.getElementById('name_input').value;
    var nomeMaisculo = nome.toUpperCase();
    return nomeMaisculo;
}

function validaNome(e) {
    if (e.value == "" || e.value == " ") {
        document.getElementById('name_input').style.background = "#f6cacc"; // se for mais de 130 anos ou numero negativo o fundo fica vermelho pois está errado
    } else {
        document.getElementById('name_input').style.background = "none"; // se for mais de 130 anos ou numero negativo o fundo fica vermelho pois está errado
        return true;
    }
}

function anoNascimento() {
    let ano = document.getElementById('input_ano').value;
    let anoBoolean = validaAno(ano); //para validar o ano
    if (anoBoolean) {
        return ano;
    }
    return;
}
//FUNÇÃO QUE VALIDA SE A IDADE É MENOR QUE 130 E NÃO É UM NÚMERO NEGATIVO

function validaAno(ano) {

    if (ano.value <= 1890 || ano.value > 2021) { // calculo da idade
        document.getElementById('input_ano').style.background = "#f6cacc"; // se for mais de 130 anos ou numero negativo o fundo fica vermelho pois está errado
    }
}

function genero() {
    let genero = document.getElementById('genero_input').value; // usar essa função para poder retornar o valor quando for mostrar na tela. aplicada na ultima função
    return genero;
}

//VALIDADOR DE CPF

function VerificaCPF() {
    strCpf = document.getElementById('cpf_input').value;
    var soma = 0;
    var resto;

    if (strCpf == "00000000000" || strCpf.length != 11) {
        document.getElementById('cpf_input').style.background = "#f6cacc" // alterar background
        return false;
    }

    for (i = 1; i <= 9; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
    }

    resto = soma % 11;

    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }

    if (resto != parseInt(strCpf.substring(9, 10))) {
        document.getElementById('cpf_input').style.background = "#f6cacc" // alterar background
        return false;
    }

    soma = 0;

    for (i = 1; i <= 10; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
    }

    resto = soma % 11;

    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }

    if (resto != parseInt(strCpf.substring(10, 11))) {
        document.getElementById('cpf_input').style.background = "#f6cacc" // alterar background
        return false;
    }
    document.getElementById('cpf_input').style.background = "#E5EFFD"
    return true;
}

//VERIFICAÇÃO DO EMAIL

function validacaoEmail() {
    var field = document.getElementById('input_email');
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        document.getElementById('input_email').style.background = "#E5EFFD"
    } else {
        document.getElementById('input_email').style.background = "#f6cacc" // alterar background
    }

}

/* FUNÇÃO DO BOTAO ENVIAR
 Envia as informações do formulário para o parágrafo ao lado
*/

function blocoExibicao() {

    let nome = nomeUsuario();
    let email = document.getElementById('input_email');
    let idade = 2021 - (document.getElementById('input_ano').value);
    let cpf = document.getElementById('cpf_input');
    var select = document.getElementById('genero_input');
    let genero = select.options[select.selectedIndex];

    document.getElementById('logoCadastrar').style.display = 'none';

    document.getElementById('confirmacaoDados').innerHTML = `Olá ${nome} , seu login é ${email.value}, você tem ${idade} anos de idade e se define como uma pessoa do gênero ${genero.value} e pode usar ${cpf.value} como senha`

    document.getElementById('botaoContinuar').style.display = 'block';

}
// Botão Continuar
function continuar() {
    document.getElementById('cadastro').style.display = 'none';
    document.getElementById('quemSomos').style.display = 'block';
}