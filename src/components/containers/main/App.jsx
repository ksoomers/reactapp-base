import React, { Component } from 'react';
// import DefaultAdd from '../../../actions/DefaultAdd';
import './App.scss';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            finishedLoading: false,
        };
    }

    // dispatchAction (input) {
    //     switch (input) {
    //         case "PLUS":
    //             this.props.store.dispatch(DefaultAdd());
    //             break;
    //     }
    // }

    render(){
        // const message = process.env.WELCOME_MSG;
        // const stateProps = this.props.store.getState();
        // console.log(stateProps);

        return (
            <div className="App">
                Test
            </div>
        );
    }
}

export default App;
