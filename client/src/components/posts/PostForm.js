import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";
const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        addPost({ text });
        setText("");
      }}
    >
      <div className="input-field col s12 posting-area">
        <textarea
          id="textarea"
          className="materialize-textarea"
          placeholder="Type here to say something..."
          onChange={e => setText(e.target.value)}
          value={text}
        ></textarea>
        <input
          type="submit"
          className="btn-large right"
          value="Post"
          style={{ marginBottom: "1rem" }}
        />
      </div>
    </form>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(PostForm);
