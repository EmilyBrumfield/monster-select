/*MonsterChecklist: Displays a checkbox for each monster group. If unchecked, monsters from that group won't appear in the MonsterButtons
section of the screen. */

import React, { Component } from 'react';

class MonsterChecklist extends Component {

    constructor(props) {
        super(props);
        this.humanoidChange = this.humanoidChange.bind(this)
        this.undeadChange = this.undeadChange.bind(this)
        this.beastChange = this.beastChange.bind(this)
        this.outsiderChange = this.outsiderChange.bind(this)
    }

    humanoidChange(e) {
        this.props.humanoidChange(e.target.checked);
    }

    undeadChange(e) {
        this.props.undeadChange(e.target.checked);
    }

    beastChange(e) {
        this.props.beastChange(e.target.checked);
    }

    outsiderChange(e) {
        this.props.outsiderChange(e.target.checked);
    }

    render() {

        const showHumanoid = this.props.showHumanoid;
        const showUndead = this.props.showUndead;
        const showBeast = this.props.showBeast;
        const showOutsider = this.props.showOutsider;

        return (
        <form className="Checklist">
            <input type="checkbox" checked={showHumanoid} onChange={this.humanoidChange} /> Humanoids
            <input type="checkbox" checked={showUndead} onChange={this.undeadChange} /> Undead
            <input type="checkbox" checked={showBeast} onChange={this.beastChange} /> Beasts
            <input type="checkbox" checked={showOutsider} onChange={this.outsiderChange} /> Outsiders
        </form>
        );
  }
}

export default MonsterChecklist;