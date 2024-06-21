/* CONSTANTES DE FORMULÁRIO */
const FORMULARIO_REGISTO = "frmReg";
const FORMULARIO_LOGIN = "frmLogin";

/* LOGIN */
const LOGIN_USERNAME = "username";
const LOGIN_SENHA = "senha";

/* REGISTO */
const REGISTO_USERNAME = "username";
const REGISTO_SENHA = "senha";

/* GUARDA OS USERS */
let users = JSON.parse(localStorage.getItem('users')) || [];
let formularioLogin;
let formularioRegisto;

function User(username, senha, email, faixaEtaria, genero) {
    this.username = username;
    this.senha = senha;
}

function principal() {
    formularioLogin = document.forms[FORMULARIO_LOGIN];
    formularioRegisto = document.forms[FORMULARIO_REGISTO];
}

function criaUser() {
    const username = formularioRegisto.elements[REGISTO_USERNAME].value;
    const senha = formularioRegisto.elements[REGISTO_SENHA].value;


    /* VERIFICAR SE O USER EXISTE */
    let existe = false;
    for (let user of users) {
        if (username == user.username) {
            window.alert("Username já está em uso!");
            formularioRegisto.reset();
            existe = true
            break; 
        }
    }
    if(!existe){ //se não existe
        const novoUser = new User(username, senha);

        users.push(novoUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert("User criado!")
    }
    formularioRegisto.reset();
}


function limparUsers() {
    users = []
    localStorage.setItem('users', JSON.stringify(users));
}

function fazerLogin() {
    const username = formularioLogin.elements[LOGIN_USERNAME].value;
    const senha = formularioLogin.elements[LOGIN_SENHA].value;
    let entrou = false; // Alterado para inicializar como false

    for (let user of users) {
        if (username == user.username && senha == user.senha) {
            entrou = true;
            break; // Não há necessidade de continuar o loop se já encontramos uma correspondência
        }
    }

    if (entrou) {
        localStorage.setItem('logged?', ["True", username])
        window.alert("Sessão iniciada!");
        if(urlParams.includes("notaGeral")){
            window.location.href = "../pag/calcTodo.html"

        }else if(urlParams.includes("notaCadeira")){
            window.location.href = "../pag/calcIndiv.html"
        }
    } else {
        window.alert("Nome de utilizador e Senha não correspondem!")
    }
    formularioLogin.reset();
}
