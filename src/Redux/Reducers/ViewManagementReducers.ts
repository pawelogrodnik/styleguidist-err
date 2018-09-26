import { Types } from '../../Models/ViewManagementModel';
import { ActionTypes } from '../../Models/EnumTypes/ActionEnumTypes';
import { ViewsManagemenetAction } from '../../Models/ActionModels/ViewsManagementActionModel';

export type State = Types.ViewManagement;

export const initialState: State = {
    sidebarMenuExpanded: false,
    loaderVisible: false,
    detailsPanelVisible: false
};

export function viewManagementReducer(state: State = initialState, action: ViewsManagemenetAction) {
    switch (action.type) {
        case ActionTypes.ViewManagement.TOGGLE_SIDEBAR_MENU: {
            return {
                ...state,
                sidebarMenuExpanded: !state.sidebarMenuExpanded
            };
        }
        case ActionTypes.ViewManagement.SHOW_LOADER: {
            return {
                ...state,
                loaderVisible: true
            };
        }
        case ActionTypes.ViewManagement.HIDE_LOADER: {
            return {
                ...state,
                loaderVisible: false
            };
        }
        case ActionTypes.ViewManagement.TOGGLE_DETAILS_PANEL: {
            return {
                ...state,
                detailsPanelVisible: !state.detailsPanelVisible
            };
        }
        case ActionTypes.ViewManagement.SHOW_DETAILS_PANEL: {
            return {
                ...state,
                detailsPanelVisible: true
            };
        }
        case ActionTypes.ViewManagement.HIDE_DETAILS_PANEL: {
            return {
                ...state,
                detailsPanelVisible: false
            };
        }
        case ActionTypes.ViewManagement.SET_ACTIVE_PAGE: {
            return {
                ...state,
                activePage: action.payload
            };
        }
        default: {
            return state;
        }
    }
}
