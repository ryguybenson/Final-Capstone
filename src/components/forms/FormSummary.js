import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const FormSummary = ({form}) => {
  
  var text = {
    textAlign: 'left'
  }
  var outer = {
    width: '90%',
    margin: 'auto',
    backgroundColor: '#9ED3EB',
    border: '2px solid white'
  }
  
  return (
    <div className="card-panel" style={outer}>
      <div>
        <h2>Your Questionnare Answers</h2>
      </div>
      <div style={text}>
        <p>How do you plan on enjoying your portraits (you may change your mind at anytime, it just gives me a better idea of what types of images to create for you)?</p>
        <p>A: {form.answerOne}</p>
        <p>Describe your personality in as many adjectives as are fitting (shy, fun, outgoing, athletic, girly girl, guys guy, jokester, laid back, studious, sweet, obnoxious, loud, nature lover, urban, introvert, extrovert, home body, rule follower, adventurous, etc...)</p>
        <p>A: {form.answerTwo}</p>
        <p>Please let me know your preferred locations fot the shoot or what type of location/background you would like (urban, river, meadow, trees, brick wall, your yard, sports field, your school, barn, junk yard, bridge, etc...)</p>
        <p>A: {form.answerThree}</p> 
        <p>Please provide a brief description of the outfits you'll be wearing. A couple things to leep in mind when selecting yout outfits:
              <br/>
              *Select outfits that you're comfortable in; you dont want to be worrying about straps that won't stay in place or other wardrobe issues.
              <br/>
              *Select clothes that best reflect your personality and dont forget accessories!
            </p>
        <p>A: {form.answerFour}</p>
        <p>Will you be bringing any props with you (sports equipment, and instrument, books, a pet, family or friends, etc...)</p>
        <p>A: {form.answerFive}</p>
        <p>Please describe or attach pics of poses that you love and share any other thoughts and desires you have for your shoot</p>
        <p>A: {form.answerSix}</p>
      </div>
      <Link to={'/form/' + form.id} key={form.id}>
        <button form={form}>Change</button>
      </Link> 
    </div>
  )
}

export default FormSummary