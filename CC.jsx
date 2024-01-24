import React, { Component } from 'react'

export default class CC extends Component {
    state={
        name:"vishnu",
        age:18
    }
  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <h2>{this.state.age}</h2>
      </div>
    )
  }
}
