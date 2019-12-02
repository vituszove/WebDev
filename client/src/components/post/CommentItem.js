import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteComment } from "../../actions/post";
import moment from "moment";
const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment
}) => {
  return (
    <div className="comment z-depth-1" key={_id}>
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

      <div className="comment-content">
        <p className="comment-title teal-text">
          <Link to={`/profile/${user}`}> {name} </Link>
        </p>
        <span className="comment-date">posted on {moment(date).fromNow()}</span>{" "}
        <p className="user-comment">{text}</p>
      </div>
      {!auth.loading && user === auth.user._id && (
        <button onClick={e => deleteComment(postId, _id)} className="btn red">
          X
        </button>
      )}
    </div>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { deleteComment })(CommentItem);
