const initState = {

  forms: [
    {id: '2', answerOne: 'fdgsd', answerTwo: 'fdgf', answerThree: 'gfsdg'},
    {id: '2', answerOne: 'fdgsd', answerTwo: 'fdgf', answerThree: 'gfsdg'},
    {id: '2', answerOne: 'fdgsd', answerTwo: 'fdgf', answerThree: 'gfsdg'},
  ]
}

const formReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_FORM_SUCCESS':
      console.log('create form success');
      return state;
    case 'CREATE_FORM_ERROR':
      console.log('create form error');
      return state;
    default:
      return state;
  }
};

export default formReducer;