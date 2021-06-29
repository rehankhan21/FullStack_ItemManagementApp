import './App.css';
import { BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import Home from './components/Home'
import ListItems from './components/ListItems'
import AddItem from './components/AddItem'
import UpdateItem from './components/UpdateItem'

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Nav/> */}
      <Switch>
        <Route path="/" exact component={ListItems}/>
        <Route path="/addItem" component={AddItem}/>
        <Route path="/updateItem" component={UpdateItem} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
