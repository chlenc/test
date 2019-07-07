import {ADD_PLACE, DELETE_PLACE, DESELECT_PLACE, SELECT_PLACE} from "./actionTypes";


export const addPlace = (placeName: string) => ({
    type: ADD_PLACE,
    placeName
});

export const deletePlace = () => ({
    type: DELETE_PLACE,
});

export const selectPlace = (placeKey: number) => ({
    type: SELECT_PLACE,
    placeKey
});

export const deselectPlace = () => ({
    type: DESELECT_PLACE,
});
