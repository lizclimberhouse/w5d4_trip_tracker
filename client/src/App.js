import React, { Component } from 'react';
import AdventureForm from './components/AdventureForm';
import AdventureList from './components/AdventureList';

class App extends Component {
  state = { adventures: [    
    { id: 0, name: "California", taken: false },
    { id: 1, name: "Vegas", taken: false },
  ] }

  componentDidMount() {
    //TODO make a call to out rails server to get trips
    // fetch('/api/items')
    //   .then( res => res.json() )
    //   .then( adventures => this.setState({ adventures }) )
  }

  addTrip = (name) => {
    //TODO make api call to rails server to add Trip
    const { adventures } = this.state;
    //TODO update state
    const id = Math.floor(( 1 + Math.random()) * 0x1000).toString()
    this.setState({ adventures: [...adventures, { id, name }] });
  }

  updateAdventure = (id) => {
    //TODO make api call to update Adventure
    //TODO update state
    let adventures = this.state.adventures.map( t => {
      if (t.id === id)
        return { ...t, taken: !t.taken }
      return t;
    });
    this.setState({ adventures });
  }

  updateNameAdventure = (id) => {
    debugger
  }

  deleteAdventure = (id) => {
    //TODO make api call to delete adventure
    //TODO remove it from state
    const { adventures } = this.state;
    this.setState({ adventures: adventures.filter( t => t.id !== id) })
  }

  render() {
    return (
      <div className="container">
        <AdventureForm addTrip={this.addTrip} />
        <AdventureList
          adventures={this.state.adventures}
          updateNameAdventure={this.updateNameAdventure}
          updateAdventure={this.updateAdventure}
          deleteAdventure={this.deleteAdventure}
        />
      </div>
    );
  }
}

export default App;
