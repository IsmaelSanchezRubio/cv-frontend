export default function Habilidades() {
    return (
      <section id="habilidades" className="bg-white/65 rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Habilidades</h2>
  
        {/* Habilidades técnicas */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Técnicas</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Manejo de IDEs: Visual Studio, Android Studio, SQL Server, PyCharm.</li>
            <li>Lenguajes de programación: C#, Python, Java, Kotlin, SQL.</li>
            <li>Diseño y mantenimiento de bases de datos.</li>
            <li>Conocimiento de estructuras de datos, control de versiones y buenas prácticas de desarrollo.</li>
          </ul>
        </div>
  
        {/* Habilidades para el teletrabajo */}
        <div>
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Teletrabajo y colaboración remota</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Soltura en entornos de trabajo remoto y colaboración en línea.</li>
            <li>Manejo avanzado de Office 365: OneDrive, Teams, Excel, etc.</li>
            <li>Compartición de archivos y carpetas de servidor mediante herramientas en la nube.</li>
            <li>Buena comunicación escrita y organización del tiempo en equipos distribuidos.</li>
          </ul>
        </div>
      </section>
    );
  }
  