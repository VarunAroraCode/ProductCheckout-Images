import React from 'react';
import Checkout from './Checkout.jsx';

class CheckoutList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  render() {
    return (
      <div>
        {this.props.items.map((element) => {
          return (
            <Checkout item ={element} key={items._id} />
          )
        })}
      </div>
    )
  }
}

export default CheckoutList;