import React from 'react';

class Child4 extends React.Component {
    render() {
        return (
            <>
                <h1>child4</h1>
                <pre>Print parent bool object child 4: {this.props.input1}</pre>
            </>
        )
    }
}

export default Child4