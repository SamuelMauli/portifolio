function writeTitle() {
  function activeWord(element) {
    const arrText = element.innerHTML.split('');
    element.innerHTML = '';
    arrText.forEach((letra, i) => {
      setTimeout(() => {
        element.innerHTML += letra;
      }, 100 * i); // Aumente o valor (150) para tornar a animação mais lenta
    });
  }

  const title = document.querySelector('.digitando');
  activeWord(title);
}

function ativacaoMenu() {
  // Sua implementação da função ativacaoMenu aqui
}

function loopFunctions() {
  writeTitle();
  ativacaoMenu();
}

// Chama as funções inicialmente
loopFunctions();

// Cria um loop que chama loopFunctions a cada X milissegundos (por exemplo, a cada 5000ms ou 5 segundos)
const intervalId = setInterval(loopFunctions, 4000); // Altere o valor para definir o intervalo desejado em milissegundos

// Para parar o loop, você pode usar clearInterval(intervalId)


const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


  
  writeTitle();
  
  ativacaoMenu()

  function sobreMim(){
      const experiencia = document.querySelectorAll('.experience_content div');
      const botao = document.querySelectorAll('.experience_content ul li')
      const education = document.querySelectorAll('.education_content div');
      const botaoEducation = document.querySelectorAll('.education_content ul li')
  
  
      experiencia[0].classList.add('ativo')
      botao[0].classList.add('ativo')
      education[0].classList.add('ativo')
      botaoEducation[0].classList.add('ativo')
  
      function slideShow(index){
          experiencia.forEach((divisao)=>{
              divisao.classList.remove('ativo');
          });
          botao.forEach((item)=>{
              item.classList.remove('ativo')
          });
          experiencia[index].classList.add('ativo')
          botao[index].classList.add('ativo')
      }
  
      function slideShow2(index){
          education.forEach((divisao)=>{
              divisao.classList.remove('ativo');
          });
          botaoEducation.forEach((item)=>{
              item.classList.remove('ativo')
          });
          education[index].classList.add('ativo')
          botaoEducation[index].classList.add('ativo')
      }
  
  
      botao.forEach((event,index)=>{
          event.addEventListener('click', ()=>{
              slideShow(index)
          });
      });
  
      botaoEducation.forEach((div, index)=>{
          div.addEventListener('click', ()=>{
              slideShow2(index)
          })
      })
  }
  sobreMim();
  
  
  
  
  const listaALL = document.querySelectorAll('.projects_armazenamento ul li');
  const buttonGeral = document.querySelectorAll('.project_navegacao li');
  const buttonALL = document.querySelector('.project_models .all');
  
  listaALL.forEach((item)=>{
      item.classList.add('ativo');
  })
  
  function removeClick(index){
      buttonGeral.forEach((item)=>{
          item.classList.remove('ativo');
      })
      buttonGeral[index].classList.add('ativo')
  }
  
  buttonGeral.forEach((event,index)=>{
      event.addEventListener('click', ()=>{
          removeClick(index)
      })
  })
  
  function showLista(lista, buttom = "all"){
      lista.forEach((item)=>{
          item.classList.remove('ativo');
      });
  
      if(buttom == 'design'){
          lista[0].classList.add('ativo')
          lista[1].classList.add('ativo')
      }
      if(buttom == 'graphic'){
          lista[2].classList.add('ativo');
          lista[3].classList.add('ativo');
      }
  
      if(buttom == 'website'){
          lista[4].classList.add('ativo');
          lista[5].classList.add('ativo');
          lista[6].classList.add('ativo');
          lista[7].classList.add('ativo');
      }
  
      if(buttom == 'all'){
          lista[0].classList.add('ativo')
          lista[1].classList.add('ativo')
          lista[2].classList.add('ativo');
          lista[3].classList.add('ativo');
          lista[4].classList.add('ativo');
          lista[5].classList.add('ativo');
          lista[6].classList.add('ativo');
          lista[7].classList.add('ativo');
      }
  }
  
  buttonGeral.forEach((item)=>{
      item.addEventListener('click', (e)=>{
          let currentButton = e.target;
          if(currentButton.classList.contains('all')){
              showLista(listaALL);
          } if(currentButton.classList.contains('design')){
              showLista(listaALL, "design")
          }
  
          if(currentButton.classList.contains('graphic')){
              showLista(listaALL, "graphic")
          }
  
          if(currentButton.classList.contains('website')){
              showLista(listaALL, "website")
          }
  
          if(currentButton.classList.contains('all')){
              showLista(listaALL, "all")
          }
      });
  });

  /* Formulário  */

  class FormSubmit {
    constructor(settings) {
      this.settings = settings;
      this.form = document.querySelector(settings.form);
      this.formButton = document.querySelector(settings.button);
      if (this.form) {
        this.url = this.form.getAttribute("action");
      }
      this.sendForm = this.sendForm.bind(this);
    }
  
    displaySuccess() {
      this.form.innerHTML = this.settings.success;
    }
  
    displayError() {
      this.form.innerHTML = this.settings.error;
    }
  
    getFormObject() {
      const formObject = {};
      const fields = this.form.querySelectorAll("[name]");
      fields.forEach((field) => {
        formObject[field.getAttribute("name")] = field.value;
      });
      return formObject;
    }
  
    onSubmission(event) {
      event.preventDefault();
      event.target.disabled = true;
      event.target.innerText = "Enviando...";
    }
  
    async sendForm(event) {
      try {
        this.onSubmission(event);
        await fetch(this.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(this.getFormObject()),
        });
        this.displaySuccess();
      } catch (error) {
        this.displayError();
        throw new Error(error);
      }
    }
  
    init() {
      if (this.form) this.formButton.addEventListener("click", this.sendForm);
      return this;
    }
  }
  
  const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem enviada!</h1>",
    error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
  });
  formSubmit.init();

  function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Adicione um evento de clique aos links da navegação
    document.addEventListener('DOMContentLoaded', function() {
        const links = document.querySelectorAll('.navegacao-primaria a');

        links.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault(); // Impede o comportamento padrão do link
                const targetSectionId = this.getAttribute('href').substring(1); // Obtém o ID da seção alvo
                scrollToSection(targetSectionId); // Chama a função de deslocamento suave
            });
        });
    });