import { Route, Switch } from 'react-router';
import './App.css';
import AddForm from './components/AddForm';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import ServerError from './components/ServerError';
import TodoList from "./components/TodoList"

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>

        <Route exact={true} path="/" component={TodoList} />
        <Route path="/add-form" component={AddForm} />



        {/* component for server errors */}
        <Route path="/500" component={ServerError} />
        {/* component for 404 pages, always at the end */}
        <Route component={NotFound}/>

      </Switch>

    </div>
  );
}

export default App;
