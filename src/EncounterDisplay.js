/*EncounterDisplay: Displays a textarea at the bottom of the screen. The textarea can be filled with monster stat blocks.
Those stat blocks can then be copy/pasted from the textarea into a document. */

import React, { Component } from 'react';

class EncounterDisplay extends Component {
  
  render() {

    return (
      <div className="Encounter__div App--line-break">
        <textarea className="Encounter__textarea" value={this.props.selectedMonsters}></textarea>
      </div>
    );
  }
}

export default EncounterDisplay;