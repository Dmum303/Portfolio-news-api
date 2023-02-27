// import logo from './logo.svg';
import './App.css';
import Feed from '../feed/Feed';
import Landing from '../landing/Landing';
import React from 'react';

import { useNavigate, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing navigate={useNavigate()} />} />
        <Route path="/feed" element={<Feed navigate={useNavigate()} />} />
      </Routes>
    </>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
