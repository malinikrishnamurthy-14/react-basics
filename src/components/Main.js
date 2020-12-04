import React from 'react';
import Child1 from './child1';
import Child2 from './child2';
import Child3 from './child3';
import Child4 from './child4';
import Child5 from './child5';
import Child6 from './child6';
import Child7 from './child7';
import Child8 from './child8';
import Main1 from './Main1';
import FunctionCurrying from './FunctionCurrying';

import sampledata from '../data/data';

class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            sayHello: "1"
        }
    }

    onsayhelloChange(value){
        this.setState({
            sayHello: value
        })
    }

    childtoparent = () => {
        if(this.state.sayHello === "1"){
            return <h1>hello</h1>
        }else{
            return <h1>bye</h1>
        }
    };

    render() {
        const parentdataarray = [ "main", "1"];
        const parentdataobject = {
            name: "Main_Name",
            key: 100,
            main: "true"
        };
        const parentdatabool = "false";
        const parentdatanumber = 1;
        const parentarrayofobjects = [{
            name: "Main_Name_1 ",
            key: 200,
            main: "true"
        }, {
            name: "Main_Name_2 ",
            key: 400,
            main: "false"
        }];

        return (
            <>
                <h1>1. Display value in parent/main component</h1>
                <pre>Print Parent Array data in Main Component: {parentdataarray}</pre>
                <pre>Print Parent Object data in Main Component: {parentdataobject.name}</pre>
                <pre>Print Parent Object data in Main Component: {parentdataobject.key}</pre>
                <pre>Print Parent Object data in Main Component: {parentdataobject.main}</pre>
                <pre>Print Parent bool data in Main Component: {parentdatabool}</pre>
                <pre>Print Parent number data in Main Component: {parentdatanumber}</pre>
                <pre>Print Parent array of objects data in Main Component: {parentarrayofobjects.map((object, key) => (object.name))}</pre>         
                
                <hr></hr>
                <h1>2. Pass data from parent to child</h1>
                <Child1 input1={parentdataarray}/>
                <Child2 input1={parentdataobject}/>
                <Child3 input1={parentdatabool}/>
                <Child4 input1={parentdatanumber}/>
                <Child5 input1={parentarrayofobjects}/>

                <hr></hr>
                <h1>3. Learn array functions</h1>
                <Child6 input1={sampledata}/>
                <Child7 input1={sampledata}/>
                
                <hr></hr>
                <h1>4. Pass value from child to parent</h1>
                {this.childtoparent()}
                <Child8 input1={this.state.sayHello} onsayhelloChange={this.onsayhelloChange.bind(this)}/>
                
                <hr></hr>
                <h1>5. Function currying</h1>
                <FunctionCurrying />

                {/* <hr></hr>
                <h1>Main1: Pass state to deep level hierarchy</h1>
                <Main1 input1={parentdataarray} input2={parentdataobject}  input3={parentdatabool}  input4={parentdatanumber}  input5={parentarrayofobjects}/>
                <Main1 input1={parentdataarray} input2={parentdataobject}  input3={parentdatabool}  input4={parentdatanumber}  input5={parentarrayofobjects}>{this.props.children}</Main1> */}
            </>
        )
    }
}

export default Main;