import React, { Component } from 'react'
import '../css/style.css'

export default class counter extends Component {
  // colorChange = () => {
  //   if (this.props.counter.value > 0) {
  //     return 'badge badge-warning number'
  //   } else {
  //     return 'badge badge-secondary number'
  //   }
  // }

  formatStatus = () => {
    if (this.props.counter.active) {
      return `far fa-circle icon-status ${this.iconColor()}`
    } else {
      return `fas fa-circle icon-status ${this.iconColor()}`
    }
  }

  disableButton = () => {
    if (this.props.counter.active) {
      return true
    } else {
      return false
    }
  }

  disableIcon = () => {
    if (this.props.counter.active) {
      return { pointerEvents: 'none' }
    }
  }

  opacityChange = () => {
    if (this.props.counter.active) {
      return 0.6
    }
  }

  bgColor = () => {
    if (this.props.counter.colourId === 1) return '#fd61c8'
    if (this.props.counter.colourId === 2) return '#ffbbf6'
    if (this.props.counter.colourId === 3) return '#99f3fe'
    if (this.props.counter.colourId === 4) return '#61b2fd'
    if (this.props.counter.colourId === 5) return '#87ffb0'
    if (this.props.counter.colourId === 6) return '#ac87ff'
  }

  iconColor = () => {
    if (this.props.counter.colourId === 1) return 'icon-dark-pink'
    if (this.props.counter.colourId === 2) return 'icon-light-pink'
    if (this.props.counter.colourId === 3) return 'icon-blue'
    if (this.props.counter.colourId === 4) return 'icon-dark-blue'
    if (this.props.counter.colourId === 5) return 'icon-green'
    if (this.props.counter.colourId === 6) return 'icon-purple'
  }

  inputState = () => {
    if (this.props.counter.textVisible) {
      return (
        <span
          className='textCounter'
          style={this.disableIcon()}
          onClick={() => this.props.handleVisibility(this.props.counter)}
        >
          {this.props.counter.textValue}
        </span>
      )
    } else {
      return (
        <input
          type='text'
          maxlength='30'
          className='text-input-box'
          onBlur={() => this.props.handleVisibility(this.props.counter)}
          onChange={e => this.props.handleTextChange(this.props.counter, e)}
          autoFocus
          disabled={this.disableButton()}
        />
      )
    }
  }

  render() {
    return (
      <div
        className='counterHolder p-4'
        style={{
          background: this.bgColor(counter),
          opacity: this.opacityChange()
        }}
      >
        <div>{this.inputState()}</div>

        <div className='p-3'>
          <span
            className={`fas fa-plus-circle addsub p-2 mr-2 ${this.iconColor()}`}
            style={this.disableIcon()}
            onClick={() => this.props.increment(this.props.counter)}
            // disabled={this.disableButton()}
          />
          <span className='number' style={this.disableIcon()}>
            {this.props.counter.value}
          </span>
          {/* <button
            className='btn btn-primary btn-sm m-1'
            onClick={() => this.props.multiInc(this.props.counter)}
            disabled={this.disableButton()}
          >
            <i className='fas fa-angle-double-up icons' />
          </button> */}
          <span
            className={`fas fa-minus-circle addsub p-2 ml-2 ${this.iconColor()}`}
            style={this.disableIcon()}
            onClick={() => this.props.decrement(this.props.counter)}
            // disabled={this.disableButton()}
          />

          {/* <button
            className='btn btn-primary btn-sm m-1'
            onClick={() => this.props.multiDec(this.props.counter)}
            disabled={this.disableButton()}
          >
            <i className='fas fa-angle-double-down icons' />
          </button> */}
        </div>
        <div>
          <i
            className={`fas fa-sync-alt icon-reset ${this.iconColor()}`}
            style={this.disableIcon()}
            onClick={() => this.props.reset(this.props.counter)}
            // disabled={this.disableButton()}
          />
          <i
            className={`fas fa-trash icon-trash ${this.iconColor()}`}
            style={this.disableIcon()}
            onClick={() => this.props.delete(this.props.counter.id)}
            // disabled={this.disableButton()}
          />
          <i
            className={this.formatStatus()}
            onClick={() => this.props.handleChecked(this.props.counter)}
          />
        </div>
      </div>
    )
  }
}
