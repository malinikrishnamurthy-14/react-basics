import React from 'react';

class Child5 extends React.Component {
    //array map
    render() {
        return (
            <>
                <h1>child5</h1>
                <pre>Print parent array of objects child 5: {this.props.input1.map((object, key) => (object.name))}</pre>
            </>
        )
    }
}

export default Child5