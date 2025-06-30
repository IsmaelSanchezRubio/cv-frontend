export default function Formacion() {
  return (
    <section id="formacion" className="transition-all duration-300 ease-in-out bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/10">
      <h2 className="text-3xl font-semibold text-[#2095ff] mb-4">Formación</h2>

      {/* Formación académica */}
      <div className="mb-6">
        <h3 className="text-2xl tracking-wide leading-relaxed font-semibold text-[#99cfff] mb-2">Formación académica</h3>
        <div className="space-y-4 text-white">

          {/* DAM */}
         <div className="mb-4 tracking-wide leading-relaxed text-lg text-white">
           <p><strong>- Técnico Superior en Desarrollo de Aplicaciones Multiplataforma</strong> (2021–2024)</p>
           <ul className="list-disc list-inside tracking-wide leading-relaxed text-lg">
             <li>Programación Orientada a Objetos (POO).</li>
             <li>Desarrollo de aplicaciones de escritorio (WPF), web y Android (front-end y back-end).</li>
             <li>Manejo de bases de datos y despliegue en entornos productivos.</li>
             <li>ERP, CRM, entornos de desarrollo e integración continua.</li>
             <li>Seguridad informática y metodologías ágiles de trabajo.</li>
           </ul>
         </div>

         {/* Telecomunicaciones */}
         <div className="mb-4 text-lg tracking-wide leading-relaxed text-white">
            <p><strong>- Técnico en Instalaciones de Telecomunicaciones</strong> (2016–2018) <strong>Matrícula de Honor</strong></p>
           <ul className="list-disc list-inside tracking-wide leading-relaxed text-lg">
             <li>Electricidad y electrónica (analógica y digital) aplicada a las telecomunicaciones.</li>
             <li>Redes de voz, datos y sistemas de telecomunicaciones en edificios.</li>
             <li>Sistemas de seguridad electrónica, fibra óptica y megafonía.</li>
             <li>Instalación de sistemas audiovisuales y normativa vigente.</li>
           </ul>
         </div>
       </div>
      </div>


      {/* Formación no reglada */}
      <div>
        <h3 className="text-2xl font-semibold tracking-wide leading-relaxed text-[#99cfff] mb-2">Formación no reglada</h3>
        <div className="text-white tracking-wide leading-relaxed text-lg space-y-6">
          {/* Curso 1 */}
          <div>
            <p><strong>- Python TOTAL</strong> – Udemy, Escuela Directa (2025)</p>
            <ul className="list-disc tracking-wide leading-relaxed text-lg list-inside">
              <li>Manejo profesional de Python en PyCharm y Google Colab.</li>
              <li>Desarrollo Web con Django, interfaces gráficas de usuario (IGU) y entornos virtuales.</li>
              <li>Aplicaciones en Machine Learning y Data Science.</li>
              <li>Procesamiento de datos con Pandas y técnicas de Web Scraping.</li>
            </ul>
         </div>
          {/* Curso 2 */}
          <div>
            <p><strong>- Fundamentos de IA de Google</strong> – Coursera (2025)</p>
            <ul className="list-disc tracking-wide leading-relaxed text-lg list-inside">
              <li>Optimización del rendimiento mediante herramientas de IA generativa para la ideación, creación de contenido y toma de decisiones estratégicas.</li>
              <li>Dominio de técnicas de prompting para la elaboración de instrucciones precisas, logrando resultados concretos en resúmenes, generación de eslóganes y otras aplicaciones específicas.</li>
              <li>Garantía de un uso responsable de la IA, identificando y mitigando sesgos para prevenir impactos negativos.</li>
              <li>Desarrollo de estrategias de actualización continua para adaptarse al dinámico entorno de la inteligencia artificial.</li>
           </ul>
         </div>

          
        </div>
      </div>
    </section>
  );
}
