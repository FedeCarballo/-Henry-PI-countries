import './App.css';
import Home from './components/Home/home';
import {Routes, Route} from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Detail from './components/Detail/Detail';
import Activities from './components/Activities/Activities';
// import video from './assets/wallpaper.mp4'
function App() {
  return (
    <div className="App">
      {/* <div>
        <video className='video-bg' src={video} type='video/mp4' autoPlay muted loop/>
      </div> */}
      <div className='container'>  
      <Routes>
        <Route exact path='/' element={<Landing />}/>
        <Route exact path='/countries' element={<Home/>} />
        <Route exact path='/countries/detail/:id' element={<Detail />} />
        <Route exact path='/countries/activities' element={<Activities />} />
      {/*       
       <Route exact path='/countries/activities/create' element={} />
        <Route exact path='/countries/about' element={} />  */}
      </Routes>
      </div>
    </div>
  );
}

export default App;
