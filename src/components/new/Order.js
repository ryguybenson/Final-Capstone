import React from 'react';
import { Link } from 'react-router-dom';
import order from '../.././assets/images/order.jpg'


function Order(){
  var form = {
    width: '85%',
    margin: 'auto',
    border: '1px solid black',
    padding: '2%',
    marginTop: '2%',
    backgroundColor: '#9ed3eb'
  };
  var background = {
    backgroundImage: `url(${order})`,
    height: '900px',
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

export default Order;