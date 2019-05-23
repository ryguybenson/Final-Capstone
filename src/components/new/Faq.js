import React from 'react';
import { Link } from 'react-router-dom';

function Faq () {
  var header = {
    width: '85%',
    border: '1px solid black',
    textAlign: 'center',
    margin: 'auto',
    marginTop: '2%',
    marginBottom: '2%'
  };
  var footer = {
    width: '85%',
    border: '1px solid black',
    textAlign: 'center',
    margin: 'auto',
    marginTop: '2%',
    marginBottom: '8%',
    display: 'flex',
    justifyContent: 'space-around'
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
        <h3>Frequently asked questions and additional links</h3>
      </div>
      <div style={main} className="card-panel">
      <p> Q: What should I wear?</p>

      <p>A: Solid neutral colored clothing is the general rule of thumb, however with that in mind my I recommend that you wear clothes that reflect your personality and that are comfortable.  You don’t want to be worrying about loose straps or undergarments showing etc.  The more comfortable you are, the more your true personality will show in your smile and facial expressions.</p>


      <p>Q: What is the best time of year to schedule my portraits?</p>

      <p>A: Most yearbook images are due around the end of Oct., making June-the beginning of Oct. the best time to schedule your session. If you’re not concerned with an image for your yearbook then it comes down to your preference of a summer, fall, winter or spring look.  With our fabulous session you don’t have to choose, you’ll get a session in the summer/fall and another in the winter or spring so you don’t miss any of your senior year!</p>


      <p>Q: Will I be able to post my images on social media?</p>

      <p>A: Yes!  You will be able to post any image included with your order.</p>


      <p>Q: Can we buy more images later on if we want to?</p>

      <p>A: Absolutely!  Your images will be available for purchase for one year from your reveal session.</p>


      <p>Q: We have relatives that would like to order pictures, is there any way for them to view the images?</p>

      <p>A: Yes, upon your request I will make an online gallery for them to view and order pictures.</p>


      <p>Q: We’d like to get family portraits at the same time, is this possible?</p>

      <p>A: You bet!  You may add a family session at the discounted rate of $30.</p>


      <p>Q: How do we submit the yearbook image?</p>

      <p>A: I will crop your image to your school’s specifications, submit it for you and forward you the confirmation that they’ve received it.</p>


      <p>Q: We can’t decided on a location, do you have any suggestions other than those on your list?</p>

      <p>A: If you provide me with the look, idea or feel that you have in mind for your shoot I’ll be happy to come up with more suggestions for you.</p>
      </div>
      <div className='card-panel' style={footer}>
        <a href="https://www.flipsnack.com/truenorthportraits/true-north-senior-price-menu.html">Pricing</a>
        <a href="https://www.flipsnack.com/truenorthportraits/true-north-senior-magazine.html">Senior Magazine</a>
      </div>
    </div>
  );
}

export default Faq;