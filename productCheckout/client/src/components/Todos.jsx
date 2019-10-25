import React from 'react';
//import axios from 'axios';


class Todos extends React.Component{
constructor(props){
  super(props);
//   this.state = {
//     id: null,
//     itemName: null,
//     price: null,
//     description: null,
//     colors: null,
//     inventory: null,
//     views: null,
//     shippingCost: null
//   }
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
                <span>({Math.floor(Math.random()*50)})</span>
              </div>
              <div>
                <h1 className="itemName">{this.props.todo[0].itemName}</h1>
              </div>
              <section>
                <h2 className="brandName"><span>{this.props.todo[0].brandName}</span></h2>
              </section>
              <div>
                <section>
                  <span><strong>{this.props.todo[0].price}</strong></span>
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
                    <div className="dropDown">
                        <button>
                            <span><strong>Size</strong></span>
                            <span>\/</span>
                        </button>
                    </div>
                    <aside>
                      <a>
                        <span className="sizeGuide">Size guides</span>
                      </a>
                    </aside>
                    <div className="dropDown">
                        <button>
                            <span><strong>Color</strong></span>
                            <span style={{marginLeft: '50px', textAlign:'center'}}>\/</span>
                        </button>
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
                  <input type = 'number' aria-label = 'quantity' maxLength='2' max='99' min='1' required value='1'></input>
                  </span>
                  <span className="viewing">
                    <strong>{this.props.todo[0].views}</strong> people are viewing</span>
                </div>
              </div>
              <div>
                <div>
                  <button className="bagButton">
                    <span>add to bag</span>
                  </button>
                </div>
              </div>
              <div>
                <span>
                  <div>
                    <a>
                      <span>Add To Wish List</span>
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
