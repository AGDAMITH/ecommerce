import './App.css';
import {Home} from './components/Home';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {About} from './components/About';
import {Contact} from './components/Contact';
import {Item} from './components/Item';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/item" exact component={Item} />
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
