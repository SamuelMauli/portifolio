// ===== MAIN JAVASCRIPT FILE =====

// Dicionário de Traduções
const translations = {
    pt: {
        loadingMessage: 'Inicializando sistema...',
        navHome: 'Início',
        navAbout: 'Sobre',
        navExperience: 'Experiência',
        navProjects: 'Projetos',
        navSkills: 'Skills',
        navContact: 'Contato',
        navCurriculum: 'Currículo',
        heroTitleLine: 'Olá, eu sou',
        heroRole: 'Desenvolvedor Full Stack,Especialista em IA,Arquiteto de Soluções,Inovador Tecnológico',
        heroDescription: 'Transformando ideias em soluções tecnológicas inovadoras. Especializado em <span class="highlight">Fintech</span>, <span class="highlight">Martech</span> e <span class="highlight">Inteligência Artificial</span>.',
        heroBtnProjects: 'Ver Projetos',
        heroBtnContact: 'Contato',
        heroScroll: 'Scroll para explorar',
        aboutTitle: 'Sobre Mim',
        aboutSubtitle: 'Desenvolvedor Full Stack',
        aboutDesc1: 'Sou Samuel Mauli, desenvolvedor apaixonado por tecnologia e inovação. Atualmente trabalho no <strong>Grupo Negócios Públicos</strong> como Desenvolvedor Full Stack, mergulhando nos desafios dos mercados de <strong>Fintech</strong> e <strong>Martech</strong>.',
        aboutDesc2: 'Minha jornada inclui o desenvolvimento de sistemas complexos, desde sistemas de gestão comercial até integrações seguras com instituições bancárias. A projetos complexos de <strong>inteligência artificial</strong> e <strong>visão computacional</strong>. Tenho experiência com diversas tecnologias, incluindo <strong>Laravel</strong>, <strong>Python</strong> e <strong>React</strong>.',
        aboutDesc3: 'Tive diversas oportunidades em projetos internacionais, aprimorando minhas habilidades técnicas e de comunicação. Estou sempre em busca de novos desafios e oportunidades para crescer e contribuir com soluções inovadoras.',
        aboutStat1: 'Anos de Experiência',
        aboutStat2: 'Projetos Concluídos',
        aboutStat3: 'Tecnologias',
        experienceTitle: 'Experiência Profissional',
        exp1Title: 'Full Stack Developer',
        exp1Period: 'Jul 2025 - o momento',
        exp1Desc: 'Atuação nos mercados de Martech e Fintech, desenvolvendo sistemas complexos, desde plataformas de gestão comercial até integrações seguras para processamento de pagamentos. Destaque para a criação de um sistema de Active Directory customizado para controle de acesso granular.',
        exp2Title: 'Java Developer',
        exp2Period: 'Ago 2024 - Jul 2025',
        exp2Desc: 'Foco em soluções escaláveis, automação e IA. Desenvolvi uma plataforma fiscal completa com Laravel, automatizei processos manuais com Python e criei duas ferramentas de IA (Ballesol CareAI e BlauSight) utilizando Flask, React, TensorFlow e PyTorch em ambiente AWS.',
        exp3Title: 'Agente de Suporte de TI',
        exp3Period: 'Dez 2023 - Jul 2024',
        exp3Desc: 'Suporte técnico para a International Meal Company (IMC), administrando o backlog, gerenciando demandas e aplicando as melhores práticas da ITIL. Atuei na comunicação direta com fornecedores para resolver questões técnicas complexas.',
        exp4Title: 'Technical Consultant',
        exp4Period: 'Mar 2023 - Ago 2023',
        exp4Desc: 'Atuei em projetos nacionais e internacionais de implementação Oracle, desenvolvendo integrações e aplicativos com Oracle Integration Cloud (OIC) e criando relatórios com Oracle BI Publisher.',
        exp5Title: 'Técnico de Suporte N1',
        exp5Period: 'Ago 2022 - Mar 2023',
        exp5Desc: 'Forneci suporte técnico inicial à Prefeitura de Curitiba, resolvendo problemas de software e hardware, colaborando com equipes de infraestrutura e NOC para garantir soluções rápidas e eficazes.',
        projectsTitle: 'Projetos em Destaque',
        projFilterAll: 'Todos',
        projFilterAi: 'IA/ML',
        projFilterWeb: 'Web',
        projFilterSystem: 'Sistemas',
        proj1Title: 'Quimera - Chess AI',
        proj1Desc: 'Modelo de IA para xadrez com dupla habilidade e modelagem preditiva do oponente. Algoritmos avançados de machine learning.',
        proj2Desc: 'Sistema de visão computacional avançado para análise e processamento de imagens em tempo real com aplicações em IA.',
        proj3Desc: 'Plataforma de acessibilidade para tradução e interpretação de Libras usando inteligência artificial e visão computacional.',
        proj4Desc: 'Sistema inteligente de gerenciamento empresarial com IA para otimização de processos e tomada de decisões automatizada.',
        proj5Title: 'Sistema Active Directory Customizado',
        proj5Desc: 'Sistema de controle de acesso granular e centralizado desenvolvido para resolver necessidades críticas de segurança empresarial.',
        proj6Desc: 'Projeto educacional inspirado no LavaRand da Cloudflare para geração de entropia criptográfica usando imagens aleatórias.',
        skillsTitle: 'Habilidades Técnicas',
        skillsCat3: 'IA/ML & Dados',
        skillsCat4: 'DevOps & Ferramentas',
        contactTitle: 'Vamos Conversar?',
        contactSubtitle: 'Entre em Contato',
        contactDesc: 'Estou sempre aberto a novas oportunidades e projetos interessantes. Vamos criar algo incrível juntos!',
        contactPhone: 'Telefone',
        formName: 'Nome',
        formSubject: 'Assunto',
        formMessage: 'Mensagem',
        formSubmit: 'Enviar Mensagem',
        footerText: '&copy; 2025 Samuel Mauli. Desenvolvido com 💙 e muito ☕'
    },
    en: {
        loadingMessage: 'Initializing system...',
        navHome: 'Home',
        navAbout: 'About',
        navExperience: 'Experience',
        navProjects: 'Projects',
        navSkills: 'Skills',
        navContact: 'Contact',
        navCurriculum: 'Resume',
        heroTitleLine: "Hi, I'm",
        heroRole: 'Full Stack Developer,AI Specialist,Solutions Architect,Tech Innovator',
        heroDescription: 'Transforming ideas into innovative technological solutions. Specializing in <span class="highlight">Fintech</span>, <span class="highlight">Martech</span>, and <span class="highlight">Artificial Intelligence</span>.',
        heroBtnProjects: 'View Projects',
        heroBtnContact: 'Contact',
        heroScroll: 'Scroll to explore',
        aboutTitle: 'About Me',
        aboutSubtitle: 'Full Stack Developer',
        aboutDesc1: "I'm Samuel Mauli, a developer passionate about technology and innovation. I currently work at <strong>Grupo Negócios Públicos</strong> as a Full Stack Developer, diving into the challenges of the <strong>Fintech</strong> and <strong>Martech</strong> markets.",
        aboutDesc2: 'My journey includes developing complex systems, from commercial management systems to secure integrations with banking institutions and complex <strong>artificial intelligence</strong> and <strong>computer vision</strong> projects. I have experience with various technologies, including <strong>Laravel</strong>, <strong>Python</strong>, and <strong>React</strong>.',
        aboutDesc3: 'I have had several opportunities in international projects, enhancing my technical and communication skills. I am always looking for new challenges and opportunities to grow and contribute with innovative solutions.',
        aboutStat1: 'Years of Experience',
        aboutStat2: 'Projects Completed',
        aboutStat3: 'Technologies',
        experienceTitle: 'Professional Experience',
        exp1Title: 'Full Stack Developer',
        exp1Period: 'Jul 2025 - Present',
        exp1Desc: 'Working in the Martech and Fintech markets, developing complex systems, from commercial management platforms to secure integrations for payment processing. A highlight is the creation of a custom Active Directory system for granular access control.',
        exp2Title: 'Java Developer',
        exp2Period: 'Aug 2024 - Jul 2025',
        exp2Desc: 'Focused on scalable solutions, automation, and AI. I developed a complete fiscal platform with Laravel, automated manual processes with Python, and created two AI tools (Ballesol CareAI and BlauSight) using Flask, React, TensorFlow, and PyTorch in an AWS environment.',
        exp3Title: 'IT Support Agent',
        exp3Period: 'Dec 2023 - Jul 2024',
        exp3Desc: 'Provided technical support for the International Meal Company (IMC), managing the backlog, handling demands, and applying ITIL best practices. I was directly involved in communicating with suppliers to resolve complex technical issues.',
        exp4Title: 'Technical Consultant',
        exp4Period: 'Mar 2023 - Aug 2023',
        exp4Desc: 'I worked on national and international Oracle implementation projects, developing integrations and applications with Oracle Integration Cloud (OIC) and creating reports with Oracle BI Publisher.',
        exp5Title: 'N1 Support Technician',
        exp5Period: 'Aug 2022 - Mar 2023',
        exp5Desc: 'Provided initial technical support to the Curitiba City Hall, resolving software and hardware issues, and collaborating with infrastructure and NOC teams to ensure quick and effective solutions.',
        projectsTitle: 'Featured Projects',
        projFilterAll: 'All',
        projFilterAi: 'AI/ML',
        projFilterWeb: 'Web',
        projFilterSystem: 'Systems',
        proj1Title: 'Quimera - Chess AI',
        proj1Desc: 'AI model for chess with dual abilities and opponent predictive modeling. Advanced machine learning algorithms.',
        proj2Desc: 'Advanced computer vision system for real-time image analysis and processing with AI applications.',
        proj3Desc: 'Accessibility platform for translating and interpreting Brazilian Sign Language (Libras) using artificial intelligence and computer vision.',
        proj4Desc: 'Intelligent business management system with AI for process optimization and automated decision-making.',
        proj5Title: 'Custom Active Directory System',
        proj5Desc: 'A granular and centralized access control system developed to address critical enterprise security needs.',
        proj6Desc: 'Educational project inspired by Cloudflare\'s LavaRand for generating cryptographic entropy using random images.',
        skillsTitle: 'Technical Skills',
        skillsCat3: 'AI/ML & Data',
        skillsCat4: 'DevOps & Tools',
        contactTitle: "Let's Talk?",
        contactSubtitle: 'Get in Touch',
        contactDesc: "I'm always open to new opportunities and interesting projects. Let's create something amazing together!",
        contactPhone: 'Phone',
        formName: 'Name',
        formSubject: 'Subject',
        formMessage: 'Message',
        formSubmit: 'Send Message',
        footerText: '&copy; 2025 Samuel Mauli. Developed with 💙 and lots of ☕'
    },
    es: {
        loadingMessage: 'Inicializando sistema...',
        navHome: 'Inicio',
        navAbout: 'Yo',
        navExperience: 'Bagaje',
        navProjects: 'Proyectos',
        navSkills: 'Habilidades',
        navContact: 'Contacto',
        navCurriculum: 'CV',
        heroTitleLine: 'Hola, soy',
        heroRole: 'Desarrollador Full Stack,Especialista en IA,Arquitecto de Soluciones,Innovador Tecnológico',
        heroDescription: 'Transformando ideas en soluciones tecnológicas innovadoras. Especializado en <span class="highlight">Fintech</span>, <span class="highlight">Martech</span> e <span class="highlight">Inteligencia Artificial</span>.',
        heroBtnProjects: 'Ver Proyectos',
        heroBtnContact: 'Contacto',
        heroScroll: 'Desliza para explorar',
        aboutTitle: 'Sobre Mí',
        aboutSubtitle: 'Desarrollador Full Stack',
        aboutDesc1: 'Soy Samuel Mauli, un desarrollador apasionado por la tecnología y la innovación. Actualmente trabajo en <strong>Grupo Negócios Públicos</strong> como Desarrollador Full Stack, sumergiéndome en los desafíos de los mercados <strong>Fintech</strong> y <strong>Martech</strong>.',
        aboutDesc2: 'Mi trayectoria incluye el desarrollo de sistemas complejos, desde sistemas de gestión comercial hasta integraciones seguras con instituciones bancarias y proyectos complejos de <strong>inteligencia artificial</strong> y <strong>visión por computadora</strong>. Tengo experiencia con diversas tecnologías, incluyendo <strong>Laravel</strong>, <strong>Python</strong> y <strong>React</strong>.',
        aboutDesc3: 'He tenido varias oportunidades en proyectos internacionales, mejorando mis habilidades técnicas y de comunicación. Siempre estoy en busca de nuevos desafíos y oportunidades para crecer y contribuir con soluciones innovadoras.',
        aboutStat1: 'Años de Experiencia',
        aboutStat2: 'Proyectos Completados',
        aboutStat3: 'Tecnologías',
        experienceTitle: 'Experiencia Profesional',
        exp1Title: 'Desarrollador Full Stack',
        exp1Period: 'Jul 2025 - Actualidad',
        exp1Desc: 'Actuación en los mercados de Martech y Fintech, desarrollando sistemas complejos, desde plataformas de gestión comercial hasta integraciones seguras para el procesamiento de pagos. Destaca la creación de un sistema de Active Directory personalizado para un control de acceso granular.',
        exp2Title: 'Desarrollador Java',
        exp2Period: 'Ago 2024 - Jul 2025',
        exp2Desc: 'Enfoque en soluciones escalables, automatización e IA. Desarrollé una plataforma fiscal completa con Laravel, automaticé procesos manuales con Python y creé dos herramientas de IA (Ballesol CareAI y BlauSight) utilizando Flask, React, TensorFlow y PyTorch en un entorno de AWS.',
        exp3Title: 'Agente de Soporte de TI',
        exp3Period: 'Dic 2023 - Jul 2024',
        exp3Desc: 'Soporte técnico para International Meal Company (IMC), administrando el backlog, gestionando demandas y aplicando las mejores prácticas de ITIL. Actué en la comunicación directa con proveedores para resolver problemas técnicos complejos.',
        exp4Title: 'Consultor Técnico',
        exp4Period: 'Mar 2023 - Ago 2023',
        exp4Desc: 'Trabajé en proyectos nacionales e internacionales de implementación de Oracle, desarrollando integraciones y aplicaciones con Oracle Integration Cloud (OIC) y creando informes con Oracle BI Publisher.',
        exp5Title: 'Técnico de Soporte N1',
        exp5Period: 'Ago 2022 - Mar 2023',
        exp5Desc: 'Proporcioné soporte técnico inicial al Ayuntamiento de Curitiba, resolviendo problemas de software y hardware, y colaborando con equipos de infraestructura y NOC para garantizar soluciones rápidas y eficaces.',
        projectsTitle: 'Proyectos Destacados',
        projFilterAll: 'Todos',
        projFilterAi: 'IA/ML',
        projFilterWeb: 'Web',
        projFilterSystem: 'Sistemas',
        proj1Title: 'Quimera - IA de Ajedrez',
        proj1Desc: 'Modelo de IA para ajedrez con doble habilidad y modelado predictivo del oponente. Algoritmos avanzados de machine learning.',
        proj2Desc: 'Sistema avanzado de visión por computadora para el análisis y procesamiento de imágenes en tiempo real con aplicaciones de IA.',
        proj3Desc: 'Plataforma de accesibilidad para la traducción e interpretación de la Lengua de Señas Brasileña (Libras) utilizando inteligencia artificial y visión por computadora.',
        proj4Desc: 'Sistema inteligente de gestión empresarial con IA para la optimización de procesos y la toma de decisiones automatizada.',
        proj5Title: 'Sistema Active Directory Personalizado',
        proj5Desc: 'Un sistema de control de acceso granular y centralizado desarrollado para abordar necesidades críticas de seguridad empresarial.',
        proj6Desc: 'Proyecto educativo inspirado en LavaRand de Cloudflare para la generación de entropía criptográfica utilizando imágenes aleatorias.',
        skillsTitle: 'Habilidades Técnicas',
        skillsCat3: 'IA/ML & Datos',
        skillsCat4: 'DevOps & Herramientas',
        contactTitle: '¿Hablamos?',
        contactSubtitle: 'Ponte en Contacto',
        contactDesc: 'Siempre estoy abierto a nuevas oportunidades y proyectos interesantes. ¡Creemos algo increíble juntos!',
        contactPhone: 'Teléfono',
        formName: 'Nombre',
        formSubject: 'Asunto',
        formMessage: 'Mensaje',
        formSubmit: 'Enviar Mensaje',
        footerText: '&copy; 2025 Samuel Mauli. Desarrollado con 💙 y mucho ☕'
    }
};

