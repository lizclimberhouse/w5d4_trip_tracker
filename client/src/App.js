import React, { Component } from 'react';
import AdventureForm from './components/AdventureForm';
import AdventureList from './components/AdventureList';

class App extends Component {
  state = { adventures: [    
    { id: 0, name: "California", taken: false },
    { id: 1, name: "Vegas", taken: false },
  ] }

  componentDidMount() {
    // TODO make a call to out rails server to get trips
    fetch('/api/trips')
      .then( res => res.json() )
      .then( adventures => this.setState({ adventures }) )
  }

  addTrip = (name) => {
    //TODO make api call to rails server to add Trip
    // const { adventures } = this.state;
    // //TODO update state
    // const id = Math.floor(( 1 + Math.random()) * 0x1000).toString()
    // this.setState({ adventures: [...adventures, { id, name }] });
    let trip = { name };
    fetch('/api/trips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(trip)
    }).then( res => res.json() )
      .then( adventure => {
        const { adventures } = this.state;
        this.setState({ adventures: [...adventures, adventure] });
    })
  }

  updateAdventure = (id, name) => {
    //TODO make api call to update Adventure
    //TODO update state
    // let adventures = this.state.adventures.map( t => {
    //   if (t.id === id)
    //     return { ...t, taken: !t.taken }
    //   return t;
    // });
    // this.setState({ adventures });
    // debugger
    let trip = { name };
    fetch(`/api/trips/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'applicaton/jason',
        'Accept': 'aaplication/json',
      },
      body: JSON.stringify(name)
     })
     .then( res => res.json() )
      .then(trip => {
      const { adventures } = this.state;
      this.setState({ adventures: adventures.filter( t => t.id !== id ) })
      })
  }

  // updateNameAdventure = (id, name) => {
  //   // debugger
  //   fetch(`/api/trips/${id}`, { method: 'PUT' })
  //     .then( res => res.json() )
  //     .then( trip => {
  //       let adventures = this.state.adventures.map( t => {
  //         if (t.id === id)
  //           return trip
  //         return t;
  //       });
  //       this.setState({ adventures });
  //     })
  // }

  deleteAdventure = (id) => {
    //TODO make api call to delete adventure
    //TODO remove it from state
    // const { adventures } = this.state;
    // this.setState({ adventures: adventures.filter( t => t.id !== id) })
    fetch(`/api/trips/${id}`, { method: 'DELETE' })
      .then( () => {
        const { adventures } = this.state;
        this.setState({ adventures: adventures.filter( t => t.id !== id ) })
      })
  }

  render() {
    return (
      <div className="container">
        <AdventureForm addTrip={this.addTrip} />
        <AdventureList
          adventures={this.state.adventures}
          // updateNameAdventure={this.updateNameAdventure}
          updateAdventure={this.updateAdventure}
          deleteAdventure={this.deleteAdventure}
        />
      </div>
    );
  }
}

export default App;
