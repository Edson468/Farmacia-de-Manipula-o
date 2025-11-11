// Define o componente ProductGallery, que exibe uma galeria de produtos.
export default function ProductGallery() {
  // Array de objetos contendo os dados dos produtos a serem exibidos.
  const products = [
    {
      id: 1,
      name: 'Cápsulas Personalizadas',
      desc: 'Suplementos vitamínicos e fitoterápicos',
      img: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?_gl=1*99lcu4*_ga*MTU2MjU5MjM0NS4xNzYwNjM3NjU1*_ga_8JE65Q40S6*czE3NjI4NjEzMDIkbzQkZzEkdDE3NjI4NjEzMTkkajQzJGwwJGgw',
    },
    {
      id: 2,
      name: 'Cremes Dermatológicos',
      desc: 'Fórmulas para acne, rosácea e hidratação',
      img: 'https://images.pexels.com/photos/10157940/pexels-photo-10157940.jpeg?_gl=1*1btg6xa*_ga*MTU2MjU5MjM0NS4xNzYwNjM3NjU1*_ga_8JE65Q40S6*czE3NjI4NjEzMDIkbzQkZzEkdDE3NjI4NjIwNTIkajE4JGwwJGgw',
    },
    {
      id: 3,
      name: 'Xaropes Infantil',
      desc: 'Saborosos e sem conservantes artificiais',
      img: 'https://media.istockphoto.com/id/1013348316/pt/foto/woman-hand-pouring-medication-or-antipyretic-syrup-from-bottle-to-spoon-healthcare-people-and.jpg?b=1&s=612x612&w=0&k=20&c=cRhrCkkEG8RXv0l1a8ie2jjZEJ0ld6GFtQnbJOxeY1M=',
    },
    {
      id: 4,
      name: 'Colírios Magistrais',
      desc: 'Formulações suaves para olhos sensíveis',
      img: 'https://media.istockphoto.com/id/1322256607/pt/foto/man-drops-eye-drops-install-lenses-moisturizing.jpg?b=1&s=612x612&w=0&k=20&c=_zUN5igwZwVCxzOB54tNQnt3Zh20Q8426SN7LNzl9i8=',
    },
  ];


  return (
    <section id="produtos" className="py-16 bg-white">
      {/* Container principal da seção de produtos. */}
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção com título e descrição. */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Produtos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trabalhamos com as mais rigorosas normas de manipulação para garantir eficácia e segurança.
          </p>
        </div>
        {/* Grid para exibir os cartões de produtos. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            // Cartão individual de produto com efeito de transição.
            <div
              key={product.id}
              className="bg-primary-50 rounded-xl p-6 text-center transition-transform hover:scale-105 hover:shadow-md flex flex-col items-center"
            >
              {/* Bloco da imagem do produto. */}
              <div className="mb-5">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-32 h-32 object-cover rounded-xl"
                />
              </div>
              {/* Nome do produto. */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
              {/* Descrição do produto. */}
              <p className="text-gray-600 text-sm">{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}