const setLanguage = (lang) => {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Atualiza o efeito de digitação
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        typingElement.setAttribute('data-text', translations[lang].heroRole);
    }

    // Atualiza o link de download do currículo
    const cvLink = document.getElementById('cv-download-link');
    const cvLinkMobile = document.getElementById('cv-download-link-mobile');
    if (lang === 'en') {
        cvLink.href = 'Doc/SamuelMaui_en.pdf';
        cvLinkMobile.href = 'Doc/SamuelMaui_en.pdf';
    } else if (lang === 'es') {
        cvLink.href = 'Doc/SamuelMauli_Es.pdf';
        cvLinkMobile.href = 'Doc/SamuelMauli_Es.pdf';
    } else {
        cvLink.href = 'Doc/SamuelMauli_PtBr.pdf';
        cvLinkMobile.href = 'Doc/SamuelMauli_PtBr.pdf';
    }

    // Salva a preferência de idioma
    localStorage.setItem('language', lang);
};

// Global variables
let isLoading = true;
let currentSection = 'home';
let scrollPosition = 0;
let isScrolling = false;

// DOM elements
const loadingScreen = document.getElementById('loading-screen');
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    
    // Configura os botões de idioma
    const langButtons = document.querySelectorAll('.language-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Carrega o idioma salvo ou define o padrão
    const savedLang = localStorage.getItem('language') || 'pt';
    setLanguage(savedLang);
});

