import './App.css';
import Home from './components/home';
import {Routes, Route} from 'react-router-dom'
import Landing from './components/Landing';
import Detail from './components/Detail';
import Activities from './components/Activities';

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
