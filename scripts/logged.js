let buttonSair = document.getElementById("sair");
let header = document.getElementsByTagName("header");


let urlParams2 = window.location.href;
if(!urlParams2.includes("calcTodo.html")){
    console.log("a")
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let loggedUser = localStorage.getItem("logged?").split(",");
    loggedUser = loggedUser[1]
    let loggedObject    
    for (let user of users) {
        if (loggedUser == user.username) {
            console.log("Ss")
            loggedObject = user
        }
    }

}

function verificarLogin(){
    if(localStorage.getItem("logged?")[0] == "T" && urlParams2.includes("index.html")){  
        document.getElementById("indivCalc").onclick = function() {redirectToPage('pag/calcIndiv.html','Logged')}
        document.getElementById("calcTodo").onclick= function() {redirectToPage('pag/calcTodo.html','Logged')}
    }
    if(localStorage.getItem("logged?")[0] == "T"){
        if(!urlParams2.includes("logReg.html")){
            buttonSair.style = "display: inline;"

        }

        header[0].style = "grid-template-columns: 90% 10%;"

    }
    

    }
function unLogin(){
    localStorage.setItem("logged?", "False")
    buttonSair.style = "display: none;"
    if(urlParams2.includes("index.html")){
        window.alert("Foste desconectado com sucesso!");
        
        location.reload();

    }else{
        window.alert("Vai ser redirecionado para a página principal!")
        window.location.href = "../index.html"
    }
    
}

verificarLogin()