function initializeApp() {
    // Show loading screen
    showLoadingScreen();
    
    // Initialize components
    setTimeout(() => {
        initializeNavigation();
        initializeScrollEffects();
        initializeTypingEffect();
        initializeCounters();
        initializeSkillBars();
        initializeProjectFilters();
        initializeContactForm();
        initializeIntersectionObserver();
        
        // Hide loading screen
        hideLoadingScreen();
    }, 2000);
}

// ===== LOADING SCREEN =====
function showLoadingScreen() {
    const progressBar = document.querySelector('.loading-progress');
    const loadingMessage = document.querySelector('.loading-message');
    
    const messages = [
        'Inicializando sistema...',
        'Carregando componentes...',
        'Configurando interface...',
        'Preparando experiência...',
        'Sistema pronto!'
    ];
    
    let progress = 0;
    let messageIndex = 0;
    
    const interval = setInterval(() => {
        progress += Math.random() * 25;
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
        }
        
        progressBar.style.width = progress + '%';
        
        if (messageIndex < messages.length - 1 && progress > (messageIndex + 1) * 20) {
            messageIndex++;
            loadingMessage.textContent = messages[messageIndex];
        }
    }, 400);
}

function hideLoadingScreen() {
    loadingScreen.classList.add('hidden');
    document.body.classList.remove('no-scroll');
    isLoading = false;
    
    // Trigger entrance animations
    triggerEntranceAnimations();
}

