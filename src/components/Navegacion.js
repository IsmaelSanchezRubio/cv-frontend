import { motion } from "framer-motion";

export default function Navegacion({ seccionActiva, setSeccionActiva }) {
  const secciones = ["experiencia", "formacion", "habilidades", "contacto"];

  return (
    <nav className="flex justify-center space-x-6 mb-6 relative">
      {secciones.map((seccion) => (
        <div key={seccion} className="relative pb-1">
          <button
            onClick={() => setSeccionActiva(seccion)}
            className={`text-base sm:text-lg font-semibold tracking-wide transition-colors duration-200 ${
              seccionActiva === seccion
                ? "text-blue-700"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            {seccion.charAt(0).toUpperCase() + seccion.slice(1)}
          </button>
          {seccionActiva === seccion && (
            <motion.div
              layoutId="underline"
              className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-600 rounded"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </div>
      ))}
    </nav>
  );
}
