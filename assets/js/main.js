// ===== TRANSLATIONS =====
const translations = {
    pt: {
        navHome: 'Início', navAbout: 'Sobre', navExperience: 'Experiência',
        navProjects: 'Projetos', navSkills: 'Stack', navContact: 'Contato', navCurriculum: 'Currículo',
        heroGreeting: 'Olá, eu sou',
        heroRole: 'Desenvolvedor Full-Stack,Engenheiro de Software,Especialista em IA,Arquiteto de Soluções',
        heroDescription: 'Desenvolvedor Full-Stack trilíngue focado em arquitetura de soluções end-to-end. Construo sistemas escaláveis com <span class="text-accent">IA</span>, <span class="text-accent">Cloud</span> e <span class="text-accent">automação inteligente</span>.',
        heroBtnProjects: 'Ver Projetos', heroBtnContact: 'Contato',
        heroBadge: 'Disponível para projetos', heroScroll: 'scroll',
        aboutTitle: 'Sobre Mim',
        aboutLead: 'Desenvolvedor Full-Stack trilíngue com foco em arquitetura de soluções end-to-end e impacto real nos negócios.',
        aboutDesc1: 'Minha experiência abrange <strong>Java (Spring Boot)</strong>, <strong>PHP (Laravel)</strong>, <strong>Python</strong>, <strong>Go</strong>, <strong>Rust</strong> e <strong>Node.js</strong>, onde foco na construção de sistemas robustos e na automação inteligente de processos. No front-end, desenvolvo interfaces reativas com <strong>React</strong>, <strong>Vue</strong> e <strong>Next.js</strong>, além de aplicativos móveis multiplataforma com <strong>Flutter</strong>, <strong>Kotlin</strong> e <strong>Swift</strong>.',
        aboutDesc2: 'Trabalho com infraestrutura Cloud e implemento práticas DevOps (CI/CD, Docker, Kubernetes) para garantir alta disponibilidade e escalabilidade. Aplico <strong>Inteligência Artificial</strong> — desde visão computacional até LLMs — para resolver problemas complexos e agregar valor mensurável, construindo plataformas escaláveis como SGI, CRMs e LMS com integrações bancárias e gateways de pagamento.',
        aboutStat1: 'Anos de Experiência', aboutStat2: 'Projetos Entregues', aboutStat3: 'Tecnologias', aboutStat4: 'Idiomas',
        experienceTitle: 'Experiência',
        exp1Title: 'Desenvolvedor Pleno', exp1Period: '2025 — Presente',
        exp1Desc: 'Lidero o desenvolvimento e a arquitetura da plataforma integrada de SGI e CRM. Responsável pela engenharia de sistemas de controle de pagamento e orquestração de APIs com gateways de pagamento e serviços de mensageria. Atuação cross-stack com PHP, Go, Python e Node.js para microsserviços e soluções de automação de processos (BPA). Gestão de infraestrutura Cloud (AWS), provisionamento de recursos e manutenção de pipelines CI/CD. Automação de processos com inteligência artificial, visão computacional e integrações com LLMs.',
        exp2Title: 'Developer & Consultor', exp2Period: '2024 — Presente',
        exp2Desc: 'Consultor de software entregando soluções end-to-end complexas — de aplicações web/móveis a sistemas de IA. Desenvolvi um motor de Inteligência Artificial para a indústria química (PLN + Machine Learning para análise preditiva de causa-raiz). Implementei soluções de Visão Computacional como sistema de almoxarifado com reconhecimento facial. Portfólio inclui apps mobile (gestão de faturas, energia solar), plataformas E-learning (LMS), sistemas de controle de acesso industrial e microserviços de geoprocessamento em tempo real.',
        exp3Title: 'Java & PHP Developer', exp3Period: '2024 — 2025',
        exp3Desc: 'Desenvolvedor Full-Stack com Java (Spring Boot, Hibernate/JPA, Maven) e PHP (Laravel) para APIs RESTful de alta performance. Liderança técnica em projetos de Python e Machine Learning, focado na otimização de pipelines de dados (ETL/ELT) para o setor farmacêutico. Criação do BlauSight — sistema de gestão da qualidade com IA generativa — e do Ballesol CareAI, agente de IA com criptografia E2E hospedado em AWS.',
        exp4Title: 'Agente de Suporte TI', exp4Period: '2023 — 2024',
        exp4Desc: 'Integrei o time de Tech Services da Positivo no suporte técnico à International Meal Company (IMC). Responsável pela administração e triagem do backlog, distribuição de demandas à equipe e aplicação de boas práticas ITIL para priorização por criticidade. Mantive comunicação direta com fornecedores para resolução de questões técnicas envolvendo infraestrutura, redes e sistemas críticos de operação. Experiência prática em troubleshooting de ambientes complexos e gestão de SLAs em operação de larga escala.',
        exp5Title: 'Consultor Técnico Oracle', exp5Period: '2023',
        exp5Desc: 'Atuei em projetos nacionais e internacionais de implementação do ecossistema Oracle. Desenvolvi integrações entre sistemas corporativos utilizando Oracle Integration Cloud (OIC), construindo fluxos de orquestração, transformação de dados e conexões com APIs REST/SOAP. Criei relatórios analíticos e operacionais com Oracle BI Publisher para tomada de decisão. Experiência em ambientes enterprise com ciclos de implementação complexos e stakeholders multinacionais.',
        exp6Title: 'Técnico de Suporte N1', exp6Period: '2022 — 2023',
        exp6Desc: 'Suporte técnico direto à Prefeitura de Curitiba, abrangendo diagnóstico e resolução de problemas de software, hardware e rede. Colaboração constante com equipes de infraestrutura, NOC e técnicos de campo para escalonamento eficiente de incidentes. Responsável pela documentação de chamados e contribuição ativa à base de conhecimento do projeto, garantindo rastreabilidade e melhoria contínua dos processos de atendimento.',
        projectsTitle: 'Projetos em Destaque',
        projFilterAll: 'Todos', projFilterAi: 'IA / ML', projFilterPlatform: 'Plataformas', projFilterSystem: 'Sistemas',
        proj1Subtitle: 'Motor Preditivo de Qualidade e Compliance',
        proj1Desc: 'Solução de Machine Learning para a indústria farmacêutica que identifica falhas sistêmicas em linhas de produção, categoriza anomalias por origem (humana, operacional, maquinário) e gera planos de ação corretiva automatizados. Integra chatbot de suporte à qualidade com IA generativa, conectado ao banco de dados em tempo real via API REST, com criptografia ponta a ponta. Arquitetura Flask + React hospedada em AWS.',
        proj2Title: 'IA Aplicada com Propósito', proj2Subtitle: 'Inteligência Artificial para Impacto Real',
        proj2Desc: 'Desenvolvimento de soluções de IA com foco em impacto real e mensurável para negócios. Projetos que combinam modelos de linguagem (LLMs), visão computacional e automação inteligente para resolver desafios estratégicos — desde análise preditiva de causa-raiz em processos industriais até automação de documentos fiscais e agentes conversacionais com acesso a dados em tempo real.',
        proj3Title: 'Solar Hub', proj3Subtitle: 'Plataforma de Gestão de Energia Solar',
        proj3Desc: 'Plataforma integrada para gestão operacional de usinas solares e distribuição de energia em modelo cooperativo. Inclui aplicativo mobile B2C para consumidores finais com monitoramento em tempo real do consumo e geração, dashboard administrativo para operadores, hub de benefícios para cooperados e sistema de faturamento automatizado integrado a gateways de pagamento.',
        proj4Title: 'EduStack', proj4Subtitle: 'Ecossistema EdTech & E-commerce Educacional',
        proj4Desc: 'Plataforma educacional end-to-end para curso preparatório: gestão de conteúdo programático, aprendizagem gamificada com sistema de XP e rankings, análise de desempenho individual com dashboards visuais, motor de recomendações de estudo personalizadas e e-commerce integrado para venda de materiais e cursos com checkout próprio.',
        proj5Title: 'CareLink', proj5Subtitle: 'Plataforma de Cuidados com Idosos',
        proj5Desc: 'Plataforma digital para gestão integrada de cuidados com idosos, conectando famílias, cuidadores e equipes de saúde em um único ecossistema. Funcionalidades incluem monitoramento em tempo real de sinais vitais, agenda inteligente de cuidados e medicações, prontuário eletrônico compartilhado, canal de comunicação seguro entre stakeholders e sistema de alertas configuráveis.',
        proj6Title: 'SecureGate', proj6Subtitle: 'Governança de Acessos & Gestão de Facilities',
        proj6Desc: 'Sistema para o setor bioquímico com controle de segurança perimetral, credenciamento digital de fornecedores e motoristas, validação automática de NF-e na entrada e gestão inteligente de espaços corporativos (salas de reunião, auditórios, laboratórios). Inclui módulo de reconhecimento facial para controle de acesso e dashboard de ocupação em tempo real.',
        proj7Subtitle: 'Interface de IA Assistiva',
        proj7Desc: 'Solução de inclusão digital que automatiza a tradução de linguagem de sinais para texto utilizando Edge Computing com baixíssima latência. O sistema processa gestos em tempo real via câmera, eliminando barreiras de acessibilidade e permitindo comunicação fluida entre surdos e ouvintes sem necessidade de intérprete humano.',
        proj8Title: 'GeoTrack', proj8Subtitle: 'Geoprocessamento em Tempo Real',
        proj8Desc: 'Microserviço de alta performance desenvolvido em Go para rastreamento geoespacial em tempo real. Alimenta simultaneamente centenas de usuários conectados via WebSocket com atualização de posição de mais de 100 motoristas em tempo real. Arquitetura otimizada para baixa latência e alta concorrência, com persistência geoespacial e cache distribuído.',
        proj9Subtitle: 'Orquestrador de Pagamentos Bancários',
        proj9Desc: 'Sistema desenvolvido em Python que orquestra pagamentos para bancos personalizáveis, utilizando webhooks e REST/SOAP para integrar o ERP do cliente. Recebe todos os pagamentos, realiza pré-análise automática e encaminha para o banco pré-aprovado em um único lote, mantendo cada pagamento individualmente identificado e rastreável.',
        proj10Title: 'SGI Platform', proj10Subtitle: 'Sistema de Gestão Integrada',
        proj10Desc: 'Sistema de gestão completo com módulos comercial, fiscal, recursos humanos e gestão de fornecedores. Sistema fiscal integrado com OMIE para automação de processos contábeis. Funcionalidades incluem cadastro CRM, acompanhamento de contratos e pedidos de inserção focado em marketing, controle de investimento de sócios, contas a receber e a pagar.',
        skillsTitle: 'Tech Stack',
        skillsCat1: 'Linguagens', skillsCat3: 'IA / ML & Dados', skillsCat4: 'Cloud & DevOps', skillsCat6: 'Mobile & Multiplataforma',
        contactTitle: 'Vamos Conversar?',
        contactDesc: 'Estou sempre aberto a novas oportunidades, projetos desafiadores e parcerias estratégicas. Vamos construir algo extraordinário juntos.',
        contactPhone: 'Telefone',
        formName: 'Nome', formSubject: 'Assunto', formMessage: 'Mensagem', formSubmit: 'Enviar Mensagem',
        footerText: '© 2025 Samuel Mauli. Curitiba, PR.'
    },
    en: {
        navHome: 'Home', navAbout: 'About', navExperience: 'Experience',
        navProjects: 'Projects', navSkills: 'Stack', navContact: 'Contact', navCurriculum: 'Resume',
        heroGreeting: "Hi, I'm",
        heroRole: 'Full-Stack Developer,Software Engineer,AI Specialist,Solutions Architect',
        heroDescription: 'Trilingual Full-Stack Developer focused on end-to-end solution architecture. I build scalable systems with <span class="text-accent">AI</span>, <span class="text-accent">Cloud</span>, and <span class="text-accent">intelligent automation</span>.',
        heroBtnProjects: 'View Projects', heroBtnContact: 'Contact',
        heroBadge: 'Available for projects', heroScroll: 'scroll',
        aboutTitle: 'About Me',
        aboutLead: 'Trilingual Full-Stack Developer focused on end-to-end solution architecture and real business impact.',
        aboutDesc1: 'My experience spans <strong>Java (Spring Boot)</strong>, <strong>PHP (Laravel)</strong>, <strong>Python</strong>, <strong>Go</strong>, <strong>Rust</strong>, and <strong>Node.js</strong>, where I focus on building robust systems and intelligent process automation. On the front-end, I develop reactive interfaces with <strong>React</strong>, <strong>Vue</strong>, and <strong>Next.js</strong>, as well as cross-platform mobile applications using <strong>Flutter</strong>, <strong>Kotlin</strong>, and <strong>Swift</strong>.',
        aboutDesc2: 'I work with Cloud infrastructure and implement DevOps practices (CI/CD, Docker, Kubernetes) to ensure high availability and scalability. I apply <strong>Artificial Intelligence</strong> — from computer vision to LLMs — to solve complex problems and deliver measurable value, building scalable platforms such as SGI, CRMs, and LMS with banking integrations and payment gateways.',
        aboutStat1: 'Years of Experience', aboutStat2: 'Projects Delivered', aboutStat3: 'Technologies', aboutStat4: 'Languages',
        experienceTitle: 'Experience',
        exp1Title: 'Full Stack Developer', exp1Period: '2025 — Present',
        exp1Desc: 'Leading the development and architecture of the integrated SGI and CRM platform. Responsible for engineering payment control systems and orchestrating APIs with payment gateways and messaging services. Cross-stack work using PHP, Go, Python, and Node.js for different microservices and business process automation (BPA) solutions. Managing cloud IT infrastructure (AWS), resource provisioning, and CI/CD pipeline maintenance. Process automation using AI, computer vision, and LLM integrations.',
        exp2Title: 'Developer & Consultant', exp2Period: '2024 — Present',
        exp2Desc: 'Software consultant delivering complex end-to-end solutions — from web/mobile applications to AI systems. Developed an AI engine for the chemical industry (NLP + Machine Learning for predictive root-cause analysis). Implemented Computer Vision solutions such as a warehouse management system with facial recognition. Portfolio includes mobile apps (invoice management, solar energy), E-learning platforms (LMS), industrial access control systems, and real-time geoprocessing microservices.',
        exp3Title: 'Java & PHP Developer', exp3Period: '2024 — 2025',
        exp3Desc: 'Full-Stack developer with Java (Spring Boot, Hibernate/JPA, Maven) and PHP (Laravel) for high-performance RESTful APIs. Technical leadership in Python and Machine Learning projects, focused on optimizing data pipelines (ETL/ELT) for the pharmaceutical sector. Created BlauSight — a quality management system with generative AI — and Ballesol CareAI, an E2E encrypted AI agent hosted on AWS.',
        exp4Title: 'IT Support Agent', exp4Period: '2023 — 2024',
        exp4Desc: 'Joined Positivo\'s Tech Services team providing technical support to International Meal Company (IMC). Responsible for backlog administration and triage, demand distribution across the team, and applying ITIL best practices for severity-based prioritization. Maintained direct communication with vendors to resolve technical issues involving infrastructure, networking, and mission-critical systems. Hands-on experience in complex environment troubleshooting and SLA management at scale.',
        exp5Title: 'Oracle Technical Consultant', exp5Period: '2023',
        exp5Desc: 'Worked on national and international Oracle ecosystem implementation projects. Developed corporate system integrations using Oracle Integration Cloud (OIC), building orchestration flows, data transformations, and REST/SOAP API connections. Created analytical and operational reports with Oracle BI Publisher for decision-making. Experience in enterprise environments with complex implementation cycles and multinational stakeholders.',
        exp6Title: 'N1 Support Technician', exp6Period: '2022 — 2023',
        exp6Desc: 'Direct technical support to the Curitiba City Hall, covering diagnosis and resolution of software, hardware, and network issues. Constant collaboration with infrastructure teams, NOC, and field technicians for efficient incident escalation. Responsible for ticket documentation and active contribution to the project knowledge base, ensuring traceability and continuous improvement of support processes.',
        projectsTitle: 'Featured Projects',
        projFilterAll: 'All', projFilterAi: 'AI / ML', projFilterPlatform: 'Platforms', projFilterSystem: 'Systems',
        proj1Subtitle: 'Predictive Quality & Compliance Engine',
        proj1Desc: 'Machine Learning solution for the pharmaceutical industry that identifies systemic failures in production lines, categorizes anomalies by origin (human, operational, machinery), and generates automated corrective action plans. Integrates a quality support chatbot with generative AI, connected to the database in real-time via REST API with end-to-end encryption. Flask + React architecture hosted on AWS.',
        proj2Title: 'Purpose-Driven AI', proj2Subtitle: 'AI for Real Business Impact',
        proj2Desc: 'AI solutions development focused on real and measurable business impact. Projects combining language models (LLMs), computer vision, and intelligent automation to solve strategic challenges — from predictive root-cause analysis in industrial processes to fiscal document automation and conversational agents with real-time data access.',
        proj3Title: 'Solar Hub', proj3Subtitle: 'Solar Energy Management Platform',
        proj3Desc: 'Integrated platform for operational management of solar plants and energy distribution in a cooperative model. Includes B2C mobile app for end consumers with real-time consumption and generation monitoring, administrative dashboard for operators, benefits hub for cooperative members, and automated billing system integrated with payment gateways.',
        proj4Title: 'EduStack', proj4Subtitle: 'EdTech & Educational E-commerce Ecosystem',
        proj4Desc: 'End-to-end educational platform for preparatory courses: content management, gamified learning with XP system and rankings, individual performance analysis with visual dashboards, personalized study recommendation engine, and integrated e-commerce for selling materials and courses with native checkout.',
        proj5Title: 'CareLink', proj5Subtitle: 'Elderly Care Platform',
        proj5Desc: 'Digital platform for integrated elderly care management, connecting families, caregivers, and healthcare teams in a single ecosystem. Features include real-time vital sign monitoring, intelligent care and medication scheduling, shared electronic health records, secure communication channels between stakeholders, and configurable alert systems.',
        proj6Title: 'SecureGate', proj6Subtitle: 'Access Governance & Facilities Management',
        proj6Desc: 'System for the biochemical sector with perimeter security control, digital credentialing of suppliers and drivers, automatic NF-e validation at entry, and intelligent management of corporate spaces (meeting rooms, auditoriums, laboratories). Includes facial recognition module for access control and real-time occupancy dashboard.',
        proj7Subtitle: 'Assistive AI Interface',
        proj7Desc: 'Digital inclusion solution that automates sign language to text translation using Edge Computing with ultra-low latency. The system processes gestures in real-time via camera, eliminating accessibility barriers and enabling fluid communication between deaf and hearing individuals without the need for a human interpreter.',
        proj8Title: 'GeoTrack', proj8Subtitle: 'Real-Time Geoprocessing',
        proj8Desc: 'High-performance microservice developed in Go for real-time geospatial tracking. Simultaneously feeds hundreds of connected users via WebSocket with position updates from 100+ drivers in real-time. Architecture optimized for low latency and high concurrency, with geospatial persistence and distributed caching.',
        proj9Subtitle: 'Banking Payment Orchestrator',
        proj9Desc: 'System developed in Python that orchestrates payments for customizable banks, using webhooks and REST/SOAP to integrate with the client\'s ERP. Receives all payments, performs automatic pre-analysis, and forwards them pre-approved to the bank in a single batch, keeping each payment individually identified and traceable.',
        proj10Title: 'SGI Platform', proj10Subtitle: 'Integrated Management System',
        proj10Desc: 'Complete management system with commercial, fiscal, human resources, and supplier management modules. Fiscal system integrated with OMIE for accounting process automation. Features include CRM registration, contract tracking, and insertion orders focused on marketing, partner investment control, accounts receivable and payable.',
        skillsTitle: 'Tech Stack',
        skillsCat1: 'Languages', skillsCat3: 'AI / ML & Data', skillsCat4: 'Cloud & DevOps', skillsCat6: 'Mobile & Cross-Platform',
        contactTitle: "Let's Talk?",
        contactDesc: "I'm always open to new opportunities, challenging projects, and strategic partnerships. Let's build something extraordinary together.",
        contactPhone: 'Phone',
        formName: 'Name', formSubject: 'Subject', formMessage: 'Message', formSubmit: 'Send Message',
        footerText: '© 2025 Samuel Mauli. Curitiba, PR.'
    },
    es: {
        navHome: 'Inicio', navAbout: 'Sobre Mí', navExperience: 'Experiencia',
        navProjects: 'Proyectos', navSkills: 'Stack', navContact: 'Contacto', navCurriculum: 'CV',
        heroGreeting: 'Hola, soy',
        heroRole: 'Desarrollador Full-Stack,Ingeniero de Software,Especialista en IA,Arquitecto de Soluciones',
        heroDescription: 'Desarrollador Full-Stack trilingüe enfocado en arquitectura de soluciones integrales. Construyo sistemas escalables con <span class="text-accent">IA</span>, <span class="text-accent">Cloud</span> y <span class="text-accent">automatización inteligente</span>.',
        heroBtnProjects: 'Ver Proyectos', heroBtnContact: 'Contacto',
        heroBadge: 'Disponible para proyectos', heroScroll: 'scroll',
        aboutTitle: 'Sobre Mí',
        aboutLead: 'Desarrollador Full-Stack trilingüe enfocado en arquitectura de soluciones integrales e impacto real en los negocios.',
        aboutDesc1: 'Mi experiencia abarca <strong>Java (Spring Boot)</strong>, <strong>PHP (Laravel)</strong>, <strong>Python</strong>, <strong>Go</strong>, <strong>Rust</strong> y <strong>Node.js</strong>, donde me centro en la creación de sistemas robustos y la automatización inteligente de procesos. En el front-end, desarrollo interfaces reactivas con <strong>React</strong>, <strong>Vue</strong> y <strong>Next.js</strong>, así como aplicaciones móviles multiplataforma con <strong>Flutter</strong>, <strong>Kotlin</strong> y <strong>Swift</strong>.',
        aboutDesc2: 'Trabajo con infraestructura Cloud e implemento prácticas DevOps (CI/CD, Docker, Kubernetes) para garantizar alta disponibilidad y escalabilidad. Aplico <strong>Inteligencia Artificial</strong> — desde visión computacional hasta LLMs — para resolver problemas complejos y aportar valor medible, creando plataformas escalables como SGI, CRM y LMS con integraciones bancarias y pasarelas de pago.',
        aboutStat1: 'Años de Experiencia', aboutStat2: 'Proyectos Entregados', aboutStat3: 'Tecnologías', aboutStat4: 'Idiomas',
        experienceTitle: 'Experiencia',
        exp1Title: 'Desarrollador Pleno', exp1Period: '2025 — Actualidad',
        exp1Desc: 'Lidero el desarrollo y la arquitectura de la plataforma integrada de SGI y CRM. Responsable de la ingeniería de sistemas de control de pagos y la orquestación de APIs con pasarelas de pago y servicios de mensajería. Trabajo multistack con PHP, Go, Python y Node.js para diferentes microservicios y soluciones de automatización de procesos de negocio (BPA). Gestión de infraestructura Cloud (AWS), aprovisionamiento de recursos y mantenimiento de pipelines CI/CD. Automatización de procesos con inteligencia artificial, visión computacional e integraciones con LLMs.',
        exp2Title: 'Developer & Consultor', exp2Period: '2024 — Actualidad',
        exp2Desc: 'Consultor de software entregando soluciones integrales complejas — desde aplicaciones web/móviles hasta sistemas de IA. Desarrollé un motor de Inteligencia Artificial para la industria química (PLN + Machine Learning para análisis predictivo de causa raíz). Implementé soluciones de Visión Computacional como sistema de gestión de almacenes con reconocimiento facial. El portafolio incluye apps mobile (gestión de facturas, energía solar), plataformas E-learning (LMS), sistemas de control de acceso industrial y microservicios de geoprocesamiento en tiempo real.',
        exp3Title: 'Desarrollador Java & PHP', exp3Period: '2024 — 2025',
        exp3Desc: 'Desarrollador Full-Stack con Java (Spring Boot, Hibernate/JPA, Maven) y PHP (Laravel) para APIs RESTful de alto rendimiento. Liderazgo técnico en proyectos de Python y Machine Learning, centrado en la optimización de pipelines de datos (ETL/ELT) para el sector farmacéutico. Creación de BlauSight — sistema de gestión de calidad con IA generativa — y Ballesol CareAI, agente de IA con cifrado E2E alojado en AWS.',
        exp4Title: 'Agente de Soporte TI', exp4Period: '2023 — 2024',
        exp4Desc: 'Integré el equipo de Tech Services de Positivo brindando soporte técnico a International Meal Company (IMC). Responsable de la administración y triaje del backlog, distribución de demandas al equipo y aplicación de buenas prácticas ITIL para priorización por criticidad. Mantuve comunicación directa con proveedores para resolución de cuestiones técnicas que involucraban infraestructura, redes y sistemas críticos de operación. Experiencia práctica en troubleshooting de ambientes complejos y gestión de SLAs a gran escala.',
        exp5Title: 'Consultor Técnico Oracle', exp5Period: '2023',
        exp5Desc: 'Trabajé en proyectos nacionales e internacionales de implementación del ecosistema Oracle. Desarrollé integraciones entre sistemas corporativos utilizando Oracle Integration Cloud (OIC), construyendo flujos de orquestación, transformación de datos y conexiones con APIs REST/SOAP. Creé informes analíticos y operacionales con Oracle BI Publisher para toma de decisiones. Experiencia en ambientes enterprise con ciclos de implementación complejos y stakeholders multinacionales.',
        exp6Title: 'Técnico de Soporte N1', exp6Period: '2022 — 2023',
        exp6Desc: 'Soporte técnico directo al Municipio de Curitiba, abarcando diagnóstico y resolución de problemas de software, hardware y red. Colaboración constante con equipos de infraestructura, NOC y técnicos de campo para escalamiento eficiente de incidentes. Responsable de la documentación de tickets y contribución activa a la base de conocimiento del proyecto, garantizando trazabilidad y mejora continua de los procesos de atención.',
        projectsTitle: 'Proyectos Destacados',
        projFilterAll: 'Todos', projFilterAi: 'IA / ML', projFilterPlatform: 'Plataformas', projFilterSystem: 'Sistemas',
        proj1Subtitle: 'Motor Predictivo de Calidad y Compliance',
        proj1Desc: 'Solución de Machine Learning para la industria farmacéutica que identifica fallas sistémicas en líneas de producción, categoriza anomalías por origen (humana, operacional, maquinaria) y genera planes de acción correctiva automatizados. Integra chatbot de soporte a la calidad con IA generativa, conectado a la base de datos en tiempo real vía API REST con cifrado de extremo a extremo. Arquitectura Flask + React alojada en AWS.',
        proj2Title: 'IA Aplicada con Propósito', proj2Subtitle: 'Inteligencia Artificial para Impacto Real',
        proj2Desc: 'Desarrollo de soluciones de IA enfocadas en impacto real y medible para negocios. Proyectos que combinan modelos de lenguaje (LLMs), visión computacional y automatización inteligente para resolver desafíos estratégicos — desde análisis predictivo de causa raíz en procesos industriales hasta automatización de documentos fiscales y agentes conversacionales con acceso a datos en tiempo real.',
        proj3Title: 'Solar Hub', proj3Subtitle: 'Plataforma de Gestión de Energía Solar',
        proj3Desc: 'Plataforma integrada para gestión operacional de plantas solares y distribución de energía en modelo cooperativo. Incluye app móvil B2C para consumidores finales con monitoreo en tiempo real del consumo y generación, dashboard administrativo para operadores, hub de beneficios para cooperados y sistema de facturación automatizado integrado a pasarelas de pago.',
        proj4Title: 'EduStack', proj4Subtitle: 'Ecosistema EdTech & E-commerce Educacional',
        proj4Desc: 'Plataforma educacional integral para curso preparatorio: gestión de contenido programático, aprendizaje gamificado con sistema de XP y rankings, análisis de rendimiento individual con dashboards visuales, motor de recomendaciones de estudio personalizadas y e-commerce integrado para venta de materiales y cursos con checkout propio.',
        proj5Title: 'CareLink', proj5Subtitle: 'Plataforma de Cuidados con Adultos Mayores',
        proj5Desc: 'Plataforma digital para gestión integrada de cuidados con adultos mayores, conectando familias, cuidadores y equipos de salud en un único ecosistema. Funcionalidades incluyen monitoreo en tiempo real de signos vitales, agenda inteligente de cuidados y medicaciones, historia clínica electrónica compartida, canal de comunicación seguro entre stakeholders y sistema de alertas configurables.',
        proj6Title: 'SecureGate', proj6Subtitle: 'Gobernanza de Accesos & Gestión de Facilities',
        proj6Desc: 'Sistema para el sector bioquímico con control de seguridad perimetral, acreditación digital de proveedores y conductores, validación automática de NF-e en la entrada y gestión inteligente de espacios corporativos (salas de reunión, auditorios, laboratorios). Incluye módulo de reconocimiento facial para control de acceso y dashboard de ocupación en tiempo real.',
        proj7Subtitle: 'Interfaz de IA Asistiva',
        proj7Desc: 'Solución de inclusión digital que automatiza la traducción de lengua de señas a texto utilizando Edge Computing con latencia ultrabaja. El sistema procesa gestos en tiempo real vía cámara, eliminando barreras de accesibilidad y permitiendo comunicación fluida entre sordos y oyentes sin necesidad de intérprete humano.',
        proj8Title: 'GeoTrack', proj8Subtitle: 'Geoprocesamiento en Tiempo Real',
        proj8Desc: 'Microservicio de alta performance desarrollado en Go para rastreo geoespacial en tiempo real. Alimenta simultáneamente cientos de usuarios conectados vía WebSocket con actualización de posición de más de 100 conductores en tiempo real. Arquitectura optimizada para baja latencia y alta concurrencia, con persistencia geoespacial y caché distribuido.',
        proj9Subtitle: 'Orquestador de Pagos Bancarios',
        proj9Desc: 'Sistema desarrollado en Python que orquesta pagos para bancos personalizables, utilizando webhooks y REST/SOAP para integrar el ERP del cliente. Recibe todos los pagos, realiza un preanálisis automático y los envía preaprobados al banco en un único lote, manteniendo cada pago individualmente identificado y rastreable.',
        proj10Title: 'SGI Platform', proj10Subtitle: 'Sistema de Gestión Integrada',
        proj10Desc: 'Sistema de gestión completo con módulos comercial, fiscal, recursos humanos y gestión de proveedores. Sistema fiscal integrado con OMIE para automatización de procesos contables. Funcionalidades incluyen registro CRM, seguimiento de contratos y pedidos de inserción enfocados en marketing, control de inversión de socios, cuentas por cobrar y por pagar.',
        skillsTitle: 'Tech Stack',
        skillsCat1: 'Lenguajes', skillsCat3: 'IA / ML & Datos', skillsCat4: 'Cloud & DevOps', skillsCat6: 'Mobile & Multiplataforma',
        contactTitle: '¿Hablamos?',
        contactDesc: 'Siempre estoy abierto a nuevas oportunidades, proyectos desafiantes y alianzas estratégicas. Construyamos algo extraordinario juntos.',
        contactPhone: 'Teléfono',
        formName: 'Nombre', formSubject: 'Asunto', formMessage: 'Mensaje', formSubmit: 'Enviar Mensaje',
        footerText: '© 2025 Samuel Mauli. Curitiba, PR.'
    }
};

