import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, decrement, add, subtract, multiply, divide } from '../actions/mathActions';

const MathOperations = ({
    result = 0,
    increment,
    decrement,
    add,
    subtract,
    multiply,
    divide
}) => {

    let input_value = React.createRef();
    let input_value_1 = React.createRef();
    let input_value_2 = React.createRef();
    return (
        <>
            <h1>Math Operations</h1>
            <div>
                <h2>Increment/Decrement</h2>
                <div>
                    <input ref={input_value}></input>
                    <button onClick={() => {
                        console.log(" on click inc");
                        increment(input_value.current.value);
                    }}>+</button>
                    <button onClick={() => decrement(10)}>-</button>
                </div>

            </div>

            <div>
                <h2>Basic Operations</h2>
                <div>
                    <input ref={input_value_1}></input>
                    <input ref={input_value_2}></input>
                    <button onClick={() => add(input_value_1.current.value, input_value_2.current.value)}>add</button>
                    <button onClick={() => subtract(input_value_1.current.value, input_value_2.current.value)}>sub</button>
                    <button onClick={() => multiply(input_value_1.current.value, input_value_2.current.value)}>mul</button>
                    <button onClick={() => divide(input_value_1.current.value, input_value_2.current.value)}>div</button>
                </div>

            </div>

            <h2>Result: {result ? result : ""}</h2>

        </>


    )
}

// returns the entire state
const mapStateToProps = (state) => {
    return {
        result: state.mathReducer.result
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            increment,
            decrement,
            add,
            subtract,
            multiply,
            divide
        },
        dispatch
    );
};


//connect takes two arg first has 2 funcs second is the compoenent where it needs to connect
export default connect(mapStateToProps, mapDispatchToProps)(MathOperations)