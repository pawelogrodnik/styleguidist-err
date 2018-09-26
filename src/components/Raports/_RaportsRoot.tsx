import * as React from 'react';
import { Route } from 'react-router-dom';
import * as Dictionary from '../../Models/Dictionary';
import { PageEnumTypes } from '../../Models/EnumTypes/PageEnumTypes';

const Raports = () => <h1>Raporty</h1>;

class RaportsRoot extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <div>
                <Route exact path={Dictionary.PageUrl.get(PageEnumTypes.Page.CARRAPORT)} component={Raports} />
                <Route exact path={Dictionary.PageUrl.get(PageEnumTypes.Page.FLEETRAPORT)} component={Raports} />
                <Route exact path={Dictionary.PageUrl.get(PageEnumTypes.Page.DRIVERRAPORT)} component={Raports} />
            </div>
        );
    }
}
export default RaportsRoot;
