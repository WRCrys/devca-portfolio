import React, { Component } from 'react'
import './styles/console.css'
import folder from '../../assets/folder-logo.svg'

class Console extends Component {
  render() {
    return (
      <div className="main">
        <div className="title">
          <div className="close-button"></div>
          <div className="minimize-button"></div>
          <div className="maxmize-button"></div>
          <img src={folder} className="folder-title" alt=""/>
          <label className="console-title">DevCrystyanoAlmeida@user</label>
        </div>
        <div className="black-area">
          <div className="command">
            <h1>{"_> Crystyano Almeida"}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Console