import { motion } from "framer-motion";

export default function Navegacion({ seccionActiva, setSeccionActiva }) {
  const secciones = ["experiencia", "formacion", "habilidades", "contacto"];

  return (
    <nav className="flex justify-center space-x-12 mb-6 ">
      {secciones.map((seccion) => (
        <div
          key={seccion}
          className="border border-white/10 relative bg-white/10 rounded-lg px-12 py-3 shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <button
            onClick={() => setSeccionActiva(seccion)}
            className={`text-base sm:text-lg font-semibold tracking-wide transition-colors duration-200 ${
              seccionActiva === seccion
                ? "text-[#2095ff]"
                : "text-white hover:text-blue-500"
            }`}
          >
            {seccion.charAt(0).toUpperCase() + seccion.slice(1)}
          </button>
          {seccionActiva === seccion && (
            <motion.div
              layoutId="underline"
              className="absolute bottom-0 left-1 right-1 h-1.5 bg-[#2095ff] rounded"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </div>
      ))}
    </nav>
  );
}
