export namespace Types {
    export type Marker = {
        code: string;
        caption: string;
        mileage: number;
        driver: string;
        country: string;
        allowedSpeed: number;
        currentSpeed: number;
        plateNo: string;
        fuel: number;
        address: string;
        id: string;
        display_src: any;
        coords: Coords;
    };
    export type Coords = {
        lat: number;
        lng: number;
    };
    export type AddMarker = {
        color: string;
        description: string;
    };

    export type RemoveMarker = {
        id: number;
        index: number;
    };
}
