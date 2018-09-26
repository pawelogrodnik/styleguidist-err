import { ActionTypes } from './../../Models/EnumTypes/ActionEnumTypes';
import * as MarkerActionModel from './../../Models/ActionModels/MarkerActionModel';
import * as MarkerModel from './../../Models/MarkerModel';

function addMarker(color: string, description: string): MarkerActionModel.AddMarkerAction {
    return {
        type: ActionTypes.Marker.ADD_MARKER,
        payload: {
            color,
            description
        }
    };
}

function removeMarker(index: number, id: number): MarkerActionModel.RemoveMarkerAction {
    return {
        type: ActionTypes.Marker.REMOVE_MARKER,
        payload: {
            index,
            id
        }
    };
}

function initializeMarkers(userId: string): MarkerActionModel.InitializeMarkersAction {
    return {
        type: ActionTypes.Marker.INITIALIZE_MARKERS,
        payload: {
            userId
        }
    };
}

function setDetailsForVehile(vehicle: MarkerModel.Types.Marker): MarkerActionModel.SetDetailsForVehicleView {
    return {
        type: ActionTypes.Marker.SET_DETAILS_FOR_VEHILE_VIEW,
        payload: {
            vehicle
        }
    };
}

export { removeMarker, addMarker, initializeMarkers, setDetailsForVehile };
