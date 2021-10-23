import { Route, Switch } from 'react-router';
import './App.css';
import AddForm from './components/AddForm';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import ServerError from './components/ServerError';
import TodoDetails from './components/TodoDetails';
import TodoEdit from './components/TodoEdit';
import TodoList from "./components/TodoList"

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>

        <Route exact={true} path="/" component={TodoList} />
        <Route path="/add-form" component={AddForm} />
        <Route path="/todo/:id/details" component={TodoDetails} />
        <Route path="/todo/:id/edit" component={TodoEdit} />


        {/* component for server errors */}
        <Route path="/500" component={ServerError} />
        {/* component for 404 pages, always at the end */}
        <Route component={NotFound}/>

      </Switch>

    </div>
  );
}

export default App;
