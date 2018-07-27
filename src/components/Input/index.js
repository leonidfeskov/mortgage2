import React, { Component } from 'react';


export default class Input extends Component {
    state = {
        value: this.props.value || ''
    };

    handlerOnChange = (event) => {
        const value = event.target.value;
        this.setState({value: value});
        this.props.onChange && this.props.onChange({event}, {
            name: this.props.name,
            value: value,
        });
    };

    render() {
        const { value, type, onChange, ...other } = this.props;

        return (
            <input
                {...other}
                className="form-control"
                type={type || 'text'}
                onChange={this.handlerOnChange}
                value={this.state.value}
            />
        )
    }
}
