import React from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import { Home, Mac, iPad, iPhone, Watch, TV, Music, Support, Search, Shop, Navigation } from './components';
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
          <div className='Nav-Bar2'>
        <Route exact path='/' component={Home} />
        <Route exact path='/mac' component={Mac} />
        <Route exact path='/ipad' component={iPad} />
        <Route exact path='/iphone' component={iPhone} />
        <Route exact path='/watch' component={Watch} />
        <Route exact path='/tv' component={TV} />
        <Route exact path='/music' component={Music} />
        <Route exact path='/support' component={Support} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/shop' component={Shop} />
          </div>
        <Route component={WrongURL} />

        </Switch>
      </div>
    )
  }
} 



export default App;
