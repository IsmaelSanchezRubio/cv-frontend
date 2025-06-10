export default function Experiencia() {
    return (
      <section id="experiencia" className="transition-all duration-300 ease-in-out bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/10">
        <h2 className="text-2xl font-semibold text-[#2095ff] mb-4">Experiencia Profesional</h2>
  
        {/* EXPERIENCIA EN EL SECTOR */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#99cfff] mb-2">Experiencia en el sector</h3>
          
          <div className="mb-4 text-white">
            <p><strong>Re-Inventa</strong> – Formación en Centros de Trabajo (Madrid, 2024)</p>
            <ul className="list-disc list-inside text-sm text-white">
              <li>Entrenamiento, manejo y gestión de sistemas de inteligencia artificial (IA) en servicios de auditoría.</li>
              <li>Confección de prompts, desarrollo de scripts y uso del software estadístico R.</li>
            </ul>
          </div>
  
          <div className="mb-4 text-white">
            <p><strong>Cabling</strong> – Formación en Centros de Trabajo (Huelva, 2018)</p>
            <ul className="list-disc list-inside text-sm text-white">
              <li>Instalación, gestión y mantenimiento de equipos informáticos en entornos empresariales.</li>
              <li>Redes locales, VoIP, servidores, sistemas de CCTV, seguridad, sonido y radiodifusión.</li>
            </ul>
          </div>
        </div>
  
        {/* EXPERIENCIA EN OTROS SECTORES */}
        <div>
          <h3 className="text-xl font-semibold text-[#99cfff] mb-2">Otras experiencias profesionales</h3>
          
          <div className="mb-4 text-white">
            <p><strong>Supermercados Tachira – Carrefour Express</strong> (2017–2021)</p>
            <ul className="list-disc list-inside text-sm text-white">
              <li>Recepción de mercancía, gestión de almacén y reposición.</li>
              <li>Atención al cliente, caja y dependiente de comercio.</li>
            </ul>
          </div>
  
          <div className="mb-4 text-white">
            <p><strong>Jigging Caruva</strong> (2014–2015)</p>
            <ul className="list-disc list-inside text-sm text-white">
              <li>CEO de pyme dedicada al diseño, producción y venta de material deportivo.</li>
              <li>Responsable de marketing, diseño de producto, manufacturación y venta internacional.</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  