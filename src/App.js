import { Layout } from 'antd';
import './App.css';
import { CryptoDetails, Cryptocurrencies, Exchange, Home, Navbar, News } from './components';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <div className='navbar'>
        <Navbar />
      </div>
      <div>
        <Layout>
          <div>
            <Routes>
              <Route exact path="/" element={ <Home/>}/>
              <Route path="/exchange" element={ <Exchange/>}/>
              <Route path="/cryptocurrencies" element={ <Cryptocurrencies/>}/>
              <Route path="/crypto/:coinId" element={ <CryptoDetails/>}/>
              <Route path="/news" element={ <News/>}/>
            </Routes>
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default App;
