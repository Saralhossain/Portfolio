import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/intro";
import './App.css';
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Work/Work";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Work/>
    </div>
  );
}

export default App;
