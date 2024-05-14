import './App.css';

import MidSection from './components/MidSection/MidSection';
import Contact from './components/Contact/Contact';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Shop from './components/Shop/Shop';
import Blog from './components/Blog/Blog';
import SingleSection from './components/Blog/SingleSection';
import Thankyou from './components/Posts/Thankyou';
import About from './components/About/About';

function App() {
  return (
   <>    
   <Router>
    <Routes>
      <Route exact path="/" element={<MidSection/>}/>
      <Route  path="/contact" element={<Contact/>}/>
      <Route  path="/shop" element={<Shop/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/single-post' element={<SingleSection/>}/>
    <Route path='/thankyou' element={<Thankyou/>}/>
    <Route path="/about" element={<About/>}/>
     </Routes>
     </Router>  
   </>
  );
}

export default App;
