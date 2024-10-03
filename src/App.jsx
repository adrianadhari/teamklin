import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import BusinessScope from "./pages/BusinessScope";
import ProjectPortfolio from "./pages/ProjectPortfolio";
import ContactUs from "./pages/ContactUs";
import { useState, useEffect } from "react";
import logo from "./assets/img/logo-center.png";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Waktu loading 3 detik

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen">
      {isLoading ? (
        <div className="w-full h-screen bg-white flex items-center justify-center">
          <img src={logo} alt="Loading" />
        </div>
      ) : (
        <>
          <Navbar />
          <Home />
          <BusinessScope />
          <ProjectPortfolio />
          <ContactUs />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
