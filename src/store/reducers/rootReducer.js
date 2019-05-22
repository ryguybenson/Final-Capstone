import authReducer from './authReducer';
import projectReducer from './projectReducer';
import formReducer from './formReducer';
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  form: formReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer