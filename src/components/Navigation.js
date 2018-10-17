import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="App">
      <div className='Nav-Bar'>
          <Link to='/'>&#63743;</Link>
          <Link to='/mac'>Mac</Link>
          <Link to='/ipad'>iPad</Link>
          <Link to='/iphone'>iPhone</Link>
          <Link to='/watch'>Watch</Link>

          <Link to='/tv'>TV</Link>
          <Link to='/music'>Music</Link>
          <Link to='/support'>Support</Link>
          <Link to='/search'>&#x1F50D;</Link>
          <Link to='/shop'>	&#128717;</Link>
          </div>
    </div> 
  );
};

export default Navigation;
