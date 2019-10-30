import React from 'react';
import Todos from './components/Todos.jsx';
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {

    //have a string that cuts the datapoint here, and in the get request
    //below, have it access a specific item number ex: data{item}
    //where item is the URL that gets passed in from the server
    var productID = window.location.pathname.split('/');
	  var lastSegment = productID.pop() || productID.pop();
    axios.get(`http://localhost:4002/api/${lastSegment}/#`)
    .then(response =>{
      this.setState({ data: response.data});
      console.log(this.state.data)
    })
  }  

  render() {
     if(this.state.data[0]){
          return (
            <div>
              <Todos todo = {this.state.data}/>
            </div>
          )
     }else{
              return <div>Rendering to Browser</div>
          }
      }
  }
export default App;
