import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import PostItem from "../posts/PostItem";
import { getPost } from "../../actions/post";
import { Link } from "react-router-dom";

import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost]);
  return (
    <section className="container">
      {loading || post === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="bckbtn">
            <Link to="/posts" className="waves-effect waves-light btn">
              <i className="material-icons left">chevron_left</i>Back to Posts
            </Link>
          </div>
          <PostItem post={post} showActions={false} />
          <CommentForm postId={post._id} />
          {post.comments.map(comment => (
            <CommentItem
              key={comment._id}
              comment={comment}
              postId={post._id}
            />
          ))}
        </Fragment>
      )}
    </section>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  post: state.post
});
export default connect(mapStateToProps, { getPost })(Post);
