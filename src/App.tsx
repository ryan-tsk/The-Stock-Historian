import styles from "./App.css"
import Home from './components/Home'
import Stock from './components/Stock'
import Crypto from './components/Crypto'
import NavBar from './components/NavBar'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App" style={styles}>
      <Router>
        <NavBar/>
        <QueryClientProvider client = {queryClient}>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/stocks" element = {<Stock/>} />
          <Route path="/crypto" element = {<Crypto/>} />
        </Routes>
        </QueryClientProvider>
      </Router>
    </div>
  );
}

export default App;
