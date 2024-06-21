import { SavedData } from "./actionTypes"

export const setSavedData = (payload) =>
{
    return{
        type : SavedData,
        value : payload,
    }
}