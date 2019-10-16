import React from 'react';
import Axios from 'axios';
import CheckoutList from './CheckoutList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: []
    }
  }

//   componentDidMount() {
//     Axios.get('/Checkout')
//       .then((res) => {
//         console.log(res);
//         this.setState({
//           checkout: res.data
//         })
//       })
//   }

  render() {
    return (
      <div>
        <CheckoutList item={this.state.item} />
      </div>
    )
  }
}

export default App;