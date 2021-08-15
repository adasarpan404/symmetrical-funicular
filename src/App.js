import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home"
import CharacterDetail from "./Components/CharacterDetail"
const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/character/:characterId" component={CharacterDetail} />
        </Switch>
      </div>
    </Router>
  )
};

export default App;
