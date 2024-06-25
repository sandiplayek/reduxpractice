import logo from './logo.svg';
import './App.css';
//import { useSelector, useDispatch } from 'react-redux';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Index from './pages';
import { About } from './pages/about';
import Contact from './pages/contact';
import ClassPage from './pages/classPage';
import SecondClass from './pages/secondClass';

function App() {
  //const count = useSelector(state=> state.counter)
  //const dispatch = useDispatch();
  return (
    // <div className="App">
    //   Hello {count}
    //   <p><button onClick={()=>dispatch({'type':'INCREMENT'})}>Increment</button></p>
    //   <p><button onClick={()=>dispatch({'type':'DECREMENT'})}>Decrement</button></p>

    // </div>
    <BrowserRouter>
    <Routes>
      <Route default path="/" element={<Index />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path='/class' element={<ClassPage />}></Route>
      <Route path='/secondclass' element={<SecondClass />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
