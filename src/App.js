import './App.css';
import './index.css';
import Search from "./components/Search";

function App() {

    return (
    <div className="App">
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
            <Search />
            </div>
        </div>
    </div>
  );
}

export default App;
