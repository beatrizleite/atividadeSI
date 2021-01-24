//Script para aparecer o botao de dar scroll para o topo
function irtopo() {
  document.documentElement.scrollTop = 0;
} 

window.onscroll = function() {
	baixo();
}

function baixo() {
  if (document.documentElement.scrollTop > 15) {
    document.getElementById("topo").style.display = "block";
  } else {
    document.getElementById("topo").style.display = "none";
  }
}

function multiplicacao(){
	var n1 = document.getElementById("n1").value;
	var n2 = document.getElementById("n2").value;
	var conta = n1 * n2;
	alert(conta);
}

function upperCase(){
	var texto = document.getElementById("texto").value.toUpperCase();
	alert(texto);
}

function modoDark() {
	var element = document.body;
	element.classList.toggle("dark-mode");
}
