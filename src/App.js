import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Perfil from './components/Perfil';
import Navegacion from './components/Navegacion';
import Experiencia from './components/Experiencia';
import Formacion from './components/Formacion';
import Habilidades from './components/Habilidades';
import Contacto from './components/Contacto';

const fondos = {
  experiencia: "#dfedff",
  formacion: "#dfffe0",
  habilidades: "#fff7df",
  contacto: "#ffe4fd",
};

function App() {
  const [seccionActiva, setSeccionActiva] = useState("experiencia");

  useEffect(() => {
    const scrollToTopSmooth = () => {
      const duration = 200; // duración total en milisegundos
      const start = window.scrollY;
      const startTime = performance.now();
  
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3); // cubic easing out
  
        window.scrollTo(0, start * (1 - ease));
  
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
  
      requestAnimationFrame(animate);
    };
  
    const timeout = setTimeout(() => {
      scrollToTopSmooth();
    }, 50); // esperar un poco tras el cambio de sección
  
    return () => clearTimeout(timeout);
  }, [seccionActiva]);
  

  const renderSeccion = () => {
    const componentes = {
      experiencia: <Experiencia />,
      formacion: <Formacion />,
      habilidades: <Habilidades />,
      contacto: <Contacto />,
    };

    return (
      <motion.div
        key={seccionActiva}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {componentes[seccionActiva]}
      </motion.div>
    );
  };

  return (
    <div
      style={{ backgroundColor: fondos[seccionActiva] }}
      className="min-h-screen transition-colors duration-500"
    >
      <Header />
      <div className="h-24" />

      <main className="p-6 max-w-3xl mx-auto space-y-6">
        <Perfil />
        <Navegacion
          seccionActiva={seccionActiva}
          setSeccionActiva={setSeccionActiva}
        />
        <AnimatePresence mode="wait">
          {renderSeccion()}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
