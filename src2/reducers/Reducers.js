import { SavedData } from "../actions/actionTypes";

let Initialstate = {
    saveddata:[],
};
const Reducers = (state = Initialstate, action ) => {
    console.log('Inside Reducer Fn');
    switch(action.type)
    { 
        
        case SavedData : 
        return {
            ...state,
            saveddata: action.value,
        }
        default:
            return state;
    }
    
}
export default Reducers;