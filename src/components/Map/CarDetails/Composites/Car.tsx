import * as React from 'react';
import { connect } from 'react-redux';
import { Types } from './../../../../Models/MarkerModel';

export type Props = {
    title: string;
    vehicleData?: Types.Marker;
};

class Car extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }
    public render() {
        return <h2>{this.props.title}</h2>;
    }
}
function mapStateToProps(state: any) {
    return {
        vehicleData: state.vehicles.activeVehicleDetails
    };
}

export default connect<{}, {}, Props>(mapStateToProps)(Car) as React.ComponentClass<Props>;
