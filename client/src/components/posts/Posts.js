import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../actions/post";
import Spinner from "../layout/Spinner";
import PostItem from "./PostItem";
import PostForm from "./PostForm";
const Posts = ({ getPosts, post: { loading, posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="container">
        {" "}
        <h3 className="teal-text">Posts</h3>
        <h5>
          <i className="material-icons left ">forum</i>WebDev Community
        </h5>
        <PostForm />
        {posts.map(post => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  post: state.post
});
export default connect(mapStateToProps, { getPosts })(Posts);
