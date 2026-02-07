import Navbar from './components/Navbar';
import Hero from './pages/Hero';

function App() {
  return (
    <div className="bg-night-dark text-white min-h-screen relative overflow-x-hidden selection:bg-astro-purple selection:text-white">
      
      <Navbar />

      <main>
        <Hero />

        <section id="about" className="min-h-screen flex items-center justify-center bg-black/20">
          <h2 className="text-4xl font-bold text-gray-500">About Section</h2>
        </section>

        <section id="portfolio" className="min-h-screen flex items-center justify-center">
          <h2 className="text-4xl font-bold text-gray-500">Portfolio Section</h2>
        </section>
      </main>
    </div>
  );
}

export default App;