function triggerEntranceAnimations() {
    // Animate hero elements
    const heroElements = document.querySelectorAll('.hero-text > *, .hero-visual > *');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// ===== NAVIGATION =====
function initializeNavigation() {
    // Mobile menu toggle
    navToggle.addEventListener('click', toggleMobileMenu);
    
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
    
    // Scroll spy
    window.addEventListener('scroll', throttle(updateActiveNavLink, 100));
    window.addEventListener('scroll', throttle(updateNavbarStyle, 100));
}

function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    
    // Animate hamburger bars
    const bars = navToggle.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        bar.style.transform = navToggle.classList.contains('active') 
            ? `rotate(${index === 0 ? 45 : index === 2 ? -45 : 0}deg) translate(${index === 1 ? '100px' : '0'}, ${index === 0 ? '6px' : index === 2 ? '-6px' : '0'})`
            : 'none';
        bar.style.opacity = index === 1 && navToggle.classList.contains('active') ? '0' : '1';
    });
}

function handleNavClick(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
        smoothScrollTo(targetSection.offsetTop - 70);
        
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    }
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                    currentSection = sectionId;
                }
            });
        }
    });
}

function updateNavbarStyle() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// ===== SCROLL EFFECTS =====
function initializeScrollEffects() {
    window.addEventListener('scroll', throttle(handleScroll, 16));
}

