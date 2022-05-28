import './App.css';
import Home from './components/Home/home';
import {Routes, Route} from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Detail from './components/Detail/Detail';
import Activities from './components/Activities/Activities';
import Form from './components/Form/Form';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing />}/>
        <Route exact path='/countries' element={<Home/>} />
        <Route exact path='/countries/:id' element={<Detail/>} />
        <Route exact path='/countries/activities' element={<Activities />} />
       <Route exact path='/countries/activities/create' element={ <Form /> } />
       <Route exact path='/countries/about' element={ <About /> } />
      </Routes>
      </div>
  );
}

export default App;
