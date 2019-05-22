import React from 'react'
import { Link } from 'react-router-dom';


function Profile(){
  
  return(
    
    <div>
      <div className='center'>
        <p>Your shoot is scheduled for: Monday the 22nd</p>
        <p>Location: 10801 nw 26th ave</p>
        <p>Time: 5:00</p>
      </div>
      <div className='center'>
        <p>Your reveal session is scheduled for: Thursday the 25th</p>
        <p>My studio address is: 1234 vancouver building</p>
        <p>Time: 5:00</p>
      </div>
      <div>
        <Link to="/form">Form</Link> <br/>
        <Link to="/Locations">Your Locations</Link> <br/>
        <Link to="/faq">FAQ's</Link> <br/>
      </div>
      <div>
      <p>How do you plan on enjoying your portraits (you may change your mind at anytime, it just gives me a better idea of what types of images to create for you)?</p>
      <p>firebase answers</p>
      
      </div>
      <div>
        <p>Describe your personality in as many adjectives as are fitting (shy, fun, outgoing, athletic, girly girl, guys guy, jokester, laid back, studious, sweet, obnoxious, loud, nature lover, urban, introvert, extrovert, home body, rule follower, adventurous, etc...)</p>
        <p>firebase answers</p>
        
      </div>
      <div>
        <p>Please let me know your preferred locations fot the shoot or what type of location/background you would like (urban, river, meadow, trees, brick wall, your yard, sports field, your school, barn, junk yard, bridge, etc...)</p>
        <p>firebase answers</p>
        
      </div>
      <div>
        <p>Please provide a brief description of the outfits you'll be wearing. A couple things to leep in mind when selecting yout outfits:
          <br/>
          *Select outfits that you're comfortable in; you dont want to be worrying about straps that won't stay in place or other wardrobe issues.
          <br/>
          *Select clothes that best reflect your personality and dont forget accessories!
        </p>
        <p>firebase answers</p>
        
      </div>
      <div>
        <p>Will you be bringing any props with you (sports equipment, and instrument, books, a pet, family or friends, etc...)</p>
        <p>firebase answers</p>
        
      </div>
      <div>
        <p>Please describe or attach pics of poses that you love and share any other thoughts and desires you have for your shoot</p>
        <p>firebase answers</p>
        
      </div>
      <div>
      
      </div>
    </div>
    
  )
  
  
  
}

export default Profile