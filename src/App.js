import './App.css';
import { BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import Home from './components/Home'

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Nav/> */}
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
