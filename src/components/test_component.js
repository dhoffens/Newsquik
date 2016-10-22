import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/index';
import { Link } from 'react-router';

class ArticlesIndex extends Component {
  componentWillMount() {
    this.props.fetchArticles();
  }

  // renderPosts() {
  //   return this.props.posts.map(post => {
  //     return (
  //       <li className="list-group-item" key={post.id}>
  //         <Link to={`posts/${post.id}`}>
  //           <span className="pull-xs-right">{post.categories}</span>
  //           <strong>{post.title}</strong>
  //         </Link>
  //       </li>
  //     )
  //   })
  // }

  render() {   

    return (
      <div>
        hello
      </div>
    );
  }
}

function mapStateToProps(state){
  return { articles: state.articles.all }
}

//shortcut for mapDispatchToProps below
//and use es6 syntax
export default connect(mapStateToProps, { fetchArticles })(ArticlesIndex);