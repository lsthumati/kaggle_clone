import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import UserTypes from './components/home/UserTypes';
import ProjectSection from './components/home/ProjectSection';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <UserTypes />
          <ProjectSection />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;