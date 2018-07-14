import React, { Component, Fragment } from 'react';
import './styles/app.scss';
import ReactDOM from 'react-dom';
import CSSBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CSSBaseline />
        {/* Insert rest of the application here */}
      </Fragment>
    );
  }
}

export default App;
