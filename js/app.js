
function salvarCadastro(e){
e.preventDefault();

const nome = document.getElementById('nome').value;
localStorage.setItem('usuarioNome', nome);

window.location.href = 'index.html';
}

window.onload = function(){
const nome = localStorage.getItem('usuarioNome');
const area = document.getElementById('usuario-logado');

if(nome && area){
area.innerHTML = 'Olá, ' + nome;
}
}
