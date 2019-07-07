// import images from "../../assets/images.json";
import {ImageSourcePropType} from "react-native";
import {ADD_PLACE, DELETE_PLACE, DESELECT_PLACE, SELECT_PLACE} from "../actions/actionTypes";

export type TPlace = {
    key: number
    name: string
    image?: ImageSourcePropType
}

export interface IPlacesState {
    places: TPlace[]
    selectedPlace: TPlace | null
}

function uid() {
    return Math.random();
}

const initionalState: IPlacesState = {
    selectedPlace: null,
    places: [
        'Moscow', 'London', 'Paris',
    ].map(name => ({key: uid(), name
        // , image: {uri: images.bali}
    }))
};

const reducer = (state = initionalState, action: any) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: uid(),
                    name: action.placeName,
                    // image: {uri: images.bali}
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(({key}) => key !== state.selectedPlace!.key),
                selectedPlace: null
            };
        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find(({key}) => key === action.placeKey) || null
            };
        case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: null
            };
        default :
            return state
    }
};

export default reducer;
