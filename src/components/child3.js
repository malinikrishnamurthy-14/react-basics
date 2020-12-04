import React from 'react';

class Child3 extends React.Component {
    render() {
        return (
            <>
                <h1>child3</h1>
                <pre>Print parent bool object child 3: {this.props.input1}</pre>
            </>
        )
    }
}

export default Child3;