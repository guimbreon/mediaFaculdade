const QNT_AVALS = "frmQntAvals";
const VALUEFORM = "Valor"
const PERCFORM = "Perc"
const FORM = "Form"
const formularioLogin = document.forms[QNT_AVALS];


function finalGradeField(){
    let where = document.getElementById("finalGrade")

    let titulo = document.createElement("h2")
    titulo.innerHTML = "Nota Final:"

    let nota = document.createElement("p")
    nota.innerHTML = "Preenche tudo e clica em Submeter!"
    nota.id = "lastGrade"

    
    let button = document.createElement("button");
    button.innerHTML = "Submeter";
    button.onclick = function() { calcGrade(); };
    
    where.appendChild(button);
    

    where.appendChild(titulo);
    where.appendChild(nota);
}

function generateFields() {
    
    let nota = document.getElementById("finalGrade")
    let notaEscrito = document.getElementById("lastGrade")
    let where = document.getElementById("part1");
    let qntFields = formularioLogin.elements["qntAval"].value;
    
    let qntNow = 1;

    
    let qntAvalsNow = document.querySelectorAll("#part1 div");
    
    console.log(!isNaN(qntFields))
    if (qntAvalsNow.length != 0 && !isNaN(qntFields)){ /*Eliminar a quantidade de partes usadas anteriormente*/
        where.innerHTML = ""
        notaEscrito.innerHTML = "Preenche tudo e clica em Submeter!"
    }else if(!isNaN(qntFields)){
        nota.innerHTML = ""
        finalGradeField()
    }

    if(isNaN(qntFields)){
        window.alert("Lembra-te de colocar um número em 'Quantas partes de avaliação tens?'")
    }


    while (qntNow <= qntFields) {
        let div = document.createElement("div");
        div.id = "subDiv" + qntNow;
        div.className = "subDiv"
        let titulo = document.createElement("h2");
        titulo.innerHTML = "Avaliação nº" + qntNow;
        
        let form = document.createElement("form")
        form.id = "Form" + qntNow
        
        let fieldset = document.createElement("fieldset")
        let inputPerc = document.createElement("input")
        inputPerc.id = "Perc" + qntNow
        inputPerc.type = "number"
        inputPerc.name = "Perc" + qntNow
        let percLabel = document.createElement("label")
        percLabel.for = "Perc" + qntNow
        percLabel.innerHTML = "%"


        let inputValor = document.createElement("input")
        inputValor.id = "Valor" + qntNow
        inputValor.type = "number"
        inputValor.name = "Valor" + qntNow
        let valorLabel = document.createElement("label")
        valorLabel.for = "Valor" + qntNow
        valorLabel.innerHTML = "Nota"

        fieldset.append(valorLabel);
        fieldset.appendChild(inputValor);
        
        fieldset.append(percLabel);
        fieldset.append(inputPerc);
        form.appendChild(fieldset)

        div.appendChild(titulo);
        div.appendChild(form);


        where.appendChild(div);
        qntNow++;
    }

}

function calcGrade(){
    let qntAvalsNow = document.querySelectorAll("#part1 div");
    let form;
    let sum = 0;
    let totalPerc = 0;
    let formPerc;
    let formValue;
    let nmrNow = 1
    do{
        form = document.forms[FORM + nmrNow]
        formValue = parseFloat(form.elements[VALUEFORM + nmrNow].value)
        formPerc = parseFloat(form.elements[PERCFORM + nmrNow].value)
        totalPerc += formPerc
        sum += (formValue * formPerc)  
        nmrNow++;
    }while(nmrNow <= qntAvalsNow.length)
    sum = sum/100
    let nota = document.getElementById("lastGrade")
    
    if(isNaN(sum)){/* Se a soma não for um numero, algum campo ficou em falta! */
        nota.innerHTML = "Não te esqueças de preencher todos os campos!"
    }else if(totalPerc != 100){
        nota.innerHTML ="Verifica novamente as percentages, a soma das mesmas não está a dar 100%, está apenas em: " + totalPerc + " %." 
    }else{
        nota.innerHTML = "A tua nota final será " + sum
    }
    
    
}

function generatebeg(){
    document.addEventListener('DOMContentLoaded', (event) => {
        const form = document.getElementById('frmQntAvals');
        const input = document.getElementById('qntAval');
    
        form.addEventListener('submit', function(e) {
            e.preventDefault();
        });
    
    });
}
generatebeg()