function handleScroll() {
    scrollPosition = window.scrollY;
    
    // Update parallax effects
    updateParallaxEffects();
    
    // Update scroll-based animations
    updateScrollAnimations();
}

function updateParallaxEffects() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.parallax || 0.5;
        const yPos = -(scrollPosition * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
}

function updateScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    animatedElements.forEach(element => {
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;
        const windowHeight = window.innerHeight;
        
        if (scrollPosition + windowHeight > elementTop + elementHeight * 0.1) {
            element.classList.add('animated');
        }
    });
}

// ===== TYPING EFFECT =====
function initializeTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    let texts = (typingElement.dataset.text || '').split(',');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeText() {
        texts = (typingElement.getAttribute('data-text') || '').split(',');
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500;
        }
        
        setTimeout(typeText, typingSpeed);
    }
    
    typeText();
}

// ===== COUNTERS =====
function initializeCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.count);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        // Start counter when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// ===== SKILL BARS =====
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.dataset.progress;
                entry.target.style.width = progress + '%';
                observer.unobserve(entry.target);
            }
        });
    });
    
    skillBars.forEach(bar => observer.observe(bar));
}

// ===== PROJECT FILTERS =====
function initializeProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.dataset.category;
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ===== CONTACT FORM =====
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', handleFormSubmit);
    
    // Add input focus effects
    const formInputs = contactForm.querySelectorAll('.form-input, .form-textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitButton = e.target.querySelector('.form-submit');
    const originalText = submitButton.querySelector('.btn-text').textContent;
    submitButton.querySelector('.btn-text').textContent = 'Enviando...';
    submitButton.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Create mailto link
        const subject = encodeURIComponent(data.subject);
        const body = encodeURIComponent(`Nome: ${data.name}\nEmail: ${data.email}\n\nMensagem:\n${data.message}`);
        const mailtoLink = `mailto:samuel.mauli@gmail.com?subject=${subject}&body=${body}`;
        
        window.location.href = mailtoLink;
        
        // Reset form
        e.target.reset();
        submitButton.querySelector('.btn-text').textContent = originalText;
        submitButton.disabled = false;
        
        // Show success message
        showNotification('Mensagem preparada! Seu cliente de email será aberto.', 'success');
    }, 1000);
}

