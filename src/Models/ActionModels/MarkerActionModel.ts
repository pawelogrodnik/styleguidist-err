import { ActionTypes } from '../EnumTypes/ActionEnumTypes';
import * as MarkerModel from '../MarkerModel';

export type AddMarkerAction = {
    type: ActionTypes.Marker.ADD_MARKER;
    payload: MarkerModel.Types.AddMarker;
};

export type RemoveMarkerAction = {
    type: ActionTypes.Marker.REMOVE_MARKER;
    payload: MarkerModel.Types.RemoveMarker;
};

export type InitializeMarkersAction = {
    type: ActionTypes.Marker.INITIALIZE_MARKERS;
    payload: {
        userId: string;
    };
};
export type SetDetailsForVehicleView = {
    type: ActionTypes.Marker.SET_DETAILS_FOR_VEHILE_VIEW;
    payload: {
        vehicle: MarkerModel.Types.Marker;
    };
};

export type MarkerAction = AddMarkerAction | RemoveMarkerAction | InitializeMarkersAction | SetDetailsForVehicleView;
