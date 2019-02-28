import React, { Component } from 'react';
// import DefaultAdd from '../../../actions/DefaultAdd';
import '../../../skeleton/skeleton.scss';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finishedLoading: false,
    };
  }

  // dispatchAction(input) {
  //   switch (input) {
  //     case 'PLUS':
  //       this.props.store.dispatch(DefaultAdd());
  //       break;
  //   }
  // }

  render() {
    // const message = process.env.WELCOME_MSG;
    // const stateProps = this.props.store.getState();
    // console.log(stateProps);

    return (
            <div className="container">
              <p>
                <h2>Welcome</h2>
                Welcome to <code>ReactApp Base</code>. Use this basic setup to build your application on.
                The application includes fully configured files for;
                <ul>
                  <li>React (Duh...)</li>
                  <li>Babel</li>
                  <li>Webpack</li>
                  <li>ESLint</li>
                  <li>SASS</li>
                  <li>Jest</li>
                  <li>Skeleton CSS (SASS version)</li>
                </ul>
              </p>
            </div>
    );
  }
}

export default App;
