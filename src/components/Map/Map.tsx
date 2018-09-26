import * as React from 'react';
import { connect } from 'react-redux';
import { ActionTypes } from '../../Models/EnumTypes/ActionEnumTypes';
import { Types } from '../../Models/MarkerModel';
import './Map.css';

export type State = {
    center: Types.Coords;
    zoom: number;
};
export type Props = {
    initMarkers: Function;
    showLoader: Function;
    setVehicleDetailsPage: Function;
    showDetailsPage: Function;
    hideLoader: Function;
    vehiclesList: Array<Types.Marker>;
};

class Map extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            center: {
                lat: 45.680766,
                lng: 20.534237
            },
            zoom: 6
        };
        this.vehicleClick = this.vehicleClick.bind(this);
    }
    public componentDidMount() {
        if (this.props.vehiclesList && this.props.vehiclesList.length === 0) {
            this.props.showLoader();
            setTimeout(() => {
                this.props.initMarkers(7);
                this.props.hideLoader();
            },         2500);
        }
    }
    public vehicleClick(vehicle: Types.Marker) {
        this.setState({
            center: vehicle.coords
        });
        this.props.setVehicleDetailsPage(vehicle);
        this.props.showDetailsPage();
    }
    public render() {
        return <div className="dashboard__map">OK</div>;
    }
}
// export default Map;

function mapStateToProps(state: any) {
    return {
        vehiclesList: state.vehicles.vehiclesList
    };
}

function mapDispachToProps(dispatch: any) {
    return {
        initMarkers: (userId: string) => {
            dispatch({
                type: ActionTypes.Marker.INITIALIZE_MARKERS,
                payload: {
                    userId
                }
            });
        },
        showDetailsPage: () => {
            dispatch({
                type: ActionTypes.ViewManagement.SHOW_DETAILS_PANEL
            });
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispachToProps
)(Map);
