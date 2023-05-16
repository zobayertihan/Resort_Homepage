import './App.css';
import Banner from './Pages/Banner';
import Header from './Pages/Header';
import Navbar from './Pages/Navbar';
import Packages from './Pages/Packages';
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
      <Packages></Packages>
      <h1>Reviews</h1>
      <h1>Offers</h1>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
