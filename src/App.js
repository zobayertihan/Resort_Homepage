import './App.css';
import Banner from './Pages/Banner';
import Footer from './Pages/Footer';
import Header from './Pages/Header';
import Navbar from './Pages/Navbar';
import Offers from './Pages/Offers';
import Packages from './Pages/Packages';
import Reserve from './Pages/Reserve';
import Resort from './Pages/Resort';
import Reviews from './Pages/Reviews';

function App() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Banner></Banner>
      <Reserve></Reserve>
      <Resort></Resort>
      <Packages></Packages>
      <Reviews></Reviews>
      <Offers></Offers>
      <Footer></Footer>
    </div>
  );
}

export default App;
