import * as UserModel from '../UserModel';
import { ActionTypes } from '../EnumTypes/ActionEnumTypes';

export type LogInUserAction = {
    type: ActionTypes.User.LOG_IN;
    payload: UserModel.Types.UserLogIn;
};

export type LogOutUserAction = {
    type: ActionTypes.User.LOG_OUT;
    payload: UserModel.Types.UserLogOut;
};

export type UserAction = LogOutUserAction | LogInUserAction;
