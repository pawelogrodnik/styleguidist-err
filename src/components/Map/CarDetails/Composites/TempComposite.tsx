import * as React from 'react';

export type Props = {
    title: string;
};

class TempComposite extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }
    public render() {
        return <h2>{this.props.title}</h2>;
    }
}

export default TempComposite;
