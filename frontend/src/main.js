import React from 'react';
import './style.scss';
import Category from './Category'
import ItemList from './ItemList'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        flag : -1
    }
}
onCatChange = (val) => {
  console.log(val)
  this.setState({flag:val})
}
  render(){
    return (
      <div>
        <Category onChange={this.onCatChange}/>
        <ItemList flag={this.state.flag}/>
      </div>
    )
  }
}

export default App;
