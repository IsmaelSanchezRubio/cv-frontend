export default function Formacion() {
  return (
    <section id="formacion" className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Formación</h2>

      {/* Formación académica */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Formación académica</h3>
        <div className="space-y-4 text-gray-700">
          <div>
            <p><strong>Técnico Superior en Desarrollo de Aplicaciones Multiplataforma</strong> (2021–2024)</p>
            <p className="text-sm">Formación especializada en programación multiplataforma, bases de datos, diseño de interfaces, acceso a datos, servicios web y aplicaciones móviles.</p>
          </div>
          <div>
            <p><strong>Técnico en Instalaciones de Telecomunicaciones</strong> (2016–2018)</p>
            <p className="text-sm">
              Instalación, mantenimiento y gestión de sistemas de telecomunicación, redes de datos, sistemas de vigilancia, sonido y domótica. <strong>Matrícula de Honor</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Formación no reglada */}
      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Formación no reglada</h3>
        <div className="text-gray-700 text-sm space-y-1">
          <p><strong>Fundamentos de IA de Google</strong> – Coursera (2025)</p>
          <ul className="list-disc list-inside">
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
