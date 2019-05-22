export const createForm = (form) => {

  return (dispatch, getState, {getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile
    const authorId = getState().firebase.auth.uid
    firestore.collection('form').add({
      ...form,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_FORM_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_FORM_ERROR' }, err);
    });
  }
};