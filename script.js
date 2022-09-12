const botao = document.getElementById('switch')

const html = document.querySelector('html')

botao.addEventListener('click', function() {
  html.classList.toggle('light-mode')
 })

 const botaoCadastrar = document.getElementById('btnCadastro')

 botaoCadastrar.addEventListener('click', function() {
  alert('Usuário cadastrado')
  return
 })