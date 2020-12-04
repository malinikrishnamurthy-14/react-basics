import React from 'react';

class Child8 extends React.Component {

    //pass data from child to parent through callback function
    render() {
        return (
            <>
            <button onClick={() => (this.props.onsayhelloChange("2"))}>+</button>
            <button onClick={() => (this.props.onsayhelloChange("1"))}>-</button>
            <h1>child8 - Update parent from child 8 {this.props.input1}</h1>
            </>
        )
    }
}

export default Child8;