// ===== TRANSLATIONS =====
const translations = {
    pt: {
        formSentTitle: "Mensagem enviada",
        formSentText: "Chegou direto no meu e-mail. Retorno em até 1 dia útil.",
        formSentAgain: "Enviar outra mensagem",
        aboutStat3: "Produtos Próprios",
        aboutStat4: "Apps nas Lojas",
        aboutStat5: "Linguagens",
        aboutStat6: "Idiomas",
        projFilterMobile: "Mobile",
        projFilterInfra: "Infra",
        formConsent: "Concordo que meus dados sejam usados apenas para responder este contato.",
        formSending: "Enviando...",
        formSuccess: "Mensagem enviada. Retorno em até 1 dia útil.",
        formErrorRequired: "Preencha todos os campos.",
        formErrorEmail: "Informe um e-mail válido.",
        formErrorConsent: "É necessário aceitar o uso dos dados para responder o contato.",
        formErrorRate: "Muitas mensagens em pouco tempo. Aguarde alguns minutos e tente novamente.",
        formErrorNetwork: "Não foi possível conectar. Verifique sua internet e tente novamente.",
        formErrorGeneric: "Não foi possível enviar agora. Tente novamente em instantes.",
        navHome: "Início",
        navAbout: "Sobre",
        navExperience: "Experiência",
        navProjects: "Projetos",
        navSkills: "Stack",
        navContact: "Contato",
        navCurriculum: "Currículo",
        heroGreeting: "Olá, eu sou",
        heroRole: 'Desenvolvedor Full-Stack,Engenheiro de Software,Especialista em IA,Arquiteto de Soluções',
        heroDescription: "Arquiteto e construo plataformas SaaS de ponta a ponta — 10 produtos próprios em produção, apps <span class=\"text-accent\">mobile</span> nas duas lojas, <span class=\"text-accent\">ML e LLM rodando on-premise</span> e a <span class=\"text-accent\">infraestrutura</span> que sustenta tudo isso.",
        heroBtnProjects: "Ver Projetos",
        heroBtnContact: "Contato",
        heroBadge: "Disponível para projetos",
        heroScroll: "scroll",
        aboutTitle: "Sobre Mim",
        aboutLead: "Desenvolvedor full-stack trilíngue que leva produto do desenho à produção — e depois mantém no ar.",
        aboutDesc1: "Escrevo backend em <strong>Go</strong>, <strong>Python</strong>, <strong>Node/TypeScript</strong>, <strong>Java</strong> e <strong>PHP</strong>, escolhendo a linguagem pelo problema e não pela moda: Go onde a garantia de idempotência e concorrência importa (orquestração bancária, faturamento), Python onde o ecossistema de dados e ML manda (geoprocessamento em PostGIS, XGBoost, vLLM), Node onde o time inteiro compartilha tipos com o front. No front-end, <strong>React</strong> e <strong>Next.js</strong>; no mobile, <strong>React Native</strong> e <strong>Flutter</strong> — com <strong>seis apps publicados</strong> na App Store e na Google Play, incluindo os casos difíceis: APNs direto quando o Firebase corrompe no iOS, build assinado sem depender de pipeline gerenciado.",
        aboutDesc2: "Aplico <strong>IA onde ela resolve algo mensurável</strong>, e prefiro rodar dentro do perímetro do cliente: embeddings multilíngues em ONNX dentro do próprio processo Node, LLMs servidos por vLLM on-premise, XGBoost com SHAP obrigatório quando a decisão vai para uma auditoria. Em um pipeline de extração documental, trocar o modelo local por um modelo maior com chunking correto levou o tempo de 8 minutos para 10 segundos.",
        aboutStat1: "Anos de Experiência",
        aboutStat2: "Projetos Entregues",
        experienceTitle: "Experiência",
        exp1Title: "Desenvolvedor Pleno",
        exp1Period: "2025 — Presente",
        exp1Desc: "Lidero o desenvolvimento e a arquitetura da plataforma integrada de SGI e CRM, e sou responsável pelos <strong>dois aplicativos móveis em Flutter publicados na App Store e na Google Play</strong> — o app dos responsáveis e o app dos condutores. No mobile, resolvi os problemas que não estão no tutorial: tracking em tempo real do condutor para o responsável, gate de consentimento LGPD servido pelo backend, geocoding com validação cruzada de endereço de escola, e push notification com caminho diferente por plataforma (FCM no Android, <strong>APNs direto no iOS</strong> depois que o projeto Firebase corrompeu). Também corrigi um IDOR no fluxo de chat entre responsável e condutor.",
        exp2Title: "Developer & Consultor",
        exp2Period: "2024 — Presente",
        exp2Desc: "Diretor de tecnologia: desenho a arquitetura, construo e mantenho em produção o catálogo de <strong>10 produtos proprietários</strong> — certificação socioambiental por satélite, inteligência de capital e fomento, agente autônomo de licitações, orquestração de pagamentos bancários em Go, plataforma de saúde mental corporativa com ML local, provisionamento judicial preditivo com IA on-premise, conciliação de depósitos judiciais, CRM móvel white-label, portaria inteligente e gestão de energia em condomínios.",
        exp3Title: "Java & PHP Developer",
        exp3Period: "2024 — 2025",
        exp3Desc: "Desenvolvedor Full-Stack com Java (Spring Boot, Hibernate/JPA, Maven) e PHP (Laravel) para APIs RESTful de alta performance. Liderança técnica em projetos de Python e Machine Learning, focado na otimização de pipelines de dados (ETL/ELT) para o setor farmacêutico. Criação do BlauSight — sistema de gestão da qualidade com IA generativa — e do Ballesol CareAI, agente de IA com criptografia E2E hospedado em AWS.",
        exp4Title: "Agente de Suporte TI",
        exp4Period: "2023 — 2024",
        exp4Desc: "Integrei o time de Tech Services da Positivo no suporte técnico à International Meal Company (IMC). Responsável pela administração e triagem do backlog, distribuição de demandas à equipe e aplicação de boas práticas ITIL para priorização por criticidade. Mantive comunicação direta com fornecedores para resolução de questões técnicas envolvendo infraestrutura, redes e sistemas críticos de operação. Experiência prática em troubleshooting de ambientes complexos e gestão de SLAs em operação de larga escala.",
        exp5Title: "Consultor Técnico Oracle",
        exp5Period: "2023",
        exp5Desc: "Atuei em projetos nacionais e internacionais de implementação do ecossistema Oracle. Desenvolvi integrações entre sistemas corporativos utilizando Oracle Integration Cloud (OIC), construindo fluxos de orquestração, transformação de dados e conexões com APIs REST/SOAP. Criei relatórios analíticos e operacionais com Oracle BI Publisher para tomada de decisão. Experiência em ambientes enterprise com ciclos de implementação complexos e stakeholders multinacionais.",
        exp6Title: "Técnico de Suporte N1",
        exp6Period: "2022 — 2023",
        exp6Desc: "Suporte técnico direto à Prefeitura de Curitiba, abrangendo diagnóstico e resolução de problemas de software, hardware e rede. Colaboração constante com equipes de infraestrutura, NOC e técnicos de campo para escalonamento eficiente de incidentes. Responsável pela documentação de chamados e contribuição ativa à base de conhecimento do projeto, garantindo rastreabilidade e melhoria contínua dos processos de atendimento.",
        projectsTitle: "Projetos em Destaque",
        projFilterAll: "Todos",
        projFilterAi: "IA / ML",
        projFilterPlatform: "Plataformas",
        projFilterSystem: "Sistemas",
        proj1Subtitle: "Certificação socioambiental por satélite",
        proj1Desc: "Plataforma SaaS que emite certificado socioambiental de imóvel rural cruzando a geometria oficial do CAR contra nove bases federais em PostGIS — PRODES, DETER, IBAMA, INCRA, FUNAI, ICMBio e outras. O certificado sai em PDF assinado com ICP-Brasil A1, com QR e hash verificáveis, em menos de 5 minutos após o pagamento. Cobertura nacional, com tile server MVT próprio para o mapa. 65 mil linhas de código.",
        proj2Subtitle: "Inteligência de capital e fomento (BYOK)",
        proj2Desc: "Plataforma que monitora fontes oficiais de capital e fomento, calcula um score de fit explicável critério por critério entre o perfil da empresa e cada oportunidade, e analisa o documento inteiro com IA. O modelo BYOK é o diferencial: a chave de LLM é do cliente (OpenAI, Anthropic, Groq ou Gemini) e a análise nunca sai da conta dele. Busca híbrida BM25 + embeddings sobre base do TCU e Lei 14.133/21. 28 entidades de dados, 50 rotas de API.",
        proj3Subtitle: "Agente autônomo de licitações públicas",
        proj3Desc: "Agente que lê continuamente os editais publicados no Brasil (PNCP e Comprasnet) e entrega só os que a empresa pode ganhar, citando o trecho literal que prova cada afirmação. Valida que o edital existe de fato antes de indexar — sem edital fantasma. Faz análise jurídica multi-passe de habilitação, detecta restrições de competitividade e cruza jurisprudência do TCU contra cada risco. Chat especialista com RAG sobre os editais da conta. 51 entidades, 68 rotas de API, 79 mil linhas.",
        proj4Subtitle: "Orquestração de pagamentos bancários",
        proj4Desc: "Orquestrador de pagamentos escrito em Go para quem paga em escala. Recebe o lote do ERP, pré-valida contra a API do banco, exige aprovação humana com RBAC e executa por PIX REST ou lote CNAB 240 via SFTP auditado. Idempotência por pagamento, certificados mTLS versionados por conexão bancária, webhooks assinados com retry rastreável e trilha de eventos imutável. 21 tabelas versionadas, 50 rotas HTTP, binários separados de API e worker.",
        proj5Subtitle: "Saúde mental corporativa com ML local",
        proj5Desc: "Plataforma completa de saúde mental corporativa em três superfícies sobre um backend único: app do colaborador em React Native, painel do RH e um motor de ML próprio. O diferencial é privacidade real: embeddings multilíngues rodam em ONNX Runtime dentro do próprio processo Node, sem nenhuma chamada a IA de terceiro. Taxonomia COPSOQ III com sete dimensões de risco psicossocial, resumo extrativo por TextRank e plano de ação na hierarquia da NR-01. 96 mil linhas somando as quatro peças.",
        proj6Subtitle: "Provisionamento judicial preditivo",
        proj6Desc: "Classificação preditiva de risco processual para provisão contábil sob CPC 25 / IAS 37, com IA 100% on-premise — nenhum token sai do perímetro do cliente. XGBoost e LightGBM com explicação SHAP obrigatória das top-5 features, LLMs servidos por vLLM (Llama 3.3 70B FP8, Sabiá-3, BGE-M3), e snapshot contábil selado por trigger no banco: imutável e verificável offline por hash. Classificação com confiança abaixo de 0,70 vai para revisão humana. 50 mil linhas.",
        proj7Subtitle: "Conciliação de depósitos judiciais",
        proj7Desc: "O extrato do banco fala em ID de depósito, o tribunal fala em número de processo — o Vault amarra os dois. Ingere extrato bancário em CNAB 240 por SFTP, sincroniza processos e alvarás via DataJud/CNJ e PROJUDI (SOAP), e concilia depósito ↔ processo ↔ alvará num motor de quatro camadas. Orquestração em Airflow: CNAB diário, tribunais a cada duas horas. 21 tabelas, deploy em Kubernetes.",
        proj8Subtitle: "CRM móvel white-label para agências",
        proj8Desc: "CRM móvel publicado nas duas lojas, para agências e assessorias operarem fora do escritório. Pipeline de negócios, contatos, atividades, entregas por cliente, biblioteca de mídia e faturamento — 29 telas em nove domínios, com Expo Router e builds nativos iOS e Android versionados. Backend multi-tenant white-label: cada agência entra pelo próprio subdomínio, com a própria marca. 30 entidades de dados.",
        proj9Subtitle: "Portaria inteligente B2B",
        proj9Desc: "SaaS multi-tenant que unifica agendamento de caminhão, controle de visitante e reserva de sala numa portaria só — com PWA de totem rodando no tablet da recepção. Monorepo Turborepo com três aplicações (web, API, totem), design system próprio e internacionalização em cinco idiomas. 20 entidades, 35 telas, billing por assinatura via Stripe.",
        proj10Subtitle: "Gestão de energia em condomínios",
        proj10Desc: "Acaba com o rateio de energia por fração ideal: medidor por unidade, leitura mensal, tarifa configurável e cobrança individual por boleto ou PIX com baixa automática por webhook. Backend em Go com arquitetura hexagonal e multi-tenant por schema PostgreSQL (search_path no middleware), quatro papéis de acesso e faturamento idempotente — nunca cobra a mesma leitura duas vezes. 15 tabelas, event bus interno.",
        skillsTitle: "Tech Stack",
        skillsCat1: "Linguagens",
        skillsCat3: "IA / ML & Dados",
        skillsCat4: "Cloud & DevOps",
        skillsCat6: "Mobile & Multiplataforma",
        contactTitle: "Vamos Conversar?",
        contactDesc: "Estou sempre aberto a novas oportunidades, projetos desafiadores e parcerias estratégicas. Vamos construir algo extraordinário juntos.",
        contactPhone: "Telefone",
        formName: "Nome",
        formSubject: "Assunto",
        formMessage: "Mensagem",
        formSubmit: "Enviar Mensagem",
        footerText: "&copy; 2026 Samuel Mauli. Curitiba, PR.",
        aboutDesc3: "Também sou o <strong>SRE da própria operação</strong>: migrei tudo de AWS EC2 para um VPS que hoje sustenta cerca de 20 processos de oito negócios, com Caddy, observabilidade completa (Prometheus, Grafana, Loki, Alertmanager) e backup com <strong>PITR provado</strong> — restore que parou a 1,2 segundo do alvo, com RTO medido em 38 minutos. Backup sem restore testado eu não chamo de backup.",
        exp1Desc2: "No backend, engenharia de controle de pagamento e orquestração de APIs com gateways e mensageria, atuação cross-stack em PHP, Go, Python e Node.js, e automação de processos com IA — incluindo um pipeline de extração documental que saiu de 8 minutos para 10 segundos por documento ao trocar o modelo local por um LLM maior com chunking correto. Infraestrutura on-premise atrás de VPN, Docker, CI/CD e bancos MySQL e PostgreSQL.",
        exp2Desc2: "Do lado <strong>mobile</strong>, publiquei e mantenho quatro apps nas lojas sob a Doublethree: um app de energia por assinatura em React Native (com API de 184 mil linhas por trás, três integrações de distribuidora capturando fatura por contingência), o app de saúde mental corporativa em React Native, um CRM móvel white-label com Expo Router e builds nativos versionados, e um app de escala de plantão em Flutter com Firebase. Faço o ciclo completo — bump de versão, build assinado, upload por ASC API e Play Developer API — sem pipeline gerenciado.",
        exp2Desc3: "Também respondo pela infraestrutura: migração completa de AWS EC2 para VPS (bancos e objetos), cerca de 20 processos de oito negócios atrás de Caddy, observabilidade com Prometheus/Grafana/Loki/Alertmanager e backup com PITR provado (RTO medido em 38 minutos).",
        proj11Desc: "Ecossistema de energia por assinatura: app mobile React Native publicado nas duas lojas mais a API que sustenta a operação — 184 mil linhas, o maior código do meu portfólio. Três integrações de distribuidora capturando fatura por contingência (quando uma falha, a outra assume), reconciliação de faturas em lote, leitura de PDF de concessionária, bandeira tarifária e créditos de energia. Integração com Solarz para 14 usinas.",
        proj11Subtitle: "App e plataforma de energia por assinatura",
        proj12Desc: "App dos pais e app do condutor, ambos em Flutter e publicados na App Store e Google Play. Tracking em tempo real do condutor para o responsável, fluxo “encontrar van” com chat, geocoding com validação cruzada de endereço de escola e gate de consentimento LGPD servido pelo backend. Push resolvido de forma diferente em cada app: FCM no Android e no condutor, APNs direto no app dos pais depois que o Firebase corrompeu no iOS. Corrigi também um IDOR no chat.",
        proj12Subtitle: "Dois apps Flutter em produção nas lojas",
        proj13Desc: "Pipeline de leitura de PDF de propostas comerciais no ERP da Vanlink. A versão com modelo local de 3B alucinava campos e levava de 4 a 8 minutos por documento; migrei para Claude Sonnet 5 com chunking adequado e o tempo caiu para 10 segundos, com 5 de 5 campos corretos onde antes errava. A IA local continua servida pela rede Docker interna, nunca pelo domínio público.",
        proj13Subtitle: "De 8 minutos para 10 segundos",
        proj14Desc: "Plataforma de ensino a distância em produção, com 106 mil linhas de código e deploy automatizado por GitHub Actions em VPS próprio. Gestão de cursos, trilhas, matrículas e acompanhamento de alunos.",
        proj14Subtitle: "LMS em produção",
        proj15Desc: "App Flutter para gestão de escala de plantão de um centro de operações de rede, com backend Firebase. Distribuição de turnos, troca entre plantonistas e notificação de mudança.",
        proj15Subtitle: "App de escala de plantão",
        proj16Desc: "Migrei toda a operação de AWS EC2 para um VPS de 8 vCPU e 32 GB, incluindo bancos e objetos, e hoje sustento cerca de 20 processos de oito negócios distintos atrás de Caddy com certificado wildcard por DNS-01. Observabilidade completa com Prometheus, Grafana, Loki, Alertmanager e exporters. O backup tem PITR provado, não presumido: um restore com recovery_target_time parou a 1,2 segundo do alvo, com dado validado e RTO medido em 38 minutos.",
        proj16Subtitle: "20 processos, 8 negócios, 1 servidor",
    },
    en: {
        formSentTitle: "Message sent",
        formSentText: "It landed straight in my inbox. I'll get back to you within 1 business day.",
        formSentAgain: "Send another message",
        aboutStat3: "Own Products",
        aboutStat4: "Apps on Stores",
        aboutStat5: "Languages (code)",
        aboutStat6: "Languages (spoken)",
        projFilterMobile: "Mobile",
        projFilterInfra: "Infra",
        formConsent: "I agree my data will be used only to reply to this message.",
        formSending: "Sending...",
        formSuccess: "Message sent. I'll get back to you within 1 business day.",
        formErrorRequired: "Please fill in all fields.",
        formErrorEmail: "Please enter a valid email address.",
        formErrorConsent: "You need to agree to the use of your data to be contacted back.",
        formErrorRate: "Too many messages in a short time. Please wait a few minutes and try again.",
        formErrorNetwork: "Couldn't connect. Check your internet and try again.",
        formErrorGeneric: "Couldn't send right now. Please try again shortly.",
        proj1Subtitle: "Satellite-based socio-environmental certification",
        proj1Desc: "SaaS platform that issues socio-environmental certificates for rural properties by cross-referencing the official CAR geometry against nine federal datasets in PostGIS. The certificate is a PDF signed with ICP-Brasil A1, carrying a verifiable QR code and hash, delivered in under 5 minutes after payment. Nationwide coverage, with its own MVT tile server. 65k lines of code.",
        proj2Subtitle: "Capital and funding intelligence (BYOK)",
        proj2Desc: "Platform that monitors official capital and funding sources, computes an explainable fit score between the company profile and each opportunity, and analyses the full document with AI. BYOK is the differentiator: the LLM key belongs to the client (OpenAI, Anthropic, Groq or Gemini) and the analysis never leaves their account. Hybrid BM25 + embeddings search over TCU case law and Law 14.133/21. 28 data entities, 50 API routes.",
        proj3Subtitle: "Autonomous agent for public tenders",
        proj3Desc: "An agent that continuously reads every public tender published in Brazil and delivers only the ones the company can actually win, quoting the literal clause that backs each claim. It validates that the tender truly exists before indexing — no phantom tenders. Multi-pass legal analysis of eligibility, detection of competition-restricting clauses, and TCU case law cross-checked against every identified risk. Specialist chat with RAG over the account's tenders. 51 entities, 68 API routes, 79k lines.",
        proj4Subtitle: "Bank payment orchestration",
        proj4Desc: "Payment orchestrator written in Go for companies that pay at scale. It takes the batch from the ERP, pre-validates against the bank API, requires human approval with RBAC, and executes via PIX REST or CNAB 240 batch over audited SFTP. Per-payment idempotency, versioned mTLS certificates per bank connection, signed webhooks with traceable retries, and an immutable event trail. 21 versioned tables, 50 HTTP routes, separate API and worker binaries.",
        proj5Subtitle: "Corporate mental health with local ML",
        proj5Desc: "Full corporate mental health platform across three surfaces on a single backend: a React Native employee app, an HR dashboard, and a proprietary ML engine. The differentiator is real privacy: multilingual embeddings run on ONNX Runtime inside the Node process itself, with zero calls to third-party AI. COPSOQ III taxonomy with seven psychosocial risk dimensions, extractive summarisation via TextRank, and an action plan following the NR-01 hierarchy. 96k lines across the four repos.",
        proj6Subtitle: "Predictive judicial provisioning",
        proj6Desc: "Predictive litigation risk classification for accounting provisions under CPC 25 / IAS 37, with AI running 100% on-premise — no token leaves the client's perimeter. XGBoost and LightGBM with mandatory SHAP explanation of the top-5 features, LLMs served by vLLM (Llama 3.3 70B FP8, Sabiá-3, BGE-M3), and an accounting snapshot sealed by a database trigger: immutable and verifiable offline by hash. Anything below 0.70 confidence goes to human review. 50k lines.",
        proj7Subtitle: "Judicial deposit reconciliation",
        proj7Desc: "The bank statement speaks in deposit IDs, the court speaks in case numbers — the Vault ties them together. It ingests bank statements in CNAB 240 over SFTP, syncs cases and payout orders via DataJud/CNJ and PROJUDI (SOAP), and reconciles deposit ↔ case ↔ payout in a four-layer engine. Airflow orchestration: CNAB daily, courts every two hours. 21 tables, deployed on Kubernetes.",
        proj8Subtitle: "White-label mobile CRM for agencies",
        proj8Desc: "Mobile CRM published on both stores, built for agencies that work outside the office. Deal pipeline, contacts, activities, per-client deliverables, media library and billing — 29 screens across nine domains, with Expo Router and versioned native iOS and Android builds. White-label multi-tenant backend: each agency signs in on its own subdomain, under its own brand. 30 data entities.",
        proj9Subtitle: "B2B smart gatehouse",
        proj9Desc: "Multi-tenant SaaS that unifies truck scheduling, visitor control and room booking in a single gatehouse — with a kiosk PWA running on the reception tablet. Turborepo monorepo with three applications (web, API, kiosk), its own design system, and internationalisation in five languages. 20 entities, 35 screens, subscription billing via Stripe.",
        proj10Subtitle: "Energy management for condominiums",
        proj10Desc: "Ends energy cost-splitting by ideal fraction: a meter per unit, monthly readings, configurable tariffs and individual billing by boleto or PIX with automatic settlement via webhook. Go backend with hexagonal architecture and PostgreSQL schema-per-tenant (search_path set in middleware), four access roles, and idempotent billing — it never charges the same reading twice. 15 tables, internal event bus.",
        proj11Subtitle: "Subscription energy app and platform",
        proj11Desc: "Subscription energy ecosystem: a React Native mobile app published on both stores plus the API that runs the operation — 184k lines, the largest codebase in my portfolio. Three utility integrations capturing invoices by contingency (when one fails, the next takes over), batch invoice reconciliation, utility PDF parsing, tariff flags and energy credits. Solarz integration across 14 plants.",
        proj12Subtitle: "Two Flutter apps live on both stores",
        proj12Desc: "A parents' app and a drivers' app, both in Flutter and published on the App Store and Google Play. Real-time driver-to-guardian tracking, a \"find the van\" flow with chat, geocoding with cross-validated school addresses, and an LGPD consent gate served by the backend. Push solved differently per app: FCM on Android and on the driver app, direct APNs on the parents' app after the Firebase project got corrupted on iOS. I also fixed an IDOR in the chat flow.",
        proj13Subtitle: "From 8 minutes to 10 seconds",
        proj13Desc: "A PDF parsing pipeline for commercial proposals inside the Vanlink ERP. The version running a local 3B model hallucinated fields and took 4 to 8 minutes per document; I migrated it to Claude Sonnet 5 with proper chunking and the time dropped to 10 seconds, with 5 out of 5 fields correct where it previously failed. The local AI is still served over the internal Docker network, never over the public domain.",
        proj14Subtitle: "LMS in production",
        proj14Desc: "A distance-learning platform in production, 106k lines of code, with automated deployment via GitHub Actions to a dedicated VPS. Course, track and enrolment management with student progress tracking.",
        proj15Subtitle: "On-call scheduling app",
        proj15Desc: "A Flutter app for managing the on-call rota of a network operations centre, with a Firebase backend. Shift distribution, swaps between operators and change notifications.",
        proj16Subtitle: "20 processes, 8 businesses, 1 server",
        proj16Desc: "I migrated the whole operation from AWS EC2 to an 8 vCPU / 32 GB VPS, databases and object storage included, and today I run around 20 processes for eight distinct businesses behind Caddy with a wildcard certificate issued over DNS-01. Full observability with Prometheus, Grafana, Loki, Alertmanager and exporters. The backup has proven PITR, not assumed: a restore with recovery_target_time landed 1.2 seconds from target, data validated, RTO measured at 38 minutes.",
        navHome: 'Home',
        navAbout: 'About',
        navExperience: 'Experience',
        navProjects: 'Projects',
        navSkills: 'Stack',
        navContact: 'Contact',
        navCurriculum: 'Resume',
        heroGreeting: "Hi, I'm",
        heroRole: 'Full-Stack Developer,Software Engineer,AI Specialist,Solutions Architect',
        heroDescription: "I architect and build end-to-end SaaS platforms — 10 proprietary products in production, <span class=\"text-accent\">mobile</span> apps on both stores, <span class=\"text-accent\">ML and LLMs running on-premise</span>, and the <span class=\"text-accent\">infrastructure</span> that keeps it all up.",
        heroBtnProjects: 'View Projects',
        heroBtnContact: 'Contact',
        heroBadge: 'Available for projects',
        heroScroll: 'scroll',
        aboutTitle: 'About Me',
        aboutLead: "Trilingual full-stack developer who takes a product from design to production — and then keeps it running.",
        aboutDesc1: "I write backends in <strong>Go</strong>, <strong>Python</strong>, <strong>Node/TypeScript</strong>, <strong>Java</strong> and <strong>PHP</strong>, picking the language for the problem rather than the trend: Go where idempotency and concurrency guarantees matter (bank orchestration, billing), Python where the data and ML ecosystem wins (PostGIS geoprocessing, XGBoost, vLLM), Node where the whole team shares types with the front end. On the front end, <strong>React</strong> and <strong>Next.js</strong>; on mobile, <strong>React Native</strong> and <strong>Flutter</strong> — with <strong>six apps published</strong> on the App Store and Google Play, including the hard cases: direct APNs when Firebase breaks on iOS, signed builds without relying on a managed pipeline.",
        aboutDesc2: "I apply <strong>AI where it solves something measurable</strong>, and I prefer running it inside the client's perimeter: multilingual embeddings on ONNX inside the Node process itself, LLMs served by on-premise vLLM, XGBoost with mandatory SHAP when the decision will face an audit. In one document extraction pipeline, swapping the local model for a larger one with proper chunking took the runtime from 8 minutes to 10 seconds.",
        aboutStat1: 'Years of Experience',
        aboutStat2: 'Projects Delivered',
        experienceTitle: 'Experience',
        exp1Title: 'Full Stack Developer',
        exp1Period: '2025 — Present',
        exp1Desc: "I lead the development and architecture of the integrated MIS and CRM platform, and I own the <strong>two Flutter mobile apps published on the App Store and Google Play</strong> — the guardians' app and the drivers' app. On mobile I solved the problems that aren't in the tutorial: real-time driver-to-guardian tracking, an LGPD consent gate served by the backend, geocoding with cross-validated school addresses, and push notifications taking a different path per platform (FCM on Android, <strong>direct APNs on iOS</strong> after the Firebase project got corrupted). I also fixed an IDOR in the guardian-driver chat flow.",
        exp2Title: 'Developer & Consultant',
        exp2Period: '2024 — Present',
        exp2Desc: "Chief technology officer: I design the architecture, build and keep in production a catalogue of <strong>10 proprietary products</strong> — satellite-based socio-environmental certification, capital and funding intelligence, an autonomous tender agent, bank payment orchestration in Go, a corporate mental health platform with local ML, predictive judicial provisioning with on-premise AI, judicial deposit reconciliation, a white-label mobile CRM, a smart gatehouse and condominium energy management.",
        exp3Title: 'Java & PHP Developer',
        exp3Period: '2024 — 2025',
        exp3Desc: 'Full-Stack developer with Java (Spring Boot, Hibernate/JPA, Maven) and PHP (Laravel) for high-performance RESTful APIs. Technical leadership in Python and Machine Learning projects, focused on optimizing data pipelines (ETL/ELT) for the pharmaceutical sector. Created BlauSight — a quality management system with generative AI — and Ballesol CareAI, an E2E encrypted AI agent hosted on AWS.',
        exp4Title: 'IT Support Agent',
        exp4Period: '2023 — 2024',
        exp4Desc: 'Joined Positivo\'s Tech Services team providing technical support to International Meal Company (IMC). Responsible for backlog administration and triage, demand distribution across the team, and applying ITIL best practices for severity-based prioritization. Maintained direct communication with vendors to resolve technical issues involving infrastructure, networking, and mission-critical systems. Hands-on experience in complex environment troubleshooting and SLA management at scale.',
        exp5Title: 'Oracle Technical Consultant',
        exp5Period: '2023',
        exp5Desc: 'Worked on national and international Oracle ecosystem implementation projects. Developed corporate system integrations using Oracle Integration Cloud (OIC), building orchestration flows, data transformations, and REST/SOAP API connections. Created analytical and operational reports with Oracle BI Publisher for decision-making. Experience in enterprise environments with complex implementation cycles and multinational stakeholders.',
        exp6Title: 'N1 Support Technician',
        exp6Period: '2022 — 2023',
        exp6Desc: 'Direct technical support to the Curitiba City Hall, covering diagnosis and resolution of software, hardware, and network issues. Constant collaboration with infrastructure teams, NOC, and field technicians for efficient incident escalation. Responsible for ticket documentation and active contribution to the project knowledge base, ensuring traceability and continuous improvement of support processes.',
        projectsTitle: 'Featured Projects',
        projFilterAll: 'All',
        projFilterAi: 'AI / ML',
        projFilterPlatform: 'Platforms',
        projFilterSystem: 'Systems',
        skillsTitle: 'Tech Stack',
        skillsCat1: 'Languages',
        skillsCat3: 'AI / ML & Data',
        skillsCat4: 'Cloud & DevOps',
        skillsCat6: 'Mobile & Cross-Platform',
        contactTitle: "Let's Talk?",
        contactDesc: "I'm always open to new opportunities, challenging projects, and strategic partnerships. Let's build something extraordinary together.",
        contactPhone: 'Phone',
        formName: 'Name',
        formSubject: 'Subject',
        formMessage: 'Message',
        formSubmit: 'Send Message',
        footerText: '© 2026 Samuel Mauli. Curitiba, PR.',
        aboutDesc3: "I'm also the <strong>SRE of my own operation</strong>: I migrated everything off AWS EC2 onto a VPS that today runs around 20 processes for eight businesses, with Caddy, full observability (Prometheus, Grafana, Loki, Alertmanager) and backups with <strong>proven PITR</strong> — a restore that landed 1.2 seconds from target, with RTO measured at 38 minutes. A backup without a tested restore isn't a backup.",
        exp1Desc2: "On the backend, payment control engineering and API orchestration with gateways and messaging, cross-stack work in PHP, Go, Python and Node.js, and process automation with AI — including a document extraction pipeline that went from 8 minutes to 10 seconds per document by swapping the local model for a larger LLM with proper chunking. On-premise infrastructure behind VPN, Docker, CI/CD, MySQL and PostgreSQL.",
        exp2Desc2: "On the <strong>mobile</strong> side, I published and maintain four apps on the stores under Doublethree: a subscription energy app in React Native (backed by a 184k-line API and three utility integrations capturing invoices by contingency), the corporate mental health app in React Native, a white-label mobile CRM with Expo Router and versioned native builds, and an on-call scheduling app in Flutter with Firebase. I run the full cycle — version bump, signed build, upload via ASC API and Play Developer API — with no managed pipeline.",
        exp2Desc3: "I also own the infrastructure: a full migration from AWS EC2 to a VPS (databases and object storage), around 20 processes for eight businesses behind Caddy, observability with Prometheus/Grafana/Loki/Alertmanager, and backups with proven PITR (RTO measured at 38 minutes).",
    },
    es: {
        formSentTitle: "Mensaje enviado",
        formSentText: "Llegó directo a mi correo. Respondo en hasta 1 día hábil.",
        formSentAgain: "Enviar otro mensaje",
        aboutStat3: "Productos Propios",
        aboutStat4: "Apps en Tiendas",
        aboutStat5: "Lenguajes",
        aboutStat6: "Idiomas",
        projFilterMobile: "Mobile",
        projFilterInfra: "Infra",
        formConsent: "Acepto que mis datos se usen solo para responder este contacto.",
        formSending: "Enviando...",
        formSuccess: "Mensaje enviado. Respondo en hasta 1 día hábil.",
        formErrorRequired: "Completa todos los campos.",
        formErrorEmail: "Ingresa un correo electrónico válido.",
        formErrorConsent: "Es necesario aceptar el uso de los datos para responderte.",
        formErrorRate: "Demasiados mensajes en poco tiempo. Espera unos minutos e inténtalo de nuevo.",
        formErrorNetwork: "No se pudo conectar. Revisa tu internet e inténtalo de nuevo.",
        formErrorGeneric: "No se pudo enviar ahora. Inténtalo de nuevo en unos instantes.",
        proj1Subtitle: "Certificación socioambiental por satélite",
        proj1Desc: "Plataforma SaaS que emite certificados socioambientales de inmuebles rurales cruzando la geometría oficial del CAR contra nueve bases federales en PostGIS. El certificado sale en PDF firmado con ICP-Brasil A1, con QR y hash verificables, en menos de 5 minutos tras el pago. Cobertura nacional, con servidor de tiles MVT propio. 65 mil líneas de código.",
        proj2Subtitle: "Inteligencia de capital y fomento (BYOK)",
        proj2Desc: "Plataforma que monitorea fuentes oficiales de capital y fomento, calcula un score de fit explicable entre el perfil de la empresa y cada oportunidad, y analiza el documento completo con IA. El modelo BYOK es el diferencial: la clave del LLM es del cliente y el análisis nunca sale de su cuenta. Búsqueda híbrida BM25 + embeddings. 28 entidades, 50 rutas de API.",
        proj3Subtitle: "Agente autónomo de licitaciones públicas",
        proj3Desc: "Agente que lee continuamente las licitaciones publicadas en Brasil y entrega solo las que la empresa puede ganar, citando el fragmento literal que prueba cada afirmación. Valida que la licitación exista de hecho antes de indexar. Análisis jurídico multi-paso de habilitación, detección de cláusulas restrictivas y jurisprudencia del TCU cruzada contra cada riesgo. Chat especialista con RAG. 51 entidades, 68 rutas de API.",
        proj4Subtitle: "Orquestación de pagos bancarios",
        proj4Desc: "Orquestador de pagos escrito en Go para quien paga a escala. Recibe el lote del ERP, prevalida contra la API del banco, exige aprobación humana con RBAC y ejecuta por PIX REST o lote CNAB 240 vía SFTP auditado. Idempotencia por pago, certificados mTLS versionados, webhooks firmados con retry rastreable y trazabilidad inmutable. 21 tablas, 50 rutas HTTP.",
        proj5Subtitle: "Salud mental corporativa con ML local",
        proj5Desc: "Plataforma completa de salud mental corporativa en tres superficies sobre un backend único: app del colaborador en React Native, panel de RH y un motor de ML propio. El diferencial es la privacidad real: embeddings multilingües en ONNX Runtime dentro del propio proceso Node, sin llamadas a IA de terceros. Taxonomía COPSOQ III con siete dimensiones, resumen extractivo por TextRank y plan de acción NR-01. 96 mil líneas.",
        proj6Subtitle: "Provisión judicial predictiva",
        proj6Desc: "Clasificación predictiva de riesgo procesal para provisión contable bajo CPC 25 / IAS 37, con IA 100% on-premise — ningún token sale del perímetro del cliente. XGBoost y LightGBM con explicación SHAP obligatoria, LLMs servidos por vLLM, y snapshot contable sellado por trigger en la base: inmutable y verificable offline por hash. Confianza bajo 0,70 va a revisión humana. 50 mil líneas.",
        proj7Subtitle: "Conciliación de depósitos judiciales",
        proj7Desc: "El extracto del banco habla en ID de depósito, el tribunal habla en número de proceso — el Vault une los dos. Ingiere extractos en CNAB 240 por SFTP, sincroniza procesos y libramientos vía DataJud/CNJ y PROJUDI (SOAP), y concilia depósito ↔ proceso ↔ libramiento en un motor de cuatro capas. Orquestación en Airflow. 21 tablas, deploy en Kubernetes.",
        proj8Subtitle: "CRM móvil white-label para agencias",
        proj8Desc: "CRM móvil publicado en las dos tiendas, para agencias que operan fuera de la oficina. Pipeline de negocios, contactos, actividades, entregas por cliente, biblioteca de medios y facturación — 29 pantallas en nueve dominios, con Expo Router y builds nativos versionados. Backend multi-tenant white-label: cada agencia entra por su propio subdominio y con su marca. 30 entidades.",
        proj9Subtitle: "Portería inteligente B2B",
        proj9Desc: "SaaS multi-tenant que unifica agendamiento de camiones, control de visitantes y reserva de salas en una sola portería — con PWA de tótem en la tablet de recepción. Monorepo Turborepo con tres aplicaciones, design system propio e internacionalización en cinco idiomas. 20 entidades, 35 pantallas, billing por suscripción con Stripe.",
        proj10Subtitle: "Gestión de energía en condominios",
        proj10Desc: "Termina con el reparto de energía por fracción ideal: medidor por unidad, lectura mensual, tarifa configurable y cobro individual por boleto o PIX con conciliación automática por webhook. Backend en Go con arquitectura hexagonal y multi-tenant por schema PostgreSQL, cuatro roles de acceso y facturación idempotente. 15 tablas, event bus interno.",
        proj11Subtitle: "App y plataforma de energía por suscripción",
        proj11Desc: "Ecosistema de energía por suscripción: app móvil React Native publicada en las dos tiendas más la API que sostiene la operación — 184 mil líneas, el mayor código de mi portafolio. Tres integraciones de distribuidora capturando factura por contingencia, reconciliación de facturas en lote, lectura de PDF de concesionaria, bandera tarifaria y créditos de energía. Integración con Solarz para 14 plantas.",
        proj12Subtitle: "Dos apps Flutter en producción en las tiendas",
        proj12Desc: "App de los padres y app del conductor, ambos en Flutter y publicados en App Store y Google Play. Tracking en tiempo real del conductor al responsable, flujo \"encontrar la van\" con chat, geocoding con validación cruzada de direcciones de escuela y gate de consentimiento LGPD servido por el backend. Push resuelto distinto en cada app: FCM en Android y en el conductor, APNs directo en el app de los padres. También corregí un IDOR en el chat.",
        proj13Subtitle: "De 8 minutos a 10 segundos",
        proj13Desc: "Pipeline de lectura de PDF de propuestas comerciales en el ERP de Vanlink. La versión con modelo local de 3B alucinaba campos y tardaba de 4 a 8 minutos por documento; migré a Claude Sonnet 5 con chunking adecuado y el tiempo bajó a 10 segundos, con 5 de 5 campos correctos donde antes fallaba. La IA local sigue servida por la red Docker interna, nunca por el dominio público.",
        proj14Subtitle: "LMS en producción",
        proj14Desc: "Plataforma de educación a distancia en producción, con 106 mil líneas de código y deploy automatizado por GitHub Actions en un VPS propio. Gestión de cursos, rutas, matrículas y seguimiento de alumnos.",
        proj15Subtitle: "App de turnos de guardia",
        proj15Desc: "App Flutter para gestión de turnos de guardia de un centro de operaciones de red, con backend Firebase. Distribución de turnos, cambios entre operadores y notificación de cambios.",
        proj16Subtitle: "20 procesos, 8 negocios, 1 servidor",
        proj16Desc: "Migré toda la operación de AWS EC2 a un VPS de 8 vCPU y 32 GB, incluyendo bases y objetos, y hoy sostengo cerca de 20 procesos de ocho negocios distintos detrás de Caddy con certificado wildcard por DNS-01. Observabilidad completa con Prometheus, Grafana, Loki, Alertmanager y exporters. El backup tiene PITR probado, no presumido: un restore con recovery_target_time paró a 1,2 segundos del objetivo, con RTO medido en 38 minutos.",
        navHome: 'Inicio',
        navAbout: 'Sobre Mí',
        navExperience: 'Experiencia',
        navProjects: 'Proyectos',
        navSkills: 'Stack',
        navContact: 'Contacto',
        navCurriculum: 'CV',
        heroGreeting: 'Hola, soy',
        heroRole: 'Desarrollador Full-Stack,Ingeniero de Software,Especialista en IA,Arquitecto de Soluciones',
        heroDescription: "Diseño y construyo plataformas SaaS de punta a punta — 10 productos propios en producción, apps <span class=\"text-accent\">mobile</span> en las dos tiendas, <span class=\"text-accent\">ML y LLM corriendo on-premise</span> y la <span class=\"text-accent\">infraestructura</span> que lo sostiene todo.",
        heroBtnProjects: 'Ver Proyectos',
        heroBtnContact: 'Contacto',
        heroBadge: 'Disponible para proyectos',
        heroScroll: 'scroll',
        aboutTitle: 'Sobre Mí',
        aboutLead: "Desarrollador full-stack trilingüe que lleva el producto del diseño a la producción — y después lo mantiene en el aire.",
        aboutDesc1: "Escribo backend en <strong>Go</strong>, <strong>Python</strong>, <strong>Node/TypeScript</strong>, <strong>Java</strong> y <strong>PHP</strong>, eligiendo el lenguaje por el problema y no por la moda: Go donde importan la idempotencia y la concurrencia (orquestación bancaria, facturación), Python donde manda el ecosistema de datos y ML (geoprocesamiento en PostGIS, XGBoost, vLLM), Node donde todo el equipo comparte tipos con el front. En el front-end, <strong>React</strong> y <strong>Next.js</strong>; en mobile, <strong>React Native</strong> y <strong>Flutter</strong> — con <strong>seis apps publicadas</strong> en la App Store y Google Play, incluidos los casos difíciles: APNs directo cuando Firebase se corrompe en iOS, build firmado sin depender de pipeline gestionado.",
        aboutDesc2: "Aplico <strong>IA donde resuelve algo medible</strong>, y prefiero ejecutarla dentro del perímetro del cliente: embeddings multilingües en ONNX dentro del propio proceso Node, LLMs servidos por vLLM on-premise, XGBoost con SHAP obligatorio cuando la decisión va a una auditoría. En un pipeline de extracción documental, cambiar el modelo local por uno mayor con chunking correcto llevó el tiempo de 8 minutos a 10 segundos.",
        aboutStat1: 'Años de Experiencia',
        aboutStat2: 'Proyectos Entregados',
        experienceTitle: 'Experiencia',
        exp1Title: 'Desarrollador Pleno',
        exp1Period: '2025 — Actualidad',
        exp1Desc: "Lidero el desarrollo y la arquitectura de la plataforma integrada de SGI y CRM, y soy responsable de las <strong>dos aplicaciones móviles en Flutter publicadas en la App Store y Google Play</strong> — la app de los responsables y la de los conductores. En mobile resolví los problemas que no están en el tutorial: tracking en tiempo real del conductor al responsable, gate de consentimiento LGPD servido por el backend, geocoding con validación cruzada de direcciones de escuela y push notification con camino distinto por plataforma (FCM en Android, <strong>APNs directo en iOS</strong> después de que el proyecto Firebase se corrompió). También corregí un IDOR en el chat entre responsable y conductor.",
        exp2Title: 'Developer & Consultor',
        exp2Period: '2024 — Actualidad',
        exp2Desc: "Director de tecnología: diseño la arquitectura, construyo y mantengo en producción el catálogo de <strong>10 productos propios</strong> — certificación socioambiental por satélite, inteligencia de capital y fomento, agente autónomo de licitaciones, orquestación de pagos bancarios en Go, plataforma de salud mental corporativa con ML local, provisión judicial predictiva con IA on-premise, conciliación de depósitos judiciales, CRM móvil white-label, portería inteligente y gestión de energía en condominios.",
        exp3Title: 'Desarrollador Java & PHP',
        exp3Period: '2024 — 2025',
        exp3Desc: 'Desarrollador Full-Stack con Java (Spring Boot, Hibernate/JPA, Maven) y PHP (Laravel) para APIs RESTful de alto rendimiento. Liderazgo técnico en proyectos de Python y Machine Learning, centrado en la optimización de pipelines de datos (ETL/ELT) para el sector farmacéutico. Creación de BlauSight — sistema de gestión de calidad con IA generativa — y Ballesol CareAI, agente de IA con cifrado E2E alojado en AWS.',
        exp4Title: 'Agente de Soporte TI',
        exp4Period: '2023 — 2024',
        exp4Desc: 'Integré el equipo de Tech Services de Positivo brindando soporte técnico a International Meal Company (IMC). Responsable de la administración y triaje del backlog, distribución de demandas al equipo y aplicación de buenas prácticas ITIL para priorización por criticidad. Mantuve comunicación directa con proveedores para resolución de cuestiones técnicas que involucraban infraestructura, redes y sistemas críticos de operación. Experiencia práctica en troubleshooting de ambientes complejos y gestión de SLAs a gran escala.',
        exp5Title: 'Consultor Técnico Oracle',
        exp5Period: '2023',
        exp5Desc: 'Trabajé en proyectos nacionales e internacionales de implementación del ecosistema Oracle. Desarrollé integraciones entre sistemas corporativos utilizando Oracle Integration Cloud (OIC), construyendo flujos de orquestación, transformación de datos y conexiones con APIs REST/SOAP. Creé informes analíticos y operacionales con Oracle BI Publisher para toma de decisiones. Experiencia en ambientes enterprise con ciclos de implementación complejos y stakeholders multinacionales.',
        exp6Title: 'Técnico de Soporte N1',
        exp6Period: '2022 — 2023',
        exp6Desc: 'Soporte técnico directo al Municipio de Curitiba, abarcando diagnóstico y resolución de problemas de software, hardware y red. Colaboración constante con equipos de infraestructura, NOC y técnicos de campo para escalamiento eficiente de incidentes. Responsable de la documentación de tickets y contribución activa a la base de conocimiento del proyecto, garantizando trazabilidad y mejora continua de los procesos de atención.',
        projectsTitle: 'Proyectos Destacados',
        projFilterAll: 'Todos',
        projFilterAi: 'IA / ML',
        projFilterPlatform: 'Plataformas',
        projFilterSystem: 'Sistemas',
        skillsTitle: 'Tech Stack',
        skillsCat1: 'Lenguajes',
        skillsCat3: 'IA / ML & Datos',
        skillsCat4: 'Cloud & DevOps',
        skillsCat6: 'Mobile & Multiplataforma',
        contactTitle: '¿Hablamos?',
        contactDesc: 'Siempre estoy abierto a nuevas oportunidades, proyectos desafiantes y alianzas estratégicas. Construyamos algo extraordinario juntos.',
        contactPhone: 'Teléfono',
        formName: 'Nombre',
        formSubject: 'Asunto',
        formMessage: 'Mensaje',
        formSubmit: 'Enviar Mensaje',
        footerText: '© 2026 Samuel Mauli. Curitiba, PR.',
        aboutDesc3: "También soy el <strong>SRE de mi propia operación</strong>: migré todo de AWS EC2 a un VPS que hoy sostiene cerca de 20 procesos de ocho negocios, con Caddy, observabilidad completa (Prometheus, Grafana, Loki, Alertmanager) y backup con <strong>PITR probado</strong> — un restore que paró a 1,2 segundos del objetivo, con RTO medido en 38 minutos. Backup sin restore probado no lo llamo backup.",
        exp1Desc2: "En el backend, ingeniería de control de pagos y orquestación de APIs con gateways y mensajería, trabajo cross-stack en PHP, Go, Python y Node.js, y automatización de procesos con IA — incluido un pipeline de extracción documental que pasó de 8 minutos a 10 segundos por documento al cambiar el modelo local por un LLM mayor con chunking correcto. Infraestructura on-premise detrás de VPN, Docker, CI/CD y bases MySQL y PostgreSQL.",
        exp2Desc2: "Del lado <strong>mobile</strong>, publiqué y mantengo cuatro apps en las tiendas bajo Doublethree: una app de energía por suscripción en React Native (con una API de 184 mil líneas detrás y tres integraciones de distribuidora capturando factura por contingencia), la app de salud mental corporativa en React Native, un CRM móvil white-label con Expo Router y builds nativos versionados, y una app de turnos de guardia en Flutter con Firebase. Hago el ciclo completo — bump de versión, build firmado, upload por ASC API y Play Developer API — sin pipeline gestionado.",
        exp2Desc3: "También respondo por la infraestructura: migración completa de AWS EC2 a VPS (bases y objetos), cerca de 20 procesos de ocho negocios detrás de Caddy, observabilidad con Prometheus/Grafana/Loki/Alertmanager y backup con PITR probado (RTO medido en 38 minutos).",
    }
};

