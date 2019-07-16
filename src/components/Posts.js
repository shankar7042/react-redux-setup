import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPost } from "../actions/postActions";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postsItems = this.props.posts.map(post => {
      return (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p> {post.body} </p>
        </div>
      );
    });
    return (
      <div>
        <h1>Posts</h1>
        {postsItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(
  mapStateToProps,
  { fetchPost }
)(Posts);
