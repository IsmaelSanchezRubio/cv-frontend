import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useIsMobile from './hooks/useIsMobile';
import Header from './components/Header';
import Perfil from './components/Perfil';
import Navegacion from './components/Navegacion';
import Experiencia from './components/Experiencia';
import Formacion from './components/Formacion';
import Habilidades from './components/Habilidades';
import Contacto from './components/Contacto';
import Accordion from './components/Accordion';

function App() {
  const isMobile = useIsMobile();
  const [seccionActiva, setSeccionActiva] = useState("experiencia");

  // Solo hacer scroll animado en escritorio
  useEffect(() => {
    if (!isMobile) {
      const timeout = setTimeout(() => {
        const duration = 600;
        const start = window.scrollY;
        const startTime = performance.now();

        const animate = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          window.scrollTo(0, start * (1 - ease));
          if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [seccionActiva, isMobile]);

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
      style={{
        backgroundColor: "#1e1e1e", // negro suave
        backgroundImage: `url("bk2.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        minHeight: "100vh"
      }}
      className="min-h-screen"
    >
      <Header />
      <div className="h-8" />

      <main className="p-4 max-w-5xl mx-auto space-y-6">
        <Perfil />

        {isMobile ? (
          <>
            <Accordion titulo="Experiencia">
              <Experiencia />
            </Accordion>
            <Accordion titulo="Formación">
              <Formacion />
            </Accordion>
            <Accordion titulo="Habilidades">
              <Habilidades />
            </Accordion>
            <Accordion titulo="Contacto">
              <Contacto />
            </Accordion>
          </>
        ) : (
          <>
            <Navegacion
              seccionActiva={seccionActiva}
              setSeccionActiva={setSeccionActiva}
            />
            <AnimatePresence mode="wait">
              {renderSeccion()}
            </AnimatePresence>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
