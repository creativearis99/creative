import React, { Component } from 'react';
import UsersConsumer from '../../api/users/consumer';
import ProjectsConsumer from '../../api/projects/consumer';
import List from '../List';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <UsersConsumer render={(userProps) => (
                <ProjectsConsumer render={(projectProps) => (
                    <div>
                        <h2>
                            projects
                        </h2>
                        <List data={projectProps.data} loading={projectProps.loading} />
                        <h2>
                            users
                        </h2>
                        <List loading={userProps.loading} data={userProps.data} />
                    </div>
                )}
                />
            )}
            />
        );
    }
}

export default Container;
