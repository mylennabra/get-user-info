// const getLocalStorage = () => JSON.parse(localStorage.getItem('name')) ?? []
// const setLocalStorage = (newInfo) => localStorage.setItem("name", JSON.stringify(newInfo))

// let newInfo{
//     name: Mylenna,
//     age: 30;
// }

function text(){document.getElementById('body').innerHTML = '<main class="content"><h1 class="text">Ok! Agora...</h1><form id="newInfo"><h2 class="text">Qual sua idade?</h2><input type="text" id="ageID"><button type="button" id="btnid2" class="btn"><img src="/logo.png" alt="logodobatman" height="100" class="logo"></button></form></main>'}


document.getElementById('btnid')
    .addEventListener('click', check)

function check() {
    if(document.getElementById("nameID").value.length == ""){
        alert('Por favor, preencha o campo nome');
        document.getElementById("nameID").focus();
    }
    text();
}

function check2() {
    if(document.getElementById("ageID").value.length == ""){
        alert('Por favor, preencha o campo nome');
        document.getElementById("ageID").focus();
    }
}

document.getElementById('btnid2')
    .addEventListener('click', check2)

