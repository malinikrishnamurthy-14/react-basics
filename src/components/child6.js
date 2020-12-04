import React from 'react';

class Child6 extends React.Component {
    //array reduce
    render() {
        const likesarray = this.props.input1.map((object, key) => (object.likes));
        return (
            <>
                <h1>Reduce</h1>
                <pre>Print reduce output: {likesarray.reduce((morelikes, object) => {
                  
                    console.log(`${morelikes} > ${object} = ${morelikes > object}`);
                    if (morelikes > object) {
                        return morelikes
                    } else {
                        return object
                    }
                }
                )}</pre>
            </>
        )
    }
}

export default Child6