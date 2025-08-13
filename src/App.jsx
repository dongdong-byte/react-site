import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './comp/Layout';
import Home from './comp/Home';
import Login from './comp/Login';
import day04_0812ex_usestate from './comp/day04_0812ex_usestate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        


        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="day04_0812ex_usestate" element={<day04_0812ex_usestate />} />
          <Route path="fetch" element={<fetch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
