import { ActionTypes } from '../EnumTypes/ActionEnumTypes';
import { Types } from './../ViewManagementModel';
export type ToggleSidebarMenu = {
    type: ActionTypes.ViewManagement.TOGGLE_SIDEBAR_MENU;
};

export type ShowLoader = {
    type: ActionTypes.ViewManagement.SHOW_LOADER;
};

export type HideLoader = {
    type: ActionTypes.ViewManagement.HIDE_LOADER;
};

export type ToggleDetailsPanel = {
    type: ActionTypes.ViewManagement.TOGGLE_DETAILS_PANEL;
};

export type ShowDetailsPanel = {
    type: ActionTypes.ViewManagement.SHOW_DETAILS_PANEL;
};

export type HideDetailsPanel = {
    type: ActionTypes.ViewManagement.HIDE_DETAILS_PANEL;
};
export type SetActivePage = {
    type: ActionTypes.ViewManagement.SET_ACTIVE_PAGE;
    payload: Types.Page;
};

export type ViewsManagemenetAction = ToggleSidebarMenu | ShowLoader | HideLoader | ShowDetailsPanel | HideDetailsPanel | ToggleDetailsPanel | SetActivePage;
