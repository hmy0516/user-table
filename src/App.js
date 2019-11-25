import React, {PureComponent } from 'react';
import { Input ,Button } from 'antd';
import Tables from './Table'
import Modals from './Modals'
import './App.css';


const { Search } = Input;
class App extends PureComponent  {
  constructor(props){
    super(props);
    this.state={
      showModal: false,
      itemInfo: null
    }
  }
  
  addSource=()=> {
    this.setState({
        showModal: true
    })
  }
  closeModal(status) {
    this.setState({
        showModal: status
    })
  }
  render() {
      return (
        
          <div className="App">
              <Search
                placeholder="input search name"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
              />
              <Button type="primary" onClick={this.addSource}>添加</Button>
              <Tables></Tables>
              {this.state.showModal ? (<Modals numbs={this.state.itemInfo} visible={this.state.showModal} fromSon={status => {
                    this.closeModal(status)
                }}/>) : null}
          </div>
        
      );
  }
}

export default App;
