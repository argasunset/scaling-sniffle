import './App.css';
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Drama from './components/Drama';

import "./style/LandingPage.css"

function App() {
  return (
    <div>
      <div className="myBG">
      <NavigationBar />
      <Intro />
      </div>
    <div className="trending">
    <Trending />
    </div>    
    <div className="drama">
      <Drama />
    </div>
    </div>
  );
}

export default App;
