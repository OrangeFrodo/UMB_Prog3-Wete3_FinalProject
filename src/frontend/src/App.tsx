import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import Footer from './components/Footer';
import Header from './components/Header';

import ListEmployee from './components/ListEmployee';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path="/" element={<ListEmployee />} />
            <Route path="/employee" element={<Welcome />} />
            <Route path="/add-employee" element={<AddEmployee />} ></Route>
            <Route path='/edit-employee/:id' element={<AddEmployee/>}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
