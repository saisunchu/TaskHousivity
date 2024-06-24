import {SavedData, UpdatedData} from '../actions/actionTypes';

let Initialstate = {
  saveddata: [],
  updatedata: [],
};
const Reducers = (state = Initialstate, action) => {
  console.log('Inside Reducer Fn');
  switch (action.type) {
    case SavedData:
      return {
        ...state,
        saveddata: action.value,
      };
    case UpdatedData:
      return {
        ...state,
        updatedata: action.value,
      };
    default:
      return state;
  }
};
export default Reducers;
