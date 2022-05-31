import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Tintuc from './component/Tintuc';



import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Tintuc" element={<Tintuc />}></Route>
      </Routes>
    </div>
    </BrowserRouter>

   
  );
}

export default App;
