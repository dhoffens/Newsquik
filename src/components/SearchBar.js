import React, { Component } from 'react'

export default class SearchInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: ''
    }
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addTodo(this.state.inputText)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Search News"
            value={this.state.inputText}
            onChange={this.handleChange.bind(this)}
          />
          {/* <button onClick={this.handleSubmit.bind(this)}>Submit</button> */}

          <input type="submit" />
        </form>
      </div>
    )
  }

}
