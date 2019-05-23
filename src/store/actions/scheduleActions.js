export const createSchedule = (schedule) => {

  return (dispatch, getState, {getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile
    const authorId = getState().firebase.auth.uid
    firestore.collection('schedules').add({
      ...schedule,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_SCHEDULE_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_SCHEDULE_ERROR' }, err);
    });
  }
};