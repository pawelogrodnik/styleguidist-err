import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './../Redux/Store';
import createHistory from 'history/createBrowserHistory';
import { Router, Switch } from 'react-router-dom';
// import './../Sass/style.css';
export const history = createHistory();

export default class Wrapper extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="okej">
                <Provider store={store}>
                    <Router history={history}>
                        <Switch>{this.props.children}</Switch>
                    </Router>
                </Provider>
            </div>
        );
    }
}
