import { confirmAlert } from 'react-confirm-alert' // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import React, { Component } from 'react'
import './App.css'
import Counters from './components/counters'
import Controls from './components/controls'
const uuidv1 = require('uuid/v1')

class App extends Component {
  state = {
    counters: []
  }

  handleIncrement = counter => {
    let counters = [...this.state.counters]
    let index = counters.indexOf(counter)
    counters[index] = { ...counter }
    if (counters[index].value < 999) {
      counters[index].value++
    }
    this.setState({ counters })
  }

  handleIncrementMultiplier = counter => {
    let counters = [...this.state.counters]
    let index = counters.indexOf(counter)
    counters[index] = { ...counter }
    if (counters[index].value < 994) {
      counters[index].value += 5
    } else {
      counters[index].value = 999
    }
    this.setState({ counters })
  }

  handleDecrement = counter => {
    let counters = [...this.state.counters]
    let index = counters.indexOf(counter)
    counters[index] = { ...counter }
    if (counters[index].value > 0) {
      counters[index].value--
    }
    this.setState({ counters })
  }

  handleDecrementMultiplier = counter => {
    let counters = [...this.state.counters]
    let index = counters.indexOf(counter)
    counters[index] = { ...counter }
    if (counters[index].value >= 5) {
      counters[index].value -= 5
    } else {
      counters[index].value = 0
    }
    this.setState({ counters })
  }

  handleReset = counter => {
    let counters = [...this.state.counters]
    let index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value = 0
    this.setState({ counters })
  }

  handleResetAll = () => {
    let counters = [...this.state.counters]
    if (this.state.counters.length > 0) {
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='confirm-ui'>
              <p className='confirm-text'>Are you sure?</p>
              <button className='btn btn-sm button-confirm' onClick={onClose}>
                No
              </button>
              <button
                className='btn btn-sm button-confirm'
                onClick={() => {
                  for (let i = 0; i < counters.length; i++) {
                    counters[i].value = 0
                  }
                  this.setState({ counters })
                  onClose()
                }}
              >
                Yes
              </button>
            </div>
          )
        }
      })
    }
  }

  handleDelete = id => {
    let counters = this.state.counters.filter(
      EachCounter => EachCounter.id !== id
    )
    this.setState({ counters: counters })
  }

  handleDeleteAll = () => {
    if (this.state.counters.length > 0) {
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='confirm-ui'>
              <p>Are you sure?</p>
              <button className='btn btn-sm button-confirm' onClick={onClose}>
                No
              </button>
              <button
                className='btn btn-sm button-confirm'
                onClick={() => {
                  this.setState({ counters: [] })
                  onClose()
                }}
              >
                Yes
              </button>
            </div>
          )
        }
      })
    }
  }

  randomNum = () => {
    return Math.floor(Math.random() * 6 + 1)
  }

  handleAdd = () => {
    let counters = [...this.state.counters]
    let newId = uuidv1()
    counters.push({
      id: newId,
      value: 0,
      active: false,
      colourId: this.randomNum(),
      textValue: 'Total',
      textVisible: true
    })
    this.setState({ counters: counters })
  }

  handleVisibility = counter => {
    let counters = [...this.state.counters]
    let index = counters.indexOf(counter)
    counters[index] = { ...counter }

    if (counters[index].textVisible && !counters[index].active) {
      counters[index].textVisible = false
    } else {
      counters[index].textVisible = true
    }
    this.setState({ counters })
  }

  handleChecked = counter => {
    let counters = [...this.state.counters]
    let index = counters.indexOf(counter)
    counters[index] = { ...counter }
    //check the state
    //if active is false change to true
    //if active is true change to false
    if (counters[index].active === false) {
      counters[index].active = true
    } else if (counters[index].active === true) {
      counters[index].active = false
    }
    this.setState({ counters })
  }

  handleTextChange = (counter, e) => {
    let newValue = e.target.value
    // console.log(newValue)
    // console.log(counter)
    let counters = [...this.state.counters]
    let index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].textValue = newValue
    this.setState({ counters })
  }

  render() {
    return (
      <div className='App'>
        <Controls
          handleAdd={this.handleAdd}
          handleDeleteAll={this.handleDeleteAll}
          handleResetAll={this.handleResetAll}
        />
        <Counters
          counters={this.state.counters}
          delete={this.handleDelete}
          reset={this.handleReset}
          increment={this.handleIncrement}
          multiInc={this.handleIncrementMultiplier}
          decrement={this.handleDecrement}
          multiDec={this.handleDecrementMultiplier}
          handleChecked={this.handleChecked}
          handleVisibility={this.handleVisibility}
          handleTextChange={this.handleTextChange}
        />
      </div>
    )
  }
}

// export default App
export default DragDropContext(HTML5Backend)(App)
