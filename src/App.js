import logo from './logo.svg';
import './App.css';
import HelloWord from './components/hello_word/HelloWord';
import TestPostApi from './components/TestPostApi/TestPostApi';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter> 
        <Routes>
         <Route path='/' element={<HelloWord />} />
         <Route path='/post' element={<TestPostApi />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
