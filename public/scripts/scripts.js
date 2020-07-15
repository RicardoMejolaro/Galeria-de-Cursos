//selecionando todos os cards 
const cards = document.querySelectorAll('.card');
//Percorrendo os cards
for (const card of cards) {
  //Escutando o evento de click no card
  card.addEventListener('click', () => {
  //Pegando o atributo id do card 
  const id = card.getAttribute('id');
  //Redirecionando para a página de exibição dos detalhes
  window.location.href = `/${id}`
  });
}
