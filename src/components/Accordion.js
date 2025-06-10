import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Accordion({ titulo, children }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="mb-4 border border-white/20 rounded">
      <button
        onClick={() => setAbierto(!abierto)}
        className="w-full text-left px-4 py-3 font-semibold bg-white/65 text-white bg-white/15 transition"
      >
        {titulo}
      </button>

      <AnimatePresence initial={false}>
        {abierto && (
          <motion.div
            key="contenido"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden px-4 py-3 bg-white/5 text-sm text-white"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
