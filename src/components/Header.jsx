// Importa o hook useState do React para gerenciar o estado do menu móvel e ícones.
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

// Define o componente Header, que renderiza o cabeçalho da página.
export default function Header() {
  // Cria um estado para controlar a visibilidade do menu móvel.
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Define os links de navegação com seus nomes e destinos.
  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    // Elemento header que permanece fixo no topo da página.
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Bloco do logotipo e nome da farmácia. */}
        <div className="flex items-center gap-3">
          <img
            src="/android-chrome-192x192.png"
            alt="Logo Farmácia Vida Verde"
            className="w-10 h-10 rounded-md"
          />
          <div className="text-primary-600 font-bold text-xl">
            Farmácia Vida Verde
          </div>
        </div>

        {/* Menu de navegação para desktops. */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative font-medium text-gray-700 hover:text-primary-600 transition-colors group"
            >
              {link.name}
              {/* Efeito de linha animada sob o link ao passar o mouse. */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Botão para abrir/fechar o menu em dispositivos móveis. */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menu de navegação para dispositivos móveis, visível quando 'mobileMenuOpen' é verdadeiro. */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}