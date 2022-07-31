import './App.scss';
import Header from './components/Header';
import useWindowDimensions from './components/hooks/useWindowDimensions';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';
 
// import images
import BackgroundImageMobile from './assets/home/background-home-mobile.jpg';
import BackgroundImageTablet from './assets/home/background-home-tablet.jpg';
import BackgroundImageDesktop from './assets/home/background-home-desktop.jpg';
import Image from './assets/destination/background-destination-mobile.jpg';

function App() {
  const { height, width } = useWindowDimensions();

  const BgImage = () => {
    if(width<375){
      return BackgroundImageMobile;
    }else if(width<768){
      return BackgroundImageTablet;
    }else{
      return BackgroundImageDesktop;
    }
  }
  
  return (
    <div className="App" style={{backgroundImage: `url(${Image})`}}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/destination" element={<Destination />}></Route>
          <Route path="/crew" element={<Crew />}></Route>
          <Route path="/technology" element={<Technology />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
