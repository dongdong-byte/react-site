import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './comp/Layout';
import Home from './comp/Home';
import Login from './comp/Login';
import Day04_20250812 from './comp/Day04_20250812';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        


        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="day04_0812ex_usestate" element={<Day04_20250812 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
