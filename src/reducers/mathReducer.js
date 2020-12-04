export const mathReducer = (state = {}, action) => {
    let input = parseInt(action.value);
    let input1 = parseInt(action.value1);
    let input2 = parseInt(action.value2);
    switch (action.type) {
        case "INCREMENT":
            console.log("inc");
            return {
                ...state,
                result: input + 1
            }
        case "DECREMENT":
            return {
                ...state,
                result: input - 1
            }
        case "ADD_TWO_NUMBERS":
            return {
                ...state,
                result: input1 + input2
            }
        case "SUBTRACT_TWO_NUMBERS":
            return {
                ...state,
                result: input1 - input2
            }
        case "MULTIPLY_TWO_NUMBERS":
            return {
                ...state,
                result: input1 * input2
            }
        case "DIVIDE_TWO_NUMBERS":
            return {
                ...state,
                result: input1 / input2
            }
        default:
            return state;
    }
}

export default mathReducer;
