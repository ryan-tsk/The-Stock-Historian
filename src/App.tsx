import { config } from "process";
import styles from "./App.css"
import SearchBar from './components/SearchBar';
import Home from './components/Home'
import Stock from './components/Stock'
import Crypto from './components/Crypto'
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  console.log(styles.default)
  return (
    <div className="App">
      <h1> The Stock Historian </h1>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/stocks" element = {<Stock/>} />
          <Route path="/crypto" element = {<Crypto/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
