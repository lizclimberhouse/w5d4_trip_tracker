import React from 'react';

class Adventure extends React.Component {
  state = { edit: '' }

  
  editAdventure = (id) => {
    debugger
    let adventures = this.state.adventures.map( t => {
      if (t.id === id)
        return { ...t, taken: !t.taken }
      return t;
    });
    this.setState({ adventures });
  }

  render() {
    return (
      <div className="col s12">
        <div className="col m8">
          <div style={ taken ? styles.complete : {} } className="center">
            {name}
          </div>
        </div>
        <div className="col m2">
          <input
            id={`trip-${id}`}
            type="checkbox"
            defaultChecked={taken}
            onClick={() => updateAdventure(id)}
            />
          <label htmlFor={`trip-${id}`}>Taken?</label>
        </div>
        <div style={ styles.pointer } className="col m1" onClick={() => deleteAdventure(id) }>
          [X]
        </div>
        <div
          style={ styles.pointer } className="col m1" onClick={() => editAdventure(id) } >
          [Edit]
        </div>
      </div>
    )
  }
}

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey'
  },
  pointer: { cursor: 'pointer'}
}
// const Adventure = ({ id, taken, name, updateAdventure, deleteAdventure, updateNameAdventure }) => (
  
  // )
  
  export default Adventure;
  
  
//   id={`trip-${id}`} 
//   onClick={() => updateNameAdventure(id)>
