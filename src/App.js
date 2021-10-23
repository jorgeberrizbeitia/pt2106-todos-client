import { Route, Switch } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import TodoList from "./components/TodoList"

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact={true} path="/" component={TodoList} />



      </Switch>

    </div>
  );
}

export default App;
