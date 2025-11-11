export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative py-24 md:py-32 flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fEZhcm1hY2lhJTIwZGUlMjBtYW5pcHVsYWNhb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // efeito sutil de parallax (opcional)
      }}
    >
      {/* Overlay para garantir legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>

      <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Saúde Personalizada, Feita Sob Medida Para Você
        </h1>
        <p className="text-lg text-white/90 mb-8">
          Fórmulas magistrais com ingredientes de alta pureza, preparadas com cuidado e precisão por nossos farmacêuticos.
        </p>
        <a
          href="#contato"
          className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Agende sua Fórmula
        </a>
      </div>
    </section>
  );
}