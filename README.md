# 🌿 Farmácia Vida Verde – Landing Page

![Landing Page Preview](https://farmacia-de-manipula-o.vercel.app/) <!-- Substitua por screenshot real depois -->

Uma **landing page moderna e responsiva** para **farmácias de manipulação**, desenvolvida com foco em **experiência do usuário, design limpo e conversão**. Ideal para clínicas que desejam apresentar seus serviços, produtos personalizados e facilitar o contato com os clientes.

> Fundada em 1990, a Farmácia Vida Verde é referência em manipulação magistral em Fortaleza — e esta página traduz sua tradição, cuidado e excelência farmacêutica em uma interface digital elegante e funcional.

---

## ✨ Funcionalidades

- **Design responsivo** — perfeito para mobile, tablet e desktop  
- **Galeria de produtos** com imagens ilustrativas e descrições claras  
- **Carrossel automático** com imagens do laboratório e equipe  
- **Formulário de contato com suporte a upload de receitas** (fotos)  
- **Integração com WhatsApp e e-mail** (links clicáveis)  
- **Mapa embutido** com localização em Fortaleza - CE  
- **Botão flutuante do WhatsApp** sempre visível com micro-interação  
- **Animações suaves** e transições refinadas (hover, scroll, etc.)

---

## 🛠️ Tecnologias Utilizadas

- **[React](https://react.dev/)** – Biblioteca para interfaces dinâmicas  
- **[Vite](https://vitejs.dev/)** – Bundler ultrarrápido para desenvolvimento  
- **[Tailwind CSS](https://tailwindcss.com/)** – Framework de estilização utilitário  
- **[Embla Carousel](https://www.embla-carousel.com/)** – Carrossel leve e performático  
- **[React Icons](https://react-icons.github.io/react-icons/)** – Ícones escaláveis e consistentes  

---

## 🚀 Como Executar Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/Farmacia-de-Manipulacao.git
   cd Farmacia-de-Manipulacao
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. Acesse `http://localhost:5173` no seu navegador.

> 💡 **Dica**: Substitua `seu-usuario` pelo seu nome de usuário do GitHub.

---

## 📸 Personalização

### Adicionar sua logo
1. Coloque seu arquivo de logo (`logo.png` ou `logo.svg`) na pasta **`public/`**  
2. Atualize o caminho em `src/components/Header.jsx`:
   ```jsx
   <img src="/logo.png" alt="Logo Farmácia Vida Verde" />
   ```

### Atualizar dados de contato
Edite as constantes em `src/components/ContactSection.jsx`:
```js
const WHATSAPP_NUMBER = '5585999999999';
const EMAIL = 'contato@vidaverde.com.br';
```

### Substituir imagens do carrossel
Atualize as URLs no array `slides` em `src/components/ImageCarousel.jsx`.

---

## 📄 Licença

Este projeto é de código aberto sob a licença **MIT**.  
Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🙌 Créditos

Desenvolvido por **[Edson Carvalho](https://github.com/Edson468)**  
© 2025 Farmácia Vida Verde – Manipulação com Qualidade desde 1990

---
