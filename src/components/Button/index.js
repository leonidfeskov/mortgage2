import React, { Component }  from 'react';
import classnames from 'classnames';


export default class Button extends Component {
    render() {
        const { kind, type, onClick, children } = this.props;
        return (
            <button className={classnames('btn', {
                [`btn-${kind}`]: kind
            })}
                    type={type ? type : 'button'}
                    onClick={onClick}>
                {children}
            </button>
        )
    }
}
