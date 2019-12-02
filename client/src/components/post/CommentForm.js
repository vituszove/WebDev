import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";
const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState("");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        addComment(postId, { text });
        setText("");
      }}
    >
      <div className="input-field col s12 posting-area">
        <textarea
          id="textarea"
          className="materialize-textarea"
          placeholder="Tell me what your think about this post.."
          onChange={e => setText(e.target.value)}
          value={text}
        ></textarea>
        <input
          type="submit"
          className="btn-large right "
          value="Comment"
          style={{ marginBottom: "1rem" }}
        />
      </div>
    </form>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(null, { addComment })(CommentForm);
