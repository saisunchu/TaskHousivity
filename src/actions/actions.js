import { SavedData, UpdatedData } from "./actionTypes"

export const setSavedData = (payload) =>
{
    return{
        type : SavedData,
        value : payload,
    }
}

export const setUpdatedData = (payload) =>
    {
        return{
            type : UpdatedData,
            value : payload,
        }
    }