import { ActionTypes } from './../../Models/EnumTypes/ActionEnumTypes';
import * as UserActionModel from './../../Models/ActionModels/UserActionModel';

function logInUser(login: string, password: string): UserActionModel.LogInUserAction {
    return {
        type: ActionTypes.User.LOG_IN,
        payload: {
            login,
            password
        }
    };
}

function logOutUser(index: number, id: number): UserActionModel.LogOutUserAction {
    return {
        type: ActionTypes.User.LOG_OUT,
        payload: {
            id
        }
    };
}

export { logInUser, logOutUser };
