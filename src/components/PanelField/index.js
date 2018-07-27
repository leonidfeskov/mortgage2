import React, { Component } from 'react';
import Input from '../Input';


export default class PanelField extends Component {
    render() {
        const { label, hint, appendText, inputProps } = this.props;
        return (
            <div className="form-group">
                <label title={hint}>{label}:</label>
                <div className="input-group">
                    <Input {...inputProps} />
                    <span className="input-group-append">
                        <span className="input-group-text">{appendText}</span>
                    </span>
                </div>
            </div>
        )
    }
}
