import { motion } from "framer-motion";

export default function Navegacion({ seccionActiva, setSeccionActiva }) {
  const secciones = ["experiencia", "formacion", "habilidades", "contacto"];

  return (
    <nav className="flex justify-center space-x-4 mb-6">
      {secciones.map((seccion) => (
        <div
          key={seccion}
          className="relative bg-white/10 rounded-lg px-7 py-2 shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <button
            onClick={() => setSeccionActiva(seccion)}
            className={`text-base sm:text-lg font-semibold tracking-wide transition-colors duration-200 ${
              seccionActiva === seccion
                ? "text-blue-700"
                : "text-white hover:text-blue-500"
            }`}
          >
            {seccion.charAt(0).toUpperCase() + seccion.slice(1)}
          </button>
          {seccionActiva === seccion && (
            <motion.div
              layoutId="underline"
              className="absolute bottom-0 left-1 right-1 h-1.5 bg-blue-700 rounded"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </div>
      ))}
    </nav>
  );
}
