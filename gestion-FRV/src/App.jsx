import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LangProvider } from "./context/LangContext";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Features from "./views/Features";
import Pricing from "./views/Pricing";
import Contact from "./views/Contact";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/features" element={<Features />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>

            <footer className="mt-auto px-4 py-8 sm:px-10 border-t border-white/5 extreme-glass rounded-t-2xl backdrop-blur-xl">
              <div className="mx-auto max-w-[1200px] flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
                <div className="flex flex-col gap-2 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <div className="size-6 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-sm">
                        business_center
                      </span>
                    </div>
                    <span className="font-black text-lg tracking-tighter text-black dark:text-white">
                      BizManage
                    </span>
                  </div>
                  <p className="text-xs text-black/40 dark:text-white/40 font-medium">
                    © {new Date().getFullYear()} BizManage Platform.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-black/50 dark:text-white/50">
                  <a
                    className="hover:text-primary transition-colors hover:vibrant-accent-orange"
                    href="#"
                  >
                    Privacy
                  </a>
                  <a
                    className="hover:text-primary transition-colors hover:vibrant-accent-orange"
                    href="#"
                  >
                    Terms
                  </a>
                  <a
                    className="hover:text-primary transition-colors hover:vibrant-accent-orange"
                    href="#"
                  >
                    Status
                  </a>
                </div>
                <div className="flex justify-center gap-3">
                  <a
                    className="extreme-glass-button size-9 rounded-lg flex items-center justify-center text-black/50 dark:text-white/50 hover:text-primary"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      alternate_email
                    </span>
                  </a>
                  <a
                    className="extreme-glass-button size-9 rounded-lg flex items-center justify-center text-black/50 dark:text-white/50 hover:text-primary"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      photo_camera
                    </span>
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </Router>
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
