import React, { PureComponent }  from 'react';
import { connect } from 'react-redux';


class WarningMessage extends PureComponent {
    render() {
        const { message } = this.props;

        if (message === '') {
            return null;
        } else {
            return <div className="alert alert-danger">{message}</div>;
        }
    }
}

export default connect(
    state => ({
        message: state.warningMessage,
    }),
)(WarningMessage);
