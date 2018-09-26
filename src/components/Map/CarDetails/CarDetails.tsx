import * as React from 'react';
import { Types } from './../../../Models/MarkerModel';

export type Props = {
    vehicleData?: Types.Marker;
};
export type State = {};

class CarDetails extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        return <div className="carDetails">CarDetails</div>;
    }
}
export default CarDetails;
