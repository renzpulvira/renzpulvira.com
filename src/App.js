import "./App.css";
import { useEffect } from "react";
import WebFont from "webfontloader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./views/home/HomePage";
import AboutPage from "./views/about/AboutPage";
import Navbar from "./components/nav/Navbar";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Rubik", "Inter", "JetBrains Mono"],
      },
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
