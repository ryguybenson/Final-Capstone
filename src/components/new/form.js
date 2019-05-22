import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createForm } from '../../store/actions/formActions'
import { Redirect } from 'react-router-dom'

class CreateForm extends Component {

  state = {
    answerOne: '',
    answerTwo: '',
    answerThree: '',
    answerFour: '',
    answerFive: '',
    answerSix: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createForm(this.state);
    this.props.history.push('/faq');
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signout' />
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <div>
          <p>How do you plan on enjoying your portraits (you may change your mind at anytime, it just gives me a better idea of what types of images to create for you)?</p>
          <input type='text' id='answerOne' onChange={this.handleChange} placeholder='Text'/>
          </div>
          <div>
            <p>Describe your personality in as many adjectives as are fitting (shy, fun, outgoing, athletic, girly girl, guys guy, jokester, laid back, studious, sweet, obnoxious, loud, nature lover, urban, introvert, extrovert, home body, rule follower, adventurous, etc...)</p>
            <input type='text' id='answerTwo' onChange={this.handleChange} placeholder='Text'/>
          </div>
          <div>
            <p>Please let me know your preferred locations fot the shoot or what type of location/background you would like (urban, river, meadow, trees, brick wall, your yard, sports field, your school, barn, junk yard, bridge, etc...)</p>
            <input type='text' id='answerThree' onChange={this.handleChange} placeholder='Text'/>
          </div>
          <div>
            <p>Please provide a brief description of the outfits you'll be wearing. A couple things to leep in mind when selecting yout outfits:
              <br/>
              *Select outfits that you're comfortable in; you dont want to be worrying about straps that won't stay in place or other wardrobe issues.
              <br/>
              *Select clothes that best reflect your personality and dont forget accessories!
            </p>
            <input type='text' id='answerFour' onChange={this.handleChange} placeholder='Text'/>
          </div>
          <div>
            <p>Will you be bringing any props with you (sports equipment, and instrument, books, a pet, family or friends, etc...)</p>
            <input type='text' id='answerFive' onChange={this.handleChange} placeholder='Text'/>
          </div>
          <div>
            <p>Please describe or attach pics of poses that you love and share any other thoughts and desires you have for your shoot</p>
            <input type='text' id='answerSix' onChange={this.handleChange} placeholder='Text'/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createForm: (form) => dispatch(createForm(form))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm)