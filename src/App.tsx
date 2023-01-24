import { config } from "process";
import styles from "./App.css"
import SearchBar from './components/SearchBar';

function App() {
  console.log(styles.default)
  return (
    <div className="App">
      <h1> The Stock Historian </h1>
      <SearchBar/>
    </div>
  );
}

export default App;
