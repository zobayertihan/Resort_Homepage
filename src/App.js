import './App.css';
import Banner from './Pages/Banner';
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
      <Navbar className='fixed'></Navbar>
      <Banner></Banner>
      <Reserve></Reserve>
      <Resort></Resort>
      <Packages></Packages>
      <Reviews></Reviews>
      <Offers></Offers>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
