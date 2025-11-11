// Define o componente Footer, que renderiza o rodapé da página.
export default function Footer() {
  return (
    // Elemento footer com classes de estilo para fundo, cor do texto e preenchimento.
    <footer className="bg-primary-900 text-white py-10">
      <div className="container mx-auto px-4 text-center">
        {/* Nome da farmácia. */}
        <div className="text-xl font-bold mb-2">Farmácia Vida Verde</div>
        {/* Slogan da farmácia. */}
        <p className="text-primary-200 mb-4">Manipulação com qualidade e confiança desde 1990.</p>
        {/* Direitos autorais com o ano atual dinâmico. */}
        <p className="text-sm text-primary-300">
          &copy; {new Date().getFullYear()} Criado por Edson Carvalho. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}