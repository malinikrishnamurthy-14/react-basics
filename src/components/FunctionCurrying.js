import React from 'react';

class FunctionCurrying extends React.Component {

    //function with 3 args
    sum = (a, b, c) => (a + b + c)

    //using function currying concept
    sumnew = (a) => {
        return ((b) => {
            return ((c) => (a + b + c))
        })
    }

    render() {
        return (
            <>
            <h1>Function with 3 args: {this.sum(1, 2, 3)}</h1>
            <h1>FunctionCurrying: {this.sumnew(10)(20)(30)}</h1>
            </>
        )
    }
}

export default FunctionCurrying;