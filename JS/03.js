
/*
function dom1(){
    document.getElementById("meuDiv").innerHTML = "Id do meuDiv"; //Pega o elemento pelo ID
    document.getElementsByClassName("destaque-vermelho").innerHTML = "ligado pela class"; //Pega o elemento pela Classe
    a = document.getElementsByTagName("p"); // Pega o elemento pela tag
    document.querySelector(".destaque-vermelho").style.color = "red"; // Pega o primeiro elemento css com o nome passado
    a[2].innerHTML = "Oi rsrs"
}*/
function dom1(){
    document.getElementById("meuId").innerHTML = "Id do exemplo"; //Pega o elemento pelo ID
    document.getElementsByClassName("destaque-vermelho").innerHTML = "Hello World!"; //Pega o elemento pela Classe
    torta = document.getElementsByTagName("p"); // Pega o elemento pela tag
    document.querySelector(".destaque-vermelho").style.color = "red"; // Pega o primeiro elemento css com o nome passado
    torta[2].innerHTML = "muito bom"
}

function dom2() {
    b = document.querySelectorAll(".torta"); // Pega todos os elementos css com o nome passado
    for (var i = 0; i < 2 && i < elementosTorta.length; i++) {
        elementosTorta[i].style.color = "blue";
    }
}
