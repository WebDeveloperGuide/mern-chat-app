import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}/>          
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>  
    </div>
  );
}

export default App;
