import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";

import HomePage from "./routes/index";
import AboutPage from "./routes/about";
import ServicesPage from "./routes/services";
import ContactPage from "./routes/contact";
import PropertiesPage from "./routes/properties";
import WhyChooseUsPage from "./routes/why-choose-us";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
          </Routes>
        </main>

        <Footer />
        <FloatingActions />
      </div>
    </BrowserRouter>
  );
}

export default App;