import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogsContainer from './HogsContainer';
import hogs from '../porkers_data';

class App extends Component {
  state = {
    hogList: hogs,
    filterOn: false,
    sorted: false
  }

  toggleFilter = () => {
    this.setState({
      filterOn: !this.state.filterOn
    })
  }

  toggleSort = () => {
    this.setState({
      sorted: !this.state.sorted
    })
  }

  transformHogsArray = () => {
    let hogList = [...this.state.hogList];
    if (this.state.filterOn) {
      hogList = this.state.hogList.filter(hog => hog.greased)
    }

    if (this.state.sorted) {
      hogList = hogList.sort((hogA, hogB) => 
        hogA.name > hogB.name ? 1 : -1
      )
    }

    return hogList
  }

  render() {

    return (
      <div className="App">
        < Nav />
        <button onClick={this.toggleFilter}>Show Greasy Only</button>
        <button onClick={this.toggleSort}>Sort By Name</button>
        <HogsContainer hogList={this.transformHogsArray()} />
      </div>
    )
  }
}

export default App;
