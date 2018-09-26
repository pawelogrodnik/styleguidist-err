import * as React from 'react';
import { Route } from 'react-router-dom';
import * as Dictionary from '../Models/Dictionary';
import { PageEnumTypes } from '../Models/EnumTypes/PageEnumTypes';
import * as ViewManagementModel from '../Models/ViewManagementModel';
import { ActionTypes } from '../Models/EnumTypes/ActionEnumTypes';
import { connect } from 'react-redux';

const Home = () => <h1>Strona główna</h1>;

export type Props = {
    initializeActivePage: Function;
    location: any;
    viewManagement: ViewManagementModel.Types.ViewManagement;
};
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
class App extends React.Component<Props, any> {
    constructor(props: any) {
        super(props);
    }
    public componentDidMount() {
        const URL = this.props.location.pathname;
        const currentPageName = Dictionary.PageUrlReverse.get(URL);
        if (currentPageName) {
            const currentPageDetails = Dictionary.PageDetails.get(currentPageName);
            this.props.initializeActivePage(currentPageDetails);
        }
    }
    public render() {
        return (
            <div className="main--wrapper">
                <div className="main--inner">
                    <Route exact path={Dictionary.PageUrl.get(PageEnumTypes.Page.HOME)} component={Home} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return state;
}
function mapDispachToProps(dispatch: any) {
    return {
        initializeActivePage: (page: ViewManagementModel.Types.Page) =>
            dispatch({
                type: ActionTypes.ViewManagement.SET_ACTIVE_PAGE,
                payload: page
            })
    };
}
/**
 * Główny komponent aplikacji z ustawieniami routingu i szablonu HTML
 */
export default connect(
    mapStateToProps,
    mapDispachToProps
)(App);
