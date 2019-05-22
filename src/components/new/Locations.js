import React from 'react';
import { Link } from 'react-router-dom';


function Locations(){
  var form = {
    width: '85%',
    margin: 'auto',
    border: '1px solid black',
    padding: '2%',
    marginTop: '2%',
    backgroundColor: '#9ed3eb'
  };

  return (
    <div>
      <form style={form}>
        <div>
          <p>Do you have any specific locations in mind for where you would like to have your photoshoots?</p>
          <input placeholder='Text'/>
        </div>
      </form>
    </div>
  );
}

export default Locations;