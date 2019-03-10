import React, { Component } from 'react'

export default class controls extends Component {
  render() {
    const { handleAdd, handleDeleteAll, handleResetAll } = this.props
    return (
      <div className='controls-fixed'>
        <button className='btn btn-controls btn-sm m-1' onClick={handleAdd}>
          Add
        </button>
        <button
          className='btn btn-controls btn-sm m-1'
          onClick={handleDeleteAll}
        >
          Delete All
        </button>
        <button
          className='btn btn-controls btn-sm m-1'
          onClick={handleResetAll}
        >
          Reset All
        </button>
      </div>
    )
  }
}
