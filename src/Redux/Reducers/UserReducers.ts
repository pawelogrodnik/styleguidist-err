import { Types } from '../../Models/UserModel';
import { ActionTypes } from '../../Models/EnumTypes/ActionEnumTypes';
import { UserAction } from '../../Models/ActionModels/UserActionModel';

export type State = Types.User;

export const initialState: State = { isLogged: false };

export function userReducer(state: State = initialState, action: UserAction) {
    switch (action.type) {
        case ActionTypes.User.LOG_IN: {
            return {
                ...state,
                isLogged: true
            };
        }
        case ActionTypes.User.LOG_OUT: {
            return {
                ...state,
                isLogged: false
            };
        }

        default: {
            return state;
        }
    }
}
