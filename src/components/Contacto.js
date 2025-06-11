export default function Contacto() {
    return (
      <section id="contacto" className="transition-all duration-300 ease-in-out bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/10">
        <h2 className="text-3xl tracking-wide leading-relaxed font-semibold text-[#2095ff] mb-4">Contacto</h2>
  
        <p className="text-white tracking-wide leading-relaxed text-lg mb-4">
          ¿Te interesa trabajar conmigo o colaborar en un proyecto? Puedes escribirme directamente a través de:
        </p>
  
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:3ismaelsanchez@gmail.com"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center"
          >
            Enviar correo
          </a>
          <a
            href="https://wa.me/34697183680"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-center"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </section>
    );
  }
  