import React from 'react';

class Child7 extends React.Component {  
    //array filter
    render() {
        const inputarray = this.props.input1.map((value, key) => (value.source));
        const filteroutput = inputarray.filter((object) => (object[0] === "t"));
        return (
            <>
                <h1>Filter</h1>
                <pre>Print filter output: {filteroutput}</pre>
            </>
        )
    }
}

export default Child7