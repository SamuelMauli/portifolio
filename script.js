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

//Card projetos