// ===== LANGUAGE SYSTEM =====
// Trusted translations only - all HTML content is developer-controlled
function setLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(function(el) {
        var key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            // These are trusted developer-defined strings, not user input
            el.innerHTML = translations[lang][key];
        }
    });

    // Update typing effect
    var typingEl = document.querySelector('.typing-text');
    if (typingEl) {
        typingEl.setAttribute('data-text', translations[lang].heroRole);
    }

    // CV downloads match selected language
    var cvUrls = {
        pt: 'Doc/SamuelMauli_PtBr.pdf',
        en: 'Doc/SamuelMauli_en.pdf',
        es: 'Doc/SamuelMauli_Es.pdf'
    };
    var cvLink = document.getElementById('cv-download-link');
    var cvLinkMobile = document.getElementById('cv-download-link-mobile');
    if (cvLink) cvLink.href = cvUrls[lang] || cvUrls.en;
    if (cvLinkMobile) cvLinkMobile.href = cvUrls[lang] || cvUrls.en;

    // Update active language button
    document.querySelectorAll('.language-btn').forEach(function(btn) {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    localStorage.setItem('language', lang);
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initLoading();
    initNavigation();
    initTypingEffect();
    initCounters();
    initProjectFilters();
    initContactForm();
    initScrollReveal();
    initScrollSpy();

    // Language
    document.querySelectorAll('.language-btn').forEach(function(btn) {
        btn.addEventListener('click', function() { setLanguage(btn.dataset.lang); });
    });
    setLanguage(localStorage.getItem('language') || 'pt');
});

