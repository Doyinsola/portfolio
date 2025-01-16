import './App.scss';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Router>
            <Route path='/' element={<Home />}
            />
          </Router>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
