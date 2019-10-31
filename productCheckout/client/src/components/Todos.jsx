import React from 'react';
//import axios from 'axios';
import '../styles/App.css'
class Todos extends React.Component{
constructor(props){
  super(props);
  this.state = {
    size: 'Size',
    color: 'Color',
    bag: "Add to Bag",
    gift: 'Add to Wish List'
  }
  this.handleSize = this.handleSize.bind(this);
  this.handleColor = this.handleColor.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleClick = this.handleClick.bind(this);
  this.giftClick = this.giftClick.bind(this);
}
handleSize(event) {
  this.setState({size: event.target.value});
  this.setState({bag: "Add to Bag"})
}
handleColor(event){
  this.setState({color: event.target.value})
  this.setState({bag: "Add to Bag"})

}
handleClick() {
  this.setState({bag: 'In Your Bag!'})
}
handleSubmit(event) {
  event.preventDefault();
}
giftClick(){
  this.setState({gift: "Added to your Wish List!"})
}

    render() {
        console.log(this.props.todo)
      return (
        <div className="container">
          <div>
            <div className="productHeader">
              <div>
                <span>
                <img src="https://2.bp.blogspot.com/-FzDfZz-hZDc/WX5qg-fQlHI/AAAAAAAAIPg/_OJNAFND8XoeD-hv6-eDVCXBiHkzNYuowCLcBGAs/s1600/5Stars.jpg" width="80"/>
                </span>
                <span>({this.props.todo[0].views})</span>
              </div>
              <div>
                <h1 className="itemName">{this.props.todo[0].itemName}</h1>
              </div>
              <section>
                <h2 className="brandName"><span>{this.props.todo[0].brandName}</span></h2>
              </section>
              <div>
                <section>
                  <span><strong>${this.props.todo[0].price}</strong></span>
                  <span className="freeShipping"> Free Shipping</span>
                </section>
              </div>
              <div>
                <div className="description">
                {this.props.todo[0].description}
                </div>
              </div>
              <div>
                <div>
                  <span style= {{marginRight: '5px', fontWeight: 700 }}>Fit</span>
                  <span style={{marginrRight: '5px', textAlign:'center'}}>True to size.</span>
                </div>
                <div>
                  <div>
                    <div>
                    <form onSubmit={this.handleSubmit}>
                      <label>
                        <select className="dropDown" value={this.state.size} onChange={this.handleSize}>
                          <option value="Small">Small</option>
                          <option value="Medium">Medium</option>
                          <option value="Large">Large</option>
                        </select>
                      </label>
                      {/* <input type="submit" value="Submit" /> */}
                    </form>
                    </div>
                    <aside>
                      <a>
                        <span className="sizeGuide">Size guides</span>
                      </a>
                    </aside>
                    <div>
                    <form onSubmit={this.handleSubmit}>
                      <label>
                        <select className="dropDown" value={this.state.color} onChange={this.handleColor}>
                          <option value="Navy">Navy</option>
                          <option value="Chestnut">Chestnut</option>
                          <option value="Sunset">Sunset</option>
                          <option value="Crimson">Crimson</option>
                          <option value="Magenta">Magenta</option>
                          <option value="Wine">Wine</option>
                          <option value="Charcoal">Charcoal</option>
                        </select>
                      </label>
                      {/* <input type="submit" value="Submit" /> */}
                    </form>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <ul className='colorOptions'>
                      <li>
                        <button>
                        <img className="_2fvOm" src="https://n.nordstrommedia.com/id/sr3/045be839-6ea8-471f-87f3-a0ce23c6652c.jpeg?crop=fit&amp;w=31&amp;h=31" alt=" Black/Black color"></img>
                        </button>
                      </li>
                      <li>
                        <button>
                        <img className="_2fvOm" src="https://n.nordstrommedia.com/id/sr3/d880bf4a-170f-436e-ac3c-f17044ec5189.jpeg?crop=fit&amp;w=31&amp;h=31" alt=" Brown color"></img>
                        </button>
                      </li>
                      <li>
                        <button>
                        <img className="_2fvOm" src="https://n.nordstrommedia.com/id/sr3/5f1f0c54-704a-457b-9e4d-1b4472addf6a.jpeg?crop=fit&amp;w=31&amp;h=31" alt=" Brown Nubuck color"></img>
                        </button>
                      </li>
                      <li>
                        <button>
                        <img className="_2fvOm" src="https://n.nordstrommedia.com/id/sr3/b8f068e1-fdb7-4366-bd23-a1e44839a09e.jpeg?crop=fit&amp;w=31&amp;h=31" alt=" Grey Suede color"></img>
                        </button>
                      </li>
                      <li>
                        <button>
                          <img className="_2fvOm" src="https://n.nordstrommedia.com/id/sr3/782b1d35-c36c-433d-b61a-075bb8393013.jpeg?crop=fit&amp;w=31&amp;h=31" alt=" Olive Suede color"></img>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <span>
                  <input type = 'number' aria-label = 'quantity' maxLength='2' max="99" min='1' required value='1'></input>
                  </span>
                  <span className="viewing">
                    <strong>{this.props.todo[0].views}</strong> people are viewing</span>
                </div>
              </div>
              <div>
                <div>
                  <button className="bagButton" onClick={this.handleClick}>
                    <span>{this.state.bag}</span>
                  </button>
                </div>
              </div>
              <div>
                <span>
                  <div>
                    <a>
                      <span className="addToWish" onClick={this.giftClick} >{this.state.gift}</span>
                    </a>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
}
export default Todos;
