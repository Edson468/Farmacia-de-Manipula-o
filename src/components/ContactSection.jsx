import { FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

export default function ContactSection() {
  const WHATSAPP_NUMBER = '5585999999999';
  const EMAIL = 'contato@vidaverde.com.br';
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(URL.createObjectURL(file));
    } else {
      alert('Por favor, selecione uma imagem (JPG, PNG, etc.).');
      e.target.value = '';
    }
  };

  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas ou envie sua receita para agendamento. Aceitamos fotos de receitas médicas!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 max-w-5xl mx-auto">
          {/* Formulário com campos na ordem: texto → upload */}
          <div className="flex-1">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />

              {/* Campo de mensagem (TEXTO) */}
              <textarea
                rows="3"
                placeholder="Sua mensagem (ex: dúvidas, observações...)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              ></textarea>

              {/* Upload de imagem (ANEXO) — AGORA ABAIXO DO TEXTO */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <label className="block text-gray-700 mb-2 font-medium">
                  📎 Anexar receita (opcional)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="receipt-upload"
                />
                <label
                  htmlFor="receipt-upload"
                  className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded cursor-pointer text-sm font-medium"
                >
                  Escolher imagem
                </label>
                {selectedFile && (
                  <div className="mt-3">
                    <p className="text-sm text-gray-600 mb-2">Pré-visualização:</p>
                    <img
                      src={selectedFile}
                      alt="Pré-visualização da receita"
                      className="mx-auto max-h-32 object-contain rounded"
                    />
                  </div>
                )}
                <p className="mt-2 text-xs text-gray-500">
                  Formatos aceitos: JPG, PNG, HEIC (até 5 MB)
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de Contato + Mapa */}
          <div className="flex-1">
            <div className="space-y-8 text-gray-700">
              {/* Mapa */}
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">Localização</h3>
                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.2345678901234!2d-38.51234567890123!3d-3.712345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74e5f12345678%3A0x123456789abcdef!2sFarm%C3%A1cia%20de%20Manipula%C3%A7%C3%A3o%20Exemplo!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Farmácia"
                  ></iframe>
                </div>
                {/*<p className="mt-3 text-sm text-gray-600">Fortaleza - CE</p>*/}
              </div>

              {/* Contatos com ícones */}
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-4">Fale Conosco</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+5585999999999"
                    className="flex items-center gap-3 text-gray-700 hover:text-primary-600 transition-colors group"
                  >
                    <div className="bg-primary-100 p-2 rounded-full group-hover:bg-primary-200 transition-colors">
                      <FaPhone className="text-primary-600" />
                    </div>
                    <span>(85) 99999-9999</span>
                  </a>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-primary-600 transition-colors group"
                  >
                    <div className="bg-green-100 p-2 rounded-full group-hover:bg-green-200 transition-colors">
                      <FaWhatsapp className="text-green-600" />
                    </div>
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-3 text-gray-700 hover:text-primary-600 transition-colors group"
                  >
                    <div className="bg-primary-100 p-2 rounded-full group-hover:bg-primary-200 transition-colors">
                      <FaEnvelope className="text-primary-600" />
                    </div>
                    <span>{EMAIL}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}