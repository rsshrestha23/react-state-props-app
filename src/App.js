import React, { Component } from 'react';
import ShowInformation from './components/ShowInformation';

class App extends Component {

  state = {
    name: "abc",
    phone_number: 123456789,
    address: "ktm"
  }

  render() {
   

    return (
      <div>
        <ShowInformation
          full_name={this.state.name}
          phoneNumber={this.state.phone_number}
        />
      </div>

    )
  }


}
export default App;
