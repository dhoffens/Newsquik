import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchVideos } from '../actions/index';
import { fetchArticles } from '../actions/index';
import { bindActionCreators } from 'redux';


class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }

  handleChange(event) {
    this.setState({
      term: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.fetchVideos(this.state.term);
    this.props.fetchArticles(this.state.term);
    this.setState({ term: ''});
  }


  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.handleSubmit.bind(this)}>
          <input
            className="form-control"
            type="text"
            placeholder="Search News"
            value={this.state.term}
            onChange={this.handleChange.bind(this)}
          />
          
          <span className="input-group-btn"><button type="submit" className="btn btn-secondary">Submit</button></span>
        </form>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVideos, fetchArticles }, dispatch);
}

export default connect (null, mapDispatchToProps) (SearchBar)
