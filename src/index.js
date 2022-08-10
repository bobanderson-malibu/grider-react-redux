import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message})
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div> Error: {this.state.errorMessage} </div>
      );
    } else if (!this.state.errorMessage && this.state.lat) {
      return (
        <SeasonDisplay lat={this.state.lat} />
      );
    } else if (!this.state.errorMessage && !this.state.lat) {
      return (
        <div> <Spinner message="Please accept location request"/></div>
      )
    }
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
     );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);