// ===== INTERSECTION OBSERVER =====
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Special animations for timeline items
                if (entry.target.classList.contains('timeline-item')) {
                    entry.target.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    // Observe all sections and animated elements
    const elementsToObserve = document.querySelectorAll('section, .timeline-item, .project-card, .skill-category');
    elementsToObserve.forEach(element => observer.observe(element));
}

// ===== UTILITY FUNCTIONS =====
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function smoothScrollTo(target) {
    const start = window.pageYOffset;
    const distance = target - start;
    const duration = 1000;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'var(--accent-color)' : 'var(--primary-color)'};
        color: var(--bg-primary);
        padding: var(--spacing-sm) var(--spacing-md);
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-lg);
        z-index: var(--z-tooltip);
        transform: translateX(100%);
        transition: transform var(--transition-normal);
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ===== EASTER EGGS =====
function initializeEasterEggs() {
    // Konami code
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.keyCode);
        
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            activateMatrixMode();
            konamiCode = [];
        }
    });
    
    // Double click on logo
    const logo = document.querySelector('.nav-logo');
    let clickCount = 0;
    
    logo.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 2) {
            activateGlitchMode();
            clickCount = 0;
        }
        setTimeout(() => clickCount = 0, 500);
    });
}

function activateMatrixMode() {
    document.body.classList.add('matrix-mode');
    showNotification('Matrix Mode Ativado! 🕶️', 'success');
    
    setTimeout(() => {
        document.body.classList.remove('matrix-mode');
    }, 10000);
}

function activateGlitchMode() {
    document.body.classList.add('glitch-mode');
    showNotification('Glitch Mode Ativado! ⚡', 'success');
    
    setTimeout(() => {
        document.body.classList.remove('glitch-mode');
    }, 5000);
}

// ===== PERFORMANCE OPTIMIZATION =====
function optimizePerformance() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Preload critical resources
    const criticalResources = [
        'assets/css/animations.css',
        'components/particles.js'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'script';
        document.head.appendChild(link);
    });
}

// ===== ACCESSIBILITY =====
function initializeAccessibility() {
    // Reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
    }
    
    // Focus management
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Pular para o conteúdo principal';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: var(--bg-primary);
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initializeEasterEggs();
    optimizePerformance();
    initializeAccessibility();
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when page is not visible
        document.body.classList.add('paused');
    } else {
        // Resume animations when page becomes visible
        document.body.classList.remove('paused');
    }
});

// Handle resize events
window.addEventListener('resize', debounce(() => {
    // Recalculate positions and sizes
    updateParallaxEffects();
    updateScrollAnimations();
}, 250));