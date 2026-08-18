import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#07090d] text-white">
      <Navbar />
      <main>
        <Hero />
        <ComingSoon />
      </main>
      <Footer />
    </div>
  );
}

export default App;