// ===== LOADING =====
function initLoading() {
    var screen = document.getElementById('loading-screen');
    var progress = screen.querySelector('.loading-progress');
    var width = 0;

    var interval = setInterval(function() {
        width += Math.random() * 35;
        if (width >= 100) {
            width = 100;
            clearInterval(interval);
            setTimeout(function() { screen.classList.add('hidden'); }, 300);
        }
        progress.style.width = width + '%';
    }, 200);
}

// ===== NAVIGATION =====
function initNavigation() {
    var navbar = document.getElementById('navbar');
    var toggle = document.getElementById('nav-toggle');
    var menu = document.getElementById('nav-menu');

    // Mobile toggle
    toggle.addEventListener('click', function() {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // Close on link click
    menu.querySelectorAll('.nav-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.querySelector(link.getAttribute('href'));
            if (target) {
                window.scrollTo({ top: target.offsetTop - 72, behavior: 'smooth' });
            }
            toggle.classList.remove('active');
            menu.classList.remove('active');
        });
    });

    // Scroll effect
    window.addEventListener('scroll', function() {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
}

// ===== TYPING EFFECT =====
function initTypingEffect() {
    var el = document.querySelector('.typing-text');
    if (!el) return;

    var texts = (el.getAttribute('data-text') || '').split(',');
    var textIdx = 0, charIdx = 0, deleting = false, speed = 100;

    function type() {
        texts = (el.getAttribute('data-text') || '').split(',');
        var current = texts[textIdx] || '';

        if (deleting) {
            el.textContent = current.substring(0, charIdx - 1);
            charIdx--;
            speed = 40;
        } else {
            el.textContent = current.substring(0, charIdx + 1);
            charIdx++;
            speed = 80;
        }

        if (!deleting && charIdx === current.length) {
            speed = 2500;
            deleting = true;
        } else if (deleting && charIdx === 0) {
            deleting = false;
            textIdx = (textIdx + 1) % texts.length;
            speed = 400;
        }

        setTimeout(type, speed);
    }

    type();
}

// ===== COUNTERS =====
function initCounters() {
    var counters = document.querySelectorAll('[data-count]');
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var el = entry.target;
                var target = parseInt(el.dataset.count);
                var duration = 1500;
                var step = target / (duration / 16);
                var current = 0;

                function update() {
                    current += step;
                    if (current < target) {
                        el.textContent = Math.floor(current);
                        requestAnimationFrame(update);
                    } else {
                        el.textContent = target;
                    }
                }
                update();
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(function(c) { observer.observe(c); });
}

// ===== PROJECT FILTERS =====
function initProjectFilters() {
    var buttons = document.querySelectorAll('.filter-btn');
    var cards = document.querySelectorAll('.project-card');

    buttons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var filter = btn.dataset.filter;
            buttons.forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');

            cards.forEach(function(card) {
                var match = filter === 'all' || card.dataset.category === filter;
                card.style.display = match ? '' : 'none';
                if (match) {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(16px)';
                    requestAnimationFrame(function() {
                        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    });
                }
            });
        });
    });
}

// ===== CONTACT FORM =====
function initContactForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var data = Object.fromEntries(new FormData(form));
        var subject = encodeURIComponent(data.subject);
        var body = encodeURIComponent('Nome: ' + data.name + '\nEmail: ' + data.email + '\n\nMensagem:\n' + data.message);
        window.location.href = 'mailto:samuel.mauli@gmail.com?subject=' + subject + '&body=' + body;
        form.reset();
    });
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('[data-aos]').forEach(function(el) { observer.observe(el); });
}

// ===== SCROLL SPY =====
function initScrollSpy() {
    var sections = document.querySelectorAll('section[id]');
    var links = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        var scrollPos = window.scrollY + 150;
        sections.forEach(function(section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.id;

            if (scrollPos >= top && scrollPos < top + height) {
                links.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { passive: true });
}
