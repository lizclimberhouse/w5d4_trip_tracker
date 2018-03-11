import React from 'react';

class Adventure extends React.Component {
  state = { 
    edit: false,
    name: this.props.name,
   }

  handleEdit = () => {
    // debugger
    let edit = this.state.edit
    this.setState({ edit: !edit });
  }

  handleSave = (e) => {
    // debugger
    e.preventDefault();
    // debugger
    const {name} = this.state
    // debugger
    this.props.updateAdventure(this.props.id, name); //NameAdventure(this.props.id, this.state.name);
    // this.setState({ name: '' })
  }

  handleEditing = (e) => {
    // debugger
    this.setState({ name: e.target.value });
  }

  render() {
    const {edit} = this.state;
    const {id, name, taken, deleteAdventure, updateAdventure} = this.props;

    if (edit) {
      return (
        <div className="col s12">
          <div className="col m8">
            Editing...{name}...
          </div>
          <div className="col m2">
            <input id={`trip-${id}`} type="text" value={this.state.name} onChange={this.handleEditing} />
            <label htmlFor={`trip-${id}`}>New Adventure Name</label>
          </div>
          <div
            style={ styles.pointer } className="col m1" onClick={ this.handleSave } >
            [Save]
          </div>
        </div>

      )
    }
    else {
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
              onClick={() => updateAdventure(id, name)}
              />
            <label htmlFor={`trip-${id}`}>Taken?</label>
          </div>
          <div style={ styles.pointer } className="col m1" onClick={() => deleteAdventure(id) }>
            [X]
          </div>
          <div
            style={ styles.pointer } className="col m1" onClick={() => this.handleEdit(id) } >
            [Edit]
          </div>
        </div>
      )
    } 
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
