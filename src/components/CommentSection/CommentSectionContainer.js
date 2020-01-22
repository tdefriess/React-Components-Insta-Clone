// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  console.log('comment container', props.comments)
  const [comments] = useState(props.comments);

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {
        comments.map(com => {
          return <Comment comment={com} />
        })
      }
      <CommentInput />
    </div>
  );
};

export default CommentSection;
