/*MonsterButtons: Checks the MONSTERS constant, creates a bunch of buttons. One per monster, labeled with the monster's name.
It doesn't create buttons for monsters from a certain group if the relevant showHumanoid, showUndead, etc prop is false. The buttons
are in the top half of the screen.
*/

import React, { Component } from 'react';
import MONSTERS from './MONSTERS.js'

class MonsterButtons extends Component {

  render() {
    const buttons = [];
      
    //originally used a MONSTERS.forEach here, but that gave me a _this2 is undefined error no matter what and wasn't worth the hassle

    /*This section cycles through each monster in the MONSTERS constant array and checks to see if that monster is from one of the allowed
    monster groups. If so, it pushes the monster's stats into three arrays that determine what buttons are created.*/

    for (var i = 0; i < MONSTERS.length; i++) {
      const nameList = [];
      const groupList = [];
      const statList = [];
      const allowedGroups = [];
  
      if(this.props.showHumanoid === true) {
        allowedGroups.push("Humanoid")
      }

      if(this.props.showUndead === true) {
        allowedGroups.push("Undead")
      }

      if(this.props.showBeast === true) {
        allowedGroups.push("Beast")
      }

      if(this.props.showOutsider === true) {
        allowedGroups.push("Outsider")
      }

      if (allowedGroups.includes(MONSTERS[i].group)) {
        
        nameList.push(MONSTERS[i].name); //necessary because I can't use MONSTERS[i].name directly without problems; more stable this way
        groupList.push(MONSTERS[i].group);  //this scheme is probably suboptimal but works with a small sample size; can be fixed later
        statList.push(MONSTERS[i].stats);
        buttons.push(<button className="Monster__button" onClick={() => this.props.monsterAdd(nameList, statList)}>{MONSTERS[i].name}</button>)
      }
    }

    return (
      <div className="Monster__button-group">
        {buttons}
        <br /><br />
        <button className="Monster__button" onClick={() => this.props.monsterClear()}>CLEAR MONSTER LIST</button>
      </div>
    );
  }
}

export default MonsterButtons;
