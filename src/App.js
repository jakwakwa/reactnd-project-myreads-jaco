import React, { Component } from 'react';
import './styles/app.scss';
import ReactDOM from 'react-dom';
import CSSBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CSSBaseline />
        {/* Insert rest of the application here */}
      </React.Fragment>
    );
  }
}

export default App;
