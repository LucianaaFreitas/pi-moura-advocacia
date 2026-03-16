# 🏛️ Moura Advocacia - Landing Page

Landing page profissional para escritório de advocacia especializado em Direito do Trabalho, desenvolvida com HTML5 semântico e CSS3 puro.

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Componentes](#componentes)
- [Design System](#design-system)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Visualizar](#como-visualizar)
- [Responsividade](#responsividade)
- [Customização](#customização)

---

## 🎯 Sobre o Projeto

Este projeto é uma landing page completa para o **Moura Advocacia**, um escritório especializado em Direito do Trabalho. O site foi desenvolvido seguindo as melhores práticas de desenvolvimento web, com foco em:

- ✅ **HTML5 Semântico**: Uso correto de tags semânticas (header, nav, main, section, article, footer)
- ✅ **CSS3 Modular**: Arquitetura CSS organizada em módulos separados para fácil manutenção
- ✅ **Responsividade Total**: Layout adaptável para desktop, tablet e mobile
- ✅ **Performance**: CSS otimizado e carregamento rápido
- ✅ **Acessibilidade**: Estrutura acessível com ARIA labels e navegação por teclado
- ✅ **Sem Frameworks**: CSS puro, sem dependências de frameworks CSS

---

## 📁 Estrutura de Arquivos

```
moura_advocacia/
├── index.html                 # Página principal
├── css/
│   ├── global.css            # Reset, variáveis CSS e estilos base
│   ├── header.css            # Estilos do header/navbar
│   ├── hero.css              # Seção hero principal
│   ├── about.css             # Seção sobre o escritório
│   ├── lawyer.css            # Seção do advogado
│   ├── services.css          # Grid de áreas de atuação
│   ├── differentials.css     # Seção de diferenciais
│   ├── cta.css               # Call-to-action final
│   ├── footer.css            # Rodapé
│   └── responsive.css        # Media queries para responsividade
└── README.md                  # Este arquivo
```

### 📝 Descrição dos Arquivos CSS

| Arquivo | Descrição |
|---------|-----------|
| `global.css` | Reset CSS, variáveis de design (cores, espaçamentos, tipografia), estilos base, utilitários e componentes globais (botões, badges, títulos) |
| `header.css` | Navbar fixo, logo, menu de navegação, botão CTA, menu mobile com toggle |
| `hero.css` | Seção principal com título, descrição, botões, estatísticas (15+ anos, 2k+ causas, 98% satisfação) |
| `about.css` | Seção sobre o escritório, cards de valores (Ética, Atendimento, Compromisso), citação em destaque |
| `lawyer.css` | Apresentação do advogado responsável com foto e biografia |
| `services.css` | Grid 4x2 de áreas de atuação (Rescisão, Horas Extras, Acidente, Assédio, etc.) |
| `differentials.css` | Seção em fundo azul escuro com 4 diferenciais do escritório |
| `cta.css` | Card de conversão final com botões de WhatsApp e Email |
| `footer.css` | Rodapé com 4 colunas (sobre, links, serviços, contato) e redes sociais |
| `responsive.css` | Media queries para tablet (768-1199px) e mobile (até 767px) |

---

## 🧩 Componentes

### 1. **Header/Navbar**
- **Posição**: Fixo no topo
- **Elementos**: 
  - Logo com ícone de martelo jurídico
  - Menu de navegação (Início, O Escritório, O Advogado, Áreas de Atuação, Contato)
  - Botão CTA "Fale com um Advogado"
  - Menu mobile responsivo com toggle
- **Comportamento**: Sombra ao fazer scroll, menu mobile desliza da esquerda

### 2. **Hero Section**
- **Layout**: Grid 2 colunas (conteúdo + imagem)
- **Elementos**:
  - Badge "Especialista em Direito do Trabalho"
  - Título principal com destaque em azul
  - Descrição
  - 2 botões (primário e secundário)
  - 3 estatísticas com números grandes
- **Destaque**: Gradiente sutil no background

### 3. **About Section**
- **Layout**: Grid 2 colunas (conteúdo + imagem)
- **Elementos**:
  - Título e textos descritivos
  - 3 cards de valores com ícones (Ética, Atendimento, Compromisso)
  - Imagem com citação sobreposta
- **Interação**: Cards com hover effect (desliza para direita)

### 4. **Lawyer Section**
- **Layout**: Grid 2 colunas (foto + biografia)
- **Elementos**:
  - Foto placeholder do advogado
  - Nome e título
  - 3 parágrafos de biografia
- **Background**: Cinza claro para contraste

### 5. **Services Section**
- **Layout**: Grid 4x2 (8 cards)
- **Elementos**:
  - Título e descrição da seção
  - 8 cards com ícone, título e descrição
  - Link para contato caso não encontre o serviço
- **Interação**: Cards elevam ao hover

### 6. **Differentials Section**
- **Layout**: Grid 4 colunas
- **Elementos**:
  - Fundo gradiente azul escuro
  - 4 cards translúcidos com blur
  - Ícones, títulos e descrições
- **Destaque**: Efeitos de luz radial no background

### 7. **CTA Section**
- **Layout**: Card centralizado
- **Elementos**:
  - Fundo gradiente escuro
  - Título e subtítulo
  - 2 botões (WhatsApp e Email)
  - Texto informativo
- **Destaque**: Efeito de luz radial sutil

### 8. **Footer**
- **Layout**: Grid 4 colunas + linha de copyright
- **Colunas**:
  1. Logo, descrição e redes sociais
  2. Links úteis (navegação)
  3. Serviços principais
  4. Informações de contato
- **Elementos**: Ícones de redes sociais com hover effect

---

## 🎨 Design System

### Paleta de Cores

```css
/* Cores Primárias */
--color-primary: #1a3a7d           /* Azul Escuro Principal */
--color-primary-dark: #142d5f      /* Azul Escuro Hover */
--color-primary-light: #4a90e2     /* Azul Claro */
--color-secondary: #4a90e2         /* Azul Secundário */

/* Cores de Texto */
--color-text: #333333              /* Texto Principal */
--color-text-light: #666666        /* Texto Secundário */
--color-text-lighter: #999999      /* Texto Terciário */

/* Cores Neutras */
--color-white: #ffffff             /* Branco */
--color-background: #f5f5f5        /* Cinza Claro */
--color-border: #e5e5e5            /* Bordas */
--color-dark: #1a1a1a              /* Escuro */
```

### Tipografia

```css
/* Família */
Font Family: 'Poppins', sans-serif

/* Tamanhos */
--font-size-xs: 0.75rem (12px)
--font-size-sm: 0.875rem (14px)
--font-size-base: 1rem (16px)
--font-size-md: 1.125rem (18px)
--font-size-lg: 1.25rem (20px)
--font-size-xl: 1.5rem (24px)
--font-size-2xl: 2rem (32px)
--font-size-3xl: 2.5rem (40px)
--font-size-4xl: 3rem (48px)
--font-size-5xl: 3.5rem (56px)

/* Pesos */
--font-weight-light: 300
--font-weight-regular: 400
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700
--font-weight-extrabold: 800
```

### Espaçamentos

```css
--spacing-xs: 0.5rem (8px)
--spacing-sm: 1rem (16px)
--spacing-md: 1.5rem (24px)
--spacing-lg: 2rem (32px)
--spacing-xl: 3rem (48px)
--spacing-2xl: 4rem (64px)
--spacing-3xl: 6rem (96px)
--spacing-4xl: 8rem (128px)
```

### Border Radius

```css
--radius-sm: 0.375rem (6px)
--radius-md: 0.5rem (8px)
--radius-lg: 0.75rem (12px)
--radius-xl: 1rem (16px)
--radius-2xl: 1.5rem (24px)
--radius-full: 9999px
```

### Sombras

```css
--shadow-sm: Sombra sutil
--shadow-base: Sombra padrão
--shadow-md: Sombra média
--shadow-lg: Sombra grande
--shadow-xl: Sombra extra grande
```

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Markup semântico moderno
- **CSS3**: Estilos puros com variáveis CSS, Flexbox e Grid
- **Google Fonts**: Fonte Poppins
- **Lucide Icons**: Biblioteca de ícones via CDN
- **Vanilla JavaScript**: Scripts mínimos para menu mobile e scroll suave

### Dependências Externas

```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap">

<!-- Lucide Icons -->
<script src="https://unpkg.com/lucide@latest"></script>
```

---

## 👁️ Como Visualizar

### Opção 1: Abrir Diretamente no Navegador

1. Navegue até a pasta do projeto:
   ```bash
   cd /home/ubuntu/moura_advocacia
   ```

2. Abra o arquivo `index.html` no seu navegador favorito

### Opção 2: Servidor HTTP Local (Recomendado)

#### Com Python:
```bash
cd /home/ubuntu/moura_advocacia
python3 -m http.server 8000
```
Acesse: `http://localhost:8000`

#### Com Node.js (http-server):
```bash
npm install -g http-server
cd /home/ubuntu/moura_advocacia
http-server -p 8000
```
Acesse: `http://localhost:8000`

#### Com PHP:
```bash
cd /home/ubuntu/moura_advocacia
php -S localhost:8000
```
Acesse: `http://localhost:8000`

### Opção 3: Live Server (VS Code)

Se estiver usando Visual Studio Code:
1. Instale a extensão "Live Server"
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

---

## 📱 Responsividade

O site foi desenvolvido com **Mobile-First** approach e possui 3 breakpoints principais:

### Desktop (1200px+)
- Layout completo com grids de 4 colunas
- Hero com 2 colunas
- Navbar completo com todos os links

### Tablet (768px - 1199px)
- Grids reduzidos para 2 colunas
- Hero mantém 2 colunas
- Fontes ligeiramente menores

### Mobile (até 767px)
- Grids em 1 coluna
- Hero empilhado (imagem acima do texto)
- Menu mobile com toggle
- Botões em largura total
- Espaçamentos reduzidos

### Small Mobile (até 480px)
- Fontes ainda menores
- Padding reduzido
- Layout ultra-simplificado

---

## 🎨 Customização

### Alterar Cores

Edite as variáveis CSS em `css/global.css`:

```css
:root {
    --color-primary: #1a3a7d;  /* Sua cor primária */
    --color-secondary: #4a90e2; /* Sua cor secundária */
}
```

### Alterar Fontes

Substitua o link do Google Fonts em `index.html` e a variável em `css/global.css`:

```css
:root {
    --font-primary: 'Sua-Fonte', sans-serif;
}
```

### Substituir Imagens Placeholder

Os placeholders estão como `<div>` com classes específicas:
- `.hero__image-placeholder`
- `.about__image-placeholder`
- `.lawyer__image-placeholder`

Substitua por tags `<img>`:

```html
<!-- Antes -->
<div class="hero__image-placeholder"></div>

<!-- Depois -->
<img src="caminho/da/imagem.jpg" alt="Descrição" class="hero__image">
```

### Alterar Textos

Todos os textos estão diretamente no `index.html`. Localize as seções e edite conforme necessário.

### Alterar Links de Contato

Busque por:
- **WhatsApp**: `https://wa.me/5562999408451` (substitua pelo número desejado)
- **Email**: `mailto:lucianafreitas@gmail.com` (substitua pelo email desejado)

---

## ✨ Recursos Implementados

### Funcionalidades JavaScript

1. **Inicialização de Ícones Lucide**
   ```javascript
   lucide.createIcons();
   ```

2. **Menu Mobile Toggle**
   - Abre/fecha menu ao clicar no botão
   - Fecha menu ao clicar em um link

3. **Smooth Scroll**
   - Navegação suave para âncoras internas

4. **Header Scroll Effect**
   - Adiciona classe `.scrolled` ao fazer scroll
   - Aumenta sombra do header

### Efeitos CSS

- **Hover em Cards**: Elevação e mudança de sombra
- **Hover em Botões**: Elevação e escurecimento
- **Animações de Entrada**: `slideInLeft` e `slideInRight`
- **Gradientes**: Backgrounds sutis com gradientes
- **Glassmorphism**: Cards translúcidos na seção de diferenciais

---

## 📞 Informações de Contato (Exemplo)

- **WhatsApp**: +55 62 9 9940 8451
- **Email**: lucianafreitas@gmail.com
- **Endereço**: Av. Paulista, 1000 - Bela Vista, São Paulo/SP
- **Telefone**: (11) 99999-0000

---

## 📝 Notas Importantes

1. **Imagens**: Atualmente usando placeholders. Substitua por imagens reais para produção.

2. **SEO**: Adicione meta tags adicionais para melhor indexação:
   ```html
   <meta property="og:title" content="Moura Advocacia">
   <meta property="og:description" content="...">
   <meta property="og:image" content="caminho/imagem.jpg">
   ```

3. **Performance**: Otimize imagens antes de usar (compressão, formato WebP).

4. **Analytics**: Adicione Google Analytics ou similar para tracking.

5. **HTTPS**: Use HTTPS em produção para segurança.

---

## 🚀 Próximos Passos Sugeridos

- [ ] Adicionar imagens reais do escritório e advogado
- [ ] Implementar formulário de contato funcional
- [ ] Adicionar Google Analytics
- [ ] Configurar meta tags para redes sociais (Open Graph)
- [ ] Otimizar para SEO (sitemap.xml, robots.txt)
- [ ] Adicionar chat online (ex: WhatsApp Widget)
- [ ] Implementar blog de artigos jurídicos
- [ ] Adicionar testemunhos de clientes
- [ ] Criar versão em múltiplos idiomas

---

## 📄 Licença

Este projeto foi desenvolvido para uso exclusivo do Moura Advocacia.

---

## 👨‍💻 Desenvolvimento

Desenvolvido com ❤️ seguindo as melhores práticas de desenvolvimento web.

**Data**: Março de 2026
**Versão**: 1.0.0

---

## 📚 Referências

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Lucide Icons](https://lucide.dev/)
- [Google Fonts](https://fonts.google.com/)

---

**Qualquer dúvida ou sugestão, entre em contato!** 📧
