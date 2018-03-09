import React from 'react';
import Adventure from './Adventure';

const AdventureList = ({ adventures, updateAdventure, deleteAdventure, updateNameAdventure }) => (
  <div className="row">
    { adventures.map( adventure =>
      <Adventure
        key={adventure.id}
        {...adventure}
        updateNameAdventure={updateNameAdventure}
        updateAdventure={updateAdventure}
        deleteAdventure={deleteAdventure}
      />  
    )
  }
  </div>
)

export default AdventureList;