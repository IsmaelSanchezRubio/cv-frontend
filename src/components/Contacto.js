export default function Contacto() {
    return (
      <section id="contacto" className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contacto</h2>
  
        <p className="text-gray-700 mb-4">
          ¿Te interesa trabajar conmigo o colaborar en un proyecto? Puedes escribirme directamente:
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
  