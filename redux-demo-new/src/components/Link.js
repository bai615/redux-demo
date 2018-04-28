import React from 'react';

class Link extends React.Component {
    render() {
        const {active, children, onClick} = this.props;
        if (active) {
            return <span>{children}</span>
        }
        return (
            <a
                href="javascript:;"
                onClick={e => {
                    e.preventDefault();
                    onClick()
                }}
            >
                {children}
            </a>
        );
    }
}

export default Link;