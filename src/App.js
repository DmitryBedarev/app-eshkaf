import './App.css';
import Menu from './components/Menu';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Monitoring from './pages/Monitoring';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <div className='container'>
          <Menu/>
          <div className="header_and_maincontent_container">
            <Header/>
            <div id='main-content'>
              <BrowserRouter>
                <Routes>

                  <Route path="/" element={<Monitoring />} />
                  <Route path="new-page" element={<Monitoring />} />

                </Routes>
              </BrowserRouter>
            </div>
          </div>
        </div>
      </div>
  ); 
}

export default App;
