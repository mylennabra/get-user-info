let namea = document.getElementById('nameID');


function text(){
    document.querySelector("#s1").style.display = 'none';
    document.querySelector("#s2").style.display = 'block';
}

function text2(){
    let bg = document.querySelector(".html");
        bg.classList.remove('bgblack');
        bg.classList.add('bgred');
    document.querySelector("#s2").style.display = 'none';
    document.querySelector("#s3").style.display = 'block';
}

function check() {
    if(document.getElementById("nameID").value.length == ""){
        alert('Por favor, preencha o campo nome');
        document.getElementById("nameID").focus();
    }else{
        text();
    }
}

function check2() {
    if(document.getElementById("ageID").value.length == ""){
        alert('Por favor, preencha o campo idade');
        document.getElementById("ageID").focus();
    }else{
        text2();
    }
}

document.getElementById('btnid')
    .addEventListener('click', check)

document.getElementById('btnid2')
.addEventListener('click', check2)