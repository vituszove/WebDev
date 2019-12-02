import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import moment from "moment";
const PostItem = ({
  auth,
  addLike,
  removeLike,
  deletePost,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions
}) => {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".tooltipped");
      var instances = M.Tooltip.init(elems, { enterDelay: 100 });
    });
  }, []);
  return (
    <div className="post z-depth-1" key={_id}>
      <div className="post-image">
        <Link to={`/profile/${user}`}>
          <img
            src={avatar}
            className="circle"
            style={{
              width: "100px",
              height: "100px",
              border: "4px solid teal"
            }}
            alt="user"
          />
        </Link>
      </div>
      <div className="post-content">
        <p className="post-name teal-text">
          <Link to={`/profile/${user}`}> {name} </Link>
          <span className="date"> posted {moment(date).fromNow()}</span>{" "}
        </p>

        <p>{text}</p>

        {showActions && (
          <Fragment>
            {" "}
            {!auth.loading && user === auth.user._id && (
              <button
                onClick={e => deletePost(_id)}
                type="button"
                className="btn transparent grey-text right z-depth-0"
                style={{ position: "absolute", top: "0", right: "1rem" }}
              >
                <i className="material-icons">close</i>
              </button>
            )}{" "}
            <div className="post-button ">
              <div className="totheleft">
                <button
                  onClick={e => addLike(_id)}
                  className="btn waves-effect waves-light tooltipped white black-text z-depth-0"
                  data-position="bottom"
                  data-tooltip="Like this post"
                >
                  <i className="material-icons teal-text left">thumb_up</i>
                  {likes.length > 0 && <Fragment>{likes.length}</Fragment>}{" "}
                </button>
                <button
                  onClick={e => removeLike(_id)}
                  className="btn waves-effect waves-light tooltipped  transparent z-depth-0"
                  data-position="bottom"
                  data-tooltip="Undo like"
                >
                  <i className="material-icons red-text left">thumb_down</i>
                </button>{" "}
              </div>
              <div className="totheright">
                <Link to={`/posts/${_id}`} className="btn right discussion-btn">
                  <i className="material-icons left ">comment</i>
                  <span className="hide-on-small-only">Discussion</span>
                  {comments.length > 0 && (
                    <span className="white teal-text new-comment ">
                      {" "}
                      {comments.length}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};
PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
