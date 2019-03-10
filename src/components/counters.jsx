import React, { Component } from 'react'
import Counter from './counter'

export default class counters extends Component {
  render() {
    return (
      <div className='content'>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            delete={this.props.delete}
            reset={this.props.reset}
            increment={this.props.increment}
            multiInc={this.props.multiInc}
            decrement={this.props.decrement}
            multiDec={this.props.multiDec}
            handleChecked={this.props.handleChecked}
            handleVisibility={this.props.handleVisibility}
            handleTextChange={this.props.handleTextChange}
          />
        ))}
      </div>
    )
  }
}
