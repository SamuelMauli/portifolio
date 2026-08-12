# Portfólio — Samuel Mauli

Site pessoal em **[samuelmauli.github.io/portifolio](https://samuelmauli.github.io/portifolio/)**: plataformas SaaS, apps mobile publicados e a infraestrutura que sustenta os dois.

HTML, CSS e JavaScript puros — sem framework, sem build step, sem dependência de runtime.

## Identidade

| Token | Valor |
|---|---|
| Fundo | `#080808` |
| Acento | `#E8FF47` |
| Superfícies | `#111111` · `#161616` · `#1C1C1C` |
| Display | Syne |
| Texto | DM Sans |

## Estrutura

```
index.html            página única, seções: hero, sobre, experiência,
                      projetos (com filtro por categoria), stack e contato
assets/css/           main.css · animations.css · responsive.css
assets/js/            main.js · parallax.js
assets/images/        hero, projetos e ícones
components/           efeitos isolados
```

## Rodar local

```bash
python3 -m http.server 8000   # http://localhost:8000
```

## Deploy

GitHub Pages pelo workflow em `.github/workflows/` — todo push em `main` publica.

## Acessibilidade — estado atual

`prefers-reduced-motion` hoje cobre apenas o spinner e a confirmação do formulário
(`assets/css/main.css`). Parallax, revelações de scroll e o efeito do hero **não**
respeitam a preferência ainda, e o estilo de foco visível está definido em um único
seletor. Pendente.

---

© 2026 Samuel Mauli · [samuel.mauli@gmail.com](mailto:samuel.mauli@gmail.com) · [LinkedIn](https://www.linkedin.com/in/samuelmauli/)
