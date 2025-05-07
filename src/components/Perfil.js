export default function Perfil() {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-6 flex flex-col sm:flex-row gap-6">
      <img
        src="/ismael.jpg"
        alt="Foto de Ismael"
        className="w-32 h-32 rounded-full object-cover border-4 border-gray-300"
      />

      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Perfil Profesional</h2>
        <p className="text-gray-700 mb-4">
          Técnico superior en desarrollo aplicaciones multiplataforma e instalaciones de telecomunicaciones con orientación a frontend.
          Apasionado por la tecnología, el aprendizaje continuo y la creación de soluciones intuitivas.
          Busco formar parte de un equipo dinámico donde pueda aportar valor, seguir creciendo
          y desarrollar proyectos con impacto.
        </p>

        <div className="text-sm text-gray-600 space-y-1">
          <p><strong>📍 Dirección:</strong> C/ Maestro Salvador López 10, 2A</p>
          <p><strong>📞 Teléfono:</strong> 697 183 680</p>
          <p><strong>📧 Correo:</strong> 3ismaelsanchez@gmail.com</p>
          <p>
            <strong>🔗 Redes:</strong>{' '}
            <a href="https://www.linkedin.com/in/ismaelsanchezrubio/" target="_blank" className="text-blue-500 hover:underline mr-4">LinkedIn</a>
            <a href="https://github.com/IsmaelSanchezRubio" target="_blank" className="text-blue-500 hover:underline">GitHub</a>
          </p>
        </div>
      </div>
    </section>
  );
}
