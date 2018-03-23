/*monster-select: An app to help tabletop RPG writers quickly generate classic-style monster statlines when writing
encounters for Old-School Revival projects. The output evokes the look of 1970s and early 1980s-era Dungeons & Dragons
books without plagiarizing anything.

This is a proof of concept app, though it's actually functional at the moment. I'll probably use it if I ever do any
indie or freelance writing for OSR products, though.

This isn't an especially responsive app because I can't imagine anyone using this with a small mobile device. It should still work for them,
but it's not really the intented use.*/

/*App: Standard component. This one happens to own all the states in the overall app, since the branches of components below this aren't
very deep and don't need any states of their own.*/

import React, { Component } from 'react';
import EncounterDisplay from './EncounterDisplay.js';
import MonsterButtons from './MonsterButtons.js';
import MonsterChecklist from './MonsterChecklist.js';

import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.monsterAdd = this.monsterAdd.bind(this);
    this.monsterClear = this.monsterClear.bind(this);
    this.humanoidChange = this.humanoidChange.bind(this)
    this.undeadChange = this.undeadChange.bind(this)
    this.beastChange = this.beastChange.bind(this)
    this.outsiderChange = this.outsiderChange.bind(this)

    this.state = {
      selectedMonsters: "",
      showHumanoid: true,
      showUndead: true,
      showBeast: true,
      showOutsider: true
    };
    
  };

  /*xChange: Various setstate functions that change the linked showX state. Used for toggling whether particular monsters appear on the list.  */
  humanoidChange(showHumanoid) {
    this.setState({showHumanoid: showHumanoid})
  }


  undeadChange(showUndead) {
    this.setState({showUndead: showUndead})
  }

  beastChange(showBeast) {
    this.setState({showBeast: showBeast})
  }

  outsiderChange(showOutsider) {
    this.setState({showOutsider: showOutsider})
  }

  /*monsterAdd: Adds a specified monster and associated statistics to the output textarea.  */
  
  monsterAdd(monsterName, monsterStats) {
    var completeMessage = "";
    /*Adds a line break before any monsters after the first.
    I could have added a line break after every line instead, but that would always mean an unnecessary line break at the end.
    Since that would be a mild hassle for writers using this, I did it this way instead.*/
    if (this.state.selectedMonsters === "") {
        //nothing here right now, this space reserved for future formatting options if we want the first line to have special content
      }
    else {
        completeMessage = this.state.selectedMonsters + "\n"
    }      
    
    completeMessage += monsterName + ": " + monsterStats;

    this.setState({selectedMonsters: completeMessage});
  };
  
  /*monsterClear: Erases everything in the textarea. */
  monsterClear() {
    this.setState({selectedMonsters: ""});
};
  
  render() {
    return (
      <div className="App">
        <header className="App--header">
          <h1 className="App--title">Monster Select</h1>
        </header>
        <div className="App--intro">
          <MonsterChecklist 
            showHumanoid={this.state.showHumanoid} showUndead={this.state.showUndead} showBeast={this.state.showBeast} showOutsider={this.state.showOutsider}
            humanoidChange={this.humanoidChange} undeadChange={this.undeadChange} beastChange={this.beastChange} outsiderChange={this.outsiderChange} />
          <MonsterButtons monsterAdd={this.monsterAdd} monsterClear={this.monsterClear}
            showHumanoid={this.state.showHumanoid} showUndead={this.state.showUndead} showBeast={this.state.showBeast} showOutsider={this.state.showOutsider} />
          <EncounterDisplay
            selectedMonsters={this.state.selectedMonsters} />
        </div>
      </div>
    );
  }
}

export default App;