let buttonSair = document.getElementById("sair")
let header = document.getElementsByTagName("header")
function verificarLogin(){
    urlParams = window.location.href;
    if(localStorage.getItem("logged?")[0] == "T" && urlParams.includes("index.html")){
        document.getElementById("indivCalc").href = "pag/calcIndiv.html";
        document.getElementById("calcTodo").href = "pag/calcTodo.html";
    }
    console.log("A")
    if(localStorage.getItem("logged?")[0] == "T"){
        buttonSair.style = "display: inline;"
        header[0].style = "grid-template-columns: 90% 10%;"

    }
    

    }
function unLogin(){
    localStorage.setItem("logged?", "False")
    buttonSair.style = "display: none;"
    if(urlParams.includes("index.html")){
        window.alert("Foste desconectado com sucesso!");
        
        location.reload();

    }else{
        window.alert("Vai ser redirecionado para a página principal!")
        window.location.href = "../index.html"
    }
    
}

verificarLogin()