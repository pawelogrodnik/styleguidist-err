import * as fromMarkersReducer from './MarkersReducers';
import * as fromUserReducer from './UserReducers';
import * as fromViewManagementReducers from './ViewManagementReducers';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export type RootState = {
    vehicles: fromMarkersReducer.State;
    user: fromUserReducer.State;
    viewManagement: fromViewManagementReducers.State;
};

const rootReducer = combineReducers<RootState>({
    vehicles: fromMarkersReducer.markersReducer,
    user: fromUserReducer.userReducer,
    viewManagement: fromViewManagementReducers.viewManagementReducer,
    router: routerReducer
} as any);

export default rootReducer;
