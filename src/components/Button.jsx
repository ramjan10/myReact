import React from 'react';

class Button extends React.Component {

    render() {
        const { change, locale, show, event } = this.props;
        return (
            <div>
                <button type="button" onClick={() => change(locale)}>
                    Click here
                </button>
                {show && <p>Show me</p> }
                
            </div>
        );
    }
}

export default Button;