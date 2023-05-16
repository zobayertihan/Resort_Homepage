import './App.css';
import Banner from './Pages/Banner';
import Header from './Pages/Header';
import Navbar from './Pages/Navbar';
import Reserve from './Pages/Reserve';
import Resort from './Pages/Resort';

function App() {
  return (
    <div>
      <Header></Header>
      <Navbar className='fixed'></Navbar>
      <Banner></Banner>
      <Reserve></Reserve>
      <Resort></Resort>
      <h1>Packages Caurosel</h1>
      <h1>Reviews</h1>
      <h1>Offers</h1>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