// ===== LANGUAGE SYSTEM =====
// Idioma corrente — o mesmo valor que setLanguage() persiste. Serve para o
// JS traduzir strings que ele mesmo injeta (status do formulário, rótulo do
// botão durante o envio), já que essas não existem no HTML inicial.
function currentLanguage() {
    var lang = localStorage.getItem('language');
    return (lang && translations[lang]) ? lang : 'pt';
}

function t(key) {
    var lang = currentLanguage();
    if (translations[lang] && translations[lang][key]) return translations[lang][key];
    if (translations.pt && translations.pt[key]) return translations.pt[key];
    return key;
}

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
// Envia de verdade pela infraestrutura da doublethree, em vez de abrir um
// mailto: (que dependia de o visitante ter cliente de e-mail configurado e
// perdia a mensagem em quem usa webmail). O endpoint grava a mensagem e a
// encaminha para o e-mail pessoal do Samuel, com o remetente autenticado da
// doublethree — por isso não cai em spam.
var CONTACT_ENDPOINT = 'https://doublethree.com.br/api/portfolio-contact';

function initContactForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;

    var botao = document.getElementById('contactSubmit');
    var status = document.getElementById('contactStatus');
    var confirmacao = document.getElementById('contactSent');
    var botaoNovaMensagem = document.getElementById('contactAgain');
    var rotuloBotao = botao ? botao.querySelector('[data-key="formSubmit"]') : null;

    // "Enviar outra mensagem" traz o formulário de volta, em branco.
    if (botaoNovaMensagem) {
        botaoNovaMensagem.addEventListener('click', function() {
            if (confirmacao) confirmacao.hidden = true;
            form.hidden = false;
            var primeiroCampo = form.querySelector('#name');
            if (primeiroCampo) primeiroCampo.focus();
        });
    }

    function mostrarStatus(tipo, chave) {
        if (!status) return;
        status.className = 'form-status form-status-' + tipo;
        status.textContent = t(chave);
        status.setAttribute('data-key', chave);
    }

    function limparStatus() {
        if (!status) return;
        status.className = 'form-status';
        status.textContent = '';
        status.removeAttribute('data-key');
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        limparStatus();

        var dados = Object.fromEntries(new FormData(form));
        var consentimento = form.querySelector('#consent');

        if (!dados.name || !dados.email || !dados.subject || !dados.message) {
            mostrarStatus('error', 'formErrorRequired');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(dados.email))) {
            mostrarStatus('error', 'formErrorEmail');
            return;
        }
        if (consentimento && !consentimento.checked) {
            mostrarStatus('error', 'formErrorConsent');
            return;
        }

        if (botao) {
            botao.disabled = true;
            botao.classList.add('is-sending');
        }
        if (rotuloBotao) rotuloBotao.textContent = t('formSending');

        fetch(CONTACT_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: dados.name,
                email: dados.email,
                subject: dados.subject,
                message: dados.message,
                website: dados.website || ''
            }),
            signal: AbortSignal.timeout(15000)
        }).then(function(res) {
            return res.json().catch(function() { return {}; }).then(function(corpo) {
                return { status: res.status, corpo: corpo };
            });
        }).then(function(r) {
            if (r.status === 201) {
                form.reset();
                limparStatus();
                // Troca o formulário pelo card de confirmação — o check é
                // desenhado por CSS quando o elemento deixa de estar hidden.
                if (confirmacao) {
                    form.hidden = true;
                    confirmacao.hidden = false;
                    confirmacao.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                    mostrarStatus('success', 'formSuccess');
                }
                return;
            }
            if (r.status === 429) {
                mostrarStatus('error', 'formErrorRate');
                return;
            }
            if (r.status === 400 && r.corpo && r.corpo.error) {
                // Erro de validação do servidor: mostra a mensagem dele, que é
                // mais específica que qualquer texto genérico traduzido.
                if (status) {
                    status.className = 'form-status form-status-error';
                    status.textContent = r.corpo.error;
                    status.removeAttribute('data-key');
                }
                return;
            }
            mostrarStatus('error', 'formErrorGeneric');
        }).catch(function() {
            mostrarStatus('error', 'formErrorNetwork');
        }).finally(function() {
            if (botao) {
                botao.disabled = false;
                botao.classList.remove('is-sending');
            }
            // Resolve pelo idioma corrente em vez de restaurar um texto
            // capturado no init — o visitante pode ter trocado o idioma.
            if (rotuloBotao) rotuloBotao.textContent = t('formSubmit');
        });
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
