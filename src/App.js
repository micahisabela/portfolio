import './App.css';
import Header from "./Header.js"
import Introduction from "./Introduction.js"
import Skills from "./Skills.js"
import Projects from "./Projects.js"

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction/>
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
