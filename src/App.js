import React from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import WrongURL from './components/WrongURL';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }


  render() {
    return (
      <div className='App'>
        <Navigation />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route component={WrongURL} />
        </Switch>
      </div>
    )
  }
} 



export default App;
