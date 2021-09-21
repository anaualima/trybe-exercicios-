//import './node_modules/just-validate/dist/js/just-validate.js'



new window.JustValidate('.js-form', {
    rules:{
        name: {
            required: true,
            minlength: 3,
        },
        email: {
            required: true,
            minlength:20
        }
    },
    messages:{
        name:{
            required:'campo obrigatório',
            minlength: 'nome muito curto!'
        },
        email:{
            required:'campo obrigatório',
            minlength: 'email muito curto!'
        }
    }
});

var picker = new Pikaday({ field: document.getElementById('datepicker') });
var field = document.getElementById('datepicker');
var picker = new Pikaday({
    onSelect: function(date) {
        field.value = picker.toString();
    }
});
field.parentNode.insertBefore(picker.el, field.nextSibling);

// let botaoEnviar =document.getElementById('submit');

// botaoEnviar.addEventListener("click", alteraBotao)

// function alteraBotao (event){
//     event.preventDefault();
// }

//função data 17/09/21

// let dataEmTexto = document.getElementById("date");
// let guardarData = document.getElementsByTagName('fieldset')[1]
// let botaoEnviar =document.getElementById('submit');

// botaoEnviar.addEventListener("click", criarTipoDeData);

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

// }
