export default function Perfil() {
  return (
    <section className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/10">
      <img
        src="/ismael.jpg"
        alt="Foto de Ismael"
        className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 mb-4"
      />

      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-[#2095ff] mb-4">Perfil Profesional</h2>
        <p className="text-white mb-4">
          Técnico superior en Desarrollo de Aplicaciones Multiplataforma e Instalaciones de Telecomunicaciones con orientación a frontend.
          Apasionado por la tecnología, el aprendizaje continuo y la creación de soluciones intuitivas.
          Busco formar parte de un equipo dinámico donde pueda aportar valor, seguir creciendo
          y desarrollar proyectos con impacto.
        </p>

        <div className="text-sm text-white space-y-1">
          <p><strong>📍 Ubicación:</strong> Huelva, Andalucía, España</p>
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
