import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}
            />
            <Route path='/skills' element={<Skills />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
