import './App.css';
import Banner from './Pages/Banner';
import Header from './Pages/Header';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <div>
      <Header></Header>
      <Navbar className='fixed'></Navbar>
      <Banner></Banner>
      <h1>Reserve Slot</h1>
      <h1>Resort Details</h1>
      <h1>Packages Caurosel</h1>
      <h1>Reviews</h1>
      <h1>Offers</h1>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
