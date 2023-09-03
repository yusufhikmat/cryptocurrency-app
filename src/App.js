import { Layout } from 'antd';
import './App.css';
import { CryptoDetails, Cryptocurrencies, Exchange, Home, Navbar, News } from './components';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
        <Navbar />
        <Layout>
            <Routes>
              <Route exact path="/" element={ <Home/>}/>
              <Route path="/exchange" element={ <Exchange/>}/>
              <Route path="/cryptocurrencies" element={ <Cryptocurrencies/>}/>
              <Route path="/crypto/:coinId" element={ <CryptoDetails/>}/>
              <Route path="/news" element={ <News/>}/>
            </Routes>
        </Layout>
        </div>
  );
}

export default App;
