import { ActionTypes } from '../../Models/EnumTypes/ActionEnumTypes';
import { MarkerAction } from '../../Models/ActionModels/MarkerActionModel';
import { Types } from '../../Models/MarkerModel';
import fakeMarkers from '../../fakeMarkers';

export type State = {
    vehiclesList: Array<Types.Marker>;
    activeVehicleDetails?: Types.Marker;
};

export const initialState: State = {
    vehiclesList: [],
    activeVehicleDetails: undefined
};

export function markersReducer(state: State = initialState, action: MarkerAction) {
    switch (action.type) {
        case ActionTypes.Marker.ADD_MARKER: {
            return {
                ...state
            };
        }
        case ActionTypes.Marker.REMOVE_MARKER: {
            return {
                ...state
            };
        }
        case ActionTypes.Marker.INITIALIZE_MARKERS: {
            return {
                ...state,
                vehiclesList: fakeMarkers
            };
        }
        case ActionTypes.Marker.SET_DETAILS_FOR_VEHILE_VIEW: {
            return {
                ...state,
                activeVehicleDetails: action.payload.vehicle
            };
        }
        default: {
            return {
                ...state
            };
        }
    }
}
