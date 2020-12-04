export const increment = (value) => {
    return {
        type: 'INCREMENT',
        value
    }
}

export const decrement = (value) => {
    return {
        type: 'DECREMENT',
        value
    }
}

export const add = (value1, value2) => {
    return {
        type: 'ADD_TWO_NUMBERS',
        value1,
        value2
    }
}

export const subtract = (value1, value2) => {
    return {
        type: 'SUBTRACT_TWO_NUMBERS',
        value1,
        value2
    }
}

export const multiply = (value1, value2) => {
    return {
        type: 'MULTIPLY_TWO_NUMBERS',
        value1,
        value2
    }
}

export const divide = (value1, value2) => {
    return {
        type: 'DIVIDE_TWO_NUMBERS',
        value1,
        value2
    }
}
