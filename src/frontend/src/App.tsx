import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';


import ListEmployee from './components/ListEmployee';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path="/" element={<ListEmployee />} />
            <Route path="/employee" element={<h1>Hello</h1>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
