import React from 'react';
import { Link } from 'react-router-dom';
import policies from '../.././assets/images/policies.jpg'


function Policies(){
  var form = {
    width: '85%',
    margin: 'auto',
    border: '1px solid black',
    padding: '2%',
    marginTop: '2%',
    backgroundColor: '#9ed3eb'
  };
  var background = {
    backgroundImage: `url(${policies})`,
    height: '100vh',
    backgroundSize: 'cover',
    overflow: 'hidden'
  }

  return (
    <div>
      <form style={form}>
        
        <div style={background}>
        </div>
      </form>
    </div>
  );
}

export default Policies;