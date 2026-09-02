import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Hero, Tariffs, AboutUs, Tech } from "./components";
import AuroraBackground from "./components/AuroraBackground";
import AnimatedButton from "./components/AnimatedButton";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import tgLogo from "./assets/tglogo.png"; // потом создать

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className='relative z-0 bg-primary'>
              <AuroraBackground />
              <div className='relative z-10'>
                <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                  <Navbar />
                  <Hero />
                </div>
                <Tariffs />
                <AboutUs />
                <Tech />

                {/* Четыре кнопки внизу */}
                <div className="flex flex-wrap justify-center gap-8 py-16">
                  <AnimatedButton to="/privacy">Конфиденциальность</AnimatedButton>
                  <AnimatedButton to="/terms">Соглашение</AnimatedButton>
                  
                  {/* Кнопка поддержки */}
                  <a
                    href="https://t.me/EvolveVpnSupportBot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-block px-8 py-3 text-white font-medium text-lg border border-white/30 rounded-lg overflow-hidden group transition-colors duration-300 hover:border-white/80"
                  >
                    <span className="absolute inset-0 w-full h-full -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    <span className="relative z-10">Поддержка</span>
                  </a>

                  {/* Кнопка "Мы в Telegram" */}
                  <a
                    href="https://t.me/EvoTmx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-block px-8 py-3 text-white font-medium text-lg border border-white/30 rounded-lg overflow-hidden group transition-colors duration-300 hover:border-white/80"
                  >
                    <span className="absolute inset-0 w-full h-full -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    <span className="relative z-10 flex items-center gap-2">
                      <img src={tgLogo} alt="Telegram" className="w-5 h-5 object-contain" />
                      Мы в Telegram
                    </span>
                  </a>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
