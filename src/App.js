import logo from './logo.svg';
import './App.css';
import HelloWord from './components/hello_word/HelloWord';
import TestPostApi from './components/TestPostApi/TestPostApi';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ClickEvent from './components/ClickEvent/ClickEvent';
import TestGetApi from './components/TestGetApi/TestGetApi';

function App() {
  return (
    <div className="App">

      <BrowserRouter> 
        <Routes>
         <Route path='/' element={<HelloWord />} />
         <Route path='/post' element={<TestPostApi />} />
         <Route path='/get' element={<TestGetApi />} />
         <Route path='/click-event' element={<ClickEvent />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
