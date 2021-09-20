import'./node_modules/just-validate/dist/js/just-validate.js'

function criaEstados (){
let estados = ["Selecione seu estado","Acre (AC)","Alagoas (AL)","Amapá (AP)","Amazonas (AM)","Bahia (BA)","Ceará (CE)","Distrito Federal (DF)","Espírito Santo (ES)","Goiás (GO)","Maranhão (MA)","Mato Grosso (MT)","Mato Grosso do Sul (MS)","Minas Gerais (MG)","Pará (PA)","Paraíba (PB)","Paraná (PR)","Pernambuco (PE)","Piauí (PI)","Rio de Janeiro (RJ)","Rio Grande do Norte (RN)","Rio Grande do Sul (RS)","Rondônia (RO)","Roraima (RR)","Santa Catarina (SC)","São Paulo (SP)","Sergipe (SE)","Tocantins (TO)"];
let seletor = document.getElementById("dropdown-estado");
 for (let i=0; i < estados.length; i+=1){
    let opcoes = document.createElement('option');
    seletor.appendChild(opcoes).innerText= estados[i];
    seletor.appendChild(opcoes).value= estados[i];
 }
}

criaEstados();

new window.JustValidate('.js-form',{
    rules:{
        nome:{
            required:true,
            minLength: 40
            },
        },
    messages:{
        nome:{
            required: 'Campo obrigatório',
            minLength:'nome muito curto!'
            }
        }
});

// let botaoEnviar =document.getElementById('enviar');

// botaoEnviar.addEventListener("click", botaoSimples);

// function botaoSimples(event){
//     event.preventDefault();
// }

var picker = new Pikaday({
    field: document.getElementById('datepicker'),
    format: 'D MMM YYYY',
    onSelect: function() {
        console.log(this.getMoment().format('Do MMMM YYYY'));
    }
});

//let dataEmTexto = document.getElementById("date");
//let guardarData = document.getElementsByTagName('fieldset')[1]
// function criarTipoDeData(event){
//     event.preventDefault();

//     if(dataEmTexto.value.length < 10){
//         alert("a data está muito curta");
//     }
//     let regex = /^\d\d\/\d\d\/\d\d\d\d$/;
//     if(!regex.test(dataEmTexto.value)){
//         alert("data no formato inválido!");
//     }

//     let splitted = dataEmTexto.value.split('/');
//     let day = splitted[0];
//     let month = splitted[1];
//     let year = splitted[2];

//     if(day<0 || day >31){
//         alert("dia inválido!");
//     }

//     if(month<0 || month>12){
//         alert("mês inválido");
//     }

//     if(year<0){
//         alert("ano inválido!");
//     }

//}

   
