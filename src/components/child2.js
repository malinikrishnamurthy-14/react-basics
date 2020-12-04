import React from 'react';

class Child2 extends React.Component {
    //pass object from parent to child
    render() {
        return (
            <>
                <h1>child2</h1>
                <pre>Print parent object data in child 2: {this.props.input1.name}</pre>
                <pre>Print parent object data in child 2: {this.props.input1.key}</pre>
                <pre>Print parent object data in child 2: {this.props.input1.main}</pre>
            </>
        )
    }
}

export default Child2;