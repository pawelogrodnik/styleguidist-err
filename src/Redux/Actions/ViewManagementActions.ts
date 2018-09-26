import { ActionTypes } from './../../Models/EnumTypes/ActionEnumTypes';
import * as ViewsManagementModel from '../../Models/ActionModels/ViewsManagementActionModel';

function showLoader(): ViewsManagementModel.ShowLoader {
    return {
        type: ActionTypes.ViewManagement.SHOW_LOADER
    };
}

function hideLoader(): ViewsManagementModel.HideLoader {
    return {
        type: ActionTypes.ViewManagement.HIDE_LOADER
    };
}

function toggleSidebarMenu(): ViewsManagementModel.ToggleSidebarMenu {
    return {
        type: ActionTypes.ViewManagement.TOGGLE_SIDEBAR_MENU
    };
}

function showDetailsPanel(): ViewsManagementModel.ShowDetailsPanel {
    return {
        type: ActionTypes.ViewManagement.SHOW_DETAILS_PANEL
    };
}

function toggleDetailsPanel(): ViewsManagementModel.ToggleDetailsPanel {
    return {
        type: ActionTypes.ViewManagement.TOGGLE_DETAILS_PANEL
    };
}

function hideDetailsPanel(): ViewsManagementModel.HideDetailsPanel {
    return {
        type: ActionTypes.ViewManagement.HIDE_DETAILS_PANEL
    };
}

export { showLoader, hideLoader, toggleSidebarMenu, showDetailsPanel, hideDetailsPanel, toggleDetailsPanel };
