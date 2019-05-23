import React from 'react';
import { Link } from 'react-router-dom';

function About () {
  var header = {
    width: '85%',
    border: '1px solid black',
    textAlign: 'center',
    margin: 'auto',
    marginTop: '2%',
    marginBottom: '2%'
  };
  var main = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '85%',
    border: '1px solid white',
    textAlign: 'left',
    margin: 'auto',
    marginBottom: '4%',
    backgroundColor: '#9ED3EB'
  };

  return(
    <div>
      <div style={header} className="card-panel">
        <h3>True North Portraits</h3>
      </div>
      <div style={main} className='card-panel'>
        <p>Thank you for browsing my site!  13 years ago my company was born out of my deep passion for capturing people living authentic beautiful lives.  I know what beautiful looks and feels like and I can find it in everyone.  Moments are fleeting, but a portrait is forever and my goal is to capture and turn your true essence into a legacy for you, your loved ones and your generations to come.  I experience such joy watching my clients as they unfold in front of my camera during the portrait process and their spirit shines bright from the inside out.  My subjects inspire, delight and amaze me!</p>
      </div>
    </div>
  );
}

export default About;