export namespace Types {
    export type User = {
        token?: string,
        id?: number,
        isLogged: boolean;
        login?: string;
    }
    export type UserLogIn = {
        login: string,
        password: string
    }
    export type UserLogOut = {
        id: number
    }
}
