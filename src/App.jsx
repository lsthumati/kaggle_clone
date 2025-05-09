import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import FeaturedCompetitions from './components/home/FeaturedCompetitions';
import FeaturedDatasets from './components/home/FeaturedDatasets';
import CommunitySection from './components/home/CommunitySection';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <FeaturedCompetitions />
          <FeaturedDatasets />
          <CommunitySection />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;