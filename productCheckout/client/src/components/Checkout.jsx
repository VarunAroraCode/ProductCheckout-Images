import React from 'react';

const Checkout = (props) => {
  return (
    <div className="Border container">
      <div className="body box-1">
        <div className="image">
          <img src="https://www.classicplasticstoystore.com/wp-content/uploads/2016/12/question-mark_318-52837.jpg" width="80"/>
        </div>
        <div className="title">{props.item.title}</div>
        <div className="content">{props.item.content}</div>
        <div className="handle">{props.item.handle}</div>
      </div>
    </div>
  )
}

export default Checkout;