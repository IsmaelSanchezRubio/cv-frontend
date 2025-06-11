export default function Formacion() {
  return (
    <section id="formacion" className="transition-all duration-300 ease-in-out bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/10">
      <h2 className="text-3xl font-semibold text-[#2095ff] mb-4">Formación</h2>

      {/* Formación académica */}
      <div className="mb-6">
        <h3 className="text-2xl tracking-wide leading-relaxed font-semibold text-[#99cfff] mb-2">Formación académica</h3>
        <div className="space-y-4 text-white">
          <div className="mb-4 tracking-wide leading-relaxed text-lg text-white">
            <p><strong>Técnico Superior en Desarrollo de Aplicaciones Multiplataforma</strong> (2021–2024)</p>
            <p className="text-lg ">Formación especializada en programación multiplataforma, bases de datos, diseño de interfaces, acceso a datos, servicios web y aplicaciones móviles.</p>
          </div>
          <div className="mb-4 text-lg tracking-wide leading-relaxed text-white">
            <p><strong>Técnico en Instalaciones de Telecomunicaciones</strong> (2016–2018)</p>
            <p className="text-lg tracking-wide leading-relaxed">
              Instalación, mantenimiento y gestión de sistemas de telecomunicaciones, redes de datos, sistemas de vigilancia, sonido y domótica. <strong>Matrícula de Honor</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Formación no reglada */}
      <div>
        <h3 className="text-2xl font-semibold tracking-wide leading-relaxed text-[#99cfff] mb-2">Formación no reglada</h3>
        <div className="text-white tracking-wide leading-relaxed text-lg space-y-1">
          <p><strong>Fundamentos de IA de Google</strong> – Coursera (2025)</p>
          <ul className="list-disc tracking-wide leading-relaxed text-lg list-inside">
            <li>Utilización de herramientas de IA generativa para desarrollar ideas y contenidos, tomar decisiones con mayor conocimiento de causa y agilizar tareas diarias.</li>
            <li>Redacción de instrucciones claras y específicas para obtener resultados precisos, aplicando técnicas de prompting para resumir, generar eslóganes y otros objetivos concretos.</li>
            <li>Uso responsable de la IA: identificación de sesgos y prevención de daños derivados de su aplicación.</li>
            <li>Desarrollo de estrategias para mantenerse actualizado en un entorno de inteligencia artificial en constante evolución.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
