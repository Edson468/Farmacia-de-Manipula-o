import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useCallback, useState } from 'react';

const slides = [
  'https://plus.unsplash.com/premium_photo-1682141246821-57da8410a1ec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RmFybWFjaWElMjAlMjBNYW5pcHVsYWNhbyUyMGxhYm9yYXRvcmlvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900', // Laboratório limpo
  ' https://media.istockphoto.com/id/1344251439/pt/foto/young-pharmacist-checking-the-shelves-with-a-digital-tablet-at-the-pharmacy.webp?a=1&b=1&s=612x612&w=0&k=20&c=TIBLQJZNdjQ-PwQ4hoiAQWGTqTwiCXiog_C6uw5M-1k=', // Farmacêutico
  ' https://media.istockphoto.com/id/1379415199/pt/foto/scientist-group-working-with-many-lab-equipment-for-research-at-laboratory.webp?a=1&b=1&s=612x612&w=0&k=20&c=3b1C9O5o_YxddtI5HIg_9JjxwbQTq8N_k4q_svcijPU=', // Manipulação
];


export default function ImageCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 50 }); // 5.0s de duração suave
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const [autoplayActive, setAutoplayActive] = useState(true);

  // Autoplay com pausa em interação
  useEffect(() => {
    if (!emblaApi) return;

    const play = () => {
      setAutoplayActive(true);
    };
    const pause = () => {
      setAutoplayActive(false);
    };

    emblaApi.on('pointerDown', pause);
    emblaApi.on('pointerUp', play);
    emblaApi.on('select', play); // retoma após navegação manual

    return () => {
      emblaApi.off('pointerDown', pause);
      emblaApi.off('pointerUp', play);
      emblaApi.off('select', play);
    };
  }, [emblaApi]);

  // Autoplay em si
  useEffect(() => {
    if (!emblaApi || !autoplayActive) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000); // 6 segundos entre slides

    return () => clearInterval(interval);
  }, [emblaApi, autoplayActive]);

  // Atualiza índice selecionado
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setAutoplayActive(false); // para após navegação manual
      setTimeout(() => setAutoplayActive(true), 8000); // retoma após 8s
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setAutoplayActive(false);
      setTimeout(() => setAutoplayActive(true), 8000);
    }
  }, [emblaApi]);

  return (
    <section id="sobre" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Sobre Nós</h2>
          <p className="text-gray-700 mt-4 max-w-3xl mx-auto text-lg">
            Fundada em 1990, a Farmácia Vida Verde é referência em manipulação magistral em Fortaleza. 
            Com mais de 30 anos de experiência, combinamos tradição, tecnologia de ponta e rigor farmacêutico 
            para entregar fórmulas personalizadas com segurança, eficácia e carinho.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div
            className="rounded-2xl overflow-hidden shadow-lg relative"
            ref={emblaRef}
            onMouseEnter={() => setShowArrows(true)}
            onMouseLeave={() => setShowArrows(false)}
          >
            <div className="flex">
              {slides.map((img, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <img
                    src={img}
                    alt={`Imagem ${index + 1} - Laboratório ou equipe`}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Setas com transição suave */}
            <button
              onClick={scrollPrev}
              className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-md z-10 transition-all duration-300 ease-in-out ${
                showArrows ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
              } md:block hidden`}
              aria-label="Imagem anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
              </svg>
            </button>
            <button
              onClick={scrollNext}
              className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-md z-10 transition-all duration-300 ease-in-out ${
                showArrows ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
              } md:block hidden`}
              aria-label="Próxima imagem"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-5 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === selectedIndex ? 'bg-primary-600' : 'bg-gray-300'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}