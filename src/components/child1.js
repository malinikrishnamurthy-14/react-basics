import React from 'react';

class Child1 extends React.Component {
    //pass array from parent to child
    render() {
        return (
            <>
            <h1>child1</h1>
            <pre>Parent data in Child 1: {this.props.input1}</pre>
            </>
        )
    }
}

export default Child1;