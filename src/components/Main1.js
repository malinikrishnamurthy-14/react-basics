import React from 'react';
import Child1 from './child1';
import Child2 from './child2';
import Child3 from './child3';
import Child4 from './child4';
import Child5 from './child5';

class Main1 extends React.Component {
    render() {
        const input2 = this.props.input2;
        return (
            <>
                <Child1 input1={this.props.input1}>
                    {console.log("child1")}
                    {console.log(`${this.props.input1}`)}
                    <Child2 input1={this.props.input2}>
                        {console.log("child2")}
                        {console.log(`${this.props.input2}`)}
                        <Child3 input1={this.props.input3}>
                            {console.log("child3")}
                            {console.log(`${this.props.input3}`)}
                            <Child4 input1={this.props.input4}>
                                {console.log("child4")}
                                {console.log(`${this.props.input4}`)}
                                <Child5 input1={this.props.input5}>
                                    {console.log("child5")}
                                    {console.log(`${this.props.input5}`)}
                                </Child5>
                            </Child4>
                        </Child3>
                    </Child2>
                </Child1>
            </>
        )
    }
}

export default Main1;