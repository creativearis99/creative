import React, { Component } from 'react';
import ProjectsConsumer from '../../api/projects/consumer';
import List from '../List';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ProjectsConsumer render={(props) => (
                <div>
                    <h3>
                        projects
                    </h3>
                    <List loading={props.loading} data={props.data} />
                </div>
            )}
            />
        );
    }
}

export default Container;
