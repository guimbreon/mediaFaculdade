let users = localStorage.getItem("loggedUser")

function checkLogin(){
    let logged = localStorage.getItem("logged")
    if(users == null){
        document.getElementById("indivCalc").href = "logReg/logReg.html";
    }else if(users != null && logged){
        console.log("a")
    }
}

function principal(){
    checkLogin();
}

principal();