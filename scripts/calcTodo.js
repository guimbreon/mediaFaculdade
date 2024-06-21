let cadeiras = [];

function selectIfUsed(selecionada) {
    let where = document.getElementById("part1");
    let wherePart2 = document.getElementById("part2");
    let wheremedia = document.getElementById("media");
    let divMais = document.getElementById("mais")
    let salvar = document.getElementById("part2-salvar")

    /* COMMON RESETS */
        where.innerHTML = ""
        wherePart2.innerHTML = "";
        wheremedia.innerHTML = "";
        salvar.style = "display: none;"

    if (selecionada == "sim") {
        /*SPECIFIC RESET */
        divMais.style = "display: none;"
        cadeiras = []
        /*DIV FILE SEPARATOR */

        let divFile = document.createElement("div");
        divFile.id = "file";
        let inputFile = document.createElement("input");
        inputFile.type = "file";
        inputFile.id = "inputFile";
        let inputTitle = document.createElement("h2");
        inputTitle.innerHTML = "Envie o ficheiro aqui:";

        inputFile.addEventListener("change", function (event) {
            let file = event.target.files[0];
            if (file) {
                readFile(file);
                divMais.style = "display: inline;"
            }
        });

        divFile.appendChild(inputTitle);
        divFile.appendChild(inputFile);

        where.append(divFile);
        /*DIV FILE SEPARATOR */
    }else if(selecionada == "nao") {
        divMais.style = "display: inline;"
        salvar.style = "display: grid;"
        cadeiras = [[],[{Media:0}]]
    }else{
        divMais.style = ""
    }
}

function readFile(file) {
    let reader = new FileReader();
    let salvar = document.getElementById("part2-salvar")
    salvar.style = "display: grid;"

    reader.onload = function (event) {
        let data = new Uint8Array(event.target.result);
        let workbook = XLSX.read(data, { type: 'array' });

        // Get the first sheet name
        let sheetName = workbook.SheetNames[0];

        // Get the first sheet
        let sheet = workbook.Sheets[sheetName];

        // Convert sheet to JSON
        let jsonData = XLSX.utils.sheet_to_json(sheet);

        // Get the second sheet name
        let sheetName2 = workbook.SheetNames[1];

        // Get the second sheet
        let sheet2 = workbook.Sheets[sheetName2];

        // Convert sheet to JSON
        let jsonData2 = XLSX.utils.sheet_to_json(sheet2);
        
        constCadeira(jsonData, jsonData2)
        cadeiras.push(jsonData,jsonData2)

    };

    reader.onerror = function (event) {
        console.error('Error reading the file:', event);
    };

    reader.readAsArrayBuffer(file);

}

function constCadeira(jsonData, jsonData2){
    let where = document.getElementById("part2")
    let whereMedia = document.getElementById("media")
    let qntDivs = document.querySelectorAll("#part2 div");


    console.log(qntDivs)
    if(qntDivs.length > 0){
        where.innerHTML = ""
        whereMedia.innerHTML = ""

    }
    for(let element in jsonData){



        let subDiv = document.createElement("div")
        subDiv.id = "subpart2"

        /*TITULO */
        let divTitulo = document.createElement("div")
        divTitulo.id = "subpart2-Titulo"
        let titulo = document.createElement("h2")
        titulo.innerHTML = jsonData[element].Nome
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
    console.log(jsonData2[0])
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
    console.log(maisSem)

    if(isNaN(maisAno) == false && isNaN(maisNome) == true  && isNaN(maisSem) == false && isNaN(maisECTS) == false && isNaN(maisNota) == false){
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
        constCadeira(cadeiras[0],cadeiras[1]);
    }else{
        alert("(PREENCHER TODOS OS ESPAÇOS É OBRIGATÓRIO!)Está a inserir incorretamente os dados!\nEles deveriam ser da seguinte forma\n\nAno: Numero\nSemestre: Numero\nNome: Letras(com numeros se necessário)\nECTS: Numero\nNota: Numero")
    }
    maisForm.reset();


}

function getMedia(cadeiras){
    let sumECTS = 0;
    let sumNotaECTs = 0;
    for(let elem in cadeiras){
        sumNotaECTs += (cadeiras[elem].ECTS * cadeiras[elem].Nota);
        sumECTS += cadeiras[elem].ECTS;
        console.log(cadeiras[elem].ECTS)
    }
    console.log(sumECTS,sumNotaECTs)
    return (sumNotaECTs/sumECTS).toFixed(2)
}

function generatebeg() {
    let select = document.querySelector('select');

    select.addEventListener('change', function () {
        var selecionada = this.options[this.selectedIndex];
        console.log(selecionada.value);
        selectIfUsed(selecionada.value);
    });
}

generatebeg();


