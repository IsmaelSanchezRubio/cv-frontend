export default function Experiencia() {
    return (
      <section id="experiencia" className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Experiencia Profesional</h2>
  
        {/* EXPERIENCIA EN EL SECTOR */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Experiencia en el sector</h3>
          
          <div className="mb-4">
            <p><strong>Re-Inventa</strong> – Formación en Centros de Trabajo (Madrid, 2024)</p>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Entrenamiento, manejo y gestión de sistemas de inteligencia artificial (IA) en servicios de auditoría.</li>
              <li>Confección de prompts, desarrollo de scripts y uso del software estadístico R.</li>
            </ul>
          </div>
  
          <div>
            <p><strong>Cabling</strong> – Formación en Centros de Trabajo (Huelva, 2018)</p>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Instalación, gestión y mantenimiento de equipos informáticos en entornos empresariales.</li>
              <li>Redes locales, VoIP, servidores, sistemas de seguridad, vigilancia y telecomunicaciones.</li>
            </ul>
          </div>
        </div>
  
        {/* EXPERIENCIA EN OTROS SECTORES */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Otras experiencias profesionales</h3>
          
          <div className="mb-4">
            <p><strong>SUPERMERCADOS TÁCHIRA – Carrefour Express</strong> (2017–2021)</p>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Recepción de mercancía, gestión de almacén y reposición.</li>
              <li>Atención al cliente, caja y dependiente de comercio.</li>
            </ul>
          </div>
  
          <div>
            <p><strong>JIGGING CARUVA</strong> (2014–2015)</p>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>CEO de pyme dedicada al diseño, producción y venta de material deportivo.</li>
              <li>Responsable de marketing, diseño de producto y gestión internacional.</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  