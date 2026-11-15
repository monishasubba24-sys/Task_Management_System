
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Home from '../pages/Home/Home';

function MainLayout() {
  return (
    <div className="main-layout">
      <Navbar />

      <main className="main-content">
        <Home />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
