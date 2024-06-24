let cadeiras = [];
let users = JSON.parse(localStorage.getItem('users')) || [];
let loggedUser = localStorage.getItem("logged?").split(",");
loggedUser = loggedUser[1]
let loggedObject
for (let user of users) {
    if (loggedUser == user.username) {
        loggedObject = user
        console.log(loggedObject)
    }
}
function selectIfUsed(selecionada) {


}

function constCadeira(jsonData, jsonData2){
    let where = document.getElementById("part2")
    let whereMedia = document.getElementById("media")
    let qntDivs = document.querySelectorAll("#part2 div");


        where.innerHTML = ""
        whereMedia.innerHTML = ""

    for(let element in jsonData){



        let subDiv = document.createElement("div")
        subDiv.id = "subpart2"

        /*TITULO e Botão remover*/
        let divTitulo = document.createElement("div")
        divTitulo.id = "subpart2-Titulo"
        let titulo = document.createElement("h2")
        titulo.innerHTML = jsonData[element].Nome

        let xBotao = document.createElement("img")
        xBotao.src = "../images/close.png"
        xBotao.alt = jsonData[element].Nome
        xBotao.onclick = function (){removerItem(xBotao.alt)}


        divTitulo.appendChild(xBotao)
        divTitulo.appendChild(titulo)
        subDiv.appendChild(divTitulo)


        /*Ano*/
        let divAno = document.createElement("div")
        let titAno = document.createElement("h3")
        titAno.innerHTML = "Ano"
        let dataAno = document.createElement("p")
        dataAno.innerHTML = jsonData[element].Ano
        divAno.appendChild(titAno)
        divAno.appendChild(dataAno)
        divAno.id = "subpart2-Ano"
        subDiv.appendChild(divAno)

        /*Semestre */
        let divSemestre = document.createElement("div")
        let titSemestre = document.createElement("h3")
        titSemestre.innerHTML = "Semestre"
        let dataSemestre = document.createElement("p")
        dataSemestre.innerHTML = jsonData[element].Semestre
        divSemestre.appendChild(titSemestre)
        divSemestre.appendChild(dataSemestre)
        divSemestre.id = "subpart2-Semestre"
        subDiv.appendChild(divSemestre)

        /*Nota */
        let divNota = document.createElement("div")
        let titNota = document.createElement("h3")
        titNota.innerHTML = "Nota"
        let dataNota = document.createElement("p")
        dataNota.innerHTML = jsonData[element].Nota
        divNota.appendChild(titNota)
        divNota.appendChild(dataNota)
        divNota.id = "subpart2-Nota"
        subDiv.appendChild(divNota)

        /*ECTS */
        let divECTS = document.createElement("div")
        let titECTS = document.createElement("h3")
        titECTS.innerHTML = "ECTS"
        let dataECTS = document.createElement("p")
        dataECTS.innerHTML = jsonData[element].ECTS
        divECTS.appendChild(titECTS)
        divECTS.appendChild(dataECTS)
        divECTS.id = "subpart2-ECTS"
        subDiv.appendChild(divECTS)


        where.appendChild(subDiv)   
    }

    /* MÉDIA ATUAL*/
    let divMedia = document.createElement("div")
    let titMedia = document.createElement("h3")
    titMedia.innerHTML = "Media"
    let dataMedia = document.createElement("p")
    dataMedia.innerHTML = jsonData2[0].Media
    divMedia.appendChild(titMedia)
    divMedia.appendChild(dataMedia)
    divMedia.id = "divMedia"
    whereMedia.appendChild(divMedia)



}

function saveButton(){
    // Cria um novo livro do Excel
    newXLSX = XLSX.utils.book_new();

    // Converte os dados JSON para planilhas do Excel
    dados1 = XLSX.utils.json_to_sheet(cadeiras[0]);
    dados2 = XLSX.utils.json_to_sheet(cadeiras[1]);

    // Adiciona as planilhas ao livro
    XLSX.utils.book_append_sheet(newXLSX, dados1, "Notas");
    XLSX.utils.book_append_sheet(newXLSX, dados2, "Media");
    
    // Escreve o livro do Excel em um arquivo
    XLSX.writeFile(newXLSX, "planilha.xlsx");
}



function readMaisAvals(){
    let maisForm = document.forms["frmMaisAvals"]
    let maisNome = maisForm.elements["maisNome"].value;
    let maisAno = maisForm.elements["maisAno"].value;
    let maisSem = maisForm.elements["maisSem"].value;
    let maisECTS = maisForm.elements["maisECTS"].value;
    let maisNota = maisForm.elements["maisNota"].value;

    let correctTypes;
    console.log(isNaN(maisECTS), maisECTS)
    if(isNaN(parseInt(maisAno)) == false && isNaN(parseInt(maisNome)) == true  && isNaN(parseInt(maisSem)) == false && isNaN(parseInt(maisECTS)) == false && isNaN(parseInt(maisNota)) == false){
        correctTypes = true;
    }else{
        correctTypes = false;
    }
    if(correctTypes){
        let cadeiraNova = {
            Ano: parseInt(maisAno),
            Semestre: parseInt(maisSem),
            Nome: maisNome,
            ECTS: parseInt(maisECTS),
            Nota: parseInt(maisNota)
        }
        cadeiras[0].push(cadeiraNova);
    
        cadeiras[1][0].Media = getMedia(cadeiras[0])
        
        loggedObject.cadeiras = cadeiras

        let indexUser = cadeiras[0].indexOf(loggedObject)
        users.splice(indexUser, 1)
        users.push(loggedObject)
        localStorage.setItem('users', JSON.stringify(users));
        constCadeira(cadeiras[0],cadeiras[1]);
    }else{
        alert("(PREENCHER TODOS OS ESPAÇOS É OBRIGATÓRIO!)Está a inserir incorretamente os dados!\nEles deveriam ser da seguinte forma\n\nAno: Numero\nSemestre: Numero\nNome: Letras(com numeros se necessário)\nECTS: Numero\nNota: Numero")
    }
    maisForm.reset();


}
function removerItem(removeNome){

    cadeiras[0].forEach( function myFunction(elem){
        if(elem.Nome == removeNome){
            let index = cadeiras[0].indexOf(elem)
            cadeiras[0].splice(index, 1); 
        }
        
    });



    cadeiras[1][0].Media = getMedia(cadeiras[0])

    
    loggedObject.cadeiras = cadeiras

    let indexUser = cadeiras[0].indexOf(loggedObject)
    users.splice(indexUser, 1)
    users.push(loggedObject)
    localStorage.setItem('users', JSON.stringify(users));
    constCadeira(cadeiras[0],cadeiras[1]);



}

function getMedia(cadeiras){
    let sumECTS = 0;
    let sumNotaECTs = 0;
    for(let elem in cadeiras){
        sumNotaECTs += (cadeiras[elem].ECTS * cadeiras[elem].Nota);
        sumECTS += cadeiras[elem].ECTS;
    }
    return (sumNotaECTs/sumECTS).toFixed(2)
}

function generatebeg() {

    let divOperations = document.getElementById("operations")
    divOperations.style = "display: inline;"
    cadeiras = loggedObject.cadeiras
    let salvar = document.getElementById("part2-salvar")
    salvar.style = "display: grid;"
    constCadeira(cadeiras[0], cadeiras[1])
}

generatebeg();


