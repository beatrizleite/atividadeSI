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
