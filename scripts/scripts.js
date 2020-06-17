//Selecionando o modal overlay
const modalOverlay = document.querySelector(".modal-overlay");
//Selecionando o modal
const modal = document.querySelector('.modal');
//selecionando todos os cards 
const cards = document.querySelectorAll('.card');
//Percorrendo os cards
for (const card of cards) {
  //Escutando o evento de click no card
  card.addEventListener('click', () => {
  //Pegando o atributo id do card 
  const id = card.getAttribute('id');
  //Ao escutar o evento de click, incluindo a classe active que mostra o modal em tela
  modalOverlay.classList.add('active');
  //Adicionando o src no iframe da página com o id dinâmico que foi pego acima ->
  modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${id}`;
  });
}

//Selecionando o "botão X" do close modal e escutando o evento de click sobre ele
document.querySelector('.close-modal').addEventListener('click', () => {
  //Ao escutar o evento de click, retira a classe active que mostra o modal em tela e assim escode o modal
  modalOverlay.classList.remove('active');
  //Retiranto o src no iframe da página, ao fechar o modal para que o video encerre
  modalOverlay.querySelector('iframe').src = "";
  modal.classList.remove('maximize');
});

//Selecionando o "botão D maximizar" do maximiza modal e escutando o evento de click sobre ele
document.querySelector('.maximize-modal').addEventListener('click', () => {
  //Verifica se já contém a classe e se não inclui a classe e maximiza
  const contain = modal.classList.contains('maximize');
  if(!contain) {
    //Ao escutar o evento de click, inclui a classe maximize que aumenta o modal em tela se
    //passou nas verificações
    modal.classList.add('maximize');
  }
});

//Selecionando o "botão - minimizar" do minimiza modal e escutando o evento de click sobre ele
document.querySelector('.minimize-modal').addEventListener('click', () => {
  //Verifica se já contém a classe e se não inclui a classe e maximiza
  const contain = modal.classList.contains('maximize');
  if(contain) {
    //Ao escutar o evento de click, retira a classe maximize e minimiza o modal em tela se
    //passou nas verificações
    modal.classList.remove('maximize');
  }
})
